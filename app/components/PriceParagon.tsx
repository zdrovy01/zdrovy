"use client";

import { useEffect, useRef, useState } from "react";

export default function PriceParagon({ src, alt = "" }: { src: string; alt?: string }) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setInView(e.isIntersecting));
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`price-paragon${inView ? " is-in-view" : ""}`}
    />
  );
}
