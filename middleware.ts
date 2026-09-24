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

  // /uk/... was published before Ukrainian was withdrawn; keep those links
  // working instead of serving a 404.
  const retired = pathname === "/uk" || pathname.startsWith("/uk/")
    ? pathname.slice(3)
    : null;
  if (retired !== null) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${retired}`;
    return NextResponse.redirect(url);
  }

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
