import Link from "next/link";

type Container1Props = {
  image: string;
  imageAlt?: string;
  title: string;
  text: string;
  href?: string;
};

export default function Container1({
  image,
  imageAlt = "",
  title,
  text,
  href = "#",
}: Container1Props) {
  return (
    <section className="container1">
      <Link href={href} className="container1-image-link">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} className="container1-image" />
      </Link>
      <div className="container1-body">
        <h1 className="container1-title">
          <Link href={href}>{title}</Link>
        </h1>
        <p className="container1-text">{text}</p>
      </div>
    </section>
  );
}
