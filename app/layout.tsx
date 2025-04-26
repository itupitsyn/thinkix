import type { Metadata } from "next";
import "./globals.css";
import classNames from "classnames";
import { fontMessinaMono } from "@/fonts";

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
      <body className={classNames("bg-main text-white", fontMessinaMono.className)}>{children}</body>
    </html>
  );
}
