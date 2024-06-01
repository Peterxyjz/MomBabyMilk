import { ObjectId } from 'mongodb'
interface CategoryType {
  _id?: ObjectId
  category_name: string
  description: string
}

export default class Category {
  _id?: ObjectId
  category_name: string
  description: string
  constructor(category: CategoryType) {
    this._id = category._id || new ObjectId()
    this.category_name = category.category_name
    this.description = category.description
  }
}
