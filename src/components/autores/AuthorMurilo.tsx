import React from 'react';
import { Mail, ShieldCheck, Zap, Award, BookOpen } from 'lucide-react';

export const AuthorMurilo: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
              <div className="absolute -inset-2 bg-[#16A34A] rounded-full blur opacity-30"></div>
              <img 
                src="/images/autores/murilo.webp" 
                alt="Murilo" 
                className="relative w-full h-full object-cover rounded-full border-4 border-[#16A34A] shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="bg-[#16A34A] text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                Fundador
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-4">Murilo</h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Especialista em SEO e Estratégia de Conteúdo
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
              "Meu objetivo é garantir que cada pessoa encontre exatamente o que precisa para cuidar de seu terreno, com clareza e autoridade técnica."
            </p>
            <div className="space-y-6">
              <p>
                Sou o Murilo, fundador do Guia do Roçador e especialista em SEO aplicado a projetos de jardinagem e equipamentos de micronicho.
              </p>
              <p>
                Meu trabalho é estruturar conteúdos que realmente ajudem o consumidor, ao mesmo tempo em que constroem autoridade temática nos mecanismos de busca. Atuo com planejamento editorial, organização de silos de conteúdo e interligação estratégica entre páginas, sempre focado na intenção real de quem está planejando comprar uma ferramenta ou cuidar bem dela.
              </p>
              <p>
                No Guia do Roçador, sou responsável por definir a arquitetura do site, revisar a consistência dos textos e garantir que cada conteúdo entregue respostas práticas e diretas, sem superficialidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-[#16A34A] decoration-4 underline-offset-8">
            Especialidades & Atuação
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Zap className="text-[#16A34A] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">SEO Técnico</h3>
              <p className="text-gray-600">Otimização completa para que o conteúdo chegue a quem realmente precisa dele.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <BookOpen className="text-[#16A34A] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Planejamento Editorial</h3>
              <p className="text-gray-600">Definição dos temas mais relevantes e úteis para a comunidade de jardinagem.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Award className="text-[#16A34A] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Autoridade de Nicho</h3>
              <p className="text-gray-600">Construção de um ecossistema de informações confiáveis e interligadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#16A34A]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Dúvidas sobre o projeto?</h2>
          <p className="text-xl mb-8 opacity-90">Entre em contato para parcerias ou sugestões de conteúdo.</p>
          <a 
            href="mailto:contato@guiadorocador.com.br" 
            className="inline-flex items-center gap-2 bg-white text-[#16A34A] px-8 py-4 rounded-full font-black hover:bg-gray-100 transition-all shadow-xl"
          >
            <Mail size={20} />
            ENVIAR E-MAIL
          </a>
        </div>
      </section>
    </div>
  );
};
