import React, { useState } from 'react';
import { BunnerDoMeiorocadeira as BannerDoMeio } from './BunnerDoMeiorocadeira';

// Ícones SVG Inline Leves (Zero JS extra no bundle, PageSpeed 100)
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ChevronDown = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ShieldAlert = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Lightbulb = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

export const ComoDesafogarRocadeira: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Por que o motor não dá nem sinal quando a vela está molhada?",
      answer: [
        "Quando você puxa a cordinha várias vezes com o afogador fechado, a gasolina líquida se acumula entre os eletrodos da vela.",
        "Esse filme de combustível e óleo 2 tempos fecha curto na ponta da vela e impede a faísca de saltar."
      ]
    },
    {
      question: "Posso passar lixa na vela de ignição para secar mais rápido?",
      answer: [
        "Não use lixa de ferro nem faca nos eletrodos.",
        "Riscos no metal seguram carvão e fazem a vela falhar de novo em poucos dias: basta enxugar com pano limpo e, se estiver encharcada de óleo, passar rapidamente pela chama de um isqueiro e deixar esfriar."
      ]
    },
    {
      question: "O truque do acelerador no fundo funciona sem desmontar a vela?",
      answer: [
        "Funciona muito bem em afogamentos leves (quando você deu duas ou três puxadas a mais com o afogador fechado).",
        "Se após 8 puxadas com afogador aberto e gatilho no máximo ela não der sinal de explosão, parta direto para a drenagem retirando a vela."
      ]
    },
    {
      question: "Qual chave abre a tampa do cabeçote na Stihl FS 160 e FS 220?",
      answer: [
        "Na linha profissional Stihl FS 160, FS 220 e FS 290, os parafusos da carenagem laranja usam chave Torx T27, e a vela sai com a chave combinada de 19 mm que vem no kit."
      ]
    },
    {
      question: "Desafoguei a roçadeira, ela pegou, mas morre ao acelerar. O que fazer?",
      answer: [
        "Se a vela já está seca e a ignição funciona, mas o giro falha na saída, o carburador precisa de ajuste nas agulhas de baixa (L) e marcha lenta.",
        <>
          Confira o passo a passo exato no guia de{' '}
          <a href="/como-regular-rocadeira" className="text-[#166534] hover:underline font-semibold">
            como regular o carburador da roçadeira
          </a>
          .
        </>
      ]
    }
  ];

  return (
    <div className="font-sans bg-white text-[#1a1a1a]">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/como desafogar roçadeira.webp"
            alt="Remoção e secagem da vela de ignição para desafogar roçadeira a gasolina"
            title="Como Desafogar Roçadeira em 2 Minutos"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#15803d] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider">
            Socorro Rápido no Campo • Motores a Combustão
          </span>

          <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
            Como Desafogar Roçadeira em 2 Minutos <br />
            <span className="text-[#4ade80]">[Passo a Passo]</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/author/jose-ailton/"
                className="flex items-center gap-3 hover:text-[#4ade80] transition-colors font-bold group bg-white/5 pr-4 rounded-full border border-white/10"
              >
                <img
                  src="/images/autores/José Ailton da Silva-thumb.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#16A34A] group-hover:scale-105 transition-transform object-cover"
                />
                <span>José Ailton da Silva</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Especialista Operacional em Roçadeiras</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIRETA (ZERO CLICHÊ, DIRETO AO DIAGNÓSTICO)
            =================================================================== */}
        <section className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl text-gray-800 border-l-4 border-[#16A34A] pl-5 py-1 mb-5">
            Cheiro forte de gasolina no escapamento depois de dez puxadas seguidas sem nenhum sinal de explosão significa uma coisa só: o cilindro da sua roçadeira encharcou.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Insistir na cordinha com o afogador fechado só piora o excesso de líquido na câmara e ainda arrisca arrebentar a mola do retrátil.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Você resolve esse travamento em dois minutos no próprio terreno usando apenas a chave de vela e um pano limpo, sem precisar levar a máquina para a oficina.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            Abaixo, mostro primeiro o atalho sem ferramentas para afogamento leve, seguido da drenagem completa do cilindro e das particularidades de acesso nas linhas Stihl, Toyama, Makita e importadas.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/como desafogar roçadeira.webp"
              alt="Inspeção da vela de ignição molhada de combustível em uma roçadeira afogada"
              title="Inspeção da vela de ignição encharcada"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. ATALHO RÁPIDO SEM FERRAMENTAS (MÉTODO 1)
            =================================================================== */}
        <section className="mb-12">
          <div className="bg-[#F0FDF4] p-6 sm:p-8 rounded-2xl border-2 border-[#16A34A]/40">
            <span className="inline-block bg-[#15803d] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              Teste Antes de Pegar na Chave
            </span>
            <h2 className="text-2xl font-black text-[#166534] mb-3 uppercase tracking-tight">
              Atalho Rápido: O Truque do Acelerador no Fundo
            </h2>
            <p className="mb-4 text-sm sm:text-base text-gray-800 leading-relaxed">
              Se você acabou de dar duas ou três puxadas a mais com o afogador fechado, tente limpar a câmara apenas com fluxo de ar puro.
            </p>
            <p className="mb-4 text-sm sm:text-base text-gray-800 leading-relaxed">
              Baixe a alavanca do afogador para a posição totalmente aberta (trabalho), firme a roçadeira no chão, aperte o gatilho do acelerador até o batente e dê de 5 a 8 puxadas firmes na corda.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              A borboleta escancarada varre o vapor acumulado; se o motor continuar mudo após oito puxadas, faça a drenagem completa pela vela abaixo.
            </p>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS NECESSÁRIOS (CHECKLIST ENXUTO)
            =================================================================== */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#15803d] text-white p-2.5 rounded-xl shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight m-0">
                O que Você Vai Usar na Drenagem Completa
              </h2>
              <p className="text-sm text-gray-600 m-0">
                Tudo o que normalmente já vem no estojo original da máquina:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Chave de Vela Combinada (e Torx T27 na Stihl)</span>
                <span className="text-xs text-gray-600">Solta a cobertura superior e desrosqueia a vela no sentido anti-horário.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Pano Seco sem Fiapos</span>
                <span className="text-xs text-gray-600">Absorve a mistura 2T encharcada na rosca e entre os eletrodos.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Isqueiro (Opcional)</span>
                <span className="text-xs text-gray-600">Secagem rápida por evaporação caso o óleo 2T não saia só no pano.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[#166534] mt-0.5 shrink-0"><Check size={20} /></span>
              <div>
                <span className="font-bold text-gray-900 block text-sm">Local Aberto e Ventilado</span>
                <span className="text-xs text-gray-600">Para expulsar a névoa de gasolina sem risco de faísca próxima.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            5. PASSO A PASSO ÚNICO E COMPLETO (5 ETAPAS CLARAS)
            =================================================================== */}
        <div className="space-y-10 mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Passo a Passo para Desafogar a Roçadeira pela Vela
          </h2>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">1</span>
              Desligue a chave Stop e retire a vela de ignição
            </h3>
            <div className="w-full flex justify-center my-5">
              <img
                src="/images/blog/Passo 1 Desligar e montar.webp"
                alt="Desligando o botão Stop e soltando o cachimbo da vela da roçadeira"
                title="Passo 1: Cortar a ignição e retirar a vela"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              Passe o interruptor no punho para a posição Stop (OFF) para cortar qualquer centelha da bobina.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Puxe o cachimbo de borracha com firmeza, solte a cobertura plástica se o seu modelo tapar o cabeçote e desrosqueie a vela no sentido anti-horário.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">2</span>
              Seque os eletrodos da vela sem usar lixa
            </h3>
            <div className="w-full flex justify-center my-5">
              <img
                src="/images/blog/Passo 2 Limpeza da vela.webp"
                alt="Secagem cuidadosa dos eletrodos da vela de ignição com pano seco"
                title="Passo 2: Secagem dos eletrodos da vela"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              Enxugue toda a ponta metálica, a rosca e a cerâmica interna com um pano limpo até remover o brilho de combustível.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Se continuar oleosa, passe a ponta rapidamente na chama de um isqueiro por três segundos e espere esfriar completamente antes de voltar para o cilindro.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">3</span>
              Vire o motor com o furo da vela apontado para baixo
            </h3>
            <div className="w-full flex justify-center my-5">
              <img
                src="/images/blog/Passo 3 Desafogar o motor manualmente.webp"
                alt="Roçadeira invertida com o orifício da vela voltado para o chão para drenar o excesso de mistura"
                title="Passo 3: Posição invertida para drenagem do cilindro"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Confira se a tampa do tanque está bem vedada, mantenha o cachimbo da vela afastado do furo e vire a roçadeira de cabeça para baixo para que a gravidade ajude o combustível acumulado a escorrer.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">4</span>
              Puxe a corda de 8 a 12 vezes para cuspir a gasolina
            </h3>
            <div className="w-full flex justify-center my-5">
              <img
                src="/images/blog/Remoção do combustível em excesso.webp"
                alt="Acionando o retrátil para expulsar a gasolina retida dentro do cilindro"
                title="Passo 4: Expulsão da gasolina acumulada no cilindro"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Com o botão Stop ainda desligado, puxe o retrátil em ritmo constante até não sair mais nenhum respingo ou névoa úmida pelo buraco da vela, e aguarde um minuto para o restante evaporar.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-3">
              <span className="bg-[#15803d] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-black shrink-0">5</span>
              Monte a vela e dê a partida com o afogador aberto
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              Rosqueie a vela seca primeiro só com os dedos para não espanar o cabeçote de alumínio, encoste com a chave sem exagero e recoloque o cachimbo até clicar.
            </p>
            <p className="mb-0 text-gray-700 leading-relaxed text-base sm:text-lg">
              Ligue a chave Stop, deixe o afogador obrigatoriamente aberto (nunca feche agora!) e puxe a corda com o acelerador pressionado até o motor pegar e queimar a fumaça branca residual.
            </p>
          </section>
        </div>

        {/* ===================================================================
            6. TABELA DE PARTICULARIDADES POR MARCA (SEM REPETIR OS 5 PASSOS!)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            O que Muda ao Desafogar por Marca (Stihl, Toyama, Makita e Importadas)
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            A lógica da drenagem é idêntica em qualquer motor a combustão, mudando apenas o acesso à vela e detalhes de cada projeto:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs uppercase">
                  <th className="p-4 font-bold">Marca / Linha</th>
                  <th className="p-4 font-bold">Acesso à Vela</th>
                  <th className="p-4 font-bold">Detalhe Específico de Oficina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Stihl (FS 160, FS 220, FS 280, FS 290)</td>
                  <td className="p-4">Carenagem superior presa com parafuso Torx T27</td>
                  <td className="p-4">Chave de vela boca 19 mm; confira se o comando multifunção no punho saiu da trava de partida.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Toyama (TBC26, TBC33, TBC43, TBC52)</td>
                  <td className="p-4">Cachimbo exposto ou tampa simples Philips</td>
                  <td className="p-4">
                    Confira se a proporção do{' '}
                    <a href="/qual-o-melhor-oleo-para-rocadeira-toyama" className="text-[#166534] font-semibold hover:underline">
                      óleo para roçadeira Toyama
                    </a>{' '}
                    não ficou rica demais (25:1 mineral vs 50:1 semissintético).
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50/20">
                  <td className="p-4 font-bold text-gray-900">Makita (2T e 4 Tempos)</td>
                  <td className="p-4">Acesso direto superior no cabeçote</td>
                  <td className="p-4">Nos modelos 4T, se a máquina deitou de lado, verifique se óleo do cárter não molhou o filtro de ar antes de puxar a corda.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Nakasaki, Vulcan, Tekna e Branco (43cc–75cc)</td>
                  <td className="p-4">Cachimbo superior livre sem precisar tirar carenagem</td>
                  <td className="p-4">
                    Afogam fácil se o operador bombar demais o primer após o primeiro sinal — em máquinas novas, confira também o guia de{' '}
                    <a href="/como-montar-rocadeira-nakasaki" className="text-[#166534] font-semibold hover:underline">
                      como montar roçadeira Nakasaki
                    </a>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            7. DIAGNÓSTICO CRUCIAL: VELA MOLHADA VS VELA SECA
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-100 pb-3">
            Tirou a Vela e Ela Saiu Seca? Então Não Está Afogada
          </h2>

          <div className="w-full flex justify-center my-6">
            <img
              src="/images/blog/Entendendo o Motor Dois Tempos nas Roçadeiras.webp"
              alt="Corte técnico mostrando alimentação de ar e combustível em motor dois tempos de roçadeira"
              title="Diagnóstico de combustível e faísca no motor dois tempos"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="text-lg font-bold text-amber-900 mb-2">
                Vela Molhada (Afogamento Real)
              </h3>
              <p className="text-sm text-amber-950 leading-relaxed mb-3">
                Há gasolina chegando ao cilindro, mas em excesso ou misturada com óleo demais, impedindo a centelha de queimar.
              </p>
              <p className="text-sm text-amber-950 leading-relaxed mb-0">
                Se ela voltar a encharcar já na primeira puxada após a drenagem, a agulha interna do carburador travou aberta ou a proporção do{' '}
                <a href="/qual-o-melhor-oleo-2-tempos-para-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  óleo 2 tempos
                </a>{' '}
                está fora do padrão.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Vela Completamente Seca (Falta Combustível)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Depois de várias puxadas a ponta continua seca? A gasolina não está passando pelo carburador.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-0">
                Verifique se o bulbo primer enche de combustível, confira o filtro pescador dentro do tanque e revise a sequência correta em{' '}
                <a href="/como-ligar-rocadeira" className="text-[#166534] font-semibold hover:underline">
                  como ligar roçadeira com motor frio
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. ALERTA DE SEGURANÇA AO DRENAR O CILINDRO
            =================================================================== */}
        <section className="mb-14 bg-red-50 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-red-600 shrink-0 mt-1">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-2 uppercase tracking-wide">
                Cuidado com Faísca Durante a Drenagem
              </h3>
              <p className="mb-3 text-sm text-red-950 leading-relaxed">
                Nunca puxe a cordinha com a vela fora do motor deixando o cachimbo pendurado perto do orifício do cilindro e o botão Stop ligado.
              </p>
              <p className="mb-0 text-sm text-red-950 leading-relaxed">
                Uma única centelha saltando sobre a névoa de gasolina pulverizada pelo pistão basta para incendiar a carcaça da roçadeira na sua mão.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES
            =================================================================== */}
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
            Perguntas Frequentes sobre Roçadeira Afogada
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <span className="text-[#166534] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-3 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50 space-y-3">
                      {faq.answer.map((p, pIndex) => (
                        <p key={pIndex} className="m-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            10. DICA DE OFICINA DO JOSÉ AILTON
            =================================================================== */}
        <div className="mt-14 bg-[#F0FDF4] border-2 border-[#16A34A] p-6 sm:p-8 rounded-3xl shadow-sm flex items-start gap-4">
          <div className="bg-[#16A34A] text-white p-3 rounded-2xl shrink-0">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#166534] uppercase tracking-wide mb-2">
              Dica de Ouro: Como Não Afogar Nunca Mais
            </h3>
            <p className="mb-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              O maior motivo de afogamento acontece na manhã fria: o motor dá aquele primeiro estalo curto (sinal de explosão) e o operador, na pressa, dá mais duas puxadas sem abaixar o afogador.
            </p>
            <p className="mb-0 text-sm sm:text-base text-gray-800 leading-relaxed">
              Ouviu o primeiro sinal? Abra o afogador imediatamente antes da próxima puxada e lembre-se de secar o carburador antes de guardar a máquina por mais de duas semanas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoDesafogarRocadeira;
