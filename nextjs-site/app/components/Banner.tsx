import { ReactNode } from "react";

type BannerProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function Banner({
  eyebrow = "Eyebrow",
  title = "Title",
  description,
  className,
}: BannerProps) {
  return (
    <section className={className ? `banner ${className}` : "banner"}>
      {eyebrow && <p className="banner-eyebrow">{eyebrow}</p>}
      {title && <h2 className="banner-title">{title}</h2>}
      {description && <p className="banner-description">{description}</p>}
    </section>
  );
}
