import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CharacterBattle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const trumpX = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);
  const mamdaniX = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const trumpQuotes = [
    "THIS TOKEN IS YUUUGE!",
    "I INVENTED BLOCKCHAIN, MANY PEOPLE SAY IT",
    "NOBODY DOES MEMES BETTER THAN ME",
    "FAKE NEWS SAYS IT'S A SCAM - WRONG!",
  ];

  const mamdaniQuotes = [
    "According to my research...",
    "Actually, if you read the whitepaper—",
    "The historical context of shitcoins—",
    "Let me explain why this is problematic...",
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase"
        >
          The Battle of Egos
        </motion.h2>

        <div className="relative">
          {/* Trump side */}
          <motion.div
            style={{ x: trumpX }}
            className="absolute left-0 top-0 w-1/2"
          >
            <div className="bg-gradient-to-br from-red-600/30 to-red-900/30 backdrop-blur-sm p-8 rounded-2xl border-4 border-red-500">
              <div className="text-8xl mb-4 text-center">🦅</div>
              <h3 className="text-4xl font-black text-red-400 text-center mb-4 uppercase">
                TRUMP
              </h3>
              <div className="space-y-4">
                {trumpQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-red-500/20 p-4 rounded-lg border-2 border-red-400/50"
                  >
                    <p className="text-white font-bold uppercase text-lg">
                      "{quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mamdani side */}
          <motion.div
            style={{ x: mamdaniX }}
            className="absolute right-0 top-0 w-1/2"
          >
            <div className="bg-gradient-to-br from-blue-600/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border-4 border-blue-500">
              <div className="text-8xl mb-4 text-center">📚</div>
              <h3 className="text-4xl font-black text-blue-400 text-center mb-4 uppercase">
                MAMDANI
              </h3>
              <div className="space-y-4">
                {mamdaniQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-blue-500/20 p-4 rounded-lg border-2 border-blue-400/50"
                  >
                    <p className="text-white font-bold italic text-lg">
                      "{quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VS in the middle */}
          <div className="flex items-center justify-center min-h-[600px]">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-9xl font-black bg-gradient-to-br from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            >
              VS
            </motion.div>
          </div>
        </div>

        {/* Battle stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-red-500/10 backdrop-blur-sm p-8 rounded-xl border-2 border-red-500/30">
            <h4 className="text-2xl font-black text-red-400 mb-4">TRUMP STATS</h4>
            <ul className="space-y-2 text-white/80">
              <li>🎯 <strong>Caps Lock Usage:</strong> 147%</li>
              <li>📱 <strong>Tweets per Hour:</strong> Too Many</li>
              <li>💰 <strong>Token Promises:</strong> BIGGEST EVER</li>
              <li>🔥 <strong>Controversy Level:</strong> Maximum</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 backdrop-blur-sm p-8 rounded-xl border-2 border-blue-500/30">
            <h4 className="text-2xl font-black text-blue-400 mb-4">MAMDANI STATS</h4>
            <ul className="space-y-2 text-white/80">
              <li>📖 <strong>Citations:</strong> Peer-Reviewed</li>
              <li>🎓 <strong>Explanations:</strong> Actually, well...</li>
              <li>💡 <strong>Historical Context:</strong> Always</li>
              <li>🤔 <strong>Nuance Level:</strong> Too High for Twitter</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
