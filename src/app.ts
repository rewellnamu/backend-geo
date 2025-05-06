// src/app.ts
import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animals.routes';
import  parkRoutes  from './routes/parks.routes';
import bookingRoutes from './routes/bookings.routes'; // Import the booking routes

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/animals', animalRoutes);
app.use('/api/parks', parkRoutes);
app.use('/api/bookings', bookingRoutes); // Ensure this line is added to include booking routes


export default app;
