import Link from "next/link";
import { ReactNode } from "react";

type HeroProps = {
  title: string;
  /** A string, or markup when the line carries a wordmark. */
  eyebrow?: ReactNode;
  /** A string, or markup when the line is a lockup rather than a sentence. */
  text?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  imageAlt?: string;
  align?: "center" | "left";
};

/**
 * The single hero for every page. Everything except `title` is optional —
 * omit a prop and that element is not rendered.
 */
export default function Hero({
  title,
  eyebrow,
  text,
  ctaLabel,
  ctaHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  image,
  imageAlt = "",
  align = "center",
}: HeroProps) {
  return (
    <section className="hero" data-align={align}>
      <div className="hero-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="t-display">{title}</h1>
        {text && <p className="lead">{text}</p>}
        {(ctaLabel || secondaryLabel) && (
          <div className="hero-cta">
            {ctaLabel && (
              <Link href={ctaHref} className="pill pill--solid">
                {ctaLabel}
              </Link>
            )}
            {secondaryLabel && (
              <Link href={secondaryHref} className="pill">
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>

      {image && (
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="hero-img" />
        </div>
      )}
    </section>
  );
}
