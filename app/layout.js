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

// default meta data for whole app
export const metadata = {
  title: "Trade Brains",
  description: "Assignment for Trade Brains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-[#fefcff] relative`}
      >
        {/* layout wrapper for all pages */}
        {children}
      </body>
    </html>
  );
}
