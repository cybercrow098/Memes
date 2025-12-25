import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function MemeGenerator() {
  const [currentMeme, setCurrentMeme] = useState(0);

  const memes = [
    {
      text: "When you buy the dip but it keeps dipping",
      emoji: "📉😭",
    },
    {
      text: "POV: You're checking your portfolio at 3 AM",
      emoji: "🌙💀",
    },
    {
      text: "My TA says moon. Reality says rekt.",
      emoji: "📊🤡",
    },
    {
      text: "Just bought. You can sell now.",
      emoji: "🎯📉",
    },
    {
      text: "When someone asks about your investment strategy",
      emoji: "🤷‍♂️🎰",
    },
    {
      text: "Me explaining crypto to my parents",
      emoji: "🗣️🤯",
    },
    {
      text: "Sold for 2x, it did 100x next week",
      emoji: "📄💎",
    },
    {
      text: "HODL they said. It'll moon they said.",
      emoji: "🚀💀",
    },
    {
      text: "When you realize you bought the wrong token",
      emoji: "😱🔥",
    },
    {
      text: "My portfolio vs the market",
      emoji: "⬇️📈",
    },
  ];

  const generateNewMeme = () => {
    const newIndex = Math.floor(Math.random() * memes.length);
    setCurrentMeme(newIndex);
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-indigo-950 to-black overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent uppercase">
            Meme Generator
          </h2>
          <p className="text-2xl text-white/60 font-bold">
            (Fresh memes on demand)
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-indigo-900/50 backdrop-blur-sm p-12 rounded-3xl border-4 border-pink-500/50"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMeme}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl border-2 border-white/20 min-h-[300px] flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-8xl mb-8"
                >
                  {memes[currentMeme].emoji}
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-black text-white text-center uppercase leading-tight"
                >
                  {memes[currentMeme].text}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateNewMeme}
            className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-6 rounded-xl font-black text-2xl uppercase border-4 border-pink-400 hover:border-yellow-400 transition-all shadow-xl hover:shadow-pink-500/50"
          >
            🎲 Generate New Meme
          </motion.button>

          <p className="text-white/50 text-center mt-6 text-sm italic">
            Click the button for infinite wisdom from the degen handbook
          </p>
        </motion.div>

        {/* Meme stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-pink-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-pink-500/30 text-center">
            <p className="text-4xl font-black text-pink-400 mb-2">∞</p>
            <p className="text-white/60 font-bold uppercase text-sm">Meme Potential</p>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-500/30 text-center">
            <p className="text-4xl font-black text-purple-400 mb-2">100%</p>
            <p className="text-white/60 font-bold uppercase text-sm">Relatable Pain</p>
          </div>
          <div className="bg-indigo-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-500/30 text-center">
            <p className="text-4xl font-black text-indigo-400 mb-2">0%</p>
            <p className="text-white/60 font-bold uppercase text-sm">Financial Advice</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
