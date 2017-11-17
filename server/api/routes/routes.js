import { Router } from 'express';

import contacts from '../controller/contacts';

const router = Router();

router.use('/listeContact', contacts);

export default router;
