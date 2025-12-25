import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSide: (side: "trump" | "mamdani") => void;
}

export function SideModal({ isOpen, onClose, onSelectSide }: SideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 rounded-2xl border-4 border-yellow-400 shadow-2xl z-50 max-w-2xl w-full mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
              CHOOSE YOUR SIDE
            </h2>
            <p className="text-white/70 text-center mb-8">
              (Don't worry, it changes nothing. Just like voting!)
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onSelectSide("trump");
                  onClose();
                }}
                className="relative bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-xl border-4 border-red-400 hover:border-yellow-400 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    🦅
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase mb-2">
                    TRUMP
                  </h3>
                  <p className="text-white/80 text-sm font-bold">
                    "I MAKE TOKENS GREAT AGAIN"
                  </p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onSelectSide("mamdani");
                  onClose();
                }}
                className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl border-4 border-blue-400 hover:border-yellow-400 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    📚
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase mb-2">
                    MAMDANI
                  </h3>
                  <p className="text-white/80 text-sm font-bold">
                    "Actually, let me explain..."
                  </p>
                </div>
              </motion.button>
            </div>

            <p className="text-white/50 text-center text-xs mt-6 italic">
              * Side selection affects absolutely nothing. It's performance art.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
