import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface IconProps {
  type: "close" | "attachment";
}

const Icon = ({ type }: IconProps) => {
  if (type === "close") return <CloseIcon color="action" />;
  if (type === "attachment") return <AttachFileIcon color="action" fontSize="small" />;
  return null;
};

export default Icon;