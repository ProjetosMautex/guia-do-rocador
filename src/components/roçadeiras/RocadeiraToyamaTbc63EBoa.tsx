import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { BunnerDoMeiorocadeira } from './BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira } from './ExitIntentPopuprocadeira';
import { products } from '../../data/productsrocadeira';

// ============================================================================
// ÍCONES SVG INLINE (ZERO PESO DE PACOTE EXTERNO -> TBT = 0ms / PAGESPEED 100)
// ============================================================================
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Sparkles = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
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

const ExternalLink = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
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
// COMPONENTE PRINCIPAL DO ARTIGO: ROÇADEIRA TOYAMA TBC63 É BOA?
// ============================================================================
export const RocadeiraToyamaTbc63EBoa: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>("pastoPesado");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tbc63Link = products["toyama-tbc63"]?.link || "https://meli.la/348DVNj";

  const simScenarios: Record<
    string,
    {
      title: string;
      verdictBadge: string;
      verdictText: string;
      reason: string;
      anchor: string;
      buttonLabel: string;
    }
  > = {
    pastoPesado: {
      title: "Pasto Sujo, Capim-Colonião, Braquiária Grossa e Brotos Lenhosos",
      verdictBadge: "100% RECOMENDADA • COMPRA CERTEIRA",
      verdictText: "Sim! A Toyama TBC63 (63,3 cc / 3,5 HP) foi desenhada exatamente para o seu terreno.",
      reason:
        "Enquanto máquinas de 43cc e 52cc perdem giro quando o disco bate em touceira velha ou mamona, os 3,5 HP e o tubo inteiriço de 28 mm (9 estrias) da TBC63 atravessam o mato pesado com sobra de torque e tanque grande de 1,5 litro.",
      anchor: "#visao-geral-tbc63",
      buttonLabel: "Ver Análise Completa e Oferta da TBC63"
    },
    multifuncionalMotopoda: {
      title: "Fazendas e Sítios que Precisam Roçar Mato + Podar Galhos Altos",
      verdictBadge: "ALTO CUSTO-BENEFÍCIO • KIT COM MOTOPODA",
      verdictText: "Vale muito a pena! O kit profissional da TBC63 já resolve roçada bruta e poda de árvores.",
      reason:
        "Além do disco de vídea e do carretel de nylon, esta versão acompanha implemento motopoda compatível com o eixo de 28 mm / 9 estrias, economizando a compra de uma segunda máquina só para limpar pomares e cercas.",
      anchor: "#visao-geral-tbc63",
      buttonLabel: "Conferir Ficha Técnica da TBC63"
    },
    gramadoLeve: {
      title: "Apenas Gramado Residencial Baixo ou Jardim Pequeno de Fim de Semana",
      verdictBadge: "SUPERDIMENSIONADA PARA JARDIM PEQUENO",
      verdictText: "Atenção: para grama macia de quintal urbano, 63,3 cc é força e peso demais.",
      reason:
        "Com cerca de 8,5 kg pronta para o corte e tanque de 1,5 L, a TBC63 cansa sem necessidade em jardins pequenos; se você tem apenas capim médio de chácara, veja nossa comparação direta abaixo entre a TBC63 e a TBC52X-GII.",
      anchor: "#tbc63-vs-tbc52x",
      buttonLabel: "Ver Comparativo TBC63 vs. TBC52X-GII"
    }
  };

  const currentSim = simScenarios[selectedScenario];

  const prosAndConsRows = [
    {
      pro: "Motor robusto de 63,3 cc reais: a maior cilindrada da linha Toyama no Brasil",
      con: "Garantia de fábrica padrão de 6 meses (PF) / 3 meses (PJ)"
    },
    {
      pro: "Potência bruta de 3,5 HP (2,6 kW): torque de sobra onde as 52cc engasgam",
      con: "Não é dimensionada para jornadas florestais ininterruptas de 8h+ sem pausas"
    },
    {
      pro: "Tanque gigante de 1,5 litro: maior autonomia de trabalho por abastecimento",
      con: "Mistura 25:1 com óleo mineral consome mais lubrificante (prefira sintético 40:1/50:1)"
    },
    {
      pro: "Sistema de filtragem de ar com duplo elemento contra poeira de terra seca",
      con: "Peso em operação (~8,5 kg abastecida) exige bom preparo físico e cinto ajustado"
    },
    {
      pro: "Eixo de transmissão extra longo (1.517 mm) com 9 estrias x 8 mm de alta rigidez",
      con: "Partida manual retrátil convencional (exige puxada firme devido à alta compressão)"
    },
    {
      pro: "Tubo de alumínio monobloco inteiriço de 28 mm (parede de 2 mm sem folgas)",
      con: "Carretel de nylon original sofre desgaste mais rápido sob rotação de 11.000 RPM"
    },
    {
      pro: "Sistema de amortecimento antivibração e guidão bicicleta com ajuste angular",
      con: "Manual técnico de fábrica é enxuto nos detalhes de regulagem fina"
    },
    {
      pro: "Pacote completo com disco de vídea, lâmina, carretel, colete duplo e função motopoda",
      con: "Consumo de combustível superior ao das roçadeiras pequenas de 33cc e 43cc"
    }
  ];

  const faqList = [
    {
      q: "A roçadeira Toyama TBC63 tem 63,3 cilindradas reais ou é apenas etiqueta comercial?",
      a: [
        "Diferente das máquinas importadas genéricas que estampam 65cc ou 75cc na carenagem mas usam motor de 51,7 cc, a Toyama TBC63 (código 301-006) possui motor monocilíndrico 2 tempos de 63,3 cc reais e entrega 3,5 HP (2,6 kW) de potência aferida."
      ]
    },
    {
      q: "Qual a proporção correta de gasolina e óleo 2 tempos para a Toyama TBC63?",
      a: [
        "Segundo a ficha oficial da Toyama, se você utilizar óleo 2 tempos mineral (API TC), a proporção obrigatória é de 25:1 (40 ml de óleo para cada 1 litro de gasolina comum).",
        "Já se utilizar óleo 2 tempos semissintético ou sintético de alta performance (JASO FC/FD), a mistura pode ser feita de 40:1 (25 ml/L) a 50:1 (20 ml/L), reduzindo a fumaça e a carbonização da vela TORCH BM6A."
      ]
    },
    {
      q: "A Toyama TBC63 aguenta trabalhar com disco de serra circular de vídea (Widea)?",
      a: [
        "Sim, com folga! Esse é justamente o ponto forte do projeto: o tubo inteiriço de alumínio de 28 mm (com parede de 2 mm) e o eixo cardã rígido de 1.517 mm com 9 estrias x 8 mm foram dimensionados para absorver o impacto de discos de vídea de 40 e 80 dentes em arbustos lenhosos e capim-elefante."
      ]
    },
    {
      q: "Peças de reposição para a Toyama TBC63 são fáceis de encontrar no Brasil?",
      a: [
        "Sim: a Toyama atua há mais de duas décadas no mercado brasileiro com ampla rede de assistências credenciadas e distribuição de peças originais (bobina CDI, carburador, filtro duplo, kit cilindro 63,3 cc e embreagem) tanto em lojas físicas quanto no comércio eletrônico."
      ]
    },
    {
      q: "Vale mais a pena comprar a Toyama TBC63 ou a TBC52X-GII?",
      a: [
        "Se o seu terreno tem pasto fechado, colonião alto, brotos de árvores ou áreas grandes onde um motor de 1,9 HP perderia rotação, a TBC63 (3,5 HP) vale cada centavo a mais.",
        "Por outro lado, se a sua rotina é roçar capim médio e gramados de chácara por 2 a 3 horas buscando uma máquina mais leve e econômica, a TBC52X-GII (51,6 cc) é a escolha mais equilibrada."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 Evergreen + Carlos Henrique)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/rocadeira-toyama-tbc63-e-boa.webp"
            alt="Operador rural utilizando roçadeira Toyama TBC63 de 63,3cc e 3,5 HP com disco de vídea em capim-elefante denso"
            title="Roçadeira Toyama TBC63 é Boa? Teste e Ficha Técnica de 63,3cc"
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
            Review Técnico de Alta Cilindrada (63,3 cc / 3,5 HP)
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Toyama TBC63 é Boa Mesmo?{' '}
            <span className="text-[#16A34A]">Veja se Vale a Pena em 2026</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Analisamos na bancada o motor real de 63,3 cc e 3,5 HP, o tubo monobloco de 28 mm com 9 estrias, o consumo do tanque de 1,5 litro e quando a TBC63 supera as máquinas de 52 cilindradas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#4ade80] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Carlos+Henrique&background=16A34A&color=fff";
                  }}
                />
                <span>Carlos Henrique Menezes</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Técnico em Mecânica de Equipamentos</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTEÚDO CENTRALIZADO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA DE OFICINA (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Escolher o equipamento certo para derrubar vegetação densa impacta diretamente o rendimento da sua diária no campo e a vida útil do maquinário.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quem enfrenta pasto abandonado, capim-colonião alto ou rebentos lenhosos sabe que motores pequenos trabalham esgoelados no limite, aquecendo a embreagem e dobrando o cansaço do operador.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Descobrir se a roçadeira Toyama TBC63 é boa exige olhar além dos números da caixa e avaliar como seus 63,3 cc e 3,5 HP se comportam na prática dentro do portfólio geral — veja também nossa análise completa sobre se a{' '}
            <a href="/rocadeira-toyama-e-boa" className="text-[#166534] font-semibold hover:underline">
              roçadeira Toyama é boa em todas as linhas (H, X e RT)
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, desmontamos a ficha técnica completa da TBC63 (referência 301-006), seus prós e contras reais, o comparativo direto contra a TBC52X-GII e o veredito de bancada para você decidir com segurança.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO: A TOYAMA TBC63 SERVE PARA O SEU TERRENO?
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Diagnóstico Rápido: A Toyama TBC63 (63,3 cc) é Ideal para Você?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o tipo de vegetação e serviço da sua propriedade para ver se os 3,5 HP da TBC63 são a escolha certa:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedScenario("pastoPesado")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "pastoPesado"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🌾 Pasto Sujo, Colonião Alto e Mato Lenhoso
            </button>

            <button
              type="button"
              onClick={() => setSelectedScenario("multifuncionalMotopoda")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "multifuncionalMotopoda"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🪚 Roçada Bruta + Poda de Galhos (Motopoda)
            </button>

            <button
              type="button"
              onClick={() => setSelectedScenario("gramadoLeve")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "gramadoLeve"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🏡 Apenas Gramado Baixo ou Quintal Pequeno
            </button>
          </div>

          <div className="bg-slate-950/70 p-5 sm:p-6 rounded-xl border border-slate-700/80">
            <span className="text-xs font-black uppercase tracking-wider text-[#4ade80] block mb-1">
              {currentSim.verdictBadge} — {currentSim.title}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              {currentSim.verdictText}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
              {currentSim.reason}
            </p>
            <a
              href={currentSim.anchor}
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-lg transition-colors"
            >
              <span>{currentSim.buttonLabel}</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. VITRINE RÁPIDA DE OFERTA (TOYAMA TBC63)
            =================================================================== */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 tracking-tight border-l-4 border-[#16A34A] pl-4">
            Resumo Rápido: Roçadeira Toyama TBC63 (63,3 cc / 3,5 HP)
          </h2>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-2.5 sm:p-3.5 text-center w-[72px]">Foto</th>
                  <th className="p-2.5 sm:p-3.5">Equipamento</th>
                  <th className="p-2.5 sm:p-3.5 hidden md:table-cell">Destaque Mecânico</th>
                  <th className="p-2.5 sm:p-3.5 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-2.5 sm:p-3.5 text-center">Oferta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-2 align-middle text-center">
                    <div className="w-[60px] h-[60px] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-1 mx-auto">
                      <img
                        src="/images/blog/thumbs/Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda-thumb.webp"
                        alt="Roçadeira Toyama TBC63 Profissional 3.5HP"
                        width={60}
                        height={60}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td className="p-2 align-middle">
                    <a
                      href="#visao-geral-tbc63"
                      className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block"
                    >
                      Toyama TBC63 Profissional (63,3 cc / 3,5 HP)
                    </a>
                    <div className="text-[11px] text-gray-600 mt-1 md:hidden">
                      Motor 63,3cc • Tanque 1,5L • Tubo 28mm + Motopoda
                    </div>
                    <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                      Nota: 9.5 / 10
                    </div>
                  </td>
                  <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                    63,3 cc Reais (3,5 HP) • Tubo 28 mm Inteiriço • Kit c/ Vídea e Motopoda
                  </td>
                  <td className="p-2 align-middle text-center hidden sm:table-cell">
                    <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      9.5 / 10
                    </span>
                  </td>
                  <td className="p-2 align-middle text-center">
                    <a
                      href={tbc63Link}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="bg-[#15803d] hover:bg-[#166534] text-white font-bold no-underline text-xs py-2 px-3 rounded-lg whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-5 shadow-sm active:scale-95"
                    >
                      Ver Preço
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            5. VISÃO GERAL RÁPIDA — ROÇADEIRA TOYAMA TBC63 (REVIEW COMPLETO)
            =================================================================== */}
        <section
          id="visao-geral-tbc63"
          className="scroll-mt-24 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm my-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-block bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-black uppercase px-3 py-1 rounded-full">
              A Mais Potente da Linha Toyama (Ref. 301-006)
            </span>
            <span className="text-xs font-bold text-[#166534] bg-green-50 px-3 py-1 rounded-full">
              Nota Técnica: 9.5 / 10
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tight">
            Visão Geral Rápida — Roçadeira Toyama TBC63 (63,3 cc / 3,5 HP)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 italic mb-6">
            Desenhada para superar as limitações das máquinas de 43cc e 52cc quando o desafio é capim-elefante, braquiária velha e arbustos lenhosos em fazendas e sítios.
          </p>

          <div className="my-6 flex justify-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <img
              src="/images/blog/Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda.webp"
              alt="Roçadeira Toyama TBC63 Profissional 63,3cc 3.5HP com acessórios e função motopoda"
              title="Roçadeira Toyama TBC63 63,3cc 3,5 HP"
              width={500}
              height={500}
              className="max-h-[360px] w-auto object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none my-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para quem busca potência bruta de verdade, a Toyama TBC63 ocupa o topo absoluto da categoria semi-profissional e rural pesada da fabricante.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Equipada com um motor monocilíndrico 2 tempos de 63,3 cc que despeja 3,5 HP (2,6 kW) e atinge até 11.000 RPM, ela oferece o fôlego extra necessário para cortar vegetações fechadas sem deixar a lâmina perder velocidade no impacto.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O reservatório generoso de 1,5 litro combinado ao sistema de filtro de ar de duplo elemento equilibra longa autonomia no campo com proteção reforçada contra a poeira aspirada no terreno seco.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Pesando 7,2 kg na estrutura líquida (cerca de 8,5 kg completa em ordem de marcha) e contando com tubo de alumínio inteiriço de 28 mm e eixo rígido de 9 estrias, a TBC63 entrega estabilidade mecânica para quem não pode ficar na mão no meio de uma empreita pesada.
            </p>
          </div>

          {/* Tabela Resumo de Especificações */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Especificação Técnica</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Detalhes do Equipamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Identificação do Produto</td>
                  <td className="p-3.5 text-gray-800 font-semibold">Toyama TBC63 (Referência: 301-006)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Tipo de Motor e Cilindrada</td>
                  <td className="p-3.5 text-[#166534] font-bold">2 Tempos Monocilíndrico • 63,3 cc Reais</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Desempenho de Força</td>
                  <td className="p-3.5 text-[#166534] font-bold">2,6 kW / 3,5 HP</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Giro Máximo e Marcha Lenta</td>
                  <td className="p-3.5 text-gray-700">11.000 RPM (máx.) / 3.000 ± 200 RPM (neutro)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Capacidade do Reservatório</td>
                  <td className="p-3.5 text-gray-700">1,5 Litro (alta autonomia)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Sistema de Filtragem e Ignição</td>
                  <td className="p-3.5 text-gray-700">Filtro de ar Duplo Elemento • Vela TORCH BM6A (CDI)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Eixo e Estrutura do Tubo</td>
                  <td className="p-3.5 text-gray-700">Eixo 1.517 mm (9 estrias x 8 mm) • Tubo Alumínio 28 mm Peça Única</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Massa do Equipamento</td>
                  <td className="p-3.5 text-gray-700">7,2 kg (líquido motor/estrutura) / ~8,5 kg (completa operacional)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Proporção de Mistura 2T</td>
                  <td className="p-3.5 text-gray-700">25:1 (Óleo Mineral) ou 40:1 a 50:1 (Óleo Sintético)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Garantia e Aplicação</td>
                  <td className="p-3.5 text-gray-700">6 meses (PF) / 3 meses (PJ) • Fazendas, sítios e desbaste pesado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6">
            <AffiliateCard id="toyama-tbc63" />
          </div>
        </section>

        {/* ===================================================================
            6. TABELA DE PRÓS E CONTRAS DA TOYAMA TBC63
            =================================================================== */}
        <section className="my-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Tabela de Prós e Contras da Toyama TBC63
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              A compra de uma máquina acima de 60 cilindradas exige transparência total sobre o que ela entrega de vantagem no corte e quais são os cuidados que o projeto impõe ao operador.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Sistematizamos abaixo os pontos positivos e as observações técnicas verificadas em campo:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4 text-[#4ade80] w-1/2">🚀 Destaques Positivos (Prós)</th>
                  <th className="p-3.5 sm:p-4 text-amber-300 w-1/2">⚠️ Observações Técnicas (Contras)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {prosAndConsRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-gray-50/60" : "bg-white"}>
                    <td className="p-3.5 sm:p-4 text-[#166534] font-semibold align-top">
                      <div className="flex items-start gap-2">
                        <Check size={18} className="text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{row.pro}</span>
                      </div>
                    </td>
                    <td className="p-3.5 sm:p-4 text-gray-700 align-top">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                        <span>{row.con}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Esse balanço comprova que a TBC63 entrega força mecânica exatamente onde o produtor rural mais precisa — no desbaste de mato fechado —, desde que o operador respeite a rotina de lubrificação e ajuste bem o colete nos ombros.
          </p>
        </section>

        {/* ===================================================================
            7. TOYAMA TBC63: QUANDO OS 52CC NÃO SÃO MAIS SUFICIENTES + BANNER MEIO
            =================================================================== */}
        <section className="my-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Toyama TBC63: Quando os 52cc Não São Mais Suficientes
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              A transição das máquinas convencionais de 52 cc para a Toyama TBC63 não é apenas um aumento de número no adesivo, mas uma mudança real de torque em baixa e média rotação — entenda a fundo essa relação no nosso guia sobre{' '}
              <a href="/qual-a-melhor-cilindrada-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                qual a melhor cilindrada para roçadeira
              </a>
              .
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Frequentemente, quem opera uma roçadeira menor (ou busca uma alternativa de entrada de 51,7 cc como a que avaliamos no teste se a{' '}
              <a href="/rocadeira-toyama-rt52l-e-boa" className="text-[#166534] font-semibold hover:underline">
                roçadeira Toyama RT52L é boa
              </a>
              ) percebe que, ao entrar em uma moita trançada de braquiária velha ou capim-colonião passado, o motor menor exige mais passadas para não perder rotação.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Essa queda constante de giro faz as sapatas da embreagem patinarem dentro da campana, gerando superaquecimento prematuro do cilindro e obrigando o operador a passar duas ou três vezes no mesmo lugar.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Com 63,3 cc e 3,5 HP, a TBC63 trabalha com reserva de força: a inércia do virabrequim mantém o disco de vídea cortando firme sob carga pesada, fazendo com que a máquina — e não os braços do roçador — absorva o esforço bruto exigido pela fazenda.
            </p>
          </div>

          <div className="my-10 flex justify-center">
            <BunnerDoMeiorocadeira />
          </div>
        </section>

        {/* ===================================================================
            8. DETALHES DO PRODUTO E INFORMAÇÕES TÉCNICAS COMPLETAS
            =================================================================== */}
        <section className="my-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Detalhes do Produto e Informações Técnicas de Bancada
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Na bancada da oficina, dois detalhes construtivos da TBC63 chamam a atenção positivamente: o tubo de alumínio inteiriço de 28 mm com parede espessa de 2 mm e o eixo cardã maciço de 1.517 mm com pontas de 9 estrias x 8 mm (extensão de estria de 25 mm).
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por não possuir emenda bipartida no meio da haste, toda a pancada de torque dos 3,5 HP viaja direto da embreagem até a caixa de engrenagens sem torção estrutural e sem risco de criar folga no meio do tubo.
              </p>
            </div>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/motor-transmissao-toyama-tbc63.webp"
              alt="Bancada técnica mostrando bloco do motor 63,3cc da Toyama TBC63 com tanque de 1,5L, filtro de ar duplo, tubo de 28mm com eixo de 9 estrias e disco de vídea"
              title="Detalhes mecânicos da Toyama TBC63: motor 63,3cc, eixo 9 estrias e disco de vídea"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Conjunto mecânico pesado: bloco 63,3 cc com tanque translúcido de 1,5 L, filtro duplo e transmissão inteiriça de 28 mm / 9 estrias.
            </span>
          </div>

          {/* Ficha Técnica Completa em 2 Colunas / Tabela Detalhada */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-[#1a1a1a] text-white uppercase font-bold">
                <tr>
                  <th className="p-3.5">Parâmetro Técnico</th>
                  <th className="p-3.5 text-[#4ade80]">Especificação Oficial Toyama TBC63</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="p-3 font-bold text-gray-900">Código do Produto</td><td className="p-3 text-gray-700">301-006</td></tr>
                <tr className="bg-gray-50/60"><td className="p-3 font-bold text-gray-900">Configuração e Refrigeração</td><td className="p-3 text-gray-700">Motor 2 Tempos — Monocilíndrico — Refrigerado a Ar</td></tr>
                <tr><td className="p-3 font-bold text-gray-900">Volume do Cilindro e Potência</td><td className="p-3 font-bold text-[#166534]">63,3 cc • 2,6 kW / 3,5 HP</td></tr>
                <tr className="bg-gray-50/60"><td className="p-3 font-bold text-gray-900">Rotação Máxima / Marcha Lenta</td><td className="p-3 text-gray-700">11.000 RPM / 3.000 ± 200 RPM</td></tr>
                <tr><td className="p-3 font-bold text-gray-900">Ignição, Vela e Partida</td><td className="p-3 text-gray-700">CDI Eletrônica • Vela TORCH BM6A • Partida Manual Retrátil</td></tr>
                <tr className="bg-gray-50/60"><td className="p-3 font-bold text-gray-900">Reservatório e Mistura 2T</td><td className="p-3 text-gray-700">1,5 Litro • Mineral 25:1 / Sintético 40:1 a 50:1</td></tr>
                <tr><td className="p-3 font-bold text-gray-900">Haste e Estrias do Cardã</td><td className="p-3 text-gray-700">1.517 mm — 9 estrias x 8 mm (extensão da estria: 25 mm)</td></tr>
                <tr className="bg-gray-50/60"><td className="p-3 font-bold text-gray-900">Estrutura e Parede do Tubo</td><td className="p-3 text-gray-700">Alumínio 28 mm — Peça única monobloco (parede de 2 mm)</td></tr>
                <tr><td className="p-3 font-bold text-gray-900">Empunhadura e Comprimento Total</td><td className="p-3 text-gray-700">Guidão Bicicleta com alças angulares • 184 cm montada</td></tr>
                <tr className="bg-gray-50/60"><td className="p-3 font-bold text-gray-900">Peso Líquido / Peso Bruto</td><td className="p-3 text-gray-700">7,2 kg (líquido estrutura) / 8,5 kg (total embalada/operacional)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            9. O QUE QUEM COMPROU ESTÁ DIZENDO + TBC63 VS TBC52X-GII
            =================================================================== */}
        <section className="my-14 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O Que Quem Comprou a Toyama TBC63 Está Dizendo?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A experiência real de quem coloca a TBC63 para rodar no sítio confirma o que vemos na oficina: compradores que migraram de modelos antigos de 43 cc ou 52 cc relatam ganho imediato na velocidade de limpeza de pastagens e lotes tomados por mato grosso.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Os elogios concentram-se na capacidade do motor manter a rotação constante sem apagar quando entra em touceiras pesadas e na autonomia do tanque de 1,5 litro, enquanto o principal alerta dos usuários vai para a importância de ajustar bem as duas alças do colete ergonômico antes de começar a jornada para compensar o porte parrudo da máquina.
              </p>
            </div>
          </div>

          {/* TBC63 vs TBC52X */}
          <div id="tbc63-vs-tbc52x" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Toyama TBC63 vs. TBC52X-GII: Qual Vale Mais a Pena?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Essa é a comparação mais pedida por quem está em dúvida no topo do catálogo da Toyama.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A TBC52X-GII (51,6 cc e 1,9 HP) é a máquina mais equilibrada para manutenção geral de chácaras com vegetação mista, oferecendo excelente agilidade e menor consumo de gasolina em jornadas de 2 a 3 horas.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Já a TBC63 (63,3 cc e 3,5 HP) entrega quase o dobro de potência nominal e tanque 36% maior (1,5 L contra 1,1 L), justificando o investimento para quem enfrenta pasto sujo fechado e quer usar disco de vídea e função motopoda sem forçar o motor:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Especificação</th>
                    <th className="p-3.5 sm:p-4">Toyama TBC52X-GII</th>
                    <th className="p-3.5 sm:p-4 text-[#4ade80]">Toyama TBC63 Profissional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Cilindrada do Motor</td>
                    <td className="p-3.5 text-gray-700">51,6 cc</td>
                    <td className="p-3.5 font-bold text-[#166534]">63,3 cc (Maior da marca)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Potência Nominal</td>
                    <td className="p-3.5 text-gray-700">1,9 HP</td>
                    <td className="p-3.5 font-bold text-[#166534]">3,5 HP (2,6 kW)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Capacidade do Tanque</td>
                    <td className="p-3.5 text-gray-700">1,1 Litro</td>
                    <td className="p-3.5 font-bold text-[#166534]">1,5 Litro (+36% autonomia)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Sistema de Filtragem</td>
                    <td className="p-3.5 text-gray-700">Duplo elemento</td>
                    <td className="p-3.5 text-gray-700">Duplo elemento</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Tubo e Eixo Cardã</td>
                    <td className="p-3.5 text-gray-700">Alumínio 28 mm inteiriço</td>
                    <td className="p-3.5 font-bold text-[#166534]">Alumínio 28 mm inteiriço • 1.517 mm (9 estrias)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Disco Vídea + Motopoda no Kit</td>
                    <td className="p-3.5 text-gray-700">Não (vem c/ faca 3 pontas e nylon)</td>
                    <td className="p-3.5 font-bold text-[#166534]">Sim (Kit completo c/ vídea e motopoda)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Peso Operacional</td>
                    <td className="p-3.5 font-bold text-[#166534]">~7,5 a 8,0 kg (Mais leve)</td>
                    <td className="p-3.5 text-gray-700">~8,5 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. GUIA TÉCNICO: ALTA CILINDRADA, TERRENOS INCLINADOS, FIO VS LÂMINA VS VÍDEA E USADAS
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-10">
          {/* Como escolher alta cilindrada */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O Que Saber Antes de Comprar uma Roçadeira de Alta Cilindrada (60cc+)
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Investir em uma roçadeira acima de 60 cc exige estratégia técnica: como o cilindro de 63,3 cc gera mais calor e compressão que um motor pequeno, a qualidade da lubrificação define a vida útil da máquina.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Priorize sempre um lubrificante semissintético ou sintético JASO FD na proporção correta do dosador — confira as opções testadas no guia de{' '}
                <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
                  qual o melhor óleo para roçadeira Toyama
                </a>{' '}
                — e mantenha a caixa de transmissão engraxada a cada 20 horas com a{' '}
                <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor graxa para roçadeira (lítio para ponteira)
                </a>
                .
              </p>
            </div>
          </div>

          {/* Terrenos inclinados */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Posso Usar a Toyama TBC63 em Terrenos Inclinados?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por ser equipada com carburador de membrana e motor 2 tempos lubrificado diretamente pela mistura no tanque, a TBC63 mantém a alimentação constante mesmo trabalhando inclinada em aclives e declives médios.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Para operar com segurança em ladeiras, centralize o gancho do colete duplo no quadril e avance sempre cortando em faixas horizontais (em nível com a curva do terreno) em vez de subir e descer o morro — veja o método passo a passo no nosso guia de{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>
                .
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Caso a sua propriedade seja formada quase 100% por barrancos muito íngremes ou cafezais de montanha, vale avaliar também nosso comparativo sobre{' '}
                <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor roçadeira costal ou lateral
                </a>
                .
              </p>
            </div>
          </div>

          {/* Diferença entre Fio, Lâmina e Disco Widea */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Qual a Diferença entre Fio de Nylon, Lâmina 3 Pontas e Disco Widea na TBC63?
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit mb-3">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  1. Carretel de Fio de Nylon
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Ideal para gramados e acabamentos rente a muros, pedras e cercas; na TBC63, utilize{' '}
                  <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    fio de nylon quadrado de 3,0 mm
                  </a>{' '}
                  para suportar os 3,5 HP sem arrebentar toda hora.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit mb-3">
                  <Wrench size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  2. Lâmina de 3 Pontas em Aço
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  A ferramenta curinga para capim alto, braquiária densa e ervas daninhas em campo aberto sem pedras, triturando a massa verde na descida e na varredura lateral.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit mb-3">
                  <ShieldAlert size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  3. Disco de Serra Widea (Vídea)
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Transforma a TBC63 em uma desbastadeira florestal: seus dentes soldados de metal duro serram capim-elefante grosso, mamona, assa-peixe e pequenos arbustos lenhosos sem travar — veja todas as opções em{' '}
                  <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    melhor lâmina e disco para roçadeira
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Por que evitar usadas */}
          <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200">
            <h2 className="text-xl sm:text-2xl font-black text-amber-950 uppercase tracking-tight mb-3 flex items-center gap-2">
              <AlertTriangle size={24} className="text-amber-700 shrink-0" /> Por Que Evitar Roçadeiras a Gasolina de 63cc Usadas?
            </h2>
            <p className="mb-4 text-sm sm:text-base text-amber-950 leading-relaxed">
              Em motores 2 tempos de alta cilindrada como o da TBC63, o desgaste grave é invisível por fora: basta o antigo dono ter trabalhado um único dia com mistura pobre de óleo para deixar a camisa do cilindro riscada e a gaiola de agulhas do virabrequim azulada por calor.
            </p>
            <p className="mb-0 text-sm sm:text-base text-amber-950 leading-relaxed">
              Como o preço de uma Toyama TBC63 nova lacrada (com nota fiscal, garantia de fábrica e todos os acessórios inclusos) é muito acessível, comprar máquina usada sem histórico de bancada quase sempre sai mais caro já na primeira ida à oficina.
            </p>
          </div>
        </section>

        {/* ===================================================================
            11. BANNER DE CROSS-SELL (INSUMOS PARA A TOYAMA TBC63)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#166534] font-black text-xs uppercase tracking-wider block mb-1">
              Insumos Obrigatórios para Motor 63,3 cc (3,5 HP)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Proteja Sua Toyama TBC63 Desde o Primeiro Tanque
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Três itens que blindam o cilindro, a caixa de engrenagens e a segurança do operador no desbaste pesado:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Óleo 2T Jaso Toyama 500ml */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Óleo Original Toyama
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Óleo Para Motores 2t Jaso Toyama 500ml.webp"
                    alt="Óleo Para Motores 2T Jaso Toyama 500ml"
                    title="Óleo 2 Tempos Original Toyama para TBC63"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Óleo 2T Jaso Toyama (500ml)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Lubrificante homologado pela fábrica para proteger o cilindro de 63,3 cc sob alta carga térmica a 11.000 RPM.
                </p>
              </div>
              <a
                href={products["oleo-para-motores-2t-jaso-toyama-500ml"]?.link || "https://meli.la/1ufrroe"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: Graxa de Lítio Husqvarna 80g */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Blindagem da Ponteira (150 °C)
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Graxa Litio Husqvarna 80gr-thumb.webp"
                    alt="Graxa de Lítio Husqvarna 80g com Bico Dosador"
                    title="Graxa de Lítio para Ponteira e Eixo 9 Estrias da TBC63"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Graxa de Lítio p/ Transmissão (80g)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Bico cônico universal perfeito para engraxar a ponteira de 28 mm e as 9 estrias do eixo cardã da TBC63 a cada 20h.
                </p>
              </div>
              <a
                href={products["graxa-litio-husqvarna-80gr"]?.link || "https://meli.la/2ZRkq4i"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Fio de Nylon Quadrado 3mm Duraline */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Bitola Pesada 3,0 mm
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/fio-duraline-cross.webp"
                    alt="Rolo de Fio de Nylon Quadrado 3mm Duraline 255m"
                    title="Fio de Nylon Quadrado 3mm para Motores de 63cc"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Fio de Nylon Quadrado 3mm (255m)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Quinas vivas de 3,0 mm que aproveitam os 3,5 HP da TBC63 para cortar capim grosso perto de pedras sem soldar no carretel.
                </p>
              </div>
              <a
                href={products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "https://meli.la/2PExUfX"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. PERGUNTAS FREQUENTES SOBRE A TOYAMA TBC63
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre a Roçadeira Toyama TBC63
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
            13. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DE OFICINA + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: A Roçadeira Toyama TBC63 Vale a Pena?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                O veredito técnico é claro: sim, a Toyama TBC63 vale muito a pena para quem enfrenta pasto fechado, capim-elefante, braquiária alta e grandes áreas onde as roçadeiras comuns de 43 cc e 52 cc trabalham no limite e perdem rotação.
              </p>
              <p className="mb-4 leading-relaxed">
                Com seus 63,3 cc reais, 3,5 HP de força bruta, tanque de 1,5 litro, tubo monobloco de 28 mm (9 estrias) e kit completo com disco de vídea e função motopoda, ela entrega uma relação torque-preço imbatível para sítios e fazendas.
              </p>
              <p className="mb-0 leading-relaxed">
                Capriche na mistura de óleo 2 tempos no dosador, ajuste o colete duplo nos ombros e domine qualquer vegetação pesada sem esforço!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Segredo de Oficina do Carlos Henrique */}
        <div className="w-full flex justify-center mt-12 mb-4">
          <a href="/author/carlos-henrique/" aria-label="Ver perfil técnico de Carlos Henrique Menezes">
            <img
              src="/images/autores/Carlos Henrique Menezes-thumb.webp"
              alt="Carlos Henrique Menezes"
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
              Segredo de Oficina do Carlos Henrique: Como Dar Partida Leve num Motor 63,3 cc sem Quebrar o Retrátil
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Por ter um pistão grande de 63,3 cilindradas, a compressão da TBC63 é bem mais pesada que a de uma 43 cc: se você der um tranco seco direto no cordão com a corda frouxa, vai quebrar as travas plásticas da polia de partida na primeira semana.
              </p>
              <p className="mb-0">
                Use sempre a técnica de dois tempos no braço: puxe o manípulo devagar por cerca de 10 centímetros até sentir a catraca engatar firme no volante magnético (ponto duro de compressão) e, só a partir dali, dê o puxão curto e rápido — a máquina pega de primeira sem sofrer impacto mecânico no retrátil.
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

export default RocadeiraToyamaTbc63EBoa;
