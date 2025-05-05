import pool from '../config/db';

export const getAllAnimals = async () => {
  const result = await pool.query('SELECT * FROM animals');
  return result.rows;
};
