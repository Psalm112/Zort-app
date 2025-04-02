import { motion } from "framer-motion";
import { Users, Trophy, TrendingUp } from "lucide-react";

const SocialBetting = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Connect with the
                </span>
                <br />
                <span className="text-white">Betting Community</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 mb-8">
              Join thousands of bettors, share insights, and learn from the
              community. Compare your performance, discover trending bets, and
              improve your strategy.
            </p>

            <div className="space-y-6">
              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Social Community
                  </h3>
                  <p className="text-gray-400">
                    Connect with other bettors and share strategies
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Leaderboards
                  </h3>
                  <p className="text-gray-400">
                    See how you rank against other players
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 bg-opacity-20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Trending Bets
                  </h3>
                  <p className="text-gray-400">
                    Discover what&apos;s popular in the betting community
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute top-0 -left-4 w-64 h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

              <div className="relative z-10 bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
                <div className="h-12 bg-gray-900 flex items-center px-4 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="px-4 py-6 space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-400">
                        Top Bettor
                      </span>
                      <span className="text-xs text-gray-500">Weekly</span>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                        <span className="font-bold text-sm">JD</span>
                      </div>
                      <div>
                        <p className="font-medium">John_Dice</p>
                        <p className="text-xs text-gray-400">
                          +&pound;1,240 this week
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-green-500 font-medium">+68%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-700">
                    <h4 className="font-medium mb-3">Trending Bets</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-600 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">NFL</span>
                          </div>
                          <span className="text-sm">Chiefs ML</span>
                        </div>
                        <span className="text-xs text-gray-400">
                          78% of users
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">NBA</span>
                          </div>
                          <span className="text-sm">Lakers +6.5</span>
                        </div>
                        <span className="text-xs text-gray-400">
                          64% of users
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <p className="text-sm font-medium mb-2">
                      Join the community!
                    </p>
                    <p className="text-xs text-blue-100 mb-3">
                      Share your wins and learn from others
                    </p>
                    <button className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg text-sm">
                      Connect Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialBetting;
