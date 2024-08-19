
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display  text-[#6A62E9]  drop-shadow-sm inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
