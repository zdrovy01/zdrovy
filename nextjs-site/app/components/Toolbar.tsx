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
  columns: MenuColumn[];
};

const MENU: MenuItem[] = [
  {
    id: "app",
    label: "Nutrition",
    href: "https://app.zdrovy.com",
    columns: [
      {
        title: "Nutrition",
        featured: true,
        links: [
          { label: "App", href: "https://app.zdrovy.com" },
          { label: "Recipes", href: "#" },
          { label: "More About Nutrition", href: "#" },
        ],
      },
    ],
  },
  {
    id: "articles",
    label: "Articles",
    href: "#",
    columns: [
      {
        title: "Articles",
        featured: true,
        links: [
          { label: "All Articles", href: "#" },
          { label: "Search", href: "#" },
          { label: "Budget Eating", href: "#" },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "For Business",
    href: "/business",
    columns: [
      {
        title: "For Business",
        featured: true,
        links: [
          { label: "Overview", href: "/business" },
          { label: "For Żabka's / Stores", href: "/business" },
          { label: "Contact", href: "mailto:zdrovy.co@gmail.com" },
        ],
      },
    ],
  },
];

export default function Toolbar() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = MENU.find((item) => item.id === openId) ?? null;

  return (
    <header className="toolbar" onMouseLeave={() => setOpenId(null)}>
      <nav className="toolbar-bar" aria-label="Main">
        <Link href="/" className="toolbar-logo" onMouseEnter={() => setOpenId(null)}>
          <Image src="/textlogo.png" alt="ZDROVY" width={72} height={16} priority />
        </Link>

        <ul className="toolbar-links">
          {MENU.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="toolbar-link"
                onMouseEnter={() => setOpenId(item.id)}
                onFocus={() => setOpenId(item.id)}
                aria-expanded={openId === item.id}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="toolbar-icon" aria-label="Search" onMouseEnter={() => setOpenId(null)}>
          <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="6.8" cy="6.8" r="5.3" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <line x1="10.8" y1="10.8" x2="15" y2="15" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>

      </nav>

      <div className="toolbar-panel" hidden={!active}>
        {active && (
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
