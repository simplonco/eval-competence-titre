import { Router } from 'express'
import routerBook from './book/routerBook'

const router = Router()

router.use(routerBook)

export default router