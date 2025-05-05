// src/app.ts
import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animals.routes';
import  parkRoutes  from './routes/parks.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/animals', animalRoutes);
app.use('/api/parks', parkRoutes);


export default app;
