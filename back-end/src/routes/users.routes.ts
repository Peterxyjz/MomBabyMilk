import { Router } from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

import { loginController } from '~/controllers/users.controllers'
usersRouter.post('/login', loginValidator, loginController)

export default usersRouter
