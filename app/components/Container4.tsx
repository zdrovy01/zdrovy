import Link from "next/link";
import { ReactNode } from "react";

type Container4Props = {
  eyebrow?: string;
  title: string;
  text: string;
  linkLabel?: string;
  linkHref?: string;
  cta?: ReactNode;
  image: string;
  imageAlt?: string;
};

export default function Container4({
  eyebrow,
  title,
  text,
  linkLabel,
  linkHref = "#",
  cta,
  image,
  imageAlt = "",
}: Container4Props) {
  return (
    <section className="container4">
      <div className="container4-card">
        <div className="container4-body">
          {eyebrow && <p className="container4-eyebrow">{eyebrow}</p>}
          <h3 className="container4-title">{title}</h3>
          <p className="container4-text">{text}</p>
          {cta && <div className="container4-cta">{cta}</div>}
          {!cta && linkLabel && (
            <Link href={linkHref} className="container4-link">
              {linkLabel} ›
            </Link>
          )}
        </div>
        <div className="container4-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="container4-image" />
        </div>
      </div>
    </section>
  );
}
