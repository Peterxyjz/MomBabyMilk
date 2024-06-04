import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import databaseService from '~/services/database.services'
import { validate } from '~/utils/validation'
export const categoryValidator = validate(
  checkSchema(
    {
      category_name: {
        notEmpty: {
          errorMessage: 'tên không được bỏ trống'
        },
        isString: {
          errorMessage: 'Tên phải là chữ'
        },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const category = await databaseService.categories.findOne({
              category_name: value
            })
            if (category === null) {
              throw new Error('đã tồn tại ')
            }
            req.user = category // lưu user vào req để dùng ở loginController
            return true
          }
        }
      },
      description: {
        notEmpty: {
          errorMessage: 'Nội dung không được bỏ trống'
        },
        isString: {
          errorMessage: 'Nội dung phải là chữ'
        }
      }
    },
    ['body']
  )
)
