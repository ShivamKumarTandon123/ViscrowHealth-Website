import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Chip,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform, useScroll, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const MotionBox = motion(Box);
const MotionImageBox = motion(Box);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.13], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.13], [40, 0]);

  const subOpacity = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.12, 0.18], [40, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.17, 0.24], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.17, 0.24], [40, 0]);

  const imageOpacity = useTransform(scrollYProgress, [0.23, 0.3], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.23, 0.3], [40, 0]);

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 28 }} />,
      title: "Lightning-Fast Claims",
      description: "Submit accurate claims in seconds with AI-powered validation.",
      color: "#4A90E2",
      stat: "Fast Processing",
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 28 }} />,
      title: "Real-Time Analytics",
      description: "Track reimbursements and revenue cycle metrics instantly.",
      color: "#50E3C2",
      stat: "Live Data",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
      title: "Denial Prevention",
      description: "AI predicts and prevents denials before submission.",
      color: "#F5A623",
      stat: "Smart AI",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 28 }} />,
      title: "Enterprise Security",
      description: "Bank-level encryption and HIPAA compliance guaranteed.",
      color: "#BD10E0",
      stat: "Secure",
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 28 }} />,
      title: "Seamless Integration",
      description: "Works with 50+ EHR/EMR systems out of the box.",
      color: "#7ED321",
      stat: "Easy Setup",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        pt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 14 },
        overflow: "hidden",
        background: "linear-gradient(135deg, #E0F7FA 0%, #F1F8E9 100%)",
      }}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle at center, #6CCAFF, #B2FFDA)",
          filter: "blur(150px)",
          opacity: 0.5,
          animation: "float1 16s ease-in-out infinite",
          zIndex: -1,
        }}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at center, #FFA3BF, #FFE9AE)",
          filter: "blur(140px)",
          opacity: 0.4,
          animation: "float2 18s ease-in-out infinite",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div style={{ opacity: titleOpacity, y: titleY }}>
              <Typography component="h1" variant="h2" fontWeight={600} sx={{ mb: 3 }}>
                The <Box component="span" color="primary.main">Fastest</Box> Way to Get Paid for Patient Care
              </Typography>
            </motion.div>

            <motion.div style={{ opacity: subOpacity, y: subY }}>
              <Typography
                variant="h6"
                fontWeight={300}
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 500 }}
              >
                Manage claims, track reimbursements, and reduce denials in one secure, easy-to-use platform.
              </Typography>
            </motion.div>

            <motion.div style={{ opacity: buttonOpacity, y: buttonY }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  size="large"
                  variant="contained"
                  component={NavLink}
                  to="/contact"
                  sx={{ borderRadius: 10, px: 4 }}
                >
                  Request Demo
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  component={NavLink}
                  to="/pricing"
                  sx={{ borderRadius: 10, px: 4 }}
                  className="animated-outline"
                >
                  See Billing Features
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionImageBox
              style={{ rotateX, rotateY, opacity: imageOpacity, y: imageY }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              sx={{
                width: "100%",
                height: { xs: 250, md: 360 },
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontStyle: "italic",
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              Billing dashboard image placeholder
            </MotionImageBox>
          </Grid>
        </Grid>

        {/* Enhanced Features Section from second code */}
        <Box mt={12}>
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variant="h4"
            fontWeight={700}
            align="center"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Why Leading Practices Choose Us
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Our AI-powered platform eliminates billing headaches so you can focus on patient care
          </MotionTypography>

          <Grid container spacing={3} justifyContent="center">
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: "white",
                    border: "1px solid",
                    borderColor: "rgba(0, 0, 0, 0.08)",
                    minHeight: 200,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: feature.color,
                      boxShadow: `0 10px 40px ${feature.color}20`,
                      "& .feature-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                        backgroundColor: feature.color,
                        color: "white",
                      },
                      "& .feature-stat": {
                        opacity: 1,
                        transform: "translateY(0)",
                      }
                    }
                  }}
                >
                  {/* Icon with background */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${feature.color}15`,
                        color: feature.color,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Chip
                      className="feature-stat"
                      label={feature.stat}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        backgroundColor: `${feature.color}10`,
                        color: feature.color,
                        border: `1px solid ${feature.color}30`,
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  
                  <Box>
                    <Typography fontWeight={600} sx={{ mb: 1, fontSize: "1.1rem" }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>

                  {/* Decorative gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${feature.color} 0%, ${feature.color}80 100%)`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                      ".MuiBox-root:hover &": {
                        transform: "scaleX(1)",
                      }
                    }}
                  />
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(40px, 30px); }
            100% { transform: translate(0px, 0px); }
          }
          @keyframes float2 {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(-35px, -20px); }
            100% { transform: translate(0px, 0px); }
          }

          .animated-outline {
            position: relative;
            overflow: hidden;
            z-index: 0;
            transition: color 0.3s ease;
          }

          .animated-outline::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #006064;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.8s ease;
            z-index: -1;
          }

          .animated-outline:hover::before {
            transform: scaleX(1);
          }

          .animated-outline:hover {
            color: white !important;
            border-color: #006064 !important;
          }

          @keyframes pulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 0.3;
            }
            50% { 
              transform: scale(1.1);
              opacity: 0.5;
            }
          }

          @keyframes growBar {
            from {
              height: 0;
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;