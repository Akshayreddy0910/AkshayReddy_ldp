import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

interface StatusBadgeProps {
  status: string;
  color?: ChipProps["color"];
}

const STATUS_COLOR_MAP: Record<string, ChipProps["color"]> = {
  CLEAR: "success",
  CONSIDER: "warning",
};

const StatusBadge = ({ status, color }: StatusBadgeProps) => {
  return (
    <Chip
      label={status}
      size="small"
      color={color ?? STATUS_COLOR_MAP[status] ?? "default"}
    />
  );
};

export default StatusBadge;