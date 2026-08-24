import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-socials">
          <a
            href="https://instagram.com/zdrovyclub"
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

        <nav className="footer-nav" aria-label="Footer">
          <Link href="#">HEALTH</Link>
          <Link href="#">LIFESTYLE</Link>
          <Link href="#">ARTICLES</Link>
          <Link href="/business">FOR BUSINESS</Link>
          <Link href="#">PRIVACY</Link>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} ZDROVY</p>
      </div>
    </footer>
  );
}
