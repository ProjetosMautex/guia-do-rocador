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
// COMPONENTE PRINCIPAL DO ARTIGO: ROÇADEIRA TOYAMA RT52L É BOA?
// ============================================================================
export const RocadeiraToyamaRt52lEBoa: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>("chacaraSitio");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const rt52lLink = products["toyama-rt52l"]?.link || "https://meli.la/1uNyBm5";

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
    chacaraSitio: {
      title: "Manutenção de Chácaras, Sítios e Terrenos com Mato Crescido",
      verdictBadge: "COMPRA RECOMENDADA • EXCELENTE CUSTO-BENEFÍCIO",
      verdictText: "Sim! A Toyama RT52L (51,7 cc / 2,0 HP) entrega força de 52cc pelo menor investimento da linha.",
      reason:
        "Para quem precisa limpar braquiária, capim alto e lotes rurais periodicamente sem pagar caro por linhas profissionais, seu motor 2 tempos de 51,7 cc com eixo rígido e guidão bicicleta resolve o serviço pesado com peças baratas em qualquer cidade.",
      anchor: "#analise-rt52l",
      buttonLabel: "Ver Análise Completa e Oferta da RT52L"
    },
    autonomoBico: {
      title: "Prestador de Serviço Autônomo (Limpeza de Lotes e Empreitas Médias)",
      verdictBadge: "ÓTIMA MÁQUINA DE ENTRADA PARA GANHAR DINHEIRO",
      verdictText: "Vale a pena para começar a pegar serviços de limpeza de terrenos com retorno rápido.",
      reason:
        "Como o investimento inicial é baixo e ela já sai da caixa com lâmina de 3 pontas e carretel de nylon, a RT52L se paga nas primeiras diárias — basta respeitar pequenas pausas de resfriamento a cada tanque de 1,1 litro consumido.",
      anchor: "#analise-rt52l",
      buttonLabel: "Conferir Ficha Técnica da RT52L"
    },
    usoExtremo8h: {
      title: "Empreiteira Rodoviária ou Jornada Ininterrupta de 8 Horas Diárias",
      verdictBadge: "ATENÇÃO AO CICLO DE TRABALHO (LINHA RT)",
      verdictText: "Cuidado: para bater 8 horas seguidas todos os dias, suba para a Linha X-GII ou TBC63.",
      reason:
        "A RT52L tem motor forte de 51,7 cc, mas seu amortecimento é voltado ao uso semi-profissional e periódico; se a sua equipe trabalha o dia inteiro sem parar, veja abaixo a diferença técnica dentro do contexto da marca.",
      anchor: "#contexto-tecnico-rt52l",
      buttonLabel: "Entender o Contexto Técnico da Linha RT"
    }
  };

  const currentSim = simScenarios[selectedScenario];

  const faqList = [
    {
      q: "A roçadeira Toyama RT52L aguenta uso profissional diário?",
      a: [
        "Embora tenha um motor potente de 51,7 cc e 2,0 HP capaz de cortar mato fechado, a RT52L (e sua revisão RT52L-B) foi projetada para demandas rurais periódicas e uso semi-profissional.",
        "Para jornadas extremas de 8 horas ininterruptas todos os dias da semana, modelos com casulo antivibração pesado (como a Toyama TBC52X-GII ou linhas florestais premium) levam vantagem no conforto e na dissipação térmica."
      ]
    },
    {
      q: "Com qual frequência devo lubrificar a caixa de transmissão (ponteira) da RT52L?",
      a: [
        "O desgaste do conjunto de corte depende diretamente da densidade da vegetação, mas a regra inegociável de oficina é inspecionar e repor de 5g a 10g de graxa de lítio na caixa de transmissão angular a cada 20 a 25 horas de operação.",
        "Esse cuidado simples de dois minutos é o que separa uma ponteira que dura anos de um conjunto de coroa e pinhão moído no seco."
      ]
    },
    {
      q: "Qual gasolina e qual proporção de óleo 2 tempos usar na Toyama RT52L?",
      a: [
        "Utilize gasolina fresca de posto confiável (comum ou aditivada nova, nunca estocada por mais de 15 a 20 dias) misturada rigorosamente no frasco dosador com óleo 2 tempos para motores refrigerados a ar.",
        "Siga a proporção de 25:1 (40 ml de óleo por litro de gasolina) ao usar óleo mineral API TC, ou 40:1/50:1 (20 a 25 ml por litro) ao usar óleo semissintético JASO FC/FD de alta performance, minimizando o acúmulo de carvão no pistão."
      ]
    },
    {
      q: "Qual é a medida do furo da lâmina e da rosca do carretel da Toyama RT52L?",
      a: [
        "A Toyama RT52L segue o padrão universal mais fácil de achar no Brasil: furo central de 25,4 mm (1 polegada) para lâminas de 2 ou 3 pontas e discos de vídea, e rosca esquerda M10 x 1,25 para carretéis de fio de nylon."
      ]
    },
    {
      q: "Qual a diferença entre a Toyama RT52L e a Toyama TBC52H?",
      a: [
        "Ambas compartilham a mesma arquitetura de motor 2 tempos de 51,7 cc / 2,0 HP, tanque de 1,1 litro e haste inteiriça de eixo rígido.",
        "A diferença está no design externo da carenagem do motor e do filtro de ar da linha RT, que foi otimizada para entregar o menor preço final de venda mantendo a mesma força de corte e compatibilidade de peças."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 com 2026 + Carlos Henrique)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/rocadeira-toyama-rt52l-e-boa.webp"
            alt="Operador equipado com EPIs completos cortando mato denso em chácara com roçadeira lateral Toyama RT52L de 52cc e 2 HP"
            title="Roçadeira Toyama RT52L é Boa? Análise Técnica de 51,7cc e 2 HP"
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
            Análise de Bancada • Série RT 51,7 cc (2,0 HP)
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Roçadeira Toyama RT52L é Boa?{' '}
            <span className="text-[#16A34A]">Análise e Vale a Pena (2026)</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Desmontamos a ficha técnica da Toyama RT52L (51,7 cc e 2,0 HP), avaliamos seu torque real em capoeira e pasto alto, os acessórios compatíveis e os cuidados de manutenção para rodar anos sem gastar caro.
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
            Manter grandes áreas verdes, chácaras e lotes rurais em ordem exige uma máquina que combine torque de sobra na lâmina e mecânica simples, mas encontrar esse equilíbrio sem pagar o preço salgado das marcas florestais europeias é um desafio constante.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Muitos proprietários sofrem ao tentar limpar pasto sujo com aparadores fracos que travam na primeira moita de braquiária ou exigem manutenção cara.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            A procura para saber se a roçadeira Toyama RT52L é boa cresce justamente porque ela promete entregar a força bruta de um motor de 52 cilindradas (51,7 cc e 2,0 HP) pelo menor custo de entrada do catálogo — veja como ela se posiciona dentro da marca no nosso guia geral sobre se a{' '}
            <a href="/rocadeira-toyama-e-boa" className="text-[#166534] font-semibold hover:underline">
              roçadeira Toyama é boa em todas as linhas
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, analisamos na bancada a ficha técnica do manual da RT52L, seus benefícios práticos no campo, os acessórios compatíveis e os erros comuns que você deve evitar para proteger o motor.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO: A TOYAMA RT52L SERVE PARA A SUA DEMANDA?
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: A Toyama RT52L (52 cc / 2 HP) Serve para Você?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o seu objetivo de trabalho para ver o veredito técnico imediato:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedScenario("chacaraSitio")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "chacaraSitio"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🏡 Chácaras, Sítios e Mato Alto (Custo-Benefício)
            </button>

            <button
              type="button"
              onClick={() => setSelectedScenario("autonomoBico")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "autonomoBico"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🛠️ Limpeza de Lotes e Renda Extra (Semi-Profissional)
            </button>

            <button
              type="button"
              onClick={() => setSelectedScenario("usoExtremo8h")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedScenario === "usoExtremo8h"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🚜 Empreita Pesada Contínua (8 Horas por Dia)
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
            4. VITRINE RÁPIDA DE OFERTA (TOYAMA RT52L-B)
            =================================================================== */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 tracking-tight border-l-4 border-[#16A34A] pl-4">
            Resumo Rápido: Roçadeira Toyama RT52L / RT52L-B (52 cc / 2,0 HP)
          </h2>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-2.5 sm:p-3.5 text-center w-[72px]">Foto</th>
                  <th className="p-2.5 sm:p-3.5">Equipamento</th>
                  <th className="p-2.5 sm:p-3.5 hidden md:table-cell">Indicação Principal</th>
                  <th className="p-2.5 sm:p-3.5 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-2.5 sm:p-3.5 text-center">Oferta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-2 align-middle text-center">
                    <div className="w-[60px] h-[60px] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-1 mx-auto">
                      <img
                        src="/images/blog/thumbs/Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama-thumb.webp"
                        alt="Roçadeira Lateral a Gasolina 2HP 52cc 2T RT52L-B Toyama"
                        width={60}
                        height={60}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td className="p-2 align-middle">
                    <a
                      href="#analise-rt52l"
                      className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block"
                    >
                      Toyama RT52L-B Lateral (51,7 cc / 2,0 HP)
                    </a>
                    <div className="text-[11px] text-gray-600 mt-1 md:hidden">
                      Motor 51,7cc • 2,0 HP • Tanque 1,1L • Eixo Rígido
                    </div>
                    <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                      Nota: 9.1 / 10
                    </div>
                  </td>
                  <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                    Melhor Custo-Benefício 52cc para Chácaras, Sítios e Capoeira Média
                  </td>
                  <td className="p-2 align-middle text-center hidden sm:table-cell">
                    <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      9.1 / 10
                    </span>
                  </td>
                  <td className="p-2 align-middle text-center">
                    <a
                      href={rt52lLink}
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
            5. ANÁLISE COMPLETA: ROÇADEIRA TOYAMA RT52L + FICHA TÉCNICA
            =================================================================== */}
        <section
          id="analise-rt52l"
          className="scroll-mt-24 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm my-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-block bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-black uppercase px-3 py-1 rounded-full">
              Destaque Custo-Benefício 52cc (Série RT)
            </span>
            <span className="text-xs font-bold text-[#166534] bg-green-50 px-3 py-1 rounded-full">
              Nota Técnica: 9.1 / 10
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tight">
            Roçadeira Toyama RT52L (51,7 cc / 2,0 HP)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 italic mb-6">
            Potência elevada e corte agressivo em pastagens e capoeiras por uma fração do custo das marcas florestais premium.
          </p>

          <div className="my-6 flex justify-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <img
              src="/images/blog/Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama.webp"
              alt="Roçadeira Lateral a Gasolina Toyama RT52L-B 52cc 2HP 2 Tempos"
              title="Roçadeira Toyama RT52L-B 51,7cc 2,0 HP"
              width={500}
              height={500}
              className="max-h-[350px] w-auto object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 border-l-4 border-[#16A34A] pl-3">
            Potência Elevada e Corte Agressivo por uma Fração do Custo Premium
          </h3>

          <div className="prose prose-lg text-gray-700 max-w-none my-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              A Toyama RT52L (comercializada na revisão atualizada RT52L-B) ocupa um espaço estratégico entre as máquinas residenciais leves e os modelos industriais de alto valor.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Seu grande diferencial reside na entrega bruta do motor de 51,7 cilindradas e 2,0 HP: ela encara pastagens fechadas, capim-braquiária alto e capoeiras ralas que fariam equipamentos menores de 26 cc ou 33 cc travarem.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O torque elevado elimina engasgos na faca de 3 pontas e mantém o ritmo contínuo de varredura, exigindo apenas que o operador utilize o colete duplo bem ajustado para distribuir os cerca de 8 kg de peso seco nos ombros.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para extrair toda essa força sem encurtar a vida útil do cilindro, o rigor ao preparar a mistura de óleo 2 tempos é obrigatório, transformando a RT52L em uma máquina extremamente produtiva e barata de manter.
            </p>
          </div>

          {/* Ficha Técnica – Manual do Fabricante */}
          <div className="my-8">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#1a1a1a] mb-4">
              📊 Ficha Técnica Oficial – Manual do Fabricante (Toyama RT52L / RT52L-B)
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="bg-[#1a1a1a] text-white uppercase font-bold">
                  <tr>
                    <th className="p-3.5">Especificação Técnica</th>
                    <th className="p-3.5 text-[#4ade80]">Dados do Equipamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900">Modelo e Linha</td>
                    <td className="p-3.5 text-gray-800 font-semibold">Toyama RT52L / RT52L-B (Série RT Semi-Profissional)</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Motor e Cilindrada</td>
                    <td className="p-3.5 font-bold text-[#166534]">Monocilíndrico 2 Tempos, Refrigerado a Ar • 51,7 cc (52 cc)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900">Potência Máxima</td>
                    <td className="p-3.5 font-bold text-[#166534]">2,0 HP (1,47 kW)</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Rotação de Potência / Máxima</td>
                    <td className="p-3.5 text-gray-700">7.500 a 9.000 RPM sob carga (até 11.000 RPM livre)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900">Sistema de Ignição e Partida</td>
                    <td className="p-3.5 text-gray-700">Ignição Eletrônica CDI • Partida Manual Retrátil</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Capacidade do Tanque</td>
                    <td className="p-3.5 text-gray-700">1,1 Litro (autonomia média de 50 a 65 minutos por tanque)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900">Tubo e Eixo de Transmissão</td>
                    <td className="p-3.5 text-gray-700">Tubo inteiriço em alumínio • Eixo cardã rígido com amortecimento</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Padrão da Ponteira Angular</td>
                    <td className="p-3.5 text-gray-700">Furo de lâmina universal 25,4 mm (1") • Rosca esquerda M10 x 1,25</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900">Peso Seco Aproximado</td>
                    <td className="p-3.5 text-gray-700">~8,0 a 8,2 kg (sem combustível e sem acessório de corte)</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Acessórios Inclusos na Caixa</td>
                    <td className="p-3.5 text-gray-700">Lâmina 3 pontas + Carretel de nylon + Colete duplo + Kit chaves</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Prós e Contras */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
              <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Check size={18} className="text-[#16A34A] shrink-0" /> Pontos Fortes (Prós)
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Excelente torque de 51,7 cc e 2,0 HP pelo menor preço da família 52cc Toyama.</li>
                <li>Eixo cardã inteiriço rígido que não perde potência e suporta lâmina de 3 pontas.</li>
                <li>Guidão duplo tipo bicicleta com suporte antivibração confortável.</li>
                <li>Compartilha 100% das peças mecânicas com a linha TBC52 (peças baratas em todo o país).</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <AlertTriangle size={18} className="text-red-600 shrink-0" /> Pontos de Atenção (Contras)
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                <li>Voltada ao uso semi-profissional (pede pausas de resfriamento entre tanques).</li>
                <li>Não deve ser adaptada com implementos multifuncionais não homologados.</li>
                <li>Exige ajuste correto do colete nos ombros para distribuir os ~8 kg de peso.</li>
              </ul>
            </div>
          </div>

          <div className="my-6">
            <AffiliateCard id="toyama-rt52l" />
          </div>
        </section>

        {/* ===================================================================
            6. BENEFÍCIOS NA PRÁTICA E INDICAÇÃO + ENTENDA O CONTEXTO TÉCNICO
            =================================================================== */}
        <section id="contexto-tecnico-rt52l" className="scroll-mt-24 my-14 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Benefícios na Prática e Indicação: Para Quem a RT52L Foi Feita?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                No campo real, a Toyama RT52L mostra seu valor quando entra em terrenos onde o mato passou de meio metro de altura: o tanque de 1,1 litro garante cerca de uma hora de roçada contínua por abastecimento, permitindo limpar de 800 m² a 1.500 m² de terreno por tanque conforme a densidade do capim.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Ela é indicada diretamente para três perfis de comprador: proprietários de sítios e chácaras de 1.000 m² a 20.000 m², zeladores de condomínios ou áreas industriais e roçadores autônomos que fazem serviços de limpeza de terrenos — veja nosso método de campo no guia de{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>
                .
              </p>
            </div>
          </div>

          {/* Entenda o Contexto Técnico */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Entenda o Contexto Técnico: Por Que 51,7 cc Faz Diferença?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Para entender por que a RT52L corta capoeira sem sofrer, vale olhar a engenharia do bloco 1E44F de 51,7 cc: diferente dos motores pequenos de 33 cc que dependem exclusivamente de altíssima rotação para cortar grama fina, o pistão de 44 mm da RT52L gera momento de inércia elevado no virabrequim.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Quando a faca de aço de 3 pontas bate num talo grosso na faixa de 7.500 a 9.000 RPM, essa massa em movimento impede que a rotação caia abaixo da faixa de acoplamento da embreagem centrífuga — compare o comportamento de cada faixa de motor em{' '}
                <a href="/qual-a-melhor-cilindrada-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor cilindrada para roçadeira
                </a>{' '}
                (e, se o seu terreno exigir ainda mais força bruta acima de 60 cc, veja nosso teste se a{' '}
                <a href="/rocadeira-toyama-tbc63-e-boa" className="text-[#166534] font-semibold hover:underline">
                  Toyama TBC63 de 3,5 HP é boa
                </a>
                ).
              </p>
            </div>

            <div className="my-10 flex justify-center">
              <BunnerDoMeiorocadeira />
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. ACESSÓRIOS PARA A ROÇADEIRA TOYAMA RT52L
            =================================================================== */}
        <section className="my-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Acessórios Compatíveis com a Roçadeira Toyama RT52L
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Graças à ponteira padrão de furo 25,4 mm (1 polegada) e rosca esquerda M10 x 1,25, a RT52L aceita os melhores acessórios de corte do mercado brasileiro:
            </p>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/manutencao-acessorios-toyama-rt52l.webp"
              alt="Bancada de oficina com roçadeira Toyama 52cc, ponteira de transmissão, lâmina de aço 3 pontas, carretel de nylon automático e chave de vela"
              title="Acessórios e manutenção de bancada da Roçadeira Toyama RT52L"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Conjunto versátil na bancada: a ponteira da RT52L trabalha tanto com cabeçote de nylon M10 x 1,25 quanto com lâminas e discos de furo 25,4 mm.
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit">
                <Sparkles size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-base">
                1. Carretel Automático e Fio 2,7 mm a 3,0 mm
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Para acabamento perto de muros, árvores e cercas, o motor de 2,0 HP gira com folga o{' '}
                <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  fio de nylon quadrado de 2,7 mm ou 3,0 mm
                </a>{' '}
                montado em um cabeçote reforçado (veja o ranking do{' '}
                <a href="/melhor-carretel-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor carretel para roçadeira
                </a>
                ).
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-base">
                2. Facas de 2 e 3 Pontas + Discos de Vídea
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                A faca de 3 pontas inclusa na caixa tritura braquiária alta e moitas fechadas, enquanto discos de 40 ou 80 dentes com vídea (confira em{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor lâmina para roçadeira
                </a>
                ) cortam talos lenhosos e mamona.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="bg-[#15803d] text-white p-2 rounded-xl w-fit">
                <ShieldAlert size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-base">
                3. EPIs e Cinto Duplo Almofadado
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Em máquinas de 52 cc, trabalhar sempre com viseira de tela ou policarbonato, abafador auricular, perneiras de couro/sintético, botina e cinto de dois ombros ajustado no quadril é obrigatório.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. COMO USAR E MANUTENÇÃO + ERROS COMUNS A EVITAR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Como Usar e Manutenção Preventiva da Toyama RT52L
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A durabilidade da RT52L ao longo dos anos depende diretamente de quatro hábitos simples desde o primeiro acionamento na bancada.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Primeiro: prepare o combustível em galão separado seguindo a medida exata em mililitros do nosso tutorial de{' '}
                <a href="/como-temperar-gasolina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como temperar a gasolina da roçadeira
                </a>{' '}
                e utilizando um lubrificante aprovado no guia de{' '}
                <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
                  qual o melhor óleo para roçadeira Toyama
                </a>
                .
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Segundo: a cada 20 horas de serviço, solte o parafuso lateral da caixa de transmissão e injete de 5g a 10g da{' '}
                <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor graxa para roçadeira (lítio para ponteira)
                </a>
                , além de lavar a espuma do filtro de ar com água e sabão neutro após dias de muita poeira.
              </p>
            </div>
          </div>

          {/* Erros Comuns */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Erros Comuns que Você Deve Evitar na Toyama RT52L
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <AlertTriangle size={20} className="text-red-600 shrink-0" /> O Que Estraga a Máquina Precoce
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-red-950 list-disc list-inside leading-relaxed">
                  <li>Medir óleo 2T na tampinha no olho ou usar gasolina velha guardada há mais de 30 dias.</li>
                  <li>Continuar puxando o cordão com o afogador fechado após o primeiro sinal (veja{' '}
                    <a href="/como-desafogar-rocadeira" className="text-[#166534] font-bold underline">
                      como desafogar a roçadeira
                    </a>).
                  </li>
                  <li>Acoplar enxadas rotativas pesadas ou acessórios não homologados no tubo da RT52L.</li>
                  <li>Trabalhar com lâmina cega ou desbalanceada que gera trepidação severa nos rolamentos.</li>
                </ul>
              </div>

              <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
                <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <Check size={20} className="text-[#16A34A] shrink-0" /> Prática Correta de Oficina
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#166534] list-disc list-inside leading-relaxed">
                  <li>Fazer uma pausa de 10 a 15 minutos na sombra a cada tanque de 1,1 litro esgotado.</li>
                  <li>Afiar as 3 pontas da faca por igual com lima chata para manter o equilíbrio centrífugo.</li>
                  <li>Esvaziar o tanque e funcionar o motor até apagar antes de guardar por mais de 15 dias.</li>
                  <li>Reapertar os parafusos Allen do guidão, da campana e da saia protetora após o 1º uso.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. BANNER DE CROSS-SELL (ACESSÓRIOS IDEAIS PARA A TOYAMA RT52L)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#166534] font-black text-xs uppercase tracking-wider block mb-1">
              Upgrades e Lubrificantes Homologados
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Os 3 Melhores Complementos para Sua Toyama RT52L
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Itens 100% compatíveis com o motor 51,7 cc e a ponteira M10 x 1,25 da RT52L para máxima durabilidade:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Óleo 2T Jaso Toyama 500ml */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Proteção do Cilindro 51,7cc
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Óleo Para Motores 2t Jaso Toyama 500ml.webp"
                    alt="Óleo Para Motores 2T Jaso Toyama 500ml"
                    title="Óleo 2 Tempos Original Toyama para RT52L"
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
                  Lubrificante original JASO FC que evita carbonização na vela e protege os anéis da RT52L em alta rotação.
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

            {/* Card 2: Carretel Toyama Easy Load Automático */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Rosca M10 x 1,25 Direta
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Carretel Toyama Easy Load Automático para Roçadeira.webp"
                    alt="Carretel Toyama Easy Load Automático para Roçadeira"
                    title="Carretel Easy Load Original Toyama para RT52L"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Carretel Toyama Easy Load Automático
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Recarregue o fio de nylon na RT52L girando apenas o botão central sem precisar desmontar as travas no campo.
                </p>
              </div>
              <a
                href={products["carretel-toyama-easy-load-automatico-para-rocadeira"]?.link || "https://meli.la/2FiNTvX"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Graxa 80g Stihl / Ponteira */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Engraxe a Cada 20 Horas
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Graxa 80g Stihl A Melhor - Lubrificação-thumb.webp"
                    alt="Bisnaga de Graxa 80g para Caixa de Transmissão de Roçadeira"
                    title="Graxa para Ponteira e Caixa de Transmissão da RT52L"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Graxa Especial p/ Ponteira (80g)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Essencial para manter as engrenagens cônicas da caixa de transmissão da RT52L frias e sem desgaste metálico.
                </p>
              </div>
              <a
                href={products["graxa-80g-stihl-a-melhor-lubrificacao"]?.link || "https://meli.la/1fD54Tn"}
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
            10. FAQ – PERGUNTAS FREQUENTES (ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            FAQ – Perguntas Frequentes sobre a Toyama RT52L
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
            11. RESUMO FINAL (BOX ESCURO NOBRE) + DICA DE OFICINA + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Resumo Final: A Roçadeira Toyama RT52L Vale a Pena?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                A Toyama RT52L (RT52L-B) é a escolha certeira para quem precisa do torque de um motor 51,7 cc e 2,0 HP em terrenos densos, chácaras e sítios sem pagar os valores elevados das linhas industriais.
              </p>
              <p className="mb-4 leading-relaxed">
                Com eixo cardã rígido, tanque de 1,1 litro, kit completo de fábrica e peças de reposição baratas em qualquer oficina do Brasil, ela transforma o desbaste de braquiária e capoeira em uma tarefa rápida e econômica.
              </p>
              <p className="mb-0 leading-relaxed">
                Respeite a dosagem do óleo 2 tempos, engraxe a ponteira a cada 20 horas e tenha um equipamento valente no galpão por muitos anos!
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
              Segredo de Oficina do Carlos Henrique: O Reaperto Obrigatório da RT52L Após o 1º Tanque
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Em toda roçadeira nova de 51,7 cc como a RT52L, a primeira hora de dilatação térmica e vibração faz as juntas e buchas de borracha se acomodarem.
              </p>
              <p className="mb-0">
                Assim que você terminar de queimar o primeiro tanque de combustível e o motor esfriar, pegue a chave Allen do kit e confira o aperto dos 4 parafusos da campana da embreagem, dos 2 parafusos do coletor do carburador e da abraçadeira do guidão: esse cuidado de 3 minutos evita entrada falsa de ar e mantém a máquina justa como um relógio.
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

export default RocadeiraToyamaRt52lEBoa;
