import { Router } from 'express'
import {
  uploadController,
  deleteController,
  getAllController,
  getController,
  updateController
} from '~/controllers/brands.controllers'
import { wrapAsync } from '~/utils/handlers'

const brandsRouter = Router()

//upload:
brandsRouter.post('/upload', wrapAsync(uploadController))
brandsRouter.get('/all-brands', wrapAsync(getAllController)) //readAll
brandsRouter.get('/brand/:id', wrapAsync(getController)) //readOne
brandsRouter.patch('/brand/:id', wrapAsync(updateController)) //update
brandsRouter.delete('/brand/:id', wrapAsync(deleteController)) //delete
export default brandsRouter
