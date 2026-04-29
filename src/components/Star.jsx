import React from 'react';

const colors = {
  white: '#FFFFFF',
  purple: '#D434FE', 
  grey: '#FFFFFF66', // slightly faded
};

const sizes = {
  sm: 'w-3 h-3.5',
  md: 'w-4 h-5',
  lg: 'w-6 h-7',
};

export const Star = ({ 
  color = 'white', 
  size = 'md', 
  twinkle = false, 
  className = '' 
}) => {
  const starColor = colors[color] || color;
  const starSize = sizes[size] || size; // Allows passing custom tailwind classes for size
  
  return (
    <div className={`absolute ${className} ${twinkle ? 'animate-twinkle' : ''} ${starSize}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 21 25" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M10.5 0L12.5188 8.87841L21 12.5L12.5188 16.1216L10.5 25L8.48117 16.1216L0 12.5L8.48117 8.87841L10.5 0Z" 
          fill={starColor}
        />
      </svg>
    </div>
  );
};

export default Star;
