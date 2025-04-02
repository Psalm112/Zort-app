"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import LoaderScreen from "./LoaderScreen";

interface LoadingWrapperProps {
  children: ReactNode;
}

const LoaderWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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

export default LoaderWrapper;
