import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Linear Algebra",
  description: "Better your proof writing",
  
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <header className = "header-sec">
                <div className = "title-sec"><a className = "nav-link nav-home" href="/">Learn Linear Algebra</a></div>
                <div className = "page-sec"><a className = "nav-link nav-info" href="">Topics</a></div>
            </header> 
        {children}
      </body>
    </html>
  );
}
