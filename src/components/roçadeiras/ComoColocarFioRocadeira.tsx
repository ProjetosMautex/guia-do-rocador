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

export const ComoColocarFioRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Quantos metros de fio de nylon cabem no carretel da roçadeira?",
      answer: [
        "Na maioria dos carretéis manuais e semiautomáticos de roçadeiras a gasolina ou elétricas, utiliza-se um pedaço único entre 2 e 4 metros (dobrado ao meio) ou dois pedaços separados de 2,5 a 3,5 metros.",
        "Nos carretéis automáticos de carga rápida (sem desmontar), costuma-se atravessar um único segmento de 3 a 5 metros de ponta a ponta."
      ]
    },
    {
      question: "Para qual lado devo enrolar o fio de nylon na bobina?",
      answer: [
        "Você deve enrolar as duas pontas sempre no mesmo sentido indicado pelas setas gravadas em alto relevo na bobina interna do carretel.",
        "Jamais enrole uma ponta para a direita e a outra para a esquerda, pois isso faz as linhas se cruzarem e trava a liberação do fio."
      ]
    },
    {
      question: "Preciso tirar o carretel inteiro da roçadeira para colocar o fio?",
      answer: [
        "Não.",
        "Na grande maioria dos modelos basta apertar as duas travas plásticas laterais para abrir somente a tampa externa (ou alinhar as setas nos modelos de recarga rápida), mantendo a base do carretel rosqueada no eixo da máquina."
      ]
    },
    {
      question: "Por que o fio de nylon derrete ou cola dentro do carretel?",
      answer: [
        "O derretimento interno ocorre quando as voltas do fio são enroladas frouxas ou cruzadas umas sobre as outras, gerando atrito e calor extremo quando o cabeçote gira em alta rotação.",
        "Enrolar com tensão firme, respeitar as canaletas separadas e hidratar o rolo de nylon em água por 24 horas antes do uso eliminam esse problema."
      ]
    },
    {
      question: "Como colocar fio na roçadeira elétrica sem quebrar as travas da tampa?",
      answer: [
        "Sempre retire o plugue da tomada (ou a bateria), limpe a terra seca acumulada nas duas abas laterais e pressione ambas para dentro ao mesmo tempo antes de puxar a tampa.",
        <>
          Se você busca um equipamento prático para jardins residenciais, confira também nosso guia da{' '}
          <a href="/melhor-rocadeira-eletrica" className="text-[#166534] hover:underline font-semibold">
            melhor roçadeira elétrica
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
            src="/images/blog/1/como colocar fio na roçadeira​.webp"
            alt="Como Colocar Fio de Nylon na Roçadeira sem Embolar"
            title="Como Colocar Fio de Nylon na Roçadeira sem Embolar: Guia Prático"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Colocar Fio de Nylon na Roçadeira sem Embolar: <br />
            <span className="text-[#16A34A]">Guia Prático</span>
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
            Quem nunca passou pela frustração de ter o fio da roçadeira emaranhado, interrompendo o trabalho e exigindo paciência extrema para desembaraçar todo o conjunto mecânico?
          </p>
          <p>
            Essa situação incômoda, que é muito comum para quem cuida da manutenção do jardim ou sítio, pode ser facilmente evitada quando aplicamos a técnica correta de recarga do cabeçote.
          </p>
          <p>
            Entender o processo exato de como colocar nylon na roçadeira (tanto no carretel manual tradicional quanto no carretel automático bate-libera e em roçadeiras elétricas) economiza tempo precioso e garante um corte limpo.
          </p>
          <p>
            Para te ajudar nessa tarefa técnica, preparamos este passo a passo completo ensinando como colocar nylon no carretel da roçadeira e como colocar fio na roçadeira elétrica sem travamentos.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/como colocar fio na roçadeira​.webp"
              alt="Como colocar fio na roçadeira"
              title="Como Colocar Fio de Nylon na Roçadeira Passo a Passo"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Sumário Rápido de Navegação */}
          <nav aria-label="Sumário do guia de recarga de nylon" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-8 not-prose">
            <h2 className="text-base font-black text-[#1a1a1a] uppercase tracking-wide mb-3">
              Navegação Rápida deste Guia:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm font-semibold text-[#166534]">
              <li>
                <a href="#como-colocar-nylon-na-rocadeira" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Colocar Nylon na Roçadeira (2 Métodos)
                </a>
              </li>
              <li>
                <a href="#como-colocar-nylon-no-carretel-da-rocadeira" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Colocar Nylon no Carretel da Roçadeira
                </a>
              </li>
              <li>
                <a href="#passo-a-passo-detalhado" className="hover:underline flex items-center gap-2">
                  <span>→</span> Passo a Passo Detalhado sem Embolar
                </a>
              </li>
              <li>
                <a href="#como-colocar-fio-na-rocadeira-eletrica" className="hover:underline flex items-center gap-2">
                  <span>→</span> Como Colocar Fio na Roçadeira Elétrica
                </a>
              </li>
              <li>
                <a href="#tabela-medidas-cabecas-corte" className="hover:underline flex items-center gap-2">
                  <span>→</span> Tabela de Medidas por Cabeça de Corte
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
            3. MEDIDAS E NYLON IDEAL + MATERIAIS NECESSÁRIOS (CHECKLIST)
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Medidas e Nylon Ideal
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Escolher o diâmetro e o comprimento adequados do fio de nylon é um passo estratégico que vai muito além de uma simples preferência pessoal do operador.
          </p>
          <p>
            Trata-se de equilibrar a resistência de corte necessária para cada vegetação com a saúde mecânica do motor, evitando sobrecargas que danificam a transmissão da máquina.
          </p>
          <p>
            O tipo de nylon escolhido dita de forma direta como a máquina reagirá ao encontrar diferentes níveis de densidade de mato e obstáculos durante a limpeza do seu terreno.
          </p>
          <p>
            Se você ainda tem dúvida sobre espessuras e formatos (redondo, quadrado ou estrelado), confira nosso guia completo sobre{' '}
            <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#166534] hover:underline font-semibold">
              qual o melhor fio de nylon para roçadeira
            </a>
            .
          </p>
          <p>
            Assim, você terá a capacidade de realizar o corte com máxima eficiência, sem sobrecarregar o cabeçote ou forçar o conjunto motriz da sua roçadeira durante o uso intenso.
          </p>
        </div>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Materiais Necessários
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            Antes de iniciar qualquer procedimento de recarga do carretel, organize sua bancada de trabalho para ter tudo ao seu alcance e facilitar a execução da manutenção.
          </p>
          <p>
            Você precisará do seu rolo de nylon dimensionado e de um estilete ou alicate de corte afiado para garantir pontas perfeitamente limpas, já que fios desfiados costumam travar nos ilhós rapidamente.
          </p>
          <p>
            Manter um pano úmido por perto também ajuda significativamente, pois limpar os resíduos de grama seca e terra do interior do carretel antes da nova instalação evita travamentos prematuros.
          </p>
        </div>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#16A34A] text-white p-2.5 rounded-xl">
              <Wrench size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                Checklist de Bancada para Recarregar o Carretel
              </h3>
              <p className="text-sm text-gray-600 m-0">
                Separe estes 4 itens simples antes de abrir o cabeçote:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Fio de Nylon na Bitola Correta</span>
                <span className="text-xs text-gray-600">De 1,6 mm a 2,0 mm (elétricas) ou de 2,4 mm a 3,0 mm (a gasolina).</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Alicate de Corte ou Estilete Afiado</span>
                <span className="text-xs text-gray-600">Faz um corte reto sem amassar a ponta que vai passar pelo ilhós.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano Limpo ou Escova Macia</span>
                <span className="text-xs text-gray-600">Para remover terra seca das travas laterais e da mola central.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Luvas de Proteção Leves</span>
                <span className="text-xs text-gray-600">Protege os dedos ao pressionar as travas plásticas duras do cabeçote.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. COMO COLOCAR NYLON NA ROÇADEIRA (OS 2 MÉTODOS PRINCIPAIS)
            =================================================================== */}
        <section id="como-colocar-nylon-na-rocadeira" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter border-b-2 border-gray-100 pb-3">
            Como Colocar Nylon na Roçadeira: Os 2 Métodos Principais
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-6 space-y-4">
            <p>
              Existem dois sistemas principais de cabeçote no mercado, e saber identificar o seu é o segredo para recarregar em menos de dois minutos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MÉTODO 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Método 1
              </span>
              <h3 className="text-xl font-black text-[#1a1a1a] mb-3">
                Carretel Tradicional / Manual (Que Precisa Abrir)
              </h3>
              <ol className="space-y-2.5 text-sm text-gray-700 list-decimal list-inside">
                <li>Desligue a roçadeira e espere o motor e o cabeçote pararem por completo.</li>
                <li>Abra o carretel apertando as duas travas laterais ou desenroscando a porca central (rosca no sentido anti-horário para apertar e horário para soltar), cuidando para não perder a mola ou os ilhós.</li>
                <li>Corte cerca de 2 a 3 metros de fio de nylon e dobre ao meio para marcar o centro.</li>
                <li>Prenda a dobra do fio no rasgo ou gancho central que fica no meio da bobina.</li>
                <li>Divida as duas pernas do fio e enrole ambas no mesmo sentido das setas indicadas no carretel, sem deixar embolar ou cruzar.</li>
                <li>Deixe cerca de 15 cm de ponta livre em cada lado e trave-as nas pequenas fendas laterais da bobina para o fio não desenrolar sozinho.</li>
                <li>Passe cada ponta por dentro dos ilhós da carcaça, recoloque a mola, feche a tampa e puxe as pontas para destravar das fendas laterais.</li>
              </ol>
            </div>

            {/* MÉTODO 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Método 2
              </span>
              <h3 className="text-xl font-black text-[#1a1a1a] mb-3">
                Carretel Automático ou "Bate-Libera" (Sem Desmontar)
              </h3>
              <ol className="space-y-2.5 text-sm text-gray-700 list-decimal list-inside">
                <li>Alinhe as setas: gire a parte externa ou o botão central do carretel até alinhar as setas indicadas no botão com as setas dos ilhós da carcaça.</li>
                <li>Passe o fio: introduza um pedaço único de fio de nylon (geralmente de 3 a 5 metros) por um dos ilhós laterais, atravessando direto por dentro do carretel até sair do outro lado.</li>
                <li>Iguale as pontas: puxe o fio até que os dois lados fiquem exatamente com o mesmo comprimento.</li>
                <li>Recolha o nylon: segure firme a base do carretel e gire o botão central (ou a parte superior) para enrolar o fio automaticamente para dentro até restar cerca de um palmo (15 cm) de fio de cada lado.</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            5. TIPOS DE CARRETÉIS E COMO COLOCAR NYLON NO CARRETEL
            =================================================================== */}
        <h2 id="como-colocar-nylon-no-carretel-da-rocadeira" className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter scroll-mt-24">
          Tipos de Carretéis: Como Colocar Nylon no Carretel da Roçadeira
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Colocar o fio de nylon no carretel da roçadeira varia conforme a arquitetura interna do cabeçote (comum/manual, automático com desmontagem ou automático de carga rápida), mas dominar cada tipo evita que o fio se cruze e trave.
          </p>
          <p>
            Cada mecanismo possui uma engenharia própria que, quando bem compreendida, deixa de ser uma fonte de travamentos e passa a ser uma aliada na produtividade.
          </p>
          <p>
            Conhecer a fundo a lógica de operação do seu carretel é o requisito básico para realizar trocas seguras e rápidas no campo.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          1. Carretel Manual (Padrão com Desmontagem)
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Este modelo tradicional exige que você remova a tampa ou a porca central do carretel (lembrando que muitas roçadeiras possuem rosca contrária: sentido horário para soltar e anti-horário para apertar) para enrolar o fio manualmente nos trilhos internos.
          </p>
          <p>
            Embora peça alguns segundos a mais de atenção, o sistema manual oferece controle absoluto sobre a tensão do nylon e a forma como ele é distribuído.
          </p>
          <p>
            Ao prender a dobra central de um fio de 2 a 3 metros no gancho interno e organizar as duas pontas de forma paralela no mesmo sentido das setas, você elimina quase totalmente o risco de o fio travar durante a roçada.
          </p>
          <p>
            Nunca enrole um lado para a direita e outro para a esquerda, pois isso cruza as linhas e trava a saída do nylon.
          </p>
          <p>
            Deixe os últimos centímetros presos nas fendas laterais da bobina, passe as pontas pelos ilhós, recoloque a mola, feche a tampa e puxe as pontas para destravar.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          2. Carretel Automático com Desmontagem (Semiautomático Bate-Libera)
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            Esses modelos modernos priorizam a praticidade do operador, permitindo que você libere mais fio apenas batendo levemente o botão central do cabeçote contra o solo com a máquina acelerada.
          </p>
          <p>
            A montagem correta desse sistema exige atenção estrita ao sentido de rotação indicado pelas setas na bobina plástica, para que a força centrífuga libere o fio na direção certa.
          </p>
          <p>
            Ao remover a tampa pelas duas travas laterais para iniciar o reabastecimento, certifique-se de que a mola central esteja limpa e perfeitamente encaixada na sua sede antes de fechar o conjunto.
          </p>
          <p>
            Manter a mola livre de pequenos detritos de grama e terra é essencial para que o sistema de avanço automático não fique duro durante o trabalho.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          3. Carretel Automático sem Desmontagem (Carga Fácil / Easy Load)
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A conveniência suprema reina neste tipo de mecanismo: basta girar a parte externa até alinhar as setas do carretel, inserir o fio de nylon por um dos furos laterais atravessando até sair do outro lado e igualar o comprimento das duas pontas.
          </p>
          <p>
            Em seguida, você segura a base do carretel e gira o botão central para recolher o fio automaticamente para dentro até restar cerca de um palmo de fio de cada lado.
          </p>
          <p>
            É a solução ideal para quem busca agilidade extrema no campo, eliminando completamente a necessidade de abrir a tampa ou manusear a mola interna.
          </p>
        </div>

        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/1/Tipos de Carretéis e Como Trocar o Nylon.webp"
            alt="Tipos de Carretéis e Como Trocar o Nylon"
            title="Tipos de Carretéis de Roçadeira: Manual e Automático"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO DETALHADO: COMO TROCAR O NYLON DA ROÇADEIRA
            =================================================================== */}
        <h2 id="passo-a-passo-detalhado" className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter scroll-mt-24">
          Passo a Passo: Como Trocar o Nylon da Roçadeira sem Embolar
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A substituição periódica do fio de corte, embora pareça uma tarefa simples, exige um procedimento metódico para evitar que o nylon embole ou derreta dentro do cabeçote.
          </p>
          <p>
            Pequenos detalhes técnicos durante o manuseio da bobina interna e a forma exata como o fio é preso e tensionado determinam se a roçadeira funcionará de maneira equilibrada ou se travará na primeira aceleração.
          </p>
          <p>
            Confira abaixo a sequência mecânica completa em 5 etapas:
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                1
              </span>
              Preparação e Corte Limpo do Nylon
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                O segredo técnico de uma recarga impecável começa na execução de um corte reto e limpo no fio sintético.
              </p>
              <p>
                Utilize um alicate de corte ou um estilete bem afiado para cortar um pedaço único de 2 a 4 metros (para carretéis onde o fio vai dobrado ao meio) ou dois segmentos idênticos de 2,5 a 3,5 metros, conforme o modelo da sua cabeça de corte.
              </p>
              <p>
                Evite o uso de tesouras cegas ou facas serrilhadas, pois qualquer rebarba na ponta do fio dificulta a passagem pelos ilhós e pode fazer com que o plástico trave dentro das canaletas durante a alta rotação.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                2
              </span>
              Abertura da Tampa do Carretel
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                Antes de começar, vale diferenciar abrir a tampa de tirar o carretel do eixo: na grande maioria dos carretéis você só precisa apertar as duas travas plásticas laterais para remover a tampa e retirar a bobina interna, sem precisar desrosquear o carretel inteiro do eixo da máquina.
              </p>
              <p>
                Com a roçadeira desligada e apoiada em local firme, pressione as duas abas laterais simultaneamente e puxe a tampa externa.
              </p>
              <p>
                Ao retirar a bobina interna para a recarga, aproveite para limpar restos de grama e terra acumulados e verifique se a mola central está bem encaixada e em bom estado.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                3
              </span>
              Encaixe do Nylon (A Dobra Central)
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                O posicionamento correto do fio na bobina é o passo mais importante para impedir que ele se solte ou cruze sob alta rotação centrífuga.
              </p>
              <p>
                Pegue o pedaço único de 2 a 4 metros, dobre o fio exatamente ao meio para igualar as duas pontas e prenda a dobra na fenda ou gancho central da divisória da bobina interna, dividindo um fio para cada canaleta (superior e inferior).
              </p>
              <p>
                Caso o seu carretel trabalhe com dois fios separados em vez de peça única dobrada, encaixe a ponta de cada segmento nos dois orifícios internos de fixação da bobina, mantendo cada fio em seu próprio trilho.
              </p>
              <p>
                Evite deixar folgas nesse encaixe inicial, pois qualquer espaço frouxo na base facilita o emaranhamento das voltas seguintes.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                4
              </span>
              Enrolando o Nylon e Prendendo nas Ranhuras Laterais
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                Observe atentamente as setas indicativas de direção gravadas em alto relevo na bobina interna e enrole as duas pernas do fio simultaneamente nesse exato sentido.
              </p>
              <p>
                Mantenha uma tensão firme e constante com os dedos, organizando cada volta de maneira paralela à anterior dentro de sua respectiva canaleta, sem cruzar os fios, até restarem cerca de 15 a 20 cm em cada ponta.
              </p>
              <p>
                Antes de passar as pontas pelos ilhós (furos de metal da carcaça), prenda as duas pontas nas fendas ou ranhuras laterais da bobina para o fio não desenrolar na sua mão enquanto você encaixa a peça de volta na tampa.
              </p>
              <p>
                Esse simples travamento temporário mantém toda a pressão do enrolamento intacta durante o fechamento do cabeçote.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                5
              </span>
              Fechamento e Reinstalação do Carretel
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                Com as pontas presas nas ranhuras laterais da bobina, passe cada extremidade pelos dois ilhós metálicos opostos da carcaça do carretel e encaixe a bobina sobre a mola central.
              </p>
              <p>
                Depois de passar pelos ilhós, basta puxar as duas pontas para fora com firmeza para soltar o fio das travas temporárias laterais, ouvindo o estalo do nylon se acomodando na bobina.
              </p>
              <p>
                Agora alinhe a tampa externa e pressione-a até que as duas travas plásticas laterais façam o clique de fechamento seguro.
              </p>
              <p>
                Por fim, confira se as duas pontas de nylon estão livres e com tamanho semelhante, pois a própria lâmina limitadora na saia de proteção cortará o excesso automaticamente na primeira acelerada.
              </p>
            </div>
          </section>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/Passo a Passo para Troca do Nylon.webp"
              alt="Passo a Passo para Troca do Nylon"
              title="Passo a Passo para Trocar o Fio de Nylon da Roçadeira"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ===================================================================
            7. COMO COLOCAR FIO NA ROÇADEIRA ELÉTRICA (SEÇÃO DEDICADA)
            =================================================================== */}
        <section id="como-colocar-fio-na-rocadeira-eletrica" className="mt-16 pt-10 border-t-2 border-gray-100 scroll-mt-24">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Modelos Elétricos e a Bateria
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Como Colocar Fio na Roçadeira Elétrica (Passo a Passo)
            </h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Para colocar o fio de nylon em uma roçadeira elétrica ou aparador de grama (como os modelos da Trapp, Tramontina, Tekna, Stihl e Husqvarna Brasil), o processo segue etapas rápidas e exige cuidado especial com a espessura da linha (geralmente entre 1,6 mm e 2,0 mm) para não forçar o motor elétrico:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  1. Desligue a Máquina da Tomada ou Remova a Bateria
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Sempre retire o plugue da extensão elétrica da tomada ou desconecte a bateria antes de tocar no cabeçote, pois motores elétricos partem instantaneamente se o gatilho for esbarrado.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  2. Abra o Carretel com Cuidado nas Travas
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Pressione as duas travas plásticas laterais da tampa (ou desenrosque a tampa central conforme o formato do seu modelo) e retire o carretel interno, prestando atenção à mola e às pequenas peças internas para não perdê-las na grama.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  3. Prepare o Fio de Nylon (2 a 3 Metros)
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Corte um pedaço de fio de nylon na bitola recomendada pelo fabricante (normalmente de 2 a 3 metros) e dobre o fio ao meio para marcar o centro exato.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  4. Encaixe o Centro e Enrole no Sentido das Setas
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Prenda a dobra central do fio no gancho ou orifício interno do carretel, enrole as duas pontas firme e paralelamente no mesmo sentido indicado pelas setas gravadas no plástico e deixe as pontas finais travadas nas fendas laterais.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  5. Monte Novamente e Solte das Travas de Retenção
                </h3>
                <p className="text-sm text-gray-700 m-0">
                  Passe as pontas do fio pelos ilhós (orifícios de saída) da tampa ou da base, recoloque a mola, encaixe o carretel fechando a tampa até ouvir o clique das travas e puxe as duas pontas para soltar o fio das fendas de retenção.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. HIDRATAÇÃO DO FIO E TABELA DE MEDIDAS POR CABEÇA DE CORTE
            =================================================================== */}
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">
          Cabeças de Corte: Como Preparar e Armazenar os Fios de Nylon Corretamente
        </h2>
        <div className="w-full flex justify-center my-8">
          <img
            src="/images/blog/1/Cabeças de corte Preparar os fios de corte para enrolar e armazená-los corretamente.webp"
            alt="Cabeças de corte: preparar os fios de corte para enrolar e armazená-los corretamente"
            title="Preparação e Hidratação dos Fios de Nylon"
            width={800}
            height={533}
            className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-5">
          <p>
            A longevidade útil do seu fio de nylon depende grandemente de um fator químico frequentemente ignorado: o nível de hidratação da poliamida.
          </p>
          <p>
            Com o passar do tempo e a exposição ao calor seco, o nylon perde sua umidade estrutural e torna-se quebradiço ao bater em cercas, meios-fios ou caules lenhosos.
          </p>
          <p>
            O truque de oficina utilizado por profissionais para contornar esse ressecamento é mergulhar a bobina ou o rolo de nylon em um recipiente com água limpa por 24 horas antes do uso.
          </p>
          <p>
            Além disso, guarde seus rolos de reposição sempre ao abrigo do sol direto para preservar a elasticidade do material em cabeçotes como as linhas AutoCut, SuperCut, TrimCut, PolyCut e DuroCut.
          </p>
        </div>

        <section id="tabela-medidas-cabecas-corte" className="my-10 scroll-mt-24">
          <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
            Tabela de Comprimento e Espessura por Cabeça de Corte
          </h3>
          <div className="overflow-x-auto shadow-sm rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-left text-gray-700 bg-white text-sm">
              <thead className="bg-[#1a1a1a] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider">Modelo da Cabeça de Corte</th>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider">Quantidade e Comprimento de Fio</th>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider">Espessura (Diâmetro) Padrão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut 2-2 / C 3-2</td><td className="px-6 py-3">1 fio de 5 m (ou 2 x 2,5 m)</td><td className="px-6 py-3 text-[#166534] font-semibold">1,6 mm a 2,0 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut C 4-2</td><td className="px-6 py-3">2 fios de 2,5 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut 5-2</td><td className="px-6 py-3">2 fios de 3 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,0 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut C 6-2</td><td className="px-6 py-3">1 fio de 4 m (dobrado ao meio)</td><td className="px-6 py-3 text-[#166534] font-semibold">2,0 mm a 2,4 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut 25-2</td><td className="px-6 py-3">2 fios de 3,5 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,4 mm a 2,7 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut C 26-2</td><td className="px-6 py-3">1 fio de 7 m (dobrado ao meio)</td><td className="px-6 py-3 text-[#166534] font-semibold">2,4 mm a 2,7 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">AutoCut 36-2 / 46-2 / 56-2</td><td className="px-6 py-3">2 fios de 4 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,7 mm a 3,3 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">SuperCut 20-2</td><td className="px-6 py-3">2 fios de 3 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,4 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">SuperCut 40-2</td><td className="px-6 py-3">1 fio de 7,5 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,4 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">TrimCut C 32-2 / C 42-2 / C 52-2</td><td className="px-6 py-3">1 fio de 8 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,4 mm a 3,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">PolyCut 2-2 / 3-2 / 6-2</td><td className="px-6 py-3">2 fios de 0,15 m a 0,20 m</td><td className="px-6 py-3 text-[#166534] font-semibold">1,6 mm a 2,4 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">DuroCut 5-2 / 20-2</td><td className="px-6 py-3">2 pedaços de 0,20 m</td><td className="px-6 py-3 text-[#166534] font-semibold">2,0 mm a 3,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-bold text-gray-900">DuroCut 40-4</td><td className="px-6 py-3">4 pedaços de 0,25 m</td><td className="px-6 py-3 text-[#166534] font-semibold">3,0 mm a 4,0 mm</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            9. ALERTA DE SEGURANÇA, ERROS COMUNS E MAIS DICAS
            =================================================================== */}
        <section className="my-12 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Alerta de Segurança Antes de Abrir o Carretel
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  Nas roçadeiras a gasolina, desligue a chave Stop e aguarde a parada total do cabeçote; nas roçadeiras elétricas, tire sempre o plugue da tomada antes de encostar as mãos no carretel.
                </p>
                <p>
                  Nunca trabalhe sem a saia de proteção instalada: ela abriga a faca limitadora que mantém o fio no comprimento exato para não forçar a embreagem nem o motor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros Comuns ao Colocar Nylon e Como Evitá-los
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h3>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Enrolar uma perna do fio para a direita e a outra para a esquerda.</li>
                <li>Deixar o fio frouxo ou cruzado dentro da bobina (derrete por atrito).</li>
                <li>Colocar fio grosso demais (3,0 mm) em aparadores elétricos leves.</li>
                <li>Usar arame de aço no lugar do fio de nylon (altíssimo risco de estilhaços graves).</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h3>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Seguir rigorosamente a seta de direção gravada na bobina para os dois lados.</li>
                <li>Travar as pontas nas fendas laterais antes de passar pelos ilhós metálicos.</li>
                <li>Deixar o rolo de nylon de molho em água por 24h se estiver ressecado.</li>
                <li>Limpar a grama enrolada na ponteira e na mola a cada troca de refil.</li>
              </ul>
            </div>
          </div>
        </section>

        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tighter">
          Mais Dicas para Roçadeiras
        </h2>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            O bom desempenho da roçadeira vai além dos cuidados com o carretel de nylon: uma manutenção preventiva simples garante que o motor trabalhe sempre na rotação certa e sem falhas.
          </p>
          <p>
            Adotar pequenas rotinas de verificação antes e depois do corte prolonga a vida útil dos componentes da transmissão e preserva a segurança do operador em qualquer terreno.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Como substituir uma ferramenta de corte da roçadeira?
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-8 space-y-5">
          <p>
            Para alternar entre a lâmina de aço e o cabeçote de nylon, você deve sempre desligar o motor, travar a transmissão inserindo o pino metálico no furo da ponteira e soltar a porca girando no sentido horário (pois a rosca é esquerda/inversa).
          </p>
          <p>
            Se você está montando sua máquina pela primeira vez, veja também o passo a passo completo de{' '}
            <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] hover:underline font-semibold">
              como montar roçadeira e acoplar o carretel
            </a>
            .
          </p>
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Dicas para a manutenção da roçadeira
        </h3>
        <div className="prose prose-lg text-gray-700 max-w-none mb-12 space-y-5">
          <p>
            Após cada sessão de trabalho em mato denso, dedique cinco minutos para remover restos fibrosos de grama enrolados na ponteira de transmissão e limpar a proteção da faca limitadora.
          </p>
          <p>
            Caso perceba que o cabeçote continua girando sozinho mesmo quando você solta o acelerador na marcha lenta, faça o ajuste rápido ensinado em nosso guia de{' '}
            <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
              como regular o carburador e a lenta da roçadeira
            </a>
            .
          </p>
        </div>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section id="perguntas-frequentes" className="mt-16 pt-8 border-t border-gray-200 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Como Colocar Fio na Roçadeira
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
            11. CONSIDERAÇÕES FINAIS E DICA DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Considerações Finais
            </h2>
            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-5">
              <p>
                Dominar a recarga rápida do fio de nylon é o verdadeiro divisor de águas entre um trabalho produtivo e horas perdidas tentando destravar o carretel no meio do terreno.
              </p>
              <p>
                Ao aplicar os métodos de dobra central, fixação nas ranhuras laterais e hidratação prévia do fio de nylon, você garante que o carretel libere a linha suavemente e sem derreter por atrito interno.
              </p>
              <p>
                Agora que você conhece a medida certa para a sua cabeça de corte e o sentido correto de enrolamento, coloque esse passo a passo em prática na sua próxima roçada para obter um corte limpo, seguro e contínuo.
              </p>
            </div>
          </div>

          {/* Box Dica de Uso / Especialista */}
          <div className="mt-8 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl flex items-start gap-4 shadow-sm">
            <div className="text-[#16A34A] shrink-0 mt-1">
              <Lightbulb size={28} />
            </div>
            <div>
              <h3 className="text-lg font-black text-green-950 uppercase tracking-wide mb-2">
                Dica de Uso do Especialista
              </h3>
              <div className="space-y-2 text-sm text-green-900 leading-relaxed">
                <p className="m-0">
                  Mantenha o interior da bobina e os ilhós metálicos sempre livres de terra seca e confira se a lâmina limitadora na saia de proteção está firme e afiada para cortar o excesso de fio no tamanho exato.
                </p>
                <p className="m-0">
                  Ao adotar esses cuidados simples de limpeza e enrolamento sob tensão constante, você previne os travamentos e o desgaste prematuro do cabeçote tanto nas roçadeiras a gasolina quanto nas elétricas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
