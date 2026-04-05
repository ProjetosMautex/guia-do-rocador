import React from 'react';
import { Mail, Wrench, ShieldCheck, Zap, Award, SearchCheck, CheckCircle2 } from 'lucide-react';

export const AuthorCarlosHenrique: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
              <div className="absolute -inset-2 bg-[#16A34A] rounded-full blur opacity-30"></div>
              <img 
                src="/images/autores/Carlos Henrique Menezes.webp" 
                alt="Carlos Henrique Menezes" 
                className="relative w-full h-full object-cover rounded-full border-4 border-[#16A34A] shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="bg-[#16A34A] text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                Técnico de Máquinas
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-4">Carlos Henrique Menezes</h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Técnico em Mecânica de Equipamentos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8 border-l-4 border-[#16A34A] pl-8">
            <p className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              "Máquinas falam através do seu funcionamento. Entender sua mecânica é prolongar sua vida útil e garantir a máxima potência."
            </p>
            <div className="space-y-6">
              <p>
                Sou o Carlos Henrique Menezes, técnico em mecânica de equipamentos com mais de <strong className="text-[#16A34A]">15 anos de experiência</strong> em manutenção e análise de ferramentas motorizadas, incluindo roçadeiras a gasolina, elétricas e a bateria.
              </p>
              <p>
                Durante minha carreira, atuei diretamente com profissionalismo em diagnóstico, manutenção e testes de desempenho, o que me permitiu desenvolver um olhar técnico apurado sobre durabilidade, potência, eficiência mecânica e qualidade de construção.
              </p>
              <p>
                Minha especialidade é analisar as roçadeiras de forma técnica, avaliando aspectos como tipo de motor (2 tempos, 4 tempos ou brushless), torque, sistema de transmissão, consumo, vibração e vida útil dos componentes. Com esse conhecimento, consigo recomendar os melhores modelos com base em desempenho real e confiabilidade a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specializations */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 underline decoration-[#16A34A] decoration-4 underline-offset-8">Expertise Técnica</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Motores 2T/4T", desc: "Diagnóstico profundo de combustão e desempenho.", icon: <Zap size={24} /> },
              { title: "Transmissão", desc: "Análise de eixos, embreagens e caixas de engrenagens.", icon: <Wrench size={24} /> },
              { title: "Vida Útil", desc: "Avaliação de desgaste de componentes internos.", icon: <SearchCheck size={24} /> },
              { title: "Eficiência", desc: "Testes de consumo e entrega de torque real.", icon: <Award size={24} /> }
            ].map((skill, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#16A34A] transition-all">
                <span className="text-[#16A34A] block mb-4">{skill.icon}</span>
                <h4 className="text-lg font-black mb-3">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors for Choice */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12 text-center">Fatores que Analiso em um Review</h2>
            <div className="space-y-4">
                {[
                    "Qualidade dos rolamentos e sistema de lubrificação.",
                    "Vibração transmitida ao operador (m/s²).",
                    "Facilidade de acesso para manutenção preventiva.",
                    "Durabilidade do sistema de partida (retrátil ou elétrico).",
                    "Resistência de materiais e blindagem contra detritos."
                ].map((factor, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <CheckCircle2 color="#16A34A" size={24} />
                        <span className="font-medium text-gray-800">{factor}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 bg-[#F3F4F6] rounded-3xl border-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dúvidas Técnicas?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Precisa entender se um motor específico aguenta a sua rotina? Estou à disposição para consultorias técnicas.</p>
            <a 
              href="mailto:contato@guiadorocador.com.br" 
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 rounded-2xl font-black hover:bg-gray-800 transition-all shadow-xl"
            >
              <Mail size={24} />
              ENVIAR PERGUNTA TÉCNICA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
