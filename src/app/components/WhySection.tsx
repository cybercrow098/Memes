import { motion } from "motion/react";
import { Trophy } from "lucide-react";

export function WhySection() {
  const reasons = [
    {
      icon: "🎭",
      title: "Pure Satire",
      description: "No pretending to change the world. Just memes and chaos.",
    },
    {
      icon: "🚫",
      title: "Zero Utility",
      description: "We're honest about it. This token does absolutely nothing.",
    },
    {
      icon: "🎪",
      title: "Maximum Entertainment",
      description: "Worth it for the laughs alone. Probably.",
    },
    {
      icon: "🤡",
      title: "Self-Aware",
      description: "We know it's stupid. You know it's stupid. Let's be stupid together.",
    },
    {
      icon: "💀",
      title: "No False Promises",
      description: "Unlike politicians, we tell you upfront: there's nothing here.",
    },
    {
      icon: "🎯",
      title: "Community Chaos",
      description: "Join thousands of degens who also make questionable decisions.",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-red-950 to-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent uppercase">
            Why This Exists
          </h2>
          <p className="text-2xl text-white/60 font-bold max-w-3xl mx-auto">
            A completely legitimate question that deserves a completely ridiculous answer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotateX: -20 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border-2 border-yellow-500/30 hover:border-yellow-400 transition-all shadow-xl hover:shadow-yellow-400/20"
            >
              <div className="text-6xl mb-4 text-center">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-3 text-center uppercase">
                {reason.title}
              </h3>
              <p className="text-white/70 text-center font-bold">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main manifesto */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-500/20 via-red-500/20 to-purple-500/20 backdrop-blur-sm p-12 rounded-3xl border-4 border-yellow-400/50"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Trophy className="w-16 h-16 text-yellow-400" />
            </motion.div>
          </div>

          <h3 className="text-4xl font-black text-center text-white mb-8 uppercase">
            The Actual Truth
          </h3>

          <div className="space-y-6 text-white/80 text-lg font-bold max-w-4xl mx-auto">
            <p className="text-center">
              In a world of crypto projects promising to revolutionize finance, save the planet, 
              and cure world hunger, we decided to do something different:
            </p>
            <p className="text-center text-2xl text-yellow-400 font-black uppercase">
              Absolutely Nothing
            </p>
            <p className="text-center">
              This is a meme token. A satirical joke. A commentary on political theater and 
              crypto degeneracy. We're not building a blockchain. We're not changing finance. 
              We're not even pretending to have a use case.
            </p>
            <p className="text-center text-xl text-red-400 font-black">
              This is performance art with a token ticker.
            </p>
            <p className="text-center">
              If you buy this, you're either in on the joke or about to learn an expensive lesson 
              about reading disclaimers. Either way, we salute your degeneracy.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mt-12 bg-black/50 p-6 rounded-xl border-2 border-red-500/50"
          >
            <p className="text-center text-red-400 font-black uppercase tracking-widest text-sm">
              ⚠️ NOT FINANCIAL ADVICE • DO YOUR OWN RESEARCH • ONLY INVEST WHAT YOU CAN AFFORD TO LAUGH ABOUT ⚠️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
