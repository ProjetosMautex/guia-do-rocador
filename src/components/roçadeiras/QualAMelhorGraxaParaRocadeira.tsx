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
// DADOS DOS 2 PRODUTOS DO RANKING DE GRAXAS PARA TRANSMISSÃO E PONTEIRA
// ============================================================================
interface GraxaReview {
  id: string;
  productId: string;
  rank: string;
  shortName: string;
  category: string;
  score: string;
  badge: string;
  subtitle: string;
  image: string;
  thumb: string;
  specs: { label: string; value: string }[];
  paragraphs: string[];
  pros: string[];
  cons: string[];
}

const graxaReviews: GraxaReview[] = [
  {
    id: "graxa-stihl-80g",
    productId: "graxa-80g-stihl-a-melhor-lubrificacao",
    rank: "1. Graxa Lubrificante Stihl Superlub FS (80g)",
    shortName: "Graxa Stihl Superlub FS (80g)",
    category: "Melhor para Caixa de Engrenagens e Rosca Direta",
    score: "9.9",
    badge: "Melhor Graxa Original para Ponteira",
    subtitle: "A referência de oficina com rosca direta no bujão da caixa de transmissão e película semifluida que não foge dos dentes do pinhão a 10.000 RPM.",
    image: "/images/blog/Graxa 80g Stihl A Melhor - Lubrificação.webp",
    thumb: "/images/blog/thumbs/Graxa 80g Stihl A Melhor - Lubrificação-thumb.webp",
    specs: [
      { label: "Base Química", value: "Sabão de Lítio com Aditivos EP (Extrema Pressão)" },
      { label: "Consistência NLGI", value: "Classe 1 / 2 Semifluida de Alta Aderência" },
      { label: "Rosca da Bisnaga", value: "Rosca M10/M12 direta para bujão da ponteira" },
      { label: "Volume Líquido", value: "80 gramas (rende de 8 a 14 aplicações)" },
      { label: "Compatibilidade", value: "Stihl FS 55/85/160/220/290 e ponteiras multimarcas" }
    ],
    paragraphs: [
      "A Graxa Lubrificante Stihl Superlub FS é a escolha número um de quem trabalha o dia inteiro no trecho e não pode correr o risco de moer a coroa e o pinhão da ponteira.",
      "Diferente das graxas comuns de chassis que são duras demais, sua consistência semifluida foi formulada para escorrer de volta para os dentes das engrenagens cônicas mesmo quando a roçadeira gira acima de 9.000 RPM.",
      "Outro diferencial prático no campo é o bico com rosca da bisnaga de 80g: você tira o parafuso lateral da transmissão, rosqueia o tubo direto na carcaça e aperta cerca de 5 a 10 gramas sem sujar as mãos e sem deixar cair terra ou areia dentro dos rolamentos.",
      "O ponto de atenção fica para o custo por grama ligeiramente superior aos potes genéricos e para o cuidado de comprar sempre de vendedores confiáveis para garantir a formulação original."
    ],
    pros: [
      "Aderência extrema sob alta rotação sem ser expulsa pela força centrífuga",
      "Bisnaga com bico rosqueável que acopla direto no furo de engraxe da ponteira",
      "Aditivos antidesgaste e anticorrosivos que blindam coroa, pinhão e rolamentos",
      "Compatibilidade total com toda a linha Stihl FS e transmissões multimarcas"
    ],
    cons: [
      "Custo por grama mais alto que graxas automotivas genéricas de pote",
      "Exige atenção na compra para adquirir sempre a bisnaga original lacrada"
    ]
  },
  {
    id: "graxa-litio-husqvarna-80g",
    productId: "graxa-litio-husqvarna-80gr",
    rank: "2. Graxa de Lítio Husqvarna para Engrenagens (80g)",
    shortName: "Graxa de Lítio Husqvarna (80g)",
    category: "Melhor Estabilidade Térmica (Ponteira + Eixo Cardã/Flexível)",
    score: "9.7",
    badge: "Destaque em Resistência Térmica (150 °C)",
    subtitle: "Formulação profissional de lítio com aditivos de extrema pressão que suporta picos de até 150 °C no desbaste pesado com lâmina e cabo flexível.",
    image: "/images/blog/Graxa Litio Husqvarna 80gr.webp",
    thumb: "/images/blog/thumbs/Graxa Litio Husqvarna 80gr-thumb.webp",
    specs: [
      { label: "Base Química", value: "Complexo de Lítio + Aditivos Antidesgaste / MoS2" },
      { label: "Faixa de Temperatura", value: "Estável até 150 °C sob carga contínua" },
      { label: "Bico Aplicador", value: "Ponta cônica alongada de alta precisão" },
      { label: "Volume Líquido", value: "80 gramas (bisnaga plástica flexível)" },
      { label: "Aplicação Ideal", value: "Ponteira angular, estrias do cardã e cabo flexível costal" }
    ],
    paragraphs: [
      "Para quem enfrenta roçada pesada com lâmina metálica sob sol forte, a Graxa de Lítio Husqvarna de 80g entrega uma das maiores resistências térmicas da categoria.",
      "Enquanto lubrificantes comuns derretem e viram óleo ralo quando a caixa de transmissão passa dos 90 °C, a química da Husqvarna mantém a película firme em picos de até 150 °C, impedindo o contato seco entre os dentes de aço.",
      "O bico cônico alongado da bisnaga encaixa perfeitamente no orifício de lubrificação tanto das máquinas Husqvarna (como 143R-II, 226R, 131R e 541RB) quanto das roçadeiras Toyama, Vulcan, Kawashima, Tekna e Nakasaki.",
      "Na prática do galpão, ela também é excelente para espalhar uma camada fina nas estrias do eixo cardã rígido e na alma de aço das roçadeiras costais, reduzindo o atrito e a vibração no tubo."
    ],
    pros: [
      "Estabilidade térmica superior que suporta picos de até 150 °C sem escorrer pelos retentores",
      "Redução imediata do ruído metálico e do aquecimento na caixa de transmissão",
      "Bico cônico de precisão que serve em qualquer marca de roçadeira do mercado",
      "Excelente resistência à oxidação e à umidade de capim molhado"
    ],
    cons: [
      "Volume de 80g pede tubo reserva para quem mantém frota com várias máquinas",
      "Bico é de encaixe cônico por pressão (não possui rosca externa como o tubo Stihl)"
    ]
  }
];

