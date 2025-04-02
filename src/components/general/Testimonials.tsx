"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import User1 from "../../../public/images/avatars/user1.jpeg";
import User2 from "../../../public/images/avatars/user2.jpeg";
import User3 from "../../../public/images/avatars/user3.jpeg";
import Betrus from "../../../public/images/avatars/betrus.jpeg";

// Helper function to merge refs
function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

const testimonials = [
  {
    id: 1,
    name: "Dan Orenstein",
    username: "@DanOrenstein",
    content:
      "Discovered easily the best bet tracking app to date. Do yourself a favor and download @zortapp.",
    avatar: User1,
  },
  {
    id: 2,
    name: "Paul Kelly",
    username: "@PKelly",
    content:
      "Such a legit app. Very responsive, smart, hard-working development team. To think I used to do all of my wagering bookkeeping by hand! I was a dinosaur! I've tried other sports betting tracking apps, and ZORT rules them all.",
    avatar: User2,
  },
  {
    id: 3,
    name: "BetsRUs",
    username: "@BetsRUs123",
    content:
      "Bets made or projected presented on @ZORTapp. This app guessed right! Legal bets you how many units you made a day and what other bets people are placing. Also gives you the odds of your open bets which is pretty nice! Shoutout to @ZORTteam for some of these LFG MAJU!",
    avatar: Betrus,
  },
  {
    id: 4,
    name: "Robert G",
    username: "@Robert23",
    content:
      "I've been using the @zortapp app. Just getting into the app it's pretty slick! A smooth start to the month. #sportsbetting #bettingtwitter",
    avatar: User3,
  },
  {
    id: 5,
    name: "Dan Orenstein",
    username: "@DanOrenstein",
    content:
      "Discovered easily the best bet tracking app to date. Do yourself a favor and download @zortapp.",
    avatar: User1,
  },
  {
    id: 6,
    name: "Paul Kelly",
    username: "@PKelly",
    content:
      "Such a legit app. Very responsive, smart, hard-working development team. To think I used to do all of my wagering bookkeeping by hand! I was a dinosaur! I've tried other sports betting tracking apps, and ZORT rules them all.",
    avatar: User2,
  },
  {
    id: 7,
    name: "John Doe",
    username: "@JohnDoe",
    content:
      "ZORT has completely changed how I track my bets. The interface is intuitive and the analytics are next level. Highly recommend to all sports bettors.",
    avatar: User3,
  },
  {
    id: 8,
    name: "Sarah Johnson",
    username: "@SarahJ",
    content:
      "Been using ZORT for 3 months now and my betting strategy has improved dramatically. The insights are invaluable!",
    avatar: User2,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Set initial window width and update on resize
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setActiveIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine testimonials per page based on screen width
  const getTestimonialsPerPage = () => {
    if (windowWidth >= 1024) return 6;
    if (windowWidth >= 768) return 4;
    return 1;
  };

  const testimonialsPerPage = getTestimonialsPerPage();
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Get visible testimonials for current page
  const getVisibleTestimonials = () => {
    const startIndex = activeIndex * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((current) => (current + 1) % totalPages),
    onSwipedRight: () =>
      setActiveIndex((current) => (current - 1 + totalPages) % totalPages),
    trackMouse: true,
  });

  // Navigation button handlers
  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + totalPages) % totalPages);
  };
  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % totalPages);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            DON&apos;T JUST TAKE OUR WORD FOR IT
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Here&apos;s what users have to say about ZORT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div
          ref={mergeRefs(testimonialsRef, swipeHandlers.ref)}
          className="relative overflow-hidden"
          data-aos="fade-up"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${activeIndex}-${testimonial.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex-shrink-0 mr-3">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 flex-grow italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Combined navigation and slider indicators */}
          {testimonials.length > testimonialsPerPage && (
            <div className="mt-8 flex items-center justify-center space-x-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="p-2 border border-transparent hover:border-blue-500 focus:border-blue-500 active:border-blue-500  rounded-full transition-colors duration-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-blue-500 w-6" : "bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="p-2 border border-transparent hover:border-blue-500 focus:border-blue-500 active:border-blue-500 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
