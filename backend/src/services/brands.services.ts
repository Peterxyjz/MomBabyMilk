import { body } from 'express-validator'
import { ObjectId } from 'mongodb'
import { config } from 'dotenv'
import { USERS_MESSAGES } from '~/constants/messages'
import databaseService from './database.services'
import Brand from '~/model/schemas/Brand.schema'
config()

class BrandsService {
  async upload(brand: Brand) {
    brand._id = new ObjectId()
    const result = await databaseService.brands.insertOne(
      new Brand({
        _id: brand._id,
        ...brand
      })
    )
    return result
  }
}
const brandsService = new BrandsService()
export default brandsService
