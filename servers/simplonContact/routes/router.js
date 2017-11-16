import { Router } from 'express'
import routerContact from './contact/routerContact'

const router = Router()

router.use(routerContact)

export default router