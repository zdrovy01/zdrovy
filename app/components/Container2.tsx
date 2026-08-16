import Link from "next/link";

type Container2Props = {
  image: string;
  imageAlt?: string;
  title: string;
  text: string;
  href?: string;
};

export default function Container2({
  image,
  imageAlt = "",
  title,
  text,
  href = "#",
}: Container2Props) {
  return (
    <section className="container2">
      <div className="container2-inner">
        <Link href={href} className="container2-image-link">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="container2-image" />
        </Link>
        <div className="container2-body">
          <h2 className="container2-title">
            <Link href={href}>{title}</Link>
          </h2>
          <p className="container2-text">{text}</p>
        </div>
      </div>
    </section>
  );
}
