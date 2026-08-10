import { ReactNode } from "react";

type Text2Props = {
  /** small uppercase eyebrow above the heading, e.g. "WHAT'S NEW" */
  premain?: ReactNode;
  /** big heading, e.g. "Fresh Gear" */
  main?: ReactNode;
  /** description paragraph below the heading */
  text?: ReactNode;
  className?: string;
};

export default function Text2({
  premain = "Text",
  main = "Text",
  text = "Text",
  className,
}: Text2Props) {
  return (
    <div className={className ? `text2 ${className}` : "text2"}>
      {premain && <p className="text2-premain">{premain}</p>}
      {main && <h2 className="text2-main">{main}</h2>}
      {text && <p className="text2-text">{text}</p>}
    </div>
  );
}
