import Image from "next/image";
import Link from "next/link";
import Text2 from "./text2";

type Section1Props = {
  premain: string;
  main: string;
  text: string;
  cardTitle: string;
  cardDesc: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** how the media image sits: "phone" (tall, cropped bottom) or "cover" (fills the right side) */
  mediaFit?: "phone" | "cover";
  /** section background: "default" (grey page bg) or "white" */
  background?: "default" | "white";
};

export default function Section1({
  premain,
  main,
  text,
  cardTitle,
  cardDesc,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  mediaFit = "phone",
  background = "default",
}: Section1Props) {
  return (
    <section className="appsection" data-bg={background}>
      <Text2 premain={premain} main={main} text={text} />

      <div className="appsection-card">
        <div className="appsection-copy">
          <h3 className="appsection-title">{cardTitle}</h3>
          <p className="appsection-desc">{cardDesc}</p>
          <Link
            className="appsection-cta"
            href={ctaHref}
            target="_blank"
            rel="noopener"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="appsection-media" data-fit={mediaFit}>
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="appsection-img"
          />
        </div>
      </div>
    </section>
  );
}
