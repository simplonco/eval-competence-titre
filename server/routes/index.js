import { Router } from 'express';

import books from '../controller/books';

const router = Router();

router.use('/simplonBook', books);

export default router;
