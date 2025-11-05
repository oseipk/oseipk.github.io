import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-all border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">osei.pinamang@gmail.com</p>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-all border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-muted-foreground">+233 (024) 442-6089</p>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-all border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Accra, Ghana</p>
              </div>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button
              size="lg"
              className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Send Message
            </Button>
          </div>

          <div className="text-center pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 Osei Pinamang Kwadwo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
