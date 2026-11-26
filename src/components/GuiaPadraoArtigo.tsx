/**
 * ============================================================================
 * GUIA MESTRE E PADRÃO DE CRIAÇÃO DE ARTIGOS (NOTA 100 NO PAGESPEED INSIGHTS)
 * Arquivo de Referência Universal — Guia do Roçador (Especialistas em Roçadeiras)
 * ============================================================================
 *
 * OBJETIVO DESTE ARQUIVO:
 * Servir como documentação definitiva, molde de código (.tsx / .astro) e
 * template de prompt genérico para criar QUALQUER artigo de QUALQUER tema
 * no Guia do Roçador mantendo 100 pontos no Google PageSpeed (Performance,
 * Acessibilidade, Práticas Recomendadas e SEO), alta retenção e conversão.
 *
 * ----------------------------------------------------------------------------
 * PARTE 0: QUESTIONÁRIO PRÉ-ARTIGO (PERGUNTAS OBRIGATÓRIAS ANTES DE ESCREVER)
 * ----------------------------------------------------------------------------
 * Quando o usuário pedir: "olhe no GuiaPadraoArtigo.tsx e me faça as perguntas"
 * (ou quando for iniciar um novo artigo), o assistente/IA DEVE fazer exatamente
 * as seguintes perguntas no chat e aguardar as respostas:
 *
 * ❓ 1. BANCOS DE DADOS E COMPONENTES ESPECÍFICOS DO ARTIGO:
 *    - Qual arquivo de catálogo de artigos deve receber este artigo?
 *      • `src/data/articlesrocadeiras.ts` (Atualmente ativo no site)
 *      *(À medida que novos catálogos forem criados para outros nichos, adicione-os nesta lista como opções)*
 *
 *    - Qual arquivo de banco de produtos deve ser usado para registrar as ofertas?
 *      • `src/data/productsrocadeira.ts` (Atualmente ativo no site)
 *      *(À medida que novos bancos de produtos forem criados, adicione-os nesta lista como opções)*
 *
 *    - Qual componente de Banner do Meio deve ser importado?
 *      • Opção 1: `src/components/roçadeiras/BunnerDoMeiorocadeira.tsx` (Focado em Roçadeiras a Gasolina/Elétricas)
 *      • Opção 2: `src/components/roçadeiras/BunnerDoMeiofiodenylonpararocadeira.tsx` (Focado em Fios de Nylon e Acessórios)
 *      • Opção 3: `src/components/roçadeiras/BunnerDoMeiooleo2tempos.tsx` (Focado em Óleo 2 Tempos e Lubrificantes)
 *      • Opção 4: `src/components/roçadeiras/BunnerDoMeiolaminadeorocadeira.tsx` (Focado em Lâminas e Discos de Roçadeira)
 *      *(À medida que novos banners forem criados no projeto, adicione-os nesta lista como opções)*
 *
 *    - Qual componente de Exit Intent Popup deve ser importado?
 *      • Opção 1: `src/components/roçadeiras/ExitIntentPopuprocadeira.tsx` (Focado em Roçadeiras a Gasolina/Elétricas)
 *      • Opção 2: `src/components/roçadeiras/ExitIntentPopupfiodenylonpararocadeira.tsx` (Focado em Fios de Nylon e Acessórios)
 *      • Opção 3: `src/components/roçadeiras/ExitIntentPopupoleo2tempos.tsx` (Focado em Óleo 2 Tempos e Lubrificantes)
 *      • Opção 4: `src/components/roçadeiras/ExitIntentPopuplaminadeorocadeira.tsx` (Focado em Lâminas e Discos de Roçadeira)
 *      *(À medida que novos popups forem criados no projeto, adicione-os nesta lista como opções)*
 *
 * ❓ 2. PALAVRA-CHAVE PRINCIPAL, TÍTULO E URL (SLUG):
 *    - Qual a palavra-chave principal (foco de SEO)? (ex.: "melhor roçadeira", "stihl vs husqvarna", "como regular carburador")
 *    - Qual o título H1 persuasivo do artigo?
 *    - Qual será a URL amigável / slug exato da página Astro? (ex.: `src/pages/[slug-do-artigo].astro` -> `/[slug-do-artigo]`)
 *
 * ❓ 3. AUTOR DO ARTIGO:
 *    - Quem é o autor responsável pelo artigo?
 *      • `carlos-henrique` (Carlos Henrique Menezes — foto oficial: `/images/autores/Carlos Henrique Menezes-thumb.webp`)
 *      • `jose-ailton` (José Ailton da Silva — foto oficial: `/images/autores/José Ailton da Silva-thumb.webp`)
 *      • `murilo` (Murilo — foto oficial: `/images/autores/murilo.webp`)
 *    *(Isso define a assinatura com link para `/author/[slug]/` e avatar 32x32 logo abaixo do H1)*
 *
 * ❓ 4. PRODUTOS, IMAGENS E LINKS DE AFILIADO:
 *    - Quais modelos/produtos serão analisados e recomendados no artigo? (ex.: Stihl FS 55, Husqvarna 143R-II, Vulcan VR520H, Nakasaki 63cc, etc.)
 *    - Você já tem as imagens (salvas em `/public/images/blog/` ou `/public/images/produtos/`) e links de afiliado cadastrados no arquivo de produtos, ou fornecerá novos links/imagens neste prompt?
 *
 * ❓ 5. BANNER DE CROSS-SELL E ELEMENTOS EXTRAS:
 *    - O artigo terá a seção de Banner de Cross-Sell (produtos complementares) logo após os produtos principais, ou devemos omitir esse bloco?
 *    - Produtos de cross-sell recomendados no nicho: Fio de Nylon Quadrado, Óleo 2T Sintético/Semissintético, Carretel Automático Bate-Libera, Lâmina de 3 Pontas em Aço, Colete Ergonômico Duplo com Alívio de Peso, Óculos de Proteção e Protetor Auricular.
 *    - O banner suporta 2 a 3 cards (`grid md:grid-cols-2` ou `grid md:grid-cols-3`), exibindo foto com `mix-blend-multiply`, tag de benefício (`#F0FDF4`), título, descrição curta e botão de ação `#15803d` ("VER PREÇO") com `target="_blank" rel="noopener noreferrer sponsored nofollow"`.
 *
 * ----------------------------------------------------------------------------
 * PARTE 1: OS SEGREDOS DOS 100 PONTOS NO PAGESPEED (OBRIGATÓRIO SEGUIR)
 * ----------------------------------------------------------------------------
 *
 * 0. CADASTRO OBRIGATÓRIO DO CARD EM `src/data/articlesrocadeiras.ts`:
 *    - Todo novo artigo criado DEVE obrigatoriamente ter seu card adicionado no
 *      array `articles` em `src/data/articlesrocadeiras.ts` (na posição indicada
 *      pelo usuário ou logo após os artigos comerciais principais).
 *    - Esse arquivo alimenta automaticamente a vitrine da Home (`/`), a listagem
 *      paginada do Blog (`/blog`) e a pesquisa interna (`/search`).
 *    - Estrutura obrigatória do objeto em `src/data/articlesrocadeiras.ts`:
 *      `{ title: "...", url: "/[slug-do-artigo]", image: "/images/blog/[slug-do-artigo].webp", excerpt: "..." }`
 *
 * 1. ARQUIVO DA PÁGINA ASTRO (`src/pages/[slug-do-artigo].astro`):
 *    - Hidratação Inteligente: Use SEMPRE `client:idle` no componente React
 *      (`<NomeDoComponente client:idle />`) em vez de `client:load`.
 *      Isso entrega o HTML 100% renderizado instantaneamente e só carrega o JS
 *      interativo (Simulador e FAQ) quando o navegador estiver livre (TBT = 0).
 *    - Exemplo exato do arquivo `.astro`:
 *      ```astro
 *      ---
 *      import { Header } from '../components/Header';
 *      import { NomeDoComponente } from '../components/roçadeiras/NomeDoComponente';
 *      import { Footer } from '../components/Footer';
 *      import { CookieConsent } from '../components/CookieConsent';
 *      import { ExitIntentPopuprocadeira as ExitIntentPopup } from '../components/roçadeiras/ExitIntentPopuprocadeira';
 *      import '../styles/global.css';
 *
 *      const title = "[Título SEO do Artigo com Palavra-Chave e Gancho] | Guia do Roçador";
 *      const description = "[Resumo persuasivo de até 155 caracteres convidando ao clique]";
 *      const canonicalUrl = "https://guiadorocador.com.br/[slug-do-artigo]";
 *      const ogImage = "/images/blog/[slug-do-artigo].webp";
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
 *            <NomeDoComponente client:idle />
 *          </main>
 *          <Footer />
 *          <CookieConsent client:load />
 *          <ExitIntentPopup client:load />
 *        </body>
 *      </html>
 *      ```
 *
 * 2. ÍCONES SVG INLINE (ZERO PESO EXTRA NO BUNDLE JS):
 *    - Evite importar bibliotecas inteiras de ícones no cliente quando possível.
 *    - Declare os SVGs leves diretamente no topo do `.tsx` (`Check`, `X`,
 *      `ArrowRight`, `ChevronDown`, `ChevronUp`, `Sparkles`, `HelpCircle`,
 *      `ShoppingBag`, `Wrench`). Isso mantém o pacote JS mínimo e zera o tempo de bloqueio.
 *
 * 3. OTIMIZAÇÃO DE LCP (IMAGEM DO HERO / TOPO):
 *    - A imagem de fundo do Hero é o elemento LCP (Largest Contentful Paint).
 *    - Ela DEVE conter:
 *      • `fetchPriority="high"` (exatamente com "P" maiúsculo em JSX/TSX)
 *      • Sem `loading="lazy"` (ou com `loading="eager"`)
 *      • Dimensões explícitas `width={800} height={533}`
 *      • `opacity-20 blur-sm` + camada `bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]`
 *        garantindo leitura perfeita e nota máxima de contraste (Acessibilidade 100).
 *
 * 4. IMAGENS DO CORPO, VITRINE E AUTORES (CLS = 0 E CARREGAMENTO ULTRA RÁPIDO):
 *    - Todas as imagens abaixo da dobra DEVEM ter `loading="lazy"`.
 *    - Sempre defina `width` e `height` explícitos para travar a proporção e
 *      impedir saltos de layout (CLS = 0):
 *      • Imagens de seções e produtos: `width={800} height={533}`
 *      • Miniaturas da vitrine/tabela: `width={60} height={60}` carregando a versão
 *        compacta (`-thumb.webp` 120x120 ~1 a 2 KiB), evitando baixar a imagem de
 *        800x533 para um espaço de 60x60.
 *      • Foto do autor no topo: `width={32} height={32}`, com arquivo fonte redimensionado
 *        para no máximo 128x128 px (~3 KiB), nunca carregando arquivos gigantes.
 *    - Em fotos de produtos com fundo branco, use `object-contain mix-blend-multiply`.
 *    - Exclusivamente formato `.webp` (nunca `.png` ou `.jpg` em produção).
 *
 * 5. HIERARQUIA SEMÂNTICA E PALETA OFICIAL (ACESSIBILIDADE WCAG AAA):
 *    - Apenas UM `<h1>` por página (dentro do Hero).
 *    - Respeite a ordem estrita de níveis: `<h1>` -> `<h2>` -> `<h3>` -> `<h4>`.
 *    - REGRAS OBRIGATÓRIAS DE CONTRASTE E CORES PARA ARTIGOS COMERCIAIS (APROVAÇÃO TOTAL NO AXE / LIGHTHOUSE):
 *      • Botões de Ação com Texto Branco: SEMPRE `bg-[#15803d] hover:bg-[#166534] text-white` (ou `bg-[#166534] hover:bg-[#14532d]`).
 *        ⚠️ NUNCA use `bg-[#16A34A]` com `text-white`: o verde #16A34A gera contraste de apenas 3.30:1 e FALHA na regra `color-contrast` do Axe/Lighthouse (que exige 4.5:1 mínimo para textos normais < 18pt/14pt bold).
 *        O verde `#15803d` atinge 5.02:1 (Aprovado WCAG AA) e o hover `#166534` atinge 7.13:1 (Aprovado WCAG AAA).
 *      • Textos Verdes em Fundo Claro (#FFFFFF, #F9FAFB, #F0FDF4): SEMPRE use `text-[#166534]` (Verde Floresta, contraste > 7.1:1 AAA). NUNCA use `text-[#16A34A]` ou `text-[#22c55e]` sobre fundo claro.
 *      • Textos Verdes em Fundo Escuro (#1a1a1a, #111827): use `text-[#4ade80]` (contraste 9.99:1), `text-[#22c55e]` (7.64:1) ou `text-[#16A34A]` (5.28:1).
 *      • Fundo de Badges e Selos de Destaque: `bg-[#F0FDF4]` (Verde Menta Suave) com borda `border-[#16A34A]/30` e texto em `text-[#166534]`.
 *      • Badges Numéricos (Passos de Guias ou FAQ): `bg-[#15803d] text-white` (contraste > 5:1).
 *      • Botões Selecionados / Ativos no Simulador: use `bg-[#15803d] text-white border-[#15803d]`.
 *      • Banners, Popups e CookieConsent: todos os botões de ação e submissão devem usar `bg-[#15803d] hover:bg-[#166534] text-white`.
 *    - Acessibilidade de Avatares (Evitar Alt Redundante):
 *      • Quando a foto do autor estiver dentro de um link que já possui o nome textual do autor
 *        (ex: `<a href="/author/..."><img ... /> Carlos Henrique</a>`), a tag `<img>`
 *        DEVE conter `alt="" aria-hidden="true"`. Isso impede que leitores de tela leiam
 *        o nome do autor duas vezes consecutivas (regra `image-redundant-alt` do Lighthouse).
 *    - Links de afiliado sempre com `target="_blank" rel="noopener noreferrer sponsored nofollow"`.
 *
 * 6. TEXTO CORRIDO LIMPO E ESPAÇAMENTO OBRIGATÓRIO ENTRE PARÁGRAFOS:
 *    - NÃO use frases, termos técnicos, nomes de produtos ou palavras em negrito
 *      (<strong> ou <b>) no meio do texto corrido dos parágrafos.
 *    - O texto corrido deve ser 100% limpo, leve e natural de ler, evitando poluição visual.
 *    - O negrito fica reservado exclusivamente aos elementos estruturais:
 *      títulos (h1, h2, h3, h4), cabeçalhos de tabelas (th), botões, badges e rótulos de Prós/Contras.
 *    - ESPAÇAMENTO ENTRE PARÁGRAFOS (REGRA CRUCIAL):
 *      • A cada ponto final (.), DEVE haver uma quebra de parágrafo (<p>...</p>).
 *      • Todo parágrafo DEVE ter margem inferior visível e espaçamento confortável:
 *        use sempre classes como `mb-5 leading-relaxed text-base sm:text-lg` (ou no mínimo `mb-4 leading-relaxed`).
 *      • ⚠️ NUNCA use `m-0` em parágrafos de texto corrido ou análises de produtos,
 *        pois a classe `m-0` anula o margin-bottom e deixa os parágrafos colados uns nos outros!
 *
 * 7. BOTÕES DE PREÇO E CARDS DE OFERTA DURANTE O ARTIGO (`AffiliateCard.tsx`):
 *    - Durante o artigo, em CADA bloco de análise individual de produto, é OBRIGATÓRIO
 *      utilizar o componente oficial `<AffiliateCard id="[id-do-produto]" />`
 *      (importado de `src/components/AffiliateCard.tsx`).
 *    - O `<AffiliateCard />` já renderiza o card padronizado com borda `#16A34A`,
 *      sombra suave, ícone de carrinho de compras e o botão de alta conversão
 *      `"CLIQUE AQUI PARA VER O PREÇO"` com link seguro de afiliado.
 *    - Os botões compactos com texto simples `"Ver Preço"` ficam restritos
 *      exclusivamente à Vitrine/Tabela Resumo do início e aos cards do Banner de Cross-Sell.
 *
 * 8. VITRINE / TABELA RESUMO DO INÍCIO (REGRA CRÍTICA MOBILE — PROIBIDO SCROLL LATERAL):
 *    - A vitrine no topo do artigo NUNCA deve forçar o usuário de celular a rolar
 *      para o lado para enxergar o botão `"Ver Preço"`.
 *    - Para isso, no mobile (`< 640px`), APENAS 3 COLUNAS podem ficar visíveis:
 *      1. Coluna `Foto` (`w-[70px] sm:w-[90px]`, miniatura `45x45` no mobile e `60x60` no desktop).
 *      2. Coluna `Modelo / Opção` (`text-left`), contendo o link do modelo + o perfil/resumo
 *         empilhado embaixo com `md:hidden` + a nota empilhada embaixo com `sm:hidden`.
 *      3. Coluna `Ação` (`w-[100px] sm:w-[150px]`), contendo o botão `"Ver Preço"` visível na mesma tela.
 *    - As colunas extras de `"Perfil Indicado"` (`hidden md:table-cell`) e `"Nota"` (`hidden sm:table-cell`)
 *      DEVEM obrigatoriamente ter `hidden` no mobile! JAMAIS crie colunas extras sem `hidden md:table-cell`.
 *    - Estrutura JSX exata obrigatória para a Vitrine de TODOS os artigos comerciais:
 *      ```tsx
 *      <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
 *        <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
 *          Resumo Rápido: Melhores Opções Analisadas
 *        </h2>
 *        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
 *          <table className="w-full border-collapse">
 *            <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
 *              <tr>
 *                <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
 *                <th className="p-3 text-left">Modelo / Opção</th>
 *                <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
 *                <th className="p-3 text-center hidden sm:table-cell">Nota</th>
 *                <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
 *              </tr>
 *            </thead>
 *            <tbody>
 *              {items.map((item) => {
 *                const prod = products[item.productId];
 *                const displayName = prod?.name || item.shortName;
 *                const affiliateUrl = prod?.link || '#';
 *                return (
 *                  <tr key={item.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors">
 *                    <td className="p-2 align-middle text-center">
 *                      <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
 *                        <img src={item.thumbImage} alt={displayName} title={displayName} width={60} height={60} className="max-w-full max-h-full block object-contain mix-blend-multiply" loading="lazy" />
 *                      </div>
 *                    </td>
 *                    <td className="p-2 align-middle">
 *                      <a href={`#${item.id}`} className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#166534] hover:underline leading-tight block">
 *                        {item.shortName}
 *                      </a>
 *                      <div className="text-[11px] text-gray-600 mt-1 md:hidden">{item.category}</div>
 *                      <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">Nota: {item.score} / 10</div>
 *                    </td>
 *                    <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">{item.category}</td>
 *                    <td className="p-2 align-middle text-center hidden sm:table-cell">
 *                      <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
 *                        {item.score} / 10
 *                      </span>
 *                    </td>
 *                    <td className="p-2 align-middle text-center">
 *                      <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="bg-[#15803d] hover:bg-[#166534] text-white font-bold no-underline text-xs py-2 px-3 rounded-lg whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-5 shadow-sm active:scale-95">
 *                        Ver Preço
 *                      </a>
 *                    </td>
 *                  </tr>
 *                );
 *              })}
 *            </tbody>
 *          </table>
 *        </div>
 *      </div>
 *      ```
 *
 * 9. REDAÇÃO HUMANA, INFORMATION GAIN, ANTI-STUFFING E ZERO VÍDEOS (INDEXAÇÃO NO GOOGLE):
 *    - INTRODUÇÃO DIRETA DE OFICINA / CAMPO (PROIBIDO CLICHÊS DE IA):
 *      • JAMAIS comece artigos com frases genéricas e robóticas como "gerar frustração e atrasos no campo",
 *        "manter o jardim impecável", "quem nunca passou pela frustração...", "no mundo atual" ou "este guia definitivo".
 *      • Vá direto ao ponto na primeira frase como um mecânico/operador experiente falando na bancada
 *        (citando o problema real, o critério técnico decisivo ou a medida/causa prática).
 *    - GANHO REAL DE INFORMAÇÃO (INFORMATION GAIN):
 *      • Todo artigo comercial DEVE entregar utilidade prática original que concorrentes genéricos não entregam:
 *        tabelas comparativas de especificações reais (cilindrada, furo, rosca, voltagem/Ah, torque),
 *        quadros "Quando Vale a Pena vs. Quando Evitar", critérios mecânicos de bancada e dicas reais de oficina.
 *    - ZERO KEYWORD STUFFING E ZERO ANO FIXO NO TEXTO/CARD (CONTEÚDO EVERGREEN):
 *      • NUNCA empilhe variações exatas da mesma palavra-chave entre parênteses na introdução
 *        nem crie caixas de "Navegação Rápida" ou H2s repetindo a mesma palavra-chave 5 ou 6 vezes.
 *      • NÃO coloque o ano (ex.: "em 2026") no card de `src/data/articlesrocadeiras.ts` (title/excerpt) nem
 *        espalhado nos parágrafos e subtítulos do texto para não precisar editar manualmente na virada do ano.
 *      • Use linguagem natural, sinônimos técnicos e títulos de seções variados.
 *    - ZERO REPETIÇÃO DE BLOCOS INTERNOS E ANTI-CANIBALIZAÇÃO ENTRE ARTIGOS:
 *      • NÃO repita o mesmo bloco/passo a passo várias vezes dentro do artigo só mudando o nome da marca/modelo;
 *        em vez disso, crie UMA tabela comparativa de particularidades por marca/modelo.
 *      • NÃO reescreva tutoriais longos que já possuem artigo dedicado no site (ex.: mistura de óleo 2T,
 *        enrolamento de fio de nylon, troca de lâmina, regulagem de carburador). Faça um resumo breve e envie link interno!
 *      • NÃO crie páginas novas que canibalizem uma página pilar já indexada que cobre o mesmo assunto.
 *    - ZERO VÍDEOS EMBUTIDOS (PAGESPEED 100):
 *      • ⚠️ NUNCA incorpore `<video>` nem iframes do YouTube diretamente nas páginas do site para não
 *        derrubar a nota 100 do Google PageSpeed / LCP / TBT.
 *
 * 10. PROTOCOLO OBRIGATÓRIO DE LINKAGEM INTERNA CONTEXTUAL (SOMENTE ENTRE ARTIGOS — SEM ALTERAR A HOME):
 *    - ANTES e DURANTE a redação de qualquer artigo novo, o assistente/IA DEVE ler `src/data/articlesrocadeiras.ts`
 *      para mapear todos os artigos já publicados no site.
 *    - PASSO A — LINKS SAINDO DO ARTIGO NOVO (OBRIGATÓRIO 2 A 5 LINKS NATURAIS NO TEXTO):
 *      • Identifique palavras, expressões ou dúvidas que JÁ aparecem naturalmente dentro das frases do artigo
 *        (ex.: "óleo 2 tempos", "fio de nylon", "carretel", "lâmina", "carburador", "roçadeira a bateria", "desafogar")
 *        e transforme essas palavras exatas em links internos `<a href="/slug-existente">` com classe
 *        `text-[#166534] font-semibold hover:underline` (ou `text-[#16A34A] font-semibold hover:underline`).
 *      • Os links devem ser 100% naturais dentro do parágrafo — nunca empilhe listas artificiais de links soltos.
 *    - PASSO B — LINKS APONTANDO PARA O ARTIGO NOVO (PÁGINAS FORTES COMO "PUXADORAS"):
 *      • Sempre que criar um artigo novo, procure 1 a 2 artigos já existentes (especialmente páginas pilares
 *        já indexadas como `/melhor-rocadeira`, `/melhor-rocadeira-a-bateria`, `/qual-o-melhor-fio-de-nylon-para-rocadeira`
 *        ou guias do mesmo cluster) que já mencionam aquele tema no texto e adicione um link interno contextual
 *        dentro da frase apontando para a nova URL. Nenhum artigo pode ficar órfão (0 links internos recebidos).
 *      • ⚠️ NÃO adicione seções extras de links na `Home.tsx` — a Home mantém apenas os 6 cards de "Nossos Artigos".
 *
 * 11. CHECKLIST TÉCNICO ON-PAGE, IMAGENS E INTEGRIDADE DO FECHAMENTO (PRÉ-PUBLICAÇÃO):
 *    - SLUG, TITLE TAG, META DESCRIPTION E CANONICAL (`src/pages/[slug].astro`):
 *      • Slug limpo, em minúsculas, sem acentos, direto ao tema e sem duplicar URL existente.
 *      • `<title>` único com palavra-chave principal + `| Guia do Roçador`, claro e sem empilhamento de termos.
 *      • `<meta name="description">` única (135 a 160 caracteres) com ganho prático claro, sem repetir palavras.
 *      • `<link rel="canonical" href="https://guiadorocador.com.br/[slug]" />` e tags Open Graph (`og:title`,
 *        `og:description`, `og:image`, `og:type="article"`).
 *    - IMAGENS WEBP COMPRIMIDAS + ALT DESCRITIVO:
 *      • Todas as imagens devem estar em formato `.webp` comprimido em `public/images/blog/` com `width` e `height`
 *        explícitos (padrão `800x533` nas fotos editoriais e `120x120` nas thumbs).
 *      • Todo `<img>` informativo DEVE ter `alt` descritivo e fiel à cena real (sem keyword stuffing);
 *        somente avatares decorativos repetidos podem usar `alt=""` com `aria-hidden="true"`.
 *    - FINAL COMPLETO E SEM CORTES (E-E-A-T):
 *      • Todo artigo DEVE encerrar de forma limpa, sem frases truncadas, contendo obrigatoriamente:
 *        (1) Bloco de Perguntas Frequentes (FAQ curto e direto com 3 a 6 dúvidas reais em acordeão),
 *        (2) Conclusão/Veredito de Compra e/ou Dica Prática de Oficina, e
 *        (3) Assinatura/Avatar do Autor com link para `/author/[slug-do-autor]/`.
 *
 *
 * ----------------------------------------------------------------------------
 * PARTE 2: ANATOMIA COMPLETA DO ARTIGO (DO TOPO AO FIM — JARDINAGEM E TERRENO)
 * ----------------------------------------------------------------------------
 *
 * 1. HERO (CABEÇALHO ESCURO):
 *    - Imagem principal ao fundo desfocada com gradiente escuro `#1a1a1a`.
 *    - Título `<h1>` centralizado: primeira linha em branco e gancho principal
 *      destacado em `<span className="text-[#16A34A]">`.
 *    - Assinatura do autor: `"Por"` + link para `/author/[slug-do-autor]/` com avatar circular (`32x32` com borda `#16A34A`) + `[Nome do Autor]`.
 *
 * 2. INTRODUÇÃO CURTA (ABERTURA):
 *    - 2 a 5 parágrafos curtos (1 a 3 linhas cada, quebrando a cada ponto final)
 *      apresentando a dor real (mato alto, motor engasgando, fio arrebentando, cansaço físico) e a solução do guia.
 *
 * 3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (INTERATIVO):
 *    - Card escuro (`from-slate-800 to-slate-900`) posicionado logo no início.
 *    - Pergunta direta adaptada ao tema (ex.: tamanho do terreno, tipo de capim/vegetação, frequência de uso).
 *    - Botões interativos de 1 clique direcionando via âncora (`#item-1...`) ao produto ideal.
 *
 * 4. VITRINE / TABELA RESUMO DE PRODUTOS (OBRIGATÓRIO PADRÃO MOBILE SEM SCROLL LATERAL):
 *    - Tabela comparativa idêntica ao `MelhorRocadeira.tsx`: no mobile, DEVE exibir
 *      a Foto (`w-[70px]`, caixa `48x48`), o Texto (Nome + Perfil empilhado com `md:hidden` + Nota empilhada com `sm:hidden`)
 *      e o botão `"Ver Preço"` (`w-[105px]`, `#15803d`) na MESMA tela, sem precisar rolar para o lado!
 *    - As colunas separadas de `"Perfil Indicado"` (`hidden md:table-cell`) e `"Nota"` (`hidden sm:table-cell`)
 *      só aparecem como colunas próprias em telas maiores (`sm`/`md`).
 *
 * 5. SEÇÕES DE CONTEÚDO E ANÁLISES DE PRODUTOS (`<h2>` e `<h3>`):
 *    - Seções informativas (`<h2>` e `<h3>`): conceitos técnicos (cilindrada, tipo de motor 2T/4T/bateria, tipo de eixo, guidão bike vs d-loop).
 *    - Blocos de Produtos (`<section id="[id]" className="scroll-mt-24">`):
 *      a) Título `<h2>` ou `<h3>` com borda lateral verde (`border-l-4 border-[#16A34A] pl-4`).
 *         Regra: usar o nome exato do arquivo de imagem do produto (sem extensão).
 *      b) Imagem do produto (`800x533`) posicionada LOGO ABAIXO do título `H2`/`H3`.
 *      c) Texto descritivo analítico (1 frase por parágrafo, máx. 3 linhas).
 *      d) Ficha técnica enxuta em tabela.
 *      e) Componente `<AffiliateCard id="[id-do-produto]" />` centralizado.
 *      f) Grid duplo de **Prós** (verde) e **Contras** (vermelho).
 *      g) Tabela de Critérios Avaliados com Notas Individuais.
 *
 * 6. BANNERS DE MEIO DE ARTIGO (`<BunnerDoMeio />`):
 *    - Posicionados em pontos estratégicos de leitura (após o 3º item e antes do FAQ).
 *
 * 7. BANNER DE CROSS-SELL (ACESSÓRIOS E COMPLEMENTOS):
 *    - Posicionado LOGO DEPOIS que terminar a lista de produtos principais.
 *    - Exibe 2 a 3 itens complementares (fio de nylon, carretel, óleo 2T, cinto duplo, EPIs).
 *
 * 8. COMPARATIVOS DIRETOS, GUIA DE COMPRA E DICAS PRÁTICAS:
 *    - Comparativos (ex.: Stihl vs Husqvarna, 2 Tempos vs 4 Tempos, Fio Redondo vs Quadrado).
 *    - **Box de Destaque "Dica do Especialista"** (`bg-[#F0FDF4] border-l-4 border-[#16A34A] text-gray-800`).
 *    - **Seção "Melhores Marcas" (`<h2>` de Autoridade Tópica)**:
 *      Todo artigo comparativo comercial deve conter uma seção `<h2>Melhores Marcas de [Categoria]</h2>` antes das recomendações finais, analisando os diferenciais de cada montadora avaliada (ex.: Stihl, Husqvarna, Toyama, Honda, Tekna, Trapp, Garthen). Cada marca deve ser apresentada em um card `bg-white p-6 rounded-2xl border border-gray-200 shadow-sm` com `<h3>` em `text-[#166534]` e texto em parágrafos de 1 frase limpos (sem negrito).
 *
 * 9. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL):
 *    - Perguntas reais buscadas no Google com respostas diretas e escaneáveis.
 *
 * 10. CONCLUSÃO DE ALTO IMPACTO:
 *     - Seção final escura (`bg-[#1a1a1a] text-white`) com título em verde (`#16A34A`), resumindo o veredito final.
 *
 * ============================================================================
 * PARTE 3: TEMPLATE DE PROMPT GENÉRICO (COPIE E PREENCHA PARA NOVOS ARTIGOS)
 * ============================================================================
 *
 * 1. Arquivos de Configuração
 * - articlesrocadeiras.ts (OBRIGATÓRIO): Insira o card deste novo artigo
 *   no array `articles` em `src/data/articlesrocadeiras.ts`
 *   com a URL `/[slug-do-artigo]`, imagem `/images/blog/[slug-do-artigo].webp` e resumo.
 *   Isso garante que o artigo apareça na página `/blog`, na Home (`/`)
 *   e na busca (`/search`). No componente do artigo, a assinatura do autor
 *   logo abaixo do H1 deve linkar para `/author/[slug-do-autor]/` com a foto e
 *   o nome correspondentes.
 * - productsrocadeira.ts: Crie/verifique os IDs no arquivo `src/data/productsrocadeira.ts`
 *   para todos os modelos citados com oferta, adicione os links de afiliado correspondentes
 *   e referencie as imagens dos produtos.
 * - Imagem Principal: Crie/prepare a imagem principal do artigo em 800x533 com tema
 *   relacionado ao assunto. Salve em `/public/images/blog/` e referencie no Hero.
 *
 * 2. Imagens e Otimização Automática
 * - Dimensões obrigatórias: `800 x 533` pixels (exceto ícones SVG, avatares e miniaturas 60x60).
 * - Pipeline: Salve em `.png` ou `.jpg`, rode `npm run optimize-images` no terminal e use `.webp`.
 *
 * 3. Estrutura e Performance (PageSpeed 100)
 * - Página `.astro` usando `<Componente client:idle />`.
 * - Ícones SVG leves inline no topo do `.tsx`.
 * - Imagem Hero com `fetchPriority="high"`, sem `loading="lazy"`, e imagens abaixo com `loading="lazy"`.
 *
 * 4. Regra Absoluta de Formatação de Texto
 * - A cada ponto final (`.`), DEVE haver uma quebra de parágrafo (`<p>...</p>`).
 * - Cada parágrafo deve ter no MÍNIMO 1 linha e no MÁXIMO 3 linhas.
 * - Subtítulos dos produtos: nome exato do arquivo de imagem sem extensão.
 *
 * 5. Regras Obrigatórias de Cores e Contraste em Botões e Textos Comerciais
 * - NUNCA use `bg-[#16A34A]` em botões que possuem texto em branco. Use SEMPRE `bg-[#15803d] hover:bg-[#166534] text-white`.
 * - Em fundos brancos/claros, textos verdes DEVEM ser `text-[#166534]` para garantir contraste WCAG AAA superior a 7:1.
 * - Botões ativos/selecionados do simulador devem usar `bg-[#15803d] text-white border-[#15803d]`.
 * ============================================================================
 */

