import { ObjectId } from 'mongodb'
interface ProductType {
  _id?: ObjectId
  brand_id: string
  category_id: string
  product_name: string
  price: number
  description: string
  age: string
  discount: number
  img_base64: string
}

export default class Product {
  _id?: ObjectId
  brand_id: string
  category_id: string
  product_name: string
  price: number
  description: string
  age: string
  discount: number
  img_base64: string
  constructor(product: ProductType) {
    this._id = product._id || new ObjectId() // tự tạo id
    this.brand_id = product.brand_id
    this.category_id = product.category_id
    this.product_name = product.product_name
    this.price = product.price
    this.description = product.description
    this.age = product.age
    this.discount = product.discount
    this.img_base64 = product.img_base64
  }
}
