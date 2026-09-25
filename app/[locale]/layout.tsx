import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { locales, isLocale, type Locale } from "../i18n";
import { notFound } from "next/navigation";

/**
 * Helvetica Neue, self-hosted as woff2. Three cuts ship: Roman, Medium
 * and Bold.
 * There is no semibold in the family, so a 600 request resolves to Bold.
 */
const helvetica = localFont({
  src: [
    { path: "../fonts/HelveticaNeueRoman.woff2", weight: "400", style: "normal" },
    { path: "../fonts/HelveticaNeueMedium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/HelveticaNeueBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
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
    <html
      lang={locale as Locale}
      suppressHydrationWarning
      className={helvetica.variable}
    >
      <body>{children}</body>
    </html>
  );
}
