import React, { useState } from 'react';
import { BunnerDoMeiofiodenylonpararocadeira } from './BunnerDoMeiofiodenylonpararocadeira';
import { ExitIntentPopupfiodenylonpararocadeira } from './ExitIntentPopupfiodenylonpararocadeira';
import { products } from '../../data/productsrocadeira';

// Ícones SVG Inline Leves (Zero dependências JS, PageSpeed 100)
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

// Dúvidas Frequentes (FAQ)
const faqTutorial = [
  {
    q: "A lâmina da Stihl FS 220 serve na FS 160 ou FS 280?",
    a: [
      "Sim.",
      "As roçadeiras Stihl FS 160, FS 220, FS 280 e FS 290 utilizam o mesmo padrão de furo central de 20 mm, permitindo o uso das mesmas lâminas de 2 pontas, 3 pontas e discos de serra compatíveis com a potência da máquina."
    ]
  },
  {
    q: "Posso colocar a lâmina da FS 220 na Stihl FS 55 ou FS 85?",
    a: [
      "Não.",
      "Os modelos FS 55, FS 80, FS 85 e FS 120 utilizam eixo com encaixe de 25,4 mm (1 polegada).",
      "O furo de 20 mm da FS 220 simplesmente não entra na flange dessas máquinas, e forçar ou tentar abrir o furo no esmeril desbalanceia o aço e causa acidentes graves."
    ]
  },
  {
    q: "Para qual lado solta a porca da lâmina na roçadeira Stihl?",
    a: [
      "Para soltar, gire a chave no sentido horário (para a direita).",
      "Para apertar, gire no sentido anti-horário (para a esquerda).",
      "A rosca é invertida justamente para que a força de corte no sentido de rotação da máquina mantenha a porca sempre travada."
    ]
  },
  {
    q: "Preciso trocar a porca da lâmina da Stihl de tempos em tempos?",
    a: [
      "Sim.",
      "A própria Stihl orienta substituir a porca autofrenante sempre que o anel trava perder o atrito e permitir que ela gire frouxa na mão.",
      "É uma peça barata que garante que a lâmina não escape em alta rotação."
    ]
  }
];

