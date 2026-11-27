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
// INTERFACE E DADOS DOS 8 MODELOS TOYAMA + 3 ALTERNATIVAS CONCORRENTES
// ============================================================================
interface BrushcutterModelReview {
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
  isAlternative?: boolean;
  specs: { label: string; value: string }[];
  paragraphs: string[];
  pros: string[];
  cons: string[];
}

const toyamaReviews: BrushcutterModelReview[] = [
  {
    id: "toyama-tbc52x-gii",
    productId: "rocadeira-toyama-tbc52x",
    rank: "1. Roçadeira Toyama TBC52X-GII é boa?",
    shortName: "Toyama TBC52X-GII (51,6 cc / 1,9 HP)",
    category: "Melhor Geral Linha X (Uso Frequente em Sítios)",
    score: "9.6",
    badge: "Campeã Linha X (Uso Frequente)",
    subtitle: "O equilíbrio mais maduro da Toyama para quem encara manutenção recorrente de chácaras e sítios com amortecimento reforçado e filtro duplo.",
    image: "/images/blog/rocadeira toyama Tbc52x.webp",
    thumb: "/images/blog/thumbs/rocadeira toyama Tbc52x-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "51,6 cc / 1,9 HP (1,4 kW) — Motor 2T" },
      { label: "Série e Ciclo de Uso", value: "Linha X (Uso Frequente / Semi-Intensivo)" },
      { label: "Tubo e Transmissão", value: "Haste inteiriça 28 mm com sistema antivibração" },
      { label: "Capacidade do Tanque", value: "1,1 Litro" },
      { label: "Acessórios de Série", value: "Lâmina 3 pontas + Carretel de nylon + Colete duplo" }
    ],
    paragraphs: [
      "A Toyama TBC52X-GII posiciona-se como uma aliada estratégica para quem encara a manutenção de chácaras e sítios como uma rotina constante.",
      "Com seu motor de 51,6 cc (categoria 52 cc) e 1,9 HP, ela entrega a força necessária para enfrentar braquiária alta, ervas daninhas e vegetação rasteira fechada com agilidade, eliminando o esforço exaustivo que equipamentos subdimensionados impõem.",
      "Por pertencer à segunda geração da série X (GII), ela traz um casulo antivibração muito superior entre a campana da embreagem e o tubo de 28 mm, além de guidão tipo bicicleta com ajuste rápido que reduz a fadiga nos punhos.",
      "Como toda máquina de 52 cilindradas, seu peso exige ajuste firme do colete duplo nos ombros, mas se você busca robustez para o trabalho frequente sem pagar o preço de uma linha florestal, este modelo é a compra mais certeira do catálogo."
    ],
    pros: [
      "Potência de 51,6 cc ideal para vegetação média e densa em sítios",
      "Ergonomia superior com guidão duplo e amortecimento da Série X-GII",
      "Tubo de alumínio reforçado de 28 mm que não torce com lâmina de 3 pontas",
      "Ampla oferta de peças de reposição e kit completo de fábrica"
    ],
    cons: [
      "Peso mais elevado para jornadas muito longas sem ajuste correto do cinto",
      "Exige disciplina rigorosa na proporção da mistura óleo 2T e gasolina"
    ]
  },
  {
    id: "toyama-tbc63",
    productId: "rocadeira-tbc63-toyama-profissional-3-5hp-funcao-motopoda",
    rank: "2. Roçadeira Toyama TBC63 é boa?",
    shortName: "Toyama TBC63 Profissional (63,3 cc / 3,5 HP)",
    category: "Maior Potência Bruta + Kit Multifuncional Motopoda",
    score: "9.5",
    badge: "Tanque de Guerra (63,3 cc / 3,5 HP)",
    subtitle: "O motor mais forte do catálogo Toyama para quem não tolera mato fechado e quer versatilidade com disco de 80 dentes e função motopoda.",
    image: "/images/blog/Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda.webp",
    thumb: "/images/blog/thumbs/Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "63,3 cc / 3,5 HP — Motor 2 Tempos" },
      { label: "Indicação Principal", value: "Capim colonião alto, pasto sujo e arbustos lenhosos" },
      { label: "Tubo de Transmissão", value: "Eixo extra longo reforçado de 28 mm" },
      { label: "Capacidade do Tanque", value: "1,3 Litro" },
      { label: "Destaque do Kit", value: "Lâminas + Disco 80 dentes + Implemento Motopoda" }
    ],
    paragraphs: [
      "A TBC63 é o verdadeiro tanque de guerra da Toyama: com motor real de 63,3 cc e 3,5 HP, ela foi projetada para quem enfrenta vegetação pesada e terrenos rurais extensos.",
      "A potência bruta mantém a rotação alta mesmo ao entrar em touceiras grossas de capim-elefante e rebentos lenhosos, concluindo o desbaste com menos passadas.",
      "O grande diferencial desta versão é o pacote multifuncional, que acompanha lâminas variadas, disco de serra de 80 dentes e implemento motopoda para limpeza de galhos altos na propriedade.",
      "Todavia, esse poder cobra seu preço na balança e no tanque: é um equipamento pesado que exige preparo físico do operador, sendo um exagero desnecessário para gramados residenciais pequenos."
    ],
    pros: [
      "Maior potência bruta da marca (63,3 cc e 3,5 HP) para pasto pesado",
      "Kit multifuncional completo com disco e função motopoda",
      "Altíssima produtividade por hora em capim grosso e brotos lenhosos",
      "Eixo extra longo e robusto para varreduras amplas"
    ],
    cons: [
      "Peso elevado que cansa rápido operadores sem experiência",
      "Consumo de combustível superior ao dos modelos de 43 cc"
    ]
  },
  {
    id: "toyama-tbc43x",
    productId: "rocadeira-gasolina-2-tempos-tbc43x-43cc-gll-toyama-lamina",
    rank: "3. Roçadeira Toyama TBC43X é boa?",
    shortName: "Toyama TBC43X-GII (42,7 cc / 1,7 HP)",
    category: "Melhor Equilíbrio Peso-Potência para Uso Semanal",
    score: "9.5",
    badge: "Meio-Termo Pau para Toda Obra",
    subtitle: "A 43 cilindradas da Série X com filtragem dupla de ar que entrega agilidade sem o peso extra dos motores maiores.",
    image: "/images/blog/Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina.webp",
    thumb: "/images/blog/thumbs/Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "42,7 cc / 1,7 HP — Rotação máx. 12.000 RPM" },
      { label: "Série e Ciclo de Uso", value: "Linha X-GII (Uso Frequente)" },
      { label: "Filtragem de Ar", value: "Sistema de filtro de ar duplo de alta proteção" },
      { label: "Haste e Guidão", value: "Tubo 28 mm inteiriço + Guidão bicicleta ergonômico" },
      { label: "Acessórios de Série", value: "Lâmina de corte + Carretel de nylon + Cinto duplo" }
    ],
    paragraphs: [
      "A Toyama TBC43X-GII é a escolha equilibrada para quem precisa de um equipamento pau para toda obra em manutenções frequentes de sítios, condomínios e chácaras.",
      "Com 42,7 cc e 1,7 HP, ela entrega um meio-termo inteligente: tem muito mais torque que aparadores de 26 cc ou 33 cc, porém é mais leve e econômica que as versões de 52 cc e 63 cc.",
      "Seu motor atinge até 12.000 RPM em vazio, garantindo corte rápido tanto no fio de nylon quanto na faca metálica, enquanto o sistema de filtro de ar duplo protege o cilindro contra a poeira fina de terra seca.",
      "É a solução ideal para proprietários e jardineiros que buscam produtividade semanal consistente sem desperdiçar combustível com cilindrada excedente."
    ],
    pros: [
      "Cilindrada curinga de 42,7 cc com excelente relação peso-potência",
      "Sistema de filtragem de ar de alta proteção que prolonga a vida do motor",
      "Amortecimento da linha X-GII que reduz a vibração nos braços",
      "Consumo de gasolina mais contido que nos motores de 52 cc"
    ],
    cons: [
      "Menos torque de arranque que a TBC52X-GII e a TBC63 em mato arbustivo fechado",
      "Demanda atenção constante à limpeza da espuma do filtro de ar"
    ]
  },
  {
    id: "toyama-tbc43h",
    productId: "rocadeira-jardinagem-lateral-a-gasolina-toyama-tbc43h",
    rank: "4. Roçadeira Toyama TBC43H é boa?",
    shortName: "Toyama TBC43H (42,7 cc / 1,7 HP)",
    category: "Melhor Custo-Benefício Linha H (Chácaras e Fim de Semana)",
    score: "9.2",
    badge: "Campeã de Vendas (Uso Ocasional)",
    subtitle: "A porta de entrada da linha H para quem precisa limpar o terreno ou a chácara nos finais de semana gastando pouco na compra.",
    image: "/images/blog/Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H.webp",
    thumb: "/images/blog/thumbs/Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "42,7 cc / 1,7 HP — Motor 2 Tempos" },
      { label: "Série e Ciclo de Uso", value: "Linha H (Uso Ocasional / Doméstico Rural)" },
      { label: "Tubo de Transmissão", value: "Alumínio 26 mm inteiriço" },
      { label: "Peso Aproximado", value: "~8,5 a 9,0 kg" },
      { label: "Acessórios de Série", value: "Colete ergonômico + Lâmina 3 pontas + Carretel nylon" }
    ],
    paragraphs: [
      "A TBC43H representa a entrada estratégica da linha H da Toyama, desenhada sob medida para proprietários que fazem manutenções periódicas em lotes, jardins grandes ou chácaras pequenas.",
      "Equipada com o mesmo bloco de 42,7 cc e 1,7 HP, ela tem fôlego de sobra para baixar mato crescido que já passou da altura do joelho, sem exigir o investimento de uma máquina profissional.",
      "O guidão tipo bicicleta e o colete duplo incluído na caixa ajudam a distribuir o peso pelos ombros, tornando o serviço de final de semana muito mais rápido e confortável.",
      "Vale alinhar a expectativa técnica: como pertence à série H (sem o casulo antivibração pesado da linha X), ela não foi projetada para empreiteiros que roçam 8 horas por dia sob sol escaldante, mas para uso periódico entrega um custo-benefício difícil de bater."
    ],
    pros: [
      "Preço de compra muito atrativo para manutenção periódica de terrenos",
      "Já sai da caixa com colete duplo, lâmina metálica e cabeçote de nylon",
      "Partida manual retrátil leve e mecânica extremamente simples de manter",
      "Peças de reposição baratas em qualquer oficina de motores 2 tempos"
    ],
    cons: [
      "Construção da linha H não é dimensionada para uso comercial diário contínuo",
      "Transmite mais vibração no guidão que a irmã TBC43X-GII"
    ]
  },
  {
    id: "toyama-tbc52h",
    productId: "rocadeira-toyama-tbc52h-52cc-profissional-oleo-2t-brinde",
    rank: "5. Roçadeira Toyama TBC52H é boa?",
    shortName: "Toyama TBC52H (51,6 cc / 2,0 HP)",
    category: "Mais Força por Real Investido para Limpezas Pesadas Pontuais",
    score: "9.2",
    badge: "Força 52cc com Preço de Entrada",
    subtitle: "Para o dono de sítio que deixa o mato crescer alto entre uma roçada e outra e precisa do torque de 2,0 HP pagando preço de linha H.",
    image: "/images/blog/Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde.webp",
    thumb: "/images/blog/thumbs/Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "51,6 cc / 2,0 HP — Motor 2 Tempos" },
      { label: "Série e Ciclo de Uso", value: "Linha H (Uso Ocasional Pesado)" },
      { label: "Capacidade do Tanque", value: "1,1 Litro" },
      { label: "Haste e Eixo", value: "Tubo inteiriço 26 mm / Eixo cardã rígido" },
      { label: "Diferencial do Kit", value: "Acompanha lâmina, carretel, cinto e óleo 2T" }
    ],
    paragraphs: [
      "A Toyama TBC52H é a resposta para o proprietário rural que precisa de potência bruta de 51,6 cc e 2,0 HP, mas só utiliza a máquina algumas vezes por mês e quer economizar na compra.",
      "Esse motor dois tempos encara capim denso, braquiária velha e terrenos irregulares com uma desenvoltura que impressiona pela faixa de preço, mantendo a faca de 3 pontas girando forte sem engasgar.",
      "O tanque de 1,1 litro garante boa autonomia no campo e o kit já acompanha acessórios essenciais e óleo 2 tempos para facilitar a estreia imediata do equipamento.",
      "Assim como na TBC43H, respeite a vocação da série H: faça pequenas pausas de resfriamento entre um tanque e outro, pois ela brilha em limpezas pontuais pesadas, não em jornadas industriais ininterruptas de 8 horas."
    ],
    pros: [
      "Motor forte de 51,6 cc e 2,0 HP com excelente relação força por real gasto",
      "Kit completo pronto para uso imediato com óleo 2T incluso",
      "Tanque generoso de 1,1 litro para menos paradas de abastecimento",
      "Aceita lâminas de 3 pontas e discos de vídea de 40/80 dentes com folga"
    ],
    cons: [
      "Peso elevado exige bom ajuste do cinto de sustentação",
      "Pede intervalos de descanso em dias muito quentes (ciclo de uso Série H)"
    ]
  },
  {
    id: "toyama-rt52l",
    productId: "rocadeira-lateral-a-gasolina-2hp-52cc-2t-rt52l-b-toyama",
    rank: "6. Roçadeira Toyama RT52L é boa?",
    shortName: "Toyama RT52L-B (52 cc / 2,0 HP)",
    category: "Alternativa Direta e Econômica de 52cc",
    score: "9.0",
    badge: "Simples, Direta e Forte",
    subtitle: "Versão enxuta de 52 cilindradas e 2 HP com carenagem redesenhada para quem prioriza simplicidade mecânica e preço competitivo.",
    image: "/images/blog/Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama.webp",
    thumb: "/images/blog/thumbs/Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "51,6 cc (52 cc) / 2,0 HP — Motor 2T" },
      { label: "Linha", value: "Série RT (Custo-Benefício Operacional)" },
      { label: "Transmissão", value: "Eixo cardã rígido com sistema antivibração básico" },
      { label: "Empunhadura", value: "Guidão duplo tipo bicicleta" },
      { label: "Acessórios de Série", value: "Carretel de nylon + Lâmina de corte + Cinto" }
    ],
    paragraphs: [
      "A Toyama RT52L (e sua revisão RT52L-B) surge como uma alternativa direta e robusta para quem busca a força de 52 cc e 2,0 HP em áreas médias com orçamento enxuto.",
      "Ela encara ervas daninhas grossas e capim alto com a mesma disposição mecânica da TBC52H, diferenciando-se pelo desenho da carenagem do motor e pela configuração simplificada da linha RT.",
      "O guidão tipo bicicleta aliado ao suporte com amortecimento básico confere bom controle lateral, evitando que o cansaço tome conta prematuramente durante a varredura.",
      "Apenas atente-se: por ser um modelo de tubo inteiriço dedicado exclusivamente à roçada, evite adaptá-la com implementos multifuncionais não homologados para não sobrecarregar a campana e o eixo."
    ],
    pros: [
      "Potência honesta de 2,0 HP e 52 cc por um valor muito acessível",
      "Eixo rígido estável para trabalho com lâmina e cabeçote de nylon",
      "Guidão duplo ergonômico fácil de regular para a altura do operador",
      "Compartilha peças de motor com toda a família 52cc da Toyama"
    ],
    cons: [
      "Não é compatível com engates de acessórios multifuncionais",
      "Acabamento plástico mais simples que o da linha TBC-X"
    ]
  },
  {
    id: "toyama-rt43l",
    productId: "rocadeira-toyama-rt43l",
    rank: "7. Roçadeira Toyama RT43L é boa?",
    shortName: "Toyama RT43L (42,7 cc / 1,7 HP)",
    category: "Leve e Descomplicada para Terrenos Médios (8 kg)",
    score: "9.0",
    badge: "Leveza e Economia (43 cc)",
    subtitle: "Opção enxuta de 43 cilindradas com peso contido (~8 kg) para quem quer fugir do peso das 52cc na limpeza de chácaras e quintais.",
    image: "/images/blog/Roçadeira Toyama Rt43l.webp",
    thumb: "/images/blog/thumbs/Roçadeira Toyama Rt43l-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "42,7 cc / 1,7 HP — Motor 2 Tempos" },
      { label: "Peso Aproximado", value: "~8,0 kg (uma das mais leves da categoria 43cc)" },
      { label: "Guidão", value: "Aberto ajustável tipo bicicleta" },
      { label: "Transmissão", value: "Haste inteiriça em alumínio + eixo rígido" },
      { label: "Acessórios de Série", value: "Carretel de nylon + Lâmina + Colete" }
    ],
    paragraphs: [
      "Para quem busca uma operação descomplicada e menos cansativa em terrenos de porte médio, a Toyama RT43L se destaca pelo peso contido na faixa dos 8 kg.",
      "Com 1,7 HP e motor de 42,7 cc, ela entrega força suficiente para o manejo de gramados crescidos, bordas de cercas e ervas daninhas, sem o peso extra dos motores de 52 cilindradas.",
      "Seu guidão aberto ajustável e o conjunto de amortecimento minimizam o desgaste nos ombros, permitindo jornadas mais fluidas para operadores de qualquer estatura.",
      "Um detalhe prático de compra: como existem lotes da linha RT com pequenas variações nos acessórios inclusos, confira sempre a descrição do anúncio para garantir que o kit acompanha tanto o carretel quanto a lâmina metálica."
    ],
    pros: [
      "Peso reduzido (~8 kg) que cansa menos os braços e a lombar",
      "Guidão ergonômico fácil de ajustar sem complicação",
      "Motor 42,7 cc econômico no consumo de gasolina por hora",
      "Ótimo preço de entrada com garantia e rede de peças Toyama"
    ],
    cons: [
      "Limitação natural de torque em pasto muito fechado ou arbustos grossos",
      "Exige conferir os acessórios exatos do lote no momento da compra"
    ]
  },
  {
    id: "toyama-tbc52sx-two-box",
    productId: "rocadeira-a-gasolina-toyama-tbc52sx-premium-2t-51-6cc-pro",
    rank: "8. Roçadeira a Gasolina Toyama TBC52SX Two Box (Premium)",
    shortName: "Toyama TBC52SX Premium (51,6 cc Bipartida)",
    category: "Melhor Toyama de Eixo Bipartido para Transporte em Carro",
    score: "9.3",
    badge: "Eixo Bipartido (Fácil Transporte)",
    subtitle: "A solução da Toyama com tubo divisível ao meio para jardineiros e donos de chácara que precisam levar uma 52cc forte no porta-malas de um carro hatch.",
    image: "/images/blog/Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro.webp",
    thumb: "/images/blog/thumbs/Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro-thumb.webp",
    specs: [
      { label: "Cilindrada e Potência", value: "51,6 cc / 2,0 HP — Motor 2T Premium" },
      { label: "Diferencial Estrutural", value: "Haste Bipartida com luva central de engate rápido" },
      { label: "Transporte", value: "Cabe no porta-malas de carros compactos sem desmontar motor" },
      { label: "Peso Aproximado", value: "~9,0 kg" },
      { label: "Acessórios de Série", value: "Lâmina de corte + Cabeçote de nylon + Cinto duplo" }
    ],
    paragraphs: [
      "A Toyama TBC52SX Premium (Two Box) resolve a maior dor de cabeça de quem mora na cidade e tem chácara no interior ou presta serviço de jardinagem usando carro de passeio.",
      "Seu grande diferencial reside no tubo de transmissão bipartido com trava central: em segundos você solta a borboleta de aperto, divide a haste em duas partes curtas e acomoda tudo no porta-malas sem ficar com o tubo saindo pela janela.",
      "Ao mesmo tempo, ela não sacrifica potência: o motor de 51,6 cc entrega 2,0 HP reais para encarar vegetação densa que travaria aparadores pequenos.",
      "O cuidado técnico indispensável na bancada é verificar periodicamente o aperto e o encaixe até o fim de curso da luva central bipartida, evitando folgas nas estrias durante o uso em terrenos acidentados."
    ],
    pros: [
      "Eixo bipartido que permite transportar a máquina em qualquer porta-malas",
      "Motor potente de 51,6 cc e 2,0 HP para vegetação densa",
      "Economia de espaço na hora de guardar no quartinho de ferramentas",
      "Kit completo de fábrica com lâmina, carretel de nylon e cinto"
    ],
    cons: [
      "A luva de engate central exige conferência periódica de aperto e lubrificação",
      "Peso em torno de 9 kg pede cinto bem regulado no quadril"
    ]
  }
];

