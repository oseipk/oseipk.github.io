import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Senior ML Engineer",
      company: "AI Solutions Corp",
      description:
        "Lead ML engineer responsible for designing and deploying production ML systems. Implemented MLOps practices including automated model retraining, monitoring, and A/B testing frameworks. Mentored junior ML engineers and collaborated with data science teams.",
      technologies: ["Python", "TensorFlow", "MLflow", "Kubernetes", "AWS", "Docker"],
      link: "#",
    },
    {
      period: "2022 — 2024",
      title: "ML Engineer",
      company: "DataTech Innovations",
      description:
        "Developed and productionized computer vision and NLP models for enterprise clients. Built scalable inference pipelines and implemented model performance monitoring. Reduced model serving latency by 40% through optimization techniques.",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      link: "#",
    },
    {
      period: "2020 — 2022",
      title: "Data Engineer",
      company: "Analytics Pro",
      description:
        "Designed and maintained data pipelines for large-scale ML workflows. Implemented ETL processes for feature engineering and model training data. Collaborated with ML researchers to operationalize research prototypes.",
      technologies: ["Apache Spark", "Kafka", "Airflow", "Python", "SQL", "AWS"],
      link: "#",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              My professional journey in machine learning and data engineering, from building data pipelines to leading ML systems in production.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-lg transition-all group border-l-4 border-l-transparent hover:border-l-primary bg-card/50 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-mono text-accent font-medium">{exp.period}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
