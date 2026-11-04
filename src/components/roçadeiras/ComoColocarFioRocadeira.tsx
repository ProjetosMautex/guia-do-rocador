import React from 'react';
import { Check, Info, AlertTriangle } from 'lucide-react';
import { BunnerDoMeiorocadeira as BannerDoMeio } from './BunnerDoMeiorocadeira';

export const ComoColocarFioRocadeira: React.FC = () => {
  return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/como colocar fio na roçadeira​.webp" 
              alt="Como Colocar Fio na Roçadeira" 
              className="w-full h-full object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Como Colocar Fio de Nylon na Roçadeira sem Embolar: <br/>
              <span className="text-[#16A34A]">Guia Prático</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Por</span>
                <a href="/author/jose-ailton" className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10">
                  <img 
                    src="/images/autores/José Ailton da Silva.webp" 
                    alt="José Ailton" 
                    className="w-10 h-10 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform"
                    onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Jose+Ailton&background=16A34A&color=fff"; }}
                  />
                  José Ailton
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-8 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
              Quem nunca passou pela frustração de ter o fio da roçadeira emaranhado, interrompendo o trabalho e exigindo paciência extrema para desembaraçar todo o conjunto mecânico?
            </p>
            <p>
              Essa situação incômoda, que é muito comum para quem cuida da manutenção do jardim, pode ser facilmente evitada quando aplicamos a técnica correta de recarga do carretel.
            </p>
            <p>
              Entender o processo exato de como colocar fio de nylon na roçadeira de forma eficiente não apenas economiza seu tempo precioso, mas também garante um corte preciso e prolonga consideravelmente a vida útil do seu equipamento de jardinagem.
            </p>
            <p>
              Para te ajudar nessa tarefa técnica, vamos abordar desde a escolha do fio ideal até o passo a passo completo para a substituição, garantindo que o seu trabalho no campo flua sem interrupções indesejadas.
            </p>
            
            <div className="w-full flex justify-center my-10">
              <img src="/images/blog/1/como colocar fio na roçadeira​.webp" alt="Como colocar fio na roçadeira" className="max-h-80 object-contain rounded-xl shadow-md" />
            </div>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Medidas e Nylon Ideal</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Escolher o diâmetro e o comprimento adequados do fio de nylon é um passo totalmente estratégico que vai muito além de uma simples preferência pessoal do operador.
            </p>
            <p>
              Trata-se de equilibrar a resistência de corte necessária para cada vegetação com a saúde mecânica do motor, evitando sobrecargas que danificam a transmissão da máquina.
            </p>
            <p>
              O tipo de nylon escolhido dita de forma direta como a máquina reagirá ao encontrar diferentes níveis de densidade de mato e obstáculos durante a limpeza do seu terreno.
            </p>
            <p>
              Temos um candidato perfeito na sua lista para te guiar nessa escolha técnica: <a href="https://guiadorocador.com.br/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#16A34A] hover:underline font-semibold">qual o melhor fio de nylon para roçadeira</a>.
            </p>
            <p>
              Para garantir um trabalho fluido e contínuo, exploraremos como identificar o diâmetro correto para a sua necessidade e qual a metragem ideal para assegurar autonomia.
            </p>
            <p>
              Assim, você terá a capacidade de realizar o corte com máxima eficiência, sem sobrecarregar o cabeçote ou forçar o conjunto motriz da sua roçadeira durante o uso intenso.
            </p>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Materiais Necessários</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Antes de iniciar qualquer procedimento de recarga do carretel, organize sua bancada de trabalho para ter tudo ao seu alcance e facilitar a execução da manutenção.
            </p>
            <p>
              Você precisará do seu rolo de nylon dimensionado, um estilete ou alicate de corte afiado para garantir pontas perfeitamente limpas, já que fios desfiados costumam travar no carretel rapidamente.
            </p>
            <p>
              Tenha em mãos também a chave específica que acompanha seu equipamento, indispensável para abrir o cabeçote com segurança sem danificar as frágeis travas plásticas de fixação.
            </p>
            <p>
              Manter um pano úmido por perto também ajuda significativamente, pois limpar os resíduos de grama seca e terra do interior do carretel antes da nova instalação evita travamentos prematuros.
            </p>
            <p>
              Com essas ferramentas à mão, você transforma um processo que costuma ser estressante em uma tarefa técnica extremamente rápida e agradável de ser realizada na sua oficina.
            </p>
            <p>
              Essa organização prévia garante que a sua roçadeira retorne ao trabalho de campo com a performance de uma máquina recém-saída da loja, cortando a vegetação com precisão.
            </p>
          </div>

          <div className="my-12 flex justify-center">
             <BannerDoMeio />
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Tipos de Carretéis: Como Colocar Nylon no Carretel da Roçadeira</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              O sistema de alimentação do fio define diretamente o nível de complexidade da manutenção e afeta a sua produtividade diária em campo.
            </p>
            <p>
              Cada mecanismo possui uma engenharia própria e particular que, quando bem compreendida, deixa de ser uma fonte de travamentos e passa a ser uma aliada.
            </p>
            <p>
              Conhecer a fundo a lógica de operação do seu equipamento é o requisito básico para realizar trocas seguras e eficientes, independentemente do sistema de carga utilizado.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Carretel Manual</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Este modelo tradicional exige que você remova cuidadosamente a tampa do carretel para enrolar o fio manualmente nos trilhos internos de acomodação.
            </p>
            <p>
              Embora pareça muito mais trabalhoso, o sistema manual oferece o controle absoluto sobre a tensão do nylon e a forma como ele é distribuído.
            </p>
            <p>
              Ao organizar as voltas de forma meticulosamente paralela e sem qualquer sobreposição, você elimina quase totalmente o risco de o fio travar durante a operação de roçada.
            </p>
            <p>
              Essa é a escolha preferida de profissionais experientes que precisam de máxima confiabilidade mecânica ao trabalhar em terrenos irregulares e densos.
            </p>
            <p>
              Lembre-se sempre de verificar se as travas internas estão totalmente limpas antes de fechar a tampa, garantindo um acoplamento perfeito das peças.
            </p>
            <p>
              Uma montagem precisa nesta etapa garante que o equipamento mantenha a rotação constante, evitando vibrações desnecessárias que poderiam comprometer a eficiência geral.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Carretel Automático com Desmontagem</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Esses modelos modernos priorizam a praticidade do operador, permitindo que você libere mais fio apenas pressionando levemente o cabeçote contra o solo.
            </p>
            <p>
              A montagem correta desse sistema exige atenção estrita ao sentido de rotação indicado na carcaça plástica, para que o fio seja tracionado da maneira certa.
            </p>
            <p>
              Ao remover a tampa para iniciar o reabastecimento de nylon, certifique-se de que a mola interna esteja perfeitamente encaixada na sua sede antes de selar o conjunto.
            </p>
            <p>
              O verdadeiro segredo do funcionamento perfeito reside na organização precisa das camadas, pois um enrolamento uniforme evita que as voltas se cruzem sob alta pressão centrífuga.
            </p>
            <p>
              Isso garante que o mecanismo de impacto funcione perfeitamente sempre que a vegetação mais resistente exigir um pouco mais de fio exposto para continuar cortando.
            </p>
            <p>
              Manter a mola totalmente livre de pequenos detritos de grama é essencial para que o sistema de liberação automática não trave durante o uso intenso do dia a dia.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Carretel Automático sem Desmontagem</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              A conveniência suprema reina neste tipo de mecanismo: basta alinhar as setas do cabeçote, inserir o fio pelos orifícios e girar o botão central de tensão.
            </p>
            <p>
              É a solução definitiva de engenharia para quem busca agilidade extrema, eliminando completamente a necessidade de ferramentas ou a abertura do corpo do carretel.
            </p>
            <p>
              Contudo, é necessário ter muita atenção, pois a precisão no alinhamento inicial durante a inserção do material é vital para o correto acondicionamento.
            </p>
            <p>
              Como não há visualização do interior da peça, certifique-se de que o nylon esteja perfeitamente centralizado antes de começar a rotacionar a catraca de recolhimento.
            </p>
            <p>
              Se o fio de corte entrar torto no compartimento, o sistema interno da bobina poderá travar severamente devido à sobreposição acidental das camadas de plástico.
            </p>
            <p>
              Domine o encaixe correto desse mecanismo inovador e você reduzirá seu tempo de manutenção a poucos segundos, permitindo foco total no acabamento impecável do seu jardim.
            </p>
          </div>

          <div className="w-full flex justify-center my-10">
            <img src="/images/blog/1/Tipos de Carretéis e Como Trocar o Nylon.webp" alt="Tipos de Carretéis e Como Trocar o Nylon" className="max-h-80 object-contain rounded-xl shadow-md" />
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">Passo a Passo: Como Trocar o Nylon da Roçadeira</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              A substituição periódica do fio de corte, embora pareça uma tarefa simples, exige um procedimento metódico para evitar que o nylon embole dentro do cabeçote.
            </p>
            <p>
              Pequenos detalhes técnicos durante o manuseio da bobina interna e a forma exata como o fio é preso e tensionado determinam se a roçadeira funcionará de maneira equilibrada ou se travará na primeira aceleração.
            </p>
            <p>
              Abordaremos agora a sequência mecânica completa, desde o preparo e a dobra do material até o travamento nas ranhuras laterais e o fechamento da tampa.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">1</span>
                Preparação do Nylon
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  O segredo técnico de uma recarga impecável começa na execução de um corte limpo no fio sintético.
                </p>
                <p>
                  Utilize um alicate de corte ou um estilete bem afiado para cortar um pedaço único de 2 a 4 metros (para carretéis onde o fio vai dobrado ao meio) ou dois segmentos idênticos de 2,5 a 3,5 metros, conforme o modelo da sua cabeça de corte.
                </p>
                <p>
                  Evite o uso de tesouras cegas ou facas serrilhadas, pois qualquer rebarba na ponta do fio dificulta a passagem pelos ilhós e pode fazer com que o plástico trave dentro das canaletas durante a alta rotação.
                </p>
                <p>
                  Ao manusear o material novo, verifique também se ele está flexível e sem sinais de ressecamento, garantindo que a tensão aplicada na montagem seja uniforme.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">2</span>
                Abertura da Tampa do Carretel
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  Antes de começar, vale diferenciar <strong>abrir a tampa</strong> de <strong>tirar o carretel do eixo</strong>: na grande maioria dos carretéis você só precisa apertar as duas travas plásticas laterais para remover a tampa e retirar a bobina interna, sem precisar desrosquear o carretel inteiro do eixo da máquina.
                </p>
                <p>
                  Com a roçadeira desligada e apoiada em local firme, pressione as duas abas laterais simultaneamente (ou utilize uma chave de fenda larga apenas como apoio leve se a trava estiver dura, sem forçar o plástico) e puxe a tampa externa.
                </p>
                <p>
                  Ao retirar a bobina interna para a recarga, aproveite para limpar restos de grama e terra acumulados e verifique se a mola central está bem encaixada e em bom estado.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">3</span>
                Encaixe do Nylon (A Dobra Central)
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  O posicionamento correto do fio na bobina é o passo mais importante para impedir que ele se solte ou cruze sob alta rotação centrífuga.
                </p>
                <p>
                  <strong>A dobra central:</strong> Pegue o pedaço único de 2 a 4 metros, dobre o fio exatamente ao meio para igualar as duas pontas e prenda a dobra na fenda ou gancho central da divisória da bobina interna, dividindo um fio para cada canaleta (superior e inferior).
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
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">4</span>
                Enrolando o Nylon e Prendendo nas Ranhuras Laterais
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  Observe atentamente as setas indicativas de direção gravadas em alto relevo na bobina interna e enrole as duas pernas do fio simultaneamente nesse exato sentido.
                </p>
                <p>
                  Mantenha uma tensão firme e constante com os dedos, organizando cada volta de maneira paralela à anterior dentro de sua respectiva canaleta, sem cruzar os fios, até restarem cerca de 15 a 20 cm em cada ponta.
                </p>
                <p>
                  <strong>As travas temporárias (ranhuras):</strong> Antes de passar as pontas pelos ilhós (furos de metal da carcaça), prenda as duas pontas nas fendas ou ranhuras laterais da bobina para o fio não desenrolar na sua mão enquanto você encaixa a peça de volta na tampa.
                </p>
                <p>
                  Esse simples travamento temporário mantém toda a pressão do enrolamento intacta durante o fechamento do cabeçote.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">5</span>
                Fechamento e Reinstalação do Carretel
              </h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  Com as pontas presas nas ranhuras laterais da bobina, passe cada extremidade pelos dois ilhós metálicos opostos da carcaça do carretel e encaixe a bobina sobre a mola central.
                </p>
                <p>
                  Depois de passar pelos ilhós, basta puxar as duas pontas para fora com firmeza para soltar o fio das travas temporárias laterais, ouvindo o estalo do nylon se acomodando na bobina.
                </p>
                <p>
                  Como você não precisou desrosquear o carretel inteiro do eixo da máquina, agora basta alinhar a tampa externa e pressioná-la até que as duas travas plásticas laterais façam o clique de fechamento seguro.
                </p>
                <p>
                  Por fim, confira se as duas pontas de nylon estão livres e com tamanho semelhante (a própria lâmina limitadora na saia de proteção cortará o excesso automaticamente na primeira acelerada).
                </p>
              </div>
            </section>

            <div className="w-full flex justify-center my-10">
              <img src="/images/blog/1/Passo a Passo para Troca do Nylon.webp" alt="Passo a Passo para Troca do Nylon" className="max-h-80 object-contain rounded-xl shadow-md" />
            </div>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">Cabeças de corte: Preparar os fios de corte para enrolar e armazená-los corretamente</h2>
          <div className="w-full flex justify-center my-10">
            <img src="/images/blog/1/Cabeças de corte Preparar os fios de corte para enrolar e armazená-los corretamente.webp" alt="Cabeças de corte" className="max-h-80 object-contain rounded-xl shadow-md" />
          </div>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              A longevidade útil do seu fio de nylon depende grandemente de um fator químico que é frequentemente ignorado por muitos: o nível de hidratação do plástico.
            </p>
            <p>
              Com o passar do tempo e ação do clima, o material perde naturalmente a sua umidade estrutural e torna-se demasiadamente quebradiço ao toque.
            </p>
            <p>
              O truque simples utilizado por muitos especialistas para conseguir contornar rapidamente esse desgaste prematuro é extremamente fácil e muito barato de se implementar em casa.
            </p>
            <p>
              Mergulhe a bobina inteira de plástico em um balde ou pequeno recipiente cheio de água pura por cerca de 24 horas consecutivas antes de iniciar o uso prolongado.
            </p>
            <p>
              Ao organizar de forma inteligente o seu estoque pessoal de peças de reposição, procure sempre manter os rolos em locais bem protegidos e isolados.
            </p>
            <p>
              Respeitar fielmente essas simples medidas de conservação caseira não apenas otimiza o bom desempenho de modelos conceituados como as linhas AutoCut ou PolyCut da fabricante.
            </p>
            <p>
              Isso também reduz drasticamente o índice de desperdício diário, assegurando plenamente que o fio realmente resista de maneira eficaz à grande severidade do trabalho muito pesado.
            </p>
          </div>

          <div className="overflow-x-auto shadow-md rounded-xl my-10 border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-left text-gray-700 bg-white">
              <thead className="bg-[#1a1a1a] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Modelo da Cabeça de Corte</th>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Quantidade e Comprimento de Fio</th>
                  <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Espessura (Diâmetro) Padrão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">AutoCut 2-2 / C 3-2</td><td className="px-6 py-3">1 fio de 5 m (ou 2 x 2,5 m)</td><td className="px-6 py-3">1,6 mm a 2,0 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">AutoCut C 4-2</td><td className="px-6 py-3">2 fios de 2,5 m</td><td className="px-6 py-3">2,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">AutoCut 5-2</td><td className="px-6 py-3">2 fios de 3 m</td><td className="px-6 py-3">2,0 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">AutoCut C 6-2</td><td className="px-6 py-3">1 fio de 4 m (dobrado ao meio)</td><td className="px-6 py-3">2,0 mm a 2,4 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">AutoCut 25-2</td><td className="px-6 py-3">2 fios de 3,5 m</td><td className="px-6 py-3">2,4 mm a 2,7 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">AutoCut C 26-2</td><td className="px-6 py-3">1 fio de 7 m (dobrado ao meio)</td><td className="px-6 py-3">2,4 mm a 2,7 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">AutoCut 36-2 / 46-2 / 56-2</td><td className="px-6 py-3">2 fios de 4 m</td><td className="px-6 py-3">2,7 mm a 3,3 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">SuperCut 20-2</td><td className="px-6 py-3">2 fios de 3 m</td><td className="px-6 py-3">2,4 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">SuperCut 40-2</td><td className="px-6 py-3">1 fio de 7,5 m</td><td className="px-6 py-3">2,4 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">TrimCut C 32-2 / C 42-2 / C 52-2</td><td className="px-6 py-3">1 fio de 8 m</td><td className="px-6 py-3">2,4 mm a 3,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">PolyCut 2-2 / 3-2 / 6-2</td><td className="px-6 py-3">2 fios de 0,15 m a 0,20 m</td><td className="px-6 py-3">1,6 mm a 2,4 mm</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors"><td className="px-6 py-3 font-medium">DuroCut 5-2 / 20-2</td><td className="px-6 py-3">2 pedaços de 0,20 m</td><td className="px-6 py-3">2,0 mm a 3,0 mm</td></tr>
                <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-3 font-medium">DuroCut 40-4</td><td className="px-6 py-3">4 pedaços de 0,25 m</td><td className="px-6 py-3">3,0 mm a 4,0 mm</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">Mais dicas para roçadeiras</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              O bom desempenho da roçadeira vai além dos cuidados com o carretel de nylon: uma manutenção preventiva simples garante que o motor trabalhe sempre na rotação certa e sem falhas.
            </p>
            <p>
              Adotar pequenas rotinas de verificação antes e depois do corte prolonga a vida útil dos componentes da transmissão e preserva a segurança do operador em qualquer terreno.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Como substituir uma ferramenta de corte da roçadeira?</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Para alternar entre a lâmina de aço e o cabeçote de nylon, você deve sempre desligar o motor, travar a transmissão inserindo o pino metálico no furo da ponteira e soltar a porca girando no sentido horário (rosca esquerda).
            </p>
            <p>
              Nunca tente segurar o disco de corte apenas com as mãos e certifique-se de retirar os flanges da lâmina antes de rosquear o cabeçote diretamente no eixo.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dicas para a manutenção da roçadeira</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Após cada sessão de trabalho em mato denso, dedique cinco minutos para remover restos fibrosos de grama enrolados na ponteira de transmissão e limpar a proteção da faca limitadora.
            </p>
            <p>
              Verifique periodicamente o filtro de ar, a vela de ignição e a lubrificação da caixa de engrenagens (transmissão angular), além de nunca deixar combustível antigo parado no tanque por semanas.
            </p>
            <p>
              Esses cuidados rápidos evitam o superaquecimento do cabeçote e impedem que pequenos desgastes se transformem em paradas caras no meio do serviço.
            </p>
          </div>

          <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
            <div className="bg-[#1a1a1a] p-10 rounded-3xl text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Considerações Finais</h2>
              <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-6">
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
          </section>

          <div className="mt-12 bg-green-50 border-l-4 border-green-500 p-8 rounded-r-2xl shadow-md flex gap-6 items-start">
             <div className="bg-green-100 p-3 rounded-full text-green-600 hidden md:block">
               <Info size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Dica de Uso</h3>
                <div className="prose prose-lg text-green-900 max-w-none space-y-4">
                  <p>
                    Mantenha o interior da bobina e os ilhós metálicos sempre livres de terra seca e confira se a lâmina limitadora na saia de proteção está firme e afiada para cortar o excesso de fio no tamanho exato.
                  </p>
                  <p>
                    Ao adotar esses cuidados simples de limpeza e enrolamento sob tensão constante, você previne e elimina os travamentos e o desgaste prematuro do cabeçote.
                  </p>
                </div>
             </div>
          </div>

        </div>
    </div>
  );
};
