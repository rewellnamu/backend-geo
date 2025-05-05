// import express from 'express';
// import cors from 'cors';
// import parksRouter from './routes/parks.routes';
// import animalsRouter from './routes/animals.routes';
// import bookingsRouter from './routes/bookings.routes';

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/parks', parksRouter);
// app.use('/api/animals', animalsRouter);
// app.use('/api/bookings', bookingsRouter);

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });
// src/server.ts
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});