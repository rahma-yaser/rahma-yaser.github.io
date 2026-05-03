import { ArrowRight, Download, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "var(--color-primary)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Available for opportunities
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-primary text-balance">
            Data Analytics{" "}
            <span className="italic text-accent">instructor</span> turning
            complex data into clear lessons and decisions.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            I&apos;m Rahma Yasser — Teaching Assistant at the Faculty of
            Computers and Information, Assiut University, and Power BI
            instructor for the FCI Data Analysis Bootcamp. I specialize in
            SQL, Power BI, Data Warehousing, Machine Learning, Deep Learning and Bioinformatics.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View projects
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/Rahma-Yasser-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              Assiut, Egypt
            </span>
            <span className="hidden sm:inline-block w-px h-4 bg-border" />
            <span>Bioinformatics, GPA 3.95 / 4.00</span>
            <span className="hidden sm:inline-block w-px h-4 bg-border" />
            <span>ITI Data Visualization Track</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-10">
          <Stat value="6+" label="Courses taught" />
          <Stat value="2+" label="Years teaching" />
          <Stat value="10+" label="Data projects" />
          <Stat value="C1" label="English level" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-3xl md:text-4xl text-primary">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
