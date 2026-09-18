import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Optional heading rendered above the content at the h2 scale. */
  heading?: string;
  /** "band" tints the section and flips cards inside it to the page colour. */
  tone?: "plain" | "band";
  id?: string;
};

/**
 * The only source of vertical rhythm on the site.
 * Never add margins between sections — add another Section.
 */
export default function Section({
  children,
  heading,
  tone = "plain",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section${tone === "band" ? " section--band" : ""}`}
    >
      <div className="section-inner stack">
        {heading && <h2 className="text2">{heading}</h2>}
        {children}
      </div>
    </section>
  );
}
