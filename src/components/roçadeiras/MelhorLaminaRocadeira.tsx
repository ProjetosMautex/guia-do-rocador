import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { products } from '../../data/productsrocadeira';
import { BunnerDoMeiolaminadeorocadeira as BunnerDoMeio } from './BunnerDoMeiolaminadeorocadeira';

// Ícones SVG Inline Leves (Zero peso extra no bundle JS — PageSpeed 100)
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
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
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

const Sparkles = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);

const HelpCircle = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ShoppingBag = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const crossSellProducts = {
  kitEpi: {
    name: "Kit Completo de EPIs",
    link: products["kit-seguranca-completo-epis"]?.link || "https://meli.la/1hqH1JJ",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  },
  fioQuadrado: {
    name: "Fio de Nylon Quadrado 3mm",
    link: products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "https://meli.la/2PExUfX",
    image: "/images/blog/thumbs/fio-duraline-cross.webp"
  },
  kitOleo2t: {
    name: "Kit Misturador + Óleo 2T",
    link: products["kit-misturador-oleo-2t"]?.link || "https://meli.la/1GP142t",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  }
};

export const MelhorLaminaRocadeira: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>('capim-geral');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const simulatorOptions: Record<
    string,
    {
      label: string;
      title: string;
      desc: string;
      anchor: string;
      cta: string;
    }
  > = {
    'capim-geral': {
      label: '🌾 Capim, Gramíneas e Limpeza Geral',
      title: 'Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder',
      desc: 'Com apenas 294 g e 30,5 cm de comprimento, entrega giro alto imediato para baixar capim colonião, braquiária nova e vegetação rasteira sem cansar os braços nem amarrar máquinas a partir de 26 cc.',
      anchor: '#lamina-2-pontas-vonder',
      cta: 'Ver Análise da Lâmina 2 Pontas Vonder'
    },
    'mato-denso': {
      label: '🚜 Mato Alto, Fechado e Talos Grossos',
      title: 'Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300',
      desc: 'Construída em aço maciço de 4 mm de espessura e 300 mm de diâmetro, funciona como um trator de alta inércia e zero vibração para decepar touceiras densas em roçadeiras fortes.',
      anchor: '#lamina-3-pontas-stihl',
      cta: 'Ver Análise da Lâmina 3 Pontas Stihl'
    },
    'arbustos-bambu': {
      label: '🪵 Arbustos Lenhosos e Bambuzal Fino',
      title: 'Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h',
      desc: 'Substitui a pancada seca pelo corte contínuo de serra com pastilhas de carboneto de tungstênio soldadas a laser e pintura anticorrosiva por cataforese para galhos de até 10 cm.',
      anchor: '#disco-40-dentes-toyama',
      cta: 'Ver Análise do Disco 40 Dentes Toyama'
    },
    'pomar-cana': {
      label: '🎯 Troncos Finos, Cana e Poda Precisa',
      title: 'Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal',
      desc: 'Alta densidade de 80 dentes com vídea que proporciona serragem cirúrgica sem lascar a madeira e com mínima tendência a coices em máquinas profissionais acima de 43 cc.',
      anchor: '#disco-80-dentes-stihl',
      cta: 'Ver Análise do Disco 80 Dentes'
    },
    'terreno-pedras': {
      label: '🪨 Lote Sujo com Pedras e Tocos Ocultos',
      title: 'Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra',
      desc: 'Equipado com 20 elos articulados de corrente que absorvem pancadas acidentais sem estilhaçar como discos rígidos e podem ser reafiados no próprio campo com lima redonda.',
      anchor: '#disco-corrente-motosserra',
      cta: 'Ver Análise do Disco com Corrente'
    }
  };

  const bladeReviews = [
    {
      id: 'lamina-2-pontas-vonder',
      productId: 'lamina-para-rocadeiras-2-pontas-305mm-x-25-4mm-vonder',
      shortName: 'Lâmina 2 Pontas Vonder (305 mm)',
      rank: '🏆 1. Lâmina 2 Pontas Vonder – A Melhor para Capim e Limpeza Geral',
      exactImageName: 'Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder',
      image: '/images/blog/Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder.webp',
      thumb: '/images/blog/thumbs/Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder-thumb.webp',
      badge: 'Melhor para Capim e Gramíneas',
      score: '9.6',
      vegetacao: 'Capim colonião, braquiária nova e grama alta',
      furo: '25,4 mm (1 polegada)',
      cilindrada: 'A partir de 26 cc',
      paragraphs: [
        'Se o objetivo é baixar capim colonião, braquiária nova e vegetação rasteira sem cansar os braços, a clássica faca de 2 pontas da Vonder entrega o melhor equilíbrio.',
        'Com 30,5 cm de comprimento e apenas 294 g, ela é leve o suficiente para o motor atingir a rotação máxima rápido, deixando o corte limpo e fluido mesmo em máquinas de menor cilindrada.',
        'Por ter apenas duas arestas de impacto, exige que você dê uma passada de lima chata com mais frequência para manter o gume afiado.',
        'Em compensação, é imbatível na agilidade e na economia de combustível para a limpeza geral de chácaras, sítios e terrenos abertos.'
      ],
      specs: [
        { label: 'Comprimento / Diâmetro', value: '305 mm (30,5 cm)' },
        { label: 'Furo Central', value: '25,4 mm (1")' },
        { label: 'Espessura / Peso', value: '1,6 mm / 294 g' },
        { label: 'Quantidade de Pontas', value: '2 Pontas (Faca Retangular)' },
        { label: 'Material', value: 'Aço Carbono Especial Temperado' }
      ],
      pros: [
        'Leveza (294 g) que reduz o cansaço e não amarra o giro do motor.',
        'Excelente rendimento em gramíneas e capim verde.',
        'Aço especial resistente com encaixe padrão de 25,4 mm.',
        'Ótimo custo-benefício para manutenção recorrente.'
      ],
      cons: [
        'Não serve para arbustos lenhosos ou troncos (dá rebote).',
        'Pede afiação frequente para não apenas bater no capim.'
      ],
      criteria: [
        { name: 'Velocidade em Capim Verde', grade: '9.8' },
        { name: 'Leveza e Alívio para o Motor', grade: '9.9' },
        { name: 'Facilidade de Afiação', grade: '9.5' },
        { name: 'Custo-Benefício', grade: '9.6' }
      ]
    },
    {
      id: 'lamina-3-pontas-stihl',
      productId: 'lamina-rocadeira-3-pontas-stihl-fs160-161-220-221-290-300',
      shortName: 'Lâmina 3 Pontas Stihl (300 mm • 4 mm)',
      rank: '🚜 2. Lâmina 3 Pontas Stihl – O Trator para Mato Alto e Denso',
      exactImageName: 'Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300',
      image: '/images/blog/Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300.webp',
      thumb: '/images/blog/thumbs/Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300-thumb.webp',
      badge: 'Melhor para Mato Fechado',
      score: '9.8',
      vegetacao: 'Mato alto embolado, touceiras densas e talos grossos',
      furo: '20 mm (Padrão Stihl FS 160 a 460)',
      cilindrada: 'A partir de 33 cc',
      paragraphs: [
        'Quando o mato fecha, embolado e cheio de talos grossos, a lâmina de 3 pontas padrão Stihl (código 4119-713-4100) trabalha como um verdadeiro trator.',
        'Com 300 mm de diâmetro e impressionantes 4 mm de espessura, ela tem massa e inércia para decepar capoeira pesada sem trepidar nas mãos do operador.',
        'A geometria triangular garante um giro muito mais estável que o das facas de duas pontas, sendo a parceira ideal para roçadeiras mais fortes como a linha Stihl FS 160, 161, 220, 221, 290 e 300.',
        'Só exige atenção redobrada em terrenos com pedras ocultas: por ser um aço maciço muito duro, uma pancada seca em rocha pode danificar a peça.'
      ],
      specs: [
        { label: 'Diâmetro de Corte', value: '300 mm (30 cm)' },
        { label: 'Espessura da Chapa', value: '4,0 mm (Alta Inércia)' },
        { label: 'Furo Central', value: '20 mm (Compatível linha Stihl FS)' },
        { label: 'Quantidade de Pontas', value: '3 Pontas Reversíveis' },
        { label: 'Aplicação Principal', value: 'Mato denso, pasto fechado e silvas' }
      ],
      pros: [
        'Espessura robusta de 4 mm que atravessa mato fechado sem perder embalo.',
        'Três pontas que garantem estabilidade superior e zero vibração.',
        'Aço de altíssima durabilidade com padrão original Stihl.',
        'Pode ser virada quando um lado do fio gasta.'
      ],
      cons: [
        'Mais pesada, exigindo roçadeiras de média ou alta cilindrada.',
        'Exige cuidado extra onde há pedras escondidas no meio do capim.'
      ],
      criteria: [
        { name: 'Força de Impacto em Mato Denso', grade: '9.9' },
        { name: 'Estabilidade e Baixa Vibração', grade: '9.8' },
        { name: 'Durabilidade Estrutural (4 mm)', grade: '9.8' },
        { name: 'Rendimento em Pastagens', grade: '9.7' }
      ]
    },
    {
      id: 'disco-40-dentes-toyama',
      productId: 'disco-40-dentes-videa-255mm-para-rocadeira-toyama-tbc52h',
      shortName: 'Disco 40 Dentes Vídea Toyama (255 mm)',
      rank: '🪵 3. Disco 40 Dentes com Vídea Toyama – O Especialista em Arbustos',
      exactImageName: 'Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h',
      image: '/images/blog/Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h.webp',
      thumb: '/images/blog/thumbs/Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h-thumb.webp',
      badge: 'Melhor para Arbustos Lenhosos',
      score: '9.5',
      vegetacao: 'Capoeira lenhosa, arbustos e galhos de até 10 cm',
      furo: '25,4 mm (Universal)',
      cilindrada: 'A partir de 33 cc',
      paragraphs: [
        'Na hora em que o serviço deixa de ser capim e passa a ser limpeza de capoeira lenhosa, bambuzal fino e arbustos com galhos de até 10 cm, a faca comum não dá conta.',
        'O disco de 40 dentes da Toyama resolve o problema trocando o impacto pelo corte de serra, graças às pastilhas de vídea (carboneto de tungstênio) soldadas a laser nas pontas.',
        'O acabamento com pintura por cataforese protege o aço contra a ferrugem causada pela seiva ácida das plantas e pela umidade do solo.',
        'É a escolha certa para desbastar áreas rurais abandonadas sem forçar a caixa de transmissão da roçadeira.'
      ],
      specs: [
        { label: 'Diâmetro Externo', value: '255 mm (10 polegadas)' },
        { label: 'Número de Dentes', value: '40 Dentes com Pastilhas de Vídea' },
        { label: 'Furo Central', value: '25,4 mm (Universal)' },
        { label: 'Tratamento Superficial', value: 'Pintura Anticorrosiva por Cataforese' },
        { label: 'Corpo do Disco', value: 'Aço Perfurado para Dissipação Térmica' }
      ],
      pros: [
        'Pastilhas de vídea cortam madeira fina e arbustos sem travar.',
        'Tratamento anticorrosivo que aumenta a vida útil em áreas úmidas.',
        'Furo universal de 25,4 mm compatível com a maioria das marcas.',
        'Mantém o fio por muito mais tempo que discos de aço comum.'
      ],
      cons: [
        'Mais pesado que lâminas de 2 ou 3 pontas.',
        'Exige motor com bom torque (ideal a partir de 33 cc).'
      ],
      criteria: [
        { name: 'Capacidade de Corte em Madeira', grade: '9.7' },
        { name: 'Retenção de Fio (Vídea)', grade: '9.6' },
        { name: 'Proteção contra Ferrugem', grade: '9.5' },
        { name: 'Segurança Operacional', grade: '9.3' }
      ]
    },
    {
      id: 'disco-80-dentes-stihl',
      productId: 'lamina-disco-serra-80-dentes-para-rocadeira-stihl-universal',
      shortName: 'Disco Serra 80 Dentes Vídea (255 mm)',
      rank: '🎯 4. Disco 80 Dentes – Corte de Alta Precisão para Troncos Finos',
      exactImageName: 'Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal',
      image: '/images/blog/Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal.webp',
      thumb: '/images/blog/thumbs/Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal-thumb.webp',
      badge: 'Melhor para Corte Fino e Cana',
      score: '9.3',
      vegetacao: 'Troncos finos, manejo de pomar, bambu e cana-de-açúcar',
      furo: '25,4 mm com anel para 20 mm',
      cilindrada: 'Acima de 43 cc',
      paragraphs: [
        'Para quem trabalha com manejo em pomares, corte de cana-de-açúcar, bambu ou desbaste de galhos finos que exigem acabamento limpo sem lascar a madeira, o disco de 80 dentes com vídea é a ferramenta mais precisa.',
        'A grande quantidade de dentes próximos proporciona uma serragem contínua e suave, reduzindo bastante o risco daquele tranco seco na hora de encostar no tronco.',
        'Fabricado em aço temperado de 1,5 mm, ele pede uma roçadeira parruda — de preferência acima de 43 cc — para girar com inércia suficiente.',
        'Evite encostar esse disco no chão ou em pedras, pois os dentes de vídea são sensíveis a impactos diretos contra rocha.'
      ],
      specs: [
        { label: 'Diâmetro Externo', value: '255 mm' },
        { label: 'Número de Dentes', value: '80 Dentes com Vídea' },
        { label: 'Espessura do Corpo', value: '1,5 mm em Aço Temperado' },
        { label: 'Compatibilidade de Furo', value: 'Universal (25,4 mm / 20 mm)' },
        { label: 'Cilindrada Recomendada', value: 'Acima de 43 cc' }
      ],
      pros: [
        'Corte cirúrgico e limpo em troncos finos, bambu e cana.',
        'Menor tendência a coices graças à alta densidade de dentes.',
        'Pastilhas de vídea de longa duração em madeira limpa.',
        'Excelente acabamento para poda e desbaste em sítios.'
      ],
      cons: [
        'Exige roçadeiras profissionais de alta cilindrada.',
        'Não tolera batidas em pedras ou tocos sujos de terra.'
      ],
      criteria: [
        { name: 'Acabamento e Precisão de Corte', grade: '9.8' },
        { name: 'Suavidade (Redução de Coice)', grade: '9.5' },
        { name: 'Rendimento em Cana e Bambu', grade: '9.6' },
        { name: 'Tolerância a Solo Pedregoso', grade: '8.4' }
      ]
    },
    {
      id: 'disco-corrente-motosserra',
      productId: 'kit-2-disco-para-rocadeira-com-dentes-de-corrente-motosserra',
      shortName: 'Kit 2 Discos com Corrente (20 Dentes)',
      rank: '🪨 5. Disco com Corrente de Motosserra – O Bruto para Terrenos com Pedras e Tocos',
      exactImageName: 'Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra',
      image: '/images/blog/Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra.webp',
      thumb: '/images/blog/thumbs/Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra-thumb.webp',
      badge: 'Melhor para Lote com Pedras e Tocos',
      score: '9.2',
      vegetacao: 'Terreno desconhecido com raízes, tocos e arbustos',
      furo: '25,4 mm (1 polegada)',
      cilindrada: 'A partir de 30 cc',
      paragraphs: [
        'Limpar lote desconhecido cheio de toco enterrado, raiz e pedra solta é o terror de qualquer disco rígido de vídea, que quebra os dentes no primeiro choque.',
        'O disco equipado com corrente de motosserra funciona como um tanque de guerra para esses terrenos sujos: como os 20 elos de corte articulam, eles absorvem o impacto contra obstáculos sem estilhaçar o disco.',
        'Outro ponto forte no campo é a manutenção simples: você mesmo refaz o fio dos dentes usando uma lima redonda comum de motosserra.',
        'Por ter corte extremamente agressivo, exige roçadeira acima de 30 cc e respeito total à distância de segurança e ao uso de EPIs.'
      ],
      specs: [
        { label: 'Diâmetro / Estrutura', value: '230 mm em Aço de 2,0 mm' },
        { label: 'Sistema de Corte', value: 'Corrente Articulada de 20 Dentes' },
        { label: 'Furo Central', value: '25,4 mm (1")' },
        { label: 'Afiação no Campo', value: 'Lima Redonda Padrão de Motosserra' },
        { label: 'Conteúdo da Oferta', value: 'Kit com 2 Discos de Corrente' }
      ],
      pros: [
        'Elos articulados que resistem muito melhor a impactos acidentais.',
        'Fácil de afiar no próprio campo com lima redonda.',
        'Decepa galhos, raízes expostas e vegetação lenhosa pesada.',
        'Alta durabilidade estrutural em terrenos acidentados.'
      ],
      cons: [
        'Exige atenção máxima à segurança e uso rigoroso de EPIs.',
        'Não indicado para roçadeiras fracas abaixo de 30 cc.'
      ],
      criteria: [
        { name: 'Resistência a Pancadas em Tocos', grade: '9.7' },
        { name: 'Facilidade de Reafiação no Mato', grade: '9.6' },
        { name: 'Agressividade em Raízes e Galhos', grade: '9.5' },
        { name: 'Conforto Acústico e Vibração', grade: '8.5' }
      ]
    }
  ];

  const faqData = [
    {
      question: "Qual a diferença entre o furo de 20 mm e o de 25,4 mm nas lâminas de roçadeira?",
      answer: [
        "O furo de 25,4 mm (1 polegada) é a medida universal usada pela maioria das roçadeiras do mercado, incluindo Toyama, Husqvarna, Vulcan, Tekna, Kawashima e Nakasaki.",
        "Já o furo de 20 mm é o padrão exclusivo de boa parte das roçadeiras profissionais da Stihl (como FS 160, FS 220 e FS 290), por isso muitos discos vêm com um anel redutor metálico de 25,4 mm para 20 mm."
      ]
    },
    {
      question: "Posso usar disco de 40 ou 80 dentes em roçadeira de 26 cc?",
      answer: [
        "Não é recomendado.",
        "Discos de serra circular com vídea são mais pesados e exigem alto torque de saída; em máquinas leves de 26 cc eles derrubam o giro, superaquecem a campânula da embreagem e forçam o eixo cardã.",
        "Para máquinas até 30 cc, utilize apenas lâminas leves de 2 pontas (1,6 mm a 2,0 mm) ou carretel com fio de nylon."
      ]
    },
    {
      question: "Qual o sentido correto para soltar a porca que prende a lâmina da roçadeira?",
      answer: [
        "A porca da ponteira de transmissão da roçadeira possui rosca esquerda (rosca inversa) para não se soltar sozinha enquanto a lâmina gira.",
        "Por isso, você deve girar a chave no sentido horário para soltar a porca e no sentido anti-horário para apertar."
      ]
    },
    {
      question: "Como afiar a lâmina de 2 ou 3 pontas sem desbalancear a roçadeira?",
      answer: [
        "Use uma lima chata murça respeitando o chanfro original de fábrica e aplique exatamente o mesmo número de passadas em cada ponta.",
        "Além disso, vire a lâmina periodicamente para gastar os dois lados por igual; se uma ponta ficar mais leve que a outra, a máquina vai trepidar fortemente em alta rotação."
      ]
    }
  ];

  const currentSim = simulatorOptions[selectedProfile];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/lamina-para-rocadeira.webp"
            alt="Bancada de oficina com lâminas de 2 e 3 pontas e disco de serra com vídea ao lado da ponteira de roçadeira"
            title="Melhor Lâmina e Disco para Roçadeira: Qual Escolher para Cada Tipo de Mato?"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#15803d] text-white text-xs font-bold tracking-wider uppercase mb-4">
            Guia Prático de Campo • Lâminas e Discos de Aço
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            Melhor Lâmina e Disco para Roçadeira:{' '}
            <span className="text-[#4ade80]">Qual Escolher para Cada Tipo de Mato?</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-gray-300 text-sm">
            <span>Por</span>
            <a
              href="/author/jose-ailton/"
              className="flex items-center gap-2 text-white font-bold hover:text-[#4ade80] transition-colors bg-white/10 pr-4 py-1 pl-1 rounded-full border border-white/15"
            >
              <img
                src="/images/autores/José Ailton da Silva-thumb.webp"
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover border-2 border-[#16A34A]"
              />
              <span>José Ailton da Silva</span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTAINER PRINCIPAL DO ARTIGO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO CURTA (1 frase por parágrafo, sem negrito)
            =================================================================== */}
        <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1">
            Quando o fio de nylon começa a arrebentar toda hora no capim grosso ou na capoeira fechada, é sinal de que chegou a hora de partir para o aço.
          </p>
          <p>
            Mas quem trabalha no trecho sabe que descobrir qual o melhor disco para roçadeira — ou qual a melhor faca para roçadeira, como chamamos as lâminas de pontas no dia a dia — faz toda a diferença entre limpar um lote rápido ou passar o dia inteiro lutando contra a máquina.
          </p>
          <p>
            Com mais de dez anos operando roçadeiras de 26 cc a mais de 50 cc no sol quente, já vi muito operador estragar a embreagem ou entortar o eixo por usar o acessório errado.
          </p>
          <p>
            Abaixo, analisei os 5 modelos que realmente aguentam o tranco e expliquei qual a melhor lâmina para roçadeira em cada cenário de mato.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA POR TIPO DE MATO (INTERATIVO)
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual Mato Você Vai Cortar Hoje?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o tipo de vegetação do seu terreno para ver imediatamente a lâmina ou disco ideal sem forçar o motor:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {Object.entries(simulatorOptions).map(([key, opt]) => {
              const isSelected = selectedProfile === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedProfile(key)}
                  className={`p-3.5 rounded-xl font-bold text-sm text-left transition-all border ${
                    isSelected
                      ? 'bg-[#15803d] text-white border-[#15803d] shadow-lg'
                      : 'bg-white/10 text-gray-200 border-white/10 hover:bg-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ade80] block mb-1">
              Acessório Recomendado para o Seu Terreno:
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              {currentSim.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {currentSim.desc}
            </p>
            <a
              href={currentSim.anchor}
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors"
            >
              <span>{currentSim.cta}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. VITRINE / TABELA RESUMO COMPARATIVA DOS 5 MODELOS (Mobile-First igual MelhorRoçadeira)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Comparativo Rápido: As 5 Melhores Lâminas e Discos para Roçadeira
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Destaque</th>
                  <th className="p-3 text-left hidden md:table-cell">Mato Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[105px] sm:w-[140px]">Oferta</th>
                </tr>
              </thead>
              <tbody>
                {bladeReviews.map((item) => {
                  const prod = products[item.productId];
                  const affiliateUrl = prod?.link || '#';

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors"
                    >
                      <td className="p-2 align-middle text-center">
                        <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumb}
                            alt={item.exactImageName}
                            title={item.exactImageName}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
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
                        <div className="text-[11px] text-gray-600 mt-1 md:hidden">
                          {item.vegetacao}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score} / 10
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        <span className="block font-medium text-gray-800">{item.vegetacao}</span>
                        <span className="text-xs text-gray-500">{item.furo} • {item.cilindrada}</span>
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
            5. POR QUE É TÃO IMPORTANTE ESCOLHER BEM O DISCO
            =================================================================== */}
        <section className="my-16 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Por que é tão importante escolher bem o disco
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A lâmina não é um simples detalhe na ponta do tubo, pois ela dita diretamente o esforço do motor e a segurança de quem está segurando o guidão.
            </p>
            <p>
              Se você instala um disco de serra pesado numa roçadeira leve de 26 cc, o giro cai, a embreagem patina até superaquecer e o consumo de gasolina dispara.
            </p>
            <p>
              Por outro lado, entrar num matagal lenhoso usando uma faca fina de 2 pontas faz o aço bater, travar e dar aquele coice (rebote) violento nos seus braços, forçando as engrenagens cônicas da ponteira.
            </p>
            <p>
              Acertar o casamento entre a densidade da vegetação e a geometria do aço preserva a máquina e poupa a sua coluna no fim da jornada.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/por-que-escolher-bem-disco-e-lamina-rocadeira.webp"
              alt="Operador profissional com EPIs completos cortando mato denso com roçadeira a gasolina equipada com lâmina de aço"
              title="Importância de escolher a lâmina e o disco corretos para o motor da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            6. AS 5 MELHORES LÂMINAS E DISCOS PARA ROÇADEIRA (ANÁLISES)
            =================================================================== */}
        <section className="my-16 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            As 5 Melhores Lâminas e Discos para Roçadeira (Análise Completa)
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-12">
            <p>
              Para não jogar dinheiro fora com aço mole que perde o fio nos primeiros dez minutos, vale apostar em fabricantes testados no campo.
            </p>
            <p>
              Quando o assunto é melhor marca de lâmina para roçadeira, nomes como Stihl, Vonder e Toyama se destacam pelo balanceamento preciso e resistência térmica.
            </p>
            <p>
              Veja a avaliação detalhada das 5 melhores opções disponíveis hoje:
            </p>
          </div>

          <div className="space-y-16">
            {bladeReviews.map((item, idx) => (
              <React.Fragment key={item.id}>
                <section
                  id={item.id}
                  className="scroll-mt-24 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider">
                      {item.rank}
                    </span>
                    <span className="text-sm font-black text-[#166534] bg-[#F0FDF4] border border-[#16A34A]/30 py-1 px-3 rounded-lg">
                      Nota: {item.score} / 10
                    </span>
                  </div>

                  {/* Regra GuiaPadraoArtigo: Subtítulo do produto com nome exato do arquivo de imagem sem extensão */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
                    {item.exactImageName}
                  </h3>

                  {/* Imagem do Produto 800x533 logo abaixo do H3 */}
                  <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.exactImageName}
                      title={item.exactImageName}
                      width={800}
                      height={533}
                      className="max-h-80 w-auto object-contain mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>

                  {/* Parágrafos Analíticos (1 frase por parágrafo, sem negrito) */}
                  <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Ficha Técnica Enxuta */}
                  <div className="mb-8 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full border-collapse text-sm">
                      <thead className="bg-gray-100 text-gray-800 font-bold">
                        <tr>
                          <th colSpan={2} className="p-3 text-left uppercase text-xs tracking-wider">
                            Ficha Técnica • {item.exactImageName}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {item.specs.map((spec, sIdx) => (
                          <tr key={sIdx} className="hover:bg-gray-50">
                            <th className="p-3 text-left font-semibold text-gray-700 w-2/5 bg-gray-50/50">
                              {spec.label}
                            </th>
                            <td className="p-3 text-gray-900 font-medium">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* AffiliateCard Centralizado */}
                  <div className="my-6">
                    <AffiliateCard id={item.productId} />
                  </div>

                  {/* Grid Duplo de Prós e Contras */}
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
                      <h4 className="font-bold text-[#166534] text-lg mb-4 flex items-center gap-2">
                        <Check className="text-[#166534]" size={20} />
                        <span>Prós</span>
                      </h4>
                      <ul className="space-y-2.5 text-sm text-gray-800">
                        {item.pros.map((pro, proIdx) => (
                          <li key={proIdx} className="flex items-start gap-2.5">
                            <Check className="text-[#166534] shrink-0 mt-0.5" size={16} />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                      <h4 className="font-bold text-red-900 text-lg mb-4 flex items-center gap-2">
                        <X className="text-red-700" size={20} />
                        <span>Contras</span>
                      </h4>
                      <ul className="space-y-2.5 text-sm text-red-950">
                        {item.cons.map((con, conIdx) => (
                          <li key={conIdx} className="flex items-start gap-2.5">
                            <X className="text-red-700 shrink-0 mt-0.5" size={16} />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tabela de Critérios Avaliados com Notas Individuais */}
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    <table className="w-full border-collapse text-sm">
                      <thead className="bg-gray-100 text-gray-800 text-xs uppercase font-bold border-b border-gray-200">
                        <tr>
                          <th className="p-3 text-left">Critério de Campo Avaliado</th>
                          <th className="p-3 text-right">Nota</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {item.criteria.map((c, cIdx) => (
                          <tr key={cIdx}>
                            <td className="p-3 font-medium text-gray-800">{c.name}</td>
                            <td className="p-3 text-right font-bold text-[#166534]">{c.grade} / 10</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Ponto Estratégico 1 do Banner do Meio: Após o 3º Produto */}
                {idx === 2 && <BunnerDoMeio />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===================================================================
            7. BANNER DE CROSS-SELL (ACESSÓRIOS COMPLEMENTARES)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-[#166534] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a] m-0">
              Complementos Indispensáveis para Roçar com Lâmina de Aço
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cross-Sell 1: Kit Completo de EPIs */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Segurança Obrigatória
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.kitEpi.image}
                    alt="Kit Completo de EPIs para Operador de Roçadeira"
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
                  Proteção indispensável para rosto, ouvidos e canelas contra pedras e estilhaços lançados pelo disco de aço em alta rotação.
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

            {/* Cross-Sell 2: Fio de Nylon Quadrado 3mm */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Acabamento Perto de Muros
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.fioQuadrado.image}
                    alt="Fio de Nylon Quadrado 3mm para Acabamento onde a Lâmina não Chega"
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Fio de Nylon Quadrado 3mm
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Ideal para finalizar o corte rente a cercas, muros e meio-fio onde o disco de aço jamais deve encostar.
                </p>
              </div>
              <a
                href={crossSellProducts.fioQuadrado.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 3: Kit Misturador + Óleo 2T */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Proteção Térmica 2T
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
                  Garante a lubrificação exata sob carga pesada ao girar discos de serra e lâminas grossas no sol quente.
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
          </div>
        </div>

        {/* ===================================================================
            8. TIPOS DE DISCOS PARA ROÇADEIRA: QUAL USAR EM CADA CASO
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Tipos de discos para roçadeira: qual usar em cada caso
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Entender a classificação técnica dos acessórios evita que você compre uma peça que não conversa com o desafio real do seu terreno.
            </p>
            <p>
              Cada formato de lâmina é desenhado para absorver impactos diferentes e converter o torque do motor em produtividade:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Discos de duas ou três pontas
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                São as tradicionais facas para roçadeira, ideais para a{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>{' '}
                em gramados altos, pastos sujos e ervas daninhas verdes.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                As de 2 pontas são mais leves e ágeis para o dia a dia, enquanto as de 3 pontas entregam mais estabilidade e força de impacto para atravessar touceiras densas sem perder rotação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Discos de mato
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Com 4, 6 ou 8 pontas (como os clássicos modelos estilo Grass), ocupam o meio-termo entre a faca simples e a serra circular.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                São indicados para terrenos com silvas, cipós, samambaias e rebentos fibrosos onde uma lâmina de duas pontas acabaria patinando ou embolando o mato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Discos de serra circular
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Podem ter de 24 a 80 dentes, construídos em aço temperado ou com pastilhas soldadas de vídea.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Transformam a roçadeira numa ferramenta de desbaste florestal leve, obrigatória para cortar arbustos lenhosos, pequenas árvores e bambus onde facas de pontas simplesmente ricocheteiam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                Discos especializados
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Existem ainda acessórios desenhados para missões específicas, como as lâminas de polímero seguras para trabalhar perto de muros sem soltar faíscas.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nessa categoria entram também os discos trituradores curvados (que picotam o mato em adubo orgânico) e modelos especiais para vegetação aquática em brejos e canais.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/tipos-de-discos-e-laminas-para-rocadeira-comparativo.webp"
              alt="Disco de serra circular instalado na ponteira da roçadeira diante de arbustos e caules lenhosos no campo"
              title="Aplicação do disco de serra circular em arbustos lenhosos e capoeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            9. LÂMINA DE PONTAS VS DISCO DENTADO (COM TABELA COMPARATIVA)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Lâmina de Pontas vs. Disco Dentado: Qual é a diferença na prática?
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              A diferença fundamental entre esses dois acessórios está na física aplicada ao corte.
            </p>
            <p>
              A lâmina de pontas (faca) corta por impacto: ela precisa girar em altíssima velocidade para bater e decepar o caule verde e macio da planta.
            </p>
            <p>
              Se você encostar uma faca de pontas num tronco duro, ela não tem dentes para morder a madeira e devolve toda a energia em forma de coice contra o operador.
            </p>
            <p>
              Já o disco dentado (serra) corta por tração e serragem, pois os dentes vão arrancando pequenas lascas da fibra lenhosa a cada volta completa.
            </p>
            <p>
              Por isso, se você usar um disco de 80 dentes para cortar capim mole, o mato verde vai entupir o espaço entre os dentes, aquecer o aço e gastar gasolina à toa.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-800 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left">Critério Prático</th>
                  <th className="p-4 text-left text-[#166534]">Lâmina de Pontas (Faca 2 ou 3 Pontas)</th>
                  <th className="p-4 text-left text-[#166534]">Disco Dentado (Serra 40 ou 80 Dentes)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">Física do Corte</th>
                  <td className="p-4 text-gray-700">Corte por impacto seco em alta velocidade</td>
                  <td className="p-4 text-gray-700">Corte por tração e serragem progressiva</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">Vegetação Ideal</th>
                  <td className="p-4 text-gray-700">Capim alto, braquiária, pasto e ervas verdes</td>
                  <td className="p-4 text-gray-700">Arbustos lenhosos, bambu, cana e troncos finos</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">O Que Acontece se Errar o Mato</th>
                  <td className="p-4 text-gray-700">Dá rebote (coice) violento ao bater em madeira</td>
                  <td className="p-4 text-gray-700">Entope os dentes com fibra verde e aquece o aço</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">Manutenção no Campo</th>
                  <td className="p-4 text-gray-700">Afiação rápida com lima chata murça</td>
                  <td className="p-4 text-gray-700">Vídea dura muito mais, mas exige afiação específica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            10. COMO ESCOLHER O DISCO OU LÂMINA CERTA (CHECKLIST DE COMPRA)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Como Escolher o Disco ou Lâmina Certa? (Checklist de Compra)
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Antes de fechar o pedido online, confira dois detalhes mecânicos obrigatórios para que o disco novo não fique encostado na garagem por incompatibilidade.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            1. Furo Central (25,4mm vs 20mm)
          </h3>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              O furo do meio precisa encaixar com precisão milimétrica no ressalto da flange da sua roçadeira.
            </p>
            <p>
              Qualquer folga central gera uma vibração violenta que destrói os rolamentos da ponteira e castiga os braços do operador.
            </p>
            <p>
              O padrão de 25,4 mm (1 polegada) equipa a grande maioria das máquinas do mercado, incluindo Toyama, Vulcan, Nakashi, Tekna, Kawashima e Husqvarna.
            </p>
            <p>
              Já as roçadeiras Stihl (como FS 160, FS 220 e FS 290) utilizam furo central de 20 mm.
            </p>
            <p>
              Dica de campo: dê preferência a discos que já acompanham o anel redutor metálico de 25,4 mm para 20 mm na embalagem.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            2. Potência da Roçadeira (Cilindrada do Motor)
          </h3>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              Respeite sempre a cilindrada real do seu motor para não queimar a embreagem prematuramente.
            </p>
            <p>
              Se você ainda está escolhendo um equipamento novo para o seu sítio, consulte também o nosso comparativo da{' '}
              <a href="/melhor-rocadeira" className="text-[#166534] hover:underline font-semibold">
                melhor roçadeira
              </a>
              .
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-4 text-left">Faixa de Cilindrada</th>
                  <th className="p-4 text-left text-[#4ade80]">Acessórios de Aço Suportados</th>
                  <th className="p-4 text-left">Motivo Mecânico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Até 30 cc (Uso leve / ocasional)
                  </th>
                  <td className="p-4 font-semibold text-[#166534]">
                    Facas de 2 pontas finas (1,6 mm a 2,0 mm) ou carretel de nylon
                  </td>
                  <td className="p-4 text-gray-700">
                    Baixo peso preserva a rotação e evita patinação da embreagem pequena
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    De 33 cc a 42 cc (Uso intermediário / sítios)
                  </th>
                  <td className="p-4 font-semibold text-[#166534]">
                    Lâminas de 3 pontas, discos de corrente e discos de 40 dentes com vídea
                  </td>
                  <td className="p-4 text-gray-700">
                    Torque equilibrado para manter o giro constante em mato denso e arbustos
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Acima de 43 cc (Uso profissional pesado)
                  </th>
                  <td className="p-4 font-semibold text-[#166534]">
                    Lâminas grossas de 4 mm e discos de serra de 80 dentes com vídea
                  </td>
                  <td className="p-4 text-gray-700">
                    Motor de alta cilindrada vence a inércia de discos pesados sem cair de giro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            11. CUIDADOS COM AS LÂMINAS E COMO INSTALAR CORRETAMENTE
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Cuidados com as lâminas da roçadeira
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-12">
            <p>
              Assim que terminar a roçada do dia, limpe a seiva verde e a terra grudada no aço com um pano úmido e passe uma fina camada de óleo lubrificante para evitar ferrugem.
            </p>
            <p>
              Aproveite esse momento na bancada para inspecionar a peça contra a luz: se notar qualquer microfissura ou trinca perto do furo central ou nas pontas, descarte a lâmina imediatamente.
            </p>
            <p>
              Um disco de aço trincado girando a 10.000 RPM pode partir de repente e voar como um projétil perigoso.
            </p>
            <p>
              Na hora de{' '}
              <a href="/como-amolar-disco-de-rocadeira" className="text-[#166534] font-semibold hover:underline">
                amolar o disco de roçadeira
              </a>{' '}
              com lima chata, dê exatamente o mesmo número de passadas em cada aresta para manter o peso balanceado e evitar trepidação nas mãos.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            O que conferir antes de instalar a lâmina ou disco novo
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Antes de colocar o disco recém-comprado na ponteira, isole a ignição (cachimbo da vela ou bateria) e confirme se o furo central assenta sem folga no ressalto da flange — confira nossa tabela de{' '}
              <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-[#166534] font-semibold hover:underline">
                qual o furo da lâmina da Stihl FS 220
              </a>{' '}
              para não misturar 20 mm com 25,4 mm.
            </p>
            <p>
              Na montagem do conjunto metálico, nunca abra mão da flange externa estriada, do prato giratório protetor e da porca autotravante apertada no sentido anti-horário (rosca esquerda).
            </p>
            <p>
              Para acompanhar a ordem ilustrada de todas as arruelas sem errar nenhum detalhe, siga o tutorial dedicado de{' '}
              <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como trocar a lâmina ou disco na roçadeira
              </a>
              ; quando precisar voltar ao nylon para acabamentos perto de muros, veja também{' '}
              <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como tirar e colocar o carretel da roçadeira
              </a>
              .
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-instalar-lamina-disco-rocadeira-flange.webp"
              alt="Mecânico com luvas instalando lâmina de 3 pontas na flange da ponteira da roçadeira usando chave em T"
              title="Instalação correta e centralização da lâmina de aço na flange da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            12. EPIS SÃO INDISPENSÁVEIS + DICA DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            EPIs são indispensáveis
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              Trabalhar com disco de aço exige proteção física muito superior à utilizada em cortes leves com fio de nylon.
            </p>
            <p>
              Nunca dê a partida na roçadeira sem vestir os cinco itens abaixo:
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm mb-10">
            <ul className="space-y-3 text-sm sm:text-base text-amber-950 font-medium">
              <li className="flex items-start gap-3">
                <Check className="text-[#166534] shrink-0 mt-1" size={18} />
                <span>Protetor facial completo (viseira de tela metálica ou policarbonato, pois óculos comuns não protegem o rosto inteiro contra estilhaços).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#166534] shrink-0 mt-1" size={18} />
                <span>Perneiras de proteção reforçadas cobrindo da canela até o joelho.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#166534] shrink-0 mt-1" size={18} />
                <span>Abafador de ruídos tipo concha e luvas de couro antivibração.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#166534] shrink-0 mt-1" size={18} />
                <span>Botina de couro resistente com biqueira firme (jamais roce de tênis ou bota de borracha fina).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#166534] shrink-0 mt-1" size={18} />
                <span>Saia de proteção específica para lâminas devidamente parafusada no tubo da roçadeira.</span>
              </li>
            </ul>
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

          {/* Box de Destaque: Dica do Especialista */}
          <div className="my-6 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-[#166534] shrink-0" size={20} />
              <h3 className="text-lg font-bold text-[#166534] m-0">
                Dica do Especialista (Como Evitar o Rebote em Arbustos)
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-800 m-0">
              Ao cortar caules lenhosos com disco de serra circular, encoste sempre o quadrante superior esquerdo do disco (entre as posições de 8 e 11 horas do relógio), onde os dentes giram afastando o galho de você e reduzindo drasticamente o risco de coice lateral.
            </p>
          </div>
        </section>

        {/* ===================================================================
            13. MELHORES MARCAS DE LÂMINA E DISCO PARA ROÇADEIRA (AUTORIDADE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Melhores Marcas de Lâmina e Disco para Roçadeira
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Investir em aço certificado e balanceado de fábrica evita trincas perigosas e protege a caixa de engrenagens da ponteira.
            </p>
            <p>
              Confira os pontos fortes das principais fabricantes avaliadas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Stihl
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Referência mundial em aço temperado de alta espessura (4 mm), garantindo máxima resistência ao impacto e equilíbrio dinâmico em rotações elevadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Vonder
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Destaque nacional em custo-benefício para facas leves de 2 pontas com encaixe universal de 25,4 mm e fácil reafiação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Toyama
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Especialista em discos de serra de 40 dentes com pastilhas de vídea soldadas a laser e pintura anticorrosiva por cataforese.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h3 className="text-xl font-bold text-[#166534]">
                Husqvarna
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Tradicional no desenvolvimento de lâminas de mato (linha Grass) e discos florestais de baixo atrito para uso profissional contínuo.
              </p>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            14. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="text-[#166534] w-7 h-7 shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] text-center m-0">
              Perguntas Frequentes sobre Lâminas e Discos
            </h2>
          </div>

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
                      <p key={pIndex} className="leading-relaxed text-sm sm:text-base m-0">
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
            15. CONCLUSÃO: QUAL COMPRAR HOJE? (ALTO CONTRASTE)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#4ade80] tracking-tight">
              Conclusão: Qual comprar hoje?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Não existe um único disco que faça tudo bem feito, mas acertar a escolha conforme o mato do seu terreno resolve o serviço na metade do tempo.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Para capim, gramíneas e limpeza rápida sem cansar o operador, a Lâmina 2 Pontas Vonder é a melhor faca para roçadeira no custo-benefício.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Para mato alto, fechado e talos grossos, a Lâmina 3 Pontas Stihl (4 mm) é a melhor lâmina para roçadeira em estabilidade e força bruta.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Para arbustos, bambu e galhos lenhosos, vá de Disco 40 Dentes com Vídea Toyama (ou 80 Dentes se precisar de corte fino em pomar com máquina acima de 43 cc).
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Já para terrenos sujos com pedras e tocos ocultos, o Disco com Corrente de Motosserra aguenta o tranco sem estilhaçar.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Confira a medida do furo central da sua máquina, vista seus EPIs completos e bom trabalho no trecho!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorLaminaRocadeira;
