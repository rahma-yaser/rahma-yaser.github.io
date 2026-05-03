import { GraduationCap, LineChart, Users } from "lucide-react"
import { SectionHeading } from "./section-heading"

const highlights = [
  {
    icon: GraduationCap,
    title: "Educator at heart",
    body: "Teaching Assistant at FCI Assiut University and lead Power BI instructor for the FCI Data Analysis Bootcamp. I design hands-on labs, real business case studies, and capstone projects.",
  },
  {
    icon: LineChart,
    title: "Data-first mindset",
    body: "I work end-to-end across the BI lifecycle — from scraping and cleaning, to warehouse design with SSIS, to DAX models and storytelling dashboards in Power BI.",
  },
  {
    icon: Users,
    title: "Mentor & communicator",
    body: "I translate complex technical concepts into clear, structured lessons in both English and Arabic, mentoring students through real-world data and AI projects.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Educator, analyst, and lifelong student of data."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-5 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              I&apos;m a Data Analyst, instructor and educator with a strong
              technical foundation in SQL, Power BI, and Data Warehousing, and
              an academic background in Bioinformatics — I graduated top 3 of
              my class with a GPA of 3.95 / 4.00 from the Faculty of Computers
              and Information, Assiut University.
            </p>
            <p>
              I combine ITI Data Visualization training with hands-on teaching
              experience. Currently, I&apos;m a Teaching Assistant at FCI and
              led Power BI instructor for an intensive Data Analysis Bootcamp
              targeting third- and fourth-year students.
            </p>
            <p>
              I&apos;m passionate about translating complex technical concepts
              into clear, structured lessons, designing hands-on exercises,
              and mentoring students through real-world data and AI projects.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="inline-flex size-9 items-center justify-center rounded-md bg-accent/10 text-accent mb-3">
                  <item.icon className="size-4" />
                </div>
                <h3 className="font-serif text-lg text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
