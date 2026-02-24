import pool from '../../db';
import { Section } from '../types/types';

async function queryData(chapter: string): Promise<Section[]> {
    try {
      const res = await pool.query('SELECT * FROM sections_info WHERE section_chapter = $1', [chapter]);
      const data: Section[] = res.rows;
      return data;
    } catch (err) {
        console.error('Error querying the database', err);
        throw err; // Ensure the error is rethrown so it can be handled by the caller
    } 
}

export default queryData;
