import { body } from 'express-validator'
import { ObjectId } from 'mongodb'
import { config } from 'dotenv'
import { USERS_MESSAGES } from '~/constants/messages'
import databaseService from './database.services'
import Product from '~/model/schemas/Product.schema'
config()

class ProductsService {
  async upload(product: Product) {
    product._id = new ObjectId()
    const result = await databaseService.products.insertOne(
      new Product({
        _id: product._id,
        ...product
      })
    )
    return result
  }
}
const productsService = new ProductsService()
export default productsService
