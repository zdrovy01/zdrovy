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
    id: "health",
    label: "Health",
    href: "#",
    columns: [
      {
        title: "Health",
        featured: true,
        links: [
          { label: "How to Plan Your Wellness?", href: "#" },
          { label: "Our Tracking App", href: "/tracking-app" },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    href: "#",
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
  {
    id: "articles",
    label: "Articles",
    href: "#",
    columns: [
      {
        title: "Articles",
        featured: true,
        links: [
          { label: "Last Article", href: "#" },
          { label: "Search", href: "#" },
          { label: "How to Take a Selfie When You're in the Gym?", href: "#" },
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
          { label: "MyShop for Żabka", href: "/business" },
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
