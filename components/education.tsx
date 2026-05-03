import { GraduationCap, Award } from "lucide-react"
import { SectionHeading } from "./section-heading"

const items = [
  {
    icon: Award,
    title: "Data Visualization Track",
    org: "Information Technology Institute (ITI)",
    location: "Assiut, Egypt",
    period: "Jul 2025 – Oct 2025",
    detail:
      "Intensive professional track covering Power BI, Tableau, SQL, Data Warehousing (SSIS), and Excel.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Bioinformatics",
    org: "Faculty of Computers and Information, Assiut University",
    location: "Assiut, Egypt",
    period: "Sep 2019 – Jul 2023",
    detail:
      "Top 3 of the class · GPA 3.95 / 4.00. Coursework: Databases, Statistics, Machine Learning, Data Mining, Programming, Algorithms.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="A foundation in computer science."
        />

        <div className="mt-12 flex flex-col gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-start gap-5 md:gap-8 rounded-xl border border-border bg-card p-6"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <item.icon className="size-5" />
              </div>

              <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                <div className="flex items-baseline justify-between gap-4 flex-wrap md:hidden">
                  <span className="text-xs font-mono text-accent">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/80">
                  {item.org}{" "}
                  <span className="text-muted-foreground">
                    · {item.location}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {item.detail}
                </p>
              </div>

              <span className="hidden md:block text-xs font-mono text-accent whitespace-nowrap pt-2">
                {item.period}
              </span>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-5 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Arabic</span>
            <span className="text-sm font-medium text-primary">Native</span>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">English</span>
            <span className="text-sm font-medium text-primary">
              C1 — comfortable teaching & presenting
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
