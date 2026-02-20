import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arena | GitHub for Prompts",
  description: "Version control, playground testing, and collaboration for AI prompt engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.className} bg-[#0d1117] text-[#c9d1d9] antialiased selection:bg-blue-500/30`}
      >
        {/* The children here represents the page.tsx content. 
          Because the Header is already inside your page.tsx logic, 
          this layout remains clean to avoid double-headers.
        */}
        {children}
      </body>
    </html>
  );
}