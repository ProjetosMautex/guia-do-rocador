import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { BunnerDoMeiofiodenylonpararocadeira as BunnerDoMeio } from './BunnerDoMeiofiodenylonpararocadeira';
import { products, type ProductId } from '../../data/productsrocadeira';

// ============================================================================
// ÍCONES SVG INLINE LEVES (Zero peso de pacote JS / Nota 100 no PageSpeed)
// ============================================================================
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const X = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ArrowRight = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
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

const HelpCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Sparkles = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
  </svg>
);

const ShoppingBag = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

// ============================================================================
// TIPAGENS E DADOS DA VITRINE E DOS 6 PRODUTOS
// ============================================================================
interface ShowcaseItem {
  id: ProductId;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
  thumbSrc: string;
}

interface ProductSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

interface ProductReview {
  id: ProductId;
  anchorId: string;
  badge: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  specs: ProductSpec[];
  pros: string[];
  cons: string[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "fio-de-nylon-27mm-20m-quadrado-rocadeira-cortador-de-grama",
    anchorId: "item-fio-quadrado-27mm-20m",
    shortName: "1. Fio Quadrado 2,7mm x 20m",
    category: "Mato Grosso / Talo Duro",
    score: "9.6 / 10",
    thumbSrc: "/images/blog/thumbs/Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama-thumb.webp"
  },
  {
    id: "fio-de-nylon-24mm-x-50m-redondo-vonder-3373240050",
    anchorId: "item-vonder-redondo-24mm-50m",
    shortName: "2. Vonder Redondo 2,4mm x 50m",
    category: "Melhor Custo-Benefício / Cercas",
    score: "9.7 / 10",
    thumbSrc: "/images/blog/thumbs/Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050-thumb.webp"
  },
  {
    id: "fio-de-nylon-quadrado-2-70mm-15-m-vulcan",
    anchorId: "item-vulcan-quadrado-270mm-15m",
    shortName: "3. Vulcan Laranja Quadrado 2,70mm x 15m",
    category: "Corte Agressivo / Lotes Médios",
    score: "9.5 / 10",
    thumbSrc: "/images/blog/thumbs/Fio de Nylon Quadrado 2,70mm 15 M VULCAN-thumb.webp"
  },
  {
    id: "carretel-com-fio-nylon-rocadeiras-trapp-master-1000",
    anchorId: "item-trapp-carretel-master-1000",
    shortName: "4. Carretel com Fio Trapp Master 1000",
    category: "Reposição Original Trapp",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Carretel Com Fio Nylon Roçadeiras Trapp Master 1000-thumb.webp"
  },
  {
    id: "fio-nylon-2kg-bitola-2-4mm-rocast",
    anchorId: "item-rocast-bobina-24mm",
    shortName: "5. Bobina Rocast 2,4mm (1kg / 240m)",
    category: "Máximo Rendimento Profissional",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Fio Nylon 2.4 Mm Roçadeira Redondo Rocast 1kg Cortar Grama-thumb.webp"
  },
  {
    id: "fio-de-nylon-24-mm-e-12-m-tramontina",
    anchorId: "item-tramontina-24mm-12m",
    shortName: "6. Blister Tramontina 2,4mm x 12m",
    category: "Uso Residencial / Linha RE e RC",
    score: "9.3 / 10",
    thumbSrc: "/images/blog/thumbs/Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina-thumb.webp"
  }
];

