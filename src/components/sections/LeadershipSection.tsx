import { Card } from "@/components/ui/card";
import { Trophy, Users, Music } from "lucide-react";

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
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Leadership & Extra-Curriculars</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-medium hover:shadow-large transition-smooth hover-scale animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 p-8 shadow-medium bg-accent/30 animate-fade-in hover-scale group" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">Notable Achievement</h3>
            <p className="text-center text-lg text-muted-foreground">
              Presented research on <span className="text-foreground font-semibold">Scramjet Engine Design</span> at an{" "}
              <span className="text-foreground font-semibold">International Aeronautical Conference</span> (2024)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
