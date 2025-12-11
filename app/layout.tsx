import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===============================
// ✅ Required in Next.js 16 — themeColor belongs here
// ===============================
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// ===============================
// ✅ SEO METADATA (Correct)
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL("https://phyteam.com"),

  title: {
    default: "Phyteam",
    template: "%s | Phyteam",
  },

  description:
    "Phyteam builds modern, high-performance websites and mobile apps. Fast development, clean UI, and seamless digital experiences for businesses.",

  keywords: [
    "Phyteam",
    "web development",
    "modern websites",
    "mobile app development",
    "UI UX development",
    "Next.js developer",
    "software development company",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://phyteam.com",
    title: "Phyteam",
    description:
      "Modern, fast websites and mobile apps designed for growth. Built by Phyteam.",
    siteName: "Phyteam",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phyteam — Modern Web & App Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Phyteam",
    description:
      "Modern, fast websites and mobile apps designed for growth. Built by Phyteam.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// ===============================
// ROOT LAYOUT
// ===============================
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
