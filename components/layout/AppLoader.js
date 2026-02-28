"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AppLoader({ isReady }) {
  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          key="app-loader"
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <Image src="/img/logo.png" alt="CMD Durand" width={240} height={60} priority />

            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary block"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
