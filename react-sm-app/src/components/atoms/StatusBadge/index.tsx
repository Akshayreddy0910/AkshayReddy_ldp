import Chip from "@mui/material/Chip";

interface StatusBadgeProps {
  status: "CLEAR" | "CONSIDER";
}

const STATUS_COLOR_MAP = {
  CLEAR: "success",
  CONSIDER: "warning",
} as const;

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <Chip label={status} size="small" color={STATUS_COLOR_MAP[status]} />;
};

export default StatusBadge;
