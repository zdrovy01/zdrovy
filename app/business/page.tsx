import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Figure from "../components/Figure";
import Footer from "../components/Footer";

export const metadata = {
  title: "For Żabka",
};

const STATS = [
  { value: "5 min", label: "to set up" },
  { value: "0", label: "apps to install" },
  { value: "79 zł", label: "per month" },
];

const STEPS = [
  {
    marker: "01",
    title: "Write the list",
    text: "Once. It repeats itself.",
    // temporary — replace with: owner at a laptop, away from the store
    src: "/ex1.png",
    alt: "A task list in the MyShop dashboard",
  },
  {
    marker: "02",
    title: "Hang the QR",
    text: "Team scans. No app.",
    // temporary — replace with: the printed QR on a real backroom wall
    src: "/ex2.png",
    alt: "The QR code staff scan to open their task list",
  },
  {
    marker: "03",
    title: "See it done",
    text: "Photo, time, name.",
    // temporary — replace with: an employee ticking a task off on their phone
    src: "/ex3.png",
    alt: "Photos of restocked shelves submitted with completed tasks",
  },
];

const FEATURES = [
  "Photo proof",
  "Hours logged",
  "PIN per person",
  "Daily repeats",
  "Any phone",
  "Full history",
];

export default function BusinessPage() {
  return (
    <>
      <Toolbar />
      <main>
        {/* 1 — headline: the benefit, not the mechanism */}
        <Hero
          eyebrow={
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/myshop.svg" alt="MyShop" className="wordmark" />
          }
          align="center"
          title="Assign tasks to your team online."
          text="Every task done, with proof. From your phone."
          ctaLabel="Start free"
          ctaHref="https://myshop.zdrovy.com"
          secondaryLabel="Talk to us"
          secondaryHref="mailto:zdrovy.co@gmail.com"
        />

        <Section>
          <Figure
            src="/myshopscreen.png"
            alt="The MyShop task list open in a browser"
            ratio="wide"
            fit="contain"
          />
        </Section>

        <Section>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 2 — problem paired with the solution */}
        <Section tone="band">
          <div className="grid">
            <h2 className="text2 col-5">
              You can&rsquo;t be in the store all day.
            </h2>
            <h2 className="text2 col-5 col-start-8">
              So the list checks itself off.
            </h2>
          </div>
        </Section>

        <Section heading="How it works">
          <div className="grid">
            {STEPS.map((step) => (
              <div key={step.marker} className="col-4 stack">
                <span className="marker">{step.marker}</span>
                <Figure ratio="square" src={step.src} alt={step.alt} />
                <h3 className="feature-title">{step.title}</h3>
                <p className="feature-text">{step.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 3 — what you get */}
        <Section heading="What you get">
          <div className="grid">
            {FEATURES.map((f) => (
              <h3 key={f} className="feature feature-title col-4">
                {f}
              </h3>
            ))}
          </div>
        </Section>

        <Section heading="One screen for the whole store.">
          {/* paste the YouTube link here: youtube="https://youtu.be/..." */}
          <Figure kind="video" ratio="wide" />
        </Section>

        {/* 4 — CTA */}
        <Section tone="band">
          <div className="grid">
            <div className="col-5 stack">
              <span className="marker">Pricing</span>
              <div className="price-figure">
                <span className="price-amount">79 zł</span>
                <span className="price-unit">per store / month</span>
              </div>
              <p className="lead">First month free. Cancel anytime.</p>
              <Link href="https://myshop.zdrovy.com" className="pill pill--solid">
                Start free
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text2">Set it up before the next shift.</h2>
          <div className="hero-cta">
            <Link href="https://myshop.zdrovy.com" className="pill pill--solid">
              Start free
            </Link>
            <Link href="mailto:zdrovy.co@gmail.com" className="pill">
              Talk to us
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
