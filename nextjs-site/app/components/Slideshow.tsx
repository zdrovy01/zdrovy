"use client";

import { useEffect, useState } from "react";

type Slide = {
  premain: string;
  main: string;
  text: string;
};

const SLIDES: Slide[] = [
  {
    premain: "What's New",
    main: "Fresh Gear",
    text: "Prepare for impact. Power up your potential with our latest gear — engineered for smarter movement and building real-world strength.",
  },
  {
    premain: "Eat Smarter",
    main: "Plan Your Week",
    text: "Build healthy meal plans based on real grocery prices and save money on every shop.",
  },
  {
    premain: "For Business",
    main: "Partner With Us",
    text: "Bring ZDROVY to your stores and customers. Smarter nutrition, powered by real data.",
  },
];

const INTERVAL = 3500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="slideshow">
      <div className="slideshow-stack">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="slideshow-slide"
            data-active={i === index}
            aria-hidden={i !== index}
          >
            <p className="text2-premain">{slide.premain}</p>
            <h2 className="text2-main">{slide.main}</h2>
            <p className="text2-text">{slide.text}</p>
          </div>
        ))}
      </div>

      <div className="slideshow-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className="slideshow-dot"
            data-active={i === index}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
