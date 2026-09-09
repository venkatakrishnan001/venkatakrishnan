import { Card } from "@/components/ui/card";
import { Trophy, Users, Music, Award, Medal } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Users,
    title: "Product Management Club",
    description: "Core Committee – Organized Great Lakes' first and second national-level product conclave with 60+ colleges.",
  },
  {
    icon: Users,
    title: "Aeronautical Association of Engineers",
    description: "Led symposiums and events, fostering technical knowledge sharing.",
  },
  {
    icon: Trophy,
    title: "NCC & Sports",
    description: "NCC 'A' Certificate holder and competitive sports enthusiast.",
  },
  {
    icon: Music,
    title: "Cultural Excellence",
    description: "Trained Mirudangam performer, blending technical and artistic pursuits.",
  },
];

const notableAchievements = [
  {
    icon: Award,
    title: "Committee Excellence Award",
    description: "Product Management Club – Recognized for outstanding contribution and leadership.",
  },
  {
    icon: Medal,
    title: "Academic Excellence",
    description: "Term 5 – Awarded for academic performance during the MBA program.",
  },
  {
    icon: Trophy,
    title: "International Conference",
    description: "Presented Computational Analysis of Inlet-Isolator for Dual Mode Scram-jet Engine at the International Conference on Recent Aeronautical And Aerospace Technologies, 2024.",
  },
];

export const LeadershipSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="leadership" className="py-16 relative overflow-hidden" ref={elementRef}>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Leadership & Extra-Curriculars
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full gradient-animated transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`p-6 shadow-medium hover:shadow-large transition-all duration-700 hover-lift group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center transition-all group-hover:scale-125 group-hover:rotate-[360deg] duration-500 animate-glow">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all duration-300">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <h3 className={`text-2xl font-bold mt-16 mb-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Notable Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {notableAchievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 shadow-medium hover:shadow-large transition-all duration-700 hover-lift group text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:rotate-[15deg] duration-500 animate-glow">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all duration-300">{item.title}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
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
