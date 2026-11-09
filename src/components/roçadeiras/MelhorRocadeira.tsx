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

interface ProductReviewData {
  id: ProductId;
  anchorId: string;
  badge?: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  specs: { label: string; value: string; highlight?: boolean }[];
  pros: string[];
  cons: string[];
  criteria: { name: string; score: string; note: string }[];
}

const crossSellProducts = {
  fioNylon: {
    link: products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "#",
    image: "/images/blog/thumbs/fio-duraline-cross.webp"
  },
  oleo2t: {
    link: products["kit-misturador-oleo-2t"]?.link || "#",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  },
  kitEpi: {
    link: products["kit-seguranca-completo-epis"]?.link || "#",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  }
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "stihl-fs-221",
    anchorId: "item-stihl-fs-221",
    shortName: "Stihl FS 221 (Melhor Profissional Pesada)",
    category: "Desbaste Pesado / Uso Diário",
    score: "9.9 / 10",
    thumbSrc: "/images/blog/thumbs/stihl-fs-221-thumb.webp"
  },
  {
    id: "rocadeira-toyama-tbc43",
    anchorId: "item-toyama-tbc43",
    shortName: "Toyama TBC43 (Melhor Custo-Benefício)",
    category: "Chácara / Sítio (Bipartida)",
    score: "9.5 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Toyama Tbc43-thumb.webp"
  },
  {
    id: "rocadeira-toyama-tbc52x",
    anchorId: "item-toyama-tbc52x",
    shortName: "Toyama TBC52X (Melhor Força Bruta)",
    category: "Capoeira Grossa / 52 cc",
    score: "9.6 / 10",
    thumbSrc: "/images/blog/thumbs/rocadeira toyama Tbc52x-thumb.webp"
  },
  {
    id: "rocadeira-honda-umk435t",
    anchorId: "item-honda-umk435t",
    shortName: "Honda UMK435T (Melhor 4 Tempos)",
    category: "Gasolina Pura / Econômica",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Honda UMK435T-thumb.webp"
  },
  {
    id: "rocadeira-stihl-fsa-45",
    anchorId: "item-stihl-fsa-45",
    shortName: "Stihl FSA 45 (Melhor a Bateria)",
    category: "Jardins / Baixo Ruído",
    score: "9.3 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Stihl FSA 45-thumb.webp"
  },
  {
    id: "rocadeira-trapp-master-1800-bipartido",
    anchorId: "item-trapp-master-1800",
    shortName: "Trapp Master AT 1800 (Aparador Ágil)",
    category: "Bordas e Gramados até 100 m²",
    score: "9.1 / 10",
    thumbSrc: "/images/blog/thumbs/roçadeira Trapp Master 1800 Bipartido-thumb.webp"
  },
  {
    id: "rocadeira-tekna-bc-1250ss",
    anchorId: "item-tekna-bc1250ss",
    shortName: "Tekna BC1250SS (Elétrica Bipartida)",
    category: "Quintal Denso / Aceita Lâmina",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Elétrica Tekna Bc1250ss-thumb.webp"
  },
  {
    id: "garthen-gre-2000",
    anchorId: "item-garthen-gre-2000",
    shortName: "Garthen GRE-2000 (Elétrica 2000 W)",
    category: "Alta Potência Monofásica",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Garthen Gre-2000-thumb.webp"
  },
  {
    id: "rocadeira-husqvarna-143rs",
    anchorId: "item-husqvarna-143rs",
    shortName: "Husqvarna 143RS (Trator Profissional)",
    category: "Fazendas / Serviço Pesado",
    score: "9.8 / 10",
    thumbSrc: "/images/blog/thumbs/Husqvarna 143rs-thumb.webp"
  }
];

