import { Box, Typography, Container, Grid2 as Grid } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security"; // Replace with actual icons
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DeleteIcon from "@mui/icons-material/Delete";

const securityFeatures = [
  {
    title: "HIPAA",
    description:
      "Blueprint is HIPAA compliant to ensure your clients’ health information remains protected and confidential.",
    icon: <ShieldIcon fontSize="large" color="primary" />,
  },
  {
    title: "Advanced Data Encryption",
    description:
      "All data is secured using AES-256 encryption during transmission and at rest, providing top-tier protection against unauthorized access.",
    icon: <VerifiedUserIcon fontSize="large" color="primary" />,
  },
  {
    title: "Automatic Audio Deletion",
    description:
      "Audio recordings are permanently deleted after transcription, ensuring recordings are never accessible to anyone, anytime.",
    icon: <DeleteIcon fontSize="large" color="primary" />,
  },
];

const SecurityFeatures = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          color="primary"
          component={"h2"}
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Enterprise-grade security and privacy
        </Typography>
        <Typography
          component={"h3"}
          variant="h6"
          align="center"
          sx={{ marginBottom: 4, maxWidth: "700px", mx: "auto" }}
        >
          Your data is protected by the highest standards of security, privacy,
          and encryption, ensuring complete confidentiality and compliance.
        </Typography>
        <Grid container spacing={4}>
          {securityFeatures.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Box sx={{ marginBottom: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SecurityFeatures;
