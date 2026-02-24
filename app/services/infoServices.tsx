import pool from '../../db';
import { ChapterInfo } from '../types/types';

async function queryInfo(): Promise<ChapterInfo[]> {
    try {
        const res = await pool.query(
            "SELECT DISTINCT chapter_info.id, sections_info.section_chapter, sections_info.chapter_link, chapter_info.chapter_info " +
            "FROM sections_info " +
            "JOIN chapter_info ON sections_info.section_chapter = chapter_info.chapter_name " +
            "ORDER BY chapter_info.id;"
        );
        const data: ChapterInfo[] = res.rows;
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export default queryInfo;
