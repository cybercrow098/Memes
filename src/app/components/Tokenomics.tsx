import { motion } from "motion/react";
import { Flame, TrendingUp, Users, Zap } from "lucide-react";

export function Tokenomics() {
  const tokenomicsData = [
    {
      icon: <Zap className="w-12 h-12" />,
      label: "Total Supply",
      value: "1,000,000,000",
      subtitle: "(One billion reasons to regret this)",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Flame className="w-12 h-12" />,
      label: "Burned Tokens",
      value: "40%",
      subtitle: "Political promises burned faster than trust",
      color: "from-red-400 to-red-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      label: "Liquidity Pool",
      value: "Locked",
      subtitle: "Tighter than campaign secrets",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      label: "Community",
      value: "30%",
      subtitle: "For the degens who actually read this",
      color: "from-blue-400 to-purple-600",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzQ0NCI+PC9wYXRoPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent uppercase">
            Tokenomics
          </h2>
          <p className="text-2xl text-white/60 font-bold">
            (Because every shitcoin needs fancy numbers)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/10 hover:border-white/30 transition-all">
                <motion.div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white/80 mb-2 uppercase">
                  {item.label}
                </h3>
                <p className="text-4xl font-black text-white mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-white/50 italic">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tax information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400/30"
        >
          <h3 className="text-3xl font-black text-yellow-400 mb-6 text-center uppercase">
            🚨 Tax Structure (Just Kidding, No Tax) 🚨
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-black text-green-400 mb-2">0%</p>
              <p className="text-white/60 font-bold">Buy Tax</p>
              <p className="text-white/40 text-sm italic">(We're not that evil)</p>
            </div>
            <div>
              <p className="text-2xl font-black text-green-400 mb-2">0%</p>
              <p className="text-white/60 font-bold">Sell Tax</p>
              <p className="text-white/40 text-sm italic">(Paperhand freely)</p>
            </div>
            <div>
              <p className="text-2xl font-black text-purple-400 mb-2">100%</p>
              <p className="text-white/60 font-bold">Chaos Tax</p>
              <p className="text-white/40 text-sm italic">(Paid in entertainment)</p>
            </div>
          </div>
        </motion.div>

        {/* Distribution pie chart mockup */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-black text-white mb-8 uppercase">
            Token Distribution
          </h3>
          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="bg-red-500/20 p-4 rounded-lg border-2 border-red-500/50">
              <p className="text-3xl font-black text-red-400">40%</p>
              <p className="text-sm text-white/60 font-bold">BURNED</p>
            </div>
            <div className="bg-green-500/20 p-4 rounded-lg border-2 border-green-500/50">
              <p className="text-3xl font-black text-green-400">25%</p>
              <p className="text-sm text-white/60 font-bold">LIQUIDITY</p>
            </div>
            <div className="bg-blue-500/20 p-4 rounded-lg border-2 border-blue-500/50">
              <p className="text-3xl font-black text-blue-400">30%</p>
              <p className="text-sm text-white/60 font-bold">COMMUNITY</p>
            </div>
            <div className="bg-purple-500/20 p-4 rounded-lg border-2 border-purple-500/50">
              <p className="text-3xl font-black text-purple-400">3%</p>
              <p className="text-sm text-white/60 font-bold">MARKETING</p>
            </div>
            <div className="bg-yellow-500/20 p-4 rounded-lg border-2 border-yellow-500/50">
              <p className="text-3xl font-black text-yellow-400">2%</p>
              <p className="text-sm text-white/60 font-bold">TEAM (JOKES)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
