import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'elevated';
};

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default', ...rest }) => {
  const base = 'rounded-xl overflow-hidden card';
  const elev = variant === 'elevated' ? 'card-shadow' : '';
  return (
    <div className={`${base} ${elev} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
