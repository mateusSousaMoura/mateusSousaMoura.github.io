import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="flex items-center justify-between px-4 py-2 bg-foreground border border-muted rounded-xl shadow-sm">
        <div className="flex items-center space-x-4">
          <a href="#home" className="text-main font-bold">Início</a>
          <a href="#about" className="text-muted hover:text-main transition">Sobre</a>
          <a href="#skills" className="text-muted hover:text-main transition">Stack</a>
          <a href="#projects" className="text-muted hover:text-main transition">Projetos</a>
          <a href="#contact" className="text-muted hover:text-main transition">Contatos</a>
        </div>

        <div className="text-sm text-muted">Mateus Moura</div>
      </div>
    </nav>
  );
};

export default Navbar;
