import Toolbar from "./components/Toolbar";
import Section1 from "./components/section1";

export default function Home() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="hero-container">
          <div className="eyebrow-text">Better Habits Start Here.</div>

          <h1 className="hero-h1">Plan smarter. Eat better. Spend less.</h1>

          <p className="hero-description">
            Build healthy meal plans based on real grocery prices.
          </p>

          <a href="https://app.zdrovy.com" className="btn-primary">
            Try Web App
          </a>
        </section>

        <Section1
          premain="What's New"
          main="The ZDROVY App"
          text="Plan smarter and eat better. Power up your week with meal plans built on real grocery prices — designed to save you money and build lasting healthy habits."
          cardTitle="Meet the ZDROVY App"
          cardDesc="Bringing the same smart meal planning to your pocket — grocery prices, recipes and shopping lists, now in one compact package."
          ctaLabel="Open App ↗"
          ctaHref="https://app.zdrovy.com"
          image="/app-showcase.png"
          imageAlt="ZDROVY App preview"
          imageWidth={1310}
          imageHeight={2708}
          mediaFit="phone"
        />

        <Section1
          premain="In the Kitchen"
          main="Cooking with ZDROVY"
          text="Turn your plan into real meals. Follow simple recipes built around what you already bought — less waste, more flavor, every day of the week."
          cardTitle="Cook What You Planned"
          cardDesc="Step-by-step recipes matched to your grocery list and budget, so healthy cooking fits right into your week."
          ctaLabel="Browse Recipes ↗"
          ctaHref="https://app.zdrovy.com"
          image="/hero2.jpg"
          imageAlt="Cooking with ZDROVY"
          imageWidth={3962}
          imageHeight={2972}
          mediaFit="cover"
          background="white"
        />

        <Section1
          premain="Budgeting"
          main="Check prices per meal"
          text="See exactly what each meal costs before you cook it, using real grocery prices from stores near you."
          cardTitle="Know the cost of every plate"
          cardDesc="Break down the price of any meal ingredient by ingredient, so you always eat within your budget."
          ctaLabel="Open App ↗"
          ctaHref="https://app.zdrovy.com"
          image="/app-showcase3.jpg"
          imageAlt="Check prices per meal"
          imageWidth={3347}
          imageHeight={4463}
          mediaFit="cover"
        />

        <Section1
          premain="Nutrition"
          main="How much calories, carbs, protein & fat do you need?"
          text="Get personalized daily targets based on your body, goals and activity — no guesswork required."
          cardTitle="Your personal daily targets"
          cardDesc="ZDROVY calculates how much of each nutrient you need every day and keeps you on track toward your goal."
          ctaLabel="Open App ↗"
          ctaHref="https://app.zdrovy.com"
          image="/app-showcase2.png"
          imageAlt="Personalized nutrition targets"
          imageWidth={2620}
          imageHeight={5416}
          mediaFit="phone"
        />

        <Section1
          premain="Community"
          main="More on ZDROVY Instagram"
          text="Recipes, tips and behind-the-scenes — follow along for daily inspiration to eat better and spend less."
          cardTitle="Follow @zdrovyclub"
          cardDesc="Join the community for fresh recipes, budget tips and healthy-habit inspiration every day."
          ctaLabel="Open Instagram ↗"
          ctaHref="https://instagram.com/zdrovyclub"
          image="/hero.jpg"
          imageAlt="ZDROVY on Instagram"
          imageWidth={5761}
          imageHeight={3841}
          mediaFit="cover"
          background="white"
        />
      </main>
    </>
  );
}