const mainHighlightProducts: ProductReviewData[] = [
  {
    id: "stihl-fs-221",
    anchorId: "item-stihl-fs-221",
    badge: "Melhor Profissional Pesada / Alto Desempenho",
    heading: "Melhor Profissional Pesada / Alto Desempenho Stihl FS 221 antiga fs 220",
    imageSrc: "/images/blog/stihl-fs-221.webp",
    imageAlt: "Roçadeira profissional a gasolina Stihl FS 221 sucessora da FS 220 para mato pesado",
    paragraphs: [
      "Sucessora direta da consagrada FS 220 nas oficinas, a Stihl FS 221 é referência mecânica para desbaste pesado em terrenos acidentados.",
      "Seu motor 2-MIX de 38,9 cc entrega 2,31 hp com excelente torque em média e alta rotação, impedindo que a lâmina perca giro ao atingir caules lenhosos e braquiária fechada, além de consumir até 20% menos combustível que os motores 2 tempos antigos.",
      "Conta com tubo rígido reforçado, caixa de transmissão de alta durabilidade e sistema antivibração de quatro pontos que protege as articulações do operador em jornadas diárias, além de ampla oferta de peças no Brasil.",
      "O ponto de atenção é que ela sai de fábrica com lâmina, exigindo compra separada do carretel de nylon."
    ],
    specs: [
      { label: "Motorização / Potência", value: "Motor 2-MIX a gasolina — 38,9 cc / 2,31 hp" },
      { label: "Transmissão e Amortecimento", value: "Tubo rígido reforçado + Sistema antivibração de 4 pontos" },
      { label: "Eficiência Energética", value: "Até 20% mais econômica que motores 2T convencionais", highlight: true },
      { label: "Acessório de Série", value: "Lâmina metálica de corte (carretel vendido à parte)" }
    ],
    pros: [
      "Motor 2-MIX de alto torque e baixo consumo.",
      "Sistema antivibração profissional.",
      "Altíssima durabilidade mecânica e fácil reposição de peças."
    ],
    cons: [
      "Carretel de nylon não incluso na caixa original.",
      "Investimento inicial elevado."
    ],
    criteria: [
      { name: "Entrega de Torque em Mato Pesado", score: "10 / 10", note: "Mantém rotação firme em braquiária densa e arbustos lenhosos." },
      { name: "Ergonomia e Antivibração", score: "9.8 / 10", note: "Quatro pontos de amortecimento reduzem drasticamente a fadiga diária." },
      { name: "Durabilidade e Pós-Venda", score: "9.9 / 10", note: "Peças originais e assistência técnica em todo o território nacional." }
    ]
  },
  {
    id: "rocadeira-toyama-tbc43",
    anchorId: "item-toyama-tbc43",
    badge: "Melhor Custo-Benefício",
    heading: "Melhor Custo-Benefício para Uso Doméstico / Semiprofissional: Toyama TBC43",
    imageSrc: "/images/blog/Roçadeira Toyama Tbc43.webp",
    imageAlt: "Roçadeira a gasolina Toyama TBC43 bipartida para chácaras e sítios",
    paragraphs: [
      "Para proprietários de chácaras, sítios e terrenos urbanos que precisam de força sem pagar o preço de uma máquina florestal, a Toyama TBC43SH entrega o melhor equilíbrio mecânico da categoria.",
      "Seu motor 2 tempos de 42,7 cc (1,7 hp) tem fôlego suficiente para derrubar capim alto e pequenos arbustos sem superaquecer a embreagem.",
      "O destaque prático é o tubo de transmissão bipartido com engate rápido, que permite dividir a haste para transportar no porta-malas do carro.",
      "Acompanha colete ergonômico, lâmina de 3 pontas e carretel de nylon.",
      "Na operação, seus 9 kg exigem bom ajuste do cinto e atenção preventiva à lubrificação da luva de junção do eixo."
    ],
    specs: [
      { label: "Cilindrada / Potência", value: "42,7 cc / 1,7 hp (Motor 2 tempos)" },
      { label: "Eixo de Transmissão", value: "Tubo bipartido com acoplamento de engate rápido" },
      { label: "Peso Aproximado", value: "9,0 kg" },
      { label: "Kit Incluso na Caixa", value: "Lâmina de 3 pontas, carretel de nylon e colete ergonômico", highlight: true }
    ],
    pros: [
      "Excelente relação entre preço e torque.",
      "Haste bipartida que facilita o transporte.",
      "Kit completo com lâmina e nylon.",
      "Ampla rede de peças."
    ],
    cons: [
      "Peso elevado (9 kg) em jornadas longas.",
      "Exige limpeza constante na conexão do eixo bipartido."
    ],
    criteria: [
      { name: "Custo-Benefício Geral", score: "9.8 / 10", note: "Entrega pacote completo pronto para uso por valor muito competitivo." },
      { name: "Praticidade de Transporte", score: "9.6 / 10", note: "Cabe facilmente no porta-malas de carros de passeio." },
      { name: "Conforto em Longas Jornadas", score: "9.0 / 10", note: "Os 9 kg pedem regulagem cuidadosa do colete antes de iniciar." }
    ]
  },
  {
    id: "rocadeira-toyama-tbc52x",
    anchorId: "item-toyama-tbc52x",
    badge: "Melhor Força Bruta Alternativa",
    heading: "Melhor Força Bruta / Trabalho Pesado Alternativo Toyama Gasolina TBC52X",
    imageSrc: "/images/blog/rocadeira toyama Tbc52x.webp",
    imageAlt: "Roçadeira a gasolina Toyama TBC52X GII 52cc de eixo rígido para capoeira grossa",
    paragraphs: [
      "Quando o desafio envolve capoeira grossa e mato pesado em propriedades rurais, a Toyama TBC52X GII entra em campo com um motor de 52 cc e 1,9 hp.",
      "Diferente da linha básica, a série \"X\" traz tubo inteiriço de 28 mm e eixo cardã rígido que transfere toda a energia da embreagem para a ponteira sem perdas mecânicas, suportando o impacto de lâminas em vegetação fibrosa.",
      "O guidão bipartido estilo bicicleta e os coxins amortecedores isolam parte da vibração do bloco de alta cilindrada.",
      "Por ter maior volume de câmara de combustão, apresenta consumo de combustível superior, sendo indicada para corte bruto e não para pequenos retoques."
    ],
    specs: [
      { label: "Cilindrada / Potência", value: "51,6 cc (52 cc) / 1,9 hp (Linha X GII)" },
      { label: "Tubo e Transmissão", value: "Tubo inteiriço reforçado de 28 mm com eixo cardã rígido" },
      { label: "Ergonomia", value: "Guidão tipo bicicleta com coxins amortecedores" },
      { label: "Acessórios Inclusos", value: "Lâmina metálica, carretel de nylon e colete duplo", highlight: true }
    ],
    pros: [
      "Motor de 52 cc com alto poder de arranque.",
      "Transmissão rígida reforçada de 28 mm.",
      "Amortecimento eficiente.",
      "Acompanha lâmina e carretel."
    ],
    cons: [
      "Consumo de combustível mais alto.",
      "Pouco prática para acabamentos delicados."
    ],
    criteria: [
      { name: "Força Bruta em Capoeira", score: "9.7 / 10", note: "Alto deslocamento volumétrico vence mato fibroso sem travar." },
      { name: "Rigidez Estrutural", score: "9.6 / 10", note: "Tubo inteiriço de 28 mm suporta esforço intenso com lâmina." },
      { name: "Economia de Combustível", score: "8.9 / 10", note: "Câmara de 52 cc consome mais que modelos de 35 a 40 cc." }
    ]
  },
  {
    id: "rocadeira-honda-umk435t",
    anchorId: "item-honda-umk435t",
    badge: "Melhor Motor 4 Tempos",
    heading: "Melhor Opção 4 Tempos (Econômica e Menos Poluente): Honda UMK435T",
    imageSrc: "/images/blog/Roçadeira Honda UMK435T.webp",
    imageAlt: "Roçadeira Honda UMK435T com motor 4 tempos GX35 a gasolina pura",
    paragraphs: [
      "A Honda UMK435T resolve a maior causa de quebras em oficinas: o erro na mistura de óleo 2 tempos na gasolina.",
      "Equipada com o motor 4 tempos GX35 de 35,8 cc (1,6 hp), ela funciona com gasolina pura no tanque e óleo lubrificante separado no cárter, permitindo operação em 360° sem engasgar ou soltar fumaça azulada.",
      "Na bancada, destaca-se pela partida macia, ruído reduzido, baixíssimo consumo de combustível e entrega de torque linear desde as baixas rotações.",
      "Em contrapartida, o cabeçote com válvulas e comando exige trocas periódicas de óleo do cárter e mão de obra qualificada nas revisões, além de ter custo de compra mais elevado."
    ],
    specs: [
      { label: "Motorização", value: "Honda GX35 — 4 Tempos OHC (35,8 cc / 1,6 hp)" },
      { label: "Combustível", value: "Gasolina comum pura (dispensa mistura de óleo 2T)", highlight: true },
      { label: "Sistema de Lubrificação", value: "Cárter separado com operação livre em 360°" },
      { label: "Nível de Ruído e Emissões", value: "Baixo ruído operacional e zero fumaça de óleo queimado" }
    ],
    pros: [
      "Abastecimento com gasolina pura (dispensa mistura).",
      "Operação silenciosa e sem fumaça.",
      "Altíssima economia de combustível.",
      "Lubrificação em 360°."
    ],
    cons: [
      "Preço de aquisição elevado.",
      "Manutenção interna requer cuidado com o nível de óleo do cárter."
    ],
    criteria: [
      { name: "Economia e Praticidade", score: "10 / 10", note: "Elimina erros de proporção 2T e consome pouquíssima gasolina." },
      { name: "Conforto Acústico e Partida", score: "9.8 / 10", note: "Arranque extremamente leve e som muito mais suave." },
      { name: "Confiabilidade Mecânica", score: "9.7 / 10", note: "Bloco GX35 é referência mundial quando o óleo é trocado em dia." }
    ]
  },
  {
    id: "rocadeira-stihl-fsa-45",
    anchorId: "item-stihl-fsa-45",
    badge: "Melhor a Bateria / Zero Ruído",
    heading: "Melhor Opção a Bateria (Áreas Sensíveis a Ruído): Stihl FSA 45",
    imageSrc: "/images/blog/Roçadeira Stihl FSA 45.webp",
    imageAlt: "Roçadeira a bateria Stihl FSA 45 ultraleve e silenciosa com cabeçote PolyCut",
    paragraphs: [
      "Projetada para manutenção silenciosa de jardins residenciais, condomínios e áreas próximas a hospitais ou escolas, a Stihl FSA 45 elimina cabos elétricos e combustíveis.",
      "Pesando apenas 2,3 kg (já com a bateria de íons de lítio de 18V integrada na carcaça), ela oferece ajuste telescópico do tubo e inclinação da empunhadura sem uso de ferramentas.",
      "Opera com o cabeçote PolyCut 22 de duas lâminas plásticas articuladas (que podem ser substituídas por fio de nylon de 1,6 mm) e cabeça de corte inclinável para bordas verticais.",
      "Sua limitação técnica é a autonomia de cerca de 20 minutos por carga, sendo exclusiva para grama macia e acabamentos pontuais."
    ],
    specs: [
      { label: "Alimentação", value: "Bateria de íons de lítio 18V integrada (carregador bivolt)" },
      { label: "Peso Total", value: "2,3 kg (com bateria integrada)", highlight: true },
      { label: "Sistema de Corte", value: "Cabeçote PolyCut 2-2 (lâminas poliméricas ou fio 1,6 mm)" },
      { label: "Autonomia Média", value: "Até 20 minutos por carga para acabamentos residenciais" }
    ],
    pros: [
      "Peso pluma de 2,3 kg.",
      "Zero emissão de fumaça e baixíssimo ruído.",
      "Tubo telescópico ajustável.",
      "Bateria bivolt integrada com indicador de LED."
    ],
    cons: [
      "Autonomia restrita a cerca de 20 minutos.",
      "Não suporta mato grosso ou lâminas metálicas."
    ],
    criteria: [
      { name: "Leveza e Ergonomia Urbana", score: "10 / 10", note: "Qualquer pessoa opera sem esforço físico e ajusta a haste sem chaves." },
      { name: "Silêncio Operacional", score: "9.9 / 10", note: "Perfeita para condomínios e locais com restrição severa de barulho." },
      { name: "Autonomia por Carga", score: "8.4 / 10", note: "Dimensionada estritamente para jardins compactos e retoques." }
    ]
  }
];

