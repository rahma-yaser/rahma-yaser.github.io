import {
  Database,
  BarChart3,
  Code2,
  Brain,
  Presentation,
} from "lucide-react"
import { SectionHeading } from "./section-heading"

const skillGroups = [
  {
    icon: Database,
    title: "Databases & Warehousing",
    items: [
      "MySQL",
      "MS SQL Server",
      "Oracle (Toad)",
      "SQL / PL/SQL",
      "Analytical SQL",
      "SSIS",
    ],
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    items: [
      "Power BI",
      "DAX",
      "Power Query (M)",
      "Data modeling",
      "Tableau",
      "MS Excel",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Scripting",
    items: ["Python", "Pandas", "scikit-learn", "R", "Bash", "Git / GitHub", "Linux"],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    items: [
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "Deep Learning",
      "Keras / TensorFlow",
      "Model evaluation",
    ],
  },
  {
    icon: Presentation,
    title: "Teaching & Communication",
    items: [
      "Lesson planning",
      "Lab design",
      "Mentoring",
      "Technical writing",
      "Presenting (EN / AR)",
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-secondary/40 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A practical toolkit for analytics, modeling, and teaching."
          description="Grouped by what I actually use day-to-day — the same tools I teach students and apply on real projects."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <group.icon className="size-5" />
                </div>
                <h3 className="font-serif text-xl text-primary">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
