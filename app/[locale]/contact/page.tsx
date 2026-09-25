import type { Metadata } from "next";
import Toolbar from "../../components/Toolbar";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { getDictionary, isLocale } from "../../i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).contact.title };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const rows = [
    { label: t.contact.labels.email, value: "zdrovy.co@gmail.com", href: "mailto:zdrovy.co@gmail.com" },
    { label: t.contact.labels.phone, value: "+48 793 651 242", href: "tel:+48793651242" },
    { label: t.contact.labels.instagram, value: "@zdrovycom", href: "https://instagram.com/zdrovycom" },
    { label: t.contact.labels.telegram, value: "@zdrovy", href: "https://t.me/zdrovy" },
  ];

  return (
    <>
      <Toolbar locale={locale} dict={t} here="/contact" />
      <main>
        <Hero title={t.contact.heading} align="left" />

        <Section>
          <div className="grid">
            <div className="rows col-8">
              {rows.map((c) => (
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
          </div>
        </Section>
      </main>
      <Footer locale={locale} dict={t} here="/contact" />
    </>
  );
}
