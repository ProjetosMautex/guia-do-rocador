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

interface ShowcaseItem {
  id: ProductId;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
  thumbSrc: string;
}

interface NakasakiModelReview {
  id: ProductId;
  anchorId: string;
  badge: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  whiteBgCutout?: boolean;
  paragraphs: string[];
  specs: { label: string; value: string; highlight?: boolean }[];
  pros: string[];
  cons: string[];
  criteria: { name: string; score: string; note: string }[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "rocadeira-a-gasolina-costal-2-tempos-65cc-nakasaki",
    anchorId: "item-nakasaki-costal-65cc",
    shortName: "Nakasaki Costal 65cc 2T (Melhor Ergonomia)",
    category: "Terrenos Inclinados / Menos Fadiga",
    score: "8.8 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki-thumb.webp"
  },
  {
    id: "rocadeira-gasolina-65cc-nakasaki-nk-650at-3hp-2-tempos-eixo-bipartido",
    anchorId: "item-nakasaki-nk650at",
    shortName: "Nakasaki NK-650AT 65cc Bipartida (Mais Prática)",
    category: "Chácaras / Cabe no Porta-Malas",
    score: "8.9 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos Eixo Bipartido-thumb.webp"
  },
  {
    id: "rocadeira-gasolina-profissional-nakasaki-2t-75cc-com-trimmer",
    anchorId: "item-nakasaki-75cc",
    shortName: "Nakasaki 75cc 2T Com Trimmer (Mais Forte)",
    category: "Mato Alto Denso / Kit Completo",
    score: "8.7 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer-thumb.webp"
  },
  {
    id: "carretel-para-rocadeira-autocut-26-2-stihl-original",
    anchorId: "item-carretel-autocut",
    shortName: "Carretel Stihl AutoCut 26-2 (Upgrade Recomendado)",
    category: "Acessório de Alta Durabilidade",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Carretel Para Roçadeira Autocut 26-2 Stihl Original-thumb.webp"
  }
];

