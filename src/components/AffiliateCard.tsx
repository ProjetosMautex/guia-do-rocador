import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { products, type ProductId } from '../data/products';

interface AffiliateCardProps {
  productId: ProductId;
  price?: string;
  image?: string;
}

export const AffiliateCard: React.FC<AffiliateCardProps> = ({ productId, price, image }) => {
  const product = products[productId];
  
  if (!product) {
    return <div className="p-4 bg-red-100 text-red-700 rounded border border-red-300">Produto {productId} não encontrado.</div>;
  }

  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-6 bg-white shadow-sm hover:shadow-md transition-shadow my-8">
      {image && (
        <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden p-2 flex items-center justify-center">
          <img 
            src={image} 
            alt={product.name} 
            className="w-full h-auto object-contain" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/300x300?text=Produto';
            }}
          />
        </div>
      )}
      <div className="flex-grow text-center sm:text-left flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{product.name}</h3>
        {price && <p className="text-2xl font-bold text-[#1a1a1a] mb-4">A partir de <span className="text-[#16A34A]">{price}</span></p>}
        <div className="mt-auto pt-2">
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white px-6 py-3 rounded-lg font-bold w-full sm:w-auto hover:bg-[#15803d] transition-colors shadow-md"
          >
            <ShoppingCart size={20} />
            Ver Oferta
          </a>
        </div>
      </div>
    </div>
  );
};
