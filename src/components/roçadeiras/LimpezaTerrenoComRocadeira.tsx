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
// COMPONENTE PRINCIPAL DO ARTIGO INFORMATIVO / TUTORIAL
// ============================================================================
export const LimpezaTerrenoComRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Qual a melhor roçadeira e acessório para limpar terreno com mato muito alto?",
      a: [
        "Para lotes tomados por braquiária, colonião ou arbustos acima da cintura, o ideal é uma roçadeira lateral a gasolina a partir de 35 cc a 43 cc (ou modelos profissionais de 58V/40V) equipada com lâmina de aço de 2 ou 3 pontas.",
        "O carretel de nylon deve ficar reservado para o acabamento final rente a muros, cercas, pedras e calçadas depois que o mato grosso já foi derrubado."
      ]
    },
    {
      q: "Como limpar terreno com muitas pedras e entulho sem quebrar a roçadeira?",
      a: [
        "Jamais entre com lâmina de aço direto em um lote onde você não enxerga o chão.",
        "Caminhe primeiro pelo terreno usando uma vara ou ancinho para retirar restos de obra, arames, garrafas e pedras soltas; nos trechos pedregosos, trabalhe com fio de nylon redondo de 2,7 mm a 3,0 mm em meia aceleração e mantenha a ponteira 5 cm acima do solo."
      ]
    },
    {
      q: "Quanto tempo leva para limpar um lote urbano de 300 m² com roçadeira?",
      a: [
        "Em um lote plano de 300 m² com capim médio a alto e poucos obstáculos, um operador com roçadeira de 43 cc leva entre 1h30 e 2h30 para concluir a roçada, gastando cerca de 1,5 a 2 litros de mistura 2 tempos.",
        "Some mais 1 a 2 horas de trabalho manual caso você mesmo vá rastelar, amontoar e ensacar toda a palhada cortada."
      ]
    },
    {
      q: "Devo recolher o mato cortado ou posso deixar secar sobre o terreno?",
      a: [
        "Em lotes urbanos ou quintais residenciais, recolha sempre a massa verde cortada: a camada grossa de capim retém umidade, esconde escorpiões e roedores e pode gerar risco de incêndio quando seca.",
        "Já em chácaras rurais e pomares sem exigência de prefeitura, a palha baixa e bem triturada pela lâmina de 2 pontas pode permanecer como cobertura morta para proteger o solo da erosão."
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
            src="/images/blog/limpeza-de-terreno-com-rocadeira.webp"
            alt="Operador equipado com EPIs completos fazendo a limpeza de terreno com mato alto usando roçadeira lateral a gasolina"
            title="Como fazer limpeza de terreno com roçadeira passo a passo"
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
            Guia Prático de Operação no Trecho
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Limpeza de Terreno com Roçadeira:{' '}
            <span className="text-[#16A34A]">Passo a Passo Seguro no Mato Alto</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Aprenda a sequência real de campo para encarar lotes sujos, chácaras e quintais fechados de mato sem enrolar capim na ponteira, sem quebrar lâminas em entulhos ocultos e na metade do tempo.
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
            <span className="text-gray-400">Operador de Campo • Atualizado em 2026</span>
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
            Quem chega diante de um lote tomado por capim-colonião, braquiária trançada e entulho escondido sabe que ligar a máquina e sair avançando de qualquer jeito é a receita certa para travar a ponteira em cinco minutos.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Fazer a limpeza de terreno com roçadeira por conta própria — seja para preparar o lote para uma obra, evitar multas da prefeitura ou recuperar a área da chácara — exige método de corte e a escolha exata entre fio de nylon, faca de pontas e disco de serra.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quando você aplica a técnica de desbaste de cima para baixo e mapeia o solo antes da partida, uma única máquina faz em duas horas o serviço que levaria dois dias inteiros na enxada e na foice.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se você ainda está escolhendo o equipamento ideal para encarar esse tipo de serviço pesado, vale conferir antes o nosso comparativo da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira a gasolina e elétrica
            </a>{' '}
            e entender{' '}
            <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
              qual a melhor roçadeira costal ou lateral
            </a>{' '}
            para a inclinação do seu lote.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, reuni o roteiro prático que aplico no trecho para limpar desde lotes brutos com arbustos até quintais residenciais fechados de mato com total segurança.
          </p>
        </div>

        {/* Imagem Principal Contextual na Bancada/Campo */}
        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/blog/limpeza-de-terreno-com-rocadeira.webp"
            alt="Operador profissional com EPIs limpando lote com capim alto em faixas organizadas usando roçadeira a gasolina"
            title="Limpeza de terreno com roçadeira em faixas paralelas"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
            loading="lazy"
          />
          <span className="text-xs text-gray-500 italic mt-2 text-center">
            O segredo do rendimento no lote sujo está em abrir faixas paralelas da direita para a esquerda, jogando a palha cortada para a área já limpa.
          </span>
        </div>

        {/* ===================================================================
            3. DIAGNÓSTICO DO TERRENO + TABELA DE ACESSÓRIO POR TIPO DE MATO
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Qual Acessório Usar na Limpeza de Terreno? (Nylon, Faca ou Serra)
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O erro mais comum de quem vai limpar um lote pela primeira vez é tentar derrubar tudo com o mesmo cabeçote do início ao fim.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Em um terreno abandonado há meses, você quase sempre encontra três camadas diferentes de vegetação: grama rasteira perto da calçada, touceiras altas de capim fibroso no meio e brotos lenhosos ou arbustos nos fundos.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para não derreter a embreagem nem gastar três rolos de nylon à toa, case a ferramenta de corte com o tipo de mato (e consulte também nosso ranking da{' '}
              <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                melhor lâmina e disco para roçadeira
              </a>{' '}
              se precisar repor seu jogo):
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Condição do Terreno</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Acessório Recomendado</th>
                  <th className="p-3.5 sm:p-4">Por Que Funciona Melhor no Campo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                    Grama alta, ervas macias e beiradas de muro ou cerca
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">
                    Carretel com Fio de Nylon (2,4 mm a 3,0 mm)
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Absorve o impacto contra concreto, cercas de tela e meio-fio sem risco de ricochete metálico.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                    Capim fechado acima do joelho (braquiária, napier, colonião)
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">
                    Lâmina de Aço de 2 ou 3 Pontas (300 mm)
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Corta o talo fibroso no impacto e tritura a massa verde na descida sem exigir rotação máxima o tempo todo.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                    Arbustos duros, mamona, assa-peixe e brotos lenhosos (até 5 cm)
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">
                    Disco de Serra Circular com Vídea (40 ou 80 dentes)
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700">
                    Serra a madeira como faca quente na manteiga sem dar trancos secos na caixa de transmissão.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-amber-950">
                    Terreno com muitas pedras soltas, tocos baixos ou restos de obra
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">
                    Fio de Nylon Redondo Grosso (2,7 mm a 3,0 mm)
                  </td>
                  <td className="p-3.5 sm:p-4 text-amber-950">
                    Segurança máxima: usar lâmina de aço onde há pedras ocultas pode lascar o metal e arremessar estilhaços.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS, FERRAMENTAS E EPIS OBRIGATÓRIOS NA BANCADA
            =================================================================== */}
        <section className="mb-14 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Ferramentas, Insumos e EPIs para Limpar o Lote
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Conferência obrigatória antes de sair do galpão para não parar o serviço na metade:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Kit Completo de EPIs de Roçador</span>
                <span className="text-xs text-gray-600 leading-relaxed block mt-1">
                  Viseira facial de tela ou policarbonato, abafador auricular, perneiras de couro/sintético até o joelho, luvas antiderrapantes e botina de cano alto.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Cinto Duplo Ajustado + Conjunto de Corte</span>
                <span className="text-xs text-gray-600 leading-relaxed block mt-1">
                  Carretel abastecido na{' '}
                  <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    espessura certa de fio de nylon
                  </a>{' '}
                  para bordas + lâmina de 2 ou 3 pontas afiada e chave de vela com pino trava para troca rápida.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Combustível Fresco e Graxa na Transmissão</span>
                <span className="text-xs text-gray-600 leading-relaxed block mt-1">
                  Galão misturador preparado no dia com a{' '}
                  <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    proporção exata de óleo 2 tempos
                  </a>{' '}
                  (50:1 ou 25:1) e ponteira engraxada.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Ferramentas de Apoio e Limpeza</span>
                <span className="text-xs text-gray-600 leading-relaxed block mt-1">
                  Vara longa para sondar o mato, rastelo (vassoura de aço reforçada), forcado ou garfo para juntar a palhada e sacos de ráfia para descarte.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (TRANSIÇÃO PARA O PASSO A PASSO)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PRÁTICO NUMERADO (5 ETAPAS DE CAMPO)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-8">
            Como Fazer a Limpeza de Terreno com Roçadeira (Passo a Passo)
          </h2>

          <div className="space-y-10">
            {/* ETAPA 1 */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  1
                </span>
                Vistoria a Pé e Retirada de Entulhos Escondidos
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Antes de puxar o cordão de partida da roçadeira, caminhe por todo o terreno calçado com botina e perneira, usando um cabo de enxada ou rastelo para abrir o capim suspeito.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Lotes baldios e áreas de obra acumulam armadilhas invisíveis sob a vegetação: pedaços de vergalhão, restos de tijolos, rolos de arame farpado, pneus, garrafas de vidro, tocos podres e cupinzeiros duros.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Retire todo o lixo sólido que puder com a mão e finque uma estaca alta com fita colorida ao lado de tocos, hidrômetros, buracos ou pedras grandes que não dão para remover, criando um alerta visual claro para quando você passar roçando.
                </p>
              </div>
            </div>

            {/* ETAPA 2 */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  2
                </span>
                Equilíbrio do Cinto e Montagem da Faca para o Desbaste Pesado
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Se o mato do terreno passa da altura da canela e tem talo grosso, comece o serviço instalando a lâmina de 2 ou 3 pontas na ponteira — veja a ordem exata das flanges e da porca esquerda no guia de{' '}
                  <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    como trocar a lâmina da roçadeira
                  </a>
                  .
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Antes de fixar o disco, passe o olho nas bordas de corte: trabalhar com faca cega faz o motor apanhar e aumenta o consumo de combustível, então vale reservar dez minutos na morsa seguindo nosso tutorial de{' '}
                  <a href="/como-amolar-disco-de-rocadeira" className="text-[#166534] font-semibold hover:underline">
                    como amolar disco de roçadeira
                  </a>
                  .
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Com a máquina pendurada no gancho do cinto duplo na altura do quadril, solte as mãos do guidão: a lâmina deve flutuar equilibrada a cerca de 10 cm a 15 cm do chão sem que você precise fazer força nos braços para erguer o tubo.
                </p>
              </div>
            </div>

            {/* ETAPA 3 */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  3
                </span>
                Técnica de Corte em Duas Alturas (Para Não Embuchar a Ponteira)
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Quando o capim passa de 60 cm ou 1 metro de altura, nunca enfie a lâmina direto no pé da touceira: o caule comprido cai por cima da caixa de engrenagens, enrola no eixo em segundos e trava o giro do motor.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Use a técnica profissional de dois estágios: no movimento da direita para a esquerda, passe a lâmina primeiro na metade da altura do mato para decepar a ponta pesada da folhagem.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  No retorno do guidão da esquerda para a direita (ou na segunda passada), desça a lâmina a cerca de 5 cm do solo para cortar o toco restante já curto e expor a terra limpa.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Trabalhe sempre avançando em corredores retos de 1,5 metro de largura: já que o cabeçote gira no sentido anti-horário, cortar da direita para a esquerda joga toda a palhada para o lado que você já limpou.
                </p>
              </div>
            </div>

            {/* ETAPA 4 */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  4
                </span>
                Corte de Arbustos Lenhosos e Moitas Duras sem Rebote
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Se o terreno tiver moitas de assa-peixe, mamoneiras, bambuzinhos ou arbustos de caule lenhoso entre 2 cm e 5 cm de espessura, não bata com a faca de 2 pontas como se fosse foice, pois o impacto seco força o virabrequim e o cardã.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Substitua a faca pelo disco circular com dentes de vídea (40 ou 80 dentes), acelere a máquina até a rotação máxima antes de encostar na madeira e use apenas o quadrante superior esquerdo do disco (posição entre 8 e 11 horas do relógio).
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Encostar a frente ou o lado direito do disco em troncos rígidos provoca o chamado efeito rebote (kickback), em que a serra quica violentamente para o lado.
                </p>
              </div>
            </div>

            {/* ETAPA 5 */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  5
                </span>
                Acabamento de Bordas com Nylon e Retirada da Palhada
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Com o centro do lote todo rebaixado na lâmina, volte à bancada, retire o disco de aço e instale o carretel de fio de nylon para fazer o arremate rente a muros, postes, árvores frutíferas, guias de calçada e cercas de arame.
                </p>
                <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Depois de finalizar o corte, use o rastelo ou um garfo forcado para juntar o capim cortado em montes (leiras), facilitando o ensacamento ou o carregamento na carretinha.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                  Antes de guardar o equipamento, passe uma escova seca nas aletas de refrigeração do cilindro, bata o filtro de ar e limpe qualquer fibra enrolada por trás da arruela da transmissão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. SEÇÃO COMPLEMENTAR INTEGRADA: COMO LIMPAR QUINTAL COM MUITO MATO
            =================================================================== */}
        <section className="mb-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Como Limpar Quintal com Muito Mato (Cuidados em Área Residencial)
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Saber como limpar quintal com muito mato exige uma estratégia diferente da usada em terrenos abertos ou pastos, porque o ambiente doméstico esconde portas de vidro, janelas baixas, canos de PVC expostos, ralos e brinquedos esquecidos na grama.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Em quintais murados de até 200 m², onde uma única pedrinha arremessada pela lâmina de aço pode estilhaçar uma vidraça a 15 metros de distância, a prioridade absoluta é controlar a projeção de detritos.
            </p>
          </div>

          <div className="my-8 flex flex-col items-center">
            <img
              src="/images/blog/como-limpar-quintal-com-muito-mato-rocadeira.webp"
              alt="Operador com viseira e EPIs usando roçadeira com fio de nylon e saia de proteção para limpar quintal residencial com muito mato perto do muro"
              title="Como limpar quintal com muito mato usando roçadeira com segurança perto de muros"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Em quintais residenciais fechados, o carretel com fio de nylon quadrado e a saia defletora bem ajustada protegem muros, canos e vidraças.
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                1. Priorize Fio de Nylon Quadrado (2,4 mm a 2,7 mm)
              </h3>
              <p className="mb-0 text-sm text-gray-800 leading-relaxed">
                Em vez de usar faca metálica perto da casa, abasteça o cabeçote com nylon de perfil quadrado (que tem quinas vivas para fatiar mato alto) ou use uma{' '}
                <a href="/melhor-rocadeira-a-bateria" className="text-[#166534] font-semibold hover:underline">
                  roçadeira a bateria de 18V ou 36V
                </a>{' '}
                para trabalhar sem barulho excessivo e sem fumaça perto da janela dos vizinhos.
              </p>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                2. Roce Sempre de Costas para as Vidraças
              </h3>
              <p className="mb-0 text-sm text-gray-800 leading-relaxed">
                Posicione o corpo de modo que a abertura da saia protetora aponte sempre para o muro de alvenaria ou para o fundo do lote, nunca na direção de portas de correr de vidro, carros estacionados ou portões.
              </p>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                3. Cuidado com Torneiras, Canos de PVC e Fios
              </h3>
              <p className="mb-0 text-sm text-gray-800 leading-relaxed">
                Um fio de nylon girando a 8.000 RPM corta um cano marrom de PVC de meia polegada ou o cabo de fibra óptica do jardim em um segundo: limpe ao redor de registros de água e caixas de gordura manualmente antes de aproximar o cabeçote.
              </p>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                4. Deixe o Mato Cortado Murchar 24h Antes de Ensacar
              </h3>
              <p className="mb-0 text-sm text-gray-800 leading-relaxed">
                Se o quintal estava com mato muito alto e suculento, deixe a palha espalhada ao sol por um dia antes de rastelar: o capim perde mais da metade do peso em água e reduz pela metade a quantidade de sacos de lixo necessários.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. TABELA TÉCNICA 2: RENDIMENTO, TEMPO E CONSUMO POR METRAGEM
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Quanto Tempo e Combustível Leva para Limpar um Terreno?
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Para planejar a sua manhã de serviço e comprar a gasolina na medida certa (sem deixar mistura velha sobrando no galão), use esta referência média de campo com uma roçadeira de 43 cc bem regulada:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Tamanho da Área</th>
                  <th className="p-3.5 sm:p-4">Tempo Médio de Roçada</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Consumo Médio (Mistura 2T)</th>
                  <th className="p-3.5 sm:p-4">Máquina Ideal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Quintal Residencial (100 a 200 m²)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">35 a 60 minutos</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">0,5 a 0,8 litro (ou 1 a 2 cargas de bateria)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Elétrica 1200W, Bateria 18V/36V ou Gasolina 26 cc</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Lote Urbano Padrão (250 a 360 m²)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">1h30 a 2h30</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">1,5 a 2,2 litros de mistura</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Gasolina 33 cc a 43 cc (ou Bateria 40V/58V)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Chácara / Terreno Grande (1.000 m²)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">4h a 6h de operação</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">4 a 5,5 litros de mistura</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Gasolina Profissional 43 cc a 52 cc com guidão U</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            9. BOX DE ALERTA DE SEGURANÇA E ERROS COMUNS VS PRÁTICA RECOMENDADA
            =================================================================== */}
        <section className="mb-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Regra de Segurança: Distância de 15 Metros e Zero Fogo no Lote
              </h3>
              <p className="mb-3 text-sm sm:text-base text-amber-950 leading-relaxed">
                Não permita que crianças, ajudantes sem EPIs ou animais domésticos fiquem a menos de 15 metros de raio enquanto a roçadeira estiver ligada, pois arames e pedras ricocheteiam em velocidade altíssima.
              </p>
              <p className="mb-0 text-sm sm:text-base text-amber-950 leading-relaxed">
                Além disso, jamais ateie fogo na palhada seca para economizar o trabalho de ensacar: além de ser crime ambiental com multa pesada em área urbana e rural, o fogo destrói a microbiologia do solo e foge do controle facilmente com o vento.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Resumo Rápido: O que Evitar vs. Prática Recomendada
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600 shrink-0" /> O que Evitar na Limpeza
              </h3>
              <ul className="space-y-2.5 text-red-800 text-sm list-disc list-inside leading-relaxed">
                <li>Entrar roçando o mato alto sem caminhar antes para retirar pedras, arames e garrafas.</li>
                <li>Enfiar a lâmina direto no pé do capim de 1 metro (enrola tudo no eixo da ponteira).</li>
                <li>Usar disco de aço rente a muros de concreto, cercas de tela ou canos de água.</li>
                <li>Roçar da esquerda para a direita jogando a palha cortada por cima do mato ainda em pé.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A] shrink-0" /> Prática Recomendada no Campo
              </h3>
              <ul className="space-y-2.5 text-[#166534] text-sm list-disc list-inside leading-relaxed">
                <li>Demarcar tocos, hidrômetros e pedras fixas com estacas visíveis antes de ligar o motor.</li>
                <li>Desbastar o capim alto na metade da altura na ida e baixar rente ao solo na volta.</li>
                <li>Fazer o centro pesado na lâmina de 2 ou 3 pontas e trocar para o carretel de nylon nas bordas.</li>
                <li>Limpar o filtro de ar e o capim enrolado na flange a cada parada para reabastecer o tanque.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Limpeza de Terreno com Roçadeira
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
            11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE) + DICA DE OURO + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Terreno Limpo, Máquina Inteira e Serviço Rendeiro
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Encarar a limpeza de terreno com roçadeira deixa de ser um trabalho exaustivo assim que você substitui a força bruta pelo método de corte em duas alturas.
              </p>
              <p className="mb-4 leading-relaxed">
                Fazer a vistoria a pé antes da partida, alternar da lâmina de aço para o fio de nylon nas beiradas de muro e manter o cinto duplo bem nivelado poupam suas costas e evitam quebras caras na caixa de transmissão.
              </p>
              <p className="mb-0 leading-relaxed">
                Vista os EPIs completos, calibre a mistura de combustível fresca no galão e coloque sua roçadeira para render de verdade no lote!
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
              Dica de Ouro do José Ailton: Como Desenrolar Capim da Ponteira Sem Forçar o Motor
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Se o capim-braquiária ou cipó enrolar no eixo da ponteira e travar a lâmina, jamais tente soltar acelerando no talo: isso só queima as sapatas da embreagem e derrete o retentor de graxa da transmissão.
              </p>
              <p className="mb-0">
                Pare de acelerar na hora, desligue o botão Stop e puxe as fibras enroladas com um canivete ou chave de fenda antes de retomar o corte um pouco mais alto.
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

export default LimpezaTerrenoComRocadeira;
