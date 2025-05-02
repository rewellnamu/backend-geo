import express from 'express';
import { animals } from '../data/animals';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(animals);
});

export default router;
