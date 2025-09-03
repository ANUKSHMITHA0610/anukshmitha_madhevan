import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(262, 83%, 58%, 0.9), rgba(242, 83%, 68%, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation"></div>
        <div className="absolute top-40 right-20 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hello, I'm
                <br />
                <span className="gradient-accent bg-clip-text text-transparent">
                  Anukshmitha Madhevan
                </span>
              </h1>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
                Data Analyst | Data Scientist | Problem Solver
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-white/80 mb-8 max-w-lg lg:max-w-none">
                Turning raw data into actionable insights with machine learning and visualization. 
                Passionate about solving business problems using data-driven approaches.
              </p>
            </div>

            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
              <Button 
                variant="accent" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="fade-in-up flex justify-center lg:justify-start gap-4 mt-8" style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://github.com/ANUKSHMITHA0610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:shadow-glow transition-spring hover:scale-110"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/anukshmitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:shadow-glow transition-spring hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a 
                href="mailto:anukshmitha@gmail.com"
                className="p-3 rounded-full glass-card hover:shadow-glow transition-spring hover:scale-110"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
              <a 
                href="tel:+917358336626"
                className="p-3 rounded-full glass-card hover:shadow-glow transition-spring hover:scale-110"
              >
                <Phone className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="fade-in-up relative" style={{ animationDelay: '1s' }}>
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src={profilePhoto} 
                  alt="Anukshmitha Madhevan - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-accent rounded-full flex items-center justify-center floating-animation">
                <span className="text-white font-bold">ML</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 gradient-primary rounded-full flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Button variant="hero" size="lg" className="text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;