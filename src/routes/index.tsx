import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, Sparkles, Cake, Cookie, Coffee, Cherry, Star, Instagram,
  MessageCircle, Clock, ShieldCheck, Palette, HandHeart, ChevronDown,
  ArrowRight, MapPin, Phone, CheckCircle2,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReveal, useParallax } from "@/hooks/use-reveal";
import logoAsset from "@/assets/logo.asset.json";
import confeiteiroAsset from "@/assets/confeiteiro.asset.json";
import boloRedVelvetAsset from "@/assets/bolo-red-velvet.jpg.asset.json";
import bolosImg from "@/assets/product-bolos.jpg";
import docesImg from "@/assets/product-doces.jpg";
import cupcakesImg from "@/assets/product-cupcakes.jpg";
import donutsImg from "@/assets/product-donuts.jpg";
import tortasImg from "@/assets/product-tortas.jpg";
import trufasImg from "@/assets/product-trufas.jpg";
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
      { property: "og:title", content: "Coruja Bolos & Doces — Confeitaria Boutique" },
      {
        property: "og:description",
        content:
          "Bolos e doces artesanais feitos com carinho para momentos inesquecíveis. Encomende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const PRODUCTS = [
  { icon: Cake, name: "Bolos Personalizados", desc: "Criados sob medida para sua celebração, com decoração exclusiva e sabores autorais.", img: bolosImg, tag: "Assinatura" },
  { icon: Heart, name: "Doces Tradicionais", desc: "Brigadeiros, beijinhos, cajuzinhos e clássicos que aquecem a memória.", img: docesImg, tag: "Clássicos" },
  { icon: Cookie, name: "Cupcakes", desc: "Massa aveludada e coberturas cremosas em porções irresistíveis.", img: cupcakesImg, tag: "Individuais" },
  { icon: Coffee, name: "Donuts", desc: "Massa fofinha com coberturas especiais e confeitos selecionados.", img: donutsImg, tag: "Autoral" },
  { icon: Cherry, name: "Tortas", desc: "Combinações delicadas de frutas frescas, cremes e massas artesanais.", img: tortasImg, tag: "Finas" },
  { icon: Sparkles, name: "Mini Trufas", desc: "Chocolate belga em recheios que se desmancham na boca.", img: trufasImg, tag: "Boutique" },
];

