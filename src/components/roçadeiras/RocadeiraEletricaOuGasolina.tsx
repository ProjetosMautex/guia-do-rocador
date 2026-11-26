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
export const RocadeiraEletricaOuGasolina: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Roçadeira elétrica de 1200W aguenta usar lâmina de aço de 3 pontas?",
      a: [
        "Sim, desde que seja uma roçadeira elétrica lateral com motor traseiro e eixo cardã rígido (como os modelos de 1000W a 1200W projetados para lâmina).",
        "Jamais instale faca metálica em aparadores de grama elétricos leves (aqueles com o motor na ponta inferior perto do chão), pois eles não possuem caixa de engrenagens nem proteção para suportar o contragolpe do aço."
      ]
    },
    {
      q: "Qual o tamanho máximo de extensão que posso usar na roçadeira elétrica?",
      a: [
        "O limite seguro de oficina é de 30 metros de comprimento total usando cabo PP flexível com bitola mínima de 2,5 mm² (ou 1,5 mm² para extensões curtas de até 15 metros).",
        "Acima de 30 metros ocorre queda de tensão na linha, fazendo o motor elétrico perder rotação, puxar mais corrente (amperes) e derreter o verniz do induzido."
      ]
    },
    {
      q: "Por que a roçadeira a gasolina dá problema se ficar guardada por muito tempo?",
      a: [
        "Porque a gasolina nacional contém etanol e, quando misturada ao óleo 2 tempos e esquecida no tanque por mais de 15 a 20 dias, oxida e forma uma goma pegajosa que trava as membranas e agulhas do carburador.",
        "Para quem só corta grama uma vez por mês em quintal pequeno, o modelo elétrico (ou a bateria) evita 100% desse custo de limpeza mecânica."
      ]
    },
    {
      q: "E a roçadeira a bateria: onde ela entra entre a elétrica e a gasolina?",
      a: [
        "A roçadeira a bateria une a liberdade sem cabos da gasolina com a partida instantânea e a manutenção zero da elétrica.",
        "Os modelos de 18V substituem com vantagem as elétricas em jardins residenciais, enquanto as plataformas profissionais de 36V, 40V e 58V Brushless já entregam força equivalente a roçadeiras a gasolina de 26 cc a 33 cc."
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
            src="/images/blog/rocadeira-eletrica-ou-a-gasolina-bancada.webp"
            alt="Comparativo de bancada entre roçadeira elétrica com cabo de extensão e roçadeira a gasolina 2 tempos com lâmina de aço"
            title="Roçadeira elétrica ou a gasolina: comparativo mecânico"
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
            Comparativo Técnico de Oficina
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Roçadeira Elétrica ou a Gasolina:{' '}
            <span className="text-[#16A34A]">Qual Escolher para o Seu Terreno?</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Compare potência real (Watts vs. Cilindradas), raio de alcance, custo anual de manutenção e veja a tabela prática por tamanho de lote para comprar a máquina certa de primeira.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#4ade80] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Carlos+Henrique&background=16A34A&color=fff";
                  }}
                />
                <span>Carlos Henrique Menezes</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Técnico em Mecânica de Equipamentos • Atualizado em 2026</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTEÚDO CENTRALIZADO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA DE OFICINA (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Toda semana recebo na oficina dois perfis de clientes arrependidos: quem comprou uma roçadeira elétrica achando que ia desbastar pasto de braquiária e queimou o induzido, e quem comprou uma 52 cilindradas a gasolina só para aparar 100 m² de grama uma vez por mês e vive com o carburador entupido.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Decidir entre uma roçadeira elétrica ou a gasolina não é questão de gosto pessoal, mas de cruzar três números físicos do seu terreno: a distância em metros até a tomada mais próxima, a espessura do caule da vegetação e a frequência com que você liga a máquina.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se você já sabe qual categoria prefere e quer ver direto os modelos aprovados em bancada, acesse nosso ranking atualizado da{' '}
            <a href="/melhor-rocadeira" className="text-[#166534] font-semibold hover:underline">
              melhor roçadeira (gasolina e elétrica)
            </a>
            .
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, coloquei frente a frente o torque, o consumo, a manutenção e a tabela de metragem que usamos para dimensionar o equipamento sem erro.
          </p>
        </div>

        {/* Imagem Principal Contextual na Bancada */}
        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/blog/rocadeira-eletrica-ou-a-gasolina-bancada.webp"
            alt="Roçadeira elétrica com extensão e roçadeira a gasolina 2 tempos lado a lado na bancada da oficina mecânica"
            title="Comparação técnica entre roçadeira elétrica e roçadeira a gasolina"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
            loading="lazy"
          />
          <span className="text-xs text-gray-500 italic mt-2 text-center">
            Na bancada: a simplicidade elétrica de ligar na tomada contra o torque autônomo do motor 2 tempos a combustão.
          </span>
        </div>

        {/* ===================================================================
            3. RESPOSTA RÁPIDA + O QUE É E PARA QUE SERVE
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Resposta Rápida: Roçadeira Elétrica ou a Gasolina?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <span className="inline-block bg-[#166534] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Vá de Roçadeira Elétrica se...
              </span>
              <ul className="space-y-2.5 text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>Seu quintal ou jardim tem até 300 m² a 400 m² com tomada a menos de 30 metros.</li>
                <li>O trabalho principal é cortar grama, ervas macias e bordas de canteiros ou calçadas.</li>
                <li>Você usa a máquina a cada 15 ou 30 dias e não quer preparar mistura de gasolina com óleo 2T.</li>
                <li>Você mora em condomínio ou área urbana que exige baixo ruído e zero fumaça.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <span className="inline-block bg-[#1a1a1a] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Vá de Roçadeira a Gasolina se...
              </span>
              <ul className="space-y-2.5 text-sm text-gray-800 list-disc list-inside leading-relaxed">
                <li>O terreno passa de 400 m², é uma chácara, sítio ou lote baldio sem tomada por perto.</li>
                <li>O mato inclui capim alto (braquiária, colonião), talos fibrosos ou arbustos lenhosos.</li>
                <li>Existem muitas árvores, cercas ou barrancos onde o cabo elétrico ficaria enroscando.</li>
                <li>Você presta serviço profissional e precisa de autonomia contínua o dia inteiro no galão.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">
            O que é uma roçadeira e onde ela ganha do cortador de grama?
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Diferente do carrinho cortador de grama — que só roda em gramados planos, baixos e sem pedras —, a roçadeira lateral trabalha suspensa nas mãos e no cinto do operador.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Isso permite entrar em taludes inclinados, valetas, beiradas de muros, troncos de árvores e lotes tomados por vegetação acima do joelho, alternando entre carretel de nylon e lâmina de aço conforme a dureza do mato.
            </p>
          </div>
        </section>

        {/* ===================================================================
            4. QUANDO ESCOLHER CADA UMA + TABELA COMPARATIVA TÉCNICA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Roçadeira Elétrica vs. Gasolina: Comparação de Potência, Autonomia e Custo
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Para não cair em propaganda de caixa, é preciso entender como a força chega na ponteira em cada tecnologia:
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                1. Comparação de Potência (Watts vs. Cilindradas e HP)
              </h3>
              <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                As roçadeiras elétricas laterais mais fortes do mercado operam entre 1000W e 1200W (o que equivale matematicamente a cerca de 1,3 a 1,6 HP), mantendo giro alto e constante em grama e mato médio.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Já as roçadeiras a gasolina vão de 26 cc (1,0 HP) até 63 cc (3,0 HP) e contam com embreagem centrífuga e volante pesado: quando a lâmina bate numa touceira grossa de braquiária, a inércia mecânica do motor a explosão vence o impacto sem desarmar nem queimar bobinas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                2. Autonomia e Limitações de Alcance
              </h3>
              <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                A elétrica entrega energia ininterrupta na tomada, mas fica presa a um raio máximo de 30 metros de extensão (e exige atenção constante para não passar a lâmina por cima do próprio fio).
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Se você não quer lidar com cabo esticado no jardim e nem com gasolina, a terceira via ideal hoje é investir na{' '}
                <a href="/melhor-rocadeira-a-bateria" className="text-[#166534] font-semibold hover:underline">
                  melhor roçadeira a bateria
                </a>{' '}
                de 18V ou 36V/40V.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#166534] mb-3 border-l-4 border-[#16A34A] pl-3">
                3. Custo de Operação Anual e Manutenção Comparada
              </h3>
              <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                No bolso, a roçadeira elétrica gasta menos de R$ 1,50 de luz por hora trabalhada e sua manutenção resume-se a limpar as entradas de ar, lubrificar a ponteira e trocar as escovas de carvão após centenas de horas.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                A máquina a gasolina consome cerca de 0,7 a 1,1 litro de combustível por hora, exige compra contínua do{' '}
                <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor óleo 2 tempos para roçadeira
                </a>
                , além de revisão periódica de vela, filtro de ar, filtro de combustível e eventual{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  regulagem das agulhas do carburador
                </a>
                .
              </p>
            </div>
          </div>

          {/* Tabela Comparativa Direta */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Critério Técnico</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeira Elétrica (Com Cabo)</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Roçadeira a Gasolina (2T / 4T)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Faixa de Potência</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">700W a 1200W (aprox. 1,0 a 1,6 HP)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">26 cc a 63 cc (1,0 HP a 3,0 HP)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Raio de Alcance</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Limitado a até 30 metros da tomada</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Ilimitado (basta levar o galão)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Peso Médio</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">2,5 kg a 5,2 kg (muito mais leve)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">6,5 kg a 8,8 kg (com tanque cheio)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Partida e Ignição</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Instantânea no botão/gatilho</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Cordão retrátil (exige ritual de afogador)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Acessórios de Corte</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Nylon 1,6 a 2,0 mm e faca 2/3 pontas (nas 1000W+)</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Nylon até 3,3 mm, facas grossas e serra de vídea</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Custo Anual de Manutenção</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Muito baixo (graxa e escovas de carvão)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Médio (gasolina, óleo 2T, vela, filtros, juntas)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            6. TABELA DE DECISÃO POR TAMANHO DE PROPRIEDADE
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Tabela de Decisão por Tamanho de Propriedade
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Use a metragem da área verde e o tipo de vegetação do seu imóvel para cravar a categoria exata sem subdimensionar nem jogar dinheiro fora:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Metragem do Terreno</th>
                  <th className="p-3.5 sm:p-4">Vegetação Típica</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Escolha Certa de Oficina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Até 150 m² (Jardim compacto)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Grama esmeralda, Santo Agostinho e bordas de calçada</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Elétrica de 700W a 1000W ou Bateria 18V</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">De 150 m² a 400 m² (Quintal / Lote com energia)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Grama alta, tiririca, picão e mato médio</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Roçadeira Elétrica Lateral 1200W (eixo rígido) ou Gasolina 26 cc</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">De 400 m² a 1.500 m² (Lote sujo / Chácara)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Capim-braquiária, colonião e touceiras fechadas</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Roçadeira a Gasolina 33 cc a 43 cc (ou Bateria 40V/58V)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Acima de 1.500 m² (Sítio / Fazenda / Pasto)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Capoeira grossa, pastagem densa e brotos lenhosos</td>
                  <td className="p-3.5 sm:p-4 font-bold text-[#166534]">Roçadeira a Gasolina Profissional 43 cc a 63 cc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            7. FATORES DECISIVOS, FIO VS LÂMINA, CINTO/POSTURA E DURABILIDADE
            =================================================================== */}
        <section className="mb-14 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              3 Fatores Decisivos Antes de Fechar a Compra
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                1. Tensão da tomada e bitola da extensão (nas elétricas): roçadeiras elétricas com cabo não são bivolt (confira se suas tomadas externas são 127V ou 220V) e exigem cabo PP de 2,5 mm² acima de 15 metros para o motor não trabalhar subalimentado.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                2. Obstáculos e declive do terreno: se o lote tem muitas árvores frutíferas, canteiros cercados ou barrancos, puxar 25 metros de cabo elétrico vira um tormento; nesses cenários, a máquina a combustão ou a bateria vence pela mobilidade livre.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                3. Intervalo entre usos: se você vai encarar uma{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>{' '}
                apenas quatro ou cinco vezes por ano, lembre-se de que o motor a gasolina exigirá esvaziar o tanque antes de guardar, enquanto a elétrica fica pronta no armário o ano inteiro.
              </p>
            </div>
          </div>

          {/* Fio de Nylon vs Lâmina */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Qual o Tipo de Fio de Nylon e Quando Usar a Lâmina de Corte?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Tanto nas elétricas laterais quanto nas a gasolina, o carretel de nylon é obrigatório para cortar grama e trabalhar perto de muros, cercas, árvores e meio-fio, pois o filamento plástico flexiona ao bater no concreto sem gerar coice perigoso.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Respeite sempre a bitola máxima do motor para não queimar a embreagem nem o induzido: use fios de 1,6 mm a 2,0 mm nas elétricas e fios de 2,4 mm a 3,0 mm nas máquinas a combustão — veja a tabela completa no guia sobre{' '}
                <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  qual o tamanho do fio de nylon para roçadeira
                </a>
                .
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Já a{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  lâmina de aço de 2 ou 3 pontas
                </a>{' '}
                entra em cena apenas em áreas abertas tomadas por capim alto e talos duros (e somente em roçadeiras com eixo rígido e guidão duplo, seguindo a ordem correta de arruelas mostrada em{' '}
                <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como trocar a lâmina da roçadeira
                </a>
                ).
              </p>
            </div>
          </div>

          {/* Como regular o cinto e postura */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Como Regular o Cinto e Manter a Postura para Evitar Dores
            </h2>

            <div className="my-8 flex flex-col items-center">
              <img
                src="/images/blog/como-regular-cinto-postura-rocadeira.webp"
                alt="Operador com EPIs ajustando o cinto duplo de sustentação da roçadeira na altura do quadril com postura ereta"
                title="Ajuste correto do cinto e postura ergonômica ao usar a roçadeira"
                width={800}
                height={533}
                className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
                loading="lazy"
              />
              <span className="text-xs text-gray-500 italic mt-2 text-center">
                O cinto bem regulado transfere o peso da máquina para os ombros e o quadril, deixando as mãos livres apenas para guiar o arco de corte.
              </span>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Quem termina a roçada com a lombar travada quase sempre cometeu o erro de sustentar o peso da máquina nos braços em vez de calibrar o cinto de sustentação.
              </p>
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                Regule a fivela para que o mosquetão lateral fique exatamente na altura do osso do quadril (cerca de um palmo abaixo da cintura) e deslize o anel de engate no tubo da roçadeira até que o cabeçote flutue sozinho a 10 cm do chão quando você solta as mãos.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Durante o corte, mantenha a coluna reta, os pés afastados na largura dos ombros e faça o movimento de varredura girando o tronco e a cintura da direita para a esquerda, sem curvar as costas para frente.
              </p>
            </div>
          </div>

          {/* Dicas para aumentar a durabilidade */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
              Dicas de Oficina para Aumentar a Durabilidade e Economizar
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                  Nos Modelos Elétricos (1000W a 1200W)
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700 list-disc list-inside leading-relaxed">
                  <li>Nunca trabalhe com a extensão enrolada no carretel (o cabo enrolado cria efeito indutivo, aquece e derrete).</li>
                  <li>Use sempre o gancho passa-fio no punho da máquina para o peso da extensão não puxar o plugue.</li>
                  <li>Limpe as frestas de ventilação do motor com pincel seco após cada uso para a poeira de grama não bloquear o ar.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#166534] text-base sm:text-lg mb-2">
                  Nos Modelos a Gasolina (2 Tempos)
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700 list-disc list-inside leading-relaxed">
                  <li>
                    Siga o ritual correto de afogador explicado em{' '}
                    <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                      como ligar roçadeira a frio
                    </a>{' '}
                    para não encharcar a vela (e veja{' '}
                    <a href="/como-desafogar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                      como desafogar a roçadeira
                    </a>{' '}
                    caso passe do ponto).
                  </li>
                  <li>Faça a pane seca (esvaziar o tanque e deixar morrer na lenta) sempre que for guardar por mais de 15 dias.</li>
                  <li>Complete a caixa de transmissão (ponteira) com graxa específica a cada 25 horas de serviço.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. RESUMO RÁPIDO: O QUE EVITAR VS PRÁTICA RECOMENDADA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Resumo Rápido: O que Evitar vs. Prática Recomendada
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600 shrink-0" /> Erros que Queimam a Máquina
              </h3>
              <ul className="space-y-2.5 text-red-800 text-sm list-disc list-inside leading-relaxed">
                <li>Ligar roçadeira elétrica em extensão fina de 1,0 mm² ou acima de 30 metros.</li>
                <li>Usar a roçadeira elétrica na chuva ou sobre grama encharcada (risco de curto e choque).</li>
                <li>Deixar gasolina misturada com óleo 2T parada no tanque da roçadeira por semanas.</li>
                <li>Forçar fio de nylon grosso (3,0 mm) em roçadeiras elétricas ou motores abaixo de 33 cc.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A] shrink-0" /> Acerto de Operador
              </h3>
              <ul className="space-y-2.5 text-[#166534] text-sm list-disc list-inside leading-relaxed">
                <li>Escolher elétrica lateral de eixo rígido (1200W) para quintais de até 400 m² com tomada perto.</li>
                <li>Escolher gasolina (33 cc a 52 cc) para lotes grandes, chácaras, sítios e mato pesado.</li>
                <li>Ajustar o cinto na altura do quadril para a máquina flutuar sem pesar na coluna.</li>
                <li>Manter a faca limitadora na saia de proteção para o nylon nunca passar do tamanho ideal.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes: Roçadeira Elétrica ou a Gasolina
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
            10. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DE OFICINA + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Qual Levar para Casa Hoje?
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Se o seu terreno é um quintal residencial ou jardim de até 300 m² a 400 m² com tomada acessível, a roçadeira elétrica lateral de 1000W a 1200W é a compra mais racional: custa menos, liga no botão e não dá oficina por gasolina velha.
              </p>
              <p className="mb-4 leading-relaxed">
                Já se você precisa encarar chácaras, lotes sem energia, capim alto fechado ou longas jornadas no sol, a roçadeira a gasolina de 33 cc a 52 cc entrega o torque bruto e a autonomia livre que nenhum modelo com cabo consegue substituir.
              </p>
              <p className="mb-0 leading-relaxed">
                Meça a distância até a tomada do seu terreno, escolha a potência compatível com o seu mato e trabalhe sempre com EPIs completos!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Dica de Oficina do Carlos Henrique */}
        <div className="w-full flex justify-center mt-12 mb-4">
          <a href="/author/carlos-henrique/" aria-label="Ver perfil técnico de Carlos Henrique Menezes">
            <img
              src="/images/autores/Carlos Henrique Menezes-thumb.webp"
              alt="Carlos Henrique Menezes"
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
              Segredo de Oficina do Carlos Henrique: O Teste da Carcaça Morna na Elétrica
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Motores elétricos com escovas não foram desenhados para rodar 1 hora seguida sem tirar o dedo do gatilho em mato fechado.
              </p>
              <p className="mb-0">
                A cada 20 ou 25 minutos de corte contínuo com uma roçadeira elétrica, encoste as costas da mão na carcaça plástica do motor: se estiver quente demais para segurar, dê 10 minutos de pausa na sombra para o induzido esfriar e você dobrará a vida útil da máquina.
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

export default RocadeiraEletricaOuGasolina;