const recommendedModels: ProductReview[] = [
  {
    id: "fio-de-nylon-27mm-20m-quadrado-rocadeira-cortador-de-grama",
    anchorId: "item-fio-quadrado-27mm-20m",
    badge: "Mato Grosso / Talo Duro",
    heading: "Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama",
    imageSrc: "/images/blog/Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama.webp",
    imageAlt: "Fio de Nylon 2,7mm com 20 metros de perfil quadrado para roçadeira em mato pesado",
    paragraphs: [
      "Quando o serviço envolve mato fechado, capim alto e erva daninha de talo grosso, o Fio de Nylon 2,7 mm quadrado mostra sua força.",
      "Diferente do fio liso que apenas mastiga a planta, suas quatro quinas vivas entram fatiando a fibra vegetal como lâminas, entregando corte limpo na primeira passada.",
      "O rolo de 20 metros tem a medida certa para recarregar o carretel várias vezes sem pesar na bolsa.",
      "Roda muito bem em roçadeiras a combustão como Stihl e Husqvarna, mas exige motores de média ou alta cilindrada para não amarrar o giro."
    ],
    specs: [
      { label: "Espessura / Perfil", value: "2,7 mm — Quadrado (4 quinas)", highlight: true },
      { label: "Comprimento", value: "20 metros" },
      { label: "Indicação", value: "Roçadeiras a combustão de média e alta cilindrada" }
    ],
    pros: [
      "Quatro quinas que decepam o mato denso sem mastigar.",
      "Bitola de 2,7 mm compatível com carretéis profissionais.",
      "Rolo prático de 20 metros para levar a campo.",
      "Alta resistência a impactos em limpeza de pastos."
    ],
    cons: [
      "Pesa no giro de aparadores fracos ou baixa cilindrada.",
      "Exige ilhoses compatíveis com passagem de 2,7 mm."
    ]
  },
  {
    id: "fio-de-nylon-24mm-x-50m-redondo-vonder-3373240050",
    anchorId: "item-vonder-redondo-24mm-50m",
    badge: "Melhor Custo-Benefício Geral",
    heading: "Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050",
    imageSrc: "/images/blog/Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050.webp",
    imageAlt: "Fio de Nylon Vonder 2,4 mm x 50 m com Perfil Redondo código 3373240050",
    paragraphs: [
      "Para quem cuida de chácaras, praças ou gramados extensos e quer passar longe da loja por semanas, o Vonder 2,4 mm com 50 metros (código 3373240050) é campeão em custo-benefício.",
      "Fabricado em poliamida Nylon 6.6 pura, suporta o atrito e o calor sem derreter nem colar as voltas dentro do cabeçote.",
      "O perfil redondo de 2,4 mm gera menos arrasto no ar — poupando combustível — e desliza melhor ao bater em muros, árvores e pedras, reduzindo quebras na base.",
      "A cor amarela facilita a visão na grama, embora o formato cilíndrico seja menos agressivo que o quadrado em mato lenhoso."
    ],
    specs: [
      { label: "Espessura / Comprimento", value: "2,4 mm x 50 metros" },
      { label: "Material / Perfil", value: "Poliamida Nylon 6.6 — Redondo Amarelo", highlight: true },
      { label: "Referência / Garantia", value: "VONDER 3373240050 — 3 meses" }
    ],
    pros: [
      "Rolo de 50 metros com excelente autonomia.",
      "Composto Nylon 6.6 que não derrete fácil no carretel.",
      "Perfil redondo resiste melhor a batidas em cercas e muros.",
      "Cor amarela visível e 3 meses de garantia."
    ],
    cons: [
      "Corte menos agressivo em capim muito duro.",
      "Embalagem ocupa mais espaço na caixa de ferramentas."
    ]
  },
  {
    id: "fio-de-nylon-quadrado-2-70mm-15-m-vulcan",
    anchorId: "item-vulcan-quadrado-270mm-15m",
    badge: "Efeito Serrote em Capim Duro",
    heading: "Fio de Nylon Laranja Quadrado 2,70mm 15 Metros VULCAN-080236",
    imageSrc: "/images/blog/Fio de Nylon Quadrado 2,70mm 15 M VULCAN.webp",
    imageAlt: "Fio de Nylon Quadrado 2,70mm 15 Metros Laranja Vulcan 080236",
    paragraphs: [
      "Se você encara vegetação dura no lote, mas não quer empatar dinheiro em bobinas grandes, o Fio Quadrado 2,70 mm da Vulcan (modelo 080236) resolve na medida.",
      "A bitola grossa somada às quatro arestas cria um efeito serrote em alta rotação, cortando tiririca e braquiária rapidamente.",
      "No trecho, o polímero da Vulcan se destaca por demorar a desfiar nas pontas e por ser macio de enrolar no carretel sem saltar na montagem.",
      "O blister de 15 metros rende de duas a três cargas completas, pedindo apenas máquinas com bom fôlego de motor."
    ],
    specs: [
      { label: "Espessura / Perfil", value: "2,70 mm — Quadrado Laranja", highlight: true },
      { label: "Comprimento", value: "15 metros (2 a 3 cargas)" },
      { label: "Código", value: "Vulcan Trent 080236" }
    ],
    pros: [
      "Geometria quadrada agressiva contra talos fibrosos.",
      "Polímero durável que não desfia fácil nas pontas.",
      "Blister de 15 metros econômico para uso periódico.",
      "Cor laranja viva que destaca o raio de corte."
    ],
    cons: [
      "Exige roçadeiras fortes para manter a rotação.",
      "Metragem curta para uso profissional diário."
    ]
  },
  {
    id: "carretel-com-fio-nylon-rocadeiras-trapp-master-1000",
    anchorId: "item-trapp-carretel-master-1000",
    badge: "Conjunto Original Balanceado Trapp",
    heading: "1.Fio de nylon para roçadeira – Trapp",
    imageSrc: "/images/blog/Carretel Com Fio Nylon Roçadeiras Trapp Master 1000.webp",
    imageAlt: "Carretel com Fio de Nylon original para Roçadeiras Trapp Master 1000",
    paragraphs: [
      "Quem opera as roçadeiras da Trapp — como a Master 1000 — garante trabalho sem trepidação usando o carretel com fio original da marca.",
      "Com rosca M10 x 1,25 FLH e 2 metros de fio 100% puro verde inclusos, ele trabalha em corte baixo com total balanceamento mecânico em jardins e condomínios.",
      "A grande vantagem está na durabilidade da carcaça: construído com mola em aço especial e eixo de aço carbono forjado a frio, o cabeçote aceita recargas futuras de fio redondo até 3,30 mm ou quadrado até 2,70 mm quando a linha original acabar."
    ],
    specs: [
      { label: "Padrão de Rosca", value: "M10 x 1,25 FLH (Eixo forjado a frio)" },
      { label: "Carga Inicial", value: "2 metros de nylon 100% puro verde (2,4 mm)", highlight: true },
      { label: "Capacidade de Recarga", value: "Redondo até 3,30 mm / Quadrado até 2,70 mm" }
    ],
    pros: [
      "Encaixe original balanceado para a linha Trapp Master 1000.",
      "Eixo em aço carbono forjado que elimina vibrações.",
      "Acompanha carga de nylon 100% puro para uso imediato.",
      "Aceita fios grossos (até 3,3 mm) nas próximas recargas."
    ],
    cons: [
      "Carga inicial curta com apenas 2 metros de fio.",
      "Rosca específica para o padrão de eixo Trapp."
    ]
  },
  {
    id: "fio-nylon-2kg-bitola-2-4mm-rocast",
    anchorId: "item-rocast-bobina-24mm",
    badge: "Máximo Rendimento Profissional (240 m/kg)",
    heading: "2.Fio Nylon Roçadeira 1kg 2.4mm – Rocast",
    imageSrc: "/images/blog/Fio Nylon 2.4 Mm Roçadeira Redondo Rocast 1kg Cortar Grama.webp",
    imageAlt: "Bobina de Fio de Nylon Rocast 2,4 mm de 1 kg para Roçadeira Profissional",
    paragraphs: [
      "Para o operador profissional que não pode ficar sem linha no meio da empreitada, a bobina de 1 kg da Rocast na bitola 2,4 mm entrega cerca de 240 metros de autonomia (disponível também em 2 kg com 480 m), derrubando o custo por metro.",
      "Disponível nos perfis estrela e redondo, combina polímero de alta tenacidade com a bitola versátil de 2,4 mm: rasga a vegetação com precisão e limpa cantos de meios-fios, cercas e pedras sem pesar no motor como um fio 3,0 mm.",
      "Basta guardar a bobina na sombra para o estoque não ressecar."
    ],
    specs: [
      { label: "Peso / Metragem", value: "1 kg — Aprox. 240 metros (ou 2 kg / 480 m)", highlight: true },
      { label: "Espessura / Perfil", value: "2,4 mm — Estrela ou Redondo" },
      { label: "Indicação", value: "Uso profissional intenso em grandes áreas" }
    ],
    pros: [
      "Autonomia imbatível de 240 metros por quilo.",
      "Opção de perfil estrela que acelera o corte da grama.",
      "Bitola de 2,4 mm que rende bem sem forçar a embreagem.",
      "Menor custo por metro para quem roça toda semana."
    ],
    cons: [
      "Exige local seco e protegido do sol para armazenar.",
      "Rolo pesado para transporte (leve apenas a medida do dia)."
    ]
  },
  {
    id: "fio-de-nylon-24-mm-e-12-m-tramontina",
    anchorId: "item-tramontina-24mm-12m",
    badge: "Uso Residencial / Linha RE e RC",
    heading: "5.Fio De Nylon 2,4 Mm, 12 M De Comprimento – Tramontina",
    imageSrc: "/images/blog/Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp",
    imageAlt: "Fio de Nylon 2,4 mm com 12 Metros para Aparador de Grama e Roçadeira Tramontina",
    paragraphs: [
      "Para quem tem roçadeira ou aparador Tramontina em casa (modelos RE1000, RC26K, RC26H, RC33B ou RC43B), o blister original de 2,4 mm com 12 metros (ref. 78795/132) evita sobrecarga no motor.",
      "Enquanto fios genéricos duros travam no carretel, este filamento de 78 g tem a flexibilidade exata para correr solto nos ilhoses da marca.",
      "Encara com facilidade a manutenção de gramados residenciais e bordas de canteiros em terrenos planos ou inclinados.",
      "Pelos 12 metros de comprimento, é dimensionado para o uso doméstico de fim de semana."
    ],
    specs: [
      { label: "Espessura / Comprimento", value: "2,4 mm x 12 metros (78 g)" },
      { label: "Referência", value: "Tramontina 78795/132", highlight: true },
      { label: "Compatibilidade", value: "RE1000, RC26K, RC26H, RC33B, RC43B" }
    ],
    pros: [
      "Flexibilidade calibrada para o avanço dos carretéis Tramontina.",
      "Não aquece nem força o motor das linhas RE e RC.",
      "Blister compacto de 78 g fácil de guardar e enrolar.",
      "Polímero original com garantia de 12 meses."
    ],
    cons: [
      "Rolo curto de 12 metros exige reposição rápida em áreas grandes.",
      "Voltado apenas para grama e vegetação residencial leve."
    ]
  }
];

