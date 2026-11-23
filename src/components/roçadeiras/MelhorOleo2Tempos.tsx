import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { BunnerDoMeiooleo2tempos as BunnerDoMeio } from './BunnerDoMeiooleo2tempos';
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
// TIPAGENS E DADOS DA VITRINE E DOS 4 ÓLEOS 2 TEMPOS
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

interface ProductCriterion {
  criterion: string;
  score: string;
  observation: string;
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
  criteria: ProductCriterion[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "oleo-lubrificante-stihl-2-tempos-8017",
    anchorId: "item-stihl-8017h",
    shortName: "1. Óleo Stihl 8017H (Referência)",
    category: "Uso Profissional / Medida 50:1",
    score: "9.9 / 10",
    thumbSrc: "/images/blog/thumbs/Oleo Lubrificante Stihl 2 Tempos 8017-thumb.webp"
  },
  {
    id: "oleo-2-tempos-husqvarna-pro-1lt",
    anchorId: "item-husqvarna-pro",
    shortName: "2. Óleo Husqvarna Pro 1 Litro",
    category: "Mato Pesado / Alta Rotação",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Óleo 2 Tempos Husqvarna Pro 1lt-thumb.webp"
  },
  {
    id: "2-oleo-lubrax-essencial-mineral-moto-rocadeiras-motosserras",
    anchorId: "item-lubrax-essencial",
    shortName: "3. Lubrax Essencial 2T (2 Frascos)",
    category: "Melhor Custo-Benefício / Importadas",
    score: "9.3 / 10",
    thumbSrc: "/images/blog/thumbs/2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras-thumb.webp"
  },
  {
    id: "kit-2-oleo-2-tempos-chainsaw-rocadeira-castrol",
    anchorId: "item-castrol-chainsaw",
    shortName: "4. Kit 2 Óleo Castrol Chainsaw 2T",
    category: "Roçadeira e Motosserra / Estoque",
    score: "9.5 / 10",
    thumbSrc: "/images/blog/thumbs/Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol-thumb.webp"
  }
];

