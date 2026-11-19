import React, { useState } from 'react';
import { BunnerDoMeiorocadeira as BannerDoMeio } from './BunnerDoMeiorocadeira';

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

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
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

const Clock = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const ComoMontarRocadeiraNakasaki: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual lado da haste bipartida vai conectado no motor da roçadeira Nakasaki?",
      answer: [
        "Nas roçadeiras Nakasaki de haste bipartida (63cc, 65cc, 75cc e NK-750PRO), a metade do tubo que traz o adesivo com o nome Nakasaki e possui o furo guia mais distante da ponta é a que vai conectada diretamente na campana da embreagem do motor.",
        "Já a metade inferior que contém os adesivos de alerta de segurança e a caixa de engrenagens (ponteira) fica voltada para a lâmina ou carretel de nylon."
      ]
    },
    {
      question: "Para qual lado aperta a porca da lâmina e o carretel de nylon?",
      answer: [
        "Praticamente todas as roçadeiras laterais a gasolina, incluindo toda a linha Nakasaki, utilizam rosca esquerda (rosca inversa) no eixo da caixa de engrenagens.",
        "Isso significa que você deve girar a porca ou o carretel no sentido anti-horário para apertar e no sentido horário para soltar, evitando que o acessório se desrosqueie sozinho durante a rotação de corte."
      ]
    },
    {
      question: "Posso ligar o motor da Nakasaki antes de encaixar o varão na embreagem?",
      answer: [
        "Jamais acione o motor solto sem que o tubo de transmissão e o eixo cardã estejam devidamente acoplados e parafusados na embreagem.",
        "Funcionar o motor em vazio faz as sapatas centrífugas abrirem sem o limite do tambor, podendo romper a mola de retorno ou projetar peças metálicas com força."
      ]
    },
    {
      question: "Qual a proporção correta de óleo 2 tempos para a primeira partida após montar?",
      answer: [
        "De acordo com o manual dos modelos Nakasaki 63cc, 65cc e NK-750PRO (75cc), utiliza-se a proporção de 25:1 (40 ml de óleo 2 tempos para cada 1 litro de gasolina comum) especialmente nas primeiras horas de amaciamento com óleo mineral.",
        <>
          Após abastecer, confira nosso tutorial completo de{' '}
          <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como ligar roçadeira a gasolina passo a passo
          </a>
          .
        </>
      ]
    },
    {
      question: "Por que o eixo gira, mas a lâmina ou o carretel não rodam ao acelerar?",
      answer: [
        "Esse sintoma indica que o eixo cardã interno (vareta estriada) não encaixou até o fundo das estrias do tambor da embreagem ou da luva central do varão bipartido.",
        "Afrouxe a conexão central, gire levemente o cabeçote de corte com a mão até sentir o eixo interno encaixar totalmente nas estrias e trave novamente o pino de segurança."
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
            src="/images/blog/como-montar-rocadeira-nakasaki.webp"
            alt="Como Montar Roçadeira Nakasaki Passo a Passo Completo"
            title="Como Montar Roçadeira Nakasaki (63cc, 65cc, 75cc e NK-750PRO)"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Montar Roçadeira Nakasaki <br />
            <span className="text-[#16A34A]">[Passo a Passo Completo]</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                />
                <span>Carlos Henrique</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Técnico em Mecânica de Equipamentos</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA + SUMÁRIO)
            =================================================================== */}
        <section className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
            Montar um equipamento novo pode ser desafiador, especialmente quando o manual não oferece a clareza necessária.
          </p>
          <p>
            A falta de familiaridade com as peças e a sequência correta de montagem gera frustração e insegurança.
          </p>
          <p>
            Para quem busca praticidade e eficiência, entender cada etapa é fundamental para garantir o bom funcionamento e a durabilidade do seu equipamento.
          </p>
          <p>
            Pensando nisso, preparamos um guia completo sobre como montar roçadeira Nakasaki (incluindo os modelos 63cc, 65cc, como montar roçadeira Nakasaki 75cc e como montar roçadeira Nakasaki NK 750 PRO) sem dificuldades.
          </p>
          <p>
            Começaremos detalhando todas as peças, parafusos e a ordem universal de como montar roçadeira, para que você se familiarize com cada componente antes de iniciar a montagem propriamente dita.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-montar-rocadeira-nakasaki.webp"
              alt="Como Montar Roçadeira Nakasaki"
              title="Como Montar Roçadeira Nakasaki Passo a Passo"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Sumário Rápido de Navegação */}
          <nav aria-label="Sumário do guia de montagem" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-8 not-prose">
            <h2 className="text-base font-black text-[#1a1a1a] uppercase tracking-wide mb-3">
              Navegação Rápida deste Guia:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm font-semibold text-[#166534]">
              <li>
                <a href="#como-montar-rocadeira" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Montar Roçadeira (Passo a Passo Geral)
                </a>
              </li>
              <li>
                <a href="#como-montar-rocadeira-nakasaki" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Montar Roçadeira Nakasaki (63cc, 65cc e 75cc)
                </a>
              </li>
              <li>
                <a href="#como-montar-rocadeira-nakasaki-75cc" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Montar Roçadeira Nakasaki 75cc
                </a>
              </li>
              <li>
                <a href="#como-montar-rocadeira-nakasaki-nk-750-pro" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Montar Roçadeira Nakasaki NK 750 PRO
                </a>
              </li>
              <li>
                <a href="#ajustes-finais" className="hover:underline flex items-center gap-2">
                  <span>→</span> Ajustes Finais e Primeira Partida
                </a>
              </li>
              <li>
                <a href="#perguntas-frequentes" className="hover:underline flex items-center gap-2">
                  <span>→</span> Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </nav>
        </section>

        {/* ===================================================================
            3. PEÇAS E PARAFUSOS + CHECKLIST DE FERRAMENTAS
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Peças e Parafusos da Roçadeira
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            Antes de iniciar a montagem, o primeiro passo fundamental é a conferência e organização de todos os componentes fornecidos.
          </p>
          <p>
            Realizar uma triagem minuciosa dos parafusos e ferragens é a melhor estratégia para evitar erros comuns, como o uso de peças incompatíveis ou o travamento indevido de roscas.
          </p>
          <p>
            Ao preparar cada item em uma superfície limpa, você garante que a estrutura seja montada com a integridade mecânica necessária para suportar as vibrações do dia a dia.
          </p>
        </div>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Ferramentas que Acompanham o Kit de Montagem
              </h3>
              <p className="text-sm text-gray-600 m-0">
                Separe os itens do estojo de ferramentas da sua roçadeira antes de começar:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chaves Allen (4mm e 5mm)</span>
                <span className="text-xs text-gray-600">Para os 4 parafusos da embreagem, braçadeira do guidão e saia.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave Combinada de Vela e Philips</span>
                <span className="text-xs text-gray-600">Para apertar a porca da lâmina (rosca esquerda) e parafusos auxiliares.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Boca nº 8 / 10</span>
                <span className="text-xs text-gray-600">Para regulagem do cabo do acelerador e porcas sextavadas.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Graxa para Engrenagens e Dosador 2T</span>
                <span className="text-xs text-gray-600">Para lubrificar o graxeiro da ponteira e misturar gasolina com óleo 2T.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. COMO MONTAR ROÇADEIRA (PASSO A PASSO UNIVERSAL)
            =================================================================== */}
        <section id="como-montar-rocadeira" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter border-b-2 border-gray-100 pb-3">
            Como Montar Roçadeira Lateral ou Bipartida a Gasolina
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-6 space-y-4">
            <p>
              Montar uma roçadeira lateral ou bipartida a gasolina exige seguir uma ordem prática com as ferramentas que acompanham o equipamento.
            </p>
            <p>
              Confira o resumo das 4 etapas essenciais que valem para qualquer roçadeira antes de avançarmos para o detalhamento peça por peça:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                1. Unir Tubo de Transmissão e Embreagem
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="m-0">
                  Encaixe o eixo cardã (o eixo interno que faz a força rodar) até o fundo do tambor da embreagem, garantindo que esteja bem acoplado.
                </p>
                <p className="m-0">
                  Conecte a haste de alumínio (tubo) no motor ou na junção central alinhando os furos e aperte os parafusos com leveza para não espanar a rosca; no modelo bipartido, una a trava central e fixe o parafuso de segurança.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                2. Montar o Guidão ou Empunhadura
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="m-0">
                  Posicione o guidão (em formato de U ou circular, dependendo do modelo) sobre o suporte no tubo.
                </p>
                <p className="m-0">
                  Insira as peças de borracha de proteção e os parafusos da braçadeira, ajustando a posição para o seu conforto ergonômico e apertando os parafusos de forma igual.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                3. Instalar a Proteção da Lâmina / Carretel
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="m-0">
                  Fixe a capa protetora de resíduos na parte inferior do tubo, próximo à ponta da engrenagem, usando os parafusos e a chapinha de apoio.
                </p>
                <p className="m-0">
                  Se houver a lâmina de corte do fio de nylon na proteção, certifique-se de que ela está voltada para o lado correto.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                4. Acoplar a Lâmina ou o Carretel de Nylon
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="m-0">
                  Trave o eixo da caixa de engrenagens usando a chave específica ou um pino no furo de travamento.
                </p>
                <p className="m-0">
                  Coloque a lâmina de 3 pontas ou o carretel de nylon encaixando as arruelas e a porca de aperto, lembrando que as roçadeiras possuem rosca esquerda e apertam no sentido anti-horário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. MONTAGEM INICIAL DA ESTRUTURA E BIPÉ
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">
          Montagem Inicial da Estrutura
        </h2>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/blog/Montagem Inicial da Estrutura.webp"
            alt="Montagem Inicial da Estrutura"
            title="Montagem Inicial da Estrutura da Roçadeira Nakasaki"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O alicerce da sua Nakasaki reside na união precisa entre o bloco do motor e o tubo de transmissão.
          </p>
          <p>
            Esta etapa exige rigor técnico para assegurar que o conjunto trabalhe em perfeita harmonia, sem obstruções que possam comprometer a estabilidade do eixo.
          </p>
          <p>
            Ao focar em um posicionamento estável e nivelado, você prepara o terreno para uma fixação robusta que evitará desgastes prematuros e falhas operacionais.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Posicionamento da Peça Principal
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Para iniciar, posicione o corpo da roçadeira de frente para você em uma superfície estável.
          </p>
          <p>
            Essa perspectiva facilita o manuseio e a visualização dos encaixes.
          </p>
          <p>
            Agora, identifique a peça que abriga o mecanismo de fechamento.
          </p>
          <p>
            Com cuidado, posicione-a de modo que o sistema de aperto fique voltado para baixo, posicionado no lado esquerdo do equipamento.
          </p>
          <p>
            Esse alinhamento é crucial: o encaixe deve ser preciso para garantir a profundidade correta de operação, sem travar o movimento do eixo.
          </p>
          <p>
            Um ajuste milimétrico aqui evita folgas perigosas que poderiam comprometer a performance em pleno uso.
          </p>
          <p>
            Certifique-se de que a peça esteja firmemente assentada antes de prosseguir; um encaixe mal posicionado agora gerará instabilidade sistêmica em etapas futuras.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Fixação dos Parafusos Maiores
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Agora, utilize os quatro parafusos de maior calibre para ancorar a estrutura.
          </p>
          <p>
            O segredo de um profissional não está na força bruta, mas no padrão de aperto: siga sempre uma ordem cruzada.
          </p>
          <p>
            Ao fixar o parafuso superior direito, o próximo deve ser o inferior esquerdo, e assim sucessivamente.
          </p>
          <p>
            Essa técnica distribui a pressão de forma equitativa, impedindo que o alojamento sofra deformações ou que a rosca sofra tensões desnecessárias.
          </p>
          <p>
            Aperte-os gradativamente, sem levar ao limite máximo de torque logo na primeira volta.
          </p>
          <p>
            Com essa estratégia de ancoragem em X, você elimina qualquer oscilação indesejada, garantindo que o motor e a haste se comportem como um bloco único e extremamente rígido durante o corte.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">
          Encaixe do Bipé e Ajustes
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O sistema de apoio é essencial para garantir a estabilidade do equipamento durante os momentos de pausa operacional.
          </p>
          <p>
            Para que este componente cumpra seu papel de forma eficaz, o alinhamento correto das furações no chassi é indispensável.
          </p>
          <p>
            Nesta etapa, abordaremos as melhores práticas para garantir que o suporte seja integrado ao conjunto sem tensões laterais, assegurando durabilidade e equilíbrio para a máquina.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Correção de Falhas de Fabricação
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            É comum que pequenas variações no processo produtivo resultem em desalinhamentos milimétricos nos furos de fixação.
          </p>
          <p>
            Caso o encaixe do bipé ofereça resistência, resista ao impulso de forçar o parafuso, pois isso invariavelmente danifica a rosca ou empena o suporte.
          </p>
          <p>
            Se o orifício não coincidir perfeitamente, utilize uma broca de metal adequada para ajustar a furação com precisão, garantindo que o parafuso atravesse o chassi sem criar tensões laterais.
          </p>
          <p>
            Lembre-se: uma fixação forçada é a origem de vibrações excessivas que, com o tempo, afrouxam toda a estrutura da máquina.
          </p>
          <p>
            Ao realizar esse ajuste manual, priorize a simetria para manter o equilíbrio do equipamento e assegurar que o bipé cumpra seu papel de apoio com estabilidade total.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            6. MONTAGEM DO EIXO, GUIDÃO E CABO DO ACELERADOR
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Montagem do Eixo e Partida
        </h2>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/blog/Montagem do Eixo e Partida.webp"
            alt="Montagem do Eixo e Partida"
            title="Montagem do Eixo e Sistema de Partida"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A transmissão de potência é a espinha dorsal do seu equipamento, exigindo um nível elevado de atenção aos detalhes de montagem e lubrificação interna.
          </p>
          <p>
            A precisão no acoplamento entre o motor e a haste determina não apenas a eficiência de corte, mas também a vida útil do sistema de partida.
          </p>
          <p>
            A seguir, orientamos sobre como realizar essas conexões vitais para garantir que a máquina responda com agilidade e suavidade desde o primeiro acionamento.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Encaixe da Peça Central do Eixo
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Posicione a luva de acoplamento central exatamente no ponto de junção do eixo, observando o alinhamento dos rasgos de chaveta.
          </p>
          <p>
            Este componente é o coração da transmissão; qualquer desvio aqui causará vibrações que degradarão rapidamente o motor.
          </p>
          <p>
            Com a peça devidamente assentada, pressione as travas internas até ouvir um estalo característico, sinalizando o engate total dos mecanismos de segurança.
          </p>
          <p>
            Finalize inserindo os parafusos de fixação, aplicando um aperto firme, porém controlado.
          </p>
          <p>
            Evite o uso de impacto excessivo, pois o material da carcaça central exige sensibilidade para não comprometer a rosca.
          </p>
          <p>
            Ao garantir que esta conexão esteja estanque e perfeitamente centrada, você elimina folgas radiais que seriam sentidas como soluços na operação, assegurando uma transferência de torque plena e sem perdas energéticas.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Ajuste de Altura e Suporte do Cinto
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O conforto operacional é o diferencial entre um trabalho produtivo e a exaustão física.
          </p>
          <p>
            Posicione a braçadeira de suporte do cinto no ponto de equilíbrio do tubo da roçadeira; isso garante que o peso seja distribuído uniformemente pelo seu corpo, aliviando a tensão nos braços.
          </p>
          <p>
            Ao ajustar a altura, busque uma configuração onde a ferramenta flutue naturalmente, permitindo que a lâmina ou o carretel toquem o solo sem esforço excessivo do operador.
          </p>
          <p>
            Teste a ergonomia antes de apertar as travas definitivas.
          </p>
          <p>
            Lembre-se: um cinto bem regulado evita dores lombares crônicas e oferece a mobilidade necessária para manobrar o equipamento com total segurança e precisão.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Aplicação da Trava Geral
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A trava geral atua como o dispositivo de segurança vital do seu equipamento.
          </p>
          <p>
            O erro clássico aqui é deixar o mecanismo em uma posição intermediária, o que impede o travamento mecânico efetivo e coloca em risco a integridade da haste durante o uso sob alta rotação.
          </p>
          <p>
            Posicione a trava sempre no limite máximo de curso, garantindo que o encaixe seja absoluto.
          </p>
          <p>
            Ao fixar os parafusos desta seção, resista à tentação de aplicar força excessiva, pois o objetivo é a firmeza e não a deformação do metal.
          </p>
          <p>
            Um aperto balanceado mantém o sistema estável contra as vibrações constantes do motor, evitando que o mecanismo se solte inesperadamente.
          </p>
          <p>
            Respeite os limites estruturais para garantir uma operação segura e duradoura.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Montagem do Guidão e Cabo do Acelerador
        </h2>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/blog/Montagem do Guidão e Cabo do Acelerador.webp"
            alt="Montagem do Guidão e Cabo do Acelerador"
            title="Montagem do Guidão e Cabo do Acelerador da Roçadeira Nakasaki"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O guidão funciona como o comando central da sua roçadeira, e sua ergonomia é determinante para o seu conforto e precisão durante o uso prolongado.
          </p>
          <p>
            Ao mesmo tempo, a instalação do cabo do acelerador exige cuidado para permitir uma resposta rápida e sem atritos.
          </p>
          <p>
            Prepare-se para alinhar os controles de forma que a pilotagem da máquina seja natural, permitindo total domínio sobre o motor em qualquer situação.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Fixação das Partes do Guidão
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O guidão é montado em duas seções distintas que exigem atenção ao encaixe.
          </p>
          <p>
            Posicione a base inferior sobre o suporte do tubo, acomodando a parte superior logo em seguida para criar um conjunto firme.
          </p>
          <p>
            O segredo aqui é não apertar os parafusos até o final imediatamente.
          </p>
          <p>
            Deixe o conjunto levemente móvel para que você possa testar a ergonomia e encontrar o ângulo perfeito para seus braços.
          </p>
          <p>
            Assim que a postura estiver confortável e o alinhamento com seu corpo estiver ideal, finalize o aperto de forma alternada.
          </p>
          <p>
            Esse método garante que a estrutura fique rígida, evitando que a vibração do motor cause folgas ou desconforto durante o trabalho pesado.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Instalação do Cabo do Acelerador
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A conexão do cabo do acelerador exige precisão milimétrica para evitar falhas durante a operação.
          </p>
          <p>
            Comece encaixando a extremidade do cabo no suporte do carburador, assegurando que o terminal esteja perfeitamente alojado no rasgo do gatilho.
          </p>
          <p>
            O segredo aqui é manter a tensão na medida certa: se o cabo ficar esticado demais, o motor subirá o giro sozinho; folgado, o gatilho perderá a sensibilidade.
          </p>
          <p>
            Após a fixação, teste o curso completo do acelerador e observe o estalo do cursor retornando com agilidade ao soltar o comando.
          </p>
          <p>
            Caso sinta qualquer resistência ou atrito no conduíte, reposicione as curvas para eliminar pontos de estrangulamento.
          </p>
          <p>
            Uma instalação limpa garante que sua Nakasaki responda instantaneamente, proporcionando controle absoluto e prevenindo desgastes precoces.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Instalação do Controle do Corte de Nylon
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O limitador de nylon é a peça que define a altura e a consistência do seu corte.
          </p>
          <p>
            Muitos usuários negligenciam sua instalação, resultando em fios que se quebram prematuramente ou um corte irregular que exige passadas repetidas sobre a mesma área.
          </p>
          <p>
            Posicione o suporte de proteção conforme as marcações do chassi, garantindo que o cortador esteja voltado exatamente para o lado de descarga da grama.
          </p>
          <p>
            Verifique se a lâmina de corte embutida está alinhada para não oferecer resistência desnecessária ao giro do carretel.
          </p>
          <p>
            Fixe os parafusos com firmeza moderada; o excesso de torque aqui pode trincar o plástico injetado sob vibração.
          </p>
          <p>
            Com o conjunto perfeitamente ajustado, você ganha eficiência operacional e prolonga drasticamente a vida útil do seu refil de nylon.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Conteúdo da Embalagem da Roçadeira Nakasaki
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Ao abrir a caixa da sua roçadeira Nakasaki, você encontrará um conjunto completo projetado para garantir autonomia imediata no campo.
          </p>
          <p>
            O kit acompanha o disco de corte e o cabeçote de nylon, permitindo versatilidade entre roçadas pesadas e acabamentos delicados.
          </p>
          <p>
            A embalagem ainda inclui o sistema de fixação, protetor de punho e uma alça de sustentação ergonômica, que equilibra o peso do motor para reduzir a fadiga.
          </p>
          <p>
            Para simplificar a manutenção, a marca disponibiliza um jogo de chaves Allen e a chave de vela, além de uma prática vasilha dosadora para a mistura de combustível.
          </p>
          <p>
            A presença das vedações contra poeira no compartimento da embreagem demonstra o cuidado do projeto com a longevidade mecânica do seu investimento.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Detalhes Técnicos e Informações Importantes Sobre a Embreagem
        </h2>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/blog/Detalhes Técnicos e Informações Importantes Sobre a Embreagem.webp"
            alt="Detalhes Técnicos e Informações Importantes Sobre a Embreagem"
            title="Detalhes Técnicos Sobre a Embreagem da Roçadeira Nakasaki"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A embreagem é o coração da transmissão de força na sua Nakasaki, e tratá-la com descuido é o caminho mais rápido para um prejuízo desnecessário.
          </p>
          <p>
            Jamais acione o motor antes de confirmar que o acoplamento entre a embreagem e o eixo está perfeito.
          </p>
          <p>
            Sem essa conexão física, o motor acelera em vazio, forçando as molas de retorno a limites perigosos.
          </p>
          <p>
            O resultado dessa negligência é quase sempre uma falha mecânica severa, onde a mola pode romper ou desalinhar, inutilizando o sistema de engate.
          </p>
          <p>
            Trate cada etapa da montagem como uma proteção ao seu patrimônio.
          </p>
          <p>
            Ao garantir o encaixe preciso, você evita vibrações atípicas e mantém o equipamento pronto para oferecer a potência máxima desde o primeiro minuto de operação, sem riscos operacionais.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            1
          </span>
          Organização e Identificação das Peças
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O sucesso da montagem começa antes mesmo de você tocar nas ferramentas, distinguindo com precisão os dois varões que possuem furos com alinhamentos distintos para funções específicas.
          </p>
          <p>
            Identifique o tubo com a marca da fabricante; ele é o responsável pela conexão direta à embreagem, garantindo a transmissão correta de torque.
          </p>
          <p>
            Já o varão gravado com as instruções de segurança deve ser posicionado na extremidade do carretel, onde a precisão é vital para o manuseio do disco e do nylon.
          </p>
          <p>
            Separe os quatro parafusos de maior calibre, reservados exclusivamente para a embreagem, deixando os demais organizados por função.
          </p>
          <p>
            Utilizar as chaves corretas para cada fixador impede danos às roscas, assegurando que a estrutura ganhe a robustez necessária.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            2
          </span>
          Montagem do Lado da Embreagem
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O sucesso nesta etapa começa com a instalação da borracha de proteção na junção do motor.
          </p>
          <p>
            Este componente não é apenas um acessório; ele atua como um filtro essencial que absorve as vibrações mecânicas, protegendo os rolamentos internos de um desgaste prematuro.
          </p>
          <p>
            Para otimizar o encaixe, aplique uma pequena gota de detergente neutro na peça de borracha, o que permitirá o deslize perfeito sobre o eixo.
          </p>
          <p>
            Jamais utilize óleos lubrificantes ou graxas aqui, pois o resíduo pode fazer com que a borracha se solte durante o uso, gerando instabilidade.
          </p>
          <p>
            Ao fixar o suporte da alça, una as partes com firmeza, conferindo se o conjunto está perfeitamente assentado e livre de folgas.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            3
          </span>
          Contrabalanço das Alças
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O equilíbrio é o segredo para jornadas de trabalho extensas sem exaustão.
          </p>
          <p>
            Como a roçadeira comporta acessórios com pesos distintos — desde lâminas metálicas densas até carretéis de nylon mais leves —, o sistema de suporte das alças atua como o seu principal aliado ergonômico.
          </p>
          <p>
            Ao ajustar a posição desses suportes no tubo, você desloca o centro de gravidade do equipamento, permitindo que a máquina flutue naturalmente diante de você.
          </p>
          <p>
            Não subestime essa regulagem: um ajuste preciso evita que o peso recaia sobre seus braços, prevenindo dores musculares e garantindo que a lâmina mantenha a altura ideal de corte sem esforço extra.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            4
          </span>
          Conexão dos Varões
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A conexão dos varões representa o ponto de união crítica do sistema de transmissão.
          </p>
          <p>
            Para um encaixe perfeito, alinhe os eixos internos, garantindo que o acoplamento da chaveta ocorra sem resistência.
          </p>
          <p>
            Empurre o engate até ouvir o estalo da trava de segurança; essa peça é o seu escudo contra vibrações excessivas que, se ignoradas, poderiam comprometer a rotação do motor em alta carga.
          </p>
          <p>
            Após o travamento, ajuste a luva de vedação para que o conjunto gire de forma fluida e silenciosa.
          </p>
          <p>
            Ao descartar folgas nesta etapa, você preserva a integridade dos rolamentos e garante que toda a potência do equipamento seja entregue diretamente ao acessório de corte, sem perdas de energia.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Instalação e Ajuste do Motor
        </h2>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/blog/Instalação e Ajuste do Motor.webp"
            alt="Instalação e Ajuste do Motor"
            title="Instalação e Ajuste do Motor da Roçadeira Nakasaki"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A instalação do motor é um momento crítico onde a técnica de fixação dita a longevidade do conjunto propulsor.
          </p>
          <p>
            Para garantir um funcionamento silencioso e potente, é necessário seguir protocolos rígidos de alinhamento e ancoragem dos componentes.
          </p>
          <p>
            Focaremos nos procedimentos fundamentais para assegurar que a força do motor seja transmitida corretamente, mantendo a integridade da carcaça e a segurança operacional durante jornadas pesadas.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Fixação dos Fios e Finalização
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A organização da fiação e dos cabos é o diferencial que separa um equipamento montado de uma ferramenta pronta para o trabalho profissional.
          </p>
          <p>
            Uma instalação limpa, livre de dobras e com folgas estratégicas, evita falhas elétricas e danos precoces aos componentes.
          </p>
          <p>
            Este é o momento de realizar os ajustes finais de segurança, conferindo se cada conexão está devidamente protegida para enfrentar a rotina intensa no campo.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Análise Inicial e Considerações Técnicas
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Antes de iniciar o processo prático, é importante compreender as especificações e o design estrutural do seu modelo.
          </p>
          <p>
            O conhecimento sobre a capacidade do motor e a logística da haste bipartida permite que você planeje a montagem com mais clareza.
          </p>
          <p>
            Vamos explorar os pontos fundamentais que garantem uma instalação rápida e eficiente.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          1. Preparação do Espaço de Trabalho
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Escolha um local estratégico para o serviço: uma bancada plana, bem iluminada e limpa.
          </p>
          <p>
            Espalhe uma manta ou papelão sobre a superfície para proteger as peças plásticas contra riscos e evitar que parafusos pequenos desapareçam.
          </p>
          <p>
            Organize cada grupo de parafusos e componentes conforme sua função, criando um layout lógico que facilite a visualização.
          </p>
          <p>
            Este ritual de preparação transforma um momento que poderia ser caótico em uma montagem fluida, minimizando erros técnicos e garantindo que cada peça seja instalada no local correto, sem improvisos.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          2. Montagem da Lâmina e Saia Protetora
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A instalação da lâmina e da saia protetora exige atenção máxima à precisão mecânica, pois é aqui que se define a segurança do seu corte.
          </p>
          <p>
            Posicione a saia de proteção alinhando seus orifícios aos suportes do chassi, utilizando os três parafusos de fixação fornecidos.
          </p>
          <p>
            O segredo é um aperto progressivo; evite forçar excessivamente o plástico, prevenindo trincas sob vibração.
          </p>
          <p>
            Ao fixar a lâmina, certifique-se de que o sentido de rotação esteja correto — o corte deve coincidir com o movimento do eixo e a porca aperta no sentido anti-horário (rosca esquerda).
          </p>
          <p>
            O mecanismo de travamento por pino facilita a fixação, mas lembre-se de removê-lo da caixa de engrenagens antes de acionar o motor.
          </p>
          <p>
            Uma montagem firme nesta etapa elimina folgas perigosas e garante estabilidade total durante o roço de vegetação densa.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          3. Montagem da Haste Bipartida
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A montagem da haste bipartida exige uma atenção minuciosa ao alinhamento interno para evitar vibrações degradantes.
          </p>
          <p>
            Comece identificando a seção superior, que se conecta ao motor, e a inferior, destinada ao conjunto de corte.
          </p>
          <p>
            Insira o eixo de transmissão cuidadosamente, girando-o até que a estria interna deslize com suavidade absoluta.
          </p>
          <p>
            Caso sinta resistência, não force; recue e realinhe os componentes.
          </p>
          <p>
            Após o encaixe total, posicione a abraçadeira de fixação e insira os parafusos manualmente antes de utilizar a chave.
          </p>
          <p>
            Garanta que a conexão esteja estanque, eliminando qualquer folga, pois uma união rígida é o que mantém a estabilidade operacional necessária para enfrentar vegetações densas sem riscos.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          4. Fixação do Suporte da Correia
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Ajuste a porca sextavada no suporte da correia, certificando-se de que o encaixe esteja rigorosamente nivelado.
          </p>
          <p>
            Essa peça será o eixo de equilíbrio do seu equipamento, portanto, posicione-a na braçadeira central com firmeza total.
          </p>
          <p>
            Um aperto frouxo causará oscilações que, além de danificarem a haste, desestabilizam o conjunto durante o corte.
          </p>
          <p>
            Ajuste o ângulo do suporte para que a roçadeira se comporte como uma extensão natural dos seus braços, evitando sobrecargas lombares.
          </p>
          <p>
            Teste o encaixe da trava, confirmando que a distribuição de peso esteja uniforme antes de dar prosseguimento à instalação.
          </p>
        </div>

        {/* ===================================================================
            7. GUIAS ESPECÍFICOS: NAKASAKI (63/65/75CC), 75CC E NK 750 PRO
            =================================================================== */}
        <section className="mt-16 pt-10 border-t-2 border-gray-100 space-y-12">
          {/* RESUMO 6 PASSOS NAKASAKI 63CC, 65CC E 75CC */}
          <div id="como-montar-rocadeira-nakasaki" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Roteiro Rápido de Oficina
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Montar Roçadeira Nakasaki (63cc, 65cc ou 75cc) em 6 Passos
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Montar uma roçadeira Nakasaki nos modelos comuns de 63cc, 65cc ou 75cc exige seguir a ordem correta de fixação da haste, guidão, proteção e conjunto de corte:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  1. Preparação e Organização das Peças
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Separe o motor, as duas partes da haste (bipartida), o guidão, a saia de proteção, a lâmina ou carretel de nylon e as ferramentas do kit (chaves Allen, chave de boca e chave Philips).
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  2. Montagem da Haste e Embreagem
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Conecte a haste superior ao tambor da embreagem alinhando os furos, una as duas partes da haste bipartida no pino/trava interna e lubrifique o graxeiro na ponta da haste com graxa apropriada.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  3. Instalação do Guidão e Controles
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Posicione o suporte do guidão sobre as borrachas de proteção deixando o acelerador do lado direito, aperte os 4 parafusos de forma cruzada e conecte os fios do acelerador e interruptor seguindo as cores originais.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  4. Fixação da Saia de Proteção
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Encaixe a saia protetora próxima à extremidade inferior da haste e prenda com os parafusos e a braçadeira fornecida, garantindo que a lâmina corta-fio de nylon fique virada para o lado externo.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  5. Instalação da Lâmina ou Carretel de Nylon
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Trave o eixo de rotação usando a chave Allen ou pino no furo da engrenagem e rosqueie a porca da lâmina ou o carretel no sentido anti-horário (rosca esquerda/inversa) até firmar.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  6. Abastecimento e Primeira Partida
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Prepare a mistura de gasolina e óleo 2 tempos na proporção indicada no manual (geralmente 25:1), abasteça o tanque, acione a bomba primer até preencher e puxe o afogador para dar a primeira partida.
                </p>
              </div>
            </div>
          </div>

          {/* SUBSEÇÃO: COMO MONTAR ROÇADEIRA NAKASAKI 75CC */}
          <div id="como-montar-rocadeira-nakasaki-75cc" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Versão 75 Cilindradas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Montar Roçadeira Nakasaki 75cc: Passo a Passo da Montagem
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Montar a roçadeira a gasolina Nakasaki 75cc envolve a fixação reforçada do motor, da haste bipartida, do guidão, do protetor e do cabeçote de corte (carretel ou lâmina).
              </p>
              <p>
                Caso queira conhecer todos os detalhes de potência e consumo deste modelo, veja nossa avaliação sobre se a{' '}
                <a href="/rocadeira-nakasaki-e-boa" className="text-[#166534] hover:underline font-semibold">
                  roçadeira Nakasaki é boa
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Fixação do Motor na Embreagem
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Acople a peça da embreagem ao motor usando os quatro parafusos principais, apertando-os em formato de X para garantir uma fixação uniforme e livre de vibrações.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Montagem da Haste (Varão) e Lubrificação
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Conecte as partes da haste bipartida observando a posição dos furos e a orientação (o lado com o nome Nakasaki vai para a embreagem, e o lado com instruções fica próximo ao carretel), aplique graxa no graxeiro das engrenagens internas e utilize a trava rápida interna para firmar a junção.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Instalação do Guidão, Protetor, Acessório de Corte e Cabos
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Posicione o suporte do guidão sobre a haste com as borrachas de proteção apertando os parafusos de forma igualitária para balancear o peso, fixe o protetor de lâmina inferior, rosqueie a lâmina de 3 pontas ou carretel de nylon no sentido anti-horário travando o eixo e conecte os fios do acelerador e do interruptor seguindo o padrão de cores.
                </p>
              </div>
            </div>
          </div>

          {/* SUBSEÇÃO: COMO MONTAR ROÇADEIRA NAKASAKI NK 750 PRO */}
          <div id="como-montar-rocadeira-nakasaki-nk-750-pro" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Modelo NK-750PRO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Montar Roçadeira Nakasaki NK 750 PRO: Passo a Passo Completo
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                A montagem da roçadeira Nakasaki NK-750PRO (75cc) é feita por etapas, unindo o motor, as hastes do varão, o guidão, a proteção e o cabeçote de corte:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Preparação e Conferência das Peças
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Retire todos os componentes da caixa, separe as ferramentas que acompanham o kit (chaves Allen, chave de boca nº 10, chave de vela e chave Philips), verifique se as duas partes do tubo (varão) estão desobstruídas e retire as tampas de proteção plásticas das pontas.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Montagem do Varão (Haste) e Lubrificação
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Pegue a parte do tubo que não possui o adesivo de instruções (o lado com o furo guia mais distante da ponta deve ser acoplado no sentido do motor/embreagem), certifique-se de que o eixo cardã interno esteja bem encaixado até o fundo em ambas as pontas, conecte as duas metades do varão alinhando os furos com a trava rápida e aplique graxa no graxeiro da caixa de engrenagens inferior.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Fixação do Motor
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Encaixe o conjunto do motor na extremidade superior do varão (onde fica a embreagem), alinhe os furos da flange de acoplamento e aperte os quatro parafusos de fixação de maneira uniforme.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  4. Instalação do Guidão (Punho)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Monte o suporte do guidão sobre o varão utilizando as borrachas de proteção e os parafusos da braçadeira, ajuste a posição do guidão e do acelerador para a sua altura e postura, e conecte os fios do acelerador e de desligamento seguindo o padrão de encaixe ou cores indicado.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  5. Instalação da Saia de Proteção e Corte
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Fixe a saia protetora na parte inferior do varão próximo à base de corte usando os parafusos da braçadeira específica e instale o carretel de fio de nylon ou o disco de corte travando o eixo com a chave auxiliar para fazer o aperto firme no sentido anti-horário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. AJUSTES FINAIS (SEM VÍDEO APÓS ESTA SEÇÃO!) E PRIMEIRA PARTIDA
            =================================================================== */}
        <h2 id="ajustes-finais" className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter scroll-mt-24">
          Ajustes Finais
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Agora é o momento de refinar a ergonomia para que a máquina trabalhe a seu favor, não contra seu corpo.
          </p>
          <p>
            Ajuste a altura do guidão e o ponto de ancoragem do cinto de modo que o equipamento flutue naturalmente, sem exigir que você se incline ou force os braços para manter o corte nivelado.
          </p>
          <p>
            Verifique se o limitador da saia está posicionado corretamente para aparar o nylon no tamanho ideal, evitando sobrecarga no motor.
          </p>
          <p>
            Observe a distância entre a base da roçadeira e o solo; um ajuste preciso aqui previne batidas acidentais contra pedras e eleva a qualidade do acabamento.
          </p>
          <p>
            Essas regulagens minuciosas transformam a operação pesada em uma tarefa fluida, preservando sua integridade física e a longevidade mecânica do motor.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Primeira Partida da Roçadeira
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            O momento do primeiro acionamento requer atenção a protocolos específicos de combustível e aquecimento que preparam o motor para uma vida útil longa.
          </p>
          <p>
            Seguir uma rotina precisa de ignição, desde a purga do ar até a estabilização da marcha lenta, é o que garante que os componentes internos se acomodem corretamente.
          </p>
          <p>
            Confira os cuidados essenciais para realizar o batismo da sua máquina com segurança e eficiência técnica.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Procedimento:
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Prepare o combustível com a proporção exata de óleo dois tempos e gasolina, conforme especificado no manual, para evitar o superaquecimento do motor.
          </p>
          <p>
            Abasteça o reservatório e pressione o bulbo de purga sucessivamente até notar o combustível circulando pelo visor transparente do carburador; isso elimina bolsas de ar que impedem a ignição imediata.
          </p>
          <p>
            Com o motor frio, posicione a alavanca do afogador no modo fechado e certifique-se de que a chave de ignição esteja na posição ligado.
          </p>
          <p>
            Puxe o punho de arranque com um movimento fluido e constante, evitando trancos bruscos.
          </p>
          <p>
            Assim que ouvir o primeiro sinal de combustão, desarme o afogador e deixe o equipamento estabilizar em marcha lenta.
          </p>
          <p>
            Esse breve compasso de espera garante a lubrificação ideal dos componentes internos, protegendo sua Nakasaki de desgastes prematuros.
          </p>
          <p>
            Se precisar de mais detalhes sobre o ritual de partida ou caso o motor afogue nas primeiras puxadas, consulte nossos guias de{' '}
            <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como ligar roçadeira a gasolina
            </a>{' '}
            e{' '}
            <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como desafogar roçadeira rapidamente
            </a>
            .
          </p>
        </div>

        {/* ===================================================================
            9. ALERTA DE SEGURANÇA E ERROS COMUNS
            =================================================================== */}
        <section className="my-12 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Dica de Segurança
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  A operação exige respeito máximo aos protocolos de proteção individual.
                </p>
                <p>
                  O uso rigoroso de óculos de segurança, protetores auriculares e botas reforçadas não é opcional; trata-se do seu escudo contra detritos lançados em alta velocidade e a exaustão sonora.
                </p>
                <p>
                  Antes de iniciar o trabalho, inspecione a área para remover pedras, arames ou objetos ocultos que possam causar ricochetes perigosos e mantenha transeuntes e animais a uma distância mínima de quinze metros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros Frequentes na Montagem e Como Evitá-los
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Girar a porca da lâmina ou o carretel no sentido horário achando que está apertando.</li>
                <li>Passar graxa ou óleo na borracha externa onde o guidão é fixado.</li>
                <li>Ligar o motor antes de acoplar o varão na campana da embreagem.</li>
                <li>Deixar o pino trava inserido no furo da caixa de engrenagens ao dar a partida.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Apertar a porca da lâmina e o carretel de nylon sempre no sentido anti-horário.</li>
                <li>Apertar os 4 parafusos da embreagem de forma cruzada (em formato de X).</li>
                <li>Confirmar o clique do pino-trava na luva central do varão bipartido.</li>
                <li>Revisar o aperto dos parafusos após os primeiros 15 minutos de uso.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section id="perguntas-frequentes" className="mt-16 pt-8 border-t border-gray-200 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Como Montar Roçadeira Nakasaki
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
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <span className="text-[#16A34A] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50 space-y-3">
                      {faq.answer.map((p, pIndex) => (
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
            11. CONSIDERAÇÕES FINAIS E DICA DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Considerações Finais e Cuidados Pós-Montagem
            </h2>
            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-5">
              <p>
                Concluir a montagem da sua Nakasaki é o primeiro passo para dominar o seu equipamento.
              </p>
              <p>
                Seguindo este guia, você transformou um emaranhado de peças em uma máquina de alto desempenho, pronta para encarar qualquer desafio no campo.
              </p>
              <p>
                Lembre-se: o segredo da longevidade mecânica reside na atenção aos detalhes durante essas etapas iniciais.
              </p>
              <p>
                Se algum ajuste parecer impreciso, não hesite em revisar o alinhamento; a paciência na montagem elimina vibrações que, no longo prazo, causariam desgaste prematuro.
              </p>
              <p>
                O erro mais comum é ignorar que parafusos e componentes novos passam por um breve período de assentamento térmico e mecânico após o primeiro acionamento.
              </p>
              <p>
                Por isso, inspecione a integridade da máquina logo após os primeiros minutos de uso intenso: vibrações naturais podem criar folgas imperceptíveis em fixadores que pareciam perfeitamente apertados.
              </p>
              <p>
                Adote o hábito de aplicar uma camada fina de graxa especial na ponta do cardan e na caixa de engrenagens a cada 10 horas de uso, garantindo que o giro ocorra com lubrificação plena.
              </p>
              <p>
                Esse cuidado simples previne superaquecimentos, garante a suavidade das engrenagens e prolonga a vida útil da sua roçadeira.
              </p>
              <p>
                Se não for utilizar a lâmina ou o carretel temporariamente, armazene-os em local seco, longe da umidade.
              </p>
              <p>
                Esse ritual metódico transforma uma simples roçadeira em uma ferramenta de alta durabilidade, blindando sua performance contra paradas inesperadas.
              </p>
            </div>
          </div>

          {/* Box Dica do Especialista */}
          <div className="mt-8 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl flex items-start gap-4 shadow-sm">
            <div className="text-[#16A34A] shrink-0 mt-1">
              <Lightbulb size={28} />
            </div>
            <div>
              <h3 className="text-lg font-black text-green-950 uppercase tracking-wide mb-2">
                Dica de Oficina do Especialista
              </h3>
              <div className="space-y-2 text-sm text-green-900 leading-relaxed">
                <p className="m-0">
                  Antes de dar a primeira partida, gire a lâmina ou o carretel de nylon com a mão (com o motor desligado) por duas voltas completas.
                </p>
                <p className="m-0">
                  O movimento deve ser livre e suave, sem raspar na saia plástica e sem fazer barulho de estalo na junção central do varão; quando precisar recarregar o cabeçote ou ajustar a lenta, veja nossos guias de{' '}
                  <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                    como colocar fio na roçadeira
                  </a>{' '}
                  e{' '}
                  <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
                    como regular roçadeira
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
