import { motion } from "motion/react";
import { useState, useEffect } from "react";

const newsItems = [
  "🚨 BREAKING: Both candidates claim they invented crypto",
  "⚡ SOURCES SAY: Token holders still have no idea what they bought",
  "🔥 EXCLUSIVE: Liquidity locked tighter than both egos combined",
  "💥 DEVELOPING: Meme war escalates, productivity plummets nationwide",
  "🎯 CONFIRMED: This token still more honest than campaign promises",
  "⚠️ ALERT: Degen traders buying without reading anything (as usual)",
  "📊 MARKET UPDATE: Chart going right, experts say 'normal behavior'",
  "🌙 RUMOR: Moon mission scheduled for 'two weeks' (trust me bro)",
  "💎 BREAKING: Paperhand spotted, community says 'NGMI'",
  "🚀 JUST IN: Roadmap extended with more chaos phases",
];

export function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(newsItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => {
        const shuffled = [...prev];
        const randomIndex = Math.floor(Math.random() * shuffled.length);
        const temp = shuffled[randomIndex];
        shuffled[randomIndex] = shuffled[0];
        shuffled[0] = temp;
        return shuffled;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 py-3 overflow-hidden border-y-4 border-yellow-400 shadow-lg">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...currentNews, ...currentNews, ...currentNews].map((item, index) => (
          <span
            key={index}
            className="text-white font-bold uppercase tracking-wider text-lg"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
