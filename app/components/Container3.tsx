import Link from "next/link";

type Container3Props = {
  columns?: 1 | 2 | 3;

  image1?: string;
  imageAlt1?: string;
  title1?: string;
  text1?: string;
  href1?: string;

  image2?: string;
  imageAlt2?: string;
  title2?: string;
  text2?: string;
  href2?: string;

  image3?: string;
  imageAlt3?: string;
  title3?: string;
  text3?: string;
  href3?: string;

  image4?: string;
  imageAlt4?: string;
  title4?: string;
  text4?: string;
  href4?: string;

  image5?: string;
  imageAlt5?: string;
  title5?: string;
  text5?: string;
  href5?: string;

  image6?: string;
  imageAlt6?: string;
  title6?: string;
  text6?: string;
  href6?: string;
};

type Item = {
  image: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  href?: string;
};

export default function Container3(props: Container3Props) {
  const { columns = 2 } = props;

  const raw: (Item | null)[] = [
    props.image1 ? { image: props.image1, imageAlt: props.imageAlt1, title: props.title1, text: props.text1, href: props.href1 } : null,
    props.image2 ? { image: props.image2, imageAlt: props.imageAlt2, title: props.title2, text: props.text2, href: props.href2 } : null,
    props.image3 ? { image: props.image3, imageAlt: props.imageAlt3, title: props.title3, text: props.text3, href: props.href3 } : null,
    props.image4 ? { image: props.image4, imageAlt: props.imageAlt4, title: props.title4, text: props.text4, href: props.href4 } : null,
    props.image5 ? { image: props.image5, imageAlt: props.imageAlt5, title: props.title5, text: props.text5, href: props.href5 } : null,
    props.image6 ? { image: props.image6, imageAlt: props.imageAlt6, title: props.title6, text: props.text6, href: props.href6 } : null,
  ];

  const items = raw.filter((x): x is Item => x !== null);

  return (
    <section className="container3">
      <div className="container3-inner" data-columns={columns}>
        {items.map((item, i) => {
          const href = item.href ?? "#";
          return (
            <article key={i} className="container3-item">
              <Link href={href} className="container3-image-link">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className="container3-image"
                />
              </Link>
              <div className="container3-body">
                {item.title && (
                  <h3 className="container3-title">
                    <Link href={href}>{item.title}</Link>
                  </h3>
                )}
                {item.text && <p className="container3-text">{item.text}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
