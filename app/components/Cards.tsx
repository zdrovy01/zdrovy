import Link from "next/link";

export type Card = {
  title: string;
  eyebrow?: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
};

type CardsProps = {
  items: Card[];
  columns?: 1 | 2 | 3;
  /** Cycles a highlight across the cards to draw the eye along the steps. */
  autoCycle?: boolean;
};

export default function Cards({
  items,
  columns = 2,
  autoCycle = false,
}: CardsProps) {
  return (
    <div
      className={`cards${autoCycle ? " cards--autocycle" : ""}`}
      data-columns={columns}
    >
      {items.map((item, i) => (
        <Link key={i} href={item.href ?? "#"} className="card">
          <div className="card-body">
            {item.eyebrow && <p className="eyebrow">{item.eyebrow}</p>}
            <h3 className="card-title">{item.title}</h3>
            {item.text && <p className="card-text">{item.text}</p>}
          </div>

          {item.image && (
            <div className="card-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.imageAlt ?? ""}
                className="card-img"
              />
            </div>
          )}

          <span className="card-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 3 L9 7 L5 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