const recommendedModels: ProductReview[] = [
  {
    id: "oleo-lubrificante-stihl-2-tempos-8017",
    anchorId: "item-stihl-8017h",
    badge: "🏆 1. A Referência do Mercado",
    heading: "Oleo Lubrificante Stihl 2 Tempos 8017",
    imageSrc: "/images/blog/Oleo Lubrificante Stihl 2 Tempos 8017.webp",
    imageAlt: "Frasco de Oleo Lubrificante Stihl 2 Tempos 8017H para roçadeira",
    paragraphs: [
      "Desenvolvido em parceria com a Castrol, o Stihl 8017H é o lubrificante de cabeceira nas oficinas e no campo.",
      "Sua fórmula conta com aditivos detergentes e antidesgaste que limpam a câmara de combustão enquanto a máquina gira alto, reduzindo drasticamente as crostas de carvão na cabeça do pistão e na saída do escapamento.",
      "O grande diferencial para o bolso está no rendimento: por trabalhar na proporção 50:1 (apenas 20 ml por litro de gasolina), um frasco rende o dobro dos óleos minerais comuns.",
      "Exige apenas um dosador graduado para não errar a mão na medida."
    ],
    specs: [
      { label: "Base / Tecnologia", value: "Mineral de alta performance com aditivos detergentes", highlight: true },
      { label: "Proporção Indicada", value: "50:1 (20 ml por litro de gasolina)" },
      { label: "Classificação Técnica", value: "API TC / JASO FB (Homologado STIHL)" },
      { label: "Indicação Principal", value: "Roçadeiras profissionais, semiprofissionais e uso contínuo" }
    ],
    pros: [
      "Aditivos detergentes que evitam a carbonização da vela e do escape.",
      "Alto rendimento na proporção 50:1 (20 ml por litro).",
      "Estabilidade térmica sob rotação máxima contínua.",
      "Referência absoluta de confiabilidade no mercado."
    ],
    cons: [
      "Preço por frasco mais elevado que os minerais básicos.",
      "Não tolera mistura no olho (exige copo dosador)."
    ],
    criteria: [
      { criterion: "Proteção Térmica do Pistão", score: "9.9 / 10", observation: "Mantém a película lubrificante firme mesmo sob sol forte e giro máximo." },
      { criterion: "Limpeza Interna (Zero Carvão)", score: "9.8 / 10", observation: "Reduz drasticamente a crosta na vela e na tela do escapamento." },
      { criterion: "Rendimento na Mistura", score: "9.9 / 10", observation: "A diluição 50:1 dobra a autonomia de cada frasco comprado." }
    ]
  },
  {
    id: "oleo-2-tempos-husqvarna-pro-1lt",
    anchorId: "item-husqvarna-pro",
    badge: "⚙️ 2. Uso Severo e Alta Rotação",
    heading: "Óleo 2 Tempos Husqvarna Pro 1lt",
    imageSrc: "/images/blog/Óleo 2 Tempos Husqvarna Pro 1lt.webp",
    imageAlt: "Óleo 2 Tempos Husqvarna Pro 1lt semissintético para roçadeiras",
    paragraphs: [
      "Se o seu serviço é pesado — encarando pasto fechado, braquiária alta e jornadas de 6 a 8 horas com o gatilho colado —, a linha Husqvarna Pro entrega uma proteção térmica exemplar.",
      "Ela foi projetada para manter a película lubrificante firme nas paredes do cilindro mesmo quando o motor trabalha sob calor extremo.",
      "Assim como o concorrente da Stihl, opera na diluição econômica de 50:1, gerando pouquíssima fumaça e facilitando a partida a frio pela manhã.",
      "O único ponto de atenção é que nem sempre é fácil encontrá-lo em casas de ferragens pequenas longe das revendas autorizadas."
    ],
    specs: [
      { label: "Base / Tecnologia", value: "Semissintético de alta performance (1 Litro)", highlight: true },
      { label: "Proporção Indicada", value: "50:1 (20 ml por litro de gasolina)" },
      { label: "Emissão de Fumaça", value: "Baixíssima (queima limpa)" },
      { label: "Indicação Principal", value: "Jornadas longas, pasto pesado e roçadeiras de alta cilindrada" }
    ],
    pros: [
      "Baixa drasticamente a temperatura interna do motor em uso severo.",
      "Queima limpa com emissão mínima de fumaça.",
      "Protege anéis e rolamentos do virabrequim em alta rotação.",
      "Rendimento econômico na proporção 50:1."
    ],
    cons: [
      "Mais difícil de achar em comércios rurais pequenos.",
      "Valor de aquisição mais alto."
    ],
    criteria: [
      { criterion: "Controle de Calor no Motor", score: "9.9 / 10", observation: "Excelente dissipação térmica em trabalhos de 6 a 8 horas diárias." },
      { criterion: "Partida e Queima Limpa", score: "9.8 / 10", observation: "Quase não gera fumaça e evita engasgos na primeira partida." },
      { criterion: "Durabilidade dos Rolamentos", score: "9.8 / 10", observation: "Preserva a biela e os anéis do cilindro sob carga pesada." }
    ]
  },
  {
    id: "2-oleo-lubrax-essencial-mineral-moto-rocadeiras-motosserras",
    anchorId: "item-lubrax-essencial",
    badge: "💰 3. Alternativa Acessível",
    heading: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras",
    imageSrc: "/images/blog/2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras.webp",
    imageAlt: "Kit com 2 Óleos Lubrax Essencial Mineral 2 Tempos para Roçadeiras e Motosserras",
    paragraphs: [
      "Para quem tem uma roçadeira importada de entrada (como Vulcan, Toyama, Terra ou Nakasaki) e faz limpezas ocasionais na chácara no fim de semana, o Lubrax Essencial 2T é a opção mais honesta e fácil de achar em qualquer posto de combustível.",
      "Com certificação API TC, este óleo de base mineral cumpre bem o papel de proteger contra a corrosão e o atrito em regime moderado.",
      "Porém, atenção na oficina: por ser um mineral mais encorpado, ele costuma ser usado na proporção recomendada pelo manual das máquinas importadas (25:1, ou 40 ml por litro), o que gera mais fumaça e exige limpeza periódica do escapamento."
    ],
    specs: [
      { label: "Base / Tecnologia", value: "Mineral convencional (Kit com 2 unidades)", highlight: true },
      { label: "Proporção Indicada", value: "25:1 (40 ml por litro de gasolina em importadas)" },
      { label: "Classificação Técnica", value: "API TC" },
      { label: "Indicação Principal", value: "Roçadeiras importadas de entrada e uso ocasional em sítios" }
    ],
    pros: [
      "Preço baixo e excelente custo-benefício para uso eventual.",
      "Encontrado facilmente em qualquer posto ou autopeças.",
      "Classificação API TC segura para motores 2 tempos.",
      "Boa proteção anticorrosiva enquanto a máquina descansa."
    ],
    cons: [
      "Solta mais fumaça branca ou azulada durante o corte.",
      "Acumula carvão mais rápido que os semissintéticos."
    ],
    criteria: [
      { criterion: "Custo-Benefício por Litro", score: "9.6 / 10", observation: "É a alternativa mais econômica para limpezas esporádicas." },
      { criterion: "Facilidade de Reposição", score: "9.8 / 10", observation: "Disponível em postos de combustível e lojas agrícolas de todo o país." },
      { criterion: "Limpeza de Escape", score: "8.5 / 10", observation: "Por ser mineral 25:1, pede descarbonização periódica da janela do escape." }
    ]
  },
  {
    id: "kit-2-oleo-2-tempos-chainsaw-rocadeira-castrol",
    anchorId: "item-castrol-chainsaw",
    badge: "🛡️ 4. Estoque Prático e Versátil",
    heading: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol",
    imageSrc: "/images/blog/Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol.webp",
    imageAlt: "Kit 2 Óleo 2 Tempos Chainsaw Roçadeira Castrol",
    paragraphs: [
      "Para o operador que usa tanto roçadeira quanto motosserra na propriedade e quer garantir estoque com bom preço por litro, o Kit com 2 unidades do Castrol Chainsaw 2T é uma escolha prática e segura.",
      "A Castrol é justamente a fabricante por trás da tecnologia do óleo original da Stihl, entregando um lubrificante fino, puro e de rápida mistura na gasolina.",
      "Sua classificação API TC/JASO garante que a película de óleo não se rompa nas aceleradas bruscas, evitando riscos na camisa do cilindro e mantendo os anéis livres de borra."
    ],
    specs: [
      { label: "Base / Tecnologia", value: "Lubrificante de alta fluidez Castrol (Kit 2 frascos)", highlight: true },
      { label: "Proporção Indicada", value: "Conforme manual da máquina (25:1 ou 40:1)" },
      { label: "Classificação Técnica", value: "API TC / JASO" },
      { label: "Indicação Principal", value: "Propriedades que operam roçadeira e motosserra juntas" }
    ],
    pros: [
      "Fluidez superior que se mistura rápido à gasolina comum.",
      "Proteção antidesgaste testada em roçadeiras e motosserras.",
      "Ótimo custo por litro comprando no kit com 2 frascos.",
      "Reduz o travamento de anéis por acúmulo de resíduos."
    ],
    cons: [
      "Exige conferência da proporção no manual da sua máquina (25:1 ou 40:1)."
    ],
    criteria: [
      { criterion: "Homogeneização na Gasolina", score: "9.6 / 10", observation: "Dilui rapidamente sem deixar resíduos grossos no fundo do galão." },
      { criterion: "Versatilidade Multi-Máquinas", score: "9.6 / 10", observation: "Atende roçadeiras, motosserras e podadores 2 tempos com folga." },
      { criterion: "Proteção Antiatrito", score: "9.4 / 10", observation: "Mantém os anéis do pistão livres mesmo em aceleradas bruscas." }
    ]
  }
];

