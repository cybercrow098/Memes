import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "CHAOS INITIATED",
      items: [
        "✅ Launch token (you are here)",
        "✅ Create memes (ongoing)",
        "✅ Confuse investors (achieved)",
        "✅ Argue online (always)",
      ],
      status: "COMPLETE (somehow)",
      color: "from-green-400 to-emerald-600",
      borderColor: "border-green-400",
    },
    {
      phase: "Phase 2",
      title: "MORE CHAOS",
      items: [
        "🔄 Trending on X (manifesting)",
        "🔄 Community grows (maybe)",
        "🔄 Meme war intensifies",
        "🔄 Both sides claim victory",
      ],
      status: "IN PROGRESS",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400",
    },
    {
      phase: "Phase 3",
      title: "STILL NO UTILITY",
      items: [
        "⏳ NFT collection (pointless)",
        "⏳ Merchandise (ironic)",
        "⏳ Partnerships (with chaos)",
        "⏳ Podcast about nothing",
      ],
      status: "COMING NEVER",
      color: "from-blue-400 to-purple-600",
      borderColor: "border-blue-400",
    },
    {
      phase: "Phase 4",
      title: "MOON (MAYBE)",
      items: [
        "🌙 Price goes up (trust me bro)",
        "🌙 Lambo (for someone)",
        "🌙 World domination (delusional)",
        "🌙 Retire rich (unlikely)",
      ],
      status: "2 WEEKS™",
      color: "from-purple-400 to-pink-600",
      borderColor: "border-purple-400",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background rockets */}
      <motion.div
        className="absolute top-20 right-10 text-6xl opacity-20"
        animate={{
          y: [-20, -100],
          x: [0, 50],
          rotate: 45,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-6xl opacity-20"
        animate={{
          y: [20, -100],
          x: [0, -50],
          rotate: -45,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        🚀
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase">
            Roadmap to Nowhere
          </h2>
          <p className="text-2xl text-white/60 font-bold">
            (Promises as reliable as campaign pledges)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
              <div className={`relative bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border-4 ${phase.borderColor}`}>
                {/* Phase header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-white/50 font-bold uppercase mb-1">
                      {phase.phase}
                    </p>
                    <h3 className="text-3xl font-black text-white uppercase">
                      {phase.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className={`w-12 h-12 text-white`} />
                  </motion.div>
                </div>

                {/* Status badge */}
                <div className={`inline-block bg-gradient-to-r ${phase.color} px-4 py-2 rounded-full mb-6`}>
                  <p className="text-sm font-black text-white uppercase">
                    {phase.status}
                  </p>
                </div>

                {/* Phase items */}
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 text-white/80 font-bold"
                    >
                      <span className="text-xl">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-red-500/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-500/30"
        >
          <h3 className="text-2xl font-black text-red-400 mb-4 text-center uppercase flex items-center justify-center gap-3">
            ⚠️ IMPORTANT DISCLAIMER ⚠️
          </h3>
          <p className="text-white/70 text-center font-bold text-lg">
            This roadmap is satire. Everything on it is either already done, will never happen, 
            or will happen accidentally. Just like real politics, promises mean nothing. 
            DYOR. NFA. NGMI if you think this is serious.
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 h-2 bg-gradient-to-r from-green-400 via-yellow-400 via-blue-400 to-purple-400 rounded-full"
        />
        <div className="flex justify-between mt-4 text-white/50 text-sm font-bold uppercase">
          <span>Launch</span>
          <span>Hype</span>
          <span>Reality</span>
          <span>Cope</span>
        </div>
      </div>
    </div>
  );
}
