"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeScreen() {
  // Start with true to prevent flash, then check in useEffect
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check sessionStorage immediately
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (hasSeenWelcome) {
      // Already seen, don't show at all
      setIsVisible(false);
      setShouldRender(false);
    } else {
      // First time, show welcome screen
      sessionStorage.setItem("hasSeenWelcome", "true");

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#18181b] to-accent rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">ED</span>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              EngiDev<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl text-muted-foreground"
            >
              Engineering Innovation
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
