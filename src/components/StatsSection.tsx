import { Box, Typography, Grid2 as Grid } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 750, label: "Hours Saved per Year", suffix: " hours" },
  { value: 40000, label: "Saved Annually", prefix: "$" },
  { value: 120000, label: "Increased Revenue", prefix: "$" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Start animation when 30% of the component is visible
  });

  return (
    <Box
      sx={{ textAlign: "center", py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}
      ref={ref}
    >
      {/* Heading Section */}
      <Typography variant="h6" color="primary" gutterBottom>
        The Numbers
      </Typography>
      <Typography component="h2" variant="h3" fontWeight={"bold"} gutterBottom>
        Save Time and Money with AI
      </Typography>
      {/* Stats Section */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "lg",
          margin: "0 auto",
          animation: "gradientAnimation 16s infinite",
          background: `linear-gradient(115deg, #10768a, #80d2e8,rgb(161, 175, 214))`,
          backgroundSize: "300% 300%",
          "@keyframes gradientAnimation": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
          mt: 4,
          p: 4,
          borderRadius: 2,
          boxShadow: 8,
        }}
      >
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Typography
              variant="h3"
              color="primary.contrastText"
              fontWeight="bold"
              gutterBottom
            >
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              ) : (
                0
              )}
            </Typography>
            <Typography color="primary.contrastText" variant="body1">
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
