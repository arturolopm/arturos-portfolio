import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arturo Lopez - Senior Frontend Web Developer | React & Next.js Expert",
  description: "Full Stack Web Developer (Frontend oriented) with 4+ years of experience at Globant. Specializing in React, Next.js 15, TypeScript, and performance optimization. Achieved 57% TTI improvement and 85% test coverage.",
  keywords: ["Senior Frontend Developer", "React Developer", "Next.js", "TypeScript", "Performance Optimization", "Globant", "NFL Plus", "Ernst & Young", "Vitest", "Storybook"],
  authors: [{ name: "Arturo Lopez", url: "https://www.linkedin.com/in/arturo-lopezm/" }],
  openGraph: {
    title: "Arturo Lopez - Senior Frontend Web Developer",
    description: "4+ years building scalable web applications with React, Next.js, and TypeScript. Enterprise experience at Globant with NFL Plus and Ernst & Young.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
