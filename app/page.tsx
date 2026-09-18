import Toolbar from "./components/Toolbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Toolbar />
      <main>
        <Hero
          title="Body. Mind. Lifestyle."
          text="Everyday with Zdrovy."
          ctaLabel="Explore"
          ctaHref="#products"
          image="/hero.jpg"
        />

        <Section id="products" heading="Products" tone="band">
          <Cards
            columns={2}
            items={[
              {
                eyebrow: "ZDROVY App",
                title: "Plan smarter. Eat better.",
                text: "Track your progress — everything in one place.",
                image: "/appshow.png",
                href: "https://app.zdrovy.com",
              },
              {
                eyebrow: "For Business",
                title: "MyShop for Żabka.",
                text: "Assign tasks to your team and manage them remotely — from your phone or laptop.",
                image: "/myshopshow.png",
                href: "/business",
              },
            ]}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
