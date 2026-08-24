import Toolbar from "./components/Toolbar";
import Container3 from "./components/Container3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.avif" alt="" className="hero-image-img" />
          <h4 className="hero-tagline">
            Every day with ZDROVY. Body. Mind. Lifestyle.
          </h4>
        </section>

        <Container3
          columns={2}
          eyebrow1="ZDROVY App"
          image1="/appshow.png"
          title1="Plan smarter. Eat better."
          text1="Track your progress — everything in one place."
          href1="https://app.zdrovy.com"
          eyebrow2="For Business"
          image2="/myshopshow.png"
          title2="MyShop for Żabka."
          text2="Run your store from one screen and bring smart nutrition to your customers."
          href2="/business"
        />
      </main>
      <Footer />
    </>
  );
}
