import { Box } from "@mui/material";

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Icon = ({
  src,
  alt,
  width = 24,
  height = 24,
}: IconProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Icon;
