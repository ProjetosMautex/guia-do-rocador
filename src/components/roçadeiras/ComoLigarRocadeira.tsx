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

export const ComoLigarRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Quantas puxadas na corda levam para o motor frio dar o primeiro sinal?",
      answer: [
        "Com o bulbo primer preenchido e o afogador fechado, uma máquina regulada dá o primeiro sinal curto de explosão entre a 3ª e a 5ª puxada.",
        "Assim que ouvir esse ronco rápido, abaixe o afogador na hora antes de puxar novamente."
      ]
    },
    {
      question: "Preciso puxar o afogador quando parei apenas para abastecer?",
      answer: [
        "Não.",
        "Com o cilindro já quente, fechar o afogador encharca a vela na primeira puxada: deixe o afogador aberto, confira a chave Stop ligada e puxe normalmente."
      ]
    },
    {
      question: "Puxei a corda mais de dez vezes com o afogador fechado e agora ela não pega. E agora?",
      answer: [
        "Provavelmente o excesso de mistura molhou o eletrodo da vela.",
        <>
          Abra o afogador e siga nosso procedimento rápido de{' '}
          <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como desafogar roçadeira em 2 minutos
          </a>
          .
        </>
      ]
    },
    {
      question: "Por que a lâmina roda rápido logo que o motor pega?",
      answer: [
        "Se você usou a trava de meia-aceleração no punho para ajudar na partida a frio, o motor nasce acima da lenta até você dar um toque curto no gatilho para desarmar a trava.",
        <>
          Se ela continuar rodando depois de destravar, ajuste o parafuso da lenta conforme o guia de{' '}
          <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como regular o carburador da roçadeira
          </a>
          .
        </>
      ]
    },
    {
      question: "Quanto tempo a gasolina misturada dura no tanque sem prejudicar a partida?",
      answer: [
        "O limite seguro é de 15 dias.",
        "Passado esse prazo, o etanol absorve umidade e cria goma dentro do carburador, impedindo o motor de puxar combustível na próxima partida."
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
            src="/images/blog/como-ligar-rocadeira-principal.webp"
            alt="Operador dando partida a frio em roçadeira a gasolina apoiada em terreno plano"
            title="Como Ligar Roçadeira a Gasolina (Motor Frio): Passo a Passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Ritual de Partida • Gasolina, Elétrica e Bateria
          </span>

          <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
            Como Ligar Roçadeira a Gasolina (Motor Frio): <br />
            <span className="text-[#4ade80]">Passo a Passo</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-3 hover:text-[#4ade80] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
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
            2. INTRODUÇÃO DIRETA DE CAMPO
            =================================================================== */}
        <section className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Puxar a cordinha da roçadeira vinte vezes no começo da manhã quase nunca é culpa de falta de força no braço, mas de errar o segundo exato de abrir o afogador.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quando você acerta a sequência do botão Stop, do bulbo primer e da alavanca do afogador, uma roçadeira a gasolina saudável pega em quatro ou cinco puxadas leves sem estourar a mola do retrátil.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Neste guia direto, mostro a tabela comparativa entre partida a frio e partida a quente, o passo a passo exato para motores a combustão e os cuidados de acionamento nas máquinas elétricas e a bateria.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-ligar-rocadeira-principal.webp"
              alt="Posicionamento seguro no solo para puxar o retrátil da roçadeira a gasolina"
              title="Como dar partida a frio na roçadeira com segurança"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. TABELA RESUMO: PARTIDA A FRIO VS PARTIDA A QUENTE (UTILIDADE ÚNICA)
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Resumo Rápido: Partida a Frio vs. Partida a Quente
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Antes de encostar na cordinha, confira qual das duas situações se aplica ao seu motor agora:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">Comando da Máquina</th>
                  <th className="p-4 font-bold">Motor Frio (1ª Partida do Dia)</th>
                  <th className="p-4 font-bold">Motor Quente (Após Reabastecer)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Chave Stop / Ignição</td>
                  <td className="p-4 text-[#166534] font-semibold">Posição Ligada (I / ON)</td>
                  <td className="p-4 text-[#166534] font-semibold">Posição Ligada (I / ON)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/40">
                  <td className="p-4 font-bold text-gray-900">Bulbo Primer (Injetor)</td>
                  <td className="p-4">Apertar 7 a 10 vezes até encher de gasolina</td>
                  <td className="p-4">Não precisa apertar (só se o tanque secou inteiro)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Alavanca do Afogador</td>
                  <td className="p-4 font-semibold text-amber-800">Fechado até o 1º sinal ➔ Abrir imediatamente</td>
                  <td className="p-4 font-semibold text-[#166534]">Sempre Aberto (Posição Trabalho)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/40">
                  <td className="p-4 font-bold text-gray-900">Trava de Meia-Aceleração</td>
                  <td className="p-4">Acionar se o punho tiver (desarmar após ligar)</td>
                  <td className="p-4">Desarmada (marcha lenta normal)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Puxadas Esperadas</td>
                  <td className="p-4">3 a 5 fechadas + 1 a 3 abertas</td>
                  <td className="p-4">1 a 2 puxadas firmes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            4. PASSO A PASSO DA PARTIDA A FRIO (4 ETAPAS ENXUTAS)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        <section className="space-y-6 mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Passo a Passo para Ligar Roçadeira a Gasolina com Motor Frio
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">1</span>
              Abasteça com mistura fresca e afaste do galão
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Use gasolina preparada há menos de 15 dias na proporção correta do{' '}
              <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
                óleo 2 tempos para roçadeira
              </a>{' '}
              (se a sua máquina for da linha TBC ou 4T, confira também o{' '}
              <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] hover:underline font-semibold">
                óleo ideal para roçadeira Toyama
              </a>
              ).
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Feche bem a tampa e caminhe pelo menos três metros para longe do ponto de abastecimento antes de apoiar a roçadeira no chão limpo.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">2</span>
              Ligue a chave Stop e bombeie o primer
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Coloque o interruptor do punho na posição ligada (I ou ON): esquecer essa chave no Stop é o jeito mais rápido de encharcar o cilindro sem faísca.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Pressione a bolha transparente do injetor (primer) devagar de 7 a 10 vezes até vê-la preenchida de combustível e ouvir o retorno circulando para o tanque.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">3</span>
              Feche o afogador e puxe só até o primeiro sinal
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Mova a alavanca do afogador para a posição fechada (símbolo de borboleta fechada ou seta para cima nas importadas) e apoie a mão esquerda firme sobre a carcaça do motor.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Tire primeiro a folga da cordinha até sentir o engate dos trincos e dê puxadas curtas e rápidas sem esticar o cordão até o fim do curso até ouvir um ronco curto de explosão que apaga em seguida.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">4</span>
              Abra o afogador imediatamente e aqueça 30 segundos
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Assim que escutar o primeiro sinal, passe o afogador para a posição totalmente aberta e puxe novamente: em uma ou duas puxadas o motor entra em funcionamento contínuo.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Dê um toque leve no gatilho para desarmar a trava de partida, aguarde cerca de 30 segundos na lenta para o óleo circular no virabrequim e só então acelere para cortar.
            </p>
          </div>
        </section>

        {/* ===================================================================
            5. POR QUE ALGUMAS MÁQUINAS RESISTEM NA CORDA
            =================================================================== */}
        <section className="mb-14 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
            Quando a Máquina Não Pega Mesmo Seguindo a Ordem
          </h2>
          <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Se o motor não dá nem sinal após seis puxadas com o afogador fechado, pare e cheque três suspeitos rápidos antes de continuar puxando.
          </p>
          <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Primeiro, confirme se o filtro de ar não está entupido de poeira e se o{' '}
            <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
              fio de nylon no carretel
            </a>{' '}
            não está longo demais pesando na embreagem.
          </p>
          <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
            Se sentir cheiro forte de combustível cru, passe direto para{' '}
            <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como desafogar a roçadeira
            </a>
            ; se ela pega mas apaga ao soltar o dedo, o ajuste é feito em{' '}
            <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como regular o carburador
            </a>
            .
          </p>
        </section>

        {/* ===================================================================
            6. ELÉTRICA E A BATERIA (ENXUTO E COM LINKS PARA OS GUIAS PILARES)
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Como Ligar Roçadeira Elétrica e a Bateria
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#166534] mb-4">
                Modelos Elétricos com Fio
              </h3>
              <img
                src="/images/blog/Como ligar uma roçadeira elétrica.webp"
                alt="Operador segurando roçadeira elétrica com o cabo preso no aliviador de tensão"
                title="Como ligar uma roçadeira elétrica"
                width={800}
                height={533}
                className="rounded-xl shadow-sm border border-gray-200 w-full h-auto object-cover mb-4"
                loading="lazy"
              />
              <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                Prenda a extensão no gancho passa-fio do punho (evitando puxões na tomada) e confira a bitola correta do cabo para não aquecer o motor.
              </p>
              <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                Com a ponteira suspensa longe do chão, aperte o botão lateral de segurança com o polegar e acione o gatilho; se busca um modelo leve sem carburação, veja nosso ranking da{' '}
                <a href="/melhor-rocadeira" className="text-[#166534] hover:underline font-semibold">
                  melhor roçadeira elétrica e a gasolina
                </a>
                .
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#166534] mb-4">
                Modelos a Bateria (Íon-Lítio)
              </h3>
              <img
                src="/images/blog/Como ligar uma roçadeira a bateria.webp"
                alt="Encaixe da bateria de lítio e acionamento da trava de segurança na roçadeira"
                title="Como ligar uma roçadeira a bateria"
                width={800}
                height={533}
                className="rounded-xl shadow-sm border border-gray-200 w-full h-auto object-cover mb-4"
                loading="lazy"
              />
              <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                Deslize a bateria no trilho até ouvir o clique da trava, ligue a chave geral no painel e pressione a trava superior junto ao gatilho.
              </p>
              <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                Retire sempre a bateria antes de limpar a saia ou trocar o acessório — para comparar autonomia e força, confira a{' '}
                <a href="/melhor-rocadeira-a-bateria" className="text-[#166534] hover:underline font-semibold">
                  melhor roçadeira a bateria
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. ERROS COMUNS NA PARTIDA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros que Estragam o Retrátil na Hora de Ligar
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que Evitar
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Puxar o cordão com tranco desde o zero sem sentir os trincos engatarem primeiro.</li>
                <li>Soltar o punho da corda de golpe (a volta violenta quebra a mola caracol).</li>
                <li>Manter o afogador fechado depois do primeiro sinal de explosão.</li>
                <li>Dar partida com a lâmina encostada em pedra, cerca ou concreto.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática que Preserva a Máquina
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Acompanhar o retorno da corda com a mão até o punho encostar na carcaça.</li>
                <li>Abrir o afogador no instante exato em que o motor der sinal.</li>
                <li>Aguardar 30 segundos de aquecimento antes de acelerar fundo no mato.</li>
                <li>Secar o carburador na marcha lenta antes de guardar por mais de 15 dias.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. PERGUNTAS FREQUENTES
            =================================================================== */}
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Partida de Roçadeira
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
                    <span className="text-base sm:text-lg">{faq.question}</span>
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
            9. DICA DE CAMPO DO JOSÉ AILTON
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] p-6 sm:p-8 rounded-3xl shadow-sm flex items-start gap-4">
          <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
              Dica de Ouro: Puxe Curto e Firme, Nunca Até o Final do Cordão
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              O motor 2 tempos precisa de velocidade de giro no volante magnético para gerar faísca forte, não de esticar o cordão até bater no nó interno.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Encoste o punho na folga dos trincos e faça um movimento seco de cerca de 40 cm acompanhando o retorno com a mão: a faísca salta forte e a mola do arranque dura anos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoLigarRocadeira;
