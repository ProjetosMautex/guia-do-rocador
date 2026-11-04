import React from 'react';
import { CheckCircle2, Clock, Smartphone, Mail, MapPin, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: "José Ailton da Silva",
      slug: "jose-ailton",
      role: "Especialista em Roçadeiras e Operação de Campo",
      image: "/images/autores/José Ailton da Silva.webp",
      description: [
        "Sou o José Ailton da Silva, especialista e operador de roçadeiras com mais de 10 anos de experiência prática diária no corte de vegetação pesada, pastos, capim alto e limpeza de terrenos residenciais e rurais.",
        "Ao longo da minha trajetória, operei dezenas de modelos de roçadeiras a combustão (2 tempos e 4 tempos), elétricas e a bateria, testando na pele a resistência dos materiais em condições climáticas severas e terrenos acidentados.",
        "Minha missão no Guia do Roçador é avaliar o desempenho real das roçadeiras no campo: ergonomia do cinto de sustentação, autonomia do tanque de combustível, nível de vibração e eficiência do corte com fio de nylon ou lâmina metálica, para que você escolha a máquina certa sem surpresas desagradáveis."
      ]
    },
    {
      name: "Carlos Henrique Menezes",
      slug: "carlos-henrique",
      role: "Técnico Especialista em Mecânica de Roçadeiras",
      image: "/images/autores/Carlos Henrique Menezes.webp",
      description: [
        "Sou o Carlos Henrique Menezes, técnico em mecânica com mais de 15 anos de atuação direta em oficina na manutenção, retífica e diagnóstico de motores de roçadeiras a gasolina, elétricas e a bateria.",
        "Durante minha carreira, consertei e preparei centenas de máquinas, atuando no ajuste fino de carburação, sistemas de ignição, embreagens centrífugas, eixos cardã e caixas de transmissão angular.",
        "Minha especialidade no Guia do Roçador é dissecar a engenharia interna de cada roçadeira: qualidade dos rolamentos, dissipação de calor do cilindro, consumo de combustível e facilidade de encontrar peças de reposição, garantindo recomendações baseadas em durabilidade real a longo prazo."
      ]
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Sobre Nós</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Seja bem-vindo ao <span className="text-[#16A34A] font-bold">Guia do Roçador</span>!
          </p>
        </div>
      </section>

      {/* Introduction Completa */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed font-medium">
              O <span className="text-[#1a1a1a] font-bold">Guia do Roçador</span> é o primeiro e maior portal brasileiro dedicado exclusivamente ao universo das <span className="text-[#16A34A] font-bold">roçadeiras</span>.
            </p>
            <p>
              Nosso compromisso é direto: eliminar suas dores de cabeça no trabalho de corte e roçada. Aqui você não encontra conteúdo genérico ou ferramentas dispersas. Focamos 100% no que você realmente precisa saber sobre roçadeiras a combustão (2 tempos e 4 tempos), elétricas e a bateria, além de carretéis, fios de nylon, lâminas de aço e equipamentos de proteção individual (EPIs).
            </p>
            <p>
              Entregamos comparativos imparciais entre as principais marcas do mercado (como Stihl, Husqvarna, Nakasaki, Toyama, Trapp e Vulcan), guias mecânicos para você mesmo regular carburadores, desafogar motores e fazer manutenção preventiva, além das técnicas certas para recarregar carretéis sem embolar e render muito mais no terreno.
            </p>
            <div className="bg-gray-50 border-l-8 border-[#16A34A] p-8 rounded-r-xl italic shadow-sm text-gray-800">
              "Cada artigo do Guia do Roçador nasce da união entre a vivência prática no mato pesado e o conhecimento técnico minucioso da bancada mecânica de motores."
            </div>
          </div>
        </div>
      </section>

      {/* O que você encontrará */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] inline-block border-b-4 border-[#16A34A] pb-2">
              O que você encontrará no site?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Reviews de Roçadeiras", desc: "Comparações técnicas detalhadas de roçadeiras a gasolina, elétricas e a bateria testadas na vegetação real.", icon: <Zap size={32} /> },
              { title: "Mecânica & Regulagem", desc: "Passo a passo para ligar a frio, desafogar em minutos, regular o carburador e resolver panes mecânicas.", icon: <Wrench size={32} /> },
              { title: "Fios, Carretéis & Lâminas", desc: "Aprenda a escolher o nylon ideal, recarregar carretéis sem travar e usar lâminas de corte com segurança.", icon: <ShieldCheck size={32} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#16A34A] hover:shadow-lg transition-all">
                <span className="text-[#16A34A] mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-20 text-center">Nossa Equipe de Especialistas</h2>
          <div className="space-y-24">
            {team.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="w-full md:w-2/5">
                  <a href={`/author/${member.slug}`} className="block group">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-[#16A34A] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 bg-gray-100"
                          onError={(e) => {(e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/16A34A?text=' + member.name.replace(/ /g, '+')}}
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full md:w-3/5 text-left">
                  <a href={`/author/${member.slug}`} className="hover:text-[#16A34A] transition-colors">
                    <h3 className="text-4xl font-black text-[#1a1a1a] mb-2">{member.name}</h3>
                  </a>
                  <p className="text-gray-600 font-bold mb-6 text-lg border-l-4 border-[#16A34A] pl-4">
                    {member.role}
                  </p>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {member.description.map((p, idx) => <p key={idx}>{p}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section Detalhada */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Por que confiar no Guia do Roçador?</h2>
          <div className="grid gap-10">
            {[
              { title: "Foco 100% Especializado em Roçadeiras", desc: "Não dispersamos nossa atenção. Somos obcecados pelo funcionamento, mecânica e rendimento de corte das roçadeiras." },
              { title: "Testes no Mato e Terreno Bruto", desc: "Não nos baseamos em fichas de marketing de fabricantes. Nossos testes acontecem no pasto, capim navalha e mato alto." },
              { title: "Independência Editorial Completa", desc: "Não aceitamos pagamentos para favorecer marcas. Apontamos os prós, os contras e as limitações de cada modelo." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#16A34A] rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Sustainability Completa */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Para quem é este site</h2>
            <p className="text-gray-600 mb-6">Este portal foi feito sob medida para você que:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Deseja comprar sua primeira roçadeira ou trocar de máquina sem errar na potência, cilindrada ou tipo de motor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Quer resolver travamentos de carretel, motor que afoga, máquina que morre em alta rotação ou partida dura.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Cuida de chácara, sítio, lote ou trabalha profissionalmente com roçadas e busca rendimento máximo com segurança.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Como o site se sustenta</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para manter nossa equipe independente e cobrir os custos operacionais, utilizamos <strong>links de afiliados</strong>. Quando você adquire uma roçadeira ou peça através de nossos links recomendados, recebemos uma pequena comissão dos varejistas — sem que você pague nenhum centavo a mais por isso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esse modelo garante que continuemos produzindo tutoriais mecânicos gratuitos e comparativos sinceros para toda a comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Nossa Visão</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Ser a maior e mais respeitada autoridade em roçadeiras do Brasil, ajudando você a economizar tempo, dinheiro e esforço na manutenção do seu terreno.
          </p>
          <p className="text-2xl font-bold text-[#1a1a1a]">
            🙌 Obrigado por fazer parte do Guia do Roçador!
          </p>
        </div>
      </section>

      {/* Contact Section Detalhada */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            <div className="bg-[#16A34A] p-12 md:w-1/3 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-black mb-6 uppercase">Contato</h2>
              <p className="font-medium opacity-90">Prontos para tirar suas dúvidas técnicas sobre roçadeiras, motores, regulagens e ferramentas de corte.</p>
            </div>
            <div className="p-12 md:w-2/3 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#16A34A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Endereço</h4>
                    <p className="text-gray-600 text-sm">Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#16A34A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">E-mail</h4>
                    <p className="text-gray-600 text-sm">contato@guiadorocador.com.br</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="text-[#16A34A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Telefone</h4>
                    <p className="text-gray-600 text-sm">(87) 99641-2248</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#16A34A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Horário</h4>
                    <p className="text-gray-600 text-sm">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
