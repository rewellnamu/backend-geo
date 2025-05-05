// src/controllers/park.controller.ts

import { Request, Response } from 'express';
import * as ParkModel from '../models/park.model';

export const getParks = async (req: Request, res: Response) => {
  try {
    const parks = await ParkModel.getAllParks();
    res.json(parks);
  } catch {
    res.status(500).json({ error: 'Failed to fetch parks' });
  }
};

export const getPark = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const park = await ParkModel.getParkById(Number(id));
    if (park) {
      res.json(park);
    } else {
      res.status(404).json({ error: 'Park not found' });
    }
  } catch {
    res.status(500).json({ error: 'Failed to fetch park' });
  }
};

export const create = async (req: Request, res: Response) => {
  const { name, location, description, image_url } = req.body;
  try {
    const newPark = await ParkModel.createPark({ name, location, description, image_url });
    res.status(201).json(newPark);
  } catch {
    res.status(500).json({ error: 'Failed to create park' });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location, description, image_url } = req.body;
  try {
    const updatedPark = await ParkModel.updatePark(Number(id), { name, location, description, image_url });
    res.json(updatedPark);
  } catch {
    res.status(500).json({ error: 'Failed to update park' });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await ParkModel.deletePark(Number(id));
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Failed to delete park' });
  }
};
