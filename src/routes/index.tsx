import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, Sparkles, Cake, Star, Instagram,
  MessageCircle, Clock, ShieldCheck, Palette, HandHeart, ChevronDown,
  ArrowRight, MapPin, Phone, CheckCircle2, CalendarDays, CakeSlice, Cookie,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

import { useReveal, useParallax } from "@/hooks/use-reveal";
import logoAsset from "@/assets/logo.asset.json";
import confeiteiroAsset from "@/assets/confeiteiro.asset.json";
import boloLilasMorangoAsset from "@/assets/bolo-lilas-morango.jpg.asset.json";

import docesTradicionaisAsset from "@/assets/doces-tradicionais.jpg.asset.json";
import brownieAsset from "@/assets/brownie.jpg.asset.json";
import miniTrufasAsset from "@/assets/mini-trufas.jpg.asset.json";
import donutsAsset from "@/assets/donuts.jpg.asset.json";
import cupcakesAsset from "@/assets/cupcakes.jpg.asset.json";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const WHATSAPP = "5519995766824";
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coruja Bolos & Doces — Confeitaria Artesanal Boutique" },
      {
        name: "description",
        content:
          "Bolos personalizados, doces artesanais e cupcakes feitos com carinho para tornar aniversários, festas e ocasiões especiais inesquecíveis. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Coruja Bolos & Doces — Confeitaria Artesanal Boutique" },
      {
        property: "og:description",
        content:
          "Bolos personalizados, doces artesanais e cupcakes feitos com carinho para tornar aniversários, festas e ocasiões especiais inesquecíveis. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const PRICE_TRAD = "R$ 95,00 /kg";
const PRICE_ESP = "R$ 110,00 /kg";

const MENU = {
  branca: {
    tradicionais: [
      "Leite Condensado com Morango",
      "Ninho com Abacaxi",
      "Ninho com Pêssego",
      "Doce de Leite com Abacaxi",
      "Doce de Leite com Ameixa",
      "Doce de Leite com Nozes",
      "Floresta Branca",
      "Bolo de Pudim",
    ],
    especiais: [
      "Ninho com Morango",
      "Nutella com Ninho",
      "Nutella com Morango",
      "Leite Condensado com Morango",
      "Ninho com Brownie e Morango",
      "Ouro Branco",
      "Doce de Leite com Nozes",
    ],
  },
  chocolate: {
    tradicionais: [
      "Brigadeiro",
      "Brigadeiro com Mousse de Limão",
      "Brigadeiro com Doce de Leite",
      "Ninho com Brigadeiro",
      "Ninho com Brigadeiro e Nutella",
      "Prestígio",
      "Ninho Trufado Preto",
      "Ninho Trufado Branco",
      "Floresta Negra",
    ],
    especiais: [
      "Brigadeiro com Morango",
      "Brownie com Morango e Brigadeiro",
      "Sonho de Valsa",
    ],
  },
} as const;

const FINISHES = [
  { title: "Bolo Liso", desc: "Sem topo e sem bico. Acabamento clean e elegante.", extra: "Sem valor adicional", cta: "Solicitar Orçamento" },
  { title: "Bolo com Detalhes em Bico", desc: "Bicos decorativos delicados que valorizam o design.", extra: "+ R$ 10,00 /kg", cta: "Solicitar Orçamento" },
  { title: "Decoração Personalizada", desc: "Projeto autoral criado sob medida para o seu evento.", extra: "Valor sob consulta", cta: "Solicitar Orçamento" },
];

const DIFFERENTIALS = [
  { icon: HandHeart, title: "Feito com carinho", desc: "Cada peça é preparada à mão com atenção aos detalhes." },
  { icon: Palette, title: "Personalização completa", desc: "Cores, sabores e temas pensados para a sua história." },
  { icon: ShieldCheck, title: "Ingredientes selecionados", desc: "Chocolate belga, laticínios frescos e frutas da estação." },
  { icon: Sparkles, title: "Acabamento impecável", desc: "Camadas, texturas e finalização com estética boutique." },
  { icon: MessageCircle, title: "Atendimento humanizado", desc: "Conversamos até desenhar exatamente o que você imagina." },
  { icon: Clock, title: "Produção sob encomenda", desc: "Feito no momento certo para chegar fresquinho na sua celebração." },
];

const STEPS = [
  { n: "01", title: "Escolha os produtos", desc: "Explore o cardápio e monte a combinação perfeita para o seu evento." },
  { n: "02", title: "Envie sua ideia", desc: "Conte tema, cores e quantidade — inspire-se ou traga referências." },
  { n: "03", title: "Receba seu orçamento", desc: "Enviamos uma proposta personalizada em poucas horas." },
  { n: "04", title: "Produzimos com carinho", desc: "Cada receita é feita à mão com ingredientes selecionados." },
  { n: "05", title: "Receba sua encomenda", desc: "Entregue pronta para brilhar no seu momento especial." },
];

const FAQ = [
  { q: "Qual a antecedência mínima para pedidos?", a: "Recomendamos pedidos com no mínimo 5 dias de antecedência, para garantir a produção artesanal com o cuidado que a Coruja oferece. Encomendas maiores podem exigir prazo estendido." },
  { q: "Posso personalizar sabores, cores e tema?", a: "Sim! Personalização é a nossa essência. Cores, decoração, tema, topo do bolo e combinação de sabores são desenhados junto com você." },
  { q: "Vocês fazem entrega?", a: "Realizamos entregas em Campinas e região sob consulta. O valor do frete é calculado conforme o endereço e informado no orçamento." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos PIX, transferência e cartão. Para confirmar o pedido, solicitamos um sinal e o restante próximo à entrega." },
  { q: "Como solicitar meu orçamento?", a: "Basta clicar em qualquer botão de WhatsApp desta página. Nos conte a data, quantidade de convidados e sua ideia — respondemos rapidinho com uma proposta personalizada." },
];

function Landing() {
  const rootRef = useReveal<HTMLDivElement>();
  return (
    <div ref={rootRef} className="page-atmosphere min-h-screen text-foreground overflow-x-hidden">
      <AtmosphereDecor />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Menu />
        <PartySection />
        <Differentials />
        <HowItWorks />
        <Gallery />
        <FAQSection />
        <FinalCTA />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}

/* ---------------- ATMOSPHERE ---------------- */
function AtmosphereDecor() {
  const blob1 = useParallax<HTMLDivElement>(60);
  const blob2 = useParallax<HTMLDivElement>(-45);
  const blob3 = useParallax<HTMLDivElement>(35);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Soft blurred blobs — organic depth with parallax + breathing */}
      <div ref={blob1} className="absolute -top-40 left-[-10%] h-[38rem] w-[38rem] rounded-full opacity-[0.35] blur-[110px] animate-breathe"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--rose) 55%, transparent) 0%, transparent 70%)" }} />
      <div ref={blob2} className="absolute top-[35%] right-[-12%] h-[42rem] w-[42rem] rounded-full opacity-[0.28] blur-[130px] animate-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 45%, transparent) 0%, transparent 70%)", animationDelay: "-4s" }} />
      <div ref={blob3} className="absolute bottom-[10%] left-[20%] h-[30rem] w-[30rem] rounded-full opacity-[0.22] blur-[120px] animate-breathe"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--rose-deep) 40%, transparent) 0%, transparent 70%)", animationDelay: "-2s" }} />

      {/* Twinkle sparkles — quase imperceptíveis */}
      <div className="absolute top-[18%] left-[12%] h-1 w-1 rounded-full bg-rose-deep/60 animate-twinkle" />
      <div className="absolute top-[62%] right-[18%] h-1 w-1 rounded-full bg-gold/70 animate-twinkle" style={{ animationDelay: "-1.5s" }} />
      <div className="absolute top-[38%] left-[52%] h-[3px] w-[3px] rounded-full bg-rose/60 animate-twinkle" style={{ animationDelay: "-2.8s" }} />
      <div className="absolute bottom-[22%] right-[42%] h-1 w-1 rounded-full bg-rose-deep/50 animate-twinkle" style={{ animationDelay: "-3.4s" }} />

      {/* Organic hairlines at extremities */}
      <svg className="absolute top-0 left-0 h-full w-24 opacity-[0.35]" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
        <path d="M20,0 C40,200 10,400 30,600 C50,800 15,900 25,1000" stroke="color-mix(in oklab, var(--rose-deep) 25%, transparent)" strokeWidth="0.6" />
      </svg>
      <svg className="absolute top-0 right-0 h-full w-24 opacity-[0.3]" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
        <path d="M80,0 C60,220 90,420 70,620 C50,820 85,920 75,1000" stroke="color-mix(in oklab, var(--gold) 30%, transparent)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}



