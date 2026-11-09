/**
 * ============================================================================
 * GUIA PADRÃO DE ATUALIZAÇÃO E CADASTRO DE PRODUTOS
 * Arquivo de Referência e Regras Obrigatórias — Guia do Roçador
 * Caminho: src/components/PadraoAtualizarProduto.tsx
 * ============================================================================
 *
 * OBJETIVO DESTE ARQUIVO:
 * Servir como guia definitivo e checklist obrigatório para o assistente e para o
 * desenvolvedor sempre que for atualizar, cadastrar ou substituir produtos, links
 * de afiliados e imagens nos catálogos do projeto (ex.: `src/data/productsrocadeira.ts`).
 *
 * ----------------------------------------------------------------------------
 * AS 8 REGRAS DE OURO PARA ATUALIZAÇÃO DE PRODUTOS
 * ----------------------------------------------------------------------------
 *
 * 🔒 REGRA 1: PRESERVAÇÃO TOTAL DE IDs EXISTENTES
 *    - NUNCA altere as chaves/IDs já existentes no catálogo (ex.: "tramontina-ap1500t",
 *      "rocadeira-trapp-master-1000", "rocadeira-tekna-bc-1250ss", "garthen-gre-2000").
 *    - Motivo: dezenas de artigos, vitrines, comparativos e componentes `<AffiliateCard id="..." />`
 *      usam essas chaves exatas. Mudar o ID quebra links e imagens em páginas já publicadas.
 *    - Se for um produto novo que não existia: crie uma chave padronizada em kebab-case
 *      baseada no nome e, se útil, um alias curto (ex.: "makita-ur100dzx").
 *
 * 🖼️ REGRA 2: GERENCIAMENTO E SUBSTITUIÇÃO DE IMAGENS
 *    - Localização Oficial: todas as imagens principais de produtos devem residir em:
 *      `public/images/blog/[Nome Da Imagem].webp`
 *    - Detecção em pasta temporária / thumbs: se o usuário salvar ou baixar as novas
 *      imagens em `public/images/blog/thumbs/`, o assistente DEVE copiá-las imediatamente
 *      para a raiz `public/images/blog/`.
 *    - Exclusão Obrigatória da Imagem Antiga: se o produto já tinha uma imagem associada
 *      e foi enviada uma nova para substituí-la, o arquivo antigo DEVE ser apagado
 *      do disco com `Remove-Item` para não acumular lixo no repositório.
 *    - Atualização de Referências no Código: se componentes existentes (como
 *      `MelhorRocadeira.tsx` ou `MelhorRocadeiraEletrica.tsx`) chamavam a imagem antiga
 *      por caminho estático (ex.: `case "id": return "/images/blog/Antiga.webp"`),
 *      essas referências DEVEM ser atualizadas antes ou junto com a exclusão.
 *
 * 🧼 REGRA 3: LIMPEZA DO CAMPO "NAME" (SEM EXTENSÃO .WEBP)
 *    - O campo `name:` exibido ao usuário final DEVE ser limpo, sem extensão de arquivo.
 *    - Se o usuário colar por engano `name: Produto.webp`, o assistente deve salvar
 *      `name: "Produto"` e atribuir `image: "Produto.webp"`.
 *
 * 🔝 REGRA 4: ORGANIZAÇÃO NO ARQUIVO (TOPO REVISADO VS. REVISÃO PENDENTE)
 *    - Todo produto atualizado/revisado DEVE ser posicionado na seção superior:
 *      `// ==========================================`
 *      `// PRODUTOS ATUALIZADOS / REVISADOS`
 *      `// ==========================================`
 *    - Remover Imediatamente da Seção Inferior: se o produto estava antes na seção
 *      `PRODUTOS EM REVISÃO`, a entrada antiga DEVE ser apagada para evitar chaves
 *      duplicadas em objetos literais do TypeScript/Vite.
 *    - Produtos Pendentes: NUNCA descarte modelos que o usuário ainda não analisou.
 *      Mantenha-os na seção de revisão ou liste-os na resposta do chat para a próxima sessão.
 *
 * 🎨 REGRA 5: CONTRASTE WCAG AAA EM BOTÕES E LINKS DE AFILIADO
 *    - Botões de conversão ("VER PREÇO", "Ver Oferta") com texto branco:
 *      `bg-[#15803d] hover:bg-[#166534] text-white` (contraste > 5.0:1 no normal e > 7.1:1 no hover).
 *    - Textos coloridos sobre fundos claros: usar sempre `text-[#166534]`, NUNCA tons
 *      claros como `#16A34A` ou `#4ade80`.
 *    - Links externos de afiliado sempre com:
 *      `target="_blank" rel="noopener noreferrer sponsored nofollow"`
 *
 * 📐 REGRA 6: MINIATURAS OTIMIZADAS PARA VITRINES (THUMBS 120x120)
 *    - Se o produto for exibido em tabelas de vitrine rápida (60x60 CSS), gere uma miniatura
 *      leve (1 a 2 KB) com Sharp em `public/images/blog/thumbs/[Nome]-thumb.webp`
 *      com dimensões 120x120 px e fundo transparente.
 *
 * 🧪 REGRA 7: VERIFICAÇÃO DE INTEGRIDADE E BUILD
 *    - Sempre verifique se os arquivos de imagem realmente existem no disco com `Test-Path`.
 *    - Execute `npm run build` ou teste o servidor de desenvolvimento para certificar
 *      que não existem erros de TypeScript, chaves duplicadas ou 404 de imagem.
 *
 * 🛑 REGRA 8: DISCIPLINA DE VERSIONAMENTO GIT
 *    - NUNCA dê `git push` a menos que o usuário solicite explicitamente ("pode dar git push").
 *    - Mantenha o commit limpo e confirme quais produtos foram movidos.
 * ============================================================================
 */

