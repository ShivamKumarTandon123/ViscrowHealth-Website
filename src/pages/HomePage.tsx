import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import BillingFeatures from "../components/BillingFeatures"; // add this line
import CallToAction from "../components/CallToAction";
import RealTimeTranscription from "../components/RealTimeTranscription";
import CustomizableTemplates from "../components/CustomizableTemplates";
import SecurityFeatures from "../components/SecurityFeatures";
import HowItWorksSection from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import ViscrowScribeSection from "../components/ViscrowScribeSection";

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