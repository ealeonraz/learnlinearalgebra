import React from "react";

export interface Section {
    section_key: number,
    section_name: string,
    section_chapter: string,
    section_link: string,
    chapter_link: string,
}

export interface Chapter {
    section_chapter: string,
    chapter_link: string,
    chapter_info: string,
}

export interface CreateCardProps {
    sectionName: string;
    sectionInfo: string;
    link: string;
}

export interface ChapterInfo {
    id: number,
    section_chapter: string,
    chapter_info: string,
    chapter_link: string,
}

export interface TheoremInfo {
    theorem_id: number,
    theorem: string,
    theorem_section: string,
    proof_content: string,
    theorem_name: string
}

export interface DisplayProofProps {
    theorem: string,
    proof_content: string,
    theorem_name: string
}

export interface ClientLayout {
    children: React.ReactNode
}

export interface ProofViewProps {
    proofInfo: TheoremInfo[]
}