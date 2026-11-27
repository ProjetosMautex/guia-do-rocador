import React, { useState } from 'react';
import { BunnerDoMeiooleo2tempos } from './BunnerDoMeiooleo2tempos';
import { ExitIntentPopupoleo2tempos } from './ExitIntentPopupoleo2tempos';

// ============================================================================
// ÍCONES SVG INLINE (ZERO PESO DE PACOTE EXTERNO -> TBT = 0ms / PAGESPEED 100)
// ============================================================================
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ShieldAlert = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
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
// COMPONENTE PRINCIPAL DO TUTORIAL: COMO TEMPERAR A GASOLINA DA ROÇADEIRA
// ============================================================================
export const ComoTemperarGasolinaParaRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "Quantos ml de óleo 2 tempos vão em 1 litro de gasolina para roçadeira?",
      a: [
        "Depende diretamente da especificação do seu óleo e do manual da máquina: na proporção 50:1 (padrão de óleos semissintéticos/sintéticos JASO FC/FD e motores Stihl/Husqvarna/Toyama FG50), você usa exatamente 20 ml de óleo por litro de gasolina.",
        "Já na proporção 25:1 (padrão de óleo mineral API TC comum em máquinas de 43cc, 52cc e 63cc), você deve usar 40 ml de óleo para cada 1 litro de gasolina."
      ]
    },
    {
      q: "Posso usar gasolina aditivada ou podium (98 octanas) para temperar a gasolina da roçadeira?",
      a: [
        "A recomendação de oficina é usar sempre gasolina comum fresca (95 octanas RON).",
        "Motores 2 tempos de roçadeiras não possuem taxa de compressão que aproveite a gasolina de 98 octanas, e alguns pacotes de detergentes de gasolinas aditivadas de posto podem reagir com o óleo 2T ou ressecar mais rápido as membranas do carburador."
      ]
    },
    {
      q: "Por quanto tempo posso guardar a gasolina já temperada com óleo 2T no galão?",
      a: [
        "O prazo máximo seguro no Brasil é de 15 a 30 dias em galão fechado, opaco e guardado à sombra.",
        "Como a gasolina brasileira contém etanol anidro, com o passar das semanas ela absorve umidade do ar, separa-se do óleo 2 tempos e forma uma goma ácida que entope os giclês do carburador e deixa o pistão sem lubrificação."
      ]
    },
    {
      q: "Posso misturar a gasolina e o óleo 2 tempos direto dentro do tanque da roçadeira?",
      a: [
        "Jamais faça isso: quando você joga o óleo direto no tanque da máquina, a parte mais densa desce imediatamente para a mangueira pescadora no fundo.",
        "Isso faz o carburador puxar óleo puro nas primeiras puxadas (encharcando a vela e afogando a máquina) e, minutos depois, queimar gasolina quase pura sem lubrificação no cilindro."
      ]
    },
    {
      q: "Posso usar óleo 2 tempos de motor de popa (náutico TC-W3) ou óleo 4 tempos de carro na gasolina?",
      a: [
        "Nunca! Óleo náutico (TC-W3) é formulado para motores refrigerados a água que trabalham frios (~60 °C), enquanto a roçadeira é refrigerada a ar e passa facilmente dos 180 °C na cabeça do pistão.",
        "Já o óleo 4 tempos de carro ou moto não foi feito para ser queimado junto com a gasolina, gerando carvão pesado que trava os anéis em poucos tanques."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura José Ailton)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/como-temperar-gasolina-para-rocadeira.webp"
            alt="Operador preparando a mistura de gasolina e óleo 2 tempos em frasco dosador graduado na bancada ao lado da roçadeira"
            title="Como Temperar a Gasolina da Roçadeira: Mistura 2T e Proporções Exatas"
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
            Guia Prático de Combustível & Lubrificação
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Como Temperar a Gasolina da Roçadeira:{' '}
            <span className="text-[#16A34A]">Mistura 2T e Proporções Exatas</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Aprenda a medida exata em mililitros para proporções 50:1 (20 ml/L) e 25:1 (40 ml/L), qual gasolina escolher no posto e a ordem correta de agitação para nunca fundir o motor.
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
            2. INTRODUÇÃO DIDÁTICA DE CAMPO (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Nos motores 2 tempos, não existe cárter de óleo separado como no motor de um carro: toda a lubrificação do pistão, cilindro e rolamentos do virabrequim viaja misturada dentro da própria gasolina que você coloca no tanque.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Por isso, dominar a técnica de como temperar gasolina para roçadeira com precisão milimétrica é a única barreira real entre uma máquina que trabalha forte por anos e um motor fundido na primeira hora de sol quente.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            O grande problema no campo acontece quando o operador mede o óleo na tampinha do frasco no olho ou confunde a tabela de 50:1 (20 ml por litro) com a de 25:1 (40 ml por litro).
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            A seguir, você confere a tabela pronta de diluição de 250 ml a 5 litros, a diferença entre óleo mineral e semissintético e o passo a passo de bancada para preparar a emulsão sem erro.
          </p>
        </div>

        {/* ===================================================================
            3. A MISTURA DE COMBUSTÍVEL CORRETA + TABELA COMPLETA DE MISTURA 2T
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              A Mistura de Combustível Correta e a Tabela de Óleo 2T
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A estabilidade térmica da câmara de combustão depende inteiramente do equilíbrio entre o poder calorífico da gasolina e a película antidesgaste do lubrificante — veja as marcas aprovadas no nosso ranking sobre{' '}
                <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  qual o melhor óleo 2 tempos para roçadeira
                </a>
                .
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Existem duas proporções oficiais no mercado: a razão 50:1 (1 parte de óleo para 50 partes de gasolina, ou seja, 20 ml por litro), usada com óleos semissintéticos/sintéticos de alta performance (JASO FC/FD) e máquinas Stihl/Husqvarna, e a razão 25:1 (40 ml por litro), exigida quando se usa óleo mineral comum (API TC) na maioria das máquinas de 43cc, 52cc e 63cc.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Consulte a tabela prática abaixo antes de encher o seu dosador:
              </p>
            </div>
          </div>

          {/* Tabela Unificada de Proporções 25:1 vs 50:1 (250ml a 5 Litros) */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Volume de Gasolina Comum</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Proporção 50:1 (Semissintético / Sintético JASO FC/FD)</th>
                  <th className="p-3.5 sm:p-4 text-amber-300">Proporção 25:1 (Óleo Mineral Comum API TC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">250 ml de Gasolina</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">5 ml de óleo 2T</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">10 ml de óleo 2T</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">500 ml (Meio Litro)</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">10 ml de óleo 2T</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">20 ml de óleo 2T</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-100/50 border-y-2 border-[#16A34A]/30">
                  <td className="p-3.5 sm:p-4 font-black text-gray-900">1.000 ml (1 Litro Padrão)</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534] text-base">20 ml de lubrificante</td>
                  <td className="p-3.5 sm:p-4 font-black text-amber-900 text-base">40 ml de lubrificante</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">2.000 ml (2 Litros)</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">40 ml de óleo 2T</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">80 ml de óleo 2T</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">5.000 ml (Galão de 5 Litros)</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">100 ml de óleo 2T</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">200 ml de óleo 2T</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quadro Comparativo: Mistura Correta vs Mistura Inadequada */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Entendendo as Proporções: O Que Acontece Quando Você Erra a Medida?
            </h3>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Inverter os números entre 25:1 e 50:1 é o erro mais perigoso da bancada; veja na tabela abaixo a diferença entre a dosagem correta e a dosagem equivocada em 1 litro de gasolina:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-gray-900 text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5">Regime / Tipo de Óleo</th>
                    <th className="p-3.5 text-[#4ade80]">Mistura Correta (Recomendada)</th>
                    <th className="p-3.5 text-red-300">Mistura Inadequada (Erro Comum)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="p-3.5 font-bold text-gray-900">
                      Proporção 25:1 (Óleo Mineral API TC)
                    </td>
                    <td className="p-3.5 text-[#166534] font-semibold">
                      1 Litro de gasolina + 40 ml de óleo ➔ Película térmica completa e desempenho seguro.
                    </td>
                    <td className="p-3.5 text-red-800">
                      1 Litro de gasolina + apenas 20 ou 25 ml de óleo mineral ➔ Deficiência de óleo e alto risco de travar o pistão.
                    </td>
                  </tr>
                  <tr className="bg-gray-50/70">
                    <td className="p-3.5 font-bold text-gray-900">
                      Proporção 50:1 (Óleo Semissintético / Sintético)
                    </td>
                    <td className="p-3.5 text-[#166534] font-semibold">
                      1 Litro de gasolina + 20 ml de óleo ➔ Queima limpa, zero fumaça e potência máxima.
                    </td>
                    <td className="p-3.5 text-red-800">
                      1 Litro de gasolina + 50 ml de óleo ➔ Lubrificação excessiva, vela babada, fumaça densa e carvão no escape.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS E FERRAMENTAS NECESSÁRIAS NA BANCADA
            =================================================================== */}
        <section className="mb-14">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl shrink-0">
                <Wrench size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Materiais Necessários para Temperar a Gasolina Sem Erro
              </h2>
            </div>

            <p className="mb-5 text-gray-700 leading-relaxed text-sm sm:text-base">
              Separe estes 4 itens simples antes de abrir o galão para garantir precisão e zero sujeira no tanque:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Frasco misturador graduado com marcações de 1L, 25:1 e 50:1 (ou seringa de 20 ml)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Gasolina comum fresca (comprada há menos de 7 dias em posto confiável)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Óleo 2 tempos para motores refrigerados a ar (JASO FC/FD ou ISO-L-EGD)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Funil limpo com peneira fina e pano seco para limpar o bocal do tanque</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (ÓLEO 2 TEMPOS)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiooleo2tempos />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PARA MISTURAR A GASOLINA DA ROÇADEIRA
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Passo a Passo para Temperar a Gasolina da Roçadeira
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Nunca despeje o óleo primeiro no fundo do galão seco nem faça a mistura dentro do tanque da máquina; siga a sequência técnica de homogeneização em 4 etapas:
            </p>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/dosagem-mistura-oleo-2t-gasolina-rocadeira.webp"
              alt="Frasco misturador graduado com combustível 2 tempos homogeneizado ao lado de seringa dosadora de 20ml, filtro pescador e tampa do tanque"
              title="Preparo da mistura 2 tempos com frasco graduado e seringa dosadora"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Precisão na bancada: o uso de frasco graduado ou seringa de 20 ml elimina o erro visual das tampinhas improvisadas.
            </span>
          </div>

          <div className="space-y-6">
            {/* Passo 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  1
                </span>
                Coloque primeiro metade da gasolina no recipiente misturador
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Comece despejando cerca de metade do volume de gasolina comum que você pretende preparar (por exemplo, 500 ml se for preparar 1 litro) dentro do frasco misturador limpo; isso evita que o óleo viscoso grude no fundo do plástico seco.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  2
                </span>
                Meça e adicione a dose exata de óleo 2 tempos
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Meça na escala graduada ou com uma seringa os 20 ml (para proporção 50:1 semissintética) ou 40 ml (para proporção 25:1 mineral) e despeje sobre a primeira metade de gasolina, dando uma leve agitada inicial para pré-dissolver o lubrificante.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  3
                </span>
                Complete o restante da gasolina e agite por 15 segundos
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Despeje a segunda metade da gasolina até atingir a marca de 1.000 ml (1 litro), feche bem a tampa do frasco e agite vigorosamente por 10 a 15 segundos até que o líquido apresente uma cor uniforme (avermelhada, azulada ou esverdeada conforme o corante do óleo).
              </p>
            </div>

            {/* Passo 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  4
                </span>
                Limpe a tampa do tanque, abasteça apenas o uso do dia e agite antes de repor
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Passe um pano no bocal do tanque da roçadeira antes de abrir para não cair serragem ou terra no filtro pescador e abasteça somente o volume que será queimado no dia.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Sempre que for reabastecer a máquina ao longo da jornada, agite novamente o galão por 5 segundos antes de virar no funil e siga o ritual correto de{' '}
                <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como ligar a roçadeira a gasolina
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. QUAL GASOLINA (95 OU 98 OCTANAS) E QUAL ÓLEO 2T USAR?
            =================================================================== */}
        <section className="mb-14 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Qual Gasolina Usar na Mistura: Comum (95), Aditivada ou 98 Octanas?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A escolha da octanagem gera muita dúvida no posto, mas a regra de engenharia para motores 2 tempos é direta: a gasolina comum fresca (com cerca de 95 octanas RON) é o combustível ideal para toda a linha de roçadeiras do mercado brasileiro.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Motores 2 tempos monocilíndricos trabalham com taxas de compressão moderadas que não exigem gasolina premium de 98 octanas, tornando o gasto extra financeiramente inútil.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                O fator decisivo não é a octanagem alta, mas a idade da gasolina: combustível guardado há mais de 30 dias oxida, separa o etanol da gasolina e entope as agulhas internas, obrigando você a desmontar tudo para{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  regular o carburador da roçadeira
                </a>
                .
              </p>
            </div>
          </div>

          {/* Classificações JASO FD, ISO-L-EGD e Lubrificantes Toyama */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <ShieldAlert size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                Normas JASO FD e ISO-L-EGD: O Que Olhar no Rótulo do Óleo
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Jamais utilize óleo 4 tempos automotivo ou óleo 2T náutico (TC-W3 de motor de popa): motores de roçadeira são refrigerados a ar e operam em temperaturas muito superiores às de um motor de barco refrigerado a água.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Exija sempre no rótulo a norma API TC combinada com as certificações japonesas e europeias JASO FC, JASO FD ou ISO-L-EGD, que garantem aditivos detergentes contra o acúmulo de carvão no pistão.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                Lubrificantes 2 Tempos Toyama (Linha ToyamaLub FG50)
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Para quem opera máquinas da marca — veja nossa análise se a{' '}
                <a href="/rocadeira-toyama-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Toyama é boa
                </a>{' '}
                e o teste pesado se a{' '}
                <a href="/rocadeira-toyama-tbc63-e-boa" className="text-[#166534] font-semibold hover:underline">
                  Toyama TBC63 é boa
                </a>
                —, o lubrificante original ToyamaLub FG50 traz classificação JASO FC e viscosidade SAE 20W.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Essa formulação semissintética permite trabalhar na proporção limpa de 50:1 (20 ml por litro), conforme detalhamos no guia sobre{' '}
                <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
                  qual o melhor óleo para roçadeira Toyama
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. CONSEQUÊNCIAS DO POUCO ÓLEO VS. EXCESSO DE ÓLEO
            =================================================================== */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Por Que Respeitar a Proporção? Pouco Óleo vs. Excesso de Óleo
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Tanto a falta quanto o exagero de óleo 2 tempos na gasolina cobram um preço alto na oficina; compare os sintomas imediatos de cada erro:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base uppercase tracking-wide">
                <AlertTriangle size={22} className="text-red-600 shrink-0" /> Consequências do Pouco Óleo (Mistura Pobre)
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-red-950 leading-relaxed">
                Sem a película lubrificante mínima, o atrito metal-contra-metal entre os anéis e a parede do cilindro dispara a temperatura interna acima do limite metalúrgico do alumínio.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-red-900 list-disc list-inside leading-relaxed">
                <li>Superaquecimento rápido nos primeiros 10 a 15 minutos de corte.</li>
                <li>Dilatação excessiva do pistão até riscar a camisa e travar de vez (motor fundido/gripado).</li>
                <li>Perda total de compressão, exigindo troca completa de camisa, pistão, anéis e gaiola.</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-base uppercase tracking-wide">
                <AlertTriangle size={22} className="text-amber-700 shrink-0" /> Consequências do Excesso de Óleo (Mistura Gorda)
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
                Colocar óleo a mais achando que vai proteger melhor o motor provoca queima incompleta e suja dentro da câmara de combustão.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-950 list-disc list-inside leading-relaxed">
                <li>Cortina densa de fumaça azulada/esbranquiçada e óleo preto pingando pelo escapamento.</li>
                <li>Vela de ignição encharcada de óleo que falha na partida (veja{' '}
                  <a href="/como-desafogar-rocadeira" className="text-[#166534] font-bold underline">
                    como desafogar a roçadeira
                  </a>).
                </li>
                <li>Crostas duras de carvão que colam os anéis na canaleta e entopem a tela corta-fogo do silencioso, sufocando a potência.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. DICAS EXTRAS DE MANUTENÇÃO DA ROÇADEIRA
            =================================================================== */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            3 Cuidados de Manutenção que Completam a Mistura Perfeita
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                1. Esgote o Tanque ao Guardar
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Vai deixar a roçadeira parada por mais de 15 dias? Esvazie o tanque de volta no galão e ligue o motor até apagar por pane seca para não deixar gasolina apodrecer nas membranas do carburador.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                2. Filtro de Ar e Aletas Limpos
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Um filtro de ar entupido de poeira altera a proporção ar/combustível, deixando a mistura rica demais e fazendo a máquina beber o dobro de gasolina temperada.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                3. Não Esqueça a Graxa da Ponteira
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                O óleo 2T lubrifica apenas o motor; para proteger as engrenagens da ponta do tubo a cada 25 tanques queimados, aplique a{' '}
                <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor graxa para roçadeira
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Dúvidas Frequentes sobre Como Temperar Gasolina para Roçadeira
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
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
            11. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DO JOSÉ AILTON + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Mistura Precisa é Seguro de Vida para o Motor 2T
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Temperar a gasolina da roçadeira do jeito certo leva menos de dois minutos na bancada e poupa centenas de reais em retífica de cilindro e limpeza de carburador.
              </p>
              <p className="mb-4 leading-relaxed">
                Tenha sempre um frasco misturador graduado ou uma seringa de 20 ml na caixa de ferramentas, respeite os 20 ml por litro (50:1 semissintético) ou 40 ml por litro (25:1 mineral) e prepare apenas a gasolina fresca que você vai gastar na empreita.
              </p>
              <p className="mb-0 leading-relaxed">
                Com combustível limpo e bem homogeneizado, sua roçadeira pega de primeira, trabalha fria e entrega potência máxima do início ao fim do terreno!
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
              Dica de Ouro do José Ailton: O Truque da Seringa de Farmácia de 20 ml
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Se o seu frasco misturador perdeu as marcações de tinta com o tempo, compre uma seringa plástica grande de 20 ml (sem agulha) em qualquer farmácia por dois reais e deixe dentro da maleta da roçadeira.
              </p>
              <p className="mb-0">
                Uma seringa cheia até o topo (20 ml) é a medida exata para 1 litro de gasolina na proporção 50:1, e duas seringas cheias (40 ml) dão a medida cravada para 1 litro na proporção 25:1 — zero desperdício e zero risco de errar a mão no olho!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup de Óleo 2 Tempos */}
      <ExitIntentPopupoleo2tempos />
    </div>
  );
};

export default ComoTemperarGasolinaParaRocadeira;
