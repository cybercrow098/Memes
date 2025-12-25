import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function EasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Konami code: up, up, down, down, left, right, left, right, b, a
      // Simplified: just press 'C' for chaos
      if (e.key.toLowerCase() === "c" && e.ctrlKey) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Triple click detector
  useEffect(() => {
    const handleTripleClick = () => {
      setClickCount((prev) => prev + 1);
      if (clickCount >= 2) {
        setShowEasterEgg(true);
        setClickCount(0);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
      setTimeout(() => setClickCount(0), 1000);
    };

    window.addEventListener("click", handleTripleClick);
    return () => window.removeEventListener("click", handleTripleClick);
  }, [clickCount]);

  const easterEggMessages = [
    "🎉 You found the secret! Still no utility though.",
    "🤫 Shhh... you've unlocked: NOTHING",
    "🎯 Achievement Unlocked: Wasted 3 Clicks",
    "👀 Congrats! You're now officially a degen.",
    "🏆 Secret found! Reward: This message.",
    "🎪 You expected something? Classic mistake.",
    "💎 Hidden gem discovered: Pure disappointment",
    "🚀 Secret Moon Mission: Still grounded",
  ];

  const randomMessage =
    easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 180, opacity: 0 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
            className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-8 rounded-3xl border-8 border-white shadow-2xl max-w-md"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="text-8xl text-center mb-4"
            >
              🎊
            </motion.div>
            <h3 className="text-4xl font-black text-white text-center mb-4 uppercase">
              Easter Egg!
            </h3>
            <p className="text-xl font-bold text-white/90 text-center">
              {randomMessage}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowEasterEgg(false)}
              className="mt-6 w-full bg-white text-black py-3 rounded-xl font-black uppercase hover:bg-yellow-200 transition-colors"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
