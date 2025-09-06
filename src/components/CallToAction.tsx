import { Box, Typography, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
    <Box
      sx={{
        py: 20, // Padding Y-axis
        m: 4,
        borderRadius: 2,
        textAlign: "center",
        animation: "gradientAnimation 16s infinite",
        background: `linear-gradient(115deg, #10768a, #80d2e8,rgb(161, 175, 214))`,
        backgroundSize: "300% 300%",
        "@keyframes gradientAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Ready to Transform Your Practice?
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Experience the future of healthcare documentation. Talk to our experts
          today.
        </Typography>
        <Button
          component={NavLink}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.main", // Orange color for the button
          }}
        >
          Talk to Sales
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
