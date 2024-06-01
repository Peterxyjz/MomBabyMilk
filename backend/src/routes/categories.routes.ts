import { Router } from 'express'
import { uploadController } from '~/controllers/categories.controllers'
import { wrapAsync } from '~/utils/handlers'

const categoriesRouter = Router()

//upload:
categoriesRouter.post('/upload', wrapAsync(uploadController))

export default categoriesRouter
