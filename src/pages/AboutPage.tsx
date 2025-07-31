import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

const MotionBox = motion(Box);
const MotionImg = motion.img;

// SlideReveal component
const SlideReveal = ({ children, delay = 0 }) => (
  <Box sx={{ overflow: 'hidden', display: 'inline-block' }}>
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  </Box>
);

const aboutCards = [
  {
    title: "Billing First Approach",
    description: "Built to simplify your revenue workflow from claim submission to reimbursement tracking.",
    icon: "/icons/icon-1.svg",
  },
  {
    title: "AI That Actually Works",
    description: "Trained on clinical data and billing logic, not just generic GPT. Our AI understands what providers need.",
    icon: "/icons/icon-2.svg",
  },
  {
    title: "Security First",
    description: "HIPAA compliant, encrypted, and built on enterprise-grade infrastructure.",
    icon: "/icons/icon-3.svg",
  },
  {
    title: "All in One Platform",
    description: "Viscrow Billing and Scribe reduce admin time and improve cash flow all in one place.",
    icon: "/icons/icon-4.svg",
  },
];

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <SlideReveal delay={0}>
            <Typography variant="overline" sx={{ color: '#007C84' }} gutterBottom>
              Our story
            </Typography>
          </SlideReveal>

          <SlideReveal delay={0.2}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#007C84' }} gutterBottom>
              Built for Providers. Powered by AI.
            </Typography>
          </SlideReveal>

          <SlideReveal delay={0.4}>
            <Typography variant="h6" color="text.secondary">
              Viscrow Health automates billing and documentation so you can focus on patient care not paperwork.
            </Typography>
          </SlideReveal>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionImg
                src="/images/mission.jpg"
                alt="Our mission"
                style={{ width: "100%", borderRadius: 12 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We simplify the business side of medicine by using AI to automate billing, reduce denials, and eliminate the need for outsourced teams.
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box sx={{ py: 10, backgroundColor: "#e6f4ea" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We’re building AI-first tools that eliminate documentation and billing bottlenecks, giving providers back their time and revenue.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <MotionImg
                src="/images/vision.jpg"
                alt="Our vision"
                style={{ width: "100%", borderRadius: 12 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Viscrow Section */}
      <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
            Why Viscrow?
          </Typography>
          <Grid container spacing={4}>
            {aboutCards.map((item, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <MotionBox
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{ width: 48, height: 48, mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founder's Quote */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "#e6f4ea",
              borderLeft: "6px solid #1976d2",
              px: 4,
              py: 6,
              borderRadius: 2,
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            <Typography variant="h6" fontStyle="italic">
              “We saw practices struggling with denials and documentation. So we built an AI platform that actually understands clinical language and billing workflows.”
            </Typography>
            <Typography sx={{ mt: 2 }} fontWeight="bold">
              The Viscrow Team
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <CallToAction />
    </Box>
  );
};

export default AboutPage;
