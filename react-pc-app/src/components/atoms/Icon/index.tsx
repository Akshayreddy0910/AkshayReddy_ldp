interface IconProps {
  type: "close" | "attachment";
}

const styles = {
  icon: {
    fontSize: "16px",
    color: "dimgray",
  },
};

const Icon = ({ type }: IconProps) => {
  const getSymbol = () => {
    if (type === "close") return "✕";
    if (type === "attachment") return "📎";
    return "";
  };

  return <span style={styles.icon}>{getSymbol()}</span>;
};

export default Icon;