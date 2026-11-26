import React, { useState } from 'react';
import { BunnerDoMeiorocadeira } from './BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira } from './ExitIntentPopuprocadeira';

// ============================================================================
// ÍCONES SVG INLINE (ZERO PESO DE PACOTE EXTERNO -> TBT = 0ms / PAGESPEED 100)
// ============================================================================
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
// COMPONENTE PRINCIPAL DO ARTIGO INFORMATIVO / COMPARATIVO TÉCNICO
// ============================================================================
export const QualAMelhorRocadeiraCostalOuLateral: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Roçadeira costal é mais confortável que a lateral?",
      a: [
        "Em barrancos, taludes, cafezais e terrenos cheios de obstáculos, sim: a roçadeira costal apoia os 6 a 7 kg do motor na mochila acolchoada nas costas e deixa nas suas mãos apenas o tubo leve de corte (cerca de 2 kg).",
        "Por outro lado, em lotes planos e pastagens abertas sob sol forte, muitos operadores preferem a lateral com cinto duplo porque o motor fica longe das costas e não transfere calor direto para a camisa."
      ]
    },
    {
      q: "A roçadeira lateral tem mais força que a costal da mesma cilindrada?",
      a: [
        "Sim, no corte pesado de arbustos e braquiária grossa a lateral leva vantagem mecânica porque seu eixo cardã rígido transfere praticamente 100% do torque do motor em linha reta até a lâmina.",
        "Na costal, a curva do chicote flexível absorve uma pequena fração da energia em atrito e não foi projetada para pancadas secas de discos de serra contra troncos."
      ]
    },
    {
      q: "O que pesa mais na hora da compra: cilindrada do motor ou ergonomia?",
      a: [
        "A ergonomia adequada à topografia do seu terreno pesa muito mais no rendimento real ao final do dia.",
        "Um motor gigante de 52 cc ou 63 cc montado em uma estrutura lateral rígida dentro de um barranco inclinado vai esgotar seus braços em 40 minutos, enquanto uma costal de 42 cc bem ajustada nas costas permite trabalhar a manhã inteira sem travar a coluna."
      ]
    },
    {
      q: "Preciso ter tanto lâmina de aço quanto carretel de nylon para qualquer uma das duas?",
      a: [
        "Sim, manter os dois acessórios na caixa de ferramentas é indispensável tanto na costal quanto na lateral.",
        "Use a faca de 2 ou 3 pontas para derrubar o capim alto no meio do terreno sem gastar combustível à toa e troque para o carretel de nylon ao fazer o acabamento rente a muros, pedras, cercas e troncos."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/qual-a-melhor-rocadeira-costal-ou-lateral.webp"
            alt="Comparativo lado a lado entre roçadeira lateral de eixo rígido com guidão duplo e roçadeira costal com mochila e eixo flexível"
            title="Qual a melhor roçadeira: costal ou lateral?"
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
            Guia Comparativo de Operação e Mecânica
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Qual a Melhor Roçadeira: Costal ou Lateral?{' '}
            <span className="text-[#16A34A]">Como Escolher para o Seu Terreno</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Entenda na prática a diferença entre o eixo cardã rígido da lateral e o chicote flexível da mochila costal, qual dá menos oficina e qual poupa suas costas em lotes planos ou barrancos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#4ade80] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Jose+Ailton&background=16A34A&color=fff";
                  }}
                />
                <span>José Ailton da Silva</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Operador de Campo e Manutenção</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTEÚDO CENTRALIZADO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA DE OPERADOR (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Basta trabalhar duas horas roçando um barranco de estrada com uma máquina de guidão largo ou encarar um hectare de pasto plano com um motor quente colado nas costas para descobrir na pele que potência não serve de nada quando a geometria da máquina briga contra o terreno.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na hora de decidir qual a melhor roçadeira costal ou lateral, o que muda não é o cilindro do motor a gasolina, mas o modo como o peso é pendurado no seu corpo e como a força viaja até a lâmina de corte.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se você já tem certeza de qual formato prefere e quer ver direto as máquinas testadas, confira nossos rankings dedicados da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira lateral (a gasolina e elétrica)
            </a>{' '}
            e da{' '}
            <a href="/melhor-rocadeira-costal" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira costal
            </a>
            .
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, destrinchei a mecânica do eixo rígido contra o eixo flexível, o custo de manutenção de cada sistema e o checklist prático de campo para você acertar na compra.
          </p>
        </div>

        {/* Imagem Principal Contextual */}
        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/blog/qual-a-melhor-rocadeira-costal-ou-lateral.webp"
            alt="Roçadeira lateral de eixo rígido com guidão duplo ao lado de roçadeira costal tipo mochila com cabo flexível"
            title="Diferença estrutural entre roçadeira lateral e roçadeira costal"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
            loading="lazy"
          />
          <span className="text-xs text-gray-500 italic mt-2 text-center">
            Lado a lado: a transmissão em linha reta da roçadeira lateral contra a mochila ergonômica com chicote flexível da roçadeira costal.
          </span>
        </div>

        {/* ===================================================================
            3. O CONCEITO BÁSICO: O QUE DEFINE CADA MÁQUINA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            O Conceito Básico: O Que Muda na Mecânica de Cada Máquina?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Uma roçadeira lateral de 43 cilindradas e uma costal de 43 cilindradas da mesma fabricante costumam usar exatamente o mesmo bloco de motor, o mesmo carburador e a mesma vela de ignição.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              A diferença estrutural está na transmissão entre a campana da embreagem e o tubo de alumínio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <span className="inline-block bg-[#1a1a1a] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Roçadeira Lateral (Clássica de Guidão)
              </span>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Motor no Tubo + Eixo Cardã Rígido
              </h3>
              <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                O motor fica aparafusado direto na ponta traseira do tubo de alumínio, formando uma peça única reta e rígida de cerca de 1,80 metro.
              </p>
              <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                O operador veste um cinto de dois ombros, prende a máquina por um gancho na altura do quadril direito e controla a varredura segurando um guidão duplo tipo bicicleta com as duas mãos.
              </p>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <span className="inline-block bg-[#166534] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Roçadeira Costal (Modelo Mochila)
              </span>
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Motor nas Costas + Chicote Flexível
              </h3>
              <p className="mb-3 text-sm text-gray-800 leading-relaxed">
                O motor fica isolado sobre uma armação acolchoada nas costas do operador e se conecta ao tubo de corte através de uma mangueira preta articulada de cerca de 90 cm.
              </p>
              <p className="mb-0 text-sm text-gray-800 leading-relaxed">
                Por dentro dessa mangueira gira um cabo de aço flexível, deixando os braços livres para apontar a haste de corte para cima, para baixo ou entre pés de café usando uma alça circular (tipo D).
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. ANÁLISE PROFUNDA: ROÇADEIRA LATERAL (CARDÃ, VARREDURA, PRÓS E CONTRAS)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Análise de Bancada: Roçadeira Lateral (Força Bruta e Varredura)
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 border-l-4 border-[#16A34A] pl-3">
                1. A Engenharia do Eixo Rígido (Cardã)
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Por dentro do tubo de alumínio de 26 mm ou 28 mm da roçadeira lateral corre uma vareta inteiriça de aço temperado (o eixo cardã), apoiada sobre buchas autolubrificantes.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Como não existem curvas no caminho, a perda de potência por atrito é próxima de zero: todo o coice do motor chega inteiro na ponteira, permitindo usar desde fio de nylon grosso até{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  discos de serra circular com dentes de vídea
                </a>{' '}
                para derrubar arbustos lenhosos sem torcer a transmissão.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 border-l-4 border-[#16A34A] pl-3">
                2. Ergonomia e Cadência de Varredura em Área Plana
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Quando o terreno é plano ou tem inclinação suave, o peso do motor traseiro funciona como contrapeso perfeito para o peso da ponteira dianteira no gancho do cinto.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Você trabalha como um pêndulo: gira apenas a cintura da direita para a esquerda e abre faixas limpas de até 1,5 metro de largura a cada passada, entregando a maior produtividade por hora em lotes abertos e pastagens.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
              <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Check size={18} className="text-[#16A34A] shrink-0" /> Vantagens Técnicas da Lateral
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Transferência direta de torque que aguenta impactos pesados e serras circulares.</li>
                <li>O motor trabalha longe das costas, evitando calor e suor excessivo na coluna.</li>
                <li>Manutenção mecânica mais simples e barata (não tem cabo flexível para romper).</li>
                <li>Mais rápida de soltar do gancho lateral para reabastecer ou dar nova partida.</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <AlertTriangle size={18} className="text-red-600 shrink-0" /> Desvantagens da Lateral
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                <li>Em barrancos íngremes, o guidão largo bate na terra e o motor puxa o operador para o lado.</li>
                <li>Difícil de manobrar dentro de valetas fundas, jardins apertados ou cafezais fechados.</li>
                <li>Se o cinto estiver mal regulado, transfere o peso de um lado só para o quadril direito.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            6. ANÁLISE PROFUNDA: ROÇADEIRA COSTAL (EIXO FLEXÍVEL, PESO E LIMITES)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Análise de Bancada: Roçadeira Costal (Agilidade em Encostas)
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 border-l-4 border-[#16A34A] pl-3">
                1. A Engenharia do Eixo Flexível
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Na roçadeira costal, o motor apoia-se em uma base giratória nas costas e transmite o giro através de um cabo de aço espiralado revestido por um conduíte polimérico flexível.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Essa articulação desacopla o movimento dos braços da posição do motor: você pode erguer a lâmina acima da linha do peito para limpar um talude alto ou baixá-la dentro de uma vala sem inclinar a coluna.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 border-l-4 border-[#16A34A] pl-3">
                2. Ergonomia: O Peso Desaparece?
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Na balança da oficina, uma costal completa pesa cerca de 9,8 kg a 10,5 kg (até 1,5 kg a mais que uma lateral equivalente por causa do quadro da mochila e do chicote).
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Porém, a sensação física nos braços é de leveza imediata: como 80% dessa massa fica centralizada nos dois ombros e na lombar, suas mãos carregam apenas cerca de 2 quilos da haste de alumínio.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#16A34A]/30">
              <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Check size={18} className="text-[#16A34A] shrink-0" /> Vantagens Técnicas da Costal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Estabilidade superior para caminhar em ladeiras, pedras úmidas e taludes de açudes.</li>
                <li>Liberdade total nos punhos para contornar pés de café, árvores frutíferas e cercas.</li>
                <li>Peso dividido simetricamente nos dois ombros em vez de pender de um lado só.</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <AlertTriangle size={18} className="text-red-600 shrink-0" /> O "Calcanhar de Aquiles" da Costal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-red-800 list-disc list-inside leading-relaxed">
                <li>O cabo flexível aquece e pode quebrar se trabalhar sem graxa ou dobrado em ângulo fechado.</li>
                <li>O motor aquece as costas do operador em dias de calor forte acima de 30 °C.</li>
                <li>Para ligar o motor novamente após uma parada, é preciso desvestir a mochila das costas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. TABELA COMPARATIVA RÁPIDA: ROÇADEIRA LATERAL X COSTAL
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Comparativo Rápido: Roçadeira Lateral vs. Roçadeira Costal
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Diferencial Técnico</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeira Lateral (Guidão)</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeira Costal (Mochila)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Terreno Indicado</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Terrenos planos, lotes urbanos, pastos e campos abertos</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Barrancos, taludes íngremes, valetas, cafezais e pomares</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Transmissão de Força</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Eixo cardã rígido direto (100% do torque na lâmina)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Cabo flexível articulado + cardã na haste dianteira</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Distribuição do Peso</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Suspensa no gancho lateral do cinto duplo (7 a 8,8 kg)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Motor nas costas (~7,5 kg) + apenas ~2 kg nas mãos</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Acessórios de Corte</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Aceita tudo: nylon, facas 2/3 pontas e serra circular de vídea</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Excelente com nylon e facas 2/3 pontas (evitar pancadas em troncos)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Manutenção Crítica</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Engraxar a ponteira (transmissão angular) a cada 30–50h</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Engraxar o cabo flexível interno + ponteira a cada 30h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            8. COMPARATIVO DE MANUTENÇÃO E SEGURANÇA (EPIS ESPECÍFICOS)
            =================================================================== */}
        <section className="mb-14 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Comparativo de Manutenção: Qual Dá Mais Despesa na Oficina?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#166534] mb-3">
                  Manutenção da Roçadeira Lateral
                </h3>
                <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                  É a campeã em baixo custo mecânico: como o cardã é uma barra maciça dentro do tubo reto, ele raramente quebra mesmo após anos de serviço pesado.
                </p>
                <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                  Sua única obrigação na transmissão é abrir o parafuso lateral da ponteira a cada 25 a 50 horas para aplicar a{' '}
                  <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    melhor graxa para roçadeira
                  </a>
                  , além de cuidar da mistura correta do{' '}
                  <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    óleo 2 tempos na gasolina
                  </a>
                  .
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#166534] mb-3">
                  Manutenção da Roçadeira Costal
                </h3>
                <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                  Exige um cuidado extra inegociável: a cada 30 horas de roçada, você precisa soltar o pino do conduíte preto, puxar o cabo de aço flexível para fora, limpar a graxa escura e aplicar graxa nova de alta temperatura.
                </p>
                <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                  Se o operador esquecer essa lubrificação, o cabo trabalha seco, destempera pelo calor do atrito e se rompe no meio do trecho, gerando gasto extra com peça de reposição.
                </p>
              </div>
            </div>
          </div>

          {/* Segurança: EPIs específicos */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Segurança no Trecho: Cuidados e EPIs Específicos para Cada Modelo
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-amber-700 shrink-0" />
                  Na Lateral: Proteção Contra Contragolpe
                </h3>
                <p className="mb-3 text-sm text-amber-950 leading-relaxed">
                  Como a lâmina da roçadeira lateral trabalha em arcos largos perto do nível dos pés, o maior perigo é o contragolpe (ricochete lateral quando o disco bate em toco ou pedra escondida).
                </p>
                <p className="mb-0 text-sm text-amber-950 leading-relaxed">
                  Jamais opere sem perneiras rígidas do tornozelo ao joelho, botina de couro com biqueira firme, viseira facial de tela/policarbonato e abafador auricular.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-amber-700 shrink-0" />
                  Na Costal: Fivela de Soltura Rápida
                </h3>
                <p className="mb-3 text-sm text-amber-950 leading-relaxed">
                  Na costal, o motor quente e o tanque de gasolina ficam presos às suas costas: se você escorregar num barranco, topar com uma caixa de marimbondos ou notar vazamento no tanque, precisa ejetar a mochila em 2 segundos.
                </p>
                <p className="mb-0 text-sm text-amber-950 leading-relaxed">
                  Antes de ligar a máquina, treine o destravamento rápido das fivelas peitorais e use sempre botina com solado tratorado antiderrapante para não deslizar na ladeira.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. MOTOR 2T VS 4T, ERROS COMUNS E DICAS PARA USAR COM MENOS ESFORÇO
            =================================================================== */}
        <section className="mb-14 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              O Fator Motor: 2 Tempos ou 4 Tempos? (E Onde Entra a Elétrica)
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Mais de 90% das roçadeiras costais e laterais profissionais usam motor 2 tempos (em que o óleo vai misturado na gasolina) por um motivo técnico simples: como não possuem cárter de óleo líquido, elas podem trabalhar inclinadas em barrancos de 45 graus sem faltar lubrificação no cilindro.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Já os motores 4 tempos (que usam gasolina pura no tanque e óleo separado no cárter) são mais silenciosos, econômicos e não soltam fumaça, mas exigem conferência constante do nível na vareta e atenção ao limite de inclinação em ladeiras severas.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                E se o seu terreno for um quintal residencial compacto de até 300 m² com tomada por perto, vale avaliar também nosso comparativo sobre{' '}
                <a href="/rocadeira-eletrica-ou-a-gasolina" className="text-[#166534] font-semibold hover:underline">
                  roçadeira elétrica ou a gasolina
                </a>
                .
              </p>
            </div>
          </div>

          <div className="my-8 flex flex-col items-center">
            <img
              src="/images/blog/rocadeira-lateral-vs-costal-terreno-operacao.webp"
              alt="Operador com EPIs completos trabalhando com postura ergonômica em terreno rural com transição de área plana para talude inclinado"
              title="Escolha entre roçadeira lateral e costal conforme a topografia do terreno"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              A topografia dita a máquina: áreas abertas pedem a cadência larga da lateral; encostas e pomares fechados pedem a liberdade da costal.
            </span>
          </div>

          {/* Dicas para usar qualquer modelo com menos esforço + Erros comuns */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Erros Comuns na Compra vs. Dicas para Roçar com Metade do Esforço
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                  <AlertTriangle size={20} className="text-red-600 shrink-0" /> 4 Erros Comuns Antes de Comprar
                </h3>
                <ul className="space-y-2.5 text-red-800 text-sm list-disc list-inside leading-relaxed">
                  <li>Comprar roçadeira lateral pesada (52 cc+) para limpar barrancos íngremes ou valas estreitas.</li>
                  <li>Comprar roçadeira costal para roçar 2 hectares de terreno totalmente plano no verão.</li>
                  <li>Escolher pelo maior número de cilindradas ignorando a qualidade do cinto ou da mochila.</li>
                  <li>Trabalhar com disco cego ou carretel desbalanceado que multiplica a vibração nas mãos.</li>
                </ul>
              </div>

              <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
                <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                  <Check size={20} className="text-[#16A34A] shrink-0" /> Como Trabalhar com Menos Esforço
                </h3>
                <ul className="space-y-2.5 text-[#166534] text-sm list-disc list-inside leading-relaxed">
                  <li>Equilibre o ponto de engate da lateral para a ponteira flutuar a 10 cm do chão sem usar os braços.</li>
                  <li>
                    Na{' '}
                    <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-bold underline">
                      limpeza de terreno com mato alto
                    </a>
                    , desbaste na metade da altura na ida e baixe rente ao chão na volta.
                  </li>
                  <li>
                    Mantenha a faca de aço sempre afiada e aprenda{' '}
                    <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-bold underline">
                      como trocar a lâmina pelo carretel
                    </a>{' '}
                    nas bordas.
                  </li>
                  <li>
                    Calibre a lenta e a alta rotação seguindo o guia de{' '}
                    <a href="/como-regular-rocadeira" className="text-[#166534] font-bold underline">
                      como regular o carburador da roçadeira
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. RECOMENDAÇÕES POR CONTEXTO DE USO (TABELA) + VEREDITO CHECKLIST
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Recomendações Diretas por Contexto de Uso e Terreno
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Seu Cenário Real de Trabalho</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Modelo Vencedor</th>
                  <th className="p-3.5 sm:p-4">Justificativa Técnica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Lotes urbanos, chácaras planas e pastagens abertas</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534]">Roçadeira Lateral (33 cc a 52 cc)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">O guidão duplo permite passadas largas de alta velocidade com zero calor nas costas.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cafezais de montanha, pomares densos e reflorestamento</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534]">Roçadeira Costal (41,5 cc a 43 cc)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Passa entre fileiras estreitas de plantas sem enroscar o guidão nem cansar os braços.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Taludes de rodovias, margens de açudes e barrancos</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534]">Roçadeira Costal (Mochila)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Mantém o centro de gravidade colado ao tronco e permite roçar de baixo para cima na ladeira.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Desbaste bruto de capoeira grossa com disco de serra</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534]">Roçadeira Lateral Pesada (43 cc+)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">O eixo cardã rígido suporta a inércia e o impacto de discos de vídea em caules lenhosos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Veredito Definitivo: O Checklist da Decisão
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0FDF4] p-6 rounded-2xl border-2 border-[#16A34A]">
              <h3 className="text-xl font-black text-[#166534] uppercase mb-3">
                Escolha a ROÇADEIRA COSTAL se:
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Seu terreno tem ladeiras fortes, barrancos, valas de drenagem ou beiras de represa.</li>
                <li>Você trabalha no meio de cafezais, bananais ou pomares onde o guidão largo não passa.</li>
                <li>Você sente fadiga rápida nos punhos e prefere carregar o peso distribuído nos dois ombros.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-800">
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase mb-3">
                Escolha a ROÇADEIRA LATERAL se:
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Mais de 70% da sua área é plana ou levemente ondulada (lotes, sítios e pastos abertos).</li>
                <li>Você precisa de força bruta com disco de aço ou serra circular para derrubar mato grosso.</li>
                <li>Você quer a mecânica mais simples, fresca nas costas e com menor custo de manutenção.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            11. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Roçadeira Lateral ou Costal
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
            12. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE) + DICA DE OURO + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Considerações Finais: Respeite a Topografia do Seu Terreno
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Definir qual a melhor roçadeira costal ou lateral fica fácil quando você olha primeiro para a inclinação do chão e não apenas para a potência estampada na caixa.
              </p>
              <p className="mb-4 leading-relaxed">
                Deixe a roçadeira lateral de eixo rígido reinar nos terrenos planos e no desbaste pesado, e convoque a roçadeira costal sempre que os barrancos, valetas e carreiras de café exigirem braços leves e equilíbrio firme.
              </p>
              <p className="mb-0 leading-relaxed">
                Regule o cinto na medida do seu corpo, mantenha a transmissão engraxada e faça um serviço limpo e seguro no trecho!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Dica de Ouro do José Ailton */}
        <div className="w-full flex justify-center mt-12 mb-4">
          <a href="/author/jose-ailton/" aria-label="Ver perfil operacional de José Ailton da Silva">
            <img
              src="/images/autores/José Ailton da Silva-thumb.webp"
              alt="José Ailton da Silva"
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
              Dica de Ouro do José Ailton: O Segredo para Não Quebrar o Cabo da Costal na Partida
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Sempre que for dar a partida na roçadeira costal no chão, alinhe o tubo de corte reto à frente da mochila para que o chicote preto não fique torcido enquanto o motor pega.
              </p>
              <p className="mb-0">
                Só acelere fundo depois que a mochila já estiver vestida e travada nas costas, evitando que a ponteira dê um chicote brusco no solo e desgaste as ponteiras quadradas do cabo flexível.
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

export default QualAMelhorRocadeiraCostalOuLateral;
