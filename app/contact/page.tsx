import Toolbar from "../components/Toolbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact",
};

const CONTACTS = [
  { label: "Email", value: "zdrovy.co@gmail.com", href: "mailto:zdrovy.co@gmail.com" },
  { label: "Phone", value: "+48 793 651 242", href: "tel:+48793651242" },
  { label: "Instagram", value: "@zdrovyclub", href: "https://instagram.com/zdrovyclub" },
  { label: "Telegram", value: "@zdrovy", href: "https://t.me/zdrovy" },
];

export default function ContactPage() {
  return (
    <>
      <Toolbar />
      <main>
        <Hero title="Contact" align="left" />

        <Section>
          <div className="rows">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                className="row"
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener" : undefined}
              >
                <span className="row-label">{c.label}</span>
                <span className="row-value">{c.value}</span>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
