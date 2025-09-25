import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia com experiência em criar soluções 
              digitais modernas e eficientes. Especializado em desenvolvimento full stack, 
              sempre busco aprender novas tecnologias e melhorar minhas habilidades.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha jornada na programação começou há alguns anos e desde então tenho 
              trabalhado em diversos projetos, desde aplicações web até sistemas complexos. 
              Acredito que a tecnologia pode transformar ideias em realidade.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-500 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Projetos</div>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-500 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-gray-300">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Avatar placeholder - you can replace with actual image later */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                MM
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;