import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiGit, SiPostgresql, SiNextdotjs, SiTailwindcss, SiSpring, SiRubyonrails, SiDocker } from 'react-icons/si';
import AnimatedSection from "./ui/AnimatedSection";
import AnimatedCard from "./ui/AnimatedCard";

const groups = [
  {
    name: 'Frontend',
    items: [
      { key: 'next', label: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { key: 'react', label: 'React', icon: SiReact, color: '#61DAFB' },
      { key: 'ts', label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { key: 'tailwind', label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { key: 'spring', label: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { key: 'rails', label: 'Ruby on Rails', icon: SiRubyonrails, color: '#CC0000' },
      { key: 'node', label: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    ],
  },
  {
    name: 'Database',
    items: [
      { key: 'postgres', label: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { key: 'git', label: 'Git', icon: SiGit, color: '#F05032' },
      { key: 'docker', label: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 px-4 bg-main text-main relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animationType="slideUp" className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main">Minha Stack</h2>
          <motion.div
            className="w-20 h-1 gradient-accent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        <div className="space-y-6">
          {groups.map((group, groupIndex) => (
            <AnimatedSection 
              key={group.name} 
              animationType="slideUp" 
              delay={groupIndex * 0.2}
              className="p-2"
            >
              <div className="grid" style={{ gridTemplateColumns: '30% 1fr', gap: '1.5rem', alignItems: 'start' }}>
                <div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-semibold mb-2 text-main"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  >
                    {group.name}
                  </motion.h3>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    {group.items.map((it, itemIndex) => {
                      const Icon = it.icon;
                      const isNext = it.key === 'next';
                      const iconClass = `${isNext ? 'brand-next' : ''}`.trim();
                      return (
                        <AnimatedCard
                          key={it.key}
                          delay={groupIndex * 0.2 + itemIndex * 0.1}
                          direction="up"
                          scale={true}
                          className="flex items-center space-x-3 px-3 py-2 rounded-md bg-foreground border border-muted text-main hover:shadow-lg transition-shadow duration-300"
                        >
                          <motion.div 
                            className="w-10 h-10 flex items-center justify-center rounded-md bg-main"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {isNext ? (
                              <Icon className={`w-6 h-6 ${iconClass}`} />
                            ) : (
                              <Icon className="w-6 h-6" color={it.color} />
                            )}
                          </motion.div>
                          <div>
                            <div className="text-main font-medium">{it.label}</div>
                          </div>
                        </AnimatedCard>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;