import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";

const Hero: React.FC = () => {
  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-main text-main">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode image */}
        <motion.img 
          src="/cerejeira1.png.png" 
          alt="" 
          className="absolute top-20 left-16 w-80 h-64 opacity-65 block dark:hidden"
          initial={{ opacity: 0, scale: 0.8}}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-main">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="block"
                  >
                    Olá, eu sou
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="block text-gradient animate-gradient bg-[length:200%_200%]"
                  >
                    Mateus Moura
                  </motion.span>
                </h1>
              </motion.div>
              
              <AnimatedText
                text="Desenvolvedor Full Stack com experiência em Spring Boot, Next.js e Ruby on Rails."
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-muted"
                delay={1}
              />
              
            </div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:static md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.svg 
                className="w-6 h-6 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;