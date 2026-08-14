import type { ElementType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";

interface IconProps {
  icon: ElementType<SvgIconProps>;
  color?: SvgIconProps["color"];
  fontSize?: SvgIconProps["fontSize"];
}

const Icon = ({ icon: IconComponent, color, fontSize }: IconProps) => {
  return <IconComponent color={color} fontSize={fontSize} />;
};

export default Icon;