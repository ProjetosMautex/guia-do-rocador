import React from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BannerDoMeio } from './BannerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, ArrowRight } from 'lucide-react';

export const MelhorFioNylon: React.FC = () => {
  const featuredIds: ProductId[] = [
    "fio-de-nylon-duraline-3mm-quadrado-255m",
    "fio-de-nylon-quadrado-30mm-laranja-itece",
    "fio-de-nylon-24-mm-e-12-m-tramontina",
    "fio-nylon-2kg-bitola-2-4mm-rocast",
    "fio-de-nylon-quadrado-2-70mm-15-m-vulcan",
    "fio-nylon-3mm-quadrado-2kg-200m-nakasaki"
  ];

  return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/qual o melhor fio de nylon para rocadeira.webp" 
              alt="Qual o melhor fio de nylon para roçadeira" 
              className="w-full h-full object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              6 Melhores Fios de Nylon para Roçadeira de 2026 <br/>
              <span className="text-[#16A34A]">Guia de Compra</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Por</span>
                <a href="/author/jose-ailton" className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10">
                  <img 
                    src="/images/autores/José Ailton da Silva.webp" 
                    alt="José Ailton" 
                    className="w-10 h-10 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform"
                  />
                  José Ailton
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
              A escolha do fio de nylon ideal para sua roçadeira pode parecer um detalhe, mas influencia diretamente na eficiência e durabilidade do seu trabalho. Afinal, um bom fio garante cortes precisos, evita o desgaste precoce do equipamento e otimiza o tempo gasto na manutenção do jardim ou terreno.
            </p>
            <p>
              No entanto, com tantas opções disponíveis, encontrar o produto certo pode ser um desafio. É preciso considerar diferentes espessuras, formatos e materiais para garantir o melhor desempenho. Para te ajudar nessa busca, apresentamos um guia completo com os principais aspectos a serem avaliados.
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="my-16 bg-gray-50 p-4 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-8 text-center uppercase tracking-tight">
              Melhores Fios de Nylon para Roçadeira do Mercado
            </h2>
            
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full border-collapse">
                <tbody>
                  {featuredIds.map((id) => {
                    const product = products[id];
                    let imageName = product.name;
                    if (id === "fio-de-nylon-duraline-3mm-quadrado-255m") imageName = "Fio de nylon duraline 3mm e 255m quadrado";

                    return (
                      <tr key={id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="w-20 p-4 align-middle text-center sm:w-24">
                          <div className="w-16 h-16 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-1 mx-auto">
                            <img 
                              src={`/images/blog/${imageName}.webp`}
                              alt={product.name} 
                              className="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="text-sm md:text-base font-bold text-gray-800 line-clamp-2">
                            {product.name}
                          </div>
                        </td>
                        <td className="w-32 p-4 align-middle text-right sm:w-40">
                          <a 
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="inline-block bg-[#16A34A] text-white font-black text-xs md:text-sm py-2 px-4 rounded-lg hover:bg-[#15803d] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
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

          {/* Detailed Reviews */}
          <div className="space-y-24">
            
            {/* 1. Duraline */}
            <section id="fio-de-nylon-duraline-3mm-quadrado-255m" className="scroll-mt-24">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">1</span>
                Fio de nylon duraline 3mm quadrado 255m
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio de nylon duraline 3mm e 255m quadrado.webp" alt="Fio de nylon duraline 3mm quadrado 255m" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Imagine ter que interromper o trabalho a cada instante para trocar o fio da roçadeira. Com o Duraline de 255m, essa preocupação diminui drasticamente, e o corte quadrado entrega mais agressividade no mato, sem tanto esforço.</p>
                <p>A durabilidade impressiona, resistindo bem ao atrito e calor. Ideal para quem exige alta performance, seja no uso profissional ou no cuidado do jardim de casa. A cor amarela vibrante facilita a visualização do fio durante o uso, evitando acidentes.</p>
              </div>

              <AffiliateCard productId="fio-de-nylon-duraline-3mm-quadrado-255m" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Alto rendimento.</li>
                    <li className="flex items-start gap-2"><span>•</span> Corte eficiente.</li>
                    <li className="flex items-start gap-2"><span>•</span> Boa visibilidade.</li>
                    <li className="flex items-start gap-2"><span>•</span> Maior durabilidade.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Mais pesado.</li>
                    <li className="flex items-start gap-2"><span>•</span> Pode vibrar mais.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Itecê */}
            <section id="fio-de-nylon-quadrado-30mm-laranja-itece" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">2</span>
                Fio De Nylon Quadrado 3,0mm Laranja Para Roçadeira 1kg – Itecê
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio De Nylon Quadrado 3,0mm Laranja Itecê.webp" alt="Fio De Nylon Quadrado 3,0mm Laranja Itecê" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Cansado de fios que quebram antes de terminar o serviço? O fio quadrado da Itecê, com sua espessura de 3,0mm e fabricação em nylon de alta resistência, garante cortes precisos e durabilidade superior. A bobina de 1kg, com aproximadamente 110 metros de fio laranja vibrante, oferece autonomia e visibilidade.</p>
                <p>Ideal para quem busca um acessório confiável para roçadeiras a gasolina ou elétricas, seja no uso profissional ou doméstico. A embalagem em bobina facilita o manuseio e armazenamento.</p>
              </div>

              <AffiliateCard productId="fio-de-nylon-quadrado-30mm-laranja-itece" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Alta durabilidade.</li>
                    <li className="flex items-start gap-2"><span>•</span> Corte agressivo.</li>
                    <li className="flex items-start gap-2"><span>•</span> Boa visibilidade.</li>
                    <li className="flex items-start gap-2"><span>•</span> Ótimo custo-benefício.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Pode ser excessivo para grama leve.</li>
                    <li className="flex items-start gap-2"><span>•</span> Requer roçadeiras compatíveis com 3mm.</li>
                  </ul>
                </div>
              </div>
            </section>

            <BannerDoMeio />

            {/* 3. Tramontina */}
            <section id="fio-de-nylon-24-mm-e-12-m-tramontina" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">3</span>
                Fio De Nylon 2,4 Mm, 12 M De Comprimento – Tramontina
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio De Nylon 2,4 Mm e 12 M Tramontina.webp" alt="Fio De Nylon 2,4 Mm e 12 M Tramontina" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Com o fio de nylon Tramontina de 2,4mm, a manutenção do seu jardim se torna mais ágil e eficiente. Ideal para quem busca praticidade sem abrir mão da qualidade, este fio é perfeito para roçadeiras Tramontina, garantindo encaixe perfeito e desempenho otimizado.</p>
                <p>Cansado de fios que se rompem facilmente? A Tramontina oferece um produto resistente, projetado para lidar com grama e vegetação leve com facilidade. Seu jardim impecável em menos tempo, sem interrupções constantes para troca de fio. A cor vermelha vibrante facilita a visualização, evitando acidentes durante o uso.</p>
                <p>Embora seja ideal para uso doméstico e áreas menores, o comprimento de 12 metros pode ser limitante para grandes terrenos. Mas, para quem busca um produto confiável e de fácil reposição, o Tramontina é a escolha certa. Invista na qualidade e garanta um acabamento perfeito para o seu jardim!</p>
              </div>

              <AffiliateCard productId="fio-de-nylon-24-mm-e-12-m-tramontina" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Fácil instalação.</li>
                    <li className="flex items-start gap-2"><span>•</span> Boa visibilidade.</li>
                    <li className="flex items-start gap-2"><span>•</span> Ideal para uso doméstico.</li>
                    <li className="flex items-start gap-2"><span>•</span> Compatível com roçadeiras Tramontina.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Menor comprimento.</li>
                    <li className="flex items-start gap-2"><span>•</span> Específico para roçadeiras leves.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Rocast */}
            <section id="fio-nylon-2kg-bitola-2-4mm-rocast" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">4</span>
                Fio Nylon Roçadeira 2kg Bitola 2.4mm – Rocast
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio Nylon 2kg Bitola 2.4mm Rocast.webp" alt="Fio Nylon 2kg Bitola 2.4mm Rocast" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Está buscando um fio de nylon que aguente o tranco sem te deixar na mão? O Rocast de 2,4mm e 2kg é a solução para quem precisa de um acessório robusto e durável para a roçadeira. Com seu formato heptagonal, ele corta com mais precisão e agressividade, otimizando seu tempo e esforço.</p>
                <p>Imagine realizar a manutenção do seu jardim ou terreno sem se preocupar com a quebra constante do fio. O Rocast oferece alta resistência e um rendimento superior, permitindo que você trabalhe por mais tempo sem interrupções. Ideal para acabamentos em áreas delicadas e para o corte de vegetação densa, ele se adapta a diferentes necessidades e tipos de roçadeira.</p>
              </div>

              <AffiliateCard productId="fio-nylon-2kg-bitola-2-4mm-rocast" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Alta durabilidade.</li>
                    <li className="flex items-start gap-2"><span>•</span> Corte preciso.</li>
                    <li className="flex items-start gap-2"><span>•</span> Ótimo rendimento.</li>
                    <li className="flex items-start gap-2"><span>•</span> Versátil para diversos usos.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Pode ser muito agressivo para gramados finos.</li>
                    <li className="flex items-start gap-2"><span>•</span> Requer roçadeiras compatíveis com bitola 2,4mm.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Vulcan */}
            <section id="fio-de-nylon-quadrado-2-70mm-15-m-vulcan" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">5</span>
                Fio de Nylon Laranja Quadrado 2,70mm 15 Metros VULCAN-080236
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio de Nylon Quadrado 2,70mm 15 M VULCAN.webp" alt="Fio de Nylon Quadrado 2,70mm 15 M VULCAN" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Precisa de um fio de nylon que ofereça mais resistência em trabalhos pontuais? O modelo Vulcan de 2,70mm com perfil quadrado foi desenvolvido para quem busca um corte mais incisivo em vegetações que exigem um pouco mais do equipamento. Seu formato com arestas ajuda a "seccionar" o mato com maior facilidade, reduzindo o esforço lateral da roçadeira.</p>
                <p>Por ser um rolo de 15 metros, ele é ideal para quem mantém o próprio jardim ou terrenos médios e prefere um acessório de fácil armazenamento e troca rápida. A composição em nylon de alta resistência garante que o fio suporte melhor o contato com obstáculos, mantendo a eficiência do corte por mais tempo sem quebras excessivas.</p>
              </div>

              <AffiliateCard productId="fio-de-nylon-quadrado-2-70mm-15-m-vulcan" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Alta durabilidade e resistência.</li>
                    <li className="flex items-start gap-2"><span>•</span> Excelente desempenho em vegetação densa.</li>
                    <li className="flex items-start gap-2"><span>•</span> Perfil quadrado para corte mais agressivo.</li>
                    <li className="flex items-start gap-2"><span>•</span> Alta visibilidade durante o uso.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Menor autonomia (15 metros).</li>
                    <li className="flex items-start gap-2"><span>•</span> Maior esforço do motor em máquinas pequenas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Nakasaki */}
            <section id="fio-nylon-3mm-quadrado-2kg-200m-nakasaki" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">6</span>
                Bobina Fio Nylon Roçadeira 3mm Quadrado 2kg 200m NAKASAKI
              </h3>
              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/Fio Nylon 3mm Quadrado 2kg 200m NAKASAKI.webp" alt="Fio Nylon 3mm Quadrado 2kg 200m NAKASAKI" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Já pensou em ter um rolo de fio que parece não ter fim? Com 200 metros, o Nakasaki 3mm quadrado te dá autonomia para longas jornadas, reduzindo idas e vindas para reposição. A agressividade do corte quadrado, aliada à durabilidade do nylon, transforma a roçada em tarefa rápida e eficiente.</p>
              </div>

              <AffiliateCard productId="fio-nylon-3mm-quadrado-2kg-200m-nakasaki" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Alto rendimento.</li>
                    <li className="flex items-start gap-2"><span>•</span> Corte agressivo.</li>
                    <li className="flex items-start gap-2"><span>•</span> Ótimo custo-benefício.</li>
                    <li className="flex items-start gap-2"><span>•</span> Boa visibilidade (laranja).</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Requer roçadeiras compatíveis (fortes).</li>
                    <li className="flex items-start gap-2"><span>•</span> Pode ser excessivo para grama fina.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Buying Guide Sections */}
          <section className="mt-24 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Para que serve o Fio de Nylon para Roçadeira?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none mb-10">
              <p>O fio de nylon é um componente fundamental da roçadeira, responsável por transformar a potência em corte. Vamos explorar as diversas aplicações desse acessório e como ele pode otimizar o seu trabalho de jardinagem e manutenção de terrenos.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Como escolher o melhor Fio de Nylon para Roçadeira?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none mb-10">
              <p>A escolha do fio de nylon ideal envolve diversos fatores que vão além do simples corte da vegetação. Entenda os principais critérios para selecionar o produto certo, otimizar seu tempo e proteger seu equipamento, garantindo um trabalho eficiente e duradouro.</p>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Espessura</h3>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>A espessura do fio é um fator crítico, pois impacta diretamente no tipo de vegetação que você poderá cortar. Fios mais finos, geralmente entre 1,5mm e 2,0mm, são ideais para grama e acabamentos delicados. Já os mais grossos, de 2,4mm a 3,0mm ou mais, enfrentam mato denso e arbustos com maior eficiência.</p>
                  <p>Contudo, atenção! A espessura inadequada pode danificar sua roçadeira. Verifique as especificações do fabricante para garantir a compatibilidade. Usar um fio muito grosso em uma roçadeira fraca pode sobrecarregar o motor, diminuindo sua vida útil.</p>
                  <p>Portanto, antes de comprar, avalie o tipo de vegetação e a potência da sua máquina. Assim, você garante um trabalho eficiente e prolonga a vida útil do seu equipamento.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Resistência</h3>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>A durabilidade de um fio de nylon é crucial, especialmente em terrenos acidentados ou com vegetação densa. Imagine a frustração de ter que interromper constantemente o trabalho para substituir um fio que se rompe com facilidade.</p>
                  <p>A resistência está diretamente ligada à qualidade do material e ao processo de fabricação. Fios produzidos com nylon de alta qualidade e tecnologias avançadas suportam melhor o atrito, o calor e o impacto, garantindo maior vida útil.</p>
                  <p>Porém, fique atento a preços muito abaixo do mercado. Desconfie de produtos excessivamente baratos, pois a economia inicial pode se transformar em prejuízo, com a necessidade de substituições frequentes e perda de tempo. Priorize a qualidade e a procedência para um trabalho eficiente e duradouro.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Tipos de fios</h3>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>A escolha do formato do fio de nylon vai além da preferência pessoal, impactando diretamente no tipo de corte e na sua eficiência. Fios redondos são versáteis para gramados, enquanto os quadrados e pentagonais oferecem maior agressividade contra vegetação densa, cortando em vez de apenas "despedaçar".</p>
                  <p>Já os fios torcidos ou com serrilhas são projetados para trabalhos pesados, como remoção de ervas daninhas e pequenos arbustos. Eles minimizam o esforço e aumentam a produtividade.</p>
                  <p>Além disso, alguns fios incorporam materiais especiais, como alumínio, para aumentar a durabilidade e a resistência ao desgaste. Portanto, avalie suas necessidades e escolha o tipo de fio que melhor se adapta ao seu tipo de trabalho.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-24 pt-16 border-t border-gray-200 bg-slate-50 -mx-4 px-4 py-16 sm:-mx-8 sm:px-8">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-12 uppercase tracking-tighter text-center">Perguntas frequentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-center text-lg text-gray-600 mb-8">Está com dúvidas sobre qual fio de nylon escolher ou como utilizá-lo corretamente? Reunimos aqui as perguntas mais frequentes para te ajudar a dominar o assunto e evitar erros comuns.</p>

              {[
                { 
                  q: "Qual a durabilidade média de um fio de nylon para roçadeira?", 
                  a: "Depende do uso e do terreno. Em áreas com pedras e obstáculos, o desgaste é maior. Fios de boa qualidade, no entanto, podem durar várias horas de uso contínuo." 
                },
                { 
                  q: "Posso usar qualquer fio de nylon em qualquer roçadeira?", 
                  a: "Não! Verifique sempre a compatibilidade da espessura do fio com o modelo da sua roçadeira. Usar um fio inadequado pode danificar o equipamento." 
                },
                { 
                  q: "Qual a diferença entre os formatos redondo, quadrado e estrelado?", 
                  a: "O fio redondo é mais versátil para grama. O quadrado oferece corte mais agressivo em vegetação densa. Já o estrelado combina durabilidade e eficiência em terrenos mistos." 
                },
                { 
                  q: "Como evitar que o fio de nylon se quebre com facilidade?", 
                  a: "Use a espessura correta para o trabalho, evite forçar a roçadeira contra obstáculos e mantenha o carretel limpo. Fios de nylon de alta qualidade também são mais resistentes." 
                },
                { 
                  q: "É seguro usar fio de aço em roçadeiras?", 
                  a: "Embora alguns usem, não é recomendado. O fio de aço pode ser perigoso, pois fragmentos podem ser lançados em alta velocidade. Priorize sempre fios de nylon de qualidade." 
                },
                { 
                  q: "Qual a melhor forma de armazenar o fio de nylon?", 
                  a: "Em local seco e arejado, longe da luz solar direta. A umidade e o calor podem comprometer a qualidade do material, tornando-o mais quebradiço." 
                },
                { 
                  q: "Como trocar o fio de nylon da roçadeira?", 
                  a: "Consulte o manual da sua roçadeira. Em geral, é preciso abrir o carretel, inserir o novo fio e enrolá-lo corretamente." 
                },
                { 
                  q: "Onde encontrar fios de nylon de qualidade?", 
                  a: "Em lojas especializadas em jardinagem, ferramentas e materiais de construção. Pesquise marcas confiáveis e compare preços antes de comprar." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#16A34A]/30 transition-colors">
                  <h3 className="text-lg font-black text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-24 text-center">
            <div className="max-w-3xl mx-auto py-12 px-6 bg-[#16A34A]/5 rounded-[40px] border-2 border-dashed border-[#16A34A]/20">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">Conclusão</h2>
              <div className="prose prose-lg text-gray-700 max-w-none mb-10">
                <p>Com este guia completo, a escolha do fio ideal para sua roçadeira deixa de ser um dilema e se torna uma decisão informada e assertiva. Priorize a compatibilidade com seu equipamento, o tipo de vegetação a ser cortada e, acima de tudo, a qualidade do material. Invista em um fio que te entregue durabilidade, eficiência e segurança, transformando a manutenção do seu jardim em uma tarefa prazerosa e com resultados impecáveis. Agora, com o conhecimento em mãos, prepare-se para elevar o nível do seu trabalho e desfrutar de um espaço verde sempre bem cuidado.</p>
              </div>
            </div>
          </section>

        </div>
    </div>
  );
};
