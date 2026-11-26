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
// DADOS DOS 4 MODELOS DE ROÇADEIRA COSTAL A GASOLINA
// ============================================================================
interface CostalReview {
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

const costalReviews: CostalReview[] = [
  {
    id: "husqvarna-541rb",
    productId: "rocadeira-costal-a-gasolina-541rb-husqvarna-1-97hp",
    rank: "1. Roçadeira Costal Husqvarna 541RB (41,5 cc)",
    shortName: "Husqvarna 541RB (41,5 cc / 1,97 HP)",
    category: "Melhor Profissional Pesada (Taludes e Cafezal)",
    score: "9.8",
    badge: "Melhor Roçadeira Costal Profissional",
    subtitle: "A referência absoluta em durabilidade mecânica, filtragem de duplo estágio e amortecimento dorsal para jornadas diárias em encostas.",
    image: "/images/blog/Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp.webp",
    thumb: "/images/blog/thumbs/Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "41,5 cc / 1,97 HP (1,47 kW)" },
      { label: "Rotação em Potência Máxima", value: "7.000 RPM" },
      { label: "Capacidade do Tanque", value: "0,94 Litro" },
      { label: "Peso (sem conjunto de corte)", value: "10,1 kg" },
      { label: "Acessórios de Série", value: "Lâmina 2 pontas Multi 275-2 + Cabeçote T35 M12" }
    ],
    paragraphs: [
      "Na bancada da oficina, a Husqvarna 541RB está um degrau acima das importadas genéricas porque foi projetada especificamente para o serviço rural pesado em topografia acidentada.",
      "Seu motor 2 tempos de 41,5 cc entrega 1,97 HP com pico de torque em rotações intermediárias, o que permite desbastar braquiária alta em barrancos e limpar entrelinhas de cafezal sem precisar esgoelar o acelerador o tempo todo.",
      "O grande diferencial mecânico está no quadro dorsal com coxins de borracha de alta absorção e na base giratória do motor: conforme você movimenta a haste lateralmente na encosta, o bloco acompanha o ângulo do chicote flexível sem forçar a sua coluna.",
      "Além disso, o sistema de filtro de ar de dois estágios impede que a poeira fina de terra seca entre no cilindro, multiplicando a vida útil de anéis e pistão para quem trabalha todos os dias no trecho."
    ],
    pros: [
      "Quadro costal com amortecedores de alta eficiência que isolam a vibração das costas",
      "Motor 41,5 cc de alto torque com filtro de ar duplo para ambientes com muita poeira",
      "Já acompanha cabeçote de nylon profissional T35 (rosca M12) e lâmina 2 pontas original",
      "Ampla rede de peças originais e oficinas autorizadas Husqvarna em todo o Brasil"
    ],
    cons: [
      "Investimento inicial mais elevado que as opções nacionais e importadas de entrada",
      "Exige lubrificação rigorosa do cabo flexível com graxa a cada 30 a 50 horas"
    ]
  },
  {
    id: "toyama-tbc43bx-costal",
    productId: "rocadeira-toyama-costal-tbc43bx-a-gasolina-1-7hp-42-7cc",
    rank: "2. Roçadeira Toyama Costal TBC43BX (42,7 cc)",
    shortName: "Toyama TBC43BX Costal (42,7 cc)",
    category: "Melhor Custo-Benefício para Sítios e Chácaras",
    score: "9.5",
    badge: "Melhor Custo-Benefício",
    subtitle: "Equilíbrio certeiro entre preço acessível, motor 42,7 cc com peças fáceis de achar e mochila ergonômica acolchoada.",
    image: "/images/blog/Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc.webp",
    thumb: "/images/blog/thumbs/Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "42,7 cc / 1,7 HP (Motor 2 Tempos)" },
      { label: "Capacidade do Tanque", value: "1,1 Litro" },
      { label: "Eixo e Haste", value: "Eixo flexível + Tubo de alumínio 26 mm" },
      { label: "Empunhadura", value: "Alça tipo D (Loop) com ajuste rápido" },
      { label: "Acessórios de Série", value: "Carretel de nylon + Disco de corte + Kit ferramentas" }
    ],
    paragraphs: [
      "Para proprietários de sítios, chácaras inclinadas e operadores autônomos que precisam da mobilidade costal sem pagar o preço de uma máquina florestal sueca, a Toyama TBC43BX é a compra mais racional da categoria.",
      "Ela utiliza o consagrado bloco 2 tempos de 42,7 cc e 1,7 HP da linha TBC43 — o que significa que qualquer oficina do interior tem carburador, bobina, cordão de partida e jogo de juntas a pronta entrega por valores muito baixos.",
      "A estrutura de mochila da série BX traz encosto alto ventilado e alças largas que distribuem bem a carga nos ombros, enquanto a alça frontal em formato D dá agilidade para contornar pés de café, árvores frutíferas e valetas estreitas.",
      "O tanque de 1,1 litro garante mais de uma hora de roçada contínua por abastecimento, reduzindo as caminhadas de volta até o galão quando você está trabalhando no alto de um morro."
    ],
    pros: [
      "Excelente relação custo-benefício com mecânica 42,7 cc padronizada e barata de manter",
      "Mochila dorsal com encosto alto acolchoado e boa ventilação nas costas",
      "Tanque generoso de 1,1 litro que entrega ótima autonomia em terrenos grandes",
      "Acompanha carretel de nylon e disco metálico prontos para o trabalho"
    ],
    cons: [
      "Nível de ruído e vibração superior ao da Husqvarna 541RB em rotação máxima",
      "Consumo de combustível um pouco maior na fase inicial de amaciamento do motor"
    ]
  },
  {
    id: "vulcan-trent-vrc430",
    productId: "rocadeira-costal-vulcan-trent-vrc430",
    rank: "3. Roçadeira Costal Vulcan Trent VRC430 (43 cc)",
    shortName: "Vulcan Trent VRC430 Costal (43 cc)",
    category: "Melhor Multifuncional (Roçada + Enxada Rotativa)",
    score: "9.3",
    badge: "Destaque em Versatilidade Rural",
    subtitle: "Conjunto costal de 43 cc pensado para o pequeno produtor que precisa roçar barrancos e capinar canteiros ou cafezais com o mesmo motor.",
    image: "/images/blog/Roçadeira costal Vulcan Trent VRC430.webp",
    thumb: "/images/blog/thumbs/Roçadeira costal Vulcan Trent VRC430-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "43 cc / 1,7 HP (7.000 RPM)" },
      { label: "Capacidade do Tanque", value: "0,9 Litro" },
      { label: "Transmissão", value: "Eixo flexível reforçado + Haste 26 mm (9 estrias)" },
      { label: "Partida", value: "Manual retrátil com sistema Easy Start" },
      { label: "Diferencial do Kit", value: "Compatível com lâmina, nylon e implemento enxada rotativa" }
    ],
    paragraphs: [
      "A Vulcan Trent VRC430 conquistou espaço entre pequenos agricultores, horticultores e donos de chácaras pela sua proposta versátil e pelo arranque leve com mola assistida (Easy Start).",
      "Equipada com motor 2 tempos de 43 cilindradas e 1,7 HP a 7.000 RPM, ela utiliza tubo padrão de 26 mm com eixo interno de 9 estrias, permitindo acoplar não apenas o cabeçote de nylon e a faca de 2 pontas, mas também implementos agrícolas como a enxada rotativa capinadeira.",
      "Na prática do campo, isso permite que você derrube o mato alto das encostas pela manhã e, à tarde, troque a ponteira para afofar a terra e capinar ao redor de hortaliças, mandioca ou pés de café sem esforço braçal na enxada.",
      "O suporte costal conta com bolsa traseira integrada no topo da armação — um detalhe simples, mas muito útil para levar a chave de vela, o pino trava e um lance reserva de fio de nylon direto nas costas."
    ],
    pros: [
      "Alta versatilidade com eixo padrão 26 mm / 9 estrias compatível com enxada rotativa",
      "Sistema de partida leve que exige menos força no braço ao puxar o cordão a frio",
      "Bolsa porta-ferramentas integrada no topo do encosto da mochila",
      "Peças de reposição Vulcan amplamente disponíveis no mercado nacional"
    ],
    cons: [
      "O carretel de nylon original pede substituição futura por um modelo Easy Load mais robusto",
      "Alças da mochila exigem ajuste firme no peito para não folgar em descidas íngremes"
    ]
  },
  {
    id: "garthen-rc4500",
    productId: "rocadeira-costal-a-gasolina-2t-1-7hp-42-7cc-rc-4500-garthen",
    rank: "4. Roçadeira Costal a Gasolina Garthen RC-4500 (42,7 cc)",
    shortName: "Garthen RC-4500 Costal (42,7 cc)",
    category: "Melhor para Manutenção Rural e Taludes Médios",
    score: "9.1",
    badge: "Robusta e Econômica",
    subtitle: "Construção honesta de 42,7 cc com tanque superior por gravidade que facilita a partida a frio e mantém alimentação constante em ladeiras.",
    image: "/images/blog/Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen.webp",
    thumb: "/images/blog/thumbs/Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "42,7 cc / 1,7 HP (1,25 kW)" },
      { label: "Posição do Tanque", value: "Superior (alimentação assistida por gravidade)" },
      { label: "Capacidade do Tanque", value: "1,0 Litro" },
      { label: "Peso Aproximado", value: "10,2 kg" },
      { label: "Acessórios de Série", value: "Lâmina 3 pontas + Carretel de nylon + Misturador" }
    ],
    paragraphs: [
      "A Garthen RC-4500 destaca-se por um detalhe de projeto muito apreciado pelos mecânicos mais antigos: o tanque de combustível montado na parte superior do motor, acima do nível do carburador.",
      "Enquanto máquinas com tanque inferior dependem 100% do vácuo da membrana para puxar a gasolina na subida, o reservatório elevado da RC-4500 mantém o combustível descendo por gravidade mesmo quando o operador está inclinado em barrancos de 45 graus.",
      "Com 42,7 cilindradas e 1,7 HP, ela já vem de fábrica com lâmina de 3 pontas e cabeçote de nylon, dando conta com tranquilidade da limpeza de açudes, beiras de cercas, valas de drenagem e pomares.",
      "A base tubular metálica protege o cárter quando você apoia a mochila no chão para abastecer, garantindo boa durabilidade estrutural por um preço de entrada bastante competitivo."
    ],
    pros: [
      "Tanque superior por gravidade que evita falhas de alimentação em subidas e barrancos",
      "Já acompanha faca de 3 pontas em aço e cabeçote de nylon na caixa",
      "Quadro metálico inferior reforçado para apoiar a máquina no solo com estabilidade",
      "Ótimo preço de entrada para manutenção periódica de sítios e fazendas"
    ],
    cons: [
      "O tanque no topo eleva levemente o centro de gravidade quando está 100% cheio",
      "Acabamento plástico do defletor é mais simples que o da linha Husqvarna"
    ]
  }
];

