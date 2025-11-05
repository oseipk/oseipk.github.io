import { Card } from "@/components/ui/card"
import { Brain, Database, Cloud, GitBranch } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Developing and deploying ML models using state-of-the-art algorithms and frameworks like TensorFlow and PyTorch.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes to handle large-scale datasets efficiently.",
    },
    {
      icon: Cloud,
      title: "MLOps & Deployment",
      description: "Productionizing ML systems with CI/CD, model monitoring, and scalable cloud infrastructure.",
    },
    {
      icon: GitBranch,
      title: "Model Lifecycle",
      description: "Managing complete ML lifecycle from experimentation to production deployment and maintenance.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm a Full Stack ML Engineer passionate about bridging the gap between machine learning research and production systems.
              I specialize in designing end-to-end ML pipelines using MLOps best practices, from data ingestion and model training to deployment and monitoring.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              My expertise spans across machine learning frameworks, distributed computing, cloud platforms, and software engineering.
              I believe in building scalable, reliable, and maintainable ML systems that deliver real business value while maintaining high standards of code quality and system performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="p-6 space-y-4 hover:shadow-lg hover:border-primary/20 transition-all border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
