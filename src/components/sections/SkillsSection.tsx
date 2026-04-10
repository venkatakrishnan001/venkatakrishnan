import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Wrench, Award, Languages, TrendingUp, Database, FileSpreadsheet, Cpu, Box, Palette, Code, BoxSelect, Award as CertIcon, TrendingUp as MarketingIcon, DollarSign, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Business & Marketing Tools",
    icon: BarChart3,
    skills: [
      { name: "Hubspot", icon: TrendingUp, level: 85 },
      { name: "Power BI", icon: BarChart3, level: 80 },
      { name: "Excel", icon: FileSpreadsheet, level: 90 },
      { name: "SQL", icon: Database, level: 75 },
      { name: "SEO", icon: TrendingUp, level: 80 },
    ],
  },
  {
    title: "Technical Tools",
    icon: Wrench,
    skills: [
      { name: "ANSYS", icon: Cpu, level: 85 },
      { name: "Catia", icon: Box, level: 80 },
      { name: "Blender", icon: Palette, level: 70 },
      { name: "Python", icon: Code, level: 75 },
      { name: "LaTeX", icon: Code, level: 80 },
    ],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      { name: "NISM Mutual Funds", icon: DollarSign, level: 100 },
      { name: "Six Sigma (White & Yellow)", icon: CertIcon, level: 100 },
      { name: "Digital Marketing", icon: MarketingIcon, level: 100 },
      { name: "Financial Analytics", icon: BarChart3, level: 100 },
      { name: "GA4", icon: TrendingUp, level: 100 },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "English", icon: Globe, level: 95 },
      { name: "Hindi", icon: Globe, level: 90 },
      { name: "Tamil", icon: Globe, level: 85 },
    ],
  },
];

export const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const values: { [key: string]: number } = {};
        skillCategories.forEach((category, catIndex) => {
          category.skills.forEach((skill, skillIndex) => {
            values[`${catIndex}-${skillIndex}`] = skill.level;
          });
        });
        setAnimatedValues(values);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-24 gradient-section relative overflow-hidden" ref={elementRef}>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills & Certifications
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className={`p-6 shadow-medium hover:shadow-large transition-all duration-700 hover-lift group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-all group-hover:rotate-[360deg] group-hover:scale-125 duration-500 animate-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      const key = `${index}-${skillIndex}`;
                      const progressValue = animatedValues[key] || 0;
                      return (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={progressValue} 
                            className="h-2"
                          />
                        </div>
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
