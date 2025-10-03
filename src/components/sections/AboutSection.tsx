import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-down">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in"></div>
          
          <Card className="p-8 shadow-medium hover:shadow-large transition-smooth animate-bounce-in group hover-lift" style={{ animationDelay: '200ms' }}>
            <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
              I'm a management student at <span className="text-gradient font-semibold">Great Lakes Institute of Management</span> with a strong foundation in marketing, strategy, and product thinking. My journey began in aeronautical engineering, where I honed analytical and technical skills. Today, I combine that precision with business acumen to solve growth challenges, design market strategies, and drive product impact. I'm curious, outcome-driven, and passionate about creating strategies that leave a measurable mark.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