export const QualOFuroLaminaStihl220: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const laminaStihlLink = products['lamina-rocadeira-3-pontas-stihl-fs160-161-220-221-290-300']?.link || 'https://meli.la/1FsLBZW';
  const discoStihlLink = products['lamina-disco-serra-80-dentes-para-rocadeira-stihl-universal']?.link || 'https://meli.la/2KJPNj6';

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* ===================================================================
          1. HERO (CABEÇALHO ESCURO COM IMAGEM DE FUNDO OTIMIZADA PARA LCP)
          =================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/qual-o-furo-da-lamina-da-rocadeira-stihl-220.webp"
            alt="Lâmina de 3 pontas em aço com paquímetro medindo o furo central de 20 mm compatível com a roçadeira Stihl FS 220"
            title="Qual o furo da lâmina da roçadeira Stihl 220"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Especificação Oficial e Manutenção Linha Stihl
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Qual o Furo da Lâmina da Roçadeira Stihl FS 220? (E Como Trocar na Linha Stihl)
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Veja a medida exata em milímetros do furo central da Stihl FS 220, a tabela completa de compatibilidade entre modelos Stihl e como fazer a substituição segura na ponteira original.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <a href="/author/jose-ailton/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
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
            2. INTRODUÇÃO E RESPOSTA DIRETA (1 frase por parágrafo, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Quem opera uma Stihl FS 220 no batente pesado sabe que ela é um verdadeiro tanque de guerra no mato fechado.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Mas basta chegar ao balcão da loja para comprar uma faca nova que aparece a dúvida mais comum entre operadores: qual o furo da lâmina da roçadeira Stihl 220?
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            A resposta direta é 20 mm (2 centímetros).
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Essa medida específica costuma pegar muita gente de surpresa porque a grande maioria das roçadeiras menores, inclusive outros modelos da própria Stihl, utiliza o padrão de 1 polegada (25,4 mm).
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Comprar a medida errada faz você perder a viagem ou correr o risco de montar uma lâmina com folga perigosa no eixo.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Com base na minha rotina no trecho operando máquinas da linha profissional Stihl, organizei abaixo a tabela de compatibilidade de furos da marca, qual modelo de faca rende melhor na FS 220 e o roteiro direto de como trocar a lâmina da roçadeira Stihl respeitando os detalhes de fixação da fabricante.
          </p>
        </div>

        {/* ===================================================================
            3. TABELA DE COMPATIBILIDADE DE FUROS STIHL (20 MM VS 25,4 MM)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Qual o Furo da Lâmina da Roçadeira Stihl 220 e Modelos Compatíveis?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O furo central padrão da Stihl FS 220 é de 20 mm.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Ele encaixa perfeitamente no ressalto guia da flange original da transmissão, garantindo que a lâmina gire 100% centralizada mesmo em rotação máxima no meio da capoeira.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O erro mais frequente na hora da compra é achar que toda roçadeira Stihl usa o mesmo encaixe.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Na prática, a fabricante divide sua linha em duas medidas principais, além de exceções importantes como o modelo costal; confira antes de fechar o pedido:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Modelo da Roçadeira Stihl</th>
                  <th className="p-3.5 sm:p-4">Diâmetro do Furo Central</th>
                  <th className="p-3.5 sm:p-4">Observação de Campo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">FS 160, FS 220, FS 280 e FS 290</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#166534]">20 mm</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Compartilham o mesmo padrão de encaixe pesado. A lâmina serve entre todas elas.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">FS 55, FS 80, FS 85 e FS 120</td>
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">25,4 mm (1 polegada)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Linha leve e intermediária; o furo é maior e não centraliza na FS 220 sem adaptador.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-amber-950">FR 220 (Roçadeira Costal)</td>
                  <td className="p-3.5 sm:p-4 font-bold text-amber-900">Conferir na transmissão</td>
                  <td className="p-3.5 sm:p-4 text-amber-950">
                    Apesar do número 220 no nome, a costal FR 220 possui projeto diferente e não segue automaticamente os acessórios da FS 220 (veja também nosso comparativo da{' '}
                    <a href="/melhor-rocadeira-costal" className="text-amber-950 font-semibold underline">
                      melhor roçadeira costal
                    </a>
                    ).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subseção: Posso usar lâmina de 1 polegada na FS 220? */}
          <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200">
            <h3 className="text-xl font-black text-amber-900 mb-3 flex items-center gap-2">
              <AlertTriangle size={22} className="text-amber-700 shrink-0" />
              Posso usar lâmina de 1 polegada (25,4 mm) na Stihl FS 220?
            </h3>
            <div className="prose text-amber-950 max-w-none">
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                Tecnicamente, você até consegue instalar uma lâmina de furo 25,4 mm usando um anel redutor (bucha de redução) de 25,4 mm para 20 mm, desde que a peça seja de aço usinado na espessura exata da faca.
              </p>
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                Porém, a minha recomendação de operador para quem trabalha com a FS 220 é clara: dê sempre preferência à lâmina com furo nativo de 20 mm.
              </p>
              <p className="mb-0 text-sm sm:text-base leading-relaxed">
                Como essa máquina tem torque alto para derrubar pasto sujo e arbustos, qualquer folga milimétrica no anel redutor gera desbalanceamento, vibração forte no guidão e desgaste prematuro nos rolamentos da ponteira.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. QUAL LÂMINA 20 MM ESCOLHER PARA A STIHL FS 220?
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            Qual Lâmina 20 mm Escolher para a Stihl FS 220?
          </h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-6">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Como a FS 220 sobra em potência, ela aceita desde facas tradicionais até discos de serra.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O segredo para não jogar dinheiro fora é casar o desenho do aço com o mato do seu terreno (e se quiser comparar marcas e formatos, veja também nosso ranking da <a href="/lamina-para-rocadeira" className="text-[#16A34A] font-semibold hover:underline">melhor lâmina e disco para roçadeira</a>):
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#166534] font-black text-base uppercase mb-3">
                  <Check size={20} className="text-[#16A34A]" />
                  <h3>Lâmina de 2 ou 3 Pontas (Furo 20 mm)</h3>
                </div>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  A melhor escolha para limpeza de lotes, capim alto, braquiária e pasto embolado.
                </p>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  A de 2 pontas corta mais rápido em capim fino e médio, enquanto a <a href={laminaStihlLink} target="_blank" rel="noopener noreferrer sponsored nofollow" className="text-[#16A34A] font-semibold hover:underline">lâmina 3 pontas furo 20 mm para Stihl FS 220</a> tem mais massa e segura melhor o embalo em macega fechada e talos duros.
                </p>
              </div>
              <span className="text-xs font-bold text-[#166534] bg-[#F0FDF4] px-3 py-1.5 rounded-lg border border-[#16A34A]/20 w-fit">
                Ideal para: Capim Colonião, Braquiária e Pasto Sujo
              </span>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-black text-base uppercase mb-3">
                  <Wrench size={20} className="text-[#16A34A]" />
                  <h3>Disco Circular / Serra de Vídea (Furo 20 mm)</h3>
                </div>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  Indicado exclusivamente para capoeira fechada, brotos lenhosos e arbustos grossos — veja opções como o <a href={discoStihlLink} target="_blank" rel="noopener noreferrer sponsored nofollow" className="text-[#16A34A] font-semibold hover:underline">disco de serra circular compatível com Stihl</a>.
                </p>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  Exige obrigatoriamente a troca do protetor comum pelo encosto metálico específico para serra circular da Stihl.
                </p>
              </div>
              <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 w-fit">
                Ideal para: Capoeira Grossa e Arbustos Lenhosos
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (FIO DE NYLON)
            =================================================================== */}
        <div className="my-14">
          <BunnerDoMeiofiodenylonpararocadeira />
        </div>

        {/* ===================================================================
            6. COMO TROCAR A LÂMINA DA ROÇADEIRA STIHL (PASSO A PASSO)
            =================================================================== */}
        <section className="mb-14">
          <div className="border-b-2 border-gray-100 pb-3 mb-6">
            <span className="text-xs font-black text-[#16A34A] uppercase tracking-wider block">
              Padrão de Transmissão Stihl (Chave 19 mm e Furo 20 mm)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
              Como Trocar a Lâmina da Roçadeira Stihl
            </h2>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mb-8">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O sistema de fixação da Stihl foi desenhado para aguentar tranco sem soltar durante o corte, e por isso usa rosca esquerda (invertida) e uma sequência exata de peças na transmissão.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Se você ainda quer ver os cuidados universais de preparo para outras marcas de máquina, vale conferir nosso guia geral de <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como trocar a lâmina da roçadeira</a>; abaixo, foco nos passos diretos para o conjunto original Stihl:
            </p>
          </div>

          <div className="my-8 flex flex-col items-center">
            <img
              src="/images/blog/troca-lamina-furo-20mm-stihl-ponteira.webp"
              alt="Mãos com luvas encaixando lâmina de 3 pontas de furo 20 mm no ressalto guia da flange da transmissão Stihl com prato giratório e porca autofrenante ao lado"
              title="Encaixe da lâmina de furo 20 mm na transmissão da roçadeira Stihl"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              O furo nativo de 20 mm deve vestir o degrau central da flange interna Stihl sem nenhum jogo lateral.
            </span>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Desligue o motor e solte o cabo da vela
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Nunca confie apenas na chave liga/desliga no punho e coloque luvas grossas de raspa para proteger as mãos contra o gume da lâmina.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Insira o pino trava da Stihl na caixa de engrenagens
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Procure o orifício na lateral da ponteira, encaixe o pino metálico que vem no kit da máquina e gire a lâmina devagar até sentir o pino travar o eixo por completo.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Solte a porca autofrenante no sentido horário
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Com a chave de vela original Stihl (boca 19 mm nos modelos da linha FS 220), gire a porca para a direita (sentido horário) para afrouxar.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Retire o conjunto e confira a ordem das peças
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Remova a porca, o prato giratório (protetor de desgaste inferior), a arruela de pressão/flange externa estriada e a lâmina gasta.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Limpe toda a grama enrolada no eixo para a faca nova não assentar torta.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Centralize a lâmina 20 mm no ressalto guia
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Apoie a lâmina nova sobre a flange interna e mexa a faca com os dedos para confirmar que o furo de 20 mm vestiu o degrau central sem nenhum jogo lateral.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Se estiver instalando um disco de dentes, confirme que a seta estampada no aço acompanha o sentido de giro indicado no protetor.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  6
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Recoloque as peças e aperte no sentido anti-horário
                </h3>
              </div>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Encaixe a flange externa casando as estrias, posicione o prato giratório e rosqueie a porca girando para a esquerda (sentido anti-horário).
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Dê um aperto firme com a chave de vela sem usar canos ou extensores de força.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#15803d] text-white font-black text-sm flex items-center justify-center shrink-0">
                  7
                </span>
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  Puxe o pino trava antes da partida
                </h3>
              </div>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Remova o pino da caixa de transmissão e gire a lâmina com a mão para garantir que está nivelada e livre de raspagens no defletor.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. 3 DETALHES DA LINHA STIHL QUE EVITAM ACIDENTES NA TROCA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-6">
            3 Detalhes da Linha Stihl que Evitam Acidentes na Troca
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quem conhece a oficina sabe que existem três cuidados próprios das roçadeiras Stihl que costumam passar batido no dia a dia:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                <ShieldAlert size={20} className="text-red-600 shrink-0" />
                1. Fique de olho na porca autofrenante (travante)
              </h3>
              <p className="mb-3 text-sm sm:text-base text-red-900 leading-relaxed">
                A porca original Stihl possui um anel de trava que impede que a lâmina se solte quando você tira o dedo do acelerador e o motor freia bruscamente.
              </p>
              <p className="mb-0 text-sm sm:text-base text-red-900 leading-relaxed">
                Com muitas trocas, essa trava gasta; regra prática: se você conseguir rosquear a porca inteira só com os dedos sem sentir resistência firme no final, descarte a peça e coloque uma porca nova.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="font-bold text-amber-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-700 shrink-0" />
                2. Use o protetor (saia) compatível com o acessório
              </h3>
              <p className="mb-0 text-sm sm:text-base text-amber-950 leading-relaxed">
                Na linha Stihl, o defletor usado para o{' '}
                <a href="/melhor-carretel-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  cabeçote AutoCut de nylon
                </a>{' '}
                tem a faca aparadora na borda e não deve ser misturado com a montagem de discos de serra circular, que pedem protetor metálico próprio (e se o motor da sua FS 220 perder giro sob carga, confira também como{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  regular o carburador da roçadeira
                </a>
                ).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                <Wrench size={20} className="text-[#16A34A] shrink-0" />
                3. Inspecione o prato giratório
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Aquela panelinha metálica que fica por baixo da porca serve para deslizar no solo e proteger a rosca contra pedras.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Se o fundo dela já estiver furado ou muito gasto, troque a peça antes que o desgaste coma a cabeça sextavada de 19 mm da porca e trave a desmontagem no futuro.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. FAQ INTERATIVO (PERGUNTAS FREQUENTES)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 text-center uppercase tracking-tight">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqTutorial.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors text-base sm:text-lg"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="text-[#16A34A] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="text-gray-500 shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-gray-700 border-t border-gray-100 text-sm sm:text-base">
                      {item.a.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-3 last:mb-0 leading-relaxed">
                          {paragraph}
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
            9. CONCLUSÃO E DICA DE OURO DO JOSÉ AILTON
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] rounded-3xl p-6 sm:p-8 relative shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
                Dica de Ouro do José Ailton: Confira a Gravação FS vs FR Antes de Comprar
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                Acertar no furo de 20 mm da sua Stihl FS 220 e manter a porca autofrenante sempre firme garante um corte limpo, sem vibração no guidão e com total segurança no trecho.
              </p>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-0">
                Antes de pedir sua próxima lâmina ou quando for aprender <a href="/como-amolar-disco-de-rocadeira" className="text-[#16A34A] font-semibold hover:underline">como amolar disco de roçadeira</a> na bancada, confirme a gravação exata do modelo na carcaça da máquina (cuidando para não confundir a lateral FS 220 com a costal FR 220) e bom serviço no mato!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopupfiodenylonpararocadeira />
    </div>
  );
};
