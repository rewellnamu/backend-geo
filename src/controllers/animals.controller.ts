import { Request, Response } from 'express';
import { getAllAnimals } from '../models/animal.model';

export const fetchAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await getAllAnimals();
    res.json(animals);
  } catch {
    res.status(500).json({ error: 'Failed to fetch animals' });
  }
};
