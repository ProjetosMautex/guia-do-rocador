import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Target, Zap, ShieldCheck, Mail, ShoppingCart, Wrench, Trophy, Cpu, Star, Clock } from 'lucide-react';
import { products } from '../data/products';

export const MelhorEbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handleNextPage = () => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    setCurrentPage(p => Math.max(1, p - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PagePlaceholder = ({ title }: { title: string }) => (
    <div className="w-full flex flex-col justify-center items-center my-auto min-h-[60vh] gap-8 animate-in fade-in duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">
        {title}
      </h2>
      <p className="text-xl text-zinc-400">Conteúdo em construção... 🚧</p>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-8 bg-[#1a1a1a]">
      <div className="w-full max-w-4xl bg-black rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center border border-zinc-800 relative">
        <div className="w-full flex items-start justify-center min-h-[70vh] p-6 md:p-12">
          
          {currentPage === 1 && (
            <div className="w-full flex flex-col justify-center items-center my-auto min-h-[60vh] gap-8 animate-in fade-in duration-700">
              <img 
                src="/images/melhor ebook.webp" 
                alt="Projetos Práticos para Renovar sua Casa" 
                className="w-full max-w-2xl h-auto object-contain shadow-2xl rounded-2xl animate-in fade-in duration-700"
              />
            </div>
          )}

          {currentPage === 2 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  MENTALIDADE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-[#FFD700]"><Target className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    O Despertar do <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-3xl md:text-5xl">"Dono da Terra"</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <section>
                  <p className="text-xl leading-relaxed text-zinc-300 mb-6">
                    Você olha pela janela no fim de semana e lá está: o mato alto, as ervas daninhas tomando conta do quintal e aquela sensação de que o seu terreno está abandonado.
                  </p>
                  <p className="text-xl leading-relaxed text-zinc-300 mb-6">
                    Nessa hora, você tem duas opções: gastar entre <strong className="text-white">R$ 150 e R$ 300 reais</strong> (de novo) para alguém fazer o serviço, ou tentar fazer sozinho com as ferramentas erradas e acabar com uma dor nas costas que dura a semana inteira. A maioria das pessoas odeia a ideia de roçar o mato porque associa isso a um trabalho escravo e exaustivo.
                  </p>
                  
                  <div className="bg-zinc-800/40 p-6 md:p-8 rounded-2xl border border-zinc-700/50 shadow-inner group">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="text-[#FFD700] w-8 h-8" /> 
                      Não é Trabalho, é Terapia
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-300 mb-4">
                      Quando você domina a técnica, o jogo muda completamente. Vestir o cinto de sustentação, dar a partida no motor e ver o mato alto caindo e abrindo espaço limpo a cada passada é uma das sensações mais gratificantes que existem.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                      Não é um fardo; é você assumindo o controle do seu patrimônio. É transformar o caos em ordem em questão de minutos, deixando o ambiente seguro para a sua família e impecável para o churrasco de domingo. Esse é o sentimento de ser o <strong className="text-[#FFD700]">verdadeiro "Dono da Terra"</strong>.
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-[#FFD700]/10 to-transparent p-6 md:p-8 rounded-xl border-l-4 border-[#FFD700]">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    O Fim do Medo da Máquina
                  </h3>
                  <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                    <p>
                      Muitos iniciantes têm receio de comprar uma roçadeira. Acham que a máquina é pesada, perigosa ou difícil de controlar. Mas a dor nas costas e o sofrimento só acontecem quando você "briga" com o mato, usando força bruta onde deveria usar inteligência.
                    </p>
                    <p>
                      Aqui está a regra de ouro: Para o serviço ser <strong className="text-white">incrivelmente rápido</strong> e não acabar com as suas costas, você não precisa de mais força nos braços. Você só precisa da técnica certa e do equipamento correto.
                    </p>
                  </div>
                </section>

                <div className="text-center pt-4">
                  <p className="text-zinc-400 text-lg md:text-xl flex items-center justify-center gap-2">
                    Vire a página e vamos começar a limpar esse terreno. <ArrowRight className="text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentPage === 3 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  A ESCOLHA INTELIGENTE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-[#FFD700]"><Zap className="w-10 h-10 md:w-14 md:h-14 fill-[#FFD700]" /></span>
                  <span className="flex-1">
                    O Motor do <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-3xl md:text-5xl">"Dono da Terra"</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <section>
                  <p className="text-lg md:text-xl leading-relaxed text-zinc-300 mb-6">
                    Antes de falarmos sobre a técnica de corte, você precisa do motor certo nas costas. Tentar limpar um terreno com aquelas maquininhas elétricas de jardim ou com roçadeiras genéricas e muito fracas é a receita certa para a frustração. O motor queima assim que encosta em um mato mais grosso.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-zinc-300 mb-6">
                    Se você saísse hoje em busca da máquina definitiva para limpar seu terreno sem sofrer e sem esvaziar a carteira, chegaria a um modelo específico: <strong className="text-white">A Roçadeira Bascco 52cc (Bi-partida)</strong>.
                  </p>
                </section>

                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="flex flex-col md:flex-row relative z-10 w-full min-h-full">
                    <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-4">
                      <img 
                        src="/images/ebook roçadeira Bascco.webp" 
                        alt="Roçadeira Bascco 52cc" 
                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center gap-4 bg-zinc-900/50">
                      <h3 className="text-2xl font-black text-white mb-2">O Padrão Ouro do Custo-Benefício</h3>
                      <ul className="space-y-4">
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1 font-bold text-white"><CheckCircle className="text-green-500 w-5 h-5" /> Força Bruta Real:</div>
                          <span className="pl-7 block italic">Motor 52cc (2.5 HP) para triturar mato alto.</span>
                        </li>
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1 font-bold text-white"><CheckCircle className="text-green-500 w-5 h-5" /> O Truque do Porta-Malas:</div>
                          <span className="pl-7 block italic">Eixo bi-partida: cabe em qualquer carro.</span>
                        </li>
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1 font-bold text-white"><CheckCircle className="text-green-500 w-5 h-5" /> Pronta para a Guerra:</div>
                          <span className="pl-7 block italic">Já vem com Carretel, Lâmina e Disco 40 dentes.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-zinc-800/30 p-6 md:p-8 rounded-2xl border border-zinc-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Star className="text-[#FFD700] w-6 h-6 fill-[#FFD700]" />
                    Tecnologia Acessível
                  </h3>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    Não se engane: você não precisa de uma máquina caríssima para manter seu terreno impecável, mas também não pode depender de brinquedos de plástico. A Bascco 52cc entrega o arranque rápido e o guidão ergonômico que aliviam o peso das suas costas.
                  </p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <a 
                      href={products["rocadeira-a-gasolina-multifuncional-bi-partido-bascco"].link} 
                      target="_blank" 
                      rel="noopener noreferrer sponsored"
                      className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl text-lg md:text-xl text-center transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,215,0,0.3)]"
                    >
                      👉 VERIFICAR PREÇO E DISPONIBILIDADE EM OFERTA
                    </a>
                    <p className="text-zinc-400 font-medium italic">(Minha recomendação oficial de força e praticidade)</p>
                  </div>
                </section>

                <div className="mt-8 text-center text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Agora que você já sabe qual é o motor que vai fazer o trabalho pesado por você, você precisa da técnica certa para não esgotar suas costas. Vire a página e descubra a Técnica de Ouro para limpar o terreno na metade do tempo. <ArrowRight className="inline-block text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentPage === 4 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  DOMINANDO O CAMPO
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-blue-400"><Clock className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    A Técnica de Ouro: <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-2xl md:text-4xl">Limpando na Metade do Tempo</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  Você já tem a mentalidade e já sabe qual é a máquina certa. Mas se você entrar no terreno ligando a roçadeira e andando de qualquer jeito, vai se cansar nos primeiros 10 minutos.
                </p>

                <section className="space-y-6">
                  <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                    <div className="flex items-start gap-4">
                      <span className="bg-[#FFD700] text-black w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">1</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">O Corte em "Dois Tempos"</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                          O maior erro do iniciante é tentar cortar aquele capim muito alto (acima do joelho) mirando direto na raiz. Isso trava o motor e enrola o mato no eixo.
                        </p>
                        <div className="bg-zinc-800/50 p-4 rounded-xl border-l-4 border-[#FFD700]">
                          <strong className="text-white block mb-1">A Técnica:</strong>
                          <p className="text-sm italic">Passe a roçadeira primeiro na altura do seu quadril, "aparando" a metade de cima. Só depois, no caminho de volta, corte rente ao chão. O serviço rende o triplo.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                    <div className="flex items-start gap-4">
                      <span className="bg-[#FFD700] text-black w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">2</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">O Movimento de Pêndulo</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                          A roçadeira não é um aspirador; você não deve empurrá-la com a força dos braços. Quem faz o movimento é o seu quadril.
                        </p>
                        <div className="bg-zinc-800/50 p-4 rounded-xl border-l-4 border-[#FFD700]">
                          <strong className="text-white block mb-1">A Técnica:</strong>
                          <p className="text-sm italic">Mantenha a máquina no cinto e faça um movimento de pêndulo com o corpo, sempre da direita para a esquerda. O mato será "jogado" de forma organizada para o lado.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                    <div className="flex items-start gap-4">
                      <span className="bg-[#FFD700] text-black w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">3</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">O Método dos Quadrantes</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                          Olhar para um terreno enorme gera exaustão mental. Divida para conquistar.
                        </p>
                        <div className="bg-zinc-800/50 p-4 rounded-xl border-l-4 border-[#FFD700]">
                          <strong className="text-white block mb-1">A Técnica:</strong>
                          <p className="text-sm italic">Divida o espaço em quadrados de 10x10 metros. Limpe um por vez. Isso gera satisfação e mantém a motivação alta até o final.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="mt-8 bg-zinc-800/40 p-6 md:p-8 rounded-2xl border border-zinc-700/50 text-center">
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Agora você já tem o método de trabalho perfeito. Mas, na hora de aplicar essa técnica, surge o grande dilema: <strong className="text-white">Lâmina de Aço ou Fio de Nylon?</strong>
                  </p>
                  <p className="text-zinc-400 mt-4">
                    Usar a opção errada no lugar errado destrói o equipamento. Vire a página e descubra o segredo do corte perfeito. <ArrowRight className="inline-block text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentPage === 5 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  FERRAMENTAS DE CORTE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-[#FFD700]"><Wrench className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    Lâmina vs. Nylon: <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-2xl md:text-4xl text-red-500">O Erro Que Destrói a Máquina</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  Saber quando usar cada uma é o que salva o seu equipamento, agiliza o serviço e protege as suas canelas de pedradas. <strong className="text-white">Usar a ferramenta errada no lugar errado é o que quebra o eixo da roçadeira logo no primeiro mês.</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                       🔪 A Lâmina de 3 Pontas
                    </h3>
                    <p className="text-zinc-400 text-[15px] mb-4">
                      <strong className="text-white">Quando usar:</strong> Mato muito alto, capim grosso entrelaçado, pequenos arbustos e áreas abertas de terra.
                    </p>
                    <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/30">
                      <h4 className="text-red-400 font-bold text-sm mb-1 uppercase tracking-tight flex items-center gap-1"><ShieldCheck size={14} /> O Perigo Oculto:</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed italic">Nunca use perto de muros ou calçadas. Se bater em pedra ou concreto, o tranco volta pelo eixo e pode estourar a engrenagem do motor na hora.</p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                       🧵 O Carretel de Nylon
                    </h3>
                    <p className="text-zinc-400 text-[15px] mb-4">
                      <strong className="text-white">Quando usar:</strong> Perto de muros, alambrados, ao redor de troncos de árvores e no acabamento de calçadas.
                    </p>
                    <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-tight">Acabamento Seguro:</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed italic">Ele "pulveriza" a grama sem estragar o concreto ou a casca das plantas. É a ferramenta de precisão.</p>
                    </div>
                  </div>
                </div>

                <section className="bg-zinc-900 border-2 border-[#FFD700]/30 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Star size={80} className="text-[#FFD700]" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">O Macete do Profissional</h3>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                      <img 
                        src="/images/blog/Fio de Nylon Duraline 3mm Quadrado 255m.webp" 
                        alt="Fio de Nylon Duraline" 
                        className="w-full h-auto object-contain rounded-xl shadow-lg border border-zinc-700"
                      />
                    </div>
                    <div className="w-full md:w-3/5 space-y-4">
                      <p className="text-zinc-300 leading-relaxed">
                        O fio que vem de fábrica é fino e derrete fácil. Quem roça de verdade substitui pelo <strong className="text-[#FFD700]">Fio de Nylon Profissional de Perfil Quadrado</strong>.
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        Por ter quinas afiadas, ele funciona como uma <strong className="text-white">faca giratória</strong>, cortando melhor e durando até 5x mais sem derreter.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-3">
                    <a 
                      href={products["fio-de-nylon-duraline-3mm-quadrado-255m"].link} 
                      target="_blank" 
                      rel="noopener noreferrer sponsored"
                      className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl text-lg text-center transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,215,0,0.2)]"
                    >
                      👉 VER PREÇO DO ROLO ECONÔMICO (3MM - 255M)
                    </a>
                    <p className="text-zinc-500 text-sm font-medium italic">Um único rolo vai durar meses no seu quintal.</p>
                  </div>
                </section>

                <div className="mt-8 bg-zinc-800/20 p-6 rounded-2xl border border-zinc-800 text-center">
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Agora que você já sabe como cortar o mato sem estragar o terreno, precisamos proteger o <strong className="text-white">coração da sua máquina</strong>. 
                  </p>
                  <p className="text-zinc-400 mt-4 italic">
                    O erro que mais funde o motor acontece na hora de abastecer. Vire a página e descubra a medida exata de combustível. <ArrowRight className="inline-block text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentPage === 6 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  MANUTENÇÃO E SEGURANÇA
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight text-red-500">
                  <span className="text-[#FFD700]"><ShieldCheck className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    O Coração e o Escudo: <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-2xl md:text-3xl text-white">A Mistura Fatal e a Sua Segurança</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-12">
                {/* ⛽ Combustível */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="p-6 md:p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-2xl border border-orange-500/30">
                        <Zap className="text-orange-500 w-8 h-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">⛽ A Mistura Fatal</h2>
                    </div>
                    
                    <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                      <p>Motores 2 Tempos <strong className="text-white underline decoration-orange-500">não têm reservatório de óleo separado</strong>. O lubrificante entra misturado na gasolina.</p>
                      <div className="bg-red-900/10 border-l-4 border-red-500 p-4 font-bold text-red-400">
                        O Erro Amador: Colocar gasolina pura funde o motor em exatos 5 minutos. Perda total.
                      </div>
                      <p className="bg-zinc-800/40 p-5 rounded-2xl border border-zinc-700/50">
                        <strong className="text-[#FFD700] block text-xl mb-1">A Regra de Ouro:</strong>
                        Mistura 25:1 (40ml de Óleo 2T para cada 1 Litro de Gasolina).
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
                      <div className="w-full md:w-1/3">
                        <img 
                          src="/images/blog/VER KIT MISTURADOR + ÓLEO 2T EM OFERTA.webp" 
                          alt="Kit Misturador e Óleo 2T" 
                          className="w-full h-auto object-contain rounded-2xl shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-2/3 space-y-4">
                        <p className="text-zinc-400 italic">Use um Misturador Graduado para nunca errar a conta.</p>
                        <a 
                          href={products["kit-misturador-oleo-2t"].link} 
                          target="_blank" 
                          rel="noopener noreferrer sponsored"
                          className="w-full inline-block bg-orange-600 hover:bg-orange-500 text-white font-black py-4 px-6 rounded-xl text-center transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-5 h-5" /> VER KIT MISTURADOR + ÓLEO 2T
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 🛡️ Segurança */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
                   <div className="p-6 md:p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#FFD700]/20 p-3 rounded-2xl border border-[#FFD700]/30">
                        <ShieldCheck className="text-[#FFD700] w-8 h-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">🛡️ O Escudo do "Dono da Terra"</h2>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Uma roçadeira de 52cc gira a quase 10.000 RPM. Ela transforma pedras em projéteis. <strong className="text-white">Roçar sem proteção é um risco desnecessário.</strong> Vista sua armadura:
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { t: "Viseira Facial", d: "Protege o rosto sem tirar visão periférica." },
                        { t: "Abafador Concha", d: "Essencial para proteger sua audição." },
                        { t: "Perneiras", d: "Blindam canelas contra pedradas." },
                        { t: "Avental de PVC", d: "Evita encharcar sua roupa de detritos." },
                        { t: "Luvas Corrugadas", d: "Firmeza no guidão e evita bolhas." }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 bg-zinc-800/30 p-3 rounded-xl border border-zinc-700/20">
                          <CheckCircle className="text-green-500 w-5 h-5 shrink-0 mt-0.5" />
                          <div>
                            <span className="block font-bold text-white text-sm">{item.t}</span>
                            <span className="text-xs text-zinc-400">{item.d}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
                      <div className="w-full md:w-1/3">
                        <img 
                          src="/images/blog/KIT SEGURANÇA COMPLETO (EPIs).webp" 
                          alt="Kit Segurança EPIs" 
                          className="w-full h-auto object-contain rounded-2xl shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-2/3">
                        <a 
                          href={products["kit-seguranca-completo-epis"].link} 
                          target="_blank" 
                          rel="noopener noreferrer sponsored"
                          className="w-full inline-block bg-green-600 hover:bg-green-500 text-white font-black py-4 px-6 rounded-xl text-center transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-5 h-5" /> VER KIT SEGURANÇA COMPLETO
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="mt-8 text-center text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Sua máquina está protegida e o seu corpo está blindado. Você tem tudo o que precisa para dominar o mato alto ainda hoje. 
                  </p>
                  <p className="mt-4 font-bold text-white">
                    Vire a página para ver o seu próximo passo e receber o seu bônus final. <ArrowRight className="inline-block text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentPage === 7 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  CONCLUSÃO
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-green-500 flex justify-center"><CheckCircle className="w-12 h-12 md:w-14 md:h-14" /></span>
                  <span className="flex-1">O Seu Próximo Passo</span>
                </h1>
              </div>

              <div className="space-y-8">
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300 text-center md:text-left">
                  <p className="mb-4">
                    <strong className="text-white text-2xl relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#FFD700]">Parabéns!</strong> você agora faz parte do seleto grupo de pessoas que não depende mais de ninguém (e não gasta fortunas com diárias) para manter o próprio terreno impecável.
                  </p>
                  <p className="text-zinc-300 italic">Você já tem a mentalidade do "Dono da Terra", conhece a técnica de corte que poupa as suas costas e sabe exatamente quais ferramentas usar.</p>
                </section>

                <section className="bg-zinc-900 border-2 border-red-500/50 rounded-2xl p-6 md:p-8 shadow-xl relative mt-4">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 text-red-500">
                    <Mail size={28} /> ⚠️ O Aviso Mais Importante (Bônus)
                  </h3>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-4">
                    O nosso guia prático acaba aqui, mas o seu preparo não. <strong className="text-white">Fique de olho na sua caixa de entrada de e-mail amanhã.</strong>
                  </p>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Eu vou te enviar a <strong className="text-[#FFD700]">"Regra de Ouro"</strong> para a sua roçadeira nova nunca afogar. É um segredo de manutenção que faz o motor pegar de primeira, mesmo que a máquina fique meses guardada. <strong className="text-red-400">Não perca esse e-mail amanhã!</strong>
                  </p>
                </section>

                <section className="mt-8 bg-gradient-to-br from-[#FFD700]/20 to-zinc-900 border-2 border-[#FFD700] rounded-2xl p-6 md:p-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] text-center relative overflow-hidden">
                   <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                       Tudo Pronto para o Fim de Semana?
                    </h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      Se você já decidiu qual área do quintal vai dominar primeiro, mas ainda não tem o motor nas costas, deixei o link da oferta especial da Bascco 52cc logo abaixo.
                    </p>
                    
                    <a 
                      href={products["rocadeira-a-gasolina-multifuncional-bi-partido-bascco"].link} 
                      target="_blank" 
                      rel="noopener noreferrer sponsored"
                      className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-4 md:py-6 px-4 md:px-8 rounded-xl text-[16px] md:text-xl uppercase tracking-widest text-center transition-all transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(255,215,0,0.4)] flex items-center justify-center gap-3"
                    >
                       👉 GARANTIR MINHA ROÇADEIRA BASCCO 52CC EM OFERTA AGORA
                    </a>

                    <p className="mt-8 text-xl font-medium text-zinc-300 italic">Nos vemos amanhã lá no seu e-mail! Mãos à obra.</p>
                  </div>
                </section>

                <div className="pt-4 md:pt-8 border-t border-zinc-800 text-center pb-20 md:pb-8">
                  <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
                    <CheckCircle size={16} /> Fim do Ebook
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
        
        {totalPages > 1 && (
          <div className="w-full p-4 flex justify-between items-center bg-zinc-900 border-t border-zinc-800">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-zinc-800 text-white rounded-lg disabled:opacity-30 hover:bg-zinc-700 transition font-medium"
            >
              Anterior
            </button>
            <span className="text-zinc-400 font-medium">
              Página {currentPage} de {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-6 py-2 bg-[#FFD700] text-black font-bold rounded-lg disabled:opacity-50 hover:bg-[#ffcd38] transition"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
