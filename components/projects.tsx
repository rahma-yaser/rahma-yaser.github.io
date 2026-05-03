import { ArrowUpRight, Github } from "lucide-react"
import { SectionHeading } from "./section-heading"

interface Project {
  title: string
  category: string
  description: string
  tools: string[]
  github?: string
  highlight?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Property Finder — Real Estate BI System",
    category: "ITI Graduation Project",
    description:
      "End-to-end BI system for real-estate analytics — from large-scale public data scraping and cleaning to warehouse design and interactive Power BI dashboards. Used as a reference example when teaching the full BI lifecycle.",
    tools: [
      "Python",
      "SQL Server",
      "SSIS",
      "Oracle PL/SQL",
      "Power BI",
      "Excel",
    ],
    github: "https://github.com/rahma-yaser/Property-Finder-Real-Estate-Data-Analysis-Visualization-Project",
    highlight: "Full BI lifecycle",
    featured: true,
  },
  {
    title: "Glaucoma Prediction using Deep Learning",
    category: "Bachelor Graduation Project",
    description:
      "Web platform helping ophthalmologists predict glaucoma from fundus images. Trained CNN models on retinal scans reaching ~90% validation accuracy, deployed via a Django interface.",
    tools: [
      "Django",
      "PostgreSQL",
      "Keras",
      "TensorFlow",
      "Python",
    ],
    github: "https://github.com/rahma-yaser/Glaucoma-Detection-using-Deep-Learning",
    featured: true,
  },
  {
    title: "Customer Churn Rate Analysis Dashboard",
    category: "Power BI Dashboard",
    description:
      "Power BI dashboard analyzing customer behavior and churn patterns to support data-driven decisions. Reused as a teaching case for DAX measures and data storytelling in the FCI bootcamp.",
    tools: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/rahma-yaser/Customer-Churn-Analysis-Dashboard",
  },
  {
    title: "Sales Performance Analysis — Electronics Retail",
    category: "Analytical SQL Project",
    description:
      "Evaluated sales performance across regions, product categories, and salespersons using analytical SQL — aggregations, window functions, ranking, and pivoting. Reused as a lab exercise for SQL students.",
    tools: ["Analytical SQL", "Window Functions", "Ranking"],
    github: "hhttps://github.com/rahma-yaser/Sales-Performance-Analysis-for-Electronics-Retail-dataset-using-Window-Functions",
  },
  {
    title: "Gravity Books — Data Warehouse",
    category: "Data Engineering",
    description:
      "Designed and implemented a star-schema data warehouse for an online bookstore using T-SQL — fact and dimension modeling, ETL routines, and analytical queries.",
    tools: ["T-SQL", "MS SQL Server", "Star Schema", "ETL"],
    github: "https://github.com/rahma-yaser/gravity_books-data-warehouse-project",
  },
  {
    title: "HR Advanced PL/SQL Project",
    category: "Database Programming",
    description:
      "Advanced PL/SQL package for an HR system — stored procedures, functions, packages, triggers, and exception handling on Oracle, modeled after real HR business rules.",
    tools: ["Oracle", "PL/SQL", "Toad", "Triggers"],
    github: "https://github.com/rahma-yaser/HR-adv-PLSQL-project",
  },
  {
    title: "DBMS Bash Scripting",
    category: "Systems & Scripting",
    description:
      "A lightweight database management system implemented in pure Bash — supports table creation, schema validation, CRUD operations, and querying through a CLI interface.",
    tools: ["Bash", "Linux", "CLI", "DBMS"],
    github: "https://github.com/rahma-yaser/DBMS_Bash_Scripting",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Real projects that double as teaching material."
          description="From end-to-end BI systems to deep learning research — each project is built to ship results and to be re-used as a hands-on teaching case."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/rahma-yaser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Github className="size-4" />
            See all repositories on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured

  return (
    <article
      className={`group relative flex flex-col rounded-xl border bg-card p-6 transition-all hover:border-accent/50 ${
        isFeatured
          ? "md:col-span-2 lg:col-span-2 border-primary/20 bg-primary text-primary-foreground"
          : "border-border"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`text-xs font-mono uppercase tracking-wider ${
            isFeatured ? "text-accent" : "text-accent"
          }`}
        >
          {project.category}
        </span>
        {project.highlight && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
              isFeatured
                ? "bg-accent text-accent-foreground"
                : "bg-accent/10 text-accent"
            }`}
          >
            {project.highlight}
          </span>
        )}
      </div>

      <h3
        className={`font-serif text-xl md:text-2xl leading-snug mb-3 text-balance ${
          isFeatured ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-5 flex-1 ${
          isFeatured ? "text-primary-foreground/75" : "text-muted-foreground"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${
              isFeatured
                ? "bg-primary-foreground/10 text-primary-foreground/85 border border-primary-foreground/20"
                : "bg-secondary text-foreground/70 border border-border"
            }`}
          >
            {tool}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium self-start ${
            isFeatured
              ? "text-accent hover:text-accent/80"
              : "text-primary hover:text-accent"
          } transition-colors`}
        >
          <Github className="size-4" />
          View on GitHub
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </article>
  )
}
