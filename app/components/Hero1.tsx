import Link from "next/link";

type Hero1Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  linkLabel?: string;
  linkHref?: string;
  image?: string;
  imageAlt?: string;
};

export default function Hero1({
  eyebrow,
  title,
  text,
  linkLabel,
  linkHref = "#",
  image,
  imageAlt = "",
}: Hero1Props) {
  return (
    <section className="hero1">
      <div className="hero1-copy">
        {eyebrow && <p className="hero1-eyebrow">{eyebrow}</p>}
        <h1 className="hero1-title">{title}</h1>
        {text && <p className="hero1-text">{text}</p>}
        {linkLabel && (
          <Link
            href={linkHref}
            className="toolbar-pill toolbar-pill--solid hero1-cta"
          >
            {linkLabel}
          </Link>
        )}
      </div>

      {image && (
        <div className="hero1-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="hero1-image" />
        </div>
      )}
    </section>
  );
}
