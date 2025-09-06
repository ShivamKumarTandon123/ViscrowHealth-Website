import Box from "@mui/material/Box";
import scribePopup from "../assets/scribe-popup.png";
import scribeTranscript from "../assets/scribe-transcript.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const RealTimeTranscription = () => {
  return (
    <Box py={8}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid size={{ xs: 12, sm: 8 }} sx={{ position: "relative" }}>
            {/* Transcript Image */}
            <Box
              sx={{
                borderRadius: "8px",
                overflow: "hidden",
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for better visibility
              }}
              component={"img"}
              src={scribeTranscript}
            />

            {/* Popup Image */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-4%", // Move the popup further down
                right: "-2%", // Move the popup further to the right
                zIndex: 1,
                borderRadius: "8px",
                overflow: "hidden",
                width: "37.5%", // Adjust the size of the popup image
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for better visibility
              }}
              component={"img"}
              src={scribePopup}
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              gutterBottom
              color="primary"
              textAlign={{ xs: "center", sm: "left" }}
            >
              Real-time Transcription
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              color="text.secondary"
              textAlign={{ xs: "center", sm: "left" }}
            >
              Industry-leading accuracy in converting medical conversations into
              structured clinical notes with specialized medical terminology.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                color="primary"
                component={NavLink}
                to="/contact"
              >
                Talk to Sales
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RealTimeTranscription;
