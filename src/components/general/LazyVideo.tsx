"use client";
import { useRef, useEffect, useState, memo } from "react";

interface LazyVideoProps {
  src: string;
  onLoaded?: () => void;
  poster?: string;
  quality?: "high" | "medium" | "low";
}

const LazyVideo = memo(
  ({ src, onLoaded, poster, quality = "medium" }: LazyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Try getting the video source based on quality, with fallbacks
    let videoSrc = src;
    if (quality === "medium") {
      const mediumSrc = src.replace(".mp4", "-480p.mp4");
      videoSrc = mediumSrc;
    } else if (quality === "low") {
      const lowSrc = src.replace(".mp4", "-240p.mp4");
      videoSrc = lowSrc;
    }

    useEffect(() => {
      setIsClient(true);

      // The video element
      const video = videoRef.current;
      if (!video) return;

      // Wait for the video element to be ready
      const handleCanPlay = async () => {
        try {
          await video.play();
          if (onLoaded) onLoaded();
        } catch (error) {
          console.error("Video playback error:", error);
        }
      };

      // Handle video loading
      if (video.readyState >= 3) {
        handleCanPlay();
      } else {
        video.addEventListener("canplay", handleCanPlay);
      }

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.pause();
      };
    }, [onLoaded]);

    return (
      <video
        ref={videoRef}
        className="w-full h-full object-cover absolute inset-0"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        {isClient && (
          <>
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
          </>
        )}
        Your browser does not support the video tag.
      </video>
    );
  }
);

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;
