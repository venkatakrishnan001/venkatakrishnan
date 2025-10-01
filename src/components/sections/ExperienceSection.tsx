import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const mainExperience = [
  {
    title: "Retail Sales Intern",
    company: "WhiteOak Capital Asset Management",
    period: "Apr – Jun 2025",
    description: "Piloted a branch sales model across Axis Bank outlets, engaged 350+ mutual fund distributors, and boosted SIP conversions through targeted strategies.",
  },
  {
    title: "Aerodynamics Engineer",
    company: "Yottec Systems",
    period: "Dec 2023 – Apr 2024",
    description: "Optimized UAV wing designs using CFD and built a reusable framework that cut R&D timelines by 1.5 months.",
  },
  {
    title: "Associate CFD Engineer",
    company: "Hubblefly Technologies",
    period: "Sep – Dec 2023",
    description: "Drafted certification documents, tested 200+ drones, and standardized UAV assembly processes.",
  },
  {
    title: "Project Development Intern",
    company: "ACME India Medical Drones",
    period: "Mar – Apr 2023",
    description: "Led timelines, vendor coordination, and market research for medical UAV deployment.",
  },
];

const additionalExperience = [
  {
    title: "Research Intern",
    company: "DRDO",
    period: "Earlier experience",
    description: "Contributed to defense research projects.",
  },
  {
    title: "Engineering Intern",
    company: "AIROSSPACE",
    period: "Earlier experience",
    description: "Worked on aerospace engineering projects.",
  },
];

export const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="experience" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {mainExperience.map((exp, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16">
                    <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 md:hidden">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
              
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full md:ml-16">
                    {isOpen ? "Show Less" : "Show Earlier Experience"}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-8 mt-8">
                  {additionalExperience.map((exp, index) => (
                    <div key={index} className="relative">
                      <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16">
                        <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-muted border-4 border-background hidden md:block"></div>
                        
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 md:hidden">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-accent-foreground" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                            <p className="text-muted-foreground">{exp.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
