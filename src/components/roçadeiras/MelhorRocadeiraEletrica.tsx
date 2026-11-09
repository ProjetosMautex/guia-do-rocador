import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { BunnerDoMeiorocadeira as BunnerDoMeio } from './BunnerDoMeiorocadeira';
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
// TIPAGENS E DADOS DA VITRINE E DOS 10 PRODUTOS
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
  name: string;
  score: string;
  note: string;
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
    id: "tramontina-ap1500t",
    anchorId: "item-tramontina-ap1500t",
    shortName: "1. Tramontina AP1500T (1.500 W)",
    category: "Jardins Pequenos até 100 m²",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Aparador De Grama Tramontina Apb1500t-thumb.webp"
  },
  {
    id: "rocadeira-trapp-master-1000",
    anchorId: "item-trapp-master-1000",
    shortName: "2. Trapp Master 1000 (1.200 W)",
    category: "Lateral com Lâmina de Aço",
    score: "9.5 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Elétrica Trapp Master 1000-thumb.webp"
  },
  {
    id: "rocadeira-tekna-bc-1250ss",
    anchorId: "item-tekna-bc1250ss",
    shortName: "3. Tekna BC1250SS (1.200 W)",
    category: "Híbrida Bipartida / Capim Alto",
    score: "9.6 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Elétrica Tekna Bc1250ss-thumb.webp"
  },
  {
    id: "garthen-gre-2000",
    anchorId: "item-garthen-gre-2000",
    shortName: "4. Garthen GRE-2000 (2.000 W)",
    category: "Maior Potência Bruta Elétrica",
    score: "9.6 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Garthen Gre-2000-thumb.webp"
  },
  {
    id: "rocadeira-eletrica-br-1300c",
    anchorId: "item-branco-br1300c",
    shortName: "5. Branco BR 1300 C (1.250 W)",
    category: "Ampla Faixa de Corte (42 cm)",
    score: "9.3 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira Branco Br 1300c-thumb.webp"
  },
  {
    id: "aparador-de-grama-eletrico-apb1000t-tramontina",
    anchorId: "item-tramontina-apb1000t",
    shortName: "6. Tramontina APB1000T (1.000 W)",
    category: "Compacto Bipartido / Guarda Fácil",
    score: "9.1 / 10",
    thumbSrc: "/images/blog/thumbs/Aparador De Grama Elétrico Apb1000t Tramontina-thumb.webp"
  },
  {
    id: "matsuyama-rocadeira-eletrica-967637",
    anchorId: "item-matsuyama-967637",
    shortName: "7. Matsuyama 967637 (1.200 W)",
    category: "Versátil Lâmina 3P + Nylon",
    score: "9.2 / 10",
    thumbSrc: "/images/blog/thumbs/MATSUYAMA Roçadeira Elétrica 967637-thumb.webp"
  },
  {
    id: "makita-aparador-de-grama-a-bateria-ur100dzx",
    anchorId: "item-makita-ur100dzx",
    shortName: "8. Makita UR100DZX (Bateria 12 V)",
    category: "Ultra Leve Sem Fio (2,1 kg)",
    score: "9.3 / 10",
    thumbSrc: "/images/blog/thumbs/MAKITA Aparador de Grama a Bateria UR100DZX-thumb.webp"
  },
  {
    id: "rocadeira-stihl-bateria-fsa-57",
    anchorId: "item-stihl-fsa-57",
    shortName: "9. STIHL Bateria FSA 57 (36 V)",
    category: "Padrão Premium Sem Fios",
    score: "9.7 / 10",
    thumbSrc: "/images/blog/thumbs/Roçadeira STIHL Bateria FSA 57-thumb.webp"
  },
  {
    id: "trapp-master-at-1500",
    anchorId: "item-trapp-at1500",
    shortName: "10. Trapp Master AT-1500 (1.500 W)",
    category: "Acabamento Rápido (11.200 RPM)",
    score: "9.4 / 10",
    thumbSrc: "/images/blog/thumbs/Aparador de Grama Master AT-1500 – Trapp-thumb.webp"
  }
];

