import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertCircle, FileText, Handshake } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contato</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Se você tem dúvidas, sugestões, deseja colaborar ou entrar em contato conosco por qualquer motivo, estamos à disposição para atender você da melhor forma possível.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Aqui no <span className="font-bold text-[#1a1a1a]">Guia do Roçador</span>, levamos a sério a qualidade das informações que oferecemos. Nosso objetivo é ajudar você a escolher e utilizar os melhores equipamentos de jardinagem — como roçadeiras a gasolina e elétricas, além de lâminas, fios de nylon e EPIs.
            </p>
            <p>
              Todos os conteúdos publicados no site são produzidos com base em testes práticos no mato, análises técnicas e anos de experiência real no uso de ferramentas em áreas verdes: desde a limpeza do quintal de casa até o controle contínuo em chácaras e propriedades maiores.
            </p>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10 text-center border-b-4 border-[#16A34A] inline-block pb-2">
            Como Podemos Ajudar?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Você pode entrar em contato para:</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#16A34A] flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full text-[#15803d]">
                <MessageSquare size={24} />
              </div>
              <p className="text-gray-700 font-medium">Tirar dúvidas sobre modelos de roçadeiras, motores 2t ou 4t e equipamentos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#16A34A] flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full text-[#15803d]">
                <AlertCircle size={24} />
              </div>
              <p className="text-gray-700 font-medium">Relatar algum erro ou sugerir atualização em nossos guias e reviews</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#16A34A] flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full text-[#15803d]">
                <FileText size={24} />
              </div>
              <p className="text-gray-700 font-medium">Sugerir novos testes de uso contínuo, tutoriais de manutenção e comparativos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#16A34A] flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full text-[#15803d]">
                <Handshake size={24} />
              </div>
              <p className="text-gray-700 font-medium">Propor parcerias comerciais ou colaborações focadas em jardinagem e manutenção</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Informações de Contato</h2>
              
              <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-sm border border-gray-100 space-y-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Responsável</h3>
                    <p className="text-gray-600">Murilo</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Empresa/Projeto</h3>
                    <p className="text-gray-600">Guia do Roçador</p>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="text-[#16A34A] mt-1"><MapPin size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE – CEP 56300-000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#16A34A] mt-1"><Phone size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(87) 99641-2248</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 bg-white px-2 py-1 rounded inline-flex border border-gray-100">
                        <Clock size={14} />
                        <span>Segunda a sexta, das 9h às 18h</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#16A34A] mt-1"><Mail size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">E-mail</h4>
                      <p className="text-gray-600 break-all">contato@guiadorocador.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Transparência e Compromisso</h3>
                <div className="prose text-gray-700 space-y-4">
                  <p>
                    O <span className="font-semibold">Guia do Roçador</span> é totalmente independente e não é patrocinado por nenhuma marca.
                  </p>
                  <p>
                    Nossas recomendações são feitas com base em testes reais no mato e uso rotineiro, pensando sempre na potência da máquina contra a necessidade do terreno do leitor, não importando se é algo pequeno no jardim de casa ou para uso profissional e intensivo.
                  </p>
                  <p className="font-medium text-[#1a1a1a] border-l-4 border-[#16A34A] pl-4 py-2 bg-gray-50">
                    Nosso compromisso é com você, leitor, em não te vender ilusão. Você terá indicações sólidas de equipamentos que aguentam o tranco.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full min-h-[800px]">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd1F8q9EcCaobCa1xOnSym8LUgywyAD6XVWLkZcIm4ZEKIkMA/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                className="w-full h-full min-h-[800px] border-0"
                title="Formulário de Contato"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
