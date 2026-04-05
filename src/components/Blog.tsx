import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

export const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#16A34A] pl-4">
            Artigos em Destaque
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((item, index) => (
            <article key={index} className="bg-[#F9F9F9] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden bg-gray-200">
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
                  Destaque
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
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
                  className="inline-flex items-center text-[#1a1a1a] font-bold hover:underline decoration-[#16A34A] decoration-2 underline-offset-4 mt-auto transition-all"
                >
                  Ler análise completa <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`px-6 py-2 rounded font-bold transition-colors ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#16A34A] text-white hover:bg-[#15803d]'
              }`}
            >
              Anterior
            </button>
            <span className="text-gray-700 font-semibold px-4">
              Página {currentPage} de {totalPages}
            </span>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`px-6 py-2 rounded font-bold transition-colors ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#16A34A] text-white hover:bg-[#15803d]'
              }`}
            >
              Próxima
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
