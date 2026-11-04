/**
 * ============================================================================
 * GUIA MESTRE E PADRÃO DE CRIAÇÃO DE ARTIGOS INFORMATIVOS E TUTORIAIS
 * (NOTA 100 NO PAGESPEED INSIGHTS — PASSO A PASSO, MANUTENÇÃO E "COMO FAZER")
 * Arquivo de Referência Universal — Guia do Roçador (Especialistas em Roçadeiras)
 * ============================================================================
 *
 * OBJETIVO DESTE ARQUIVO:
 * Servir como documentação definitiva, molde de código (.tsx / .astro) e
 * template de prompt genérico para criar QUALQUER artigo INFORMATIVO, TUTORIAL
 * ou GUIA PRÁTICO (ex.: "Como Colocar Fio", "Como Desafogar", "Como Regular",
 * "Como Montar", "Como Ligar") no Guia do Roçador mantendo 100 pontos no
 * Google PageSpeed (Performance, Acessibilidade, Práticas Recomendadas e SEO),
 * alta retenção do leitor, didática impecável e conversão sutil em ferramentas/peças.
 *
 * ----------------------------------------------------------------------------
 * PARTE 0: QUESTIONÁRIO PRÉ-ARTIGO (PERGUNTAS OBRIGATÓRIAS ANTES DE ESCREVER)
 * ----------------------------------------------------------------------------
 * Quando o usuário pedir: "olhe no GuiaPadraoArtigoInformativo.tsx e me faça as perguntas"
 * (ou quando for iniciar um novo tutorial/artigo informativo), o assistente/IA
 * DEVE fazer exatamente as seguintes perguntas no chat e aguardar as respostas:
 *
 * ❓ 1. BANCOS DE DADOS E COMPONENTES ESPECÍFICOS DO ARTIGO:
 *    - Qual arquivo de catálogo de artigos deve receber este tutorial?
 *      • `src/data/articlesrocadeiras.ts` (Atualmente ativo no site)
 *      *(À medida que novos catálogos de nicho forem criados para outros equipamentos, adicione-os nesta lista como opções)*
 *
 *    - Qual arquivo de banco de produtos deve ser usado para registrar/vincular ferramentas e materiais recomendados?
 *      • `src/data/productsrocadeira.ts` (Atualmente ativo no site)
 *      *(À medida que novos bancos de produtos forem criados, adicione-os nesta lista como opções)*
 *
 *    - Qual componente de Banner do Meio deve ser importado?
 *      • Opção 1: `src/components/roçadeiras/BunnerDoMeiorocadeira.tsx` (Focado em Roçadeiras a Gasolina/Elétricas)
 *      • Opção 2: `src/components/roçadeiras/BunnerDoMeiofiodenylonpararocadeira.tsx` (Focado em Fios de Nylon e Acessórios)
 *      *(À medida que novos banners temáticos forem criados no projeto, adicione-os nesta lista como opções)*
 *
 *    - Qual componente de Exit Intent Popup deve ser importado?
 *      • Opção 1: `src/components/roçadeiras/ExitIntentPopuprocadeira.tsx` (Focado em Roçadeiras a Gasolina/Elétricas)
 *      • Opção 2: `src/components/roçadeiras/ExitIntentPopupfiodenylonpararocadeira.tsx` (Focado em Fios de Nylon e Acessórios)
 *      *(À medida que novos popups temáticos forem criados no projeto, adicione-os nesta lista como opções)*
 *
 * ❓ 2. PALAVRA-CHAVE PRINCIPAL, TÍTULO TUTORIAL E URL (SLUG):
 *    - Qual a palavra-chave principal (foco de SEO)? (ex.: "como desafogar roçadeira", "como regular carburador", "como colocar fio na roçadeira")
 *    - Qual o título H1 didático e persuasivo do tutorial? (ex.: "Como Desafogar Roçadeira em 2 Minutos [Passo a Passo]")
 *    - Qual será a URL amigável / slug exato da página Astro? (ex.: `src/pages/[slug-do-artigo].astro` -> `/[slug-do-artigo]`)
 *
 * ❓ 3. AUTOR DO ARTIGO:
 *    - Quem é o autor responsável pelo artigo?
 *      • `carlos-henrique` (Carlos Henrique Menezes — Técnico em Mecânica de Equipamentos, especialista em motores 2T/4T, carburação e regulagem)
 *      • `jose-ailton` (José Ailton da Silva — Especialista Operacional em Roçadeiras, com mais de 10 anos lidando com operação diária, fios e lâminas)
 *      • `murilo` (Murilo — Fundador e Revisor Editorial)
 *    *(Isso define a assinatura "Por [Foto 32x32] [Nome]" com link para `/author/[slug]/` logo abaixo do H1)*
 *
 * ❓ 4. DIAGNÓSTICO DO PROBLEMA E MATERIAIS / FERRAMENTAS:
 *    - Qual é o problema ou dúvida central que o leitor quer resolver? (ex.: máquina afogada, fio de nylon quebrando ou embolando, motor engasgando na aceleração)
 *    - Quais materiais e ferramentas serão necessários na bancada? (ex.: chave de vela, alicate de bico, pano limpo, fio de nylon novo, óleo 2T, etc.)
 *    - Há produtos ou insumos específicos cadastrados em `src/data/productsrocadeira.ts` que devem ser linkados (afiliado) na lista de materiais?
 *
 * ❓ 5. QUANTIDADE E NOME DAS ETAPAS DO PASSO A PASSO:
 *    - Quantas etapas compõem o procedimento prático? (ex.: 3 a 5 passos claros)
 *    - Quais são os títulos de cada passo?
 *    - Você já tem as imagens ilustrativas de cada etapa salvas em `/public/images/blog/` em formato `.webp` (800x533)?
 *
 * ----------------------------------------------------------------------------
 * PARTE 1: OS SEGREDOS DOS 100 PONTOS NO PAGESPEED (OBRIGATÓRIO SEGUIR)
 * ----------------------------------------------------------------------------
 *
 * 1. ARQUIVO DA PÁGINA ASTRO (`src/pages/[slug-do-artigo].astro`):
 *    - Hidratação Inteligente: Use SEMPRE `client:idle` no componente React
 *      (`<NomeDoComponente client:idle />`) em vez de `client:load`.
 *      Isso entrega o HTML 100% renderizado instantaneamente e só carrega o JS
 *      interativo (FAQ) quando o navegador estiver livre (TBT = 0).
 *    - Exemplo exato do arquivo `.astro`:
 *      ```astro
 *      ---
 *      import { Header } from '../components/Header';
 *      import { ComoNomeDoArtigo } from '../components/roçadeiras/ComoNomeDoArtigo';
 *      import { Footer } from '../components/Footer';
 *      import { CookieConsent } from '../components/CookieConsent';
 *      import { ExitIntentPopuprocadeira as ExitIntentPopup } from '../components/roçadeiras/ExitIntentPopuprocadeira';
 *      import '../styles/global.css';
 *
 *      const title = "Como Desafogar Roçadeira em 2 Minutos [Passo a Passo] | Guia do Roçador";
 *      const description = "Aprenda o passo a passo mecânico comprovado para desafogar sua roçadeira em minutos e voltar ao trabalho sem danificar a vela ou o motor.";
 *      const canonicalUrl = "https://guiadorocador.com.br/como-desafogar-rocadeira";
 *      const ogImage = "/images/blog/como desafogar roçadeira.webp";
 *      ---
 *      <!doctype html>
 *      <html lang="pt-BR">
 *        <head>
 *          <meta charset="UTF-8" />
 *          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 *          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
 *          <title>{title}</title>
 *          <meta name="description" content={description} />
 *          <link rel="canonical" href={canonicalUrl} />
 *          <meta property="og:title" content={title} />
 *          <meta property="og:description" content={description} />
 *          <meta property="og:image" content={ogImage} />
 *        </head>
 *        <body class="bg-gray-50 flex flex-col min-h-screen m-0 w-full antialiased text-[#1a1a1a]">
 *          <Header client:load />
 *          <main class="flex-grow">
 *            <ComoNomeDoArtigo client:idle />
 *          </main>
 *          <Footer />
 *          <CookieConsent client:load />
 *          <ExitIntentPopup client:load />
 *        </body>
 *      </html>
 *      ```
 *
 * 2. ÍCONES SVG INLINE (ZERO PESO EXTRA NO CLIENTE):
 *    - Declare SVGs enxutos diretamente no topo do arquivo `.tsx` (`Check`, `AlertTriangle`,
 *      `Wrench`, `Info`, `ChevronDown`, `ChevronUp`, `ShieldAlert`, `Lightbulb`, `Clock`).
 *    - Isso elimina pacotes pesados como react-icons e garante TBT = 0 ms.
 *
 * 3. OTIMIZAÇÃO DE LCP (IMAGEM DO HERO / TOPO):
 *    - A imagem de fundo do Hero é o elemento LCP (Largest Contentful Paint).
 *    - Ela DEVE conter:
 *      • `fetchPriority="high"` (com "P" maiúsculo no React/JSX)
 *      • Sem `loading="lazy"` (ou `loading="eager"`)
 *      • Dimensões explícitas `width={800} height={533}`
 *      • `opacity-25 blur-sm` + gradiente escuro `#1a1a1a` para contraste máximo (Acessibilidade 100).
 *
 * 4. IMAGENS DAS ETAPAS E MATERIAIS (CLS = 0):
 *    - Todas as imagens do corpo do tutorial DEVEM ter `loading="lazy"`.
 *    - Sempre declare `width={800} height={533}` explícitos para travar o layout contra saltos.
 *    - Avatar do autor no topo com `width={32} height={32}`, `alt="" aria-hidden="true"`
 *      quando dentro de link com texto visível do autor (evita a falha `image-redundant-alt`).
 *    - Pipeline de imagens: converta sempre para `.webp` rodando `npm run optimize-images`.
 *
 * 5. PALETA OFICIAL DO GUIA DO ROÇADOR (WCAG AAA):
 *    - Verde Primário de Ação / Destaques: `#16A34A` (Verde Esmeralda)
 *    - Verde Hover nos Botões: `#15803d`
 *    - Verde de Alto Contraste para Textos/Notas: `#166534` (contraste superior a 8:1 AAA)
 *    - Badges e Selos Numéricos: `bg-[#16A34A] text-white font-black`
 *    - Badges Suaves: `bg-[#F0FDF4] border-[#16A34A]/30 text-[#166534]`
 *    - Fundo Escuro Nobre: `#1a1a1a` com realces em `#16A34A`
 *    - Box de Alerta de Segurança: `bg-amber-50 border-l-4 border-amber-500 text-amber-900`
 *    - Box de Dica do Especialista: `bg-green-50 border-l-4 border-[#16A34A] text-green-950`
 *
 * 6. REGRA ABSOLUTA DE FORMATAÇÃO DE TEXTO:
 *    - NUNCA coloque palavras, termos técnicos ou frases em negrito (<b> ou <strong>)
 *      no meio dos parágrafos de texto corrido. O texto deve ser limpo e agradável.
 *    - A cada ponto final (`.`), DEVE haver uma quebra de parágrafo (`<p>...</p>`).
 *    - Cada parágrafo deve ter entre 1 e 3 linhas no máximo.
 *
 * ----------------------------------------------------------------------------
 * PARTE 2: ANATOMIA COMPLETA DO ARTIGO TUTORIAL / INFORMATIVO
 * ----------------------------------------------------------------------------
 *
 * 1. HERO ESCURO (`#1a1a1a`):
 *    - Imagem de fundo com `opacity-25 blur-sm` e gradiente escuro.
 *    - Título `<h1>` centralizado: primeira linha em branco e gancho destacado em `<span className="text-[#16A34A]">`.
 *    - Assinatura do autor: `"Por"` + link `/author/[slug-do-autor]/` com avatar circular 32x32.
 *
 * 2. INTRODUÇÃO DIDÁTICA:
 *    - Parágrafo lead com destaque visual (`border-l-4 border-[#16A34A] pl-6 py-2`).
 *    - Imagem contextual ampla (`800x533 .webp`) mostrando a máquina ou o problema na bancada.
 *
 * 3. DIAGNÓSTICO DO PROBLEMA ("O QUE ACONTECE / CAUSAS"):
 *    - `<h2>` explicando em termos claros a mecânica por trás do problema (ex.: excesso de gasolina na câmara, nylon ressecado, entrada de ar falsa no carburador).
 *
 * 4. MATERIAIS E FERRAMENTAS NECESSÁRIAS:
 *    - `<h2>` detalhando o que separar antes de iniciar o trabalho (chave de vela, pano, alicate, graxa, etc.).
 *    - Checklist escaneável com ícones de `Check`.
 *    - Menção ou link sutil para acessórios/ferramentas recomendadas em `src/data/productsrocadeira.ts`.
 *
 * 5. BANNER DO MEIO:
 *    - Componente `<BannerDoMeio />` centralizado no momento exato de transição para a prática.
 *
 * 6. PASSO A PASSO PRÁTICO NUMERADO (O CORAÇÃO DO ARTIGO):
 *    - `<h2>` do Passo a Passo.
 *    - Cada etapa é um `<section>` com `<h3>` contendo o badge numérico circular (`bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center`).
 *    - Explicação passo a passo em parágrafos de 1 a 3 linhas.
 *    - Fotos ilustrativas intercaladas entre as etapas chave.
 *
 * 7. BOX DE ALERTA DE SEGURANÇA E EPIS:
 *    - Box com `bg-amber-50 border-l-4 border-amber-500` com ícone `AlertTriangle`, instruindo a desconectar o cachimbo da vela e usar luvas antes de manusear lâminas ou motor quente.
 *
 * 8. ERROS COMUNS E COMO EVITÁ-LOS:
 *    - Box ou tabela comparativa listando os erros que os operadores mais cometem e o que fazer para prevenir danos mecânicos caros.
 *
 * 9. DICAS DE MANUTENÇÃO PREVENTIVA:
 *    - Recomendações pós-uso para que o operador nunca mais volte a sofrer com a pane.
 *
 * 10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL):
 *     - Dúvidas reais pesquisadas no Google com respostas práticas em sanfona.
 *
 * 11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE):
 *     - Card escuro (`bg-[#1a1a1a] text-white`) com borda superior verde (`#16A34A`), reforçando a autonomia do operador.
 *
 * 12. BOX "DICA DO ESPECIALISTA":
 *     - Box verde (`bg-green-50 border-l-4 border-[#16A34A]`) com ícone de lâmpada/info, trazendo o "pulo do gato" prático de oficina.
 *
 * ----------------------------------------------------------------------------
 * PARTE 3: TEMPLATE DE PROMPT GENÉRICO (COPIE E PREENCHA PARA NOVOS TUTORIAIS)
 * ----------------------------------------------------------------------------
 *
 * Para solicitar à IA um novo artigo tutorial, copie o modelo abaixo:
 *
 * ```markdown
 * Por favor, crie um novo artigo informativo/tutorial para o Guia do Roçador seguindo rigorosamente o GuiaPadraoArtigoInformativo.tsx:
 * 1. Dados e Componentes:
 *    - Catálogo: `src/data/articlesrocadeiras.ts`
 *    - Banco de Produtos: `src/data/productsrocadeira.ts`
 *    - Banner do Meio: `src/components/roçadeiras/BunnerDoMeiorocadeira.tsx`
 *    - Exit Intent Popup: `src/components/roçadeiras/ExitIntentPopuprocadeira.tsx`
 * 2. Tema e SEO:
 *    - Palavra-chave principal: [Palavra-Chave]
 *    - Título H1: Como [Ação Prática] em [X] Passos: [Gancho]
 *    - Slug da Página Astro: /[slug-do-artigo]
 * 3. Autor:
 *    - `jose-ailton` (José Ailton da Silva) ou `carlos-henrique` (Carlos Henrique Menezes)
 * 4. Diagnóstico e Materiais:
 *    - Problema abordado: [Descrição do problema]
 *    - Materiais necessários: [Lista de ferramentas/insumos]
 * 5. Passo a Passo:
 *    - Etapas práticas: [Passo 1: ..., Passo 2: ..., Passo 3: ..., Passo 4: ...]
 * 6. Imagens:
 *    - Formato `.webp`, dimensões `800x533` em `/public/images/blog/`
 * ```
 * ============================================================================
 */

