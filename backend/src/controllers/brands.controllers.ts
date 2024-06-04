import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/messages'
import Brand from '~/model/schemas/Brand.schema'
import brandsService from '~/services/brands.services'

export const uploadController = async (req: Request, res: Response) => {
  const brand = new Brand(req.body) // lấy category từ req
  const result = await brandsService.upload(brand)
  return res.status(200).json({
    message: USERS_MESSAGES.UPLOAD_SUCCESS,
    result: result
  })
}

export const getAllController = async (req: Request, res: Response) => {
  const result = await brandsService.getAll()
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

export const getController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await brandsService.getById(id)
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

export const updateController = async (req: Request, res: Response) => {
  const id = req.params.id
  const brand = new Brand(req.body)
  brand._id = new ObjectId(id)
  const result = await brandsService.update(id, brand)
  return res.status(200).json({
    message: USERS_MESSAGES.UPDATE_SUCCESS,
    result: result
  })
}

export const deleteController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await brandsService.delete(id)
  return res.status(200).json({
    message: USERS_MESSAGES.DELETE_SUCCESS,
    result: result
  })
}