// ============================================================================
// COMPONENTE PRINCIPAL DO ARTIGO COMERCIAL: MELHOR GRAXA PARA ROÇADEIRA
// ============================================================================
export const QualAMelhorGraxaParaRocadeira: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>("ponteiraStihl");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const simProfiles: Record<
    string,
    {
      title: string;
      modelName: string;
      anchor: string;
      reason: string;
      specHighlight: string;
    }
  > = {
    ponteiraStihl: {
      title: "Roçadeiras Stihl (FS 160, FS 220, FS 290, FS 85) e Rosca Direta",
      modelName: "Graxa Lubrificante Stihl Superlub FS (80g)",
      anchor: "#graxa-stihl-80g",
      reason:
        "Rosqueia direto no bujão da caixa de transmissão sem desperdício e possui fluidez calibrada para penetrar nas engrenagens cônicas em altíssima rotação.",
      specHighlight: "Base Lítio EP • Rosca Direta na Ponteira • 80g"
    },
    altaTemperatura: {
      title: "Trabalho Pesado com Lâmina (Husqvarna, Toyama, Vulcan, Importadas)",
      modelName: "Graxa de Lítio Husqvarna para Engrenagens (80g)",
      anchor: "#graxa-litio-husqvarna-80g",
      reason:
        "Suporta até 150 °C sem liquefazer e traz bico cônico universal que encaixa com precisão em ponteiras Husqvarna e multimarcas de 26 mm e 28 mm.",
      specHighlight: "Estável até 150 °C • Bico Cônico Universal • 80g"
    },
    costalCarda: {
      title: "Lubrificação de Eixo Cardã Estriado e Cabo Flexível de Costal",
      modelName: "Graxa de Lítio Husqvarna (80g) ou Stihl Superlub FS",
      anchor: "#graxa-litio-husqvarna-80g",
      reason:
        "Ambas aderem ao aço sem secar com o calor do tubo, protegendo tanto a ponteira quanto as estrias do cardã e o chicote flexível das roçadeiras costais.",
      specHighlight: "Película Antidesgaste • Proteção de Estrias e Rolamentos"
    }
  };

  const currentSim = simProfiles[selectedProfile];

  const faqList = [
    {
      q: "Posso usar graxa azul de rolamento ou graxa de chassi comum na ponteira da roçadeira?",
      a: [
        "Não é recomendado: a graxa azul automotiva (NLGI 2 dura) e a graxa amarela de chassi (base cálcio) foram feitas para rodas que giram em baixa rotação.",
        "Na ponteira da roçadeira, que gira entre 8.000 e 10.000 RPM, a força centrífuga joga a graxa dura para as paredes da carcaça, deixando os dentes do pinhão e da coroa batendo secos no vazio até moerem."
      ]
    },
    {
      q: "A cada quantas horas devo colocar graxa na caixa de transmissão da roçadeira?",
      a: [
        "A regra de ouro dos manuais Stihl, Husqvarna e Toyama é inspecionar o nível a cada 20 a 25 horas de trabalho (cerca de 20 a 25 tanques de gasolina consumidos).",
        "Se faltar lubrificante, esprema apenas 5g a 10g (cerca de 1 a 2 centímetros de aperto na bisnaga) — nunca encha a ponteira até a boca."
      ]
    },
    {
      q: "Por que a ponteira da roçadeira esquenta demais quando encho de graxa até transbordar?",
      a: [
        "Porque as engrenagens precisam de cerca de 25% a 30% de espaço livre dentro da caixa para a graxa expandir quando aquece.",
        "Se você socar graxa até estufar, a pressão interna sobe em alta rotação, gera atrito hidráulico severo, superaquece a ponteira e estoura os retentores dos rolamentos."
      ]
    },
    {
      q: "A graxa da Stihl serve em roçadeira Husqvarna, Toyama, Vulcan ou Nakasaki (e vice-versa)?",
      a: [
        "Sim! Tanto a Graxa Stihl Superlub FS quanto a Graxa de Lítio Husqvarna possuem formulação de sabão de lítio com aditivos de extrema pressão compatível com qualquer caixa de transmissão angular de engrenagens cônicas do mercado."
      ]
    },
    {
      q: "Como saber se a caixa de transmissão já está sem graxa durante o serviço?",
      a: [
        "Os três sinais clássicos são: a ponteira de alumínio fica tão quente que você não consegue encostar os dedos após desligar a máquina, surge um chiado ou ronco metálico agudo ao desacelerar o cabeçote e você sente uma leve folga ou trepidação ao girar o carretel com a mão."
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
            src="/images/blog/qual-a-melhor-graxa-para-rocadeira.webp"
            alt="Mecânico aplicando graxa de lítio com bico dosador no bujão da caixa de transmissão angular de uma roçadeira"
            title="Qual a Melhor Graxa para Roçadeira: Ponteira e Transmissão"
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
            Manutenção Preventiva de Transmissão
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Melhor Graxa para Roçadeira:{' '}
            <span className="text-[#16A34A]">Qual Usar na Ponteira e Transmissão</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Descubra qual a melhor graxa para roçadeira, por que a graxa comum de rolamento destrói o pinhão em alta rotação e a medida exata em gramas para lubrificar a ponteira sem estourar os retentores.
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
            2. INTRODUÇÃO DIRETA DE CAMPO (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Manter a roçadeira em pleno funcionamento exige atenção constante à caixa de engrenagens na ponta do tubo, um componente pequeno que recebe todo o impacto do corte e gira a mais de 9.000 RPM.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Muitos operadores enfrentam prejuízos caros com coroa e pinhão moídos simplesmente porque aplicam graxa comum de chassi ou esquecem de repor o lubrificante que evapora sob o calor severo do atrito.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Saber qual a melhor graxa para roçadeira é o primeiro passo para criar uma película de extrema pressão que não foge dos dentes metálicos durante a rotação máxima, seja em uma máquina profissional ou na{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira para sítio e jardim
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, comparamos as duas graxas originais de alta performance aprovadas em oficina e mostramos o passo a passo exato de aplicação na ponteira e no eixo de transmissão.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual Graxa Escolher para a Sua Máquina?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o modelo da sua roçadeira ou o ponto que você vai lubrificar agora:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedProfile("ponteiraStihl")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "ponteiraStihl"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🔩 Roçadeiras Stihl (Rosca Direta no Bujão)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("altaTemperatura")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "altaTemperatura"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🔥 Husqvarna, Toyama, Vulcan e Multimarcas (150 °C)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("costalCarda")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "costalCarda"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              ⚙️ Eixo Cardã Estriado e Cabo Flexível Costal
            </button>
          </div>

          <div className="bg-slate-950/70 p-5 sm:p-6 rounded-xl border border-slate-700/80">
            <span className="text-xs font-black uppercase tracking-wider text-[#4ade80] block mb-1">
              {currentSim.title}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Recomendação: {currentSim.modelName}
            </h3>
            <span className="inline-block bg-slate-800 text-gray-200 text-xs font-semibold px-3 py-1 rounded-md border border-slate-700 mb-3">
              {currentSim.specHighlight}
            </span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
              {currentSim.reason}
            </p>
            <a
              href={currentSim.anchor}
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-lg transition-colors"
            >
              <span>Ver Análise Técnica Completa</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. VITRINE COMPARATIVA RÁPIDA (3 COLUNAS NO MOBILE / 5 NO DESKTOP)
            =================================================================== */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 tracking-tight border-l-4 border-[#16A34A] pl-4">
            Comparativo Rápido: As 2 Melhores Graxas para Roçadeira
          </h2>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-2.5 sm:p-3.5 text-center w-[72px]">Foto</th>
                  <th className="p-2.5 sm:p-3.5">Graxa / Bisnaga</th>
                  <th className="p-2.5 sm:p-3.5 hidden md:table-cell">Destaque Técnico</th>
                  <th className="p-2.5 sm:p-3.5 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-2.5 sm:p-3.5 text-center">Oferta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {graxaReviews.map((item) => {
                  const affiliateUrl = products[item.productId]?.link || "#";
                  return (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[60px] h-[60px] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-1 mx-auto">
                          <img
                            src={item.thumb}
                            alt={item.shortName}
                            width={60}
                            height={60}
                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <a
                          href={`#${item.id}`}
                          className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block"
                        >
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-gray-600 mt-1 md:hidden">{item.category}</div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score} / 10
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          {item.score} / 10
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="bg-[#15803d] hover:bg-[#166534] text-white font-bold no-underline text-xs py-2 px-3 rounded-lg whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-5 shadow-sm active:scale-95"
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
        </section>

        {/* ===================================================================
            5. ANÁLISES INDIVIDUAIS DAS 2 MELHORES GRAXAS PARA ROÇADEIRA
            =================================================================== */}
        <div className="mt-14 mb-8">
          <span className="text-[#166534] font-black text-xs uppercase tracking-widest block mb-1">
            Avaliação Química e Mecânica
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
            Melhores Graxas para Roçadeira
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
            A oferta de lubrificantes no mercado é vasta, mas apenas formulações desenvolvidas pelos fabricantes de máquinas florestais entregam a fluidez e a resistência centrífuga exigidas pela caixa de transmissão:
          </p>
        </div>

        <div className="space-y-16">
          {graxaReviews.map((review, idx) => (
            <React.Fragment key={review.id}>
              <section
                id={review.id}
                className="scroll-mt-24 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-block bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-black uppercase px-3 py-1 rounded-full">
                    {review.badge}
                  </span>
                  <span className="text-xs font-bold text-[#166534] bg-green-50 px-3 py-1 rounded-full">
                    Nota Técnica: {review.score} / 10
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2">
                  {review.rank}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 italic mb-6">
                  {review.subtitle}
                </p>

                <div className="my-6 flex justify-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <img
                    src={review.image}
                    alt={review.shortName}
                    title={review.rank}
                    width={500}
                    height={500}
                    className="max-h-[320px] w-auto object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                {/* Texto Analítico (1 frase por <p>, mb-5, zero negrito) */}
                <div className="prose prose-lg text-gray-700 max-w-none my-6">
                  {review.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Ficha Técnica Rápida */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 my-6">
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-3">
                    Ficha Técnica Principal
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {review.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-white p-3 rounded-xl border border-gray-100">
                        <dt className="text-gray-500 font-semibold text-xs">{spec.label}</dt>
                        <dd className="text-gray-900 font-bold mt-0.5">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Prós e Contras */}
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
                    <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Check size={18} className="text-[#16A34A] shrink-0" /> Pontos Fortes
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                      {review.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <AlertTriangle size={18} className="text-red-600 shrink-0" /> Pontos de Atenção
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                      {review.cons.map((con, conIdx) => (
                        <li key={conIdx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Principal de Afiliado */}
                <div className="my-6">
                  <AffiliateCard id={review.productId as any} />
                </div>
              </section>

              {/* Banner do Meio de Roçadeiras entre o 1º e o 2º produto */}
              {idx === 0 && (
                <div className="my-12 flex justify-center">
                  <BunnerDoMeiorocadeira />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            6. BANNER DE CROSS-SELL (Insumos e Peças que Trabalham na Ponteira)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#166534] font-black text-xs uppercase tracking-wider block mb-1">
              Manutenção Completa de Ponteira e Motor
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Aproveite a Revisão da Transmissão para Atualizar Seu Kit
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Três itens que trabalham diretamente em conjunto com a caixa de engrenagens e o motor 2 tempos da sua roçadeira:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Kit Misturador + Óleo 2T */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Vida Longa ao Motor 2T
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-oleo-2t-cross.webp"
                    alt="Kit Misturador Graduado e Óleo 2 Tempos"
                    title="Kit Misturador de Combustível + Óleo 2T"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit Misturador Graduado + Óleo 2T
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Assim como a graxa salva a ponteira, a mistura exata no dosador evita que o cilindro risque por falta de lubrificação.
                </p>
              </div>
              <a
                href={products["kit-misturador-oleo-2t"]?.link || "https://meli.la/1GP142t"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: Carretel AutoCut 26-2 Original */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Zero Vibração na Ponteira
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Carretel Para Roçadeira Autocut 26-2 Stihl Original-thumb.webp"
                    alt="Carretel AutoCut 26-2 Original Stihl"
                    title="Carretel AutoCut 26-2 Balanceado para Ponteira"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Carretel AutoCut 26-2 Original
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Cabeçote perfeitamente balanceado que preserva os rolamentos e o retentor da caixa de transmissão contra trepidações.
                </p>
              </div>
              <a
                href={products["carretel-autocut-26-2-original"]?.link || "https://meli.la/2FeZ5D5"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Faca 3 Pontas Spin Balanceada */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Aço Temperado 2,9mm
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/faca-3-pontas-spin-cross.webp"
                    alt="Faca 3 Pontas 300mm Spin em Aço Temperado"
                    title="Lâmina 3 Pontas Spin Balanceada para Roçadeira"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Faca 3 Pontas 300mm Spin
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Corte limpo em braquiária e pasto sujo sem forçar os dentes do pinhão com trancos de lâmina empenada.
                </p>
              </div>
              <a
                href={products["faca-3-pontas-spin"]?.link || "https://meli.la/2A7s1GS"}
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
            7. QUAL A MELHOR GRAXA PARA A TRANSMISSÃO DA ROÇADEIRA?
            =================================================================== */}
        <section className="mt-16 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Qual a Melhor Graxa para a Transmissão da Roçadeira?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A caixa de transmissão angular (popularmente chamada de ponteira) opera sob condições extremas: lá dentro, duas engrenagens cônicas helicoidais mudam o ângulo de força em 30 a 35 graus girando entre 8.000 e 10.500 RPM.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por isso, a melhor graxa para a transmissão da roçadeira é obrigatoriamente uma graxa à base de sabão de lítio (ou complexo de lítio) de consistência semifluida (NLGI 1 ou NLGI 1/2) enriquecida com aditivos de extrema pressão (EP) ou bissulfeto de molibdênio (MoS2).
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Essa combinação química faz um trabalho duplo: o sabão de lítio garante que a graxa não derreta mesmo acima de 120 °C, enquanto a textura semifluida permite que o lubrificante volte imediatamente para os dentes do pinhão após ser empurrado pela força centrífuga.
              </p>
            </div>
          </div>

          {/* Tabela Comparativa de Química de Graxas */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Comparativo Técnico: Graxa Original de Transmissão vs. Graxas Comuns
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Tipo de Graxa</th>
                    <th className="p-3.5 sm:p-4">Consistência / Ponto de Gota</th>
                    <th className="p-3.5 sm:p-4">Comportamento a 9.500 RPM</th>
                    <th className="p-3.5 sm:p-4 text-[#4ade80]">Veredito na Ponteira</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50 bg-green-50/40">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Lítio EP / MoS2 Semifluida (Stihl / Husqvarna)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">NLGI 1 a 2 macia • Suporta até 150 °C</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Circula continuamente entre coroa, pinhão e rolamentos</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Ideal (Ponteira, Cardã e Costal)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Graxa Azul Automotiva de Rolamento</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">NLGI 2 ou 3 firme • Suporta ~130 °C</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Cria um túnel vazio: fica colada na carcaça e deixa os dentes secos</td>
                    <td className="p-3.5 sm:p-4 font-bold text-amber-700">Evitar na ponteira (só quebra-galho no cardã)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Graxa Amarela de Chassi (Base Cálcio)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Baixa resistência térmica (~70 °C a 80 °C)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Derrete como água quente e vaza toda pelo retentor inferior</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-700">Proibida (Funde a ponteira rápido)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Graxa Grafitada Grossa de Portão</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Partículas sólidas grandes de grafite</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Acumula resíduo abrasivo nas pistas dos rolamentos de alta rotação</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-700">Proibida em alta rotação</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. O QUE PROCURAR NA GRAXA E O QUE EVITAR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O Que Procurar na Graxa e o Que Evitar
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A escolha do insumo correto separa uma roçadeira que trabalha macia por 8 anos de uma máquina que trava a ponteira no meio da empreita.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Se você trabalha com máquinas de mochila em barrancos — veja nosso ranking da{' '}
                <a href="/melhor-rocadeira-costal" className="text-[#166534] font-semibold hover:underline">
                  melhor roçadeira costal
                </a>{' '}
                e o comparativo técnico sobre{' '}
                <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor roçadeira costal ou lateral
                </a>
                —, a exigência sobre a graxa é ainda maior, pois o mesmo tubo serve para lubrificar a alma de aço do cabo flexível.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <Check size={20} className="text-[#16A34A] shrink-0" /> O Que Procurar no Rótulo
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#166534] list-disc list-inside leading-relaxed">
                <li>Base de Sabão de Lítio ou Complexo de Lítio com ponto de gota acima de 150 °C.</li>
                <li>Aditivos EP (Extrema Pressão) ou Bissulfeto de Molibdênio (MoS2) contra cisalhamento metálico.</li>
                <li>Consistência macia/semifluida que retorna sozinha para os dentes das engrenagens.</li>
                <li>Bisnaga com bico aplicador fino ou rosca M10/M12 para injetar sem contaminação por terra.</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <AlertTriangle size={20} className="text-red-600 shrink-0" /> O Que Evitar a Todo Custo
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-red-950 list-disc list-inside leading-relaxed">
                <li>Graxas de pote aberto apanhadas com chave de fenda ou graveto sujo de areia e limalha.</li>
                <li>Graxa amarela de chassi (cálcio) ou vaselina industrial, que viram líquido aos 70 °C.</li>
                <li>Misturar óleo 2 tempos ou óleo queimado de motor dentro da caixa de transmissão.</li>
                <li>Encher 100% da cavidade da ponteira até a graxa sair forçada pelos retentores.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. COMO APLICAR E A CADA QUANTAS HORAS REAPLICAR?
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Como Aplicar e a Cada Quantas Horas Reaplicar?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A eficácia da lubrificação depende tanto da qualidade da graxa quanto do método correto de aplicação na bancada.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Aproveite sempre o momento em que você parar a máquina para aprender{' '}
                <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como tirar e colocar o carretel da roçadeira
                </a>{' '}
                ou para fazer o procedimento de{' '}
                <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como trocar a lâmina da roçadeira
                </a>{' '}
                e faça a inspeção visual do bujão lateral da ponteira.
              </p>
            </div>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/como-aplicar-graxa-transmissao-rocadeira.webp"
              alt="Detalhe de bancada mostrando engrenagens cônicas da caixa de transmissão de uma roçadeira e estrias do eixo cardã lubrificadas com graxa de lítio"
              title="Como aplicar graxa na transmissão angular e nas estrias do eixo cardã da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Manutenção completa: além da ponteira angular a cada 25 horas, as estrias do eixo cardã devem receber uma película fina de graxa a cada 100 horas.
            </span>
          </div>

          {/* Passo a Passo de Aplicação */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                1. Limpe o Bujão Antes de Abrir
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Antes de soltar o parafuso lateral de engraxe (geralmente chave 13 mm ou Torx T27), passe uma escova ou pano seco ao redor da ponteira para garantir que nenhum grão de areia caia dentro das engrenagens.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Sparkles size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                2. Injete Apenas 5g a 10g (Regra dos 3/4)
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Rosqueie a bisnaga Stihl ou encaixe o bico cônico da Husqvarna e aperte de 5 a 10 gramas (o equivalente a uma colher de chá rasa) enquanto gira o prato da ponteira devagar com a mão para espalhar nos dentes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <ShieldAlert size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                3. Nunca Encha Até Transbordar
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                A caixa de transmissão deve trabalhar preenchida em no máximo 3/4 (75%) do seu volume interno; se a graxa começar a voltar pelo furo sob pressão, pare imediatamente para não estourar os retentores quando aquecer.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Check size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                4. Lubrifique Também o Eixo Cardã ou Flexível
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Se você acabou de fazer a montagem da máquina (veja o guia de{' '}
                <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                  como montar roçadeira Nakasaki e multimarcas
                </a>
                ), retire a vareta do eixo cardã a cada 100 horas (ou o cabo flexível costal a cada 30–50 horas), limpe com pano e espalhe uma película fina da mesma graxa de lítio.
              </p>
            </div>
          </div>

          {/* Tabela de Periodicidade de Reaplicação */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Tabela de Intervalos: A Cada Quantas Horas Reaplicar a Graxa?
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Componente e Regime de Uso</th>
                    <th className="p-3.5 sm:p-4 text-[#4ade80]">Intervalo de Inspeção / Engraxe</th>
                    <th className="p-3.5 sm:p-4">Quantidade Recomendada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Ponteira Angular — Uso Leve/Médio (Fio de Nylon)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">A cada 25 horas (ou ~25 tanques de combustível)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">5g a 8g (repor apenas se o nível tiver baixado)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Ponteira Angular — Uso Severo (Lâmina 2/3 Pontas no Sol)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">A cada 15 a 20 horas de operação pesada</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">5g a 10g (mantendo 25% de espaço livre interno)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cabo Flexível de Roçadeira Costal (Mochila)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">A cada 30 a 50 horas de trabalho</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Limpar a graxa preta antiga e cobrir toda a alma de aço (~15g)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Eixo Cardã Rígido e Estrias (7 ou 9 Estrias / Quadrado)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">A cada 100 horas ou 1 vez por semestre</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Película fina nas pontas estriadas e ao longo da vareta (~10g)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Dúvidas Frequentes sobre Graxa para Roçadeira
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
              Conclusão: Qual a Melhor Graxa para Roçadeira Comprar?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Investir em uma bisnaga original de 80g custa menos de um décimo do valor de uma caixa de transmissão nova e blinda o conjunto de coroa e pinhão por dezenas de jornadas de trabalho.
              </p>
              <p className="mb-4 leading-relaxed">
                Se você opera modelos da linha Stihl FS ou quer a praticidade da rosca direta no bujão com aderência máxima em alta rotação, vá direto na Graxa Stihl Superlub FS 80g; já se você busca estabilidade térmica até 150 °C com bico cônico universal para máquinas Husqvarna, Toyama, Vulcan e multimarcas, a Graxa de Lítio Husqvarna 80g é imbatível.
              </p>
              <p className="mb-0 leading-relaxed">
                Respeite a revisão a cada 25 horas, aplique apenas 5g a 10g sem afogar a ponteira e mantenha sua roçadeira rodando fria e silenciosa!
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
              Dica de Campo do José Ailton: Roçadeiras Novas Vêm com Pouca Graxa na Ponteira
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Um erro muito comum é tirar uma roçadeira zero-quilômetro da caixa (especialmente modelos importados de 43cc e 52cc) e trabalhar semanas seguidas achando que a transmissão veio cheia de fábrica.
              </p>
              <p className="mb-0">
                Na maioria das vezes, a fábrica coloca apenas uma lambuzada mínima para montagem: antes mesmo de queimar o primeiro tanque de gasolina, abra o parafuso lateral da ponteira e injete 5g a 8g de graxa Stihl ou Husqvarna para garantir que o amaciamento das engrenagens aconteça 100% lubrificado.
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

export default QualAMelhorGraxaParaRocadeira;
