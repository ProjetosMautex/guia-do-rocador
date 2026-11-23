import React, { useState } from 'react';
import { BunnerDoMeiofiodenylonpararocadeira } from './BunnerDoMeiofiodenylonpararocadeira';
import { ExitIntentPopupfiodenylonpararocadeira } from './ExitIntentPopupfiodenylonpararocadeira';

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

const RotateCcw = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <path d="M3 3v5h5"></path>
  </svg>
);

// Dúvidas Frequentes (FAQ)
const faqTutorial = [
  {
    q: "Para qual lado desrosqueia a porca da lâmina na roçadeira?",
    a: [
      "A imensa maioria das roçadeiras trabalha com rosca esquerda invertida no eixo de transmissão.",
      "Para afrouxar a porca ou soltar o carretel antigo, você deve girar a chave no sentido horário (para a direita).",
      "Já para apertar e fixar a lâmina nova, você gira no sentido anti-horário (para a esquerda)."
    ]
  },
  {
    q: "O que acontece se eu montar a lâmina sem o prato limitador inferior?",
    a: [
      "O prato limitador protege a porca de fixação contra o impacto e o atrito constante com a terra e pedras.",
      "Sem ele, a cabeça da porca gasta rapidamente até perder a forma do sextavado, tornando impossível encaixar a chave para trocas futuras.",
      "Além disso, a falta do prato compromete a pressão de aperto das flanges e faz o disco vibrar no eixo."
    ]
  },
  {
    q: "Como saber se preciso de anel redutor no furo da lâmina?",
    a: [
      "Basta verificar se o furo central do disco ou lâmina tem folga ao ser apoiado na flange interna da roçadeira.",
      "Os eixos mais comuns possuem diâmetro de 20 mm ou 25,4 mm (1 polegada).",
      "Se o furo da lâmina for de 25,4 mm e o seu eixo for de 20 mm, o anel redutor centralizador é obrigatório para não deixar a lâmina descentralizada."
    ]
  },
  {
    q: "Posso usar a lâmina de aço ou disco de serra sem a saia de proteção?",
    a: [
      "Nunca ligue a roçadeira sem a saia protetora adequada instalada na haste.",
      "Além de proteger as suas pernas contra gravetos e lascas de pedra arremessadas em alta velocidade, o protetor delimita a distância segura de trabalho.",
      "Certifique-se apenas de usar a proteção metálica ou o defletor indicado para lâminas rígidas."
    ]
  }
];

