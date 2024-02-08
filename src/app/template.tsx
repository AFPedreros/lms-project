"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "linear", duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}
