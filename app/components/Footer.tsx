"use client";

import Link from "next/link";
import { useState } from "react";

type Col = {
  id: string;
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

const COLS: Col[] = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "Health", href: "#" },
      { label: "Lifestyle", href: "#" },
      { label: "Articles", href: "#" },
      { label: "Search", href: "/search" },
    ],
  },
  {
    id: "account",
    title: "Account",
    links: [
      { label: "Log in", href: "#" },
      { label: "Sign up", href: "#" },
      { label: "Manage Account", href: "#" },
    ],
  },
  {
    id: "app",
    title: "Zdrovy App",
    links: [
      { label: "Download", href: "https://app.zdrovy.com", external: true },
      { label: "Web App", href: "https://app.zdrovy.com", external: true },
      { label: "Features", href: "#" },
      { label: "Support", href: "mailto:zdrovy.co@gmail.com" },
    ],
  },
  {
    id: "business",
    title: "For Business",
    links: [
      { label: "MyShop", href: "https://myshop.zdrovy.com", external: true },
      { label: "For Żabka", href: "/business" },
      { label: "Contact Sales", href: "mailto:zdrovy.co@gmail.com" },
    ],
  },
  {
    id: "about",
    title: "About",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "mailto:zdrovy.co@gmail.com" },
      { label: "Instagram", href: "https://instagram.com/zdrovyclub", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@zdrovyclub", external: true },
      { label: "X", href: "https://x.com/zdrovy", external: true },
    ],
  },
];

export default function Footer() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {COLS.map((col) => {
            const isOpen = openId === col.id;
            return (
              <div
                key={col.id}
                className={`footer-col${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="footer-col-title"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : col.id)}
                >
                  <span>{col.title}</span>
                  <svg
                    className="footer-col-caret"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5 L7 9 L11 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul className="footer-col-links">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noopener">{l.label}</a>
                      ) : (
                        <Link href={l.href}>{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="footer-extra">
          More ways to reach us:{" "}
          <a href="mailto:zdrovy.co@gmail.com">Email us</a>
          {" "}or call{" "}
          <a href="tel:+48793651242">+48 793 651 242</a>.
        </p>

        <div className="footer-bar">
          <p className="footer-copy">Copyright © {new Date().getFullYear()} Zdrovy. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="#">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="#">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
