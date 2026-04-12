import React from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BannerDoMeio } from './BannerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, ArrowRight } from 'lucide-react';

export const StihlVsHusqvarna: React.FC = () => {
  const featuredIds: ProductId[] = [
    "husqvarna-143rs",
    "husqvarna-321r",
    "husqvarna-236rs",
    "stihl-rl430acn-tk-com-oleo",
    "stihl-fs-221"
  ];

  const getProductImage = (id: ProductId) => {
    switch (id) {
      case "husqvarna-143rs": return "/images/blog/Husqvarna 143rs.webp";
      case "husqvarna-321r": return "/images/blog/Husqvarna 321r.webp";
      case "husqvarna-236rs": return "/images/blog/Husqvarna 236rs.webp";
      case "stihl-rl430acn-tk-com-oleo": return "/images/blog/Stihl Rl430acn-tk com Óleo.webp";
      case "stihl-fs-221": return "/images/blog/Stihl FS 221.webp";
      default: return "";
    }
  };

  return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/qual a melhor roçadeira a gasolina stihl ou husqvarna.webp" 
              alt="Stihl ou Husqvarna" 
              className="w-full h-full object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Stihl ou Husqvarna <br/>
              <span className="text-[#16A34A]">Qual a Melhor Roçadeira a Gasolina em 2026?</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Por</span>
                <a href="/author/carlos-henrique" className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10">
                  <img 
                    src="/images/autores/Carlos Henrique Menezes.webp" 
                    alt="Carlos Henrique Menezes" 
                    className="w-10 h-10 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform"
                  />
                  Carlos Henrique Menezes
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Side by side Images */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-gray-50 p-6 sm:p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <div className="w-full sm:w-5/12 flex flex-col items-center group relative z-10">
              <h3 className="font-black text-2xl sm:text-3xl mb-4 text-[#F26522] uppercase tracking-wider text-center">Stihl</h3>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex items-center justify-center w-full h-56 transition-all duration-500 group-hover:shadow-md group-hover:border-orange-200">
                <img src="/images/blog/Stihl.webp" alt="Roçadeira Stihl" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </div>

            <div className="w-full sm:w-2/12 flex flex-col items-center justify-center py-4 sm:py-0 relative z-10 mt-auto mb-auto">
              <div className="bg-[#1a1a1a] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black shadow-lg transform rotate-12">VS</div>
            </div>

            <div className="w-full sm:w-5/12 flex flex-col items-center group relative z-10">
               <h3 className="font-black text-2xl sm:text-3xl mb-4 text-[#003C7A] uppercase tracking-wider text-center">Husqvarna</h3>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex items-center justify-center w-full h-56 transition-all duration-500 group-hover:shadow-md group-hover:border-blue-200">
                 <img src="/images/blog/Husqvarna.webp" alt="Roçadeira Husqvarna" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
               </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
              Encontrar a roçadeira a gasolina ideal pode ser um desafio, especialmente com tantas opções no mercado. A escolha certa faz toda a diferença na hora de cuidar do jardim ou realizar trabalhos mais pesados.
            </p>
            <p>
              Stihl e Husqvarna são frequentemente as primeiras marcas que vêm à mente, mas qual delas oferece o melhor equipamento para as suas necessidades? Ambas são reconhecidas pela qualidade e durabilidade, mas cada uma tem suas particularidades.
            </p>
            <p>
              Para tomar uma decisão informada, é importante considerar as diferenças entre as marcas, os modelos disponíveis e as características técnicas de cada roçadeira. Vamos analisar em detalhes o que cada marca tem a oferecer em 2026.
            </p>
          </div>


          <section className="mt-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Roçadeira Stihl vs. Husqvarna: Quais as Diferenças?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
              <p>Stihl e Husqvarna, gigantes do mercado, oferecem roçadeiras com características distintas para diferentes tipos de uso:</p>
              <ul>
                <li><strong>Roçadeiras laterais:</strong> São ideais para terrenos planos e serviços mais leves.</li>
                <li><strong>Roçadeiras costais:</strong> São mais indicadas para terrenos irregulares e trabalhos mais pesados.</li>
              </ul>
              <p>
                A Stihl é amplamente reconhecida pela robustez e durabilidade insuperável de seus equipamentos. É a escolha primária de quem busca ferramentas confiáveis para trabalhos contínuos e intensos, somada a uma excelente e ampla rede de assistência técnica no Brasil. 
              </p>
              <p>
                Já a Husqvarna ganha enorme destaque pela sua constante inovação. A marca sueca aplica tecnologias proprietárias que visam não apenas otimizar a performance de corte, mas focar na ergonomia do operador, redução expressiva de vibrações e maior eficiência no consumo de combustível.
              </p>
              <p className="font-bold text-gray-900 mt-8 text-xl">Confira as principais opções para você ficar de olho em 2026:</p>
            </div>
          </section>

          {/* Vitrine / Showcase Table */}
          <div className="my-12 bg-gray-50 p-4 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-8 text-center uppercase tracking-tight">
              Principais Modelos das Marcas
            </h2>
            
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full border-collapse">
                <tbody>
                  {featuredIds.map((id) => {
                    const product = products[id];
                    return (
                      <tr key={id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="w-20 p-4 align-middle text-center sm:w-24">
                          <div className="w-16 h-16 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-1 mx-auto">
                            <img 
                              src={getProductImage(id)}
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

          <section className="mt-16 mb-20 bg-[#1a1a1a] text-white p-8 sm:p-10 rounded-[32px]">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Para Quem Cada Marca é Mais Indicada?</h3>
            <div className="prose prose-lg text-gray-300 max-w-none space-y-4">
              <p>A Stihl atende primariamente quem busca força bruta e durabilidade acima da média, sendo ideal para uso profissional em fazendas, grandes lotes e rotinas de manutenção pesada. A Husqvarna é perfeita para quem prioriza inovação, tecnologia focada no operador, ergonomia impecável e economia de combustível a longo prazo.</p>
              <p>Se você precisa de uma máquina que aguente o tranco diário sem reclamações, a Stihl é a escolha clássica. Mas, se busca recursos modernos, emissão reduzida de gases e maior eficiência durante longas horas (com menos dor no corpo), a Husqvarna pode ser mais adequada. A decisão depende sempre do seu perfil e do tipo de vegetação predominante nas suas demandas.</p>
            </div>
          </section>

          {/* Detailed Reviews */}
          <div className="space-y-24">
            
            {/* 1. Husqvarna 143rs */}
            <section id="husqvarna-143rs" className="scroll-mt-24">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">1</span>
                Roçadeira lateral a gasolina 2,1 hp 41,5 cc 2 tempos - 143RS - Husqvarna
              </h3>
              <div className="w-full flex justify-center mb-10 group bg-gray-50 rounded-3xl p-10 border border-gray-100">
                 <img src={getProductImage("husqvarna-143rs")} alt="Husqvarna 143RS" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Para quem busca um equipamento robusto e eficiente, a Roçadeira Husqvarna 143RS surge como uma solução potente. Equipada com um motor de 2 tempos e 2,1 hp, ela enfrenta com desenvoltura grama alta e vegetação densa, otimizando seu tempo e esforço. A durabilidade é uma marca registrada, assegurando que a máquina suporte o uso contínuo em diversas aplicações, desde o cuidado com a propriedade rural até a manutenção profissional de terrenos.</p>
                <p>O design também merece destaque. O guidão ergonômico tipo bicicleta e o cinturão Balance 55 proporcionam conforto e reduzem a fadiga, permitindo longas jornadas de trabalho sem comprometer o bem-estar do operador. Além disso, acompanha tanto o cabeçote de nylon para acabamentos leves quanto a lâmina de 2 pontas para os desafios mais pesados.</p>
                <p>Apesar de sua potência e robustez, é importante estar ciente de que o peso da máquina pode ser um fator limitante para alguns usuários, especialmente em trabalhos prolongados. Outro ponto a considerar é o consumo de combustível, que tende a ser um pouco maior devido à alta performance entregue pelo motor.</p>
              </div>

              <div className="mt-10">
                <AffiliateCard productId="husqvarna-143rs" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Alta potência para vegetação densa.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Corte rápido e eficiente.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Construção robusta e durável.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Acompanha acessórios versáteis e cinto confortável.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Peso pode ser um fator limitante (7.6 kg sem equipamento de corte).</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Consumo de combustível pode ser um pouco maior pelo motor de 41,5cc.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Husqvarna 321R */}
            <section id="husqvarna-321r" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">2</span>
                Roçadeira a Gasolina Husqvarna 321r 25,4cc 1hp Partida Fácil
              </h3>
              <div className="w-full flex justify-center mb-10 group bg-gray-50 rounded-3xl p-10 border border-gray-100">
                 <img src={getProductImage("husqvarna-321r")} alt="Husqvarna 321R" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Se você busca uma roçadeira para jardinagem residencial e serviços leves, a Husqvarna 321R pode ser a solução definitiva. Imagine ter em mãos um equipamento que te libera do esforço excessivo no momento de ligar, graças ao sistema Smart Start, que reduz em até 40% a força necessária para o arranque do motor.</p>
                <p>Com 1 hp e um motor de 25,4 cc, essa roçadeira oferece o equilíbrio ideal entre potência para o uso moderado e economia de combustível. A 321R enfrenta a grama e a vegetação rasteira sem dificuldades, proporcionando um corte eficiente e muito uniforme. Além disso, seu baixo peso minimiza o cansaço do operador.</p>
                <p>Apesar de ser perfeita e muito tecnológica para o uso doméstico ou de paisagismo urbano leve, vale a ressalva óbvia de que a 321R não é a máquina ideal caso você precise frequentemente lidar com mato lenhoso ou extremamente denso em propriedades amplas.</p>
              </div>

              <div className="mt-10">
                <AffiliateCard productId="husqvarna-321r" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Partida fácil e incrivelmente suave (Smart Start).</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Muito leve e fácil de manusear.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Ideal para uso em residências e condomínios.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Excelente economia e custo-benefício.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Algumas variações do produto na internet não acompanham a lâmina de corte.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Potência estritamente limitada para vegetação fina e gramados.</li>
                  </ul>
                </div>
              </div>
            </section>

            <BannerDoMeio />

            {/* 3. Husqvarna 236RS */}
            <section id="husqvarna-236rs" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">3</span>
                Roçadeira lateral a gasolina 1,61 hp 33,6 cc 2 tempos - 236RS - Husqvarna
              </h3>
              <div className="w-full flex justify-center mb-10 group bg-gray-50 rounded-3xl p-10 border border-gray-100">
                 <img src={getProductImage("husqvarna-236rs")} alt="Husqvarna 236RS" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Husqvarna 236RS é a parceira ideal para quem busca versatilidade no meio termo entre o doméstico e o profissional. Diferente do modelo anterior, ela escala a força com um motor de 33,6 cc e 1,61 hp. Isso confere a ela a potência exata para lidar com gramas grossas, pastagens abertas e vegetação mais resistente, mantendo o nível de ergonomia inigualável da fabricante.</p>
                <p>O design, o motor X-Torq e o cinturão Balance 35 proporcionam um conforto formidável e uma excelente distribuição do peso durante longas jornadas em pomares ou chácaras, reduzindo as dores nas costas ao fim do dia. Geralmente, este modelo acompanha tanto a lâmina metálica resistente para desafios densos quanto o cabeçote com fio de nylon T35 para os cantos e acabamentos na grama.</p>
                <p>Lembre-se que ela dita a régua de um equipamento intermediário/poderoso. Caso a sua rotina consista em cortar varas duras, raízes pesadas ou clarear matas fechadas rotineiramente, um modelo acima como a 143RS poderia ser um passo mais certeiro em durabilidade contínua. Outro detalhe mencionado por usuários é que seu nível de ruído em operação não está entre os menores da categoria.</p>
              </div>

              <div className="mt-10">
                <AffiliateCard productId="husqvarna-236rs" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Versatilidade perfeita para chácaras e sítios.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Potência (1,61 hp) ideal equilibrada com baixo peso.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Transmissão robusta capaz de receber lâminas e fio de nylon.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Tecnologia de economia com cinturão ergonômico.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Não é a máquina brutal definitiva para serviços florestais intensos.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Nível de ruído e vibração notável em aceleração máxima constante.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Stihl Rl430acn-tk com Óleo */}
            <section id="stihl-rl430acn-tk-com-oleo" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">4</span>
                Roçadeira Profissional Com Óleo Stihl Rl430acntk Tekna 2t 43cc 1,7hp
              </h3>
              <div className="w-full flex justify-center mb-10 group bg-gray-50 rounded-3xl p-10 border border-gray-100">
                 <img src={getProductImage("stihl-rl430acn-tk-com-oleo")} alt="Tekna Rl430acntk com oleo stihl" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Nós precisamos quebrar as regras e adicionar a Tekna RL430ACN-TK nesta lista comparativa como um bônus atrativo. Faturar uma máquina projetada para lidar com vegetação densa aliada ao ótimo benefício de vir acompanhada com o óleo 2T da própria Stihl — que é a referência máxima em lubrificação do mercado.</p>
                <p>Ela surge como uma alternativa de ótimo custo-benefício. Com seus generosos 43cc e 1,7hp, a máquina apresenta agilidade no corte de lotes amplos de mato indesejado. O componente mais valioso da Tekna nesta versão é sua durabilidade interna atrelada ao uso do lubrificante de altíssima qualidade Stihl e seu eixo cardã de 9 estrias com encaixe universal para as mais variadas lâminas de mercado.</p>
                <p>Para longas jornadas, o suporte conta com guidão tipo bicicleta ajustável e um cinto de sustentação ergonômico. Porém, tenha consciência: em contrapartida ao custo acessível e ao kit completo na caixa, o peso base operacional desta roçadeira pode chegar facilmente a 12 kg. Exigirá braço e preparo físico caso você decida utilizá-la diariamente de sol a sol. Vale prestar atenção na garantia padrão, que costuma ser de 6 meses comparado ao ano convencional das concorrentes Top Premium.</p>
              </div>

              <div className="mt-10">
                <AffiliateCard productId="stihl-rl430acn-tk-com-oleo" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Motor de alta cilindrada com poder de fogo e robustez (43cc).</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Combinação perfeita do kit que inclui óleo 2T 100% autêntico Stihl.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Encaixe universal para os mais variados discos e carretéis.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Custo-benefício esmagador.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Muito pesada; exige alto nível de força e técnica em taludes.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Garantia padrão restrita a apenas 6 meses.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Stihl FS 221 */}
            <section id="stihl-fs-221" className="scroll-mt-24 pt-16 border-t border-gray-100">
              <h3 className="text-3xl font-black text-[#1a1a1a] mb-8 flex items-center gap-4">
                <span className="bg-[#16A34A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0">5</span>
                Roçadeira Stihl FS 221
              </h3>
              <div className="w-full flex justify-center mb-10 group bg-gray-50 rounded-3xl p-10 border border-gray-100">
                 <img src={getProductImage("stihl-fs-221")} alt="Stihl FS 221" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>E quando falamos do padrão-ouro da força bruta profissional, a Stihl FS 221 entra no palco. Esse é o modelo para quem ganha a vida cortando mato pesado, roçando cafebelo, beira de cerca e faz grandes manutenções de espaços rurais que foram tomados pela natureza.</p>
                <p>O seu incansável motor suporta lâminas circulares superpesadas e cabos de nylon extensos sem baixar excessivamente a rotação. A Stihl é reverenciada pelos componentes mecânicos (peças de transmissão, coroa, cardã, embreagem) virtualmente indestrutíveis num uso cotidiano de impacto severo.</p>
                <p>Enquanto a FS 221 é o suprassumo da força de trabalho implacável, o preço desse sucesso é transferido ao bolso no seu valor de revenda considerável. Além de tudo, prepare o físico e os braços. Seu eixo duro e a ausência dos refinados sistemas antivibração da concorrente deixam claro que esta é uma máquina essencialmente desenhada para entregar corte contínuo a longo prazo.</p>
              </div>

              <div className="mt-10">
                <AffiliateCard productId="stihl-fs-221" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Potência maciça e implacável para vegetação espessa.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Mecânica de altíssima confiabilidade — o "trator" das roçadeiras.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Melhor rede autorizada de assistência e repasse de peças do mercado.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Maior liquidez do mercado num cenário de revenda para usados.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Valor de investimento bem mais elevado.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Níveis de conforto, vibração e tecnologias menos presentes em comparação à linha 500 da concorrência.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-24 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Visão Geral das Marcas</h2>
            
            <div className="space-y-12">
              <div className="bg-[#F26522]/5 p-8 rounded-3xl border border-[#F26522]/20">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 text-[#F26522]">Stihl – Tradição e Qualidade</h3>
                <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                  <p>Fundada na Alemanha, a Stihl carrega consigo décadas de experiência global impecável, consolidando-se como o verdadeiro sinônimo de robustez impenetrável. Ela é a escolha sagrada de profissionais que demandam equipamentos puramente capazes de suportar longas jornadas com terra, seivas e madeiras densas batendo em sua saia.</p>
                  <p>A marca é historicamente reconhecida pelos torque agressivo de seus componentes. Se você bater uma haste ou o eixo de transmissão num toco espesso escondido, uma Stihl raramente deixará você na mão rachando de imediato as proteções. Ela oferece, sem margem a dúvida, a resposta duradoura para o mercado pesado na terra de Santa Catarina até o Pantanal.</p>
                </div>
              </div>

              <div className="bg-[#003C7A]/5 p-8 rounded-3xl border border-[#003C7A]/20">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 text-[#003C7A]">Husqvarna – Inovação e Tecnologia</h3>
                <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                  <p>A Husqvarna abraça e empurra os limites da tecnologia ambiental embarcada nas máquinas operacionais. Com foco central em otimizar as dores e exaustão do usuário rotineiro, seus produtos oferecem designs que aumentam a tolerância do corpo humano no fim do dia usando suspensórios bem pensados como a linha Balance, aliada a motores que reduzem severamente o impacto carbônico e consumo de tanque (linha X-Torq).</p>
                  <p>A marca se orgulha desde os sistemas de partida extremamente leves e dóceis, até recursos modernos de segurança ativada. Enquanto alguns cortam usando força e ignorância, a filosofia desta multinacional tem como premissa cortar os matos rurais com precisão cirúrgica sem esgotar as costas do operador.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Comparação Técnica</h2>
            
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Potência e Desempenho Bruto</h3>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Potência bruta contra uso otimizado. A escolha impacta de frente com a lenha espessa do dia a dia. Modelos Stihl tendem a empurrar a lâmina contra resistências enormes com facilidade (o famigerado "torque limpo"), ao passo que as Husqvarna da mesma faixa cilindrada apostam no equilíbrio constante de RPMs ágeis.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Consumo de Combustível</h3>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Com qual formato você economiza mais o seu bolso? Husqvarna toma a dianteira considerável em maquinários de grande porte e novas gerações, que com seus motores patenteados, sugam muito menos mistura gasosa se comparada a uma tradicional e insaciável Stihl da década passada em potência extrema.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Peso e Ergonomia Humana</h3>
                  <p className="text-gray-600 leading-relaxed mb-0">
                    Empunhadura redondinha da alça em "L" frente ao poderoso guidão de "bicicleta", as cintas de sustentação almofadadas costais, balanceamento centralizado. Husqvarna historicamente possui patentes de classe superior entregando menor peso da carcaça do motor e isolação LowVib incomparável impedindo que a "tremideira" amorteça seus braços precocemente.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-4xl shadow-inner border border-purple-200">💪</div>
                </div>
              </div>
            </div>
            {/* Comparação Direta (Table) */}
            <div className="mt-8 mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-[#1a1a1a]/5">
              <div className="bg-[#1a1a1a] text-white py-5 px-6 font-black text-xl flex items-center gap-3">
                <span className="text-2xl">📊</span> Comparação direta
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 min-w-[600px]">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-gray-900 w-1/4 uppercase tracking-wider text-xs">Característica</th>
                      <th className="px-6 py-4 font-black text-lg w-3/8 text-[#F26522] border-l border-gray-200 bg-orange-50/30">Stihl</th>
                      <th className="px-6 py-4 font-black text-lg w-3/8 text-[#003C7A] border-l border-gray-200 bg-blue-50/30">Husqvarna</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Perfil</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Profissional pesado</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Semi-profissional / profissional</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Potência</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Alta</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Média-alta</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Conforto</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Bom</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium text-[#16A34A] flex items-center gap-1"><Check className="w-4 h-4" /> Muito bom (ergonomia superior)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Vibração</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Média</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium text-[#16A34A] flex items-center gap-1"><Check className="w-4 h-4" /> Baixa</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Manutenção</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium text-[#16A34A] flex items-center gap-1"><Check className="w-4 h-4" /> Simples</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-medium">Mais tecnológica</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold bg-gray-50/50">Indicação</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-bold text-gray-800">Mato alto / serviço pesado</td>
                      <td className="px-6 py-4 border-l border-gray-200 font-bold text-gray-800">Uso contínuo / áreas médias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Recursos e Tecnologias Exclusivas</h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p>As marcas investem centenas de milhões na Europa para melhorar peças que os usuários muitas vezes nem veem rolando internamente.</p>
              <p>Um forte exemplo é o <strong>sistema antivibração da Husqvarna</strong> (o <em>LowVib</em> já citado), que separa o conjunto do motor das hastes de pilotagem, poupando a estrutura do ombro frente a solavancos brutos. Simultaneamente, este fabricante possui a arquitetura <em>E-TECH II</em> que varre grande parte das emissões cruas poluentes que subiriam na cara do trabalhador.</p>
              <p>A Stihl, por sua vez, revida magistralmente com o sistema <strong>ElastoStart</strong>, uma joia cobiçada pelos braços cansados. O puxão na cordinha tradicional recebe uma peça de suspensão flexível e um amortecedor oculto minimizando picos de resistência brusca nas cordas de ignição, evitando trancos absurdos na pegada da mão nas manhãs frias de arranque pesado. Se aliam também a soluções excelentes de injeção M-Tronic automáticas em linhas altíssimas.</p>
            </div>
          </section>

          <section className="mt-16 bg-white p-8 sm:p-12 rounded-[40px] border border-gray-200 shadow-xl shadow-[#16A34A]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 blur-2xl opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter flex items-center gap-4">
                <span className="text-[#16A34A] bg-green-50 p-2 rounded-xl">🛡️</span> Atendimento e Assistência Técnica
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-500 pl-4">Reputação no Reclame Aqui</h3>
                  <p className="text-gray-700 leading-relaxed">No Reclame Aqui, que atua hoje como o termômetro vital da satisfação do consumidor brasileiro, ambas as marcas exibem caminhos curiosos. A Stihl, notadamente, sobressai-se pela gigantesca consistência no atendimento local prestativo de suas redes homologadas, e grande taxa global de clientes solucionados. Já a Husqvarna no digital nacional demonstra certa agilidade e competência robusta na resolução das poucas pendências mais demoradas das filiais independentes.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-500 pl-4">Lojas Autorizadas no Interior</h3>
                  <p className="text-gray-700 leading-relaxed">Esse é o "Cheque-Mate". Quando você fura um tanque, perde a porca da lâmina ou a polia, precisar acionar lojas online ou transportadoras para repor a mola pode custar a sua semana rural lucrativa. No Brasil, e no vasto território agrário, <strong>a Stihl aniquilou a competição</strong> formando uma capilaridade agressiva. É incrivelmente fácil encontrar concessionárias verde e laranjas até em divisas minúsculas com pouquíssima população. Se você mora longíssimo dos centros e não quer esperar 10 dias correndo riscos usando motoboys autônomos por peças da concorrente mais exclusiva, é prudente olhar em volta antes de comprar.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Preço, Alternativas e Custo-Benefício</h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p>Sabemos que olhar o preço do "carrinho online" de produtos robustos e a combustão às vezes assusta. Mas o investimento é apenas a casca fina. Durabilidade, peças plásticas que ressecam ou virabrequins que fundem ditam os lucros em ferramentas no longo prazo.</p>
              
              <p>Fisicamente, modelos de porta de entrada e cilindradas idênticas da Stihl tendem a ostentar preços ligeiramente menores como chamariz fortíssimo ao consumidor semi-profissional, atraindo carteiras pelo custo atraente aliado ao nome imponente nas revendas de bairro.</p>
              
              <p>A Husqvarna, focada sem moderação na eficiência das ligas avançadas e ergonômicas, infelizmente embute as tarifas de inovações no equipamento. O produto raramente decepciona, mas custa mais moedas saindo da caixa hoje.</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Existem alternativas mais baratas?</h3>
              <p>Avaliar caminhos alternativos às líderes hegemônicas Stihl/Husqvarna é super normal e sadio para fugir dos monopólios caros. Nomes correndo por fora da curva extrema como Vulcan, Tekna, Nakashi, Kawashima e Toyama estouraram em vendas de custo-benefício. Se você precisa roçar na chácara uma vez a cada 3 meses por duas horas... A resposta moral? Gastar milhares de reais em um equipamento premium da linha alemã chega a roçar um pequeno desperdício e o subuso do ativo.</p>
              <p>A Vulcan abraça hoje fatias brutais do público com um pacote excelente por menos que o terço do valor nominal. Pondere incisivamente as respostas do "Pra quê?", "Onde?" e "Com que regularidade?".</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-24 pt-16 border-t border-gray-200 bg-slate-50 -mx-4 px-4 py-16 sm:-mx-8 sm:px-8">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-12 uppercase tracking-tighter text-center">Tira-Dúvidas Final e FAQ</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { 
                  q: "Qual a melhor opção para uso doméstico esporádico?", 
                  a: "Para pouca grama em beiradas cimentadas no domingão, opte até pelas superleves elétricas. Na casa da praia com capins leves? Roçadeiras compactas domésticas de uso simplificado dominam, e as máquinas Stihl pequenas com boa margem resolvem o problema no bolso (Exemplo: FS 38)." 
                },
                { 
                  q: "O Que é melhor: eixo duro ou flexível/lateral ou costal?", 
                  a: "Tubos rígidos laterais transmitem potência absurda sem perdas grandes pela extensão linear e são os queridinhos massificados. Costais (flexíveis nas costas) foram designadas para declives agudos ou mato denso em ribanceiras irregulares onde o equilíbrio com o bastão tradicional fadigaria você aos tombos facilmente." 
                },
                { 
                  q: "Posso colocar a mistura errada no tanque das líderes?", 
                  a: "Qualquer marca a combustão de 2 tempos, sem exceção, derreterá miseravelmente todo seu componente se o óleo e a proporção diluída em gasolina estiverem drasticamente irregulares à indicação do medidor original da marca." 
                },
                { 
                  q: "Vale a pena investir o dobro do preço em uma premium frente as alternativas baratas de mercado?",
                  a: "Essa é a baliza milenar da eficiência corporativa. Avaliar opções como Tekna para tarefas leves resolve instantaneamente uma casa em formação, mas será testada nos trabalhos agressivos de calor tórrido do meio dia na floresta. Priorize a Nakashi ou Vulcan se deseja custo módico em pastos simples, mas corra unicamente paras a Suécia(Husq) ou Alemanha(Stihl) sob nenhuma negociação de desculpas em rotinas de alta demanda e longos pastos."
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
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">O Veredito Definitivo 2026</h2>
              <div className="prose prose-lg text-gray-700 max-w-none mb-10">
                <p>No fim das contas cruéis e matagais espinhosos, a <strong>Melhor Roçadeira a Gasolina em 2026</strong> dependerá fielmente das necessidades físicas da sua topografia. Se a robustez clássica com manutenção blindada nas esquinas ditar sua vida no trator e na poeira, você já é um orgulhoso e incansável portador da cor <strong>Laranja Stihl</strong>.</p>
                <p>Porém, se a sua lombar resfolega de dor aos 40 e a sua operação precisa abraçar a otimização diária da balança peso por potência com cortes contínuos em fazendas sob baixo consumo e menos vibração, o selo da marca azul sueca <strong>Husqvarna</strong> ditará o conforto e os tempos da era avançada do paisagismo nas suas mãos.</p>
              </div>
            </div>
          </section>

        </div>
    </div>
  );
};
