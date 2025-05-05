import { Router } from 'express';
import * as ParkController from '../controllers/parks.controller';

const router = Router();

router.get('/', ParkController.getParks);
router.get('/:id', ParkController.getPark);
router.post('/', ParkController.create);
router.put('/:id', ParkController.update);
router.delete('/:id', ParkController.remove);

export default router;
