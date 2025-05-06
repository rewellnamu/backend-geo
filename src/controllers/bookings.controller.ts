import { Request, Response } from 'express';
import { createBooking } from '../models/booking.model';
import { Booking } from '../models/booking.model';

export const addBooking = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, park_id, date } = req.body;

    if (!name || !email || !park_id || !date) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    const newBooking: Booking = await createBooking({ name, email, park_id, date });
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ error: 'Failed to add booking' });
  }
};
