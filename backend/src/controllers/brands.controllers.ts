import { NextFunction, Request, Response } from 'express'
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
