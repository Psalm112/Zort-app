"use client";
import { useRef, useEffect, useState, memo } from "react";

interface LazyVideoProps {
  src: string;
  onLoaded?: () => void;
}

const LazyVideo = memo(({ src, onLoaded }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const video = videoRef.current;
    if (!video) return;

    //  try to play the video
    const playVideo = async () => {
      try {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
          if (onLoaded) onLoaded();
        }
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };

    // Play video when it's ready
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo);
    }

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.pause();
    };
  }, [onLoaded]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover absolute inset-0"
      {...(isClient
        ? {
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            preload: "auto",
          }
        : {
            muted: true,
          })}
    >
      {isClient && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
});

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;
