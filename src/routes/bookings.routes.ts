// src/routes/bookings.routes.ts
import { Router, Request, Response } from 'express';
import { bookings, Booking } from '../data/bookings';

const router = Router();


router.get('/', (_req: Request, res: Response) => {
  res.json(bookings);
});

export default router;
