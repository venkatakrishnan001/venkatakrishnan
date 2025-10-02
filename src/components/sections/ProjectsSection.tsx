import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Consulting Project: TVS Southern Roadways",
    description: "Diagnosing stagnation and designing growth strategies through stakeholder research.",
    tags: ["Consulting", "Strategy", "Market Research"],
    category: "Business Strategy",
  },
  {
    title: "AI in Marketing: Fuzzy Logic Study",
    description: "Researched AI adoption across industries, mapping personalization and automation trends.",
    tags: ["AI", "Marketing", "Research"],
    category: "Marketing Analytics",
  },
  {
    title: "Rural Market Entry Strategy",
    description: "Designed go-to-market plan for Exo Herbal Bar with pricing, channel strategy, and competitive benchmarking.",
    tags: ["GTM Strategy", "Rural Market", "Product Launch"],
    category: "Product Management",
  },
  {
    title: "FMCG Financial Analysis",
    description: "Compared GCPL, Emami, and Dabur to uncover five-year trends in profitability and growth.",
    tags: ["Finance", "FMCG", "Analysis"],
    category: "Financial Analysis",
  },
  {
    title: "Scramjet Engine Design",
    description: "Computational analysis of scramjet inlets for high-speed propulsion systems.",
    tags: ["Aeronautics", "CFD", "Research"],
    category: "Aeronautical Engineering",
  },
  {
    title: "Trainer Aircraft Design",
    description: "Complete design and analysis of a training aircraft meeting regulatory standards.",
    tags: ["Aircraft Design", "Engineering", "CAD"],
    category: "Aeronautical Engineering",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-medium hover:shadow-large transition-smooth hover-scale cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
