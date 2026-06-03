import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Nav    from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], variable: "--font-inter", display: "swap",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: { default: "Rentastic Homes — Checked In, Worries Out!", template: "%s | Rentastic Homes" },
  description: "Premium PG & co-living for students and young professionals. Safe, managed, and fully furnished.",
  openGraph: { title: "Rentastic Homes", description: "Checked In, Worries Out!", locale: "en_IN", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden bg-background text-on-background">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
