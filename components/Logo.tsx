import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div 
        className="relative w-10 h-10 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Updated magical glow background to use blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#1A1F2C] rounded-full opacity-75 blur-md" />
        
        <div className="absolute inset-0">
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            animate={{
              y: [-10, 10],
              x: [-5, 5],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full right-2"
            animate={{
              y: [10, -10],
              x: [5, -5],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
          />
        </div>
        
        <Sparkles className="w-6 h-6 text-white relative z-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse" />
      </motion.div>

      <div className="flex items-baseline">
        <span className="text-xl font-bold bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#1A1F2C] bg-clip-text text-transparent">
          Genie
        </span>
        <span className="text-xl font-black bg-gradient-to-r from-[#1A1F2C] to-[#0EA5E9] bg-clip-text text-transparent" style={{ 
          letterSpacing: "0.05em",
          transform: "scaleY(1.1)",
        }}>
          AI
        </span>
      </div>
    </div>
  );
};