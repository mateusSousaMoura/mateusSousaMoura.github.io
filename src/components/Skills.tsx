import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "JavaScript", level: 95, icon: "💛" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "Git", level: 85, icon: "📝" },
    { name: "PostgreSQL", level: 75, icon: "🐘" },
  ];

  const tools = [
    "VS Code", "Docker", "AWS", "Firebase", "Tailwind CSS", 
    "Next.js", "Express.js", "MongoDB", "Redis", "GraphQL"
  ];

  return (
  <section id="skills" className="py-20 px-6 bg-main text-main">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main">
            Habilidades
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-main">Linguagens & Frameworks</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-main font-medium">{skill.name}</span>
                    </div>
                    <span className="text-muted font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 muted-bg rounded-full overflow-hidden">
                    <div 
                      className="h-full accent-turquoise rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-main">Ferramentas & Tecnologias</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool}
                  className="card rounded-lg p-4 text-center hover:border-purple-500 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-muted group-hover:text-main transition-colors duration-300">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 card rounded-lg border-muted">
              <h4 className="text-lg font-semibold text-main mb-3">Sempre Aprendendo</h4>
              <p className="text-muted text-sm leading-relaxed">
                Constantemente explorando novas tecnologias e frameworks. 
                Atualmente focado em aperfeiçoar habilidades em arquitetura de sistemas, 
                DevOps e desenvolvimento mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;