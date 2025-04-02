import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Features
            </span>{" "}
            That Transform Your Betting
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
            Experience the next generation of sports betting analytics and
            management with Zort&apos;s comprehensive suite of AI-powered tools.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="#aibetslipscanner"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore Features
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Try Zort Free
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Background Elements */}
      <div className="absolute right-0 bottom-0 opacity-40 transform translate-x-1/4">
        <div className="w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
