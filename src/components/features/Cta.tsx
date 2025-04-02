import React from "react";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 lg:px-8 text-center relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Transform Your Betting Experience?
          </h2>
          <p
            className="text-gray-300 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join thousands of bettors who have improved their strategy and
            results with Zort&apos;s advanced analytics platform.
          </p>
          <div
            className="flex flex-wrap justify-center gap-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started for Free
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-white font-medium text-lg hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
