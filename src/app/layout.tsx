import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upmesh | Find best freelancers, FYP projects and Startup owners",
  description:
    "Upmesh helps you find the best freelancers, FYP projects, and startup owners. Connect, collaborate, and grow your network with Upmesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
