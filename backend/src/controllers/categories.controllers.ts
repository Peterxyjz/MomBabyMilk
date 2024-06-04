import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/messages'
import Category from '~/model/schemas/Category.schema'
import categoriesService from '~/services/categories.services'
export const uploadController = async (req: Request, res: Response) => {
  const category = new Category(req.body) // lấy category từ req
  const result = await categoriesService.upload(category)
  
  return res.status(200).json({
    message: USERS_MESSAGES.UPLOAD_SUCCESS,
    result: result
  })
}

export const getAllController = async (req: Request, res: Response) => {
  const result = await categoriesService.getAll()
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

export const getController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await categoriesService.getById(id)
  return res.status(200).json({
    message: USERS_MESSAGES.GET_SUCCESS,
    result: result
  })
}

export const updateController = async (req: Request, res: Response) => {
  const id = req.params.id
  const category = new Category(req.body)
  category._id = new ObjectId(id)
  const result = await categoriesService.update(id, category)
  return res.status(200).json({
    message: USERS_MESSAGES.UPDATE_SUCCESS,
    result: result
  })
}

export const deleteController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await categoriesService.delete(id)
  return res.status(200).json({
    message: USERS_MESSAGES.DELETE_SUCCESS,
    result: result
  })
}
