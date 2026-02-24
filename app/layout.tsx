// /app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "katex/dist/katex.min.css";

import Sidebar from "./components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learnlinearalgebra.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Learn Linear Algebra",
    template: "%s | Learn Linear Algebra",
  },

  description:
    "Proof-first notes to build a strong foundation in linear algebra: vectors, matrices, determinants, vector spaces, eigenvalues, orthogonality, and more.",

  // Option A: canonical per route via relative canonical (works with metadataBase).
  // This behavior is referenced in the Next.js repo even though it has historically been under-documented.
  alternates: {
    canonical: "./",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Learn Linear Algebra",
    description:
      "Proof-first notes to build a strong foundation in linear algebra.",
    siteName: "Learn Linear Algebra",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn Linear Algebra",
    description:
      "Proof-first notes to build a strong foundation in linear algebra.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Minimal site-level JSON-LD (extend per-page for BreadcrumbList/Article).
  // JSON-LD is Google's recommended structured data format when feasible.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Learn Linear Algebra",
    url: SITE_URL,
  };

  return (
    <html lang="en-US" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        {/* JSON-LD can be rendered directly in layout/page (Metadata API does not generate <script>). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="app-shell">
          <Sidebar />
          <main id="main-content" className="main">
            <div className="container">{children}</div>
          </main>
        </div>

        <footer className="footer">
          <div className="container footer__inner">
            <p className="muted">© Learn Linear Algebra</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
