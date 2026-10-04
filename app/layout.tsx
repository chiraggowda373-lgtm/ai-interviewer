import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Virtual Interviewer | Master Your Next Tech Interview",
  description: "Practice your interview skills in a realistic environment with an AI-driven recruiter. Get real-time feedback for Software Engineering, Data Science, AI, and specialized roles.",
  keywords: [
    "AI mock interview", 
    "technical interview practice", 
    "software engineer interview", 
    "AI recruiter", 
    "interview preparation bot"
  ],
  authors: [{ name: "Chirag" }],
  openGraph: {
    title: "AI Virtual Interviewer",
    description: "Build confidence before the real thing. Practice with our voice-enabled AI interviewer.",
    url: "https://ai-interviewer-ui.onrender.com",
    siteName: "AI Virtual Interviewer",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
