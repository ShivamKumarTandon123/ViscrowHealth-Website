import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import SecurityFeatures from "../components/SecurityFeatures";
import HowItWorksSection from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      {/*<BillingFeatures /> {/* add this right after HeroSection */}
      <HowItWorksSection />
      <StatsSection />
      <SecurityFeatures />
      <CallToAction />
    </Box>
  );
};

export default HomePage;


  {/*<ViscrowScribeSection /> */}
      {/*<Testimonials />
      <RealTimeTranscription />
      <CustomizableTemplates /> */}