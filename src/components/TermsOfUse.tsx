import React from 'react';

export const TermsOfUse: React.FC = () => {
  return (
    <>
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Termos de Uso</h1>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8">
              Bem-vindo ao <strong>Guia do Roçador</strong>! Antes de utilizar nosso site, pedimos que leia atentamente os seguintes Termos de Uso. Ao acessar ou utilizar o site, você concorda com estes termos.
            </p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              1. Aceitação dos Termos
            </h3>
            <p className="mb-4">Ao acessar o Guia do Roçador, você concorda com:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Estes Termos de Uso;</li>
              <li>Nossa Política de Privacidade;</li>
              <li>As leis aplicáveis no Brasil.</li>
            </ul>
            <p className="mb-8">Caso não concorde com algum dos termos, recomendamos não utilizar o site.</p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              2. Uso do site
            </h3>
            <p className="mb-4">Você se compromete a utilizar o site apenas para fins legais e de acordo com estes Termos. É proibido:</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Publicar conteúdos ilegais, difamatórios ou que violem direitos de terceiros;</li>
              <li>Tentar acessar áreas restritas do site sem autorização;</li>
              <li>Introduzir vírus, malwares ou qualquer código nocivo;</li>
              <li>Utilizar o site para práticas de spam ou fraudes.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              3. Conteúdo do site
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Todo conteúdo do site, incluindo textos, imagens, vídeos, gráficos e códigos, é protegido por direitos autorais e pertence ao Guia do Roçador ou aos parceiros licenciados.</li>
              <li>É permitido compartilhar o conteúdo apenas para fins pessoais ou educativos, desde que citado corretamente o autor e a fonte.</li>
              <li>O usuário não pode reproduzir, modificar, vender ou distribuir conteúdos sem autorização expressa.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              4. Links de afiliados e terceiros
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>O site pode conter links de afiliados (como Amazon, Mercado Livre e outros). Recebemos comissão por vendas realizadas através desses links.</li>
              <li>Não somos responsáveis por políticas, conteúdo ou segurança de sites de terceiros. Recomendamos a leitura das políticas de cada site visitado.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              5. Isenção de responsabilidade
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>As informações fornecidas no site têm caráter informativo e educativo, focadas no mercado de ferramentas e jardinagem.</li>
              <li>O Guia do Roçador não se responsabiliza por acidentes, danos diretos ou indiretos resultantes do uso incorreto dos equipamentos abordados, ou da interpretação do conteúdo e dos produtos indicados.</li>
              <li>Os preços, características e disponibilidade de produtos indicados podem variar sem aviso prévio.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              6. Modificações nos termos
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Podemos atualizar estes Termos de Uso a qualquer momento.</li>
              <li>A versão mais recente estará sempre disponível nesta página, com a data de atualização.</li>
              <li>O uso continuado do site após alterações implica concordância com os novos termos.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              7. Privacidade
            </h3>
            <p className="mb-8 font-medium">O uso do site está sujeito à nossa Política de Privacidade, que detalha a coleta e uso de informações dos usuários.</p>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              8. Legislação aplicável e foro
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Estes Termos de Uso são regidos pelas leis brasileiras.</li>
              <li>Qualquer disputa relacionada ao site será resolvida no foro da comarca de Petrolina/PE, com exclusão de qualquer outro.</li>
            </ul>

            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-black mt-12 mb-6 border-b-2 border-gray-100 pb-2">
              9. Contato
            </h3>
            <p className="mb-4 text-lg font-semibold">Em caso de dúvidas sobre os Termos de Uso, entre em contato:</p>
            <p className="text-xl font-bold text-[#16A34A]">
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
