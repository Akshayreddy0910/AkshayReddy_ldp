import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { NOTICE_CARD_TEXT } from "../../../utils/constants";

const styles = {
  card: {
    maxWidth: "600px",
    margin: "40px auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "24px",
    boxShadow: "0 2px 10px gray",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid lightgray",
    margin: "0 0 16px 0",
  },
  dividerBottom: {
    border: "none",
    borderTop: "1px solid lightgray",
    margin: "20px 0",
  },
  spacingSmall: {
    marginTop: "6px",
  },
  spacingSmallBottom: {
    marginTop: "6px",
    marginBottom: "16px",
  },
  spacingMedium: {
    marginTop: "12px",
  },
  spacingLarge: {
    marginTop: "16px",
  },
  spacingXLarge: {
    marginTop: "20px",
  },
  warningBox: {
    backgroundColor: "mistyrose",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "16px",
  },
  attachmentRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "8px",
  },
  attachmentRowSpaced: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "6px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const NoticeCard = () => {
  const handleSubmit = () => {
    alert(NOTICE_CARD_TEXT.submitAlertMessage);
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <Typography text={NOTICE_CARD_TEXT.title} variant="title" bold />
        <Icon icon={<span>&times;</span>} />
      </div>

      <hr style={styles.divider} />

      <Typography text={NOTICE_CARD_TEXT.from} variant="label" />
      <div style={styles.spacingSmall}>
        <Typography text={NOTICE_CARD_TEXT.to} variant="label" />
      </div>
      <div style={styles.spacingSmallBottom}>
        <Typography text={NOTICE_CARD_TEXT.subject} variant="label" bold />
      </div>

      <div style={styles.warningBox}>
        <Typography text={NOTICE_CARD_TEXT.warningLine1} variant="small" />
        <div style={styles.spacingSmall}>
          <Typography text={NOTICE_CARD_TEXT.warningLine2} variant="small" />
        </div>
      </div>

      <Typography text={NOTICE_CARD_TEXT.greeting} />
      <div style={styles.spacingMedium}>
        <Typography text={NOTICE_CARD_TEXT.bodyParagraph} />
      </div>

      <div style={styles.spacingMedium}>
        <Typography text={NOTICE_CARD_TEXT.chargeItem} bold />
      </div>

      <div style={styles.spacingMedium}>
        <Typography text={NOTICE_CARD_TEXT.disputeParagraph} />
      </div>

      <div style={styles.spacingLarge}>
        <Typography text={NOTICE_CARD_TEXT.signOffLine1} />
        <Typography text={NOTICE_CARD_TEXT.signOffLine2} />
      </div>

      <div style={styles.spacingXLarge}>
        <Typography text={NOTICE_CARD_TEXT.attachmentsHeading} bold />
        <div style={styles.attachmentRow}>
          <Icon icon={<span>📎</span>} />
          <Typography text={NOTICE_CARD_TEXT.attachment1} variant="small" />
        </div>
        <div style={styles.attachmentRowSpaced}>
          <Icon icon={<span>📎</span>} />
          <Typography text={NOTICE_CARD_TEXT.attachment2} variant="small" />
        </div>
      </div>

      <hr style={styles.dividerBottom} />

      <div style={styles.buttonRow}>
        <Button label={NOTICE_CARD_TEXT.submitButton} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default NoticeCard;