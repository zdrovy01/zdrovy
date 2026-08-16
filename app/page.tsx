import Toolbar from "./components/Toolbar";

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
      </main>
    </>
  );
}
