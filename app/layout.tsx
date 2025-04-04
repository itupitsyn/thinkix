import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THINK IX",
  description: "Automate Your Business with AI: Unlock Efficiency and Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main font-messina-mono text-white">{children}</body>
    </html>
  );
}
