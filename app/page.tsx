import Link from "next/link";
import Toolbar from "./components/Toolbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Figure from "./components/Figure";
import FeatureRow from "./components/FeatureRow";
import Footer from "./components/Footer";

const FEATURES = [
  {
    title: "Read your day",
    text: "Log four things. Get a sentence back, not a dashboard.",
    items: [
      "Sleep, water, food and movement",
      "A plain-language read of your day",
      "What caused it, not just what happened",
      "One thing to change tomorrow",
    ],
    src: "/main1.png",
    alt: "The four things you log: food, sleep, water and movement",
  },
  {
    title: "Cook it step by step",
    text: "Recipes that walk you through one step at a time.",
    items: ["Recipes built into the app", "Step-by-step cooking mode"],
    src: "/main2.svg",
    alt: "A pan on the heat",
  },
  {
    title: "Bring your coach",
    text: "A trainer can follow your days and answer in the app.",
    items: [
      "Your coach sees what you log",
      "Replies by text",
      "Or by video",
    ],
    src: "/main3.svg",
    alt: "A video reply in a message",
  },
];

export default function Home() {
  return (
    <>
      <Toolbar />
      <main>
        {/* 1 — headline: the benefit, not the mechanism */}
        <Hero
          eyebrow="Zdrovy App — in development"
          title="Know why you feel like this."
          ctaLabel="Get early access"
          ctaHref="mailto:zdrovy.co@gmail.com?subject=Early%20access%20to%20Zdrovy"
          secondaryLabel="Follow along"
          secondaryHref="https://instagram.com/zdrovycom"
        />

        <Section>
          <div className="grid">
            <div className="col-6 col-start-4">
              <Figure
                src="/appshow.png"
                alt="The Zdrovy app asking what to track today"
                ratio="portrait"
                fade
              />
            </div>
          </div>
        </Section>

        {/* 2 — problem paired with the solution */}
        <Section tone="band">
          <div className="grid">
            <h2 className="text2 col-5">Every app hands you numbers.</h2>
            <h2 className="text2 col-5 col-start-8">
              This one tells you what they mean.
            </h2>
          </div>
        </Section>

        {/* 3 — what it does, one block each */}
        {FEATURES.map((f, i) => (
          <Section key={f.title}>
            <FeatureRow
              title={f.title}
              text={f.text}
              items={f.items}
              flip={i % 2 === 1}
              media={
                <Figure
                  ratio="portrait"
                  src={f.src}
                  alt={f.alt}
                  fit="contain"
                />
              }
            />
          </Section>
        ))}

        {/* 4 — CTA */}
        <Section>
          <div className="grid">
            <div className="col-8 stack">
              <h2 className="text2">Still building it. Come in early.</h2>
              <div className="hero-cta">
                <Link
                  href="mailto:zdrovy.co@gmail.com?subject=Early%20access%20to%20Zdrovy"
                  className="pill pill--solid"
                >
                  Get early access
                </Link>
                <Link href="/business" className="pill">
                  Run a Żabka? See MyShop
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