// ============================================================================
// COMPONENTE PRINCIPAL DO ARTIGO COMERCIAL: MELHOR ROÇADEIRA COSTAL
// ============================================================================
export const MelhorRocadeiraCostal: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>("profissional");
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
    profissional: {
      title: "Trabalho Pesado Diário em Cafezal, Taludes e Encostas",
      modelName: "Husqvarna 541RB (41,5 cc / 1,97 HP)",
      anchor: "#husqvarna-541rb",
      reason:
        "Entrega o melhor sistema antivibração dorsal da categoria, filtro de ar de duplo estágio contra poeira intensa e torque profissional para rodar o dia inteiro sem travar a lombar.",
      specHighlight: "41,5 cc • 1,97 HP • Base Giratória Antivibração"
    },
    custoBeneficio: {
      title: "Melhor Custo-Benefício para Sítios, Chácaras e Barrancos",
      modelName: "Toyama Costal TBC43BX (42,7 cc / 1,7 HP)",
      anchor: "#toyama-tbc43bx-costal",
      reason:
        "Une o motor 42,7 cc mais fácil e barato de manter no Brasil com uma mochila de encosto alto confortável e tanque de 1,1 litro para limpar grandes áreas gastando menos.",
      specHighlight: "42,7 cc • 1,7 HP • Tanque 1,1 Litro"
    },
    multifuncional: {
      title: "Roçada de Mato Alto + Capina com Enxada Rotativa",
      modelName: "Vulcan Trent VRC430 Costal (43 cc / 1,7 HP)",
      anchor: "#vulcan-trent-vrc430",
      reason:
        "Ideal para o produtor rural que quer usar a mesma máquina costal para derrubar capim na lâmina e acoplar enxada rotativa (haste 26 mm / 9 estrias) para capinar hortas e pomares.",
      specHighlight: "43 cc • Partida Easy Start • Haste 26 mm / 9 Estrias"
    },
    manutencaoRural: {
      title: "Economia na Compra para Limpeza de Açudes, Cercas e Ladeiras",
      modelName: "Garthen RC-4500 Costal (42,7 cc / 1,7 HP)",
      anchor: "#garthen-rc4500",
      reason:
        "Conta com tanque superior por gravidade que mantém o fluxo de combustível firme mesmo em terrenos muito inclinados e já sai da caixa com faca de 3 pontas e carretel.",
      specHighlight: "42,7 cc • 1,7 HP • Tanque Superior por Gravidade"
    }
  };

  const currentSim = simProfiles[selectedProfile];

  const faqList = [
    {
      q: "Qual a melhor roçadeira costal para trabalhar em terrenos muito inclinados e cafezais?",
      a: [
        "Para uso profissional intenso em encostas e lavouras de café, a Husqvarna 541RB é a melhor roçadeira costal do mercado brasileiro pela combinação de motor 41,5 cc de 1,97 HP, filtro de ar duplo e quadro dorsal com amortecimento superior.",
        "Se você busca uma alternativa mais acessível para uso em sítios e chácaras com ótima oferta de peças, a Toyama TBC43BX Costal (42,7 cc) é a campeã em custo-benefício."
      ]
    },
    {
      q: "Roçadeira costal cansa menos que a roçadeira lateral?",
      a: [
        "Em barrancos, taludes, valetas e terrenos cheios de árvores ou pedras, sim: como os 6 a 7 kg do motor ficam apoiados nas costas como uma mochila, o operador segura nas mãos apenas a haste leve de alumínio (cerca de 2 kg), ganhando muito mais agilidade nos braços.",
        "Já em terrenos 100% planos e abertos, a roçadeira lateral com guidão duplo (tipo bicicleta) e cinto de dois ombros costuma render varreduras mais largas com menos aquecimento nas costas."
      ]
    },
    {
      q: "Como funciona e como lubrificar o eixo flexível da roçadeira costal?",
      a: [
        "Na roçadeira costal, um cabo de aço trançado flexível (parecido com um cabo de velocímetro gigante) transfere o giro do motor nas costas até o eixo cardã rígido da haste.",
        "Para evitar que o atrito aqueça o conduíte e quebre o cabo, você deve retirar o eixo flexível a cada 30 a 50 horas de trabalho, limpá-lo com pano e aplicar graxa de bissulfeto de molibdênio ou graxa para rolamentos de alta temperatura."
      ]
    },
    {
      q: "Posso usar lâmina de aço de 2 ou 3 pontas na roçadeira costal?",
      a: [
        "Sim, todas as 4 roçadeiras costais de 41,5 cc a 43 cc analisadas neste guia possuem caixa de transmissão angular com engrenagens metálicas projetadas para trabalhar tanto com carretel de nylon quanto com lâminas de 2 ou 3 pontas.",
        "Apenas evite bater com disco rígido contra tocos grossos ou pedras fixas, pois o tranco repentino força a alma do cabo flexível."
      ]
    },
    {
      q: "Qual a proporção correta de óleo 2 tempos para roçadeiras costais?",
      a: [
        "Depende diretamente da especificação do lubrificante: com óleo semissintético ou sintético de alta performance (JASO FC/FD, como Stihl 8017H, Husqvarna Pro ou Toyama FG50), a medida padrão é 50:1 (20 ml de óleo por litro de gasolina).",
        "Se utilizar óleo mineral 2T comum (API TC), siga a recomendação do manual do fabricante, que nas máquinas de 42,7 cc e 43 cc costuma exigir 25:1 (40 ml por litro)."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 com 4 Modelos + Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/melhor-rocadeira-costal.webp"
            alt="Operador equipado com EPIs trabalhando em talude inclinado com roçadeira costal a gasolina"
            title="Melhor Roçadeira Costal: Top 4 Modelos"
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
            Ranking Técnico de Oficina
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Melhor Roçadeira Costal:{' '}
            <span className="text-[#16A34A]">4 Modelos Para Avaliar</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Analisamos na bancada o torque em ladeiras, o amortecimento da mochila dorsal e a resistência do eixo flexível das 4 melhores roçadeiras costais a gasolina para terrenos inclinados, cafezais e sítios.
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
            Quem já tentou roçar um barranco íngreme, uma vala de drenagem ou uma carreira fechada de café carregando uma roçadeira lateral rígida sabe como os braços travam de exaustão na primeira hora de serviço.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Para vencer topografia acidentada sem destruir a postura, escolher a melhor roçadeira costal transfere todo o peso do motor para o quadro acolchoado nas costas e deixa nas suas mãos apenas a haste leve conectada por eixo flexível.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Porém, na oficina mecânica vemos que nem toda máquina tipo mochila aguenta o tranco: coxins fracos passam vibração direto para a coluna e cabos flexíveis mal dimensionados se rompem sob carga pesada.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se o seu terreno for majoritariamente plano e você também quiser comparar modelos laterais de eixo rígido, consulte nosso guia geral da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira (gasolina e elétrica)
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, selecionei e comparei tecnicamente as 4 roçadeiras costais a gasolina que entregam mecânica confiável, ergonomia dorsal real e fácil reposição de peças no mercado brasileiro.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO POR PERFIL DE TERRENO
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual Roçadeira Costal Serve para o Seu Terreno?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o tipo de serviço que você vai encarar para ver a indicação direta de bancada:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedProfile("profissional")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "profissional"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              ⛰️ Uso Profissional Diário (Cafezal e Encostas)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("custoBeneficio")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "custoBeneficio"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              ⚖️ Melhor Custo-Benefício (Sítios e Chácaras)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("multifuncional")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "multifuncional"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🌱 Multifuncional (Roçada + Enxada Rotativa)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("manutencaoRural")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "manutencaoRural"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🚜 Manutenção Rural Econômica (Açudes e Cercas)
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
            Comparativo Rápido: As 4 Melhores Roçadeiras Costais
          </h2>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-2.5 sm:p-3.5 text-center w-[72px]">Foto</th>
                  <th className="p-2.5 sm:p-3.5">Modelo</th>
                  <th className="p-2.5 sm:p-3.5 hidden md:table-cell">Indicação Principal</th>
                  <th className="p-2.5 sm:p-3.5 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-2.5 sm:p-3.5 text-center">Oferta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {costalReviews.map((item) => {
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
            5. ANÁLISES INDIVIDUAIS DOS 4 MODELOS DE ROÇADEIRA COSTAL
            =================================================================== */}
        <div className="mt-14 mb-8">
          <span className="text-[#166534] font-black text-xs uppercase tracking-widest block mb-1">
            Avaliação Mecânica Detalhada
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
            As 4 Melhores Roçadeiras Costais Analisadas
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Confira o comportamento do motor, conforto da mochila dorsal, ficha técnica, prós e contras de cada equipamento:
          </p>
        </div>

        <div className="space-y-16">
          {costalReviews.map((review, idx) => (
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
                    className="max-h-[340px] w-auto object-contain mix-blend-multiply"
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

              {/* Banner do Meio após o 2º produto */}
              {idx === 1 && (
                <div className="my-12 flex justify-center">
                  <BunnerDoMeiorocadeira />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            6. BANNER DE CROSS-SELL (Insumos e Acessórios Complementares)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#166534] font-black text-xs uppercase tracking-wider block mb-1">
              Acessórios Obrigatórios para Operação em Encostas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Complete Seu Kit de Roçada Costal com Segurança
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Três itens que todo operador de roçadeira costal precisa ter no galpão para proteger o corpo e o motor 2 tempos:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Kit EPIs */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Proteção Integral
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-epis-cross.webp"
                    alt="Kit Completo de EPIs para Roçador"
                    title="Kit de Segurança EPI para Roçadeira Costal"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit Completo de EPIs para Roçador
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Viseira de tela, abafador auricular, perneiras, luvas e avental contra pedras lançadas em taludes inclinados.
                </p>
              </div>
              <a
                href={products["kit-seguranca-completo-epis"]?.link || "https://meli.la/1hqH1JJ"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: Fio de Nylon Quadrado 3mm */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Corte Agressivo
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Fio de nylon duraline 3mm e 255m quadrado-thumb.webp"
                    alt="Rolo de Fio de Nylon Quadrado 3mm Duraline 255m"
                    title="Fio de Nylon Quadrado 3mm para Roçadeiras 42cc+"
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
                  Bitola ideal para motores costais de 41,5 cc a 43 cc, fatiando capim denso rente a pedras sem quebrar toda hora.
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

            {/* Card 3: Kit Misturador + Óleo 2T */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Proteção do Cilindro
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
                  Garante a dosagem exata da mistura gasolina/óleo para motores costais que trabalham horas seguidas nas costas.
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
          </div>
        </section>

        {/* ===================================================================
            7. GUIA TÉCNICO: O QUE É, COSTAL VS LATERAL, QUANDO USAR
            =================================================================== */}
        <section className="mt-16 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O que é uma Roçadeira Costal a Gasolina?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A roçadeira costal a gasolina é uma máquina de desbaste projetada especificamente para separar o peso do motor do movimento dos braços do operador.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Enquanto nos modelos convencionais o propulsor fica preso na ponta traseira do tubo de alumínio, na versão costal o motor, o tanque e a embreagem ficam montados sobre uma armação ergonômica vestida como uma mochila nas costas.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                A força do motor viaja até o tubo de corte por dentro de um chicote flexível de aço temperado (eixo flexível), permitindo que você manobre a ponteira para cima, para baixo e entre obstáculos estreitos sem carregar os 7 quilos do bloco nos punhos.
              </p>
            </div>
          </div>

          {/* Por que escolher uma costal em vez da lateral + Tabela */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Por que Escolher uma Roçadeira Costal em Vez da Lateral?
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A escolha entre o modelo costal e o lateral depende diretamente da inclinação do solo e do espaçamento das plantas no terreno — veja o comparativo mecânico completo no nosso guia sobre{' '}
                <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor roçadeira costal ou lateral
                </a>
                .
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Em uma ladeira ou barranco de estrada, o guidão largo tipo bicicleta da roçadeira lateral bate no morro e desequilibra o operador; já a haste livre com empunhadura circular (tipo D) da costal sobe e desce acompanhando o talude com firmeza:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Critério de Campo</th>
                    <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeira Costal (Mochila)</th>
                    <th className="p-3.5 sm:p-4">Roçadeira Lateral (Eixo Rígido)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Terreno Ideal</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Barrancos, taludes, cafezais, valas e pomares densos</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Lotes planos, pastagens abertas e gramados amplos</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Peso nas Mãos</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Apenas ~1,8 a 2,2 kg (só o tubo e a ponteira)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">7 a 9 kg suspensos no gancho lateral do cinto</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Manobrabilidade</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Altíssima em espaços estreitos e entre árvores</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Varredura larga, porém limitada pelo guidão em U</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Transmissão</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Cabo flexível + cardã (exige graxa a cada 30–50h)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Cardã inteiriço rígido (maior resistência a impactos brutos)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Em quais situações usar + Vantagens e Desvantagens */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Em Quais Situações Usar Roçadeira Costal? (Vantagens e Desvantagens)
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A roçadeira costal é imbatível em quatro cenários rurais: limpeza de entrelinhas de café e cacau em regiões montanhosas, manutenção de margens de açudes e represas, roçada de beiras de estradas com barrancos e coroamento de árvores em reflorestamento ou fruticultura.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Se você também avalia importadas de alta cilindrada para esse perfil, confira nosso teste prático se a{' '}
                <a href="/rocadeira-nakasaki-e-boa" className="text-[#166534] font-semibold hover:underline">
                  roçadeira Nakasaki é boa (incluindo a versão costal 65cc)
                </a>{' '}
                e o guia de bancada sobre{' '}
                <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                  como montar roçadeira Nakasaki
                </a>
                .
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
                <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <Check size={20} className="text-[#16A34A] shrink-0" /> Principais Vantagens da Costal
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#166534] list-disc list-inside leading-relaxed">
                  <li>Zero sobrecarga nos braços e punhos ao roçar de baixo para cima em encostas.</li>
                  <li>Centro de gravidade colado ao tronco, evitando quedas em terrenos escorregadios.</li>
                  <li>Facilidade para contornar pedras, mourões de cerca e troncos sem bater o motor.</li>
                  <li>Ideal para acoplar derriçadeiras de café, enxadas rotativas e podadores de galhos.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <AlertTriangle size={20} className="text-amber-700 shrink-0" /> Desvantagens a Considerar
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950 list-disc list-inside leading-relaxed">
                  <li>O motor próximo às costas transfere mais calor nos dias quentes de verão.</li>
                  <li>Exige tirar a mochila das costas toda vez que precisar dar nova partida no cordão.</li>
                  <li>O eixo flexível não tolera pancadas violentas com disco em tocos grossos de madeira.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. COMO ESCOLHER A MELHOR ROÇADEIRA COSTAL A GASOLINA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Como Escolher a Melhor Roçadeira Costal a Gasolina?
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Na hora de comparar os modelos antes da compra, avalie estes quatro pilares mecânicos que determinam se a máquina vai durar anos na fazenda:
            </p>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/como-escolher-melhor-rocadeira-costal.webp"
              alt="Mecânico inspecionando mochila ergonômica, coxins antivibração e eixo flexível de uma roçadeira costal na bancada"
              title="Como escolher a melhor roçadeira costal: coxins, mochila e eixo flexível"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Inspeção de bancada: a qualidade dos coxins de borracha e o encaixe do cabo flexível são os dois pontos mais importantes em uma roçadeira costal.
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                1. Cilindrada (cc) e Tipo de Motor
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                A faixa de ouro para roçadeiras costais fica entre 41,5 cc e 43 cc (1,7 a 2,0 HP): ela entrega torque de sobra para compensar a pequena perda de atrito do cabo flexível sem deixar a mochila pesada demais nas costas — confira o comparativo completo em{' '}
                <a href="/qual-a-melhor-cilindrada-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  qual a melhor cilindrada para roçadeira
                </a>
                .
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Os motores 2 tempos dominam essa categoria porque podem trabalhar inclinados em qualquer ângulo nos barrancos sem faltar lubrificação no pistão.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <ShieldAlert size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                2. Peso, Ergonomia e Sistema Antivibração
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Como o equipamento completo pesa em torno de 10 kg, verifique se o bloco do motor é separado da placa das costas por pelo menos 3 ou 4 molas/coxins de borracha maciça.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Prefira mochilas com alças largas acolchoadas, tela respirável na região lombar e base giratória que acompanha o movimento da haste sem torcer os ombros.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Sparkles size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                3. Capacidade do Tanque e Posição
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Tanques entre 0,9 L e 1,1 L garantem cerca de 50 a 75 minutos de trabalho contínuo, evitando que você tenha que descer a encosta toda hora para reabastecer.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Em terrenos muito íngremes, modelos com tanque superior por gravidade (como a Husqvarna 541RB e a Garthen RC-4500) mantêm o fluxo de gasolina constante até a última gota.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Check size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                4. Manutenção e Peças do Eixo Flexível
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                O cabo flexível interno é um item de desgaste natural com o passar dos anos; por isso, compre sempre de marcas com distribuição consolidada no Brasil (Husqvarna, Toyama, Vulcan e Garthen).
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Verifique também se o tubo de alumínio segue a medida universal de 26 mm com eixo de 9 estrias (ou padrão M12 na Husqvarna), facilitando a compra de ponteiras e carretéis.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. ACESSÓRIOS DE CORTE, SEGURANÇA E MANUTENÇÃO DA COSTAL
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Acessórios e Sistemas de Corte para Roçadeira Costal
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Para preservar a alma de aço do eixo flexível, escolha o acessório que corta com menor impacto seco contra a vegetação: use{' '}
                <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  fio de nylon de 2,7 mm a 3,0 mm
                </a>{' '}
                ao redor de pedras, pés de café e troncos, e passe para as facas de 2 ou 3 pontas no capim alto aberto (veja o comparativo completo da{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor lâmina e disco para roçadeira
                </a>
                ).
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Atenção na hora de comprar lâminas para máquinas costais: enquanto Toyama, Vulcan, Garthen e Husqvarna 541RB usam furo central padrão de 25,4 mm (1 polegada), algumas costais antigas da Stihl possuem flange específica — confira nossa tabela em{' '}
                <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-[#166534] font-semibold hover:underline">
                  qual o furo da lâmina da roçadeira Stihl (FS vs. Costal FR 220)
                </a>{' '}
                e o passo a passo de{' '}
                <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como trocar a lâmina da roçadeira
                </a>
                .
              </p>
            </div>
          </div>

          {/* Segurança e Ajuste da Mochila */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Como Usar uma Roçadeira Costal com Segurança nos Barrancos
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Em terrenos inclinados, onde a ponteira frequentemente trabalha na altura do peito do operador que está no degrau de baixo, o uso de viseira facial completa, abafador auricular, perneiras reforçadas e botina com solado tratorado antiderrapante é inegociável.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Ajuste as duas alças da mochila para que a placa acolchoada fique firme no meio das costas sem balançar lateralmente, e trabalhe sempre cortando em faixas horizontais (em nível com a curva do morro) em vez de subir e descer a ladeira a cada passada — confira o método completo no guia de{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>
                .
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Outro cuidado vital: verifique sempre onde está o botão de parada rápida (Stop) no punho do acelerador e o engate rápido das alças para poder soltar a mochila das costas imediatamente em caso de desequilíbrio ou vazamento.
              </p>
            </div>
          </div>

          {/* Dicas de Manutenção */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              3 Cuidados de Manutenção que Dobram a Vida Útil da Roçadeira Costal
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#166534] text-base mb-2">
                  1. Engraxe o Cabo Flexível (30 a 50h)
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Solte a trava do conduíte preto a cada 30 a 50 horas de operação, puxe a alma de aço flexível para fora, limpe a graxa velha escura e espalhe a{' '}
                  <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    melhor graxa para roçadeira
                  </a>{' '}
                  em toda a extensão do cabo e na ponteira.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#166534] text-base mb-2">
                  2. Acerte a Mistura 2T e a Partida
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Prepare o combustível no dosador seguindo a tabela do{' '}
                  <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    melhor óleo 2 tempos para roçadeira
                  </a>{' '}
                  e dê a{' '}
                  <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    partida a frio com a máquina apoiada no chão
                  </a>{' '}
                  antes de vestir a mochila nas costas.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#166534] text-base mb-2">
                  3. Filtro Limpo e Pane Seca
                </h3>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Lave a espuma do filtro de ar a cada 10 horas em terrenos secos e esvazie o tanque se for guardar por mais de 15 dias, evitando ter que{' '}
                  <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    desmontar e regular o carburador
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Dúvidas Frequentes sobre Roçadeira Costal
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
            11. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DE OFICINA + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Qual a Melhor Roçadeira Costal para Comprar?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Para quem tira o sustento da roçada diária em cafezais, taludes de rodovias e propriedades montanhosas, a Husqvarna 541RB vale cada centavo pelo conforto lombar e pela resistência mecânica incomparável.
              </p>
              <p className="mb-4 leading-relaxed">
                Já se você quer o melhor equilíbrio entre potência e preço para manter seu sítio ou chácara, a Toyama TBC43BX Costal entrega peças baratas em qualquer cidade, enquanto a Vulcan Trent VRC430 brilha na versatilidade com implementos e a Garthen RC-4500 resolve a limpeza rural com economia e tanque por gravidade.
              </p>
              <p className="mb-0 leading-relaxed">
                Escolha o modelo compatível com a sua jornada, mantenha o eixo flexível sempre engraxado e trabalhe com segurança máxima nas encostas!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Dica de Oficina do Carlos Henrique */}
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
              Segredo de Oficina do Carlos Henrique: Nunca Trabalhe com o Chicote Flexível Dobrado em Ângulo Fechado
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                A principal causa de rompimento precoce do cabo flexível nas roçadeiras costais não é mato grosso, mas operar com o punho puxado muito para trás, forçando a mangueira preta a fazer uma curva fechada em formato de U.
              </p>
              <p className="mb-0">
                Mantenha a alça tipo D ajustada na frente do corpo para que o conduíte flexível trabalhe sempre em uma curva aberta e suave: isso reduz o aquecimento interno pela metade e faz o cabo durar anos sem quebrar.
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

export default MelhorRocadeiraCostal;