const alternativeProducts: ProductReviewData[] = [
  {
    id: "rocadeira-trapp-master-1800-bipartido",
    anchorId: "item-trapp-master-1800",
    heading: "Trapp ｜ Aparador de Grama ｜ Master AT 1800",
    imageSrc: "/images/blog/roçadeira Trapp Master 1800 Bipartido.webp",
    imageAlt: "Aparador de grama elétrico Trapp Master AT 1800 bipartido de 1800W",
    paragraphs: [
      "O Trapp Master AT 1800 é um aparador elétrico de alta rotação (11.200 RPM) e 1.800 W de potência nominal, dimensionado para o acabamento ágil de bordas de canteiros, calçadas e gramados residenciais de até 100 m².",
      "Com apenas 2,7 kg e haste bipartida, pode ser manuseado sem esforço físico e guardado em pequenos armários.",
      "Trabalha exclusivamente com carretel de fio de nylon de 1,8 mm (com avanço automático e faixa de corte de 29 cm), não devendo ser forçado em capoeira ou caules lenhosos devido ao motor posicionado na base inferior."
    ],
    specs: [
      { label: "Potência / Rotação", value: "1.800 W / 11.200 RPM" },
      { label: "Faixa de Corte e Fio", value: "29 cm — Carretel automático com nylon 1,8 mm" },
      { label: "Peso e Estrutura", value: "2,7 kg — Haste bipartida compacta", highlight: true },
      { label: "Área Recomendada", value: "Gramados residenciais e bordas de até 100 m²" }
    ],
    pros: [
      "Motor veloz de 1.800 W e 11.200 RPM.",
      "Ultraleve (2,7 kg) e bipartido.",
      "Avanço automático do fio de nylon."
    ],
    cons: [
      "Opera apenas com fio de nylon (não aceita lâmina).",
      "Limitado a áreas de até 100 m² próximas à tomada."
    ],
    criteria: [
      { name: "Agilidade em Bordas e Calçadas", score: "9.5 / 10", note: "Altíssima rotação entrega acabamento limpo em grama macia." },
      { name: "Facilidade de Armazenamento", score: "9.7 / 10", note: "Desmonta ao meio e pesa menos de 3 kg." },
      { name: "Versatilidade em Mato Alto", score: "8.2 / 10", note: "Exclusivo para acabamento leve residencial." }
    ]
  },
  {
    id: "rocadeira-tekna-bc-1250ss",
    anchorId: "item-tekna-bc1250ss",
    heading: "Tekna ｜ Roçadeira Elétrica ｜ BC1250SS",
    imageSrc: "/images/blog/Roçadeira Elétrica Tekna Bc1250ss.webp",
    imageAlt: "Roçadeira elétrica lateral Tekna BC1250SS de 1200W com haste bipartida",
    paragraphs: [
      "A Tekna BC1250SS possui arquitetura de roçadeira lateral de verdade: seu motor traseiro de 1.200 W equilibra os 4,8 kg da máquina e aciona um eixo cardã a 7.500 RPM, permitindo usar tanto o carretel de nylon (35 cm de corte) quanto a lâmina metálica de 4 pontas inclusa (23 cm) para cortar capins densos e raízes resistentes.",
      "Conta com haste bipartida que facilita o armazenamento, empunhadura tipo D regulável e cinto de sustentação, exigindo apenas atenção ao dimensionamento da extensão elétrica e à escolha correta da tensão (110V ou 220V)."
    ],
    specs: [
      { label: "Especificação de Potência", value: "1.200 W (Motor traseiro equilibrado)" },
      { label: "Giro do Motor", value: "7.500 RPM" },
      { label: "Diâmetro de Corte", value: "23 cm (lâmina 4 pontas) / 35 cm (carretel de nylon)" },
      { label: "Peso Total e Kit", value: "4,8 kg — Inclui lâmina 4 pontas, carretel e cinto", highlight: true },
      { label: "Compatibilidade Bivolt", value: "Não (escolher 110V ou 220V na compra)" }
    ],
    pros: [
      "Aceita lâmina metálica de 4 pontas e carretel de nylon.",
      "Motor traseiro bem equilibrado de 1.200 W.",
      "Haste bipartida e peso reduzido (4,8 kg)."
    ],
    cons: [
      "Mobilidade limitada pelo cabo elétrico.",
      "Não é bivolt."
    ],
    criteria: [
      { name: "Desempenho em Quintais Densos", score: "9.4 / 10", note: "A lâmina de 4 pontas corta touceiras que aparadores comuns não vencem." },
      { name: "Equilíbrio de Peso", score: "9.5 / 10", note: "Motor superior traseiro não cansa os punhos durante a roçada." },
      { name: "Praticidade Doméstica", score: "9.3 / 10", note: "Zero manutenção de carburador e guarda fácil no armário." }
    ]
  },
  {
    id: "garthen-gre-2000",
    anchorId: "item-garthen-gre-2000",
    heading: "Garthen ｜ Roçadeira Elétrica ｜ GRE-2000",
    imageSrc: "/images/blog/Roçadeira Garthen Gre-2000.webp",
    imageAlt: "Roçadeira elétrica Garthen GRE-2000 potente de 2000W com lâmina de 3 pontas",
    paragraphs: [
      "Para quem busca o teto de força em motores elétricos monofásicos, a Garthen GRE-2000 entrega 2.000 W de potência a 7.500 RPM, superando os modelos tradicionais de 1.200 W em gramados fechados.",
      "Seu grande diferencial produtivo é o diâmetro de corte de 43 cm com a lâmina de 3 pontas (e 25,5 cm no nylon), cobrindo faixas largas em menos passadas.",
      "Pesa 5,5 kg e vem acompanhada de lâmina, carretel automático, cinto de apoio e kit de chaves allen e combinada para troca rápida na ponteira."
    ],
    specs: [
      { label: "Capacidade Energética", value: "2.000 W (Alta potência monofásica)" },
      { label: "Rotação Máxima", value: "7.500 RPM" },
      { label: "Alcance de Corte", value: "43 cm (lâmina de 3 pontas) / 25,5 cm (nylon)", highlight: true },
      { label: "Massa e Itens Inclusos", value: "5,5 kg — Lâmina, carretel automático, chaves e cinto" },
      { label: "Compatibilidade de Voltagem", value: "Não é bivolt (verificar tensão da rede)" }
    ],
    pros: [
      "Potência superior de 2.000 W.",
      "Ampla faixa de corte com lâmina (43 cm).",
      "Kit completo de acessórios e ferramentas."
    ],
    cons: [
      "Exige rede elétrica e extensão de bitola adequada para 2.000 W.",
      "Não é bivolt."
    ],
    criteria: [
      { name: "Força em Gramados Fechados", score: "9.6 / 10", note: "Os 2.000 W mantêm giro constante mesmo sob vegetação pesada." },
      { name: "Produtividade por Passada", score: "9.6 / 10", note: "Ampla abertura de corte reduz o tempo total de serviço." },
      { name: "Exigência de Instalação", score: "8.9 / 10", note: "Requer extensão com cabo grosso para evitar queda de tensão." }
    ]
  },
  {
    id: "rocadeira-husqvarna-143rs",
    anchorId: "item-husqvarna-143rs",
    heading: "Roçadeira a Gasolina 2 Tempos 41,5cc 2,1 HP Husqvarna 143RS",
    imageSrc: "/images/blog/Husqvarna 143rs.webp",
    imageAlt: "Roçadeira profissional a gasolina Husqvarna 143RS de 41,5cc e 2,1 HP",
    paragraphs: [
      "A Husqvarna 143RS é um verdadeiro trator mecânico para prestadores de serviço e fazendas.",
      "Seu motor 2 tempos de 41,5 cc gera 2,1 hp com carburação estável e filtro de ar de duplo estágio, mantendo o giro firme sob carga severa.",
      "O conjunto de transmissão rígida e caixa de engrenagens blindada foi projetado para suportar pancadas em pastagens e mato fechado.",
      "Além disso, acompanha de série o cinturão duplo ergonômico Balance 55, que distribui os 7,3 kg entre ombros e quadril para proteger a coluna do operador."
    ],
    specs: [
      { label: "Cilindrada / Potência", value: "41,5 cc / 2,1 hp (Motor 2 tempos)" },
      { label: "Filtragem e Transmissão", value: "Filtro de duplo estágio + Eixo rígido e engrenagem blindada" },
      { label: "Peso sem Combustível", value: "7,3 kg" },
      { label: "Ergonomia de Série", value: "Cinturão profissional duplo Balance 55 incluso", highlight: true }
    ],
    pros: [
      "Motor de 2,1 hp extremamente confiável.",
      "Transmissão rígida de padrão industrial.",
      "Acompanha cinturão profissional Balance 55."
    ],
    cons: [
      "Nível de vibração mais perceptível que na linha antivibração extrema.",
      "Exige entrega técnica autorizada para garantia."
    ],
    criteria: [
      { name: "Resistência em Uso Severo", score: "9.9 / 10", note: "Construção mecânica consagrada entre roçadores profissionais." },
      { name: "Distribuição de Peso no Corpo", score: "9.8 / 10", note: "O colete Balance 55 alivia a lombar de forma exemplar." },
      { name: "Estabilidade de Carburação", score: "9.7 / 10", note: "Filtro duplo protege o cilindro mesmo em terrenos secos com poeira." }
    ]
  }
];

