import db from '../config/db'; // adjust the path as needed

export interface Booking {
  id?: number;
  name: string;
  email: string;
  park_id: number;
  date: string;
}

export const createBooking = async (booking: Booking): Promise<Booking> => {
  const { name, email, park_id, date } = booking;
  const result = await db.query(
    'INSERT INTO bookings (name, email, park_id, date) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, park_id, date]
  );
  return result.rows[0];
};
