import React from 'react';
import rulesFlareOne from '../assets/rulesFlareOne.svg';

export const Glow = ({ 
  size = 'md', 
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-[300px] h-auto',
    md: 'w-[500px] h-[500px]',
    lg: 'w-[800px] h-auto',
    full: 'w-full h-auto',
  };

  const selectedSize = sizeClasses[size] || size;

  return (
    <div className={`absolute hidden lg:block pointer-events-none z-0 mix-blend-screen ${className}`}>
      <img 
        src={rulesFlareOne} 
        alt="" 
        className={`${selectedSize} object-cover`}
        aria-hidden="true"
      />
    </div>
  );
};

export default Glow;
