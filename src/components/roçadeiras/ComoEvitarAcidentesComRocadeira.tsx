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

const AlertTriangle = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ShieldAlert = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
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
// COMPONENTE PRINCIPAL DO TUTORIAL: COMO EVITAR ACIDENTES COM ROÇADEIRA
// ============================================================================
export const ComoEvitarAcidentesComRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "Quais são os Equipamentos de Proteção Individual (EPI) recomendados para o uso de roçadeiras Stihl e multimarcas?",
      a: [
        "Os fabricantes profissionais como a Stihl e a Husqvarna exigem o kit completo de 7 itens: capacete ou suporte com viseira facial (tela ou policarbonato), óculos de proteção com abas laterais por baixo da viseira, abafador auricular contra o ruído de 100+ dB, luvas antiderrapantes, perneiras rígidas de couro ou sintético, avental frontal e botas de couro com biqueira de aço e solado tratorado."
      ]
    },
    {
      q: "Como devo verificar a roçadeira antes de usar?",
      a: [
        "Faça a inspeção de 60 segundos na bancada: confira a vedação da tampa de combustível e se não há vazamentos nas mangueiras, teste o retorno automático da trava e do gatilho do acelerador, examine se a lâmina ou carretel está firme e sem trincas, confirme que a saia defletora está presa com todos os parafusos e cheque o engate rápido do cinto de dois ombros."
      ]
    },
    {
      q: "Qual é a distância segura que devo manter de outras pessoas e animais enquanto uso a roçadeira?",
      a: [
        "O protocolo internacional de segurança exige um raio livre mínimo de 15 metros (cerca de 50 pés) ao redor do operador.",
        "Como o cabeçote gira a mais de 9.000 RPM, pedras, cacos de vidro e pedaços de arame escondidos no capim são arremessados como projéteis letais dentro desse perímetro."
      ]
    },
    {
      q: "O que devo fazer após terminar de usar a roçadeira?",
      a: [
        "Desligue o botão Stop, aguarde o motor e o escapamento esfriarem totalmente, escove a palha seca acumulada nas aletas do cilindro e na saia protetora, esvazie o tanque caso a máquina vá ficar guardada por mais de 15 dias e armazene o equipamento em local seco, ventilado e fora do alcance de crianças."
      ]
    },
    {
      q: "O que pode acontecer se eu operar a roçadeira sem EPIs ou sem a saia de proteção?",
      a: [
        "Trabalhar sem viseira e óculos expõe os olhos a impacto direto de pedras e pontas de fio de nylon quebradas que podem causar perda imediata da visão.",
        "Já operar sem a saia defletora traseira ou sem perneiras e botina com biqueira direciona estilhaços de lâmina e tocos diretamente contra as canelas e os pés do roçador."
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura José Ailton)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/blog/como-evitar-acidentes-com-rocadeira.webp"
            alt="Operador profissional vestindo kit completo de EPIs (capacete com viseira, abafador, óculos, luvas, cinto duplo, perneiras e bota) inspecionando a proteção da roçadeira"
            title="Como Evitar Acidentes com Roçadeira: Guia Completo de Segurança e EPIs"
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
            Protocolo de Segurança Operacional & Prevenção
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Como Evitar Acidentes com Roçadeira:{' '}
            <span className="text-[#16A34A]">Guia Completo de Segurança</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Domine os 6 passos de inspeção pré-partida, a lista obrigatória de EPIs, a regra da zona de exclusão de 15 metros e como evitar o efeito rebote (kickback) da lâmina no campo.
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
            <span className="text-gray-400">Operador de Campo e Manutenção</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTEÚDO CENTRALIZADO
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA DE CAMPO (1 frase por <p>, mb-5, zero negrito)
            =================================================================== */}
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Uma roçadeira a combustão gira sua ponteira a mais de 9.000 rotações por minuto, velocidade em que qualquer pedra escondida no capim ou lâmina mal apertada se comporta como um projétil balístico.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            No dia a dia do trecho, quase todos os acidentes graves acontecem não com iniciantes assustados, mas com operadores que ganham excesso de confiança e resolvem roçar rapidinho de bermuda, sem viseira ou tirando a saia de proteção da máquina.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Saber como evitar acidentes com roçadeira exige transformar a vistoria mecânica e o uso de proteção individual em um ritual automático antes mesmo de puxar o cordão de partida.
          </p>
          <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, organizei o protocolo completo de segurança de campo: a tabela dos 4 perigos mecânicos fatais, os 6 passos de checagem pré-uso, a postura correta de varredura e os cuidados ao trocar ferramentas de corte.
          </p>
        </div>

        {/* ===================================================================
            3. DICAS DE SEGURANÇA NO OPERACIONAL + TABELA DE DIAGNÓSTICO DE RISCOS
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Dicas de Segurança no Operacional: EPIs e Vistoria Prévia
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                A segurança real na roçada funciona em duas camadas que nunca podem trabalhar separadas: a blindagem do corpo do operador (EPIs) e a integridade mecânica da ferramenta.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
                Antes de vestir a máquina, entenda na tabela abaixo quais são os 4 mecanismos físicos que causam acidentes no campo e qual barreira neutraliza cada um deles:
              </p>
            </div>
          </div>

          {/* Tabela de Diagnóstico de Riscos e Prevenção (Information Gain) */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#1a1a1a] text-white text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Tipo de Acidente / Perigo</th>
                  <th className="p-3.5 sm:p-4">Causa Mecânica no Campo</th>
                  <th className="p-3.5 sm:p-4 text-[#4ade80]">Barreira Obrigatória de Prevenção</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Chicote de Pedras e Arames (Ricochete)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Fio de nylon ou faca atinge brita, caco de vidro ou arame farpado oculto no mato</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Saia defletora original + Óculos por baixo da viseira + Perneiras + Raio de 15m</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Efeito Rebote da Lâmina (Kickback)</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Quadrante frontal direito da lâmina metálica (entre 12h e 2h) bate em toco ou pedra fixa</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Cortar sempre com o lado esquerdo do disco (varredura da direita p/ a esquerda)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Soltura ou Quebra de Lâmina em Giro</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Trinca no aço, furo central folgado sem anel redutor ou porca esquerda frouxa</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Inspeção visual contra trincas + Centralização exata da flange + Porca autotravante</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/30">
                  <td className="p-3.5 sm:p-4 font-bold text-gray-900">Incêndio ou Queimadura no Abastecimento</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Vazamento na tampa/mangueira ou reabastecimento com escapamento fervendo</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#166534]">Aguardar 5 min p/ esfriar, abastecer a 3 metros do ponto de partida e secar respingos</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checklist de EPIs e Verificação */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <ShieldAlert size={22} />
              </div>
              <h3 className="font-bold text-[#166534] text-lg">
                1. Equipamento de Proteção Individual (EPI Completo)
              </h3>
              <p className="mb-2 text-xs sm:text-sm text-gray-800 leading-relaxed">
                A viseira de tela sozinha barra pedras grandes, mas não impede que farpas finas ou poeira passem pelos furinhos; por isso, combine sempre óculos de proteção + viseira facial.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#166534] list-disc list-inside font-medium">
                <li>Capacete com viseira facial + Óculos de segurança com proteção lateral.</li>
                <li>Protetor auricular tipo concha ou plugue (motores 2T passam de 100 dB).</li>
                <li>Luvas de couro ou vaqueta antiderrapantes e antivibração.</li>
                <li>Perneiras rígidas do tornozelo ao joelho + Botina com biqueira de aço.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="bg-[#15803d] text-white p-2.5 rounded-xl w-fit">
                <Wrench size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                2. Verificação Tátil e Visual Antes da Partida
              </h3>
              <p className="mb-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Ligar o motor sem inspecionar a estrutura é um convite ao perigo: verifique com a máquina desligada se não há trincas na lâmina, parafusos Allen frouxos no guidão ou fios desencapados no botão Stop.
              </p>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Se você acabou de tirar a máquina da caixa, siga a ordem correta de aperto em X do nosso guia sobre{' '}
                <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                  como montar roçadeira com segurança
                </a>
                .
              </p>
            </div>
          </div>

          <div className="my-6 flex flex-col items-center">
            <img
              src="/images/blog/checklist-epis-seguranca-rocadeira.webp"
              alt="Bancada de oficina com kit completo de EPIs (capacete com viseira e abafador, óculos, luvas de couro e perneira) ao lado da ponteira da roçadeira com saia defletora e cachimbo da vela desconectado"
              title="Checklist de EPIs e inspeção mecânica pré-uso da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
            <span className="text-xs text-gray-500 italic mt-2 text-center">
              Regra de bancada: EPIs separados e cachimbo da vela desconectado sempre que você for tocar na lâmina ou no carretel.
            </span>
          </div>
        </section>

        {/* ===================================================================
            4. BANNER DO MEIO (ROÇADEIRAS)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BunnerDoMeiorocadeira />
        </div>

        {/* ===================================================================
            5. OS 6 CUIDADOS NECESSÁRIOS ANTES DE OPERAR UMA ROÇADEIRA
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Quais os 6 Cuidados Necessários Antes de Operar uma Roçadeira?
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Os três minutos que antecedem o acionamento do motor determinam se a sua diária será produtiva ou perigosa; execute este checklist pré-operacional em 6 passos:
            </p>
          </div>

          <div className="space-y-6">
            {/* Passo 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  1
                </span>
                Verificar o sistema de combustível e possíveis vazamentos
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Inspecione a vedação da tampa do tanque, as duas mangueiras de silicone e o bulbo injetor (primer) em busca de rachaduras ou suor de gasolina; jamais dê partida se sentir cheiro de combustível vazando sobre o cárter, pois a faísca da bobina pode iniciar um incêndio imediato.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Prepare a emulsão sempre fora da máquina seguindo as medidas exatas do nosso guia sobre{' '}
                <a href="/como-temperar-gasolina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como temperar a gasolina da roçadeira
                </a>{' '}
                e afaste-se pelo menos 3 metros do local onde abasteceu antes de seguir o passo a passo de{' '}
                <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como ligar a roçadeira
                </a>
                .
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  2
                </span>
                Testar a trava de segurança, o gatilho do acelerador e o botão Stop
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Com o motor ainda desligado, pressione a trava superior da empunhadura e aperte o gatilho do acelerador: ao soltar o dedo, a mola deve devolver o gatilho instantaneamente para a posição de marcha lenta sem enroscar no meio do caminho.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Mantenha as manoplas limpas e secas (livres de óleo 2T ou graxa) e confirme que, quando o motor estiver em marcha lenta, a lâmina ou o carretel permanece 100% parado — se o cabeçote continuar girando sozinho na lenta, faça o ajuste imediato conforme o tutorial de{' '}
                <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como regular o carburador da roçadeira
                </a>
                .
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  3
                </span>
                Inspecionar a ferramenta de corte e a saia defletora de proteção
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Examine a lâmina metálica contra a luz: se houver qualquer microtrinca perto do furo central ou dente torto, descarte a peça imediatamente, pois o aço fissurado pode partir ao meio a 9.000 RPM.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Jamais trabalhe sem a saia plástica ou metálica de proteção instalada acima da ponteira e nunca adapte correntes soltas ou discos improvisados — use apenas modelos homologados do nosso guia de{' '}
                <a href="/lamina-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor lâmina para roçadeira
                </a>{' '}
                respeitando a medida exata do anel centralizador (veja como exemplo{' '}
                <a href="/qual-o-furo-da-lamina-da-rocadeira-stihl-220" className="text-[#166534] font-semibold hover:underline">
                  qual o furo da lâmina da roçadeira Stihl 220 vs. universal
                </a>
                ).
              </p>
            </div>

            {/* Passo 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  4
                </span>
                Conferir a lubrificação da caixa de transmissão (ponteira)
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Uma ponteira trabalhando seca superaquece a mais de 150 °C e pode gripar as engrenagens cônicas de repente em plena rotação, dando um tranco violento nos braços do operador; a cada 20 a 25 horas de uso, abra o bujão lateral e reponha de 5g a 10g da{' '}
                <a href="/qual-a-melhor-graxa-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  melhor graxa para roçadeira
                </a>
                .
              </p>
            </div>

            {/* Passo 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  5
                </span>
                Ajustar o cinto de sustentação, o ponto de equilíbrio e os cabos
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Vista o colete duplo, ajuste o gancho lateral um palmo abaixo da linha da cintura e regule o olhal no tubo para que a ponteira flutue a 10 cm do chão sem você precisar fazer força nos punhos, verificando também se o pino de desengate rápido de emergência do cinto está funcionando livremente.
              </p>
            </div>

            {/* Passo 6 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                  6
                </span>
                Vasculhar o terreno e isolar o espaço ao redor
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Antes de ligar a máquina, caminhe pelo lote seguindo o protocolo de{' '}
                <a href="/limpeza-de-terreno-com-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  limpeza de terreno com roçadeira
                </a>{' '}
                para recolher garrafas, pedaços de ferro, tocos baixos, ossos e rolos de arame escondidos na grama alta, sinalizando hidrômetros e canos de PVC com uma estaca visível.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. USO SEGURO DE ROÇADEIRAS: POSTURA, KICKBACK E ZONA DE 15 METROS
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Uso Seguro no Campo: Postura, Controle de Rebote e Raio de 15 Metros
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Quando a roçadeira entra em rotação de corte, sua segurança depende da biomecânica dos pés e do sentido correto da varredura:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-[#166534]">
                Postura Correta e Prevenção do Efeito Rebote (Kickback)
              </h3>
              <p className="mb-3 text-sm text-gray-700 leading-relaxed">
                Mantenha os dois pés afastados na largura dos ombros com apoio firme no solo, segure as duas manoplas do guidão com os polegares fechados e faça o movimento de foice girando o quadril da direita para a esquerda.
              </p>
              <p className="mb-0 text-sm text-gray-700 leading-relaxed">
                Como a lâmina gira no sentido anti-horário (vista de cima), corte sempre usando o lado esquerdo do disco (entre as posições de 8h e 11h de um relógio) e jamais encoste a ponta frontal direita (entre 12h e 2h) em troncos grossos, evitando o tranco violento de rebote.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-700 shrink-0" /> Zona de Exclusão Obrigatória de 15 Metros
              </h3>
              <p className="mb-3 text-sm text-amber-950 leading-relaxed">
                Estabeleça um círculo invisível de no mínimo 15 metros ao seu redor onde nenhuma outra pessoa, criança, animal doméstico ou carro estacionado pode permanecer durante a operação.
              </p>
              <p className="mb-0 text-sm text-amber-950 leading-relaxed">
                Como o abafador auricular e o barulho do motor impedem que você ouça alguém chegando por trás, combine um sinal visual com a família ou equipe: se qualquer pessoa entrar no raio de 15 metros, solte o acelerador e aperte o botão Stop na hora.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Dica extra para terrenos acidentados: nunca levante a ponteira de corte acima da linha da cintura; se você precisa limpar barrancos muito inclinados onde a máquina lateral força você a erguer os braços, troque para uma máquina de mochila — veja nosso comparativo sobre{' '}
            <a href="/qual-a-melhor-rocadeira-costal-ou-lateral" className="text-[#166534] font-semibold hover:underline">
              qual a melhor roçadeira costal ou lateral
            </a>
            .
          </p>
        </section>

        {/* ===================================================================
            7. MANUTENÇÃO PÓS-USO E CUIDADOS NA TROCA DE FERRAMENTAS DE CORTE
            =================================================================== */}
        <section className="mb-14 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3 mb-4">
              Manutenção Pós-Uso e Segurança na Troca de Lâminas
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Muitos cortes nas mãos acontecem com o motor já desligado, na hora de limpar a máquina ou substituir o acessório na bancada:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                1. Limpeza Após o Resfriamento
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Espere o escapamento esfriar completamente antes de passar uma escova seca nas aletas de refrigeração do cilindro e na parte interna da saia, removendo a seiva ácida do capim que oxida o metal.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                2. Afiação e Balanceamento Simétrico
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Lâmina cega obriga você a dar pancadas no mato, e lâmina afiada torta gera vibração que trinca a haste; siga sempre o método de equilíbrio do nosso guia de{' '}
                <a href="/como-amolar-disco-de-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como amolar disco de roçadeira
                </a>
                .
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-[#166534] text-base mb-2">
                3. Cachimbo da Vela Fora e Luvas
              </h3>
              <p className="mb-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Antes de seguir o tutorial de{' '}
                <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como trocar a lâmina da roçadeira
                </a>{' '}
                ou de{' '}
                <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como tirar e colocar o carretel
                </a>
                , desconecte o cachimbo da vela de ignição e calce luvas grossas de couro.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            FAQ – Perguntas Frequentes sobre Segurança com Roçadeira
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
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
            9. CONCLUSÃO (BOX ESCURO NOBRE) + DICA DO JOSÉ AILTON + AUTOR
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Conclusão: Segurança é o Que Mantém o Roçador no Trecho
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p className="mb-4 leading-relaxed">
                Evitar acidentes com roçadeira não depende de sorte, mas da disciplina de seguir sempre a mesma rotina: EPI completo da cabeça aos pés, saia defletora instalada, gatilho destravando macio e raio de 15 metros livre de pessoas e animais.
              </p>
              <p className="mb-4 leading-relaxed">
                Quando você respeita a zona de corte do lado esquerdo da lâmina e mantém a ponteira bem engraxada e centralizada, o equipamento trabalha sob seu controle absoluto do primeiro ao último metro do terreno.
              </p>
              <p className="mb-0 leading-relaxed">
                Nunca negocie a sua integridade física por pressa — vista seus EPIs, faça o checklist de 1 minuto e tenha uma jornada segura e produtiva!
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
              Dica de Ouro do José Ailton: Quando Trocar a Porca Esquerda da Ponteira?
            </h3>
            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p className="mb-3">
                Um detalhe que quase ninguém olha na manutenção é o anelzinho interno de nylon (ou trava metálica) que fica dentro da porca de rosca esquerda que prende a lâmina na ponteira.
              </p>
              <p className="mb-0">
                Depois de tirar e colocar a lâmina dezenas de vezes, essa porca perde a pressão autotravante: se você conseguir rosqueá-la até o fim só com a ponta dos dedos sem que ela ofereça resistência, troque a porca por uma nova imediatamente — isso custa menos de dez reais e garante que o disco jamais se solte na desaceleração do motor.
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

export default ComoEvitarAcidentesComRocadeira;
