import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Waves, Moon, Sun, Medal, Heart, Activity, Brain, Flame, ArrowDown, Wind, Feather, Zap, RotateCw,
} from "lucide-react";
import hero from "@/assets/hero-swim.jpg";
import h1 from "@/assets/h1.jpg";
import h2 from "@/assets/h2.jpg";
import h3 from "@/assets/h3.jpg";
import h4 from "@/assets/h4.jpg";
import h5 from "@/assets/h5.jpg";
import h6 from "@/assets/h6.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import closing from "@/assets/closing.jpg";
import l1 from "@/assets/legend1.jpg.asset.json";
import l2 from "@/assets/legend2.jpg.asset.json";
import l3 from "@/assets/legend3.jpg.asset.json";
import l4 from "@/assets/legend4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Arte de Fluir: Todo sobre la Natación" },
      { name: "description", content: "Historia, estilos, leyendas y beneficios de la natación, con calculadora de calorías." },
      { property: "og:title", content: "El Arte de Fluir: Todo sobre la Natación" },
      { property: "og:description", content: "Historia, estilos, leyendas y beneficios de la natación." },
    ],
  }),
  component: Index,
});

const history = [
  { img: h1, year: "2500 a.C.", title: "Orígenes antiguos", text: "Jeroglíficos egipcios y pinturas de la 'Cueva de los Nadadores' muestran a humanos nadando hace milenios." },
  { img: h2, year: "Siglo V a.C.", title: "Grecia y Roma", text: "La natación formaba parte de la educación militar; los romanos construyeron grandes termas y piscinas." },
  { img: h3, year: "1538", title: "Primer tratado", text: "Nikolaus Wynmann publica 'Colymbetes', uno de los primeros libros dedicados a la natación." },
  { img: h5, year: "1837", title: "Competencias en Londres", text: "Se organizan las primeras competiciones modernas en piscinas cubiertas de Londres." },
  { img: h4, year: "1896", title: "Juegos Olímpicos", text: "La natación debuta en Atenas 1896, con pruebas en aguas abiertas del mar Egeo." },
  { img: h6, year: "Hoy", title: "Era moderna", text: "Piscinas de 50 m, cronometraje electrónico y récords que se rompen gracias a la ciencia del deporte." },
];

const styles = [
  { icon: Zap, name: "Crol / Libre", img: s1, move: "Brazada alterna", tech: "Brazada alterna con rotación del cuerpo y patada continua; respiración lateral.", bio: "El más rápido y eficiente: minimiza la resistencia hidrodinámica y trabaja dorsales, hombros y core." },
  { icon: Wind, name: "Espalda", img: s2, move: "Brazos en molino", tech: "Boca arriba, brazadas alternas por encima de la cabeza y patada de aleteo.", bio: "Mejora la postura, abre el pecho y fortalece la musculatura de la espalda con bajo impacto cervical." },
  { icon: Feather, name: "Pecho / Braza", img: s3, move: "Brazada en corazón", tech: "Movimiento simultáneo de brazos en forma de corazón y patada de rana.", bio: "Trabaja aductores, pectorales y glúteos; ideal para coordinación y resistencia aeróbica." },
  { icon: Waves, name: "Mariposa", img: s4, move: "Ondulación de delfín", tech: "Brazos simultáneos sobre el agua y patada ondulante de delfín.", bio: "El más exigente: desarrolla potencia explosiva, fuerza en hombros y gran gasto energético." },
];

const legends = [
  { img: l1.url, name: "Michael Phelps", country: "EE. UU.", stat: "28", label: "medallas olímpicas", text: "23 oros, el atleta olímpico más condecorado de la historia. 8 oros en Pekín 2008.", pos: "50% 22%", zoom: 1 },
  { img: l2.url, name: "Katie Ledecky", country: "EE. UU.", stat: "14", label: "medallas olímpicas", text: "Dominadora de la distancia; 9 oros olímpicos y múltiples récords mundiales en 800 y 1500 m.", pos: "50% 22%", zoom: 1 },
  { img: l3.url, name: "Caeleb Dressel", country: "EE. UU.", stat: "9", label: "oros olímpicos", text: "Velocista explosivo; 5 oros en Tokio 2020 y récord mundial en 100 m mariposa.", pos: "50% 0%", zoom: 1.25 },
  { img: l4.url, name: "Mark Spitz", country: "EE. UU.", stat: "7", label: "oros en Múnich 1972", text: "Leyenda de los 70; 7 oros con récord mundial en un solo Juego Olímpico.", pos: "50% 22%", zoom: 1 },
];


