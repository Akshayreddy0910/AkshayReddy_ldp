interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ src, alt, width = 24, height = 24, className = "" }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={["icon", className].filter(Boolean).join(" ")}
    />
  );
};

export default Icon;
