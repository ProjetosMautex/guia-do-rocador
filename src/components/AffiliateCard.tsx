import React from 'react';
import { products, type ProductId } from '../data/products';
import { ShoppingCart } from 'lucide-react';

interface Props {
  id?: ProductId;
  productId?: ProductId;
  compact?: boolean;
}

export const AffiliateCard: React.FC<Props> = ({ id, productId, compact = false }) => {
  const targetId = id || productId;
  const product = targetId ? products[targetId] : undefined;

  if (!product) return null;

  // Versão Compacta (usada em grids ou barras laterais)
  if (compact) {
    return (
      <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
        <h3 className="text-sm font-bold text-[#1a1a1a] text-center mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="w-full bg-[#16A34A] text-white text-xs font-bold py-2 px-3 rounded hover:bg-[#15803d] transition-colors text-center flex items-center justify-center gap-2 no-underline uppercase"
        >
          VER PREÇO
        </a>
      </div>
    );
  }

  // Versão Principal (usada no meio do artigo)
  return (
    <div className="my-10 flex flex-col items-center text-center p-8 bg-white rounded-2xl border-2 border-[#16A34A] shadow-xl">
      <div className="text-2xl font-bold text-[#1a1a1a] mb-8 max-w-2xl leading-tight">
        {product.name}
      </div>
      
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
        className="flex items-center justify-center gap-3 bg-[#16A34A] text-white px-10 py-5 rounded-xl font-black text-xl hover:scale-105 transition-all w-full sm:w-auto shadow-lg no-underline uppercase tracking-tight"
      >
        <ShoppingCart size={28} strokeWidth={3} />
        CLIQUE AQUI PARA VER O PREÇO
      </a>
      
      <p className="mt-4 text-xs text-gray-500 italic">
        * Você será redirecionado para a loja oficial
      </p>
    </div>
  );
};
