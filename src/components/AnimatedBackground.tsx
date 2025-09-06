// components/AnimatedBackground.tsx
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#6a11cb] via-[#2575fc] to-[#6a11cb] opacity-30 blur-2xl animate-pulse" />
    </motion.div>
  );
};

export default AnimatedBackground;
