import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Text1 from "../components/text1";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact — Zdrovy",
};

export default function ContactPage() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="contact-hero">
          <Text1>Contact</Text1>
        </section>

        <section className="contact-list">
          <a className="contact-row" href="mailto:zdrovy.co@gmail.com">
            <span className="contact-label">Email</span>
            <span className="contact-value">zdrovy.co@gmail.com</span>
          </a>
          <a className="contact-row" href="tel:+48793651242">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+48 793 651 242</span>
          </a>
          <a className="contact-row" href="https://instagram.com/zdrovyclub" target="_blank" rel="noopener">
            <span className="contact-label">Instagram</span>
            <span className="contact-value">@zdrovyclub</span>
          </a>
          <a className="contact-row" href="https://t.me/zdrovy" target="_blank" rel="noopener">
            <span className="contact-label">Telegram</span>
            <span className="contact-value">@zdrovy</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
