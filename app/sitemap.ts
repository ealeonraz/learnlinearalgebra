// /app/sitemap.ts
import type { MetadataRoute } from "next";
import queryInfo from "./services/infoServices";
import { getAllProofs } from "./services/theoremServices";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learnlinearalgebra.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const baseRoutes = [
    "",
    "/fundamental-concepts-linear-algebra",
    "/matrices-and-determinants",
    "/vector-spaces-eigenvalues-eigenvectors",
    "/orthogonality-least-squares-symmetric-matrices",
  ];

  const chapters = await queryInfo();
  const proofs = await getAllProofs();

  const chapterRoutes = chapters.map((chapter) => ({
    url: new URL(chapter.chapter_link, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const proofRoutes = proofs.map((proof) => ({
    url: new URL(
      `/${proof.theorem_section}/${proof.theorem_name}`,
      SITE_URL
    ).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...baseRoutes.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...chapterRoutes,
    ...proofRoutes,
  ];
}