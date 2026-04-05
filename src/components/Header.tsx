import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Menu } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-[#1a1a1a] shadow-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center" aria-label="Página Inicial">
              <Logo lightMode={true} />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className={`flex space-x-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} className="text-gray-300 hover:text-[#16A34A] font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-[#2a2a2a] rounded-lg border-2 border-[#16A34A]">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="pl-4 pr-16 py-2 bg-transparent text-white focus:outline-none w-64"
                    placeholder="O que você procura?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Campo de pesquisa"
                  />
                  <div className="absolute right-2 flex items-center gap-2">
                    {searchQuery.trim() && (
                      <button type="submit" className="text-[#16A34A] hover:text-white transition-colors" aria-label="Pesquisar">
                        <ArrowRight size={18} />
                      </button>
                    )}
                    <button type="button" onClick={toggleSearch} className="text-gray-400 hover:text-white" aria-label="Fechar pesquisa">
                      <X size={20} />
                    </button>
                  </div>
                </form>
              ) : (
                <button onClick={toggleSearch} className="p-2 text-gray-300 hover:text-[#16A34A] transition-colors" aria-label="Abrir pesquisa">
                  <Search size={24} />
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="text-gray-300 font-bold text-sm flex items-center gap-2 border border-gray-600 px-3 py-1.5 rounded hover:bg-gray-800 transition-all active:scale-95"
            >
              <Menu size={20} />
              MENU
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <Logo lightMode={true} />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 hover:bg-gray-800 rounded-full transition-colors" aria-label="Fechar menu">
              <X size={32} />
            </button>
          </div>
          
          <form onSubmit={handleSearchSubmit} className="mt-8 relative">
             <input 
               type="text"
               className="w-full bg-[#2a2a2a] text-white p-4 pr-12 rounded-lg border border-gray-700 focus:border-[#16A34A] outline-none transition-all"
               placeholder="Pesquisar ferramentas..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               aria-label="Campo de pesquisa mobile"
             />
             <button type="submit" className="absolute right-4 top-4 text-[#16A34A]" aria-label="Pesquisar">
               {searchQuery.trim() ? <ArrowRight size={24} /> : <Search size={24} className="text-gray-500" />}
             </button>
          </form>

          <nav className="flex flex-col space-y-6 mt-10">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-2xl text-white border-b border-gray-800 pb-2 hover:text-[#16A34A] transition-colors" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 text-center">
             <p className="text-gray-500 text-sm">© 2026 Guia do Roçador</p>
          </div>
        </div>
      )}
    </header>
  );
};
