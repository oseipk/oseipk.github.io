import { Header } from "@/components/header"
import { About } from "@/components/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
      </main>
    </div>
  )
}
