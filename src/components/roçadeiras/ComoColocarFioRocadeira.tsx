import React, { useState } from 'react';
import { BunnerDoMeiofiodenylonpararocadeira as BannerDoMeio } from './BunnerDoMeiofiodenylonpararocadeira';

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

const HERO_IMG = "/images/blog/1/como colocar fio na roçadeira\u200b.webp";

export const ComoColocarFioRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Quantos metros de fio de nylon devo cortar para recarregar o carretel?",
      answer: [
        "Em carretéis tradicionais e elétricos, corte entre 2,5 m e 4 m no total (dobrado ao meio) para não encher demais a bobina nem travar a tampa.",
        "Já em cabeçotes profissionais de recarga fácil (Easy Load), o padrão costuma ficar entre 4 m e 6 m, conforme a bitola do nylon."
      ]
    },
    {
      question: "Para qual lado enrolar as duas pontas do fio na bobina?",
      answer: [
        "Sempre no mesmo sentido da seta moldada em alto-relevo na bobina plástica.",
        "Enrolar uma perna para a direita e outra para a esquerda cruza as camadas e trava o avanço na primeira batida no chão."
      ]
    },
    {
      question: "Preciso tirar o carretel inteiro do eixo só para repor o nylon?",
      answer: [
        "Não.",
        <>
          Para repor o fio basta abrir a tampa pelas duas travas laterais (ou alinhar as setas nos modelos Easy Load); você só precisa desrosquear a peça inteira quando for trocar o cabeçote gasto ou instalar lâmina — veja o passo a passo de{' '}
          <a href="/como-tirar-e-colocar-o-carretel-da-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como tirar e colocar o carretel da roçadeira
          </a>
          .
        </>
      ]
    },
    {
      question: "Por que o fio derrete e cola por dentro da bobina?",
      answer: [
        "Quando o nylon fica frouxo ou uma volta cavalga por cima da outra, a força centrífuga aperta os fios em alta rotação e o atrito derrete o plástico.",
        "Enrolar sob tensão firme em canaletas separadas e deixar o rolo de molho em água limpa por 24 horas resolve o problema."
      ]
    },
    {
      question: "Qual a diferença ao repor o fio em uma roçadeira elétrica?",
      answer: [
        "O enrolamento na bobina segue a mesma regra das setas, mas você deve desconectar o plugue da tomada antes de abrir e respeitar a bitola fina de 1,6 mm a 2,0 mm.",
        <>
          Se estiver pesquisando um modelo leve para jardim doméstico, confira nosso comparativo da{' '}
          <a href="/melhor-rocadeira" className="text-[#166534] hover:underline font-semibold">
            melhor roçadeira elétrica e a gasolina
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
            src={HERO_IMG}
            alt="Recarga correta de fio de nylon na bobina do carretel da roçadeira"
            title="Como Colocar Fio de Nylon na Roçadeira sem Embolar"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Recarga de Cabeçote • Gasolina e Elétrica
          </span>

          <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
            Como Colocar Fio de Nylon na Roçadeira sem Embolar: <br />
            <span className="text-[#4ade80]">Guia Prático</span>
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
            2. INTRODUÇÃO DIRETA DE CAMPO (SEM CLICHÊS NEM KEYWORD STUFFING)
            =================================================================== */}
        <section className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Nylon travado dentro do carretel quase nunca é defeito da peça: em nove de cada dez casos o fio foi enrolado frouxo, contra a seta da bobina ou em excesso de metros.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Quando uma volta cavalga sobre a outra, o giro de 8.000 a 10.000 RPM aperta a linha por dentro até o plástico fundir, obrigando você a parar o corte para abrir o cabeçote no meio do mato.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Com a dobra central bem presa e a tensão constante nos dedos, você recarrega tanto o carretel de abrir tampa (gasolina ou elétrico) quanto os cabeçotes automáticos sem desmontagem em menos de dois minutos.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Se ainda estiver em dúvida sobre a espessura exata para a sua máquina, consulte antes nossa tabela de{' '}
            <a href="/qual-o-tamanho-do-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
              tamanho do fio de nylon para roçadeira
            </a>{' '}
            ou o comparativo de{' '}
            <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
              qual o melhor fio de nylon
            </a>
            .
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src={HERO_IMG}
              alt="Mãos enrolando o fio de nylon paralelamente nas canaletas da bobina"
              title="Enrolamento correto do fio de nylon na bobina da roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. IDENTIFIQUE SEU CARRETEL EM 10 SEGUNDOS (TABELA SEM REPETIÇÃO)
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Qual Tipo de Carretel Está na Sua Roçadeira?
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Antes de abrir qualquer trava, olhe para a base do cabeçote e veja em qual dos três formatos abaixo ele se encaixa:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">Sistema do Cabeçote</th>
                  <th className="p-4 font-bold">Precisa Abrir a Tampa?</th>
                  <th className="p-4 font-bold">Comprimento Típico</th>
                  <th className="p-4 font-bold">Onde é Mais Comum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Manual / Semiautomático com Tampa</td>
                  <td className="p-4">Sim (duas travas laterais)</td>
                  <td className="p-4 text-[#166534] font-semibold">3 m a 5 m (1 fio dobrado ou 2 fios)</td>
                  <td className="p-4">Roçadeiras a gasolina tradicionais (Stihl, Toyama, Vulcan)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Automático Easy Load (Carga Fácil)</td>
                  <td className="p-4 font-semibold text-[#166534]">Não (passa direto pelos ilhós)</td>
                  <td className="p-4 text-[#166534] font-semibold">3 m a 6 m (fio único)</td>
                  <td className="p-4">
                    Modelos modernos como AutoCut C 26-2 e{' '}
                    <a href="/melhor-carretel-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                      carretéis automáticos
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Carretel de Aparador / Elétrica</td>
                  <td className="p-4">Sim (tampa de encaixe leve)</td>
                  <td className="p-4 text-[#166534] font-semibold">2 m a 3 m (bitola 1,6 mm a 2,0 mm)</td>
                  <td className="p-4">Trapp Master, Tramontina APB, Tekna elétrica e modelos a bateria</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/1/Tipos de Carretéis e Como Trocar o Nylon.webp"
              alt="Comparação entre carretel tradicional de desmontagem e cabeçote automático carga fácil"
              title="Tipos de carretéis para roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            4. CHECKLIST DE BANCADA
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                O que Deixar à Mão Antes de Abrir
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Quatro itens simples evitam pontas mascadas e molas perdidas na grama:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Fio na Bitola Certa</span>
                <span className="text-xs text-gray-600">1,6 mm a 2,0 mm para elétricas; 2,4 mm a 3,0 mm para roçadeiras a gasolina.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Alicate de Corte ou Estilete</span>
                <span className="text-xs text-gray-600">Corte reto sem rebarba para o fio deslizar livre pelos ilhós metálicos.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano ou Escovinha Seca</span>
                <span className="text-xs text-gray-600">Remove terra e capim moído das travas plásticas e da sede da mola.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Superfície Limpa (Lona ou Piso)</span>
                <span className="text-xs text-gray-600">Se a mola interna pular ao abrir a tampa, você enxerga na hora.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            5. MÉTODO 1: PASSO A PASSO PARA CARRETEL COM TAMPA (GASOLINA E ELÉTRICA)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Método 1: Carretel com Tampa (Roçadeira a Gasolina ou Elétrica)
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Você não precisa desrosquear o carretel do eixo: mantenha a máquina apoiada sobre um piso liso e siga estas cinco etapas sem pular nenhuma.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">1</span>
                Desligue a máquina e abra apenas a tampa
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Em modelos a gasolina desligue a chave Stop; em roçadeiras elétricas ou a bateria, tire o plugue da tomada ou remova a bateria antes de encostar na ponteira.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Aperte as duas travas plásticas laterais ao mesmo tempo para soltar a tampa externa, puxe a bobina interna e limpe a poeira acumulada em volta da mola.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">2</span>
                Corte o fio reto e dobre ao meio
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Corte um segmento único entre 2,5 m e 4 m (conforme a tabela de modelos abaixo) usando alicate afiado e dobre a linha exatamente ao meio para encontrar o centro.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">3</span>
                Prenda a dobra no rasgo central da bobina
              </h3>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Encaixe a dobra do meio na fenda da divisória central, colocando uma perna do fio na canaleta superior e a outra na canaleta inferior (em bobinas de dois furos independentes, prenda cada ponta em seu próprio orifício).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">4</span>
                Enrole firme no sentido das setas e trave as pontas
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Olhe a seta gravada no plástico da bobina e enrole as duas pernas juntas exatamente nessa direção, mantendo a linha esticada e sem cruzar uma camada sobre a outra.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Quando sobrarem cerca de 15 cm em cada extremidade, prenda cada ponta nas pequenas fendas laterais da própria bobina para o nylon não desenrolar na sua mão.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-3">
                <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">5</span>
                Passe pelos ilhós, feche a tampa e puxe para destravar
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Encaixe a mola na base, passe cada ponta pelos dois ilhós metálicos opostos da carcaça e puxe os dois fios para fora com um tranco leve até eles soltarem das fendas temporárias.
              </p>
              <p className="mb-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Feche a tampa externa até ouvir o clique das duas travas laterais: na primeira acelerada, a faca limitadora da saia de proteção apara o excesso automaticamente.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/Passo a Passo para Troca do Nylon.webp"
              alt="Passagem das pontas do fio de nylon pelos ilhós metálicos da carcaça do carretel"
              title="Fechamento e passagem do fio pelos ilhós"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            6. MÉTODO 2: CARRETEL AUTOMÁTICO EASY LOAD (SEM DESMONTAR)
            =================================================================== */}
        <section className="mb-14 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
            Sem Abrir a Tampa
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
            Método 2: Carretel Automático Easy Load (Recarga Rápida)
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            Nos cabeçotes de carga fácil como o Stihl AutoCut C 26-2 e os modelos Toyama Easy Load, você não encosta na mola interna:
          </p>

          <ol className="space-y-3 text-sm sm:text-base text-gray-700 list-decimal list-inside bg-white p-5 sm:p-6 rounded-xl border border-gray-200">
            <li>Gire o botão inferior até a seta gravada nele alinhar perfeitamente com as marcas dos dois ilhós laterais.</li>
            <li>Empurre um único pedaço de fio (3 m a 5 m) por um dos ilhós até a ponta atravessar o miolo e sair pelo furo oposto.</li>
            <li>Puxe o nylon até as duas pontas ficarem exatamente do mesmo comprimento fora do carretel.</li>
            <li>Segure firme a carcaça externa e gire o botão inferior no sentido indicado pela seta até recolher quase toda a linha, deixando cerca de 15 cm para fora de cada lado.</li>
          </ol>
        </section>

        {/* ===================================================================
            7. HIDRATAÇÃO 24H E TABELA DE MEDIDAS POR CABEÇA DE CORTE
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Truque da Água 24h e Tabela de Medidas por Cabeçote
          </h2>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/1/Cabeças de corte Preparar os fios de corte para enrolar e armazená-los corretamente.webp"
              alt="Preparação e hidratação do rolo de fio de nylon antes de enrolar no cabeçote"
              title="Hidratação e armazenamento do fio de nylon"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mb-8">
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              O nylon é uma poliamida que perde umidade quando fica guardado meses no calor do galpão, ficando seco e quebrando rente ao ilhós assim que bate em um muro.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              Mergulhe o rolo ou os pedaços já cortados em um balde com água limpa por 24 horas antes da roçada: a linha recupera a flexibilidade e chega a durar quase o dobro no corte.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-left text-gray-700 bg-white text-sm">
              <thead className="bg-[#1a1a1a] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold uppercase text-xs tracking-wider">Modelo do Cabeçote</th>
                  <th scope="col" className="px-5 py-4 font-bold uppercase text-xs tracking-wider">Comprimento de Fio</th>
                  <th scope="col" className="px-5 py-4 font-bold uppercase text-xs tracking-wider">Bitola Recomendada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-bold text-gray-900">AutoCut 2-2 / C 3-2</td><td className="px-5 py-3">1 fio de 5 m (ou 2 x 2,5 m)</td><td className="px-5 py-3 text-[#166534] font-semibold">1,6 mm a 2,0 mm</td></tr>
                <tr className="bg-gray-50/50 hover:bg-gray-100"><td className="px-5 py-3 font-bold text-gray-900">AutoCut C 4-2 / 5-2</td><td className="px-5 py-3">2 fios de 2,5 m a 3 m</td><td className="px-5 py-3 text-[#166534] font-semibold">2,0 mm</td></tr>
                <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-bold text-gray-900">AutoCut C 6-2</td><td className="px-5 py-3">1 fio de 4 m (dobrado ao meio)</td><td className="px-5 py-3 text-[#166534] font-semibold">2,0 mm a 2,4 mm</td></tr>
                <tr className="bg-gray-50/50 hover:bg-gray-100"><td className="px-5 py-3 font-bold text-gray-900">AutoCut 25-2 / C 26-2</td><td className="px-5 py-3">2 x 3,5 m (ou 1 x 7 m no C 26-2)</td><td className="px-5 py-3 text-[#166534] font-semibold">2,4 mm a 2,7 mm</td></tr>
                <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-bold text-gray-900">AutoCut 36-2 / 46-2 / 56-2</td><td className="px-5 py-3">2 fios de 4 m</td><td className="px-5 py-3 text-[#166534] font-semibold">2,7 mm a 3,3 mm</td></tr>
                <tr className="bg-gray-50/50 hover:bg-gray-100"><td className="px-5 py-3 font-bold text-gray-900">SuperCut 20-2 / 40-2</td><td className="px-5 py-3">2 x 3 m ou 1 x 7,5 m</td><td className="px-5 py-3 text-[#166534] font-semibold">2,4 mm</td></tr>
                <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-bold text-gray-900">TrimCut C 32-2 / 42-2 / 52-2</td><td className="px-5 py-3">1 fio de 8 m</td><td className="px-5 py-3 text-[#166534] font-semibold">2,4 mm a 3,0 mm</td></tr>
                <tr className="bg-gray-50/50 hover:bg-gray-100"><td className="px-5 py-3 font-bold text-gray-900">DuroCut 20-2 / 40-4</td><td className="px-5 py-3">2 a 4 pedaços de 20 cm a 25 cm</td><td className="px-5 py-3 text-[#166534] font-semibold">2,4 mm a 4,0 mm</td></tr>
                <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-bold text-gray-900">Aparadores Elétricos (Trapp / Tramontina)</td><td className="px-5 py-3">1 fio de 2 m a 3 m</td><td className="px-5 py-3 text-[#166534] font-semibold">1,6 mm a 1,8 mm</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            8. ERROS COMUNS E LINKS DE MANUTENÇÃO RELACIONADA (SEM DUPLICAR TUTORIAIS)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros que Travam o Carretel no Meio da Roçada
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que Evitar
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Enrolar uma ponta no sentido horário e a outra no anti-horário.</li>
                <li>Deixar o fio frouxo na bobina (as camadas se enterram e derretem).</li>
                <li>Usar nylon 3,0 mm em aparador elétrico de 1.000W (queima o induzido).</li>
                <li>Improvisar cabo de aço ou arame no lugar do nylon (risco grave de estilhaços).</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Hábito de Operador
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Respeitar sempre a seta em alto-relevo no plástico da bobina.</li>
                <li>Usar as fendas laterais temporárias antes de passar o fio nos ilhós.</li>
                <li>Conferir se a faca limitadora na saia está firme para não sobrecarregar o motor.</li>
                <li>Limpar capim seco atrás do cabeçote a cada duas recargas.</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl text-sm sm:text-base text-amber-950">
            <p className="mb-3 leading-relaxed">
              Precisa remover o cabeçote inteiro do eixo para trocar por uma faca de aço? Em vez de forçar a rosca esquerda no chute, siga nosso passo a passo dedicado de{' '}
              <a href="/como-trocar-a-lamina-da-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como trocar a lâmina da roçadeira
              </a>
              .
            </p>
            <p className="mb-0 leading-relaxed">
              E se o carretel estiver rodando sozinho mesmo quando você tira o dedo do acelerador, acerte o parafuso da marcha lenta no guia de{' '}
              <a href="/como-regular-rocadeira" className="text-[#166534] font-semibold hover:underline">
                como regular o carburador da roçadeira
              </a>
              .
            </p>
          </div>
        </section>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES
            =================================================================== */}
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Recarga de Fio de Nylon
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
            10. DICA DE CAMPO DO JOSÉ AILTON
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] p-6 sm:p-8 rounded-3xl flex items-start gap-4 shadow-sm">
          <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
              Dica de Campo do José Ailton: Deixe Dois Refis Já Cortados na Bolsa
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              Antes de sair para o terreno, corte dois ou três pedaços de nylon na medida exata do seu carretel, deixe-os hidratando em um pote com água e leve já prontos na bolsa de ferramentas.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Você economiza tempo debaixo do sol, evita carregar o rolo inteiro para o mato e nunca mais erra a metragem na hora da pressa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
