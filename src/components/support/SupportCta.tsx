import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import AppPromo from "../../../public/images/assets/app-promo.svg";

const SupportCta: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to take your sports betting to the next level?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of bettors who have transformed their betting
              strategy with ZORT. Download our app today and start making
              smarter betting decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg hover:shadow-xl text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center">
                <ImAppleinc className="w-5 h-5 mr-2" />
                App Store
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-full transition duration-200 flex items-center">
                <ImAndroid className="w-5 h-5 mr-2" />
                Google Play
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">Free to download</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">No credit card required</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl shadow-purple-900/20 border border-gray-700">
              <Image
                src={AppPromo}
                alt="ZORT App Screenshot"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportCta;
