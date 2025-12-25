import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function PollSection() {
  const [trumpVotes, setTrumpVotes] = useState(47);
  const [mamdaniVotes, setMamdaniVotes] = useState(53);
  const [hasVoted, setHasVoted] = useState(false);

  // Randomly fluctuate poll results
  useEffect(() => {
    const interval = setInterval(() => {
      const variance = Math.random() * 6 - 3; // -3 to +3
      const newTrump = Math.max(20, Math.min(80, trumpVotes + variance));
      setTrumpVotes(Math.round(newTrump));
      setMamdaniVotes(Math.round(100 - newTrump));
    }, 3000);

    return () => clearInterval(interval);
  }, [trumpVotes]);

  const handleVote = (side: "trump" | "mamdani") => {
    setHasVoted(true);
    // Slightly adjust toward voted side
    if (side === "trump") {
      setTrumpVotes((prev) => Math.min(80, prev + 2));
      setMamdaniVotes((prev) => Math.max(20, prev - 2));
    } else {
      setMamdaniVotes((prev) => Math.min(80, prev + 2));
      setTrumpVotes((prev) => Math.max(20, prev - 2));
    }

    // Reset after 5 seconds
    setTimeout(() => setHasVoted(false), 5000);
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase">
            Live Poll
          </h2>
          <p className="text-2xl text-white/60 font-bold">
            (Results totally not manipulated*)
          </p>
          <p className="text-sm text-white/40 italic mt-2">
            *They definitely are. These numbers change every 3 seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl border-4 border-purple-500/50 shadow-2xl"
        >
          <h3 className="text-3xl font-black text-white text-center mb-8 uppercase">
            Who's Winning the Meme War?
          </h3>

          {/* Poll bars */}
          <div className="space-y-6 mb-8">
            {/* Trump */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🦅</span>
                  <span className="text-2xl font-black text-red-400 uppercase">Trump</span>
                </div>
                <motion.span
                  key={trumpVotes}
                  initial={{ scale: 1.5, color: "#fbbf24" }}
                  animate={{ scale: 1, color: "#f87171" }}
                  className="text-3xl font-black"
                >
                  {trumpVotes}%
                </motion.span>
              </div>
              <div className="relative h-12 bg-gray-700 rounded-full overflow-hidden border-2 border-red-500/30">
                <motion.div
                  animate={{ width: `${trumpVotes}%` }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                />
              </div>
            </div>

            {/* Mamdani */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📚</span>
                  <span className="text-2xl font-black text-blue-400 uppercase">Mamdani</span>
                </div>
                <motion.span
                  key={mamdaniVotes}
                  initial={{ scale: 1.5, color: "#fbbf24" }}
                  animate={{ scale: 1, color: "#60a5fa" }}
                  className="text-3xl font-black"
                >
                  {mamdaniVotes}%
                </motion.span>
              </div>
              <div className="relative h-12 bg-gray-700 rounded-full overflow-hidden border-2 border-blue-500/30">
                <motion.div
                  animate={{ width: `${mamdaniVotes}%` }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Vote buttons */}
          {!hasVoted ? (
            <div className="grid md:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote("trump")}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white py-5 rounded-xl font-black text-xl uppercase border-4 border-red-400 hover:border-yellow-400 transition-all shadow-lg hover:shadow-red-500/50"
              >
                Vote Trump 🦅
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote("mamdani")}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-5 rounded-xl font-black text-xl uppercase border-4 border-blue-400 hover:border-yellow-400 transition-all shadow-lg hover:shadow-blue-500/50"
              >
                Vote Mamdani 📚
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-green-500/20 border-2 border-green-400 rounded-xl p-6 text-center"
            >
              <p className="text-2xl font-black text-green-400 uppercase">
                ✅ Vote Recorded!
              </p>
              <p className="text-white/60 font-bold mt-2">
                (Not really, this is all fake)
              </p>
            </motion.div>
          )}

          {/* Total votes (fake) */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-center"
          >
            <p className="text-white/50 text-sm uppercase tracking-widest">
              Total Votes: {Math.floor(Math.random() * 50000 + 100000).toLocaleString()}
            </p>
            <p className="text-white/30 text-xs mt-2 italic">
              (This number is completely made up and changes randomly)
            </p>
          </motion.div>
        </motion.div>

        {/* Poll disclaimer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-500/30"
        >
          <p className="text-yellow-300 text-center font-bold text-sm">
            ⚠️ THIS POLL IS COMPLETELY FAKE AND EXISTS PURELY FOR ENTERTAINMENT ⚠️
            <br />
            <span className="text-white/50">
              Results change randomly every 3 seconds. Your vote does nothing. Just like real elections! (jk)
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