const alternativeReviews: BrushcutterModelReview[] = [
  {
    id: "alternativa-carbon-fak-fak520rb",
    productId: "rocadeira-a-gasolina-profissional-2-5hp-fak520rb-carbon-fak",
    rank: "1. Roçadeira a Gasolina – Carbon Fak FAK520RB (52 cc / 2,5 HP)",
    shortName: "Carbon Fak FAK520RB (52 cc Bipartida)",
    category: "Alternativa Bipartida Mais Leve e Barata (7,6 kg / 2,5 HP)",
    score: "9.1",
    badge: "Alternativa Leve e Bipartida",
    subtitle: "Supera em leveza (7,6 kg) e preço de entrada para quem quer eixo bipartido para transporte fácil no porta-malas gastando menos que na TBC52SX.",
    image: "/images/blog/Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak.webp",
    thumb: "/images/blog/thumbs/Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak-thumb.webp",
    isAlternative: true,
    specs: [
      { label: "Cilindrada e Potência", value: "52 cc / 2,5 HP — Motor 2 Tempos" },
      { label: "Estrutura da Haste", value: "Eixo Bipartido para transporte compacto" },
      { label: "Peso Declarado", value: "7,6 kg (excelente relação peso-potência)" },
      { label: "Sustentação", value: "Guidão ergonômico + Cinto de sustentação duplo" },
      { label: "Acessórios de Série", value: "Kit completo de operação (Lâmina + Carretel + Ferramentas)" }
    ],
    paragraphs: [
      "A Carbon Fak FAK520RB destaca-se como uma alternativa muito competitiva para quem prioriza facilidade no transporte graças ao seu sistema de eixo bipartido aliado a um preço menor que o da Toyama TBC52SX.",
      "Com 2,5 HP declarados em um bloco de 52 cc e peso enxuto na casa dos 7,6 kg, ela entrega uma performance ágil para a limpeza de lotes urbanos, chácaras e áreas médias.",
      "O guidão ergonômico e o cinto de sustentação duplo minimizam o impacto físico nos ombros, permitindo manobrar com rapidez ao redor de árvores e muros.",
      "Contudo, é prudente estar ciente de que a garantia padrão é de 6 meses e o sistema de engate central do eixo bipartido exige inspeção constante de aperto antes de cada jornada para evitar desgaste nas estrias."
    ],
    pros: [
      "Excelente relação peso-potência (7,6 kg com motor de 52 cc e 2,5 HP)",
      "Eixo bipartido prático para transportar no porta-malas e guardar em pouco espaço",
      "Acompanha kit completo de operação pronto para trabalhar",
      "Preço de aquisição muito competitivo frente às marcas tradicionais"
    ],
    cons: [
      "Luva de engate do eixo bipartido requer verificação constante de aperto",
      "Prazo de garantia de 6 meses e rede autorizada menor que a da Toyama"
    ]
  },
  {
    id: "alternativa-intech-machine-skim5100",
    productId: "rocadeira-bipartida-a-gasolina-1-9-hp-2t-52cc-acessorios-skim5100-intech-machine",
    rank: "2. Roçadeira a Gasolina – Intech Machine SKIM5100 (52 cc / 1,9 HP)",
    shortName: "Intech Machine SKIM5100 (52 cc Bipartida)",
    category: "Alternativa Bipartida de Alta Rotação para Custo Baixo",
    score: "8.9",
    badge: "Alternativa Bipartida Econômica",
    subtitle: "Opção popular de eixo bipartido com giro alto e kit completo para quem busca economia máxima na compra de uma 52cc divisível.",
    image: "/images/blog/Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine.webp",
    thumb: "/images/blog/thumbs/Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine-thumb.webp",
    isAlternative: true,
    specs: [
      { label: "Cilindrada e Potência", value: "52 cc / 1,9 HP — Motor 2 Tempos" },
      { label: "Rotação Máxima", value: "Até 13.000 RPM em vazio" },
      { label: "Estrutura da Haste", value: "Tubo Bipartido com engate central" },
      { label: "Conforto", value: "Sistema antivibratório + Guidão duplo" },
      { label: "Acessórios de Série", value: "Carretel de nylon + Lâmina 3 pontas + Misturador + Cinto" }
    ],
    paragraphs: [
      "A Intech Machine SKIM5100 surge como outra alternativa ágil de baixo investimento para quem precisa de uma roçadeira 52 cc de eixo bipartido para terrenos médios.",
      "Com motor de 1,9 HP que alcança rotações livres de até 13.000 RPM, ela garante velocidade de ponta no fio de nylon para aparar gramados altos e capim fino com acabamento limpo.",
      "Seu tubo divisível facilita o armazenamento em garagens pequenas, enquanto o conjunto antivibratório ajuda a preservar o conforto das mãos.",
      "Fique atento na oficina: como toda máquina importada com engate central, encaixe sempre a metade inferior até o pino trava clicar no furo guia e mantenha a união bem apertada para evitar folgas estruturais."
    ],
    pros: [
      "Excelente agilidade no transporte e armazenamento graças ao tubo bipartido",
      "Rotação elevada que favorece o corte rápido com fio de nylon",
      "Sistema antivibração bem posicionado para uso residencial e rural leve",
      "Kit completo de acessórios incluso na caixa por preço reduzido"
    ],
    cons: [
      "Exige reaperto frequente dos parafusos da luva central bipartida",
      "Torque em mato pesado é inferior ao da Toyama TBC52X-GII e TBC63"
    ]
  },
  {
    id: "alternativa-vulcan-trent-vr520h",
    productId: "rocadeira-lateral-a-gasolina-vulcan-trent-vr520h-52cc-2-5hp-2t",
    rank: "3. Roçadeira a Gasolina – Vulcan Trent VR520H (52 cc / 2,5 HP)",
    shortName: "Vulcan Trent VR520H (52 cc / 2,5 HP)",
    category: "Melhor Alternativa de Eixo Rígido 2,5 HP (9 Estrias)",
    score: "9.4",
    badge: "Rival Direta em Força (2,5 HP)",
    subtitle: "Supera as 52cc de 1,9/2,0 HP da Toyama na potência declarada (2,5 HP) com transmissão rígida de 9 estrias e partida leve Easy Start.",
    image: "/images/blog/Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t.webp",
    thumb: "/images/blog/thumbs/Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t-thumb.webp",
    isAlternative: true,
    specs: [
      { label: "Cilindrada e Potência", value: "52 cc / 2,5 HP — Motor 2 Tempos" },
      { label: "Transmissão", value: "Tubo inteiriço 28 mm + Eixo rígido de 9 estrias" },
      { label: "Ignição e Partida", value: "Ignição eletrônica CDI + Arrancador com mola Easy Start" },
      { label: "Capacidade do Tanque", value: "1,2 Litro" },
      { label: "Acessórios de Série", value: "Faca 3 pontas + Carretel nylon + Cinto duplo almofadado" }
    ],
    paragraphs: [
      "A Vulcan Trent VR520H é a rival direta mais forte da Toyama TBC52H e RT52L para quem prioriza torque bruto de 2,5 HP em áreas de vegetação densa.",
      "Seu grande trunfo mecânico está na transmissão inteiriça de 28 mm com eixo cardã rígido de 9 estrias, que transfere toda a força do motor de 52 cc para a lâmina com alta resistência a impactos e compatibilidade universal com implementos agrícolas.",
      "Além disso, o sistema de ignição CDI combinado com a partida retrátil Easy Start torna o arranque a frio muito mais macio no braço.",
      "Lembre-se apenas de que os 2,5 HP cobram um consumo de combustível proporcional ao desempenho sob carga máxima, exigindo planejamento do galão de mistura 2 tempos para jornadas longas."
    ],
    pros: [
      "Potência elevada de 2,5 HP em motor 52 cc (0,5 HP acima da TBC52H)",
      "Transmissão rígida reforçada de 28 mm com 9 estrias de alta durabilidade",
      "Partida leve Easy Start e cinto duplo com ótimo apoio lombar",
      "Ampla disponibilidade de peças Vulcan em todo o território nacional"
    ],
    cons: [
      "Consumo de combustível mais acentuado quando exigida em rotação máxima",
      "Exige lubrificação rigorosa da mistura 2T e da ponteira a cada 25 horas"
    ]
  }
];

