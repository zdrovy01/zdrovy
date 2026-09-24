import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Figure from "../components/Figure";
import FeatureRow from "../components/FeatureRow";
import Footer from "../components/Footer";
import { getDictionary, isLocale, path } from "../i18n";
import { notFound } from "next/navigation";

const MEDIA = [
  { src: "/main1.png", fit: "contain" as const },
  { src: "/main2.avif", fit: "cover" as const },
  { src: "/main3.avif", fit: "cover" as const },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Toolbar locale={locale} dict={t} />
      <main>
        {/* 1 — headline: the benefit, not the mechanism */}
        <Hero
          eyebrow={t.home.eyebrow}
          title={t.home.heading}
          ctaLabel={t.home.cta}
          ctaHref="mailto:zdrovy.co@gmail.com?subject=Early%20access%20to%20Zdrovy"
          secondaryLabel={t.home.secondary}
          secondaryHref="https://instagram.com/zdrovycom"
        />

        <Section flush>
          <div className="grid">
            <div className="col-4 col-start-5 hero-shot">
              <Figure
                src="/appshow.png"
                alt={t.home.phoneAlt}
                ratio="portrait"
                anchor="top"
              />
            </div>
          </div>
        </Section>

        {/* 2 — the break between the hero and what follows */}
        <Section tone="band">
          <h2 className="text2">{t.home.divider}</h2>
        </Section>

        {/* 3 — what it does, one block each */}
        {t.home.features.map((f, i) => (
          <Section key={f.title}>
            <FeatureRow
              title={f.title}
              text={f.text}
              items={f.items}
              flip={i % 2 === 1}
              media={
                <Figure
                  ratio="portrait"
                  src={MEDIA[i].src}
                  alt={f.alt}
                  fit={MEDIA[i].fit}
                />
              }
            />
          </Section>
        ))}

        {/* 4 — CTA */}
        <Section>
          <div className="grid">
            <div className="col-8 stack">
              <h2 className="text2">{t.home.closing}</h2>
              <div className="hero-cta">
                <Link
                  href="mailto:zdrovy.co@gmail.com?subject=Early%20access%20to%20Zdrovy"
                  className="pill pill--solid"
                >
                  {t.home.cta}
                </Link>
                <Link href={path(locale, "/business")} className="pill">
                  {t.home.closingSecondary}
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} dict={t} here="/" />
    </>
  );
}
