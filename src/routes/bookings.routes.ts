import { Router } from 'express';
import { Request, Response } from 'express';
import { createBooking } from '../models/booking.model';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, park_id, date } = req.body;
    if (!name || !email || !park_id || !date) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      res.status(400).json({ error: 'Invalid date format' });
      return;
    }

    const newBooking = await createBooking({ name, email, park_id, date: parsedDate.toISOString() });
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});


export default router;
