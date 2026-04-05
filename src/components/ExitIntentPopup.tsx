import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerType, setBannerType] = useState<'discreet' | 'big'>('discreet');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    if (sessionStorage.getItem('closedAll')) return;

    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));
    const elapsed = Date.now() - entryTime;
    const TARGET_MS = 37000;
    const remaining = Math.max(TARGET_MS - elapsed, 0);

    const triggerDiscreet = () => {
      if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('bigBannerShown')) {
        setIsVisible(true);
      }
    };

    const triggerBig = () => {
      if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('bigBannerShown')) {
        setIsVisible(true);
        setBannerType('big');
        sessionStorage.setItem('bigBannerShown', 'true');
      }
    };

    // --- DESKTOP: Mouse Sai ---
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) triggerBig();
    };

    // --- MOBILE SCROLL INTENT ---
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const distance = lastScrollY - currentScrollY; // positive means scrolling UP
      const timeDiff = currentTime - lastScrollTime;
      
      if (distance > 50 && timeDiff > 0 && timeDiff < 100) triggerBig();
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    const timer = setTimeout(triggerDiscreet, remaining);

    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleCloseAll = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('closedAll', 'true');
  };

  const handleDiscreetClick = () => {
    setBannerType('big');
    sessionStorage.setItem('bigBannerShown', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Erro ao registrar. Tente novamente.');
      }
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  if (!isVisible) return null;

  if (bannerType === 'discreet') {
    return (
      <div 
        onClick={handleDiscreetClick}
        className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-500 border-t border-gray-800 cursor-pointer pb-6 md:pb-4 hover:bg-gray-900 transition-colors"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-2 md:px-0">
          <div className="flex-1 text-center md:text-left text-sm md:text-base font-medium pointer-events-none">
            🎁 <strong className="text-[#16A34A]">Guia Grátis:</strong> Aprenda a escolher roçadeiras profissionais pagando preço de hobby.
          </div>
          <button
            className="w-full sm:w-auto bg-[#16A34A] hover:bg-[#15803d] text-white font-bold py-2 px-6 rounded text-sm transition-colors whitespace-nowrap pointer-events-none"
          >
            VER AGORA
          </button>
        </div>
      </div>
    );
  }

  // BIG BANNER
  return (
    <div className="fixed inset-0 z-[150] flex flex-col justify-center items-center bg-black/80 px-4 animate-in fade-in duration-300">
      <div className="relative bg-[#1a1a1a] p-5 md:p-6 rounded-xl max-w-sm md:max-w-md w-full shadow-2xl border border-gray-700 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={handleCloseAll}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-1"
          aria-label="Fechar"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-green-400 mb-2 text-center">Guia a caminho! 🚀</h3>
            <p className="text-gray-300 text-center text-base">
              <strong className="text-[#16A34A]">⚠️ SPAM:</strong> Se não chegar em 1 minuto, olhe lá!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-[#16A34A] font-black text-xl md:text-2xl text-center leading-tight mb-2 md:mb-3 uppercase">
              ESPERA!!!<br/>Você vai sair sem isso
            </h2>
            
            {/* Espaço reservado para a futura imagem do ebook */}
            <div className="w-full max-w-[240px] md:max-w-[280px] mb-4 group relative">
              <div className="absolute -inset-1 bg-[#16A34A] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="/images/O MAPA DAS ROÇADEIRAS.webp" 
                alt="O Mapa das Roçadeiras Ebook" 
                className="relative w-full h-auto rounded-lg shadow-xl border border-gray-700 transform transition-transform hover:scale-[1.02] duration-300"
              />
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email aqui"
                className="w-full px-3 py-2 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#16A34A]/50 text-sm shadow-inner text-center font-medium"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white font-black py-3 px-4 rounded-lg text-base transition-transform hover:scale-105 active:scale-95 whitespace-nowrap disabled:opacity-50 mt-1 uppercase shadow-lg shadow-[#16A34A]/20"
              >
                {status === 'submitting' ? 'Aguarde...' : 'VER MODELOS PRO'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
