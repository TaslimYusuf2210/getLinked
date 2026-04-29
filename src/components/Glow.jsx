import React from 'react';

export const Glow = ({ 
  color = 'purple', 
  size = 'md', 
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-[150px] h-[150px] blur-[70px]',
    md: 'w-[300px] h-[300px] blur-[120px]',
    lg: 'w-[450px] h-[450px] blur-[160px]',
  };
  
  const colorClasses = {
    purple: 'bg-customPurple',
    light: 'bg-customPurple-light',
    dark: 'bg-customPurple-dark',
  };

  const selectedSize = sizeClasses[size] || size;
  const selectedColor = colorClasses[color] || color;

  return (
    <div 
      className={`absolute rounded-full opacity-60 mix-blend-screen pointer-events-none ${selectedSize} ${selectedColor} ${className}`}
    ></div>
  );
};

export default Glow;
