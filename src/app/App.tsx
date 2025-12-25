import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { NewsTicker } from "./components/NewsTicker";
import { CharacterBattle } from "./components/CharacterBattle";
import { Tokenomics } from "./components/Tokenomics";
import { Roadmap } from "./components/Roadmap";
import { WhySection } from "./components/WhySection";
import { SocialSection } from "./components/SocialSection";
import { PollSection } from "./components/PollSection";
import { MemeGenerator } from "./components/MemeGenerator";
import { SideModal } from "./components/SideModal";
import { SoundToggle } from "./components/SoundToggle";
import { EasterEgg } from "./components/EasterEgg";
import { Footer } from "./components/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSide, setSelectedSide] = useState<"trump" | "mamdani" | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-black to-blue-950 -z-10" />
      
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 opacity-20 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <HeroSection 
        onChooseSide={() => setIsModalOpen(true)} 
        selectedSide={selectedSide}
      />
      
      <NewsTicker />
      
      <CharacterBattle />
      
      <Tokenomics />
      
      <Roadmap />
      
      <WhySection />
      
      <PollSection />
      
      <MemeGenerator />
      
      <SocialSection />
      
      <Footer />

      {/* Interactive Elements */}
      <SideModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectSide={(side) => setSelectedSide(side)}
      />
      
      <SoundToggle />
      
      <EasterEgg />

      {/* Scroll to top button */}
      {showScrollIndicator && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-full border-4 border-yellow-300 shadow-2xl hover:shadow-yellow-400/50 transition-all"
        >
          <span className="text-2xl">⬆️</span>
        </motion.button>
      )}

      {/* Random floating emojis */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed text-4xl pointer-events-none opacity-20 -z-10"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
          }}
        >
          {["🚀", "💎", "📉", "🔥", "🤡"][i]}
        </motion.div>
      ))}
    </div>
  );
}
