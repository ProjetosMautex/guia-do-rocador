import React from 'react';
import { Check, Info, AlertTriangle } from 'lucide-react';
import { BannerDoMeio } from './BannerDoMeio';

export const ComoRegularRocadeira: React.FC = () => {
  return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/como regular roçadeira.webp" 
              alt="Roçadeira Falhando? Veja Como Regular o Carburador" 
              className="w-full h-full object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Roçadeira Falhando? <br/>
              <span className="text-[#16A34A]">Veja Como Regular o Carburador</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Por</span>
                <a href="/author/carlos-henrique" className="flex items-center gap-3 hover:text-[#16A34A] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10">
                  <img 
                    src="/images/autores/Carlos Henrique Menezes.webp" 
                    alt="Carlos Henrique" 
                    className="w-10 h-10 rounded-full border-2 border-[#16A34A] group-hover:scale-110 transition-transform"
                    onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Carlos+Henrique&background=16A34A&color=fff"; }}
                  />
                  Carlos Henrique
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-8 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 border-l-4 border-[#16A34A] pl-6 py-2">
              Uma roçadeira que não funciona corretamente pode gerar frustração e atrasos.
            </p>
            <p>
              Um dos problemas mais comuns que afetam o desempenho desses equipamentos é a má regulagem do carburador, responsável por controlar a mistura ar/combustível.
            </p>
            <p>
              Quando o carburador está desajustado, a roçadeira pode apresentar dificuldades na partida, perda de potência e até mesmo um consumo excessivo de combustível.
            </p>
            <p>
              Aprender a regular o carburador da roçadeira é essencial para garantir o bom funcionamento e prolongar a vida útil do seu equipamento.
            </p>
            <p>
              Para começar, vamos entender onde ele está localizado e quais são seus principais componentes.
            </p>
            
            <div className="w-full flex justify-center my-10">
              <img src="/images/blog/1/como regular roçadeira.webp" alt="Como regular roçadeira" className="rounded-2xl shadow-xl border border-gray-100 w-full h-auto" />
            </div>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Localização e Acesso ao Carburador</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Para dar início ao ajuste do carburador, o primeiro passo é acessar o compartimento onde ele está instalado.
            </p>
            <p>
              Esse componente é protegido por uma estrutura plástica que preserva o sistema contra detritos e impurezas externas.
            </p>
            <p>
              Ao realizar a abertura desse acesso, você estará pronto para iniciar a inspeção técnica que permitirá identificar os pontos de regulagem necessários para o bom funcionamento do motor.
            </p>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Elementos do Carburador</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Para dominar o ajuste da sua roçadeira, você precisa identificar os componentes que ditam o ritmo do motor.
            </p>
            <p>
              O coração desse sistema reside nos parafusos de regulagem, identificados pelas letras L (Low/Baixa) e H (High/Alta).
            </p>
            <p>
              O parafuso L equilibra a mistura em marcha lenta e acelerações iniciais, enquanto o H gerencia a injeção de combustível durante o esforço máximo.
            </p>
            <p>
              Existe ainda um terceiro parafuso, geralmente posicionado isoladamente, que controla a rotação da marcha lenta, impedindo que o motor morra ou que o cabeçote gire involuntariamente.
            </p>
            <p>
              Compreender a função específica de cada peça transforma o que parece ser um mistério mecânico em um processo lógico.
            </p>
            <p>
              Dominar esses elementos é o primeiro passo para restaurar a potência original e evitar desgastes prematuros.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Funcionamento das Agulhas</h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Entender a dinâmica dessas agulhas é o que separa um ajuste amador de um trabalho profissional.
            </p>
            <p>
              Ao girar os parafusos no sentido horário, você restringe a passagem de combustível, "fechando" a mistura e elevando a rotação.
            </p>
            <p>
              Por outro lado, o movimento anti-horário enriquece a mistura, permitindo que mais combustível entre na câmara e, consequentemente, reduzindo o giro do motor.
            </p>
            <p>
              É crucial operar com movimentos curtos, de um quarto de volta por vez, pois o sistema é extremamente sensível.
            </p>
            <p>
              Se você afrouxar demais, o motor falhará por excesso de combustível; se apertar excessivamente, ele sofrerá superaquecimento por falta de lubrificação interna.
            </p>
            <p>
              Esse equilíbrio preciso é o segredo para extrair o máximo desempenho da sua máquina sem comprometer a durabilidade do conjunto.
            </p>
          </div>

          <div className="w-full flex justify-center my-10">
            <img src="/images/blog/1/Localização e Acesso ao Carburador.webp" alt="Localização e Acesso ao Carburador" className="rounded-2xl shadow-xl border border-gray-100 w-full h-auto" />
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Passo a Passo para Regular o Carburador</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              A regulagem do carburador é um procedimento que exige método e atenção aos sinais que o motor emite.
            </p>
            <p>
              Não se trata apenas de movimentar parafusos, mas de encontrar o equilíbrio térmico e mecânico ideal para que a combustão ocorra de forma eficiente.
            </p>
            <p>
              O processo segue uma lógica sequencial, iniciando pelas preparações básicas de segurança até o refinamento fino dos regimes de carga.
            </p>
            <p>
              Siga as etapas abaixo para conduzir esse ajuste de forma estruturada e precisa.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
            <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">1</span>
            Preparação Inicial
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Antes de tocar em qualquer parafuso, a prioridade absoluta é a sua integridade física.
            </p>
            <p>
              O primeiro passo indispensável consiste em remover a lâmina de corte ou o cabeçote de nylon da roçadeira.
            </p>
            <p>
              Vale lembrar que a escolha do <a href="/qual-o-melhor-fio-de-nylon-para-rocadeira" className="text-[#16A34A] hover:underline font-semibold">fio de nylon ideal</a> impacta diretamente no esforço do motor, influenciando o rendimento do carburador e o desempenho geral.
            </p>
            <p>
              Essa precaução elimina o risco de acionamentos acidentais durante os testes de aceleração, evitando acidentes graves.
            </p>
            <p>
              Verifique também se o filtro de ar está limpo e bem encaixado, pois obstruções mascaram o comportamento real do motor.
            </p>
            <p>
              Com o equipamento em um suporte estável e afastado de materiais inflamáveis, você cria o ambiente técnico ideal para um ajuste preciso e seguro.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
            <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">2</span>
            Ajuste Inicial dos Parafusos
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Para alinhar a base do seu motor, comece fechando suavemente os parafusos L e H até sentir uma leve resistência.
            </p>
            <p>
              Jamais force o aperto, pois a ponta das agulhas é extremamente delicada e pode sofrer danos irreversíveis.
            </p>
            <p>
              Após esse contato inicial, gire cada um deles exatamente uma volta completa no sentido anti-horário.
            </p>
            <p>
              Esse posicionamento padrão atua como um "ponto zero" técnico, garantindo que o carburador receba a mistura necessária para operar sem sufocar o sistema.
            </p>
            <p>
              Manter essa simetria inicial é o alicerce para alcançar a estabilidade e o desempenho que você espera.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
            <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">3</span>
            Ligando a Roçadeira para Teste
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Com o "ponto zero" estabelecido, é hora de dar vida ao motor.
            </p>
            <p>
              Acione o afogador conforme as instruções do fabricante e ligue a roçadeira.
            </p>
            <p>
              Observe atentamente a resposta imediata: o motor deve girar de forma constante, sem oscilações bruscas ou estalos metálicos.
            </p>
            <p>
              Se a máquina engasgar ou morrer logo após a ignição, não insista repetidamente.
            </p>
            <p>
              Escute a sonoridade do equipamento, buscando aquele timbre metálico limpo e uniforme.
            </p>
            <p>
              Caso note irregularidades na subida de giro, saiba que o sistema está pedindo refino.
            </p>
            <p>
              Este teste inicial é o seu termômetro diagnóstico, revelando exatamente se a mistura está pobre ou rica demais antes de avançarmos para as correções definitivas nas agulhas de alta e baixa.
            </p>
          </div>

          <div className="w-full flex justify-center my-10">
            <img src="/images/blog/1/Passo a Passo para Regular o Carburador.webp" alt="Passo a Passo para Regular o Carburador" className="rounded-2xl shadow-xl border border-gray-100 w-full h-auto" />
          </div>

          <BannerDoMeio />

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 mt-16 flex items-center gap-3">
            <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">4</span>
            Ajuste Fino do Parafuso H
          </h3>
          <div className="w-full flex justify-center my-10">
            <img src="/images/blog/1/Passo a Passo para Regular o Carburador 2.webp" alt="Ajuste Fino do Parafuso H" className="rounded-2xl shadow-xl border border-gray-100 w-full h-auto" />
          </div>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Com o motor aquecido, acelere totalmente para avaliar a resposta do parafuso H.
            </p>
            <p>
              O objetivo aqui é alcançar a rotação máxima sem que o motor apresente "cortes" ou falhas de ignição.
            </p>
            <p>
              Se a roçadeira soar abafada e expelir fumaça excessiva, a mistura está rica; feche o parafuso levemente até o giro subir e ganhar brilho.
            </p>
            <p>
              Por outro lado, se o motor "gritar" e perder força subitamente, a mistura está pobre, o que é um risco real de fundir o pistão por falta de lubrificação — abra o parafuso imediatamente para enriquecer o fluxo.
            </p>
            <p>
              Sintonize esse equilíbrio buscando uma nota musical constante e vigorosa.
            </p>
            <p>
              Lembre-se: o ajuste correto garante que a potência chegue ao disco de corte com total eficiência.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
            <span className="bg-[#16A34A] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">5</span>
            Ajuste do Parafuso L
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Com o desempenho em alta rotação estabilizado, voltamos nossa atenção ao parafuso L.
            </p>
            <p>
              Sua função é vital na transição entre o repouso e a aceleração plena.
            </p>
            <p>
              Gire o parafuso L lentamente até encontrar o ponto de rotação máxima em marcha lenta; em seguida, recue cerca de um quarto de volta.
            </p>
            <p>
              Esse movimento preciso garante que o motor responda prontamente ao gatilho do acelerador, eliminando aquele "buraco" irritante na aceleração.
            </p>
            <p>
              Uma mistura corretamente ajustada aqui impede que a máquina engasgue ou morra durante o uso intermitente.
            </p>
            <p>
              Observe se o motor mantém o ritmo de forma linear e suave.
            </p>
            <p>
              Se houver hesitação ao acelerar, enriqueça ligeiramente a mistura.
            </p>
            <p>
              O ajuste fino deste componente é o que diferencia uma operação sofrível de um trabalho fluído e profissional.
            </p>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Regulagem do Parafuso da Marcha Lenta</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Por fim, ajuste o parafuso da marcha lenta (frequentemente identificado como "T" ou "Idle").
            </p>
            <p>
              Sua finalidade é manter o motor em funcionamento constante sem que o cabeçote de corte gire por conta própria.
            </p>
            <p>
              Gire o parafuso no sentido horário para elevar a rotação ou anti-horário para reduzi-la, até sentir o motor estabilizado, suave e sem vibrações excessivas.
            </p>
            <p>
              Essa configuração é o detalhe que evita desgastes desnecessários na embreagem e garante segurança absoluta, impedindo que a lâmina se mova involuntariamente enquanto você manipula a roçadeira em repouso.
            </p>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Regulagem da Trava e Acelerador</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              O bom funcionamento da roçadeira também depende da sincronia entre o gatilho do acelerador e sua trava de segurança.
            </p>
            <p>
              Verifique se, ao soltar o comando, o cabo retorna prontamente à posição de repouso, sem travar ou manter o giro elevado.
            </p>
            <p>
              Caso perceba resistência ou atraso no retorno, lubrifique o mecanismo ou ajuste a tensão do cabo.
            </p>
            <p>
              Um sistema desregulado não apenas compromete a precisão durante o corte, mas também impõe riscos desnecessários ao operador.
            </p>
            <p>
              Garanta que o acelerador responda de forma fluida e instantânea; essa sintonia fina é o que separa um equipamento instável de uma máquina pronta para encarar qualquer desafio com total controle.
            </p>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 mt-16 uppercase tracking-tighter">Dicas Importantes para a Regulagem</h2>
          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              A precisão na regulagem de uma roçadeira é influenciada por fatores externos e pelo comportamento dinâmico do equipamento durante o uso.
            </p>
            <p>
              Compreender como as condições de operação e a rotina de manutenção impactam a performance do motor é essencial para garantir que a máquina funcione com consistência e segurança.
            </p>
            <p>
              A seguir, destacamos pontos cruciais que todo operador deve considerar para proteger o equipamento e otimizar sua experiência de trabalho.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-10 shadow-sm">
            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="text-red-600" size={24} /> Dica de Segurança
            </h3>
            <div className="text-red-900 space-y-4">
              <p>
                Priorize sempre sua integridade física utilizando óculos de proteção, luvas resistentes e protetores auriculares.
              </p>
              <p>
                Operar roçadeiras sem esses dispositivos é um risco evitável e desnecessário.
              </p>
              <p>
                Equipamentos de segurança não são opcionais; eles formam a última barreira entre uma rotina produtiva e acidentes graves causados por detritos arremessados ou ruídos intensos.
              </p>
              <p>
                Antes de iniciar qualquer teste de funcionamento ou retomar o trabalho pesado, verifique se seu traje está completo e se não há pessoas ou animais próximos à área de corte.
              </p>
              <p>
                Cuidar de você é o requisito básico para qualquer profissional que deseja dominar a manutenção do próprio equipamento sem comprometer a saúde a longo prazo.
              </p>
              <p>
                Segurança é o alicerce de todo bom serviço.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl my-10 shadow-sm">
            <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center gap-2">
              <Info className="text-yellow-600" size={24} /> Atenção
            </h3>
            <div className="text-yellow-900 space-y-4">
              <p>
                Caso sinta qualquer insegurança técnica ou perceba que o motor permanece instável após as tentativas, interrompa o procedimento imediatamente.
              </p>
              <p>
                A busca por um profissional qualificado é uma decisão inteligente que preserva o investimento do seu equipamento e evita danos internos irreversíveis, como a fundição do pistão ou falhas críticas no sistema de ignição.
              </p>
              <p>
                Lembre-se: o domínio mecânico é um aprendizado contínuo e reconhecer o limite da manutenção caseira é o que garante a longevidade da sua máquina.
              </p>
              <p>
                Não arrisque o funcionamento da sua roçadeira em cenários de dúvida; prefira a precisão de um especialista para assegurar que cada componente opere dentro dos padrões exigidos pelo fabricante.
              </p>
              <p>
                Sua segurança e produtividade agradecem a cautela.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Dicas para Solução Rápida de Oscilações</h2>

          <div className="prose prose-lg text-gray-700 max-w-none mb-10 space-y-6">
            <p>
              Caso o motor apresente instabilidade ou comportamento irregular durante o serviço, existem protocolos de verificação rápida que podem ajudar a restaurar a performance original.
            </p>
            <p>
              Identificar a origem desses sintomas é fundamental para determinar se a falha pode ser corrigida através de manobras simples de ajuste ou se o sistema demanda uma inspeção interna mais rigorosa.
            </p>
            <p>
              Entenda como diagnosticar e tratar essas oscilações de forma ágil.
            </p>
          </div>

          <section className="mt-16 pt-12 border-t-4 border-[#16A34A]">
            <div className="bg-[#1a1a1a] p-10 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-[#16A34A] to-green-600"></div>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Finalização</h2>
              <div className="prose prose-lg text-gray-300 max-w-none mx-auto font-medium space-y-6">
                <p>
                  Após percorrer todo o processo de regulagem, o último estágio consiste na validação do trabalho realizado em condições reais de uso.
                </p>
                <p>
                  Este é o momento de confirmar se a performance da sua roçadeira foi restaurada e se o equipamento está operando com a confiabilidade esperada.
                </p>
                <p>
                  Confira abaixo orientações fundamentais sobre os cuidados contínuos que garantirão a longevidade dos resultados obtidos.
                </p>
                <p className="mt-6 pt-6 border-t border-gray-700 text-left">
                  <strong className="text-white block mb-2">Dica de Uso:</strong>
                  A qualidade do combustível dita a vida útil do motor.
                  Abasteça sempre com mistura nova e aditivada para evitar borras que inutilizam até o melhor ajuste.
                </p>
              </div>
            </div>
          </section>

        </div>
    </div>
  );
};
