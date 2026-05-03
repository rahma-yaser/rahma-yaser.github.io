import { SectionHeading } from "./section-heading"

const roles = [
  {
    title: "Power BI Instructor — Data Analysis Bootcamp",
    org: "Faculty of Computers and Information, Assiut University",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Designed and delivered the Power BI module of an intensive Data Analysis Bootcamp targeting 3rd- and 4th-year FCI students.",
      "Covered data modeling, Power Query, DAX measures and calculated columns, dashboard design, and data storytelling.",
      "Built hands-on lab exercises and real-world business case studies to reinforce each concept practically.",
      "Mentored participants on capstone dashboard projects with one-on-one feedback on modeling, visual design, and presentation.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "Faculty of Computers and Information, Assiut University",
    period: "Mar 2024 – Present",
    bullets: [
      "Teach lab sessions and tutorials across Data Mining, Artificial Intelligence, Machine Learning, Information Systems, and Databases.",
      "Prepare lab materials, hands-on exercises, and assessments aligned with course learning objectives.",
      "Provide one-on-one academic support during office hours and mentor students on graduation projects involving data analysis and ML.",
      "Grade assignments and exams, giving written and verbal feedback to help students strengthen their analytical skills.",
    ],
  },
]

const courses = [
  {
    name: "Power BI for Data Analysis",
    level: "Bootcamp · 3rd & 4th year",
    body: "Data modeling, Power Query (M), DAX measures, dashboard design, and data storytelling.",
  },
  {
    name: "Data Mining",
    level: "Undergraduate · FCI",
    body: "Data preprocessing, association rules, classification, clustering, and evaluation metrics.",
  },
  {
    name: "Artificial Intelligence",
    level: "Undergraduate · FCI",
    body: "Search algorithms, knowledge representation, and foundational AI techniques.",
  },
  {
    name: "Machine Learning",
    level: "Undergraduate · FCI",
    body: "Supervised and unsupervised learning, model training and evaluation, applied ML in Python.",
  },
  {
    name: "Information Systems",
    level: "Undergraduate · FCI",
    body: "Systems analysis and design, business processes, and the role of IS in organizations.",
  },
  {
    name: "Databases",
    level: "Undergraduate · FCI",
    body: "Relational design, normalization, SQL, and practical query writing on real schemas.",
  },
]

export function Teaching() {
  return (
    <section
      id="teaching"
      className="py-20 md:py-28 bg-secondary/40 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teaching Experience"
          title="Two years of building students into data analysts."
          description="Lab sessions, tutorials, bootcamp lectures, and capstone mentorship — teaching is where I spend most of my time."
        />

        {/* Roles timeline */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1 flex-wrap">
                <h3 className="font-serif text-xl text-primary">
                  {role.title}
                </h3>
                <span className="text-xs font-mono text-accent whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{role.org}</p>
              <ul className="flex flex-col gap-2.5">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/80 leading-relaxed flex gap-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl text-primary mb-6">
            Courses taught
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.name}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1.5 flex-wrap">
                  <h4 className="font-medium text-primary">{course.name}</h4>
                </div>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2.5">
                  {course.level}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
