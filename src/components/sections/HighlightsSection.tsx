import { TrendingUp, Clock, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, suffix = "", gradient }: { end: number; suffix?: string; gradient: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      <span className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
        {count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

const highlights = [
  {
    icon: TrendingUp,
    stat: "5,000+",
    label: "Followers",
    description: "Scaled FB marketplace venture",
    color: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    icon: Clock,
    stat: "18+",
    label: "Months",
    description: "Cumulative professional experience",
    color: "from-purple-500 to-pink-500",
    delay: "100ms"
  },
  {
    icon: Award,
    stat: "1",
    label: "International Conference",
    description: "Presented research & insights",
    color: "from-orange-500 to-red-500",
    delay: "200ms"
  },
  {
    icon: Briefcase,
    stat: "4+",
    label: "Domains",
    description: "Marketing, Consulting, Technology, BFSI",
    color: "from-green-500 to-emerald-500",
    delay: "300ms"
  }
];

export const HighlightsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-down">Key Highlights</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full animate-scale-in"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden p-6 shadow-medium hover:shadow-large transition-smooth hover-lift border-2 hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  style={{ animationDelay: highlight.delay }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-smooth`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${highlight.color} shadow-glow group-hover:scale-110 transition-smooth`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-1">
                      {highlight.label === "Followers" && (
                        <AnimatedCounter end={5000} suffix="+" gradient={highlight.color} />
                      )}
                      {highlight.label === "Months" && (
                        <AnimatedCounter end={18} suffix="+" gradient={highlight.color} />
                      )}
                      {highlight.label === "International Conference" && (
                        <div className="text-4xl font-bold">
                          <span className={`bg-gradient-to-br ${highlight.color} bg-clip-text text-transparent`}>2024</span>
                        </div>
                      )}
                      {highlight.label === "Domains" && (
                        <AnimatedCounter end={4} suffix="+" gradient={highlight.color} />
                      )}
                      <div className="text-lg font-semibold text-foreground">
                        {highlight.label}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {highlight.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
