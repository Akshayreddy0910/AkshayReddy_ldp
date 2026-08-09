import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

interface StatusBadgeProps {
  status: string;
}

const STATUS_COLOR_MAP: Record<string, ChipProps["color"]> = {
  CLEAR: "success",
  CONSIDER: "warning",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Chip
      label={status}
      size="small"
      color={STATUS_COLOR_MAP[status] ?? "default"}
    />
  );
};

export default StatusBadge;
