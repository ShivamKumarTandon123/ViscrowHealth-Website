import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BackgroundGradient = () => {
  return (
    <MotionBox
      aria-hidden
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        top: "-30%",
        left: "-30%",
        width: "200%",
        height: "200%",
        zIndex: 0,
        background:
          "radial-gradient(circle at 30% 30%, #D1FAE5, transparent 40%), radial-gradient(circle at 70% 70%, #A7F3D0, transparent 40%)",
        filter: "blur(100px)",
        opacity: 0.8,
      }}
    />
  );
};

export default BackgroundGradient;
