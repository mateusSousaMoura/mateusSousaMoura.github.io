import React from "react";

// If you add 'src/assets/profile.jpg' you can import it here:
// import profile from '../assets/profile.jpg';

const About: React.FC = () => {
  return (
  <section id="about" className="py-12 px-4 bg-main text-main">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted">
              Bacharel em Ciência da Computação com experiência em desenvolvimento full-stack, focado na criação e otimização
              de sistemas para os setores público e corporativo. Proficiente em tecnologias como Spring Boot, Ruby on Rails e
              Next.js para construir aplicações e APIs robustas e escaláveis.
            </p>
            
            <p className="text-lg leading-relaxed text-muted">
               Possuo sólida compreensão de todo o ciclo de vida do desenvolvimento de software, desde o levantamento de requisitos
                até a implantação e manutenção. Busco ativamente oportunidades para aplicar minhas habilidades na resolução de problemas
               complexos, gerando impacto e eficiência.
            </p>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="w-[26rem] h-[26rem] lg:w-[32rem] lg:h-[32rem] relative">
              {/* Profile image */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
                <img 
                  src="/profile.jpg" 
                  alt="profile" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  style={{ 
                    imageRendering: 'auto',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                />
              </div>

              {/* Decorative elements */}
              <img 
                src="/bamboo-3.png" 
                alt="" 
                className="absolute -top-8 -right-8 w-24 h-32 opacity-20 animate-float mix-blend-multiply"
                style={{ animationDelay: '0s' }}
              />
              <img 
                src="/bamboo-4.png" 
                alt="" 
                className="absolute -bottom-6 -left-6 w-20 h-28 opacity-15 animate-float mix-blend-multiply"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;