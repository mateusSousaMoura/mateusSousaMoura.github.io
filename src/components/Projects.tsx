import React from "react";

// Seção simplificada de projetos (Em Breve)
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-main text-main">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-main mb-6">Projetos</h2>
        <div className="w-24 h-1 gradient-accent mx-auto mb-12"></div>
        <div className="card rounded-2xl p-12 border-muted bg-foreground/60 backdrop-blur-sm">
          <div className="text-7xl mb-6 animate-pulse-soft select-none">🚧</div>
          <h3 className="text-2xl font-semibold mb-4 text-main tracking-tight">Em Breve</h3>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Estou preparando conteúdos e estudos de caso para esta seção. Em breve você poderá ver aqui
            alguns projetos selecionados com foco em qualidade de código, arquitetura e performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;