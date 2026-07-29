interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const styles = {
  button: {
    backgroundColor: "darkviolet",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
};

export default Button;