import pool from '../config/db';

export const getAllAnimals = async () => {
  const res = await pool.query('SELECT * FROM animals');
  return res.rows;
};
