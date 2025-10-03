import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Wrench, Award, Languages, TrendingUp, Database, FileSpreadsheet, Cpu, Box, Palette, Code, BoxSelect, Award as CertIcon, TrendingUp as MarketingIcon, DollarSign, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Business & Marketing Tools",
    icon: BarChart3,
    skills: [
      { name: "Hubspot", icon: TrendingUp },
      { name: "Power BI", icon: BarChart3 },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Technical Tools",
    icon: Wrench,
    skills: [
      { name: "ANSYS", icon: Cpu },
      { name: "Catia", icon: Box },
      { name: "Blender", icon: Palette },
      { name: "Python", icon: Code },
      { name: "Fusion 360", icon: BoxSelect },
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
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "English", icon: Globe },
      { name: "Hindi", icon: Globe },
      { name: "Tamil", icon: Globe },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-medium hover:shadow-large transition-smooth hover-scale animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-sm flex items-center gap-1.5 py-1.5 px-3 hover-scale cursor-default"
                          style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
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
