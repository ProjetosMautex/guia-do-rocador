import React, { useState } from 'react';
import { BunnerDoMeiorocadeira } from './BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira } from './ExitIntentPopuprocadeira';

// ============================================================================
// ÍCONES SVG INLINE (ZERO PESO DE PACOTE EXTERNO -> TBT = 0ms / PAGESPEED 100)
// ============================================================================
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ShieldAlert = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Lightbulb = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const ChevronDown = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

// ============================================================================
// COMPONENTE PRINCIPAL DO ARTIGO INFORMATIVO / GUIA DE CILINDRADA
// ============================================================================
export const QualAMelhorCilindradaParaRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Posso colocar lâmina pesada ou disco de serra numa roçadeira de 26cc ou 33cc?",
      a: [
        "Nos modelos de 26 cc a 33 cc, você deve usar apenas carretel de nylon (2,0 mm a 2,4 mm) ou facas leves de 2 pontas finas (até 2,0 mm de espessura) para capim macio.",
        "Instalar discos pesados de 80 dentes ou lâminas grossas de 3 mm em motores pequenos rouba a rotação de partida, faz a embreagem centrífuga patinar até azular e superaquece o cilindro em poucos minutos."
      ]
    },
    {
      q: "A roçadeira de 52cc é sempre a que corta mais rápido?",
      a: [
        "Não: em gramados residenciais, jardins e capim fino, uma roçadeira leve de 33 cc ou 35 cc termina o serviço mais rápido porque o operador movimenta o guidão com muito mais agilidade e faz menos paradas para descansar ou reabastecer.",
        "A 52 cc só é mais rápida quando entra em pasto fechado de braquiária grossa, colonião alto ou rebentos lenhosos onde um motor menor perderia rotação no impacto."
      ]
    },
    {
      q: "Por que minha roçadeira de 52cc cansa tanto as costas e os braços?",
      a: [
        "Porque com o tanque de 1,1 litro cheio e o conjunto de corte instalado, uma 52 cc chega facilmente a 9,5 kg ou 10 kg pendurados no corpo, além de transmitir mais vibração do pistão.",
        "Para domar esse peso sem lesionar a lombar, é obrigatório usar um cinto duplo almofadado bem ajustado na altura do quadril e manter a lâmina rigorosamente afiada e balanceada."
      ]
    },
    {
      q: "As roçadeiras importadas anunciadas como 63cc, 65cc ou 75cc têm essa cilindrada de verdade?",
      a: [
        "Na maioria das importadas de baixo custo, o número 63cc, 65cc ou 75cc na carenagem é apenas o nome comercial do modelo.",
        "Quando abrimos o cilindro na bancada e medimos o diâmetro do pistão (44 mm) pelo curso do virabrequim, o volume cúbico real fica entre 51,7 cc e 52 cc — o que ainda entrega ótima força bruta para sítios, desde que você saiba que está comprando uma 52 cc real."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/qual-a-melhor-cilindrada-para-rocadeira.webp"
            alt="Comparativo de bancada entre motores de roçadeira de 33cc, 43cc e 52cc com conjunto de cilindro e pistão"
            title="Qual a melhor cilindrada para roçadeira: 33cc, 43cc ou 52cc?"
            width={800}
            height={533}
            className="w-full h-full object-cover blur-sm"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Dimensionamento Técnico de Motor
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Qual a Melhor Cilindrada para Roçadeira?{' '}
            <span className="text-[#16A34A]">Guia Prático de 26cc a 65cc</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Descubra a diferença real de torque, peso nas costas e consumo por hora entre motores de 33cc, 43cc e 52cc (e não caia no mito das etiquetas de 65cc baratas).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#4ade80] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Jose+Ailton&background=16A34A&color=fff";
                  }}
                />
                <span>José Ailton da Silva</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Operador de Campo e Manutenção</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTEÚDO CENTRALIZADO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA DE OPERADOR (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            O erro mais caro de quem compra a primeira máquina a gasolina na internet é achar que quanto maior o número de cilindradas (cc) estampado no adesivo, melhor será o serviço no terreno.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Saber qual a melhor cilindrada para roçadeira é um cálculo direto de relação peso-torque: se você compra um motor pesado de 52 cc para aparar grama residencial, vai carregar 3 quilos extras na coluna e queimar o dobro de gasolina sem cortar um minuto mais rápido.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Por outro lado, se tentar encarar um lote fechado de braquiária e arbustos com uma máquina pequena de 26 cc, a rotação vai cair a cada passada até derreter as sapatas da embreagem.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Caso você já queira comparar os modelos completos de cada faixa de potência aprovados em campo, veja também nosso ranking principal da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, separei o que cada faixa de cilindrada (de 25 cc a mais de 60 cc) realmente aguenta cortar no trecho, o consumo real em litros por hora e como diferenciar cavalos de potência verdadeiros de números inflados.
          </p>
        </div>

        {/* Imagem Principal Contextual */}
        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/blog/qual-a-melhor-cilindrada-para-rocadeira.webp"
            alt="Motores de roçadeira de 33cc, 43cc e 52cc lado a lado na bancada da oficina com cilindro e pistão"
            title="Comparação física de motores de roçadeira por cilindrada (33cc, 43cc e 52cc)"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
            loading="lazy"
          />
          <span className="text-xs text-gray-500 italic mt-2 text-center">
            Na bancada: a cilindrada mede o volume interno da câmara (cm³), mas a engenharia do cilindro é o que transforma combustível em torque na lâmina.
          </span>
        </div>

        {/* ===================================================================
            3. AS 4 FAIXAS DE CILINDRADA POR TIPO DE USO (UNIFICADO SEM REPETIÇÃO)
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Cilindrada por Tipo de Uso: De 25cc a 60cc+ na Prática
          </h2>

          {/* Faixa 1: 25cc a 35cc (33cc) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <span className="inline-block bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Leveza e Agilidade Profissional
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-3">
              1. De 25 cc a 35 cc (Destaque 33cc): A Queridinha dos Paisagistas e Jardins
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Muita gente subestima motores em torno de 26 cc a 33 cc, mas quem presta serviço de jardinagem em condomínios, praças e lotes urbanos sabe que essa é a cilindrada que mais rende em jornadas repetitivas.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Com peso enxuto entre 5,8 kg e 7,0 kg e baixíssima vibração no guidão, máquinas nessa faixa — como analisamos em detalhes no review se a{' '}
                <a href="/rocadeira-husqvarna-131r-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Husqvarna 131R (32,6 cc) é boa
                </a>{' '}
                — sobem de giro instantaneamente e permitem contornar árvores, canteiros e muros por 6 horas seguidas sem esgotar os ombros.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Indicação direta: manutenção de gramados, acabamento fino com fio de nylon de 2,0 mm a 2,4 mm e limpeza periódica de chácaras onde o mato não fica abandonado por meses.
              </p>
            </div>
          </div>

          {/* Faixa 2: 40cc a 43cc */}
          <div className="bg-[#F0FDF4]/60 p-6 sm:p-8 rounded-2xl border-2 border-[#16A34A] shadow-sm">
            <span className="inline-block bg-[#166534] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              O Padrão de Ouro no Brasil
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-3">
              2. De 40 cc a 43 cc: O Meio-Termo "Pau para Toda Obra" em Sítios e Chácaras
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4 text-gray-800 leading-relaxed text-base sm:text-lg">
                Se você só pode ter uma única roçadeira no galpão para resolver tanto a grama perto de casa quanto o capim alto do fundo do sítio, a categoria de 40 cc a 43 cc (entre 1,7 HP e 2,3 HP) é a escolha mais equilibrada do mercado.
              </p>
              <p className="mb-4 text-gray-800 leading-relaxed text-base sm:text-lg">
                Ela entrega torque suficiente na embreagem para rodar{' '}
                <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  fio de nylon grosso de 2,7 mm a 3,0 mm
                </a>{' '}
                sem amarrar o giro e, quando você instala a faca de 3 pontas, atravessa touceiras fechadas de braquiária e capim-colonião sem pedir arrego.
              </p>
              <p className="mb-0 text-gray-800 leading-relaxed text-base sm:text-lg">
                Indicação direta: proprietários de chácaras de 500 m² a 5.000 m², prestadores de serviço de limpeza de lotes e uso misto (nylon + lâmina de aço), tanto em versões laterais quanto nas{' '}
                <a href="/melhor-rocadeira-costal" className="text-[#166534] font-semibold hover:underline">
                  melhores roçadeiras costais de 42,7 cc
                </a>
                .
              </p>
            </div>
          </div>

          {/* Faixa 3: 50cc a 52cc */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Alto Torque para Desbaste Bruto
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-3">
              3. De 50 cc a 52 cc: Força Bruta para Pasto Sujo (Cuidado com o Peso!)
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Quando a frente de serviço envolve pastagem abandonada, macega trançada acima da cintura e brotos lenhosos que exigem{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  lâminas de aço espessas ou discos de serra circular com vídea
                </a>
                , o motor de 52 cc mostra por que existe.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                O cilindro maior mantém a inércia do disco quando ele encontra madeira dura, evitando que a lâmina trave no meio do talo.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                A contrapartida que ninguém conta no anúncio é o desgaste físico e o consumo: com quase 9 kg a seco (e mais de 10 kg abastecida) e bebendo até 1,4 litro de mistura por hora, usar uma 52 cc em jardim pequeno é jogar gasolina e saúde da coluna fora.
              </p>
            </div>
          </div>

          {/* Faixa 4: 60cc ou mais */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <span className="inline-block bg-gray-800 text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Uso Florestal vs. Etiqueta Comercial
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-3">
              4. 60 cc ou Mais (63cc / 65cc): Serviço Florestal e a Verdade sobre as Importadas
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                No mercado profissional verdadeiro, roçadeiras acima de 55 cc (como a máquina que testamos no review se a{' '}
                <a href="/rocadeira-toyama-tbc63-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Toyama TBC63 é boa
                </a>{' '}
                e no guia geral se a{' '}
                <a href="/rocadeira-toyama-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Toyama é boa
                </a>
                ) são máquinas de desbaste pesado, projetadas para derrubar capim-elefante e arbustos em grandes propriedades rurais.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Já nas máquinas importadas de entrada vendidas online com adesivos de 63 cc, 65 cc ou 75 cc, vale o alerta técnico que explicamos na análise se a{' '}
                <a href="/rocadeira-nakasaki-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Nakasaki é boa
                </a>{' '}
                (e que você mesmo pode conferir ao abrir a caixa seguindo o guia de{' '}
                <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                  como montar roçadeira Nakasaki
                </a>
                ): a imensa maioria delas utiliza o bloco padrão chinês 1E44F-5 de 51,7 cc reais, entregando força equivalente a uma boa 52 cc.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. TABELA DE CONSUMO, PESO E APLICAÇÃO POR CILINDRADA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Tabela de Consumo, Peso e Aplicação por Cilindrada
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Compare os números reais medidos na rotina de campo (descontando o otimismo exagerado de muitos manuais):
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Faixa de Cilindrada</th>
                  <th className="p-3.5 sm:p-4">Peso Seco Médio</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Consumo Médio (L/h)</th>
                  <th className="p-3.5 sm:p-4">Acessórios e Aplicação Ideal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-black text-gray-900">26 cc a 33 cc</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">5,8 a 7,0 kg</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">0,5 a 0,7 Litro/hora</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Nylon 2,0–2,4 mm e faca leve 2 pontas. Jardins, paisagismo, gramados e chácaras pequenas.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-black text-gray-900">40 cc a 43 cc</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">7,4 a 8,2 kg</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">0,8 a 1,0 Litro/hora</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Nylon 2,7–3,0 mm, faca 3 pontas e serra 40 dentes. Sítios, lotes urbanos sujos e braquiária.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-black text-gray-900">50 cc a 52 cc</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">8,5 a 9,5 kg</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-800">1,2 a 1,5 Litro/hora</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Nylon 3,0–3,3 mm, facas grossas e serra de vídea 80 dentes. Pasto fechado, colonião e capoeira.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50/20">
                  <td className="p-3.5 sm:p-4 font-black text-amber-950">55 cc+ (Florestal Real)</td>
                  <td className="p-3.5 sm:p-4 text-amber-950">9,5 a 11,0 kg</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">1,5 a 1,8 Litro/hora</td>
                  <td className="p-3.5 sm:p-4 text-amber-950">
                    Serras circulares florestais e trituradores. Desbaste de arbustos lenhosos e rodovias.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            5. ALERTA NA OFICINA: A LUBRIFICAÇÃO IDEAL PARA AGUENTAR O TRANCO
            =================================================================== */}
        <section className="mb-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-amber-900 mb-3 uppercase tracking-wide">
                Alerta na Oficina: A Lubrificação Ideal para Aguentar os 9.000 RPM
              </h2>
              <p className="mb-4 text-sm sm:text-base text-amber-950 leading-relaxed">
                Não importa se você escolheu uma 33 cc ágil ou uma 52 cc bruta: qualquer motor 2 tempos de roçadeira gira entre 8.500 e 10.500 RPM sob sol quente, dependendo 100% do óleo misturado na gasolina para não fundir o pistão na camisa.
              </p>
              <p className="mb-0 text-sm sm:text-base text-amber-950 leading-relaxed">
                Nunca meça óleo na tampinha nem use óleo 4 tempos de moto no tanque: siga a tabela exata (50:1 no semissintético ou 25:1 no mineral) detalhada no nosso guia de{' '}
                <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-amber-950 font-bold underline">
                  qual o melhor óleo 2 tempos para roçadeira
                </a>{' '}
                (e se sua máquina for da linha TBC, veja também o guia específico do{' '}
                <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-amber-950 font-bold underline">
                  melhor óleo para roçadeira Toyama
                </a>
                ).
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <img
              src="/images/blog/cilindrada-rocadeira-potencia-consumo-campo.webp"
              alt="Operador com EPIs dosando óleo 2 tempos em frasco graduado ao lado da roçadeira a gasolina no campo"
              title="Dosagem correta de óleo 2 tempos para proteger o cilindro da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-amber-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            6. BANNER DO MEIO
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            7. O QUE OBSERVAR ALÉM DA CILINDRADA (HP REAL, ERGONOMIA E PEÇAS)
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O Que Observar Além da Cilindrada Antes de Comprar
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Olhar apenas para o número de cilindradas sem conferir a ficha de potência efetiva é a maior armadilha para o bolso do comprador. Avalie estes três pontos na bancada:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                1. Potência Real (HP ou kW)
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Cilindrada é só o tamanho do copo do motor; o que corta o mato é a taxa de compressão e a potência real em cavalos (HP) ou quilowatts (kW).
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Exemplo clássico de oficina: uma Stihl FS 220 tem apenas 35,2 cc, mas entrega 2,3 HP (1,7 kW) reais e corta muito mais rápido que uma importada genérica de 52 cc que mal entrega 1,7 HP na ponta do eixo.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Check size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                2. Peso, Ergonomia e Formato
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Sempre some cerca de 1,3 kg a 1,8 kg ao peso seco do catálogo para saber quanto a máquina realmente vai pesar com gasolina, flange, saia e cabeçote.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Se o terreno for cheio de ladeiras, veja se não compensa substituir a força bruta lateral pela mobilidade explicada em{' '}
                <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor roçadeira costal ou lateral
                </a>
                .
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <AlertTriangle size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                3. Conjunto de Corte e Peças
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Confirme se a máquina usa tubo rígido padrão de 26 mm ou 28 mm e se existem bobinas, carburadores e engrenagens de ponteira fáceis de comprar na sua cidade.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Na hora da{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>
                , alternar entre a lâmina afiada no mato grosso e o nylon nas bordas poupa metade do esforço do motor.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. RESUMO RÁPIDO: O QUE EVITAR VS PRÁTICA RECOMENDADA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Resumo Rápido: O que Evitar vs. Prática Recomendada
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600 shrink-0" /> O que Evitar na Compra
              </h3>
              <ul className="space-y-2.5 text-red-800 text-sm list-disc list-inside leading-relaxed">
                <li>Comprar roçadeira de 52 cc só para cortar grama de quintal pequeno (excesso de peso e gasto).</li>
                <li>Cair em anúncios milagrosos de "75cc" baratas achando que têm mais motor que uma 43 cc de marca.</li>
                <li>Montar discos de serra pesados de 80 dentes em roçadeiras leves de 26 cc a 33 cc.</li>
                <li>Ignorar a qualidade do cinto duplo em máquinas acima de 40 cilindradas.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A] shrink-0" /> Prática Recomendada de Campo
              </h3>
              <ul className="space-y-2.5 text-[#166534] text-sm list-disc list-inside leading-relaxed">
                <li>Escolher 26 cc a 33 cc para jardinagem, acabamento urbano e máxima leveza nos braços.</li>
                <li>Escolher 40 cc a 43 cc como máquina versátil única para chácaras, sítios e lotes sujos.</li>
                <li>Reservar 50 cc a 52 cc para desbaste pesado de pastagens, braquiária alta e uso com lâminas.</li>
                <li>Conferir sempre os cavalos reais (HP/kW) e a disponibilidade de peças na sua região.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ DA OFICINA EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            FAQ da Oficina: Dúvidas Comuns sobre Cilindrada de Roçadeira
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className="text-[#166534] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50 space-y-3">
                      {faq.a.map((p, pIndex) => (
                        <p key={pIndex} className="m-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            10. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DE OURO + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Qual Cilindrada Escolher sem Arrependimento?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Para 8 em cada 10 proprietários de chácaras, sítios e lotes urbanos, a faixa de 40 cc a 43 cc é o ponto exato de equilíbrio: tem peito para girar lâmina de 3 pontas no capim alto sem pesar como um chumbo nas costas.
              </p>
              <p className="mb-4 leading-relaxed">
                Se o seu foco é jardinagem profissional ágil e gramados, desça para uma 33 cc de boa marca e ganhe saúde nos braços; já se a missão é derrubar pasto sujo fechado o dia inteiro, suba para uma 52 cc com cinto duplo reforçado.
              </p>
              <p className="mb-0 leading-relaxed">
                Dimensione o motor pela dureza real do seu mato, capriche na mistura de óleo 2 tempos e tenha máquina forte por muitos anos!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Dica de Ouro do José Ailton */}
        <div className="w-full flex justify-center mt-12 mb-4">
          <a href="/author/jose-ailton/" aria-label="Ver perfil operacional de José Ailton da Silva">
            <img
              src="/images/autores/José Ailton da Silva-thumb.webp"
              alt="José Ailton da Silva"
              width={112}
              height={112}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#16A34A] hover:scale-105 transition-transform duration-200 shadow-md"
              loading="lazy"
            />
          </a>
        </div>

        <div className="mt-6 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-green-100 p-3 rounded-full text-[#166534] shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#166534] mb-2">
              Dica de Ouro do José Ailton: Como Fazer uma 43cc Cortar Mais que uma 52cc Cega
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                No trecho, vejo muito operador sofrendo com máquina grande de 52 cc esgoelando no talo simplesmente porque a faca de aço está arredondada de bater em terra.
              </p>
              <p className="mb-0">
                Uma roçadeira de 43 cc com carburador bem afinado e uma lâmina recém-passada na lima chata (veja nosso guia de{' '}
                <a href="/como-amolar-disco-de-rocadeira" className="text-[#166534] font-bold underline">
                  como amolar disco de roçadeira
                </a>
                ) fatia o capim na metade da aceleração, gastando 30% menos combustível que uma 52 cc com lâmina cega.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup de Roçadeiras */}
      <ExitIntentPopuprocadeira />
    </div>
  );
};

export default QualAMelhorCilindradaParaRocadeira;
