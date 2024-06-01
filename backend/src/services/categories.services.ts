import { body } from 'express-validator'
import { ObjectId } from 'mongodb'
import { config } from 'dotenv'
import { USERS_MESSAGES } from '~/constants/messages'
import Category from '~/model/schemas/Category.schema'
import databaseService from './database.services'
config()

class CategoriesService {
  async upload(category: Category) {
    category._id = new ObjectId()
    const result = await databaseService.categories.insertOne(
      new Category({
        _id: category._id,
        ...category
      })
    )
    return result
  }
}
const categoriesService = new CategoriesService()
export default categoriesService
