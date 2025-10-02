import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Interested in working together?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Let's connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => window.open("https://linkedin.com/in/venkatakrishnan-srinivasan", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-2"
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
