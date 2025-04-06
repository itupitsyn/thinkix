import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link rel="preload" href="fonts/HelveticaNowDisplay-Regular.woff2" as="font" type="font/woff2" />
        <link rel="preload" href="fonts/MessinaSansMono-Book.woff2" as="font" type="font/woff2" />
        <link rel="preload" href="fonts/Fontspring-DEMO-integralcf-demibold.otf" as="font" type="font/opentype" />
      </Head>
      <body className="bg-main font-messina-mono text-white">{children}</body>
    </html>
  );
}
