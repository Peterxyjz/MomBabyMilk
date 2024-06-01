import { Router } from 'express'
import { uploadController } from '~/controllers/brands.controllers'
import { wrapAsync } from '~/utils/handlers'

const brandsRouter = Router()

//upload:
brandsRouter.post('/upload', wrapAsync(uploadController))

export default brandsRouter
