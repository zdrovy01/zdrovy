import Link from "next/link";

type Container5Props = {
  eyebrow1?: string;
  image1?: string;
  imageAlt1?: string;
  title1?: string;
  text1?: string;
  linkLabel1?: string;
  linkHref1?: string;

  eyebrow2?: string;
  image2?: string;
  imageAlt2?: string;
  title2?: string;
  text2?: string;
  linkLabel2?: string;
  linkHref2?: string;

  eyebrow3?: string;
  image3?: string;
  imageAlt3?: string;
  title3?: string;
  text3?: string;
  linkLabel3?: string;
  linkHref3?: string;

  eyebrow4?: string;
  image4?: string;
  imageAlt4?: string;
  title4?: string;
  text4?: string;
  linkLabel4?: string;
  linkHref4?: string;
};

type Row = {
  eyebrow?: string;
  image: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  linkLabel?: string;
  linkHref?: string;
};

export default function Container5(props: Container5Props) {
  const raw: (Row | null)[] = [
    props.image1 ? { eyebrow: props.eyebrow1, image: props.image1, imageAlt: props.imageAlt1, title: props.title1, text: props.text1, linkLabel: props.linkLabel1, linkHref: props.linkHref1 } : null,
    props.image2 ? { eyebrow: props.eyebrow2, image: props.image2, imageAlt: props.imageAlt2, title: props.title2, text: props.text2, linkLabel: props.linkLabel2, linkHref: props.linkHref2 } : null,
    props.image3 ? { eyebrow: props.eyebrow3, image: props.image3, imageAlt: props.imageAlt3, title: props.title3, text: props.text3, linkLabel: props.linkLabel3, linkHref: props.linkHref3 } : null,
    props.image4 ? { eyebrow: props.eyebrow4, image: props.image4, imageAlt: props.imageAlt4, title: props.title4, text: props.text4, linkLabel: props.linkLabel4, linkHref: props.linkHref4 } : null,
  ];

  const rows = raw.filter((x): x is Row => x !== null);

  return (
    <section className="container5">
      {rows.map((row, i) => (
        <div key={i} className="container5-row" data-flip={i % 2 === 1 ? "true" : "false"}>
          <div className="container5-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={row.image} alt={row.imageAlt ?? ""} className="container5-image" />
          </div>
          <div className="container5-body">
            {row.eyebrow && <p className="container5-eyebrow">{row.eyebrow}</p>}
            {row.title && <h3 className="container5-title">{row.title}</h3>}
            {row.text && <p className="container5-text">{row.text}</p>}
            {row.linkLabel && (
              <Link href={row.linkHref ?? "#"} className="toolbar-pill toolbar-pill--solid container5-btn">
                {row.linkLabel}
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
