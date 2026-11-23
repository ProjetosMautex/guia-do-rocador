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

const Info = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
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

export const ComoRegularRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual o ponto de partida das agulhas L e H na Stihl FS 160 e FS 220?",
      answer: [
        "Nos carburadores Zama e Walbro das Stihl FS 160, FS 220 e FS 290, encoste suavemente as duas agulhas no sentido horário sem forçar e abra exatamente 1 volta e meia (1,5 voltas) no sentido anti-horário.",
        "Depois que o motor aquecer por dois minutos, corrija apenas o parafuso LA para estabilizar a lenta com o conjunto de corte parado."
      ]
    },
    {
      question: "Por que a lâmina ou o carretel gira sozinho na marcha lenta?",
      answer: [
        "Quando o cabeçote roda sem você encostar no acelerador, o motor está acelerado acima da faixa de acoplamento da embreagem centrífuga.",
        "Gire o parafuso de encosto LA (ou T) no sentido anti-horário aos poucos até o disco parar por completo sem apagar o motor."
      ]
    },
    {
      question: "Qual o risco de fechar demais o parafuso H para ganhar mais giro?",
      answer: [
        "Fechar a agulha H no sentido horário corta o fluxo de combustível e, junto com ele, o óleo 2 tempos que lubrifica pistão e anéis.",
        "O motor grita agudo fora do mato, mas superaquece sob carga e risca a camisa do cilindro em questão de minutos."
      ]
    },
    {
      question: "Na Stihl FS 80 o motor apaga assim que solto o acelerador: o que mexer?",
      answer: [
        "Com o motor quente, dê um quarto de volta no sentido horário no parafuso LA para elevar levemente o batente da borboleta.",
        "Se a saída de aceleração continuar hesitando, verifique se a agulha L está próxima da abertura base de 1 volta a partir do batente."
      ]
    },
    {
      question: "Mexi nas agulhas L e H, mas a máquina não responde à regulagem. O que fazer?",
      answer: [
        "Quando girar os parafusos não muda o som do motor, o defeito não é regulagem: quase sempre há diafragma ressecado, filtro pescador entupido no tanque ou entrada de ar falsa nos retentores.",
        <>
          Se o excesso de tentativas encharcou a vela de gasolina, pare tudo e siga primeiro o guia de{' '}
          <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como desafogar a roçadeira
          </a>
          .
        </>
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/1/como regular roçadeira.webp"
            alt="Ajuste das agulhas L, H e LA no carburador de uma roçadeira a gasolina na bancada"
            title="Roçadeira Falhando? Veja Como Regular o Carburador"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Ajuste de Bancada • Motores 2 Tempos
          </span>

          <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
            Roçadeira Falhando? <br />
            <span className="text-[#4ade80]">Veja Como Regular o Carburador</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-3 hover:text-[#4ade80] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                />
                <span>Carlos Henrique Menezes</span>
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
            2. INTRODUÇÃO DIRETA DE OFICINA (ZERO ENCHIMENTO, ZERO KEYWORD STUFFING)
            =================================================================== */}
        <section className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Se a sua roçadeira apaga quando você solta o gatilho, engasga na arrancada ou perde giro assim que a lâmina encosta no capim alto, nove entre dez vezes a culpa está nos três parafusos do carburador.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na bancada da oficina, vejo muita gente mexer nas agulhas no escuro e acabar deixando a mistura pobre demais, o que esquenta o cilindro e risca o pistão em poucas horas de serviço.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Regular o carburador não depende de sorte nem de ouvido mágico: basta zerar a posição das agulhas L e H na abertura de fábrica, aquecer o bloco e fazer correções curtas de um oitavo de volta.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, explico exatamente o que cada parafuso faz, o passo a passo de bancada que funciona em máquinas Stihl, Husqvarna, Toyama e importadas, e uma tabela rápida de voltas e sintomas para você acertar de primeira.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/como regular roçadeira.webp"
              alt="Mecânico ajustando as agulhas L e H do carburador com chave de fenda fina"
              title="Regulagem das agulhas do carburador na bancada"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. CHECKLIST ANTES DE TOCAR NA CHAVE (EVITA REGULAR DEFEITO MECÂNICO)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                4 Itens para Conferir Antes de Girar Qualquer Parafuso
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Mexer no carburador para compensar filtro sujo ou gasolina velha só mascara o defeito:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Fenda Fina (3 mm a 4 mm)</span>
                <span className="text-xs text-gray-600">Haste estreita para entrar nos furos guias da carenagem sem mastigar a fenda de latão.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Filtro de Ar Limpo e Montado</span>
                <span className="text-xs text-gray-600">Regular sem o filtro deixa a mistura rica depois que você fecha a tampa de volta.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Mistura 2T Fresca no Tanque</span>
                <span className="text-xs text-gray-600">
                  Combustível com menos de 15 dias na proporção exata do{' '}
                  <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    óleo 2 tempos correto
                  </a>
                  .
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Conjunto de Corte Instalado</span>
                <span className="text-xs text-gray-600">Nunca acerte a rotação máxima sem a lâmina ou o fio no comprimento padrão da saia.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. ONDE FICA O CARBURADOR E O QUE FAZEM L, H E LA/T
            =================================================================== */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">
          Onde Ficam e o que Fazem os Parafusos L, H e LA (ou T)
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8">
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            O carburador fica preso na lateral do cilindro, imediatamente atrás da caixa plástica do filtro de ar.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na maioria das roçadeiras a gasolina você encontra três fendas gravadas na carenagem ou no próprio corpo de alumínio: duas agulhas de combustível (L e H) e um parafuso de encosto mecânico da borboleta (LA na Stihl ou T nas demais marcas).
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Agulha L (Low)
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Baixa Rotação e Arrancada
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Dosa a gasolina na marcha lenta e na hora em que você aperta o gatilho para sair do repouso sem engasgar.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Agulha H (High)
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Alta Rotação e Lubrificação
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Controla o volume de combustível e óleo 2T em aceleração máxima dentro do mato, protegendo o pistão contra superaquecimento.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Parafuso LA ou T
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Batente da Marcha Lenta
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Apenas empurra ou recua mecanicamente o acelerador para o motor segurar ligado sem rodar a lâmina sozinho.
            </p>
          </div>
        </div>

        <div className="prose prose-lg text-gray-700 max-w-none mb-8">
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            A regra de giro das agulhas L e H é igual em praticamente todos os motores 2 tempos: girar no sentido horário fecha a passagem de gasolina (mistura mais pobre e rotação mais alta), enquanto girar no sentido anti-horário abre a passagem (mistura mais rica e giro mais baixo).
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Trabalhe sempre com toques curtos de 1/8 a 1/4 de volta e espere três segundos para ouvir o motor estabilizar antes de mexer de novo.
          </p>
        </div>

        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/1/Localização e Acesso ao Carburador.webp"
            alt="Localização dos parafusos L, H e LA no corpo do carburador da roçadeira"
            title="Acesso às agulhas L, H e parafuso LA no carburador"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* ===================================================================
            5. PASSO A PASSO DE BANCADA (5 ETAPAS ENXUTAS E DIRETAS)
            =================================================================== */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">
          Passo a Passo para Regular o Carburador na Bancada
        </h2>

        <div className="space-y-8 mb-10">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                1
              </span>
              Zere as agulhas na posição inicial de fábrica
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Com o motor desligado, gire as agulhas L e H suavemente no sentido horário apenas até encostarem no fundo da sede, sem fazer força no batente para não amassar a ponta cônica.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-sm sm:text-base">
              A partir desse ponto fechado, volte ambos os parafusos no sentido anti-horário conforme a tabela da sua marca abaixo (em média 1,5 voltas na linha Stihl/Husqvarna e 1,5 a 2 voltas em máquinas importadas).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                2
              </span>
              Aqueça o motor com a carga de corte montada
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Dê a partida seguindo o procedimento correto de{' '}
              <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como ligar roçadeira a gasolina
              </a>{' '}
              e deixe o cilindro esquentar por dois a três minutos antes de qualquer ajuste fino.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-sm sm:text-base">
              O comprimento e a espessura do{' '}
              <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
                fio de nylon para roçadeira
              </a>{' '}
              mudam a resistência aerodinâmica na ponteira, por isso faça o acerto com o acessório pronto para o corte.
            </p>
          </div>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/Passo a Passo para Regular o Carburador.webp"
              alt="Ajuste da abertura inicial das agulhas do carburador com o motor apoiado"
              title="Posição inicial das agulhas L e H do carburador"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="my-10 flex justify-center">
            <BannerDoMeio />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                3
              </span>
              Encontre o pico da baixa rotação (Agulha L)
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Com o motor quente na lenta, gire a agulha L devagar para um lado e para o outro até localizar exatamente o ponto em que a rotação fica mais alta e lisa.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-sm sm:text-base">
              Desse pico, abra 1/4 de volta no sentido anti-horário e teste toques rápidos no gatilho: se o motor der um vazio antes de subir o giro, abra mais 1/8 de volta na agulha L.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                4
              </span>
              Acerte a alta rotação sem secar o cilindro (Agulha H)
            </h3>
            <div className="w-full flex justify-center my-5">
              <img
                src="/images/blog/1/Passo a Passo para Regular o Carburador 2.webp"
                alt="Regulagem fina da agulha H em regime de aceleração máxima"
                title="Acerto fino da agulha H de alta rotação"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Acelere totalmente por poucos segundos: se a máquina soar pesada, quadrada e soltar fumaça azulada demais, feche a agulha H em 1/8 de volta no sentido horário.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-sm sm:text-base">
              Se ela berrar fino demais e murchar quando encosta no mato, abra imediatamente a agulha H no sentido anti-horário até recuperar a força com um leve embaralhamento no topo do giro sem carga.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                5
              </span>
              Trave a marcha lenta segura (Parafuso LA/T e folga do cabo)
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Solte o gatilho e observe o conjunto de corte: se a lâmina continuar rodando, gire o parafuso LA ou T no sentido anti-horário até parar; se o motor ameaçar apagar, gire no sentido horário.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-sm sm:text-base">
              Confira também se o cabo do acelerador tem cerca de 1 a 2 mm de folga livre no punho, pois cabo esticado enforca a borboleta e impede qualquer regulagem de lenta.
            </p>
          </div>
        </div>

        {/* ===================================================================
            6. TABELA DE DIAGNÓSTICO POR SINTOMA (UTILIDADE REAL DE OFICINA)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Diagnóstico Rápido: Sintoma no Motor ➔ Qual Parafuso Mexer
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Use esta guia rápida de oficina para identificar o parafuso exato sem desregular o resto do carburador:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">O que a Roçadeira Faz</th>
                  <th className="p-4 font-bold">Causa Provável</th>
                  <th className="p-4 font-bold">Correção Exata</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Engasga ou dá "vazio" quando aperta o acelerador</td>
                  <td className="p-4">Mistura pobre na transição de baixa</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir agulha L em 1/8 a 1/4 de volta (anti-horário)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/40">
                  <td className="p-4 font-bold text-gray-900">Lâmina ou carretel gira sozinho na lenta</td>
                  <td className="p-4">Rotação de lenta acima do acoplamento da embreagem</td>
                  <td className="p-4 text-[#166534] font-semibold">Recuar parafuso LA/T no sentido anti-horário até parar</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Motor morre assim que você solta o gatilho</td>
                  <td className="p-4">Lenta baixa demais ou agulha L muito rica</td>
                  <td className="p-4 text-[#166534] font-semibold">Apertar parafuso LA/T no sentido horário (1/4 de volta)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/40">
                  <td className="p-4 font-bold text-gray-900">Solta muita fumaça e parece "amarrada" na alta</td>
                  <td className="p-4">Mistura rica demais em alta rotação</td>
                  <td className="p-4 text-[#166534] font-semibold">Fechar agulha H em 1/8 de volta (horário)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Grita muito fino no vazio e morre no mato fechado</td>
                  <td className="p-4">Mistura pobre na alta (risco de fundir)</td>
                  <td className="p-4 text-red-700 font-semibold">Abrir agulha H imediatamente (1/4 de volta anti-horário)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            7. TABELA DE VOLTAS DE FÁBRICA + PARTICULARIDADES DA LINHA STIHL
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Abertura Padrão de Fábrica por Marca e Modelo
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Todas as medidas abaixo contam voltas completas no sentido anti-horário após encostar suavemente a agulha no batente:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">Modelo / Marca</th>
                  <th className="p-4 font-bold">Agulha L (Baixa)</th>
                  <th className="p-4 font-bold">Agulha H (Alta)</th>
                  <th className="p-4 font-bold">Observação de Bancada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Stihl FS 160 / FS 220 / FS 290</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 voltas</td>
                  <td className="p-4">Regule LA com lâmina 20 mm ou carretel instalado</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Stihl FS 80 / FS 85 / FS 120</td>
                  <td className="p-4 text-[#166534] font-semibold">1 volta</td>
                  <td className="p-4 text-[#166534] font-semibold">1 a 1,5 voltas</td>
                  <td className="p-4">Lenta sensível no parafuso LA; confira limpeza da tela do escape</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Husqvarna 131R / 143R-II / 226R</td>
                  <td className="p-4 text-[#166534] font-semibold">1,25 a 1,5 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">1,25 a 1,5 voltas</td>
                  <td className="p-4">Parafuso T ajustado com bloco quente (~2.800 rpm)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Toyama / Branco / Vulcan / Tekna</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 a 2 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 a 2 voltas</td>
                  <td className="p-4">Carburadores de 1 agulha possuem apenas ajuste de lenta (T) e agulha interna no pistonete</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Nakasaki (63cc / 65cc / 75cc)</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 a 2 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">1,5 a 2 voltas</td>
                  <td className="p-4">
                    Cheque o aperto do coletor e revise a{' '}
                    <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                      montagem da Nakasaki
                    </a>{' '}
                    se ela acabou de sair da caixa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bloco Único e Consolidado sobre Detalhes da Linha Stihl */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Detalhes Específicos na Linha Stihl (FS 80, FS 160 e FS 220)
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-sm sm:text-base leading-relaxed">
                As profissionais FS 160, FS 220 e FS 290 compartilham a mesma família de carburadores com abertura padrão de 1,5 voltas tanto em L quanto em H, mas exigem atenção à folga das molas de embreagem quando a máquina já tem muitas horas de corte.
              </p>
              <p className="mb-5 text-sm sm:text-base leading-relaxed">
                Se você zerou o parafuso LA e a faca (confira o encaixe correto no guia sobre{' '}
                <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-[#166534] hover:underline font-semibold">
                  qual o furo da lâmina da roçadeira Stihl 220
                </a>
                ) continua rodando na lenta, não continue abaixando a mistura na agulha L: provavelmente uma das molas da embreagem esticou ou quebrou.
              </p>
              <p className="mb-0 text-sm sm:text-base leading-relaxed">
                Já na linha mais compacta como a Stihl FS 80 e FS 85, a agulha L trabalha mais fechada (perto de 1 volta) e o escape acumula carvão rápido quando se usa óleo mineral barato, simulando falta de regulagem na alta rotação.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. QUANDO NÃO É CARBURADOR + ERROS FATAIS
            =================================================================== */}
        <section className="my-10 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
            <Info className="text-amber-600 shrink-0" size={26} /> Quando o Defeito Não é Regulagem
          </h3>
          <div className="text-amber-950 text-sm sm:text-base leading-relaxed">
            <p className="mb-4">
              Se a roçadeira acelera sozinha sem ninguém encostar no gatilho, ou varia a lenta toda hora mesmo voltando as agulhas ao padrão de fábrica, pare de girar os parafusos.
            </p>
            <p className="mb-0">
              Esse sintoma clássico indica entrada de ar falsa pela junta do coletor, trinca na mangueira de combustível ou retentor de virabrequim ressecado — tentar compensar abrindo a agulha H não resolve o problema e coloca o pistão em risco.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
            <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
              <AlertTriangle size={20} className="text-red-600" /> O que Evitar na Bancada
            </h3>
            <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
              <li>Forçar as agulhas L e H contra o batente final (danifica a ponta de latão).</li>
              <li>Fechar a agulha H no limite buscando som fino (funde o cilindro por falta de óleo).</li>
              <li>Regular sem limpar o respiro da tampa do tanque (o vácuo apaga o motor após 5 minutos).</li>
              <li>Deixar mistura parada no carburador por mais de 15 dias após o acerto.</li>
            </ul>
          </div>

          <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
            <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
              <Check size={20} className="text-[#16A34A]" /> Boas Práticas de Oficina
            </h3>
            <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
              <li>Anotar quantas voltas cada parafuso estava aberto antes de zerar (serve de backup).</li>
              <li>Girar no máximo 1/8 de volta por vez e esperar o motor estabilizar o som.</li>
              <li>Usar sempre EPIs e manter a ponteira longe de pedras ao testar aceleração máxima.</li>
              <li>Validar o acerto final cortando capim real por 3 minutos e conferir a cor da vela (marrom café).</li>
            </ul>
          </div>
        </div>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Regulagem de Carburador
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
            10. SEGREDO DE MECÂNICO (ASSINATURA TÉCNICA DE CARLOS HENRIQUE)
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] p-6 sm:p-8 rounded-3xl flex items-start gap-4 shadow-sm">
          <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
              Segredo de Oficina: O Som de "4 Tempos" na Agulha H
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              Quando você aperta o acelerador até o talo fora do mato, um motor 2 tempos bem calibrado na agulha H deve dar uma levíssima embaralhada no limite superior do giro, conhecida nas oficinas como batida de 4 tempos.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Assim que a lâmina ou o{' '}
              <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                fio de nylon no carretel
              </a>{' '}
              encosta no capim pesado, o som limpa na hora e o motor entrega torque cheio com lubrificação de sobra para rodar o dia inteiro sem esquentar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