import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';
import { products } from '../data/productsrocadeira';
import { BunnerDoMeiorocadeira as BunnerDoMeio } from './roçadeiras/BunnerDoMeiorocadeira';
import { ExitIntentPopuprocadeira as ExitIntentPopup } from './roçadeiras/ExitIntentPopuprocadeira';

// Itens complementares de Cross-Sell mapeados diretamente do banco de dados do projeto
// Imagens de Cross-Sell existentes em public/images/blog/thumbs/:
// - /images/blog/thumbs/fio-duraline-cross.webp
// - /images/blog/thumbs/kit-oleo-2t-cross.webp
// - /images/blog/thumbs/kit-epis-cross.webp
// - /images/blog/thumbs/faca-3-pontas-spin-cross.webp
const crossSellProducts = {
  "fio-nylon": {
    name: "Fio de Nylon Quadrado 3mm",
    link: products["fio-de-nylon-duraline-3mm-quadrado-255m"]?.link || "https://meli.la/2PExUfX",
    image: "/images/blog/thumbs/fio-duraline-cross.webp"
  },
  "oleo-2t": {
    name: "Kit Misturador + Óleo 2T",
    link: products["kit-misturador-oleo-2t"]?.link || "https://meli.la/1GP142t",
    image: "/images/blog/thumbs/kit-oleo-2t-cross.webp"
  },
  "kit-epi": {
    name: "Kit Completo de EPIs",
    link: products["kit-seguranca-completo-epis"]?.link || "https://meli.la/1hqH1JJ",
    image: "/images/blog/thumbs/kit-epis-cross.webp"
  }
};

