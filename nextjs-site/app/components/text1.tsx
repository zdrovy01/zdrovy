import { ElementType, ReactNode } from "react";

type Text1Props = {
  children?: ReactNode;
  /** HTML tag to render, defaults to h2 */
  as?: ElementType;
  className?: string;
};

export default function Text1({ children = "Text1", as: Tag = "h2", className }: Text1Props) {
  return <Tag className={className ? `text1 ${className}` : "text1"}>{children}</Tag>;
}