const nakasakiModels: NakasakiModelReview[] = [
  {
    id: "rocadeira-a-gasolina-costal-2-tempos-65cc-nakasaki",
    anchorId: "item-nakasaki-costal-65cc",
    badge: "Melhor Conforto em Barrancos e Lotes Irregulares",
    heading: "Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki",
    imageSrc: "/images/blog/Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki.webp",
    imageAlt: "Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki com kit de lâminas e carretel sobre o gramado",
    whiteBgCutout: false,
    paragraphs: [
      "Para quem precisa limpar terrenos acidentados, barrancos ou pomares sem castigar os braços, a versão costal de 65cc da Nakasaki entrega uma vantagem ergonômica imediata.",
      "Como o motor 2 tempos fica apoiado em uma estrutura acolchoada nas costas e transfere o giro por um cabo flexível até a haste, o operador movimenta apenas o tubo leve de alumínio durante a roçada.",
      "Na prática, o bloco tem fôlego de sobra para derrubar capim alto e vegetação fechada em chácaras e sítios, vindo acompanhado de um kit variado de lâminas e carretel já na caixa.",
      "Por utilizar eixo flexível entre a mochila e o tubo, pede lubrificação periódica com graxa e atenção ao preparo correto da mistura de óleo 2 tempos para trabalhar sempre macia."
    ],
    specs: [
      { label: "Motorização Declarada", value: "2 Tempos a Gasolina — Série 65cc (3 HP)" },
      { label: "Arquitetura de Uso", value: "Costal (Mochila ergonômica com eixo flexível)", highlight: true },
      { label: "Indicação Principal", value: "Terrenos inclinados, taludes, chácaras e entre árvores" },
      { label: "Itens de Série", value: "Lâminas metálicas, carretel de nylon, dosador e kit de chaves" }
    ],
    pros: [
      "Retira o peso do motor dos braços e punhos.",
      "Excelente mobilidade para roçar barrancos e locais estreitos.",
      "Boa força de corte para limpeza periódica de mato alto.",
      "Acompanha pacote completo de acessórios de fábrica."
    ],
    cons: [
      "Transmissão flexível exige engraxamento preventivo regular.",
      "Aquece um pouco mais as costas do operador em dias muito quentes."
    ],
    criteria: [
      { name: "Custo-Benefício", score: "9.1 / 10", note: "Uma das roçadeiras costais mais acessíveis do mercado nacional." },
      { name: "Conforto em Declives", score: "9.2 / 10", note: "Facilita muito o alcance em barrancos onde modelos laterais cansam." },
      { name: "Facilidade de Manutenção", score: "8.2 / 10", note: "Requer cuidado extra na lubrificação do cabo flexível." }
    ]
  },
  {
    id: "rocadeira-gasolina-profissional-nakasaki-2t-75cc-com-trimmer",
    anchorId: "item-nakasaki-75cc",
    badge: "Maior Força de Corte + Kit Completo",
    heading: "Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer",
    imageSrc: "/images/blog/Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer.webp",
    imageAlt: "Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer e acessórios de corte no gramado",
    whiteBgCutout: false,
    paragraphs: [
      "A Nakasaki 75cc Com Trimmer é a versão mais procurada por quem enfrenta lotes tomados por braquiária grossa, capim-colonião e ervas daninhas resistentes.",
      "Embora a nomenclatura comercial 75cc seja otimista em relação ao volume real da câmara de combustão — prática comum nas importadas dessa faixa —, o motor entrega rotação vigorosa e ótimo poder de ataque com lâmina metálica.",
      "Sua estrutura lateral com tubo rígido e guidão estilo bicicleta favorece o movimento de pêndulo em áreas abertas, rendendo rápido o serviço de fim de semana no sítio.",
      "Em contrapartida, o foco em alto giro cobra um consumo de gasolina mais elevado e exige pausas para resfriamento em dias de calor intenso, não sendo indicada apenas para aparar grama baixa de jardim."
    ],
    specs: [
      { label: "Categoria Comercial", value: "Motor 2 Tempos — Série 75cc de Alto Giro" },
      { label: "Transmissão e Pegada", value: "Haste lateral rígida com guidão duplo tipo bicicleta" },
      { label: "Diferencial do Pacote", value: "Kit ampliado com lâminas, carretel e cabeçote trimmer", highlight: true },
      { label: "Perfil Recomendado", value: "Limpeza pesada esporádica em sítios e terrenos baldios" }
    ],
    pros: [
      "Alto poder de corte em capim denso e mato fechado.",
      "Acompanha kit generoso de acessórios logo na compra.",
      "Guidão duplo garante boa alavanca em terrenos planos.",
      "Peças mecânicas universais fáceis de achar na internet."
    ],
    cons: [
      "Consumo de combustível superior aos modelos menores.",
      "Pesada e superdimensionada para pequenos jardins residenciais."
    ],
    criteria: [
      { name: "Desempenho no Mato Alto", score: "9.0 / 10", note: "Corta touceiras grossas com facilidade quando usada com lâmina afiada." },
      { name: "Pacote de Acessórios", score: "9.2 / 10", note: "Entrega excelente variedade de itens pelo valor cobrado." },
      { name: "Economia de Combustível", score: "8.0 / 10", note: "Pede tanque cheio com maior frequência sob aceleração alta." }
    ]
  },
  {
    id: "rocadeira-gasolina-65cc-nakasaki-nk-650at-3hp-2-tempos-eixo-bipartido",
    anchorId: "item-nakasaki-nk650at",
    badge: "Mais Equilibrada e Fácil de Transportar",
    heading: "Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos Eixo Bipartido",
    imageSrc: "/images/blog/Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos Eixo Bipartido.webp",
    imageAlt: "Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos com Eixo Bipartido",
    whiteBgCutout: true,
    paragraphs: [
      "Para a maioria dos donos de chácaras e terrenos afastados, a Nakasaki NK-650AT de 65cc representa a compra mais equilibrada e racional do catálogo da marca.",
      "Seu principal trunfo prático é o tubo de transmissão bipartido com trava rápida, que permite desmontar a haste ao meio em segundos para levar a máquina no porta-malas de qualquer carro de passeio.",
      "Aliado a isso, o motor de 3 HP nominais trabalha em conjunto com um tanque de excelente capacidade (cerca de 1,2 litro), garantindo boa autonomia antes de parar para reabastecer.",
      "Basta manter a luva de acoplamento central sempre limpa, bem apertada e engraxada para preservar a transferência firme de torque até a ponteira por bastante tempo."
    ],
    specs: [
      { label: "Motorização / Potência", value: "Motor 2 Tempos — Série 65cc / 3 HP nominais" },
      { label: "Sistema de Haste", value: "Tubo bipartido com acoplamento central para transporte", highlight: true },
      { label: "Empunhadura", value: "Guidão bipartido ergonômico com gatilho de segurança" },
      { label: "Uso Ideal", value: "Manutenção quinzenal ou mensal de chácaras, lotes e sítios" }
    ],
    pros: [
      "Cabe facilmente no porta-malas graças ao eixo bipartido.",
      "Ótimo equilíbrio entre força de corte, preço e consumo.",
      "Tanque amplo que reduz paradas constantes de abastecimento.",
      "Guarda compacta em garagens, armários ou depósitos."
    ],
    cons: [
      "Exige aperto firme na junção do tubo antes de iniciar o serviço.",
      "Cinto simples de série pede bom ajuste para não cansar o ombro."
    ],
    criteria: [
      { name: "Praticidade de Transporte", score: "9.6 / 10", note: "Resolve a vida de quem leva a máquina da cidade para o sítio." },
      { name: "Custo-Benefício Geral", score: "9.3 / 10", note: "Entrega exatamente o que o usuário doméstico pesado precisa pagando pouco." },
      { name: "Rigidez da Junção", score: "8.4 / 10", note: "Funciona muito bem desde que a trava central seja mantida limpa e firme." }
    ]
  }
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

export const RocadeiraNakasakiEBoa: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<'costal' | 'bipartida' | 'pesada' | 'diario' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Onde encontrar peças de reposição para a roçadeira Nakasaki?",
      answer: [
        "Essa é uma boa notícia na prática: a Nakasaki utiliza a plataforma mecânica padrão das roçadeiras importadas de 52cc e 63cc.",
        "Por isso, carburadores, velas, bobinas, tampas de partida retrátil, embreagens e ponteiras compatíveis são encontrados com enorme facilidade e preço baixo em oficinas de jardinagem e nos principais marketplaces."
      ]
    },
    {
      question: "A roçadeira Nakasaki aguenta serviço profissional todos os dias?",
      answer: [
        "Ela não foi projetada para operação comercial severa de 8 horas diárias de segunda a sábado, pois o aquecimento contínuo acelera o desgaste de retentores, coxins e caixa de transmissão.",
        <>
          Para roçadas periódicas de chácaras, sítios e terrenos próprios, ela atende muito bem; já para empreiteiras e prestadores diários, vale conferir as máquinas industriais no nosso guia da{' '}
          <a href="/melhor-rocadeira" className="text-[#166534] hover:underline font-semibold">
            melhor roçadeira profissional de 2026
          </a>
          .
        </>
      ]
    },
    {
      question: "Qual a mistura correta de gasolina e óleo 2 tempos na Nakasaki?",
      answer: [
        "Nos motores 2 tempos importados como os da Nakasaki, a recomendação segura de oficina é utilizar a proporção 25:1, ou seja, 40 ml de óleo 2 tempos de boa qualidade para cada 1 litro de gasolina comum fresca.",
        "Nos dois primeiros tanques de amaciamento, evite segurar o acelerador no máximo sem carga e nunca guarde combustível misturado no tanque por mais de 15 dias."
      ]
    },
    {
      question: "Minha Nakasaki nova está difícil de pegar na primeira partida, o que fazer?",
      answer: [
        "Na maioria das vezes o motor apenas afogou por excesso de puxadas com o afogador fechado após o primeiro sinal de explosão.",
        <>
          Basta retornar a alavanca do afogador para a posição aberta e seguir o nosso passo a passo de{' '}
          <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como ligar roçadeira a gasolina a frio
          </a>{' '}
          ou de{' '}
          <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como desafogar roçadeira em 2 minutos
          </a>
          .
        </>
      ]
    }
  ];

  const renderModelSection = (model: NakasakiModelReview, showTopBorder: boolean) => (
    <section
      key={model.id}
      id={model.anchorId}
      className={`scroll-mt-24 ${showTopBorder ? 'pt-10 border-t border-gray-200' : 'pt-2'}`}
    >
      <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
        {model.badge}
      </span>

      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4 leading-snug">
        {model.heading}
      </h3>

      <div className="w-full flex justify-center mb-8 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <img
          src={model.imageSrc}
          alt={model.imageAlt}
          title={products[model.id]?.name || model.heading}
          width={800}
          height={533}
          className={`max-h-80 w-auto object-contain rounded-xl ${model.whiteBgCutout ? 'mix-blend-multiply' : ''}`}
          loading="lazy"
        />
      </div>

      <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
        {model.paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Ficha Técnica Rápida */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
          <tbody className="divide-y divide-gray-200">
            {model.specs.map((spec, idx) => (
              <tr key={idx}>
                <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700 w-2/5">
                  {spec.label}
                </th>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {spec.highlight && <Check className="text-[#16A34A] inline mr-1.5" size={18} />}
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Principal de Afiliado */}
      <AffiliateCard id={model.id} />

      {/* Prós e Contras */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
            <Check size={20} className="text-[#16A34A]" /> Prós
          </h4>
          <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
            {model.pros.map((pro, idx) => (
              <li key={idx}>{pro}</li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <X size={20} className="text-red-600" /> Contras
          </h4>
          <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
            {model.cons.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabela de Notas por Critério */}
      <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Critério Avaliado
              </th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider w-[110px]">
                Nota
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                Avaliação Prática
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {model.criteria.map((c, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 font-semibold">{c.name}</td>
                <td className="px-4 py-3 text-center font-bold text-[#166534] whitespace-nowrap">{c.score}</td>
                <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-gray-50 text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Único H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer.webp"
            alt="Roçadeira a gasolina Nakasaki 2 tempos com kit completo de acessórios sobre o gramado"
            title="Roçadeira Nakasaki é Boa? Review de 3 Modelos em 2026"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Roçadeira Nakasaki é Boa? <br />
            <span className="text-[#16A34A]">[Review de 3 Modelos em 2026]</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-2 hover:text-[#16A34A] transition-colors font-semibold group"
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
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-xs sm:text-sm">Especialista Operacional em Roçadeiras</span>
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
            Quem procura uma roçadeira a gasolina potente e barata na internet quase sempre esbarra nos anúncios campeões de vendas da Nakasaki.
          </p>
          <p>
            Custando muitas vezes um terço das marcas florestais tradicionais e trazendo kits cheios de acessórios, a marca desperta uma dúvida justa sobre até onde vai sua resistência real no campo.
          </p>
          <p>
            Para ajudar você a decidir com segurança e sem exageros, analisamos na prática os 3 modelos mais buscados da Nakasaki em 2026, mostrando onde ela entrega ótimo custo-benefício, quais cuidados exige e quando ela vale o seu dinheiro.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#16A34A] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual versão atende melhor o seu terreno?</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Clique na sua realidade de uso para ver a recomendação honesta de campo:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('bipartida')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'bipartida'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Chácara ou Sítio + Levar no Carro</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('costal')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'costal'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Terreno Inclinado / Menos Peso nos Braços</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('pesada')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'pesada'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Mato Alto Fechado (Limpeza Periódica)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('diario')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'diario'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Prestação de Serviço Diário (8h/dia)</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/80 border border-gray-700 rounded-xl">
              {quizProfile === 'bipartida' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação Prática: Vá direto na{' '}
                  <a href="#item-nakasaki-nk650at" className="text-[#4ade80] underline font-bold">
                    Nakasaki NK-650AT 65cc Bipartida
                  </a>
                  , que desmonta ao meio para caber no porta-malas e tem ótimo equilíbrio para roçadas quinzenais.
                </p>
              )}
              {quizProfile === 'costal' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação Prática: Escolha a{' '}
                  <a href="#item-nakasaki-costal-65cc" className="text-[#4ade80] underline font-bold">
                    Nakasaki Costal 65cc
                  </a>
                  , que apoia o peso do motor nas costas e facilita muito o corte em barrancos e entre árvores.
                </p>
              )}
              {quizProfile === 'pesada' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação Prática: Aposte na força da{' '}
                  <a href="#item-nakasaki-75cc" className="text-[#4ade80] underline font-bold">
                    Nakasaki 75cc Com Trimmer
                  </a>{' '}
                  combinada com o upgrade do{' '}
                  <a href="#item-carretel-autocut" className="text-[#4ade80] underline font-bold">
                    Carretel Stihl AutoCut 26-2
                  </a>{' '}
                  para máxima resistência.
                </p>
              )}
              {quizProfile === 'diario' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Orientação Sincera: Para trabalho comercial pesado de sol a sol todos os dias, a Nakasaki não é a mais indicada; confira os modelos industriais (Stihl e Husqvarna) no nosso ranking da{' '}
                  <a href="/melhor-rocadeira" className="text-[#4ade80] underline font-bold">
                    Melhor Roçadeira
                  </a>
                  .
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
            Vitrine Rápida: Modelos Nakasaki e Upgrade Recomendado
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Destaque</th>
                  <th className="p-3 text-left hidden md:table-cell">Indicação</th>
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
            5. O MOTIVO DO SUCESSO E A DIFERENÇA DE PREÇO
            =================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Por que a Roçadeira Nakasaki Custa Tão Menos que as Marcas Tradicionais?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A grande diferença de preço é o principal fator que coloca a Nakasaki entre as roçadeiras mais vendidas dos marketplaces brasileiros.
            </p>
            <p>
              Essa economia acontece porque os equipamentos utilizam uma plataforma mecânica 2 tempos universal de fabricação asiática, comercializada diretamente por importadores online sem os custos de manter redes próprias de concessionárias físicas.
            </p>
            <p>
              Para o proprietário de chácara, sítio ou lote urbano que roça o terreno a cada 15 ou 30 dias, essa proposta faz muito sentido financeiro, já que a máquina frequentemente se paga logo nas duas ou três primeiras diárias de limpeza economizadas.
            </p>
            <p>
              O segredo para não se frustrar é compreender que ela entrega força honesta pelo que custa, mas pede cuidados simples de montagem, lubrificação e uso compatível com a categoria doméstica e semiprofissional.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/nakasaki-custo-beneficio-chacara.webp"
              alt="Operador com EPIs completos roçando mato alto em chácara ensolarada com roçadeira a gasolina 2 tempos"
              title="Uso prático de roçadeira 2 tempos de entrada na manutenção periódica de chácaras e sítios"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            6. ANÁLISE DETALHADA DOS 3 MODELOS NAKASAKI
            =================================================================== */}
        <div className="space-y-14">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-3">
            Análise dos 3 Principais Modelos de Roçadeira Nakasaki
          </h2>

          {nakasakiModels.map((model, index) => (
            <React.Fragment key={model.id}>
              {renderModelSection(model, index > 0)}
              {index === 1 && <BunnerDoMeio />}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            7. AVALIAÇÃO DOS ACESSÓRIOS ORIGINAIS E UPGRADE DE CARRETEL
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Avaliação dos Acessórios de Fábrica e o Upgrade que Faz a Diferença
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-10">
            <p>
              Um dos maiores atrativos das caixas da Nakasaki é a quantidade de itens enviados junto com o motor, permitindo começar o trabalho logo após a montagem.
            </p>
            <p>
              Na vivência de campo, vale conhecer o comportamento real de cada acessório para tirar o máximo proveito sem dores de cabeça:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Lâminas de Corte Inclusas
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  As facas metálicas que acompanham o kit entregam ótimo poder de corte inicial em capim alto, braquiária e arbustos macios.
                </p>
                <p>
                  Por possuírem chapa de aço mais fina que lâminas florestais temperadas avulsas, recomenda-se inspecionar o terreno antes para evitar impactos diretos contra pedras e tocos escondidos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Cinto de Sustentação Lateral
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Nas versões laterais (65cc bipartida e 75cc), a alça de ombro enviada de fábrica cumpre o papel básico em serviços curtos de até 40 minutos.
                </p>
                <p>
                  Caso você pretenda roçar áreas extensas por várias horas seguidas, investir futuramente em um colete duplo almofadado alivia bastante o peso sobre os ombros e a coluna.
                </p>
              </div>
            </div>
          </div>

          {/* Seção do Produto 4: Upgrade Carretel AutoCut 26-2 Stihl */}
          <div id="item-carretel-autocut" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
              Upgrade Favorito dos Operadores
            </span>

            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4 leading-snug">
              Carretel Para Roçadeira Autocut 26-2 Stihl Original
            </h3>

            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
                alt="Carretel Para Roçadeira Autocut 26-2 Stihl Original automático bate e libera"
                title="Carretel Para Roçadeira Autocut 26-2 Stihl Original"
                width={800}
                height={533}
                className="max-h-72 w-auto object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                O carretel plástico original que vem de brinde na Nakasaki atende acabamentos leves em grama macia, mas suas travas plásticas costumam desgastar mais rápido quando batidas contra calçadas ou pedregulhos.
              </p>
              <p>
                Por isso, uma dica clássica entre roçadores experientes é substituir o cabeçote básico quando ele gastar por um modelo profissional de polímero reforçado, como o AutoCut 26-2 Original da Stihl (conferindo a bucha ou porca adaptadora para rosca esquerda M10x1,25 da ponteira).
              </p>
              <p>
                Esse simples upgrade libera o fio de nylon com um toque suave no solo sem enroscar internamente e eleva muito a praticidade da máquina no acabamento de muros e canteiros.
              </p>
            </div>

            <AffiliateCard id="carretel-para-rocadeira-autocut-26-2-stihl-original" />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Check size={20} className="text-[#16A34A]" /> Prós do Upgrade
                </h4>
                <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
                  <li>Polímero de altíssima resistência contra impactos no solo.</li>
                  <li>Sistema bate-libera macio que não trava nem embola o fio.</li>
                  <li>Recarga rápida e intuitiva sem sofrimento no campo.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <X size={20} className="text-red-600" /> Pontos de Atenção
                </h4>
                <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                  <li>Representa um pequeno investimento adicional além da máquina.</li>
                  <li>Exige conferir o passo de rosca da ponteira (uso de porca/adaptador M10 se necessário).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. BANNER DE CROSS-SELL (ITENS COMPLEMENTARES ESSENCIAIS)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-[#16A34A] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              Itens Essenciais para Proteger e Usar Sua Nakasaki
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-base">
            Evite erros de mistura de combustível no motor 2 tempos e trabalhe sempre protegido com estes complementos básicos:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Proteção 2 Tempos
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
                  Indispensável para acertar a medida exata de 25:1 na gasolina e proteger o cilindro e o pistão contra superaquecimento.
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
                  Alto Rendimento
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.fioNylon.image}
                    alt="Fio de Nylon Duraline 3mm Quadrado para Roçadeira"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Fio de Nylon Quadrado 3mm
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Perfil quadrado que fatia grama grossa com muito menos esforço do motor e dura mais que os fios redondos simples.
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
                  Segurança no Campo
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
                  Protege olhos, rosto, ouvidos e canelas contra pedras e galhos lançados pelo giro alto das roçadeiras 65cc e 75cc.
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
            9. CONSERVAÇÃO, PARAFUSOS, BORRACHAS E CUIDADOS INICIAIS
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como Cuidar da Sua Nakasaki para Durar Muitos Anos
          </h2>

          <div className="w-full flex justify-center mb-8">
            <img
              src="/images/blog/manutencao-preventiva-rocadeira-nakasaki.webp"
              alt="Mecânico reapertando braçadeira do guidão com chave Allen e inspecionando borracha antivibração e parafusos de inox na bancada"
              title="Revisão preventiva de parafusos, amortecedores de borracha e lubrificação da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Montagem Inicial e Conferência na Entrega
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Como as roçadeiras Nakasaki viajam desmontadas nas transportadoras, vale conferir todas as carenagens plásticas, cabos e itens do pacote assim que a caixa chegar em casa.
                </p>
                <p>
                  Caso tenha qualquer dúvida na hora de encaixar a proteção da lâmina, o cabo do acelerador ou o guidão, preparamos um tutorial ilustrado completo de{' '}
                  <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] hover:underline font-semibold">
                    como montar roçadeira Nakasaki passo a passo
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Gancho, Borrachas de Amortecimento e Parafusos
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Motores 2 tempos de maior cilindrada geram vibração natural durante o corte, o que pode afrouxar porcas e parafusos nas primeiras horas de trabalho.
                </p>
                <p>
                  Criar o hábito de conferir o aperto dos parafusos da mesa do guidão, da ponteira e do gancho do cinto após os dois primeiros tanques evita folgas prematuras e preserva as luvas de borracha antivibração.
                </p>
                <p>
                  Outra medida simples que prolonga a vida útil do equipamento é guardar a máquina em local seco e, se algum parafuso externo apresentar oxidação com o tempo, substituí-lo facilmente por equivalentes em aço inox.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Lubrificação da Ponteira e Partida sem Afogar
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Antes de colocar a máquina no mato alto pela primeira vez, verifique se a caixa de engrenagens angular (ponteira) está bem preenchida com graxa específica para roçadeiras e repita esse cuidado a cada 20 horas de uso.
                </p>
                <p>
                  Na primeira partida do dia, puxe o cordão suavemente apenas até sentir a primeira resistência antes de dar o arranque firme, preservando as travas do retrátil, e abra o afogador assim que ouvir o primeiro sinal de ignição.
                </p>
              </div>
            </div>
          </div>

          {/* Reforço de Autoridade E-E-A-T + Dica Prática do Especialista */}
          <div className="w-full flex justify-center mt-10 mb-6">
            <a href="/author/jose-ailton/" aria-label="Ver perfil de campo de José Ailton da Silva">
              <img
                src="/images/autores/José Ailton da Silva-thumb.webp"
                alt="José Ailton da Silva"
                width={128}
                height={128}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#16A34A] hover:scale-105 transition-transform duration-200 shadow-md"
                loading="lazy"
              />
            </a>
          </div>

          <div className="my-6 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-[#16A34A] shrink-0" size={20} />
              <h3 className="text-lg font-bold text-[#166534]">
                Dica Prática do Especialista
              </h3>
            </div>
            <div className="space-y-3 text-base leading-relaxed text-gray-800">
              <p>
                Nos dois primeiros tanques da sua Nakasaki nova, faça o amaciamento correto do motor: trabalhe alternando a aceleração em rotações médias, sem travar o gatilho no fundo o tempo inteiro, e faça uma pausa rápida de 10 minutos a cada tanque consumido.
              </p>
              <p>
                Esse cuidado simples assenta os anéis do pistão sem superaquecer o cilindro e multiplica a durabilidade do motor.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. RESUMO EQUILIBRADO: VANTAGENS REAIS VS PONTOS DE ATENÇÃO
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Balanço Sincero: Pontos Fortes e Limitações da Nakasaki
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <Check size={22} className="text-[#16A34A] shrink-0" /> Onde a Marca Vale Muito a Pena
              </h3>
              <div className="space-y-3 text-green-900 text-base leading-relaxed">
                <p>
                  Preço de compra imbatível, permitindo adquirir uma máquina a gasolina potente investindo muito pouco.
                </p>
                <p>
                  Mecânica 2 tempos universal, com peças compatíveis baratas e amplamente disponíveis em oficinas e lojas online.
                </p>
                <p>
                  Força suficiente para cortar capim alto, braquiária e limpar terrenos de chácaras e sítios sem esforço braçal com enxada.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <X size={22} className="text-amber-700 shrink-0" /> Limitações que Você Deve Saber
              </h3>
              <div className="space-y-3 text-amber-900 text-base leading-relaxed">
                <p>
                  A garantia depende diretamente do importador ou lojista do marketplace, pois a marca não possui rede própria de autorizadas físicas.
                </p>
                <p>
                  Os números comerciais de cilindrada (65cc e 75cc) são nominais de fábrica, entregando na prática força equivalente à faixa real de 52cc a 62cc.
                </p>
                <p>
                  Não foi dimensionada para roçadas comerciais intensivas de sol a sol todos os dias, onde o desgaste de embreagem e coxins aparece mais cedo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            11. MELHORES MARCAS DE ROÇADEIRAS (COMPARATIVO DE POSICIONAMENTO)
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como a Nakasaki se Posiciona Frente às Melhores Marcas de Roçadeiras
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Entender o posicionamento de cada fabricante ajuda a comprar com expectativa realista e sem gastar além do necessário para o tamanho do seu terreno:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Nakasaki (Campeã de Preço Baixo para Uso Periódico)
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Focada no comprador que precisa resolver o mato alto do lote, chácara ou sítio gastando o mínimo possível na aquisição.
                </p>
                <p>
                  Entrega kits recheados de acessórios e manutenção barata via peças universais, desde que operada com mistura correta de óleo e revisões básicas de aperto e graxa.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Toyama e Vulcan (Degrau Intermediário com Assistência Nacional)
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Posicionam-se um degrau acima em controle de qualidade de fábrica e contam com rede oficial de assistência técnica e garantia estruturada no Brasil.
                </p>
                <p>
                  São ótimas alternativas para quem aceita investir um pouco mais para ter suporte técnico credenciado em uso semiprofissional frequente.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Stihl, Husqvarna e Honda (Padrão Profissional Intensivo)
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Construídas para fazendas, prefeituras e prestadores de serviço que ligam o motor de manhã e só desligam no fim da tarde.
                </p>
                <p>
                  Custam consideravelmente mais caro, mas compensam pelo baixo consumo, sistema antivibração superior e altíssima durabilidade estrutural ao longo de anos de trabalho pesado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            12. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            Perguntas Frequentes sobre a Roçadeira Nakasaki
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre peças, mistura de combustível, partida e indicação de uso dos modelos da marca.
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
            13. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO EQUILIBRADO E SINCERO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#16A34A] tracking-tight">
              Veredito Final: Afinal, a Roçadeira Nakasaki é Boa?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Sim, a roçadeira Nakasaki é uma boa compra quando escolhida para o propósito certo: proprietários de chácaras, sítios e terrenos que precisam cortar mato alto periodicamente gastando pouco encontram nela excelente força de corte, kit completo e peças universais baratas.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Caprichando na mistura correta de óleo 2 tempos, engraxando a ponteira e conferindo o aperto dos parafusos, modelos como a NK-650AT Bipartida e a Costal 65cc entregam ótimo retorno pelo investimento, deixando as máquinas industriais mais caras apenas para quem realmente vive da roçada pesada todos os dias.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RocadeiraNakasakiEBoa;
