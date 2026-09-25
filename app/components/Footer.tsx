import Image from "next/image";
import Link from "next/link";
import { locales, localeLabel, path, type Locale, type Dictionary } from "../i18n";

/** One line of links, one line of controls, the legal note last. */
export default function Footer({
  locale,
  dict,
  /** The current path without its locale prefix, so the switch stays on the page. */
  here = "/",
}: {
  locale: Locale;
  dict: Dictionary;
  here?: string;
}) {
  const other = locales.find((code) => code !== locale) ?? locale;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link href={path(locale, "/")} className="footer-logo">
          <Image src="/logo.svg" alt="ZDROVY" width={96} height={20} />
        </Link>

        <nav className="footer-nav" aria-label={dict.nav.main}>
          <Link href={path(locale, "/")}>{dict.nav.main}</Link>
          <Link href={path(locale, "/business")}>{dict.nav.business}</Link>
          <Link href={path(locale, "/contact")}>{dict.nav.contact}</Link>
        </nav>

        <div className="footer-row">
          <div className="footer-socials">
            <a
              href="https://instagram.com/zdrovycom"
              target="_blank"
              rel="noopener"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.375 10C13.375 8.125 11.875 6.625 10 6.625C8.125 6.625 6.625 8.125 6.625 10C6.625 11.875 8.125 13.375 10 13.375C11.875 13.375 13.375 11.875 13.375 10ZM15.125 10C15.125 12.875 12.875 15.125 10 15.125C7.125 15.125 4.875 12.875 4.875 10C4.875 7.125 7.125 4.875 10 4.875C12.875 4.875 15.125 7.125 15.125 10ZM16.5 4.625C16.5 5.375 16 5.875 15.25 5.875C14.5 5.875 14 5.375 14 4.625C14 3.875 14.5 3.375 15.25 3.375C16 3.375 16.5 4 16.5 4.625ZM10 1.75C8.5 1.75 5.375 1.625 4.125 2.125C3.25 2.5 2.5 3.25 2.25 4.125C1.75 5.375 1.875 8.5 1.875 10C1.875 11.5 1.75 14.625 2.25 15.875C2.5 16.75 3.25 17.5 4.125 17.75C5.375 18.25 8.625 18.125 10 18.125C11.375 18.125 14.625 18.25 15.875 17.75C16.75 17.375 17.375 16.75 17.75 15.875C18.25 14.5 18.125 11.375 18.125 10C18.125 8.625 18.25 5.375 17.75 4.125C17.5 3.25 16.75 2.5 15.875 2.25C14.625 1.625 11.5 1.75 10 1.75ZM20 10V14.125C20 15.625 19.5 17.125 18.375 18.375C17.25 19.5 15.75 20 14.125 20H5.875C4.375 20 2.875 19.5 1.625 18.375C0.625 17.25 0 15.75 0 14.125V10V5.875C0 4.25 0.625 2.75 1.625 1.625C2.875 0.625 4.375 0 5.875 0H14.125C15.625 0 17.125 0.5 18.375 1.625C19.375 2.75 20 4.25 20 5.875V10Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@zdrovyclub"
              target="_blank"
              rel="noopener"
              className="footer-social-btn"
              aria-label="YouTube"
            >
              <svg width="22" height="16" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.412 13.6944V5.67757C14.2581 7.01675 16.4623 8.31043 19.0692 9.70519C16.9191 10.8976 14.2581 12.2356 11.412 13.6944ZM27.2729 1.6904C26.7819 1.0436 25.9452 0.540127 25.0544 0.373441C22.4361 -0.123773 6.10141 -0.125187 3.4845 0.373441C2.77015 0.507355 2.13405 0.831046 1.58762 1.33396C-0.714803 3.47096 0.00666595 14.931 0.561639 16.7874C0.79501 17.5909 1.0967 18.1704 1.47664 18.5507C1.96615 19.0536 2.63638 19.3999 3.40622 19.5552C5.56208 20.0011 16.6686 20.2505 25.0088 19.6222C25.7773 19.4883 26.4575 19.1308 26.9939 18.6066C29.1227 16.4781 28.9776 4.37448 27.2729 1.6904Z" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <Link
            href={path(other, here)}
            className="footer-lang"
            hrefLang={other}
            aria-label={localeLabel[other]}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M7.99996 0.666748C3.93329 0.666748 0.666626 3.93341 0.666626 8.00008C0.666626 12.0667 3.93329 15.3334 7.99996 15.3334C12.0666 15.3334 15.3333 12.0667 15.3333 8.00008C15.3333 3.93341 12.0666 0.666748 7.99996 0.666748ZM13.3333 8.00008C13.3333 8.46675 13.2666 8.93341 13.1333 9.33341C12.7333 8.33341 12.0666 7.26675 11.1333 6.20008L12.3333 5.00008C13 5.86675 13.3333 6.86675 13.3333 8.00008ZM4.33329 4.33341C5.19996 4.33341 6.73329 4.86675 8.33329 6.26675L6.19996 8.40008C4.73329 6.53342 4.33329 5.00008 4.33329 4.33341ZM9.73329 7.66675C11.2666 9.46675 11.6666 11.0001 11.6666 11.6667C10.8 11.6667 9.26663 11.1334 7.66663 9.73342L9.73329 7.66675ZM11 3.60008L9.73329 4.86675C8.66663 3.93341 7.59996 3.26675 6.59996 2.86675C7.06663 2.73341 7.46663 2.66675 7.93329 2.66675C9.13329 2.66675 10.1333 3.00008 11 3.60008ZM2.66663 8.00008C2.66663 7.53341 2.73329 7.06675 2.86663 6.66675C3.26663 7.66675 3.93329 8.73341 4.86663 9.80008L3.66663 11.0001C2.99996 10.1334 2.66663 9.13341 2.66663 8.00008ZM4.99996 12.4001L6.26663 11.1334C7.33329 12.0667 8.39996 12.7334 9.39996 13.1334C8.93329 13.2667 8.53329 13.3334 8.06663 13.3334C6.86663 13.3334 5.86663 13.0001 4.99996 12.4001Z"
                fill="currentColor"
              />
            </svg>
            {localeLabel[other]}
          </Link>
        </div>

        <p className="footer-legal">
          © {new Date().getFullYear()} Zdrovy. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
