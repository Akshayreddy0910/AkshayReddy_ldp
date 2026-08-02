import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { NOTICE_CARD_TEXT } from "../../../utils/constants";

const NoticeCard = () => {
  const handleSubmit = () => {
    alert(NOTICE_CARD_TEXT.submitAlertMessage);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "40px auto", padding: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography text={NOTICE_CARD_TEXT.title} variant="title" bold />
          <Icon type="close" />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography text={NOTICE_CARD_TEXT.from} variant="label" />
        <Box sx={{ mt: 0.5 }}>
          <Typography text={NOTICE_CARD_TEXT.to} variant="label" />
        </Box>
        <Box sx={{ mt: 0.5, mb: 2 }}>
          <Typography text={NOTICE_CARD_TEXT.subject} variant="label" bold />
        </Box>

        <Box sx={{ backgroundColor: "#FDE8EC", borderRadius: 2, p: 2, mb: 2 }}>
          <Typography text={NOTICE_CARD_TEXT.warningLine1} variant="small" color="secondary.main" />
          <Box sx={{ mt: 0.5 }}>
            <Typography text={NOTICE_CARD_TEXT.warningLine2} variant="small" color="secondary.main" />
          </Box>
        </Box>

        <Typography text={NOTICE_CARD_TEXT.greeting} />
        <Box sx={{ mt: 1.5 }}>
          <Typography text={NOTICE_CARD_TEXT.bodyParagraph} />
        </Box>

        <Box sx={{ mt: 1.5 }}>
          <Typography text={NOTICE_CARD_TEXT.chargeItem} bold />
        </Box>

        <Box sx={{ mt: 1.5 }}>
          <Typography text={NOTICE_CARD_TEXT.disputeParagraph} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography text={NOTICE_CARD_TEXT.signOffLine1} />
          <Typography text={NOTICE_CARD_TEXT.signOffLine2} />
        </Box>

        <Box sx={{ mt: 2.5 }}>
          <Typography text={NOTICE_CARD_TEXT.attachmentsHeading} bold />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Icon type="attachment" />
            <Typography text={NOTICE_CARD_TEXT.attachment1} variant="small" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.75 }}>
            <Icon type="attachment" />
            <Typography text={NOTICE_CARD_TEXT.attachment2} variant="small" />
          </Box>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button label={NOTICE_CARD_TEXT.submitButton} onClick={handleSubmit} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;