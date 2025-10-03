import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Consulting Project: TVS Southern Roadways",
    description: "Diagnosing stagnation and designing growth strategies through stakeholder research.",
    summary: "Conducted comprehensive stakeholder interviews and market analysis to identify growth barriers. Developed actionable strategic recommendations including digital transformation initiatives, operational efficiency improvements, and market expansion opportunities. Delivered insights that directly informed management decisions.",
    tags: ["Consulting", "Strategy", "Market Research"],
    category: "Business Strategy",
    skills: ["Stakeholder Research", "SWOT Analysis", "Strategic Planning", "Business Development", "Competitive Analysis"],
  },
  {
    title: "AI in Marketing: Fuzzy Logic Study",
    description: "Researched AI adoption across industries, mapping personalization and automation trends.",
    summary: "Analyzed AI implementation patterns across multiple industries with focus on marketing automation and personalization. Mapped emerging trends in customer segmentation, predictive analytics, and campaign optimization. Synthesized findings into actionable framework for AI adoption in marketing functions.",
    tags: ["AI", "Marketing", "Research"],
    category: "Marketing Analytics",
    skills: ["Market Research", "Data Analysis", "AI/ML Concepts", "Trend Analysis", "Report Writing"],
  },
  {
    title: "Rural Market Entry Strategy",
    description: "Designed go-to-market plan for Exo Herbal Bar with pricing, channel strategy, and competitive benchmarking.",
    summary: "Developed comprehensive rural market entry strategy including pricing tiers aligned with local purchasing power, distribution channel partnerships with rural retailers, and competitive positioning. Created detailed implementation roadmap with milestones, budget allocation, and success metrics tailored for rural market dynamics.",
    tags: ["GTM Strategy", "Rural Market", "Product Launch"],
    category: "Product Management",
    skills: ["Go-to-Market Strategy", "Pricing Strategy", "Channel Management", "Market Segmentation", "Competitive Analysis"],
  },
  {
    title: "FMCG Financial Analysis",
    description: "Compared GCPL, Emami, and Dabur to uncover five-year trends in profitability and growth.",
    summary: "Performed in-depth financial ratio analysis and trend evaluation across three major FMCG companies over five years. Examined profitability metrics, growth trajectories, working capital efficiency, and market positioning. Generated insights on industry dynamics, competitive advantages, and investment opportunities.",
    tags: ["Finance", "FMCG", "Analysis"],
    category: "Financial Analysis",
    skills: ["Financial Modeling", "Ratio Analysis", "Excel", "Industry Analysis", "Data Visualization"],
  },
  {
    title: "Scramjet Engine Design",
    description: "Computational analysis of scramjet inlets for high-speed propulsion systems.",
    summary: "Conducted advanced CFD simulations to optimize scramjet inlet geometry for hypersonic flight conditions. Analyzed shock wave patterns, pressure distributions, and combustion efficiency. Contributed to research presented at international aeronautical conference, advancing understanding of high-speed propulsion systems.",
    tags: ["Aeronautics", "CFD", "Research"],
    category: "Aeronautical Engineering",
    skills: ["ANSYS", "CFD Analysis", "Aerodynamics", "Technical Research", "Scientific Writing"],
  },
  {
    title: "Trainer Aircraft Design",
    description: "Complete design and analysis of a training aircraft meeting regulatory standards.",
    summary: "Led complete aircraft design cycle from conceptual design through detailed engineering. Performed structural analysis, performance calculations, stability and control assessments. Ensured compliance with regulatory standards for trainer aircraft. Created detailed CAD models and technical documentation.",
    tags: ["Aircraft Design", "Engineering", "CAD"],
    category: "Aeronautical Engineering",
    skills: ["Catia", "Aircraft Design", "Structural Analysis", "CAD Modeling", "Regulatory Compliance"],
  },
];

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full animate-scale-in"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="relative p-6 shadow-medium hover:shadow-large transition-all duration-500 cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Default view */}
                <div 
                  className={`space-y-4 transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
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

                {/* Expanded view on hover */}
                <div 
                  className={`absolute inset-0 p-6 bg-card transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="h-full overflow-y-auto space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-primary leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.summary}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs py-0.5 px-2 bg-primary/5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
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
