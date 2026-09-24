import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales, isLocale, type Locale } from "../i18n";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Zdrovy",
    template: "%s - Zdrovy",
  },
  description: "Zdrovy - Body, Mind & Lifestyle",
};

/** Every locale is built ahead of time — there is nothing dynamic here. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale as Locale} suppressHydrationWarning className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
