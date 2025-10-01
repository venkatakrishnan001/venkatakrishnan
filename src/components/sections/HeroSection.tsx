import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center gradient-hero pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Venkata Krishnan S
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Business Strategy | Marketing | Product Management
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Management student combining analytical precision with business acumen to solve growth challenges and drive strategic impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
                onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>
              <img
                src={headshot}
                alt="Venkata Krishnan S"
                className="relative w-80 h-80 rounded-full object-cover shadow-large border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
