import { Header } from "@/components/header"
import { Experience } from "@/components/experience"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Experience />
      </main>
    </div>
  )
}
