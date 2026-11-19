import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { products, type ProductId } from '../../data/productsrocadeira';
import { BunnerDoMeiorocadeira as BunnerDoMeio } from './BunnerDoMeiorocadeira';

// Ícones SVG Inline Leves (Zero peso extra no bundle JS, PageSpeed 100)
const Check = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const X = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ArrowRight = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChevronDown = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const Sparkles = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);

const HelpCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ShoppingBag = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

interface ShowcaseItem {
  id: ProductId;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
  thumbSrc: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "rocadeira-husqvarna-131r",
    anchorId: "visao-geral-131r",
    shortName: "Roçadeira Husqvarna 131R (32,6 cm³ / 7,0 kg)",
    category: "Chácaras, Sítios e Semiprofissional",
    score: "9.5 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Husqvarna-thumb.webp"
  },
  {
    id: "rocadeira-stihl-fs-160",
    anchorId: "husqvarna-131r-vs-stihl-fs-160",
    shortName: "Roçadeira Stihl FS 160 (30,8 cm³ / 1,65 HP)",
    category: "Rival Direta / Maior Pico de Giro",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Stihl Fs 160-thumb.webp"
  },
  {
    id: "rocadeira-husqvarna-143rs",
    anchorId: "husqvarna-143rs-profissional",
    shortName: "Husqvarna 143RS Profissional (41,5 cm³ / 2,0 HP)",
    category: "Fazendas e Uso Rural Severo (6 a 8h/dia)",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Husqvarna 143rs-thumb.webp"
  }
];

const technicalSpecs: { label: string; value: string; highlight?: boolean }[] = [
  { label: "Modelo", value: "Husqvarna 131R" },
  { label: "Motorização", value: "2 Tempos a Gasolina (Mistura 50:1)" },
  { label: "Cilindrada (Diâmetro x Curso)", value: "32,6 cm³ (36 mm x 32 mm)", highlight: true },
  { label: "Potência e Torque Máximo", value: "0,9 kW (1,2 HP) e 1,15 Nm a 7.000 rpm", highlight: true },
  { label: "Rotações (Lenta / Engate / Saída)", value: "2.700–3.000 rpm / 4.320 rpm / 11.000 rpm (eixo)" },
  { label: "Consumo e Tanque", value: "550 g/kWh — Tanque de 0,9 litro (45 a 55 min de autonomia)" },
  { label: "Vela de Ignição", value: "NGK BPM7A (folga do eletrodo de 0,6 mm)" },
  { label: "Transmissão e Tubo", value: "Eixo rígido de 9 estrias / Tubo de 28 mm (1.430 mm) / Relação 1:1,35 (30°)", highlight: true },
  { label: "Peso (Sem conjunto de corte)", value: "7,0 kg" },
  { label: "Vibração e Ruído Operacional", value: "4,34 m/s² (alça traseira) / 92,4 dB(A) no ouvido do operador" },
  { label: "Itens de Série", value: "Lâmina 2 pontas (Multi 330-2), cinto simples e kit de chaves" },
  { label: "Aplicação Recomendada", value: "Uso doméstico exigente, chácaras e semiprofissional" }
];

const prosList: string[] = [
  "Peso reduzido de 7,0 kg com ótimo balanceamento axial",
  "Tampa da embreagem em metal e protetor de tanque em aço",
  "Transmissão cônica reforçada e eixo rígido de 9 estrias",
  "Partida leve (SmartStart® + Primer) e filtro sem uso de chaves",
  "Baixo índice de vibração (4,34 m/s²) e ampla rede de peças no Brasil"
];

const consList: string[] = [
  "Carretel de fio de nylon não incluso em parte dos lotes de fábrica",
  "Cinto de sustentação simples (de um ombro só) cansa em jornadas longas",
  "Tanque de 0,9 L exige reabastecimento a cada 50 minutos de uso",
  "Garantia legal de 90 dias (requer entrega técnica e revisão para 1 ano)",
  "Motor de 32,6 cm³ não é dimensionado para desmatamento pesado contínuo"
];

const crossSellProducts = {
  oleo2t: {
    link: products["kit-misturador-oleo-2t"]?.link || "#",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  },
  fioNylon: {
    link: products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "#",
    image: "/images/blog/thumbs/fio-duraline-cross.webp"
  },
  kitEpi: {
    link: products["kit-seguranca-completo-epis"]?.link || "#",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  }
};

