import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero pt-20 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>
              <img
                src={headshot}
                alt="Venkata Krishnan S"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-large border-4 border-background"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Driving Business Growth Through Data & Strategy
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I help organizations unlock opportunities, optimize operations, and scale with clarity.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="gap-2 text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}
            >
              Work With Me
            </Button>
            <button 
              className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
