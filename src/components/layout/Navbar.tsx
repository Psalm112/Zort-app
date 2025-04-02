"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  ChevronDown,
  Shield,
  Bell,
  BarChart,
  Link2,
  AlertCircle,
  Sliders,
  PieChart,
  Smartphone,
  User,
  Scan,
  Brain,
  BarChart2,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // Feature icons mapping
  const featureIcons: Record<string, React.ReactNode> = {
    "AI Bet Slip Scanner": <Scan size={18} className="text-blue-400" />,
    "Intelligent Analytics": <Brain size={18} className="text-purple-400" />,
    "Smart Dashboard": <BarChart2 size={18} className="text-green-400" />,
    "Secure and Private": <Shield size={18} className="text-yellow-400" />,
    "Real-Time Updates & Notifications": (
      <Bell size={18} className="text-red-400" />
    ),
    "Historical Trends & Performance Analysis": (
      <BarChart size={18} className="text-indigo-400" />
    ),
    "Integration with Sportsbooks": (
      <Link2 size={18} className="text-pink-400" />
    ),
    "Customizable Alerts & Settings": (
      <Sliders size={18} className="text-orange-400" />
    ),
    "Advanced Data Visualization": (
      <PieChart size={18} className="text-cyan-400" />
    ),
    "Responsible Gambling Tools": (
      <AlertCircle size={18} className="text-amber-400" />
    ),
    "Cross-Platform Sync": <Smartphone size={18} className="text-lime-400" />,
    "Personalized User Experience": (
      <User size={18} className="text-violet-400" />
    ),
  };

  // List of navigation items with dropdown options
  const navItems = [
    {
      name: "Features",
      path: "/features",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "AI Bet Slip Scanner",
          // path: "features#ai-bet-slip-scanner"
          path: "/features",
        },
        {
          name: "Intelligent Analytics",
          // path: "features#intelligent-analytics",

          path: "/features",
        },
        {
          name: "Smart Dashboard",
          // path: "features#smart-dashboard"
          path: "/features",
        },
        {
          name: "Secure and Private",
          // path: "features#secure-and-private"
          path: "/features",
        },
        {
          name: "Real-Time Updates & Notifications",
          path: "/features#real-time-updates",
        },
        {
          name: "Historical Trends & Performance Analysis",
          path: "/features#historical-trends",
        },
        {
          name: "Integration with Sportsbooks",
          path: "/features#sports-books",
        },
        {
          name: "Customizable Alerts & Settings",
          path: "/features#customizable-alerts",
        },
        {
          name: "Advanced Data Visualization",
          path: "/features#data-visualization",
        },
        {
          name: "Responsible Gambling Tools",
          path: "/features#responsible-gambling",
        },
        { name: "Cross-Platform Sync", path: "/features#cross-platform-sync" },
        {
          name: "Personalized User Experience",
          path: "/features#personalized-experience",
        },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      hasDropdown: false,
    },
    {
      name: "About",
      path: "/about",
      hasDropdown: false,
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    //   hasDropdown: false,
    // },
    {
      name: "Support",
      path: "/support",
      hasDropdown: false,
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              ZORT
            </motion.h1>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transform transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 max-lg:-translate-x-1/3 mt-2 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-2xl py-6 px-4 z-20"
                        style={{
                          width: "min(90vw, 1024px)",
                          transform: "translateX(-50%)",
                          left: "50%",
                          maxHeight: "calc(100vh - 150px)",
                          overflowY: "auto",
                        }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 mr-3 p-2 rounded-md bg-gray-700/50 group-hover:bg-gray-600 transition-colors">
                                {featureIcons[dropdownItem.name]}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-white truncate">
                                  {dropdownItem.name}
                                </p>
                                <p className="text-xs text-gray-400 truncate">
                                  Explore {dropdownItem.name.toLowerCase()}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-full flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <Download size={16} />
              <span>Download</span>
            </motion.button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg border-t border-gray-800 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex justify-between items-center w-full py-3 text-lg text-gray-300 hover:text-white font-medium border-b border-gray-800"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-2 p-2 mt-2">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.path}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpen(false);
                                  }}
                                  className="flex items-center p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                                >
                                  <div className="mr-2 flex-shrink-0">
                                    {featureIcons[dropdownItem.name]}
                                  </div>
                                  <span className="text-xs text-gray-300 truncate">
                                    {dropdownItem.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-lg text-gray-300 hover:text-white font-medium border-b border-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.button
                variants={itemVariants}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center space-x-2 mt-4"
              >
                <Download size={18} />
                <span>Download App</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
