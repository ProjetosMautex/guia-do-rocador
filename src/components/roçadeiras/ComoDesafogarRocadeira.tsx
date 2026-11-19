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

export const ComoDesafogarRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Por que a vela da roçadeira fica molhada de gasolina?",
      answer: [
        "Quando tentamos dar a partida repetidas vezes com a passagem de ar fechada pelo afogador, o carburador continua injetando gasolina sem que haja oxigênio suficiente para inflamar a mistura.",
        "Esse combustível líquido se deposita nos eletrodos da vela e cria uma ponte condutora que impede a centelha elétrica de saltar."
      ]
    },
    {
      question: "Posso passar lixa na ponta da vela para limpar quando ela afoga?",
      answer: [
        "Não é recomendado usar lixas grossas ou materiais abrasivos nos eletrodos de velas modernas.",
        "A lixa cria micro-ranhuras no metal que aceleram o acúmulo de carvão; prefira secar bem com um pano limpo e, se necessário, evaporar a umidade rapidamente na chama de um isqueiro, deixando esfriar antes de montar."
      ]
    },
    {
      question: "Como tentar desafogar sem tirar a vela (Truque do Acelerador)?",
      answer: [
        "Se o afogamento for leve, coloque o afogador totalmente na posição aberta (trabalho), mantenha o gatilho do acelerador pressionado até o fundo e puxe a corda firme de 5 a 8 vezes.",
        "A borboleta totalmente aberta permite a entrada máxima de ar puro para ventilar a câmara e queimar o excesso sem precisar desmontar a carenagem."
      ]
    },
    {
      question: "Qual chave é usada para abrir a cobertura da roçadeira Stihl FS 220?",
      answer: [
        "Nos modelos profissionais da Stihl como a FS 160 e a FS 220, utiliza-se a chave Torx T27 para soltar os parafusos da carenagem superior e a chave combinada de vela para desrosquear a vela no sentido anti-horário."
      ]
    },
    {
      question: "Desafoguei o motor, mas ele continua morrendo ao acelerar. O que pode ser?",
      answer: [
        "Quando o cilindro já está seco e a vela produz faísca normal, mas a máquina engasga, a causa costuma ser desregulagem nas agulhas L e H ou sujeira interna no carburador.",
        <>
          Nesse caso, confira o passo a passo completo de{' '}
          <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como regular o carburador da roçadeira
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
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/como desafogar roçadeira.webp"
            alt="Como Desafogar Roçadeira em 2 Minutos Passo a Passo"
            title="Como Desafogar Roçadeira em 2 Minutos [Passo a Passo]"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Desafogar Roçadeira em 2 Minutos <br />
            <span className="text-[#16A34A]">[Passo a Passo]</span>
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
            É frustrante puxar a corda de partida várias vezes e perceber que a roçadeira simplesmente não pega, especialmente quando o serviço precisa render.
          </p>
          <p>
            Na maioria absoluta das vezes, o problema que impede o funcionamento após tentativas seguidas é o afogamento do motor, situação muito comum depois de longos períodos sem uso ou em manhãs frias.
          </p>
          <p>
            A boa notícia é que desafogar uma roçadeira a gasolina é um procedimento mecânico simples que você mesmo resolve em poucos minutos no campo.
          </p>
          <p>
            Neste guia completo, mostramos o passo a passo geral e os procedimentos específicos de como desafogar roçadeira Stihl, como desafogar roçadeira Toyama, Makita e Vulcan sem danificar a vela ou o cilindro.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como desafogar roçadeira.webp"
              alt="Mecânico inspecionando a vela de ignição e o cilindro de uma roçadeira afogada"
              title="Diagnóstico e manutenção para desafogar roçadeira a gasolina"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. DIAGNÓSTICO DO PROBLEMA ("O QUE É E COMO IDENTIFICAR")
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            O que é o Afogamento da Roçadeira e Como Identificar
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Dizer que a roçadeira está afogada significa que houve acúmulo excessivo de combustível líquido dentro da câmara de combustão.
            </p>
            <p>
              Para o motor 2 tempos funcionar, ele precisa de uma névoa equilibrada de ar e gasolina; quando você puxa a cordinha repetidamente com o afogador fechado, o cilindro fica literalmente encharcado.
            </p>
            <p>
              Nessa situação, a ponta da vela de ignição fica coberta de gasolina e óleo, impedindo que a faísca elétrica salte entre os eletrodos para inflamar a mistura.
            </p>
            <p>
              Para evitar que isso aconteça nas próximas partidas matinais, vale revisar também o ritual correto no nosso guia de{' '}
              <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como ligar roçadeira a gasolina com motor frio
              </a>
              .
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                1. Cheiro Forte de Gasolina
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Odor nítido de combustível cru saindo pelo escapamento ou umedecendo a base do silencioso após várias puxadas.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                2. Som Abafado sem Pegar
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A corda muda levemente de resistência e o cilindro gira pesado sem emitir nenhum sinal de explosão.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#166534] mb-2">
                3. Vela Brilhante e Úmida
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ao desrosquear a vela de ignição, o eletrodo central encontra-se molhado de mistura 2 tempos.
              </p>
            </div>
          </div>

          {/* Método 1 Rápido: Truque do Acelerador */}
          <div className="bg-[#F0FDF4] p-6 sm:p-8 rounded-2xl border border-[#16A34A]/30">
            <h3 className="text-2xl font-bold text-[#166534] mb-3">
              Método 1: O “Truque do Acelerador” (Tente este primeiro!)
            </h3>
            <div className="space-y-3 prose prose-lg text-gray-800 max-w-none">
              <p>
                Se você suspeita que acabou de afogar a máquina por esquecer o afogador fechado em 2 ou 3 puxadas a mais, teste este atalho antes de pegar nas chaves.
              </p>
              <p>
                Mova a alavanca do afogador totalmente para a posição aberta (desafogada), segure o gatilho do acelerador pressionado até o fundo com a máquina apoiada no chão e puxe a corda com firmeza de 5 a 8 vezes.
              </p>
              <p>
                A borboleta aberta no máximo injeta ar puro para varrer o excesso leve de vapor; se ainda assim ela não der sinal, passe imediatamente para a drenagem pela vela abaixo.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS E FERRAMENTAS NECESSÁRIAS (CHECKLIST VISUAL)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#15803d] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Materiais Necessários
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Separe estes itens simples para realizar o desafogo completo em 2 minutos:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Vela Combinada (e Torx T27 se necessário)</span>
                <span className="text-xs text-gray-600">Para soltar a tampa protetora e desrosquear a vela no sentido anti-horário.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano Limpo e Seco (Sem Fiapos)</span>
                <span className="text-xs text-gray-600">Essencial para absorver a gasolina e o óleo acumulados na rosca e nos eletrodos.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Isqueiro (Opcional para Secagem Rápida)</span>
                <span className="text-xs text-gray-600">Para passar brevemente na ponta da vela e evaporar a umidade sem usar lixas abrasivas.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Luvas de Proteção e Papel Absorvente</span>
                <span className="text-xs text-gray-600">Protege as mãos do contato com gasolina e coleta o líquido expelido pelo cilindro.</span>
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
            Passo a Passo Completo para Desafogar a Roçadeira
          </h2>

          {/* PASSO 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                1
              </span>
              Passo 1: Desligar a Ignição e Acessar a Vela
            </h3>
            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/Passo 1 Desligar e montar.webp"
                alt="Desligar o botão Stop e remover o cachimbo da vela da roçadeira"
                title="Passo 1: Desligar a ignição e acessar a vela"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Antes de qualquer intervenção, coloque o interruptor liga/desliga no punho na posição Stop (OFF) para eliminar qualquer risco de centelha acidental.
              </p>
              <p>
                Se o seu modelo possuir carenagem superior fechada sobre o cabeçote, solte os parafusos da cobertura e guarde-os em local seguro.
              </p>
              <p>
                Em seguida, puxe o cachimbo de borracha com firmeza para desconectá-lo da vela e use a chave de vela no sentido anti-horário para removê-la do cilindro.
              </p>
            </div>
          </section>

          {/* PASSO 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                2
              </span>
              Passo 2: Inspeção e Secagem da Vela de Ignição
            </h3>
            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/Passo 2 Limpeza da vela.webp"
                alt="Secagem cuidadosa dos eletrodos da vela de ignição com pano limpo"
                title="Passo 2: Secagem da vela de ignição"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Com a vela fora do motor, verifique se a ponta metálica está encharcada de gasolina e óleo 2 tempos.
              </p>
              <p>
                Use um pano limpo e seco para enxugar completamente a rosca, o isolador cerâmico e o espaço entre os eletrodos.
              </p>
              <p>
                Caso ela continue muito úmida de óleo, passe brevemente a ponta na chama de um isqueiro por poucos segundos apenas para evaporar o combustível residual e aguarde esfriar, evitando raspar com lixas grossas ou materiais abrasivos que danificam o metal.
              </p>
            </div>
          </section>

          {/* PASSO 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                3
              </span>
              Passo 3: Desafogar o Motor Manualmente (Virar de Cabeça para Baixo)
            </h3>
            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/Passo 3 Desafogar o motor manualmente.webp"
                alt="Roçadeira virada com o furo da vela apontado para o chão para expulsar gasolina"
                title="Passo 3: Expulsão manual do excesso de combustível"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Com o orifício da vela aberto, vire a roçadeira de cabeça para baixo de modo que o furo do cilindro fique apontado diretamente para o chão.
              </p>
              <p>
                Essa inclinação utiliza a gravidade a seu favor para escoar a mistura acumulada no cárter e na câmara de combustão.
              </p>
              <p>
                Segure a estrutura com firmeza e prepare-se para acionar o retrátil mantendo o cachimbo da vela afastado do orifício.
              </p>
            </div>
          </section>

          {/* PASSO 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                4
              </span>
              Passo 4: Remoção Completa do Combustível em Excesso
            </h3>
            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/Remoção do combustível em excesso.webp"
                alt="Acionamento da corda de partida para expelir a gasolina acumulada no cilindro"
                title="Passo 4: Drenagem do cilindro puxando a corda"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Mantendo a máquina invertida e o botão Stop desligado, puxe a corda de partida de 5 a 15 vezes seguidas com velocidade constante.
              </p>
              <p>
                O movimento do pistão funcionará como uma bomba de ar, expulsando pelo buraco da vela toda a gasolina crua e a névoa acumulada no interior do cilindro.
              </p>
              <p>
                Continue puxando até perceber que não saem mais respingos líquidos pelo orifício e deixe a câmara ventilar por um minuto.
              </p>
            </div>
          </section>

          {/* PASSO 5 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                5
              </span>
              Passo 5: Remontagem e Partida com Afogador Aberto
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Volte a roçadeira para a posição normal e rosqueie a vela seca primeiro com a ponta dos dedos para garantir que ela entre alinhada sem espanar a rosca de alumínio.
              </p>
              <p>
                Dê o aperto final leve com a chave de vela, reconecte o cachimbo até sentir o clique firme e recoloque a tampa protetora se a tiver removido.
              </p>
              <p>
                Agora, deixe a alavanca do afogador na posição aberta (posição de trabalho/desafogada), passe o interruptor para ligado (ON) e puxe a corda de partida — mantendo o acelerador acionado se necessário — até o motor pegar e queimar a fumaça residual.
              </p>
            </div>
          </section>
        </div>

        {/* ===================================================================
            6B. GUIAS ESPECÍFICOS POR MARCA: STIHL, TOYAMA, MAKITA E VULCAN
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
            Procedimento Específico por Marca: Stihl, Toyama, Makita e Vulcan
          </h2>

          {/* TÓPICO 1: COMO DESAFOGAR ROÇADEIRA STIHL */}
          <div id="como-desafogar-rocadeira-stihl" className="scroll-mt-24 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
              Linha Profissional Stihl
            </span>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Como Desafogar Roçadeira Stihl (FS 160, FS 220, FS 280 e FS 290)
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para saber como desafogar roçadeira Stihl — especialmente nos consagrados modelos profissionais FS 160, FS 220, FS 280 e FS 290 — é preciso seguir a ordem correta de desmontagem da cobertura superior para acessar a vela sem forçar os cabos.
              </p>
              <p>
                Confira o passo a passo exato de bancada para os motores Stihl:
              </p>
            </div>

            <div className="space-y-4 bg-white p-5 sm:p-6 rounded-xl border border-gray-200">
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Desligar o motor: Posicione o interruptor de comando na posição Stop (desligado) para cortar a corrente elétrica da bobina.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Remover a cobertura: Utilize a chave adequada (como a chave Torx T27 nos modelos FS 160 e FS 220) para soltar os parafusos da tampa protetora laranja e liberar o acesso ao cabeçote do motor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Retirar a vela de ignição: Puxe o cachimbo encaixado na vela, use a chave combinada para desrosqueá-la no sentido anti-horário e confira se a ponta está encharcada de combustível.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Secar a vela: Enxugue os eletrodos com um pano limpo e, se estiverem muito úmidos, passe rapidamente na chama de um isqueiro (evite usar lixas ou materiais abrasivos para não danificar o revestimento do eletrodo).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Drenar o excesso de combustível: Vire a roçadeira Stihl de cabeça para baixo (com o orifício da vela voltado para o chão) e puxe a corda de partida de 5 a 15 vezes para expelir toda a gasolina acumulada no cilindro.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Montar e dar a partida: Retorne a máquina à posição normal, rosqueie a vela primeiro com os dedos dando um aperto leve com a chave, encaixe o cachimbo, coloque o botão do afogador na posição de trabalho (desafogada), ligue o interruptor e puxe a corda normalmente até pegar.
                </p>
              </div>
            </div>
          </div>

          {/* TÓPICO 2: COMO DESAFOGAR ROÇADEIRA TOYAMA */}
          <div id="como-desafogar-rocadeira-toyama" className="scroll-mt-24 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
              Motores 2 Tempos Toyama
            </span>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-l-4 border-[#16A34A] pl-4">
              Como Desafogar Roçadeira Toyama (TBC26, TBC33, TBC43 e TBC52)
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Aprender como desafogar roçadeira Toyama com motor 2 tempos consiste em eliminar a mistura rica de gasolina e óleo que costuma acumular no cilindro quando o operador insiste na cordinha com a alavanca do afogador levantada.
              </p>
              <p>
                Siga o procedimento prático passo a passo para colocar sua Toyama em funcionamento:
              </p>
            </div>

            <div className="space-y-4 bg-white p-5 sm:p-6 rounded-xl border border-gray-200">
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Desligue o interruptor: Coloque a chave seletora de liga/desliga no punho na posição OFF (Desligado) para impedir qualquer faísca durante a limpeza.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Remova o cachimbo e a vela: Desencaixe a tampa de borracha superior e utilize a chave de vela que acompanha o kit da ferramenta para desrosquear e retirar a vela de ignição.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Seque a vela: Caso a ponta esteja encharcada de gasolina e óleo 2T, seque-a bem com um pano limpo e, se necessário, passe levemente a chama de um isqueiro para evaporar o excesso (deixando esfriar em seguida, sem jamais usar lixas ou produtos abrasivos).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Elimine o excesso de combustível do motor: Vire a roçadeira Toyama de cabeça para baixo (com o furo da vela apontado para o chão) e puxe a corda de partida de 5 a 10 vezes para "cuspir" todo o combustível líquido retido no cilindro.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Monte novamente: Volte a máquina para a posição normal, recoloque a vela apertando com cuidado para não espanar a rosca do cabeçote e encaixe o cachimbo com firmeza.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#15803d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
                <p className="text-sm sm:text-base text-gray-700 m-0">
                  Ligue a máquina: Passe o interruptor para Ligado (ON), mantenha a alavanca do afogador na posição aberta (desafogado — nunca feche o afogador agora para não afogar novamente) e puxe a corda mantendo o gatilho do acelerador totalmente acionado até o motor pegar.
                </p>
              </div>
            </div>
          </div>

          {/* TÓPICO 3: MAKITA E VULCAN / OUTRAS IMPORTADAS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Desafogar Roçadeira Makita (2T e 4T)
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Nas roçadeiras Makita a combustão, confira primeiro se o botão de parada está liberado e se não há excesso de óleo no respiro (nos modelos 4 tempos que foram inclinados incorretamente).
                </p>
                <p>
                  Retire a vela, drene o cilindro invertido puxando o retrátil 8 vezes, limpe o filtro de ar e dê a partida com o afogador totalmente aberto.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Desafogar Roçadeira Vulcan, Tekna e Nakasaki
              </h3>
              <div className="space-y-3 prose text-gray-700 max-w-none">
                <p>
                  Por compartilharem a mesma plataforma de carburador de diafragma 43cc e 52cc, essas marcas costumam afogar quando o usuário mistura óleo 2T em excesso (acima de 40 ml por litro).
                </p>
                <p>
                  Após secar a vela e expulsar a gasolina com a máquina de ponta-cabeça, acione a trava de aceleração no punho e dê a partida sempre com o afogador abaixado (aberto).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6C. ENTENDENDO O MOTOR DOIS TEMPOS E OUTROS VILÕES DA PARTIDA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">
            Entendendo o Motor Dois Tempos e Outros Vilões da Partida
          </h2>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/Entendendo o Motor Dois Tempos nas Roçadeiras.webp"
              alt="Estrutura mecânica de um motor dois tempos de roçadeira a gasolina"
              title="Funcionamento do motor dois tempos nas roçadeiras"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              A maioria das roçadeiras utiliza o motor de dois tempos por ser leve e trabalhar em qualquer inclinação sem depender de um cárter separado de óleo.
            </p>
            <p>
              Como o ciclo de admissão, compressão, explosão e escape ocorre a cada volta completa do virabrequim, o motor é altamente sensível à proporção de óleo na gasolina e à passagem livre de ar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Por que a mistura exige tanta precisão?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Pouco óleo provoca superaquecimento e trava o pistão na camisa; já óleo em excesso não queima por completo, carboniza o escape e molha a vela logo nas primeiras puxadas a frio.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#166534] mb-3">
                Quando o problema não é afogamento
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Se a vela sai sempre seca e mesmo assim o motor não pega, desconfie de gasolina oxidada no tanque, filtro de combustível entupido dentro do reservatório ou falta de centelha na bobina.
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
                Alerta de Segurança Crucial ao Drenar o Cilindro
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  Quando for puxar a corda com a roçadeira de cabeça para baixo para expulsar a gasolina, mantenha sempre o botão Stop desligado e o cachimbo da vela longe do buraco do cilindro.
                </p>
                <p>
                  Se o cachimbo saltar uma faísca perto da névoa de gasolina que está sendo cuspida pelo orifício, o vapor pode inflamar instantaneamente.
                </p>
                <p>
                  Realize todo o processo em ambiente aberto e ventilado, e seque qualquer respingo de combustível na carenagem antes de religar o motor.
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
            Erros Frequentes que Fazem a Roçadeira Afogar de Novo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Voltar a fechar o afogador logo após secar e reinstalar a vela no cilindro.</li>
                <li>Lixar agressivamente o eletrodo da vela com lixa grossa de ferro ou faca.</li>
                <li>Apertar a vela com força excessiva na chave, correndo risco de espanar a rosca do cabeçote.</li>
                <li>Insistir na partida com gasolina velha guardada há mais de 30 dias no galão.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Abrir o afogador no exato momento em que o motor der o primeiro sinal de explosão.</li>
                <li>Secar a vela com pano limpo e rosqueá-la inicialmente sempre com os dedos.</li>
                <li>Puxar a corda mantendo o acelerador acionado na primeira partida pós-desafogo.</li>
                <li>Manter o filtro de ar limpo para garantir o fluxo livre de oxigênio no carburador.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. DICAS DE MANUTENÇÃO PREVENTIVA
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Cuidados Gerais e Manutenção Preventiva em Todas as Roçadeiras
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A melhor maneira de nunca perder tempo desafogando a máquina no sol quente é cuidar do sistema de alimentação antes de guardá-la.
            </p>
            <p>
              Sempre que encerrar o expediente e não for utilizar a roçadeira nos dias seguintes, esvazie o tanque e ligue o motor até que ele apague sozinho, secando completamente as membranas internas do carburador.
            </p>
            <p>
              Gasolina parada oxida, cria goma verniz e trava a agulha do estilete aberta, fazendo com que o carburador inunde o cilindro sozinho.
            </p>
            <p>
              Limpe também as aletas do cilindro e o filtro de ar após cada roçada, garantindo que sua ferramenta esteja sempre pronta para pegar na primeira puxada.
            </p>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Como Desafogar Roçadeira
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
              Considerações Finais: Máquina Desafogada e Pronta para o Corte
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p>
                Saber como desafogar roçadeira Stihl, Toyama, Makita ou Vulcan com método e calma poupa viagens desnecessárias à assistência técnica e preserva o conjunto de partida.
              </p>
              <p>
                Ao secar a vela corretamente, expulsar a gasolina acumulada pelo cilindro invertido e dar a partida com o afogador aberto, o motor recupera a combustão limpa em poucos minutos.
              </p>
              <p>
                Mantenha a proporção de óleo 2 tempos sempre exata, drene o tanque antes de longas paradas e aproveite o máximo rendimento da sua roçadeira no campo.
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
              Dica de Ouro da Oficina: Quando a Vela Continua Encharcando
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p>
                Se você seca a vela, esgota o cilindro de cabeça para baixo e, na primeira tentativa sem afogador, a vela já sai pingando gasolina novamente, o problema está na agulha do carburador presa aberta ou na membrana endurecida.
              </p>
              <p>
                Nesse caso, feche a saída do tanque, faça a limpeza interna do reparo do carburador e confira se o eletrodo da vela está calibrado com a folga de 0,5 mm a 0,6 mm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoDesafogarRocadeira;