export const ComoTrocarLaminaRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* ===================================================================
          1. HERO (CABEÇALHO ESCURO COM IMAGEM DE FUNDO OTIMIZADA PARA LCP)
          =================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/como-trocar-a-lamina-da-rocadeira.webp"
            alt="Operador profissional trocando lâmina de roçadeira na bancada com chave de vela e pino de trava na transmissão"
            title="Como trocar a lâmina da roçadeira passo a passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Tutorial Prático de Oficina e Campo
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Como Trocar a Lâmina ou Disco na Roçadeira (Passo a Passo)
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Aprenda como trocar a lâmina da roçadeira e como colocar o disco com segurança, conhecendo a ordem correta das arruelas e o sentido da rosca esquerda.
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
            Quem trabalha na limpeza de terrenos sabe que uma única ferramenta de corte não resolve todos os tipos de vegetação no campo.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            O carretel de nylon é imbatível para dar acabamento rente a muros, calçadas e árvores delicadas sem quebrar as bordas.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Porém, quando a frente de serviço fecha com capim alto, pasto sujo, braquiária densa ou brotos lenhosos, a lâmina de aço ou o disco de serra circular tornam-se indispensáveis.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se você ainda tem dúvidas sobre qual lâmina é a mais indicada para o seu tipo de vegetação, consulte o nosso guia sobre <a href="/lamina-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor lâmina para roçadeira</a> com o comparativo de modelos.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            A troca do conjunto de corte é simples e leva menos de cinco minutos, mas exige atenção rigorosa ao sentido da rosca invertida e à ordem exata das arruelas na ponteira.
          </p>
        </div>

        {/* ===================================================================
            3. PREPARAÇÃO E SEGURANÇA ANTES DE MEXER NA TRANSMISSÃO
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Preparação e Segurança Antes de Mexer na Ponteira
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase">
                <ShieldAlert size={18} />
                <span>1. Isole o Motor da Máquina</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Desconecte o cachimbo da vela de ignição em roçadeiras a gasolina ou remova a bateria nos modelos elétricos para eliminar qualquer chance de partida acidental por giro manual.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase">
                <AlertTriangle size={18} />
                <span>2. Use Luvas de Raspa ou Vaqueta</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Mesmo com a máquina desligada, os dentes de vídea do disco e os cantos afiados da lâmina nova cortam a pele com facilidade caso a chave escape na hora da força.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-[#166534] font-bold text-sm uppercase">
                <Check size={18} />
                <span>3. Escolha um Piso Limpo</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Nunca faça a troca sobre o capim alto onde porcas ou arruelas podem sumir. Trabalhe sobre uma lona, bancada ou piso de concreto com a tampa do tanque bem vedada.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-[#166534] font-bold text-sm uppercase">
                <Wrench size={18} />
                <span>4. Separe as Ferramentas Certas</span>
              </div>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Você precisará apenas do pino de trava (ou chave Allen fina de 4 mm ou 5 mm) e da chave de vela combinada no soquete exato da porca do eixo.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. QUAL ACESSÓRIO INSTALAR E O LADO CERTO
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Qual Acessório Instalar e Como Saber o Lado Certo?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Nem toda lâmina de corte se comporta da mesma forma sobre o eixo da roçadeira.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Entender a diferença de rotação entre lâminas retas e discos circulares com dentes evita desgastes tortos e garante o rendimento máximo na vegetação.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Tipo de Acessório</th>
                  <th className="p-3.5 sm:p-4">Indicação no Campo</th>
                  <th className="p-3.5 sm:p-4">Atenção na Montagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Lâmina de 2, 3 ou 4 Pontas</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Capim médio a pesado, pasto, mato alto e gravetos finos.</td>
                  <td className="p-3.5 sm:p-4 text-[#166534] font-medium">Não tem lado único de corte; você pode inverter a face para gastar os dois gumes.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Disco Circular de Dentes (24 a 80 dentes)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Mato fechado, capoeira grossa e pequenos arbustos lenhosos.</td>
                  <td className="p-3.5 sm:p-4 text-amber-900 font-medium">Tem sentido obrigatório de giro com os dentes atacando para a frente conforme a seta.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
            <p className="font-bold mb-2 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-700" />
              Detalhe vital de centralização do furo central
            </p>
            <p className="mb-0">
              Os diâmetros de furo central mais comuns no mercado são 20 mm e 25,4 mm (1 polegada). Se o furo da lâmina nova for maior do que o ressalto da flange interna da sua roçadeira, utilize obrigatoriamente um anel redutor centralizador para eliminar qualquer folga lateral antes do aperto final.
            </p>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (FIO DE NYLON)
            =================================================================== */}
        <div className="my-14">
          <BunnerDoMeiofiodenylonpararocadeira />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO: COMO TROCAR A LÂMINA DA ROÇADEIRA
            =================================================================== */}
        <section className="mb-14">
          <div className="border-b-2 border-gray-100 pb-3 mb-6">
            <span className="text-xs font-black text-[#16A34A] uppercase tracking-wider block">
              Sequência Mecânica Prática
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
              Como Colocar o Disco na Roçadeira e Trocar a Lâmina
            </h2>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mb-8">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Quer você esteja tirando o carretel de nylon para instalar uma faca de aço, quer esteja trocando um disco antigo gasto por um novo, execute as 7 etapas abaixo na ordem exata.
            </p>
          </div>

          {/* Foto de Ordem de Montagem das Arruelas */}
          <div className="my-8 flex flex-col items-center">
            <img
              src="/images/blog/ordem-montagem-arruelas-lamina-rocadeira.webp"
              alt="Ordem exata de montagem das peças na roçadeira: flange interna, lâmina de aço, flange externa estriada, prato limitador e porca de rosca esquerda"
              title="Ordem de montagem da lâmina e flanges da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Sequência correta: Flange Interna ➔ Lâmina / Disco ➔ Flange Externa Estriada ➔ Prato Limitador ➔ Porca Esquerda
            </span>
          </div>

          <div className="space-y-6">
            {/* Passo 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Trave o Eixo da Transmissão
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Localize o pequeno orifício passante na lateral da caixa de engrenagens, bem atrás do cabeçote de corte.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Introduza o pino de trava metálico ou uma chave Allen fina e gire o conjunto lentamente com a mão até o pino afundar no encaixe interno e travar o giro do eixo completamente.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Solte o Acessório Antigo (Atenção à Rosca Esquerda)
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                A rosca de transmissão da roçadeira é invertida para impedir que o cabeçote se solte durante o sentido de giro do corte.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Para soltar a porca sextavada ou desrosquear o carretel de nylon com o eixo travado, gire a chave no sentido horário (para a direita).
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Desmonte as Peças e Limpe o Alojamento
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Retire o acessório anterior, o prato limitador, a flange externa e remova restos de vegetação enrolados atrás da flange interna.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Passe um pano seco ou escova de cerdas para tirar terra acumulada, pois qualquer resíduo preso entre as arruelas faz a lâmina nova assentar torta.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Encaixe a Nova Lâmina ou Disco de Corte
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Posicione o acessório de aço diretamente sobre a flange interna encostada na caixa de engrenagens.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Passe as pontas dos dedos ao redor do furo central para certificar-se de que a lâmina repousou perfeitamente no degrau guia de centralização, sem qualquer jogo.
              </p>
            </div>

            {/* Passo 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Monte as Flanges e o Prato Limitador na Ordem Certa
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Sobre a lâmina já encaixada, instale primeiro a flange externa casando o estriado interno com as estrias do eixo.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Em seguida, encaixe o prato limitador giratório e comece a rosquear a porca de fixação com a mão para não cruzar a rosca.
              </p>
            </div>

            {/* Passo 6 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  6
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Aperte a Porca no Sentido Anti-Horário
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Com o pino de trava bloqueando o eixo da caixa, use a chave de vela para apertar a porca girando no sentido anti-horário (para a esquerda).
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Aplique um torque firme e seco com os braços, sem necessidade de bater com martelo ou usar canos extensores para não espanar a ponta do fuso.
              </p>
            </div>

            {/* Passo 7 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  7
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 m-0">
                  Retire a Trava e Faça o Teste Manual
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Puxe o pino de trava ou a chave Allen para fora do orifício da transmissão antes de qualquer outra ação.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Com as luvas nas mãos, gire a lâmina devagar para verificar se ela gira alinhada, plana e sem raspar no protetor da roçadeira.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. COMO VOLTAR PARA O CARRETEL DE NYLON
            =================================================================== */}
        <section className="mb-14 p-6 sm:p-8 bg-gray-50 rounded-3xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="text-[#166534] w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
              Como Voltar para o Carretel de Nylon com Facilidade
            </h2>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Quando a roçada bruta de capoeira terminar e for a hora de fazer os acabamentos de calçada, o retorno ao fio de nylon é ainda mais veloz:
            </p>
            <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Trave o eixo com o pino e solte a porca girando no sentido horário com a chave de vela.
            </p>
            <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Retire a porca, o prato limitador, a flange externa e a lâmina de aço, guardando todas essas arruelas juntas num recipiente fechado para não perder nenhuma peça.
            </p>
            <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Mantenha apenas a flange interna encaixada na ponteira e rosqueie o cabeçote de nylon diretamente no eixo girando no sentido anti-horário até encostar com firmeza.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Para ver o destravamento de rosca emperrada veja{' '}
              <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#16A34A] font-semibold hover:underline">
                como tirar e colocar o carretel da roçadeira
              </a>
              , e se precisar rebobinar a linha sem travar a mola siga nosso guia de{' '}
              <a href="/como-colocar-fio-na-rocadeira" className="text-[#16A34A] font-semibold hover:underline">
                como colocar fio na roçadeira sem embolar
              </a>
              .
            </p>
          </div>
        </section>

        {/* ===================================================================
            8. ERROS QUE ESTRAGAM A TRANSMISSÃO E GERAM RISCO
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Erros que Estragam a Transmissão (e Colocam Você em Risco)
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-900 text-base mb-1 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600 shrink-0" />
                Dar partida com o pino de trava esquecido na ponteira
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-red-800 leading-relaxed">
                Esse descuido trava as engrenagens cônicas no instante da explosão do motor, podendo quebrar os dentes do pinhão na hora ou torcer o eixo cardã da haste.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-900 text-base mb-1 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600 shrink-0" />
                Acelerar sentindo vibração forte no guidão
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-red-800 leading-relaxed">
                Se a máquina começou a trepidar além do normal logo após a troca, pare imediatamente: quase sempre indica que a lâmina sentou fora do degrau de centralização, perdeu o balanceamento (veja{' '}
                <a href="/como-amolar-disco-de-rocadeira" className="text-red-900 font-semibold underline">
                  como amolar e balancear o disco
                </a>
                ) ou usa medida diferente da flange — confira a tabela de{' '}
                <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-red-900 font-semibold underline">
                  furo 20 mm vs. 25,4 mm na linha Stihl
                </a>
                .
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-900 text-base mb-1 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600 shrink-0" />
                Continuar operando com lâmina trincada ou empenada
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-red-800 leading-relaxed">
                Bater contra pedras ou mourões pode abrir microfissuras no aço. Uma faca trincada girando a 9.000 rotações por minuto pode se partir e arremessar estilhaços afiados a dezenas de metros.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-900 text-base mb-1 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600 shrink-0" />
                Montar a porca direto contra o aço sem a flange externa
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-red-800 leading-relaxed">
                Sem a flange externa estriada, a porca não consegue prensar a lâmina uniformemente, fazendo o acessório patinar e espanando a rosca da ponteira.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. CUIDADOS DE CAMPO PARA PROLONGAR A VIDA ÚTIL
            =================================================================== */}
        <section className="mb-14 p-6 sm:p-8 bg-green-50/40 rounded-3xl border border-[#16A34A]/20">
          <h2 className="text-xl sm:text-2xl font-black text-[#166534] uppercase tracking-tight mb-4">
            Cuidados de Campo para Prolongar a Vida Útil da Roçadeira
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-800">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">
                1. Lubrifique a Caixa de Transmissão
              </h3>
              <p className="mb-3 text-xs sm:text-sm leading-relaxed text-gray-700">
                Na lateral da ponteira metálica existe um parafuso curto que fecha o duto de lubrificação das engrenagens cônicas.
              </p>
              <p className="mb-0 text-xs sm:text-sm leading-relaxed text-gray-700">
                A cada 20 a 30 horas de serviço pesado com lâmina, retire esse parafuso e injete graxa específica de bissulfeto de molibdênio para evitar o desgaste prematuro da coroa e pinhão.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">
                2. Faça a Pane Seca Antes de Guardar
              </h3>
              <p className="mb-3 text-xs sm:text-sm leading-relaxed text-gray-700">
                Se a roçadeira for ficar mais de 15 dias sem uso após o trabalho, esvazie o tanque de combustível por completo.
              </p>
              <p className="mb-0 text-xs sm:text-sm leading-relaxed text-gray-700">
                Ligue o motor em marcha lenta e deixe-o funcionar até morrer sozinho por falta de combustível, secando os diafragmas do carburador e evitando gomas de{' '}
                <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  óleo 2 tempos
                </a>{' '}
                decantado que depois exigem limpeza ou{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  regulagem do carburador
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ)
            =================================================================== */}
        <section className="mb-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Troca de Lâmina na Roçadeira
          </h2>

          <div className="space-y-4">
            {faqTutorial.map((faq, index) => {
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
                Nunca guarde as arruelas soltas na caçamba da picape ou espalhadas pelo galpão ao colocar o carretel de nylon.
              </p>
              <p className="mb-4 leading-relaxed">
                Coloque a flange externa, o prato limitador e a porca dentro de um pequeno saquinho de pano ou plástico resistente e amarre diretamente na haste da chave de vela com fita isolante ou elástico.
              </p>
              <p className="mb-0 leading-relaxed">
                Dessa forma, sempre que você estiver no meio do mato precisando alternar entre nylon e aço, o kit completo de fixação estará exatamente onde a sua mão vai procurar.
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
