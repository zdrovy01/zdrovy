import Image from "next/image";
import Link from "next/link";
import { path, type Locale, type Dictionary } from "../i18n";

export default function Toolbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const menu = [
    { href: "/", label: dict.nav.main },
    { href: "/business", label: dict.nav.business },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="toolbar">
      <nav className="toolbar-bar" aria-label={dict.nav.main}>
        <Link href={path(locale, "/")} className="toolbar-logo">
          <Image src="/logo.svg" alt="ZDROVY" width={128} height={26} priority />
        </Link>

        <div className="toolbar-links">
          {menu.map((item) => (
            <Link key={item.href} href={path(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