/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#galeria", label: "Galeria" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between gap-4 rounded-full px-4 py-2.5 shadow-[var(--shadow-soft)]">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <img src={logoAsset.url} alt="Coruja" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-1 ring-[color-mix(in_oklab,var(--rose)_30%,transparent)]" />
            <span className="font-display text-lg leading-none tracking-tight text-chocolate">
              Coruja <span className="hidden sm:inline text-rose-deep">Bolos & Doces</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-chocolate/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative transition-colors hover:text-rose-deep after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose-deep after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={wa("Olá, Coruja! Gostaria de fazer uma encomenda.")} target="_blank" rel="noopener" className="btn-primary !py-2 !px-4 text-sm">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Fazer Encomenda</span>
            <span className="sm:hidden">Pedir</span>
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 text-chocolate">
            <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-chocolate/80 hover:text-rose-deep">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Organic decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, var(--rose) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }} />
        <Heart className="absolute top-32 right-[15%] h-6 w-6 text-rose/60 animate-float" style={{ animationDelay: "0.3s" }} />
        <Sparkles className="absolute top-48 left-[10%] h-5 w-5 text-gold/70 animate-float" style={{ animationDelay: "1.2s" }} />
        <Heart className="absolute bottom-20 left-[20%] h-4 w-4 text-rose-deep/50 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" />
            Confeitaria artesanal boutique
          </span>
          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.12] sm:text-[2.6rem] md:text-5xl lg:text-[3.4rem] text-chocolate text-balance">
            Bolos e doces feitos com <em className="not-italic bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>carinho</em> para tornar seus momentos inesquecíveis.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-chocolate/70 text-pretty">
            Encomende bolos personalizados e doces artesanais produzidos com ingredientes selecionados para aniversários, festas e ocasiões especiais.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              { icon: HandHeart, label: "Produção Artesanal" },
              { icon: ShieldCheck, label: "Ingredientes Selecionados" },
              { icon: Palette, label: "Personalização Completa" },
              { icon: MessageCircle, label: "Atendimento Humanizado" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2 group">
                <div className="icon-chip">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-semibold text-chocolate/75 leading-tight">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={wa("Olá, Coruja! Gostaria de fazer uma encomenda.")} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Fazer Encomenda
            </a>
            <a href="#cardapio" className="btn-ghost">
              Ver Cardápio <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-chocolate/60">
            <div className="flex -space-x-2">
              {[0,1,2,3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full ring-2 ring-cream" style={{ background: `linear-gradient(135deg, oklch(0.85 0.08 ${350 + i*10}), oklch(0.78 0.11 5))` }} />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-gold">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span><strong className="text-chocolate/80">+500 clientes</strong> satisfeitos</span>
            </div>
          </div>

        </div>

        {/* Hero image card */}
        <div className="relative animate-fade-in">
          <div className="relative rounded-[28px] overflow-hidden shadow-[var(--shadow-elegant)] ring-1 ring-[var(--hairline)]">
            <img
              src={confeiteiroAsset.url}
              alt="Confeiteiro artesão da Coruja Bolos & Doces"
              width={800}
              height={1000}
              className="w-full h-[520px] md:h-[600px] object-cover object-[50%_22%]"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--coffee) 32%, transparent) 100%)" }} />
          </div>

          {/* Floating badge top — Feito com amor */}
          <div className="absolute -top-4 left-6 md:-left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float shadow-[var(--shadow-soft)]">
            <div className="h-9 w-9 rounded-full grid place-items-center text-white shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <Heart className="h-4 w-4 fill-current" />
            </div>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-chocolate">Feito com amor</p>
              <p className="text-chocolate/60">para momentos únicos</p>
            </div>
          </div>

          {/* Floating badge bottom — Encomendas 100% Personalizadas */}
          <div className="absolute -bottom-5 right-4 md:-right-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float shadow-[var(--shadow-soft)]" style={{ animationDelay: "1s" }}>
            <div className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: "color-mix(in oklab, var(--rose) 22%, white)" }}>
              <Sparkles className="h-4 w-4 text-rose-deep" />
            </div>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-chocolate">Encomendas</p>
              <p className="text-chocolate/60">100% Personalizadas</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div data-reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-[28px] overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={boloLilasMorangoAsset.url} alt="Bolo artesanal de chantilly lilás com morangos cobertos de chocolate branco e fitas decorativas" width={800} height={1000} loading="lazy" className="w-full h-[540px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-2xl px-5 py-4 max-w-[240px] shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 text-gold text-sm">
              {[0,1,2,3,4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <p className="mt-1 text-sm text-chocolate/80 leading-snug">"Feito à mão com muito amor e ingredientes selecionados."</p>
          </div>
        </div>

        <div data-reveal className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Nossa história
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] text-chocolate text-balance">
            Mais do que doces, criamos <em className="not-italic text-rose-deep">momentos especiais</em>.
          </h2>
          <p className="mt-6 text-chocolate/70 leading-relaxed text-pretty">
            Na Coruja Bolos & Doces, cada receita é preparada artesanalmente, com atenção aos detalhes e muito carinho, transformando aniversários, encontros e celebrações em experiências inesquecíveis.
          </p>
          <p className="mt-4 text-chocolate/70 leading-relaxed text-pretty">
            Selecionamos ingredientes premium, trabalhamos chocolate belga e criamos peças personalizadas para que o seu momento seja tão único quanto você.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa("Olá, Coruja! Quero conversar sobre um pedido especial.")} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
            </a>
            <a href="#cardapio" className="btn-ghost">Ver cardápio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONFIGURATOR ---------------- */

