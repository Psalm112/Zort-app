"use client";
import { useState } from "react";
import Image from "next/image";

interface LazyTeamMemberProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const LazyTeamMember = ({
  src,
  alt,
  priority = false,
}: LazyTeamMemberProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover object-top transition-all duration-700 group-hover:scale-110 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default LazyTeamMember;
