import React, { useState } from 'react';
import { BunnerDoMeiofiodenylonpararocadeira } from './BunnerDoMeiofiodenylonpararocadeira';
import { ExitIntentPopupfiodenylonpararocadeira } from './ExitIntentPopupfiodenylonpararocadeira';
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

const Lightbulb = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const Sparkles = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const ArrowRight = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ExternalLink = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const MelhorCarretelRocadeira: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>('stihl-pesada');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 6 Produtos Principais Revisados
  const carretelReviews = [
    {
      id: 'stihl-autocut-46-2',
      productId: 'cabecote-de-corte-autocut-p-rocadeiras-46-2-sthil',
      shortName: 'Stihl AutoCut 46-2 Original',
      rank: '🏆 1. Cabeçote de Corte Stihl AutoCut 46-2 – A Força Bruta para Máquinas Pesadas',
      exactImageName: 'Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil',
      image: '/images/blog/Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil.webp',
      thumb: '/images/blog/thumbs/Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil.webp',
      badge: 'Melhor para Roçadeiras Pesadas (Stihl Grande)',
      score: '9.9',
      perfil: 'Máquinas Stihl potentes (FS 160, 220, 290 a 460)',
      rosca: 'M12x1,5 mm Esquerda',
      fioMax: 'Até 3,3 mm',
      tipo: 'Bate-Libera Reforçado Profissional',
      paragraphs: [
        'Para quem opera roçadeiras Stihl de alta cilindrada como FS 160, FS 220, FS 290, FS 300, FS 350 e FS 460, o AutoCut 46-2 é a maior referência em resistência na lida pesada.',
        'Seu sistema semiautomático bate-libera solta a linha com um toque leve no chão em plena aceleração, mantendo o ritmo de trabalho firme em pastos grandes e vegetação densa.',
        'Projetado para trabalhar com fios robustos de 2,7 mm até 3,3 mm, ele suporta o tranco de capoeira fechada sem trepidar ou desbalancear a ponteira.',
        'O investimento inicial é superior ao de modelos paralelos, mas o balanceamento de fábrica e a durabilidade da carcaça compensam cada centavo no uso semanal contínuo.'
      ],
      specs: [
        { label: 'Encaixe da Rosca', value: 'M12 x 1,5 mm Esquerda (Original Stihl)' },
        { label: 'Espessura de Fio Aceita', value: 'De 2,7 mm até 3,3 mm' },
        { label: 'Diâmetro do Cabeçote', value: 'Grande (Linha Profissional)' },
        { label: 'Mecanismo de Liberação', value: 'Semiautomático por Toque no Solo' },
        { label: 'Compatibilidade Oficial', value: 'Stihl FS 160, 220, 290, 300, 350, 460' }
      ],
      pros: [
        'Estrutura ultra resistente projetada para roçadeiras profissionais.',
        'Aceita fios de calibre grosso até 3,3 mm sem travar nos ilhoses metálicos.',
        'Balanceamento perfeito de fábrica que elimina vibrações na haste.',
        'Alta durabilidade da base mesmo em contato com solo abrasivo.'
      ],
      cons: [
        'Preço superior ao de opções genéricas multimarcas.',
        'Compatível apenas com roçadeiras de eixo grosso padrão Stihl M12.'
      ],
      criteria: [
        { name: 'Resistência ao Impacto em Mato Denso', grade: '9.9' },
        { name: 'Balanceamento e Zero Vibração', grade: '9.9' },
        { name: 'Capacidade para Fios Grossos (3,3mm)', grade: '9.8' },
        { name: 'Durabilidade da Base Plástica', grade: '9.8' }
      ]
    },
    {
      id: 'stihl-autocut-c-26-2',
      productId: 'cabecote-carretel-autocut-26-2-rocadeira-stihl',
      shortName: 'Stihl AutoCut C 26-2 / C 27-2',
      rank: '⚡ 2. Cabeçote Stihl AutoCut C 26-2 – Praticidade de Recarga em Roçadeiras Médias',
      exactImageName: 'Cabeçote Carretel Autocut 26-2 Roçadeira Stihl',
      image: '/images/blog/Cabeçote Carretel Autocut 26-2 Roçadeira Stihl.webp',
      thumb: '/images/blog/thumbs/Cabeçote Carretel Autocut 26-2 Roçadeira Stihl.webp',
      badge: 'Melhor para Acabamento e Roçadeiras Médias',
      score: '9.8',
      perfil: 'Roçadeiras Stihl médias (FS 55, 80, 85, 120 e 250)',
      rosca: 'M10x1,0 mm Esquerda',
      fioMax: 'Até 2,7 mm',
      tipo: 'Semiautomático com Recarga Externa Comfort (C)',
      paragraphs: [
        'Voltado para roçadeiras Stihl de porte intermediário como FS 55, FS 80, FS 85, FS 120 e FS 250, o AutoCut C 26-2 é o grande favorito para limpeza sob cercas e contornos de muros.',
        'A letra C no nome representa o recurso Comfort, que permite recarregar o fio por fora girando o manípulo sem precisar abrir a carcaça nem correr o risco de perder a mola interna no capim.',
        'Aceita fios de corte de até 2,7 mm e entrega uma liberação macia ao tocar o chão com o motor acelerado.',
        'Vale pontuar que a Stihl atualizou essa linha para o modelo C 27-2 mantendo a mesma compatibilidade, sendo frequente receber essa versão moderna nas revendas.'
      ],
      specs: [
        { label: 'Encaixe da Rosca', value: 'M10 x 1,0 mm Esquerda (Padrão Stihl Médio)' },
        { label: 'Espessura de Fio Aceita', value: 'De 2,0 mm até 2,7 mm' },
        { label: 'Sistema de Recarga', value: 'Externo Comfort (sem abrir a carcaça)' },
        { label: 'Mecanismo de Liberação', value: 'Bate-Libera Calibrado' },
        { label: 'Aplicação Típica', value: 'Jardinagem, canteiros e acabamentos limpos' }
      ],
      pros: [
        'Recarga rápida externa sem desmontar tampas ou manusear molas soltas.',
        'Conjunto leve que não amarra o motor de máquinas intermediárias.',
        'Liberação suave com mínimo esforço de contato no solo.',
        'Facilidade para encontrar peças de reposição e carretéis originais.'
      ],
      cons: [
        'Linha em transição comercial para a versão sucessora C 27-2.',
        'Base de apoio desgasta rápido se arrastada continuamente em pedriscos.'
      ],
      criteria: [
        { name: 'Agilidade de Recarga (EasySpool)', grade: '9.9' },
        { name: 'Manobrabilidade em Acabamentos', grade: '9.8' },
        { name: 'Resposta do Sistema Bate-Libera', grade: '9.8' },
        { name: 'Custo-Benefício para Máquinas Médias', grade: '9.6' }
      ]
    },
    {
      id: 'toyama-easy-load-130mm',
      productId: 'carretel-toyama-easy-load-automatico-para-rocadeira',
      shortName: 'Toyama Easy Load 130 mm (1301-097)',
      rank: '🚀 3. Carretel Toyama Easy Load 130 mm – O Campeão de Custo-Benefício e Recarga Rápida',
      exactImageName: 'Carretel Toyama Easy Load Automático para Roçadeira',
      image: '/images/blog/Carretel Toyama Easy Load Automático para Roçadeira.webp',
      thumb: '/images/blog/thumbs/Carretel Toyama Easy Load Automático para Roçadeira.webp',
      badge: 'Melhor Custo-Benefício Profissional',
      score: '9.7',
      perfil: 'Roçadeiras multimarcas 33cc a 52cc com rosca M10',
      rosca: 'M10x1,25 mm Esquerda (Universal)',
      fioMax: 'Até 3,0 mm',
      tipo: 'Easy Load (Recarga em menos de 1 minuto)',
      paragraphs: [
        'O Toyama Easy Load 130 mm modelo 1301-097 entrega o recurso que mais poupa tempo no trabalho sem cobrar o preço de um cabeçote importado caro.',
        'Com o sistema Easy Load, basta alinhar as setas na carcaça, atravessar o fio de nylon de um lado a outro e girar o botão central para recolher toda a linha em segundos.',
        'Possui 130 mm de diâmetro e rosca fêmea universal M10x1,25 mm esquerda, servindo perfeitamente na linha Toyama TBC e em roçadeiras importadas de 33 cc a 52 cc.',
        'Suporta fios grossos de até 3,0 mm para corte de pasto sujo, pedindo apenas cuidado para não bater a carcaça com violência em tocos secos ou rochas.'
      ],
      specs: [
        { label: 'Rosca de Encaixe', value: 'M10 x 1,25 mm Esquerda (Padrão Universal)' },
        { label: 'Diâmetro Externo', value: '130 mm (Maior Capacidade de Fio)' },
        { label: 'Sistema de Abastecimento', value: 'Easy Load Rápido sem Desmontar' },
        { label: 'Bitola Máxima Suportada', value: 'Até 3,0 mm (Redondo ou Quadrado)' },
        { label: 'Compatibilidade', value: 'Toyama, Vulcan, Tekna, Nakasaki, Terra e outras' }
      ],
      pros: [
        'Recarga Easy Load extremamente rápida sem necessidade de abrir a tampa.',
        'Aceita fios pesados de até 3,0 mm para encarar capim denso.',
        'Encaixe universal compatível com dezenas de marcas a gasolina de 33cc a 52cc.',
        'Excelente custo-benefício para faturar mais com menos pausas técnicas.'
      ],
      cons: [
        'Carcaça plástica externa pede atenção em terrenos com pedregulhos soltos.',
        'Incompatível com eixos de rosca grossa M12 sem uso de adaptador.'
      ],
      criteria: [
        { name: 'Praticidade do Sistema Easy Load', grade: '9.9' },
        { name: 'Compatibilidade Universal Multimarcas', grade: '9.8' },
        { name: 'Relação Custo por Produtividade', grade: '9.7' },
        { name: 'Capacidade de Armazenamento de Linha', grade: '9.5' }
      ]
    },
    {
      id: 'toyama-m10-compacto',
      productId: 'carretel-automatico-easy-load-10mm-original-toyama',
      shortName: 'Toyama Automático 110 mm (TTHH10125F1)',
      rank: '🌿 4. Carretel Toyama M10x1,25 mm – Leveza e Agilidade para Jardins',
      exactImageName: 'Carretel Automatico Easy Load 10mm Original Toyama',
      image: '/images/blog/Carretel Automatico Easy Load 10mm Original Toyama.webp',
      thumb: '/images/blog/thumbs/Carretel Automatico Easy Load 10mm Original Toyama.webp',
      badge: 'Melhor para Jardinagem e Máquinas Leves',
      score: '9.4',
      perfil: 'Roçadeiras de entrada, elétricas potentes e aparos finos',
      rosca: 'M10x1,25 mm Esquerda',
      fioMax: 'Até 2,4 mm',
      tipo: 'Automático Bate-Libera Compacto (110 mm)',
      paragraphs: [
        'Se o seu foco principal é manutenção de jardins, chácaras e acabamentos delicados, o Toyama TTHH10125F1 é uma opção compacta de 110 mm que alivia o peso na ponteira da máquina.',
        'Ele adota a tradicional rosca fêmea M10x1,25 mm esquerda, instalando com perfeição em roçadeiras leves da Toyama, Tekna, Oleo-Mac e similares.',
        'Por ser menor e mais leve que os carretéis de 130 mm, não sobrecarrega a embreagem em motores de 26 cc a 33 cc e facilita o manuseio rente ao solo.',
        'Seu avanço automático por toque mantém o trabalho contínuo em gramados e ervas tenras, embora não seja a indicação ideal para mato bruto com fio 3,0 mm.'
      ],
      specs: [
        { label: 'Rosca de Encaixe', value: 'M10 x 1,25 mm Esquerda' },
        { label: 'Diâmetro do Corpo', value: '110 mm (Perfil Leve e Compacto)' },
        { label: 'Acionamento', value: 'Automático Bate-Libera no Chão' },
        { label: 'Bitola Recomendada', value: '1,8 mm até 2,4 mm' },
        { label: 'Indicação de Uso', value: 'Jardins residenciais, grama e vegetação macia' }
      ],
      pros: [
        'Perfil compacto de 110 mm que reduz o cansaço do operador nos braços.',
        'Não pesa na embreagem de roçadeiras menores de baixa cilindrada.',
        'Avanço automático sensível e preciso ao toque com o solo.',
        'Instalação rápida e descomplicada em qualquer ponteira M10 esquerda.'
      ],
      cons: [
        'Capacidade de metragem de fio menor que os modelos de 130 mm.',
        'Não indicado para desmate denso com fios acima de 2,4 mm.'
      ],
      criteria: [
        { name: 'Leveza e Redução de Inércia no Motor', grade: '9.7' },
        { name: 'Manobrabilidade em Espaços Estreitos', grade: '9.6' },
        { name: 'Precisão do Toque Bate-Libera', grade: '9.4' },
        { name: 'Economia para Uso Residencial', grade: '9.3' }
      ]
    },
    {
      id: 'vonder-completo-m10',
      productId: 'carretel-completo-automatico-completo-para-rocadeiras-vonder',
      shortName: 'Carretel Automático Completo Vonder',
      rank: '📦 5. Carretel Automático Completo Vonder – Pronto para Usar com Fio Incluso',
      exactImageName: 'Carretel Completo Automático Completo Para Roçadeiras Vonder',
      image: '/images/blog/Carretel Completo Automático Completo Para Roçadeiras Vonder.webp',
      thumb: '/images/blog/thumbs/Carretel Completo Automático Completo Para Roçadeiras Vonder.webp',
      badge: 'Mais Prático (Já com Fio de Fábrica)',
      score: '9.3',
      perfil: 'Chácaras, sítios e quem busca montagem imediata',
      rosca: 'M10x1,25 mm Esquerda',
      fioMax: 'Até 2,45 mm',
      tipo: 'Bate-Libera com Indicador de Furos',
      paragraphs: [
        'O Carretel Automático Completo da Vonder é a melhor escolha para quem quer tirar da caixa, parafusar no tubo e começar a roçar na hora, pois já vem abastecido com fio de nylon de fábrica.',
        'Construído para girar até 10.000 rotações por minuto com sistema bate-libera, atende com segurança roçadeiras multimarcas com encaixe M10 rosca esquerda.',
        'Um acerto inteligente no projeto é o indicador de alinhamento visual dos furos, eliminando o estresse de tentar adivinhar a posição correta da linha na recarga.',
        'Como trabalha idealmente com fios de até 2,45 mm, atende com excelência chácaras, sítios e gramados amplos onde a praticidade de reposição conta mais que força extrema.'
      ],
      specs: [
        { label: 'Rosca de Fixação', value: 'M10 x 1,25 mm Esquerda' },
        { label: 'Rotação Máxima Suportada', value: '10.000 rpm' },
        { label: 'Carga Pré-Instalada', value: 'Já acompanha carga de fio de fábrica' },
        { label: 'Diferencial de Projeto', value: 'Indicador visual para alinhamento dos orifícios' },
        { label: 'Bitola de Trabalho', value: 'Até 2,45 mm' }
      ],
      pros: [
        'Pronto para uso imediato com carga inicial de fio de nylon inclusa.',
        'Indicador visual que agiliza a passagem da linha sem tentativas cegas.',
        'Funcionamento estável testado até 10.000 rpm.',
        'Ampla compatibilidade com roçadeiras multimarcas de rosca M10.'
      ],
      cons: [
        'Espessura limite de fio recomendada de 2,45 mm.',
        'Carcaça plástica exige atenção contra batidas diretas em meio-fio ou pedras.'
      ],
      criteria: [
        { name: 'Praticidade de Uso Imediato', grade: '9.8' },
        { name: 'Auxílio de Alinhamento na Recarga', grade: '9.5' },
        { name: 'Estabilidade em Alta Rotação (10.000 rpm)', grade: '9.3' },
        { name: 'Custo-Benefício para Manutenção Geral', grade: '9.2' }
      ]
    },
    {
      id: 'kawashima-m12',
      productId: 'carretel-automatico-nylon-kawashima-para-rocadeira-stihl-rosca-m12-1-5',
      shortName: 'Carretel Automático Kawashima M12x1,5 mm',
      rank: '💪 6. Carretel Kawashima M12x1,5 mm – Robustez Econômica para Motores Fortes',
      exactImageName: 'Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5',
      image: '/images/blog/Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5.webp',
      thumb: '/images/blog/thumbs/Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5.webp',
      badge: 'Melhor Opção Econômica para Eixo M12',
      score: '9.5',
      perfil: 'Roçadeiras pesadas com eixo M12 (Stihl FS 160, 220, 290)',
      rosca: 'M12x1,5 mm Esquerda',
      fioMax: 'Até 3,0 mm',
      tipo: 'Bate-Libera Reforçado de 130 mm',
      paragraphs: [
        'Para quem possui roçadeiras pesadas com eixo M12x1,5 mm esquerda como Stihl FS 160, 220 e 290 e busca uma alternativa acessível ao cabeçote de marca sem perder robustez, o Kawashima é uma escolha certeira.',
        'Com 130 mm de diâmetro e suporte para fios de nylon de até 3,0 mm, ele aguenta bem o torque elevado de motores acima de 35 cc.',
        'O acionamento por impacto no solo libera a linha com rapidez em capim alto e pastagens sujas, evitando paradas constantes no trecho.',
        'Antes de comprar, confira o passo exato da sua rosca no manual para garantir encaixe firme sem folgas ou vibrações indesejadas.'
      ],
      specs: [
        { label: 'Rosca de Encaixe', value: 'M12 x 1,5 mm Esquerda (Eixo Grosso)' },
        { label: 'Diâmetro do Cabeçote', value: '130 mm (Grande Volume de Fio)' },
        { label: 'Calibre Suportado', value: 'Até 3,0 mm (Redondo ou Quadrado)' },
        { label: 'Compatibilidade Direta', value: 'Stihl FS 160, 220, 280, 290 e similares M12x1,5' },
        { label: 'Mecanismo de Liberação', value: 'Bate-Libera Automático Reforçado' }
      ],
      pros: [
        'Alternativa resistente e de menor custo para máquinas pesadas de eixo M12.',
        'Diâmetro de 130 mm com excelente capacidade de armazenamento de linha.',
        'Acionamento bate-libera firme que suporta o torque de motores fortes.',
        'Aceita fios grossos de até 3,0 mm para serviços severos no mato.'
      ],
      cons: [
        'Exige conferência estrita do passo de rosca (1,5 mm versus 1,75 mm).',
        'Peso elevado inadequado para roçadeiras residenciais ou fracas.'
      ],
      criteria: [
        { name: 'Robustez Estrutural para Motores 2T Fortes', grade: '9.7' },
        { name: 'Economia frente aos Cabeçotes Originais', grade: '9.6' },
        { name: 'Rendimento em Pastos Sujos e Capim Alto', grade: '9.5' },
        { name: 'Capacidade para Fios de até 3,0 mm', grade: '9.4' }
      ]
    }
  ];

  // Opções do Simulador Interativo
  const simulatorOptions: Record<string, { label: string; title: string; desc: string; cta: string; anchor: string }> = {
    'stihl-pesada': {
      label: 'Stihl Pesada (FS 160 / 220 / 290 / 350 / 460)',
      title: 'Stihl AutoCut 46-2 ou Kawashima M12',
      desc: 'Para roçadeiras Stihl de alto torque e eixo M12x1,5, o AutoCut 46-2 entrega o balanceamento original supremo com fios de até 3,3 mm, enquanto o Kawashima M12 é a melhor alternativa econômica reforçada.',
      cta: 'Ver Detalhes do AutoCut 46-2',
      anchor: '#stihl-autocut-46-2'
    },
    'stihl-media': {
      label: 'Stihl Intermediária (FS 55 / 80 / 85 / 120 / 250)',
      title: 'Stihl AutoCut C 26-2 (ou C 27-2)',
      desc: 'O sistema Comfort com recarga externa elimina a necessidade de desmontar a carcaça. É o conjunto ideal para acabamentos impecáveis junto a cercas e canteiros.',
      cta: 'Ver Detalhes do AutoCut C 26-2',
      anchor: '#stihl-autocut-c-26-2'
    },
    'multimarcas-pesada': {
      label: 'Multimarcas 33cc a 52cc (Toyama / Vulcan / Tekna)',
      title: 'Toyama Easy Load 130 mm (Mod. 1301-097)',
      desc: 'Com rosca universal M10x1,25 mm esquerda e recarga em menos de um minuto sem abrir o carretel, este modelo entrega a maior produtividade no corte de lotes e pastos com fio de até 3,0 mm.',
      cta: 'Ver Detalhes do Toyama Easy Load',
      anchor: '#toyama-easy-load-130mm'
    },
    'jardim-leve': {
      label: 'Jardins e Roçadeiras Leves (< 33cc)',
      title: 'Toyama M10 110 mm Compacto',
      desc: 'Com carcaça menor de 110 mm, alivia o peso na ponteira, protege a embreagem de motores pequenos e garante manobras ágeis com fios de até 2,4 mm.',
      cta: 'Ver Detalhes do Toyama Compacto',
      anchor: '#toyama-m10-compacto'
    },
    'pronto-uso': {
      label: 'Praticidade Imediata com Fio Incluso',
      title: 'Carretel Completo Automático Vonder',
      desc: 'Perfeito para quem não quer perder tempo montando linha: já vem pré-abastecido de fábrica e traz indicador visual para alinhamento dos furos.',
      cta: 'Ver Detalhes do Vonder Completo',
      anchor: '#vonder-completo-m10'
    }
  };

  const currentSim = simulatorOptions[selectedProfile];

  // FAQ
  const faqData = [
    {
      question: "Qual o melhor carretel para roçadeira Stihl FS 160 e FS 220?",
      answer: [
        "Para a linha Stihl pesada como FS 160, 220 e 290, o melhor cabeçote original é o Stihl AutoCut 46-2, que opera com rosca M12x1,5 mm esquerda e suporta fios de até 3,3 mm.",
        "Se o objetivo for uma opção reforçada com menor custo de reposição, o carretel Kawashima de 130 mm com rosca M12x1,5 mm é a alternativa mais recomendada no campo."
      ]
    },
    {
      question: "O que é um carretel com sistema Easy Load e como ele funciona?",
      answer: [
        "O sistema Easy Load permite recarregar o fio de nylon sem precisar abrir as travas plásticas ou desmontar a carcaça do carretel.",
        "Basta alinhar as setas externas com os ilhoses, passar a linha reta de fora a fora dividindo ao meio e girar o botão central para enrolar o fio em menos de um minuto."
      ]
    },
    {
      question: "Como saber qual é a rosca do carretel da minha roçadeira?",
      answer: [
        "A grande maioria das roçadeiras importadas e nacionais de 33cc a 52cc (como Toyama, Vulcan, Tekna e Nakasaki) usa o padrão universal M10x1,25 mm com rosca esquerda.",
        "Já as máquinas da Stihl variam: modelos leves e médios usam M10x1,0 mm esquerda, enquanto modelos profissionais pesados utilizam rosca M12x1,5 mm esquerda."
      ]
    },
    {
      question: "Posso usar fio quadrado no carretel automático bate-libera?",
      answer: [
        "Sim, o fio de nylon com perfil quadrado funciona perfeitamente em carretéis automáticos, desde que você respeite a bitola máxima indicada pelo fabricante.",
        "As quinas vivas do perfil quadrado proporcionam corte tipo navalha muito superior no capim alto e reduzem o esforço do motor em comparação ao fio redondo."
      ]
    },
    {
      question: "Por que o fio de nylon solda ou gruda dentro do carretel?",
      answer: [
        "Esse problema ocorre quando as duas vias de fio são enroladas cruzando uma por cima da outra dentro da bobina interna.",
        "Durante a rotação, o atrito mecânico constante aquece o plástico do nylon até o ponto de fusão, fazendo as espiras colarem entre si; por isso, enrole sempre as voltas paralelas sem sobreposição."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/melhor-carretel-para-rocadeira.webp"
            alt="Mesa de oficina com vários carretéis automáticos de nylon para roçadeira alinhados"
            title="Melhor carretel para roçadeira análise dos top automáticos"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Melhor Carretel para Roçadeira: <br />
            <span className="text-[#16A34A]">Top 6 Automáticos [2026]</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton"
                className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/José Ailton da Silva.webp"
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
            Quem vive no trecho limpando lotes e jardins sabe que parar a máquina toda hora para desmontar o carretel e puxar fio de nylon na mão acaba com o rendimento do dia.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Além de perder tempo debaixo de sol quente, um cabeçote mal balanceado ou incompatível gera vibrações perigosas na ponteira e desgasta a embreagem antes da hora.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Escolher o melhor carretel para roçadeira exige casar a rosca do eixo, o peso da peça com a cilindrada do motor e a praticidade do sistema de recarga.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Para serviços em mato grosso e capoeira fechada, também vale conferir o nosso comparativo de <a href="/lamina-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor lâmina para roçadeira</a> para alternar o conjunto conforme a vegetação.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Com base na minha rotina prática operando máquinas leves e pesadas no campo, selecionei os 6 melhores carretéis automáticos de 2026 e os critérios técnicos para você comprar sem erro.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ESCOLHA POR PERFIL / MÁQUINA
            =================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#4ade80] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-white m-0">
              Simulador Rápido: Qual o Carretel Ideal para a Sua Roçadeira?
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Selecione o perfil da sua máquina e a sua rotina de corte para ver de imediato a recomendação técnica mais eficiente:
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
              Cabeçote Indicado para o Seu Caso:
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
            4. VITRINE / COMPARATIVO RÁPIDO (Mobile-first sem scroll horizontal)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Comparativo Rápido: Os 6 Melhores Carretéis para Roçadeira
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
                {carretelReviews.map((item) => {
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
                          {item.perfil}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score} / 10
                        </div>
                        <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mt-1">
                          {item.badge}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.perfil}
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
            5. BANNER DO MEIO
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiofiodenylonpararocadeira />
        </div>

        {/* ===================================================================
            6. REVIEWS DETALHADOS DOS 6 PRODUTOS
            =================================================================== */}
        <div className="space-y-16">
          <div className="border-b-2 border-gray-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Análise Detalhada dos 6 Melhores Carretéis para Roçadeira
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Confira a avaliação mecânica completa, prós, contras e especificações técnicas de cada modelo testado no trecho:
            </p>
          </div>

          {carretelReviews.map((review) => {
            const prod = products[review.productId];
            const affiliateUrl = prod?.link || '#';

            return (
              <section
                key={review.id}
                id={review.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 transition-shadow hover:shadow-lg scroll-mt-24"
              >
                {/* Header do Card */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="bg-[#16A34A] text-white font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm">
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

                {/* Grid Foto + Destaques */}
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
                      <span className="text-xs text-gray-500 block font-bold">Rosca do Eixo:</span>
                      <span className="text-sm font-bold text-gray-900">{review.rosca}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Espessura Máxima de Fio:</span>
                      <span className="text-sm font-bold text-[#166534]">{review.fioMax}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <span className="text-xs text-gray-500 block font-bold">Tipo de Cabeçote:</span>
                      <span className="text-sm font-bold text-gray-900">{review.tipo}</span>
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
              Acessórios e Insumos Indispensáveis
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Aproveite para Equipar seu Kit de Roçada
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Selecionei os complementos mais duráveis para trabalhar com o carretel sem quebras e com máxima segurança:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Fio Duraline 3mm */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Corte Rápido em Capim Alto
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/fio-duraline-cross.webp"
                    alt="Carretel de Fio de Nylon Duraline Quadrado 3mm"
                    title="Fio de Nylon Duraline 3mm Quadrado"
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
                  Quinas vivas que fatiam o capim sem desfiar, rendendo até duas vezes mais que fios redondos comuns.
                </p>
              </div>
              <a
                href={products['fio-de-nylon-duraline-3mm-quadrado-255m']?.link || 'https://meli.la/2PExUfX'}
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
                  Proteção Contra Pedras e Estilhaços
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-epis-cross.webp"
                    alt="Kit de Proteção EPIs para Roçador"
                    title="Kit de Segurança Completo EPIs"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit de Segurança Completo (EPIs)
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Viseira de proteção facial, protetor auricular e perneiras grossas para barrar arremesso de pedras.
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

            {/* Card 3: Kit Óleo 2T */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#F0FDF4] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded border border-[#16A34A]/30 mb-3">
                  Proteção Térmica do Motor 2T
                </span>
                <div className="w-[120px] h-[120px] mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/images/blog/thumbs/kit-oleo-2t-cross.webp"
                    alt="Kit Misturador com Óleo 2 Tempos"
                    title="Kit Misturador mais Óleo 2T"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Kit Misturador + Óleo 2T Castrol
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Frasco graduado para dosar na proporção perfeita e óleo semissintético que evita travamento de pistão.
                </p>
              </div>
              <a
                href={products['kit-misturador-oleo-2t']?.link || 'https://meli.la/1GP142t'}
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
            8. COMO FUNCIONA O CARRETEL AUTOMÁTICO + GUIA TÉCNICO DE COMPRA
            =================================================================== */}
        <section className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Como Funciona o Carretel Automático da Roçadeira?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                O carretel automático da roçadeira — popularmente conhecido no trecho como sistema bate e libera — solta novas pontas de fio de nylon sempre que o botão inferior toca o solo com a máquina acelerada.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Esse mecanismo inteligente permite renovar a linha de corte em segundos durante o trabalho, sem exigir que você desligue o motor ou pare a roçada para puxar o fio com a mão.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por dentro da carcaça, uma mola helicoidal mantém o carretel interno travado nos dentes de retenção enquanto o cabeçote gira livremente.
              </p>
            </div>

            {/* 3 Pilares de Funcionamento na Prática */}
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-2">
                <span className="inline-block bg-[#15803d] text-white text-xs font-black px-2.5 py-1 rounded-lg uppercase">
                  1. Liberação pelo Impacto
                </span>
                <h3 className="font-bold text-gray-900 text-base pt-1">
                  Mola Interna e Força Centrífuga
                </h3>
                <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Ao dar um toque firme com a base do carretel no chão em plena rotação, o botão recua a mola interna e destrava a bobina por uma fração de segundo.
                </p>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  A própria força centrífuga do giro arremessa um novo trecho medido de nylon para fora dos ilhoses laterais.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-2">
                <span className="inline-block bg-[#15803d] text-white text-xs font-black px-2.5 py-1 rounded-lg uppercase">
                  2. Corte do Excesso
                </span>
                <h3 className="font-bold text-gray-900 text-base pt-1">
                  Lâmina Limitadora na Saia
                </h3>
                <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Assim que o fio avança, a faquinha metálica instalada na saia de proteção da roçadeira apara automaticamente qualquer ponta que passe do diâmetro ideal.
                </p>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Isso mantém as duas extremidades perfeitamente simétricas, evitando vibrações no tubo e sobrecarga na embreagem.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-2">
                <span className="inline-block bg-[#15803d] text-white text-xs font-black px-2.5 py-1 rounded-lg uppercase">
                  3. Versões de Botão
                </span>
                <h3 className="font-bold text-gray-900 text-base pt-1">
                  Base Plástica vs Base Metálica
                </h3>
                <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Modelos com botão de poliamida de alta densidade são mais leves e deslizam suave sobre gramados residenciais.
                </p>
                <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Já as versões com botão blindado em alumínio ou aço resistem muito melhor ao atrito severo contra pedras, terra batida e calçadas.
                </p>
              </div>
            </div>

            {/* Como Abastecer Modelos de Carga Fácil (Easy Load) */}
            <div className="bg-[#F0FDF4] border border-[#16A34A]/30 rounded-2xl p-6 sm:p-8 my-8">
              <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-tight mb-3">
                Como Abastecer Carretéis Automáticos de Carga Fácil (Easy Load)
              </h3>
              <p className="mb-5 text-gray-700 leading-relaxed text-sm sm:text-base">
                Nos cabeçotes modernos de recarga rápida — como o Stihl AutoCut C 26-2, o Toyama Easy Load e o Vonder Completo —, você repõe a linha por fora sem precisar desmontar as travas nem correr o risco de perder a mola no capim:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#16A34A]/20">
                  <span className="text-xs font-black text-[#166534] uppercase block mb-1">Passo 1: Alinhar</span>
                  <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Gire o manípulo central até alinhar as setas ou marcações gravadas no botão exatamente na direção dos dois ilhoses de saída da carcaça.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#16A34A]/20">
                  <span className="text-xs font-black text-[#166534] uppercase block mb-1">Passo 2: Atravessar</span>
                  <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Introduza o cabo de nylon por um dos ilhoses até ele atravessar o carretel e sair do outro lado, puxando até igualar as duas pontas no mesmo comprimento.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#16A34A]/20">
                  <span className="text-xs font-black text-[#166534] uppercase block mb-1">Passo 3: Enrolar</span>
                  <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Gire a catraca central no sentido indicado pelas setas para recolher o fio internamente, deixando cerca de um palmo (15 cm) livre de cada lado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Quais São os Tipos de Carretel e Suas Diferenças?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none mt-4">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                No campo, os carretéis se dividem em três mecanismos principais de operação.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Entender como cada sistema trabalha evita comprar uma peça lenta demais para a sua rotina ou cara demais para um quintal pequeno.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/comparativo-carretel-automatico-easy-load.webp"
              alt="Comparativo entre carretel automático aberto com mola e cabeçote moderno Easy Load fechado"
              title="Comparativo de mecanismos de carretel para roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Tabela 1: Tipos de Carretel */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5">Tipo de Carretel</th>
                  <th className="p-3.5">Como Funciona</th>
                  <th className="p-3.5 hidden sm:table-cell">Perfil Indicado</th>
                  <th className="p-3.5">Principal Vantagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Automático Bate-Libera</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Solta fio ao bater no chão em giro; precisa abrir a tampa para repor o nylon.</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm hidden sm:table-cell">Chácaras, sítios e operadores habituados à manutenção básica.</td>
                  <td className="p-3.5 font-bold text-[#166534] text-xs sm:text-sm">Bom equilíbrio entre durabilidade, preço e corte contínuo.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 font-bold text-gray-900">Easy Load (Recarga Fácil)</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Solta fio ao bater no chão e permite passar a linha nova sem abrir a carcaça.</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm hidden sm:table-cell">Profissionais e operadores com cronogramas intensos de atendimento.</td>
                  <td className="p-3.5 font-bold text-[#166534] text-xs sm:text-sm">Produtividade máxima: recarga completa em menos de 1 minuto.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-bold text-gray-900">Manual Desmontável</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Exige desligar a máquina e abrir o carretel para puxar o fio na mão.</td>
                  <td className="p-3.5 text-gray-700 text-xs sm:text-sm hidden sm:table-cell">Uso doméstico esporádico ou quem usa fios especiais rígidos.</td>
                  <td className="p-3.5 font-bold text-gray-700 text-xs sm:text-sm">Preço baixo e mecânica simples com menos peças móveis.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabela 2: Diretrizes por Perfil */}
          <div className="pt-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Como Escolher pelo Perfil de Operação e Terreno
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Cruzar a potência do motor com a frequência do serviço é o segredo para não superdimensionar o peso nem quebrar carretéis frágeis.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#16A34A] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5">Perfil de Operação</th>
                    <th className="p-3.5">Modelo Recomendado</th>
                    <th className="p-3.5">Por Que Funciona Melhor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Prestação de Serviço Comercial</td>
                    <td className="p-3.5 font-bold text-[#166534]">Automático Easy Load (130 mm)</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Zera o tempo perdido desmontando carretel e aumenta o faturamento diário.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Chácaras e Uso Frequente</td>
                    <td className="p-3.5 font-bold text-[#166534]">Automático Bate-Libera (110 a 130 mm)</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Mantém o corte fluido com excelente custo-benefício e reposição fácil.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Mato Fechado e Roçadeiras Fortes (35cc+)</td>
                    <td className="p-3.5 font-bold text-[#166534]">Bate-Libera Reforçado (fios até 3,3 mm)</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Aguenta o torque alto e o impacto de fios grossos sem trincar a carcaça.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Jardins Pequenos e Uso Eventual</td>
                    <td className="p-3.5 font-bold text-gray-700">Bate-Libera Compacto (110 mm) ou Manual</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Leve para motores menores e muito barato para quem gasta pouco fio.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Critérios Técnicos de Fixação */}
          <div className="pt-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Os 3 Detalhes Técnicos Obrigatórios Antes da Compra
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="bg-[#16A34A] text-white p-2.5 rounded-xl w-fit">
                  <Wrench size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-base">1. Rosca e Sentido de Aperto</h4>
                <div className="text-xs sm:text-sm text-gray-700">
                  <p className="mb-3 leading-relaxed">
                    Quase todas as roçadeiras a combustão usam rosca esquerda anti-horária para que o giro do motor aperte a peça no corte.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    M10x1,25 mm esquerda é o padrão universal da Toyama, Vulcan, Tekna e Nakasaki.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    M12x1,5 mm esquerda é o padrão das Stihl pesadas como FS 160, 220 e 290.
                  </p>
                  <p className="mb-0 leading-relaxed">
                    Para aprender como fazer a desmontagem correta sem estragar o eixo, veja o nosso tutorial de <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como tirar e colocar o carretel da roçadeira</a>.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="bg-[#16A34A] text-white p-2.5 rounded-xl w-fit">
                  <Sparkles size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-base">2. Sistema de Recarga e Base</h4>
                <div className="text-xs sm:text-sm text-gray-700">
                  <p className="mb-3 leading-relaxed">
                    Se você gasta mais de uma carga de fio por serviço, um sistema Easy Load se paga logo na primeira semana de trabalho.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    Além de agilizar a reposição, evita forçar as travas plásticas da tampa dezenas de vezes.
                  </p>
                  <p className="mb-0 leading-relaxed">
                    Confira se os ilhoses de saída são de latão ou alumínio fundido para não rasgar o corpo plástico com a fricção do fio.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="bg-[#16A34A] text-white p-2.5 rounded-xl w-fit">
                  <ShieldAlert size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-base">3. Peso e Cilindrada do Motor</h4>
                <div className="text-xs sm:text-sm text-gray-700">
                  <p className="mb-3 leading-relaxed">
                    Não instale um carretel pesado de 130 mm com fio 3,0 mm em uma roçadeira leve de 26 cc ou em aparador elétrico.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    O peso excessivo na ponta amarra a aceleração, eleva o consumo de gasolina e faz a embreagem patinar até superaquecer.
                  </p>
                  <p className="mb-0 leading-relaxed">
                    Máquinas menores pedem carretéis leves de 100 a 110 mm com fios finos de 2,0 a 2,4 mm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabela 3: Fios Indicados por Vegetação */}
          <div className="pt-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Como Escolher o Fio de Corte Ideal para o Seu Carretel
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                O melhor cabeçote do mundo não rende se você colocar o filamento errado lá dentro.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Confira a espessura máxima gravada na carcaça e consulte o nosso guia sobre <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">tamanho do fio de nylon para roçadeira</a> para acertar na metragem:
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-3.5">Formato do Fio</th>
                    <th className="p-3.5">Cenário de Operação Recomendado</th>
                    <th className="p-3.5">Comportamento Prático no Campo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Perfil Redondo</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Gramados, beiradas de muro, cercas e terrenos com muitas pedras.</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Mais flexível e resistente a batidas secas em concreto sem partir na base.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50/30">
                    <td className="p-3.5 font-bold text-gray-900">Perfil Quadrado / Estrela</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Capim alto, ervas daninhas de talo duro e pastagens sujas.</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm font-bold text-[#166534]">Quinas afiadas fatiam a vegetação como lâmina, rendendo mais por passada.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold text-gray-900">Nylon com Alma Metálica</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Mato muito denso e talos semilenhosos em solo rústico.</td>
                    <td className="p-3.5 text-gray-700 text-xs sm:text-sm">Máxima resistência mecânica à abrasão, indicado para carretéis reforçados.</td>
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
              Roçada sem Perda de Tempo: Mais Clientes e Mais Lucro no Trecho
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium text-sm sm:text-base">
              <p className="mb-5 leading-relaxed">
                No batente diário, a conta é direta: quem para quatro vezes no dia e leva dez minutos abrindo carretel travado joga fora quase uma hora de faturamento.
              </p>
              <p className="mb-5 leading-relaxed">
                Esse tempo economizado permite terminar o lote antes do sol forte do meio-dia ou atender mais um cliente na semana.
              </p>
              <p className="mb-5 leading-relaxed">
                Se você opera máquina Stihl pesada, vá no AutoCut 46-2 ou no Kawashima M12; para Stihl médias, o AutoCut C 26-2 é imbatível.
              </p>
              <p className="mb-5 leading-relaxed">
                Para roçadeiras multimarcas de rosca universal M10x1,25, o Toyama Easy Load 130 mm lidera em produtividade, enquanto o Vonder Completo e o Toyama 110 mm garantem máxima facilidade para manutenção de jardins.
              </p>
              <p className="mb-5 leading-relaxed">
                Confira a rosca do seu equipamento, trabalhe com equipamentos de proteção individual e aproveite o rendimento máximo da sua máquina.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Carretéis para Roçadeira
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
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
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <span className="text-[#16A34A] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.answer.map((p, pIndex) => (
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
                Antes de enrolar qualquer carga nova de fio de nylon no carretel, deixe o rolo mergulhado em um balde com água por 24 horas.
              </p>
              <p className="mb-4 leading-relaxed">
                A poliamida do nylon absorve a umidade e recupera a sua elasticidade natural perdida durante o armazenamento no calor seco.
              </p>
              <p className="mb-0 leading-relaxed">
                Esse choque de hidratação impede que o fio parta na saída do ilhós ao bater em tocos e multiplica a vida útil do carretel no campo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopupfiodenylonpararocadeira />
    </div>
  );
};
