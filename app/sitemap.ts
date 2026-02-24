// /app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learnlinearalgebra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/fundamental-concepts-linear-algebra",
    "/matrices-and-determinants",
    "/vector-spaces-eigenvalues-eigenvectors",
    "/orthogonality-least-squares-symmetric-matrices",
  ];

  return routes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
