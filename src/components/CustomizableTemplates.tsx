import { Button, Container, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import scribeTemplateSnip from "../assets/scribe-templates.png";
import { NavLink } from "react-router-dom";

const CustomizableTemplates = () => {
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              color="primary"
              variant="h3"
              component="h2"
              fontWeight={"bold"}
              gutterBottom
            >
              Customizable Templates
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              Specialty-specific templates that adapt to your workflow and
              documentation preferences
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
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                width: "150%",
                m: { xs: 4, sm: 0 },
                objectFit: "cover",
                objectPosition: "left", // Align the left side of the image
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for better visibility
                transform: "rotate(-8deg)", // Rotate the image by 45 degrees
                transition: "transform 0.3s ease-in-out", // Optional: Add smooth animation for rotation
              }}
              component={"img"}
              src={scribeTemplateSnip}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomizableTemplates;
