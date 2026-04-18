import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Wrench,
  Award,
  Languages,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Palette,
  Code,
  Award as CertIcon,
  TrendingUp as MarketingIcon,
  DollarSign,
  Globe,
  ArrowLeftRight,
  Dock,
  MouseOff,
  Presentation,
  PhoneCall,
  BriefcaseBusiness,
  BookMarked,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type SkillItem = { name: string; icon: React.ComponentType<{ className?: string }> };

const skillCategories: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}[] = [
  {
    title: "Technical Skills",
    icon: Wrench,
    skills: [
      { name: "Hubspot", icon: TrendingUp },
      { name: "Power BI", icon: BarChart3 },
      { name: "Microsoft Office", icon: FileSpreadsheet },
      { name: "SQL", icon: Database },
      { name: "SEO", icon: ArrowLeftRight },
    ],
  },
  {
    title: "Key Skills",
    icon: BarChart3,
    skills: [
      { name: "Market Research", icon: Presentation },
      { name: "Stakeholder Management", icon: PhoneCall },
      { name: "GTM Strategy", icon: BookMarked },
      { name: "B2B Marketing", icon: BriefcaseBusiness },
      { name: "Problem Solving", icon: Dock },
    ],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      { name: "NISM Mutual Funds", icon: DollarSign },
      { name: "Six Sigma (White & Yellow)", icon: CertIcon },
      { name: "Digital Marketing", icon: MarketingIcon },
      { name: "Financial Analytics", icon: BarChart3 },
      { name: "GA4", icon: MouseOff },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "English — Fluent", icon: Globe },
      { name: "Hindi — Proficient", icon: Globe },
      { name: "Tamil — Native", icon: Globe },
    ],
  },
];

export const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-16 gradient-section relative overflow-hidden" ref={elementRef}>
      <div
        className="absolute top-1/2 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Certifications
          </h2>
          <div
            className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 h-full flex flex-col shadow-medium hover:shadow-large transition-all duration-700 hover-lift group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm font-medium gap-1.5 bg-secondary/60 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          <SkillIcon className="h-3.5 w-3.5" />
                          {skill.name}
                        </Badge>
                      );
                    })}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
