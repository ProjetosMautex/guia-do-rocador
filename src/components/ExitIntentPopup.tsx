import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    // Se já fechou tudo ou já se inscreveu nesta sessão, não faz nada
    if (sessionStorage.getItem('closedAll') || sessionStorage.getItem('emailSubmitted')) return;

    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));

    const triggerDiscreet = () => {
      if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('emailSubmitted')) {
        setIsVisible(true);
      }
    };

    const elapsed = Date.now() - entryTime;
    const DISCREET_MS = 30000;
    const remainingDiscreet = Math.max(DISCREET_MS - elapsed, 0);

    const discreetTimer = setTimeout(triggerDiscreet, remainingDiscreet);

    return () => {
      clearTimeout(discreetTimer);
    };
  }, []);

  // Delay para aparecer o botão de fechar (X)
  useEffect(() => {
    if (isVisible) {
      setShowCloseButton(false);
      const timer = setTimeout(() => setShowCloseButton(true), 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('closedAll', 'true');
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
        sessionStorage.setItem('emailSubmitted', 'true');
        setStatus('success');
        // Redireciona para o checkout do ebook ou página de obrigado se existir
        window.location.href = 'https://guiadorocador.com.br/meuebookrocadeira1932';
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-500 border-t border-gray-800 pb-6 md:pb-4">
      <div className="max-w-5xl mx-auto relative px-2">
        {showCloseButton && (
          <button 
            onClick={handleClose}
            className="absolute -top-2 -right-2 md:top-0 md:-right-10 p-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-white shadow-lg"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
          <p className="font-medium text-sm md:text-base leading-tight">
            🛠️ <strong className="text-[#16A34A]">Terreno Limpo na Metade do Tempo:</strong> Guia Grátis para economizar até R$ 2.000/ano com roçagem.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail aqui..."
              className="flex-grow px-3 py-2 bg-white text-gray-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting' || !isValidEmail}
              className="bg-[#16A34A] hover:bg-[#15803d] text-white font-black py-2.5 px-6 rounded-lg text-sm transition-transform active:scale-95 disabled:opacity-50 whitespace-nowrap shadow-lg shadow-green-900/20"
            >
              {status === 'submitting' ? '...' : 'QUERO O GUIA'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
