import React, { useState } from 'react';
import { BunnerDoMeiolaminadeorocadeira } from './BunnerDoMeiolaminadeorocadeira';
import { ExitIntentPopuplaminadeorocadeira } from './ExitIntentPopuplaminadeorocadeira';
import { products } from '../../data/productsrocadeira';

// Ícones SVG Inline Leves (Zero dependências JS, PageSpeed 100)
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

// Dúvidas Frequentes (FAQ)
const faqTutorial = [
  {
    q: "Posso amolar disco de roçadeira com esmerilhadeira (lixadeira)?",
    a: [
      "Em lâminas de aço de 2 ou 3 pontas muito mastigadas, até é possível usar um disco flap de grão fino (80 ou 120) para corrigir dentes grandes, mas com extremo cuidado para não esquentar o metal até azular.",
      "Para o acabamento fino e manutenção diária, a lima chata manual é sempre mais segura porque não destempera o aço e não come material demais."
    ]
  },
  {
    q: "De quanto em quanto tempo devo amolar o disco?",
    a: [
      "Não existe um prazo fixo em horas, pois tudo depende do terreno.",
      "Se você roça em pasto limpo sem pedras, um disco bem afiado aguenta um dia inteiro de serviço.",
      "Em terrenos pedregosos ou com muita terra solta, o corte pode pedir um retoque com lima a cada dois ou três tanques de combustível.",
      "O sinal claro é quando você precisa fazer força nos braços para o disco avançar no mato."
    ]
  },
  {
    q: "Quando vale mais a pena trocar o disco em vez de amolar?",
    a: [
      "Troque imediatamente se houver qualquer trinca no metal, se o disco estiver empenado (torto), se o furo central estiver ovalado com folga no eixo ou se um disco de vídea tiver perdido várias pastilhas de corte.",
      "Insistir em um disco rachado ou desbalanceado pode provocar acidentes graves e estourar a caixa de engrenagens da ponteira."
    ]
  },
  {
    q: "Por que a lima comum de aço não consegue afiar o disco de vídea?",
    a: [
      "As pastilhas de vídea são fabricadas com carboneto de tungstênio sinterizado, um material cuja dureza supera a do aço temperado da lima manual.",
      "Ao passar uma lima comum na vídea, a ferramenta apenas escorrega sem remover material e perde seus dentes rapidamente, exigindo obrigatoriamente uma lima diamantada ou rebolo específico."
    ]
  }
];

