import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Sistema de pagamentos integrado e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
      image: "🛒",
      github: "#",
      demo: "#",
      status: "Em Desenvolvimento"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real usando WebSockets.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB"],
      image: "📋",
      github: "#",
      demo: "#",
      status: "Concluído"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico interativo com gráficos e previsões. Integração com APIs externas e geolocalização.",
      technologies: ["Next.js", "Chart.js", "Weather API", "Tailwind"],
      image: "🌤️",
      github: "#",
      demo: "#",
      status: "Concluído"
    },
    {
      title: "Chat Application",
      description: "Aplicação de chat em tempo real com salas privadas, compartilhamento de arquivos e notificações push.",
      technologies: ["React", "Express", "Socket.io", "AWS S3"],
      image: "💬",
      github: "#",
      demo: "#",
      status: "Em Desenvolvimento"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-main text-main">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, mostrando diferentes tecnologias e soluções criativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group card rounded-xl overflow-hidden border-muted transition-all duration-300 hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="h-48 gradient-accent flex items-center justify-center text-6xl text-main">
                {project.image}
              </div>

              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-muted border-muted`}>
                    {project.status}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-main transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 card text-muted rounded-full text-sm hover:bg-foreground hover:text-main transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 card text-muted rounded-lg hover:bg-foreground hover:text-main transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 card text-muted rounded-lg hover:bg-foreground hover:text-main transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 btn-accent rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted mb-6">Interessado em ver mais projetos?</p>
          <a 
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 btn-accent font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Ver mais no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;