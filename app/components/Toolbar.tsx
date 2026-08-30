"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type MenuLink = { label: string; href: string };

type MenuItem = {
  id: string;
  label: string;
  href: string;
  submenu?: MenuLink[];
};

const MENU: MenuItem[] = [
  { id: "main", label: "Main", href: "/" },
  { id: "business", label: "For Business", href: "/business" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Toolbar() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const desktopActive = MENU.find((item) => item.id === hoverId && item.submenu) ?? null;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedId(null);
  };

  return (
    <header className="toolbar" onMouseLeave={() => setHoverId(null)}>
      <nav className="toolbar-bar" aria-label="Main">
        <Link href="/" className="toolbar-logo" onMouseEnter={() => setHoverId(null)}>
          <Image src="/logo.svg" alt="ZDROVY" width={110} height={22} priority />
        </Link>

        <ul className="toolbar-links">
          {MENU.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`toolbar-pill${item.submenu ? " toolbar-pill--has-submenu" : ""}`}
                onMouseEnter={() => setHoverId(item.submenu ? item.id : null)}
                onFocus={() => setHoverId(item.submenu ? item.id : null)}
                aria-expanded={hoverId === item.id}
              >
                {item.label}
                {item.submenu && (
                  <svg className="toolbar-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="toolbar-cta">
          <Link href="/search" className="toolbar-pill toolbar-pill--ghost">
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="6.8" cy="6.8" r="5.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <line x1="10.8" y1="10.8" x2="15" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Search
          </Link>
          <Link href="https://app.zdrovy.com" className="toolbar-pill toolbar-pill--solid">Start</Link>
        </div>

        <button
          type="button"
          className="toolbar-burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

      {/* desktop mega-menu */}
      <div className="toolbar-panel" hidden={!desktopActive}>
        {desktopActive && desktopActive.submenu && (
          <div className="toolbar-panel-inner">
            <div className="toolbar-col toolbar-col--featured">
              <ul>
                {desktopActive.submenu.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div
        className="toolbar-backdrop"
        data-active={desktopActive ? "true" : "false"}
        aria-hidden="true"
        onMouseEnter={() => setHoverId(null)}
        onClick={() => setHoverId(null)}
      />

      {/* mobile full-screen panel */}
      <div className={`mobile-menu${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        <ul className="mobile-menu-list">
          {MENU.map((item) => {
            const expanded = expandedId === item.id;
            return (
              <li key={item.id} className="mobile-menu-item">
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className="mobile-menu-link mobile-menu-link--toggle"
                      aria-expanded={expanded}
                      onClick={() => setExpandedId(expanded ? null : item.id)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`mobile-menu-caret${expanded ? " is-open" : ""}`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M4 6 L8 10 L12 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expanded && (
                      <ul className="mobile-submenu">
                        {item.submenu.map((s) => (
                          <li key={s.label}>
                            <Link href={s.href} className="mobile-submenu-link" onClick={closeMobile}>
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="mobile-menu-link" onClick={closeMobile}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
