import { TheoremInfo } from "../types/types";
import pool from "@/db";


export default async function getProofs(section_name: string): Promise<TheoremInfo[]> {
    try {
        const res = await pool.query("SELECT * FROM theorems WHERE theorem_section = $1", [section_name]);
        const data: TheoremInfo[] =  res.rows;
        return data;
    }catch(err) {
        console.log(err);
        throw(err);
    }

}
export async function getAllProofs() {
    const res = await pool.query(
      "SELECT theorem_section, theorem_name FROM theorems;"
    );
  
    return res.rows;
  }