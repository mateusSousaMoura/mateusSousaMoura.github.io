import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import AnimatedText from "./ui/AnimatedText";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 bg-main text-main">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animationType="slideUp" className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main">
            Sobre Mim
          </h2>
          <motion.div
            className="w-20 h-1 gradient-accent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection animationType="slideRight" delay={0.2}>
            <div className="space-y-4">
              <AnimatedText
                text="Bacharel em Ciência da Computação com experiência em desenvolvimento full-stack, focado na criação e otimização de sistemas para os setores público e corporativo. Proficiente em tecnologias como Spring Boot, Ruby on Rails e Next.js para construir aplicações e APIs robustas e escaláveis."
                className="text-lg leading-relaxed text-muted"
                delay={0.4}
              />
              
              <AnimatedText
                text="Possuo sólida compreensão de todo o ciclo de vida do desenvolvimento de software, desde o levantamento de requisitos até a implantação e manutenção. Busco ativamente oportunidades para aplicar minhas habilidades na resolução de problemas complexos, gerando impacto e eficiência."
                className="text-lg leading-relaxed text-muted"
                delay={0.8}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slideLeft" delay={0.4}>
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="w-[26rem] h-[26rem] lg:w-[32rem] lg:h-[32rem] relative">
                {/* Profile image */}
                <motion.div 
                  className="w-full h-full rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group" 
                  style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img 
                    src="/profile.jpg" 
                    alt="profile" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    style={{ 
                      imageRendering: 'auto',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Decorative elements */}
                <motion.img 
                  src="/bamboo-3.png" 
                  alt="" 
                  className="absolute -top-8 -right-8 w-24 h-32 opacity-20 mix-blend-multiply"
                  initial={{ opacity: 0, y: -20, rotate: -15 }}
                  whileInView={{ opacity: 0.2, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.img 
                  src="/bamboo-4.png" 
                  alt="" 
                  className="absolute -bottom-6 -left-6 w-20 h-28 opacity-15 mix-blend-multiply"
                  initial={{ opacity: 0, y: 20, rotate: 15 }}
                  whileInView={{ opacity: 0.15, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;