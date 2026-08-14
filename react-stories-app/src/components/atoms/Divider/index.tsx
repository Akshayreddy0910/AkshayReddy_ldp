interface DividerProps {
  label?: string;
  className?: string;
}

const Divider = ({ label, className = "" }: DividerProps) => {
  const classes = ["divider", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <span className="divider__line" />
      {label && <span className="divider__label">{label}</span>}
      <span className="divider__line" />
    </div>
  );
};

export default Divider;
