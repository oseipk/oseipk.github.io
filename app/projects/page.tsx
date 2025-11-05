import { Header } from "@/components/header"
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
    </div>
  )
}
