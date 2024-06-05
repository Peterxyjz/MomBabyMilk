import { Router } from 'express'
import {
  getAllController,
  getController,
  notActiveController,
  updateController,
  uploadController
} from '~/controllers/products.controllers'
import { wrapAsync } from '~/utils/handlers'

const productsRouter = Router()

productsRouter.post('/upload', wrapAsync(uploadController))
productsRouter.get('/all-products', wrapAsync(getAllController))
productsRouter.get('/product/:id', wrapAsync(getController))
productsRouter.patch('/product/:id', wrapAsync(updateController))
productsRouter.patch('/product/:id', wrapAsync(notActiveController))

export default productsRouter
