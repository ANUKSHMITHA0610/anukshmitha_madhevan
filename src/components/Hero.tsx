import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/434e4952-7fa9-473f-adab-27748753048a.png';
    link.download = 'Anukshmitha_Madhevan_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content - Left Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="heading-xl leading-tight">
                Hello, I'm
                <br />
                <span className="text-primary font-extrabold">
                  Anukshmitha Madhevan
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-bold text-accent">
                Data Analyst | Data Scientist | Problem Solver
              </h2>
              
              <p className="text-professional max-w-xl lg:max-w-none">
                Turning raw data into actionable insights with machine learning and visualization.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="professional" 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="text-lg px-8"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={downloadResume}
                  className="text-lg px-8"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://github.com/ANUKSHMITHA0610" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/anukshmitha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:anukshmitha@gmail.com"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+917358336626"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-professional border-2 border-border">
                <img 
                  src={profilePhoto} 
                  alt="Anukshmitha Madhevan - Data Analyst & Data Scientist" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Professional badges */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-card font-bold">
                Data Science
              </div>
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-card font-bold">
                ML Expert
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center text-muted-foreground">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;