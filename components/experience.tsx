import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2025 — Present",
      title: "Full Stack Data Scientist",
      company: "Nestlé Global People Analytics (Remote)",
      description:
        "• Led the design of an enterprise attrition intelligence system predicting near-term employee exits, translating model risk into auditable HR actions, and supporting monthly decision cycles across 270K+ employees with built-in governance and bias monitoring, scaling from local markets through regionals to global.",
      technologies: ["SQL","Python","Github", "Azure ML", "MLflow", "FastAPI", "Snowflake", "Power BI", "Blob Storage", "Dash", "Random Survival Forest","Cox Proportional Hazard"],
      link: "#",
    },
    {
      period: "2023 — 2024",
      title: "Analytics Specialist",
      company: "Nestlé Business Services - Accra (Hybrid)",
      description:
        "• Developed analytics solutions for business operations and supply chain optimization across Central & West Africa and Eastern & Southern African markets\n• Built automated reporting dashboards and data pipelines to support strategic decision-making for regional leadership\n• Implemented statistical models for demand forecasting and inventory management, reducing stockouts by 30%\n• Collaborated with cross-functional teams to drive data-driven process improvements and cost optimization initiatives",
      technologies: ["Python", "SQL", "Power BI", "Excel", "Power Automate", "Power Apps", "Azure Data Factory", "Snowflake"],
      link: "#",
    },
    {
      period: "2020 — 2023",
      title: "Data Scientist",
      company: "KOA Switzerland AG (Hybrid)",
      description:
        "• Designed and built route optimization system using advanced algorithms and machine learning to streamline logistics operations\n• Implemented real-time route planning and vehicle scheduling to minimize fuel consumption and delivery times\n• Analyzed transportation data and geographic constraints to develop predictive models for optimal routing\n• Achieved 46% reduction in organizational costs through improved fleet efficiency and resource optimization",
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
