import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

interface StatusBadgeProps {
  status: string;
  color: ChipProps["color"];
}

const StatusBadge = ({ status, color }: StatusBadgeProps) => {
  return (
    <Chip
      label={status}
      size="small"
      color={color}
    />
  );
};

export default StatusBadge;
