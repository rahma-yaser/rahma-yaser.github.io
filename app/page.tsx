import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Teaching } from "@/components/teaching"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Teaching />
      <Education />
      <Contact />
    </main>
  )
}
