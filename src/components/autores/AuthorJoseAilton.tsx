import React from 'react';
import { Mail, Wrench, ShieldCheck, Zap, Award, Target } from 'lucide-react';

export const AuthorJoseAilton: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
              <div className="absolute -inset-2 bg-[#16A34A] rounded-full blur opacity-30"></div>
              <img 
                src="/images/autores/José Ailton da Silva.webp" 
                alt="José Ailton da Silva" 
                className="relative w-full h-full object-cover rounded-full border-4 border-[#16A34A] shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="bg-[#16A34A] text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                Operação & Campo
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-4">José Ailton da Silva</h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Especialista Operacional em Roçadeiras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
            <p className="text-2xl font-medium text-[#1a1a1a]">
              "Trabalhar no mato pesado exige a roçadeira certa e a lâmina adequada. Minha missão é passar adiante essa vivência prática para que você não erre na escolha da sua máquina."
            </p>
            <div className="space-y-6">
              <p>
                Sou o José Ailton da Silva, especialista e operador de roçadeiras com mais de <strong className="text-[#16A34A]">10 anos de experiência prática</strong> no corte de vegetação fechada, capim alto, pastos e limpeza de terrenos urbanos e rurais.
              </p>
              <p>
                Ao longo da minha trajetória diária no campo, trabalhei com roçadeiras a combustão de diferentes cilindradas (de 26cc a mais de 50cc), além de equipamentos elétricos e a bateria, dominando o comportamento de cada tipo de máquina sob sol forte e vegetações desafiadoras.
              </p>
              <p>
                Minha especialidade no Guia do Roçador é testar o rendimento real: conforto do cinto de sustentação, autonomia por tanque, facilidade de recarga do carretel de nylon sem embolar e a segurança no manuseio de lâminas de corte. Com essa vivência, oriento você a escolher a roçadeira que aguenta o tranco do seu lote com o melhor custo-benefício.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-16 uppercase italic">Experiência na Prática</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manutenção de Terrenos", desc: "Expert em técnicas de roçada para diferentes tipos de vegetação.", icon: <Target size={32} /> },
              { title: "Testes de Autonomia", desc: "Avaliação real de quanto tempo o equipamento aguenta o trabalho pesado.", icon: <Zap size={32} /> },
              { title: "Ergonomia de Uso", desc: "Foco no conforto do operador para evitar fadiga em jornadas longas.", icon: <ShieldCheck size={32} /> }
            ].map((skill, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md transform hover:-translate-y-1 transition-transform">
                <span className="text-[#16A34A] block mb-4">{skill.icon}</span>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Especialista */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-8 underline decoration-[#16A34A] decoration-8 underline-offset-8">Dica de Mestre</h2>
            <p className="text-2xl text-gray-300 italic mb-10 leading-relaxed font-serif">
              "Nunca subestime a potência necessária para o seu mato. Comprar uma máquina abaixo do que você precisa é desperdício de dinheiro e esforço."
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-[#16A34A] font-bold block mb-1">10+ ANOS</span>
                    <span className="text-sm opacity-60">De Experiência em Campo</span>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-[#16A34A] font-bold block mb-1">MILES</span>
                    <span className="text-sm opacity-60">De Metros Quadrados Roçados</span>
                </div>
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Dúvidas sobre qual roçadeira escolher?</h2>
          <p className="text-gray-600 mb-8">Entre em contato pelo e-mail oficial para tirar dúvidas práticas sobre o modelo ideal para o seu terreno.</p>
          <a 
            href="mailto:contato@guiadorocador.com.br" 
            className="inline-flex items-center gap-2 bg-[#16A34A] text-white px-10 py-5 rounded-lg font-black hover:bg-[#15803d] transition-all transform hover:scale-105"
          >
            <Mail size={24} />
            FALAR COM JOSÉ AILTON
          </a>
        </div>
      </section>
    </div>
  );
};
