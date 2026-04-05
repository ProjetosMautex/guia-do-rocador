import React from 'react';
import { Leaf, ShieldCheck, Clock, PenTool, Search, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-[#16A34A]" />,
      title: "Desempenho",
      description: "Limpe seu terreno e corte a grama em segundos, o que levaria horas manualmente."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#16A34A]" />,
      title: "Durabilidade",
      description: "A roçadeira certa é um investimento que garante anos de serviço pesado sem dor de cabeça."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#16A34A]" />,
      title: "Praticidade",
      description: "Tenha a ferramenta sempre pronta para o uso e mantenha seu jardim ou propriedade impecáveis."
    }
  ];

  const reviewProcess = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Pesquisa",
      description: "Analisamos o mercado e selecionamos as roçadeiras mais promissoras de cada categoria."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Testes Práticos",
      description: "Colocamos as máquinas à prova em mato alto, capim e pequenos arbustos."
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Veredito",
      description: "Classificamos com base em potência, consumo do motor e ergonomia."
    }
  ];

  const highlights = [
    {
      title: "Melhor Roçadeira 2026: Testamos as 11 Melhores (Guia Definitivo)",
      url: "/melhor-rocadeira",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "Mato alto e capim denso? Nosso guia revela qual é a roçadeira ideal para limpar o seu terreno com facilidade!"
    },
    {
      title: "Roçadeiras a Gasolina vs Elétricas: Qual a Melhor Escolha para o seu Jardim?",
      url: "/rocadeira-gasolina-vs-eletrica",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "Na dúvida entre potência bruta e praticidade? Descubra qual tipo de motor atende melhor à sua necessidade."
    },
    {
      title: "Stihl ou Husqvarna? O Comparativo Definitivo das Gigantes",
      url: "/stihl-vs-husqvarna",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "Colocamos as duas marcas líderes frente a frente para você decidir qual merece o seu investimento."
    },
    {
      title: "Guia de Manutenção: Como Manter Sua Roçadeira Sempre Nova",
      url: "/manutencao-rocadeira",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "Aprenda dicas essenciais de lubrificação, limpeza de filtro e mistura de óleo para prolongar a vida da sua máquina."
    },
    {
      title: "As 5 Melhores Lâminas e Fios de Nylon do Mercado",
      url: "/melhores-acessorios",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "De capim fino a pequenos arbustos: veja as análises dos melhores acessórios de corte."
    },
    {
      title: "Segurança em Primeiro Lugar: EPIs Essenciais para Operar Roçadeiras",
      url: "/epis-essenciais",
      image: "https://placehold.co/600x400?text=Rocadeira",
      excerpt: "Conheça os equipamentos de proteção que não podem faltar para operar com segurança e tranquilidade."
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] py-20 bg-opacity-95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Domine o Seu <span className="text-[#16A34A]">Terreno</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              O guia definitivo para manter seu jardim e propriedade impecáveis. Descubra as melhores roçadeiras, acessórios e dicas de manutenção.
            </p>
            <a href="#destaques" className="inline-block bg-[#16A34A] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#15803d] transition-colors shadow-lg shadow-green-900/50 transform hover:-translate-y-1 transition-all">
              Ver Melhores Avaliações
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">Por que investir no equipamento certo?</h2>
              <p className="text-gray-600 mt-2">A ferramenta correta corta o trabalho pela metade.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center border-t-4 border-[#16A34A]">
                  <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                    {React.cloneElement(benefit.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Review Section */}
        <section className="py-16 bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Como avaliamos cada equipamento</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Nosso processo de avaliação é rigoroso e 100% focado no uso real em áreas verdes. Não recebemos patrocínio de marcas para maquiar resultados. O Guia do Roçador se mantém ativo por meio de pequenas comissões geradas quando você realiza sua compra usando nossos links – o que não custa nada a mais para você.
                </p>
                <div className="space-y-6">
                  {reviewProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-[#16A34A] p-2 rounded-lg mt-1 text-white">
                        {React.cloneElement(step.icon as React.ReactElement<any>, { 
                          className: 'w-6 h-6 text-white', 
                          strokeWidth: 2.5 
                        })}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[300px] bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-800">
                {/* Imagem de fundo simulada ou padrão, com opacidade */}
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/800x600/16A34A/000000?text=Jardim')" }}></div>
                <div className="relative z-10 text-center p-8">
                  <ShieldCheck className="w-24 h-24 text-[#16A34A] mx-auto mb-4" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-white">100% Imparcial</h3>
                  <p className="text-gray-300 mt-2">Transparência é a nossa base.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Highlights Section */}
        <section id="destaques" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#16A34A] pl-4">
              Destaques e Avaliações
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x533/e2e8f0/16a34a?text=Guia+do+Rocador';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-sm">
                    {index === 0 ? 'Destaque' : 'Artigo'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 line-clamp-2 group-hover:text-[#15803d] transition-colors">
                    <a href={item.url}>
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.url} 
                    className="inline-flex items-center text-[#16A34A] font-bold hover:underline decoration-[#16A34A] decoration-2 underline-offset-4 mt-auto transition-all"
                  >
                    Ler artigo completo <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
