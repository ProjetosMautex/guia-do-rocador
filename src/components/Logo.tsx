import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", lightMode = false }) => {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  
  const textColor = lightMode ? "text-white" : "text-gray-900";
  const subTextColor = lightMode ? "text-emerald-400" : "text-emerald-600";
  const dotColor = "text-[#22c55e]";

  return (
    <div className={`group inline-flex items-center gap-3 transition-transform select-none ${className}`}>
      {/* Símbolo / Emblema da Roçadeira */}
      <div className="relative w-11 h-11 flex-shrink-0">
        {/* Glow sutil de fundo no hover */}
        <div className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-md opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500" />
        
        <svg 
          viewBox="0 0 44 44" 
          className="relative w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`bgGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f2918" />
              <stop offset="100%" stopColor="#05150b" />
            </linearGradient>
            
            <linearGradient id={`bladeGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>

            <linearGradient id={`trailGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
            </linearGradient>

            <radialGradient id={`glowGrad-${uid}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#16a34a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Fundo Squircle com borda refinada */}
          <rect 
            x="1.5" 
            y="1.5" 
            width="41" 
            height="41" 
            rx="11" 
            fill={`url(#bgGrad-${uid})`} 
            stroke="#22c55e" 
            strokeWidth="1.2" 
            strokeOpacity="0.45"
            className="transition-colors duration-300 group-hover:stroke-emerald-400 group-hover:stroke-opacity-90"
          />
          <circle cx="22" cy="22" r="18" fill={`url(#glowGrad-${uid})`} />

          {/* Linha de Alta Rotação (Fio de nylon / Trimmer line) */}
          <circle 
            cx="22" 
            cy="22" 
            r="16.5" 
            fill="none" 
            stroke={`url(#trailGrad-${uid})`} 
            strokeWidth="1.3" 
            strokeLinecap="round" 
            strokeDasharray="28 14 10 12"
            style={{ transformOrigin: '22px 22px' }}
            className="transition-transform duration-1000 ease-in-out group-hover:rotate-180"
          />

          {/* Conjunto de Corte: 3 Lâminas de Aço com chanfro e centro */}
          <g 
            style={{ transformOrigin: '22px 22px' }}
            className="transition-transform duration-700 ease-out group-hover:rotate-180"
          >
            {/* Lâmina 1 (Superior) */}
            <path 
              d="M 19.4 20.2 C 18.6 15.2, 20.1 10.2, 21.4 6.8 L 23.4 7.6 C 24.6 11.0, 25.2 16.0, 23.5 20.2 Z" 
              fill={`url(#bladeGrad-${uid})`} 
            />
            <path 
              d="M 21.4 6.8 L 22.0 17.5" 
              stroke="#bbf7d0" 
              strokeWidth="0.6" 
              strokeLinecap="round" 
              strokeOpacity="0.9" 
            />

            {/* Lâmina 2 (Direita Inferior) */}
            <path 
              d="M 24.9 20.6 C 29.6 22.5, 33.2 26.3, 35.5 29.1 L 33.8 30.4 C 30.2 29.8, 25.6 27.8, 22.8 24.2 Z" 
              fill={`url(#bladeGrad-${uid})`} 
            />
            <path 
              d="M 35.5 29.1 L 25.9 23.0" 
              stroke="#bbf7d0" 
              strokeWidth="0.6" 
              strokeLinecap="round" 
              strokeOpacity="0.9" 
            />

            {/* Lâmina 3 (Esquerda Inferior) */}
            <path 
              d="M 21.7 25.2 C 17.8 28.3, 12.7 29.5, 9.1 30.1 L 8.8 28.0 C 11.2 25.2, 15.2 22.2, 19.7 21.6 Z" 
              fill={`url(#bladeGrad-${uid})`} 
            />
            <path 
              d="M 9.1 30.1 L 18.1 23.5" 
              stroke="#bbf7d0" 
              strokeWidth="0.6" 
              strokeLinecap="round" 
              strokeOpacity="0.9" 
            />

            {/* Flange / Porca de Fixação Central */}
            <circle cx="22" cy="22" r="5.2" fill="#081b0e" stroke="#22c55e" strokeWidth="1.2" />
            <circle cx="22" cy="22" r="3.6" fill="#14532d" />

            {/* Folha Verde / Símbolo de Jardinagem Central */}
            <path 
              d="M 22 18.5 C 23.8 19.8 24.2 21.6 23.4 23.0 C 22.8 24.2 22 24.8 22 24.8 C 22 24.8 21.2 24.2 20.6 23.0 C 19.8 21.6 20.2 19.8 22 18.5 Z" 
              fill="#86efac" 
            />
            <path d="M 22 19 L 22 24.2" stroke="#14532d" strokeWidth="0.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      
      {/* Tipografia da Marca com Hierarquia Visual Forte */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none mb-1">
          <span className={`text-[10px] sm:text-[11px] font-black tracking-[0.24em] uppercase ${subTextColor}`}>
            GUIA DO
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300" />
        </div>
        <div className="flex items-baseline leading-none">
          <span className={`font-black text-xl sm:text-[22px] tracking-tight ${textColor} group-hover:text-emerald-100 transition-colors duration-200`}>
            ROÇADOR
          </span>
          <span className={`font-black text-xl sm:text-[22px] ${dotColor} ml-0.5 group-hover:translate-x-0.5 transition-transform duration-200`}>
            .
          </span>
        </div>
      </div>
    </div>
  );
};
