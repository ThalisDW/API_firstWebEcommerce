import { Pool } from 'pg'
import { isSet } from 'util/types';
require('dotenv').config();

export const pool = new Pool({
  // connectionString: process.env.PG_STRINGCONECTION,
   host: process.env.DB_HOST,
   password: process.env.DB_PASSWORD,
   user: process.env.DB_USER,
   database:process.env.DB_NAME,
   port: Number(process.env.DB_PORT)
})

export const queryPrms = async (sql: string, params:any[]) : Promise<any[]> =>{
  try {
    const client = await pool.connect()
    const result = await client.query(sql, params)
    client.release() 
    return result.rows
  } catch (error: any) {
    return error
  }
  
}

export const fetchQuery = async (sql: string) : Promise<any[]> =>{
  try {
    const client = await pool.connect()
    const result = await client.query(sql)
    client.release() 
    return result.rows
  } catch (e: any) {
    return e
  }
  
}
 
