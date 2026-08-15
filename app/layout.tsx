import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zdrovy - Body, Mind & Lifestyle",
  description: "Zdrovy - Body, Mind & Lifestyle",
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