const mets: Record<string, { label: string; met: number }> = {
  suave: { label: "Libre suave", met: 5.8 },
  crol: { label: "Crol vigoroso", met: 9.8 },
  espalda: { label: "Espalda", met: 4.8 },
  pecho: { label: "Pecho", met: 5.3 },
  mariposa: { label: "Mariposa", met: 13.8 },
};

function Index() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [weight, setWeight] = useState(70);
  const [style, setStyle] = useState("crol");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const kcal = Math.round(mets[style]!.met * weight * (minutes / 60));

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
            <Waves className="h-5 w-5 text-primary" /> Fluir
          </a>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            {[["historia", "Historia"], ["estilos", "Estilos"], ["leyendas", "Leyendas"], ["beneficios", "Beneficios"]].map(([id, l]) => (
              <a key={id} href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">{l}</a>
            ))}
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Alternar modo oscuro"
            className="rounded-full bg-secondary p-2 text-secondary-foreground transition-transform hover:rotate-12 hover:scale-110"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-4">
        <img src={hero} alt="Nadador deslizándose bajo el agua" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-background" />
        <div className="relative mx-auto max-w-4xl text-center text-foam">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Deporte · Ciencia · Historia</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">El Arte de Fluir: Todo sobre la Natación</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 sm:text-xl">
            Donde la fuerza se vuelve ligereza y cada brazada es una conversación con el agua.
          </p>
          <a href="#estilos" className="bg-cta mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            Explorar Estilos <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle kicker="Cronología" title="Historia de la Natación" />
        <div className="mt-12 flex gap-2 overflow-x-auto pb-4">
          {history.map((h, i) => (
            <button
              key={h.year}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all ${i === active ? "bg-cta text-primary-foreground scale-105" : "glass text-muted-foreground hover:text-primary"}`}
            >
              {h.year}
            </button>
          ))}
        </div>
        <div className="relative mt-4 h-1 rounded-full bg-secondary">
          <div className="bg-cta h-1 rounded-full transition-all duration-500" style={{ width: `${((active + 1) / history.length) * 100}%` }} />
        </div>
        <div key={active} className="glass mt-8 grid overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 md:grid-cols-2">
          <img src={history[active]!.img} alt={history[active]!.title} loading="lazy" width={992} height={672} className="h-64 w-full object-cover md:h-full" />
          <div className="p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{history[active]!.year}</p>
          <h3 className="mt-2 text-3xl font-bold">{history[active]!.title}</h3>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{history[active]!.text}</p>
          </div>
        </div>
      </section>

      {/* Estilos */}
      <section id="estilos" className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle kicker="Técnica" title="Estilos de Nado" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {styles.map((s) => <FlipCard key={s.name} s={s} />)}
        </div>
      </section>

      {/* Leyendas */}
      <section id="leyendas" className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle kicker="Inspiración" title="Leyendas de la Natación" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {legends.map((l) => (
            <article key={l.name} className="glass lift group flex flex-col overflow-hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={l.img}
                    alt={l.name}
                    loading="lazy"
                    style={{ objectPosition: l.pos, transform: `scale(${l.zoom})`, transformOrigin: "50% 0%" }}
                    className="h-full w-full object-cover"
                  />
                </div>


                <Medal className="absolute right-3 top-3 h-9 w-9 rounded-full bg-background/70 p-1.5 text-primary backdrop-blur" />
              </div>
              <div className="flex flex-col p-6 pt-4">
              <p className="mt-4 font-display text-5xl font-bold text-primary">{l.stat}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l.label}</p>
              <h3 className="mt-4 text-xl font-bold">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.country}</p>
              <p className="mt-3 text-sm text-muted-foreground">{l.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle kicker="Salud" title="Calculadora y Beneficios" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass p-8">
            <div className="flex items-center gap-3"><Flame className="h-6 w-6 text-primary" /><h3 className="text-2xl font-bold">Calorías quemadas</h3></div>
            <label className="mt-6 block text-sm font-semibold">Estilo</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-ring">
              {Object.entries(mets).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
            <label className="mt-6 flex justify-between text-sm font-semibold"><span>Minutos</span><span className="text-primary">{minutes} min</span></label>
            <input type="range" min={5} max={120} step={5} value={minutes} onChange={(e) => setMinutes(+e.target.value)} className="mt-2 w-full accent-primary" />
            <label className="mt-6 flex justify-between text-sm font-semibold"><span>Peso</span><span className="text-primary">{weight} kg</span></label>
            <input type="range" min={35} max={150} value={weight} onChange={(e) => setWeight(+e.target.value)} className="mt-2 w-full accent-primary" />
            <div className="bg-cta mt-8 rounded-2xl p-6 text-center text-primary-foreground">
              <p className="text-sm uppercase tracking-widest opacity-90">Estimación</p>
              <p className="font-display text-5xl font-bold">{kcal} kcal</p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Cálculo aproximado: MET × peso (kg) × horas.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Heart, t: "Corazón fuerte", d: "Mejora la capacidad cardiovascular y reduce la presión arterial." },
              { icon: Activity, t: "Bajo impacto", d: "El agua soporta hasta el 90% del peso corporal, protegiendo articulaciones." },
              { icon: Waves, t: "Cuerpo completo", d: "Activa más de 60 grupos musculares en cada sesión." },
              { icon: Brain, t: "Mente en calma", d: "La respiración rítmica reduce el estrés y mejora el sueño." },
            ].map((b) => (
              <div key={b.t} className="glass lift p-6">
                <b.icon className="h-7 w-7 text-primary" />
                <h4 className="mt-3 font-display text-lg font-bold">{b.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <img src={closing} alt="Nadador ejecutando el estilo mariposa en una piscina de competición" loading="lazy" width={1920} height={832} className="h-80 w-full object-cover sm:h-[28rem]" />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-navy/80 via-navy/20 to-transparent p-8 text-center text-foam">
            <h2 className="text-3xl font-bold sm:text-5xl">Sumérgete. Respira. Fluye.</h2>
            <p className="mt-3 max-w-xl opacity-90">El agua siempre te está esperando.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-6">
        <div className="glass mx-auto max-w-6xl p-8 text-center">
          <p className="flex items-center justify-center gap-2 font-display text-xl font-bold"><Waves className="h-5 w-5 text-primary" /> Fluir</p>
          <p className="mt-2 text-sm text-muted-foreground">Celebrando el deporte que nos conecta con el agua.</p>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Fluir. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}

function FlipCard({ s }: { s: (typeof styles)[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button type="button" onClick={() => setFlipped((f) => !f)} aria-label={`Voltear tarjeta ${s.name}`} className="flip-scene lift h-[30rem] w-full text-left sm:h-[28rem]">
      <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
        <article className="flip-face glass p-8">
          <div className="bg-cta inline-flex rounded-2xl p-3 text-primary-foreground"><s.icon className="h-7 w-7" /></div>
          <h3 className="mt-5 text-2xl font-bold">{s.name}</h3>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">Técnica</p>
          <p className="mt-1 text-muted-foreground">{s.tech}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">Beneficios biomecánicos</p>
          <p className="mt-1 text-muted-foreground">{s.bio}</p>
          <p className="absolute bottom-5 right-6 flex items-center gap-1 text-xs font-semibold text-primary"><RotateCw className="h-3.5 w-3.5" /> Toca para ver</p>
        </article>
        <div className="flip-face flip-back glass overflow-hidden">
          <img src={s.img} alt={`Nadador en estilo ${s.name}`} loading="lazy" className="swim-drift h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-6 text-foam">
            <div className="mb-3 flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => <span key={i} className="stroke-dot" style={{ animationDelay: `${i * 0.25}s` }} />)}
            </div>
            <h3 className="text-2xl font-bold">{s.name}</h3>
            <p className="text-sm opacity-90">{s.move}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