const crossSellProducts = {
  carretelAutocut: {
    link: products["carretel-para-rocadeira-autocut-26-2-stihl-original"]?.link || "#",
    image: "/images/blog/Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  kitOleo2t: {
    link: products["kit-misturador-oleo-2t"]?.link || "#",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  },
  kitEpi: {
    link: products["kit-seguranca-completo-epis"]?.link || "#",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  }
};

const faqData: { question: string; answer: React.ReactNode[] }[] = [
  {
    question: "Qual a diferença prática entre o fio de nylon quadrado e o redondo?",
    answer: [
      "O fio quadrado tem quatro quinas que fatiam talos grossos e rendem até 10% a mais em mato fechado.",
      "Já o fio redondo desliza melhor e dura muito mais ao bater em muros, cercas e pedras."
    ]
  },
  {
    question: "Qual a metragem ideal de fio de nylon para comprar: blister curto ou bobina?",
    answer: [
      "Para quintais pequenos e uso ocasional, blisters de 12 m a 20 m são suficientes.",
      "Para chácaras ou trabalho profissional, rolos de 50 m ou bobinas de 1 kg (240 m) reduzem o custo por metro pela metade."
    ]
  },
  {
    question: "Pode usar fio ou cabo de aço no carretel da roçadeira?",
    answer: [
      "Não use cabo de aço puro.",
      "Ele gera vibração severa que destrói a transmissão e a embreagem, além de soltar farpas metálicas perigosas em alta rotação.",
      "Use apenas fios de nylon na bitola indicada no manual."
    ]
  },
  {
    question: "Qual a melhor marca de fio de nylon para roçadeira atualmente?",
    answer: [
      "A Vonder e a Rocast lideram no custo-benefício geral e profissional, a Vulcan se destaca no perfil quadrado para mato duro, e a Stihl, Husqvarna e Oregon lideram no segmento florestal pesado."
    ]
  },
  {
    question: "Como hidratar o fio de nylon ressecado para ele parar de quebrar?",
    answer: [
      "Mergulhe o rolo ou as tiras cortadas em um balde com água limpa por 24 horas antes da roçada.",
      "O nylon reidrata, volta a ficar flexível e para de arrebentar à toa."
    ]
  }
];

