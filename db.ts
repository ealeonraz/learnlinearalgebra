import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  port: 5432
});

export default pool;