const crossSellProducts = {
  kitOleo2t: {
    link: products["kit-misturador-oleo-2t"]?.link || "#",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  },
  kitEpi: {
    link: products["kit-seguranca-completo-epis"]?.link || "#",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  },
  facaSpin: {
    link: products["faca-3-pontas-spin"]?.link || "#",
    image: "/images/blog/thumbs/faca-3-pontas-spin-cross.webp"
  }
};

const faqData: { question: string; answer: React.ReactNode[] }[] = [
  {
    question: "Posso usar óleo de motor de carro ou moto (4 tempos) na roçadeira?",
    answer: [
      "Nunca use óleo 4 tempos em roçadeiras 2 tempos.",
      "O óleo 4 tempos foi feito para circular dentro de um cárter fechado e não para queimar junto com a gasolina na câmara de combustão.",
      "Colocar óleo de carro ou moto 4T na roçadeira cria uma crosta grossa imediata, trava os anéis do pistão e funde o motor no mesmo dia."
    ]
  },
  {
    question: "Posso usar gasolina aditivada na mistura da roçadeira?",
    answer: [
      "Evite utilizar gasolina aditivada na mistura.",
      "Os detergentes presentes na gasolina aditivada de posto podem reagir com os pacotes de aditivos do óleo 2 tempos e formar uma borra gelatinosa no carburador.",
      <>
        Dê preferência sempre à gasolina comum fresca de um posto de confiança, e caso note falhas na marcha lenta, veja como resolver em nosso{' '}
        <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
          guia para regular o carburador da roçadeira
        </a>
        .
      </>
    ]
  },
  {
    question: "Posso usar óleo Stihl 8017H em roçadeiras Toyama, Vulcan ou Branco?",
    answer: [
      "Sim, e é excelente para aumentar a vida útil do motor e reduzir a fumaça no trabalho.",
      "Porém, fique atento ao manual: muitas fabricantes de máquinas de entrada exigem manter uma margem maior de óleo (como 25:1 ou 30:1) por causa das folgas internas do cilindro, ou recomendam 40:1 a 50:1 especificamente quando usado óleo premium."
    ]
  },
  {
    question: "Quanto tempo dura a gasolina já misturada com óleo 2 tempos?",
    answer: [
      "No máximo de 15 a 30 dias guardada em galão bem fechado e protegido na sombra.",
      "Passou desse prazo, não use na roçadeira: a gasolina oxida, separa do óleo e cria uma goma que entope as mangueiras e resseca os diafragmas do carburador."
    ]
  }
];

