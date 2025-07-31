import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MotionBox = motion(Box);
const MotionImageBox = motion(Box);

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

  const sectionTitleOpacity = useTransform(scrollYProgress, [0.29, 0.36], [0, 1]);
  const sectionTitleY = useTransform(scrollYProgress, [0.29, 0.36], [40, 0]);

  const features = [
    {
      title: "1-Click Claim Submission",
      description: "Submit accurate claims in seconds.",
    },
    {
      title: "Real-Time Tracking",
      description: "See reimbursement statuses instantly.",
    },
    {
      title: "Denial Management",
      description: "Handle rejections and resubmit with ease.",
    },
    {
      title: "HIPAA-Compliant Billing",
      description: "Protect patient data at every step.",
    },
    {
      title: "EHR/EMR Integration",
      description: "Connect seamlessly with your systems.",
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

        <motion.div style={{ opacity: sectionTitleOpacity, y: sectionTitleY }}>
          <Box mt={10}>
            <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
              Everything You Need for Faster Reimbursement
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" mt={4}>
          {features.map((feature, idx) => {
            const start = 0.35 + idx * 0.05;
            const end = start + 0.1;
            const cardOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const cardY = useTransform(scrollYProgress, [start, end], [40, 0]);
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div style={{ opacity: cardOpacity, y: cardY }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      minHeight: 160,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon color="primary" />
                      <Typography fontWeight="bold">{feature.title}</Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ pl: 4 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
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
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
