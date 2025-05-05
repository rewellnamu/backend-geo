import pool from '../config/db';
import { Park } from '../types/types';

export const getAllParks = async (): Promise<Park[]> => {
  const res = await pool.query('SELECT * FROM parks');
  return res.rows;
};

export const getParkById = async (id: number): Promise<Park | null> => {
  const res = await pool.query('SELECT * FROM parks WHERE id = $1', [id]);
  return res.rows[0] || null;
};

export const createPark = async (park: Omit<Park, 'id'>): Promise<Park> => {
  const { name, location, description, image_url } = park;
  const res = await pool.query(
    'INSERT INTO parks (name, location, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, location, description, image_url]
  );
  return res.rows[0];
};

export const updatePark = async (id: number, park: Omit<Park, 'id'>): Promise<Park | null> => {
  const { name, location, description, image_url } = park;
  const res = await pool.query(
    'UPDATE parks SET name = $1, location = $2, description = $3, image_url = $4 WHERE id = $5 RETURNING *',
    [name, location, description, image_url, id]
  );
  return res.rows[0] || null;
};

export const deletePark = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM parks WHERE id = $1', [id]);
};
