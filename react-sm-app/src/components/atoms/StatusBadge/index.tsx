import Chip from "@mui/material/Chip";

interface StatusBadgeProps {
  status: "CLEAR" | "CONSIDER";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isClear = status === "CLEAR";

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        height: 28,
        minWidth: 90,
        borderRadius: "6px",
        fontFamily: "Inter",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.4px",

        bgcolor: isClear ? "#DDF8EE" : "#FFF4D6",
        color: isClear ? "#00B087" : "#C68A00",

        "& .MuiChip-label": {
          px: 1.5,
        },
      }}
    />
  );
};

export default StatusBadge;