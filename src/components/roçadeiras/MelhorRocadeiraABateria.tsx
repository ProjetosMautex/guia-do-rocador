import React, { useState } from 'react';
import { BunnerDoMeiorocadeira } from './BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira } from './ExitIntentPopuprocadeira';
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

const Zap = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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

const ExternalLink = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

interface BatteryReview {
  id: string;
  productId: keyof typeof products;
  shortName: string;
  rank: string;
  badge: string;
  score: string;
  exactImageName: string;
  image: string;
  thumbImage: string;
  tensao: string;
  corte: string;
  perfil: string;
  paragraphs: string[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

const batteryReviews: BatteryReview[] = [
  {
    id: "bosch-gfr-18v-23",
    productId: "bosch-gfr-18v-23",
    shortName: "Bosch GFR 18V-23 Brushless",
    rank: "1. Versatilidade 2 em 1 — Bosch GFR 18V-23",
    badge: "Melhor Versatilidade Profissional 18V",
    score: "9.8",
    exactImageName: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp",
    image: "/images/blog/Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp",
    tensao: "18V Brushless (Versão Solo)",
    corte: "Fio de nylon e lâmina de 3 pontas (230 mm)",
    perfil: "Uso Profissional e Manutenção Versátil",
    paragraphs: [
      "Do ponto de vista de construção mecânica, a Bosch GFR 18V-23 Professional está acima dos modelos domésticos comuns.",
      "Seu motor Brushless (sem escovas de carvão) elimina o atrito interno, reduz o aquecimento sob carga e mantém o torque constante tanto no carretel de nylon quanto na lâmina de 3 pontas de 230 mm.",
      "O destaque eletrônico fica para o sistema Anti-Tangle: quando o capim alto enrola no eixo, a placa controla a rotação para evitar o travamento brusco do cabeçote, poupando engrenagens e rolamentos.",
      "O ponto de atenção está no custo inicial, já que ela é vendida na versão solo sem bateria e carregador.",
      "Por isso, vale mais a pena para quem já usa a plataforma 18V da Bosch e valoriza fácil reposição de peças no país."
    ],
    specs: [
      { label: "Motorização", value: "Brushless (Sem escovas de carvão)" },
      { label: "Plataforma de Tensão", value: "18V Bosch Professional" },
      { label: "Sistema de Corte", value: "Carretel de nylon + Lâmina 3 pontas (230 mm)" },
      { label: "Proteção Eletrônica", value: "Sistema Anti-Tangle (Antitravamento)" },
      { label: "Bateria e Carregador", value: "Vendidos separadamente (Versão SB)" }
    ],
    pros: [
      "Motor Brushless de alta eficiência e menor desgaste interno.",
      "Proteção eletrônica Anti-Tangle que evita sobrecarga por enrolamento.",
      "Alternância confiável entre fio de nylon e lâmina metálica de 3 dentes.",
      "Boa distribuição de peso e rede ampla de assistência técnica."
    ],
    cons: [
      "Bateria e carregador vendidos separadamente.",
      "Investimento total elevado para quem ainda não tem o ecossistema Bosch 18V."
    ]
  },
  {
    id: "toyama-tbt18-18bc300",
    productId: "toyama-tbt18-18bc300-k",
    shortName: "Toyama TBT18+18BC300 (36V)",
    rank: "2. Custo-benefício com duas baterias — Toyama TBT18+18BC300 (18+18V)",
    badge: "Melhor Custo-Benefício com 2 Baterias",
    score: "9.6",
    exactImageName: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp",
    image: "/images/blog/Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp",
    tensao: "36V Reais (2x 18V 4Ah inclusas)",
    corte: "Carretel de nylon e lâmina metálica",
    perfil: "Chácaras e Vegetação Fechada",
    paragraphs: [
      "Na elétrica de potência, somar duas baterias de 18V em série operando a 36V reais faz diferença imediata no corte.",
      "O motor trabalha com menos corrente para entregar o mesmo torque, o que significa menos calor nos componentes eletrônicos e mais fôlego em vegetação fechada.",
      "A Toyama TBT18+18BC300 combina essa arquitetura com motor Brushless e guidão tipo bicicleta, entregando comportamento próximo ao de roçadeiras laterais tradicionais.",
      "O kit já chega completo com carregador duplo e cinta de sustentação.",
      "Esse cinto é essencial porque o conjunto de 5,23 kg exige bom ajuste ergonômico para não sobrecarregar a lombar em cortes demorados."
    ],
    specs: [
      { label: "Motorização", value: "Brushless (Sem escovas)" },
      { label: "Tensão de Operação", value: "36V (2 baterias de 18V 4.0Ah em série)" },
      { label: "Empunhadura", value: "Guidão duplo tipo bicicleta" },
      { label: "Peso do Conjunto", value: "5,23 kg" },
      { label: "Itens Inclusos", value: "2 baterias 4Ah, carregador duplo, cinto e kit de corte" }
    ],
    pros: [
      "Sistema 18V + 18V com entrega de torque superior e menos aquecimento.",
      "Motor sem escovas de baixa manutenção preventiva.",
      "Acompanha carregador duplo e acessórios de corte.",
      "Facilidade para encontrar peças de reposição Toyama no Brasil."
    ],
    cons: [
      "Peso de 5,23 kg acima da média dos aparadores leves.",
      "Exige controle de carga simultânea de duas baterias."
    ]
  },
  {
    id: "stihl-fsa-45",
    productId: "rocadeira-stihl-fsa-45",
    shortName: "STIHL FSA 45 (Bateria Integrada)",
    rank: "3. Jardins domésticos e acabamentos — STIHL FSA 45",
    badge: "Melhor para Quintais Domésticos",
    score: "9.4",
    exactImageName: "Roçadeira Stihl FSA 45.webp",
    image: "/images/blog/Roçadeira Stihl FSA 45.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Stihl FSA 45.webp",
    tensao: "18V Íon-Lítio Integrada",
    corte: "Cabeçote PolyCut 2-2 (Lâminas plásticas ou nylon)",
    perfil: "Acabamento Residencial Silencioso",
    paragraphs: [
      "A STIHL FSA 45 é um equipamento projetado com foco cirúrgico em acabamento residencial silencioso.",
      "Sua mecânica é leve e bem balanceada, com baixa vibração transmitida às mãos e haste com regulagem em quatro posições.",
      "O cabeçote PolyCut 2-2 permite trocar rapidamente entre lâminas plásticas, que reduzem o esforço do motor e economizam carga, e fio de nylon para encostar em muros.",
      "O limitador técnico está na bateria de íon-lítio integrada à carcaça.",
      "Como ela não pode ser removida para troca rápida e entrega cerca de 20 minutos de trabalho, a máquina atende apenas quintais compactos, sem margem para grandes áreas ou mato fibroso."
    ],
    specs: [
      { label: "Tensão da Bateria", value: "18V (Bateria interna integrada)" },
      { label: "Sistema de Corte", value: "PolyCut 2-2 (Lâminas de polímero ou nylon)" },
      { label: "Autonomia Média", value: "Até 20 minutos por carga" },
      { label: "Ajuste Ergonômico", value: "Haste telescópica e cabeça articulada (4 posições)" },
      { label: "Perfil de Ruído", value: "Ultrassilenciosa para condomínios" }
    ],
    pros: [
      "Construção leve, silenciosa e com baixíssima vibração no punho.",
      "Sistema PolyCut versátil (lâminas de polímero ou fio de nylon).",
      "Ajuste ergonômico de altura e ângulo de trabalho.",
      "Padrão de acabamento e pós-venda consolidado da STIHL."
    ],
    cons: [
      "Bateria integrada não removível impede usar carga reserva.",
      "Autonomia curta (cerca de 20 minutos) restrita a pequenos jardins."
    ]
  },
  {
    id: "toyama-tbt18bc250s",
    productId: "toyama-tbt18bc250sk",
    shortName: "Toyama TBT18BC250S (Carrinho 18V)",
    rank: "4. Toyama Roçadeira a Bateria 18V ｜ TBT18BC250S",
    badge: "Melhor 2 em 1 com Rodas de Apoio",
    score: "9.3",
    exactImageName: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp",
    image: "/images/blog/Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp",
    thumbImage: "/images/blog/thumbs/Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp",
    tensao: "18V Brushless (7.500 RPM)",
    corte: "Lâmina 3 pontas e carretel (254 mm) + Rodas",
    perfil: "Gramados Residenciais e Bordas Niveladas",
    paragraphs: [
      "A Toyama TBT18BC250S resolve uma dor ergonômica clássica em gramados residenciais: manter a altura do corte constante nos cantos sem forçar os punhos.",
      "O conjunto acompanha rodas de apoio que convertem a roçadeira em um mini carrinho para bordas e canteiros.",
      "Internamente, o motor Brushless gira a 7.500 RPM com diâmetro de corte de 254 mm, entregando bom rendimento energético na faixa de 18V.",
      "Por operar com velocidade fixa sem seletor eletrônico de rotação, seu melhor desempenho aparece em gramas macias e manutenção regular.",
      "Forçá-la em caules lenhosos reduz rapidamente a autonomia da bateria."
    ],
    specs: [
      { label: "Rotação por Minuto", value: "7.500 RPM" },
      { label: "Sistema de Corte", value: "Lâmina de 3 pontas e carretel" },
      { label: "Diâmetro de Operação", value: "254 mm" },
      { label: "Tensão Elétrica", value: "18 V (Motor Brushless)" },
      { label: "Itens Inclusos", value: "Base com rodas, protetor de lâmina, abraçadeira, chave Allen e mais" }
    ],
    pros: [
      "Rodas de apoio removíveis que estabilizam o corte e poupam a coluna.",
      "Motor Brushless compacto de boa durabilidade.",
      "Kit pronto para uso com lâmina metálica e carretel de nylon.",
      "Estrutura ágil para contornos de jardim."
    ],
    cons: [
      "Velocidade fixa sem controle eletrônico de rotação.",
      "Torque dimensionado apenas para gramados leves."
    ]
  },
  {
    id: "dwt-iagd-1801",
    productId: "dwt-iagd-1801",
    shortName: "DWT Aparador 18V (IAGD 1801)",
    rank: "5. DWT Aparador de Grama ｜ IAGD 1801",
    badge: "Mais Leve da Categoria (1,8 kg)",
    score: "9.0",
    exactImageName: "Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp",
    image: "/images/blog/Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp",
    thumbImage: "/images/blog/thumbs/Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp",
    tensao: "18V Intercambiável DWT (8.500 RPM)",
    corte: "Fio de nylon 1,6 mm (Faixa de 300 mm)",
    perfil: "Arremates Leves e Manutenção Semanal",
    paragraphs: [
      "Com apenas 1,8 kg, o DWT IAGD 1801 é um aparador voltado estritamente para arremates e manutenção semanal.",
      "Na análise técnica, o conjunto chama atenção pela rotação elevada de 8.500 RPM combinada a uma faixa de corte de 300 mm com fio de nylon fino de 1,6 mm.",
      "Essa configuração garante corte limpo em grama rasteira sem exigir força bruta do motor.",
      "A cabeça articulada em 4 posições e o eixo telescópico ajudam a manter a postura neutra durante o serviço.",
      "Como o equipamento não inclui bateria nem carregador, faz sentido econômico principalmente para quem já utiliza ferramentas da linha 18V intercambiável da DWT."
    ],
    specs: [
      { label: "Peso Líquido", value: "1,8 kg (Ultraleve)" },
      { label: "Rotação Máxima", value: "8.500 RPM" },
      { label: "Faixa de Corte", value: "300 mm (Fio de nylon 1,6 mm)" },
      { label: "Ajustes", value: "Eixo telescópico e cabeça com 4 posições" },
      { label: "Alimentação", value: "Plataforma 18V DWT (Bateria vendida à parte)" }
    ],
    pros: [
      "Estrutura ultraleve (1,8 kg) que zera a fadiga nos braços.",
      "Rotação de 8.500 RPM com boa largura de corte para acabamento.",
      "Eixo telescópico e cabeçote articulado.",
      "Excelente custo na versão solo para quem já possui baterias DWT."
    ],
    cons: [
      "Vendido sem bateria e sem carregador.",
      "Fio fino e motor leve não suportam mato alto ou denso."
    ]
  },
  {
    id: "makita-ur100dzx",
    productId: "makita-ur100dzx",
    shortName: "Makita UR100DZX (12V CXT)",
    rank: "6. Makita Aparador de Grama a Bateria ｜ UR100DZX",
    badge: "Melhor Precisão e Alta Rotação (10.000 RPM)",
    score: "9.2",
    exactImageName: "MAKITA Aparador de Grama a Bateria UR100DZX.webp",
    image: "/images/blog/MAKITA Aparador de Grama a Bateria UR100DZX.webp",
    thumbImage: "/images/blog/thumbs/MAKITA Aparador de Grama a Bateria UR100DZX.webp",
    tensao: "12V CXT Makita (10.000 RPM)",
    corte: "Fio de nylon e lâmina plástica",
    perfil: "Contornos de Precisão e Jardins Compactos",
    paragraphs: [
      "A Makita UR100DZX mostra como um bom projeto de equilíbrio compensa a baixa voltagem em serviços de precisão.",
      "Operando na plataforma de 12V, ela alcança 10.000 RPM com sistema de partida suave, recurso que evita trancos no conjunto rotativo ao acionar o gatilho e preserva a durabilidade do motor.",
      "Pesando 2,1 kg, aceita fio de nylon e lâminas plásticas, oferecendo controle preciso ao redor de árvores e muros.",
      "Porém, a física não mente: baterias de 12V têm reserva de torque limitada, restringindo esta máquina exclusivamente a acabamentos finos e áreas pequenas."
    ],
    specs: [
      { label: "Plataforma", value: "12V Max CXT Makita" },
      { label: "Rotação sem Carga", value: "10.000 RPM com partida suave" },
      { label: "Peso", value: "2,1 kg" },
      { label: "Sistema de Corte", value: "Cabeçote de nylon e lâmina plástica" },
      { label: "Ergonomia", value: "Tubo telescópico e cinto de ombro" }
    ],
    pros: [
      "Alta rotação de 10.000 RPM com sistema de partida suave.",
      "Leve (2,1 kg), silenciosa e acompanhada de cinto de ombro.",
      "Cabeçote compatível com nylon e lâmina plástica.",
      "Confiabilidade mecânica e ampla oferta de peças Makita."
    ],
    cons: [
      "Plataforma de 12V limita o torque e a autonomia em áreas médias.",
      "Inadequada para desbaste de capim alto."
    ]
  },
  {
    id: "the-black-tools-tcg12b",
    productId: "the-black-tools-tcg12b",
    shortName: "The Black Tools TCG12B (12V)",
    rank: "7. The Black Tools Roçadeira a Bateria ｜ TCG12B",
    badge: "Kit Doméstico Mais Completo de Entrada",
    score: "8.7",
    exactImageName: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp",
    image: "/images/blog/Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp",
    tensao: "12V (1.500 mAh) / 460 W",
    corte: "Lâminas plásticas, metálicas e disco 40 dentes",
    perfil: "Pequenos Reparos Domésticos Esporádicos",
    paragraphs: [
      "A The Black Tools TCG12B aposta no apelo de kit completo de entrada.",
      "Além da máquina leve de 1,95 kg com 460 W e até 10.000 RPM declarados, ela acompanha disco de 40 dentes, lâminas metálicas e plásticas, cabo telescópico e cabeça ajustável.",
      "Sob o olhar de oficina, porém, é preciso alinhar expectativas: a bateria de 12V com 1.500 mAh oferece autonomia restrita e baixa reserva de corrente para sustentar cortes pesados.",
      "Use as lâminas plásticas e metálicas apenas em gramados residenciais leves e evite forçar o disco de 40 dentes em galhos grossos para não superaquecer o induzido do motor."
    ],
    specs: [
      { label: "Tensão e Capacidade", value: "12V / 1.500 mAh" },
      { label: "Potência e Giro", value: "460 W / Até 10.000 RPM" },
      { label: "Peso", value: "1,95 kg" },
      { label: "Acessórios no Kit", value: "Disco 40 dentes, lâminas metálicas e plásticas" },
      { label: "Ajustes", value: "Haste telescópica e cabeça articulada" }
    ],
    pros: [
      "Kit completo com múltiplos tipos de lâminas e disco inclusos.",
      "Corpo leve (1,95 kg) com tubo e cabeça reguláveis.",
      "Pronta para sair da caixa em pequenos reparos domésticos.",
      "Preço acessível para uso esporádico."
    ],
    cons: [
      "Bateria de 1.500 mAh com autonomia curta em serviço contínuo.",
      "Robustez estrutural e rede de peças inferiores às marcas profissionais."
    ]
  },
  {
    id: "makita-ur006gz02",
    productId: "makita-ur006gz02",
    shortName: "Makita UR006GZ02 (40V XGT)",
    rank: "8. Makita Roçadeira a Bateria ｜ UR006GZ02",
    badge: "Referência Técnica Profissional (Equivalente 30cc)",
    score: "9.9",
    exactImageName: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp",
    image: "/images/blog/Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp",
    tensao: "40V Max XGT (1.000 W de potência)",
    corte: "Carretel de nylon e lâminas de aço profissionais",
    perfil: "Uso Profissional Pesado e Grandes Áreas",
    paragraphs: [
      "Se você precisa de engenharia de roçadeira profissional sem fumaça, carburador ou mistura de óleo 2T, a Makita UR006GZ02 é a referência técnica da lista.",
      "Alimentada pela plataforma XGT de 40V, entrega 1.000 W de potência útil, com desempenho real equivalente a uma roçadeira a gasolina de 30 cc.",
      "O motor instalado na parte traseira cria um balanço de peso quase perfeito no guidão, reduzindo a fadiga e a vibração.",
      "Traz ainda blindagem contra água e poeira, rotação reversa para desenrolar capim do eixo sem desmontar o cabeçote e tecnologia ADT, que lê a resistência do mato e ajusta o torque e o RPM automaticamente.",
      "O único freio é o custo elevado do conjunto quando somado às baterias XGT."
    ],
    specs: [
      { label: "Plataforma e Potência", value: "40V Max XGT / 1.000 W (Equivalente a 30 cc)" },
      { label: "Motorização", value: "Brushless traseiro de alto torque" },
      { label: "Controle Eletrônico", value: "Tecnologia ADT + Função de rotação reversa" },
      { label: "Proteção Ambiental", value: "Blindagem XPT/WetGuard contra água e poeira" },
      { label: "Bateria e Carregador", value: "Vendidos separadamente (Versão Z)" }
    ],
    pros: [
      "Potência real de 1.000 W (equivalente a 30 cc a combustão).",
      "Tecnologia ADT que otimiza torque e consumo de bateria em tempo real.",
      "Rotação reversa para limpeza rápida do cabeçote e proteção contra umidade.",
      "Motor traseiro bem balanceado e altíssima durabilidade de rolamentos."
    ],
    cons: [
      "Vendida sem bateria e carregador.",
      "Custo de entrada alto na plataforma profissional 40V XGT."
    ]
  },
  {
    id: "tekna-ag24b-2fc",
    productId: "tekna-ag24b-2fc",
    shortName: "Tekna AG24B-2FC (24V Lítio)",
    rank: "9. Tekna Aparador de Grama a Bateria ｜ AG24B-2FC",
    badge: "Melhor Intermediária 24V com Kit Incluso",
    score: "9.1",
    exactImageName: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp",
    image: "/images/blog/Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp",
    thumbImage: "/images/blog/thumbs/Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp",
    tensao: "24V Íon-Lítio (Bateria e carregador inclusos)",
    corte: "Fio de nylon (Alimentação manual)",
    perfil: "Jardins Residenciais e Calçadas",
    paragraphs: [
      "O Tekna AG24B-2FC ocupa uma posição intermediária honesta para manutenção de jardins residenciais.",
      "Trabalhando com bateria de 24V já inclusa com carregador na embalagem, entrega um pouco mais de reserva de força do que os aparadores básicos de 12V para manter bordas de calçadas e canteiros alinhados.",
      "O tubo telescópico e a cabeça inclinável evitam posturas forçadas durante o trabalho.",
      "Na rotina prática, o principal ponto de atenção é a alimentação manual do fio de nylon, que exige pausas curtas para soltar linha nova.",
      "Essa característica é aceitável em quintais domésticos, mas improdutiva em terrenos extensos."
    ],
    specs: [
      { label: "Tensão da Bateria", value: "24V Íon-Lítio (Inclusa com carregador bivolt)" },
      { label: "Sistema de Corte", value: "Fio de nylon com avanço manual" },
      { label: "Ajustes Ergonômicos", value: "Tubo telescópico e cabeça inclinável" },
      { label: "Aplicação Recomendada", value: "Manutenção semanal de jardins residenciais" }
    ],
    pros: [
      "Sistema de 24V com bateria e carregador já inclusos no kit.",
      "Haste telescópica ajustável e boa ergonomia de manejo.",
      "Carcaça bem construída para manutenção residencial semanal.",
      "Dispensa investimento adicional em acessórios para começar."
    ],
    cons: [
      "Sistema de alimentação manual do fio gera pequenas pausas.",
      "Voltado para acabamentos domésticos, sem força para capoeira."
    ]
  },
  {
    id: "toyama-tbt58bcx",
    productId: "toyama-tbt58bcx-k",
    shortName: "Toyama TBT58BCX (58V Lateral)",
    rank: "10. Toyama Roçadeira Lateral a Bateria ｜ TBT58BCX",
    badge: "Maior Tensão da Lista (58V com Disco Wídea)",
    score: "9.5",
    exactImageName: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp",
    image: "/images/blog/Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp",
    tensao: "58V Alta Tensão (550 W)",
    corte: "Lâmina com pontas de wídea e carretel",
    perfil: "Vegetação Densa e Talos Rígidos",
    paragraphs: [
      "A Toyama TBT58BCX foi concebida com arquitetura de roçadeira lateral robusta.",
      "Operando em alta tensão de 58V com motor de 550 W, consegue movimentar uma lâmina com pontas de wídea sem sofrer quedas bruscas de rotação em talos mais rígidos.",
      "O seletor de três velocidades permite ao operador dosar a rotação conforme a densidade do mato, economizando bateria nos trechos leves e liberando torque total onde o capim fecha.",
      "O guidão tipo bicicleta emborrachado ajuda a controlar a máquina com segurança, mas seus 5,7 kg exigem cinto bem regulado e algum condicionamento físico em jornadas longas."
    ],
    specs: [
      { label: "Tensão e Potência", value: "58V / 550 W" },
      { label: "Controle de Rotação", value: "Seletor eletrônico de 3 velocidades" },
      { label: "Acessório de Destaque", value: "Lâmina com pontas de wídea inclusa" },
      { label: "Peso do Equipamento", value: "5,7 kg" },
      { label: "Empunhadura", value: "Guidão lateral tipo bicicleta emborrachado" }
    ],
    pros: [
      "Alta tensão de 58V que mantém o giro estável sob carga.",
      "Lâmina com pontas de wídea capaz de encarar caules mais resistentes.",
      "Controle eletrônico em três faixas de velocidade.",
      "Acompanha carregador rápido para reduzir o tempo de máquina parada."
    ],
    cons: [
      "Peso de 5,7 kg exige bom suporte de cinto em usos prolongados.",
      "Menos ágil que aparadores leves em espaços muito apertados."
    ]
  },
  {
    id: "bomvink-bom-9109",
    productId: "bomvink-bom-9109",
    shortName: "Bonvink BOM-9109 (21V c/ 2 Baterias)",
    rank: "11. Bonvink Roçadeira ｜ BOM-9109",
    badge: "Opção Econômica 21V com 2 Baterias",
    score: "8.5",
    exactImageName: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp",
    image: "/images/blog/Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp",
    thumbImage: "/images/blog/thumbs/Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp",
    tensao: "21V (Acompanha 2 baterias e carregador bivolt)",
    corte: "Conjunto variado de lâminas leves",
    perfil: "Uso Doméstico Eventual e Econômico",
    paragraphs: [
      "A Bonvink BOM-9109 é um kit de entrada voltado a quem precisa apenas dar um trato eventual no quintal pequeno gastando pouco.",
      "Ela chega pronta para rodar com duas baterias de 21V, carregador bivolt, estrutura leve de 2,3 kg e um conjunto variado de lâminas.",
      "Como técnico, deixo o alerta transparente: trata-se de um equipamento estritamente residencial leve, com rolamentos, carcaça e eletrônica mais simples do que as linhas profissionais.",
      "Evite uso contínuo por longos períodos sem descanso para o motor esfriar e considere que a garantia é mais curta e a reposição de peças internas fora da garantia costuma ser difícil."
    ],
    specs: [
      { label: "Tensão", value: "21V (2 baterias inclusas no pacote)" },
      { label: "Peso", value: "2,3 kg" },
      { label: "Carregador", value: "Bivolt incluso" },
      { label: "Acessórios", value: "Kit variado de lâminas para acabamentos leves" },
      { label: "Indicação Técnica", value: "Uso doméstico leve e ocasional" }
    ],
    pros: [
      "Kit econômico que já inclui duas baterias e carregador bivolt.",
      "Leve (2,3 kg) e fácil de guardar em espaços reduzidos.",
      "Variedade de lâminas para diferentes acabamentos leves.",
      "Operação simples e de baixo ruído para pequenos quintais."
    ],
    cons: [
      "Garantia curta e dificuldade na reposição de peças mecânicas.",
      "Durabilidade incompatível com uso intenso ou vegetação pesada."
    ]
  }
];

// Simulador Rápido por Perfil de Terreno e Uso
const simulatorProfiles = {
  "profissional-pesado": {
    label: "Chácara, Mato Denso ou Uso Profissional Intenso",
    title: "Makita UR006GZ02 (40V XGT) ou Toyama TBT58BCX (58V)",
    desc: "Para substituir uma roçadeira a gasolina sem perder força em capim fechado, a Makita 40V XGT entrega 1.000 W equivalentes a 30 cc com motor traseiro. Já a Toyama 58V traz lâmina com wídea e 3 velocidades para encarar talos rígidos.",
    targetId: "makita-ur006gz02"
  },
  "custo-beneficio-36v": {
    label: "Terreno Médio / Kit Completo com 2 Baterias e Torque Alto",
    title: "Toyama TBT18+18BC300 (36V Reais com Motor Brushless)",
    desc: "Opera com duas baterias de 18V 4Ah em série (36V), aquecendo menos o motor e entregando torque de sobra com guidão tipo bicicleta, carregador duplo e cinto inclusos.",
    targetId: "toyama-tbt18-18bc300"
  },
  "versatil-2em1": {
    label: "Alternar entre Fio de Nylon e Lâmina 3 Pontas / Carrinho",
    title: "Bosch GFR 18V-23 Brushless ou Toyama TBT18BC250S",
    desc: "A Bosch GFR 18V-23 oferece engenharia profissional com proteção Anti-Tangle para alternar entre nylon e faca de 3 dentes. Já a Toyama TBT18BC250S inclui rodas de apoio para nivelar bordas sem cansar os punhos.",
    targetId: "bosch-gfr-18v-23"
  },
  "jardim-compacto": {
    label: "Jardim Residencial Pequeno, Silêncio e Leveza (Até 2,3 kg)",
    title: "STIHL FSA 45, Makita UR100DZX ou Tekna AG24B-2FC",
    desc: "Equipamentos leves e silenciosos para aparar bordas de calçadas, muros e árvores sem esforço físico. A STIHL FSA 45 e a Tekna 24V já vêm prontas para rodar com bateria e carregador.",
    targetId: "stihl-fsa-45"
  }
};

// Perguntas Frequentes (FAQ)
const faqList = [
  {
    q: "Uma roçadeira a bateria tem força para cortar mato alto ou só serve para grama baixa?",
    a: [
      "Tudo depende da classe de tensão e do motor.",
      "Modelos de 12V a 24V são aparadores projetados para grama baixa e acabamentos de jardim.",
      "Já as roçadeiras de 36V (18V+18V), 40V XGT e 58V com motor Brushless e guidão lateral têm torque real para cortar capim alto, braquiária e arbustos com lâmina metálica."
    ]
  },
  {
    q: "Quanto tempo dura a carga de uma roçadeira a bateria em trabalho contínuo?",
    a: [
      "Em modelos residenciais compactos com baterias de 1,5 Ah a 2,0 Ah, a autonomia varia entre 20 e 30 minutos.",
      "Nas máquinas profissionais equipadas com baterias de 4,0 Ah ou 5,0 Ah e controle eletrônico de velocidade, o tempo de operação fica entre 40 e 70 minutos por carga, dependendo se você está usando fio de nylon ou lâmina metálica."
    ]
  },
  {
    q: "Por que o motor Brushless (sem escovas) faz tanta diferença nas roçadeiras a bateria?",
    a: [
      "Motores tradicionais com escovas de carvão perdem parte da energia da bateria em atrito e faíscas, aquecendo rapidamente quando o mato pesa.",
      "O motor Brushless usa controle eletrônico magnético sem contato físico nas bobinas, entregando até 30% mais autonomia por carga, maior torque sob esforço e vida útil muito superior sem precisar trocar carvões."
    ]
  },
  {
    q: "Posso instalar lâmina de aço de 3 pontas em qualquer roçadeira a bateria?",
    a: [
      "Não.",
      "Instale lâminas metálicas apenas em modelos cujo manual e transmissão foram dimensionados para impacto (como a Bosch GFR 18V-23, Toyama 36V/58V e Makita 40V).",
      "Em aparadores leves de eixo curvo ou baixa potência, use somente fio de nylon ou lâminas plásticas originais para evitar a quebra do eixo e acidentes graves."
    ]
  }
];

export const MelhorRocadeiraABateria: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<keyof typeof simulatorProfiles>("profissional-pesado");
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
            src="/images/blog/melhor-rocadeira-a-bateria.webp"
            alt="Bancada externa com roçadeira a bateria profissional, baterias de íon-lítio e carregador ao lado de gramado verde"
            title="Melhor Roçadeira a Bateria em 2026"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Análise de Engenharia Elétrica e Mecânica 2026
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Melhor Roçadeira a Bateria em 2026: Top 11 Modelos
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Qual a melhor roçadeira a bateria em 2026? Análise técnica de 11 modelos (Bosch, Makita, STIHL, Toyama e mais) com foco em torque, autonomia e durabilidade!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <a href="/author/carlos-henrique/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Carlos+Henrique&background=16A34A&color=fff";
                  }}
                />
                <span>Carlos Henrique Menezes</span>
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
            Escolher a melhor roçadeira a bateria vai muito além de fugir da extensão elétrica ou do cheiro de gasolina.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na bancada da oficina, o que define se uma máquina a bateria vai durar anos ou virar sucata no primeiro semestre é a engenharia interna: tipo de motorização (com ou sem escovas), entrega real de torque sob carga, dissipação de calor e disponibilidade de peças de reposição no Brasil.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se você ainda está em dúvida se prefere um modelo com cabo ou a combustão, vale conferir também nosso guia completo da <a href="/melhor-rocadeira-eletrica" className="text-[#16A34A] font-semibold hover:underline">melhor roçadeira elétrica</a> e o ranking geral da <a href="/melhor-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor roçadeira</a> do ano.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Para evitar que você invista em um equipamento subdimensionado para o seu mato, analisei tecnicamente os 11 modelos de destaque em 2026, separando cada máquina pelo que sua mecânica realmente suporta em campo.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO POR PERFIL DE USO
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual Roçadeira a Bateria Aguenta o Seu Terreno?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o tipo de vegetação e a rotina do seu espaço para ver a indicação técnica ideal sem gastar à toa:
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
              Recomendação de Oficina:
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
              <span>Ir para Análise Técnica e Preço</span>
              <ChevronDown size={14} />
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. VITRINE MISTA COM TABELA RESUMO (Responsiva Mobile & Desktop)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Principais modelos de roçadeira a bateria por perfil de uso
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Opção</th>
                  <th className="p-3 text-left hidden md:table-cell">Tensão e Perfil</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {batteryReviews.map((item) => {
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
                          {item.tensao}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score} / 10
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        <span className="block font-medium text-gray-800">{item.tensao}</span>
                        <span className="text-xs text-gray-500">{item.perfil}</span>
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
            5. BANNER DO MEIO DE ROÇADEIRA
            =================================================================== */}
        <div className="my-14">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            6. REVIEWS DETALHADOS DOS 11 PRODUTOS
            =================================================================== */}
        <div className="space-y-16">
          <div className="border-b-2 border-gray-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Análise Técnica dos 11 Melhores Modelos de Roçadeira a Bateria
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Avaliação detalhada de motorização, plataforma de bateria, ergonomia, prós e contras de cada equipamento:
            </p>
          </div>

          {batteryReviews.map((review) => {
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
                      <span className="text-xs text-gray-500 block font-bold">Tensão / Motorização:</span>
                      <span className="text-sm font-bold text-gray-900">{review.tensao}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Sistema de Corte:</span>
                      <span className="text-sm font-bold text-[#166534]">{review.corte}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Perfil de Terreno Indicado:</span>
                      <span className="text-sm font-bold text-gray-900">{review.perfil}</span>
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
                        <th className="py-2.5 px-4">Detalhe</th>
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
                      <Check size={18} className="text-[#16A34A]" /> Prós
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#166534] list-disc list-inside">
                      {review.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <AlertTriangle size={18} className="text-red-600" /> Contras
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
            7. BANNER DE CROSS-SELL (Acessórios e Proteção para Roçadeiras a Bateria)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#16A34A] font-black text-xs uppercase tracking-wider block mb-1">
              Insumos e Proteção para Operação
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Acessórios Recomendados para Sua Roçadeira a Bateria
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Economize carga de bateria usando linhas e lâminas afiadas e trabalhe protegido contra detritos:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Fio de Nylon */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Menor Esforço do Motor
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
                    alt="Fio de Nylon de Alta Resistência para Roçadeira"
                    title="Fio de Nylon para Roçadeira"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Fio de Nylon de Alta Resistência
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Corte limpo que exige menos corrente elétrica do motor, estendendo a autonomia da bateria no gramado.
                </p>
              </div>
              <a
                href={products['fio-de-nylon-de-alta-resistencia']?.link || 'https://meli.la/2wm8Quk'}
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
                  Segurança Essencial
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/KIT SEGURANÇA COMPLETO (EPIs).webp"
                    alt="Kit Completo de EPIs para Roçador"
                    title="Kit de Segurança EPI Roçador"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit Completo de EPIs
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Mesmo silenciosas, roçadeiras a bateria giram a até 10.000 RPM e arremessam pedras: proteja rosto, olhos e canelas.
                </p>
              </div>
              <a
                href={products['kit-seguranca-completo-epis']?.link || 'https://meli.la/1hqH1JJ'}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Lâmina 3 Pontas */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Para Modelos 18V/36V/40V/58V
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin.webp"
                    alt="Lâmina Faca 3 Pontas para Roçadeiras"
                    title="Lâmina 3 Pontas em Aço"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Lâmina 3 Pontas em Aço Temperado
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Reposição balanceada para roçadeiras laterais a bateria compatíveis com facas metálicas em mato fechado.
                </p>
              </div>
              <a
                href={products['faca-3-pontas-furo-25mm-tamanho-300mm-espessura-2-9mm-spin']?.link || 'https://meli.la/2xV2wZf'}
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
            8. GUIA TÉCNICO: VALE A PENA, PARA QUE SERVE, DIFERENÇAS E COMO ESCOLHER
            =================================================================== */}
        <section className="mt-16 space-y-10">
          {/* Roçadeira a Bateria é Boa? Vale a Pena? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Roçadeira a Bateria é Boa? Vale a Pena?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Sim, a roçadeira a bateria é boa e vale muito a pena, desde que você escolha a plataforma de tensão compatível com a espessura do mato do seu terreno.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Na oficina mecânica, cerca de 80% das roçadeiras a gasolina de uso doméstico chegam paradas pelo mesmo motivo: combustível velho esquecido no tanque que apodrece, resseca as membranas e entope os giclês do carburador.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Com um modelo a bateria de íon-lítio, você elimina de vez o gasto com gasolina, a compra de óleo 2 tempos, a fumaça no rosto e o esforço físico de puxar o cordão de partida a frio.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Além da partida instantânea no gatilho, a evolução dos motores Brushless de 18V, 36V, 40V e 58V trouxe torque real para girar lâminas de aço sem depender de tomadas ou extensões espalhadas pelo quintal.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                O segredo para fazer o investimento compensar no bolso é aproveitar o ecossistema de baterias intercambiáveis (usando o mesmo bloco em furadeiras, sopradores e motosserras da mesma marca) ou escolher kits que já venham com duas baterias na caixa.
              </p>
            </div>

            {/* Quadro Prático: Quando Vale a Pena vs Quando Evitar */}
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-[#F0FDF4] p-5 sm:p-6 rounded-2xl border border-[#16A34A]/30">
                <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <Check size={20} className="text-[#16A34A] shrink-0" /> Quando Vale Muito a Pena
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#166534] list-disc list-inside leading-relaxed">
                  <li>Quintais residenciais, jardins, chácaras e terrenos onde esticar cabo elétrico é inviável.</li>
                  <li>Condomínios, hospitais, escolas e áreas urbanas que exigem baixo ruído e zero emissão de fumaça.</li>
                  <li>Usuários que ligam a máquina a cada 15 ou 30 dias e não querem lidar com manutenção de carburador.</li>
                  <li>Quem já possui baterias 18V ou 40V de marcas como Bosch, Makita ou DWT na oficina.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-5 sm:p-6 rounded-2xl border border-red-200">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <AlertTriangle size={20} className="text-red-600 shrink-0" /> Quando Não Vale a Pena
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                  <li>Limpeza bruta de fazendas ou pastos extensos por 6 a 8 horas seguidas sem ponto de energia para recarga.</li>
                  <li>Comprar aparadores leves de 12V esperando desbastar braquiária alta ou capoeira grossa.</li>
                  <li>Operadores terceirizados de roçada rodoviária pesada que dependem de abastecimento rápido em galão no trecho.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Para que Serve uma Roçadeira a Bateria? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Para que Serve uma Roçadeira a Bateria?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A roçadeira a bateria existe para preencher o espaço entre a limitação das máquinas com fio elétrico e a manutenção exigida pelos motores 2 tempos a combustão.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Como dispensa mistura de óleo, vela de ignição, limpeza de carburador e troca de filtro de ar, oferece partida imediata no gatilho, baixa vibração e nível de ruído reduzido, sendo ideal para condomínios, residências, clínicas, escolas e áreas urbanas.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Na prática, os modelos de 12V a 24V servem para acabamento de jardins e manutenção semanal de gramados, enquanto as plataformas de 36V (18V+18V), 40V e 58V com motor Brushless já atendem chácaras e serviços semiprofissionais em mato médio a denso com total mobilidade.
              </p>
            </div>
          </div>

          {/* Qual a Diferença entre uma Roçadeira a Bateria e um Cortador de Grama? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Qual a Diferença entre uma Roçadeira a Bateria e um Cortador de Grama?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A diferença está na geometria de trabalho e no tipo de terreno.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                O cortador de grama no modelo de carrinho com quatro rodas foi projetado para nivelar grandes áreas planas e abertas em altura uniforme, cortando com rapidez e recolhendo a apara quando equipado com cesto.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A roçadeira a bateria, por outro lado, entrega mobilidade em qualquer ângulo.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Ela entra exatamente onde o carrinho não passa: rente a muros, calçadas, cercas, troncos de árvores, taludes inclinados e terrenos irregulares com mato alto.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Para quem mantém jardins amplos, os dois equipamentos se complementam.
              </p>
            </div>

            {/* Tabela Comparativa: Roçadeira a Bateria vs Cortador de Grama */}
            <div className="my-6 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Critério Prático</th>
                    <th className="p-3.5 sm:p-4">Roçadeira a Bateria</th>
                    <th className="p-3.5 sm:p-4">Cortador de Grama (Carrinho)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Terreno Indicado</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Irregular, taludes, bordas, muros e ao redor de árvores</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Gramados planos, abertos e sem pedras soltas</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/20">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Altura do Mato</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Encara desde grama baixa até capim alto (36V a 58V)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Apenas grama de altura moderada (embucha se estiver alta)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Acabamento de Cantos</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Precisão cirúrgica rente a guias e cercas</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Deixa faixas sem cortar perto de paredes e obstáculos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Como Escolher a Melhor Roçadeira a Bateria */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
                Como Escolher a Melhor Roçadeira a Bateria
              </h2>
            </div>

            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/como-escolher-melhor-rocadeira-a-bateria.webp"
                alt="Técnico encaixando bateria de íon-lítio de alta capacidade no compartimento de uma roçadeira a bateria"
                title="Como escolher a melhor roçadeira a bateria pela tensão e amperagem"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Subseção 1: 18V ou Mais */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#15803d] text-white p-2.5 rounded-xl shrink-0">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] m-0">
                  Prefira Roçadeiras com Baterias de 18 V ou Mais para Maior Eficiência
                </h3>
              </div>
              <div className="prose text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Na mecânica elétrica, voltagem (V) define a capacidade de entrega de força (torque) e amperagem-hora (Ah) define o tamanho do tanque de combustível (autonomia).
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Modelos de 12V servem apenas para grama tenra e arremates curtos; a partir de 18V, ou em sistemas duplos de 36V, 40V e 58V, o motor consegue enfrentar gramíneas mais fechadas sem cair drasticamente de rotação.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Sempre cheque o valor em Ah da bateria: em um mesmo equipamento de 18V, uma bateria de 5,0 Ah entrega o dobro de tempo de trabalho de uma de 2,5 Ah.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  E sempre que o orçamento permitir, dê preferência a motores Brushless sem escovas, que desperdiçam menos energia em forma de calor e aumentam a vida útil do equipamento.
                </p>
              </div>
            </div>

            {/* Subseção 2: 8000 RPM */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#15803d] text-white p-2.5 rounded-xl shrink-0">
                  <Wrench size={22} />
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] m-0">
                  Quer Ainda Mais Agilidade? Prefira Modelos com pelo Menos 8000 RPM
                </h3>
              </div>
              <div className="prose text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  A rotação do cabeçote (RPM) determina a velocidade linear na ponta do fio de nylon.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Em aparadores leves, rotações a partir de 8.000 RPM permitem que o fio fino corte a folha de grama de forma limpa, sem mastigar a ponta da planta.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Porém, atenção a um detalhe técnico importante: RPM alto não substitui torque.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Roçadeiras pesadas com lâmina metálica, como os modelos de 40V e 58V, operam em faixas menores entre 4.500 e 7.000 RPM, mas com muito mais força de giro no eixo para cortar caules grossos com segurança.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Sempre que possível, prefira modelos com seletor eletrônico de velocidade: você usa giro baixo para economizar bateria em grama rala e sobe a rotação apenas nos pontos fechados.
                </p>
              </div>
            </div>

            {/* Subseção 3: Lâminas de Nylon ou Plástico vs Aço */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-black text-[#1a1a1a] mb-4">
                Aposte em Roçadeiras de Lâminas de Nylon ou Plástico para Aparar Grama Menos Densa
              </h3>
              <div className="prose text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  O acessório de corte deve respeitar a resistência do eixo e da vegetação.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Para gramados residenciais, bordas de canteiros e acabamento perto de muros ou pedras, fio de nylon ou lâminas de polímero plástico são as escolhas mais seguras, pois absorvem o impacto contra obstáculos sem transmitir trancos violentos aos rolamentos do motor.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Se quiser entender como alternar esses acessórios com segurança na ponteira, veja nosso tutorial de <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como trocar a lâmina da roçadeira</a> passo a passo.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Reserve lâminas metálicas de 2 ou 3 pontas ou discos com wídea exclusivamente para máquinas projetadas para esse esforço, normalmente de 18V Brushless reforçadas, 36V, 40V ou 58V, ao lidar com capim alto e vegetação lenhosa.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Instalar lâmina de aço em aparador leve destrói o eixo e representa risco de acidente.
                </p>
              </div>
            </div>

            {/* Subseção 4 e 5 em Grid: Faixa de Corte e Peso */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-black text-[#1a1a1a] mb-3">
                  Modelos com Faixa de Corte Acima de 250 mm São Ideais para Áreas Extensas
                </h3>
                <div className="text-gray-700 text-sm sm:text-base">
                  <p className="mb-5 leading-relaxed">
                    A faixa ou diâmetro de corte indica a largura limpa a cada passada da ferramenta, variando geralmente entre 200 mm e 430 mm.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Diâmetros menores até 250 mm oferecem ótima precisão em corredores estreitos e ao redor de plantas ornamentais.
                  </p>
                  <p className="mb-0 leading-relaxed">
                    Para quintais médios, chácaras e terrenos amplos, escolher máquinas com faixa acima de 250 mm a 300 mm reduz drasticamente o número de passadas necessárias, poupando não só o seu tempo, mas também a carga da bateria.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-black text-[#1a1a1a] mb-3">
                  Prefira Roçadeiras a Bateria Leves com até 3 kg
                </h3>
                <div className="text-gray-700 text-sm sm:text-base">
                  <p className="mb-5 leading-relaxed">
                    Equipamentos a bateria eliminam o peso do tanque de combustível e do motor a explosão, mas a distribuição de massa continua decisiva.
                  </p>
                  <p className="mb-5 leading-relaxed">
                    Para manutenção semanal em residências e acabamentos detalhados, modelos abaixo de 3 kg evitam a fadiga nos ombros e nos punhos.
                  </p>
                  <p className="mb-0 leading-relaxed">
                    Já nas roçadeiras laterais de alto desempenho de 36V, 40V ou 58V, o peso sobe naturalmente para a casa de 4,5 kg a 6 kg por conta do eixo rígido, do motor reforçado e de baterias maiores, deixando de ser problema apenas quando bem equilibrado com guidão tipo bicicleta.
                  </p>
                </div>
              </div>
            </div>

            {/* Subseção 6: Suporte para Ombro e Bateria Extra */}
            <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-black text-amber-900 mb-4">
                Suporte para Ombro e Bateria Extra Proporcionam Mais Benefícios para o Usuário
              </h3>
              <div className="prose text-amber-950 max-w-none">
                <p className="mb-5 leading-relaxed text-base sm:text-lg">
                  Antes de fechar a compra, confira o que realmente vem na caixa: muitas máquinas profissionais, como Bosch 18V e Makita 40V, são vendidas na versão solo, sem bateria e carregador.
                </p>
                <p className="mb-5 leading-relaxed text-base sm:text-lg">
                  Para quem limpa áreas médias ou grandes, contar com uma bateria extra ou um carregador rápido elimina o tempo morto esperando recarga no meio do serviço.
                </p>
                <p className="mb-5 leading-relaxed text-base sm:text-lg">
                  Outro item que não deve ser subestimado é o cinto de sustentação (suporte de ombro), indispensável em qualquer modelo acima de 3 kg para transferir a carga dos braços para o tronco, além de acessórios práticos como protetor de plantas e chaves de troca rápida.
                </p>
                <p className="mb-0 leading-relaxed text-base sm:text-lg">
                  Avalie o tamanho real do seu terreno, verifique a disponibilidade de assistência técnica da marca na sua região e escolha o conjunto que entrega o equilíbrio certo entre torque, autonomia e durabilidade mecânica.
                </p>
              </div>
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
              Veredito de Oficina: Qual a Melhor Roçadeira a Bateria para Comprar?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium text-sm sm:text-base">
              <p className="mb-5 leading-relaxed">
                Para quem busca desempenho profissional equivalente a uma máquina a gasolina de 30 cc sem ruído nem fumaça, a Makita UR006GZ02 (40V XGT) e a Toyama TBT58BCX (58V) lideram em força bruta e resistência mecânica.
              </p>
              <p className="mb-5 leading-relaxed">
                Se o seu foco é o melhor custo-benefício já com duas baterias e carregador duplo inclusos para encarar chácaras e lotes médios, a Toyama TBT18+18BC300 (36V Brushless) entrega o pacote mais equilibrado do mercado brasileiro.
              </p>
              <p className="mb-5 leading-relaxed">
                Para quem já possui ferramentas Bosch 18V e quer uma máquina versátil entre fio e lâmina de 3 pontas, a Bosch GFR 18V-23 é imbatível em engenharia.
              </p>
              <p className="mb-0 leading-relaxed">
                Já para jardins residenciais pequenos e acabamentos silenciosos de fim de semana, a STIHL FSA 45, a Toyama TBT18BC250S com carrinho e a Tekna 24V resolvem o serviço com leveza e zero dor de cabeça.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. FAQ INTERATIVO (PERGUNTAS FREQUENTES)
            =================================================================== */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 text-center uppercase tracking-tight">
            Perguntas Frequentes sobre Roçadeiras a Bateria
          </h2>

          <div className="space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors text-base sm:text-lg"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="text-[#16A34A] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="text-gray-500 shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-gray-700 border-t border-gray-100 text-sm sm:text-base">
                      {item.a.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-3 last:mb-0 leading-relaxed">
                          {paragraph}
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
            11. DICA DE OURO DO ESPECIALISTA (CARLOS HENRIQUE MENEZES)
            =================================================================== */}
        <div className="mt-16 bg-[#F0FDF4] border-2 border-[#16A34A] rounded-3xl p-6 sm:p-8 relative shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
                Dica de Oficina do Carlos Henrique: Como Dobrar a Vida Útil da Bateria de Lítio
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                O maior inimigo das células de íon-lítio é o calor somado à recarga imediata.
              </p>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                Quando a bateria acabar no meio da roçada sob sol forte, nunca tire o bloco fervendo da máquina para espetar direto no carregador: espere cerca de 15 a 20 minutos na sombra até a carcaça esfriar.
              </p>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-0">
                Além disso, se for guardar a roçadeira por mais de um mês sem uso, armazene a bateria fora da máquina em local seco e com cerca de 50% a 70% de carga (nunca totalmente descarregada), evitando que a tensão das células caia abaixo do limite de recuperação da placa BMS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopuprocadeira />
    </div>
  );
};
