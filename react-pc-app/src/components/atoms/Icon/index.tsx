import type { CSSProperties, ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  style?: CSSProperties;
}

const Icon = ({ icon, style }: IconProps) => {
  return <span style={style}>{icon}</span>;
};

export default Icon;
