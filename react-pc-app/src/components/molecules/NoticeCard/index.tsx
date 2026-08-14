import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { NOTICE_CARD_TEXT } from "../../../utils/constants";

const styles = {
  card: {
    maxWidth: 600,
    margin: "40px auto",
    padding: 3,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },

  title: {
    typography: "h5",
    color: "text.primary",
  },

  dividerTop: {
    mb: 2,
  },

  secondaryText: {
    typography: "body2",
    color: "text.secondary",
  },

  smallSpacing: {
    mt: 0.5,
  },

  subjectContainer: {
    mt: 0.5,
    mb: 2,
  },

  subject: {
    typography: "body2",
    fontWeight: "bold",
    color: "text.primary",
  },

  warningBox: {
    backgroundColor: "warning.light",
    borderRadius: 2,
    p: 2,
    mb: 2,
  },

  warningText: {
    typography: "caption",
    color: "secondary.main",
  },

  warningSecondLine: {
    mt: 0.5,
  },

  greeting: {
    typography: "body1",
    color: "text.secondary",
  },

  bodyParagraph: {
    mt: 1.5,
  },

  bodyText: {
    typography: "body1",
    color: "text.secondary",
  },

  chargeItem: {
    mt: 1.5,
  },

  boldBodyText: {
    typography: "body1",
    fontWeight: "bold",
    color: "text.primary",
  },

  disputeParagraph: {
    mt: 1.5,
  },

  signOff: {
    mt: 2,
  },

  attachments: {
    mt: 2.5,
  },

  attachmentsHeading: {
    typography: "body1",
    fontWeight: "bold",
    color: "text.primary",
  },

  attachmentRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1,
  },

  secondAttachmentRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 0.75,
  },

  attachmentText: {
    typography: "caption",
    color: "text.secondary",
  },

  dividerBottom: {
    my: 2.5,
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  submitButton: {
    backgroundColor: "primary.main",
    color: "white",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
};

const NoticeCard = () => {
  const handleSubmit = () => {
    alert(NOTICE_CARD_TEXT.submitAlertMessage);
  };

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Box sx={styles.header}>
          <Typography
            text={NOTICE_CARD_TEXT.title}
            sx={styles.title}
          />

          <Icon icon={CloseIcon} color="action" />
        </Box>

        <Divider sx={styles.dividerTop} />

        <Typography
          text={NOTICE_CARD_TEXT.from}
          sx={styles.secondaryText}
        />

        <Box sx={styles.smallSpacing}>
          <Typography
            text={NOTICE_CARD_TEXT.to}
            sx={styles.secondaryText}
          />
        </Box>

        <Box sx={styles.subjectContainer}>
          <Typography
            text={NOTICE_CARD_TEXT.subject}
            sx={styles.subject}
          />
        </Box>

        <Box sx={styles.warningBox}>
          <Typography
            text={NOTICE_CARD_TEXT.warningLine1}
            sx={styles.warningText}
          />

          <Box sx={styles.warningSecondLine}>
            <Typography
              text={NOTICE_CARD_TEXT.warningLine2}
              sx={styles.warningText}
            />
          </Box>
        </Box>

        <Typography
          text={NOTICE_CARD_TEXT.greeting}
          sx={styles.greeting}
        />

        <Box sx={styles.bodyParagraph}>
          <Typography
            text={NOTICE_CARD_TEXT.bodyParagraph}
            sx={styles.bodyText}
          />
        </Box>

        <Box sx={styles.chargeItem}>
          <Typography
            text={NOTICE_CARD_TEXT.chargeItem}
            sx={styles.boldBodyText}
          />
        </Box>

        <Box sx={styles.disputeParagraph}>
          <Typography
            text={NOTICE_CARD_TEXT.disputeParagraph}
            sx={styles.bodyText}
          />
        </Box>

        <Box sx={styles.signOff}>
          <Typography
            text={NOTICE_CARD_TEXT.signOffLine1}
            sx={styles.bodyText}
          />

          <Typography
            text={NOTICE_CARD_TEXT.signOffLine2}
            sx={styles.bodyText}
          />
        </Box>

        <Box sx={styles.attachments}>
          <Typography
            text={NOTICE_CARD_TEXT.attachmentsHeading}
            sx={styles.attachmentsHeading}
          />

          <Box sx={styles.attachmentRow}>
            <Icon
              icon={AttachFileIcon}
              color="action"
              fontSize="small"
            />

            <Typography
              text={NOTICE_CARD_TEXT.attachment1}
              sx={styles.attachmentText}
            />
          </Box>

          <Box sx={styles.secondAttachmentRow}>
            <Icon
              icon={AttachFileIcon}
              color="action"
              fontSize="small"
            />

            <Typography
              text={NOTICE_CARD_TEXT.attachment2}
              sx={styles.attachmentText}
            />
          </Box>
        </Box>

        <Divider sx={styles.dividerBottom} />

        <Box sx={styles.buttonContainer}>
          <Button
            label={NOTICE_CARD_TEXT.submitButton}
            onClick={handleSubmit}
            sx={styles.submitButton}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;