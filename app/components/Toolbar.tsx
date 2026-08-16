"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuColumn = {
  title: string;
  featured?: boolean;
  links: { label: string; href: string }[];
};

type MenuItem = {
  id: string;
  label: string;
  href: string;
  hasSubmenu?: boolean;
  columns?: MenuColumn[];
};

const MENU: MenuItem[] = [
  {
    id: "health",
    label: "Health",
    href: "#",
    hasSubmenu: true,
    columns: [
      {
        title: "Health",
        featured: true,
        links: [
          { label: "How to Plan Your Wellness?", href: "#" },
          { label: "Our Tracking App", href: "#" },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    href: "#",
    hasSubmenu: true,
    columns: [
      {
        title: "Lifestyle",
        featured: true,
        links: [
          { label: "Habits", href: "#" },
          { label: "Instagram", href: "https://instagram.com/zdrovyclub" },
        ],
      },
    ],
  },
  { id: "articles", label: "Articles", href: "#" },
  { id: "business", label: "For Business", href: "/business" },
];

export default function Toolbar() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = MENU.find((item) => item.id === openId && item.hasSubmenu) ?? null;

  return (
    <header className="toolbar" onMouseLeave={() => setOpenId(null)}>
      <nav className="toolbar-bar" aria-label="Main">
        <Link href="/" className="toolbar-logo" onMouseEnter={() => setOpenId(null)}>
          <Image src="/logo.svg" alt="ZDROVY" width={110} height={22} priority />
        </Link>

        <ul className="toolbar-links">
          {MENU.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`toolbar-pill${item.hasSubmenu ? " toolbar-pill--has-submenu" : ""}`}
                onMouseEnter={() => setOpenId(item.hasSubmenu ? item.id : null)}
                onFocus={() => setOpenId(item.hasSubmenu ? item.id : null)}
                aria-expanded={openId === item.id}
              >
                {item.label}
                {item.hasSubmenu && (
                  <svg className="toolbar-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="toolbar-cta">
          <button type="button" className="toolbar-pill toolbar-pill--ghost">
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="6.8" cy="6.8" r="5.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <line x1="10.8" y1="10.8" x2="15" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Search
          </button>
          <Link href="https://app.zdrovy.com" className="toolbar-pill toolbar-pill--solid">Start</Link>
        </div>
      </nav>

      <div className="toolbar-panel" hidden={!active}>
        {active && active.columns && (
          <div className="toolbar-panel-inner">
            {active.columns.map((column) => (
              <div
                key={column.title}
                className={column.featured ? "toolbar-col toolbar-col--featured" : "toolbar-col"}
              >
                <p className="toolbar-col-title">{column.title}</p>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="toolbar-backdrop"
        data-active={active ? "true" : "false"}
        aria-hidden="true"
        onMouseEnter={() => setOpenId(null)}
        onClick={() => setOpenId(null)}
      />
    </header>
  );
}
