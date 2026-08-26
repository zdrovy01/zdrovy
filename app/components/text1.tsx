import { ReactNode } from "react";

type Text1Props = {
  children: ReactNode;
  as?: "h1" | "h2";
};

export default function Text1({ children, as: Tag = "h1" }: Text1Props) {
  return <Tag className="text1">{children}</Tag>;
}
