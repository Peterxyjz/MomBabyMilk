import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { body } from 'express-validator'
import sendMail from '~/helper/send.mail'
import { RegisterReqBody } from '~/model/requests/User.requests'
import User from '~/model/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
import { generateEmailTemplate } from '~/helper/emailTemplate'
import { USERS_MESSAGES } from '~/constants/messages'
import { ObjectId } from 'mongodb'
//login:

//register:
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const verificationLink = 'https://www.facebook.com/huy.lequang.91712'
  const emailHtml = generateEmailTemplate(req.body.username, verificationLink)
  await sendMail({
    email: req.body.email,
    subject: 'Email Verification Mail',
    html: emailHtml
  })
  const result = await usersService.register(req.body) // thay luôn
  console.log(result)
  return res.status(400).json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    result: result
  })
}
