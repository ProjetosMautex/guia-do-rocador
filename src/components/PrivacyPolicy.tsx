import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Política de Privacidade</h1>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8">
              No <strong>Guia do Roçador</strong>, a sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações dos visitantes e usuários do nosso site.
            </p>
            <p className="mb-8">
              Ao acessar ou utilizar nosso conteúdo, você concorda com os termos descritos nesta política.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              1. Informações que coletamos
            </h3>
            <p className="mb-4">Podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Dados fornecidos voluntariamente:</strong> quando você se cadastra em nossa newsletter, envia mensagens pelo formulário de contato ou participa de promoções.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e cookies.</li>
              <li><strong>Informações de afiliados:</strong> quando você clica em links de produtos da Amazon, Mercado Livre ou outras lojas parceiras, podemos receber dados de rastreamento de afiliados.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              2. Como utilizamos suas informações
            </h3>
            <p className="mb-4">As informações coletadas podem ser usadas para:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Melhorar a experiência do usuário em nosso site.</li>
              <li>Produzir conteúdos mais relevantes de acordo com seus interesses no ramo de roçadeiras e jardinagem.</li>
              <li>Enviar e-mails com novidades, promoções e dicas (apenas se você se inscreveu voluntariamente).</li>
              <li>Analisar estatísticas de acesso e desempenho do site.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              3. Cookies e tecnologias semelhantes
            </h3>
            <p className="mb-4">Utilizamos cookies e ferramentas de terceiros, como Google Analytics e cookies de afiliados, para:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Entender como o site é usado.</li>
              <li>Personalizar anúncios e medir sua eficácia.</li>
              <li>Garantir o funcionamento correto dos links de afiliados.</li>
            </ul>
            <p className="mb-8 italic bg-gray-50 p-4 border-l-4 border-[#16A34A]">
              Você pode gerenciar ou desativar cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              4. Compartilhamento de informações
            </h3>
            <p className="mb-4">Não vendemos ou trocamos seus dados pessoais. Podemos compartilhar informações apenas com:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Parceiros de afiliados (ex.: Amazon, Mercado Livre) quando você acessa links de produtos.</li>
              <li>Ferramentas de análise e marketing (Google, Meta, etc.), para entender o uso do site.</li>
              <li>Autoridades competentes, se exigido por lei.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              5. Segurança das informações
            </h3>
            <p className="mb-8">
              Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acessos não autorizados, alteração, divulgação ou destruição.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              6. Seus direitos (LGPD)
            </h3>
            <p className="mb-4">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Confirmar se tratamos seus dados.</li>
              <li>Solicitar acesso, correção ou exclusão dos seus dados pessoais.</li>
              <li>Revogar o consentimento para uso dos seus dados.</li>
            </ul>
            <p className="mb-8 text-lg">
              Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@guiadorocador.com.br" className="text-[#16A34A] font-bold hover:underline">contato@guiadorocador.com.br</a>
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              7. Links de terceiros
            </h3>
            <p className="mb-8">
              Nosso site pode conter links para sites de terceiros (como lojas online). Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de cada site visitado.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              8. Alterações nesta política
            </h3>
            <p className="mb-8">
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              9. Contato
            </h3>
            <p className="mb-4">Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, fale conosco:</p>
            <p className="mb-12 text-xl font-bold text-[#16A34A]">
              📧 <a href="mailto:contato@guiadorocador.com.br" className="hover:underline">Fale Conosco Aqui</a>
            </p>
            
            <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500 font-medium">
              <p>📅 Última atualização: 04 de abril de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