const allVitrineModels: BrushcutterModelReview[] = [...toyamaReviews, ...alternativeReviews];

// ============================================================================
// COMPONENTE PRINCIPAL DO ARTIGO: ROÇADEIRA TOYAMA É BOA?
// ============================================================================
export const RocadeiraToyamaEBoa: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>("frequenteSitio");
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
    frequenteSitio: {
      title: "Manutenção Frequente de Sítios e Chácaras (Mais Equilibrada)",
      modelName: "Toyama TBC52X-GII (51,6 cc) ou TBC43X-GII (42,7 cc)",
      anchor: "#toyama-tbc52x-gii",
      reason:
        "A Linha X-GII traz o casulo antivibração reforçado, tubo de 28 mm e filtro de ar duplo para quem roça toda semana sem sofrer com formigamento nas mãos.",
      specHighlight: "Série X-GII (Uso Frequente) • Tubo 28 mm • Antivibração Pro"
    },
    pastoPesado63cc: {
      title: "Pasto Sujo Fechado, Colonião Alto + Função Motopoda",
      modelName: "Toyama TBC63 Profissional (63,3 cc / 3,5 HP)",
      anchor: "#toyama-tbc63",
      reason:
        "Entrega a maior potência bruta da marca (3,5 HP reais em 63,3 cc) e já vem com disco de 80 dentes e implemento motopoda para desbaste pesado e poda de galhos.",
      specHighlight: "63,3 cc • 3,5 HP • Kit Multifuncional com Motopoda"
    },
    chacaraEconomica: {
      title: "Uso Ocasional de Fim de Semana com Menor Preço (Linha H e RT)",
      modelName: "Toyama TBC43H (42,7 cc), TBC52H (51,6 cc) ou RT43L",
      anchor: "#toyama-tbc43h",
      reason:
        "Perfeitas para o dono de terreno ou chácara que limpa o mato a cada 15 ou 30 dias e quer motor forte com peças baratas sem pagar o preço da linha profissional.",
      specHighlight: "Série H / RT • Excelente Custo-Benefício • Kit Completo"
    },
    alternativasMelhores: {
      title: "Quando as Alternativas Vencem (Transporte Leve Bipartido ou 2,5 HP em 52cc)",
      modelName: "Vulcan Trent VR520H (2,5 HP Rígida) ou Carbon Fak FAK520RB (7,6 kg Bipartida)",
      anchor: "#alternativa-vulcan-trent-vr520h",
      reason:
        "Se você quer mais potência declarada numa 52cc de eixo rígido (2,5 HP com partida Easy Start), a Vulcan VR520H supera a TBC52H; já se precisa de uma bipartida mais leve (7,6 kg) e barata que a TBC52SX para levar no porta-malas, a Carbon Fak FAK520RB e a Intech SKIM5100 levam vantagem.",
      specHighlight: "Vulcan 2,5 HP (9 Estrias) • Carbon Fak 7,6 kg Bipartida"
    }
  };

  const currentSim = simProfiles[selectedProfile];

  const faqList = [
    {
      q: "O que define a roçadeira Toyama ideal (Linha H, Linha X ou Linha RT)?",
      a: [
        "O segredo da Toyama está na letra do código do modelo: a Linha RT e a Linha H (como RT43L, TBC43H e TBC52H) são projetadas para uso ocasional e periódico em quintais, lotes e chácaras, com foco em baixo preço de compra.",
        "Já a Linha X-GII (como TBC43X-GII e TBC52X-GII) e a TBC63 trazem amortecimento reforçado, tubo de 28 mm e filtragem dupla para suportar jornadas frequentes e mato pesado com muito menos vibração."
      ]
    },
    {
      q: "Qual é a roçadeira mais potente da Toyama atualmente?",
      a: [
        "Atualmente, a Toyama TBC63 ocupa o topo absoluto de força bruta da marca no Brasil, equipada com motor 2 tempos de 63,3 cilindradas e 3,5 HP de potência máxima."
      ]
    },
    {
      q: "Que tipo de combustível e proporção de óleo 2 tempos usar na roçadeira Toyama?",
      a: [
        "Utilize sempre gasolina comum fresca (nunca guardada por mais de 15 a 20 dias) misturada na proporção exata de 25:1 (40 ml de óleo 2T mineral por litro de gasolina) ou 40:1/50:1 caso utilize óleo semissintético JASO FD de alta performance conforme o manual do lote.",
        "Ignorar essa medida no copo dosador é a causa número um de motores fundidos por falta de lubrificação."
      ]
    },
    {
      q: "Por que algumas roçadeiras Toyama têm reclamações na internet?",
      a: [
        "Na bancada da oficina, 8 em cada 10 reclamações de roçadeiras Toyama ocorrem por dois erros de uso: comprar um modelo doméstico da Linha H para trabalhar 8 horas por dia em empreita profissional ou deixar gasolina velha apodrecer dentro do carburador.",
        "Quando você escolhe a série certa para a sua carga de trabalho e usa óleo 2T de qualidade, o motor Toyama roda anos com manutenção muito barata."
      ]
    },
    {
      q: "Vale a pena comprar a Toyama TBC52SX de eixo bipartido ou uma alternativa como Vulcan e Carbon Fak?",
      a: [
        "Se você precisa transportar a máquina no porta-malas de um carro compacto, a Toyama TBC52SX e a alternativa Carbon Fak FAK520RB (mais leve, com 7,6 kg) são imbatíveis pela haste divisível.",
        "Já se a máquina vai ficar direto no sítio e você quer eixo inteiriço rígido para pancada pesada com lâmina, prefira a Toyama TBC52X-GII ou a alternativa Vulcan Trent VR520H de 2,5 HP."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura Carlos Henrique)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/rocadeira-toyama-e-boa.webp"
            alt="Operador rural equipado com EPIs completos cortando braquiária alta com roçadeira lateral a gasolina Toyama"
            title="Roçadeira Toyama é Boa? Análise Técnica dos 8 Melhores Modelos e 3 Alternativas"
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
            Raio-X de Oficina & Custo-Benefício
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Roçadeira Toyama é Boa? Vale a Pena?{' '}
            <span className="text-[#16A34A]">Veja os 8 Melhores Modelos e 3 Alternativas</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Desmontamos a diferença real entre as linhas H, X e RT da Toyama, avaliamos os 8 principais modelos de 43cc a 63cc e comparamos com 3 rivais diretas (Carbon Fak, Intech Machine e Vulcan Trent).
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
            Manter sítios, chácaras e lotes em ordem exige uma máquina que alie torque no corte, peças fáceis de achar e preço justo, mas é natural sentir dúvida diante de tantos códigos parecidos no catálogo da mesma fabricante.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Descobrir se a roçadeira Toyama é boa para a sua rotina passa primeiro por entender que a marca divide suas máquinas em séries de uso ocasional (RT e H) e séries de uso frequente ou pesado (X-GII e TBC63).
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quando o comprador acerta nessa escolha, leva para o galpão uma das mecânicas de melhor custo-benefício do Brasil — presença garantida no nosso ranking geral da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira para comprar
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, analisamos na bancada os 8 modelos mais procurados da Toyama e também testamos 3 alternativas concorrentes que vencem em leveza bipartida ou potência bruta de 2,5 HP.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO (INCLUINDO OPÇÃO ONDE AS ALTERNATIVAS VENCEM)
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual Toyama (ou Alternativa) Escolher?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Clique no seu perfil de terreno ou prioridade de compra para ver o diagnóstico imediato:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedProfile("frequenteSitio")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "frequenteSitio"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🚜 Uso Frequente em Sítios (Menos Vibração — Série X)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("pastoPesado63cc")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "pastoPesado63cc"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🌳 Mato Pesado + Motopoda (Força Máxima 63,3 cc / 3,5 HP)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("chacaraEconomica")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "chacaraEconomica"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              🏡 Chácara e Fim de Semana (Menor Preço — Série H e RT)
            </button>

            <button
              type="button"
              onClick={() => setSelectedProfile("alternativasMelhores")}
              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all border ${
                selectedProfile === "alternativasMelhores"
                  ? "bg-[#15803d] text-white border-[#4ade80] shadow-md"
                  : "bg-slate-800/80 text-gray-200 border-slate-600 hover:bg-slate-700"
              }`}
            >
              ⚡ Quando as Alternativas Vencem (Bipartida Leve 7,6kg ou 2,5 HP)
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
              <span>Ver Análise Técnica Abaixo</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            4. ROÇADEIRA TOYAMA É BOA E CONFIÁVEL? (ENTENDA AS LINHAS H, X E RT)
            =================================================================== */}
        <section className="my-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Roçadeira Toyama é Boa e Confiável?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Sim, a roçadeira Toyama é boa e confiável porque sua inteligência de mercado reside na segmentação transparente do catálogo em famílias específicas: Linha RT e Linha H (uso ocasional), Linha X-GII (uso frequente) e linha pesada de alta cilindrada (TBC63).
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Compreender essa sopa de letrinhas é o maior filtro para evitar frustrações, já que 90% das queixas na oficina nascem quando o usuário compra uma máquina doméstica da série H e exige dela o regime severo de uma empreiteira rodoviária.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Ao alinhar a série da máquina e a potência do motor à densidade da vegetação — veja nosso guia de bancada sobre{' '}
              <a href="/qual-a-melhor-cilindrada-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                qual a melhor cilindrada para roçadeira
              </a>
              —, você reduz drasticamente o desgaste prematuro de embreagem e pistão, garantindo anos de trabalho com peças baratas em qualquer cidade brasileira.
            </p>
          </div>
        </section>

        {/* ===================================================================
            5. VITRINE COMPARATIVA RÁPIDA (8 TOYAMA + 3 ALTERNATIVAS)
            =================================================================== */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 tracking-tight border-l-4 border-[#16A34A] pl-4">
            Vitrine Comparativa: 8 Modelos Toyama + 3 Alternativas Diretas
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
                {allVitrineModels.map((item) => {
                  const affiliateUrl = products[item.productId]?.link || "#";
                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-gray-50 transition-colors ${
                        item.isAlternative ? "bg-amber-50/30" : ""
                      }`}
                    >
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
                        {item.isAlternative && (
                          <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-black uppercase px-2 py-0.5 rounded mb-1">
                            Alternativa Concorrente
                          </span>
                        )}
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
            6. ANÁLISE DOS 8 MODELOS DE ROÇADEIRA TOYAMA
            =================================================================== */}
        <div className="mt-16 mb-8">
          <span className="text-[#166534] font-black text-xs uppercase tracking-widest block mb-1">
            Avaliação Individual de Bancada
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
            Análise dos 8 Modelos de Roçadeira Toyama
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
            Descascamos cada especificação técnica abaixo para que você identifique qual máquina suporta a carga de vegetação do seu terreno sem pagar por potência excedente:
          </p>
        </div>

        <div className="space-y-16">
          {toyamaReviews.map((review, idx) => (
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
                      <Check size={18} className="text-[#16A34A] shrink-0" /> Prós
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                      {review.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <AlertTriangle size={18} className="text-red-600 shrink-0" /> Contras
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

              {/* Banner do Meio após o 4º modelo */}
              {idx === 3 && (
                <div className="my-12 flex justify-center">
                  <BunnerDoMeiorocadeira />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ===================================================================
            7. QUAL ROÇADEIRA TOYAMA ESCOLHER PARA CADA NECESSIDADE? (TABELA)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Qual Roçadeira Toyama Escolher para Cada Necessidade?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para acertar em cheio na compra, você precisa cruzar o tamanho e a frequência do seu serviço com a vocação mecânica de cada linha da marca.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Se a tarefa é a manutenção leve e esporádica de quintais ou chácaras pequenas, modelos da linha H e RT (como a TBC43H e a RT43L) equilibram preço baixo e entrega honesta sem pesar no bolso.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Já para o uso recorrente em sítios, a TBC43X-GII e a TBC52X-GII oferecem a blindagem antivibração necessária para jornadas frequentes, enquanto a TBC63 domina o pasto fechado — e se o seu terreno for um barranco íngreme, considere também a versão de mochila que analisamos no guia da{' '}
              <a href="/melhor-rocadeira-costal" className="text-[#166534] font-semibold hover:underline">
                melhor roçadeira costal (incluindo a Toyama TBC43BX)
              </a>
              :
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Cenário de Aplicação</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Sugestão de Equipamento</th>
                  <th className="p-3.5 sm:p-4">Fatores Técnicos de Decisão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cuidados esporádicos em quintais e chácaras</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Toyama TBC43H</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Ótimo custo-benefício com kit completo para uso não diário</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Trabalhos de corte rotineiros e semanais</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Toyama TBC43X-GII</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Conforto antivibração, filtro duplo e baixo consumo em 42,7 cc</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Manutenção recorrente em áreas rurais e sítios</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Toyama TBC52X-GII</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Fôlego de 51,6 cc com tubo rígido de 28 mm e casulo antivibração</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Vegetação de alta densidade + Poda de galhos</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">
                    <a href="/rocadeira-toyama-tbc63-e-boa" className="hover:underline">
                      Toyama TBC63 (3,5 HP)
                    </a>
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Força máxima de 63,3 cc com disco de 80 dentes e motopoda</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Demandas pontuais com motor de 52 cc barato</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Toyama TBC52H</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Torque de 2,0 HP com preço acessível da Série H</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Viabilidade financeira e leveza operacional</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">
                    Toyama RT43L e{' '}
                    <a href="/rocadeira-toyama-rt52l-e-boa" className="hover:underline">
                      RT52L
                    </a>
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Mecânica simplificada e peso reduzido (~8 kg na RT43L e RT52L)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Transporte fácil no porta-malas de carro compacto</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Toyama TBC52SX Two Box</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Haste bipartida divisível ao meio com motor de 51,6 cc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            8. COMO SABER SE A ROÇADEIRA TOYAMA É BOA? (OS 5 PILARES TÉCNICOS)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Como Saber se a Roçadeira Toyama é Boa para o Seu Perfil?
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Avaliar a engenharia aplicada ao campo exige observar cinco pilares que determinam o comportamento da máquina na prática:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                1. Alimentação e Mistura 2 Tempos
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                O coração da sua Toyama é o motor 2 tempos, cuja longevidade depende 100% da precisão na mistura entre gasolina fresca e lubrificante — veja nosso guia exclusivo sobre{' '}
                <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
                  qual o melhor óleo para roçadeira Toyama
                </a>
                .
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Evite estocar gasolina misturada no galão por mais de 15 dias, pois o combustível oxida, entope as membranas do carburador e compromete a lubrificação do pistão.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Sparkles size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                2. Potência Alinhada à Vegetação
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Mais cilindradas nem sempre significam um trabalho melhor: para gramados e jardins planos, motores leves ou mesmo equipamentos sem gasolina (confira o comparativo{' '}
                <a href="/rocadeira-eletrica-ou-a-gasolina" className="text-[#166534] font-semibold hover:underline">
                  roçadeira elétrica ou a gasolina
                </a>
                ) cansam muito menos.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Já em capim alto e pasto sujo, os modelos de 42,7 cc, 51,6 cc e 63,3 cc da Toyama mantêm o torque constante sem deixar a embreagem patinar e superaquecer.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Check size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                3. Tipos de Lâmina Compatíveis
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Toda a linha lateral Toyama utiliza ponteira com furo padrão universal de 25,4 mm (1 polegada): facas de 2 pontas rendem cortes rápidos em capim macio, lâminas de 3 pontas trituram braquiária embolada e o disco de 40 ou 80 dentes de vídea derruba arbustos lenhosos.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Consulte nosso ranking da{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor lâmina e disco para roçadeira
                </a>{' '}
                para escolher a espessura certa para o seu motor.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <ShieldAlert size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                4. Ergonomia e Cinto de Sustentação
              </h3>
              <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                O uso correto do colete duplo de dois ombros é o divisor de águas na operação: quando você ajusta o gancho lateral na altura do quadril, a máquina fica equilibrada como uma gangorra e os braços apenas guiam a varredura.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Para jornadas superiores a 3 horas por dia, prefira sempre o sistema antivibração da Série X-GII (TBC43X-GII e TBC52X-GII).
              </p>
            </div>
          </div>

          {/* 5. Fio de nylon ou lâmina? */}
          <div className="bg-[#F0FDF4] p-6 sm:p-8 rounded-2xl border border-[#16A34A]/30">
            <h3 className="text-xl font-bold text-[#166534] mb-3">
              5. Fio de Nylon ou Lâmina Metálica: Quando Usar Cada Um na Toyama?
            </h3>
            <p className="mb-4 text-sm sm:text-base text-gray-800 leading-relaxed">
              Utilize sempre o cabeçote com{' '}
              <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                fio de nylon de 2,4 mm a 3,0 mm
              </a>{' '}
              para acabamentos em gramados, beiras de calçadas, muros, cercas de arame e terrenos com pedras escondidas, pois o polímero absorve o chicote sem quebrar a transmissão.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Quando entrar em capim alto aberto, inverta para a faca de aço (veja o passo a passo de{' '}
              <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como trocar a lâmina da roçadeira
              </a>
              ) e jamais improvise correntes ou discos não homologados sem a saia de proteção original.
            </p>
          </div>
        </section>

        {/* ===================================================================
            9. VANTAGENS E DESVANTAGENS + RECLAMAÇÕES + ASSISTÊNCIA + TOYAMA VS STIHL
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Vantagens e Desvantagens das Roçadeiras Toyama
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
                <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <Check size={20} className="text-[#16A34A] shrink-0" /> Vantagens da Marca
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#166534] list-disc list-inside leading-relaxed">
                  <li>Catálogo amplo e bem dividido entre uso ocasional (H/RT) e frequente (X-GII/63cc).</li>
                  <li>Peças de reposição (carburador, bobina, partida, pistão) fartas e muito baratas.</li>
                  <li>Kits generosos que já incluem lâmina metálica, carretel de nylon e cinto duplo.</li>
                  <li>Excelente custo-benefício frente às marcas europeias para sítios e chácaras.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                  <AlertTriangle size={20} className="text-amber-700 shrink-0" /> Desvantagens a Considerar
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950 list-disc list-inside leading-relaxed">
                  <li>Modelos de entrada (Linha H e RT) não suportam regime profissional diário de 8h.</li>
                  <li>Peso das versões de 52 cc e 63 cc é ligeiramente superior ao das equivalentes Stihl.</li>
                  <li>Carretel de nylon básico dos kits de entrada pede upgrade futuro para versão Easy Load.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reclamações e Assistência Técnica */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Roçadeira Toyama Dá Muito Problema? E a Assistência Técnica?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Ao pesquisar relatos em fóruns, é importante filtrar a origem mecânica das reclamações: a maioria esmagadora dos defeitos apontados nos primeiros meses decorre de mistura incorreta de óleo 2T, afogamento na partida a frio ou falta de graxa na ponteira.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por possuir uma das redes de assistências técnicas autorizadas mais capilares do Brasil — além de compartilhar medidas universais de mecânica 43cc e 52cc —, qualquer oficina de máquinas agrícolas conserta uma Toyama no mesmo dia sem deixar você esperando peças importadas.
              </p>
            </div>
          </div>

          {/* Toyama ou Stihl */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Toyama ou STIHL: Qual Vale Mais a Pena?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Comparar Toyama e STIHL é um exercício de retorno sobre o capital investido: enquanto uma Stihl FS 160 ou FS 220 custa cerca de duas a três vezes mais e foi projetada para empreiteiros que rodam 8 a 10 horas diárias todos os dias do ano, a Toyama entrega a solução mais inteligente para 80% dos donos de sítios, chácaras e prestadores de serviço de porte médio.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Confira a comparação direta na bancada:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Critério Comparativo</th>
                    <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeiras Toyama (Linha H / X / 63cc)</th>
                    <th className="p-3.5 sm:p-4">Roçadeiras STIHL (FS 160 / FS 220)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Investimento Inicial</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Acessível (custa de 35% a 50% do valor de uma Stihl equivalente)</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Elevado (foco corporativo e florestal intensivo)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Custo das Peças</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Muito barato e amplamente disponível na internet e oficinas</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Peças originais de altíssima durabilidade, porém mais caras</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Padrão de Furo de Lâmina</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Universal 25,4 mm (1 polegada) em toda a linha</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">20 mm na FS 160/220/280 ou 25,4 mm nos modelos modernos</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-gray-900">Para Quem Vale Mais a Pena</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Donos de sítios, chácaras, fazendas e jardineiros autônomos</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">Equipes de rodovias, prefeituras e roçada diária de 8h+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PONTOS DE ATENÇÃO E MANUTENÇÃO: COMO AUMENTAR A VIDA ÚTIL
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Manutenção e Uso Intenso: Como Aumentar a Vida Útil da Roçadeira Toyama
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Sob uso intenso, a roçadeira deixa de ser uma ferramenta eventual para se tornar um ativo de produção sujeito a estresse térmico constante.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Seguir um cronograma preventivo simples na bancada evita 95% das paradas inesperadas no meio da empreita:
              </p>
            </div>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/manutencao-rocadeira-toyama.webp"
              alt="Bancada de oficina com motor de roçadeira Toyama 2 tempos com filtro de ar aberto, vela de ignição, frasco dosador de combustível e ponteira de transmissão"
              title="Manutenção preventiva de roçadeira Toyama: filtro de ar, vela, mistura 2T e graxa na ponteira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Checklist de bancada: filtro de ar limpo, vela na cor caramelo, dosador graduado e graxa de lítio na ponteira dobram a vida útil do motor Toyama.
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                1. Engraxe a Ponteira a Cada 20–25h
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Abra o bujão lateral da caixa de engrenagens e injete 5g a 10g da{' '}
                <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor graxa para roçadeira (lítio para transmissão)
                </a>{' '}
                para impedir que o pinhão rode seco em alta rotação.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                2. Partida a Frio e Carburador Seco
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Volte o afogador assim que o motor der o primeiro sinal para não precisar{' '}
                <a href="/como-desafogar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  desafogar a roçadeira
                </a>{' '}
                e esgote a gasolina do carburador se for guardar a máquina por mais de 15 dias (evitando ter que{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  regular o carburador
                </a>
                ).
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                3. Lâmina Afiada e Carretel Limpo
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Mantenha a faca balanceada seguindo o guia de{' '}
                <a href="/como-amolar-disco-de-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como amolar disco de roçadeira
                </a>{' '}
                para cortar com metade da aceleração e poupar a embreagem centrífuga.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            11. ALTERNATIVAS ÀS ROÇADEIRAS TOYAMA (3 MODELOS CONCORRENTES)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="mb-8">
            <span className="text-amber-800 font-black text-xs uppercase tracking-widest block mb-1">
              Concorrência Direta na Bancada
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Alternativas às Roçadeiras Toyama: 3 Modelos que Se Destacam
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
              Caso você busque uma máquina de eixo bipartido ainda mais leve e barata para levar no porta-malas, ou queira um motor de 52 cc com 2,5 HP declarados e partida assistida Easy Start, vale avaliar estas 3 concorrentes diretas:
            </p>
          </div>

          <div className="space-y-14">
            {alternativeReviews.map((alt) => (
              <div
                key={alt.id}
                id={alt.id}
                className="scroll-mt-24 bg-amber-50/20 rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full">
                    {alt.badge}
                  </span>
                  <span className="text-xs font-bold text-[#166534] bg-green-50 px-3 py-1 rounded-full">
                    Nota Técnica: {alt.score} / 10
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2">
                  {alt.rank}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 italic mb-6">
                  {alt.subtitle}
                </p>

                <div className="my-6 flex justify-center bg-white rounded-2xl p-6 border border-gray-100">
                  <img
                    src={alt.image}
                    alt={alt.shortName}
                    title={alt.rank}
                    width={500}
                    height={500}
                    className="max-h-[340px] w-auto object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg text-gray-700 max-w-none my-6">
                  {alt.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 my-6">
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-3">
                    Ficha Técnica Principal
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {alt.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <dt className="text-gray-500 font-semibold text-xs">{spec.label}</dt>
                        <dd className="text-gray-900 font-bold mt-0.5">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
                    <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Check size={18} className="text-[#16A34A] shrink-0" /> Prós
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                      {alt.pros.map((pro, proIdx) => (
                        <li key={proIdx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <AlertTriangle size={18} className="text-red-600 shrink-0" /> Contras
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                      {alt.cons.map((con, conIdx) => (
                        <li key={conIdx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="my-6">
                  <AffiliateCard id={alt.productId as any} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            12. BANNER DE CROSS-SELL (INSUMOS ORIGINAIS TOYAMA)
            =================================================================== */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#166534] font-black text-xs uppercase tracking-wider block mb-1">
              Acessórios e Lubrificantes Homologados
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Complete Seu Kit Toyama para Rodar Sem Dor de Cabeça
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Três itens originais que protegem o motor 2 tempos, a caixa de transmissão e turbinam a velocidade de corte da sua roçadeira:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Óleo 2T Jaso Toyama 500ml */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Lubrificação Original 2T
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Óleo Para Motores 2t Jaso Toyama 500ml.webp"
                    alt="Óleo Para Motores 2T Jaso Toyama 500ml"
                    title="Óleo 2 Tempos Original Toyama 500ml"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Óleo 2T Jaso Toyama (500ml)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Formulação oficial para manter pistão, anéis e cilindro das linhas TBC e RT livres de carvão e superaquecimento.
                </p>
              </div>
              <a
                href={products["oleo-para-motores-2t-jaso-toyama-500ml"]?.link || "https://meli.la/1ufrroe"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: Carretel Toyama Easy Load Automático */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Recarga Rápida Sem Abrir
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Carretel Toyama Easy Load Automático para Roçadeira.webp"
                    alt="Carretel Toyama Easy Load Automático para Roçadeira"
                    title="Cabeçote Easy Load Original Toyama Rosca M10x1,25"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Carretel Toyama Easy Load Automático
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  O melhor upgrade para qualquer roçadeira Toyama (rosca M10 x 1,25): permite colocar o fio de nylon em 30 segundos sem desmontar.
                </p>
              </div>
              <a
                href={products["carretel-toyama-easy-load-automatico-para-rocadeira"]?.link || "https://meli.la/2FiNTvX"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors uppercase tracking-tight"
              >
                <span>Ver Preço</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Desbaste de Arbustos
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h-thumb.webp"
                    alt="Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama"
                    title="Disco de Serra 40 Dentes Vídea Furo 25,4mm para Toyama"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Disco 40 Dentes Vídea 255mm P/ Toyama
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Furo padrão de 25,4 mm sob medida para as linhas 43cc, 52cc e 63cc cortarem talos grossos, mamona e rebentos lenhosos.
                </p>
              </div>
              <a
                href={products["disco-40-dentes-videa-255mm-para-rocadeira-toyama-tbc52h"]?.link || "https://meli.la/16ZY8sz"}
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
            13. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Roçadeira Toyama
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
            14. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DE OFICINA + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Roçadeira Toyama Vale a Pena?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Sim, a roçadeira Toyama vale muito a pena quando você escolhe a série compatível com o seu ritmo de trabalho: para quem roça sítios com frequência e quer conforto nos braços, a TBC52X-GII e a TBC43X-GII entregam durabilidade real por anos, enquanto a TBC63 resolve o desbaste pesado com 3,5 HP e motopoda.
              </p>
              <p className="mb-4 leading-relaxed">
                Já se o seu objetivo é limpar a chácara nos finais de semana gastando pouco, a linha de entrada TBC43H, TBC52H, RT43L e RT52L cumpre a missão com peças baratas — e caso você precise de eixo bipartido para o porta-malas ou queira avaliar rivais diretas, a Toyama TBC52SX, a Carbon Fak FAK520RB e a Vulcan Trent VR520H completam o leque.
              </p>
              <p className="mb-0 leading-relaxed">
                Escolha o modelo que fala a língua do seu terreno, capriche na mistura 2 tempos no dosador e tenha uma máquina pronta para qualquer roçada!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Segredo de Oficina do Carlos Henrique */}
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
              Segredo de Oficina do Carlos Henrique: O Amaciamento dos 3 Primeiros Tanques na Toyama
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Quando uma roçadeira Toyama zero-quilômetro sai da caixa, os anéis de segmento ainda estão se moldando à camisa cromada do cilindro.
              </p>
              <p className="mb-0">
                Nos 3 primeiros tanques de gasolina, nunca trave o gatilho do acelerador em 100% por vários minutos seguidos nem coloque disco pesado em arbusto grosso: trabalhe apenas com carretel de nylon ou capim macio variando a rotação (dois terços de acelerador) e confira o aperto dos 4 parafusos Allen da base do cilindro e da embreagem após o primeiro dia — isso faz o motor Toyama durar o dobro do tempo sem perder compressão.
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

export default RocadeiraToyamaEBoa;
