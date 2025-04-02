"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FjLabs from "../../../public/images/partners/fj.png";
import Bolt from "../../../public/images/partners/Bolt.png";
import CapitalVentures from "../../../public/images/partners/capital-ventures.png";
import FounderPartners from "../../../public/images/partners/founder-partners.png";

const partners = [
  { name: "Capital Ventures", logo: CapitalVentures },
  { name: "BOLT", logo: Bolt },
  { name: "Founder Partners", logo: FounderPartners },
  { name: "", logo: FjLabs },
];

const Partners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-300">
            We are backed by a team of dedicated investors who share our passion
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              ) : (
                <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6 text-center">
                  <span className="text-lg font-semibold text-gray-300">
                    {partner.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
