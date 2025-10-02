import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import headshot from "@/assets/headshot.jpg";
import headshot2 from "@/assets/headshot2.jpg";
import headshot3 from "@/assets/headshot3.jpg";

export const HeroSection = () => {
  const images = [headshot, headshot2, headshot3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return <section id="hero" className="min-h-screen flex items-center gradient-hero pt-20 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Venkata Krishnan S
              </h2>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-primary">
                Turning insights into growth strategies | Marketing, Product, and Business Strategy
              </h1>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="gap-2" onClick={() => window.location.href = "mailto:venkatakrishnanone@gmail.com"}>
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open("https://linkedin.com/in/venkatakrishnan-srinivasan", "_blank")}>
                LinkedIn
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Photo Column */}
          <div className="flex justify-center md:justify-end animate-fade-in order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large border-4 border-background">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Venkata Krishnan S - Professional Photo ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              {/* Carousel indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};