import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { articles } from '../data/articles';

export const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [inputPage, setInputPage] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Sync state with URL parameter 'page'
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get('page') || '1', 10);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      } else {
        setCurrentPage(1);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load sync
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page') || '1', 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [totalPages]);

  const updatePage = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', pageNum.toString());
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    updatePage(Math.max(currentPage - 1, 1));
  };
  
  const nextPage = () => {
    updatePage(Math.min(currentPage + 1, totalPages));
  };

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      updatePage(pageNum);
      setInputPage('');
    }
  };

  return (
    <main className="flex-grow bg-gray-50">
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Blog & Reviews</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Análises técnicas, comparativos detalhados e guias para você escolher a roçadeira ideal e manter seu terreno limpo.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mb-8">
          <a 
            href="/"
            className="inline-flex items-center text-[#1a1a1a] font-bold hover:text-[#15803d] hover:underline decoration-[#16A34A] decoration-2 underline-offset-4 mb-6 transition-all"
          >
            <ChevronLeft className="mr-1 w-4 h-4" /> Voltar para o início
          </a>
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#16A34A] pl-4">
              Nossos Artigos
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((item, index) => (
            <article key={index} className="bg-[#F9F9F9] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group hover:border-[#16A34A]/50">
              <div className="relative h-56 overflow-hidden bg-gray-200 cursor-pointer" onClick={() => window.location.href = item.url}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x533/e2e8f0/16a34a?text=Guia+do+Rocador';
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-sm">
                  Artigo
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow cursor-pointer" onClick={() => window.location.href = item.url}>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 line-clamp-2 group-hover:text-[#15803d] transition-colors">
                  <a href={item.url}>
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                <a 
                  href={item.url} 
                  className="inline-flex items-center text-[#1a1a1a] font-bold mt-auto transition-all group-hover:underline decoration-[#16A34A] decoration-2 underline-offset-4"
                >
                  Ler artigo <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  currentPage === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#16A34A] text-white hover:bg-[#15803d] shadow-md active:scale-95'
                }`}
              >
                Anterior
              </button>
              
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-gray-600 font-medium">
                  Página <span className="text-[#1a1a1a] font-bold">{currentPage}</span> de <span className="text-[#1a1a1a] font-bold">{totalPages}</span>
                </span>
              </div>

              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  currentPage === totalPages 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#16A34A] text-white hover:bg-[#15803d] shadow-md active:scale-95'
                }`}
              >
                Próxima
              </button>
            </div>

            <form onSubmit={handlePageJump} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-xl shadow-sm border border-gray-200">
              <label htmlFor="page-jump" className="text-gray-600 text-xs font-bold uppercase tracking-wider ml-2">Ir para:</label>
              <input 
                id="page-jump"
                type="number" 
                min="1" 
                max={totalPages}
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                placeholder="Ex: 2"
                className="w-16 bg-white text-[#1a1a1a] border border-gray-300 rounded-lg px-2 py-1 text-center font-bold focus:ring-2 focus:ring-[#16A34A] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal"
              />
              <button 
                type="submit"
                className="bg-[#16A34A] text-white px-4 py-1 rounded-lg font-black text-sm uppercase hover:bg-[#15803d] transition-all active:scale-95"
              >
                OK
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};
