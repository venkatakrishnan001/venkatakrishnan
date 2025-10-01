import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <Card className="p-8 shadow-medium">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a management student at <span className="text-foreground font-semibold">Great Lakes Institute of Management</span> with a strong foundation in marketing, strategy, and product thinking. My journey began in aeronautical engineering, where I honed analytical and technical skills. Today, I combine that precision with business acumen to solve growth challenges, design market strategies, and drive product impact. I'm curious, outcome-driven, and passionate about creating strategies that leave a measurable mark.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
