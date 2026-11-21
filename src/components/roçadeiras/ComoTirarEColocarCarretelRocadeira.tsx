import React, { useState } from 'react';
import { BunnerDoMeiofiodenylonpararocadeira } from './BunnerDoMeiofiodenylonpararocadeira';

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

export const ComoTirarEColocarCarretelRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Por que o carretel da roçadeira roda para a direita para soltar?",
      answer: [
        "A maioria das roçadeiras a gasolina utiliza rosca esquerda invertida no eixo de transmissão.",
        "Essa engenharia faz com que a própria rotação do motor em alta velocidade aperte o cabeçote durante o corte, impedindo que a peça se solte sozinha em serviço.",
        "Por isso, para desenroscar o carretel, você deve girar no sentido horário (para a direita), ao contrário de um parafuso comum."
      ]
    },
    {
      question: "O que fazer se o carretel estiver emperrado e não sair com a mão?",
      answer: [
        "A mistura de seiva vegetal ácida com terra fina forma uma crosta que solda os filetes da rosca.",
        "Aplique óleo desengripante na junção do eixo com a ponteira e deixe agir por 10 minutos.",
        "Mantenha o pino de trava bem encaixado e utilize uma chave combinada ou chave de vela encaixada no sextavado interno para soltar com torque suave, sem bater com martelo."
      ]
    },
    {
      question: "Posso montar o carretel sem a arruela de encosto inferior?",
      answer: [
        "Nunca faça isso.",
        "A arruela de encosto (flange inferior) mantém o espaçamento obrigatório entre a carcaça plástica do carretel e o alumínio da caixa de engrenagens.",
        "Sem essa arruela, o plástico encosta diretamente no metal em rotação, esquenta por atrito e derrete a base do carretel em poucos minutos de uso."
      ]
    },
    {
      question: "Qual o sentido correto para enrolar o fio de nylon na bobina?",
      answer: [
        "Todo carretel de qualidade traz setas em alto relevo gravadas no miolo plástico indicando a direção correta do enrolamento.",
        "Enrole as duas vias lado a lado de forma paralela, sem cruzar os fios dentro da mesma canaleta, para evitar que eles se fundam pelo atrito térmico."
      ]
    },
    {
      question: "Qualquer carretel serve em qualquer modelo de roçadeira?",
      answer: [
        "Não.",
        "A maioria das roçadeiras nacionais e importadas de 33cc a 52cc usa o padrão universal M10 x 1,25 com rosca esquerda.",
        "No entanto, modelos específicos da Stihl ou Husqvarna podem exigir parafusos M8, M12 ou roscas de passo diferente, exigindo adaptadores ou carretéis dedicados."
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
            src="/images/blog/como-tirar-e-colocar-o-carretel-da-rocadeira.webp"
            alt="Operador realizando a troca técnica do carretel de nylon na caixa de engrenagens da roçadeira"
            title="Como tirar e colocar o carretel da roçadeira passo a passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Tirar e Colocar o Carretel da Roçadeira <br />
            <span className="text-[#16A34A]">[Passo a Passo Completo]</span>
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
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA)
            =================================================================== */}
        <section className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
            Quem trabalha no trecho sabe que trocar o cabeçote de corte faz parte da rotina diária na lida com o terreno.
          </p>
          <p>
            Essa troca é necessária quando o carretel antigo se desgasta de bater no solo para liberar linha.
          </p>
          <p>
            Também é comum alternar entre a <a href="/lamina-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">lâmina de aço</a> no mato pesado e o <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">fio de nylon</a> no acabamento fino junto a mourões e calçadas.
          </p>
          <p>
            Saber como tirar e colocar o carretel da roçadeira do jeito certo evita que você espane a rosca do eixo central.
          </p>
          <p>
            O procedimento correto também elimina vibrações perigosas na ponteira e impede prejuízos caros na caixa de engrenagens da máquina.
          </p>
          <p>
            Se você já tentou soltar essa peça e achou que ela estava soldada de fábrica, há um motivo mecânico muito claro.
          </p>
          <p>
            A grande maioria das roçadeiras opera com rosca esquerda invertida na transmissão.
          </p>
          <p>
            Ela foi desenvolvida para girar ao contrário justamente para que o torque do motor aperte o carretel no corte em vez de arremessá-lo longe.
          </p>
          <p>
            Abaixo, apresento o passo a passo prático de oficina para desmontar, montar e abastecer o cabeçote com total segurança.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-tirar-e-colocar-o-carretel-da-rocadeira.webp"
              alt="Mecânico apoiando a ponteira da roçadeira na bancada para manutenção do carretel"
              title="Ponteira de transmissão com carretel de nylon e ferramentas de trava"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. CUIDADOS INDISPENSÁVEIS ANTES DE INICIAR A TROCA
            =================================================================== */}
        <section className="mb-12 bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500 text-white p-2.5 rounded-xl">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-amber-950 uppercase tracking-tight m-0">
                Cuidados Indispensáveis Antes da Troca
              </h2>
              <p className="text-sm text-amber-900 m-0">
                Manusear o cabeçote de corte exige atenção para impedir acidentes mecânicos:
              </p>
            </div>
          </div>

          <div className="space-y-4 prose prose-lg text-amber-950 max-w-none">
            <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-amber-600 mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Espere a parada total do eixo</span>
                <span className="text-xs text-gray-700">Desligue o motor na chave de ignição e aguarde toda a inércia de rotação cessar antes de aproximar as mãos.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-amber-600 mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Isole o sistema de ignição</span>
                <span className="text-xs text-gray-700">Em máquinas a gasolina, retire o cachimbo da vela; em modelos a bateria, desconecte a bateria do suporte para anular qualquer partida acidental ao girar o eixo.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-amber-600 mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Apoie o tubo com firmeza e use luvas</span>
                <span className="text-xs text-gray-700">Deite a roçadeira no piso nivelado com a transmissão para cima e utilize luvas resistentes para proteger as mãos contra rebarbas ásperas.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS E FERRAMENTAS NECESSÁRIAS (CHECKLIST VISUAL)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Ferramentas e Materiais na Bancada
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Reúna estes itens básicos de manutenção antes de colocar as mãos na graxa:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pino de Trava ou Chave Allen</span>
                <span className="text-xs text-gray-600">Peça de aço para bloquear o orifício lateral da transmissão.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave Combinada ou de Vela</span>
                <span className="text-xs text-gray-600">Auxilia a soltar o sextavado caso o cabeçote esteja emperrado.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Óleo Desengripante em Spray</span>
                <span className="text-xs text-gray-600">Solubiliza a seiva seca e a terra acumulada nos filetes da rosca.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Escova de Cerdas ou Pano Seco</span>
                <span className="text-xs text-gray-600">Garante a higienização dos encaixes antes da nova montagem.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Graxa de Lítio ou Graxa Azul</span>
                <span className="text-xs text-gray-600">Protege a rosca do eixo contra oxidação e facilita trocas futuras.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Fio de Nylon Novo Compatível</span>
                <span className="text-xs text-gray-600">Respeite a <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#16A34A] hover:underline font-semibold">espessura correta do fio</a> da sua máquina.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (TRANSIÇÃO PARA A PRÁTICA)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiofiodenylonpararocadeira />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PRÁTICO PARTE 1: COMO TIRAR O CARRETEL
            =================================================================== */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
              Como Tirar o Carretel da Roçadeira sem Estragar a Rosca
            </h2>
            <p className="text-gray-600 text-sm">
              O erro mais recorrente entre operadores iniciantes é tentar segurar o carretel e girar sem travar o eixo interno da máquina.
            </p>
            <p className="text-gray-600 text-sm">
              Sem o bloqueio mecânico da transmissão, o conjunto roda em falso indefinidamente.
            </p>
          </div>

          {/* ETAPA 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                1
              </span>
              Bloqueie o Giro da Transmissão
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Localize na lateral da caixa de engrenagens da ponteira um pequeno furo passante usinado no alumínio.
              </p>
              <p>
                Introduza nesse orifício o pino metálico que acompanha o estojo de ferramentas, ou utilize uma chave Allen firme de calibre compatível.
              </p>
              <p>
                Com o pino encaixado no furo externo, gire o carretel devagar com a outra mão até sentir a haste metálica afundar no rebaixo da engrenagem interna.
              </p>
              <p>
                Nesse instante, o eixo fica totalmente travado e você não conseguirá mais girar o cabeçote livremente.
              </p>
            </div>

            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/travamento-eixo-carretel-rocadeira.webp"
                alt="Detalhe da inserção da chave de trava no orifício lateral da caixa de engrenagens para imobilizar o eixo"
                title="Travamento do eixo da transmissão com pino metálico"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* ETAPA 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                2
              </span>
              Desrosqueie na Direção Correta
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Mantendo o pino de trava firme no furo com uma mão, segure a carcaça do carretel com a outra mão.
              </p>
              <p>
                Aplique torque no sentido adequado para o padrão de fabricação do seu equipamento:
              </p>
              <ul className="space-y-2 list-disc list-inside text-gray-800 text-sm">
                <li>Rosca esquerda (padrão em quase todas as roçadeiras a combustão como Stihl, Husqvarna, Toyama e Vulcan): gire no sentido horário (para a direita) para soltar o cabeçote.</li>
                <li>Rosca direita convencional: gire no sentido anti-horário (para a esquerda), caso o manual do modelo especifique rosca padrão.</li>
              </ul>
              <p>
                Ao desrosquear no sentido correto, a peça deve ceder com esforço moderado das mãos.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-[#16A34A] p-5 rounded-r-xl my-4">
              <h4 className="text-base font-bold text-[#166534] mb-2 flex items-center gap-2">
                <Lightbulb size={20} className="text-[#16A34A]" /> Dica de Campo para Carretel Emperrado
              </h4>
              <div className="space-y-2 text-sm text-gray-800">
                <p>
                  A seiva verde do capim combinada com terra seca age como uma verdadeira cola entre os filetes metálicos.
                </p>
                <p>
                  Se o carretel não ceder na força manual, jamais martele a carcaça plástica, pois o choque quebra os rolamentos internos da transmissão.
                </p>
                <p>
                  Borrife óleo desengripante na base do eixo roscado, espere dez minutos para o fluido penetrar e utilize a chave combinada no sextavado central para descolar com torque progressivo.
                </p>
              </div>
            </div>
          </section>

          {/* ETAPA 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                3
              </span>
              Desmonte o Conjunto e Higienize o Eixo
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Após retirar o carretel do parafuso, passe uma escova de cerdas firmes ou um pano seco em toda a rosca do eixo.
              </p>
              <p>
                Remova qualquer resíduo de fibras de capim enroladas e terra acumulada no retentor da transmissão.
              </p>
              <p>
                Se a máquina estava trabalhando com lâmina ou faca de aço antes dessa desmontagem, certifique-se de retirar a porca travante superior e o prato de deslizamento protetor.
              </p>
              <p>
                Mantenha assentada no eixo apenas a arruela de encosto inferior (flange espaçadora), peça fundamental para calçar o carretel de nylon.
              </p>
            </div>
          </section>

          {/* ===================================================================
              7. PASSO A PASSO PRÁTICO PARTE 2: COMO COLOCAR O CARRETEL
              =================================================================== */}
          <div className="pt-8 border-t-2 border-gray-100 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
                Como Colocar o Carretel da Roçadeira com Firmeza
              </h2>
              <p className="text-gray-600 text-sm">
                Antes de montar uma nova peça, verifique na embalagem o passo de rosca correto.
              </p>
              <p className="text-gray-600 text-sm">
                A maioria das roçadeiras importadas e nacionais de 43cc a 52cc adota a bitola universal M10 x 1,25 rosca esquerda, enquanto linhas profissionais da Stihl exigem encaixes específicos.
              </p>
            </div>

            {/* ETAPA 4 */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  4
                </span>
                Mantenha o Eixo Imobilizado com o Pino de Trava
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Posicione a ponteira com o eixo apontado para cima em uma posição confortável de trabalho.
                </p>
                <p>
                  Reintroduza o pino metálico ou chave Allen no furo lateral da carcaça para travar novamente a rotação do pinhão interno.
                </p>
              </div>
            </section>

            {/* ETAPA 5 */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  5
                </span>
                Posicione a Arruela de Encosto e Rosqueie o Cabeçote
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Verifique atentamente se a arruela flange inferior está devidamente apoiada no batente do eixo.
                </p>
                <p>
                  Sem essa arruela metálica de espaçamento, o corpo plástico do carretel encosta direto no alumínio da caixa, gerando atrito destrutivo que derrete o acessório em poucos minutos.
                </p>
                <p>
                  Aproxime o cabeçote novo do eixo roscado e inicie o rosqueamento com a mão:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-800 text-sm">
                  <li>Rosca esquerda: gire no sentido anti-horário (para a esquerda) até encostar no fundo.</li>
                  <li>Rosca direita: gire no sentido horário, caso esse seja o padrão específico da sua roçadeira.</li>
                </ul>
              </div>

              <div className="w-full flex justify-center my-6">
                <img
                  src="/images/blog/montagem-carretel-fio-nylon.webp"
                  alt="Instalação do cabeçote de nylon roscando no eixo da transmissão com arruela de encosto posicionada"
                  title="Posicionamento e aperto do carretel de nylon no eixo da roçadeira"
                  width={800}
                  height={533}
                  className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </section>

            {/* ETAPA 6 */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  6
                </span>
                Faça o Aperto Final com a Mão e Libere o Sistema
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Com o pino segurando o eixo travado, aperte o carretel firmemente usando apenas a força das duas mãos.
                </p>
                <p>
                  Não use chaves de boca, alicates de pressão ou tubos como alavanca para arrochar o carretel.
                </p>
                <p>
                  Como a rosca é invertida, a própria inércia de rotação durante a aceleração e o impacto contra o capim completam o assentamento perfeito da peça.
                </p>
                <p>
                  O aperto exagerado com ferramentas pode rachar a bucha interna de latão fundida na carcaça de plástico.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* ===================================================================
            8. BOX DE ALERTA OBRIGATÓRIO DE SEGURANÇA
            =================================================================== */}
        <section className="mt-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Aviso Crítico de Segurança Operacional
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  Retire obrigatoriamente o pino ou a chave de travamento da caixa de engrenagens antes de dar a partida no motor.
                </p>
                <p>
                  Puxar a cordinha de arranque com o eixo travado pelo pino quebra os dentes da coroa e do pinhão na mesma hora.
                </p>
                <p>
                  Crie o hábito mecânico de conferir o furo da ponteira e girar o cabeçote manualmente com a máquina desligada para atestar o giro livre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. COMO ABASTECER O FIO DE NYLON NO CARRETEL
            =================================================================== */}
        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Como Abastecer o Fio de Nylon no Carretel
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Com o cabeçote fixado na ponteira, o procedimento para recarregar a linha varia de acordo com o modelo do acessório:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span> Carretel Convencional (Manual)
              </h4>
              <p className="text-sm text-gray-700">
                Pressione as duas travas laterais da carcaça com os polegares para sacar a tampa e liberar a bobina interna.
              </p>
              <p className="text-sm text-gray-700">
                Corte de 3 a 4 metros de fio de nylon ou duas metades de 3,5 metros conforme o limite do carretel.
              </p>
              <p className="text-sm text-gray-700">
                Encaixe as pontas nos orifícios da bobina e enrole no sentido indicado pelas setas moldadas no plástico.
              </p>
              <p className="text-sm text-gray-700">
                Mantenha as espiras alinhadas lado a lado sem cruzar para que os fios não se soldem no atrito.
              </p>
              <p className="text-sm text-gray-700">
                Passe cada ponta pelos ilhoses metálicos da carcaça, posicione a mola central e feche a tampa até ouvir o estalo.
              </p>
            </div>

            <div className="bg-[#F0FDF4] border border-[#16A34A]/30 p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-lg font-bold text-[#166534] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span> Carretel de Carga Rápida (Easy Load)
              </h4>
              <p className="text-sm text-[#166534]">
                Não é necessário abrir a carcaça plástica nem desmontar a mola interna.
              </p>
              <p className="text-sm text-[#166534]">
                Gire o botão central até que as setas da tampa fiquem perfeitamente alinhadas com os ilhoses de saída.
              </p>
              <p className="text-sm text-[#166534]">
                Passe o pedaço de fio inteiro de um lado a outro atravessando o carretel e puxe até igualar o comprimento nas duas pontas.
              </p>
              <p className="text-sm text-[#166534]">
                Gire o manípulo central no sentido indicado pelas setas para recolher o nylon até restar cerca de 15 a 20 cm expostos em cada lado.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. ERROS COMUNS E COMO EVITÁ-LOS
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros Comuns na Troca do Carretel
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h4>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Tentar girar o cabeçote sem travar o furo lateral da transmissão.</li>
                <li>Bater com martelo de metal no carretel para soltar a rosca emperrada.</li>
                <li>Montar o carretel encostado direto no alumínio da ponteira sem a arruela flange.</li>
                <li>Usar chave de cano ou alavanca para apertar o cabeçote excessivamente.</li>
                <li>Dar a partida com o pino de trava esquecido no orifício da transmissão.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h4>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Inserir chave Allen no furo da caixa até sentir o travamento interno do eixo.</li>
                <li>Aplicar óleo desengripante e deixar agir dez minutos em roscas presas por seiva.</li>
                <li>Garantir que a arruela de encosto inferior esteja no eixo antes de rosquear.</li>
                <li>Apertar o carretel apenas com a força das mãos contra o batente do pino.</li>
                <li>Retirar sempre o pino e testar o giro manual livre antes de puxar a partida.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            11. MANUTENÇÃO PREVENTIVA DO CABEÇOTE
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Boas Práticas para Evitar Travamento nas Próximas Trocas
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Para nunca mais ter que lutar contra um cabeçote travado no meio da jornada, adote hábitos preventivos simples ao final de cada serviço:
            </p>
            <p>
              Aplique uma película fina de graxa grafitada ou graxa azul nos filetes do parafuso toda vez que desrosquear o carretel.
            </p>
            <p>
              A graxa cria uma camada selante que barra a infiltração de umidade, poeira e seiva vegetal nas ranhuras do metal.
            </p>
            <p>
              Respeite rigorosamente a espessura máxima de fio recomendada para o seu carretel, evitando sobrecarregar os ilhoses de saída.
            </p>
            <p>
              Limpe o interior da carcaça e a mola de compressão em cada recarga, retirando crostas de terra que travam o sistema bate-libera.
            </p>
            <p>
              Para saber mais sobre como recarregar sem embolar, veja também o nosso guia prático de <a href="/como-colocar-fio-na-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como colocar fio na roçadeira</a>.
            </p>
          </div>
        </section>

        {/* ===================================================================
            12. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Troca de Carretel
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
            13. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Manutenção Rápida e Produtividade Máxima no Campo
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p>
                Aprender o sentido correto da rosca esquerda e utilizar o pino de trava transforma uma tarefa estressante em uma troca ágil de dois minutos.
              </p>
              <p>
                Com a transmissão preservada e o carretel assentado na medida certa, sua máquina corta com equilíbrio perfeito e rende o dia inteiro sem falhas.
              </p>
              <p>
                Trabalhe sempre com os equipamentos de proteção individual recomendados e preserve a integridade da sua roçadeira para muitos anos de serviço limpo.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            14. DICA DE OURO DA OFICINA
            =================================================================== */}
        <div className="mt-12 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-green-100 p-3 rounded-full text-[#166534] shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#166534] mb-2">
              Dica de Ouro de José Ailton
            </h3>
            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <p>
                Aproveite o momento da troca do carretel para inspecionar o parafuso lateral de lubrificação da caixa de transmissão.
              </p>
              <p>
                Retire o parafuso com a chave apropriada e complete o compartimento com graxa grafitada específica para ponteiras de roçadeira a cada 25 ou 30 horas de operação.
              </p>
              <p>
                Essa rotina simples reduz o aquecimento das engrenagens cônicas e multiplica a vida útil de toda a transmissão mecânica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
