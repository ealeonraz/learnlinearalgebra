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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
