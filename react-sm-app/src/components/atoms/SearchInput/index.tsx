import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import type { SxProps, Theme } from "@mui/material/styles";

import { getSearchInputSx } from "./styles";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width: number | string;
  sx?: SxProps<Theme>;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  width,
  sx,
}: SearchInputProps) => {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      size="small"
      onChange={(e) => onChange(e.target.value)}
      sx={getSearchInputSx(width, sx)}
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
