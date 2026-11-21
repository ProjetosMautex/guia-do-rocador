import React, { useState } from 'react';
import { BunnerDoMeiooleo2tempos } from './BunnerDoMeiooleo2tempos';
import { ExitIntentPopupoleo2tempos } from './ExitIntentPopupoleo2tempos';
import { products } from '../../data/productsrocadeira';
import { AffiliateCard } from '../AffiliateCard';

// Ícones SVG Inline Leves (Zero JS extra no bundle, PageSpeed 100)
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
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

const Star = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ShieldAlert = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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

const Sparkles = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const Droplets = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
  </svg>
);

const ExternalLink = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// Dados das 4 opções de óleo avaliadas
interface OilReview {
  id: string;
  productId: keyof typeof products;
  shortName: string;
  rank: string;
  badge: string;
  score: string;
  exactImageName: string;
  image: string;
  thumbImage: string;
  motor: string;
  tipo: string;
  proporcao: string;
  volume: string;
  paragraphs: string[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

const oilReviews: OilReview[] = [
  {
    id: "toyama-lub-fg50",
    productId: "oleo-para-motores-2t-jaso-toyama-500ml",
    shortName: "Toyama Lub FG50 2T (500 ml)",
    rank: "1. Toyama Lub FG50 – Óleo Lubrificante Motores 2 Tempos (500 ml)",
    badge: "Melhor Escolha Oficial 2T (50:1)",
    score: "9.8",
    exactImageName: "Óleo Para Motores 2t Jaso Toyama 500ml.webp",
    image: "/images/blog/Óleo Para Motores 2t Jaso Toyama 500ml.webp",
    thumbImage: "/images/blog/thumbs/Óleo Para Motores 2t Jaso Toyama 500ml.webp",
    motor: "2 Tempos refrigerado a ar",
    tipo: "Semissintético (Norma JASO FC)",
    proporcao: "50:1 (20 ml por litro de gasolina)",
    volume: "500 ml (Rende 25 litros de mistura)",
    paragraphs: [
      "Para quem quer jogar seguro usando o lubrificante desenvolvido pela própria fabricante, o Toyama Lub FG50 é a escolha mais certeira para roçadeiras 2 tempos refrigeradas a ar.",
      "Por ser um óleo semissintético com certificação JASO FC, ele queima de forma muito mais limpa do que os óleos minerais comuns.",
      "Essa queima eficiente mantém a cabeça do pistão e a janela do escapamento livres daquela crosta dura de carvão que rouba potência no corte.",
      "Na prática do campo, a grande vantagem é a mistura de 50:1, exigindo apenas 20 ml de óleo por litro de gasolina.",
      "Um único frasco de 500 ml rende 25 litros de combustível preparado para a sua jornada.",
      "A fórmula conta com aditivos antidesgastantes e anticorrosivos que protegem o motor mesmo quando a máquina fica alguns dias parada no galpão.",
      "O produto só exige atenção redobrada ao fechar bem a tampa e guardar na sombra após aberto para não perder propriedades."
    ],
    specs: [
      { label: "Aplicação", value: "Motores 2T refrigerados a ar" },
      { label: "Classificação / Norma", value: "JASO FC Semissintético" },
      { label: "Proporção Recomendada", value: "50:1 (20 ml / 1 L de gasolina)" },
      { label: "Rendimento por Frasco", value: "25 Litros de combustível preparado" },
      { label: "Volume Líquido", value: "500 ml" },
      { label: "Código de Referência", value: "Toyama 902-002" }
    ],
    pros: [
      "Formulação original Toyama testada para as linhas TBC e similares.",
      "Alto rendimento com proporção econômica de 50:1 (20 ml por litro).",
      "Certificação JASO FC que reduz drasticamente fumaça e carbonização.",
      "Aditivos anticorrosivos que preservam rolamentos de agulha e anéis de segmento."
    ],
    cons: [
      "Não aceita mistura no olho; exige dosador graduado para a proporção exata.",
      "Pede armazenamento em local seco e fresco após o primeiro rompimento do lacre."
    ]
  },
  {
    id: "toyama-lub-gg10-4t",
    productId: "oleo-lubrificante-gg10-4t-a-gasolina-1lt-10w-30sl-toyama",
    shortName: "Toyama Lub GG10 4T (SAE 10W-30)",
    rank: "2. Toyama Lub GG10 / SAE 10W-30 – API SL (Linha 4 Tempos)",
    badge: "Exclusivo para Roçadeiras 4T (Cárter)",
    score: "9.7",
    exactImageName: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp",
    image: "/images/blog/Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp",
    thumbImage: "/images/blog/thumbs/Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp",
    motor: "4 Tempos (Gasolina pura no tanque)",
    tipo: "Óleo Multiviscoso de Cárter (API SL / SAE 10W-30)",
    proporcao: "Puro no cárter (80 ml na TBC40X-4S)",
    volume: "1 Litro (Rende até 12 trocas completas)",
    paragraphs: [
      "Se você trabalha com uma roçadeira Toyama 4 tempos — como a TBC40X-4S —, esqueça a mistura no tanque de combustível.",
      "Esse tipo de motor usa gasolina pura no tanque e precisa de um lubrificante dedicado rodando exclusivamente dentro do cárter.",
      "O Toyama Lub GG10 é a especificação oficial da marca para manter o comando de válvulas e as engrenagens protegidos sob sol forte.",
      "Em jornadas longas de limpeza de chácaras e terrenos, o diferencial desse óleo está na excelente estabilidade térmica.",
      "Ele não afina demais quando o motor esquenta e evita a formação de espuma interna prejudicial à lubrificação.",
      "Essa consistência garante que o filme protetor chegue em todas as partes móveis mesmo quando você inclina a roçadeira para aparar barrancos."
    ],
    specs: [
      { label: "Aplicação", value: "Motores 4T estacionários e roçadeiras 4 tempos" },
      { label: "Viscosidade SAE", value: "SAE 10W-30 Multiviscoso" },
      { label: "Classificação de Serviço", value: "API SL" },
      { label: "Modo de Uso", value: "Puro no cárter (jamais misturar na gasolina)" },
      { label: "Capacidade Cárter TBC40X-4S", value: "Apenas 80 ml (Troca periódica)" },
      { label: "Volume da Embalagem", value: "1 Litro (Múltiplas trocas completas)" }
    ],
    pros: [
      "Especificação técnica oficial Toyama para roçadeiras e motores 4 tempos.",
      "Estabilidade térmica de alto nível para trabalhar o dia todo sob sol forte.",
      "Proteção máxima contra formação de borra, oxidação e desgaste de válvulas.",
      "Embalagem econômica de 1 litro que rende mais de dez abastecimentos de cárter."
    ],
    cons: [
      "De uso exclusivo em cárter 4T (destrói o motor se misturado na gasolina de roçadeira 2T).",
      "Exige conferência frequente do nível na vareta antes de cada partida."
    ]
  },
  {
    id: "lubrax-essencial-2t-fc",
    productId: "oleo-moto-2t-lubrax-2-tempos-essencial-jaso-fc-2t-api-fc",
    shortName: "Lubrax Essencial 2T FC (500 ml)",
    rank: "3. Lubrax Essencial 2T FC (Semissintético JASO FC)",
    badge: "Melhor Custo-Benefício Semissintético",
    score: "9.5",
    exactImageName: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp",
    image: "/images/blog/Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp",
    thumbImage: "/images/blog/thumbs/Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp",
    motor: "2 Tempos refrigerado a ar",
    tipo: "Semissintético (Norma JASO FC / API TC)",
    proporcao: "50:1 ou 40:1 (Conforme manual)",
    volume: "500 ml",
    paragraphs: [
      "Quando o frasco original da Toyama acaba no meio da semana e você precisa de uma reposição confiável e fácil de achar, o Lubrax Essencial 2T FC segura o tranco com tranquilidade.",
      "Assim como o FG50, ele é um óleo semissintético formulado para motores 2 tempos refrigerados a ar e atende rigorosamente à norma JASO FC.",
      "No dia a dia da roçada, entrega excelente película lubrificante em altas rotações.",
      "Essa barreira fluida reduz o risco de travamento dos anéis de segmento no cilindro.",
      "A queima controlada evita pré-ignição por acúmulo de cinzas incandescentes na ponta da vela.",
      "É uma ótima opção para quem opera com frequência e quer trabalhar com menos fumaça no ar sem comprometer a durabilidade do motor."
    ],
    specs: [
      { label: "Aplicação", value: "Roçadeiras, motosserras e ciclomotores 2T" },
      { label: "Classificação / Norma", value: "JASO FC / API TC Semissintético" },
      { label: "Proporção de Uso", value: "50:1 (20 ml/L) ou 40:1 (25 ml/L)" },
      { label: "Controle de Fuligem", value: "Baixo nível de cinzas sulfatadas" },
      { label: "Volume Líquido", value: "500 ml" },
      { label: "Origem", value: "Petrobras Lubrax Oficial" }
    ],
    pros: [
      "Baixíssima emissão de fumaça escura durante o trabalho contínuo.",
      "Mantém anéis de pistão soltos e vela sem incrustações de carvão.",
      "Excelente disponibilidade em postos, lojas agrícolas e no Mercado Livre.",
      "Proteção comprovada contra riscos na camisa do cilindro em alta rotação."
    ],
    cons: [
      "Exige medição rigorosa no dosador (excesso causa fumaça e perda de rotação).",
      "Alguns manuais mais antigos exigem proporção 40:1 em vez de 50:1."
    ]
  },
  {
    id: "stihl-8017-h-mineral",
    productId: "oleo-stihl-8017-h-oleo-lubrificante-2-tempos-castrol-500ml",
    shortName: "Stihl 8017 H Mineral 2T (500 ml)",
    rank: "4. Stihl 8017 H (Óleo Mineral 2T – Proporção 25:1)",
    badge: "Alternativa Barata para Uso Ocasional",
    score: "9.1",
    exactImageName: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp",
    image: "/images/blog/Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp",
    thumbImage: "/images/blog/thumbs/Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp",
    motor: "2 Tempos refrigerado a ar",
    tipo: "Mineral 2T de Alta Aditivação",
    proporcao: "25:1 (40 ml por litro de gasolina)",
    volume: "500 ml (Rende 12,5 litros de mistura)",
    paragraphs: [
      "Para quem liga a roçadeira Toyama 2 tempos apenas de vez em quando para baixar o mato do quintal ou do sítio, o óleo mineral Stihl 8017 H continua sendo uma alternativa honesta e de baixo custo.",
      "Ele forma uma camada lubrificante confiável para evitar o travamento do pistão em serviços moderados.",
      "Sua grande vantagem é a facilidade de ser encontrado em qualquer loja agropecuária do país.",
      "O ponto crítico de atenção aqui é a proporção obrigatória de 25:1 no preparo da mistura.",
      "Isso significa dosar exatamente 40 ml de óleo para cada 1 litro de gasolina comum.",
      "Por ser mineral e levar o dobro de óleo na mistura em relação ao semissintético, ele solta mais fumaça e acumula mais carvão na vela e na tela do escapamento.",
      "Essa característica exige descarbonização e limpeza preventiva da vela com maior frequência."
    ],
    specs: [
      { label: "Aplicação", value: "Motores 2T convencionais de uso moderado" },
      { label: "Base Lubrificante", value: "Mineral aditivado de alta viscosidade" },
      { label: "Proporção Obrigatória", value: "25:1 (40 ml de óleo para 1 L de gasolina)" },
      { label: "Rendimento por Frasco", value: "12,5 Litros de mistura combustível" },
      { label: "Volume Líquido", value: "500 ml" },
      { label: "Fabricante Parceiro", value: "Castrol / Stihl Brasil" }
    ],
    pros: [
      "Preço unitário mais baixo na prateleira.",
      "Proteção mecânica básica comprovada contra atrito do pistão.",
      "Encontrado com facilidade imediata em qualquer cidade do interior."
    ],
    cons: [
      "Rendimento pela metade: gasta 40 ml de óleo para cada litro de combustível.",
      "Gera mais fumaça e forma crosta de carvão na vela e na saída do escapamento."
    ]
  }
];

// Simulador de Perfil do Motor Toyama
const simulatorProfiles = {
  "2t-profissional": {
    label: "Toyama 2T Profissional (TBC43, TBC52 ou TBC63)",
    title: "Toyama Lub FG50 (50:1) ou Lubrax Essencial 2T FC",
    desc: "Em serviços contínuos de corte de capim pesado, você precisa de óleo semissintético JASO FC na proporção de 50:1 (20 ml/L). O FG50 mantém o pistão descarbonizado, reduz a fumaça no rosto e protege os rolamentos sob aceleração máxima.",
    targetId: "toyama-lub-fg50"
  },
  "4t-gasolina": {
    label: "Toyama 4T a Gasolina Pura (TBC40X-4S com cárter)",
    title: "Toyama Lub GG10 (SAE 10W-30 API SL puro no cárter)",
    desc: "Atenção: JAMAIS misture óleo na gasolina da linha 4 tempos. A TBC40X-4S usa gasolina pura no tanque e 80 ml de óleo Toyama Lub GG10 dentro do cárter. A lubrificação de válvulas depende do nível correto na vareta.",
    targetId: "toyama-lub-gg10-4t"
  },
  "2t-domestica": {
    label: "Toyama 2T Pequena / Residencial (TBC26 ou TBC33)",
    title: "Toyama Lub FG50 Semissintético (50:1)",
    desc: "Máquinas menores têm carburadores de passagens muito estreitas. O semissintético queima sem soltar goma nem cinzas, garantindo partidas fáceis e lenta estável para aparar cantos de muro e gramados.",
    targetId: "toyama-lub-fg50"
  },
  "2t-ocasional": {
    label: "Uso Ocasional / Sítio a Cada 15 ou 30 Dias",
    title: "Stihl 8017 H (Mineral 25:1) ou Toyama FG50",
    desc: "Para roçadas esporádicas, o mineral Stihl 8017 H oferece proteção mecânica barata (40 ml/L). Lembre-se apenas de esvaziar o tanque e queimar o combustível do carburador antes de guardar a máquina por semanas.",
    targetId: "stihl-8017-h-mineral"
  }
};

// Perguntas Frequentes (FAQ)
const faqList = [
  {
    q: "Posso usar óleo 4 tempos ou óleo de carro no motor da roçadeira Toyama 2 tempos?",
    a: [
      "Nunca faça isso sob hipótese alguma.",
      "Óleo de cárter de carro ou moto 4 tempos não foi formulado para queimar junto com a gasolina.",
      "Ele forma borra espessa no cilindro, prende os anéis de segmento e engripa o pistão em poucos minutos de aceleração."
    ]
  },
  {
    q: "O que acontece se eu colocar apenas 20 ml de óleo mineral 2T achando que é 50:1?",
    a: [
      "A máquina vai rodar com lubrificação insuficiente e o cilindro vai fundir.",
      "Óleo mineral exige 40 ml por litro (25:1) porque possui menor poder de película protetora sob alta rotação.",
      "A medida de 20 ml por litro (50:1) é exclusiva para óleos semissintéticos ou sintéticos certificados JASO FC ou FD."
    ]
  },
  {
    q: "Quanto tempo a gasolina com óleo 2 tempos pode ficar guardada no tanque?",
    a: [
      "No máximo 15 dias.",
      "Após esse prazo, o etanol presente na gasolina brasileira absorve umidade do ar e decanta o óleo para o fundo do reservatório.",
      "Ao dar a partida com mistura velha, a máquina puxa combustível desbalanceado e cria verniz que obstrui os giclês do carburador."
    ]
  },
  {
    q: "Como abastecer o óleo na roçadeira Toyama 4 tempos (TBC40X-4S)?",
    a: [
      "Coloque gasolina comum pura no tanque de combustível.",
      "Em seguida, retire o bujão do cárter na base do motor e adicione exatamente 80 ml de óleo SAE 10W-30 API SL (Toyama Lub GG10).",
      "Confira na varetinha com a máquina apoiada em nível e troque o óleo periodicamente após as primeiras horas de serviço."
    ]
  }
];

export const MelhorOleoRocadeiraToyama: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<keyof typeof simulatorProfiles>("2t-profissional");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const currentSim = simulatorProfiles[selectedProfile];

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* ===================================================================
          1. HERO (CABEÇALHO ESCURO COM IMAGEM DE FUNDO OTIMIZADA PARA LCP)
          =================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/qual-o-melhor-oleo-para-rocadeira-toyama.webp"
            alt="Mesa de manutenção no campo com roçadeira Toyama, frascos de óleo 2T e 4T e dosador graduado de combustível"
            title="Qual o melhor óleo para roçadeira Toyama"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Guia de Lubrificação e Mistura 2T / 4T
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Qual o Melhor Óleo para Roçadeira Toyama? Top 4 Opções (2T e 4T)
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Descubra o lubrificante exato para motores 2 tempos e 4 tempos, as proporções corretas de mistura (50:1 e 25:1) e evite fundir a sua máquina no trecho.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <a href="/author/jose-ailton/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Jose+Ailton&background=16A34A&color=fff";
                  }}
                />
                <span>José Ailton da Silva</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Atualizado para 2026</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO (1 frase por parágrafo, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Em mais de dez anos trabalhando no trecho com roçadeiras a combustão, já vi muita máquina boa ir parar na retífica antes da hora por um único descuido: óleo errado ou mistura feita no olho.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Escolher o melhor óleo para roçadeira Toyama evita o engripamento do pistão, reduz a fumaça no rosto do operador e impede que o carvão entupa o escapamento no meio da roçada.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Como a Toyama fabrica tanto modelos 2 tempos quanto roçadeiras 4 tempos, o primeiro passo é confirmar qual motor está nas suas costas.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Para quem precisa renovar as peças de desgaste da ponta de corte, vale a pena ver também nosso comparativo com o <a href="/melhor-carretel-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor carretel para roçadeira</a> do mercado.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, reuni as 4 melhores opções de lubrificantes para comprar hoje e as regras exatas de mistura para a sua máquina durar anos no batente.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA POR MOTOR TOYAMA
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual o Óleo Ideal para a Sua Roçadeira Toyama?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o modelo da sua máquina ou a intensidade da sua rotina de corte para ver de imediato a recomendação técnica correta:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {Object.entries(simulatorProfiles).map(([key, opt]) => {
              const isSelected = selectedProfile === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedProfile(key as any)}
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
              Lubrificante e Dosagem Recomendada:
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              {currentSim.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {currentSim.desc}
            </p>
            <a
              href={`#${currentSim.targetId}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4ade80] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Ver Análise Mecânica e Preço do Produto</span>
              <ChevronDown size={14} />
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. VITRINE MISTA COM TABELA RESUMO (Responsiva Mobile & Desktop)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Melhores óleos para roçadeira Toyama para comprar online
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Opção</th>
                  <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {oilReviews.map((item) => {
                  const prod = products[item.productId];
                  const displayName = prod?.name || item.shortName;
                  const affiliateUrl = prod?.link || "#";

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors"
                    >
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumbImage}
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
                          href={`#${item.id}`}
                          className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block"
                        >
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-gray-600 mt-1 md:hidden">
                          {item.motor} • {item.proporcao}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score} / 10
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        <span className="block font-medium text-gray-800">{item.motor}</span>
                        <span className="text-xs text-gray-500">{item.tipo} • {item.proporcao}</span>
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
        </div>

        {/* ===================================================================
            5. BANNER DO MEIO DE ÓLEO 2 TEMPOS
            =================================================================== */}
        <div className="my-14">
          <BunnerDoMeiooleo2tempos />
        </div>

        {/* ===================================================================
            6. REVIEWS DETALHADOS DOS 4 PRODUTOS
            =================================================================== */}
        <div className="space-y-16">
          <div className="border-b-2 border-gray-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Análise Completa dos 4 Melhores Óleos para Roçadeiras Toyama
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Confira a avaliação técnica de bancada, composição química, prós e contras para não errar no galpão:
            </p>
          </div>

          {oilReviews.map((review) => {
            return (
              <section
                key={review.id}
                id={review.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 transition-shadow hover:shadow-lg scroll-mt-24"
              >
                {/* Header do Card */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="bg-[#15803d] text-white font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                    {review.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-black text-sm">
                    <Star className="fill-amber-400 text-amber-400" size={18} />
                    <span className="text-gray-900">{review.score}</span>
                    <span className="text-gray-400 text-xs font-normal">/ 10</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] leading-tight mb-6">
                  {review.rank}
                </h3>

                {/* Grid Foto + Destaques Técnicos */}
                <div className="grid md:grid-cols-12 gap-6 items-center mb-6 bg-gray-50/60 p-4 rounded-2xl border border-gray-100">
                  <div className="md:col-span-5 flex justify-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-center shadow-sm">
                      <img
                        src={review.image}
                        alt={review.exactImageName}
                        title={review.exactImageName}
                        width={200}
                        height={200}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-3">
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Motor Indicado:</span>
                      <span className="text-sm font-bold text-gray-900">{review.motor}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Classificação / Base:</span>
                      <span className="text-sm font-bold text-[#166534]">{review.tipo}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Proporção / Volume:</span>
                      <span className="text-sm font-bold text-gray-900">{review.proporcao}</span>
                    </div>
                  </div>
                </div>

                {/* Parágrafos de Avaliação (1 frase por parágrafo, zero negrito) */}
                <div className="prose prose-lg text-gray-700 max-w-none mb-6">
                  {review.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Tabela de Especificações */}
                <div className="my-6 rounded-2xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 font-bold uppercase text-xs">
                      <tr>
                        <th className="py-2.5 px-4">Especificação Técnica</th>
                        <th className="py-2.5 px-4">Detalhe do Modelo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {review.specs.map((s, sIdx) => (
                        <tr key={sIdx} className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-gray-700">{s.label}</td>
                          <td className="py-2.5 px-4 text-gray-900 font-bold">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Prós e Contras */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
                    <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Check size={18} className="text-[#16A34A]" /> Vantagens Reais
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#166534] list-disc list-inside">
                      {review.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <AlertTriangle size={18} className="text-red-600" /> Pontos de Atenção
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside">
                      {review.cons.map((con, conIdx) => (
                        <li key={conIdx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Principal de Afiliado Padrão */}
                <div className="my-6">
                  <AffiliateCard id={review.productId as any} />
                </div>
              </section>
            );
          })}
        </div>

        {/* ===================================================================
            7. BANNER DE CROSS-SELL (Insumos e Acessórios Complementares)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#16A34A] font-black text-xs uppercase tracking-wider block mb-1">
              Acessórios e Ferramentas Complementares
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Equipamentos para Abastecer e Trabalhar com Segurança
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Selecionei os itens que todo operador de roçadeira Toyama precisa ter no galpão para não errar a mistura e se proteger:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Frasco Dosador e Misturador 2T */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Mistura Sem Erro
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-oleo-2t-cross.webp"
                    alt="Frasco Dosador e Misturador Graduado de Combustível 2T"
                    title="Dosador Graduado para Roçadeira"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Frasco Dosador e Misturador Graduado 2T
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Escala gravada para proporções 50:1 e 25:1, acabando com a mistura no olhômetro que funde o cilindro.
                </p>
              </div>
              <a
                href={products['kit-misturador-oleo-2t']?.link || 'https://meli.la/1q7XjW7'}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: Kit EPIs */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Proteção Obrigatória
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-epis-cross.webp"
                    alt="Kit Completo de EPIs para Roçador"
                    title="Kit de Segurança EPI Roçador"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit Completo de Proteção (EPIs)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Viseira de proteção facial, protetor auricular de alta atenuação e luvas reforçadas contra pedriscos.
                </p>
              </div>
              <a
                href={products['kit-completo-de-epis']?.link || 'https://meli.la/2K1zF2a'}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Carretel Easy Load Toyama */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Agilidade no Corte
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Carretel Automatico Easy Load 10mm Original Toyama.webp"
                    alt="Carretel Automático Toyama Easy Load M10"
                    title="Carretel Easy Load Toyama"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Carretel Toyama Easy Load M10
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Rosca padrão M10x1,25 mm esquerda para toda a linha Toyama, recarregando o nylon por fora sem desmontar.
                </p>
              </div>
              <a
                href={products['carretel-automatico-easy-load-10mm-original-toyama']?.link || 'https://meli.la/15gWWvv'}
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
            8. GUIA TÉCNICO DE MISTURA E REGRAS DE MOTOR (2T VS 4T)
            =================================================================== */}
        <section className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Guia Técnico: Regras de Mistura e Funcionamento do Motor Toyama
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Quase todas as roçadeiras Toyama no mercado usam motor 2 tempos refrigerado a ar.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Como esse motor não tem cárter de óleo separado, o lubrificante precisa ir misturado diretamente na gasolina para banhar o pistão, anéis e virabrequim durante o funcionamento.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Regra de ouro de quem não quer perder a máquina: nunca use óleo de carro, óleo de moto 4 tempos ou óleo 2T náutico para motor de popa na sua roçadeira.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Motores de roçadeira trabalham muito mais quentes e em rotações altíssimas; usar o óleo errado engripa o cilindro em poucos minutos de serviço.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/proporcao-mistura-oleo-rocadeira-toyama.webp"
              alt="Operador medindo a proporção exata de óleo 2 tempos em dosador graduado para abastecer roçadeira Toyama"
              title="Dosagem e mistura de óleo 2 tempos em roçadeira Toyama"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Critérios de Mistura: Semissintético vs Mineral */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Droplets size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Proporção para Óleo Semissintético (50:1)</h3>
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="mb-3 leading-relaxed">
                  Ao usar óleos semissintéticos ou sintéticos certificados JASO FC ou FD, a medida padrão é 50:1.
                </p>
                <p className="mb-3 leading-relaxed">
                  Isso equivale a exatamente 20 ml de óleo para cada 1 litro de gasolina comum.
                </p>
                <p className="mb-3 leading-relaxed">
                  Durante o período de amaciamento inicial da máquina, alguns manuais da Toyama recomendam dosar 40:1 (25 ml por litro).
                </p>
                <p className="mb-0 leading-relaxed">
                  Use sempre o galão dosador graduado para não colocar óleo a mais nem a menos.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Proporção se Você Usar Óleo Mineral (25:1)</h3>
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="mb-3 leading-relaxed">
                  Com óleo mineral 2T convencional, a proporção obrigatória sobe para 25:1.
                </p>
                <p className="mb-3 leading-relaxed">
                  Essa proporção exige exatamente 40 ml de óleo mineral para cada litro de gasolina.
                </p>
                <p className="mb-3 leading-relaxed">
                  Se você colocar apenas 20 ml de óleo mineral achando que rende igual ao semissintético, faltará película lubrificante e o motor vai fundir.
                </p>
                <p className="mb-0 leading-relaxed">
                  A desvantagem do mineral é que ele solta mais fumaça e cria carvão na ponta da vela e no escapamento.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco Dedicado à Linha 4 Tempos */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-amber-700 w-6 h-6 shrink-0" />
              <h3 className="text-xl font-bold text-amber-900 m-0">
                Atenção Máxima para Roçadeiras Toyama 4 Tempos a Gasolina
              </h3>
            </div>
            <div className="prose text-amber-900 text-sm sm:text-base max-w-none">
              <p className="mb-3 leading-relaxed">
                Nas roçadeiras Toyama 4 tempos, o funcionamento mecânico é parecido com o de uma motocicleta: gasolina pura no tanque e óleo SAE 10W-30 API SL no reservatório do cárter.
              </p>
              <p className="mb-3 leading-relaxed">
                Na roçadeira Toyama TBC40X-4S, a capacidade total do cárter é de apenas 80 ml de óleo.
              </p>
              <p className="mb-3 leading-relaxed">
                Por trabalhar com um volume tão pequeno de lubrificante, a conferência do nível antes de puxar a cordinha de partida é inegociável.
              </p>
              <p className="mb-0 leading-relaxed">
                Apoie o equipamento no chão plano, confira a marcação na vareta e realize as trocas preventivas conforme o manual para não danificar o comando de válvulas.
              </p>
            </div>
          </div>

          {/* Tabela Rápida de Aplicação Toyama */}
          <div className="pt-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Tabela Rápida de Aplicação de Óleo para Roçadeiras Toyama
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Consulte este resumo prático sempre antes de preparar o combustível ou abastecer o cárter:
            </p>

            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Tipo de Roçadeira Toyama</th>
                    <th className="p-3.5 sm:p-4">Exemplos de Modelos</th>
                    <th className="p-3.5 sm:p-4">Óleo Recomendado</th>
                    <th className="p-3.5 sm:p-4">Medida / Proporção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50 bg-green-50/20">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">2 Tempos (Uso Intenso / Profissional)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">TBC26, TBC33, TBC43, TBC52</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Toyama Lub FG50 ou Lubrax 2T FC</td>
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">50:1 (20 ml / 1 L de gasolina)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">2 Tempos (Uso Ocasional / Sítio)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">TBC26, TBC33, TBC43, TBC52</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-gray-800">Mineral 2T (ex: Stihl 8017 H)</td>
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">25:1 (40 ml / 1 L de gasolina)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-amber-50/20">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">4 Tempos (Gasolina pura no tanque)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">TBC40X-4S (com cárter)</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-amber-900">Toyama Lub GG10 (SAE 10W-30 API SL)</td>
                    <td className="p-3.5 sm:p-4 font-bold text-amber-900">80 ml direto no cárter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Qual Óleo Escolher para a Sua Roçadeira Toyama?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium text-sm sm:text-base">
              <p className="mb-5 leading-relaxed">
                Acertar no lubrificante custa barato perto do preço de um kit cilindro e pistão novo na oficina mecânica.
              </p>
              <p className="mb-5 leading-relaxed">
                Se a sua roçadeira Toyama é 2 tempos e você busca o melhor rendimento com motor sempre limpo, vá direto no Toyama Lub FG50 na proporção de 50:1 ou no Lubrax Essencial 2T FC.
              </p>
              <p className="mb-5 leading-relaxed">
                Para uso esporádico no sítio gastando menos no frasco, o mineral 25:1 resolve o serviço, desde que você capriche na limpeza periódica da vela e do escapamento.
              </p>
              <p className="mb-5 leading-relaxed">
                Já se o seu modelo for 4 tempos, não invente moda: use o Toyama Lub GG10 na viscosidade SAE 10W-30 no nível exato de 80 ml dentro do cárter e tenha máquina forte por muitos anos no trecho.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Óleo para Roçadeiras Toyama
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
                    className="w-full px-6 py-5 text-left font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className="text-[#16A34A] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a.map((p, pIndex) => (
                        <p key={pIndex} className="mb-3 last:mb-0 leading-relaxed">
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
            11. DICA DE OURO DO ESPECIALISTA
            =================================================================== */}
        <div className="mt-12 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-green-100 p-3 rounded-full text-[#166534] shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#166534] mb-2">
              Dica de Ouro de José Ailton
            </h3>
            <div className="text-gray-800 text-sm leading-relaxed">
              <p className="mb-4 leading-relaxed">
                Prepare apenas a quantidade de mistura que você realmente vai queimar na semana de trabalho.
              </p>
              <p className="mb-4 leading-relaxed">
                Deixar gasolina com óleo parada no tanque da roçadeira por mais de 15 dias faz a mistura decantar e apodrecer, gerando aquela goma amarela que entope a agulha e o diafragma do carburador.
              </p>
              <p className="mb-0 leading-relaxed">
                Se for guardar a roçadeira por mais de um mês, esvazie o tanque e ligue o motor até ele morrer sozinho por falta de combustível para secar todo o circuito interno.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup Oficial */}
      <ExitIntentPopupoleo2tempos />
    </div>
  );
};
