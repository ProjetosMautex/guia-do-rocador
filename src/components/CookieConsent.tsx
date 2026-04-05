import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent_rocador');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent_rocador', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 border-t border-gray-800 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 text-center md:text-left">
          <p>
            Utilizamos cookies para melhorar sua experiência e personalizar conteúdo. Ao continuar navegando, você concorda com nossa{' '}
            <a 
              href="/politica-de-privacidade" 
              className="text-[#16A34A] hover:underline font-medium transition-colors"
            >
              Política de Privacidade
            </a>.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="bg-[#16A34A] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#15803d] transition-colors shadow-sm whitespace-nowrap"
          >
            Aceitar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
