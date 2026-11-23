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

export const ComoMontarRocadeiraNakasaki: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual metade da haste bipartida Nakasaki vai ligada no motor?",
      answer: [
        "Nos modelos Nakasaki 63cc, 65cc, 75cc e NK-750PRO de eixo bipartido, a metade do tubo com o adesivo da marca Nakasaki (e furo guia mais afastado da ponta) encaixa diretamente no tambor da embreagem do motor.",
        "A metade com os adesivos de alerta e a ponteira de engrenagens fica sempre voltada para a lâmina ou carretel."
      ]
    },
    {
      question: "Posso testar o motor da Nakasaki ligado antes de montar o tubo da haste?",
      answer: [
        "Jamais dê partida no motor sem a campana da embreagem e a haste parafusadas.",
        "Sem o tambor limitando as sapatas centrífugas, a embreagem abre no vazio e pode arrebentar a mola ou projetar peças metálicas."
      ]
    },
    {
      question: "Por que o motor acelera, mas a lâmina ou carretel não gira depois de montar?",
      answer: [
        "A vareta estriada (eixo cardã interno) não encaixou até o fundo da embreagem ou da luva central do varão bipartido.",
        "Solte a trava central, gire o cabeçote de corte levemente com a mão enquanto empurra as duas metades até as estrias alinharem e o pino-trava saltar no furo."
      ]
    },
    {
      question: "Preciso colocar graxa na ponteira de uma Nakasaki zero quilômetro?",
      answer: [
        "Sim, confira sempre antes do primeiro uso.",
        "Muitas máquinas importadas chegam de fábrica apenas com uma película fina de lubrificação; retirar o parafuso lateral da caixa de engrenagens e completar com graxa à base de lítio ou grafitada evita comer o pinhão logo na primeira semana."
      ]
    },
    {
      question: "Qual a proporção de óleo 2 tempos para a primeira partida da Nakasaki?",
      answer: [
        "Para o amaciamento inicial com óleo mineral 2T nos modelos Nakasaki 63cc, 65cc e 75cc, siga a proporção de 25:1 (40 ml de óleo por litro de gasolina comum).",
        <>
          Veja a tabela completa por tipo de óleo no guia de{' '}
          <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
            qual o melhor óleo 2 tempos para roçadeira
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
            src="/images/blog/como-montar-rocadeira-nakasaki.webp"
            alt="Montagem de bancada da roçadeira Nakasaki bipartida com embreagem, guidão e saia"
            title="Como Montar Roçadeira Nakasaki Passo a Passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Montagem de Bancada • Nakasaki 63cc, 65cc, 75cc e NK-750PRO
          </span>

          <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
            Como Montar Roçadeira Nakasaki <br />
            <span className="text-[#4ade80]">[Passo a Passo Completo]</span>
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
            2. INTRODUÇÃO DIRETA DE OFICINA (SEM CLICHÊS NEM KEYWORD STUFFING)
            =================================================================== */}
        <section className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Quem abre a caixa de uma roçadeira Nakasaki pela primeira vez encontra um manual traduzido às pressas, um saquinho cheio de parafusos Allen e duas metades de haste muito parecidas.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Na oficina, os dois erros mais comuns que recebo de quem montou a máquina em casa são inverter o lado do varão bipartido na embreagem e apertar os quatro parafusos da campana fora de cruz, criando folga e vibração no primeiro dia.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, montei a sequência real de bancada que serve para os modelos 63cc, 65cc, 75cc e NK-750PRO sem rodeios (se você ainda está avaliando a marca antes da compra, veja antes nossa análise técnica se a{' '}
            <a href="/rocadeira-nakasaki-e-boa" className="text-[#166534] hover:underline font-semibold">
              roçadeira Nakasaki é boa
            </a>
            ).
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como-montar-rocadeira-nakasaki.webp"
              alt="Componentes da roçadeira Nakasaki separados na bancada antes da montagem"
              title="Conferência das peças da roçadeira Nakasaki"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. CONFERÊNCIA DE PEÇAS E TABELA POR MODELO NAKASAKI
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Conferência da Caixa e Diferenças Entre os Modelos Nakasaki
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Espalhe um papelão ou lona no chão para não perder porcas e separe os quatro parafusos Allen maiores (exclusivos da embreagem) dos parafusos médios (guidão e saia).
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">Modelo Nakasaki</th>
                  <th className="p-4 font-bold">Tipo de Haste</th>
                  <th className="p-4 font-bold">Rosca da Ponteira</th>
                  <th className="p-4 font-bold">Atenção na Montagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">NK-630 / 63cc e 65cc</td>
                  <td className="p-4">Bipartida (28 mm) ou inteiriça</td>
                  <td className="p-4 text-[#166534] font-semibold">M10 x 1,25 (Esquerda)</td>
                  <td className="p-4">Checar alinhamento dos furos do bipé antes de forçar o parafuso</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">NK-750PRO / 75cc</td>
                  <td className="p-4">Bipartida com luva de engate rápido</td>
                  <td className="p-4 text-[#166534] font-semibold">M10 x 1,25 (Esquerda)</td>
                  <td className="p-4">Lado do tubo com logo Nakasaki vai no motor; completar graxa na ponteira</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Costal 65cc</td>
                  <td className="p-4">Eixo flexível (mangote) + tubo</td>
                  <td className="p-4 text-[#166534] font-semibold">M10 x 1,25 (Esquerda)</td>
                  <td className="p-4">Lubrificar o cabo flexível interno antes de travar no motor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#16A34A] text-white p-2.5 rounded-xl shrink-0">
                <Wrench size={22} />
              </div>
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Ferramentas do Kit que Você Vai Usar
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Chaves Allen 4 mm e 5 mm (embreagem, guidão e saia)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Chave combinada de vela e Philips (porca e parafusos auxiliares)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Chave de boca 8/10 mm (ajuste da folga do cabo do acelerador)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <Check size={18} className="text-[#16A34A] shrink-0" />
                <span>Graxa para engrenagens + 1 gota de detergente neutro (borracha)</span>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            4. SEQUÊNCIA ÚNICA DE MONTAGEM (6 PASSOS PRÁTICOS SEM REPETIÇÃO)
            =================================================================== */}
        <section className="space-y-10 mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Passo a Passo Único de Montagem da Nakasaki
          </h2>

          {/* PASSO 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">1</span>
              Acople o tubo superior na campana da embreagem (aperto em X)
            </h3>
            <img
              src="/images/blog/Montagem Inicial da Estrutura.webp"
              alt="Fixação dos quatro parafusos Allen da embreagem da Nakasaki em formato de X"
              title="Fixação da embreagem da roçadeira Nakasaki"
              width={800}
              height={533}
              className="rounded-xl border border-gray-100 w-full max-w-2xl mx-auto h-auto object-cover"
              loading="lazy"
            />
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Identifique a metade do tubo que traz o adesivo com o nome Nakasaki (o furo guia fica mais longe da extremidade) e encaixe a peça da embreagem com o parafuso de aperto virado para baixo.
            </p>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Prenda a campana ao bloco do motor usando os quatro parafusos Allen mais grossos, apertando sempre de forma cruzada (em X) para assentar o alumínio por igual sem empenar.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Se for instalar o bipé de apoio inferior e notar leve desalinhamento de fábrica no furo do chassi, ajuste o orifício com uma broca fina em vez de forçar o parafuso torto.
            </p>
          </div>

          {/* PASSO 2 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">2</span>
              Una o varão bipartido e encaixe o eixo cardã até o fundo
            </h3>
            <img
              src="/images/blog/Montagem do Eixo e Partida.webp"
              alt="Alinhamento da luva central e trava do varão bipartido da Nakasaki"
              title="Conexão da haste bipartida da Nakasaki"
              width={800}
              height={533}
              className="rounded-xl border border-gray-100 w-full max-w-2xl mx-auto h-auto object-cover"
              loading="lazy"
            />
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Antes de fechar a luva central, aplique uma gota de detergente neutro (nunca óleo nem graxa) para deslizar a borracha antivibração sobre o tubo superior até o ponto de apoio do cinto.
            </p>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Insira a metade inferior da haste (a que tem os adesivos de alerta) dentro da luva central girando levemente o eixo de corte com a mão até as estrias internas do cardã deslizarem livres e o pino-trava saltar com um estalo no orifício.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Trave a manopla borboleta ou o parafuso da luva no fim do curso para eliminar qualquer jogo radial.
            </p>
          </div>

          {/* PASSO 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">3</span>
              Instale o guidão, o cabo do acelerador e os fios do botão Stop
            </h3>
            <img
              src="/images/blog/Montagem do Guidão e Cabo do Acelerador.webp"
              alt="Montagem da mesa do guidão tipo bicicleta e passagem do cabo do acelerador"
              title="Instalação do guidão e cabo do acelerador"
              width={800}
              height={533}
              className="rounded-xl border border-gray-100 w-full max-w-2xl mx-auto h-auto object-cover"
              loading="lazy"
            />
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Encaixe a mesa do guidão sobre o tubo com o punho do acelerador sempre no lado direito, deixando os quatro parafusos apenas encostados até você vestir o cinto e acertar o ângulo confortável para os seus braços.
            </p>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Conecte o terminal do cabo do acelerador no carburador deixando cerca de 1 a 2 mm de folga livre no gatilho (cabo esticado acelera a máquina sozinha) e encaixe os dois terminais elétricos do interruptor de parada respeitando as cores.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Prenda o chicote ao tubo com as presilhas plásticas sem fazer dobras fechadas que enforquem o conduíte.
            </p>
          </div>

          {/* PASSO 4 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">4</span>
              Fixe a saia de proteção e engraxe a ponteira
            </h3>
            <img
              src="/images/blog/Detalhes Técnicos e Informações Importantes Sobre a Embreagem.webp"
              alt="Verificação mecânica da transmissão e engrenagens antes do fechamento"
              title="Revisão da transmissão e lubrificação da ponteira"
              width={800}
              height={533}
              className="rounded-xl border border-gray-100 w-full max-w-2xl mx-auto h-auto object-cover"
              loading="lazy"
            />
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Posicione a saia protetora imediatamente acima da caixa de engrenagens usando a chapinha metálica de apoio, conferindo se a pequena faca corta-fio está voltada para o lado de descarga do capim.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Solte o parafuso lateral do graxeiro da caixa de transmissão e injete graxa de lítio ou grafitada antes de estrear a roçadeira — reaplique a cada 20 horas de serviço.
            </p>
          </div>

          {/* PASSO 5 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">5</span>
              Instale o carretel de nylon ou a lâmina de 3 pontas
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              A ponteira da Nakasaki usa rosca esquerda (M10 x 1,25): você trava o eixo com a chave Allen fina no furo lateral e aperta girando no sentido anti-horário.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Para não inverter nenhuma arruela nem perder o prato limitador, siga a ordem ilustrada no guia de{' '}
              <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como trocar a lâmina da roçadeira
              </a>{' '}
              ou, se for usar nylon na estreia, veja{' '}
              <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como colocar o carretel na roçadeira
              </a>{' '}
              e{' '}
              <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como abastecer o fio sem embolar
              </a>
              .
            </p>
          </div>

          {/* PASSO 6 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 m-0">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">6</span>
              Checklist de equilíbrio, mistura 25:1 e primeira partida
            </h3>
            <img
              src="/images/blog/Instalação e Ajuste do Motor.webp"
              alt="Revisão final do motor e parafusos de fixação da Nakasaki antes da estreia"
              title="Revisão final da montagem do motor Nakasaki"
              width={800}
              height={533}
              className="rounded-xl border border-gray-100 w-full max-w-2xl mx-auto h-auto object-cover"
              loading="lazy"
            />
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Retire o pino trava da ponteira e gire a lâmina com a mão por duas voltas completas: ela precisa rodar solta e sem raspar na saia.
            </p>
            <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Abasteça com a mistura correta (25:1 no amaciamento mineral — veja o guia do{' '}
              <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
                melhor óleo 2 tempos
              </a>
              ) e faça a estreia seguindo o ritual de{' '}
              <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como ligar roçadeira a gasolina
              </a>
              .
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
              Se ela afogar nas primeiras puxadas ou vier com a lenta alta de fábrica, você corrige em minutos com nossos guias de{' '}
              <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como desafogar a roçadeira
              </a>{' '}
              e{' '}
              <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
                como regular o carburador
              </a>
              .
            </p>
          </div>
        </section>

        {/* ===================================================================
            5. ERROS FATAIS NA MONTAGEM DA NAKASAKI
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            4 Erros que Destroem uma Nakasaki Nova na Primeira Semana
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Dar partida no motor fora do varão para testar se ele funciona.</li>
                <li>Passar óleo ou graxa na borracha do guidão (o punho gira solto no trabalho).</li>
                <li>Esquecer o pino trava enfiado na caixa de engrenagens na hora da partida.</li>
                <li>Ignorar o reaperto dos parafusos da embreagem após os primeiros 15 minutos de uso.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Checklist de Segurança
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Apertar os 4 parafusos Allen da embreagem sempre em cruz (formato de X).</li>
                <li>Ouvir o estalo do pino-trava na luva central do tubo bipartido.</li>
                <li>Completar a graxa da caixa de engrenagens antes do primeiro tanque.</li>
                <li>Reapertar todos os fixadores externos depois do primeiro aquecimento térmico.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. PERGUNTAS FREQUENTES
            =================================================================== */}
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre a Montagem da Nakasaki
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
            7. DICA DE OFICINA DO CARLOS HENRIQUE
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] p-6 sm:p-8 rounded-3xl flex items-start gap-4 shadow-sm">
          <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
              Dica de Oficina do Carlos Henrique: O Reaperto dos 15 Minutos
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              Toda roçadeira 2 tempos de alta cilindrada dilata os parafusos da embreagem, do escape e do suporte do guidão no primeiro aquecimento.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Rode os primeiros quinze minutos em meio acelerador, desligue o motor, espere esfriar e dê uma conferida geral com a chave Allen em cada parafuso: esse hábito simples evita 90% das folgas e quebras de suporte nas Nakasaki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
