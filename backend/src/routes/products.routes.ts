import { Router } from 'express'
import { uploadController } from '~/controllers/categories.controllers'
import { wrapAsync } from '~/utils/handlers'

const productsRouter = Router()

//upload:
productsRouter.post('/upload', wrapAsync(uploadController))
// productsRouter.get('/all-products', wrapAsync())
export default productsRouter
