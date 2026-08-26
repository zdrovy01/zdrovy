import { ReactNode } from "react";

type Text2Props = {
  children: ReactNode;
  as?: "h2" | "h3";
};

export default function Text2({ children, as: Tag = "h2" }: Text2Props) {
  return <Tag className="text2">{children}</Tag>;
}