export const MelhorRocadeira: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<'pesado' | 'chacara' | 'quintal' | 'silencio' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual a proporção correta de óleo na gasolina para roçadeiras 2 tempos?",
      answer: [
        "Depende da especificação do fabricante e da marca do óleo: máquinas como Toyama costumam exigir a proporção 25:1 (40 ml de óleo 2T para 1 litro de gasolina), enquanto Stihl e Husqvarna utilizam 50:1 (20 ml por litro) quando operadas com o óleo original da própria marca.",
        "Sempre consulte o manual para não fundir o pistão.",
        <>
          Se a máquina afogar na primeira partida do dia, veja nosso guia prático de <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">como desafogar roçadeira em 2 minutos</a>.
        </>
      ]
    },
    {
      question: "Roçadeiras bipartidas perdem potência na conexão?",
      answer: [
        "Não há perda perceptível de potência se a luva de acoplamento estiver limpa, bem apertada e com o eixo cardã devidamente engraxado.",
        "Contudo, para desbaste profissional severo de sol a sol, o tubo inteiriço oferece maior rigidez estrutural."
      ]
    },
    {
      question: "Posso usar lâmina metálica em qualquer roçadeira ou aparador?",
      answer: [
        "Não.",
        "Lâminas de aço só podem ser instaladas em roçadeiras projetadas para isso, que possuem eixo rígido, caixa de transmissão metálica e porca de fixação com rosca esquerda.",
        "Adaptar lâminas em aparadores de grama comuns causa quebra do eixo e grave risco de acidentes."
      ]
    },
    {
      question: "De quanto em quanto tempo devo lubrificar a caixa de transmissão e afiar a lâmina?",
      answer: [
        "Na oficina, recomendamos verificar e completar a caixa de engrenagens (ponteira) com graxa específica para roçadeiras a cada 20 horas de uso, além de limpar o filtro de ar a cada jornada e afiar a lâmina a cada 8 a 10 horas de trabalho para não forçar a embreagem nem elevar o consumo."
      ]
    }
  ];

  const renderProductSection = (product: ProductReviewData, showTopBorder: boolean) => (
    <section
      key={product.id}
      id={product.anchorId}
      className={`scroll-mt-24 ${showTopBorder ? 'pt-10 border-t border-gray-200' : 'pt-2'}`}
    >
      {product.badge && (
        <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
          {product.badge}
        </span>
      )}

      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4 leading-snug">
        {product.heading}
      </h3>

      <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          title={products[product.id]?.name || product.heading}
          width={800}
          height={533}
          className="max-h-80 w-auto object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
        {product.paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Ficha Técnica Rápida */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
          <tbody className="divide-y divide-gray-200">
            {product.specs.map((spec, idx) => (
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
      <AffiliateCard id={product.id} />

      {/* Prós e Contras */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
            <Check size={20} className="text-[#16A34A]" /> Prós
          </h4>
          <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
            {product.pros.map((pro, idx) => (
              <li key={idx}>{pro}</li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <X size={20} className="text-red-600" /> Contras
          </h4>
          <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
            {product.cons.map((con, idx) => (
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
                Avaliação Técnica
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {product.criteria.map((c, idx) => (
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
            src="/images/blog/1/melhor-rocadeira.webp"
            alt="Operador profissional utilizando a melhor roçadeira em corte de vegetação"
            title="Melhor Roçadeira: As 9 Melhores de 2026 (Gasolina e Elétrica)"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Melhor Roçadeira <br />
            <span className="text-[#16A34A]">As 9 Melhores de 2026 (Gasolina e Elétrica)</span>
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
              <span className="text-gray-400 text-xs sm:text-sm">Técnico em Mecânica</span>
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
            Escolher a melhor roçadeira exige analisar a engenharia real por trás da carenagem: entrega de torque na ponteira, resistência da caixa de transmissão, eficiência do sistema antivibração e disponibilidade de peças de reposição no Brasil.
          </p>
          <p>
            Para evitar que você compre um motor subdimensionado que trava no mato alto ou sofra com falhas prematuras de carburação e embreagem, avaliamos tecnicamente os 9 melhores modelos de 2026 — a gasolina, elétricos e a bateria — para diferentes demandas de terreno.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#16A34A] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual roçadeira é ideal para o seu terreno?</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Selecione o perfil da sua área para ir direto ao modelo dimensionado para o seu serviço:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('pesado')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'pesado'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Serviço Profissional / Fazendas</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('chacara')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'chacara'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Chácara, Sítio e Mato Alto</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('quintal')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'quintal'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Quintal Residencial com Tomada</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('silencio')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'silencio'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Jardim Pequeno / Zero Barulho</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/80 border border-gray-700 rounded-xl">
              {quizProfile === 'pesado' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Invista na durabilidade extrema da{' '}
                  <a href="#item-stihl-fs-221" className="text-[#4ade80] underline font-bold">
                    Stihl FS 221
                  </a>
                  , do trator{' '}
                  <a href="#item-husqvarna-143rs" className="text-[#4ade80] underline font-bold">
                    Husqvarna 143RS
                  </a>{' '}
                  ou na economia 4 tempos da{' '}
                  <a href="#item-honda-umk435t" className="text-[#4ade80] underline font-bold">
                    Honda UMK435T
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'chacara' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Aposte no excelente custo-benefício da{' '}
                  <a href="#item-toyama-tbc43" className="text-[#4ade80] underline font-bold">
                    Toyama TBC43 (Bipartida)
                  </a>{' '}
                  ou na força bruta de 52 cc da{' '}
                  <a href="#item-toyama-tbc52x" className="text-[#4ade80] underline font-bold">
                    Toyama TBC52X
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'quintal' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Para grama densa sem mexer com gasolina, vá de{' '}
                  <a href="#item-tekna-bc1250ss" className="text-[#4ade80] underline font-bold">
                    Tekna BC1250SS (1.200 W)
                  </a>{' '}
                  ou na potência superior da{' '}
                  <a href="#item-garthen-gre-2000" className="text-[#4ade80] underline font-bold">
                    Garthen GRE-2000 (2.000 W)
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'silencio' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Para áreas de até 100 m² ou condomínios, escolha a leveza sem fios da{' '}
                  <a href="#item-stihl-fsa-45" className="text-[#4ade80] underline font-bold">
                    Stihl FSA 45 (Bateria)
                  </a>{' '}
                  ou a agilidade do{' '}
                  <a href="#item-trapp-master-1800" className="text-[#4ade80] underline font-bold">
                    Trapp Master AT 1800
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE RESUMO DOS 9 PRODUTOS (Miniaturas Otimizadas 60x60)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: As 9 Melhores Roçadeiras de 2026
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Destaque</th>
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
            5. SEÇÕES FUNDAMENTAIS ANTES DO RANKING
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            O que é roçadeira?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A roçadeira é uma máquina portátil motorizada — acionada por motor a combustão (2 ou 4 tempos), elétrico com fio ou a bateria — projetada para cortar vegetações onde o cortador de grama de carrinho não consegue operar.
            </p>
            <p>
              Através de um eixo de transmissão que gira em alta rotação, ela tritura desde gramados residenciais até capins fibrosos, braquiária e arbustos lenhosos utilizando carretel de fio de nylon ou lâminas metálicas.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Para que serve a roçadeira?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Na prática, a roçadeira serve tanto para o acabamento fino em bordas de canteiros, calçadas e árvores quanto para a limpeza pesada de terrenos baldios, chácaras, pastagens e encostas íngremes ou pedregosas.
            </p>
            <p>
              Enquanto um aparador comum atua apenas em grama macia, a roçadeira entrega torque estrutural para derrubar mato alto e caules grossos, reduzindo drasticamente o tempo de trabalho braçal em áreas rurais e urbanas.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Qual a Melhor, a Roçadeira Elétrica ou a Movida a Gasolina?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              No mercado atual, encontramos três motorizações principais: a gasolina, elétrica com cabo e a bateria.
            </p>
            <p>
              As roçadeiras a gasolina são as mais potentes e autônomas, sendo insubstituíveis para vegetação densa, mato fechado e grandes extensões sem tomadas por perto.
            </p>
            <p>
              Na outra ponta, os modelos a bateria priorizam o silêncio e a leveza para acabamentos rápidos em gramados tenros.
            </p>
            <p>
              A roçadeira elétrica posiciona-se exatamente no meio-termo: entrega mais potência contínua que a maioria dos modelos a bateria de entrada e dispensa o preparo de combustível ou regulagem de carburador dos motores a gasolina, bastando conectá-la à rede elétrica para manter quintais e jardins médios em dia.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/rocadeira-eletrica-ou-gasolina-comparativo.webp"
              alt="Comparativo entre roçadeira a gasolina profissional com guidão duplo e modelo elétrico leve para jardim"
              title="Diferenças práticas entre roçadeira a gasolina, elétrica e a bateria"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            6. PRINCIPAIS DESTAQUES POR CATEGORIA (TOP 5)
            =================================================================== */}
        <div className="space-y-14">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-3">
            Principais Destaques por Categoria
          </h2>

          {mainHighlightProducts.map((product, index) => (
            <React.Fragment key={product.id}>
              {renderProductSection(product, index > 0)}
              {index === 2 && <BunnerDoMeio />}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            7. MAIS OPÇÕES QUE SÃO TÃO BOAS QUANTO (MODELOS 6 A 9)
            =================================================================== */}
        <div className="space-y-14 mt-20">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-3">
            Mais opções que são tão boas quanto
          </h2>

          {alternativeProducts.map((product, index) =>
            renderProductSection(product, index > 0)
          )}
        </div>

        {/* ===================================================================
            8. BANNER DE CROSS-SELL (ACESSÓRIOS COMPLEMENTARES)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-[#16A34A] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              Acessórios Recomendados para Completar Sua Roçadeira
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-base">
            Para proteger o motor, aumentar o rendimento de corte e trabalhar com total segurança, confira os itens essenciais de oficina:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Corte Rápido
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
                  Quatro quinas vivas que fatiam capim denso sem desfiar na ponteira e rendem muito mais que fios redondos comuns.
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
                  Vida Útil 2T
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
                  Garante a dosagem exata de combustível (25:1 ou 50:1) e evita carbonização na vela ou travamento do pistão.
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
                  Segurança Obrigatória
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
                  Proteção indispensável para rosto, ouvidos e canelas contra pedras e detritos lançados em alta velocidade.
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
            9. VANTAGENS DA ROÇADEIRA A GASOLINA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Vantagens da Roçadeira a gasolina
          </h2>

          <div className="w-full flex justify-center mb-8">
            <img
              src="/images/blog/vantagens-da-rocadeira-a-gasolina.webp"
              alt="Operador com EPIs completos roçando pastagem densa em terreno inclinado com roçadeira a gasolina"
              title="Autonomia e força bruta da roçadeira a gasolina em mato pesado"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              As roçadeiras a combustão dominam o serviço pesado por quatro pilares mecânicos:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Potência e Torque Superior
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Motores a gasolina entregam força centrífuga muito maior na ponteira para fatiar mato alto, capim grosso e arbustos lenhosos sem travar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Autonomia Contínua
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Sem depender de tomadas ou recargas lentas de bateria, basta reabastecer o tanque para manter a máquina operando o dia inteiro.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Liberdade de Movimento
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                A ausência de fios evita acidentes com extensões cortadas e permite trabalhar em barrancos, pastos distantes e terrenos com obstáculos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Versatilidade de Corte
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Suportam diferentes lâminas de aço (2, 3 ou mais pontas, serras circulares) e carretéis pesados em qualquer topografia.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. COMO ESCOLHER A MELHOR ROÇADEIRA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Como escolher a melhor roçadeira
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Potência
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Na oficina, dividimos a capacidade do motor a combustão por faixas de trabalho: motores de 25 cc a 30 cc atendem o uso doméstico e gramados pequenos; de 31 cc a 43 cc (1,5 a 2,3 hp) são ideais para terrenos médios, chácaras e serviço profissional contínuo com ótimo equilíbrio de peso; já os de 44 cc a 63 cc entregam força bruta para desbaste pesado e pastagens.
                </p>
                <p>
                  Avalie sempre a relação entre cilindrada e qualidade da transmissão, pois um motor grande com embreagem fraca perde rendimento rapidamente sob carga.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Eficácia em mato alto
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Para vencer mato fechado sem enrolar capim na ponteira, a roçadeira precisa de um tubo de alumínio rígido (preferencialmente de 26 mm ou 28 mm de diâmetro), eixo cardã de aço temperado e uma caixa de transmissão (engrenagem angular) bem vedada.
                </p>
                <p>
                  Modelos bipartidos facilitam o transporte no carro, mas para trabalho rústico diário em capoeira, o eixo inteiriço rígido apresenta menor índice de folga mecânica e transfere 100% do torque do motor para a lâmina.
                </p>
              </div>

              <div className="w-full flex justify-center my-8">
                <img
                  src="/images/blog/como-escolher-melhor-rocadeira-transmissao.webp"
                  alt="Detalhe mecânico da caixa de transmissão angular metálica, tubo rígido e lâmina de aço de 3 pontas"
                  title="Conjunto de transmissão rígida e ponteira angular para mato alto"
                  width={800}
                  height={533}
                  className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Confiabilidade
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Uma máquina barata sem peças no mercado vira sucata no primeiro reparo de carburador ou troca de bobina.
                </p>
                <p>
                  Priorize marcas com rede de assistência técnica e distribuição consolidada de peças no Brasil — como Stihl, Husqvarna, Honda e Toyama.
                </p>
                <p>
                  Verifique também se você prefere a simplicidade mecânica e o giro explosivo do motor 2 tempos (que exige mistura rigorosa de gasolina e óleo) ou a praticidade e economia do motor 4 tempos (abastecido com gasolina pura).
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Ergonomia
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Operar uma máquina de 7 kg a 9 kg exige equilíbrio estrutural.
                </p>
                <p>
                  Para serviços acima de uma hora, prefira modelos com guidão bipartido (tipo bicicleta), que favorece o movimento de pêndulo lateral sem torcer os punhos, e exija cinto de sustentação duplo almofadado (tipo colete), que transfere o peso das mãos para os ombros e o quadril.
                </p>
                <p>
                  Verifique também a presença de coxins antivibração de borracha ou mola entre o motor e o tubo para evitar formigamento nos braços.
                </p>
              </div>

              <div className="w-full flex justify-center my-8">
                <img
                  src="/images/blog/ergonomia-cinto-duplo-rocadeira.webp"
                  alt="Operador vestindo cinto duplo ergonômico tipo colete com distribuição equilibrada de peso e guidão tipo bicicleta"
                  title="Ergonomia correta com colete duplo almofadado e guidão bicicleta"
                  width={800}
                  height={533}
                  className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Reforço de Autoridade E-E-A-T + Dica Prática do Especialista */}
          <div className="w-full flex justify-center mt-10 mb-6">
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

          <div className="my-6 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-[#16A34A] shrink-0" size={20} />
              <h3 className="text-lg font-bold text-[#166534]">
                Dica Prática do Especialista
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-800">
              Vai deixar a roçadeira a gasolina guardada por mais de 15 dias? Esvazie todo o combustível do tanque e ligue o motor em marcha lenta até ele apagar sozinho. Isso seca as membranas internas do carburador e evita que a gasolina envelhecida forme goma nos giclês.
            </p>
          </div>
        </section>

        {/* ===================================================================
            11. COMO ESCOLHER A MELHOR ROÇADEIRA ELÉTRICA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Como Escolher a Melhor Roçadeira Elétrica
          </h2>

          <div className="w-full flex justify-center mb-10">
            <img
              src="/images/blog/como-escolher-melhor-rocadeira-eletrica.webp"
              alt="Operador aparando gramado residencial próximo ao canteiro com roçadeira elétrica lateral e cabo de extensão"
              title="Uso prático de roçadeira elétrica em quintais e jardins residenciais"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Uma Roçadeira Elétrica Profissional pode Chegar a Até 1200 W
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Nos equipamentos ligados à tomada, a força do motor é medida em Watts (W).
                </p>
                <p>
                  Enquanto aparadores simples operam abaixo de 1.000 W, as melhores roçadeiras elétricas laterais situam-se na faixa de 1.000 W a 1.200 W (alguns modelos específicos chegam a 2.000 W).
                </p>
                <p>
                  Caso a fabricante informe a potência em cavalos-vapor (cv), basta lembrar da conversão mecânica: 1 cv equivale a aproximadamente 735,5 W.
                </p>
                <p>
                  Motores a partir de 1.200 W sustentam o giro com folga mesmo utilizando lâminas metálicas.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Equipamentos Mais Velozes Atingem 9000 Rotações por Minuto
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  A velocidade de giro do eixo de corte é expressa em RPM (rotações por minuto).
                </p>
                <p>
                  Roçadeiras elétricas laterais costumam trabalhar entre 6.800 RPM e 9.000 RPM, enquanto aparadores exclusivos para fio de nylon chegam a 11.000 RPM.
                </p>
                <p>
                  Um RPM menor não significa falta de força: máquinas que usam lâmina de aço operam em torno de 7.500 a 9.000 RPM justamente para priorizar o torque na engrenagem e evitar vibrações excessivas no cabeçote.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Observe Quantas Pontas Possui a Lâmina para Roçadeira Elétrica
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  A escolha do acessório de corte define o rendimento do motor elétrico:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Fio de nylon</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Indicado para acabamento de grama macia, contornos de árvores, muros e calçadas sem risco de rebote.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Lâmina de 2 pontas</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ideal para limpeza rápida de gramados regulares e capim pouco denso.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Lâmina de 3 ou 4 pontas</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Projetada para cortar capoeiras, ervas daninhas grossas e raízes mais resistentes.
                  </p>
                </div>
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Ao comprar lâminas avulsas, confira sempre o diâmetro do furo central do eixo (geralmente 1 polegada / 25,4 mm) para evitar folgas e desbalanceamento.
                </p>
              </div>

              <div className="w-full flex justify-center my-8">
                <img
                  src="/images/blog/tipos-de-lamina-e-nylon-rocadeira.webp"
                  alt="Bancada de oficina com carretel de fio de nylon quadrado, lâmina de 2 pontas, lâmina de 3 pontas e chaves de manutenção"
                  title="Comparativo entre carretel de nylon e lâminas de aço de 2 e 3 pontas"
                  width={800}
                  height={533}
                  className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Máquinas com Faixa de Corte Acima de 30 cm Agilizam o Trabalho
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  O diâmetro da faixa de corte (que varia de 23 cm a 43 cm nos modelos elétricos) determina a largura da vegetação aparada a cada passada.
                </p>
                <p>
                  Normalmente, o carretel de nylon abrange um diâmetro maior (entre 30 cm e 42 cm) do que a lâmina metálica (23 cm a 33 cm).
                </p>
                <p>
                  Para jardins médios e terrenos acima de 100 m², priorize equipamentos com faixa de corte superior a 30 cm, reduzindo o tempo total de serviço.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Roçadeiras Elétricas Leves Pesam Até 6 kg
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Como o trabalho em gramados exige movimentação contínua dos braços, o peso impacta diretamente o cansaço do operador.
                </p>
                <p>
                  As roçadeiras elétricas laterais mais equilibradas do mercado pesam entre 4,8 kg e 6 kg (enquanto aparadores simples pesam de 2,2 kg a 2,7 kg).
                </p>
                <p>
                  Acima de 7 kg, torna-se indispensável o uso de cinto de ombro bem ajustado para não sobrecarregar a lombar.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Verifique se a Compra Acompanha Acessórios Extras
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Antes de finalizar o pedido na loja online, confira na descrição do vendedor quais itens vêm inclusos na caixa.
                </p>
                <p>
                  Os melhores pacotes já acompanham carretel de nylon, lâmina metálica de 3 ou 4 pontas, cinto de sustentação e kit de chaves (chave allen e chave de pino para travar a ponteira na troca do cabeçote), economizando gastos extras antes do primeiro uso.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Roçadeira Elétrica 220 ou 110 V? Certifique-se de Adquirir uma com a Voltagem Correta
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Diferente dos carregadores de modelos a bateria, as roçadeiras elétricas com cabo não são bivolt.
                </p>
                <p>
                  Ligar uma máquina 110V (127V) em uma tomada 220V queima o induzido e o estator do motor instantaneamente, enquanto ligar um modelo 220V no 110V faz a roçadeira girar sem força e superaquecer.
                </p>
                <p>
                  Confira a tensão das tomadas externas da sua residência antes de escolher a versão no carrinho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. MELHORES MARCAS DE ROÇADEIRAS
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Melhores Marcas de Roçadeiras
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Ao escolher uma roçadeira, a reputação da montadora e a infraestrutura de pós-venda são tão decisivas quanto a potência informada no catálogo.
            </p>
            <p>
              Avaliamos a confiabilidade mecânica, facilidade de manutenção e rede de peças das principais marcas analisadas neste guia:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Stihl
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  A fabricante alemã é a maior referência do mercado florestal e profissional no Brasil.
                </p>
                <p>
                  Seus motores com tecnologia 2-MIX aliam alta durabilidade mecânica a um consumo de combustível significativamente menor.
                </p>
                <p>
                  A marca se destaca tanto na robustez extrema para desbaste pesado quanto na modernização de ferramentas a bateria para uso urbano.
                </p>
                <p>
                  Além disso, conta com a maior rede de concessionárias e facilidade imediata de peças de reposição em todo o território nacional.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Husqvarna
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Marca de origem sueca consagrada pela engenharia voltada ao trabalho agropecuário pesado e serviços contínuos.
                </p>
                <p>
                  Seus equipamentos incorporam filtros de ar de duplo estágio e caixas de transmissão blindadas para suportar poeira e impactos em pastagens.
                </p>
                <p>
                  O cinturão ergonômico Balance 55 é amplamente elogiado por operadores por distribuir o peso entre ombros e quadril, aliviando a coluna em longas jornadas.
                </p>
                <p>
                  É a escolha mais confiável para fazendas e produtores rurais que necessitam de força bruta sem paradas inesperadas.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Toyama
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Líder absoluta em custo-benefício para proprietários de chácaras, sítios e prestadores de serviços autônomos.
                </p>
                <p>
                  A marca entrega motores potentes de 43 cc e 52 cc com valores de compra consideravelmente mais acessíveis que as linhas florestais europeias.
                </p>
                <p>
                  Modelos com eixo bipartido trazem enorme conveniência para quem precisa transportar a roçadeira em veículos de passeio.
                </p>
                <p>
                  A disponibilidade maciça de componentes originais e paralelos a preços baixos garante uma manutenção preventiva muito econômica.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Honda
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Pioneira mundial em tecnologia de motores manuais de quatro tempos com lubrificação integral em 360 graus.
                </p>
                <p>
                  O abastecimento direto com gasolina pura elimina as falhas frequentes causadas pelo erro na proporção de óleo dois tempos no tanque.
                </p>
                <p>
                  Destaca-se pela partida extremamente macia, baixo nível de vibração, ruído atenuado e ausência completa de fumaça na queima.
                </p>
                <p>
                  Apesar do custo inicial elevado e da necessidade de monitorar o nível de óleo no cárter, entrega o menor consumo de combustível da categoria.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Tekna
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Muito popular no cenário brasileiro por disponibilizar equipamentos funcionais para uso doméstico e semiprofissional.
                </p>
                <p>
                  Tem grande destaque no nicho de roçadeiras elétricas laterais, unindo motor superior bem balanceado e eixo de transmissão cardã com suporte a lâminas de aço.
                </p>
                <p>
                  Sua arquitetura bipartida facilita o acondicionamento em garagens e depósitos residenciais sem ocupar espaço.
                </p>
                <p>
                  É uma alternativa recomendada para quem busca força suficiente para limpar capins densos sem a complexidade de misturar combustíveis.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Trapp
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Tradicional fabricante nacional especializada no cuidado de gramados residenciais e acabamento paisagístico.
                </p>
                <p>
                  Seus aparadores elétricos operam em rotação altíssima, garantindo agilidade no arremate de canteiros, bordas de calçadas e ao redor de muros.
                </p>
                <p>
                  A leveza do conjunto estrutural permite que qualquer usuário realize a manutenção do jardim sem sobrecarregar braços e ombros.
                </p>
                <p>
                  Possui ampla presença em lojas de ferramentas e facilidade imediata para reposição de carretéis e fios de nylon.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Garthen
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Focada em máquinas elétricas robustas para quem precisa de produtividade contínua em quintais e chácaras com acesso à rede.
                </p>
                <p>
                  Chama a atenção por fornecer motores elétricos monofásicos com potências expressivas de até 2.000 Watts.
                </p>
                <p>
                  O amplo diâmetro de corte com lâmina de três pontas permite fatiar vegetações resistentes com menor esforço e menos passadas.
                </p>
                <p>
                  Representa uma opção competitiva para quem quer rendimento próximo ao de roçadeiras a combustão sem produzir barulho excessivo ou emissões de escape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            13. RECOMENDAÇÕES PARA ESCOLHA PERSONALIZADA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Recomendações para Escolha Personalizada
          </h2>

          <div className="w-full flex justify-center mb-8">
            <img
              src="/images/blog/recomendacoes-escolha-personalizada-rocadeira.webp"
              alt="Oficina organizada exibindo roçadeira a bateria, roçadeira elétrica e roçadeira profissional a gasolina lado a lado"
              title="Dimensionamento correto entre roçadeira a bateria, elétrica e a gasolina para cada terreno"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              Para acertar na compra sem desperdiçar orçamento, cruze o porte do terreno com a motorização:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Jardins pequenos (até 100 m²) e áreas sensíveis a barulho
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Escolha a <a href="#item-stihl-fsa-45" className="text-[#166534] underline font-semibold">Stihl FSA 45</a> (bateria) ou o aparador <a href="#item-trapp-master-1800" className="text-[#166534] underline font-semibold">Trapp Master AT 1800</a> (elétrico).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Quintais residenciais com grama densa e tomadas próximas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vá de <a href="#item-tekna-bc1250ss" className="text-[#166534] underline font-semibold">Tekna BC1250SS</a> (1.200 W, haste bipartida) ou <a href="#item-garthen-gre-2000" className="text-[#166534] underline font-semibold">Garthen GRE-2000</a> (2.000 W).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Chácaras, sítios e limpeza esporádica de mato alto
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aposte no custo-benefício da <a href="#item-toyama-tbc43" className="text-[#166534] underline font-semibold">Toyama TBC43</a> (bipartida) ou na força extra da <a href="#item-toyama-tbc52x" className="text-[#166534] underline font-semibold">Toyama TBC52X</a>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Serviço profissional pesado, fazendas e grandes extensões
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Invista na durabilidade extrema da <a href="#item-stihl-fs-221" className="text-[#166534] underline font-semibold">Stihl FS 221</a>, da <a href="#item-husqvarna-143rs" className="text-[#166534] underline font-semibold">Husqvarna 143RS</a> ou na economia 4 tempos da <a href="#item-honda-umk435t" className="text-[#166534] underline font-semibold">Honda UMK435T</a>.
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
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Clique nas dúvidas abaixo para conferir as orientações técnicas de uso, mistura de combustível e manutenção preventiva.
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
            14. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#16A34A] tracking-tight">
              Conclusão
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Definir a melhor roçadeira passa por respeitar o dimensionamento mecânico de cada projeto: motores elétricos como os da Tekna, Garthen e Trapp entregam praticidade imediata para quintais urbanos, enquanto as máquinas a combustão da Stihl, Husqvarna, Honda e Toyama garantem o torque e a autonomia indispensáveis para o mato pesado no campo.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Escolha o modelo compatível com a sua vegetação, utilize sempre EPIs (viseira, perneira, protetor auricular e botas) e mantenha a manutenção preventiva em dia para ter um equipamento confiável por muitos anos.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorRocadeira;
