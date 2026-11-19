import React, { useState } from 'react';
import { BunnerDoMeiorocadeira } from './BunnerDoMeiorocadeira';
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

export const TamanhoFioNylonRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Posso colocar um fio mais grosso do que o indicado para durar mais?",
      answer: [
        "Não vale a pena.",
        "Acima do limite gravado no cabeçote, o fio prende no ilhós de saída, impede o avanço automático e sobrecarrega o motor e a embreagem.",
        "Para ganhar durabilidade sem subir a bitola, mude do perfil redondo para o quadrado e hidrate o nylon na água por 24 horas antes do uso."
      ]
    },
    {
      question: "Qual a medida de fio mais indicada para uso geral em sítios e terrenos?",
      answer: [
        "A bitola de 2,4 mm a 2,7 mm é o padrão de melhor equilíbrio para roçadeiras a gasolina entre 28 cc e 42 cc.",
        "Essa medida dá conta tanto de grama fechada quanto de capim alto sem forçar a transmissão ou derrubar a rotação da máquina."
      ]
    },
    {
      question: "Qual deve ser o comprimento do fio de nylon para fora do carretel?",
      answer: [
        "Cada ponta externa deve medir cerca de um palmo, ficando entre 15 cm e 20 cm de cada lado do cabeçote.",
        "Esse limite é calibrado automaticamente pela faca limitadora presa na saia de proteção, que nunca deve ser removida."
      ]
    },
    {
      question: "Quantos metros de fio de nylon devo cortar para abastecer a bobina?",
      answer: [
        "Nos cabeçotes médios (como o padrão 25-2), corte dois pedaços de 3 a 3,5 metros ou uma peça única de 6 a 7 metros dobrada ao meio.",
        "Nos cabeçotes grandes profissionais (como os padrões 36-2 e 46-2), utilize dois pedaços de 4 metros, totalizando até 8 metros."
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
            src="/images/blog/qual-o-tamanho-do-fio-de-nylon-para-rocadeira.webp"
            alt="Comparativo de tamanho e espessura de fio de nylon para roçadeira ao lado de carretel e paquímetro"
            title="Tamanho do Fio de Nylon para Roçadeira: Espessura e Como Escolher"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Tamanho do Fio de Nylon para Roçadeira: <br />
            <span className="text-[#16A34A]">Espessura e Como Escolher</span>
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
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA + SUMÁRIO)
            =================================================================== */}
        <section className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
            No trabalho pesado de limpeza de lotes e jardins, acertar qual o tamanho do fio de nylon para roçadeira é o que separa um serviço rápido de um dia inteiro perdido destravando carretel.
          </p>
          <p>
            Na prática do campo, o tamanho do fio envolve duas medidas que trabalham juntas: a espessura (bitola em milímetros) e o comprimento da linha, tanto a metragem enrolada lá dentro da bobina quanto a ponta que fica para fora cortando o mato.
          </p>
          <p>
            Quando você casa essas medidas com a cilindrada do motor, a máquina gira livre, economiza combustível e poupa a campânula da embreagem.
          </p>
          <p>
            Antes de iniciar a próxima recarga, entenda na tabela abaixo como escolher a bitola exata, quantos metros cortar e o segredo da hidratação para a linha não soldar dentro do cabeçote.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/qual-o-tamanho-do-fio-de-nylon-para-rocadeira.webp"
              alt="Diferentes bitolas e perfis de fio de nylon para roçadeira organizados na bancada com carretel"
              title="Qual o tamanho do fio de nylon para roçadeira por espessura e comprimento"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Sumário Rápido de Navegação */}
          <nav aria-label="Sumário do guia de tamanho do fio de nylon" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-8 not-prose">
            <h2 className="text-base font-black text-[#1a1a1a] uppercase tracking-wide mb-3">
              Navegação Rápida deste Guia:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm font-semibold text-[#166534]">
              <li>
                <a href="#espessura-diametro-fio" className="hover:underline flex items-center gap-2">
                  <span>→</span> Espessura (Diâmetro) por Máquina
                </a>
              </li>
              <li>
                <a href="#comprimento-fio-no-uso" className="hover:underline flex items-center gap-2">
                  <span>→</span> Comprimento do Fio no Momento do Uso
                </a>
              </li>
              <li>
                <a href="#quanto-fio-cortar-e-agua" className="hover:underline flex items-center gap-2">
                  <span>→</span> Quanto Fio Cortar e o Segredo da Água
                </a>
              </li>
              <li>
                <a href="#como-enrolar-sem-embolar" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Enrolar no Carretel sem Embolar
                </a>
              </li>
              <li>
                <a href="#fio-que-gruda-nao-sai" className="hover:underline flex items-center gap-2">
                  <span>→</span> Fio que Gruda ou Não Sai (Soluções)
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
            3. POR QUE A ESPESSURA IMPORTA E TABELA DE BITOLA POR MÁQUINA
            =================================================================== */}
        <section id="espessura-diametro-fio" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Espessura (Diâmetro) do Fio: Qual Medida Usar em Cada Máquina
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              O motor e o cabeçote da roçadeira trabalham como um conjunto calibrado para operar dentro de uma faixa específica de arrasto aerodinâmico.
            </p>
            <p>
              Se você instala um fio grosso demais achando que vai durar o dobro, o peso extra amarra a rotação do motor, faz a embreagem patinar até superaquecer e trava a saída da linha nos ilhoses.
            </p>
            <p>
              Por outro lado, um fio fino demais para a força da máquina arrebenta no pé do cabeçote logo na primeira batida em talo duro ou pedra solta.
            </p>
            <p>
              Caso queira comparar as marcas mais resistentes do mercado após descobrir sua medida, veja também nossa análise sobre{' '}
              <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
                qual o melhor fio de nylon para roçadeira
              </a>
              .
            </p>
            <p>
              Para não errar na escolha da milimetragem, confira a gravação na tampa do seu carretel e siga a regra de campo por potência e formato:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-4 text-left">Potência / Tipo de Máquina</th>
                  <th className="p-4 text-left text-[#4ade80]">Espessura Ideal (Bitola)</th>
                  <th className="p-4 text-left">Indicação de Terreno e Formato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Aparadores elétricos, a bateria e roçadeiras até 27 cc
                  </th>
                  <td className="p-4 font-black text-[#166534] whitespace-nowrap">
                    1,6 mm a 2,0 mm
                  </td>
                  <td className="p-4 text-gray-700">
                    Grama residencial macia e bordas de canteiros. Use perfil redondo para não derrubar o giro nem a bateria.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Roçadeiras de média cilindrada (28 cc a 42 cc)
                  </th>
                  <td className="p-4 font-black text-[#166534] whitespace-nowrap">
                    2,4 mm a 2,7 mm
                  </td>
                  <td className="p-4 text-gray-700">
                    Medida mais versátil para chácaras, praças e mato médio. Escolha redondo perto de muros e cercas ou quadrado para capim denso.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Roçadeiras profissionais pesadas (acima de 43 cc)
                  </th>
                  <td className="p-4 font-black text-[#166534] whitespace-nowrap">
                    3,0 mm a 3,3 mm
                  </td>
                  <td className="p-4 text-gray-700">
                    Limpeza bruta de pasto sujo, braquiária e talo grosso. O perfil quadrado ou estrela fatia a fibra vegetal como lâmina.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            4. COMPRIMENTO DO FIO NO CARRETEL (NO MOMENTO DO USO)
            =================================================================== */}
        <section id="comprimento-fio-no-uso" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Comprimento do Fio no Carretel (No Momento do Uso)
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Durante a roçada, o comprimento ideal de cada ponta que fica para fora do cabeçote deve ter cerca de um palmo, medindo entre 15 cm e 20 cm de cada lado.
            </p>
            <p>
              Essa medida mantém o equilíbrio dinâmico da ponteira e garante que a extremidade do nylon atinja a velocidade máxima para decepar o capim no impacto.
            </p>
            <p>
              O comprimento que excede o limite do protetor de segurança altera o comportamento dinâmico da máquina, exigindo um esforço adicional que compromete a estabilidade do giro.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/comprimento-ideal-fio-nylon-carretel-rocadeira.webp"
              alt="Cabeçote de roçadeira com pontas de fio de nylon no comprimento ideal de 15 a 20 cm e saia de proteção com faca limitadora"
              title="Comprimento correto do fio de nylon para fora do carretel e lâmina limitadora na saia"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-[#F0FDF4] border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#166534] mb-3 uppercase tracking-wide">
              Dica Prática de Operação (Na Hora de Roçar)
            </h3>
            <div className="space-y-3 text-gray-800 text-base leading-relaxed">
              <p>
                Nunca trabalhe sem a saia de proteção e jamais arranque a faca limitadora presa na aba do protetor.
              </p>
              <p>
                Essa lâmina serve como gabarito automático: toda vez que você acelera fundo e bate a base do carretel de leve no chão para liberar linha nova, a faca corta o excesso no limite exato de 15 a 20 cm.
              </p>
              <p>
                Trabalhar com pontas longas demais gera arrasto pesado, aumenta a vibração nas mãos do operador e derrete a embreagem.
              </p>
              <p>
                Além disso, mantenha aceleração firme durante a passada e roce sempre usando a ponta do fio (onde está o poder de corte), evitando abafar o meio da linha no mato.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. CHECKLIST DE MATERIAIS E FERRAMENTAS NA BANCADA
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Materiais para Medir, Hidratar e Abastecer o Fio
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Deixe estes 4 itens prontos antes de cortar e enrolar a linha no cabeçote:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Rolo de Nylon na Bitola Compatível</span>
                <span className="text-xs text-gray-600">Respeitando a gravação em milímetros estampada na tampa do carretel.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Balde com Água Limpa</span>
                <span className="text-xs text-gray-600">Para hidratar a poliamida por 24 horas antes do uso em campo.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Alicate de Corte ou Estilete</span>
                <span className="text-xs text-gray-600">Garante corte reto na ponta do fio para atravessar os ilhoses sem desfiar.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano Seco e Luvas de Proteção</span>
                <span className="text-xs text-gray-600">Para limpar a mola interna e tensionar o fio sem machucar as mãos.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. BANNER DO MEIO (MOMENTO DE TRANSIÇÃO)
            =================================================================== */}
        <div className="my-12 flex flex-col items-center">
          <BunnerDoMeiorocadeira />
          <BunnerDoMeiofiodenylonpararocadeira />
        </div>

        {/* ===================================================================
            7. QUANTO FIO CORTAR E O SEGREDO DA ÁGUA ANTES DE ENROLAR
            =================================================================== */}
        <section id="quanto-fio-cortar-e-agua" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Quanto Fio Cortar e o Segredo da Água antes de Enrolar
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Não existe uma metragem única para todas as máquinas, pois a capacidade de armazenamento interno depende do diâmetro da bobina e da espessura escolhida.
            </p>
            <p>
              Sempre verifique a numeração gravada na tampa da peça antes de puxar a fita métrica na bancada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Carretéis Médios
              </span>
              <h3 className="text-xl font-black text-[#1a1a1a] mb-2">
                Cabeçotes Padrão 25-2 e Similares
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Comportam com folga dois pedaços de 3 a 3,5 metros cada um.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Em bobinas de fenda central, você pode cortar uma tira única de 6 a 7 metros dobrada exatamente ao meio.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Carretéis Grandes
              </span>
              <h3 className="text-xl font-black text-[#1a1a1a] mb-2">
                Cabeçotes Profissionais 36-2 e 46-2
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Acomodam dois pedaços de 4 metros para trabalhos intensivos no trecho.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                A carga chega a até 8 metros no total quando abastecida com fios de 2,4 mm ou 2,7 mm.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Antes de Enrolar: O Segredo da Hidratação na Água
          </h3>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Nunca encha a bobina até transbordar, pois o fio sem folga lateral trava a mola do sistema bate-libera e impede a liberação automática durante o corte.
            </p>
            <p>
              Antes de abastecer o carretel, aplique um macete clássico de operador profissional: mergulhe o rolo de nylon num balde com água limpa na sombra por 24 horas.
            </p>
            <p>
              A poliamida absorve a umidade natural, recupera a elasticidade perdida no estoque seco e para de quebrar à toa ou soldar por calor dentro do cabeçote.
            </p>
            <p>
              Evite guardar seus rolos de reserva sob o sol ou perto de telhas quentes no galpão, pois o ressecamento térmico é o maior culpado pelas quebras repetidas no olhal.
            </p>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/hidratar-e-enrolar-fio-nylon-carretel-rocadeira.webp"
              alt="Rolo de fio de nylon hidratando em balde com água ao lado de operador enrolando fio na bobina do carretel"
              title="Hidratação do fio de nylon em água por 24 horas e rebobinagem organizada"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            8. COMO ENROLAR O FIO NO CARRETEL SEM EMBOLAR (PASSO A PASSO)
            =================================================================== */}
        <section id="como-enrolar-sem-embolar" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Como Enrolar o Fio no Carretel sem Embolar
          </h2>

          <div className="space-y-10">
            {/* MODO 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  1
                </span>
                No Carretel Tradicional (AutoCut que Abre)
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Desligue o motor por completo e isole a ignição soltando o cabo da vela ou removendo a bateria antes de tocar no cabeçote.
                </p>
                <p>
                  Aperte as travas plásticas laterais para abrir a tampa, retire a bobina interna e limpe toda a terra seca acumulada na mola central.
                </p>
                <p>
                  Prenda as pontas nos furos internos (ou na fenda central) e enrole com firmeza no sentido exato da seta gravada na bobina, mantendo as voltas paralelas sem cruzar.
                </p>
                <p>
                  Trave temporariamente as pontas nas fendas da borda, passe os filamentos pelos olhais metálicos laterais e feche a tampa até ouvir o clique firme de travamento.
                </p>
              </div>
            </div>

            {/* MODO 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  2
                </span>
                No Carretel de Recarga Rápida (AutoCut C sem Abrir)
              </h3>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>
                  Os cabeçotes de carga rápida eliminam a necessidade de desmontar a carcaça no meio do terreno.
                </p>
                <p>
                  Alinhe as setas gravadas na tampa com os ilhoses laterais de saída do fio.
                </p>
                <p>
                  Atravesse o segmento de nylon de um lado ao outro do cabeçote até igualar perfeitamente o comprimento das duas pontas no centro.
                </p>
                <p>
                  Em seguida, gire o manípulo central no sentido indicado pelas setas até recolher a linha e restar apenas um palmo (15 a 20 cm) de cada lado.
                </p>
                <p>
                  Se quiser ver fotos detalhadas de cada modelo de bobina, acesse também o nosso tutorial completo sobre{' '}
                  <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                    como colocar fio na roçadeira sem embolar
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/Tipos de Carretéis e Como Trocar o Nylon.webp"
              alt="Comparação entre carretel tradicional que abre e carretel de recarga rápida sem desmontar"
              title="Como enrolar o fio de nylon no carretel tradicional e no modelo de carga rápida"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            9. FIO QUE GRUDA, FIO QUE NÃO SAI (TABELA DE SOLUÇÃO DE FALHAS)
            =================================================================== */}
        <section id="fio-que-gruda-nao-sai" className="mb-14 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Fio que Gruda, Fio que Não Sai: Como Resolver
          </h2>

          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-8">
            <p>
              Quando o cabeçote começa a dar dor de cabeça no meio do trecho, o defeito quase sempre está ligado ao calor de atrito ou à incompatibilidade de bitola.
            </p>
            <p>
              Confira na tabela abaixo o diagnóstico rápido para os quatro problemas mais comuns de operação:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-4 text-left">Falha no Campo</th>
                  <th className="p-4 text-left">Causa Mais Comum</th>
                  <th className="p-4 text-left text-[#4ade80]">Solução Prática</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Fio soldado (grudado) lá dentro
                  </th>
                  <td className="p-4 text-gray-700">
                    Nylon ressecado ou enrolado frouxo e cruzado gerando atrito térmico
                  </td>
                  <td className="p-4 font-semibold text-[#166534]">
                    Hidratar o fio por 24h na água e rebobinar esticado sem cruzar voltas
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Bate no chão e o fio não sai
                  </th>
                  <td className="p-4 text-gray-700">
                    Bitola grossa demais, mola suja de terra ou bobina cheia além da conta
                  </td>
                  <td className="p-4 font-semibold text-[#166534]">
                    Usar a espessura gravada na tampa, limpar a mola e respeitar o limite de 3,5 a 4 m
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Arrebenta no pé do olhal toda hora
                  </th>
                  <td className="p-4 text-gray-700">
                    Ilhós metálico gasto com rebarba cortante ou aceleração total batendo no muro
                  </td>
                  <td className="p-4 font-semibold text-[#166534]">
                    Lixar ou trocar o olhal gasto e reduzir para meia aceleração perto do concreto
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <th className="p-4 text-left font-bold text-[#1a1a1a]">
                    Cabeçote trepidando a máquina
                  </th>
                  <td className="p-4 text-gray-700">
                    Uma ponta de fio está maior que a outra (ou apenas um lado saiu)
                  </td>
                  <td className="p-4 font-semibold text-[#166534]">
                    Desligar a máquina, puxar o lado curto manualmente e igualar as duas pontas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            10. BOX DE ALERTA DE SEGURANÇA INEGOCIÁVEL
            =================================================================== */}
        <section className="mt-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Regra de Segurança Inegociável: Jamais Use Arame ou Cabo de Aço
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-amber-950 font-medium">
                <p>
                  Jamais improvise arame liso, arame farpado ou cabo de aço dentro do carretel projetado para fio de nylon.
                </p>
                <p>
                  Além de destruir os ilhoses e a carcaça plástica do cabeçote, o metal sofre fadiga em alta rotação, quebra sem aviso e dispara farpas letais contra as pernas do operador e pessoas próximas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            11. ERROS COMUNS VS PRÁTICA RECOMENDADA
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Resumo Rápido de Acerto no Campo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que Evitar
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Instalar fio 3,0 mm em aparadores elétricos ou roçadeiras pequenas de 26 cc.</li>
                <li>Arrancar a faca limitadora da saia de proteção para deixar o fio mais comprido.</li>
                <li>Enrolar metragem acima da capacidade máxima da bobina até travar a mola.</li>
                <li>Cruzar as duas pernas do fio ou enrolar no sentido contrário ao da seta.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Casar a bitola (1,6 mm a 3,3 mm) com a cilindrada real do motor.</li>
                <li>Manter sempre entre 15 cm e 20 cm de ponta livre de cada lado do cabeçote.</li>
                <li>Hidratar o rolo de nylon em água por 24 horas antes de cortar os segmentos.</li>
                <li>Roçar em aceleração firme usando apenas a ponta externa da linha.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section id="perguntas-frequentes" className="mt-16 pt-8 border-t border-gray-200 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes
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
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50 space-y-3">
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
              Equipamento Calibrado e Pronto para o Trecho
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p>
                Dominar o tamanho certo do fio de nylon — respeitando a espessura da máquina, os 15 a 20 cm de ponta externa e a metragem correta na bobina — transforma o rendimento da sua roçadeira.
              </p>
              <p>
                A frustração de ter o fio quebrando, o motor perdendo força ou o cabeçote travando é quase sempre um erro simples de especificação que agora você sabe corrigir na bancada.
              </p>
              <p>
                Confira a gravação na tampa do seu carretel antes da próxima recarga, deixe a linha hidratando de véspera e trabalhe com o equipamento sempre redondo no trecho!
              </p>
            </div>
          </div>
        </section>

        {/* Avatar Circular do Autor + Box Dica do Especialista */}
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
              Dica de Ouro do Operador
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p>
                Se você limpa terrenos mistos que alternam grama macia perto de cercas e braquiária fechada no fundo do lote, mantenha duas bobinas internas já abastecidas na bolsa de ferramentas.
              </p>
              <p>
                Assim, você troca do fio redondo para o fio quadrado em menos de um minuto sem precisar rebobinar no sol quente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamanhoFioNylonRocadeira;
