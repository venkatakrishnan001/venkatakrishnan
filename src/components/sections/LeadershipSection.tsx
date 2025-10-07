import { Card } from "@/components/ui/card";
import { Trophy, Users, Music } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Users,
    title: "Product Management Club",
    description: "Core Committee – Organized Great Lakes' first national-level product conclave with 60+ colleges.",
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

export const LeadershipSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
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

          <Card className={`mt-12 p-8 shadow-medium bg-accent/30 hover-lift group relative overflow-hidden transition-all duration-700 hover:shadow-large ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-gradient transition-all duration-300">Notable Achievement</h3>
              <p className="text-center text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Presented research on <span className="text-gradient font-semibold">Scramjet Engine Design</span> at an{" "}
                <span className="text-gradient font-semibold">International Aeronautical Conference</span> (2024)
              </p>
              
              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out mt-0 group-hover:mt-6">
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-center text-base text-foreground font-medium">
                    <span className="text-gradient font-semibold">Full Title:</span> Computational Analysis of Inlet-Isolator for Dual Mode Scram-jet Engine
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    International Conference on Recent Aeronautical And Aerospace Technologies, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};
