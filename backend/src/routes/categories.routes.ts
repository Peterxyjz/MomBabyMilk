import { Router } from 'express'
import {
  deleteController,
  getAllController,
  getController,
  updateController,
  uploadController
} from '~/controllers/categories.controllers'
import { wrapAsync } from '~/utils/handlers'

const categoriesRouter = Router()

//upload:
categoriesRouter.post('/upload', wrapAsync(uploadController)) //create
categoriesRouter.get('/all-categories', wrapAsync(getAllController)) //readAll
categoriesRouter.get('/category/:id', wrapAsync(getController)) //readOne
categoriesRouter.patch('/category/:id', wrapAsync(updateController)) //update
categoriesRouter.delete('/category/:id', wrapAsync(deleteController)) //delete
export default categoriesRouter