// Ícones SVG Inline Leves (Zero bloat de JS, acessibilidade e PageSpeed 100)
const Check = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const X = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ChevronDown = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
const ChevronUp = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
const Sparkles = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);
const HelpCircle = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const ShoppingBag = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);
const Wrench = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

interface GenericShowcaseItem {
  id: string;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
  thumbSrc: string;
}

export const GuiaPadraoArtigo: React.FC = () => {
  // Estado do Simulador Rápido de Engajamento
  const [quizProfile, setQuizProfile] = useState<'perfilA' | 'perfilB' | null>(null);

  // Estado do FAQ Expansível
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Configuração da Vitrine Resumo de Produtos (Exemplo com IDs reais do banco de dados)
  const showcaseItems: GenericShowcaseItem[] = [
    {
      id: "rocadeira-husqvarna-143rs",
      anchorId: "item-1-destaque-principal",
      shortName: "Husqvarna 143rs (Melhor Escolha Geral)",
      category: "Mato Alto / Uso Severo",
      score: "9.8 / 10",
      thumbSrc: "/images/blog/1/Husqvarna 143rs.webp"
    },
    {
      id: "rocadeira-vulcan-vr520h",
      anchorId: "item-2-custo-beneficio",
      shortName: "Vulcan VR520H (Melhor Custo-Benefício)",
      category: "Jardim Grande / Chácara",
      score: "9.4 / 10",
      thumbSrc: "/images/blog/1/Vulcan VR520H.webp"
    }
  ];

  // Dados do FAQ
  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual é a melhor opção para quem tem terreno médio com mato alto?",
      answer: [
        "Para terrenos com capim denso e áreas de pasto, o ideal é investir em modelos a gasolina a partir de 43cc ou com boa entrega de torque.",
        "Equipamentos mais fracos tendem a sofrer com superaquecimento e exigem mais esforço do operador para concluir o mesmo trabalho.",
        <>
          Se você tem dúvidas sobre regulagem ou partida, confira também nosso <a href="/como-ligar-rocadeira" className="text-[#16A34A] hover:underline font-semibold">passo a passo para ligar o motor sem afogar</a>.
        </>
      ]
    },
    {
      question: "Como saber se a roçadeira tem boa durabilidade e peças fáceis de achar?",
      answer: [
        "Prefira marcas com rede autorizada consolidada no país e peças universais compatíveis no mercado de reposição.",
        "Também avalie o acabamento do tubo de transmissão, os rolamentos do cabeçote e o sistema de amortecimento contra vibrações."
      ]
    },
    {
      question: "Vale a pena comprar uma máquina potente logo de início?",
      answer: [
        "Se o seu objetivo é manter chácaras, sítios ou áreas com vegetação pesada, sim, uma máquina mais potente economiza horas de trabalho.",
        "Já para pequenos quintais ou apenas aparar bordas de calçada, um modelo elétrico ou a bateria já resolve com muito mais praticidade e menos barulho."
      ]
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/slug-do-artigo.webp"
            alt="Descrição visual clara do tema central do artigo para SEO"
            title="Título descritivo da imagem principal do artigo"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Único H1 da página: Parte principal em branco + Gancho na cor secundária (#16A34A) */}
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
            Título Principal do Artigo com Palavra-Chave: <br />
            <span className="text-[#16A34A]">Subtítulo ou Gancho de Destaque?</span>
          </h1>

          {/* Assinatura do Autor logo abaixo do H1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/carlos-henrique/"
                className="flex items-center gap-2 hover:text-[#16A34A] transition-colors font-semibold group"
              >
                <img
                  src="/images/autores/Carlos Henrique Menezes.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform object-cover"
                />
                Carlos Henrique Menezes
              </a>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-xs sm:text-sm">Técnico em Mecânica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Container Central de Leitura Confortável */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ExitIntentPopup />

        {/* ===================================================================
            2. INTRODUÇÃO CURTA (Regra: 1 ponto final = 1 parágrafo de 1-3 linhas)
            =================================================================== */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Escolher o equipamento certo para cuidar do seu terreno evita gastos com manutenções frequentes e poupa o seu esforço físico.
          </p>
          <p>
            Com tantas opções de potência, cilindrada e tipos de lâmina no mercado, entender o que realmente funciona na prática é indispensável antes de comprar.
          </p>
          <p>
            Neste guia completo, avaliamos os detalhes técnicos de cada modelo, testamos os pontos fortes e mostramos qual alternativa vale mais a pena para a sua rotina.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-gray-900 text-white rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#16A34A] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual equipamento é ideal para o seu terreno?</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Selecione abaixo a sua demanda principal para ver a recomendação direta:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('perfilA')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'perfilA'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Mato Alto / Chácara ou Sítio</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('perfilB')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'perfilB'
                  ? 'bg-[#15803d] text-white border-[#15803d]'
                  : 'bg-gray-800 border-gray-700 hover:border-[#16A34A]'
              }`}
            >
              <span>Jardim Residencial / Manutenção</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-gray-800/80 border border-gray-700 rounded-xl">
              {quizProfile === 'perfilA' ? (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: Dê prioridade a máquinas a combustão robustas, como o{' '}
                  <a href="#item-1-destaque-principal" className="text-[#4ade80] underline font-bold">
                    Modelo 1
                  </a>
                  , que entrega alto torque para cortar vegetação densa sem sobrecarregar o motor.
                </p>
              ) : (
                <p className="text-sm leading-relaxed text-gray-200">
                  🎯 Recomendação Direta: O{' '}
                  <a href="#item-2-custo-beneficio" className="text-[#4ade80] underline font-bold">
                    Modelo 2
                  </a>{' '}
                  é a opção mais equilibrada, garantindo corte limpo de gramados e bordas sem pesar no orçamento.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE MISTA COM TABELA RESUMO (Responsiva Mobile & Desktop)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-white p-3 rounded-2xl sm:p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: Melhores Opções Analisadas Neste Guia
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Opção</th>
                  <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {showcaseItems.map((item) => {
                  const registeredProduct = products[item.id];
                  const displayName = registeredProduct?.name || item.shortName;
                  const affiliateUrl = registeredProduct?.link || '#';

                  return (
                    <tr key={item.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumbSrc}
                            alt={displayName}
                            title={displayName}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <a href={`#${item.anchorId}`} className="text-sm sm:text-base font-bold text-[#1a1a1a] hover:text-[#16A34A] hover:underline leading-tight block">
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-gray-500 mt-1 md:hidden">
                          {item.category}
                        </div>
                        <div className="text-[11px] font-bold text-[#166534] mt-0.5 sm:hidden">
                          Nota: {item.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          {item.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="bg-[#15803d] hover:bg-[#166534] text-white font-bold no-underline text-xs py-2 px-3 rounded-lg whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-5 shadow-sm active:scale-95"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================================================================
            5. SEÇÕES CONTEXTUAIS / TÉCNICAS DO ARTIGO (H2 + H3 + Imagem SEO)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            O Que Avaliar Antes de Escolher o Equipamento?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Toda seção informativa deve esclarecer de forma direta o critério técnico que afeta o rendimento no terreno.
            </p>
            <p>
              Mantenha o texto leve e escaneável: uma ideia central por frase e quebra de parágrafo a cada ponto final.
            </p>
          </div>

          {/* Imagem Contextual Otimizada (800x533 .webp) */}
          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/imagem-contextual-da-secao.webp"
              alt="Operador realizando corte de vegetação com roçadeira e equipamentos de proteção"
              title="Critérios de teste prático em terrenos reais"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">
            Potência do Motor e Tipo de Transmissão
          </h3>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              O sistema de transmissão com eixo rígido suporta lâminas pesadas de três pontas com muito mais durabilidade que eixos flexíveis.
            </p>
            <p>
              Evite sobrecarregar motores pequenos com carretéis fora da especificação recomendada pelo manual do fabricante.
            </p>
          </div>
        </section>

        {/* ===================================================================
            6. ANÁLISE INDIVIDUAL DE PRODUTOS / MODELOS RECOMENDADOS
            =================================================================== */}
        <div className="space-y-16">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] border-b-4 border-[#16A34A] pb-2 mt-16 flex items-center gap-2">
            Análise Detalhada dos Modelos Selecionados
          </h2>

          {/* MODELO 1: DESTAQUE PRINCIPAL */}
          <section id="item-1-destaque-principal" className="scroll-mt-24 pt-4">
            {/* REGRA: Título usa o nome exato do arquivo de imagem sem extensão */}
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
              Nome Exato da Imagem do Produto 1 Sem Extensao
            </h3>

            {/* Imagem do produto logo abaixo do título */}
            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/Nome Exato da Imagem do Produto 1 Sem Extensao.webp"
                alt="Nome Exato da Imagem do Produto 1 para corte em terrenos difíceis"
                title="Nome Exato da Imagem do Produto 1 Sem Extensao"
                width={800}
                height={533}
                className="max-h-80 object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Este modelo é a melhor indicação para quem precisa enfrentar mato alto sem perda de rotação do cabeçote.
              </p>
              <p>
                Durante a nossa avaliação prática, o conjunto mecânico manteve funcionamento estável mesmo após várias horas seguidas de serviço pesado.
              </p>
              <p>
                O peso da máquina exige o uso correto do cinto duplo para distribuir a carga e evitar dores nas costas ao final do dia.
              </p>
            </div>

            {/* Ficha Técnica Rápida */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Cilindrada / Potência</th>
                    <td className="px-4 py-3 text-sm text-gray-600">52cc / 2.5 HP</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Tipo de Eixo</th>
                    <td className="px-4 py-3 text-sm text-gray-600">Eixo cardã rígido temperado</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Acessórios Inclusos</th>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <Check className="text-[#16A34A] inline mr-1" size={18} /> Lâmina 3 pontas, carretel de nylon e cinto duplo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Card Principal de Afiliado (Usando ID real de src/data/productsrocadeira.ts) */}
            <AffiliateCard id="rocadeira-husqvarna-143rs" />

            {/* Prós e Contras */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Check size={20} className="text-[#16A34A]" /> Prós
                </h4>
                <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
                  <li>Excelente entrega de torque em capim alto e cerrado.</li>
                  <li>Partida fácil com descompressor suave.</li>
                  <li>Amortecedores eficientes que reduzem a vibração no guidão.</li>
                  <li>Peças de reposição e filtros amplamente disponíveis.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <X size={20} className="text-red-600" /> Contras
                </h4>
                <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                  <li>Consumo de combustível maior que modelos de menor cilindrada.</li>
                  <li>Requer atenção constante na proporção correta de óleo 2T.</li>
                </ul>
              </div>
            </div>

            {/* Tabela de Notas por Critério */}
            <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Critério Avaliado</th>
                    <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-[100px]">Nota</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">O que percebemos no teste</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Desempenho em Vegetação Densa</td>
                    <td className="px-4 py-3 text-center font-bold text-[#166534]">9.8 / 10</td>
                    <td className="px-4 py-3 text-gray-600">Corta capim navalha e pequenos arbustos com rapidez sem cair a rotação.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Ergonomia e Conforto Térmico</td>
                    <td className="px-4 py-3 text-center font-bold text-[#166534]">9.4 / 10</td>
                    <td className="px-4 py-3 text-gray-600">Guidão ergonômico bem ajustado com bom equilíbrio de peso no cinto.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Custo-Benefício e Durabilidade</td>
                    <td className="px-4 py-3 text-center font-bold text-[#166534]">9.3 / 10</td>
                    <td className="px-4 py-3 text-gray-600">Componentes de longa vida útil que justificam o investimento no longo prazo.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Banner do Meio (Importado do nicho de roçadeiras) */}
          <BunnerDoMeio />

          {/* MODELO 2: CUSTO-BENEFÍCIO */}
          <section id="item-2-custo-beneficio" className="scroll-mt-24 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#16A34A] pl-4">
              Nome Exato da Imagem do Produto 2 Sem Extensao
            </h3>

            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/Nome Exato da Imagem do Produto 2 Sem Extensao.webp"
                alt="Nome Exato da Imagem do Produto 2 focado em manutenção residencial"
                title="Nome Exato da Imagem do Produto 2 Sem Extensao"
                width={800}
                height={533}
                className="max-h-80 object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Esta segunda opção é perfeita para quem tem foco em manutenção de gramados residenciais e pequenos acabamentos de jardim.
              </p>
              <p>
                Seu grande destaque fica por conta do peso reduzido e da simplicidade de operação, facilitando o manuseio por qualquer pessoa.
              </p>
            </div>

            {/* Card Principal de Afiliado (Usando ID real de src/data/productsrocadeira.ts) */}
            <AffiliateCard id="rocadeira-vulcan-vr520h" />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Check size={20} className="text-[#16A34A]" /> Prós
                </h4>
                <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
                  <li>Preço acessível para quem precisa cuidar de lote próprio.</li>
                  <li>Leve e muito fácil de manobrar em cantos de cerca e muros.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <X size={20} className="text-red-600" /> Contras
                </h4>
                <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                  <li>Menos potência para áreas extensas ou capim muito fibroso.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ===================================================================
            7. BANNER DE CROSS-SELL (ACESSÓRIOS COMPLEMENTARES)
            (Omitir este bloco caso não haja itens complementares no artigo)
            =================================================================== */}
        <div className="my-16 p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-[#16A34A] w-7 h-7 shrink-0" />
            <h3 className="text-2xl font-bold text-[#1a1a1a]">
              Acessórios Recomendados para Completar Seu Equipamento
            </h3>
          </div>
          <p className="text-gray-600 mb-6 text-base">
            Para garantir corte rápido, segurança e máxima durabilidade da sua roçadeira, vale a pena ter estes complementos no seu kit:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cross-Sell 1: Fio de Nylon */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Essencial
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts["fio-nylon"]?.image || "/images/blog/Fio de nylon duraline 3mm e 255m quadrado.webp"}
                    alt="Fio de Nylon Quadrado para Roçadeira"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Fio de Nylon Quadrado 3.0mm
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  O perfil quadrado oferece quatro arestas afiadas que cortam o capim sem desfiar e rendem o dobro do fio redondo.
                </p>
              </div>
              <a
                href={crossSellProducts["fio-nylon"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 2: Óleo 2T */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Proteção do Motor
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts["oleo-2t"]?.image || "/images/blog/Entendendo o Motor Dois Tempos nas Roçadeiras.webp"}
                    alt="Óleo Dois Tempos de Alta Qualidade"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Óleo 2T Semissintético de Qualidade
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Evita o acúmulo de carvão na vela e no pistão, prolongando a vida útil do motor contra travamentos precoces.
                </p>
              </div>
              <a
                href={crossSellProducts["oleo-2t"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Cross-Sell 3: EPI */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#F0FDF4] text-[#166534] border border-[#16A34A]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Segurança
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={crossSellProducts["kit-epi"]?.image || "/images/blog/KIT SEGURANÇA COMPLETO (EPIs).webp"}
                    alt="Kit de Segurança Completo para Roçador"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  Kit Completo de EPIs (Viseira + Perneira)
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Protege os olhos e pernas contra pedregulhos e estilhaços arremessados em alta rotação durante o trabalho.
                </p>
              </div>
              <a
                href={crossSellProducts["kit-epi"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#15803d] hover:bg-[#166534] text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            8. COMPARATIVO COM CONCORRENTES / GUIA DE COMPRA E DICAS DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Como Escolher a Opção Ideal para o Seu Terreno
          </h2>

          <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
            <div className="space-y-4">
              <p>
                Comprar a máquina mais barata costuma sair caro se o motor não tiver torque suficiente para a vegetação que você precisa cortar.
              </p>
              <p>
                Avalie sempre o tamanho da área, a espessura do capim e a ergonomia do cinto de sustentação antes da decisão final.
              </p>
            </div>

            {/* Subseção de Comparativo */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] m-0">
                Roçadeira a Gasolina vs Elétrica / Bateria: Qual Escolher?
              </h3>
              <p className="m-0">
                As versões elétricas e a bateria são imbatíveis em silêncio e praticidade para condomínios e quintais urbanos.
              </p>
              <p className="m-0">
                Já os modelos a gasolina garantem autonomia ilimitada e a potência necessária para terrenos rurais e propriedades sem tomada por perto.
              </p>
            </div>

            {/* Avatar Circular do Autor (Reforço de Autoridade E-E-A-T) */}
            <div className="w-full flex justify-center my-6 not-prose">
              <a href="/author/carlos-henrique/" aria-label="Perfil de Carlos Henrique Menezes">
                <img
                  src="/images/autores/Carlos Henrique Menezes.webp"
                  alt="Carlos Henrique Menezes"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#16A34A] hover:scale-105 transition-transform duration-200 shadow-md"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Box de Destaque: Dica do Especialista */}
            <div className="my-8 p-6 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl shadow-sm text-gray-800 not-prose">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-[#16A34A] shrink-0" size={20} />
                <h3 className="text-lg font-bold text-[#166534]">
                  Dica Prática do Especialista
                </h3>
              </div>
              <p className="text-base leading-relaxed font-medium text-gray-800">
                Nunca guarde a roçadeira por mais de 15 dias com gasolina velha no tanque. Esvazie o reservatório e funcione a máquina até ela apagar por falta de combustível para evitar gomas que entopem os giclês do carburador.
              </p>
            </div>

            {/* Lista Escaneável de Cuidados */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                Erros Comuns que Você Deve Evitar
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Errar na dosagem do óleo dois tempos e travar o pistão do cilindro.</li>
                <li>Usar lâmina metálica em áreas com pedras ou tocos escondidos no capim.</li>
                <li>Trabalhar sem perneira de proteção e óculos de segurança.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner do Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Clique sobre as perguntas abaixo para ver respostas diretas e esclarecer suas dúvidas sobre uso e manutenção.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-gray-900 hover:bg-gray-100/80 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-600 shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-600 shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 pt-2 text-gray-700 border-t border-gray-200 space-y-3 bg-white">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            10. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A] opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black mb-6 text-[#16A34A] tracking-tight">
              Conclusão: Qual Equipamento Vale Mais a Pena?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Acertar na escolha da sua máquina garante um terreno limpo na metade do tempo e sem esforço desnecessário.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Para sítios, chácaras e vegetação pesada, o investimento em um modelo potente com eixo rígido se paga rapidamente na economia de tempo e combustível.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Já para a rotina doméstica em quintais e jardins, modelos mais leves e práticos entregam o acabamento ideal com máximo conforto.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default GuiaPadraoArtigo;
