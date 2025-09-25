import React from "react";

const About: React.FC = () => {
  return (
  <section id="about" className="py-20 px-6 bg-main text-main">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">
              Sou um desenvolvedor apaixonado por tecnologia com experiência em criar soluções 
              digitais modernas e eficientes. Especializado em desenvolvimento full stack, 
              sempre busco aprender novas tecnologias e melhorar minhas habilidades.
            </p>
            
            <p className="text-lg leading-relaxed text-muted">
              Minha jornada na programação começou há alguns anos e desde então tenho 
              trabalhado em diversos projetos, desde aplicações web até sistemas complexos. 
              Acredito que a tecnologia pode transformar ideias em realidade.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 card rounded-lg transition-colors duration-300">
                <div className="text-3xl font-bold mb-2 text-main accent-tangerine">15+</div>
                <div className="text-muted">Projetos</div>
              </div>
              <div className="text-center p-6 card rounded-lg transition-colors duration-300">
                <div className="text-3xl font-bold mb-2 text-main accent-turquoise">2+</div>
                <div className="text-muted">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Avatar placeholder - you can replace with actual image later */}
              <div className="w-full h-full rounded-full flex items-center justify-center text-6xl font-bold text-invert shadow-2xl accent-tangerine--soft">
                MM
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-60 animate-float gradient-accent" style={{ filter: 'blur(6px)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-60 animate-float gradient-accent" style={{ animationDelay: '1s', filter: 'blur(4px)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;