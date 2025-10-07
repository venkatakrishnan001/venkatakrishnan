import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 gradient-section relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ transform: `translateY(${scrollY * -0.08}px)`, animationDelay: '2s' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            Experience
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className="relative">
            {/* Enhanced Timeline line with gradient and animated dots */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block">
              {/* Animated pulse dot that travels down the timeline */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" 
                   style={{ 
                     animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, timelineMove 8s ease-in-out infinite',
                   }}>
              </div>
            </div>
            
            {isLoading ? (
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="md:ml-16">
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <Skeleton className="w-20 h-20 rounded-xl" />
                        <div className="flex-1 space-y-3">
                          <Skeleton className="h-6 w-48" />
                          <Skeleton className="h-5 w-64" />
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-3/4" />
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {mainExperience.map((exp, index) => (
                  <div key={index} className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                    <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16 group hover-lift border-l-4 border-l-transparent hover:border-l-primary focus-within:border-l-primary focus-within:shadow-large dark:bg-card/80 dark:backdrop-blur-sm dark:border-border/50">
                      {/* Enhanced timeline dot with pulse effect and year indicator */}
                      <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block transition-all group-hover:scale-[2.5] duration-300 shadow-glow">
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {exp.period.split(' – ')[0]}
                        </span>
                      </div>
                    
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {/* Logo container with consistent sizing and always visible in color */}
                          <div className="w-20 h-20 rounded-xl bg-background dark:bg-card/80 border-2 border-border dark:border-border/70 flex items-center justify-center p-3 transition-all duration-300 group-hover:border-primary group-hover:shadow-glow group-hover:scale-110 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 dark:brightness-110 dark:contrast-110"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 dark:text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold dark:text-primary-light">{exp.company}</p>
                          <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 mb-3 flex items-center gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            {exp.period}
                          </p>
                          <ul className="space-y-2">
                            {exp.description.map((point, i) => (
                              <li key={i} className="text-muted-foreground dark:text-muted-foreground/90 flex gap-2">
                                <span className="text-primary dark:text-primary-light mt-1.5 font-bold">•</span>
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
                  <Button 
                    variant="outline" 
                    className="w-full md:ml-16 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-border/70 dark:hover:bg-primary/10 dark:hover:border-primary/50 transition-all"
                  >
                    {isOpen ? "Show Less" : "Show Earlier Experience"}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-8 mt-8">
                  {additionalExperience.map((exp, index) => (
                    <div key={index} className="relative">
                      <Card className="p-6 shadow-medium hover:shadow-large transition-smooth md:ml-16 group hover-lift border-l-4 border-l-transparent hover:border-l-primary/50 focus-within:border-l-primary/50 focus-within:shadow-large dark:bg-card/80 dark:backdrop-blur-sm dark:border-border/50">
                        <div className="absolute left-[-1.9rem] top-8 w-4 h-4 rounded-full bg-muted dark:bg-muted/70 border-4 border-background hidden md:block transition-all group-hover:scale-[2] group-hover:bg-primary/50 duration-300">
                          <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {exp.period.split(' – ')[0]}
                          </span>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {/* Consistent logo sizing with color always visible */}
                            <div className="w-20 h-20 rounded-xl bg-background dark:bg-card/80 border-2 border-border dark:border-border/70 flex items-center justify-center p-3 transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-glow group-hover:scale-110 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 focus-within:border-primary/70 focus-within:ring-2 focus-within:ring-primary/20">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 dark:brightness-110 dark:contrast-110"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1 dark:text-foreground">{exp.title}</h3>
                            <p className="text-primary font-semibold dark:text-primary-light">{exp.company}</p>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 mb-3 flex items-center gap-2">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"></span>
                              {exp.period}
                            </p>
                            <ul className="space-y-2">
                              {exp.description.map((point, i) => (
                                <li key={i} className="text-muted-foreground dark:text-muted-foreground/90 flex gap-2">
                                  <span className="text-primary dark:text-primary-light mt-1.5 font-bold">•</span>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
