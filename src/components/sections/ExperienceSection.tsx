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
    description: [
      "Piloted a new branch sales model with Axis Bank outlets, boosting fund recall and improving SIP conversions.",
      "Engaged 350+ mutual fund distributors across Tamil Nadu & Kerala, reactivating dormant accounts and driving distributor engagement from 62% to 100%.",
      "Delivered market insights to leadership, shaping targeted distributor outreach strategies.",
    ],
  },
  {
    title: "Aerodynamics Engineer",
    company: "Yottec Systems",
    period: "Dec 2023 – Apr 2024",
    description: [
      "Optimized UAV wing designs through CFD simulations, improving efficiency and design reliability.",
      "Built a reusable CFD framework now adopted across R&D, cutting timelines by 1.5 months.",
      "Partnered with engineers to integrate simulations into design and certification processes.",
    ],
  },
  {
    title: "Associate CFD Engineer",
    company: "Hubblefly Technologies",
    period: "Sep – Dec 2023",
    description: [
      "Drafted certification documents for DGCA/QCI compliance of UAVs.",
      "Managed production and testing of 200+ agricultural drones, enabling rural applications in spraying and mapping.",
      "Standardized UAV documentation, improving build accuracy and process efficiency.",
    ],
  },
  {
    title: "Project Development Intern",
    company: "ACME India Medical Drones",
    period: "Mar – Apr 2023",
    description: [
      "Coordinated medical UAV projects, ensuring on-time delivery within budget.",
      "Conducted market research and managed vendor relationships to optimize costs.",
      "Collaborated with design teams, suggesting improvements that enhanced UAV functionality.",
    ],
  },
];

const additionalExperience = [
  {
    title: "CFD Intern",
    company: "CVRDE, DRDO",
    period: "Jul – Aug 2022",
    description: [
      "Performed CFD analysis using ANSYS Fluent on internal flow of wavy fins and external flow of landing gears.",
      "Supported simulations that improved aerodynamic designs for defense applications.",
    ],
  },
  {
    title: "Design Intern",
    company: "AIROSSPACE R&D Pvt. Ltd.",
    period: "Jun – Dec 2022",
    description: [
      "Designed UAV components and created 3D animations using Blender.",
      "Compiled operator & maintenance manuals with LaTeX formatting.",
      "Supported marketing team with technical visuals for faster client presentations.",
    ],
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
