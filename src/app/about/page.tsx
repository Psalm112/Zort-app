"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/about/Hero";
import OurMission from "@/components/about/Mission";
import WhyZort from "@/components/about/WhyZort";
import OurStory from "@/components/about/Story";
import TheTeam from "@/components/about/Team";
import Contact from "@/components/general/Contact";
import Community from "@/components/general/Community";
import CallToAction from "@/components/general/CallToAction";

const Testimonials = dynamic(
  () => import("@/components/general/Testimonials"),
  { ssr: false }
);

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    window.scrollTo(0, 0);

    // AOS setup
    (async () => {
      const AOS = (await import("aos")).default;

      await import("aos/dist/aos.css");

      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-out-cubic",
        offset: 100,
        disable: window.innerWidth < 768,
      });

      const handleResize = () => {
        AOS.refresh();
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    })();
  }, []);

  const loadingSection = (
    <div className="h-64 flex items-center justify-center">Loading...</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <OurMission />
        <WhyZort />
        <OurStory />
        <TheTeam />
        {isClient ? <Testimonials /> : loadingSection}
        <Contact />
        <Community />
        <CallToAction />
      </div>
    </div>
  );
}