export const MelhorOleo2Tempos: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<'usoSevero' | 'usoOcasional' | 'motosserra' | 'medidaExata' | null>('usoSevero');
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
            src="/images/blog/qual-o-melhor-oleo-2-tempos-para-rocadeira.webp"
            alt="Roçadeira a gasolina em bancada ao lado de frascos de óleo 2 tempos e galão misturador graduado"
            title="Qual o Melhor Óleo 2 Tempos para Roçadeira? Top 4 e Medida (2026)"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Qual o Melhor Óleo 2 Tempos para Roçadeira? <br />
            <span className="text-[#16A34A]">Top 4 e Medida (2026)</span>
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
            Quem trabalha no trecho limpando lote sabe que não existe prejuízo pior do que ouvir o motor da roçadeira gritar seco e travar de vez no meio do sol quente.
          </p>
          <p>
            Diferente de máquinas 4 tempos, a vida útil do cilindro e do pistão da sua roçadeira depende diretamente do lubrificante que vai misturado no tanque.
          </p>
          <p>
            Saber qual o melhor óleo 2 tempos para roçadeira e acertar na medida do dosador evita fumaça excessiva, vela encharcada e o temido motor fundido.
          </p>
          <p>
            Abaixo, reuni os 4 melhores óleos do mercado em 2026 e a tabela exata de mistura para você proteger sua máquina.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl font-bold text-white">
              Simulador Rápido: Qual óleo 2 tempos combina com a sua roçada?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('usoSevero')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'usoSevero'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Uso Profissional / Jornadas Longas (50:1)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('usoOcasional')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'usoOcasional'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Chácara de Fim de Semana / Importada (25:1)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('motosserra')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'motosserra'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Roçadeira + Motosserra (Estoque em Kit)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('medidaExata')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'medidaExata'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Quero Ver Logo a Medida por Litro</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/90 border border-gray-700 rounded-xl">
              {quizProfile === 'usoSevero' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: Para jornadas longas sem carbonizar o escape, escolha o{' '}
                  <a href="#item-stihl-8017h" className="text-[#4ade80] underline font-bold">
                    Óleo Stihl 8017H
                  </a>{' '}
                  ou o{' '}
                  <a href="#item-husqvarna-pro" className="text-[#4ade80] underline font-bold">
                    Husqvarna Pro Semissintético
                  </a>{' '}
                  na mistura econômica 50:1.
                </p>
              )}
              {quizProfile === 'usoOcasional' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: Para limpezas ocasionais em roçadeiras Toyama, Vulcan ou Nakasaki, o{' '}
                  <a href="#item-lubrax-essencial" className="text-[#4ade80] underline font-bold">
                    Lubrax Essencial 2T Mineral
                  </a>{' '}
                  entrega proteção segura com ótimo custo por frasco.
                </p>
              )}
              {quizProfile === 'motosserra' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: Para abastecer roçadeira e motosserra com excelente fluidez, o{' '}
                  <a href="#item-castrol-chainsaw" className="text-[#4ade80] underline font-bold">
                    Kit 2 Óleo Castrol Chainsaw 2T
                  </a>{' '}
                  oferece ótimo preço por litro e proteção testada em campo.
                </p>
              )}
              {quizProfile === 'medidaExata' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: Confira logo abaixo a{' '}
                  <a href="#tabela-proporcao" className="text-[#4ade80] underline font-bold">
                    Tabela Universal de Proporção (25:1 e 50:1)
                  </a>{' '}
                  para preparar 1, 2, 5 ou 10 litros de combustível sem risco de fundir o motor.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE RESUMO DOS 4 ÓLEOS (Miniaturas 60x60 Otimizadas)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: Os 4 Melhores Óleos 2 Tempos de 2026
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Óleo / Especificação</th>
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
            5. ANÁLISE DETALHADA DOS 4 MELHORES ÓLEOS 2 TEMPOS
            =================================================================== */}
        <div className="space-y-16">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-2 mt-12">
            Análise Técnica dos 4 Melhores Óleos 2 Tempos para Roçadeira
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

                {/* REGRA: H3 usa o nome exato do arquivo de imagem sem extensão */}
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

                {/* Ficha Técnica Enxuta */}
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider w-2/5">
                          Especificação
                        </th>
                        <th className="px-4 py-2.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                          Detalhe Técnico
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

                {/* Tabela de Notas por Critério */}
                <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Critério Avaliado</th>
                        <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-[100px]">Nota</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">O que percebemos em campo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                      {model.criteria.map((c, cIdx) => (
                        <tr key={cIdx}>
                          <td className="px-4 py-3 font-semibold">{c.criterion}</td>
                          <td className="px-4 py-3 text-center font-bold text-[#166534] whitespace-nowrap">{c.score}</td>
                          <td className="px-4 py-3 text-gray-600">{c.observation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Ponto Estratégico 1 do Banner do Meio (Após o 2º produto) */}
              {index === 1 && <BunnerDoMeio />}
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
              Acessórios Essenciais para Proteger Seu Motor e Rendimento
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cross-Sell 1: Kit Misturador + Óleo 2T */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Medição Exata
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.kitOleo2t.image}
                    alt="Kit Misturador de Combustível com Óleo 2 Tempos"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit Misturador + Óleo 2T
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Garante a dosagem exata de combustível (25:1 ou 50:1) e evita carbonização na vela ou travamento do pistão.
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

            {/* Cross-Sell 2: Faca 3 Pontas Spin */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Corte Pesado
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.facaSpin.image}
                    alt="Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm Spin"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Faca 3 Pontas Spin (300mm)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Lâmina de aço reforçada (2,9mm) para derrubar capim denso e braquiária sem sobrecarregar o motor 2 tempos.
                </p>
              </div>
              <a
                href={crossSellProducts.facaSpin.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 3: Kit Completo de EPIs */}
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
                  Kit Completo de EPIs
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Proteção indispensável para rosto, ouvidos e canelas contra pedras e detritos lançados em alta velocidade.
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
            7. O QUE É A ROÇADEIRA COM MOTOR 2 TEMPOS?
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            O que é a roçadeira com motor 2 tempos?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Ao contrário do motor de um carro ou de um cortador de grama 4 tempos — que têm um reservatório separado só para o óleo —, o motor 2 tempos da roçadeira faz o ciclo completo de explosão em apenas dois movimentos do pistão e não possui cárter fechado.
            </p>
            <p>
              É essa construção simples que deixa a máquina leve no cinto e permite trabalhar inclinado em barrancos sem faltar lubrificação.
            </p>
            <p>
              Em compensação, o óleo precisa entrar junto com a gasolina: se você abastecer gasolina pura, o atrito seco entre o metal do pistão e o cilindro derrete as peças e funde o motor em poucos minutos.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/Entendendo o Motor Dois Tempos nas Roçadeiras.webp"
              alt="Estrutura mecânica de um motor 2 tempos de roçadeira mostrando pistão e cilindro"
              title="Entendendo o Motor Dois Tempos nas Roçadeiras"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            8. MINERAL, SEMISSINTÉTICO OU SINTÉTICO: QUAL A DIFERENÇA?
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Mineral, Semissintético ou Sintético: Qual a Diferença?
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Óleo Mineral
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Refinado diretamente do petróleo, sendo a opção mais barata para máquinas usadas de vez em quando.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Solta mais fumaça e cria crostas de carvão no pistão e na tela corta-fogo do escape, pedindo descarbonização frequente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Óleo Semissintético
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                É o melhor equilíbrio entre custo e proteção para a grande maioria dos operadores no campo.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mistura base mineral com aditivos sintéticos de limpeza, diminuindo a fumaça,{' '}
                <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  facilitando a partida
                </a>{' '}
                e evitando a vela encharcada que obriga você a{' '}
                <a href="/como-desafogar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  desafogar a roçadeira
                </a>{' '}
                no meio do serviço.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Óleo 100% Sintético
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Feito em laboratório para regime florestal extremo com jornadas pesadas de oito horas diárias.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tem queima quase perfeita e zero depósito de cinzas, compensando o preço mais alto para quem vive da roçada.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4">
            Guia prático de dosagem de lubrificante para motores 2 tempos
          </h3>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left">Tipo de Óleo 2T</th>
                  <th className="p-4 text-left">Proporção Recomendada</th>
                  <th className="p-4 text-left text-[#166534]">Medida por Litro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Sintético / Semissintético (Alta Performance)
                  </th>
                  <td className="p-4 font-semibold text-gray-800">50:1</td>
                  <td className="p-4 font-bold text-[#166534]">20 ml de óleo para 1L de gasolina</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Mineral (Padrão API TC)
                  </th>
                  <td className="p-4 font-semibold text-gray-800">25:1</td>
                  <td className="p-4 font-bold text-gray-800">40 ml de óleo para 1L de gasolina</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Usa uma máquina da linha TBC ou 4T da Toyama? Veja a tabela dedicada no guia de{' '}
            <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
              qual o melhor óleo para roçadeira Toyama
            </a>{' '}
            (e para proprietários da linha sueca, confira também nosso review se a{' '}
            <a href="/rocadeira-husqvarna-131r-e-boa" className="text-[#166534] font-semibold hover:underline">
              roçadeira Husqvarna 131R é boa
            </a>
            ).
          </p>
        </section>

        {/* ===================================================================
            9. A TABELA UNIVERSAL: PROPORÇÃO ÓLEO 2 TEMPOS ROÇADEIRA
            =================================================================== */}
        <section id="tabela-proporcao" className="scroll-mt-24 mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            🧪 A Tabela Universal: Proporção Óleo 2 Tempos Roçadeira
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Nunca meça o óleo na tampinha ou no olho.
            </p>
            <p>
              A regra de campo é clara: óleos minerais comuns em máquinas importadas costumam pedir a medida 25:1 (40 ml por litro), enquanto óleos premium de alta performance (como Stihl 8017H e Husqvarna) trabalham em 50:1 (20 ml por litro).
            </p>
            <p>
              Confira na tabela abaixo as medidas exatas para o seu galão:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left">Volume de Gasolina</th>
                  <th className="p-4 text-left">Óleo Mineral (Mistura 25:1)</th>
                  <th className="p-4 text-left text-[#166534]">Óleo Alta Performance (Mistura 50:1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">1 Litro</th>
                  <td className="p-4 text-gray-700">40 ml de óleo</td>
                  <td className="p-4 font-bold text-[#166534]">20 ml de óleo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">2 Litros</th>
                  <td className="p-4 text-gray-700">80 ml de óleo</td>
                  <td className="p-4 font-bold text-[#166534]">40 ml de óleo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">5 Litros (Galão)</th>
                  <td className="p-4 text-gray-700">200 ml de óleo</td>
                  <td className="p-4 font-bold text-[#166534]">100 ml de óleo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">10 Litros</th>
                  <td className="p-4 text-gray-700">400 ml de óleo</td>
                  <td className="p-4 font-bold text-[#166534]">200 ml de óleo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            10. COMO FAZER A MISTURA DO COMBUSTÍVEL NO LUBRIFICANTE?
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como fazer a mistura do combustível no lubrificante?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Jamais jogue o óleo e a gasolina separados direto dentro do tanque da roçadeira: o óleo é mais pesado, desce para o fundo e entope o pescador do carburador.
            </p>
            <p>
              Use sempre um galão misturador limpo e exclusivo.
            </p>
            <p>
              Coloque primeiro metade da gasolina, adicione toda a medida de óleo marcada no copinho dosador, feche e agite bem por 15 segundos.
            </p>
            <p>
              Depois, complete com o restante da gasolina e agite novamente antes de abastecer a máquina.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-fazer-mistura-oleo-2-tempos-rocadeira.webp"
              alt="Operador usando luvas despejando óleo 2 tempos no dosador para misturar com gasolina em galão transparente"
              title="Como fazer a mistura correta de óleo 2 tempos na gasolina"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            11. PREJUÍZOS DA QUANTIDADE ERRADA E CUIDADOS COM O MOTOR 2T
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Quais são os prejuízos que a quantidade errada pode trazer?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Óleo demais (Mistura Gorda)
              </h3>
              <p className="text-sm text-amber-900 leading-relaxed mb-2">
                A roçadeira solta um fumaceiro azulado, perde força em alta rotação e baba um caldo preto pelo escapamento.
              </p>
              <p className="text-sm text-amber-900 leading-relaxed">
                O excesso ainda encharca a vela de ignição e entope a janela de escape com carvão duro.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Óleo de menos (Mistura Pobre)
              </h3>
              <p className="text-sm text-red-900 leading-relaxed mb-2">
                É o erro fatal para o equipamento: sem lubrificação suficiente, o motor esquenta rápido demais e muda para um barulho agudo e metálico.
              </p>
              <p className="text-sm text-red-900 leading-relaxed">
                Em poucos minutos, o pistão dilata, risca a camisa do cilindro e trava o motor de vez.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Cuidados necessários com a roçadeira 2 tempos
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              O erro número um que lota as oficinas não é o óleo ruim, mas a gasolina velha no tanque.
            </p>
            <p>
              A gasolina misturada com óleo 2 tempos começa a oxidar e separar depois de 15 a 30 dias parada, virando uma goma que resseca as membranas do carburador e entope as mangueiras.
            </p>
            <p>
              Prepare apenas o combustível que vai gastar na semana.
            </p>
            <p>
              Quando terminar o serviço e só voltar a roçar no mês seguinte, esvazie o tanque no galão e ligue a máquina até que ela queime o restante do carburador e apague sozinha.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4">
            Use EPIs
          </h3>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Antes mesmo de puxar a cordinha de partida, vestir os equipamentos de proteção individual evita acidentes graves causados por pedras, galhos e detritos arremessados pela lâmina em alta rotação.
            </p>
            <p>
              O conjunto obrigatório inclui protetor facial de tela ou acrílico, protetor auricular tipo concha, luvas de raspa antiderrapantes, caneleiras e botas fechadas com biqueira reforçada.
            </p>
            <p>
              Dê preferência a vestimentas e acessórios certificados pelo INMETRO para suportar o impacto constante durante jornadas longas no campo.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4">
            O Cuidado Transversal: Da Roçadeira ao Motocultivador
          </h3>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Em propriedades rurais com vários equipamentos, um descuido comum é confundir o galão de gasolina pura com o galão de mistura preparada para o motor 2 tempos.
            </p>
            <p>
              Motocultivadores e microtratores modernos costumam operar com motores 4 tempos, que levam gasolina pura no tanque e lubrificante separado direto no cárter.
            </p>
            <p>
              Identifique os galões com etiquetas claras para nunca colocar gasolina sem óleo na roçadeira nem mistura 2 tempos no tanque de uma máquina 4 tempos.
            </p>
          </div>

          {/* Avatar Circular do Autor (Reforço E-E-A-T) */}
          <div className="w-full flex justify-center mt-10 mb-4">
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

          {/* Box de Destaque: Dica Prática do Especialista */}
          <div className="my-6 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-[#166534] shrink-0" size={20} />
              <h3 className="text-lg font-bold text-[#166534]">
                Dica Prática do Trecho (Agite Antes de Reabastecer)
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-800">
              Se a mistura já preparada dormiu de um dia para o outro no galão, dê uma boa agitada de dez segundos antes de encher o tanque da roçadeira novamente para garantir que o lubrificante volte a se espalhar por igual no combustível.
            </p>
          </div>
        </section>

        {/* ===================================================================
            11B. REGIME DE TRABALHO E ESCOLHA DO ÓLEO POR TIPO DE ROÇADEIRA 2T
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como o regime de trabalho da roçadeira 2 tempos define o óleo certo
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A temperatura interna do cilindro varia bastante conforme o jeito que você acelera e o porte da máquina em campo.
            </p>
            <p>
              Manter aceleração firme durante a varredura da direita para a esquerda e aliviar o gatilho no retorno reduz o calor na embreagem e garante a queima limpa do lubrificante (veja o protocolo completo de partida e aquecimento em{' '}
              <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como ligar roçadeira a gasolina
              </a>
              ).
            </p>
            <p>
              Se você ainda está comparando cilindradas e estruturas antes de investir em um equipamento novo, confira nosso comparativo da{' '}
              <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
                melhor roçadeira
              </a>
              ; abaixo, veja qual classe de óleo 2T protege melhor cada categoria de máquina:
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-utilizar-rocadeira-corte-correto.webp"
              alt="Operador equipado com EPIs completos manuseando roçadeira lateral 2 tempos paralelamente ao solo em movimento de corte correto"
              title="Operação em regime constante de roçadeira 2 tempos e exigência térmica do lubrificante"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Roçadeiras pesadas (43 cc+)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Trabalham horas seguidas em alta carga derrubando capim fechado e pastagem suja.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Exigem óleo semissintético ou sintético JASO FD (50:1) de alta estabilidade térmica para não riscar o pistão no calor intenso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Roçadeiras intermediárias (26 a 35 cc)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Operam em chácaras e manutenção quinzenal alternando entre nylon e lâmina leve.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Aceitam tanto mineral API TC (25:1) quanto semissintético (50:1), sendo o semissintético superior por evitar borra no escapamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Roçadeiras multifuncionais
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Oscilam muito entre marcha lenta e rotação máxima ao usar podador de galhos ou aparador de cerca viva.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Beneficiam-se de óleos semissintéticos com aditivos detergentes que impedem a carbonização rápida da vela.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. MELHORES MARCAS DE ÓLEO 2 TEMPOS PARA ROÇADEIRA (AUTORIDADE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Melhores Marcas de Óleo 2 Tempos para Roçadeira
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Escolher marcas homologadas para alta rotação garante proteção real ao pistão sem formar borra nas palhetas e na vela.
            </p>
            <p>
              Veja o diferencial de cada fabricante analisada neste guia:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Stihl
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Líder em confiabilidade nas oficinas com o 8017H, formulado sob medida para manter a câmara limpa em regime 50:1.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Husqvarna
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Referência em óleos semissintéticos de alta dissipação térmica para jornadas contínuas de trabalho pesado em campo aberto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Castrol
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Detentora da formulação por trás dos melhores lubrificantes de alta rotação para roçadeiras e motosserras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Lubrax (Petrobras)
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Marca nacional de maior capilaridade, garantindo lubrificante mineral API TC seguro e barato em qualquer região.
              </p>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            13. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">
            🙋‍♂️ FAQ: Dúvidas Comuns sobre Lubrificantes
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
            14. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#4ade80] tracking-tight">
              Conclusão: Qual o melhor óleo 2 tempos para roçadeira?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Escolher qual o melhor óleo 2 tempos para roçadeira é o seguro de vida mais barato para o seu equipamento.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Se você quer motor limpo, zero fumaça e máximo rendimento em qualquer jornada, vá sem medo no Stihl 8017H ou no Husqvarna Pro na medida 50:1.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Se busca economia para uso leve de fim de semana ou estoque para várias máquinas, o Lubrax Essencial 2T e o Castrol Chainsaw dão conta do recado com folga.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Use sempre gasolina comum fresca, meça no copo dosador e bom trabalho no trecho!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorOleo2Tempos;
