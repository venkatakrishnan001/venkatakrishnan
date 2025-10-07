import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="about" ref={ref} className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mb-12 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <Card className={`p-8 shadow-medium hover:shadow-large transition-all duration-700 delay-200 group hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
              I'm a management student at <span className="text-gradient font-semibold">Great Lakes Institute of Management</span> with a strong foundation in marketing, strategy, and product thinking. My journey began in aeronautical engineering, where I honed analytical and technical skills. Today, I combine that precision with business acumen to solve growth challenges, design market strategies, and drive product impact. I'm curious, outcome-driven, and passionate about creating strategies that leave a measurable mark.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
