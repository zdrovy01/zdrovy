import { ReactNode } from "react";

type Banner2Props = {
  title?: ReactNode;
  className?: string;
};

export default function Banner2({ title = "Title", className }: Banner2Props) {
  return (
    <section className={className ? `banner2 ${className}` : "banner2"}>
      <h2 className="banner2-title">{title}</h2>
    </section>
  );
}