const recommendedModels: ProductReview[] = [
  {
    id: "tramontina-ap1500t",
    anchorId: "item-tramontina-ap1500t",
    badge: "Melhor para Jardins até 100 m²",
    heading: "1. Tramontina AP1500T",
    imageSrc: "/images/blog/Aparador De Grama Tramontina Apb1500t.webp",
    imageAlt: "Aparador de grama elétrico Tramontina AP1500T de 1500W com tubo bipartido",
    paragraphs: [
      "Para manutenção doméstica em jardins de até 100 m², o aparador Tramontina AP1500T entrega um conjunto elétrico simples e bem dimensionado.",
      "Seu motor de 1.500 W trabalha em alta rotação livre (11.000 RPM) acoplado diretamente na base inferior, garantindo velocidade periférica para cortar grama macia com faixa de corte de 28 cm.",
      "O carretel conta com alimentação automática para os 8 metros de fio de nylon de 1,8 mm inclusos, evitando paradas manuais.",
      "Pesa apenas 2,6 kg e possui estrutura bipartida fácil de guardar, mas atenção na bancada: como o motor fica próximo ao solo e não há caixa de redução mecânica, não deve ser forçado em mato grosso ou grama molhada para evitar superaquecimento do bobinamento."
    ],
    specs: [
      { label: "Potência do Motor", value: "1.500 W" },
      { label: "Rotação Livre", value: "11.000 RPM" },
      { label: "Sistema e Faixa de Corte", value: "Fio de nylon 1,8 mm automático — 28 cm", highlight: true },
      { label: "Peso e Estrutura", value: "2,6 kg — Tubo bipartido para fácil guarda" },
      { label: "Área Recomendada", value: "Jardins domésticos de até 100 m²" }
    ],
    pros: [
      "Motor de 1.500 W com giro rápido (11.000 RPM) para acabamento limpo.",
      "Muito leve (2,6 kg), reduzindo a fadiga nos braços.",
      "Tubo bipartido que facilita o armazenamento.",
      "Alimentação automática do fio de nylon de 1,8 mm."
    ],
    cons: [
      "Indicado apenas para áreas pequenas (até 100 m²).",
      "Não aceita lâminas metálicas nem suporta vegetação densa."
    ],
    criteria: [
      { name: "Acabamento de Bordas", score: "9.6 / 10", note: "Giro de 11.000 RPM corta a folha da grama sem mastigar." },
      { name: "Leveza e Ergonomia", score: "9.7 / 10", note: "Apenas 2,6 kg, muito confortável para qualquer operador." },
      { name: "Resistência em Mato Alto", score: "7.5 / 10", note: "Projetado exclusivamente para grama residencial baixa." }
    ]
  },
  {
    id: "rocadeira-trapp-master-1000",
    anchorId: "item-trapp-master-1000",
    badge: "Transmissão Forte + Peças no Brasil",
    heading: "2. Trapp Master 1000 / Master 1000 Plus",
    imageSrc: "/images/blog/Roçadeira Elétrica Trapp Master 1000.webp",
    imageAlt: "Roçadeira elétrica lateral Trapp Master 1000 com motor superior e lâmina metálica",
    paragraphs: [
      "A linha Trapp Master 1000 divide-se em duas propostas mecânicas distintas que você precisa diferenciar antes da compra.",
      "A Roçadeira Lateral Master 1000 possui motor superior de 1.200 W (9.000 RPM), transmissão robusta de 7 kg e opera tanto com carretel de nylon (34 cm de corte) quanto com lâmina de 3 pontas inclusa (33 cm de corte, furo central de 1\").",
      "Segundo a fabricante, ao acoplar uma lâmina opcional de 4 pontas, sua transmissão suporta cortar caules e galhos de até 50 mm.",
      "Já a versão Master 1000 Plus é um aparador leve de 1.000 W (11.200 RPM e 2,24 kg), restrito ao fio de nylon (25 cm) para gramados de até 50 m².",
      "No pós-venda brasileiro, a Trapp destaca-se pela fartura de peças de reposição e proteção térmica eficiente."
    ],
    specs: [
      { label: "Motorização (Versão Lateral)", value: "1.200 W — 9.000 RPM (Motor superior)" },
      { label: "Sistema de Corte", value: "Lâmina de 3 pontas (33 cm) e Carretel de Nylon (34 cm)", highlight: true },
      { label: "Capacidade com Lâmina 4P", value: "Suporta caules rígidos de até 50 mm" },
      { label: "Peso (Versão Lateral)", value: "7,0 kg" },
      { label: "Versão Plus (Aparador)", value: "1.000 W — 11.200 RPM — 2,24 kg (Apenas nylon)" }
    ],
    pros: [
      "Versão lateral opera com lâmina de aço (3 ou 4 pontas) e fio de nylon.",
      "Transmissão forte capaz de encarar arbustos e caules rígidos.",
      "Punho ajustável e excelente oferta de peças originais no Brasil.",
      "Acompanha kit com lâmina e carretel na versão lateral."
    ],
    cons: [
      "Peso elevado na versão lateral (7 kg) exige uso correto do cinto.",
      "Versão Plus (aparador) é limitada apenas a gramados leves."
    ],
    criteria: [
      { name: "Robustez da Transmissão", score: "9.6 / 10", note: "Caixa de engrenagens forte para girar disco de aço." },
      { name: "Pós-Venda e Peças", score: "9.8 / 10", note: "Ampla rede de assistência e peças Trapp em todo o país." },
      { name: "Conforto e Peso", score: "8.5 / 10", note: "Os 7 kg da versão lateral exigem cinto bem regulado." }
    ]
  },
  {
    id: "rocadeira-tekna-bc-1250ss",
    anchorId: "item-tekna-bc1250ss",
    badge: "Melhor Equilíbrio Híbrido (Lâmina + Nylon)",
    heading: "3. Tekna BC1250SS",
    imageSrc: "/images/blog/Roçadeira Elétrica Tekna Bc1250ss.webp",
    imageAlt: "Roçadeira elétrica lateral Tekna BC1250SS de 1200W com haste bipartida e lâmina de 4 pontas",
    paragraphs: [
      "Se o seu terreno mistura grama comum com capim alto e ervas daninhas fibrosas, a Tekna BC1250SS oferece uma engenharia híbrida muito equilibrada.",
      "Seu motor de 1.200 W trabalha a 7.500 RPM — uma rotação reduzida na caixa de transmissão justamente para entregar mais torque no eixo sem travar sob carga.",
      "Ela acompanha carretel de nylon bate-libera (faixa de corte de 35 cm) e uma lâmina de aço de 4 pontas (23 cm de corte) para vegetação pesada.",
      "Pesando 4,8 kg, traz tubo bipartido de 24 mm e empunhadura em \"D\".",
      "Do ponto de vista mecânico, o cuidado essencial está na luva de junção do eixo bipartido: mantenha o encaixe sempre limpo e bem apertado para evitar desgaste prematuro das estrias internas."
    ],
    specs: [
      { label: "Potência e Rotação", value: "1.200 W — 7.500 RPM (Foco em torque)" },
      { label: "Sistema de Corte Híbrido", value: "Lâmina de aço 4 pontas (23 cm) + Nylon bate-libera (35 cm)", highlight: true },
      { label: "Haste e Empunhadura", value: "Tubo bipartido de 24 mm com punho em D" },
      { label: "Peso Líquido", value: "4,8 kg" },
      { label: "Itens Inclusos", value: "Lâmina 4 pontas, carretel de nylon e cinto de sustentação" }
    ],
    pros: [
      "Bom torque em 7.500 RPM para girar lâmina de 4 pontas no mato denso.",
      "Sistema híbrido completo (acompanha lâmina, carretel de nylon e cinto).",
      "Peso contido para uma roçadeira lateral (4,8 kg).",
      "Haste bipartida de 24 mm facilita o transporte no porta-malas."
    ],
    cons: [
      "Reposição manual do fio exige prática para não embolar no carretel.",
      "Exige aperto rigoroso na trava do tubo bipartido para preservar o eixo."
    ],
    criteria: [
      { name: "Torque em Mato Denso", score: "9.5 / 10", note: "Redução a 7.500 RPM segura o giro mesmo com lâmina de 4 pontas." },
      { name: "Equilíbrio de Peso", score: "9.6 / 10", note: "Com 4,8 kg, cansa muito menos que modelos laterais de 7 kg." },
      { name: "Praticidade de Transporte", score: "9.7 / 10", note: "Desmonta facilmente ao meio para caber no porta-malas." }
    ]
  },
  {
    id: "garthen-gre-2000",
    anchorId: "item-garthen-gre-2000",
    badge: "Maior Força Bruta Elétrica (2.000 W)",
    heading: "4. Garthen GRE-2000",
    imageSrc: "/images/blog/Roçadeira Garthen Gre-2000.webp",
    imageAlt: "Roçadeira elétrica Garthen GRE-2000 de 2000W com lâmina de 3 pontas",
    paragraphs: [
      "Para chácaras e terrenos extensos onde motores de 1.000 W abrem o bico, a Garthen GRE-2000 entrega a maior potência bruta da categoria elétrica: 2.000 W com rotação de 7.500 RPM.",
      "Essa reserva de potência permite girar uma lâmina de 3 pontas com impressionantes 43 cm de faixa de corte (ou 25,5 cm no carretel de nylon automático), reduzindo o número de passadas na limpeza pesada.",
      "A estrutura pesa entre 5,5 kg e 6,3 kg e vem acompanhada de cinto de sustentação, duas chaves Allen e chave combinada PH.",
      "Dica técnica de oficina: por puxar 2.000 W da tomada, utilize obrigatoriamente cabos de extensão com bitola grossa (mínimo de 2,5 mm² a 4 mm²) para evitar queda de tensão e queima do motor."
    ],
    specs: [
      { label: "Potência do Motor", value: "2.000 W (Maior potência da categoria com fio)", highlight: true },
      { label: "Rotação sob Carga", value: "7.500 RPM" },
      { label: "Faixa de Corte", value: "43 cm (Lâmina 3 pontas) / 25,5 cm (Nylon automático)" },
      { label: "Peso do Conjunto", value: "5,5 kg a 6,3 kg" },
      { label: "Acessórios na Caixa", value: "Lâmina 3P, carretel automático, cinto, 2 chaves Allen e chave PH" }
    ],
    pros: [
      "Motor de 2.000 W lidera em força bruta entre as elétricas.",
      "Faixa de corte de 43 cm na lâmina acelera a limpeza de grandes áreas.",
      "Carretel de nylon com avanço automático.",
      "Kit completo com lâmina de 3 pontas, cinto e jogo de chaves."
    ],
    cons: [
      "Exige extensão elétrica de bitola grossa para não sofrer queda de tensão.",
      "Peso elevado cobra condicionamento físico em uso prolongado."
    ],
    criteria: [
      { name: "Potência e Força Bruta", score: "9.9 / 10", note: "Os 2.000 W enfrentam capim grosso que trava modelos menores." },
      { name: "Rendimento por Passada", score: "9.7 / 10", note: "Amplo diâmetro de corte agiliza terrenos grandes." },
      { name: "Exigência da Rede Elétrica", score: "8.6 / 10", note: "Requer tomada firme e cabo de extensão de 2,5 mm² ou 4 mm²." }
    ]
  },
  {
    id: "rocadeira-eletrica-br-1300c",
    anchorId: "item-branco-br1300c",
    badge: "Maior Produtividade no Nylon (42 cm)",
    heading: "5. Branco ｜ Roçadeira Elétrica ｜ BR 1300 C",
    imageSrc: "/images/blog/Roçadeira Branco Br 1300c.webp",
    imageAlt: "Roçadeira Elétrica Branco BR 1300 C de 1250W com ampla faixa de corte",
    paragraphs: [
      "A Branco BR 1300 C foi projetada para quem prioriza produtividade no corte com fio de nylon em gramados amplos.",
      "Equipada com motor de 1.250 W calibrado a 6.800 RPM, ela compensa a rotação mais baixa com alto torque constante para sustentar um diâmetro de corte de 42 cm no nylon — um dos maiores do segmento.",
      "O cabeçote automático libera o fio sem pausas e o conjunto (com peso na faixa de 4,6 kg a 5,5 kg) distribui bem a massa quando acoplado ao cinto de ombro incluso.",
      "Além disso, acompanha kit de chaves que permite adaptar a ponteira para trabalhar também com lâmina adquirida à parte."
    ],
    specs: [
      { label: "Potência do Motor", value: "1.250 W" },
      { label: "Rotação por Minuto", value: "6.800 RPM (Calibrada para alto torque)" },
      { label: "Diâmetro de Corte", value: "42 cm no carretel de nylon automático", highlight: true },
      { label: "Peso do Equipamento", value: "4,6 kg a 5,5 kg" },
      { label: "Itens Inclusos", value: "Cinto de sustentação, kit de chaves e cortador de nylon" },
      { label: "Compatibilidade de Voltagem", value: "Monovolt (Escolher 127 V ou 220 V na compra)" }
    ],
    pros: [
      "Ampla faixa de corte de 42 cm no carretel de nylon.",
      "Motor de 1.250 W com alto torque em 6.800 RPM.",
      "Carretel automático agiliza o serviço contínuo.",
      "Acompanha cinto e kit de chaves para manutenção."
    ],
    cons: [
      "Não acompanha lâmina metálica de fábrica.",
      "Depende do uso constante do cinto para equilibrar o peso."
    ],
    criteria: [
      { name: "Largura de Corte no Nylon", score: "9.8 / 10", note: "Os 42 cm cobrem muita grama a cada movimento lateral." },
      { name: "Estabilidade de Torque", score: "9.3 / 10", note: "Mantém a força mesmo com fio comprido aberto." },
      { name: "Pacote de Fábrica", score: "8.8 / 10", note: "Vem pronta para nylon, mas disco metálico é vendido à parte." }
    ]
  },
  {
    id: "aparador-de-grama-eletrico-apb1000t-tramontina",
    anchorId: "item-tramontina-apb1000t",
    badge: "Mais Compacto para Guardar",
    heading: "6. Tramontina ｜ Aparador de Grama Elétrico Bipartido ｜ APB1000T",
    imageSrc: "/images/blog/Aparador De Grama Elétrico Apb1000t Tramontina.webp",
    imageAlt: "Aparador de grama elétrico bipartido Tramontina APB1000T de 1000W",
    paragraphs: [
      "O Tramontina APB1000T é um aparador focado em ergonomia e facilidade de guarda para quem mora em casas com pouca área de serviço.",
      "Seu motor de 1.000 W gira a 10.000 RPM, entregando corte limpo apenas com fio de nylon em uma faixa de 28 cm (280 mm).",
      "Com apenas 2,67 kg e haste bipartida de encaixe rápido, não sobrecarrega a lombar nem os punhos no contorno de canteiros, calçadas e gramados domésticos regulares.",
      "Do ponto de vista técnico, respeite o limite do projeto: por ter motor inferior de 1.000 W sem ventilação forçada pesada, faça pausas periódicas em dias quentes e use apenas em grama baixa."
    ],
    specs: [
      { label: "Potência e Giro", value: "1.000 W — 10.000 RPM" },
      { label: "Faixa de Corte", value: "28 cm (280 mm) — Exclusivo fio de nylon" },
      { label: "Construção do Tubo", value: "Haste bipartida com trava rápida e punho regulável", highlight: true },
      { label: "Peso Líquido", value: "2,67 kg" }
    ],
    pros: [
      "Extremamente leve (2,67 kg) e fácil de manobrar.",
      "Tubo bipartido ocupa espaço mínimo no armário.",
      "Giro de 10.000 RPM garante bom acabamento em bordas.",
      "Punho com ajuste ergonômico de altura."
    ],
    cons: [
      "Potência de 1.000 W restrita a gramados domésticos macios.",
      "Encaixe bipartido exige cuidado para não criar folga com o tempo."
    ],
    criteria: [
      { name: "Facilidade de Armazenamento", score: "9.8 / 10", note: "Desmontado, cabe em qualquer armário de área de serviço." },
      { name: "Maneabilidade", score: "9.5 / 10", note: "Muito leve para contornar vasos, muros e árvores." },
      { name: "Capacidade Pesada", score: "7.4 / 10", note: "Uso estritamente residencial em grama baixa." }
    ]
  },
  {
    id: "matsuyama-rocadeira-eletrica-967637",
    anchorId: "item-matsuyama-967637",
    badge: "Intermediária Versátil (38 cm)",
    heading: "7. Matsuyama ｜ Roçadeira Elétrica ｜ 967637",
    imageSrc: "/images/blog/MATSUYAMA Roçadeira Elétrica 967637.webp",
    imageAlt: "Roçadeira elétrica lateral Matsuyama 1200W código 967637 com lâmina e carretel",
    paragraphs: [
      "A Matsuyama 1.200 W (código 967637) é uma roçadeira lateral intermediária que aposta na versatilidade mecânica.",
      "Seu motor de 1.200 W opera a 7.500 RPM e aciona um cabeçote híbrido compatível tanto com a lâmina de 3 pontas quanto com o carretel de nylon (ambos inclusos na caixa), entregando uma faixa de corte de 38 cm.",
      "Essa combinação permite aparar a grama perto de muros com nylon e trocar para a lâmina de aço ao encarar touceiras e raízes mais duras.",
      "Conta com tubo bipartido e pesa 5,5 kg, exigindo atenção na hora da compra por ser monovolt."
    ],
    specs: [
      { label: "Motorização", value: "1.200 W" },
      { label: "Rotação Máxima", value: "7.500 RPM" },
      { label: "Sistema de Corte", value: "Híbrido — Lâmina de 3 pontas e carretel de nylon inclusos", highlight: true },
      { label: "Diâmetro de Alcance", value: "38 cm" },
      { label: "Peso do Equipamento", value: "5,5 kg (Tubo bipartido)" },
      { label: "Compatibilidade de Tensão", value: "Monovolt (Conferir 127 V ou 220 V antes da compra)" }
    ],
    pros: [
      "Kit híbrido de fábrica com lâmina de 3 pontas e carretel de nylon.",
      "Tubo bipartido facilita o transporte e a guarda.",
      "Ótima largura de corte de 38 cm.",
      "Relação de giro (7.500 RPM) mantém o torque estável sob carga."
    ],
    cons: [
      "Os 5,5 kg exigem bom ajuste do cinto postural.",
      "Voltagem fixa exige atenção à rede elétrica local."
    ],
    criteria: [
      { name: "Versatilidade Lâmina + Nylon", score: "9.4 / 10", note: "Transita bem entre grama macia e ervas daninhas resistentes." },
      { name: "Custo-Benefício", score: "9.2 / 10", note: "Entrega pacote completo por valor competitivo." },
      { name: "Ergonomia", score: "8.8 / 10", note: "Exige ajuste correto do cinto para distribuir os 5,5 kg." }
    ]
  },
  {
    id: "makita-aparador-de-grama-a-bateria-ur100dzx",
    anchorId: "item-makita-ur100dzx",
    badge: "Peso Pluma a Bateria (2,1 kg)",
    heading: "8. Makita ｜ Aparador de Grama a Bateria ｜ UR100DZX",
    imageSrc: "/images/blog/MAKITA Aparador de Grama a Bateria UR100DZX.webp",
    imageAlt: "Aparador de grama a bateria Makita UR100DZX 12V CXT",
    paragraphs: [
      "Para quem quer eliminar extensões elétricas nos retoques do jardim, o Makita UR100DZX opera com bateria de íons de lítio de 12 V (plataforma CXT).",
      "Pesando apenas 2,1 kg e atingindo 10.000 RPM, permite contornar árvores e canteiros distantes com agilidade total.",
      "Na análise construtiva, dois detalhes da engenharia japonesa chamam atenção: a tecnologia XPT, que veda os componentes internos contra infiltração de água e poeira, e a partida suave (soft start), que evita trancos de corrente no motor.",
      "Opera com lâmina plástica de 3 pontas (23 cm) ou carretel de nylon (26 cm).",
      "Note que a versão \"Z\" não inclui bateria nem carregador na caixa."
    ],
    specs: [
      { label: "Especificação Energética", value: "Bateria 12 V Max (Plataforma Makita CXT)" },
      { label: "Rotação por Minuto", value: "10.000 RPM" },
      { label: "Sistema e Amplitude de Corte", value: "23 cm (lâmina plástica 3 pontas) / 26 cm (nylon)" },
      { label: "Massa Líquida", value: "2,1 kg (Extremamente leve)", highlight: true },
      { label: "Tecnologias Embarcadas", value: "Proteção XPT contra água/poeira e Partida Suave" },
      { label: "Observação da Versão Z", value: "Não acompanha bateria e carregador de fábrica" }
    ],
    pros: [
      "Mobilidade total sem cabos e peso pluma de 2,1 kg.",
      "Proteção XPT contra poeira e respingos de água no motor.",
      "Partida suave preserva as engrenagens e a bateria.",
      "Punho tipo D totalmente ajustável à estatura do operador."
    ],
    cons: [
      "Torque de 12 V é exclusivo para grama leve e acabamentos.",
      "Versão UR100DZX exige comprar bateria e carregador separadamente."
    ],
    criteria: [
      { name: "Mobilidade e Leveza", score: "9.9 / 10", note: "Com 2,1 kg e sem fios, qualquer pessoa opera sem esforço." },
      { name: "Qualidade Construtiva", score: "9.6 / 10", note: "Vedação XPT e partida suave aumentam muito a durabilidade." },
      { name: "Custo Inicial Total", score: "8.4 / 10", note: "Excelente se você já tem baterias 12V Makita CXT em casa." }
    ]
  },
  {
    id: "rocadeira-stihl-bateria-fsa-57",
    anchorId: "item-stihl-fsa-57",
    badge: "Melhor a Bateria 36 V (Engenharia Alemã)",
    heading: "9. Roçadeira STIHL Bateria FSA 57",
    imageSrc: "/images/blog/Roçadeira STIHL Bateria FSA 57.webp",
    imageAlt: "Roçadeira a bateria STIHL FSA 57 de 36V do sistema AK",
    paragraphs: [
      "A STIHL FSA 57 traz o padrão de construção alemão para a plataforma a bateria de 36 V (sistema AK).",
      "Diferente de aparadores de 12 V, a tensão de 36 V entrega torque consistente para manter o giro estável em gramados residenciais extensos, sem barulho e com vibração quase nula nas mãos.",
      "Conta com arco distanciador na ponteira — que protege plantas ornamentais e a casca de árvores durante o corte — e ajuste de comprimento do tubo e do punho por botão, sem precisar de chaves.",
      "Aceita tanto o carretel AutoCut C 3-2 (reposição externa de nylon sem abrir a tampa) quanto as lâminas móveis PolyCut 3-2."
    ],
    specs: [
      { label: "Plataforma e Tensão", value: "Bateria de Lítio 36 V (Sistema STIHL AK)", highlight: true },
      { label: "Cabeçotes Compatíveis", value: "Carretel AutoCut C 3-2 (nylon) e PolyCut 3-2 (lâminas)" },
      { label: "Recursos de Ergonomia", value: "Ajuste de tubo e punho por botão sem ferramentas" },
      { label: "Proteção Paisagística", value: "Arco distanciador frontal para proteger plantas e árvores" }
    ],
    pros: [
      "Sistema de 36 V entrega excelente força de corte sem fios.",
      "Ajuste rápido de altura da haste e empunhadura sem ferramentas.",
      "Arco protetor evita acidentes contra plantas e muros.",
      "Rede de assistência técnica autorizada STIHL em todo o Brasil."
    ],
    cons: [
      "Tempo de trabalho contínuo limitado à carga da bateria.",
      "Investimento inicial elevado em comparação aos modelos com cabo."
    ],
    criteria: [
      { name: "Desempenho Sem Fio (36 V)", score: "9.8 / 10", note: "Entrega força real de corte com silêncio absoluto." },
      { name: "Ergonomia e Praticidade", score: "9.9 / 10", note: "Recarga externa de nylon no AutoCut C 3-2 e ajustes por botão." },
      { name: "Custo de Aquisição", score: "8.5 / 10", note: "Produto premium com valor condizente à tecnologia alemã." }
    ]
  },
  {
    id: "trapp-master-at-1500",
    anchorId: "item-trapp-at1500",
    badge: "Acabamento Fino de Alta Rotação (11.200 RPM)",
    heading: "10. Aparador de Grama Master AT-1500 – Trapp",
    imageSrc: "/images/blog/Aparador de Grama Master AT-1500 – Trapp.webp",
    imageAlt: "Aparador de Grama Elétrico Master AT-1500 da Trapp de 1500W",
    paragraphs: [
      "Voltado para o acabamento rápido de bordas, calçadas e jardins residenciais de até 100 m², o Trapp Master AT-1500 combina motor de 1.500 W com altíssima rotação de 11.200 RPM.",
      "Essa velocidade no cabeçote garante que o fio de nylon de 1,8 mm (com avanço automático) corte a folha da grama com precisão, sem mastigar as pontas.",
      "Pesando 2,73 kg, oferece faixa de corte de 29 cm (290 mm), punho de sustentação regulável e trava de segurança para a extensão elétrica — detalhe simples que evita o mau contato e o centelhamento no plugue durante os puxões no quintal."
    ],
    specs: [
      { label: "Potência e Rotação", value: "1.500 W — 11.200 RPM (Giro ultra rápido)", highlight: true },
      { label: "Faixa de Corte e Fio", value: "29 cm (290 mm) — Fio de nylon 1,8 mm automático" },
      { label: "Peso Líquido", value: "2,73 kg" },
      { label: "Diferencial e Garantia", value: "Trava segura para extensão elétrica e 12 meses de garantia" }
    ],
    pros: [
      "Rotação de 11.200 RPM proporciona corte fino de acabamento.",
      "Leve (2,73 kg) e equipado com trava segura para extensão elétrica.",
      "Faixa de corte de 29 cm com avanço automático de fio.",
      "12 meses de garantia e ampla disponibilidade de peças Trapp."
    ],
    cons: [
      "Opera exclusivamente com fio de nylon (não aceita lâmina).",
      "Não dimensionado para mato alto ou uso profissional pesado."
    ],
    criteria: [
      { name: "Velocidade de Acabamento", score: "9.6 / 10", note: "Os 11.200 RPM deixam o contorno de calçadas impecável." },
      { name: "Confiabilidade Nacional", score: "9.5 / 10", note: "1 ano de garantia e peças fáceis de encontrar." },
      { name: "Uso em Vegetação Grossa", score: "7.5 / 10", note: "Restrito a grama macia e áreas de até 100 m²." }
    ]
  }
];

