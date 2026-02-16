import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            
            {/* Line 1 */}
            <span className="block text-muted-foreground animate-fade-in">
              Hi, I'm
            </span>

            {/* Line 2 */}
            <span className="block animate-fade-in-delay-1">
              <span className="text-primary text-glow">
                Mayank{" "}
              </span>

              <span className="text-foreground">
                Goley
              </span>
            </span>

          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
            I create responsive websites with AI integration and am working to
            become an AI Engineer with strong knowledge of ML, Deep Learning,
            Generative AI, and AI Agents.
          </p>

          {/* Button */}
          <div className="pt-4 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