const MENU = {
  bolos: [
    { name: "Bolo com decoração personalizada", size: "10 fatias", price: "R$ 110,00" },
    { name: "Bolo com decoração personalizada", size: "15 fatias", price: "R$ 150,00" },
    { name: "Bolo com decoração personalizada", size: "20 fatias", price: "R$ 200,00" },
    { name: "Bolo com detalhes em bico", size: "10 fatias", price: "R$ 95,00" },
    { name: "Bolo com detalhes em bico", size: "20 fatias", price: "R$ 160,00" },
    { name: "Bolo liso (sem topo e bico)", size: "10 fatias", price: "R$ 85,00" },
    { name: "Bolo liso (sem topo e bico)", size: "20 fatias", price: "R$ 150,00" },
  ],
  doces: [
    { name: "Brigadeiro", size: "Chocolate belga com granulado", price: "R$ 150 / cento" },
    { name: "Beijinho", size: "Doce de coco decorado com cravo", price: "R$ 150 / cento" },
    { name: "Bicho de Pé", size: "Morango ou Nesquik", price: "R$ 150 / cento" },
    { name: "Cajuzinho", size: "Amendoim com castanha", price: "R$ 150 / cento" },
    { name: "Ninho com Nutella", size: "Leite Ninho com cobertura de Nutella", price: "R$ 150 / cento" },
    { name: "Olho de Sogra", size: "Ameixa com recheio de beijinho", price: "R$ 150 / cento" },
  ],
  cupcakes: [
    { name: "Brigadeiro", size: "Massa de chocolate, recheio e cobertura", price: "R$ 7,00" },
    { name: "Ninho com Nutella", size: "Recheio de Nutella e chantilly de Ninho", price: "R$ 7,00" },
    { name: "Red Velvet", size: "Massa red velvet com cream cheese", price: "R$ 7,00" },
    { name: "Leite Ninho com Morango", size: "Leite Ninho e pedaços de morango", price: "R$ 7,00" },
    { name: "Chocolate Belga", size: "Recheio trufado de chocolate belga", price: "R$ 7,00" },
    { name: "Acima de 15 unidades", size: "Preço promocional por unidade", price: "R$ 5,00" },
  ],
  donuts: [
    { name: "Donut Chocolate", size: "Cobertura especial com confeitos", price: "R$ 150 / cento" },
    { name: "Donut Morango", size: "Glacê rosa com granulado", price: "R$ 150 / cento" },
    { name: "Donut Belga", size: "Chocolate belga ao leite", price: "R$ 150 / cento" },
    { name: "Meio cento", size: "50 unidades sortidas", price: "R$ 80,00" },
  ],
};

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
  { q: "Vocês fazem entrega?", a: "Realizamos entregas em Piracicaba e região sob consulta. O valor do frete é calculado conforme o endereço e informado no orçamento." },
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
        <SocialProof />
        <About />
        <Products />
        <Menu />
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
    { href: "#produtos", label: "Produtos" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#galeria", label: "Galeria" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between gap-4 rounded-full px-4 py-2.5 shadow-[0_10px_40px_-20px_rgba(217,91,141,0.25)]">
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
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem] text-chocolate text-balance">
            Bolos e doces feitos com <em className="not-italic bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>carinho</em> para tornar seus momentos inesquecíveis.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-chocolate/70 text-pretty">
            Encomende bolos personalizados e doces artesanais produzidos com ingredientes selecionados para aniversários, festas e ocasiões especiais.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-chocolate/80 max-w-md">
            {["Produção artesanal","Ingredientes selecionados","Personalização completa","Atendimento humanizado"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-deep shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={wa("Olá, Coruja! Gostaria de fazer uma encomenda.")} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Fazer Encomenda
            </a>
            <a href="#cardapio" className="btn-ghost">
              Ver Cardápio <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-xs text-chocolate/60">
            <div className="flex -space-x-2">
              {[0,1,2,3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full ring-2 ring-cream" style={{ background: `linear-gradient(135deg, oklch(0.85 0.08 ${350 + i*10}), oklch(0.78 0.11 5))` }} />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-gold">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span>Celebrações adoçadas com carinho todos os meses</span>
            </div>
          </div>
        </div>

        {/* Hero image card */}
        <div className="relative animate-fade-in">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-elegant)] ring-1 ring-white/60">
            <img
              src={confeiteiroAsset.url}
              alt="Confeiteiro artesão da Coruja Bolos & Doces"
              width={800}
              height={1000}
              className="w-full h-[520px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(78,52,46,0.35) 100%)" }} />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between glass rounded-2xl px-4 py-3">
              <div>
                <p className="font-display text-lg leading-tight text-chocolate">Cada detalhe, com carinho</p>
                <p className="text-xs text-chocolate/70">Confeitaria artesanal boutique</p>
              </div>
              <div className="h-10 w-10 rounded-full grid place-items-center text-white" style={{ background: "var(--gradient-primary)" }}>
                <Heart className="h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="hidden md:flex absolute -left-6 top-8 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float">
            <div className="h-9 w-9 rounded-full grid place-items-center" style={{ background: "color-mix(in oklab, var(--gold) 25%, white)" }}>
              <Sparkles className="h-4 w-4 text-chocolate" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-chocolate">Ingredientes premium</p>
              <p className="text-chocolate/60">Chocolate belga</p>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-4 bottom-24 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
            <div className="h-9 w-9 rounded-full grid place-items-center text-white" style={{ background: "var(--gradient-primary)" }}>
              <HandHeart className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-chocolate">Feito à mão</p>
              <p className="text-chocolate/60">Toda semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */
