import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

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
    alert("Notice submitted!");
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <Typography text="Pre-Adverse Action Notice" variant="title" bold />
        <Icon type="close" />
      </div>

      <hr style={styles.divider} />

      <Typography text="From: Kyle@Checkr.Com" variant="label" />
      <div style={styles.spacingSmall}>
        <Typography text="To: John.Smith@Checkr.Com" variant="label" />
      </div>
      <div style={styles.spacingSmallBottom}>
        <Typography text="Subject: Pre-Adverse Action Notice - Checkr-Bpo" variant="label" bold />
      </div>

      <div style={styles.warningBox}>
        <Typography
          text="• Please carefully review the list of charges (in bold) and your contact information."
          variant="small"
        />
        <div style={styles.spacingSmall}>
          <Typography
            text="• Please note that we will send the corresponding post adverse action email automatically after 7 days."
            variant="small"
          />
        </div>
      </div>

      <Typography text="Dear John Smith," />
      <div style={styles.spacingMedium}>
        <Typography text='You recently authorized checkr-bpo ("the company") to obtain consumer reports and/or investigate consumer reports about you from a consumer reporting agency. The Company is considering taking action in whole or in part on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.' />
      </div>

      <div style={styles.spacingMedium}>
        <Typography text="• Assault Domestic Violence" bold />
      </div>

      <div style={styles.spacingMedium}>
        <Typography text="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the information contained in the report), you should contact the agency identified above directly." />
      </div>

      <div style={styles.spacingLarge}>
        <Typography text="Sincerely," />
        <Typography text="Checkr-bpo" />
      </div>

      <div style={styles.spacingXLarge}>
        <Typography text="Attachments" bold />
        <div style={styles.attachmentRow}>
          <Icon type="attachment" />
          <Typography text="Summary of right under the FCRA" variant="small" />
        </div>
        <div style={styles.attachmentRowSpaced}>
          <Icon type="attachment" />
          <Typography text="Copy of background report" variant="small" />
        </div>
      </div>

      <hr style={styles.dividerBottom} />

      <div style={styles.buttonRow}>
        <Button label="Submit Notice" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default NoticeCard;