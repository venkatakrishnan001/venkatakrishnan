import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import headshot from "@/assets/headshot.jpg";
export const HeroSection = () => {
  return <section id="hero" className="min-h-screen flex items-center gradient-hero pt-20 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-6xl">
                Venkata Krishnan S
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight lg:text-4xl">
                Driving Business Growth Through Data & Strategy
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Management professional combining analytical precision with business acumen to unlock opportunities, optimize operations, and scale with clarity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 text-base px-8" onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}>
                Work With Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Photo Column */}
          <div className="flex justify-center md:justify-end animate-fade-in order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>
              <img src={headshot} alt="Venkata Krishnan S - Management Professional" className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-large border-4 border-background" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};