import Link from "next/link";
import type { Metadata } from "next";
import Toolbar from "../../components/Toolbar";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Figure from "../../components/Figure";
import FeatureRow from "../../components/FeatureRow";
import Footer from "../../components/Footer";
import { getDictionary, isLocale } from "../../i18n";
import { notFound } from "next/navigation";

const STEP_MEDIA = ["/ex1.png", "/ex2.png", "/ex3.png"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).business.title };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Toolbar locale={locale} dict={t} here="/business" />
      <main>
        {/* 1 — headline: the benefit, not the mechanism */}
        <Hero
          eyebrow={
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/myshop.svg" alt="MyShop" className="wordmark" />
          }
          align="center"
          title={t.business.heading}
          text={t.business.text}
          ctaLabel={t.business.cta}
          ctaHref="https://myshop.zdrovy.com"
          secondaryLabel={t.business.secondary}
          secondaryHref="mailto:zdrovy.co@gmail.com"
        />

        <Section>
          <div className="shot-plain">
          <Figure
            src="/myshopscreen.png"
            alt={t.business.screenAlt}
            ratio="wide"
            fit="contain"
          />
          </div>
        </Section>

        {/* 2 — problem paired with the solution */}
        <Section tone="band">
          <div className="grid">
            <h2 className="text2 col-5">{t.business.problem}</h2>
            <h2 className="text2 col-5 col-start-8">{t.business.solution}</h2>
          </div>
        </Section>

        {/* 3 — how it works, one block per step */}
        {t.business.steps.map((step, i) => (
          <Section key={step.title}>
            <FeatureRow
              title={step.title}
              items={step.items}
              flip={i % 2 === 1}
              media={
                <Figure ratio="portrait" src={STEP_MEDIA[i]} alt={step.alt} />
              }
            />
          </Section>
        ))}

        {/* 4 — CTA */}
        <Section tone="band">
          <div className="grid">
            <div className="col-5 stack">
              <span className="marker">{t.business.pricing}</span>
              <div className="price-figure">
                <span className="price-amount">79 zł</span>
                <span className="price-unit">{t.business.priceUnit}</span>
              </div>
              <p className="lead">{t.business.priceNote}</p>
              <Link href="https://myshop.zdrovy.com" className="pill pill--solid">
                {t.business.cta}
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text2">{t.business.closing}</h2>
          <div className="hero-cta">
            <Link href="https://myshop.zdrovy.com" className="pill pill--solid">
              {t.business.cta}
            </Link>
            <Link href="mailto:zdrovy.co@gmail.com" className="pill">
              {t.business.secondary}
            </Link>
          </div>
        </Section>
      </main>
      <Footer locale={locale} dict={t} here="/business" />
    </>
  );
}
