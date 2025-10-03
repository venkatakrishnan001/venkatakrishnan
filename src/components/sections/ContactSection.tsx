import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-down">
            <h2 className="text-4xl font-bold text-gradient">Interested in working together?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-scale-in gradient-animated"></div>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let's connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-bounce-in" style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              className="gap-2 hover-lift animate-glow"
              onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 hover-lift"
              onClick={() => window.open("https://linkedin.com/in/venkatakrishnan-srinivasan", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-2 hover-lift"
            >
              <FileText className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
