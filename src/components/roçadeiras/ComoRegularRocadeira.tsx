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

const Clock = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const ComoRegularRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual a regulagem padrão de fábrica das agulhas L e H na Stihl FS 160 e FS 220?",
      answer: [
        "Nos modelos profissionais da Stihl como a FS 160 e a FS 220, a posição padrão inicial (ponto de partida) consiste em fechar suavemente os parafusos L e H no sentido horário até encostar e, em seguida, abrir 1 volta e meia (1,5 voltas) no sentido anti-horário em ambas as agulhas.",
        "Depois de ligar e aquecer o motor, faz-se o ajuste fino do parafuso LA para que a lâmina não gire sozinha na marcha lenta."
      ]
    },
    {
      question: "Por que a lâmina ou o carretel continua girando sozinho na marcha lenta?",
      answer: [
        "Quando o acessório de corte roda sozinho sem que você aperte o acelerador, a rotação de marcha lenta está alta demais e faz a embreagem centrífuga acoplar antes da hora.",
        "Para corrigir imediatamente, gire o parafuso LA (ou T) devagar no sentido anti-horário (para a esquerda) até que a lâmina ou o carretel pare completamente, mantendo o motor ligado e firme."
      ]
    },
    {
      question: "O que acontece se eu fechar demais a agulha H (alta rotação)?",
      answer: [
        "Fechar excessivamente a agulha H no sentido horário deixa a mistura pobre (pouco combustível e pouco óleo 2 tempos para muito ar).",
        "Embora o motor pareça girar muito alto e 'fino', a falta de combustível reduz drasticamente a refrigeração interna e a lubrificação do cilindro, podendo superaquecer e fundir o pistão em poucos minutos de uso pesado."
      ]
    },
    {
      question: "Como regular a lenta da roçadeira Stihl FS 80 quando ela fica morrendo?",
      answer: [
        "Com o motor da Stihl FS 80 aquecido, localize o parafuso LA e gire-o suavemente no sentido horário (para a direita) para abrir um pouco mais o encosto da borboleta até o motor estabilizar.",
        "Se ainda houver engasgos ao acelerar, faça o ajuste fino na agulha L (cujo padrão inicial na FS 80 é de aproximadamente 1 volta aberta a partir do batente)."
      ]
    },
    {
      question: "Regulei as agulhas L e H, mas a roçadeira continua falhando. O que verificar?",
      answer: [
        "Se o carburador não responde à regulagem das agulhas, o problema geralmente está em filtro de ar saturado, filtro de combustível entupido dentro do tanque, gasolina velha ou membranas ressecadas no interior do carburador.",
        <>
          Se o motor afogou durante as tentativas de partida, veja primeiro{' '}
          <a href="/como-desafogar-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como desafogar a roçadeira passo a passo
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
            src="/images/blog/1/como regular roçadeira.webp"
            alt="Roçadeira Falhando? Veja Como Regular o Carburador"
            title="Como Regular o Carburador da Roçadeira Passo a Passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Roçadeira Falhando? <br />
            <span className="text-[#16A34A]">Veja Como Regular o Carburador</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                />
                <span>Carlos Henrique</span>
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
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA + SUMÁRIO)
            =================================================================== */}
        <section className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
            Uma roçadeira que não funciona corretamente pode gerar frustração e atrasos no campo.
          </p>
          <p>
            Um dos problemas mais comuns que afetam o desempenho desses equipamentos é a má regulagem do carburador, responsável por controlar a mistura exata entre ar e combustível.
          </p>
          <p>
            Quando o carburador está desajustado, a roçadeira pode apresentar dificuldades na partida, perda de potência, engasgos ao acelerar e até mesmo um consumo excessivo de combustível.
          </p>
          <p>
            Aprender como regular o carburador da roçadeira (incluindo o passo a passo de como regular roçadeira Stihl 220, como regular roçadeira Stihl 160, como regular a lenta da roçadeira Stihl FS 80 e modelos Toyama ou similares) é essencial para restaurar a força original e prolongar a vida útil do motor.
          </p>
          <p>
            Para começar, vamos entender onde ele está localizado e quais são seus principais parafusos de ajuste.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/como regular roçadeira.webp"
              alt="Como regular roçadeira e ajustar as agulhas do carburador"
              title="Como Regular o Carburador da Roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Sumário Rápido de Navegação */}
          <nav aria-label="Sumário do guia de regulagem" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-8 not-prose">
            <h2 className="text-base font-black text-[#1a1a1a] uppercase tracking-wide mb-3">
              Navegação Rápida deste Guia:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm font-semibold text-[#166534]">
              <li>
                <a href="#como-regular-o-carburador-da-rocadeira" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular o Carburador da Roçadeira (L, H e T/LA)
                </a>
              </li>
              <li>
                <a href="#como-regular-rocadeira" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular Roçadeira (Passo a Passo Geral)
                </a>
              </li>
              <li>
                <a href="#como-regular-rocadeira-stihl" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular Roçadeira Stihl (FS 120, 160, 220, 290)
                </a>
              </li>
              <li>
                <a href="#como-regular-rocadeira-stihl-220" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular Roçadeira Stihl 220
                </a>
              </li>
              <li>
                <a href="#como-regular-rocadeira-stihl-160" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular Roçadeira Stihl 160
                </a>
              </li>
              <li>
                <a href="#como-regular-a-lenta-da-rocadeira-stihl-fs-80" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Regular a Lenta da Roçadeira Stihl FS 80
                </a>
              </li>
            </ul>
          </nav>
        </section>

        {/* ===================================================================
            3. LOCALIZAÇÃO, ELEMENTOS E PARAFUSOS L, H E T/LA
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Localização e Acesso ao Carburador
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Para dar início ao ajuste do carburador, o primeiro passo é acessar o compartimento onde ele está instalado, geralmente na lateral esquerda do motor logo atrás da caixa do filtro de ar.
          </p>
          <p>
            Esse componente é protegido por uma estrutura plástica que preserva o sistema contra detritos e impurezas externas.
          </p>
          <p>
            Ao verificar a limpeza desse acesso, você estará pronto para identificar os orifícios de regulagem que permitem calibrar o motor com precisão.
          </p>
        </div>

        <h2 id="como-regular-o-carburador-da-rocadeira" className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter scroll-mt-24">
          Como Regular o Carburador da Roçadeira: Entendendo os Parafusos L, H e LA (ou T)
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            Para dominar como regular o carburador da roçadeira, você precisa identificar os três parafusos principais (ou variações deles) que ditam o ritmo do motor.
          </p>
          <p>
            O coração desse sistema reside nas agulhas de regulagem identificadas pelas letras L (Low / Baixa Rotação), H (High / Alta Rotação) e pelo parafuso mecânico T ou LA (Marcha Lenta).
          </p>
          <p>
            Compreender a função específica de cada peça transforma o que parece ser um mistério mecânico em um processo lógico e seguro.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Agulha L (Low)
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Baixa Rotação e Arrancada
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Controla a mistura de ar e combustível em marcha lenta e nas acelerações iniciais, garantindo que o motor suba de giro sem engasgar.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Agulha H (High)
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Alta Rotação e Potência
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Controla o fluxo de combustível quando o motor está acelerado ao máximo sob carga de corte, protegendo o cilindro contra falta de lubrificação.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Parafuso T ou LA
            </span>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
              Encosto da Marcha Lenta
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Ajusta mecanicamente a abertura da borboleta ou pistonete para manter o motor ligado na lenta sem que a lâmina ou o fio de nylon gire sozinho.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Funcionamento das Agulhas
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Entender a dinâmica dessas agulhas é o que separa um ajuste amador de um trabalho profissional.
          </p>
          <p>
            Ao girar os parafusos L ou H no sentido horário, você restringe a passagem de combustível, fechando a mistura (mistura mais pobre) e elevando a rotação.
          </p>
          <p>
            Por outro lado, o movimento no sentido anti-horário enriquece a mistura, permitindo que mais combustível e óleo 2 tempos entrem na câmara e reduzindo o giro do motor.
          </p>
          <p>
            É crucial operar com movimentos curtos, de um oitavo a um quarto de volta por vez, pois o sistema é muito sensível.
          </p>
          <p>
            Se você abrir demais, o motor falhará e soltará fumaça por excesso de combustível; se fechar excessivamente a agulha H, ele sofrerá superaquecimento grave por falta de lubrificação interna.
          </p>
          <p>
            Esse equilíbrio preciso é o segredo para extrair o máximo desempenho da sua máquina sem comprometer a durabilidade do conjunto.
          </p>
        </div>

        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/1/Localização e Acesso ao Carburador.webp"
            alt="Localização e Acesso ao Carburador"
            title="Localização dos Parafusos L, H e LA no Carburador"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* ===================================================================
            4. MATERIAIS E CONDIÇÕES INICIAIS (CHECKLIST)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Ferramentas e Condições Iniciais Obrigatórias
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Antes de girar qualquer parafuso do carburador, confira estes 4 itens na bancada:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Fenda Fina (Chave de Carburador)</span>
                <span className="text-xs text-gray-600">De ponta plana estreita (3mm a 4mm) para encaixar nas fendas L, H e LA.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Filtro de Ar Limpo e no Lugar</span>
                <span className="text-xs text-gray-600">Nunca regule com filtro sujo de serragem/poeira ou sem a tampa do filtro.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Vela em Bom Estado e Gasolina Nova</span>
                <span className="text-xs text-gray-600">Mistura 2T fresca (menos de 15 dias) na proporção correta do fabricante.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Motor Aquecido por 2 a 3 Minutos</span>
                <span className="text-xs text-gray-600">O ajuste fino definitivo deve ser feito sempre na temperatura de trabalho.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. PASSO A PASSO GERAL PARA REGULAR O CARBURADOR
            =================================================================== */}
        <h2 id="como-regular-rocadeira" className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter scroll-mt-24">
          Como Regular Roçadeira: Passo a Passo Completo do Carburador
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Regular o carburador de uma roçadeira (seja ela Stihl, Toyama, Branco, Husqvarna, Vulcan ou Nakasaki) é um procedimento que exige método e atenção aos sinais que o motor emite.
          </p>
          <p>
            Não se trata apenas de movimentar parafusos, mas de encontrar o equilíbrio térmico e mecânico ideal para que a combustão ocorra de forma limpa.
          </p>
          <p>
            Siga as 5 etapas abaixo para conduzir esse ajuste de forma estruturada e precisa.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            1
          </span>
          Preparação Inicial
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Antes de tocar em qualquer parafuso, certifique-se de que o filtro de ar esteja limpo, a vela de ignição em perfeito estado e o tanque abastecido com gasolina nova.
          </p>
          <p>
            Vale lembrar que a escolha do{' '}
            <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
              fio de nylon ideal para roçadeira
            </a>{' '}
            e o comprimento correto da linha também impactam diretamente na carga aerodinâmica do motor e na rotação máxima atingida pelo carburador.
          </p>
          <p>
            Mantenha a área ao redor da ponteira totalmente livre de obstáculos ou pedras para evitar acidentes durante os testes de aceleração.
          </p>
          <p>
            Com o equipamento apoiado de maneira firme no solo e afastado de galões inflamáveis, você cria o ambiente técnico ideal para um ajuste seguro.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            2
          </span>
          Posição Inicial dos Parafusos (Padrão de Fábrica)
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Com o motor desligado e frio, feche com cuidado os parafusos L e H girando-os suavemente no sentido horário até sentir que encostaram no fundo.
          </p>
          <p>
            Jamais force o aperto no batente final, pois a ponta cônica das agulhas é extremamente delicada e pode sofrer danos irreversíveis na sede do carburador.
          </p>
          <p>
            Após esse contato inicial, abra ambos os parafusos (L e H) girando entre 1 volta e 1 volta e meia no sentido anti-horário (ou até 2 voltas em alguns carburadores importados, conforme a tabela abaixo).
          </p>
          <p>
            Esse posicionamento padrão atua como o ponto de partida de fábrica, garantindo que o motor consiga dar a partida sem afogar e sem faltar combustível.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            3
          </span>
          Ligando a Roçadeira para Aquecimento e Teste
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Com o ajuste base estabelecido, dê a partida no motor seguindo o procedimento normal e deixe-o aquecer por 2 a 3 minutos.
          </p>
          <p>
            Observe atentamente a resposta imediata: o motor deve girar de forma constante, sem oscilações bruscas.
          </p>
          <p>
            Se você tiver qualquer dificuldade para dar a partida inicial, consulte o passo a passo de{' '}
            <a href="/como-ligar-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como ligar roçadeira a gasolina
            </a>
            .
          </p>
          <p>
            Este aquecimento inicial é indispensável, pois regular um motor 2 tempos ainda frio altera a leitura da mistura assim que a camisa do cilindro dilata.
          </p>
        </div>

        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/Passo a Passo para Regular o Carburador.webp"
            alt="Passo a Passo para Regular o Carburador"
            title="Ajuste Inicial das Agulhas do Carburador"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 mt-16 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            4
          </span>
          Ajuste da Baixa Rotação (Agulha L)
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Com o motor aquecido e em marcha lenta, gire o parafuso L devagar para a direita (sentido horário) ou para a esquerda (sentido anti-horário) procurando o ponto em que a rotação da lenta fica mais alta e uniforme.
          </p>
          <p>
            Ao encontrar esse pico de rotação, abra o parafuso L cerca de um quarto de volta (1/4) no sentido anti-horário.
          </p>
          <p>
            Dê pequenos toques no gatilho do acelerador: se o motor engasgar ou ameaçar morrer na saída, abra mais um oitavo de volta na agulha L até a resposta de aceleração ficar imediata e limpa.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
          <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
            5
          </span>
          Ajuste Fino da Alta Rotação (Agulha H)
        </h3>
        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/1/Passo a Passo para Regular o Carburador 2.webp"
            alt="Ajuste Fino do Parafuso H"
            title="Ajuste Fino do Parafuso H de Alta Rotação"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Acelere a roçadeira ao máximo para avaliar a resposta do parafuso H em regime de alta rotação.
          </p>
          <p>
            Se a roçadeira soar pesada, abafada e expelir muita fumaça azulada, a mistura está rica (excesso de combustível): feche a agulha H levemente no sentido horário até o giro subir e cantar limpo.
          </p>
          <p>
            Por outro lado, se o motor gritar fino demais e perder força quando entra no mato, a mistura está pobre (falta de combustível): abra imediatamente a agulha H no sentido anti-horário.
          </p>
          <p>
            Regra de ouro de segurança: nunca deixe a agulha H fechada no limite máximo de giro, pois falta óleo 2 tempos e o motor pode fundir; o ponto ideal é encontrar a rotação máxima e abrir cerca de 1/8 a 1/4 de volta no sentido anti-horário para garantir refrigeração e lubrificação plenas.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Regulagem Final do Parafuso da Marcha Lenta (T ou LA)
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Por fim, ajuste o parafuso de encosto da marcha lenta (identificado como LA nas roçadeiras Stihl ou T nas demais marcas).
          </p>
          <p>
            Sua finalidade é manter o motor funcionando de maneira estável sem que a lâmina ou o carretel de nylon gire por conta própria.
          </p>
          <p>
            Se o motor estiver apagando quando você solta o gatilho, gire o parafuso LA/T no sentido horário para subir um pouco a lenta.
          </p>
          <p>
            Se a ferramenta de corte estiver rodando sozinha na lenta, gire o parafuso LA/T no sentido anti-horário até que o conjunto de corte pare completamente.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Regulagem da Trava e Cabo do Acelerador
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-12 space-y-5">
          <p>
            O bom funcionamento da marcha lenta também depende da sincronia entre o gatilho do acelerador e sua folga no cabo.
          </p>
          <p>
            Verifique se, ao soltar o comando no punho, o cabo retorna prontamente ao batente do parafuso LA/T no carburador, sem manter o pistonete puxado.
          </p>
          <p>
            Caso perceba resistência ou cabo enforcado, ajuste a contraporca do conduíte para deixar uma leve folga de 1 a 2 milímetros antes do início da tração.
          </p>
        </div>

        {/* ===================================================================
            6. SEÇÕES ESPECÍFICAS STIHL: GERAL, FS 220, FS 160 E FS 80
            =================================================================== */}
        <section className="mt-16 pt-10 border-t-2 border-gray-100 space-y-12">
          {/* BLOCO 1: COMO REGULAR ROÇADEIRA STIHL (FS 120, FS 160, FS 220, FS 290) */}
          <div id="como-regular-rocadeira-stihl" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Linha Profissional Stihl
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Regular Roçadeira Stihl (FS 120, FS 160, FS 220 e FS 290)
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para regular o carburador de uma roçadeira Stihl (como os consagrados modelos FS 120, FS 160, FS 220 ou FS 290), siga a regulagem padrão de fábrica das agulhas L, H e LA com a ferramenta de corte montada no equipamento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  1. Preparação e Fechamento Suave
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Com o filtro de ar limpo, vela revisada, gasolina nova e motor desligado, feche os parafusos H e L girando no sentido horário até encostar levemente (sem apertar com força para não danificar as sedes).
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  2. Posição Inicial de Fábrica (Ajuste Base)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Abra o parafuso L cerca de 1 volta a 1 volta e meia no sentido anti-horário e abra o parafuso H cerca de 1 volta a 1 volta e meia no sentido anti-horário.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  3. Ajuste da Marcha Lenta (Parafuso LA)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Ligue o motor e deixe aquecer: se estiver apagando na lenta, gire o LA no sentido horário; se a ferramenta de corte estiver rodando sozinha, gire o LA no sentido anti-horário até ela parar completamente.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                  4. Ajuste Fino de Baixa (L) e Alta (H)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Se engasgar ao acelerar, abra levemente o parafuso L no sentido anti-horário; em aceleração máxima, ajuste o parafuso H devagar até encontrar a rotação mais harmônica e forte, sem deixar o motor magro demais.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 2: COMO REGULAR ROÇADEIRA STIHL 220 */}
          <div id="como-regular-rocadeira-stihl-220" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Modelo Stihl FS 220
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Regular Roçadeira Stihl 220 Passo a Passo
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para regular o carburador da roçadeira Stihl FS 220, o ajuste é feito pelas agulhas L (baixa rotação/lenta), H (alta rotação/combustível) e LA (parafuso da marcha lenta):
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Condições Iniciais e Fechamento das Agulhas
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Certifique-se de que o filtro de ar esteja limpo e no lugar, a vela em bom estado e a ferramenta de corte montada; com a máquina desligada, feche com cuidado as agulhas L e H no sentido horário até o fim sem forçar e, em seguida, abra ambas as agulhas em 1 volta e meia (1,5 voltas) no sentido anti-horário.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Ajuste da Lenta (LA) e da Agulha L
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Ligue a roçadeira Stihl 220 e ajuste os parafusos L e LA para que o motor mantenha uma marcha lenta estável sem deixar o disco de corte girar sozinho; se o motor falhar ou engasgar ao acelerar de forma suave, abra ou feche a agulha L aos pouquinhos até a resposta ficar limpa.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Ajuste da Alta Rotação (Agulha H)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Acelere o motor ao máximo e gire a agulha H devagar: se o motor soar pesado e sem rotação por excesso de combustível, feche um pouco (sentido horário); se estiver fraco por falta de combustível, abra um pouco (sentido anti-horário) até atingir o giro máximo com suavidade.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 3: COMO REGULAR ROÇADEIRA STIHL 160 */}
          <div id="como-regular-rocadeira-stihl-160" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Modelo Stihl FS 160
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Regular Roçadeira Stihl 160 Passo a Passo
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para regular o carburador da roçadeira Stihl FS 160, siga o passo a passo de ajuste das agulhas L, H e LA:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Fechamento Inicial e Posição Padrão (1,5 Voltas)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Com o motor desligado e frio, feche com cuidado os parafusos L e H girando-os no sentido horário até o fim sem apertar com força; em seguida, abra a agulha L em 1 volta e meia no sentido anti-horário e abra a agulha H em 1 volta e meia no sentido anti-horário.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Ajuste da Marcha Lenta (LA)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Ligue a roçadeira Stihl FS 160: se o conjunto de corte (lâmina ou nylon) estiver girando sozinho com o motor na lenta, gire o parafuso LA no sentido anti-horário até a ferramenta de corte parar completamente.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Regulagem Fina com o Motor Ligado
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Acelere a máquina: se a roçadeira estiver morrendo ou com falta de combustível na aceleração, abra um pouco mais a agulha H no sentido anti-horário; se estiver soltando muita fumaça, sem força ou pesada por excesso de combustível, feche um pouco a agulha H no sentido horário até atingir a rotação máxima limpa.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 4: COMO REGULAR A LENTA DA ROÇADEIRA STIHL FS 80 */}
          <div id="como-regular-a-lenta-da-rocadeira-stihl-fs-80" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Modelo Stihl FS 80
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Regular a Lenta da Roçadeira Stihl FS 80
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para regular a marcha lenta da roçadeira Stihl FS 80, você deve usar o parafuso de encosto da marcha lenta (identificado como LA) e, se necessário, o parafuso de baixa rotação (L):
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Esquentar o Motor
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Ligue a roçadeira Stihl FS 80 e deixe o motor funcionar por alguns minutos até atingir a temperatura normal de operação antes de mexer no carburador.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Ajustar o Parafuso LA (Marcha Lenta)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Se a lâmina ou o fio de nylon estiver rodando sozinho na lenta, gire o parafuso LA no sentido anti-horário (para a esquerda) até que a ferramenta de corte pare completamente; se a máquina estiver morrendo (apagando) na lenta, gire o parafuso LA no sentido horário (para a direita) até que o motor funcione de maneira uniforme e estável.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Ajuste Fino com o Parafuso L (Se Necessário)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Se a rotação da lenta continuar irregular ou engasgando ao acelerar, faça pequenos ajustes no parafuso L até encontrar o ponto de rotação mais estável (o padrão inicial de fábrica para a FS 80 costuma ser fechar com cuidado e abrir cerca de 1 volta no L e de 1 a 1,5 voltas no H).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. TABELA DE REFERÊNCIA DE REGULAGEM PADRÃO POR MARCA/MODELO
            =================================================================== */}
        <section className="mt-14 mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Tabela de Regulagem Padrão (Ponto de Partida de Fábrica)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="p-4 font-bold uppercase tracking-wider">Modelo / Marca</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Agulha L (Baixa)</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Agulha H (Alta)</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Parafuso LA / T (Lenta)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Stihl FS 160 / FS 220 / FS 290</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 voltas</td>
                  <td className="p-4">Ajustar até a lâmina parar de girar na lenta</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Stihl FS 80 / FS 85</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1 volta</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1 a 1,5 voltas</td>
                  <td className="p-4">Anti-horário para parar a lâmina / Horário se morrer</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Husqvarna (131R / 143R-II / 226R)</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,25 a 1,5 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,25 a 1,5 voltas</td>
                  <td className="p-4">Ajustar parafuso T com motor aquecido (2.800 rpm)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Toyama / Branco / Tekna / Vulcan</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 a 2 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 a 2 voltas</td>
                  <td className="p-4">Ajustar parafuso T para lenta estável sem girar corte</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Nakasaki (63cc / 65cc / 75cc)</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 a 2 voltas</td>
                  <td className="p-4 text-[#166534] font-semibold">Abrir 1,5 a 2 voltas</td>
                  <td className="p-4">Parafuso superior do pistonete (T)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            8. DICAS IMPORTANTES, SEGURANÇA E SOLUÇÃO DE OSCILAÇÕES
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">
          Dicas Importantes para a Regulagem
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A precisão na regulagem de uma roçadeira é influenciada por fatores externos e pelo comportamento dinâmico do equipamento durante o uso.
          </p>
          <p>
            Compreender como as condições de operação e a rotina de manutenção impactam a performance do motor é essencial para garantir que a máquina funcione com consistência e segurança.
          </p>
          <p>
            A seguir, destacamos pontos cruciais que todo operador deve considerar para proteger o equipamento e otimizar sua experiência de trabalho.
          </p>
        </div>

        <section className="my-10 bg-red-50 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
            <ShieldAlert className="text-red-600 shrink-0" size={28} /> Dica de Segurança
          </h3>
          <div className="text-red-950 text-sm font-medium space-y-3">
            <p>
              Priorize sempre sua integridade física utilizando óculos de proteção, luvas resistentes, protetores auriculares e botas fechadas.
            </p>
            <p>
              Equipamentos de segurança formam a última barreira entre uma rotina produtiva e acidentes graves causados por detritos arremessados ou ruídos intensos.
            </p>
            <p>
              Antes de iniciar qualquer teste de aceleração máxima, verifique se não há pessoas ou animais próximos à área de giro do cabeçote.
            </p>
          </div>
        </section>

        <section className="my-10 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
            <Info className="text-amber-600 shrink-0" size={28} /> Atenção Técnica
          </h3>
          <div className="text-amber-950 text-sm font-medium space-y-3">
            <p>
              Caso sinta qualquer insegurança técnica ou perceba que o motor permanece instável mesmo após retornar as agulhas ao padrão de fábrica, interrompa o procedimento imediatamente.
            </p>
            <p>
              Entrada de ar falsa pelos retentores do virabrequim ou diafragmas endurecidos no carburador exigem reparo em oficina especializada para evitar a fundição do pistão.
            </p>
          </div>
        </section>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Dicas para Solução Rápida de Oscilações
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            Caso o motor apresente instabilidade ou comportamento irregular durante o serviço, verifique rapidamente o que fazer e o que evitar antes de alterar a posição das agulhas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
            <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
              <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
            </h3>
            <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
              <li>Apertar com força as agulhas L e H contra o batente final (deforma a ponta cônica).</li>
              <li>Deixar a agulha H muito fechada buscando giro extremo (causa superaquecimento e funde o motor).</li>
              <li>Tentar regular o carburador com gasolina velha ou filtro de ar entupido de poeira.</li>
              <li>Trabalhar com a lâmina girando sozinha em marcha lenta por preguiça de ajustar o LA/T.</li>
            </ul>
          </div>

          <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
            <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
              <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
            </h3>
            <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
              <li>Girar as agulhas sempre em frações de 1/8 a 1/4 de volta e aguardar 3 segundos a resposta.</li>
              <li>Abrir 1/4 de volta no parafuso H após encontrar o pico máximo de rotação para garantir lubrificação.</li>
              <li>Limpar o respiro da tampa do tanque, que quando entope faz a máquina morrer após alguns minutos.</li>
              <li>Esvaziar o carburador se a roçadeira for ficar guardada por mais de 15 dias.</li>
            </ul>
          </div>
        </div>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Regulagem de Roçadeira
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
            10. FINALIZAÇÃO E DICA DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Finalização
            </h2>
            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-5">
              <p>
                Após percorrer todo o processo de regulagem, o último estágio consiste na validação do trabalho realizado em condições reais de corte no mato.
              </p>
              <p>
                Este é o momento de confirmar se a performance da sua roçadeira foi restaurada e se o equipamento responde rápido ao gatilho mantendo a marcha lenta firme.
              </p>
              <p>
                A qualidade do combustível dita a vida útil do ajuste: abasteça sempre com gasolina fresca e óleo 2 tempos na medida certa para evitar borras que entopem as passagens internas das agulhas L e H.
              </p>
            </div>
          </div>

          {/* Box Dica do Especialista */}
          <div className="mt-8 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl flex items-start gap-4 shadow-sm">
            <div className="text-[#16A34A] shrink-0 mt-1">
              <Lightbulb size={28} />
            </div>
            <div>
              <h3 className="text-lg font-black text-green-950 uppercase tracking-wide mb-2">
                Segredo de Mecânico: O Som de "4 Tempos" na Alta (H)
              </h3>
              <div className="space-y-2 text-sm text-green-900 leading-relaxed">
                <p className="m-0">
                  Quando você acelera a roçadeira no máximo fora do mato (sem carga), o motor bem regulado na agulha H deve dar uma levíssima embaralhada no topo do giro — som conhecido nas oficinas como batida de 4 tempos.
                </p>
                <p className="m-0">
                  Assim que a lâmina ou o{' '}
                  <a href="/como-colocar-fio-na-rocadeira" className="text-[#166534] hover:underline font-semibold">
                    carretel de fio de nylon
                  </a>{' '}
                  encosta no capim pesado, o som limpa imediatamente e o motor entrega força total sem risco de trabalhar seco!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
