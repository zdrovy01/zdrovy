"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { path, type Locale, type Dictionary } from "../i18n";

export default function Toolbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { href: "/", label: dict.nav.main },
    { href: "/business", label: dict.nav.business },
    { href: "/contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="toolbar">
      <nav className="toolbar-bar" aria-label={dict.nav.main}>
        <Link href={path(locale, "/")} className="toolbar-logo">
          <Image src="/logo.svg" alt="ZDROVY" width={110} height={22} priority />
        </Link>

        <div className="toolbar-cta">
          <Link href="https://app.zdrovy.com" className="pill pill--solid">
            {dict.chrome.start}
          </Link>
        </div>

        <button
          type="button"
          className="toolbar-burger"
          aria-label={mobileOpen ? dict.chrome.closeMenu : dict.chrome.openMenu}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`toolbar-burger-lines${mobileOpen ? " is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>

      <div
        className={`mobile-menu${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="mobile-menu-list">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={path(locale, item.href)}
                className="mobile-menu-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
