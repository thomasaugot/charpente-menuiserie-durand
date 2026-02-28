"use client";

import { useState, useEffect } from "react";

/**
 * Resolves once fonts are loaded + window is fully loaded,
 * with an optional minimum display time so the loader feels intentional.
 */
export function useAppReady(minDelay = 400) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    Promise.all([
      document.fonts.ready,
      new Promise((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", resolve, { once: true });
      }),
    ]).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDelay - elapsed);
      setTimeout(() => setIsReady(true), remaining);
    });
  }, [minDelay]);

  return isReady;
}
