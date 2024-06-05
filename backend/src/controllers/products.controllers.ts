import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
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

export const getAllController = async (req: Request, res: Response) => {
  const result = await productsService.getAll()
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

export const getController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await productsService.getById(id)
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

//update:
export const updateController = async (req: Request, res: Response) => {
  const id = req.params.id
  const product = new Product(req.body)
  product._id = new ObjectId(id)
  const result = await productsService.update(id, product)
  return res.status(200).json({
    message: USERS_MESSAGES.UPDATE_SUCCESS,
    result: result
  })
}

//notActive:
export const notActiveController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await productsService.notActive(id)
  return res.status(200).json({
    message: USERS_MESSAGES.DELETE_SUCCESS,
    result: result
  })
}
