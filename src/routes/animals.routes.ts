import { Router } from 'express';
import { fetchAnimals } from '../controllers/animals.controller';

const router = Router();
router.get('/', fetchAnimals);

export default router;
