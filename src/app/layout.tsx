import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container"


const space_mono = Space_Mono({weight:['400','700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Tayyab",
  description: "This is my description",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_mono.className}>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
        <Container />
      </div>
        {children}
        <Footer />
        </body>
    </html>
  );
}
