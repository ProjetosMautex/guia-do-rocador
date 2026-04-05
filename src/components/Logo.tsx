import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", lightMode = false }) => {
  const textColor = lightMode ? "text-white" : "text-[#1a1a1a]";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        {/* Fio de Nylon / Lâmina */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-[#16A34A] w-full h-full absolute top-0 left-0 hover:animate-spin transition-transform duration-700"
        >
          <path 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" 
            className="opacity-20" 
            stroke="none" 
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="9" strokeDasharray="4 6" className="text-[#16A34A]" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
        
        {/* Detalhe da Folha */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="text-[#1a1a1a] w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-sm"
        >
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9-2-9-2s0 6.03-9 11c4.97 0 9 0 9 0z" />
        </svg>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-lg tracking-tight ${textColor}`}>
          Guia do
        </span>
        <span className={`font-bold text-lg tracking-tight ${textColor} -mt-1`}>
          Roçador
        </span>
      </div>
    </div>
  );
};
