import { motion } from "motion/react";
import { Twitter, Send, Users, Copy } from "lucide-react";
import { useState } from "react";

export function SocialSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x...CHAOS...INCOMING...420";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fakeTweets = [
    {
      user: "CryptoWhaleKing",
      handle: "@whale_szn",
      avatar: "🐋",
      content: "Just aped into $CHAOS with my lunch money. Wife's boyfriend is gonna be mad 😤",
      likes: "420K",
      timestamp: "2m ago",
    },
    {
      user: "DegenerateQueen",
      handle: "@ngmi_4life",
      avatar: "👑",
      content: "This is either the dumbest or smartest thing I've ever bought. Probably dumb. WAGMI anyway 🚀",
      likes: "69K",
      timestamp: "5m ago",
    },
    {
      user: "PaperHandsPete",
      handle: "@i_always_sell",
      avatar: "📄",
      content: "Sold at -50% as tradition. Good luck everyone! 🤡",
      likes: "12K",
      timestamp: "8m ago",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase">
            Join The Chaos
          </h2>
          <p className="text-2xl text-white/60 font-bold">
            (Misery loves company)
          </p>
        </motion.div>

        {/* Social platforms */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="#"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm p-8 rounded-2xl border-4 border-blue-400/50 hover:border-blue-400 transition-all group"
          >
            <div className="flex flex-col items-center">
              <Twitter className="w-16 h-16 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase">Twitter/X</h3>
              <p className="text-white/60 font-bold text-center">
                Where the meme war happens
              </p>
              <div className="mt-4 bg-blue-500/20 px-6 py-2 rounded-full">
                <p className="text-blue-300 font-black">@ChaosCoinOfficial</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="#"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 backdrop-blur-sm p-8 rounded-2xl border-4 border-cyan-400/50 hover:border-cyan-400 transition-all group"
          >
            <div className="flex flex-col items-center">
              <Send className="w-16 h-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase">Telegram</h3>
              <p className="text-white/60 font-bold text-center">
                The riot room (24/7 chaos)
              </p>
              <div className="mt-4 bg-cyan-500/20 px-6 py-2 rounded-full">
                <p className="text-cyan-300 font-black">t.me/ChaosCoin</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="#"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm p-8 rounded-2xl border-4 border-purple-400/50 hover:border-purple-400 transition-all group"
          >
            <div className="flex flex-col items-center">
              <Users className="w-16 h-16 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase">Discord</h3>
              <p className="text-white/60 font-bold text-center">
                Debate arena (arguments daily)
              </p>
              <div className="mt-4 bg-purple-500/20 px-6 py-2 rounded-full">
                <p className="text-purple-300 font-black">discord.gg/chaos</p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Fake Twitter feed */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-black text-white text-center mb-8 uppercase">
            Live From The Trenches
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {fakeTweets.map((tweet, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border-2 border-white/10 hover:border-blue-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tweet.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-black text-white">{tweet.user}</span>
                      <span className="text-white/50 text-sm">{tweet.handle}</span>
                      <span className="text-white/30 text-xs">• {tweet.timestamp}</span>
                    </div>
                    <p className="text-white/80 mb-3">{tweet.content}</p>
                    <div className="flex items-center gap-6 text-white/50 text-sm">
                      <span>❤️ {tweet.likes}</span>
                      <span>🔁 {Math.floor(parseInt(tweet.likes) / 2)}K</span>
                      <span>💬 {Math.floor(parseInt(tweet.likes) / 10)}K</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contract address */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-sm p-8 rounded-2xl border-4 border-yellow-400/50 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-black text-yellow-400 text-center mb-6 uppercase">
            Contract Address
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-black/50 px-6 py-4 rounded-lg border-2 border-white/20 flex-1 text-center md:text-left">
              <code className="text-white font-mono text-sm md:text-lg break-all">
                {contractAddress}
              </code>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-black uppercase flex items-center gap-3 transition-colors"
            >
              <Copy size={20} />
              {copied ? "COPIED!" : "COPY"}
            </motion.button>
          </div>
          <p className="text-white/50 text-center mt-4 text-sm italic">
            ⚠️ Always verify the contract address. Even though this is a joke, scammers aren't.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
