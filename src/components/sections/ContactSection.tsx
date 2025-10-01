import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Download, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <Card className="p-8 shadow-large text-center">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about business strategy and product management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gap-2 w-full sm:w-auto"
                onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}
              >
                <Mail className="h-5 w-5" />
                Email Me
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 w-full sm:w-auto"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 w-full sm:w-auto"
              >
                <Download className="h-5 w-5" />
                Resume
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> venkatakrishnanone@gmail.com
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
