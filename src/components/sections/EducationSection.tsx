import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Great Lakes Institute of Management",
    degree: "Post Graduate Diploma in Management",
    specialization: "Marketing & Strategy",
    period: "2024 – Present",
  },
  {
    institution: "Madras Institute of Technology",
    degree: "B.E Aeronautical Engineering",
    specialization: "CGPA 8.48",
    period: "2019 – 2023",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-down">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in gradient-animated"></div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-medium hover:shadow-large transition-smooth hover-lift animate-slide-in-left group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center transition-all group-hover:scale-125 group-hover:rotate-12 duration-300 animate-glow">
                      <GraduationCap className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300">{edu.institution}</h3>
                    <p className="text-primary font-semibold">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.specialization}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
