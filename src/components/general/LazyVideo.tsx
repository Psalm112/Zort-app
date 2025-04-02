"use client";
import { useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  onLoaded?: () => void;
}

const LazyVideo = ({ src, onLoaded }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoaded = () => {
        if (onLoaded) onLoaded();
      };

      const video = videoRef.current;
      video.addEventListener("loadeddata", handleLoaded);

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
      };
    }
  }, [onLoaded]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover absolute inset-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
