interface TypographyProps {
  text: string;
  variant?: "title" | "label" | "body" | "small";
  bold?: boolean;
}

const styles = {
  base: {
    margin: 0,
    color: "darkslategray",
    textAlign: "left" as const,
  },
  title: {
    fontSize: "20px",
  },
  label: {
    fontSize: "14px",
  },
  small: {
    fontSize: "12px",
  },
  body: {
    fontSize: "14px",
  },
  bold: {
    fontWeight: "bold" as const,
  },
  normal: {
    fontWeight: "normal" as const,
  },
};

const Typography = ({ text, variant = "body", bold = false }: TypographyProps) => {
  const getVariantStyle = () => {
    if (variant === "title") return styles.title;
    if (variant === "label") return styles.label;
    if (variant === "small") return styles.small;
    return styles.body;
  };

  return (
    <p style={{ ...styles.base, ...getVariantStyle(), ...(bold ? styles.bold : styles.normal) }}>
      {text}
    </p>
  );
};

export default Typography;