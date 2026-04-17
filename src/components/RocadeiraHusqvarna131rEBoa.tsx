import React from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BannerDoMeio } from './BannerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, ArrowRight, ShoppingCart, Star } from 'lucide-react';

export const RocadeiraHusqvarna131rEBoa: React.FC = () => {
  const featuredIds: ProductId[] = [
    "rocadeira-husqvarna-331r"
  ];

  return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/roçadeira husqvarna 131r é boa.webp" 
              alt="Roçadeira Husqvarna 131R é Boa?" 
              className="w-full h-full object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Roçadeira Husqvarna 131R é Boa? <br/>
              <span className="text-[#16A34A]">Vale o Investimento em 2026?</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Por</span>
                <a href="/author/carlos-henrique" className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10">
                  <img 
                    src="/images/autores/Carlos Henrique Menezes.webp" 
                    alt="Carlos Henrique Meneses" 
                    className="w-10 h-10 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      // Fallback case
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  Carlos Henrique
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
              Muitos profissionais e entusiastas de jardinagem se perguntam se vale a pena investir em um equipamento que atenda às suas necessidades de corte e manutenção. No entanto, a escolha ideal nem sempre é clara, especialmente quando se considera a durabilidade e o custo-benefício a longo prazo.
            </p>
            <p>
              Entre as diversas opções disponíveis, a roçadeira Husqvarna 131R ainda desperta o interesse de muitos usuários. Mas será que ela ainda é uma boa opção? Quais são os pontos fortes e fracos desse modelo em comparação com as alternativas mais recentes no mercado?
            </p>
            <p>
              Para responder a essas perguntas, vamos analisar detalhadamente as características da 131R, seu desempenho, vantagens, desvantagens e as opções disponíveis para que você possa tomar a melhor decisão.
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="my-16 bg-gray-50 p-4 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-8 text-center uppercase tracking-tight">
              A Evolução Direta: Conheça a Husqvarna 331R
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
                              src={`/images/blog/roçadeira husqvarna 331r.webp`}
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
          
          <div className="space-y-16">
            
            {/* Section 1 */}
            <section id="a-husqvarna-131r-saiu-de-linha" className="scroll-mt-24 pt-10">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 tracking-tighter">
                A Husqvarna 131R saiu de linha? Onde encontrar?
              </h2>

              <div className="w-full flex justify-center mb-10 group">
                 <img src="/images/blog/roçadeira husqvarna 331r.webp" alt="Husqvarna 331R" className="max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500 rounded-xl" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>
                  A busca por uma Husqvarna 131R nova pode se assemelhar a um desafio. Apesar de sua reputação consolidada entre os jardineiros, o mercado evoluiu, impactando sua disponibilidade. O modelo é, sem dúvida, um clássico da jardinagem profissional e semiprofissional. No entanto, hoje o estoque é raro, uma vez que o modelo <strong>saiu de linha</strong>. Mas onde ainda é possível encontrá-la? Basicamente em lojas de equipamentos usados, exigindo precauções redobradas ao avaliar o desgaste do motor e transmissão.
                </p>
                <p>
                  A boa notícia é que a Husqvarna lançou a <strong>Husqvarna 331R</strong> como a evolução direta da saudosa 131R. Esse novo modelo já está amplamente disponível nas lojas e chega corrigindo pequenos pontos do passado e oferecendo inovações para o trabalho intenso. É indicada para trabalhos intensos, uso contínuo, entrega 33cc (1,0 hp) e oferece extrema robustez.
                </p>
              </div>

              <AffiliateCard productId="rocadeira-husqvarna-331r" />

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><Check size={20} /> Prós (Husqvarna 331R)</h4>
                  <ul className="space-y-3 text-green-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Motor moderno e mais eficiente (33cc).</li>
                    <li className="flex items-start gap-2"><span>•</span> Punho tipo guidão para extremo conforto.</li>
                    <li className="flex items-start gap-2"><span>•</span> Novo sistema de filtragem de ar que amplia vida útil.</li>
                    <li className="flex items-start gap-2"><span>•</span> Vibração reduzida, permitindo trabalhar por mais horas.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-widest"><X size={20} /> Contras</h4>
                  <ul className="space-y-3 text-red-800 font-medium">
                    <li className="flex items-start gap-2"><span>•</span> Não acompanha carretel de fio de nylon padrão de fábrica.</li>
                    <li className="flex items-start gap-2"><span>•</span> Necessidade de preparo cuidadoso na mistura de 50:1.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ficha Técnica */}
            <section id="ficha-tecnica" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 tracking-tighter uppercase">
                Ficha Técnica e Desempenho
              </h2>
              
              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-sm font-black text-gray-900 uppercase tracking-wider">Atributo</th>
                      <th className="px-6 py-4 text-sm font-black text-gray-900 uppercase tracking-wider">Especificação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { item: "Motor", spec: "2 tempos (requer mistura de gasolina e óleo)" },
                      { item: "Cilindrada", spec: "32,6 cm³ (cc)" },
                      { item: "Potência", spec: "0,9 kW / 1,2 HP" },
                      { item: "Capacidade do Tanque", spec: "900 ml (0,9 litro)" },
                      { item: "Peso", spec: "Aproximadamente 7,0 kg" },
                      { item: "Combustível", spec: "Gasolina + Óleo 2 tempos" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.item}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
                    <Star className="text-[#16A34A] fill-[#16A34A]" size={24} />
                    Desempenho e Recursos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-[#16A34A]/10 p-1.5 rounded-lg h-fit mt-1">
                        <Check className="text-[#16A34A]" size={18} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Eficiência de Corte</strong>
                        <p className="text-gray-600 text-sm">Com motor de 32,6 cc, possui força para grama densa e pequenos arbustos, sendo superior aos modelos de entrada.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-[#16A34A]/10 p-1.5 rounded-lg h-fit mt-1">
                        <Check className="text-[#16A34A]" size={18} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Conforto</strong>
                        <p className="text-gray-600 text-sm">Guidão antivibração e empunhaduras emborrachadas reduzem o cansaço no uso prolongado.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-[#16A34A]/10 p-1.5 rounded-lg h-fit mt-1">
                        <Check className="text-[#16A34A]" size={18} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Manutenção Prática</strong>
                        <p className="text-gray-600 text-sm">Acesso ao filtro de ar sem ferramentas facilita a limpeza rápida em campo.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 pt-10">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-[#16A34A]/10 p-1.5 rounded-lg h-fit mt-1">
                        <Check className="text-[#16A34A]" size={18} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Durabilidade</strong>
                        <p className="text-gray-600 text-sm">Componentes reforçados, tampa de embreagem em metal e proteção metálica para o tanque.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-[#16A34A]/10 p-1.5 rounded-lg h-fit mt-1">
                        <Check className="text-[#16A34A]" size={18} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Partida Fácil</strong>
                        <p className="text-gray-600 text-sm">Inclui bomba injetora (primer) para facilitar a entrada de combustível e partida rápida.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic text-gray-600 text-sm">
                <p>Para avaliar o real potencial da Husqvarna 131R, é fundamental analisar suas especificações técnicas originais. Seu motor, conhecido pela durabilidade, oferecia a potência necessária para diversas tarefas, operando excelentemente em grama densa e terrenos irregulares.</p>
              </div>
            </section>

            {/* Principais Características */}
            <section id="principais-caracteristicas" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Principais Características e Diferenciais
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Husqvarna 131R se destacava por atributos que a tornaram popular entre os profissionais. Sua construção robusta garantiu durabilidade ao longo dos anos, mesmo em condições de trabalho exigentes. Mas quais eram os detalhes que realmente a diferenciavam de outros modelos na sua época? Explore componentes abaixo que contribuíram para o desempenho consistente e a versatilidade inegável desta roçadeira.</p>
              </div>

              <div className="mt-8 mb-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Tecnologia SmartStart® e Partida Fácil</h3>
                <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                  <p>Um dos aspectos que facilitavam o uso da Husqvarna 131R era a sua tecnologia SmartStart®. Esquecia-se das partidas difíceis e frustrantes, especialmente em dias frios ou após longos períodos fora de uso.</p>
                  <p>Este sistema inteligente reduziu significativamente a força necessária para puxar a corda, tornando o processo muito mais suave e rápido. Em conjunto com a bomba de combustível, que prepara o motor injetando a quantidade certa de gasolina, a 131R garantia partidas consistentes e sem suor.</p>
                  <p>Essa inovação não apenas poupava energia do operador, mas também prolongava consideravelmente a vida útil do motor, minimizando desgaste interno.</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Ergonomia e Guidão Assimétrico</h3>
                <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                  <p>Um dos trunfos da 131R (e das roçadeiras profissionais da Husqvarna em geral) residia na sua ergonomia, projetada especificamente para otimizar o conforto durante longas jornadas campestres. O guidão assimétrico permitia uma postura corporal muito mais natural, mitigando fadigas intensas e dores lombares.</p>
                  <p>Esta característica é crucial para quem usa a roçadeira todos os dias e contribui demais para um sólido controle da máquina. A empunhadura oferecia firmeza inegociável, mesmo suportando suor ou chuviscos finos de outono.</p>
                  <p>O amortecimento de vibrações prevenia doenças do trabalho e melhorava a vida inteira do roçador. É indiscutível que esses elementos sempre transformaram o simples ato de aparar gramíneas pesadas em uma atividade ágil.</p>
                </div>
              </div>
            </section>

            {/* Vantagens e Pontos Fortes */}
            <section id="vantagens" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Vantagens e Pontos Fortes
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A 131R ofereceu, e ainda oferece (nas usadas), benefícios irresistíveis a agricultores e prestadores de serviços de poda. Sua resiliência a solavancos e capacidade de trabalhar com lâminas pesadas num eixo rígido são seus maiores trunfos. Considere sua manutenção baratíssima, a oferta incansável de peças paralelas no Brasil e sua agilidade imbatível em curvas: são grandes diferenciais que explicam por que tantos relutam em trocá-la.</p>
              </div>
            </section>

            <BannerDoMeio />

            {/* Desvantagens */}
            <section id="desvantagens" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Desvantagens e o que observar antes de comprar
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Como nada é impecável, a Husqvarna 131R exige olhar cauteloso em 2026. O equipamento, por ter forte reputação de inquebrável, muitas vezes é abusado nos limitadores. Portanto, antes de comprar uma usada: cuidado com ruídos bizarros nas embreagens, engasgos do sistema carburador e folgas no eixo propulsor. Sua emissão de gases é um pouco superior comparada ao modelo de ponta atual e o mercado tem dificultado alguns acessórios plásticos que tendem a ressecar.</p>
              </div>
            </section>

            {/* Alternativas */}
            <section id="alternativas" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Melhores Alternativas Disponíveis em 2026
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Caso a busca pela Husqvarna 131R se mostre infrutífera ou muito cara para um equipamento tão rodado, há alternativas com desempenho similar e de tecnologias contemporâneas. Uma exploração detalhada foca hoje, principalmente, em duas marcas reinantes que absorveram muito bem a essência da "máquina para toda obra".</p>
              </div>

              <div className="mt-8 mb-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Husqvarna 331R: A Sucessora Natural</h3>
                <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                  <p>Para quem busca tranquilidade de um motor zero, a <strong>Husqvarna 331R</strong> é indiscutivelmente a sucessora direta da 131R nas lojas mundiais. Mantém a exata mesma robustez, abraçada por injeções de melhoria formidáveis no cabeçote e admissão.</p>
                  <p>Valorizando quem procura motores sem travamentos e mais eficientes ecologicamente, a emissão poluente dela é visivelmente inferior. Ela opera em harmonia total com uma nova geração de lubrificantes, fazendo-a mais fria após horas no mato.</p>
                  <p>Entregando a mesma confiança e DNA guerreiro, a 331R traz refinamentos práticos que custam menos vibração. Pode ser o investimento de 2026 mais acertado para pequenos rincões.</p>
                </div>
                
                <AffiliateCard productId="rocadeira-husqvarna-331r" />

              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Comparativo Rápido: 131R vs. Stihl FS 160</h3>
                <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                  <p>A disputa entre a Husqvarna 131R e a <strong>Stihl FS 160</strong> ecoa pelos quatro cantos do campo. São duas joias clássicas! A FS 160 defende-se bravamente com arrancadas brutais e resistência a poeira acima da média, sendo queridinha de prefeituras.</p>
                  <p>Mas quando o assunto é o cansaço do fim de semana inteiro de roçagem, a 131R muitas vezes ganha por sua ergonomia óssea, abraçando o operador. O SmartStart frequentemente tira o estresse da primeira ignição nas madrugadas geladas de geada, vantagem clara num comparativo direto.</p>
                  <p>Desempenhos similares; preferência particular. Teste-as (ou testem a 331R, atual linha paralela à FS 220, caso procure modelos novos).</p>
                </div>
              </div>
            </section>

            {/* Usada */}
            <section id="opiniao" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Opinião de Quem Usa: Vale a pena comprar uma usada?
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Comprar a 131R de segunda mão é um jogo interessante. Sim, vale a pena se o equipamento tiver histórico documentado de manutenções com peças originais. Fuja daquelas cujo dono "fazia a mistura no olho". Olhe o filtro de ar, o retentor do escapamento e teste a firmeza do cardã interno puxando sutilmente a base. O segredo é ter paciência: um bom exemplar tem motor ronronando forte, nunca com sons de metal colidindo.</p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 tracking-tighter">
                Conclusão: Para quem a Husqvarna 131R ainda é indicada?
              </h2>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Após todas as lentes técnicas inseridas no debate, quem se beneficia dela? Aqueles cuja necessidade gravita num universo semi-profissional e agrário caseiro, dotados de orçamentos mais limitados e dispostos a manter relíquias eficientes da engenharia. E se a oferta de usadas na sua região parecer obscura e problemática? <strong>Siga reto para uma 331R nova</strong>. O ganho de performance e garantia de concessionária valerá os reais a mais diluídos ao longo da década.</p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-24 pt-16 border-t border-gray-200 bg-slate-50 -mx-4 px-4 py-16 sm:-mx-8 sm:px-8">
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-12 uppercase tracking-tighter text-center">Perguntas Frequentes (FAQ)</h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#16A34A]/30 transition-colors">
                  <h3 className="text-lg font-black text-gray-900 mb-3">Qual a diferença entre a Husqvarna 131R e a 331R?</h3>
                  <div className="text-gray-600 space-y-3">
                    <p>A principal evolução tange conforto real e engenharia limpa. A 331R desponta com tecnologia em emissão ecologicamente amigável, menor gasto de combustível para cada hora de tanque e um motor de 33cc que sofre de bem menos atrito seco. Pequenos reajustes ergonômicos e manoplas anti-deslize definem o modelo mais recente como a visão proativa e moderna da antiga lenda.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#16A34A]/30 transition-colors">
                  <h3 className="text-lg font-black text-gray-900 mb-3">Onde encontrar peças de reposição para a 131R?</h3>
                  <div className="text-gray-600 space-y-3">
                    <p>Fique tranquilo. Apesar de extinta nos showrooms vitrines, oficinas com a placa Husqvarna detêm fácil acesso cruzado aos seus componentes, desde gaxetas até cilindros inteiros. Muitas peças de carburadores e membranas são compartilhadas e as vastas redes de internet (Marketplaces, sites agrícolas) são supridas por atacadistas globais diariamente. Você não ficará a ver navios.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#16A34A]/30 transition-colors">
                  <h3 className="text-lg font-black text-gray-900 mb-3">A 131R aceita lâmina e fio de nylon?</h3>
                  <div className="text-gray-600 space-y-3">
                    <p>Sim, sua versatilidade não engana. O eixo aguentará facas grossas (2 ou 3 pontas) devorando densidades e, ao apertar o cabeçote Trimmy, servirá ao fio de nylon robusto nos barrancos com pedras e grades metálicas. Se seu foco é puramente força suja do dia a dia, ela cumpre exemplarmente seu papel.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
    </div>
  );
};
