import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brendan Keaton",
  description:
    "A website to showcase Brendan Keaton's experience and tech stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind.className}>{children}</body>
    </html>
  );
}
