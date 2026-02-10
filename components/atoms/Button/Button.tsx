"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean; // Propiedad independiente para el estado
  onClick: () => void;
}

const sizeClasses = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
  full: 'w-full py-3 text-lg',
};

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
  secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
  tertiary: 'bg-transparent text-gray-600 hover:bg-gray-100 underline-offset-4 hover:underline',
};

const disabledClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70 shadow-none hover:bg-gray-300 hover:no-underline';

export const Button = ({ 
  text, 
  size = 'md', 
  variant = 'primary', 
  disabled = false, 
  onClick 
}: ButtonProps) => {

  return (
    <button 
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200
        ${disabled ? disabledClasses : variantClasses[variant]} 
        ${sizeClasses[size]}
      `}
    >
        {text}
    </button>
  );
}
// interface ButtonProps {
//   text: string;
//   size?: 'sm' | 'md' | 'lg' | 'full';
//   variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
//   onClick: () => void;
// }

// const sizeClasses = {
//   sm: 'min-w-8 h-4 text-xs',
//   md: 'min-w-12 h-6 text-sm',
//   lg: 'min-w-16 h-8 text-lg',
//   full: 'w-full min-w-16 h-8 text-lg',
// };

// const variantClasses: {[key:string]: string} = {
//   primary: 'bg-blue-600 text-white hover:bg-blue-700',
//   secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
//   tertiary: 'bg-transparent text-gray-600 hover:bg-gray-100',
//   disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
// };


// export default function Button({ text, size = 'md', variant = 'primary', onClick}: ButtonProps) {

//   return (
//     <button onClick={onClick} className={`px-2 items-center justify-center rounded-full ${variantClasses[variant]} font-semibold ${sizeClasses[size]} overflow-hidden`}>
//         {text}
//     </button>
//   );
// }