import React from 'react';
import { Logo } from './Logo';
import { MapPin, Mail, Phone, User, Building } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Coluna Esquerda - Logo e Descrição */}
          <div className="space-y-6">
            <div className="mb-6">
              <Logo lightMode={true} />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              No <span className="text-[#16A34A] font-semibold">Guia do Roçador</span> você encontra análises completas, dicas de manutenção e os melhores guias de compra de roçadeiras, fios de nylon e EPIs. Conteúdo raiz, prático e 100% imparcial para limpar o seu terreno.
            </p>
          </div>

          {/* Coluna Direita - Informações de Contato Detalhadas */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold mb-8 border-l-4 border-[#16A34A] pl-4">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              
              {/* Responsável */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#16A34A] flex-shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Responsável</h4>
                  <p className="text-gray-300">Murilo</p>
                </div>
              </div>

              {/* Empresa */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#16A34A] flex-shrink-0">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Empresa/Projeto</h4>
                  <p className="text-gray-300">Guia do Roçador</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#16A34A] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Endereço</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE – CEP 56300-000
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#16A34A] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Telefone</h4>
                  <p className="text-gray-300">(87) 99641-2248</p>
                  <p className="text-gray-400 text-xs mt-1">(Atendimento de segunda a sexta, das 9h às 18h)</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#16A34A] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">E-mail</h4>
                  <p className="text-gray-300 break-all">contato@guiadorocador.com.br</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Barra Inferior - Copyright e Links Legais */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; 2026 Guia do Roçador. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/termos-de-uso" className="hover:text-[#16A34A] transition-colors">Termos de Uso</a>
            <a href="/politica-de-privacidade" className="hover:text-[#16A34A] transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
