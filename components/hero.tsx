import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,153,225,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-mono text-sm font-medium">Hi, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance">OSEI PINAMANG KWADWO</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">AI/ML Engineer</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              I specialize in designing, building, and productionizing end-to-end machine learning systems using MLOps best practices to deliver business value.
              From business problem framing through data pipelines to model deployment, I bridge the gap between research and production.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <Link href="https://www.github.com/oseipk" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/oseipinamangkwadwo" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <Link href="mailto:osei.pinamang@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/developer-working-at-desk-with-multiple-monitors-i.jpg"
                  alt="Developer working at desk with multiple monitors"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
