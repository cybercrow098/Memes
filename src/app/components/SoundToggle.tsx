import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setSoundEnabled(!soundEnabled)}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-full border-4 border-yellow-400 shadow-2xl hover:shadow-yellow-400/50 transition-all"
    >
      {soundEnabled ? (
        <Volume2 className="w-8 h-8 text-white" />
      ) : (
        <VolumeX className="w-8 h-8 text-white" />
      )}
      <span className="sr-only">
        {soundEnabled ? "Disable sound" : "Enable sound"}
      </span>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        <p className="text-white font-bold text-sm">
          {soundEnabled ? "Mute Chaos" : "Unmute Chaos"}
        </p>
        <p className="text-white/50 text-xs italic">
          (No actual sounds, this is just for vibes)
        </p>
      </motion.div>
    </motion.button>
  );
}
