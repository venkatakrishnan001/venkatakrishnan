import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Wrench, Award, Languages, TrendingUp, Database, FileSpreadsheet, Cpu, Box, Palette, Code, BoxSelect, Award as CertIcon, TrendingUp as MarketingIcon, DollarSign, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Business & Marketing Tools",
    icon: BarChart3,
    skills: [
      { name: "Hubspot", icon: TrendingUp, level: 85 },
      { name: "Power BI", icon: BarChart3, level: 80 },
      { name: "Excel", icon: FileSpreadsheet, level: 90 },
      { name: "SQL", icon: Database, level: 75 },
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
      { name: "Fusion 360", icon: BoxSelect, level: 82 },
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
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible) {
      const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
      const values = new Array(totalSkills).fill(0);
      setAnimatedValues(values);

      // Animate progress bars
      setTimeout(() => {
        let skillIndex = 0;
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            setTimeout(() => {
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[skillIndex] = skill.level;
                return newValues;
              });
            }, skillIndex * 100);
            skillIndex++;
          });
        });
      }, 300);
    }
  }, [isVisible]);

  let globalSkillIndex = 0;

  return (
    <section id="skills" ref={ref} className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            Skills & Certifications
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={categoryIndex} 
                  className={`p-6 shadow-medium hover:shadow-large transition-all duration-700 hover-lift group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
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
                      const currentGlobalIndex = globalSkillIndex++;
                      return (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground font-semibold">
                              {animatedValues[currentGlobalIndex] || 0}%
                            </span>
                          </div>
                          <Progress 
                            value={animatedValues[currentGlobalIndex] || 0} 
                            className="h-2 transition-all duration-1000"
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
