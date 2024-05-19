import User from '~/model/schemas/User.schema'
import databaseService from './database.services'
import { RegisterReqBody } from '~/model/requests/User.requests'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enums'
import Role from '~/model/schemas/Role.schema'
import { ObjectId } from 'mongodb'
import { config } from 'dotenv'
config()
class UsersService {
  private signAccessAndRefreshToken(user_id: string) {
    return Promise.all([this.signAccessToken(user_id), this.signRefreshToken(user_id)])
  }
  private signAccessToken(user_Id: string) {
    return signToken({
      payload: { user_Id, token_type: TokenType.AccessToken },
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN }
    })
  }
  private signRefreshToken(user_Id: string) {
    return signToken({
      payload: { user_Id, token_type: TokenType.RefreshToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN }
    })
  }
  async register(payload: RegisterReqBody) {
    const role = await databaseService.roles.findOne({ role_name: 'Member' })
    const roleId = role?._id?.toString() || ''
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        password: hashPassword(payload.password),
        role_id: roleId
      })
    )
    //insertOne sẽ trả về 1 object, trong đó có thuộc tính insertedId là user_Id của user vừa tạo
    //vì vậy ta sẽ lấy user_Id đó ra để tạo token
    const user_Id = result.insertedId.toString()
    // const accessToken = await this.signAccessToken(user_Id)
    // const refreshToken = await this.signRefreshToken(user_Id)
    //nên viết là thì sẽ giảm thời gian chờ 2 cái này tạo ra
    const [access_token, refresh_token] = await this.signAccessAndRefreshToken(user_Id)
    //đây cũng chính là lý do mình chọn xử lý bất đồng bộ, thay vì chọn xử lý đồng bộ
    //Promise.all giúp nó chạy bất đồng bộ, chạy song song nhau, giảm thời gian
    //user_id ta có là string, mà trong database thì user_id là ObjectId
    //nên ta không truyền là user_id: user_id, mà là user_id: new ObjectId(user_id)
    return { access_token, refresh_token }
    //ta sẽ return 2 cái này về cho client
    //thay vì return user_Id về cho client
  }
  async checkEmailExist(email: string) {
    //vào database tìm xem có hông
    const user = await databaseService.users.findOne({ email })
    return Boolean(user) //có true, k false
  }
}

const usersService = new UsersService()
export default usersService
