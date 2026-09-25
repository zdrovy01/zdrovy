"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { locales, localeLabel, path, type Locale, type Dictionary } from "../i18n";

function Globe() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M7.99996 0.666687C3.93329 0.666687 0.666626 3.93335 0.666626 8.00002C0.666626 12.0667 3.93329 15.3334 7.99996 15.3334C12.0666 15.3334 15.3333 12.0667 15.3333 8.00002C15.3333 3.93335 12.0666 0.666687 7.99996 0.666687ZM13.3333 8.00002C13.3333 8.46669 13.2666 8.93335 13.1333 9.33335C12.7333 8.33335 12.0666 7.26669 11.1333 6.20002L12.3333 5.00002C13 5.86669 13.3333 6.86669 13.3333 8.00002ZM4.33329 4.33335C5.19996 4.33335 6.73329 4.86669 8.33329 6.26669L6.19996 8.40002C4.73329 6.53335 4.33329 5.00002 4.33329 4.33335ZM9.73329 7.66669C11.2666 9.46669 11.6666 11 11.6666 11.6667C10.8 11.6667 9.26663 11.1334 7.66663 9.73335L9.73329 7.66669ZM11 3.60002L9.73329 4.86669C8.66663 3.93335 7.59996 3.26669 6.59996 2.86669C7.06663 2.73335 7.46663 2.66669 7.93329 2.66669C9.13329 2.66669 10.1333 3.00002 11 3.60002ZM2.66663 8.00002C2.66663 7.53335 2.73329 7.06669 2.86663 6.66669C3.26663 7.66669 3.93329 8.73335 4.86663 9.80002L3.66663 11C2.99996 10.1334 2.66663 9.13335 2.66663 8.00002ZM4.99996 12.4L6.26663 11.1334C7.33329 12.0667 8.39996 12.7334 9.39996 13.1334C8.93329 13.2667 8.53329 13.3334 8.06663 13.3334C6.86663 13.3334 5.86663 13 4.99996 12.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Wide: wordmark, nav immediately after it, language control on the right.
 * Narrow: wordmark and a menu button only, as the phone reference has it.
 */
export default function Toolbar({
  locale,
  dict,
  /** The current path without its locale prefix, so the switch stays put. */
  here = "/",
}: {
  locale: Locale;
  dict: Dictionary;
  here?: string;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menu = [
    { href: "/", label: dict.nav.main },
    { href: "/business", label: dict.nav.business },
    { href: "/contact", label: dict.nav.contact },
  ];

  const other = locales.find((code) => code !== locale) ?? locale;

  /* the bar slides out of the way going down and comes back going up */
  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const passedBar = y > 96;
      setHidden(passedBar && y > last);
      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="toolbar" data-hidden={hidden && !open ? "true" : undefined}>
      <nav className="toolbar-bar" aria-label={dict.nav.main}>
        <Link href={path(locale, "/")} className="toolbar-logo">
          <Image src="/logo.svg" alt="ZDROVY" width={96} height={20} priority />
        </Link>

        <div className="toolbar-links">
          {menu.map((item) => (
            <Link key={item.href} href={path(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={path(other, here)}
          className="toolbar-lang"
          hrefLang={other}
          aria-label={localeLabel[other]}
        >
          <Globe />
          {other.toUpperCase()}
        </Link>

        <button
          type="button"
          className="toolbar-burger"
          aria-label={dict.nav.main}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M1.33331 4H14.6666V6H1.33331V4Z" fill="currentColor" />
            <path d="M1.33331 10H14.6666V12H1.33331V10Z" fill="currentColor" />
          </svg>
        </button>
      </nav>

      <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {menu.map((item) => (
          <Link
            key={item.href}
            href={path(locale, item.href)}
            className="mobile-menu-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={path(other, here)}
          className="mobile-menu-lang"
          hrefLang={other}
          onClick={() => setOpen(false)}
        >
          <Globe />
          {localeLabel[other]}
        </Link>
      </div>
    </header>
  );
}
