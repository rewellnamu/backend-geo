import express from 'express';
import { parks } from '../data/parks';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(parks);
});

export default router;
