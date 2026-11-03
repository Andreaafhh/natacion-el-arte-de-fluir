import { useState } from "react";
import {
  Shirt, Glasses, HardHat, Hand, Footprints, CircleDot, RectangleHorizontal, Clock, Ruler,
  Droplets, Zap, Gauge, ShieldCheck, Apple, GlassWater, Dumbbell, Lightbulb, Sparkles,
} from "lucide-react";
import suitsFabric from "@/assets/suits-fabric.jpg";
import trainingPool from "@/assets/training-pool.jpg";
import nutritionFood from "@/assets/nutrition-food.jpg";
import gearFlatlay from "@/assets/gear-flatlay.jpg";
import gearGoggles from "@/assets/gear-goggles.jpg";
import gearCap from "@/assets/gear-cap.jpg";
import gearPaddles from "@/assets/gear-paddles.jpg";
import gearFins from "@/assets/gear-fins.jpg";
import gearPullbuoy from "@/assets/gear-pullbuoy.jpg";
import gearKickboard from "@/assets/gear-kickboard.jpg";

function Banner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="glass mt-10 overflow-hidden p-0">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover sm:aspect-[21/8]"
      />
    </div>
  );
}

function Title({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}

function Tabs<T extends string>({ items, value, onChange }: { items: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div role="tablist" className="glass mx-auto mt-10 flex w-fit max-w-full gap-1 overflow-x-auto p-1.5">
      {items.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          onClick={() => onChange(t.id)}
          className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-all sm:px-6 ${value === t.id ? "bg-cta text-primary-foreground shadow-md" : "text-muted-foreground hover:text-primary"}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- 1. Trajes ---------- */
const fabrics = [
  { era: "1900s", name: "Lana y algodón", text: "Trajes de cuerpo completo que absorbían agua y llegaban a pesar varios kilos mojados." },
  { era: "1930s", name: "Seda y rayón", text: "Más ligeros y ajustados, aunque frágiles y poco duraderos en el agua clorada." },
  { era: "1960s", name: "Nylon", text: "Secado rápido y mayor resistencia; el traje se ajusta mejor al cuerpo." },
  { era: "1970s", name: "Lycra / Elastano", text: "Elasticidad y compresión: revolucionó la natación de competencia." },
  { era: "2008", name: "Poliuretano", text: "Supertrajes con flotación extra; se rompieron decenas de récords y fueron prohibidos en 2010." },
  { era: "Hoy", name: "Textiles técnicos", text: "Tejidos de compresión con costuras soldadas y acabados hidrófobos, aprobados por World Aquatics." },
];

const metrics = [
  { icon: Droplets, label: "Absorción de agua", before: 90, after: 5 },
  { icon: Gauge, label: "Resistencia hidrodinámica", before: 85, after: 20 },
  { icon: Zap, label: "Compresión muscular", before: 5, after: 85 },
  { icon: ShieldCheck, label: "Repelencia al agua", before: 5, after: 90 },
];

function Suits() {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(5);
  return (
    <section id="tecnologia" className="mx-auto max-w-6xl px-4 py-24">
      <Title kicker="Innovación" title="Tecnología e Ingeniería de Trajes de Baño" />
      <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {fabrics.map((f, i) => (
          <button key={f.era} onClick={() => setActive(i)} className={`glass lift p-4 text-left transition-all ${i === active ? "ring-2 ring-primary" : ""}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{f.era}</p>
            <p className="mt-1 font-display font-bold">{f.name}</p>
          </button>
        ))}
      </div>
      <div key={active} className="glass mt-4 flex flex-col gap-5 overflow-hidden p-6 animate-in fade-in duration-500 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4 sm:flex-1">
          <Shirt className="h-8 w-8 shrink-0 text-primary" />
          <div>
            <h3 className="text-xl font-bold">{fabrics[active]!.name} <span className="text-sm font-normal text-muted-foreground">· {fabrics[active]!.era}</span></h3>
            <p className="mt-1 text-muted-foreground">{fabrics[active]!.text}</p>
          </div>
        </div>
        <img
          src={suitsFabric}
          alt="Detalle de textil técnico hidrófobo para trajes de competencia"
          loading="lazy"
          className="aspect-[16/9] w-full rounded-xl object-cover sm:aspect-[4/3] sm:w-64 sm:shrink-0"
        />
      </div>

      <div className="glass mt-8 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-bold">Antes vs. Después</h3>
          <p className="text-sm text-muted-foreground">Desliza para comparar</p>
        </div>
        <div className="mt-4 flex justify-between text-xs font-semibold uppercase tracking-widest">
          <span className="text-muted-foreground">Lana (1900)</span>
          <span className="text-primary">Textil técnico (hoy)</span>
        </div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Comparar materiales" className="mt-2 w-full accent-primary" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {metrics.map((m) => {
            const v = Math.round(m.before + ((m.after - m.before) * pos) / 100);
            return (
              <div key={m.label}>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="flex items-center gap-2"><m.icon className="h-4 w-4 text-primary" />{m.label}</span>
                  <span className="text-primary">{v}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary">
                  <div className="bg-cta h-2 rounded-full transition-all duration-300" style={{ width: `${v}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Equipo ---------- */
const gear = [
  { icon: Glasses, img: gearGoggles, name: "Goggles / Gafas", use: "Protegen los ojos del cloro y dan visión clara bajo el agua.", tech: "Permiten ver la pared y mantener la cabeza alineada.", tip: "Prueba el sellado sin la correa: si se quedan pegadas, ajustan bien. Antiempañante y protección UV para exteriores." },
  { icon: HardHat, img: gearCap, name: "Gorro de natación", use: "Protege el cabello y reduce la resistencia.", tech: "Superficie lisa que mejora el deslizamiento.", tip: "Silicona para durabilidad y competencia; látex si buscas ligereza; tela para mayor comodidad." },
  { icon: Hand, img: gearPaddles, name: "Paletas (Hand paddles)", use: "Aumentan la superficie de la mano para generar más fuerza.", tech: "Refuerzan el agarre y corrigen la entrada de la mano.", tip: "Empieza con tamaño pequeño para cuidar los hombros; modelos sin correa de muñeca mejoran la técnica." },
  { icon: Footprints, img: gearFins, name: "Aletas (Fins)", use: "Dan propulsión extra y velocidad en la patada.", tech: "Mejoran la flexibilidad del tobillo y la posición del cuerpo.", tip: "Aletas cortas para entrenar ritmo real; largas para principiantes o recuperación." },
  { icon: CircleDot, img: gearPullbuoy, name: "Pull buoy", use: "Flotador entre las piernas que aísla el trabajo de brazos.", tech: "Ayuda a sentir la rotación y la tracción de la brazada.", tip: "Espuma EVA de densidad media; tamaño mayor si tus piernas tienden a hundirse." },
  { icon: RectangleHorizontal, img: gearKickboard, name: "Tabla (Kickboard)", use: "Soporte para trabajar exclusivamente la patada.", tech: "Fortalece piernas y core, mejora la técnica de patada.", tip: "Tabla ergonómica con agarres; no la sostengas muy alta para no arquear la espalda." },
];

function Gear() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="equipo" className="mx-auto max-w-6xl px-4 py-24">
      <Title kicker="Equipamiento" title="Equipo y Accesorios de Natación" />
      <Banner src={gearFlatlay} alt="Equipo esencial de natación sobre el borde de la alberca: gafas, gorro, paletas, aletas, pull buoy y tabla" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gear.map((g) => {
          const isOpen = open === g.name;
          return (
            <button key={g.name} type="button" onClick={() => setOpen(isOpen ? null : g.name)} aria-expanded={isOpen} className={`glass lift overflow-hidden p-0 text-left ${isOpen ? "ring-2 ring-primary" : ""}`}>
              <div className="relative">
                <img src={g.img} alt={g.name} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="bg-cta absolute bottom-3 left-3 inline-flex rounded-2xl p-2.5 text-primary-foreground shadow-lg"><g.icon className="h-5 w-5" /></div>
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold">{g.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.use}</p>
              <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Beneficio técnico</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.tech}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">Cómo elegir</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.tip}</p>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold text-primary">{isOpen ? "Ocultar detalles" : "Ver detalles"}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- 3. Rutinas ---------- */
type Level = "principiante" | "intermedio" | "avanzado";
const plans: Record<Level, { time: string; blocks: { name: string; items: [string, number][] }[] }> = {
  principiante: {
    time: "≈ 35 min",
    blocks: [
      { name: "Calentamiento", items: [["4 × 25 m crol suave (descanso 30 s)", 100], ["4 × 25 m patada con tabla", 100]] },
      { name: "Serie principal", items: [["6 × 50 m crol a ritmo cómodo (descanso 45 s)", 300], ["4 × 25 m espalda", 100]] },
      { name: "Enfriamiento", items: [["100 m nado libre muy suave", 100]] },
    ],
  },
  intermedio: {
    time: "≈ 50 min",
    blocks: [
      { name: "Calentamiento", items: [["300 m combinado suave", 300], ["4 × 50 m técnica (descanso 20 s)", 200]] },
      { name: "Serie principal", items: [["8 × 100 m crol a ritmo medio (descanso 20 s)", 800], ["4 × 50 m pull buoy + paletas", 200], ["4 × 50 m patada con aletas", 200]] },
      { name: "Enfriamiento", items: [["200 m espalda / libre suave", 200]] },
    ],
  },
  avanzado: {
    time: "≈ 75 min",
    blocks: [
      { name: "Calentamiento", items: [["600 m combinado progresivo", 600], ["6 × 50 m técnica + sprint de 12,5 m", 300]] },
      { name: "Serie principal", items: [["10 × 200 m crol a umbral (descanso 15 s)", 2000], ["8 × 50 m sprint del estilo principal (descanso 30 s)", 400], ["4 × 100 m combinado individual", 400]] },
      { name: "Enfriamiento", items: [["300 m suave con respiración controlada", 300]] },
    ],
  },
};

function Training() {
  const [level, setLevel] = useState<Level>("principiante");
  const plan = plans[level];
  const total = plan.blocks.reduce((s, b) => s + b.items.reduce((a, [, m]) => a + m, 0), 0);
  return (
    <section id="rutinas" className="mx-auto max-w-6xl px-4 py-24">
      <Title kicker="Entrenamiento" title="Rutinas y Planes de Entrenamiento" />
      <Banner src={trainingPool} alt="Nadadores entrenando crol en carriles de una alberca olímpica" />
      <Tabs
        value={level}
        onChange={setLevel}
        items={[{ id: "principiante", label: "Principiante" }, { id: "intermedio", label: "Intermedio" }, { id: "avanzado", label: "Avanzado" }]}
      />
      <div key={level} className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-cta flex items-center gap-4 rounded-2xl p-5 text-primary-foreground">
            <Ruler className="h-8 w-8" /><div><p className="text-xs uppercase tracking-widest opacity-90">Distancia total</p><p className="font-display text-3xl font-bold">{total.toLocaleString("es-MX")} m</p></div>
          </div>
          <div className="glass flex items-center gap-4 p-5">
            <Clock className="h-8 w-8 text-primary" /><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Tiempo aproximado</p><p className="font-display text-3xl font-bold">{plan.time}</p></div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {plan.blocks.map((b, i) => (
            <div key={b.name} className="glass lift p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Paso {i + 1}</p>
              <h3 className="mt-1 text-xl font-bold">{b.name}</h3>
              <ul className="mt-4 space-y-3">
                {b.items.map(([t, m]) => (
                  <li key={t} className="flex justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">{t}</span>
                    <span className="shrink-0 font-semibold text-primary">{m} m</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Nutrición ---------- */
type Phase = "antes" | "durante" | "post";
const nutrition: Record<Phase, { icon: typeof Apple; focus: string; tips: string[] }> = {
  antes: { icon: Apple, focus: "Energía y digestión", tips: ["Come 2–3 h antes: carbohidratos complejos (avena, arroz, pan integral) con poca grasa y fibra.", "Si faltan 30–60 min, elige algo ligero: plátano, galletas o una barra de cereal.", "Bebe 400–600 ml de agua en las 2 horas previas.", "Evita comidas pesadas o muy condimentadas que causen molestias en el agua."] },
  durante: { icon: GlassWater, focus: "Electrólitos e hidratación en alberca", tips: ["En la alberca también sudas: no lo notas porque el agua te refresca.", "Ten una botella al borde y bebe pequeños sorbos cada 15–20 min.", "En sesiones de más de 60 min, usa bebidas con sodio y potasio para reponer electrólitos.", "Para entrenamientos largos, 30–60 g de carbohidratos por hora mantienen la energía."] },
  post: { icon: Dumbbell, focus: "Recuperación muscular y proteínas", tips: ["Dentro de los 30–60 min, combina carbohidratos y proteína (proporción aprox. 3:1).", "Ideas: yogur con fruta, licuado de leche y plátano, huevo con pan o pollo con arroz.", "20–30 g de proteína ayudan a reparar el músculo.", "Rehidrátate con unos 500 ml de líquido por cada medio kilo perdido."] },
};

function Nutrition() {
  const [phase, setPhase] = useState<Phase>("antes");
  const n = nutrition[phase];
  return (
    <section id="nutricion" className="mx-auto max-w-6xl px-4 py-24">
      <Title kicker="Alimentación" title="Nutrición e Hidratación Acuática" />
      <Banner src={nutritionFood} alt="Alimentos e hidratación recomendados para nadadores: avena, plátano, pan integral y bebidas" />
      <Tabs
        value={phase}
        onChange={setPhase}
        items={[{ id: "antes", label: "Antes de nadar" }, { id: "durante", label: "Durante el entrenamiento" }, { id: "post", label: "Post-entrenamiento" }]}
      />
      <div key={phase} className="glass mt-8 p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 sm:p-10">
        <div className="flex items-center gap-3">
          <div className="bg-cta rounded-2xl p-3 text-primary-foreground"><n.icon className="h-6 w-6" /></div>
          <h3 className="text-2xl font-bold">{n.focus}</h3>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {n.tips.map((t) => (
            <li key={t} className="flex gap-3 rounded-xl bg-background/40 p-4 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 shrink-0 text-primary" />{t}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass lift p-6">
          <Lightbulb className="h-7 w-7 text-primary" />
          <h4 className="mt-3 font-display text-lg font-bold">Carga de carbohidratos</h4>
          <p className="mt-2 text-sm text-muted-foreground">Antes de una competencia o sesión muy larga, aumenta los carbohidratos a 7–10 g por kg de peso durante 24–48 h para llenar tus reservas de glucógeno. En días normales, 5–7 g/kg suelen ser suficientes.</p>
        </div>
        <div className="glass lift p-6">
          <Droplets className="h-7 w-7 text-primary" />
          <h4 className="mt-3 font-display text-lg font-bold">Hidratación adecuada</h4>
          <p className="mt-2 text-sm text-muted-foreground">Apunta a unos 35 ml de agua por kg de peso al día, más lo que pierdes entrenando. Una orina de color claro es buena señal; la sed, los calambres o el dolor de cabeza indican que necesitas beber más.</p>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">Recomendaciones generales; consulta a un profesional de la nutrición para un plan personalizado.</p>
    </section>
  );
}

export function ExtraSections() {
  return (
    <>
      <Suits />
      <Gear />
      <Training />
      <Nutrition />
    </>
  );
}
