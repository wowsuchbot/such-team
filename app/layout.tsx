import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Such Team - Web Development + AI Agent Cloud Services",
  description: "Premium web development agency specializing in AI-powered automation and intelligent agent-driven solutions. We build modern websites and deploy custom AI agents that work 24/7.",
  keywords: ["web development", "AI agents", "automation", "Next.js", "business solutions"],
  authors: [{ name: "Such Team" }],
  openGraph: {
    title: "Such Team - Web Development + AI Agent Cloud Services",
    description: "Premium web development agency specializing in AI-powered automation and intelligent agent-driven solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}