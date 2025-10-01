import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Wrench, Award, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Business Tools",
    icon: BarChart3,
    skills: ["Hubspot", "Power BI", "Excel", "SQL"],
  },
  {
    title: "Technical Tools",
    icon: Wrench,
    skills: ["ANSYS", "Catia", "Blender", "Python", "Fusion 360"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      "NISM Mutual Funds",
      "Six Sigma (White & Yellow)",
      "Digital Marketing",
      "Financial Analytics",
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["English", "Hindi", "Tamil"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6 shadow-medium hover:shadow-large transition-smooth">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
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
