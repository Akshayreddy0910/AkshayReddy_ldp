const styles = {
  icon: {
    fontSize: "16px",
    color: "dimgray",
  },
};

interface IconProps {
  icon: React.ReactNode;
}

const Icon = ({ icon }: IconProps) => {
  return <span style={styles.icon}>{icon}</span>;
};

export default Icon;
