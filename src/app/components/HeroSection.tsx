import { motion } from "motion/react";
import { GlitchText } from "./GlitchText";
import { Zap, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onChooseSide: () => void;
  selectedSide: "trump" | "mamdani" | null;
}

export function HeroSection({ onChooseSide, selectedSide }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <GlitchText className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent" intensity="high">
            $CHAOS
          </GlitchText>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight"
        >
          THE MOST USELESS TOKEN
          <br />
          <span className="text-yellow-400">YOU'LL EVER LOVE</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-bold"
        >
          Where political theater meets degenerate crypto.
          <br />
          <span className="text-red-400">No utility. No promises.</span> Just pure, unfiltered{" "}
          <span className="text-blue-400">chaos.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-6 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onChooseSide}
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-12 py-5 rounded-xl font-black text-xl uppercase border-4 border-yellow-400 shadow-2xl hover:shadow-yellow-400/50 transition-all flex items-center gap-3"
          >
            <Zap className="animate-pulse" size={28} />
            Choose Your Side
            <Zap className="animate-pulse" size={28} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-black text-xl uppercase border-4 border-white/30 hover:border-green-400 shadow-2xl transition-all flex items-center gap-3"
          >
            <TrendingUp size={28} />
            Buy Now (YOLO)
          </motion.button>
        </motion.div>

        {/* Side indicator */}
        {selectedSide && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`inline-block px-6 py-3 rounded-full border-4 ${
              selectedSide === "trump"
                ? "bg-red-500/20 border-red-400 text-red-300"
                : "bg-blue-500/20 border-blue-400 text-blue-300"
            } font-bold uppercase`}
          >
            {selectedSide === "trump" ? "🦅 TEAM TRUMP" : "📚 TEAM MAMDANI"}
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white/50 text-sm uppercase tracking-widest"
          >
            ↓ Scroll for chaos ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