const crossSellProducts = {
  fioNylon: {
    link: products["fio-de-nylon-24-mm-e-12-m-tramontina"]?.link || products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "#",
    image: "/images/blog/Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
  },
  carretelAutocut: {
    link: products["carretel-para-rocadeira-autocut-26-2-stihl-original"]?.link || "#",
    image: "/images/blog/Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  kitEpi: {
    link: products["kit-seguranca-completo-epis"]?.link || "#",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  }
};

export const MelhorRocadeiraEletrica: React.FC = () => {
  const [quizProfile, setQuizProfile] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Roçadeiras elétricas podem ser usadas na grama molhada?",
      answer: [
        "Não.",
        "Nunca utilize roçadeiras elétricas sob chuva ou em grama molhada/orvalhada.",
        "Além do risco severo de choque elétrico, a grama úmida pesa mais, gruda na carcaça e bloqueia a refrigeração, podendo queimar o motor."
      ]
    },
    {
      question: "Modelos de haste bipartida perdem potência com o tempo?",
      answer: [
        "Não perdem potência, desde que a luva de acoplamento seja mantida limpa, lubrificada e bem apertada antes de cada uso para evitar folga nas estrias do eixo interno."
      ]
    },
    {
      question: "É preciso colocar óleo no motor da roçadeira elétrica?",
      answer: [
        "Não.",
        "Diferente dos motores 2T e 4T a gasolina, o motor elétrico não usa óleo combustível ou óleo no cárter — exigindo apenas graxa na caixa de transmissão dos modelos laterais."
      ]
    },
    {
      question: "Qual a autonomia média das roçadeiras elétricas a bateria?",
      answer: [
        "Varia entre 30 e 50 minutos de corte contínuo por carga, dependendo da amperagem da bateria (Ah), da altura da grama e da velocidade acionada no gatilho."
      ]
    }
  ];

  const renderProductSection = (product: ProductReview, showTopBorder: boolean) => (
    <section
      key={product.id}
      id={product.anchorId}
      className={`scroll-mt-24 ${showTopBorder ? 'pt-10 border-t border-gray-200' : 'pt-2'}`}
    >
      <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
        {product.badge}
      </span>

      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4 leading-snug">
        {product.heading}
      </h3>

      <div className="w-full flex justify-center mb-8 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
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
        {product.paragraphs.map((paragraph, pIdx) => (
          <p key={pIdx}>{paragraph}</p>
        ))}
      </div>

      {/* Ficha Técnica Rápida */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
          <tbody className="divide-y divide-gray-200">
            {product.specs.map((spec, sIdx) => (
              <tr key={sIdx}>
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
            src="/images/blog/Serviços de jardinagens em geral.webp"
            alt="Operador realizando corte e acabamento de gramado com a melhor roçadeira elétrica"
            title="Melhor Roçadeira Elétrica em 2026: Top 10 Modelos"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Melhor Roçadeira Elétrica em 2026 <br />
            <span className="text-[#16A34A]">Top 10 Modelos</span>
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
              <span className="text-gray-400 text-xs sm:text-sm">Técnico Especialista em Mecânica de Roçadeiras</span>
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
            Escolher a melhor roçadeira elétrica exige avaliar muito mais do que a etiqueta de potência em Watts: na bancada da oficina, o que define se a máquina vai aguentar o tranco ou queimar o induzido no primeiro mês é o equilíbrio entre torque real, dissipação térmica do motor e robustez da transmissão.
          </p>
          <p>
            Enquanto aparadores simples servem apenas para acabamento de bordas, roçadeiras elétricas laterais contam com eixo cardã e caixa de engrenagens capazes de girar lâminas de aço no mato denso.
          </p>
          <p>
            A seguir, analiso tecnicamente os 10 melhores modelos de 2026 para você investir no equipamento certo para o seu terreno.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#16A34A] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual roçadeira elétrica é ideal para o seu terreno?</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Selecione o perfil do seu quintal ou chácara para ir direto ao equipamento dimensionado para a sua necessidade:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('jardim_pequeno')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'jardim_pequeno'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Jardim Pequeno (Até 100 m²) e Bordas</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('mato_denso')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'mato_denso'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Quintal Médio e Capim Alto (Aceita Lâmina)</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('forca_bruta')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'forca_bruta'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Terreno Extenso / Máxima Potência</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('sem_fio')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'sem_fio'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Liberdade Total Sem Cabos (A Bateria)</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/80 border border-gray-700 rounded-xl">
              {quizProfile === 'jardim_pequeno' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Para gramados residenciais macios e contornos rápidos, escolha a agilidade do{' '}
                  <a href="#item-tramontina-ap1500t" className="text-[#4ade80] underline font-bold">
                    Tramontina AP1500T (1.500 W)
                  </a>
                  , do{' '}
                  <a href="#item-trapp-at1500" className="text-[#4ade80] underline font-bold">
                    Trapp Master AT-1500
                  </a>{' '}
                  ou a guarda ultra compacta do{' '}
                  <a href="#item-tramontina-apb1000t" className="text-[#4ade80] underline font-bold">
                    Tramontina APB1000T
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'mato_denso' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Para enfrentar capim grosso com lâmina de aço e carretel de nylon, invista na{' '}
                  <a href="#item-tekna-bc1250ss" className="text-[#4ade80] underline font-bold">
                    Tekna BC1250SS (1.200 W)
                  </a>
                  , na tradicional{' '}
                  <a href="#item-trapp-master-1000" className="text-[#4ade80] underline font-bold">
                    Trapp Master 1000 Lateral
                  </a>{' '}
                  ou na versátil{' '}
                  <a href="#item-matsuyama-967637" className="text-[#4ade80] underline font-bold">
                    Matsuyama 967637
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'forca_bruta' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Para chácaras e terrenos grandes, vá na força bruta de 2.000 W da{' '}
                  <a href="#item-garthen-gre-2000" className="text-[#4ade80] underline font-bold">
                    Garthen GRE-2000
                  </a>{' '}
                  ou na ampla faixa de corte de 42 cm da{' '}
                  <a href="#item-branco-br1300c" className="text-[#4ade80] underline font-bold">
                    Branco BR 1300 C
                  </a>
                  .
                </p>
              )}
              {quizProfile === 'sem_fio' && (
                <p className="text-sm leading-relaxed text-gray-200">
                  Recomendação de Oficina: Esqueça extensões elétricas com a potência de 36 V da{' '}
                  <a href="#item-stihl-fsa-57" className="text-[#4ade80] underline font-bold">
                    STIHL Bateria FSA 57
                  </a>{' '}
                  ou com o peso pluma de 2,1 kg do{' '}
                  <a href="#item-makita-ur100dzx" className="text-[#4ade80] underline font-bold">
                    Makita UR100DZX (12 V)
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE RESUMO DOS 10 PRODUTOS (Miniaturas Otimizadas 60x60)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: As 10 Melhores Roçadeiras Elétricas
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
            5. ANÁLISE TÉCNICA DOS 10 MODELOS RECOMENDADOS
            =================================================================== */}
        <div className="space-y-14">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-3 mb-6">
              Modelos recomendados
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                A escolha do equipamento ideal exige uma análise criteriosa entre a potência entregue, a manobrabilidade e o nível de esforço exigido do operador.
              </p>
              <p>
                Apresentamos a seguir a seleção técnica dos 10 melhores equipamentos do mercado, avaliando como cada motor e transmissão se comporta na prática.
              </p>
            </div>
          </div>

          {recommendedModels.map((product, index) => (
            <React.Fragment key={product.id}>
              {renderProductSection(product, index > 0)}
              {index === 2 && <BunnerDoMeio />}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            6. BANNER DE CROSS-SELL (ACESSÓRIOS COMPLEMENTARES)
            =================================================================== */}
        <div className="my-16 p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-[#16A34A] w-7 h-7 shrink-0" />
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              Acessórios Essenciais para Sua Roçadeira Elétrica
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-base">
            Para evitar paradas por falta de fio de corte e trabalhar com proteção total contra detritos, confira os itens recomendados de oficina:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Reposição Rápida
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.fioNylon.image}
                    alt="Fio de Nylon Tramontina para Roçadeira e Aparador de Grama"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Fio de Nylon de Alta Resistência
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Filamento flexível e durável para reposição do carretel, garantindo corte limpo rente a muros e calçadas sem quebrar à toa.
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
                  Upgrade de Ponteira
                </span>
                <div className="h-40 w-full flex items-center justify-center p-3 mb-4 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts.carretelAutocut.image}
                    alt="Carretel Automático AutoCut 26-2 STIHL Original"
                    width={320}
                    height={213}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Carretel AutoCut 26-2 Original
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Polímero de engenharia de alta resistência e recarga rápida de fio sem precisar desmontar o cabeçote no meio da roçada.
                </p>
              </div>
              <a
                href={crossSellProducts.carretelAutocut.link}
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
                  Proteção indispensável para olhos, rosto e canelas contra pedras e estilhaços arremessados a mais de 10.000 RPM.
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
            7. SEÇÕES CONCEITUAIS (O QUE É, PARA QUE SERVE, ELÉTRICA VS GASOLINA)
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            O que é uma roçadeira elétrica?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A roçadeira elétrica é um equipamento motorizado que converte a energia da tomada (ou de baterias de lítio) em rotação mecânica para cortar grama, ervas daninhas e vegetação rasteira.
            </p>
            <p>
              Na mecânica da máquina, existem duas arquiteturas: os aparadores de grama (com motor instalado na base inferior girando diretamente um carretel de nylon) e as roçadeiras elétricas laterais (com motor superior mais robusto que transfere o torque por um eixo interno até uma caixa de engrenagens na ponteira, permitindo acoplar lâminas metálicas).
            </p>
            <p>
              Por não queimar combustível, opera sem fumaça, com baixo ruído e sem manutenção de carburador.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/Uso doméstico e agrícola.webp"
              alt="Uso doméstico e em chácaras de roçadeira elétrica para manutenção de áreas verdes"
              title="Diferença prática entre aparadores de grama e roçadeiras elétricas laterais"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Para que serve uma roçadeira elétrica?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Na prática, a roçadeira elétrica serve para executar a poda e a limpeza onde os cortadores de grama de carrinho não alcançam: cantos de muros, bordas de calçadas, ao redor de árvores, declives e entre canteiros.
            </p>
            <p>
              Nos modelos laterais mais fortes (acima de 1.200 W com suporte para lâmina de aço), ela também realiza o desbaste de capim alto, tiririca e pequenos arbustos em terrenos e chácaras, mantendo o lote limpo e evitando o acúmulo de pragas e insetos.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Qual a Melhor, a Roçadeira Elétrica ou a Movida a Gasolina?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              A resposta técnica depende do tamanho do terreno e da resistência do mato:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 my-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3">
                Roçadeira a gasolina (2T ou 4T)
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Entrega potência e torque superiores com autonomia total longe de tomadas, sendo indispensável para sítios, fazendas e capoeiras pesadas.
                </p>
                <p>
                  Porém, exige mistura correta de óleo, limpeza de carburador, troca de vela e gera alto ruído.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3">
                Roçadeira a bateria
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Oferece máxima leveza e mobilidade sem cabos para jardins residenciais, mas tem autonomia limitada ao tempo de carga (30 a 50 minutos) e menor torque bruto.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-3">
                Roçadeira elétrica (com fio)
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Ocupa o meio-termo ideal de custo-benefício urbano.
                </p>
                <p>
                  Mais forte e contínua que a versão a bateria e muito mais silenciosa, leve e simples de manter do que os motores a gasolina, precisa apenas de uma tomada compatível e uma boa extensão.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/rocadeira-eletrica-ou-gasolina-comparativo.webp"
              alt="Comparativo lado a lado entre roçadeira a gasolina para campo e roçadeira elétrica para quintais urbanos"
              title="Comparativo técnico: Roçadeira Elétrica vs Gasolina vs Bateria"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            8. COMO ESCOLHER A MELHOR ROÇADEIRA ELÉTRICA (GUIA DE COMPRA)
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Como Escolher a Melhor Roçadeira Elétrica
          </h2>

          <div className="w-full flex justify-center mb-10">
            <img
              src="/images/blog/como-escolher-melhor-rocadeira-eletrica.webp"
              alt="Operador aparando gramado residencial com roçadeira elétrica lateral conectada à extensão"
              title="Critérios de oficina para escolher a melhor roçadeira elétrica"
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
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
                <p>
                  A potência em Watts (W) indica a capacidade do motor elétrico de manter o giro sob carga sem travar ou superaquecer:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">600 W a 1.000 W</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Indicada para aparos leves, bordas de canteiros e gramados domésticos baixos.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">1.200 W a 2.000 W</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ideal para áreas maiores e vegetação densa, entregando torque para girar lâminas metálicas sem forçar o induzido (para referência técnica, 1 cv equivale a cerca de 735,5 W).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Equipamentos Mais Velozes Atingem 9000 Rotações por Minuto
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  A velocidade do eixo é medida em RPM (rotações por minuto), mas cuidado para não confundir velocidade com força.
                </p>
                <p>
                  Aparadores leves costumam girar entre 9.000 e 11.200 RPM porque usam apenas fio de nylon fino, que depende de alta velocidade para chicotear a grama.
                </p>
                <p>
                  Já as roçadeiras elétricas laterais mais fortes trabalham entre 6.800 e 9.000 RPM porque possuem redução mecânica para multiplicar o torque e girar lâminas de aço no mato pesado sem queimar o motor.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Observe Quantas Pontas Possui a Lâmina para Roçadeira Elétrica
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Verifique na ficha técnica qual sistema de corte o eixo suporta (conferindo a medida do furo central, geralmente de 1 polegada):
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Fio de nylon</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ideal para acabamento rente a muros, árvores e pedras sem risco de tranco violento.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Lâmina de 2 pontas</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Indicada para limpeza rápida de gramados extensos e pastagens macias.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#166534] mb-2">Lâmina de 3 ou 4 pontas</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Indispensável para cortar capim grosso, ervas daninhas fibrosas, raízes superficiais e pequenos arbustos.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center my-8">
                <img
                  src="/images/blog/tipos-de-lamina-e-nylon-rocadeira.webp"
                  alt="Bancada de oficina exibindo carretel de fio de nylon e lâminas de aço de 2 e 3 pontas para roçadeira"
                  title="Sistemas de corte: Fio de nylon vs Lâminas de 2, 3 e 4 pontas"
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
                  A faixa (ou diâmetro) de corte varia de 23 cm nos aparadores compactos até 43 cm nas roçadeiras maiores.
                </p>
                <p>
                  Quanto maior o diâmetro varrido pelo nylon ou pela lâmina a cada passada, menos tempo o motor precisa ficar ligado para limpar o terreno.
                </p>
                <p>
                  Para áreas acima de 100 m², priorize máquinas com faixa de corte superior a 30 cm.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Roçadeiras Elétricas Leves Pesam Até 6 kg
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Como o equipamento vai sustentado nos braços ou no cinto, o peso impacta diretamente a sua coluna.
                </p>
                <p>
                  Aparadores simples pesam entre 2 kg e 3 kg, enquanto as melhores roçadeiras elétricas laterais ficam na faixa de 4,8 kg a 6 kg — oferecendo o equilíbrio exato entre estrutura reforçada e conforto.
                </p>
                <p>
                  Máquinas acima de 7 kg exigem cinto bem ajustado e pausas maiores.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Verifique se a Compra Acompanha Acessórios Extras
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Confira na descrição da loja o que realmente vem na caixa.
                </p>
                <p>
                  Modelos completos já incluem o cinto de sustentação (essencial em máquinas acima de 4,5 kg), lâmina metálica de 3 ou 4 pontas, carretel de nylon abastecido e kit de chaves (Allen e chave de vela/combinada) para travar a ponteira na hora de alternar entre o disco de aço e o carretel.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
                Roçadeira Elétrica 220 ou 110 V? Certifique-se de Adquirir uma com a Voltagem Correta
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Motores elétricos de escova ou indução usados em roçadeiras com fio não são bivolt.
                </p>
                <p>
                  Ligar uma máquina de 127 V em uma tomada de 220 V queima o bobinamento instantaneamente (e a garantia não cobre erro de tensão), enquanto ligar um modelo 220 V no 127 V fará o motor rodar fraco e superaquecer.
                </p>
                <p>
                  Além de escolher a voltagem certa, dimensione a bitola da extensão elétrica conforme a distância da tomada.
                </p>
              </div>
            </div>

            {/* Critérios numerados de decisão */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#166534] mb-3">
                  1. Entenda Suas Necessidades de Uso
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Antes de fechar a compra, cruze três variáveis do seu terreno: o tipo de vegetação (grama fina pede nylon; mato fechado exige lâmina e 1.200 W+), a frequência de uso (serviços semanais longos pedem roçadeiras com motor superior bem ventilado) e a área total em m² (quintais pequenos aceitam aparadores simples; lotes amplos pedem roçadeiras laterais ou modelos a bateria com baterias extras).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#166534] mb-3">
                  2. Parcerias com Marcas Renomadas
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Compre sempre em revendas e lojas oficiais parceiras de fabricantes tradicionais como STIHL, Makita, Trapp, Tramontina, Tekna e Branco, garantindo produto original com motor dentro das normas de segurança elétrica.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#166534] mb-3">
                  3. Garantia e Peças Originais
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Marcas sérias oferecem garantia clara (geralmente de 12 meses) e mantêm catálogo ativo de peças originais — como carretéis específicos, tampas de bobina, eixos e caixas de transmissão — prolongando a vida útil da ferramenta por anos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#166534] mb-3">
                  4. Suporte Técnico Especializado
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Contar com oficinas credenciadas na sua região facilita diagnósticos elétricos e revisões preventivas de transmissão, evitando gambiarras que comprometem a segurança do operador.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                5. Considere Marcas Confiáveis e Assistência Técnica
              </h3>
              <div className="space-y-3 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Todo equipamento elétrico sofre desgaste natural de escovas de carvão, rolamentos, gatilho interruptor e engrenagens da ponteira.
                </p>
                <p>
                  Escolher marcas consolidadas garante que você não ficará com a máquina encostada por falta de uma peça simples.
                </p>
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
                Dica Prática de Oficina (Bitola da Extensão)
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-800">
              Nunca ligue roçadeiras elétricas de 1.200 W a 2.000 W em extensões domésticas finas (0,75 mm² ou 1,0 mm²) nem use a extensão enrolada no rolo. Fios finos aquecem, geram queda severa de tensão na ponteira e queimam o induzido do motor em poucas horas de trabalho. Utilize sempre cabo PP de 2,5 mm² (até 20 metros) ou 4,0 mm² (acima de 20 metros).
            </p>
          </div>
        </section>

        {/* ===================================================================
            9. DESIGN, ERGONOMIA E AJUSTES DO CARRETEL
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Avalie o Design e Ergonomia do Equipamento
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              A ergonomia define o controle sobre o cabeçote de corte: verifique se o modelo possui punho auxiliar com regulagem de altura e ângulo, trava para cabo de extensão, tubo bipartido sem folgas e bom equilíbrio de peso entre a traseira (motor) e a ponteira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Vantagens da Troca Rápida do Carretel de Nylon
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Carretéis modernos com sistema automático ou semi-automático ("bate e libera") e tampas de encaixe rápido permitem repor o fio de nylon em segundos sem usar ferramentas, evitando paradas longas no meio da roçada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Ajustes Possíveis no Fio de Corte
              </h3>
              <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                <p>
                  Respeite sempre o diâmetro de fio de nylon especificado no manual do fabricante (normalmente entre 1,6 mm e 2,4 mm).
                </p>
                <p>
                  Fios mais finos (1,6 mm a 1,8 mm) exigem menos do motor e entregam corte cirúrgico em grama macia; fios mais grossos (2,0 mm a 2,4 mm) suportam ervas daninhas mais duras, mas colocar um fio acima do limite suportado pelo carretel aumenta o arrasto aerodinâmico e sobrecarrega o motor elétrico.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ===================================================================
            11. DICAS EXTRAS DE MANUTENÇÃO E SEGURANÇA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">
            Dicas Extras para Manutenção e Segurança na Jardinagem com Roçadeiras Elétricas
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
            <p>
              Na oficina, 80% das queimas de roçadeiras elétricas vêm de falta de limpeza e uso incorreto.
            </p>
            <p>
              Siga este protocolo básico:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Limpeza das aletas de ventilação
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Após cada uso, retire restos de grama e seiva das entradas de ar do motor e da proteção do cabeçote para evitar superaquecimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Lubrificação da transmissão
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Nas roçadeiras laterais que usam caixa de engrenagens (ponteira), engraxe periodicamente com graxa específica para roçadeiras conforme o manual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Inspeção elétrica
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Revise cabos, plugues e extensões antes de ligar; fios desencapados no jardim geram risco grave de choque e curto-circuito.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                Uso obrigatório de EPIs
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Opere sempre utilizando óculos de proteção ou viseira facial, calçados fechados antiderrapantes, caneleiras, luvas e protetor auricular.
              </p>
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
            Perguntas frequentes
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Clique nas perguntas abaixo para conferir as orientações técnicas de uso, segurança elétrica e conservação da sua máquina.
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
            13. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#16A34A] tracking-tight">
              Conclusão: Qual a melhor roçadeira elétrica?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              A melhor roçadeira elétrica é aquela cujo motor e transmissão estão dimensionados para a resistência do seu mato.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Se você precisa apenas aparar gramados domésticos pequenos e fazer bordas com leveza, os aparadores Tramontina AP1500T e Trapp Master AT-1500 entregam excelente custo-benefício, enquanto a STIHL FSA 57 e a Makita UR100DZX lideram na praticidade sem fios.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Já para encarar grama alta, ervas daninhas grossas e terrenos maiores usando lâmina de aço, invista na robustez mecânica das roçadeiras laterais Trapp Master 1000, Tekna BC1250SS ou na força bruta de 2.000 W da Garthen GRE-2000.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorRocadeiraEletrica;