import React, { useState } from 'react';
import { products } from '../data/productsrocadeira';
import { BunnerDoMeiorocadeira as BannerDoMeio } from './roçadeiras/BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira as ExitIntentPopup } from './roçadeiras/ExitIntentPopuprocadeira';

// Ícones SVG Inline Leves (Zero JS extra no bundle, PageSpeed 100)
const Check = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const Info = ({ size = 28, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const ChevronDown = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ShieldAlert = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Lightbulb = ({ size = 28, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const Clock = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

/**
 * COMPONENTE EXEMPLO OFICIAL — ARTIGO INFORMATIVO / HOW-TO
 * Serve como referência técnica visual e estrutural para qualquer tutorial do Guia do Roçador.
 */
export const GuiaPadraoArtigoInformativo: React.FC = () => {
  // Estado do FAQ Expansível
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dados do FAQ Informativo
  const faqData = [
    {
      question: "Quantas puxadas na cordinha são necessárias até o motor dar sinal?",
      answer: [
        "Normalmente, entre 3 a 5 puxadas firmes com o afogador acionado são suficientes para o motor emitir o primeiro estalo de ignição.",
        "Assim que você ouvir esse sinal característico, desarme imediatamente a alavanca do afogador para não encharcar a câmara com excesso de combustível."
      ]
    },
    {
      question: "Por que a vela fica molhada de gasolina?",
      answer: [
        "Quando tentamos dar a partida repetidas vezes com a passagem de ar bloqueada pelo afogador, a bomba do carburador continua injetando gasolina sem que haja faísca suficiente para queimar o combustível.",
        "Esse combustível líquido se deposita nos eletrodos da vela, impedindo que a faísca elétrica salte e ligue o motor."
      ]
    },
    {
      question: "Preciso trocar a vela toda vez que a máquina afogar?",
      answer: [
        "Não, na grande maioria das situações basta retirar a vela, secá-la bem com um pano limpo ou passar uma lixa fina suavemente entre os eletrodos.",
        "Apenas substitua a vela se ela apresentar trincas na cerâmica branca ou corrosão severa no eletrodo central."
      ]
    }
  ];

  // Ferramenta sugerida vinculada ao banco de dados do projeto (productsrocadeira.ts)
  const kitOleo = products["kit-misturador-oleo-2t"];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/como desafogar roçadeira.webp"
            alt="Operador realizando manutenção técnica em roçadeira a gasolina na oficina"
            title="Como Desafogar Roçadeira em Poucos Minutos"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge Informativo de Tempo Estimado */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-green-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Clock size={14} />
            <span>Tempo Estimado: 2 a 5 Minutos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Como Desafogar Roçadeira em 2 Minutos <br />
            <span className="text-[#16A34A]">[Passo a Passo Prático]</span>
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
            Puxar a cordinha de arranque dezenas de vezes sem ouvir o motor pegar é uma das maiores frustrações de quem precisa limpar o terreno.
          </p>
          <p>
            Na grande maioria das vezes em que o motor se recusa a dar sinal de vida, o problema não é mecânico nem elétrico grave.
          </p>
          <p>
            Trata-se simplesmente de afogamento da câmara de combustão, uma condição temporária provocada pelo excesso de combustível líquido acumulado no cilindro.
          </p>
          <p>
            Com a técnica mecânica correta, você consegue drenar o cilindro, secar a vela e colocar o equipamento para funcionar em menos de dois minutos sem danificar nada.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como desafogar roçadeira.webp"
              alt="Mecânico analisando o cilindro e a vela de uma roçadeira na bancada de trabalho"
              title="Identificação e manutenção de motor de roçadeira afogado"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. DIAGNÓSTICO DO PROBLEMA ("O QUE ACONTECE NO MOTOR")
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            O Que Causa o Afogamento da Roçadeira
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Os motores de dois tempos dependem de uma proporção muito exata entre ar atmosférico e gasolina atomizada para conseguir explodir na faísca da vela.
            </p>
            <p>
              Quando acionamos a borboleta do afogador, estamos propositalmente cortando o ar para enriquecer a mistura e facilitar a primeira ignição a frio.
            </p>
            <p>
              Se o operador continua puxando o retrátil sem desarmar o afogador após o primeiro estalo, o combustível líquido encharca todo o interior do cabeçote.
            </p>
            <p>
              Nessa condição, os eletrodos da vela ficam submersos na gasolina úmida e não conseguem emitir a centelha necessária para a queima.
            </p>
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
                Materiais e Ferramentas Necessárias
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Separe esses itens simples antes de iniciar o procedimento na sua bancada:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Vela Combinada</span>
                <span className="text-xs text-gray-600">Geralmente acompanha a embalagem original da máquina.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano Limpo e Seco</span>
                <span className="text-xs text-gray-600">Para secar a rosca e os eletrodos da vela de ignição.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Lixa Fina para Metal (Opcional)</span>
                <span className="text-xs text-gray-600">Para remover eventuais crostas de carvão do eletrodo.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#16A34A] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Luvas de Proteção Mecânica</span>
                <span className="text-xs text-gray-600">Evita queimaduras se o cabeçote estiver aquecido.</span>
              </div>
            </div>
          </div>

          {/* Dica de Produto Vinculado do Banco de Dados */}
          {kitOleo && (
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl">
              <div className="text-xs text-gray-600">
                <span className="font-bold text-gray-900 block text-sm mb-1">
                  Combustível com óleo 2T na medida correta evita o excesso de fumaça e falhas de partida:
                </span>
                Recomendamos sempre o uso de um dosador graduado para evitar misturas ricas demais.
              </div>
              <a
                href={kitOleo.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="shrink-0 bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-black py-2.5 px-4 rounded-lg uppercase tracking-wider transition-colors no-underline"
              >
                Ver Dosador na Loja
              </a>
            </div>
          )}
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (MOMENTO DE TRANSIÇÃO PARA A PRÁTICA)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PRÁTICO NUMERADO (O CORAÇÃO DO TUTORIAL)
            =================================================================== */}
        <div className="space-y-12">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Passo a Passo para Desafogar o Motor Rapidamente
          </h2>

          {/* ETAPA 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                1
              </span>
              Desarme o Afogador e Posicione a Chave
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                O primeiro erro cometido é continuar puxando o cabo com a alavanca do afogador levantada.
              </p>
              <p>
                Empurre a borboleta do afogador totalmente para a posição aberta ou desarmada para liberar o fluxo pleno de oxigênio.
              </p>
              <p>
                Certifique-se de que o interruptor de ignição no punho do guidão esteja na posição ligada (I).
              </p>
            </div>
          </section>

          {/* ETAPA 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                2
              </span>
              Remoção e Limpeza da Vela de Ignição
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Puxe cuidadosamente o cachimbo de borracha para desconectar o cabo elétrico do terminal superior da vela.
              </p>
              <p>
                Encaixe a chave combinada e gire no sentido anti-horário com firmeza moderada para soltar a peça.
              </p>
              <p>
                Ao remover a vela, você notará a ponta com forte cheiro de gasolina e os eletrodos visivelmente úmidos.
              </p>
              <p>
                Utilize o pano seco para limpar toda a rosca, retirando qualquer película de combustível líquido acumulada.
              </p>
            </div>

            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/1/como colocar fio na roçadeira​.webp"
                alt="Detalhe do manuseio da ferramenta e manutenção da vela do motor"
                title="Limpeza dos eletrodos da vela de ignição"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* ETAPA 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                3
              </span>
              Expulsão do Excesso de Gasolina do Cilindro
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Com o orifício da vela totalmente aberto, vire a roçadeira de ponta-cabeça com o escape apontando para o chão.
              </p>
              <p>
                Puxe a cordinha de partida com rapidez entre 6 a 8 vezes consecutivas.
              </p>
              <p>
                O movimento do pistão vai bombear ar fresco pelo cárter e expelir o excesso de líquido acumulado no cabeçote.
              </p>
              <p>
                Você verá pequenos respingos de combustível saindo pelo orifício aberto, o que indica que a drenagem funcionou.
              </p>
            </div>
          </section>

          {/* ETAPA 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">
                4
              </span>
              Reinstalação da Vela e Partida sem Afogador
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Rosqueie a vela de volta primeiro com a mão até o batente para não estragar a rosca de alumínio do cabeçote.
              </p>
              <p>
                Aperte suavemente com a chave combinada apenas até sentir firmeza, sem forçar com o peso do corpo.
              </p>
              <p>
                Encaixe o cachimbo até ouvir o clique de travamento no terminal da vela.
              </p>
              <p>
                Mantendo o afogador desarmado e acelerando levemente o punho, dê duas puxadas firmes no retrátil de partida.
              </p>
              <p>
                O motor vai dar a partida de imediato, liberando uma leve fumaça inicial que desaparece em poucos segundos.
              </p>
            </div>
          </section>
        </div>

        {/* ===================================================================
            7. BOX DE ALERTA DE SEGURANÇA E EPIS
            =================================================================== */}
        <section className="mt-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
                Alerta de Segurança Crucial
              </h3>
              <div className="space-y-3 text-sm text-amber-950 font-medium">
                <p>
                  Nunca realize testes de faísca com a vela perto do orifício aberto do cabeçote enquanto houver vapor de combustível no ar.
                </p>
                <p>
                  Os vapores de gasolina acumulados podem entrar em combustão instantânea na presença da faísca exposta.
                </p>
                <p>
                  Faça sempre esse procedimento em local aberto, ventilado e longe de qualquer chama piloto ou bitucas acesas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. ERROS COMUNS E COMO EVITÁ-LOS
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Erros Frequentes que Afogam a Roçadeira
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h4>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Insistir na partida com o afogador acionado após o motor dar o primeiro sinal.</li>
                <li>Bombear excessivamente o bulbo primer de combustível (mais de 5 vezes).</li>
                <li>Tentar ligar com o acelerador travado no máximo com motor ainda frio.</li>
                <li>Usar gasolina velha guardada há mais de 30 dias no tanque.</li>
              </ul>
            </div>

            <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#16A34A]/30">
              <h4 className="font-bold text-[#166534] mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-[#16A34A]" /> Prática Recomendada
              </h4>
              <ul className="space-y-2 text-[#166534] text-sm list-disc list-inside">
                <li>Desarmar o afogador logo na primeira tentativa em que o motor ameaçar pegar.</li>
                <li>Pressionar o bulbo do primer apenas até a gasolina preencher a bolha plástica.</li>
                <li>Dar puxadas contínuas e firmes até o final do curso da corda sem soltar no retorno.</li>
                <li>Esvaziar o carburador se a máquina for ficar mais de duas semanas parada.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. DICAS DE MANUTENÇÃO PREVENTIVA
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Manutenção Preventiva para Não Voltar a Afogar
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              A conservação do carburador e da vela é o segredo para que sua roçadeira ligue sempre na primeira ou segunda puxada.
            </p>
            <p>
              Ao encerrar a roçada do dia, feche o registro do tanque (se houver) e deixe o motor ligado até morrer por falta de combustível.
            </p>
            <p>
              Esse procedimento simples consome a gasolina residual que ficaria parada nas membranas delicadas do carburador.
            </p>
            <p>
              Gasolina parada evapora lentamente e deixa uma crosta viscosa que trava a agulha de injeção, gerando afogamentos recorrentes.
            </p>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EXPANSÍVEL EM ACORDEÃO)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre o Procedimento
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
            11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Pronto para Voltar ao Trabalho no Campo
            </h2>

            <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-4 text-sm sm:text-base">
              <p>
                Dominar esse diagnóstico mecânico simples economiza horas preciosas de sol e poupa viagens desnecessárias até a oficina de reparos.
              </p>
              <p>
                Com o motor respirando normalmente e a câmara desobstruída, o corte do seu terreno segue com potência máxima e zero estresse.
              </p>
              <p>
                Mantenha sempre suas ferramentas limpas, utilize combustível de procedência confiável e garanta que sua área verde permaneça impecável.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. BOX "DICA DO ESPECIALISTA" (DESTAQUE FINAL)
            =================================================================== */}
        <div className="mt-12 bg-green-50 border-l-4 border-[#16A34A] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-green-100 p-3 rounded-full text-[#166534] shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#166534] mb-2">
              Dica de Ouro da Oficina
            </h3>
            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <p>
                Se mesmo após todo esse procedimento o motor não emitir nenhum sinal, verifique se há centelha na vela encostando a rosca de metal na carcaça do motor e puxando a corda.
              </p>
              <p>
                Caso não haja faísca visível, o defeito pode estar no botão do interruptor de corte ou na bobina de ignição, e não no combustível.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup (mantido inativo até solicitação explícita do usuário) */}
      <ExitIntentPopup />
    </div>
  );
};
