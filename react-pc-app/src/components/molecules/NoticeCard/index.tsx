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

const NoticeCard = () => {
  const handleSubmit = () => {
    alert(NOTICE_CARD_TEXT.submitAlertMessage);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "40px auto", padding: 3 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            text={NOTICE_CARD_TEXT.title}
            sx={{
              typography: "h5",
              color: "text.primary",
            }}
          />

          <Icon icon={CloseIcon} color="action" />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography
          text={NOTICE_CARD_TEXT.from}
          sx={{
            typography: "body2",
            color: "text.secondary",
          }}
        />

        <Box sx={{ mt: 0.5 }}>
          <Typography
            text={NOTICE_CARD_TEXT.to}
            sx={{
              typography: "body2",
              color: "text.secondary",
            }}
          />
        </Box>

        <Box sx={{ mt: 0.5, mb: 2 }}>
          <Typography
            text={NOTICE_CARD_TEXT.subject}
            sx={{
              typography: "body2",
              fontWeight: "bold",
              color: "text.primary",
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "warning.light",
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          <Typography
            text={NOTICE_CARD_TEXT.warningLine1}
            sx={{
              typography: "caption",
              color: "secondary.main",
            }}
          />

          <Box sx={{ mt: 0.5 }}>
            <Typography
              text={NOTICE_CARD_TEXT.warningLine2}
              sx={{
                typography: "caption",
                color: "secondary.main",
              }}
            />
          </Box>
        </Box>

        <Typography
          text={NOTICE_CARD_TEXT.greeting}
          sx={{
            typography: "body1",
            color: "text.secondary",
          }}
        />

        <Box sx={{ mt: 1.5 }}>
          <Typography
            text={NOTICE_CARD_TEXT.bodyParagraph}
            sx={{
              typography: "body1",
              color: "text.secondary",
            }}
          />
        </Box>

        <Box sx={{ mt: 1.5 }}>
          <Typography
            text={NOTICE_CARD_TEXT.chargeItem}
            sx={{
              typography: "body1",
              fontWeight: "bold",
              color: "text.primary",
            }}
          />
        </Box>

        <Box sx={{ mt: 1.5 }}>
          <Typography
            text={NOTICE_CARD_TEXT.disputeParagraph}
            sx={{
              typography: "body1",
              color: "text.secondary",
            }}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography
            text={NOTICE_CARD_TEXT.signOffLine1}
            sx={{
              typography: "body1",
              color: "text.secondary",
            }}
          />

          <Typography
            text={NOTICE_CARD_TEXT.signOffLine2}
            sx={{
              typography: "body1",
              color: "text.secondary",
            }}
          />
        </Box>

        <Box sx={{ mt: 2.5 }}>
          <Typography
            text={NOTICE_CARD_TEXT.attachmentsHeading}
            sx={{
              typography: "body1",
              fontWeight: "bold",
              color: "text.primary",
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
            }}
          >
            <Icon
              icon={AttachFileIcon}
              color="action"
              fontSize="small"
            />

            <Typography
              text={NOTICE_CARD_TEXT.attachment1}
              sx={{
                typography: "caption",
                color: "text.secondary",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 0.75,
            }}
          >
            <Icon
              icon={AttachFileIcon}
              color="action"
              fontSize="small"
            />

            <Typography
              text={NOTICE_CARD_TEXT.attachment2}
              sx={{
                typography: "caption",
                color: "text.secondary",
              }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            label={NOTICE_CARD_TEXT.submitButton}
            onClick={handleSubmit}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;
