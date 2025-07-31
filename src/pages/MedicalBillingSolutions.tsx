import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MotionBox = motion(Box);

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.3 },
  },
};

const MedicalBillingSolutions = () => {
  return (
    <Box sx={{ backgroundColor: "#f9fafb", py: 10 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUpVariant}
          custom={0}
          textAlign="center"
          mb={10}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            mb={2}
            color="primary.main"
          >
            Medical Billing Solutions That Work
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={4}>
            Manage claims, track reimbursements, and reduce denials, all in one secure and easy-to-use platform.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </MotionBox>

        {/* Features Section */}
        <Grid container spacing={4} mb={10}>
          {[
            "Automated claim submission",
            "Denial prevention & resolution",
            "EHR integration support",
            "Real-time reimbursement tracking",
            "Revenue insights dashboard",
            "HIPAA-compliant & secure",
          ].map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUpVariant}
                custom={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  height: "100%",
                  padding: 24,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <CheckCircleIcon color="success" />
                  <Typography variant="subtitle1" color="primary.main">
                    {feature}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* How It Works Section */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUpVariant}
          custom={0}
          textAlign="center"
          mb={6}
        >
          <Typography variant="h4" fontWeight={600} mb={1} color="primary.main">
            How It Works
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Get paid faster in 4 simple steps
          </Typography>
        </MotionBox>

        <Grid container spacing={4} mb={10}>
          {[
            {
              title: "Connect",
              desc: "Link your EHR or input patient info manually.",
            },
            {
              title: "Submit",
              desc: "Send clean claims with AI-powered validation.",
            },
            {
              title: "Track",
              desc: "Monitor claim status and manage denials.",
            },
            {
              title: "Get Paid",
              desc: "Receive faster reimbursements, automatically.",
            },
          ].map((step, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUpVariant}
                custom={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  height: "100%",
                  padding: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                  color="primary.main"
                >
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* CTA Footer */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUpVariant}
          custom={0}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight={600} mb={2} color="primary.main">
            Ready to simplify your billing?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Let us help you reduce denials and boost collections.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Schedule a Demo
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default MedicalBillingSolutions;
