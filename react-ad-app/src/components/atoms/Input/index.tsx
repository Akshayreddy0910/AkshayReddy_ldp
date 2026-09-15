import {
  TextField,
  InputAdornment,
} from "@mui/material";

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
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const InputField = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error = false,
  helperText,
  startIcon,
  endIcon,
}: InputProps) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          ) : undefined,

          endAdornment: endIcon ? (
            <InputAdornment position="end">
              {endIcon}
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
};

export default InputField;