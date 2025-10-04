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
import whiteoakLogo from "@/assets/whiteoak-logo.png";
import hubbbleflyLogo from "@/assets/hubblefly-logo.png";
import yottecLogo from "@/assets/yottec-logo.png";
import drdoLogo from "@/assets/drdo-logo.png";
import acmeLogo from "@/assets/company-logo-5.png";
import airosLogo from "@/assets/airos-logo.png";

const mainExperience = [
  {
    title: "Retail Sales Intern",
    company: "WhiteOak Capital Asset Management",
    period: "Apr – Jun 2025",
    logo: whiteoakLogo,
    description: [
      "Piloted branch sales model with Axis Bank, boosting SIP conversions",
      "Engaged 350+ distributors across TN & Kerala, driving 100% engagement (from 62%)",
      "Shared field insights that shaped targeted outreach strategies",
    ],
  },
  {
    title: "Aerodynamics Engineer",
    company: "Yottec Systems",
    period: "Dec 2023 – Apr 2024",
    logo: yottecLogo,
    description: [
      "Optimized UAV wing designs using CFD, improving efficiency",
      "Built reusable CFD framework cutting R&D time by 1.5 months",
      "Integrated simulations into design and certification workflows",
    ],
  },
  {
    title: "Associate CFD Engineer",
    company: "Hubblefly Technologies",
    period: "Sep – Dec 2023",
    logo: hubbbleflyLogo,
    description: [
      "Drafted certification documents for DGCA/QCI compliance",
      "Managed testing of 200+ drones for rural spraying and mapping",
      "Standardized UAV assembly documentation to reduce build errors",
    ],
  },
];

const additionalExperience = [
  {
    title: "Project Development Intern",
    company: "ACME India Medical Drones",
    period: "Mar – Apr 2023",
    logo: acmeLogo,
    description: [
      "Coordinated medical UAV projects with on-time, in-budget delivery",
      "Conducted market research and managed supplier relationships",
      "Suggested design improvements that enhanced UAV usability",
    ],
  },
  {
    title: "CFD Intern",
    company: "CVRDE, DRDO",
    period: "Jul – Aug 2022",
    logo: drdoLogo,
    description: [
      "Performed CFD analysis of internal flow (wavy fin) and external landing gear",
      "Supported simulations for improved defense aero designs",
    ],
  },
  {
    title: "Design Intern",
    company: "AIROSSPACE R&D Pvt. Ltd.",
    period: "Jun – Dec 2022",
    logo: airosLogo,
    description: [
      "Designed UAV components and animations using Blender",
      "Created operator & maintenance manuals with LaTeX",
      "Supported marketing with visuals for client presentations",
    ],
  },
];

export const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="experience" className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-down">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in gradient-animated"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {mainExperience.map((exp, index) => (
                <div key={index} className="relative animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16 group hover-lift">
                    <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block transition-all group-hover:scale-[2] duration-300 animate-glow"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-background border-2 border-border flex items-center justify-center p-2 transition-all duration-300 group-hover:border-primary group-hover:shadow-glow group-hover:scale-110">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <ul className="space-y-2">
                          {exp.description.map((point, i) => (
                            <li key={i} className="text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
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
                      <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16 group hover-lift">
                        <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-muted border-4 border-background hidden md:block transition-all group-hover:scale-150 duration-300"></div>
                        
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg bg-background border-2 border-border flex items-center justify-center p-2 transition-all duration-300 group-hover:border-primary group-hover:shadow-glow group-hover:scale-110">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                            <ul className="space-y-2">
                              {exp.description.map((point, i) => (
                                <li key={i} className="text-muted-foreground flex gap-2">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
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
