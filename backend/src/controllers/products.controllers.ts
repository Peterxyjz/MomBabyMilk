import { NextFunction, Request, Response } from 'express'
import { USERS_MESSAGES } from '~/constants/messages'
import Product from '~/model/schemas/Product.schema'
import productsService from '~/services/products.services'
export const uploadController = async (req: Request, res: Response) => {
  const product = new Product(req.body)
  const result = await productsService.upload(product)
  return res.status(200).json({
    message: USERS_MESSAGES.UPLOAD_SUCCESS,
    result: result
  })
}

// export const getAllController = async (req: Request, res: Response) => {
//     const product = new Product(req.body)
//     const result = await productsService.upload(product)
//     return res.status(200).json({
//       message: USERS_MESSAGES.UPLOAD_SUCCESS,
//       result: result
//     })
//   }