import React from 'react';
import { CheckCircle2, AlertTriangle, Image as ImageIcon, Database, Sparkles, ShieldCheck } from 'lucide-react';

export const PadraoAtualizarProduto: React.FC = () => {
  const rules = [
    {
      num: 1,
      title: "Preservação de IDs Existentes",
      icon: <Database className="text-[#15803d] shrink-0" size={24} />,
      desc: "NUNCA altere chaves de produtos já cadastrados. Isso preserva referências de AffiliateCard e artigos existentes."
    },
    {
      num: 2,
      title: "Gestão e Limpeza de Imagens",
      icon: <ImageIcon className="text-[#15803d] shrink-0" size={24} />,
      desc: "Mover novas imagens de thumbs/ para public/images/blog/, apagar arquivos antigos substituídos e atualizar referências no código."
    },
    {
      num: 3,
      title: "Nome Limpo do Produto",
      icon: <Sparkles className="text-[#15803d] shrink-0" size={24} />,
      desc: "O campo name nunca deve terminar com .webp, mesmo se copiado por engano no prompt do usuário."
    },
    {
      num: 4,
      title: "Mover ao Topo e Evitar Duplicatas",
      icon: <CheckCircle2 className="text-[#15803d] shrink-0" size={24} />,
      desc: "Colocar o produto no bloco 'PRODUTOS ATUALIZADOS / REVISADOS' e remover a chave antiga da seção de revisão."
    },
    {
      num: 5,
      title: "Contraste WCAG AAA (#15803d)",
      icon: <ShieldCheck className="text-[#15803d] shrink-0" size={24} />,
      desc: "Garantir botões com bg-[#15803d] hover:bg-[#166534] text-white e links sponsored nofollow."
    },
    {
      num: 6,
      title: "Verificação com Build",
      icon: <AlertTriangle className="text-amber-600 shrink-0" size={24} />,
      desc: "Verificar arquivos no disco (Test-Path) e rodar npm run build antes de concluir."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm my-8 font-sans">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider bg-green-100 text-[#166534] px-3 py-1 rounded-full">
          Documentação Interna de Engenharia
        </span>
        <h2 className="text-2xl font-black text-[#1a1a1a] mt-3">
          Padrão Oficial de Atualização de Produtos
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Guia do Roçador — Diretrizes para cadastro em productsrocadeira.ts e sincronização de assets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {rules.map((r) => (
          <div key={r.num} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex gap-3 items-start">
            {r.icon}
            <div>
              <h3 className="font-bold text-[#1a1a1a] text-sm">
                {r.num}. {r.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
        <strong>Lembrete de Versionamento:</strong> Somente execute comandos de <code>git push</code> quando o usuário autorizar expressamente no chat.
      </div>
    </div>
  );
};

export default PadraoAtualizarProduto;
