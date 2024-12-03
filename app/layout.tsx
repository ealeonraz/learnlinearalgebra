import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ClientLayout from "./ClientLayout"; // Import the client layout

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Linear Algebra",
  description: "Better your proof writing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="header-sec">
        <div className="title-sec">
          <a className="nav-link nav-home" href="/">
            Learn Linear Algebra
          </a>
        </div>
      </header>
          {children}
      </body>
    </html>
  );
}