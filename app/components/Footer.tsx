import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} ZDROVY</p>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/tracking-app">App</Link>
          <Link href="/business">For Business</Link>
          <a href="https://instagram.com/zdrovyclub" target="_blank" rel="noopener">
            Instagram
          </a>
          <a href="mailto:zdrovy.co@gmail.com">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
