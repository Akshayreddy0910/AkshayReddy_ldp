import type { ReactNode } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  className?: string;
}

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error = false,
  helperText,
  disabled = false,
  startAdornment,
  endAdornment,
  className = "",
}: InputProps) => {
  const classes = ["input", error ? "input--error" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="input__field">
        {startAdornment && <span className="input__adornment">{startAdornment}</span>}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />

        {endAdornment && <span className="input__adornment">{endAdornment}</span>}
      </div>

      {helperText && <span className="input__helper-text">{helperText}</span>}
    </div>
  );
};

export default Input;
