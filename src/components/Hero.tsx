import React from "react";

const Hero: React.FC = () => {
  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-main text-main">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode image */}
        <img 
          src="/cerejeira1.png.png" 
          alt="" 
          className="absolute top-20 left-16 w-80 h-64 opacity-65 block dark:hidden"
          style={{ animationDelay: '1s' }}
        />
        {/* Dark mode image */}
        <img 
          src="/cerejeira1-dark-3.png" 
          alt="" 
          className="absolute top-20 left-16 w-80 h-64 opacity-65 hidden dark:block"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="animate-fadeIn grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-main">
                Olá, eu sou
                <span className="block text-gradient animate-gradient bg-[length:200%_200%]">
                  Mateus Moura
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-muted">
                Desenvolvedor Full Stack com experiência em Spring Boot, Next.js e Ruby on Rails.
              </p>
              
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce md:static md:mt-8">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;