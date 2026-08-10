import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZDROVY",
  description: "Стартовий Next.js сайт",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
