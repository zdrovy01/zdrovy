import Link from "next/link";

type Container3Props = {
  columns?: 1 | 2 | 3;
  autoCycle?: boolean;

  eyebrow1?: string;
  image1?: string;
  imageAlt1?: string;
  title1?: string;
  text1?: string;
  href1?: string;

  eyebrow2?: string;
  image2?: string;
  imageAlt2?: string;
  title2?: string;
  text2?: string;
  href2?: string;

  eyebrow3?: string;
  image3?: string;
  imageAlt3?: string;
  title3?: string;
  text3?: string;
  href3?: string;

  eyebrow4?: string;
  image4?: string;
  imageAlt4?: string;
  title4?: string;
  text4?: string;
  href4?: string;

  eyebrow5?: string;
  image5?: string;
  imageAlt5?: string;
  title5?: string;
  text5?: string;
  href5?: string;

  eyebrow6?: string;
  image6?: string;
  imageAlt6?: string;
  title6?: string;
  text6?: string;
  href6?: string;
};

type Item = {
  eyebrow?: string;
  image: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  href?: string;
};

export default function Container3(props: Container3Props) {
  const { columns = 2, autoCycle = false } = props;

  const raw: (Item | null)[] = [
    props.image1 ? { eyebrow: props.eyebrow1, image: props.image1, imageAlt: props.imageAlt1, title: props.title1, text: props.text1, href: props.href1 } : null,
    props.image2 ? { eyebrow: props.eyebrow2, image: props.image2, imageAlt: props.imageAlt2, title: props.title2, text: props.text2, href: props.href2 } : null,
    props.image3 ? { eyebrow: props.eyebrow3, image: props.image3, imageAlt: props.imageAlt3, title: props.title3, text: props.text3, href: props.href3 } : null,
    props.image4 ? { eyebrow: props.eyebrow4, image: props.image4, imageAlt: props.imageAlt4, title: props.title4, text: props.text4, href: props.href4 } : null,
    props.image5 ? { eyebrow: props.eyebrow5, image: props.image5, imageAlt: props.imageAlt5, title: props.title5, text: props.text5, href: props.href5 } : null,
    props.image6 ? { eyebrow: props.eyebrow6, image: props.image6, imageAlt: props.imageAlt6, title: props.title6, text: props.text6, href: props.href6 } : null,
  ];

  const items = raw.filter((x): x is Item => x !== null);

  return (
    <section className={`container3${autoCycle ? " container3--autocycle" : ""}`}>
      <div className="container3-inner" data-columns={columns}>
        {items.map((item, i) => {
          const href = item.href ?? "#";
          return (
            <Link key={i} href={href} className="container3-card">
              <div className="container3-body">
                {item.eyebrow && <p className="container3-eyebrow">{item.eyebrow}</p>}
                {item.title && <h3 className="container3-title">{item.title}</h3>}
                {item.text && <p className="container3-text">{item.text}</p>}
              </div>
              <div className="container3-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className="container3-image"
                />
              </div>
              <span className="container3-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3 L9 7 L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
