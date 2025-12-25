import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-950 py-16 border-t-4 border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-black bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              $CHAOS
            </motion.h3>
            <p className="text-white/60 font-bold">
              The most honest shitcoin in crypto. No promises. No utility. Just vibes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black text-white mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Documentation (lol)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Whitepaper (doesn't exist)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Team (anonymous degens)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Audit (trust me bro)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal (Satirical) */}
          <div>
            <h4 className="text-xl font-black text-white mb-4 uppercase">Legal*</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Terms of Chaos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Privacy (we don't care)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Disclaimer (everywhere)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-yellow-400 font-bold transition-colors">
                  Cookie Policy (yum)
                </a>
              </li>
            </ul>
            <p className="text-white/40 text-xs italic mt-4">
              *Not actual legal advice. Nothing here is real.
            </p>
          </div>
        </div>

        {/* Disclaimer banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-red-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-red-500/30 mb-8"
        >
          <h4 className="text-lg font-black text-red-400 mb-3 uppercase text-center">
            ⚠️ MEGA DISCLAIMER ⚠️
          </h4>
          <p className="text-white/60 text-sm text-center font-bold leading-relaxed">
            This entire website is satire. $CHAOS is a meme token with ZERO utility. 
            We make no promises, guarantees, or claims about anything. This is not financial advice. 
            Do not invest money you can't afford to lose completely. Seriously. 
            If you buy this token expecting anything other than entertainment value, you are making a mistake. 
            We are not responsible for your poor life choices. DYOR. NFA. NGMI if you don't understand what this is.
            <br />
            <br />
            <span className="text-red-400">
              Cryptocurrency is risky. Meme coins are even riskier. This specific meme coin is practically asking you to lose money. 
              Don't do it. Or do, but don't blame us.
            </span>
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm font-bold">
              © 2025 $CHAOS. All rights reserved (not really).
            </p>
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                <span className="text-2xl">🐦</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                <span className="text-2xl">✈️</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="text-white/60 hover:text-purple-400 transition-colors"
              >
                <span className="text-2xl">🎮</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Hidden message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-white/20 text-xs italic font-mono">
            If you read all the way to the bottom: gg. You're truly one of us.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
