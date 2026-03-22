import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Headset,
  LifeBuoy,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';
import SectionTitle from './components/SectionTitle';
import ServiceCard from './components/ServiceCard';
import HighlightCard from './components/HighlightCard';

const services = [
  {
    icon: Headset,
    title: 'Service Desk',
    points: [
      'Ponto unico de contato para usuarios.',
      'Atendimento remoto para incidentes e solicitacoes.',
      'Registro e acompanhamento de chamados com SLA definido.',
      'Encaminhamento para areas especializadas quando necessario.',
    ],
  },
  {
    icon: Wrench,
    title: 'Deskside Support',
    points: [
      'Suporte presencial para problemas que nao podem ser resolvidos remotamente.',
      'Instalacao e configuracao de equipamentos.',
      'Troca de hardware e perifericos.',
      'Atendimento direto ao usuario.',
    ],
  },
  {
    icon: Network,
    title: 'Infraestrutura',
    points: [
      'Gestao de servidores, redes e datacenters.',
      'Administracao de ambientes em nuvem e locais.',
      'Monitoramento de desempenho e seguranca.',
      'Implementacao de solucoes escalaveis e resilientes.',
    ],
  },
  {
    icon: Workflow,
    title: 'Dispatch',
    points: [
      'Coordenacao e distribuicao de chamados.',
      'Priorizacao de demandas criticas.',
      'Direcionamento para equipes adequadas.',
      'Garantia de eficiencia no fluxo de atendimento.',
    ],
  },
];

const differentiators = [
  {
    icon: BadgeCheck,
    title: 'Equipe altamente qualificada e certificada',
    text: 'Profissionais preparados para atuar com padrao tecnico, governanca e foco em continuidade operacional.',
  },
  {
    icon: Users,
    title: 'Atendimento personalizado',
    text: 'Operacao adaptada ao contexto da sua empresa, com acompanhamento proximo e comunicacao objetiva.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromisso com seguranca e disponibilidade',
    text: 'Atuacao orientada para reduzir riscos, preservar disponibilidade e manter a tecnologia confiavel.',
  },
  {
    icon: Clock3,
    title: 'Foco em reduzir custos e aumentar eficiencia operacional',
    text: 'Processos de atendimento e infraestrutura pensados para melhorar performance sem elevar complexidade.',
  },
];

const whyChooseItems = [
  'Equipe qualificada',
  'Atendimento proximo',
  'Compromisso com inovacao',
  'Reducao de custos',
  'Aumento da produtividade',
];

