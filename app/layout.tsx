import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RPV Construction | Peterborough Builders",
  description: "RPV Construction — trusted local builders in Peterborough specialising in new builds, extensions, roofing and garage conversions for homeowners. Built Properly. Managed Consciously.",
  keywords: "builders peterborough, extensions peterborough, roofing peterborough, new builds peterborough, garage conversions peterborough",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
