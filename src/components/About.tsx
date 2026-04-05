import React from 'react';
import { CheckCircle2, Clock, Smartphone, Mail, MapPin, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: "Murilo",
      slug: "murilo",
      role: "Fundador e Especialista em SEO",
      image: "/images/autores/murilo.webp",
      description: [
        "Sou o Murilo, fundador do Guia do Roçador e especialista em SEO aplicado a projetos de jardinagem e equipamentos de micronicho.",
        "Meu trabalho é estruturar conteúdos que realmente ajudem o consumidor, ao mesmo tempo em que constroem autoridade temática nos mecanismos de busca. Atuo com planejamento editorial, organização de silos de conteúdo e interligação estratégica entre páginas, sempre focado na intenção real de quem está planejando comprar uma ferramenta ou cuidar bem dela.",
        "No Guia do Roçador, sou responsável por definir a arquitetura do site, revisar a consistência dos textos e garantir que cada conteúdo entregue respostas práticas e diretas, sem superficialidade."
      ]
    },
    {
      name: "José Ailton da Silva",
      slug: "jose-ailton",
      role: "Especialista em Jardinagem e Áreas Externas",
      image: "/images/autores/José Ailton da Silva.webp",
      description: [
        "Sou o José Ailton da Silva, especialista em jardinagem e manutenção de áreas externas, com mais de 10 anos de experiência no uso de ferramentas como roçadeiras, aparadores e cortadores de grama.",
        "Ao longo da minha trajetória, já trabalhei tanto em ambientes residenciais quanto em propriedades maiores, lidando com limpeza de terrenos, manutenção de jardins e controle de mato em áreas urbanas e rurais.",
        "Minha especialidade é avaliar o desempenho das roçadeiras no uso real do dia a dia, considerando fatores como facilidade de uso, conforto, autonomia, eficiência no corte e custo-benefício. Com isso, consigo orientar desde iniciantes até usuários mais frequentes a escolherem a ferramenta ideal para manter seus espaços sempre limpos, de forma prática e segura."
      ]
    },
    {
      name: "Carlos Henrique Menezes",
      slug: "carlos-henrique",
      role: "Técnico em Mecânica de Equipamentos",
      image: "/images/autores/Carlos Henrique Menezes.webp",
      description: [
        "Sou o Carlos Henrique Menezes, técnico em mecânica de equipamentos com mais de 15 anos de experiência em manutenção e análise de ferramentas motorizadas, incluindo roçadeiras a gasolina, elétricas e a bateria.",
        "Durante minha carreira, atuei diretamente com profissionalismo em diagnóstico, manutenção e testes de desempenho, o que me permitiu desenvolver um olhar técnico apurado sobre durabilidade, potência, eficiência mecânica e qualidade de construção.",
        "Minha especialidade é analisar as roçadeiras de forma técnica, avaliando aspectos como tipo de motor (2 tempos, 4 tempos ou brushless), torque, sistema de transmissão, consumo, vibração e vida útil dos componentes. Com esse conhecimento, consigo recomendar os melhores modelos com base em desempenho real e confiabilidade a longo prazo."
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
              Aqui, nosso objetivo é ajudar jardineiros, profissionais de manutenção de áreas verdes, donos de chácaras e apaixonados por um terreno bem cuidado a escolherem os equipamentos certos para cada necessidade.
            </p>
            <p>
              Se você procura uma roçadeira elétrica leve para o quintal de casa, uma máquina a gasolina potente para capim denso, ou até mesmo os melhores acessórios para o seu equipamento, este é o lugar certo. Estamos aqui para orientar você de forma prática, honesta e técnica — sem enrolação.
            </p>
            <div className="bg-gray-50 border-l-8 border-[#16A34A] p-8 rounded-r-xl italic shadow-sm text-gray-800">
              "Cada artigo do site é escrito com base em vivência real: especialistas que testam e utilizam ferramentas diariamente na manutenção de jardins, controle de mato e limpeza de grandes terrenos."
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
              { title: "Reviews Técnicos", desc: "Análises baseadas em testes práticos no mato, desempenho em uso contínuo e comparações reais.", icon: <Zap size={32} /> },
              { title: "Dicas de Manutenção", desc: "Orientações sobre lubrificação, limpeza de filtro e misturas para aumentar a durabilidade do motor.", icon: <Wrench size={32} /> },
              { title: "Guias Objetivos", desc: "Conteúdo claro para ajudar você a escolher a roçadeira certa para o seu tipo de terreno e rotina.", icon: <ShieldCheck size={32} /> }
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
              { title: "Especialização Prática", desc: "Nossa equipe é formada por especialistas com sólida experiência prática em manutenção de máquinas e áreas verdes." },
              { title: "Testes no Terreno Real", desc: "Não nos baseamos apenas em catálogos. Ligamos as máquinas e avaliamos o desempenho em mato alto, capim e horas de uso contínuo." },
              { title: "Independência Editorial", desc: "Não aceitamos patrocínios para favorecer marcas. Nossas recomendações são imparciais e focadas no custo-benefício." }
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
            <p className="text-gray-600 mb-6">Este site é feito para você que:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Vai comprar sua primeira roçadeira para a limpeza do sítio ou jardim.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Procura guias de manutenção sem jargões complicados.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16A34A] font-bold">✔</span>
                <span className="text-gray-700">Trabalha na área e busca comparações técnicas sobre motosserras e roçadeiras.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Como o site se sustenta</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para manter a independência e a qualidade do conteúdo, utilizamos <strong>links de afiliado</strong>. Quando você faz uma compra através desses links, recebemos uma pequena comissão — sem nenhum custo extra para você.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esse modelo nos permitir cobrir os custos de testes reais e continuar oferecendo informação confiável para a nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Visão para o Futuro</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Queremos ser a principal referência quando o assunto for limpeza de terrenos e manutenção de áreas verdes.
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
              <p className="font-medium opacity-90">Prontos para tirar suas dúvidas sobre roçadeiras e equipamentos.</p>
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
