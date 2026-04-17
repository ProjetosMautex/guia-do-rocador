import React, { useState } from 'react';

export const BannerDoMeio: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

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

  if (status === 'success') {
    return (
      <div className="w-full bg-green-50 rounded-xl border border-green-200 my-12 p-6 animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Quase lá! Seu guia está a caminho. 🚀</h2>
            <p className="text-green-800">Verifique sua caixa de entrada em instantes.</p>
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg max-w-xl mx-auto text-left">
              <p className="text-red-800 font-bold text-sm tracking-wide leading-relaxed text-center">
                ⚠️ IMPORTANTE: Se o e-mail não chegar em 1 minuto, ele pode ter caído por engano no SPAM ou em PROMOÇÕES.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center tracking-tight leading-tight uppercase">
        🛠️ Mão na Massa
      </h2>
      
      <div className="w-full bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-6 md:p-10 text-gray-800 shadow-sm border-2">
        <div className="flex flex-col items-center text-center gap-6">
          
          <div className="w-full space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
              🛠️ Cansado de gastar com diárias de roçadores?
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Descubra como limpar seu terreno na metade do tempo e economize até <span className="text-[#16A34A] font-bold">R$ 2.000 por ano</span> cuidando você mesmo da sua propriedade.
            </p>
            <div className="pt-2 text-[#16A34A] font-black text-sm tracking-widest uppercase italic">
              Baixe agora o Guia Grátis:
            </div>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail aqui..."
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#16A34A]/20 focus:border-[#16A34A] text-base transition-all"
                required
              />
              
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white font-black py-4 px-4 rounded-xl text-base transition-all shadow-lg shadow-green-900/20 active:scale-95 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Aguarde...' : 'BAIXAR GUIA GRATUITO'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
