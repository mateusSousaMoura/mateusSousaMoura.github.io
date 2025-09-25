import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'px-6 py-2 rounded-full font-semibold transition-all duration-200';
  const variants: Record<string, string> = {
    primary: 'btn-accent',
    secondary: 'card text-main',
    ghost: 'bg-transparent text-main border border-muted'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
