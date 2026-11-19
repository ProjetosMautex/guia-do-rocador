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

export const ComoLigarRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Quantas puxadas na cordinha são necessárias até o motor frio dar sinal?",
      answer: [
        "Após pressionar o bulbo primer de 7 a 10 vezes e fechar o afogador, normalmente bastam de 3 a 5 puxadas firmes para o motor emitir o primeiro som curto de explosão.",
        "Assim que ouvir esse sinal característico, mova imediatamente o afogador para a posição aberta antes de puxar novamente para não afogar a câmara."
      ]
    },
    {
      question: "Preciso usar o afogador quando o motor da roçadeira já está quente?",
      answer: [
        "Não.",
        "Se você desligou a máquina apenas para reabastecer ou descansar por alguns minutos, o cilindro continua aquecido: basta ligar o botão Stop e puxar a corda com o afogador aberto."
      ]
    },
    {
      question: "O que fazer se eu puxei muitas vezes com o afogador fechado e ela não pega mais?",
      answer: [
        "Provavelmente o excesso de gasolina líquida encharcou o eletrodo da vela de ignição, impedindo a faísca.",
        <>
          Nesse caso, abra totalmente o afogador e siga o nosso guia prático de{' '}
          <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como desafogar roçadeira em 2 minutos
          </a>{' '}
          para secar o cilindro com segurança.
        </>
      ]
    },
    {
      question: "Por que a lâmina ou o carretel gira sozinho logo que a roçadeira liga?",
      answer: [
        "Isso acontece quando a trava de meia-aceleração está acionada para a partida a frio.",
        "Basta dar um leve toque rápido no gatilho do acelerador para destravar o mecanismo e fazer o motor cair imediatamente para a marcha lenta segura."
      ]
    },
    {
      question: "Posso guardar a roçadeira com combustível no tanque após terminar o serviço?",
      answer: [
        "Não é recomendado se a máquina for ficar parada por mais de 15 dias.",
        "A gasolina brasileira oxida rapidamente e cria resíduos que ressecam as membranas do carburador, dificultando a partida no próximo uso."
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
            src="/images/blog/como-ligar-rocadeira-principal.webp"
            alt="Como Ligar Roçadeira a Gasolina com Motor Frio Passo a Passo"
            title="Como Ligar Roçadeira a Gasolina (Motor Frio): Passo a Passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Ligar Roçadeira a Gasolina (Motor Frio): <br />
            <span className="text-[#16A34A]">Passo a Passo</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                />
                <span>José Ailton da Silva</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Especialista Operacional em Roçadeiras</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA)
            =================================================================== */}
        <section className="space-y-5 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
            Dar a partida em uma roçadeira a gasolina com o motor frio é uma tarefa que gera dúvidas e pode frustrar quem ainda não domina a sequência correta dos comandos.
          </p>
          <p>
            Muitos operadores enfrentam dificuldades logo cedo que resultam em puxadas repetidas na corda e desgaste desnecessário do retrátil.
          </p>
          <p>
            Entender como preparar o combustível, o bulbo injetor e o afogador na ordem certa é fundamental para garantir eficiência e prolongar a vida útil do equipamento.
          </p>
          <p>
            A seguir, detalhamos o funcionamento mecânico da ignição e as etapas práticas essenciais para ligar sua roçadeira a gasolina, elétrica ou a bateria sem complicações.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-ligar-rocadeira-principal.webp"
              alt="Operador preparando roçadeira a gasolina para partida a frio no campo"
              title="Procedimento correto para ligar roçadeira a gasolina com motor frio"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. DIAGNÓSTICO DO PROBLEMA ("POR QUE ALGUMAS MÁQUINAS SÃO DIFÍCEIS DE LIGAR")
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            O Processo de Partida e o Papel do "Sinal" do Motor
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Ligar uma roçadeira a gasolina de motor frio exige criar primeiro as condições ideais de combustão dentro do cilindro.
            </p>
            <p>
              Quando o bloco está frio, o combustível vaporiza com mais dificuldade, exigindo o fechamento do afogador para restringir o ar e enriquecer a mistura inicial.
            </p>
            <p>
              Assim que a ação mecânica de puxar o cabo faz o motor emitir aquele som curto característico de engasgo (o famoso primeiro sinal), significa que a gasolina alcançou a câmara e sofreu a primeira queima.
            </p>
            <p>
              Nesse exato instante, é crucial deslizar o afogador para a posição aberta, permitindo a entrada normal de oxigênio na próxima puxada.
            </p>
            <p>
              Quando o motor pegar de vez, basta dar um leve toque no gatilho do acelerador para destravar a meia-aceleração e estabilizar a marcha lenta.
            </p>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
              Por que algumas máquinas são mais difíceis de ligar?
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Um dos principais fatores é a taxa de compressão: motores de maior cilindrada exigem mais força física para vencer o ponto morto superior do pistão.
              </p>
              <p>
                Além disso, ajustes incorretos nas agulhas do carburador ou gasolina envelhecida impedem a formação da névoa ideal de ar e combustível.
              </p>
              <p>
                Quando comparamos marcas tradicionais no campo, a Stihl e a Husqvarna equilibram precisão mecânica de carburação com sistemas como válvula descompressora e mola auxiliar SmartStart, enquanto linhas com partida facilitada (Easy Start) aliviam o tranco na corda para reduzir o esforço do operador.
              </p>
              <p>
                Caso sua máquina esteja perdendo lenta ou engasgando mesmo quente, vale conferir nosso tutorial de{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
                  como regular o carburador da roçadeira com segurança
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS E VERIFICAÇÕES ANTES DA PARTIDA (CHECKLIST VISUAL)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#15803d] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Materiais e Checklist Antes da Partida
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Conferir estes 4 itens antes de puxar a corda evita 90% das falhas de ignição:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Gasolina Fresca + Óleo 2 Tempos</span>
                <span className="text-xs text-gray-600">Mistura preparada há menos de 15 dias na proporção exata do manual.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Frasco Misturador Graduado</span>
                <span className="text-xs text-gray-600">Evita excesso de óleo que carboniza e encharca a vela de ignição.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave Combinada e Filtro Limpo</span>
                <span className="text-xs text-gray-600">Certifique-se de que o cachimbo da vela está firme e o filtro de ar desobstruído.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">EPIs Obrigatórios de Operação</span>
                <span className="text-xs text-gray-600">Óculos ou viseira, protetor auricular, luvas, perneiras e calçado fechado.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (MOMENTO DE TRANSIÇÃO PARA A PRÁTICA)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PRÁTICO NUMERADO (O CORAÇÃO DO TUTORIAL)
            =================================================================== */}
        <div className="space-y-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            O Passo a Passo Prático para a Partida a Frio
          </h2>

          {/* ETAPA 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                1
              </span>
              Preparação da Mistura de Combustível
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                A preparação correta da mistura de combustível é o primeiro passo para garantir uma ignição rápida e preservar o cilindro da roçadeira.
              </p>
              <p>
                Nos motores dois tempos, respeite rigorosamente a proporção entre gasolina comum e óleo 2T indicada pelo fabricante (geralmente 50:1 nas linhas Stihl e Husqvarna ou 25:1 nas importadas).
              </p>
              <p>
                Utilize um recipiente graduado para medir com precisão, agite bem o galão antes de abastecer e nunca utilize gasolina velha ou armazenada há semanas.
              </p>
            </div>
          </section>

          {/* ETAPA 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                2
              </span>
              Verificação do Botão de Ignição (Stop)
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Um descuido simples, mas muito comum no campo, é tentar dar a partida com o interruptor de parada na posição desligada.
              </p>
              <p>
                Quando o botão Stop fica na posição de corte, o aterramento bloqueia a centelha elétrica na vela e o motor apenas puxa gasolina sem queimar, afogando rapidamente.
              </p>
              <p>
                Antes de tocar na cordinha, apoie a máquina em solo plano e posicione a chave seletora no comando de ignição ligada (posição I ou Run).
              </p>
            </div>
          </section>

          {/* ETAPA 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                3
              </span>
              Bombeamento do Combustível no Bulbo Primer
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Para que a roçadeira pegue logo nas primeiras puxadas, é indispensável remover as bolhas de ar paradas nas mangueiras e alimentar o carburador.
              </p>
              <p>
                Localize o bulbo injetor de combustível (primer), aquela pequena bolha de borracha transparente na lateral do carburador.
              </p>
              <p>
                Pressione o bulbo com o dedo de 7 a 10 vezes de forma pausada até sentir resistência e visualizar a gasolina preenchendo a cúpula translúcida sem ar.
              </p>
            </div>
          </section>

          {/* ETAPA 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                4
              </span>
              Uso Correto do Afogador e Acionamento da Corda
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Com o motor frio, mova a alavanca do afogador para a posição fechada (partida a frio), enriquecendo a mistura inicial.
              </p>
              <p>
                Segure a carcaça firme no chão, puxe o punho de partida devagar apenas até sentir os trincos engatarem (folga inicial) e, a partir daí, dê puxadas curtas e firmes.
              </p>
              <p>
                Assim que o motor der o primeiro sinal de ignição (um ronco curto ou engasgo), retorne imediatamente o afogador para a posição aberta.
              </p>
              <p>
                Puxe o cordão novamente com firmeza: o motor iniciará o funcionamento contínuo e bastará um toque leve no acelerador para deixá-lo aquecer em marcha lenta por 30 segundos antes de roçar.
              </p>
            </div>
          </section>
        </div>

        {/* ===================================================================
            6B. OUTROS TIPOS DE ROÇADEIRAS (ELÉTRICA E A BATERIA)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
            Como Ligar Outros Tipos de Roçadeiras
          </h2>

          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#166534] mb-6 border-l-4 border-[#16A34A] pl-4">
              Como ligar uma roçadeira elétrica
            </h3>
            <div className="w-full flex justify-center mb-8">
              <img
                src="/images/blog/Como ligar uma roçadeira elétrica.webp"
                alt="Operador demonstrando como ligar uma roçadeira elétrica com segurança"
                title="Como ligar uma roçadeira elétrica"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Para ligar uma roçadeira elétrica com segurança, conecte o plugue a uma extensão compatível com a amperagem da máquina e prenda o cabo no passa-fio do punho para evitar desconexões.
              </p>
              <p>
                Adote uma postura firme com os dois pés apoiados, segurando a empunhadura principal com a mão dominante e a alça auxiliar com a outra mão, mantendo o cabeçote suspenso longe do corpo.
              </p>
              <p>
                Pressione primeiro o botão lateral de destravamento com o polegar e, em seguida, aperte o gatilho interruptor para acionar o motor elétrico suavemente.
              </p>
              <p>
                Ao finalizar o corte, solte o gatilho e aguarde o carretel ou lâmina parar completamente antes de desconectar o cabo da tomada.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#166534] mb-6 border-l-4 border-[#16A34A] pl-4">
              Como ligar uma roçadeira a bateria
            </h3>
            <div className="w-full flex justify-center mb-8">
              <img
                src="/images/blog/Como ligar uma roçadeira a bateria.webp"
                alt="Operador encaixando a bateria e acionando a trava de partida de uma roçadeira a bateria"
                title="Como ligar uma roçadeira a bateria"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Nos modelos a bateria, comece deslizando a bateria carregada no compartimento até ouvir o clique da trava de retenção, garantindo contato firme nos terminais.
              </p>
              <p>
                Ative a chave geral ou botão liga/desliga no painel da empunhadura e mantenha a ponteira de corte livre de obstáculos no chão.
              </p>
              <p>
                Acione a alavanca de segurança superior com a palma da mão e pressione o gatilho de aceleração gradualmente conforme a densidade da grama.
              </p>
              <p>
                Sempre que pausar o trabalho para limpar o cabeçote ou guardar o equipamento, solte o gatilho e remova a bateria do alojamento para impedir qualquer acionamento acidental.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. BOX DE ALERTA DE SEGURANÇA E EPIS
            =================================================================== */}
        <section className="mt-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Alerta de Segurança Crucial na Partida
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  Sempre afaste a roçadeira pelo menos 3 metros do local onde você abasteceu o tanque antes de puxar a corda de partida, evitando que faíscas inflamem vapores de gasolina derramada.
                </p>
                <p>
                  Apoie a máquina firmemente no chão plano e certifique-se de que a lâmina metálica ou o carretel não estejam encostando em pedras, galhos ou nos seus pés.
                </p>
                <p>
                  Consulte sempre o manual oficial do seu modelo específico para confirmar a posição exata do afogador e a proporção de óleo 2 tempos recomendada pelo fabricante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. ERROS COMUNS E COMO EVITÁ-LOS
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros Comuns na Partida e Como Evitá-los
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Continuar puxando a corda com o afogador fechado depois do primeiro sinal do motor.</li>
                <li>Puxar o cordão de partida até o limite máximo com violência ou soltar o punho de vez no retorno.</li>
                <li>Esquecer de pressionar o bulbo primer quando a máquina esteve guardada com o carburador seco.</li>
                <li>Abastecer com gasolina velha ou misturar óleo 2 tempos "no olho" sem dosador.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Abrir o afogador imediatamente assim que ouvir o primeiro estalo de explosão.</li>
                <li>Tirar a folga inicial da cordinha até sentir o engate antes de puxar com firmeza controlada.</li>
                <li>Bombear o primer de 7 a 10 vezes até visualizar o combustível limpo circulando sem bolhas.</li>
                <li>Aguardar 30 segundos de aquecimento antes de acelerar fundo no mato pesado.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. DICAS DE MANUTENÇÃO PREVENTIVA E CUIDADOS COM O FIO
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Manutenção e Cuidados para Partidas Sempre Leves
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Manter a roçadeira pegando de primeira começa no encerramento de cada jornada de trabalho.
            </p>
            <p>
              Sempre que terminar o serviço e não for usar a máquina nos próximos dias, esvazie o tanque e deixe o motor funcionar em marcha lenta até apagar sozinho para secar o carburador.
            </p>
            <p>
              Inspecione regularmente a espuma do filtro de ar e o estado da vela de ignição, pois filtros saturados de poeira alteram a mistura e dificultam a partida.
            </p>
            <p>
              Além do motor, mantenha o carretel abastecido na medida certa seguindo nosso guia de{' '}
              <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como colocar fio na roçadeira sem embolar
              </a>
              , evitando que pontas de nylon excessivamente longas pesem no arrasto inicial da embreagem.
            </p>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Como Ligar a Roçadeira
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
                    <span className="flex items-center gap-3 text-base sm:text-lg">
                      <span className="w-6 h-6 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span className="text-[#166534] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-3 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50 space-y-3">
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
            11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Dicas Finais para Evitar Problemas na Partida
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p>
                Dominar a sequência correta para ligar sua roçadeira a gasolina elimina o cansaço físico antes do serviço e evita quebras prematuras no sistema de partida retrátil.
              </p>
              <p>
                O segredo está na tríade simples de combustível fresco bem dosado, bombeamento correto no primer e abertura imediata do afogador logo após o primeiro sinal do motor.
              </p>
              <p>
                Aplicando esse ritual técnico em cada jornada, sua máquina responderá sempre com agilidade e força total do começo ao fim da roçada.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. BOX "DICA DO ESPECIALISTA" (DESTAQUE FINAL)
            =================================================================== */}
        <div className="mt-12 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-green-100 p-3 rounded-full text-[#166534] shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#166534] mb-2">
              Dica de Ouro da Oficina: Partida a Frio vs. Partida a Quente
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p>
                Nunca feche o afogador quando parar apenas para reabastecer o tanque com o motor já quente: acionar o afogador em um cilindro aquecido é a causa número um de afogamento no meio do expediente.
              </p>
              <p>
                Com a máquina quente, basta posicionar o botão Stop em ligado, manter o afogador aberto e puxar a corda uma única vez com firmeza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoLigarRocadeira;
