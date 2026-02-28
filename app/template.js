"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppReady } from "@/hooks/useAppReady";
import AppLoader from "@/components/layout/AppLoader";

export default function Template({ children }) {
  const isReady = useAppReady(400);

  useEffect(() => {
    if (!isReady) return;

    const { hash } = window.location;

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [isReady]);

  return (
    <>
      <AppLoader isReady={isReady} />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
}
