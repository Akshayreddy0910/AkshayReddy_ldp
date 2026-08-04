import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
}: SearchInputProps) => {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      size="small"
      onChange={(e) => onChange(e.target.value)}
      sx={{
        width: 320,
        "& .MuiOutlinedInput-root": {
          height: 42,
          borderRadius: 2,
          fontFamily: "Inter",
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;