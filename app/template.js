// "use client";
// import { motion } from "framer-motion";

// export default function Template({ children }) {
//   return (
//     <motion.main
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 15 }}
//       transition={{ delay: 0.25 }}
//     >
//       {children}
//     </motion.main>
//   );
// }

"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Template({ children }) {
  useEffect(() => {
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
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.main>
  );
}