export const RocadeiraHusqvarna131rEBoa: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<'chacara' | 'comparativo' | 'pesado' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: string[] }[] = [
    {
      question: "A Roçadeira Husqvarna 131R é adequada para iniciantes?",
      answer: [
        "Sim.",
        "O peso contido de 7,0 kg, a partida aliviada SmartStart® e o filtro de acesso sem ferramentas tornam a operação e o cuidado básico muito simples para quem está começando."
      ]
    },
    {
      question: "Quais tipos de vegetação posso cortar com a Husqvarna 131R?",
      answer: [
        "Com a lâmina de 2 pontas original, ela corta capim alto, braquiária, ervas daninhas grossas e pequenos arbustos.",
        "Instalando um carretel de nylon (adquirido à parte), faz todo o acabamento de grama fina e bordas de canteiros."
      ]
    },
    {
      question: "Qual o combustível e a mistura de óleo corretos para a 131R?",
      answer: [
        "Gasolina comum fresca misturada com óleo 2 tempos de qualidade (preferencialmente Husqvarna LS+) na proporção 50:1 — ou seja, 20 ml de óleo para cada 1 litro de gasolina."
      ]
    },
    {
      question: "Qual é a vela de ignição original da Husqvarna 131R?",
      answer: [
        "Utiliza a vela NGK BPM7A, calibrada com folga (gap) de 0,6 mm no eletrodo, encontrada facilmente em qualquer autopeças ou oficina agrícola."
      ]
    },
    {
      question: "Quanto tempo dura um tanque cheio na Husqvarna 131R?",
      answer: [
        "O tanque de 0,9 litro entrega autonomia média de 45 a 55 minutos de trabalho em rotação de corte."
      ]
    },
    {
      question: "Qual é a durabilidade real da Roçadeira Husqvarna 131R?",
      answer: [
        "Graças à tampa de embreagem metálica, eixo rígido de 9 estrias e engrenagem cônica reforçada, a máquina passa facilmente de 5 a 8 anos de vida útil quando lubrificada e abastecida corretamente."
      ]
    },
    {
      question: "A roçadeira possui algum sistema de proteção para o motor e tanque?",
      answer: [
        "Sim.",
        "Conta com uma placa metálica inferior que blinda o tanque contra batidas no chão e um sistema de filtragem eficiente que protege o cilindro contra a aspiração de poeira."
      ]
    },
    {
      question: "Preciso de ferramentas para a manutenção básica da roçadeira?",
      answer: [
        "Para limpar o filtro de ar, não: a tampa abre manualmente com um clique.",
        "Para trocar a lâmina ou soltar a vela, basta usar a chave combinada que já acompanha o kit na caixa."
      ]
    },
    {
      question: "A Husqvarna 131R vem com carretel de fio de nylon incluso?",
      answer: [
        "No pacote padrão de fábrica, ela vem apenas com a lâmina de 2 pontas (Multi 330-2) e cinto simples.",
        "Alguns lojistas incluem o carretel de nylon em kits promocionais — confira sempre a descrição do anúncio."
      ]
    },
    {
      question: "Como funciona a garantia de até 1 ano da Husqvarna 131R?",
      answer: [
        "A máquina possui 90 dias de garantia legal padrão.",
        "Realizando a Entrega Técnica gratuita antes do primeiro uso e uma Revisão Preventiva entre o 5º e o 7º mês em uma assistência autorizada Husqvarna, a garantia é estendida para 1 ano (12 meses)."
      ]
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Único H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/roçadeira husqvarna 131r é boa.webp"
            alt="Roçadeira Husqvarna 131R é boa em 2026 — Análise Completa de Oficina e Campo"
            title="Roçadeira Husqvarna 131R é boa em 2026 — Análise Completa"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Roçadeira Husqvarna 131R é boa em 2026 <br />
            <span className="text-[#16A34A]">— Análise Completa</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-2 hover:text-[#16A34A] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform object-cover"
                />
                Carlos Henrique Menezes
              </a>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-xs sm:text-sm">Técnico em Mecânica de Equipamentos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Container Central de Leitura */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO CURTA (1 ponto final = 1 parágrafo limpo)
            =================================================================== */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Avaliar se a roçadeira Husqvarna 131R é boa exige olhar além da carenagem laranja e analisar como o projeto mecânico se comporta sob carga contínua.
          </p>
          <p>
            Na bancada da oficina, o que define a longevidade de uma máquina de 32,6 cm³ é a qualidade de fundição do cilindro, a dissipação térmica da embreagem e a resistência da caixa de transmissão contra impactos.
          </p>
          <p>
            Nesta análise técnica completa, desmontamos os números de engenharia, o consumo real, o índice de vibração e o custo de manutenção da Husqvarna 131R para você decidir com segurança se ela dimensiona o que o seu terreno exige.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#16A34A] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: A Husqvarna 131R é a máquina certa para você?</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Selecione o perfil do seu terreno para ver o diagnóstico mecânico direto:
          </p>

          <div className="grid sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('chacara')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'chacara'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Chácara, Sítio ou Lote Urbano (Leveza 7 kg)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('comparativo')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'comparativo'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Dúvida entre Husqvarna 131R vs Stihl FS 160</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('pesado')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'pesado'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Fazenda, Braquiária Alta e Uso Diário (6-8h)</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/80 border border-gray-700 rounded-xl">
              {quizProfile === 'chacara' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Diagnóstico de Bancada: A{' '}
                  <a href="#visao-geral-131r" className="text-[#4ade80] underline font-bold">
                    Husqvarna 131R (32,6 cm³ / 1,2 HP)
                  </a>{' '}
                  é a escolha exata — entrega embreagem metálica, eixo rígido de 9 estrias e baixa vibração (4,34 m/s²) pesando apenas 7,0 kg.
                </p>
              )}
              {quizProfile === 'comparativo' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Diagnóstico de Bancada: Veja o comparativo direto com a{' '}
                  <a href="#husqvarna-131r-vs-stihl-fs-160" className="text-[#4ade80] underline font-bold">
                    Roçadeira Stihl FS 160
                  </a>{' '}
                  para decidir entre o menor consumo e manutenção sem chaves da 131R ou o maior pico de potência (1,65 HP) da Stihl.
                </p>
              )}
              {quizProfile === 'pesado' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Diagnóstico de Bancada: Para batente pesado de 6 a 8 horas diárias em pasto fechado, suba de categoria para a{' '}
                  <a href="#husqvarna-143rs-profissional" className="text-[#4ade80] underline font-bold">
                    Husqvarna 143RS Profissional (41,5 cm³ / 2,0 HP)
                  </a>
                  , que já traz cinto duplo e carretel de série.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE RESUMO DOS PRODUTOS (Miniaturas Otimizadas 60x60)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: Husqvarna 131R e Principais Alternativas em 2026
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Especificação</th>
                  <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[105px] sm:w-[140px]">Oferta</th>
                </tr>
              </thead>
              <tbody>
                {showcaseItems.map((item) => {
                  const registeredProduct = products[item.id];
                  const displayName = registeredProduct?.name || item.shortName;
                  const affiliateUrl = registeredProduct?.link || '#';

                  return (
                    <tr key={item.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumbSrc}
                            alt={displayName}
                            title={displayName}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <a
                          href={`#${item.anchorId}`}
                          className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block"
                        >
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-gray-600 mt-1 md:hidden">
                          {item.category}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          {item.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="bg-[#15803d] hover:bg-[#166534] text-white font-bold no-underline text-xs py-2 px-3 rounded-lg whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-4 shadow-sm active:scale-95"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================================================================
            5. VISÃO GERAL RÁPIDA — HUSQVARNA 131R + TABELA TÉCNICA
            =================================================================== */}
        <section id="visao-geral-131r" className="scroll-mt-24 mb-16">
          <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
            Análise de Bancada e Campo
          </span>

          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
            Visão Geral Rápida — Husqvarna 131R
          </h2>

          <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <img
              src="/images/blog/Roçadeira Husqvarna.webp"
              alt="Roçadeira Husqvarna 131R a gasolina 32,6 cm³ com lâmina de 2 pontas"
              title="Roçadeira Husqvarna 131R"
              width={800}
              height={533}
              className="max-h-80 w-auto object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Projetada para preencher a lacuna entre os aparadores domésticos frágeis e as roçadeiras florestais pesadas, a Husqvarna 131R combina um motor 2 tempos de 32,6 cm³ (1,2 HP) a um chassi enxuto de 7,0 kg.
            </p>
            <p>
              Na prática mecânica, seu conjunto utiliza componentes de linha profissional — como tampa de embreagem em liga metálica, eixo rígido de 9 estrias em tubo de 28 mm e transmissão cônica reforçada — para dar conta da limpeza de chácaras, sítios e manutenção urbana sem sobrecarregar o operador.
            </p>
          </div>

          <AffiliateCard id="rocadeira-husqvarna-131r" />

          {/* Tabela de Especificações Técnicas de Engenharia */}
          <div className="overflow-x-auto mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3.5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-2/5">
                    Especificação
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Dados Técnicos de Engenharia
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {technicalSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                    <th className="px-4 py-3 bg-gray-50/70 text-left text-sm font-semibold text-gray-800">
                      {spec.label}
                    </th>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {spec.highlight && <Check className="text-[#16A34A] inline mr-1.5" size={18} />}
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            6. CARACTERÍSTICAS TÉCNICAS DA ROÇADEIRA HUSQVARNA 131R
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Características Técnicas da Roçadeira Husqvarna 131R
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#166534] mb-4 border-l-4 border-[#16A34A] pl-4">
                Potência e Eficiência
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  O motor de 32,6 cm³ da 131R trabalha com diâmetro de pistão de 36 mm e curso de 32 mm, uma configuração quase "quadrada" que favorece a entrega rápida de giro e estabiliza a potência máxima de 1,2 HP (0,9 kW) já a 7.000 rpm.
                </p>
                <p>
                  O torque de 1,15 Nm é multiplicado pela relação de transmissão de 1:1,35 na ponteira, permitindo que a lâmina vença capim denso e vegetação fibrosa de médio porte sem que a rotação caia abaixo da faixa de engate da embreagem (4.320 rpm).
                </p>
                <p>
                  No quesito eficiência energética, o carburador calibrado apresenta consumo específico de 550 g/kWh.
                </p>
                <p>
                  Com o tanque de 0,9 litro abastecido na proporção correta de 50:1 (20 ml de óleo 2T para cada litro de gasolina comum), a máquina entrega entre 45 e 55 minutos de trabalho contínuo em regime severo antes de pedir reabastecimento.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#166534] mb-4 border-l-4 border-[#16A34A] pl-4">
                Leveza e Ergonomia
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Com 7,0 kg de peso seco, a Husqvarna 131R preserva a coluna e as articulações em terrenos inclinados.
                </p>
                <p>
                  Do ponto de vista biomecânico, o destaque está no isolamento antivibração instalado no suporte do guidão, que mantém a vibração transmitida na alça em 4,34 m/s² — um índice baixo para a categoria a combustão, reduzindo o formigamento nas mãos e a fadiga muscular ao longo do turno.
                </p>
                <p>
                  O tubo de alumínio de 28 mm de diâmetro por 1.430 mm de comprimento garante o ponto de equilíbrio exato quando engatado ao cinto de sustentação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. ESTRUTURA E QUALIDADE DE MATERIAL
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Estrutura e Qualidade de Material
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <p>
              É na bancada que a construção da 131R se separa das máquinas importadas genéricas de 43 cc ou 52 cc.
            </p>
            <p>
              Enquanto modelos de baixo custo utilizam carcaça plástica que derrete se o operador trabalhar com a rotação amarrada, a Husqvarna equipa a 131R com tampa de embreagem em metal fundido, garantindo dissipação térmica e alinhamento perfeito do tambor.
            </p>
            <p>
              A caixa de engrenagens (ponteira) possui coroa e pinhão cônicos forjados com ângulo de 30°, projetados para suportar o tranco da lâmina de aço a 11.000 rpm sem criar folga nos rolamentos.
            </p>
            <p>
              Além disso, uma chapa metálica parafusada sob o tanque protege o reservatório contra perfurações por pedras e tocos no solo.
            </p>
          </div>
        </section>

        {/* ===================================================================
            8. RECURSOS E TECNOLOGIAS EXCLUSIVAS (+ IMAGEM CONTEXTUAL 1)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Recursos e Tecnologias Exclusivas
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Bomba de Combustível para Partida a Frio
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Em motores 2 tempos que ficam dias parados, a gasolina evapora da cuba do carburador e cria bolsas de ar na linha de combustível.
                </p>
                <p>
                  O bulbo injetor (primer) da 131R purga esse ar manualmente com três ou quatro toques antes da partida, enchendo o circuito primário de combustível fresco e evitando que o operador dê dezenas de puxadas a seco na cordinha pela manhã.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Tecnologia SmartStart®
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  O sistema SmartStart® utiliza uma mola auxiliar de compensação no conjunto retrátil e otimiza o alívio de compressão na partida, reduzindo em até 40% a força necessária para puxar o cordão de arranque.
                </p>
                <p>
                  Além de poupar o ombro do usuário, esse mecanismo evita a quebra precoce dos cachorretes (trincos) da polia de partida por trancos bruscos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#166534] mb-6 border-l-4 border-[#16A34A] pl-4">
              Acesso Rápido ao Filtro
            </h3>

            <div className="w-full flex justify-center mb-8">
              <img
                src="/images/blog/acesso-rapido-filtro-ar-husqvarna-131r.webp"
                alt="Mecânico abrindo manualmente a tampa do filtro de ar e inspecionando o bulbo primer da roçadeira na bancada"
                title="Acesso rápido sem ferramentas ao filtro de ar da Husqvarna 131R"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                A maior causa de perda de compressão e riscamento de camisa e pistão em roçadeiras é a entrada de terra fina pela admissão.
              </p>
              <p>
                Para facilitar a rotina no campo, a tampa do filtro de ar da 131R possui trava de abertura rápida manual, dispensando chaves de fenda ou torx.
              </p>
              <p>
                Você abre a tampa em segundos no próprio lote, bate a poeira ou lava o elemento filtrante e mantém a relação ar-combustível sempre limpa.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. APLICAÇÕES DA ROÇADEIRA HUSQVARNA 131R
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Aplicações da Roçadeira Husqvarna 131R
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Pequenas e Médias Áreas
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Dimensionada para propriedades de pequeno a médio porte — como chácaras, sítios, pomares e lotes urbanos —, a 131R entrega muito mais agilidade de manobra do que máquinas pesadas de 8,5 kg.
                </p>
                <p>
                  Ela contorna troncos de árvores frutíferas, limpa taludes de valetas e apara bordas de cercas sem exigir esforço excessivo para controlar o pêndulo lateral do guidão.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Uso Profissional e Residencial
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  O projeto híbrido atende dois perfis com folga: para o proprietário residencial, oferece partida macia e mecânica que não desregula a cada uso; para o jardineiro prestador de serviços ou equipes de conservação de condomínios, entrega componentes internos que aguentam rodar horas seguidas sob sol forte com facilidade de reposição de peças nas autorizadas brasileiras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PONTOS POSITIVOS E NEGATIVOS (+ IMAGEM CONTEXTUAL 2)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Pontos Positivos e Negativos
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <Check size={22} className="text-[#16A34A] shrink-0" /> Pontos Positivos (Bancada e Campo)
              </h3>
              <ul className="space-y-3 text-green-900 text-sm sm:text-base list-disc list-inside">
                {prosList.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <X size={22} className="text-red-600 shrink-0" /> Pontos de Atenção (Limitações)
              </h3>
              <ul className="space-y-3 text-red-900 text-sm sm:text-base list-disc list-inside">
                {consList.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
                Ausência do Cabeçote de Fio de Nylon
              </h3>

              <div className="w-full flex justify-center mb-8">
                <img
                  src="/images/blog/lamina-2-pontas-e-carretel-nylon-husqvarna-131r.webp"
                  alt="Ponteira de transmissão metálica com lâmina de aço de 2 pontas ao lado de um carretel de fio de nylon e chave combinada na bancada"
                  title="Lâmina de 2 pontas original e opção de cabeçote de fio de nylon para a Husqvarna 131R"
                  width={800}
                  height={533}
                  className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Na configuração padrão de fábrica, a 131R sai da caixa equipada com a lâmina de aço de 2 pontas (Multi 330-2), sem o carretel de nylon.
                </p>
                <p>
                  Se o seu foco inclui acabamento de gramados rente a muros, calçadas e árvores, confirme se o anúncio do vendedor inclui o cabeçote como brinde ou reserve orçamento para adquirir um carretel compatível (rosca M10 x 1,25 esquerda), como o próprio T25 ou T35 da Husqvarna.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Peso com Equipamento Completo e Cinto Simples
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Embora os 7,0 kg de peso seco sejam excelentes, somar 0,9 litro de combustível e a lâmina metálica eleva a massa operacional para perto de 8,0 kg.
                </p>
                <p>
                  Como o kit original acompanha apenas uma alça tiracolo simples (que apoia toda a carga em um único ombro), operadores que pretendem roçar por mais de duas horas seguidas devem investir em um cinto duplo almofadado para distribuir o peso no quadril.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 1 do Banner do Meio */}
        <BunnerDoMeio />

        {/* ===================================================================
            11. AVALIAÇÕES E OPINIÕES DE USUÁRIOS
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Avaliações e Opiniões de Usuários
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#166534] mb-4 border-l-4 border-[#16A34A] pl-4">
                O que Quem Comprou Está Dizendo sobre a Husqvarna 131R
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Nos relatos de compradores verificados após meses de operação, os elogios concentram-se na estabilidade térmica do motor — que trabalha o tanque inteiro sem superaquecer ou perder a lenta — e no baixo consumo de gasolina.
                </p>
                <p>
                  Proprietários de chácaras destacam a rapidez na montagem do tubo e do guidão e a confiança de dar a partida de primeira mesmo após semanas guardada.
                </p>
              </div>

              <AffiliateCard id="rocadeira-husqvarna-131r" />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#166534] mb-4 border-l-4 border-[#16A34A] pl-4">
                Feedback de Profissionais e Amadores
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Entre operadores profissionais, o consenso recai sobre a robustez da ponteira de transmissão e da campânula metálica, que não abrem folga mesmo trabalhando com lâmina de duas pontas em terreno irregular.
                </p>
                <p>
                  Já entre usuários iniciantes, o ponto mais elogiado é a leveza da corda do SmartStart®, enquanto a crítica recorrente vai para a alça simples de fábrica e a necessidade de comprar o carretel de nylon separadamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. COMPARAÇÃO COM OUTRAS ROÇADEIRAS DO MERCADO (FS 160 e 143RS)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-8 border-b-4 border-[#16A34A] pb-3">
            Comparação com Outras Roçadeiras do Mercado
          </h2>

          {/* Comparativo 1: Husqvarna 131R vs. Stihl FS 160 */}
          <div id="husqvarna-131r-vs-stihl-fs-160" className="scroll-mt-24 mb-14">
            <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
              Duelo Clássico de 30–33 cc
            </span>

            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
              Roçadeira Husqvarna 131R vs. Stihl FS 160
            </h3>

            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/Roçadeira Stihl Fs 160.webp"
                alt="Roçadeira Stihl FS 160 a gasolina concorrente direta da Husqvarna 131R"
                title="Roçadeira Stihl Fs 160"
                width={800}
                height={533}
                className="max-h-80 w-auto object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                O embate entre a Husqvarna 131R e a Stihl FS 160 coloca frente a frente duas escolas de engenharia:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-bold text-[#166534] mb-3">
                  Motor e Potência
                </h4>
                <p className="text-gray-700 leading-relaxed text-base">
                  A Stihl FS 160 extrai 1,65 HP de um motor de 30,8 cm³, entregando mais potência de pico para mato fechado, enquanto a Husqvarna 131R entrega 1,2 HP em 32,6 cm³, trabalhando com taxa de compressão mais mansa e menor consumo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-bold text-[#166534] mb-3">
                  Construção e Peso
                </h4>
                <p className="text-gray-700 leading-relaxed text-base">
                  Ambas pesam cerca de 7,0 kg a 7,4 kg e utilizam transmissão rígida de alta durabilidade, mas a 131R leva vantagem prática no acesso ao filtro sem ferramentas e no custo inicial de aquisição mais competitivo.
                </p>
              </div>
            </div>

            <AffiliateCard id="rocadeira-stihl-fs-160" />
          </div>

          {/* Comparativo 2: Roçadeira Husqvarna 143RS Profissional */}
          <div id="husqvarna-143rs-profissional" className="scroll-mt-24 pt-12 border-t border-gray-200">
            <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
              Upgrade para Trabalho Pesado Intensivo
            </span>

            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
              Roçadeira Husqvarna 143RS Profissional
            </h3>

            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/Husqvarna 143rs.webp"
                alt="Roçadeira Husqvarna 143RS Profissional de 41,5 cm³ e 2,0 HP"
                title="Husqvarna 143rs"
                width={800}
                height={533}
                className="max-h-80 w-auto object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Se a sua demanda envolve limpeza diária de fazendas, pastagens altas de braquiária ou acostamentos por 6 a 8 horas diárias, a 131R ficará subdimensionada.
              </p>
              <p>
                Nesse cenário, o salto técnico correto dentro da marca é a Husqvarna 143RS, que entrega motor de 41,5 cm³ (2,0 HP), torque de 2,3 Nm e já acompanha cinto duplo ergonômico e carretel de nylon de série.
              </p>
            </div>

            <AffiliateCard id="rocadeira-husqvarna-143rs" />
          </div>
        </section>

        {/* ===================================================================
            13. BANNER DE CROSS-SELL (ACESSÓRIOS RECOMENDADOS)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-[#16A34A] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              Complementos Essenciais para Operar Sua Husqvarna 131R
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-base">
            Garanta a mistura perfeita de 50:1, proteção individual segundo a NR 31 e máximo rendimento no corte:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Mistura 50:1 Precisa
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.oleo2t.image}
                    alt="Kit Misturador Dosador e Óleo 2 Tempos para Roçadeira"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit Misturador + Óleo 2T
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Fundamental para medir 20 ml de óleo por litro de gasolina sem erro, preservando camisa e pistão da 131R.
                </p>
              </div>
              <a
                href={crossSellProducts.oleo2t.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-2 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Acabamento Limpo
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.fioNylon.image}
                    alt="Fio de Nylon Duraline Quadrado para Roçadeira"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Fio de Nylon Profissional
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Alta resistência contra abrasão para quando você instalar um cabeçote de nylon e aparar cantos de muros e cercas.
                </p>
              </div>
              <a
                href={crossSellProducts.fioNylon.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-2 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Segurança NR 31
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.kitEpi.image}
                    alt="Kit de Segurança Completo com Viseira, Protetor Auricular e Perneira"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit Completo de EPIs
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Protege rosto, ouvidos (92,4 dB) e canelas contra detritos arremessados pela lâmina Multi 330-2 a 11.000 rpm.
                </p>
              </div>
              <a
                href={crossSellProducts.kitEpi.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-2 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            14. GUIA DE ESCOLHA, TERRENOS, FIO VS LÂMINA E ROÇADEIRA USADA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            O que Você Precisa Saber para Escolher a Melhor Roçadeira a Gasolina
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Antes de fechar negócio, cruze quatro fatores técnicos com a sua rotina:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Cilindrada x Densidade do Mato
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Motores de 25 cc a 33 cc (como a 131R) são ideais para grama, capim médio e manutenção de chácaras.
                </p>
                <p>
                  Para capoeira grossa e pasto abandonado em grandes extensões, exija máquinas acima de 40 cc.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Transmissão e Embreagem
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Prefira tubos de 28 mm com eixo cardan rígido estriado e carcaça de embreagem metálica se for usar lâminas de impacto.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Índice de Vibração e Cinto
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Verifique se o guidão possui coxins ou isolamento antivibração e utilize colete duplo para preservar a lombar.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Assistência e Peças
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Comprar marcas com catálogo aberto de peças no Brasil (pistão, anéis, bobina, reparo de carburador) evita que a máquina vire sucata por falta de um simples retentor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Posso Usar a Roçadeira a Gasolina em Qualquer Terreno?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Sim, a autonomia livre de cabos permite operar a 131R em barrancos, valetas, encostas e fundos de lote, desde que você adapte a técnica e o acessório:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Terrenos inclinados
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Ajuste o gancho do cinto para que a máquina fique equilibrada e trabalhe sempre em faixas horizontais, nunca de baixo para cima no barranco.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Terrenos pedregosos
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Evite bater a lâmina contra pedras para não trincar o aço nem gerar rebote (kickback); mantenha a proteção defletora sempre instalada na ponteira.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                EPIs Obrigatórios (NR 31)
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Nunca ligue a máquina sem viseira facial ou óculos de segurança, protetor auricular (o ruído chega a 92,4 dB no ouvido), perneiras de couro/sintéticas, luvas e botas fechadas.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Qual é a Melhor Roçadeira para Áreas Grandes e Vegetação Densa?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <p>
              Para áreas acima de 1 a 2 hectares com mato alto, talos lenhosos e uso profissional ininterrupto, as melhores roçadeiras são os modelos de 40 cm³ a 53 cm³ (como a Husqvarna 143RS, 236R ou 541RS).
            </p>
            <p>
              A Husqvarna 131R (32,6 cm³) encara bem o mato denso em áreas menores e ritmo moderado, mas forçá-la o dia inteiro em pasto pesado acelerará o desgaste de embreagem e anéis de segmento.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Qual a Diferença entre Roçadeira com Fio e com Lâmina?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Fio de Nylon
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Corta por velocidade centrífuga e chicoteamento.
                </p>
                <p>
                  É obrigatório para aparar grama e limpar rente a muros, cercas de arame, árvores e meio-fio sem risco de rebote.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Lâmina Metálica (2 ou 3 pontas)
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Corta por impacto e cisalhamento.
                </p>
                <p>
                  A lâmina Multi 330-2 que acompanha a 131R é indispensável para derrubar capim grosso, tiririca alta e pequenos arbustos em campo aberto, exigindo distância segura de pedras e obstáculos rígidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Por Que Evitar Roçadeira a Gasolina Usada?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-200">
            <p>
              Na oficina, mais de 70% das roçadeiras 2 tempos compradas usadas escondem defeitos graves causados por mistura errada de óleo ou gasolina velha.
            </p>
            <p>
              Sem abrir o motor, você não vê se a camisa do cilindro está riscada por superaquecimento, se os retentores do virabrequim estão ressecados dando entrada falsa de ar ou se a caixa de transmissão rodou seca sem graxa.
            </p>
            <p>
              Somando o valor de retífica, carburador novo, embreagem e a falta de garantia, comprar uma Husqvarna 131R nova na caixa sai mais barato e garante anos de motor lacrado.
            </p>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            15. 10 PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            10 Perguntas Frequentes sobre a Roçadeira Husqvarna 131R
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Respostas diretas de bancada para as principais dúvidas sobre mistura 50:1, vela, autonomia, acessórios e garantia da Husqvarna 131R.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-gray-900 hover:bg-gray-100/80 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className="w-6 h-6 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-600 shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-600 shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 pt-3 text-gray-700 border-t border-gray-200 space-y-3 bg-white">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed text-sm sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            16. CONSIDERAÇÕES FINAIS E RECOMENDAÇÕES MECÂNICAS DE USO
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          {/* Avatar de Autoridade E-E-A-T */}
          <div className="w-full flex justify-center mb-8">
            <a href="/author/carlos-henrique/" aria-label="Ver perfil técnico de Carlos Henrique Menezes">
              <img
                src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                alt="Carlos Henrique Menezes"
                width={128}
                height={128}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#16A34A] hover:scale-105 transition-transform duration-200 shadow-md"
                loading="lazy"
              />
            </a>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden mb-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-black text-[#16A34A] tracking-tight">
                Considerações Finais: Vale a Pena Comprar a Husqvarna 131R?
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Analisando a construção interna e a entrega no campo, a Husqvarna 131R vale muito a pena e representa um dos projetos mecânicos mais confiáveis na faixa das 32 cilindradas em 2026.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Ela foge da armadilha das máquinas descartáveis ao entregar embreagem revestida em metal, transmissão cônica robusta e partida leve em um conjunto de apenas 7 kg.
              </p>

              <div className="pt-4 border-t border-gray-800">
                <h3 className="text-2xl font-bold text-[#4ade80] mb-3">
                  Para quem a 131R é indicada?
                </h3>
                <p className="text-gray-200 text-base leading-relaxed mb-3">
                  É a compra ideal para proprietários de chácaras, sítios, lotes urbanos e jardineiros profissionais que buscam uma roçadeira leve, econômica e que não vive parada em oficina.
                </p>
                <p className="text-gray-200 text-base leading-relaxed">
                  Se você precisa manter terrenos de pequeno a médio porte limpos sem sofrer com máquinas pesadas e vibrantes, ela resolve o serviço com sobra — deixando os modelos pesados acima de 40 cc apenas para quem trabalha com desmatamento rural severo.
                </p>
              </div>
            </div>
          </div>

          {/* Recomendações Mecânicas para Uso e Vida Útil Máxima */}
          <div className="p-6 sm:p-8 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-2xl shadow-sm text-gray-800">
            <div className="flex items-center gap-2.5 mb-5">
              <Wrench className="text-[#166534] shrink-0" size={24} />
              <h3 className="text-2xl font-bold text-[#166534]">
                Recomendações mecânicas para uso e vida útil máxima
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-[#16A34A]/20 shadow-sm">
                <h4 className="font-bold text-[#166534] text-base mb-2 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#16A34A] shrink-0" /> Não guarde gasolina no tanque
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  Terminou a roçada e só vai usar a máquina no mês seguinte?
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Esvazie o tanque e ligue o motor até apagar por falta de combustível, evitando que a gasolina velha apodreça os diafragmas do carburador.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#16A34A]/20 shadow-sm">
                <h4 className="font-bold text-[#166534] text-base mb-2 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#16A34A] shrink-0" /> Engraxe a ponteira a cada 20 horas
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Solte o parafuso lateral da caixa de transmissão e aplique graxa específica para engrenagens de alta rotação e temperatura.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#16A34A]/20 shadow-sm">
                <h4 className="font-bold text-[#166534] text-base mb-2 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#16A34A] shrink-0" /> Mantenha a lâmina afiada e balanceada
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Trabalhar com faca cega ou torta força a embreagem e multiplica a vibração nos rolamentos da ponteira.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RocadeiraHusqvarna131rEBoa;