type Dough = "branca" | "chocolate";
type Tier = "tradicionais" | "especiais";
type Finish = { title: string; extra: string; addPerKg: number };

const FINISH_OPTIONS: Finish[] = [
  { title: "Bolo Liso", extra: "Sem valor adicional", addPerKg: 0 },
  { title: "Bico Decorado", extra: "+ R$ 10,00 /kg", addPerKg: 10 },
  { title: "Personalizado", extra: "Sob consulta", addPerKg: 0 },
];

function StepHeader({ n, title, subtitle, done }: { n: number; title: string; subtitle: string; done: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-base transition-all duration-700 ${
          done
            ? "bg-[image:var(--gradient-primary)] text-white shadow-[0_10px_24px_-12px_color-mix(in_oklab,var(--rose-deep)_55%,transparent)]"
            : "bg-white/70 backdrop-blur-sm text-chocolate/70 border border-white"
        }`}
      >
        {done ? <CheckCircle2 className="h-5 w-5" strokeWidth={2} /> : `0${n}`}
      </div>
      <div className="min-w-0">
        <p className="eyebrow"><span className="inline-block h-1 w-6 rounded-full bg-rose-deep/60" /> Etapa {n}</p>
        <h3 className="mt-1 font-display text-2xl md:text-3xl text-chocolate leading-tight">{title}</h3>
        <p className="mt-1 text-sm text-chocolate/60">{subtitle}</p>
      </div>
    </div>
  );
}

function OptionCard({
  active, onClick, children, className = "",
}: { active: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left rounded-[24px] p-6 md:p-7 transition-all duration-700 backdrop-blur-sm overflow-hidden ${
        active
          ? "bg-white border-[color-mix(in_oklab,var(--rose-deep)_55%,transparent)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--rose-deep)_35%,transparent),0_24px_60px_-24px_color-mix(in_oklab,var(--rose-deep)_45%,transparent)] -translate-y-0.5"
          : "bg-white/70 border-white/70 hover:-translate-y-0.5 hover:bg-white hover:border-[color-mix(in_oklab,var(--rose)_45%,transparent)] hover:shadow-[0_18px_44px_-22px_color-mix(in_oklab,var(--rose-deep)_35%,transparent)]"
      } border ${className}`}
    >
      {active && (
        <span className="absolute top-4 right-4 grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--rose-deep)_55%,transparent)] animate-fade-in">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} />
        </span>
      )}
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-px rounded-[24px] transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`}
        style={{ background: "radial-gradient(120% 80% at 50% -10%, color-mix(in oklab, var(--rose) 22%, transparent) 0%, transparent 55%)" }}
      />
      <span className="relative block">{children}</span>
    </button>
  );
}

function Menu() {
  const [dough, setDough] = useState<Dough | null>(null);
  const [tier, setTier] = useState<Tier | null>(null);
  const [flavor, setFlavor] = useState<string | null>(null);
  const [finish, setFinish] = useState<Finish | null>(null);

  const pickDough = (d: Dough) => {
    setDough(d);
    if (tier && !(MENU[d][tier] as readonly string[]).includes(flavor ?? "")) setFlavor(null);
  };
  const pickTier = (t: Tier) => {
    setTier(t);
    if (dough && !(MENU[dough][t] as readonly string[]).includes(flavor ?? "")) setFlavor(null);
  };

  const flavors = dough && tier ? MENU[dough][tier] : [];
  const basePrice = tier === "especiais" ? 110 : tier === "tradicionais" ? 95 : 0;
  const totalPerKg = basePrice + (finish?.addPerKg ?? 0);

  const doughLabel = dough === "branca" ? "Massa Branca" : dough === "chocolate" ? "Massa de Chocolate" : null;
  const tierLabel = tier === "tradicionais" ? "Tradicionais" : tier === "especiais" ? "Especiais" : null;

  const complete = dough && tier && flavor && finish;
  const message = complete
    ? `Olá, Coruja! Quero encomendar um bolo personalizado:%0A%0A• Massa: ${doughLabel}%0A• Categoria: ${tierLabel}%0A• Sabor: ${flavor}%0A• Acabamento: ${finish!.title}%0A• Valor: R$ ${totalPerKg},00 /kg%0A%0APoderia me passar mais detalhes?`
    : `Olá, Coruja! Gostaria de montar um bolo personalizado.`;

  return (
    <section id="cardapio" className="py-20 md:py-28 relative section-cool">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Nosso cardápio</span>
          <h2 className="mt-4 font-display text-3xl md:text-[2.75rem] text-chocolate text-balance">
            Nosso <em className="not-italic accent-rose">Cardápio</em>
          </h2>
          <p className="mt-4 text-chocolate/65 text-pretty">
            Escolha seu bolo personalizado e descubra uma seleção de doces artesanais preparados com ingredientes selecionados e muito carinho.
          </p>
        </div>

        <div className="divider-hairline mt-14" />

        <div className="mt-14 max-w-2xl">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Parte 01 · Configurador</span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl text-chocolate text-balance">
            Monte o seu bolo <em className="not-italic accent-rose">passo a passo</em>.
          </h3>
          <p className="mt-4 text-chocolate/65 text-pretty">
            Uma experiência guiada para desenhar o bolo perfeito para o seu momento — escolha a massa, o sabor e o acabamento, e receba seu orçamento pelo WhatsApp.
          </p>
        </div>


        <div className="mt-14 grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Steps */}
          <div className="space-y-14">
            {/* STEP 1 — Dough */}
            <div>
              <StepHeader n={1} title="Escolha a massa" subtitle="A base que dá caráter ao seu bolo." done={!!dough} />
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {([
                  { v: "branca", label: "Massa Branca", Icon: CakeSlice, desc: "Aveludada, leve e delicada." },
                  { v: "chocolate", label: "Massa de Chocolate", Icon: Cookie, desc: "Intensa, cremosa e marcante." },
                ] as const).map((o) => (
                  <OptionCard key={o.v} active={dough === o.v} onClick={() => pickDough(o.v)}>
                    <div className="flex items-center gap-4">
                      <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border transition-colors ${dough === o.v ? "bg-rose-deep border-rose-deep text-white" : "bg-[color-mix(in_oklab,var(--cream)_75%,white)] border-[color-mix(in_oklab,var(--gold)_32%,transparent)] text-chocolate"}`}>
                        <o.Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-xl text-chocolate leading-tight">{o.label}</p>
                        <p className="text-sm text-chocolate/60 mt-1">{o.desc}</p>
                      </div>
                    </div>
                  </OptionCard>
                ))}
              </div>
            </div>

            {/* STEP 2 — Tier */}
            <div className={dough ? "" : "opacity-50 pointer-events-none"}>
              <StepHeader n={2} title="Escolha a categoria" subtitle="Clássicos irresistíveis ou criações especiais." done={!!tier} />
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {([
                  { v: "tradicionais", label: "Tradicionais", icon: Star, price: "R$ 95,00 /kg", desc: "Sabores queridos, sempre um sucesso." },
                  { v: "especiais", label: "Especiais", icon: Sparkles, price: "R$ 110,00 /kg", desc: "Combinações autorais com ingredientes premium." },
                ] as const).map((o) => (
                  <OptionCard key={o.v} active={tier === o.v} onClick={() => pickTier(o.v)}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="icon-chip"><o.icon className="h-5 w-5" /></div>
                        <p className="mt-4 font-display text-xl text-chocolate leading-tight">{o.label}</p>
                        <p className="text-sm text-chocolate/60 mt-1">{o.desc}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-chocolate/50">A partir de</p>
                        <p className="font-display text-lg text-rose-deep whitespace-nowrap">{o.price}</p>
                      </div>
                    </div>
                  </OptionCard>
                ))}
              </div>
            </div>

            {/* STEP 3 — Flavor */}
            <div className={dough && tier ? "" : "opacity-50 pointer-events-none"}>
              <StepHeader n={3} title="Escolha o sabor" subtitle={flavors.length ? `${flavors.length} opções disponíveis` : "Selecione massa e categoria primeiro."} done={!!flavor} />
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {flavors.map((name) => {
                  const active = flavor === name;
                  return (
                    <OptionCard key={name} active={active} onClick={() => setFlavor(name)} className="!p-5">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors ${active ? "bg-rose-deep border-rose-deep text-white" : "bg-[color-mix(in_oklab,var(--cream)_75%,white)] border-[color-mix(in_oklab,var(--gold)_32%,transparent)] text-chocolate"}`}>
                          <CakeSlice className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <p className="font-display text-base text-chocolate leading-tight">{name}</p>
                      </div>
                    </OptionCard>
                  );
                })}
              </div>
            </div>

            {/* STEP 4 — Finish */}
            <div className={dough && tier && flavor ? "" : "opacity-50 pointer-events-none"}>
              <StepHeader n={4} title="Escolha o acabamento" subtitle="O toque final que define a estética do bolo." done={!!finish} />
              <div className="mt-6 grid sm:grid-cols-3 gap-5">
                {FINISH_OPTIONS.map((f) => (
                  <OptionCard key={f.title} active={finish?.title === f.title} onClick={() => setFinish(f)}>
                    <div>
                      <div className="icon-chip"><Cake className="h-5 w-5" /></div>
                      <p className="mt-4 font-display text-lg text-chocolate leading-tight">{f.title}</p>
                      <div className="divider-hairline my-3" />
                      <p className="text-[10px] uppercase tracking-[0.18em] text-chocolate/50">Adicional</p>
                      <p className="font-display text-base text-rose-deep">{f.extra}</p>
                    </div>
                  </OptionCard>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="card-premium p-7">
              <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Seu bolo</span>
              <h3 className="mt-3 font-display text-2xl text-chocolate leading-tight">Resumo do pedido</h3>
              <div className="divider-hairline mt-5" />

              <dl className="mt-5 space-y-4 text-sm">
                {[
                  { label: "Massa", value: doughLabel },
                  { label: "Categoria", value: tierLabel },
                  { label: "Sabor", value: flavor },
                  { label: "Acabamento", value: finish?.title },
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-chocolate/50 pt-0.5">{row.label}</dt>
                    <dd className={`text-right font-medium ${row.value ? "text-chocolate" : "text-chocolate/30 italic"}`}>
                      {row.value ?? "a escolher"}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="divider-hairline mt-6" />

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-chocolate/50">Valor estimado</p>
                  <p className="mt-1 font-display text-3xl text-rose-deep">
                    {totalPerKg > 0 ? `R$ ${totalPerKg},00` : "—"}
                    {totalPerKg > 0 && <span className="text-sm text-chocolate/50 font-sans ml-1">/kg</span>}
                  </p>
                </div>
                {finish?.title === "Personalizado" && (
                  <span className="text-[10px] uppercase tracking-[0.18em] text-chocolate/50 pb-1">+ sob consulta</span>
                )}
              </div>

              <a
                href={wa(decodeURIComponent(message))}
                target="_blank"
                rel="noopener"
                aria-disabled={!complete}
                onClick={(e) => { if (!complete) e.preventDefault(); }}
                className={`btn-primary w-full mt-6 ${!complete ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
              >
                <MessageCircle className="h-4 w-4" /> Pedir no WhatsApp
              </a>

              <p className="mt-4 text-[11px] text-chocolate/50 leading-relaxed text-center">
                Encomendas com no mínimo 5 dias de antecedência. Valores por quilo, pedido mínimo de 2kg.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



/* ---------------- COMPLETE SUA FESTA ---------------- */
const PARTY_CATEGORIES = [
  {
    id: "doces-tradicionais",
    title: "Doces Tradicionais",
    image: docesTradicionaisAsset.url,
    description: "Escolha até 4 sabores no cento ou 2 sabores no meio cento.",
    items: ["Brigadeiro", "Beijinho", "Bicho de Pé", "Cajuzinho", "Casadinho", "Olho de Sogra", "Brigadeiro de Leite Ninho", "Ninho com Nutella"],
    pricing: ["Cento: R$ 150,00", "Meio Cento: R$ 80,00"],
  },
  {
    id: "brownie",
    title: "Brownie",
    image: brownieAsset.url,
    description: "Brownie tradicional com chocolate belga e casquinha crocante.",
    items: [],
    pricing: ["Cento: R$ 150,00", "Meio Cento: R$ 80,00"],
  },
  {
    id: "mini-trufas",
    title: "Mini Trufas",
    image: miniTrufasAsset.url,
    description: "Bombons de chocolate belga com recheios que se desmancham na boca.",
    items: ["Brigadeiro", "Maracujá", "Cocada Cremosa", "Doce de Leite", "Creme de Avelã"],
    pricing: ["Cento: R$ 150,00", "Meio Cento: R$ 80,00"],
  },
  {
    id: "donuts",
    title: "Donuts",
    image: donutsAsset.url,
    description: "Donuts artesanais com massa fofinha e coberturas especiais.",
    items: [],
    pricing: ["Cento: R$ 150,00", "Meio Cento: R$ 80,00"],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    image: cupcakesAsset.url,
    description: "Massa aveludada, cobertura cremosa e decoração boutique.",
    items: ["Brigadeiro", "Ninho com Nutella", "Red Velvet", "Leite Ninho com Morango", "Chocolate Belga", "Cenoura com Brigadeiro"],
    pricing: ["R$ 7,00 por unidade", "Acima de 15 unidades: R$ 5,00 por unidade"],
  },
];

function partyMessage(cat: (typeof PARTY_CATEGORIES)[number]) {
  const lines = [`Olá, Coruja! Gostaria de encomendar ${cat.title}.`];
  if (cat.items.length) lines.push(`Sabores: ${cat.items.join(", ")}.`);
  lines.push(cat.description);
  lines.push(`Preço: ${cat.pricing.join(" / ")}.`);
  lines.push("Poderia me enviar mais informações?");
  return lines.join("\n");
}

function PartyCard({ cat }: { cat: (typeof PARTY_CATEGORIES)[number] }) {
  return (
    <article
      data-reveal
      className="group flex flex-col rounded-[28px] bg-[var(--card)]/75 border border-[var(--card)]/80 backdrop-blur-md shadow-[var(--shadow-soft)] overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cat.image}
          alt={cat.title}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="font-display text-2xl md:text-[1.75rem] text-chocolate leading-tight">{cat.title}</h3>
        <p className="mt-2 text-sm text-chocolate/65 leading-relaxed">{cat.description}</p>

        {cat.items.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-rose/10 px-2.5 py-1 text-[11px] font-medium text-rose-deep border border-rose/10"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="space-y-1">
            {cat.pricing.map((price) => (
              <p key={price} className="font-display text-lg text-rose-deep leading-tight">{price}</p>
            ))}
          </div>
          <a
            href={wa(partyMessage(cat))}
            target="_blank"
            rel="noopener"
            className="btn-primary w-full mt-5 !py-3 !text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function PartySection() {
  return (
    <section id="complete-sua-festa" className="pt-10 pb-20 md:pt-12 md:pb-28 relative overflow-hidden section-warm">
      <div className="mx-auto max-w-6xl px-4">
        {/* Transição elegante entre o configurador e os doces */}
        <div className="flex items-center gap-5 md:gap-8" data-reveal>
          <span className="hidden sm:block h-px flex-1 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--rose)_45%,transparent))]" />
          <p className="font-display text-xl md:text-2xl text-chocolate/80 text-center italic">
            Quer deixar sua festa ainda mais completa?
          </p>
          <span className="hidden sm:block h-px flex-1 bg-[linear-gradient(270deg,transparent,color-mix(in_oklab,var(--rose)_45%,transparent))]" />
        </div>

        <div className="mt-14 max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Parte 02 · Para sua festa
          </span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl text-chocolate text-balance">
            Complete sua <em className="not-italic text-rose-deep">festa</em>.
          </h3>

          <p className="mt-4 text-chocolate/65 text-pretty">
            Além dos bolos personalizados, temos uma seleção de doces artesanais preparados com o mesmo carinho para deixar sua comemoração ainda mais especial.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PARTY_CATEGORIES.map((cat) => (
            <PartyCard key={cat.id} cat={cat} />
          ))}
        </div>

        <div
          className="mt-16 md:mt-20 relative rounded-[28px] overflow-hidden p-8 md:p-12 text-center"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, var(--rose) 0%, transparent 25%), radial-gradient(circle at 70% 70%, var(--gold) 0%, transparent 25%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="h-6 w-6 text-gold mx-auto mb-4" />
            <h3 className="font-display text-3xl md:text-4xl text-cream leading-tight">Gostou? Faça sua encomenda agora mesmo.</h3>
            <p className="mt-3 text-cream/70">Escolha seus doces favoritos e receba uma proposta personalizada em poucas horas.</p>
            <a
              href={wa("Olá, Coruja! Gostaria de fazer uma encomenda de doces.")}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-6 mx-auto"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ---------------- DIFFERENTIALS ---------------- */
function Differentials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Diferenciais</span>
          <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] text-chocolate text-balance">
            O cuidado que faz a <em className="not-italic text-rose-deep">diferença</em>.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.map((d) => (
            <div
              key={d.title}
              data-reveal
              className="group card-premium p-7"
            >
              <div className="icon-chip icon-chip-lg">
                <d.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 font-display text-xl text-chocolate">{d.title}</h3>
              <p className="mt-2 text-sm text-chocolate/65 leading-relaxed">{d.desc}</p>
              <div className="divider-hairline mt-5 opacity-60" />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Como funciona</span>
          <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] text-chocolate text-balance">
            Do primeiro <em className="not-italic text-rose-deep">"oi"</em> à entrega
          </h2>
          <p className="mt-4 text-chocolate/65">Um processo simples, humano e cuidadoso do começo ao fim.</p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px" style={{ background: "repeating-linear-gradient(to right, color-mix(in oklab, var(--rose-deep) 40%, transparent) 0 6px, transparent 6px 14px)" }} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} data-reveal className="relative">
                <div className="mx-auto mb-5 h-14 w-14 rounded-full grid place-items-center bg-white ring-1 ring-[color-mix(in_oklab,var(--rose)_35%,transparent)] shadow-[var(--shadow-soft)] relative z-10">
                  <span className="font-display text-lg text-rose-deep">{s.n}</span>
                </div>
                <h3 className="font-display text-lg text-chocolate text-center">{s.title}</h3>
                <p className="mt-2 text-xs text-chocolate/60 text-center leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { src: gallery1, alt: "Bolo de andares com rosas", h: "row-span-2" },
    { src: gallery2, alt: "Morangos com chocolate", h: "" },
    { src: gallery3, alt: "Bolo rosa com topper dourado", h: "" },
    { src: gallery4, alt: "Mesa de doces boutique", h: "row-span-2" },
    { src: gallery5, alt: "Naked cake de morango", h: "" },
    { src: gallery6, alt: "Confeitando cupcake à mão", h: "" },
  ];
  return (
    <section id="galeria" className="section-warm py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Galeria</span>
            <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] text-chocolate text-balance">
              Momentos que já <em className="not-italic text-rose-deep">adoçamos</em>.
            </h2>
          </div>
          <a href={wa("Olá, Coruja! Vi a galeria e queria inspiração para meu evento.")} target="_blank" rel="noopener" className="btn-ghost">
            Inspirar meu evento <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              data-reveal
              className={`group relative overflow-hidden rounded-[28px] border border-[var(--hairline)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-700 ${it.h}`}
            >

              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--coffee) 55%, transparent) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-white text-sm font-medium drop-shadow">{it.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 relative" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Dúvidas frequentes</span>
            <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] text-chocolate text-balance">
              Tudo o que você quer <em className="not-italic text-rose-deep">saber</em>.
            </h2>
          </div>
          <a href={wa("Olá, Coruja! Ainda tenho uma dúvida.")} target="_blank" rel="noopener" className="text-sm text-chocolate/70 hover:text-rose-deep inline-flex items-center gap-2">
            Ainda tem dúvidas? Fale conosco <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <Accordion type="single" collapsible className="mt-12 grid md:grid-cols-2 gap-3">
          {FAQ.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-reveal
              className="!border-0 rounded-[24px] bg-white/85 backdrop-blur-sm ring-1 ring-[var(--hairline)] shadow-[var(--shadow-soft)] overflow-hidden px-6 hover:shadow-[var(--shadow-elegant)] hover:ring-[color-mix(in_oklab,var(--rose)_40%,transparent)] transition-all self-start"
            >
              <AccordionTrigger className="!py-5 font-display text-lg text-chocolate hover:!no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-chocolate/70 leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse at 15% 20%, color-mix(in oklab, var(--rose) 45%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, color-mix(in oklab, var(--gold) 30%, transparent) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "var(--noise-url)", backgroundSize: "220px 220px" }} />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 data-reveal className="font-display text-3xl md:text-[2.6rem] lg:text-[3rem] text-white text-balance leading-[1.05]">
          Seu próximo momento especial merece algo <em className="not-italic" style={{ background: "linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inesquecível</em>.
        </h2>
        <p data-reveal className="mt-5 mx-auto text-white/75 text-base md:text-lg text-pretty max-w-lg">
          Solicite seu orçamento e transforme sua celebração em uma experiência ainda mais especial.&nbsp;
        </p>
        <div data-reveal className="mt-8">
          <a href={wa("Olá, Coruja! Quero fazer uma encomenda pelo site.")} target="_blank" rel="noopener" className="btn-primary !py-4 !px-8 text-base">
            <MessageCircle className="h-5 w-5" /> Fazer Encomenda pelo WhatsApp
          </a>
        </div>
        <div data-reveal className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-rose" /> Resposta rápida</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-rose" /> Atendimento humanizado</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-rose" /> Encomendas 100% seguras</span>
        </div>
      </div>
    </section>
  );
}


/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-cream border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="Coruja" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <span className="font-display text-xl text-chocolate">Coruja</span>
            </div>
            <p className="mt-4 text-sm text-chocolate/65 leading-relaxed">
              Confeitaria artesanal boutique. Bolos e doces feitos com carinho para os seus melhores momentos.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-deep">Contato</p>
            <ul className="mt-4 space-y-3 text-sm text-chocolate/75">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-deep" /> (19) 99576-6824</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-rose-deep" />
                <a href={wa("Olá, Coruja!")} target="_blank" rel="noopener" className="hover:text-rose-deep">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-rose-deep" /> @corujadocess</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-deep">Horários</p>
            <ul className="mt-4 space-y-2 text-sm text-chocolate/75">
              <li>Seg — Sex · 09h às 19h</li>
              <li>Sábado · 09h às 15h</li>
              <li>Domingo · sob encomenda</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-deep">Atendimento</p>
            <ul className="mt-4 space-y-2 text-sm text-chocolate/75">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-deep" />&nbsp;Campinas - SP e região</li>
              <li>Pedidos com 5 dias de antecedência</li>
              <li>Personalizados para cada ocasião</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display italic text-chocolate/70 text-center md:text-left">
            "Feito com carinho para adoçar seus melhores momentos."
          </p>
          <p className="text-xs text-chocolate/50">© {new Date().getFullYear()} Coruja Bolos & Doces. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WHATSAPP FLOAT ---------------- */
function WhatsAppFloat() {
  return (
    <a
      href={wa("Olá, Coruja! Vim pelo site e gostaria de fazer uma encomenda.")}
      target="_blank"
      rel="noopener"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "var(--gradient-primary)" }} />
      <span className="relative flex items-center gap-2 rounded-full pl-3 pr-4 py-3 text-white font-semibold shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--rose-deep)_55%,transparent)] transition-transform duration-500 hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)" }}>
        <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline text-sm">Pedir no WhatsApp</span>
      </span>
    </a>
  );
}
