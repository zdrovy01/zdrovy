import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n";

/**
 * Sends every unprefixed path to a locale, picking the visitor's own language
 * when we publish it and falling back to English otherwise.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const preferred = request.headers
    .get("accept-language")
    ?.split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((code) => (locales as readonly string[]).includes(code));

  const locale = preferred ?? defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // everything except Next internals and files with an extension
  matcher: ["/((?!_next|.*\\..*).*)"],
};
