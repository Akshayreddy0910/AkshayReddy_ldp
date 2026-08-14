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

  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    color: "darkslategray",
  },

  label: {
    margin: 0,
    fontSize: "14px",
    color: "darkslategray",
    textAlign: "left" as const,
  },

  body: {
    margin: 0,
    fontSize: "14px",
    color: "darkslategray",
    textAlign: "left" as const,
  },

  small: {
    margin: 0,
    fontSize: "12px",
    color: "darkslategray",
    textAlign: "left" as const,
  },

  bold: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "bold",
    color: "darkslategray",
    textAlign: "left" as const,
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },

  closeIcon: {
    fontSize: "20px",
    color: "dimgray",
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

  attachmentIcon: {
    width: "18px",
    height: "18px",
    display: "block",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
  },

  button: {
    backgroundColor: "darkviolet",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

const NoticeCard = () => {
  const handleSubmit = () => {
    alert(NOTICE_CARD_TEXT.submitAlertMessage);
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <Typography
          text={NOTICE_CARD_TEXT.title}
          style={styles.title}
        />

        <Icon
          icon="×"
          style={styles.closeIcon}
        />
      </div>

      <hr style={styles.divider} />

      <Typography
        text={NOTICE_CARD_TEXT.from}
        style={styles.label}
      />

      <div style={styles.spacingSmall}>
        <Typography
          text={NOTICE_CARD_TEXT.to}
          style={styles.label}
        />
      </div>

      <div style={styles.spacingSmallBottom}>
        <Typography
          text={NOTICE_CARD_TEXT.subject}
          style={styles.bold}
        />
      </div>

      <div style={styles.warningBox}>
        <Typography
          text={NOTICE_CARD_TEXT.warningLine1}
          style={styles.small}
        />

        <div style={styles.spacingSmall}>
          <Typography
            text={NOTICE_CARD_TEXT.warningLine2}
            style={styles.small}
          />
        </div>
      </div>

      <Typography
        text={NOTICE_CARD_TEXT.greeting}
        style={styles.body}
      />

      <div style={styles.spacingMedium}>
        <Typography
          text={NOTICE_CARD_TEXT.bodyParagraph}
          style={styles.body}
        />
      </div>

      <div style={styles.spacingMedium}>
        <Typography
          text={NOTICE_CARD_TEXT.chargeItem}
          style={styles.bold}
        />
      </div>

      <div style={styles.spacingMedium}>
        <Typography
          text={NOTICE_CARD_TEXT.disputeParagraph}
          style={styles.body}
        />
      </div>

      <div style={styles.spacingLarge}>
        <Typography
          text={NOTICE_CARD_TEXT.signOffLine1}
          style={styles.body}
        />

        <Typography
          text={NOTICE_CARD_TEXT.signOffLine2}
          style={styles.body}
        />
      </div>

      <div style={styles.spacingXLarge}>
        <Typography
          text={NOTICE_CARD_TEXT.attachmentsHeading}
          style={styles.bold}
        />

        <div style={styles.attachmentRow}>
          <Icon
            icon={
              <img
                src="/attachment-paperclip.svg"
                alt="Attachment"
                style={styles.attachmentIcon}
              />
            }
          />

          <Typography
            text={NOTICE_CARD_TEXT.attachment1}
            style={styles.small}
          />
        </div>

        <div style={styles.attachmentRowSpaced}>
          <Icon
            icon={
              <img
                src="/attachment-paperclip.svg"
                alt="Attachment"
                style={styles.attachmentIcon}
              />
            }
          />

          <Typography
            text={NOTICE_CARD_TEXT.attachment2}
            style={styles.small}
          />
        </div>
      </div>

      <hr style={styles.dividerBottom} />

      <div style={styles.buttonRow}>
        <Button
          label={NOTICE_CARD_TEXT.submitButton}
          onClick={handleSubmit}
          style={styles.button}
        />
      </div>
    </div>
  );
};

export default NoticeCard;