export const MelhorFioNylon: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<'matoPesado' | 'cercaMuro' | 'profissional' | 'domestico' | null>('profissional');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans bg-gray-50 text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/qual o melhor fio de nylon para rocadeira.webp"
            alt="Qual o Melhor Fio de Nylon para Roçadeiras Top 6 em 2026"
            title="Qual o Melhor Fio de Nylon para Roçadeiras"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Qual o Melhor Fio de Nylon para Roçadeiras? <br />
            <span className="text-[#16A34A]">Top 6 em 2026</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-2 hover:text-[#4ade80] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform object-cover"
                />
                José Ailton da Silva
              </a>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300 text-xs sm:text-sm">Especialista Operacional em Roçadeiras</span>
            </div>
          </div>
        </div>
      </div>

      {/* Container Central de Leitura */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO CURTA (1 frase por parágrafo)
            =================================================================== */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Quem trabalha no sol quente limpando terreno sabe que nada atrasa mais o serviço do que o fio arrebentando no pé do carretel a cada cinco minutos.
          </p>
          <p>
            Descobrir qual o melhor fio de nylon para roçadeira melhora o acabamento perto de muros e cercas e poupa o motor e a embreagem da máquina.
          </p>
          <p>
            Com base em mais de dez anos operando roçadeiras no trecho, selecionei as 6 melhores opções de 2026 para você acertar na compra.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl font-bold text-white">
              Simulador Rápido: Qual o fio de nylon certo para o seu serviço?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('matoPesado')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'matoPesado'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Mato Grosso, Capim Alto e Talo Duro</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('cercaMuro')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'cercaMuro'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Beiradas de Muro, Cercas e Chácara</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('profissional')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'profissional'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Uso Profissional Diário (240 metros)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('domestico')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'domestico'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Reposição Original (Trapp / Tramontina)</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/90 border border-gray-700 rounded-xl">
              {quizProfile === 'matoPesado' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação de Campo: Para mato grosso, capim alto e talo duro, escolha o{' '}
                  <a href="#item-fio-quadrado-27mm-20m" className="text-[#4ade80] underline font-bold">
                    Fio Quadrado 2,7 mm (Resistente)
                  </a>{' '}
                  ou o{' '}
                  <a href="#item-vulcan-quadrado-270mm-15m" className="text-[#4ade80] underline font-bold">
                    Vulcan Quadrado 2,70 mm
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'cercaMuro' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação de Campo: Para beiradas de muro, cercas e chácara, vá direto no{' '}
                  <a href="#item-vonder-redondo-24mm-50m" className="text-[#4ade80] underline font-bold">
                    Vonder Redondo 2,4 mm x 50 m
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'profissional' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação de Campo: Para quem vive do trecho e busca o menor custo por metro, a{' '}
                  <a href="#item-rocast-bobina-24mm" className="text-[#4ade80] underline font-bold">
                    Bobina Rocast 1 kg (2,4 mm com 240 metros)
                  </a>{' '}
                  garante meses de trabalho pesado sem faltar linha.
                </p>
              )}
              {quizProfile === 'domestico' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação de Campo: Para reposição original calibrada, utilize o{' '}
                  <a href="#item-trapp-carretel-master-1000" className="text-[#4ade80] underline font-bold">
                    Carretel Trapp Master 1000
                  </a>{' '}
                  ou o{' '}
                  <a href="#item-tramontina-24mm-12m" className="text-[#4ade80] underline font-bold">
                    Blister Tramontina 12 m
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE RESUMO DOS 6 PRODUTOS (Miniaturas 60x60 Otimizadas)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: Os 6 Melhores Fios de Nylon de 2026
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Especificação</th>
                  <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Oferta</th>
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
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumbSrc}
                            alt={displayName}
                            title={displayName}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
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
        </div>

        {/* ===================================================================
            5. ANÁLISE TÉCNICA DOS 6 MELHORES FIOS DE NYLON PARA ROÇADEIRA
            =================================================================== */}
        <div className="space-y-16">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-2 mt-12">
            Análise Técnica dos 6 Melhores Fios de Nylon para Roçadeira
          </h2>

          {recommendedModels.map((model, index) => (
            <React.Fragment key={model.id}>
              <section
                id={model.anchorId}
                className={`scroll-mt-24 ${index > 0 ? 'pt-10 border-t border-gray-200' : 'pt-2'}`}
              >
                <div className="mb-3">
                  <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
                  {model.heading}
                </h3>

                <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <img
                    src={model.imageSrc}
                    alt={model.imageAlt}
                    title={model.heading}
                    width={800}
                    height={533}
                    className="max-h-80 object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                  {model.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tabela Especificação / Detalhe */}
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider w-2/5">
                          Especificação
                        </th>
                        <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                          Detalhe
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {model.specs.map((spec, sIdx) => (
                        <tr key={sIdx}>
                          <th className="px-4 py-3 bg-gray-50/50 text-left text-sm font-semibold text-gray-700">
                            {spec.label}
                          </th>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {spec.highlight ? (
                              <span className="inline-flex items-center gap-1.5 font-medium text-[#166534]">
                                <Check className="text-[#166534] shrink-0" size={16} />
                                {spec.value}
                              </span>
                            ) : (
                              spec.value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Card de Oferta Principal */}
                <AffiliateCard id={model.id} />

                {/* Prós e Contras */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                      <Check size={20} className="text-[#166534]" /> Prós
                    </h4>
                    <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
                      {model.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                      <X size={20} className="text-red-700" /> Contras
                    </h4>
                    <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                      {model.cons.map((con, conIdx) => (
                        <li key={conIdx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ponto Estratégico 1 do Banner do Meio (Após o 3º produto) */}
              {index === 2 && <BunnerDoMeio />}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            6. BANNER DE CROSS-SELL (ACESSÓRIOS COMPLEMENTARES)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-[#166534] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              Acessórios Recomendados para Sua Roçada Render Mais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cross-Sell 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Cabeçote Bate-Libera
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.carretelAutocut.image}
                    alt="Carretel Automático AutoCut 26-2 STIHL Original"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Carretel Automático AutoCut 26-2
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Libera o fio com um toque no chão em pleno giro, sem desligar a máquina.
                </p>
              </div>
              <a
                href={crossSellProducts.carretelAutocut.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Proteção do Motor 2T
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.kitOleo2t.image}
                    alt="Kit Misturador de Combustível + Óleo 2 Tempos"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit Misturador + Óleo 2 Tempos
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Garante a mistura exata para o motor rodar frio mesmo com fios quadrados grossos.
                </p>
              </div>
              <a
                href={crossSellProducts.kitOleo2t.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 3 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Segurança Obrigatória
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.kitEpi.image}
                    alt="Kit Completo de Segurança EPIs para Roçador"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit EPIs Completo
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Protege rosto, olhos e canelas contra pedras e pontas de linha em alta rotação.
                </p>
              </div>
              <a
                href={crossSellProducts.kitEpi.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            7. PARA QUE SERVE O FIO DE NYLON PARA ROÇADEIRA?
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Para que serve o Fio de Nylon para Roçadeira?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              No dia a dia de campo, o fio de nylon serve para aparar gramados, relva e fazer o acabamento rente a obstáculos onde a lâmina de aço não pode encostar — como muros, cercas de arame, árvores, postes e terrenos com pedras.
            </p>
            <p>
              Enquanto o disco metálico oferece risco grave de contragolpe (rebote), quebra e faíscas ao bater no concreto, o nylon gira em alta rotação pela força centrífuga e corta o mato com segurança total, sem ferir a casca das plantas.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/para-que-serve-fio-de-nylon-rocadeira.webp"
              alt="Roçadeira com cabeçote de fio de nylon aparando grama rente a muro de tijolos e cerca com segurança"
              title="Para que serve o Fio de Nylon para Roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            8. COMO ESCOLHER O MELHOR FIO DE NYLON PARA ROÇADEIRA?
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como escolher o melhor Fio de Nylon para Roçadeira?
          </h2>

          <div className="w-full flex justify-center mb-10">
            <img
              src="/images/blog/como-escolher-melhor-fio-de-nylon-rocadeira.webp"
              alt="Bancada com diferentes perfis e bitolas de fio de nylon redondo, quadrado e estrela ao lado de carretel de roçadeira"
              title="Como escolher o melhor Fio de Nylon para Roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-10">
            {/* Subseção: Espessura */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Espessura
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
                <p>
                  A bitola do fio varia de 1,5 mm a 3,3 mm (algumas marcas usam cores como verde para 2,0 mm, vermelho/laranja para 2,4 a 2,7 mm e amarelo para 3,0 mm).
                </p>
                <p>
                  Antes de comprar, consulte o manual do seu equipamento e siga a regra de potência:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-base font-bold text-[#166534] mb-2">
                    1,5 mm a 2,0 mm
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Para aparadores elétricos leves, máquinas a bateria e grama macia residencial.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-base font-bold text-[#166534] mb-2">
                    2,4 mm a 2,7 mm
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Medida mais versátil; ideal para roçadeiras de 26 cc a 43 cc em limpeza de sítios, lotes e capim médio.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-base font-bold text-[#166534] mb-2">
                    3,0 mm a 3,3 mm
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Exclusivo para máquinas fortes (acima de 43 cc) em mato fechado e pasto sujo. Instalar fio 3,0 mm em máquina fraca amarra o giro, gasta mais combustível e queima a embreagem.
                  </p>
                </div>
              </div>
            </div>

            {/* Subseção: Resistência */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Resistência
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Fios fabricados com copolímeros de poliamida pura (como Nylon 6.6 ou com carga de titânio) absorvem o impacto contra cercas sem partir no pé do ilhós e suportam o calor sem colar dentro do carretel.
                </p>
                <p>
                  Na operação, um macete prático triplica a durabilidade da carga: diminua para meia aceleração ao encostar em muros e telas, evitando que a ponta chicoteie o concreto com força máxima.
                </p>
              </div>

              {/* Avatar Circular do Autor (Reforço E-E-A-T) + Dica Prática da Hidratação */}
              <div className="w-full flex justify-center mt-8 mb-4">
                <a href="/author/jose-ailton/" aria-label="Ver perfil operacional de José Ailton da Silva">
                  <img
                    src="/images/autores/José Ailton da Silva-thumb.webp"
                    alt="José Ailton da Silva"
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#16A34A] hover:scale-105 transition-transform duration-200 shadow-md"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="mt-4 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-[#166534] shrink-0" size={20} />
                  <h4 className="text-lg font-bold text-[#166534]">
                    Segredo de Campo (Hidratação no Balde)
                  </h4>
                </div>
                <p className="text-base leading-relaxed text-gray-800">
                  Se o seu rolo de nylon ficou guardado por meses no tempo seco, deixe o fio de molho num balde com água por 24 horas antes de usar. A poliamida absorve a umidade, recupera a elasticidade original e para de quebrar seco.
                </p>
              </div>
            </div>

            {/* Subseção: Tipos de fios */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Tipos de fios
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
                <p>
                  O desenho do perfil define a agressividade do corte e o ruído da máquina:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Redondo
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Mais resistente contra pedras, muros e cercas por não ter quinas; ideal para acabamento urbano.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Quadrado
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Quatro arestas vivas que fatiam talos grossos como lâminas, rendendo até 10% a mais em vegetação pesada.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Estrela
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Cinco ou seis pontas que entregam corte rápido e limpo em gramados densos sem amarelar a folha.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Serrilhado
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Possui dentes laterais que agem como serrote em moitas duras e áreas rurais.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 sm:col-span-2">
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Ondulado ou Trançado
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Perfil aerodinâmico que reduz o barulho do vento e a vibração em condomínios e hospitais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. QUAL A MELHOR MARCA DE FIO DE NYLON PARA ROÇADEIRA? (SEO DUPLO)
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Qual a Melhor Marca de Fio de Nylon para Roçadeira?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Escolher fabricantes reconhecidos evita fios de plástico reciclado que derretem no cabeçote.
            </p>
            <p>
              Veja onde cada marca se destaca:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Vonder e Rocast
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Campeãs em custo-benefício.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                A Vonder se destaca pela durabilidade térmica do Nylon 6.6, enquanto a Rocast domina o uso profissional com bobinas econômicas de 1 kg e 2 kg.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Vulcan Trent
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Referência em fios quadrados de 2,70 mm e 3,0 mm de alta abrasão para limpeza pesada de lotes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Trapp e Tramontina
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                As melhores escolhas para reposição original calibrada em aparadores e roçadeiras elétricas domésticas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                STIHL, Husqvarna e Oregon
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Linhas de engenharia florestal com polímeros coextrusados de alta tração para roçadeiras profissionais de alta cilindrada.
              </p>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">
            Perguntas frequentes
          </h2>

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
            11. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#16A34A] tracking-tight">
              Conclusão: Qual o melhor fio de nylon para roçadeira?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              A escolha de qual o melhor fio de nylon para roçadeira depende do equilíbrio entre a potência do seu motor e a dureza do mato.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Para o melhor custo-benefício em chácaras, gramados e beiradas de muro, vá no Fio Redondo 2,4 mm x 50 m da Vonder.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Se a missão é derrubar mato grosso e talo duro com máquina forte, escolha o perfil quadrado de 2,7 mm da Vulcan ou da Resistente; e para autonomia profissional máxima, aposte na bobina de 1 kg (2,4 mm) da Rocast.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Respeite a bitola do seu cabeçote, hidrate a linha antiga e bom trabalho no trecho!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorFioNylon;
