import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "rahmayasserm@gmail.com",
    href: "mailto:rahmayasserm@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rahma-yaser",
    href: "https://www.linkedin.com/in/rahma-yaser/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rahma-yaser",
    href: "https://github.com/rahma-yaser",
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-primary text-primary-foreground scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent" />
              Contact
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
              Let&apos;s talk about{" "}
              <span className="italic text-accent">data, teaching,</span> or
              your next project.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-lg text-pretty">
              Whether you&apos;re hiring an analyst, looking for an instructor,
              or want to collaborate on a project — I&apos;d love to hear from
              you.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="mailto:rahmayasserm@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <Mail className="size-4" />
                Send an email
              </a>
              <a
                href="/Rahma-Yasser-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-5 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <link.icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-primary-foreground/60 mb-0.5">
                    {link.label}
                  </div>
                  <div className="font-medium truncate">{link.value}</div>
                </div>
                <ArrowUpRight className="size-5 text-primary-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Rahma Yasser Mahmoud. Based in
            Assiut, Egypt.
          </p>
          <p className="font-mono text-xs">
            Designed & built with care.
          </p>
        </div>
      </div>
    </section>
  )
}