function App() {
  return (
    <div className="bg-slate-50 font-body text-slate-800 antialiased">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="flex items-center gap-3" aria-label="SecurityCenter - Inicio">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-700 to-brand-900 font-heading text-sm font-extrabold text-white shadow-sm">
              SC
            </span>
            <div>
              <p className="font-heading text-lg font-extrabold text-brand-900">SecurityCenter</p>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Suporte e Solucoes de TI</p>
            </div>
          </a>

          <nav aria-label="Navegacao principal" className="hidden items-center gap-8 lg:flex">
            <a href="#sobre" className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">
              Sobre
            </a>
            <a href="#servicos" className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">
              Servicos
            </a>
            <a href="#diferenciais" className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">
              Diferenciais
            </a>
            <a href="#contato" className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5521998209990"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-900"
          >
            Falar com especialista
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="conteudo-principal">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,107,138,0.20),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(15,118,110,0.18),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
            <div className="relative">
              <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                Suporte e solucoes completas de TI
              </p>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
                TI confiavel para manter sua operacao produtiva e segura.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-700">
                A SecurityCenter oferece suporte agil, confiavel e seguro para garantir que sua empresa mantenha a
                produtividade e a seguranca em todos os niveis tecnologicos.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-900"
                >
                  Solicitar contato
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-700 hover:text-brand-700"
                >
                  Conhecer servicos
                </a>
              </div>
            </div>

            <aside className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe tecnica da SecurityCenter em atendimento"
                className="h-56 w-full rounded-xl object-cover sm:h-64"
              />
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-700">Modelo</dt>
                  <dd className="mt-1 font-heading text-lg font-bold text-brand-900">Service Desk + Campo</dd>
                </div>
                <div className="rounded-xl bg-brand-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-700">Compromisso</dt>
                  <dd className="mt-1 font-heading text-lg font-bold text-brand-900">Seguranca e disponibilidade</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Sobre a empresa"
            title="Parceiro estrategico para a operacao de TI da sua empresa"
            description="A SecurityCenter e especializada em solucoes completas de TI, oferecendo suporte agil e confiavel para garantir que sua empresa mantenha a produtividade e a seguranca em todos os niveis tecnologicos."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Building2 className="text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-900">Foco em empresas</h3>
              <p className="mt-2 text-slate-700">
                Atuacao dedicada a empresas que precisam de suporte tecnico, infraestrutura e gestao de TI.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <LifeBuoy className="text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-900">Suporte completo</h3>
              <p className="mt-2 text-slate-700">
                Cobertura de atendimento remoto, presencial e gestao de infraestrutura com fluxo organizado de chamados.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-900">Seguranca operacional</h3>
              <p className="mt-2 text-slate-700">
                Processos voltados para continuidade, controle e resposta eficiente para manter ambientes estaveis.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              centered
              eyebrow="Servicos"
              title="Capacidade tecnica para cada etapa do suporte de TI"
              description="Todos os servicos abaixo fazem parte da operacao da SecurityCenter, com foco em resposta eficiente e padrao de atendimento corporativo."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            centered
            eyebrow="Diferenciais"
            title="Entrega orientada por qualidade, proximidade e seguranca"
            description="A SecurityCenter combina conhecimento tecnico com uma operacao estruturada para aumentar previsibilidade e eficiencia."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="bg-brand-900 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <SectionTitle
                light
                eyebrow="Por que escolher a SecurityCenter"
                title="Apoio tecnico que protege a produtividade da sua operacao"
                description="Com a SecurityCenter, sua empresa conta com um parceiro estrategico em TI que garante suporte completo, seguranca e eficiencia."
              />
              <p className="mt-6 text-lg text-slate-200">
                Nos cuidamos da tecnologia para que voce cuide do seu negocio.
              </p>
            </div>
            <ul className="grid gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              {whyChooseItems.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-white">
                    <BadgeCheck size={15} aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionTitle
                eyebrow="Contato"
                title="Fale com a SecurityCenter"
                description="Preencha os canais abaixo para solicitar uma conversa sobre suporte de TI, infraestrutura ou atendimento especializado."
              />
              <div className="mt-8 grid gap-4">
                <a
                  href="tel:+5521998209990"
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300"
                >
                  <Phone className="mt-1 text-brand-700" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Telefone</p>
                    <p className="font-semibold text-slate-900">(21) 99820-9990</p>
                  </div>
                </a>
                <a
                  href="mailto:securitycenter@securitycenter.com"
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300"
                >
                  <Mail className="mt-1 text-brand-700" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">E-mail</p>
                    <p className="font-semibold text-slate-900">securitycenter@securitycenter.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/5521998209990"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300"
                >
                  <Smartphone className="mt-1 text-brand-700" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">WhatsApp</p>
                    <p className="font-semibold text-slate-900">(21) 99820-9990</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <MapPin className="mt-1 text-brand-700" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Endereco</p>
                    <p className="font-semibold text-slate-900">Av. Rio Branco, 156 - Centro, Rio de Janeiro - RJ, 20040-901</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8" aria-label="Formulario de contato">
              <h3 className="font-heading text-2xl font-bold text-brand-900">Solicite contato comercial</h3>
              <p className="mt-2 text-slate-600">
                Este formulario e um placeholder para integracao com [PLACEHOLDER_CRM_OR_EMAIL_SERVICE].
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Nome</span>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none ring-brand-500 transition focus:border-brand-500 focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Empresa</span>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none ring-brand-500 transition focus:border-brand-500 focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">E-mail corporativo</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="voce@empresa.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none ring-brand-500 transition focus:border-brand-500 focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Mensagem</span>
                  <textarea
                    name="mensagem"
                    rows="4"
                    placeholder="Descreva o desafio de TI da sua empresa"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none ring-brand-500 transition focus:border-brand-500 focus:ring-2"
                  />
                </label>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-900"
              >
                Enviar solicitacao
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} SecurityCenter. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="[PLACEHOLDER_LINKEDIN_URL]" className="font-semibold hover:text-brand-700">
              LinkedIn
            </a>
            <a href="[PLACEHOLDER_INSTAGRAM_URL]" className="font-semibold hover:text-brand-700">
              Instagram
            </a>
            <a href="[PLACEHOLDER_PRIVACY_POLICY_URL]" className="font-semibold hover:text-brand-700">
              Politica de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
