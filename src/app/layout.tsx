import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shivang Mishra — Frontend Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Shivang Mishra, a Frontend Developer and AI/ML Enthusiast building modern web interfaces and intelligent systems.",
  keywords: ["frontend developer", "AI/ML", "React", "Next.js", "portfolio", "VIT Bhopal"],
  openGraph: {
    title: "Shivang Mishra — Frontend Developer & AI/ML Enthusiast",
    description: "Building modern web interfaces and intelligent systems that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
