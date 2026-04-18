import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="contact" className="py-16 gradient-section relative overflow-hidden" ref={elementRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className={`text-4xl font-bold text-gradient transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Interested in working together?
            </h2>
            <div className={`w-20 h-1 bg-primary mx-auto rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's connect.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              onClick={() => window.open("https://www.linkedin.com/in/venkatakrishnan-srinivasan/", "_blank", "noopener,noreferrer")}
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
