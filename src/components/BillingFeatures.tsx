import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  { title: "1-Click Claim Submission", description: "Submit accurate claims in seconds." },
  { title: "Real-Time Tracking", description: "See reimbursement statuses instantly." },
  { title: "Denial Management", description: "Handle rejections and resubmit with ease." },
  { title: "HIPAA-Compliant Billing", description: "Protect patient data at every step." },
  { title: "EHR/EMR Integration", description: "Connect seamlessly with your systems." },
  { title: "Patient Payment Portal", description: "Offer patients a secure place to pay." },
];

const BillingFeatures = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Everything You Need for Faster Reimbursement
        </Typography>
        <Grid container spacing={3} mt={4}>
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <CheckCircleIcon color="primary" />
                  <Box>
                    <Typography fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {feature.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BillingFeatures;