function SocialProof() {
  const items = [
    { icon: Star, label: "Clientes satisfeitos", value: "Feedback carinhoso em cada entrega" },
    { icon: Cake, label: "Produção artesanal", value: "Receitas preparadas à mão, uma a uma" },
    { icon: Heart, label: "Feito com carinho", value: "Atenção total aos detalhes que emocionam" },
  ];
  return (
    <section className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.label} data-reveal className="group card-premium p-7">
              <div className="icon-chip mb-5">
                <it.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <p className="font-display text-xl text-chocolate">{it.label}</p>
              <p className="mt-2 text-sm text-chocolate/65 leading-relaxed">{it.value}</p>
            </div>
          ))}
        </div>
        <p data-reveal className="mt-10 text-center font-display italic text-lg md:text-xl text-chocolate/70 max-w-2xl mx-auto">
          "Cada detalhe é preparado para tornar sua comemoração ainda mais especial."
        </p>
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
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={boloRedVelvetAsset.url} alt="Bolo Red Velvet decorado com morangos" width={800} height={1000} loading="lazy" className="w-full h-[540px] object-cover" />
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
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
            <a href="#produtos" className="btn-ghost">Conhecer produtos</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Nossos produtos</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
            Uma seleção pensada para <em className="not-italic text-rose-deep">encantar</em> todos os sentidos.
          </h2>
          <p className="mt-4 text-chocolate/65 text-pretty">
            Do clássico brigadeiro à peça central da sua festa: cada produto é preparado com receitas próprias e acabamento boutique.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              data-reveal
              className="group card-product flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[32px]">
                <img src={p.img} alt={p.name} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(78,52,46,0.35) 100%)" }} />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] font-semibold text-chocolate tracking-wide shadow-[0_6px_18px_-8px_rgba(78,52,46,0.35)]">
                  {p.tag}
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-2 text-rose-deep">
                  <p.icon className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Coleção</span>
                </div>
                <h3 className="mt-2 font-display text-2xl text-chocolate">{p.name}</h3>
                <p className="mt-2 text-sm text-chocolate/65 leading-relaxed">{p.desc}</p>
                <div className="divider-hairline mt-5" />
                <a
                  href={wa(`Olá, Coruja! Gostaria de um orçamento de ${p.name}.`)}
                  target="_blank" rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-deep group/link"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU ---------------- */
