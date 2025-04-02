import React from "react";
import Image from "next/image";
import { DetailedFeatureProps } from "@/types/features";

const DetailedFeature: React.FC<DetailedFeatureProps> = ({
  id,
  title,
  description,
  benefits,
  graphic,
  reverse,
}) => {
  return (
    <div
      id={id}
      className={`py-16 md:py-24 container mx-auto px-4 lg:px-8 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12`}
    >
      <div
        className="w-full lg:w-1/2"
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-300 mb-8">{description}</p>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="bg-purple-500 rounded-full p-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <button
          className="mt-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
          data-aos="fade-up"
        >
          Learn More
        </button>
      </div>
      <div
        className="w-full lg:w-1/2"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl group">
          {graphic.image?.src ? (
            <Image
              src={graphic.image.src}
              alt={graphic.image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            graphic.chart
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedFeature;
