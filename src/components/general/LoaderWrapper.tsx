"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import LoaderScreen from "./LoaderScreen";

interface LoadingWrapperProps {
  children: ReactNode;
}

// This wrapper can be used around your main content components
const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate content loading
    // Replace this with your actual content loading logic if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoaderScreen />}
      </AnimatePresence>

      <div className={isLoading ? "hidden" : "block"}>{children}</div>
    </>
  );
};

export default LoadingWrapper;
