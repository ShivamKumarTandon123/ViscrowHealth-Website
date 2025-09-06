import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Divider,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import InsightsIcon from "@mui/icons-material/Insights";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const MotionBox = motion(Box as any);
const MotionCard = motion(Card as any);

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const MedicalBillingSolutions = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
  };

  const coreFeatures = [
    {
      icon: <AssignmentTurnedInIcon />,
      title: "Claims Management",
      description: "Submit and track claims with built-in validation to reduce errors before submission",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Revenue Cycle Analytics",
      description: "Monitor key metrics including days in A/R, collection rates, and denial trends",
    },
    {
      icon: <IntegrationInstructionsIcon />,
      title: "EHR Integration",
      description: "Compatible with major EHR systems for seamless data synchronization",
    },
    {
      icon: <SecurityIcon />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with encryption, audit logs, and access controls",
    },
    {
      icon: <AutorenewIcon />,
      title: "Denial Management",
      description: "Track denial reasons, automate appeals, and identify patterns for prevention",
    },
    {
      icon: <SupportAgentIcon />,
      title: "Dedicated Support",
      description: "Expert billing specialists available to help optimize your revenue cycle",
    },
  ];

  const benefits = [
    {
      metric: "Reduce Denials",
      description: "Identify common denial patterns and implement prevention strategies",
      icon: <CheckCircleIcon />,
    },
    {
      metric: "Accelerate Payments",
      description: "Streamline claim submission and follow-up processes",
      icon: <SpeedIcon />,
    },
    {
      metric: "Improve Visibility",
      description: "Real-time dashboards for complete revenue cycle transparency",
      icon: <InsightsIcon />,
    },
    {
      metric: "Ensure Compliance",
      description: "Stay current with changing regulations and payer requirements",
      icon: <VerifiedUserIcon />,
    },
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Patient Registration",
      description: "Verify eligibility and capture accurate demographic and insurance information",
      color: theme.palette.primary.main,
    },
    {
      step: "2",
      title: "Charge Capture",
      description: "Document services with proper coding and modifiers",
      color: theme.palette.secondary.main,
    },
    {
      step: "3",
      title: "Claim Submission",
      description: "Submit clean claims with automated scrubbing and validation",
      color: theme.palette.info.main,
    },
    {
      step: "4",
      title: "Payment Processing",
      description: "Post payments, manage adjustments, and handle patient statements",
      color: theme.palette.success.main,
    },
    {
      step: "5",
      title: "Follow-up & Appeals",
      description: "Work denials, submit appeals, and manage aged receivables",
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          py: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={0}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  mb={3}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Streamline Your Medical Billing Process
                </Typography>
                <Typography variant="h5" mb={4} sx={{ opacity: 0.95 }}>
                  Comprehensive revenue cycle management tools designed for healthcare providers
                </Typography>
                <Stack direction="row" spacing={2} mb={3}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleContactNavigation}
                    sx={{
                      bgcolor: "white",
                      color: theme.palette.primary.main,
                      "&:hover": { bgcolor: alpha("#fff", 0.9) },
                    }}
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleContactNavigation}
                    sx={{
                      borderColor: "white",
                      color: "white",
                      "&:hover": { borderColor: "white", bgcolor: alpha("#fff", 0.1) },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
                <Stack direction="row" spacing={3} mt={4}>
                  <Chip
                    icon={<VerifiedUserIcon />}
                    label="HIPAA Compliant"
                    sx={{ bgcolor: alpha("#fff", 0.2), color: "white" }}
                  />
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
          custom={0}
          textAlign="center"
          mb={8}
        >
          <Typography variant="h3" fontWeight={600} mb={2}>
            Optimize Your Revenue Cycle
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            Our platform helps healthcare organizations improve cash flow and operational efficiency
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleVariant}
                custom={index}
                sx={{
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(benefit.icon, {
                      sx: { fontSize: 30, color: theme.palette.primary.main },
                    })}
                  </Box>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    {benefit.metric}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Core Features Section */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={600} textAlign="center" mb={8}>
            Comprehensive Feature Set
          </Typography>
          <Grid container spacing={4}>
            {coreFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariant}
                  custom={index}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} mb={2}>
                      {React.cloneElement(feature.icon, {
                        sx: { color: theme.palette.primary.main, fontSize: 28 },
                      })}
                      <Typography variant="h6" fontWeight={600}>
                        {feature.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Workflow Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" fontWeight={600} textAlign="center" mb={2}>
          Revenue Cycle Workflow
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mb={8}
          maxWidth="md"
          mx="auto"
        >
          Our platform supports every step of your revenue cycle management process
        </Typography>

        <Grid container spacing={3}>
          {workflowSteps.map((step, index) => (
            <Grid item xs={12} key={index}>
              <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariant}
                custom={index}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: theme.shadows[4],
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      bgcolor: alpha(step.color, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ color: step.color }}
                    >
                      {step.step}
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography variant="h6" fontWeight={600} mb={0.5}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Security & Compliance Section */}
      <Box sx={{ bgcolor: "#f9fafb", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={600} mb={3}>
                Security & Compliance
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We understand the importance of protecting sensitive healthcare data. Our platform is built with security at its core.
              </Typography>
              <List>
                {[
                  "HIPAA compliant infrastructure",
                  "256-bit SSL encryption for data in transit",
                  "Regular security audits and penetration testing",
                  "Role-based access control (RBAC)",
                  "Comprehensive audit logging",
                  "Business Associate Agreement (BAA) available",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: theme.shadows[3],
                }}
              >
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h5" fontWeight={600} mb={1}>
                      Enterprise-Ready
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Trusted by healthcare organizations nationwide
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Chip label="HIPAA" variant="outlined" />
                    <Chip label="HITECH" variant="outlined" />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: "white",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleVariant}
            textAlign="center"
          >
            <Typography variant="h3" fontWeight={700} mb={3}>
              Ready to Transform Your Revenue Cycle?
            </Typography>
            <Typography variant="h6" mb={5} sx={{ opacity: 0.95 }}>
              See how our platform can help improve your practice's financial performance
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleContactNavigation}
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: alpha("#fff", 0.9) },
                }}
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleContactNavigation}
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: alpha("#fff", 0.1),
                  },
                }}
              >
                Contact Sales
              </Button>
            </Stack>
            <Typography variant="body2" mt={3} sx={{ opacity: 0.8 }}>
              No credit card required • 30-day free trial available
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default MedicalBillingSolutions;