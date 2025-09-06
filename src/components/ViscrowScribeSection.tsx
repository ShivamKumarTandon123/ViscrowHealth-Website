import {
    Box,
    Typography,
    Button,
    Container,
    Stack,
    Divider,
  } from "@mui/material";
  import scribeSnip from "../assets/scribe-snip.png"; // keep using original image
  import { NavLink } from "react-router-dom";
  
  const ViscrowScribeSection = () => {
    return (
      <Box
        sx={{
          backgroundColor: "background.default",
          pt: 10,
          pb: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Also Included: Viscrow Scribe
          </Typography>
          <Typography variant="h6" fontWeight={300} mb={4}>
            Automate clinical notes with AI integrated directly into your billing workflow.
          </Typography>
          <Stack direction="row" spacing={2} mb={4}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              component={NavLink}
              to="/contact"
            >
              Learn More →
            </Button>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Box
            component="img"
            src={scribeSnip}
            alt="Viscrow Scribe"
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              width: "100%",
              maxWidth: 600,
              mx: "auto",
              display: "block",
            }}
          />
        </Container>
      </Box>
    );
  };
  
  export default ViscrowScribeSection;
  