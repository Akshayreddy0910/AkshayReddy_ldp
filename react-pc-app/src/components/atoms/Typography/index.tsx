import type { CSSProperties } from "react";

interface TypographyProps {
  text: string;
  style?: CSSProperties;
}

const Typography = ({ text, style }: TypographyProps) => {
  return <p style={style}>{text}</p>;
};

export default Typography;
