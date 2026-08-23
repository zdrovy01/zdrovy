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
        </section>

        <Container3
          columns={2}
          image1="/appshow.png"
          title1="Zdrovy App"
          text1="Plan smarter, eat better and track your progress — everything in one place."
          href1="https://app.zdrovy.com"
          image2="/myshopshow.png"
          title2="For Business"
          text2="MyShop for Żabka — run your store from one screen and bring smart nutrition to your customers."
          href2="/business"
        />
      </main>
      <Footer />
    </>
  );
}
