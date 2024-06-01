import { NextFunction, Request, Response } from 'express'
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
