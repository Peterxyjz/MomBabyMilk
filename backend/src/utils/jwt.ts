import jwt from 'jsonwebtoken'
//privateKey là password để được quyền tạo chữ ký jwt
import { config } from 'dotenv'
import { TokenPayload } from '~/model/requests/User.requests'
config()
export const signToken = ({
  payload,
  privateKey,
  options = { algorithm: 'HS256' }
}: {
  payload: string | object | Buffer
  privateKey: string
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}
//
// hàm kiểm tra token có phải của mình tạo ra ko
//nếu có thì trả ra payload
// không thì ... ném lỗi
export const verifyToken = ({ token, secretOrPublicKey }: { token: string; secretOrPublicKey: string }) => {
  return new Promise<TokenPayload>((resolve, reject) => {
    jwt.verify(token, secretOrPublicKey, (error, decoded) => {
      if (error) throw reject(error)
      resolve(decoded as TokenPayload)
    })
  })
}
