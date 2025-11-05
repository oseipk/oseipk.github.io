import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Enterprise Attrition Model",
      description:
        "Led end-to-end deployment of employee attrition prediction model using Azure ML ecosystem. Implemented MLOps pipeline with automated retraining, model monitoring, and A/B testing. Reduced voluntary turnover by 23% across 270,000+ employees.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Azure ML", "Python", "MLflow", "Feast","Azure DevOps", "Dash","FastAPI", "Snowflake"],
      github: "#",
      demo: "#",
    },
    {
      title: "Computer Vision Product Classifier & Quantification",
      description: "Deep learning system for automated product categorization in e-commerce using CNNs and transfer learning. Processes millions of product images with 98%+ accuracy.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["PyTorch", "OpenCV", "AWS SageMaker", "FastAPI", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Natural Language Processing API",
      description:
        "Production NLP service for sentiment analysis, text classification, and entity extraction. Built with transformer models and optimized for high-throughput inference.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Transformers", "FastAPI", "Redis", "MLflow", "Docker"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              A selection of machine learning projects I've engineered, showcasing my expertise in building production-ready ML systems and MLOps solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-accent/10 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-colors bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
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
