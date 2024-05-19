import { Router } from 'express'
import { registerController } from '~/controllers/users.controllers'
import { registerValidator } from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/handlers'
const usersRouter = Router()
// usersRouter.post('/login', loginValidator, loginController)

usersRouter.post('/register', registerValidator, wrapAsync(registerController))
//registerValidator là middleware để validate dữ liệu được dùng checkSchema của express-validator
export default usersRouter
