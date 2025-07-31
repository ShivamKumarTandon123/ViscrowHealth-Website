import { Box, Grid2 as Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ReceiptIcon from "@mui/icons-material/Receipt";

const features = [
  {
    icon: <LaptopMacIcon fontSize="large" />,
    title: "AI-Powered Voice Assistant",
    description:
      "Experience the future of documentation with our AI voice assistant, designed to streamline your workflow.",
  },
  {
    icon: <AccountTreeIcon fontSize="large" />,
    title: "EHR Integration",
    description:
      "Seamless integration with major EHR systems for efficient documentation workflow.",
  },
  {
    icon: <ReceiptIcon fontSize="large" />,
    title: "Automated ICD Code Generation",
    description:
      "Automatically generate accurate ICD codes based on clinical notes, reducing administrative burden.",
  },
  {
    icon: <MedicalServicesIcon fontSize="large" />,
    title: "AI Prescription & Referrals",
    description:
      "Streamline prescriptions and referrals for specialists and lab work, ensuring seamless patient care.",
  },
];

const RoadMap = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          color="primary"
          variant="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Roadmap
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ marginBottom: 4, maxWidth: "700px", mx: "auto" }}
        >
          Unlock the future of efficiency with these upcoming features
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Box sx={{ color: theme.palette.primary.main }}>
                {feature.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  color: theme.palette.text.primary,
                }}
              >
                {feature.title}
              </Typography>
              <Typography sx={{ mt: 1, color: theme.palette.text.secondary }}>
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RoadMap;
