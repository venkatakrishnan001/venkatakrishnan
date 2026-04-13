import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    institution: "Great Lakes Institute of Management",
    degree: "Post Graduate Diploma in Management",
    specialization: "CGPA 3.12/4",
    period: "2024 – 2026",
  },
  {
    institution: "Madras Institute of Technology",
    degree: "B.E Aeronautical Engineering",
    specialization: "CGPA 8.48",
    period: "2019 – 2023",
  },
];

export const EducationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="education" className="py-16 relative overflow-hidden" ref={elementRef}>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`p-6 shadow-medium hover:shadow-large transition-all duration-700 hover-lift group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
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