function Menu() {
  return (
    <section id="cardapio" className="py-20 md:py-28 relative" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Cardápio</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
            Sabores, tamanhos e preços — <em className="not-italic text-rose-deep">tudo à vista</em>.
          </h2>
          <p className="mt-4 text-chocolate/65 text-pretty">
            Escolha a categoria e envie diretamente pelo WhatsApp o item que mais combina com o seu evento.
          </p>
        </div>

        <Tabs defaultValue="bolos" className="mt-12">
          <TabsList className="!bg-white/70 backdrop-blur-sm !p-1.5 !h-auto rounded-full border border-white shadow-[var(--shadow-soft)] flex flex-wrap gap-1 mx-auto justify-center max-w-full">
            {[
              { v: "bolos", l: "Bolos" },
              { v: "doces", l: "Doces" },
              { v: "cupcakes", l: "Cupcakes" },
              { v: "donuts", l: "Donuts" },
            ].map((t) => (
              <TabsTrigger
                key={t.v}
                value={t.v}
                className="!rounded-full !px-6 !py-2.5 !text-sm !font-semibold data-[state=active]:!bg-[image:var(--gradient-primary)] data-[state=active]:!text-white data-[state=active]:!shadow-[var(--shadow-soft)] text-chocolate/70"
              >
                {t.l}
              </TabsTrigger>
            ))}
          </TabsList>

          {(Object.keys(MENU) as (keyof typeof MENU)[]).map((key) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {MENU[key].map((item, i) => (
                  <div
                    key={i}
                    data-reveal
                    className="group flex items-center justify-between gap-4 rounded-[24px] bg-white/85 backdrop-blur-sm p-5 border border-white/70 shadow-[0_10px_28px_-18px_rgba(78,52,46,0.22)] hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--rose)_40%,transparent)] hover:shadow-[0_22px_44px_-20px_rgba(217,91,141,0.28)] transition-all duration-500"
                  >

                    <div className="min-w-0">
                      <p className="font-display text-lg text-chocolate leading-tight">{item.name}</p>
                      <p className="text-xs text-chocolate/60 mt-1">{item.size}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-semibold text-rose-deep whitespace-nowrap">{item.price}</span>
                      <a
                        href={wa(`Olá, Coruja! Quero encomendar: ${item.name} (${item.size}).`)}
                        target="_blank" rel="noopener"
                        className="text-[11px] font-semibold uppercase tracking-wider text-chocolate/70 hover:text-rose-deep flex items-center gap-1"
                      >
                        Encomendar <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-chocolate/50 text-center">
                Pedidos com 5 dias de antecedência. Consulte sabores adicionais no WhatsApp.
              </p>
            </TabsContent>
          ))}
        </Tabs>
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
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
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
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
              className={`group relative overflow-hidden rounded-[28px] border border-white/60 shadow-[0_20px_50px_-24px_rgba(78,52,46,0.32)] hover:shadow-[0_36px_80px_-28px_rgba(217,91,141,0.38)] transition-shadow duration-500 ${it.h}`}
            >

              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(78,52,46,0.55) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="eyebrow"><span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-deep" /> Perguntas frequentes</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-chocolate text-balance">
            Tudo o que você quer <em className="not-italic text-rose-deep">saber</em>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQ.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-reveal
              className="!border-0 rounded-[24px] bg-white/85 backdrop-blur-sm ring-1 ring-white/70 shadow-[0_10px_28px_-18px_rgba(78,52,46,0.22)] overflow-hidden px-6 hover:shadow-[0_20px_44px_-22px_rgba(217,91,141,0.28)] hover:ring-[color-mix(in_oklab,var(--rose)_40%,transparent)] transition-all"
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse at 20% 10%, color-mix(in oklab, var(--rose) 55%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 85% 95%, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, color-mix(in oklab, var(--rose-deep) 30%, transparent) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "var(--noise-url)", backgroundSize: "220px 220px" }} />


      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Heart className="mx-auto h-8 w-8 text-rose animate-float" />
        <h2 data-reveal className="mt-6 font-display text-4xl md:text-6xl text-white text-balance leading-[1.05]">
          Seu próximo momento especial merece algo <em className="not-italic" style={{ background: "linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inesquecível</em>.
        </h2>
        <p data-reveal className="mt-6 text-white/70 text-lg text-pretty max-w-xl mx-auto">
          Solicite seu orçamento e transforme sua celebração em uma experiência ainda mais especial.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={wa("Olá, Coruja! Quero fazer um pedido agora.")} target="_blank" rel="noopener" className="btn-primary !py-4 !px-8 text-base">
            <MessageCircle className="h-5 w-5" /> Fazer Pedido Agora
          </a>
          <a href="#cardapio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">
            Ver cardápio completo
          </a>
        </div>
        <p data-reveal className="mt-10 text-xs text-white/50 uppercase tracking-[0.25em]">
          Contato · WhatsApp (19) 99576-6824
        </p>
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
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-rose-deep" /> @coruja.bolosedoces</li>
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
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-deep" /> Piracicaba e região</li>
              <li>Pedidos com 5 dias de antecedência</li>
              <li>Ingredientes selecionados</li>
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
      <span className="relative flex items-center gap-2 rounded-full pl-3 pr-4 py-3 text-white font-semibold shadow-[0_20px_50px_-10px_rgba(217,91,141,0.55)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}>
        <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline text-sm">Pedir no WhatsApp</span>
      </span>
    </a>
  );
}
