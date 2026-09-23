import { ReactNode } from "react";

type FeatureRowProps = {
  /** 01 / 02 / 03 when the rows are a sequence rather than a list. */
  marker?: string;
  title: string;
  text?: string;
  /** Short noun phrases. Only list what the product actually does. */
  items?: string[];
  /** Usually a <Figure>. Sits in a tinted panel beside the copy. */
  media: ReactNode;
  /** Puts the media on the right. Alternate it down the page. */
  flip?: boolean;
};

export default function FeatureRow({
  marker,
  title,
  text,
  items,
  media,
  flip = false,
}: FeatureRowProps) {
  return (
    <div className="feature-row" data-flip={flip ? "true" : undefined}>
      <div className="feature-row-media">{media}</div>

      <div className="feature-row-body">
        {marker && <span className="marker">{marker}</span>}
        <h2 className="text2">{title}</h2>
        {text && <p className="lead">{text}</p>}
        {items && items.length > 0 && (
          <ul className="checklist">
            {items.map((item) => (
              <li key={item}>
                <svg
                  className="check"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M5.8 10.3l2.7 2.7 5.7-5.7"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
