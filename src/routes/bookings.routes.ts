// src/routes/bookings.routes.ts
import { Router, Request, Response } from 'express';
import { bookings, Booking } from '../data/bookings';

const router = Router();

router.post('/', (req: any, res: any) => {
  const { fullName, email, park, date, guests } = req.body;

  if (!fullName || !email || !park || !date || !guests) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newBooking: Booking = { fullName, email, park, date, guests };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

router.get('/', (_req: Request, res: Response) => {
  res.json(bookings);
});

export default router;