export const ComoAmolarDiscoRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const epiLink = products['kit-seguranca-completo-epis']?.link || 'https://meli.la/1hqH1JJ';
  const laminaAcoLink = products['faca-3-pontas-furo-25mm-tamanho-300mm-espessura-2-9mm-spin']?.link || 'https://meli.la/2xV2wZf';
  const discoVideaLink = products['disco-40-dentes-videa-255mm-para-rocadeira-toyama-tbc52h']?.link || 'https://meli.la/2sV8H3g';

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* ===================================================================
          1. HERO (CABEÇALHO ESCURO COM IMAGEM DE FUNDO OTIMIZADA PARA LCP)
          =================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/como-amolar-disco-de-rocadeira.webp"
            alt="Operador com luvas de couro amolando disco de aço de roçadeira preso em morsa de bancada com lima chata"
            title="Como amolar disco de roçadeira passo a passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Tutorial Prático de Bancada e Afiação
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Como Amolar Disco de Roçadeira: Passo a Passo Seguro (Aço e Vídea)
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Aprenda como amolar disco de roçadeira (aço e vídea) passo a passo com segurança, veja qual lima usar e como testar o balanceamento para zerar a vibração.
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
            Quem encara capoeira fechada, arbusto duro ou pasto sujo sabe na pele a diferença entre trabalhar com um disco afiado e sofrer com uma lâmina cega.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quando o corte perde o fio, a roçadeira passa a empurrar o mato em vez de fatiar o talo.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na prática, isso faz você acelerar no talo o tempo todo, queima mais gasolina, força a embreagem e aumenta muito o risco de contragolpe — e muita gente acaba achando que precisa{' '}
            <a href="/como-regular-rocadeira" className="text-[#16A34A] font-semibold hover:underline">
              regular o carburador da roçadeira
            </a>{' '}
            quando o problema real está na lâmina sem fio.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Aprender como amolar disco de roçadeira corretamente na bancada economiza um bom dinheiro com peças novas e devolve a leveza ao corte.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Mas atenção: cada material exige uma ferramenta específica, pois o jeito de afiar um disco de aço comum não serve para o disco de vídea.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se o seu disco atual já estiver muito fino ou trincado, vale consultar nosso guia sobre a <a href="/lamina-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor lâmina e disco para roçadeira</a> para escolher a reposição ideal.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, trago o passo a passo exato que sigo há mais de dez anos na oficina antes de ir para o trecho.
          </p>
        </div>

        {/* ===================================================================
            3. FERRAMENTAS E EPIS NECESSÁRIOS
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Ferramentas e EPIs Necessários
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Antes de encostar a mão no disco, separe o material certo para não improvisar e nem se cortar na bancada:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase">
                <ShieldAlert size={18} />
                <span>Equipamentos de Proteção (Obrigatórios)</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Luvas resistentes de raspa ou vaqueta (as bordas cortam fundo mesmo cegas) e óculos de segurança — confira um <a href={epiLink} target="_blank" rel="noopener noreferrer sponsored nofollow" className="text-[#16A34A] font-semibold hover:underline">kit completo de EPIs aqui</a>.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-[#166534] font-bold text-sm uppercase">
                <Wrench size={18} />
                <span>Para Desmontagem e Fixação</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Pino de trava do eixo, chave combinada ou chave de vela, escova de aço (ou pano com solvente) e uma morsa (torno de bancada) bem firme.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-[#166534] font-bold text-sm uppercase">
                <Check size={18} />
                <span>Para Discos de Aço</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Lima chata murça ou bastarda para <a href={laminaAcoLink} target="_blank" rel="noopener noreferrer sponsored nofollow" className="text-[#16A34A] font-semibold hover:underline">lâminas de 2, 3 ou 8 pontas</a> e limatão redondo para discos tipo serra ou dentes travados.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase">
                <AlertTriangle size={18} />
                <span>Para Discos de Vídea (Wídia)</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Rebolo diamantado no esmeril de bancada ou lima diamantada manual exclusiva para <a href={discoVideaLink} target="_blank" rel="noopener noreferrer sponsored nofollow" className="text-[#16A34A] font-semibold hover:underline">discos com pastilhas de vídea</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. ETAPA 1: SEGURANÇA E PREPARAÇÃO ANTES DE AMOLAR
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            1. Segurança e Preparação Antes de Amolar
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Jamais tente afiar o disco montado na roçadeira.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Além de o ângulo sair todo torto, qualquer escorregão com a lima ou partida acidental pode causar um acidente grave.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Isole a máquina
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Desligue a roçadeira e solte o cachimbo da vela nos modelos a gasolina ou retire a bateria nas elétricas.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Desmonte e registre a ordem das peças
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Insira o pino trava no furo da caixa de transmissão (ponteira) para travar o eixo e solte a porca.
              </p>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Lembre-se de que a maioria das roçadeiras usa rosca inversa (esquerda), ou seja, você gira no sentido horário para afrouxar.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Antes de desmontar tudo, tire uma foto com o celular ou consulte nosso passo a passo de <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como trocar a lâmina da roçadeira</a> para não errar a ordem das arruelas e do prato de apoio na hora de montar de volta.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Limpe o disco
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Raspe toda a terra seca, seiva e resina grudada no metal com a escova de aço ou solvente.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Sujeira acumulada empasta os dentes da lima e atrapalha a leitura do ângulo original.
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl border border-red-200 p-5">
              <h3 className="text-base sm:text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600 shrink-0" />
                Inspecione trincas e empenos
              </h3>
              <p className="mb-3 text-sm sm:text-base text-red-900 leading-relaxed">
                Olhe o disco de perto, principalmente perto do furo central e na base dos dentes.
              </p>
              <p className="mb-0 text-sm sm:text-base text-red-900 leading-relaxed">
                Se enxergar qualquer rachadura ou disco torto, descarte a peça imediatamente: disco trincado ou soldado estoura em alta rotação e vira estilhaço letal.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (LÂMINA DE ROÇADEIRA)
            =================================================================== */}
        <div className="my-14">
          <BunnerDoMeiolaminadeorocadeira />
        </div>

        {/* ===================================================================
            6. ETAPA 2: COMO AMOLAR DISCOS DE AÇO OU DENTES TRAVADOS
            =================================================================== */}
        <section className="mb-14">
          <div className="border-b-2 border-gray-100 pb-3 mb-6">
            <span className="text-xs font-black text-[#16A34A] uppercase tracking-wider block">
              Afiação Manual com Lima
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
              2. Como Amolar Discos de Aço ou Dentes Travados
            </h2>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mb-8">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Os discos de aço carbono, sejam as facas de 2 ou 3 pontas, discos de 8 pontas ou serras circulares comuns, são fáceis de recuperar manualmente na bancada, desde que você mantenha a calma e a padronização.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Prenda firme na morsa
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Fixe o disco no torno de bancada na altura do peito, deixando a borda de corte exposta e firme para não vibrar durante a passada da lima.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Acompanhe o ângulo de fábrica
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Encoste a lima chata (para lâminas retas) ou o limatão redondo (para serras com dentes curvados) acompanhando exatamente a inclinação original do fio, geralmente próxima de 30°.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Passe a lima em um único sentido
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Empurre a lima sempre do centro para a borda externa, fazendo pressão firme só na ida e levantando a ferramenta na volta.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Passar a lima no movimento de vai e vem cega a própria ferramenta e deixa o fio cheio de rebarbas frágeis.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Conte as passadas em cada dente
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Essa é a regra de ouro do operador: se você deu 5 limadas na primeira ponta ou no primeiro dente, dê exatamente 5 limadas com a mesma força em todos os outros.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Tirar mais material de um lado do que do outro desbalanceia o disco e faz a roçadeira trepidar nas suas mãos.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Evite cavar fundo
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Não afunde demais a lima na base do dente, pois criar fisgas muito finas e pontudas enfraquece o aço e faz a ponta quebrar na primeira pedra ou toco escondido.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  6
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Atenção aos dentes alternados
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Em discos tipo serra circular ou corrente, os dentes são travados (um virado para cima, outro para baixo).
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Amole primeiro todos os dentes voltados para um lado, vire o disco na morsa e repita exatamente o mesmo número de passadas no lado oposto.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. ETAPA 3: COMO AMOLAR DISCOS DE VÍDEA (WÍDIA)
            =================================================================== */}
        <section className="mb-14">
          <div className="border-b-2 border-gray-100 pb-3 mb-6">
            <span className="text-xs font-black text-[#16A34A] uppercase tracking-wider block">
              Pastilhas de Carboneto de Tungstênio
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
              3. Como Amolar Discos de Vídea (Wídia)
            </h2>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O disco de vídea, muito usado em capoeira grossa, galhos e arbustos lenhosos, tem pequenas pastilhas de carboneto de tungstênio soldadas nas pontas de cada dente.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Esse material é muito mais duro que o aço comum, e por isso passar lima comum na vídea não adianta nada: a lima só escorrega, não corta a pastilha e ainda perde os dentes.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para afiar disco de vídea sem estragar a peça, siga este procedimento:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                1. Use a ferramenta abrasiva correta
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Utilize um rebolo diamantado (ou rebolo verde de carbeto de silício) montado em esmeril de bancada, ou uma lima diamantada se preferir fazer o retoque na mão.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                2. Faça toques curtos e leves
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Encoste a pastilha de vídea no rebolo seguindo o ângulo original da face frontal do dente, dando toques rápidos de 1 a 2 segundos.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                3. Cuidado com o calor
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Nunca force a pastilha contra o rebolo até ela esquentar ou mudar de cor, pois o superaquecimento trinca a vídea ou amolece a solda que segura a pastilha a 10.000 RPM.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                4. Mantenha a simetria
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Afie apenas o necessário para recuperar a quina viva da pastilha, mantendo todos os dentes do mesmo tamanho para preservar o balanceamento.
              </p>
            </div>
          </div>

          {/* Dica de Mestre: Pastilhas Faltando */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950">
            <h3 className="text-base sm:text-lg font-black text-amber-900 mb-2 flex items-center gap-2 uppercase">
              <Lightbulb size={20} className="text-amber-700 shrink-0" />
              Dica de Mestre: Conte as Pastilhas Antes de Afiar
            </h3>
            <p className="mb-3 text-sm sm:text-base leading-relaxed">
              Antes de gastar tempo amolando um disco de vídea, conte quantas pastilhas ainda estão firmes no lugar.
            </p>
            <p className="mb-0 text-sm sm:text-base leading-relaxed">
              Se o disco perdeu duas ou três pastilhas do mesmo lado depois de bater em pedras, aposente o disco: a falta de peso em um lado gera vibração pesada que estoura os rolamentos da ponteira e cansa seus braços em minutos.
            </p>
          </div>
        </section>

        {/* ===================================================================
            8. COMO TESTAR O BALANCEAMENTO DO DISCO NA BANCADA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Como Testar o Balanceamento do Disco na Bancada
          </h2>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/teste-balanceamento-disco-rocadeira-bancada.webp"
              alt="Lâmina de 3 pontas de roçadeira suspensa na horizontal sobre a haste redonda de uma chave de fenda no furo central para testar o equilíbrio"
              title="Teste prático de balanceamento do disco de roçadeira com chave de fenda"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Teste da chave de fenda no furo central: o disco afiado deve permanecer nivelado sem pender para nenhum lado.
            </span>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Depois de terminar a afiação, faça um teste simples de 10 segundos antes de voltar o disco para a roçadeira.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Enfie uma chave de fenda redonda (ou um prego liso preso na morsa) exatamente pelo furo central do disco e deixe-o solto na horizontal.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Se o disco ficar nivelado, está perfeitamente balanceado e pronto para o corte.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Se um dos lados pender para baixo, esse lado está mais pesado: volte para a morsa, dê mais duas ou três limadas suaves na ponta mais pesada e repita o teste até equilibrar — na hora de reinstalar, confira se o furo assenta sem folga na flange (veja a tabela de{' '}
              <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-[#16A34A] font-semibold hover:underline">
                furo 20 mm na linha Stihl
              </a>
              ).
            </p>
          </div>
        </section>

        {/* ===================================================================
            9. TABELA: ERROS COMUNS QUE ESTRAGAM O DISCO NA AFIAÇÃO
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Erros Comuns que Estragam o Disco na Afiação
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Erro na Bancada</th>
                  <th className="p-3.5 sm:p-4">O que Acontece no Campo</th>
                  <th className="p-3.5 sm:p-4">Como Evitar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-red-900">Usar esmerilhadeira comum com disco de desbaste</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">O atrito rápido queima o aço (fica azulado), tirando a têmpera do metal. O fio amolece e cega em minutos.</td>
                  <td className="p-3.5 sm:p-4 text-[#166534] font-medium">Prefira lima manual para aço ou dê toques curtíssimos no esmeril resfriando a lâmina em água limpa.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-red-900">Desigualar o número de limadas</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">O disco gira desequilibrado, gerando vibração forte no guidão e folga prematura no eixo cardã.</td>
                  <td className="p-3.5 sm:p-4 text-[#166534] font-medium">Conte as passadas em cada aresta e faça o teste da chave de fenda no furo central.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-red-900">Alterar o ângulo original (deixar navalha)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Uma borda fina demais tipo faca de cozinha vira o fio na primeira batida em capim grosso ou terra.</td>
                  <td className="p-3.5 sm:p-4 text-[#166534] font-medium">Mantenha o chanfro mais robusto original de fábrica (aprox. 30°).</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-red-900">Montar sem conferir a porca travante</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">A porca autotravante gasta pode soltar o disco quando você desacelera o motor.</td>
                  <td className="p-3.5 sm:p-4 text-[#166534] font-medium">Verifique o anel de nylon da porca e aperte firme no sentido anti-horário antes de ligar a máquina.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            10. FAQ INTERATIVO (PERGUNTAS FREQUENTES)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 text-center uppercase tracking-tight">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqTutorial.map((item, idx) => {
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
            11. CONCLUSÃO E DICA DE OURO DO JOSÉ AILTON
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] rounded-3xl p-6 sm:p-8 relative shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
                Resumo de Operador: Dez Minutos na Bancada Poupam Horas no Sol
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                Manter o disco da sua roçadeira afiado e balanceado transforma a produtividade no trecho: o motor trabalha folgado, o tanque de combustível rende mais e você termina o dia sem os braços moídos de vibração.
              </p>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-0">
                Separe dez minutos na bancada antes de sair para o serviço, leve uma lima chata de 8 polegadas com cabo na bolsa de ferramentas para retoques rápidos no campo e use sempre luvas e óculos de proteção para garantir um corte limpo e seguro.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopuplaminadeorocadeira />
    </div>
  );
};
