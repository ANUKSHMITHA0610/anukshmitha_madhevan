import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail, Phone, Sparkles, Code2, BarChart3 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern Background with Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-glow rounded-full blur-3xl opacity-30 floating-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-glow rounded-full blur-3xl opacity-20 floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Content - Left Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-modern text-white/90 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Available for New Opportunities
            </div>

            <div className="space-y-6">
              <h1 className="heading-hero">
                <span className="block text-white/90 mb-2">Hello, I'm</span>
                <span className="gradient-text font-extrabold">
                  Anukshmitha Madhevan
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-teal-300 font-bold text-xl lg:text-2xl">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  Data Analyst
                </div>
                <span className="text-white/60">|</span>
                <div className="flex items-center gap-2">
                  <Code2 className="h-6 w-6" />
                  Data Scientist
                </div>
                <span className="text-white/60">|</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  Problem Solver
                </div>
              </div>
              
              <p className="text-hero text-white/80">
                Transforming complex datasets into strategic insights through advanced machine learning, 
                statistical modeling, and interactive visualizations that drive business decisions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6+</div>
                  <div className="text-sm text-white/70">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8.96</div>
                  <div className="text-sm text-white/70">CGPA</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="professional" 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="text-lg px-8 py-6 modern-hover shadow-glow"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 glass-modern text-white border-white/30 hover:bg-white/10 transition-spring"
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
                  className="p-4 rounded-xl glass-modern text-white/80 hover:text-white hover:scale-110 transition-spring modern-hover"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/anukshmitha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-modern text-white/80 hover:text-white hover:scale-110 transition-spring modern-hover"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:anukshmitha@gmail.com"
                  className="p-4 rounded-xl glass-modern text-white/80 hover:text-white hover:scale-110 transition-spring modern-hover"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href="tel:+917358336626"
                  className="p-4 rounded-xl glass-modern text-white/80 hover:text-white hover:scale-110 transition-spring modern-hover"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
                <div className="w-full h-full rounded-full overflow-hidden shadow-profile border-4 border-white/20 backdrop-blur-sm modern-hover">
                  <img 
                    src={profilePhoto} 
                    alt="Anukshmitha Madhevan - Data Analyst & Data Scientist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full ring-4 ring-teal-400/30 pulse-glow"></div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-6 -right-6 glass-modern px-6 py-3 rounded-2xl text-white font-bold text-lg shadow-glow floating-element border border-white/20">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-teal-300" />
                  Data Science
                </div>
              </div>
              <div className="absolute -top-6 -left-6 glass-modern px-6 py-3 rounded-2xl text-white font-bold text-lg shadow-glow floating-delayed border border-white/20">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-teal-300" />
                  ML Expert
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -right-12 top-1/4 w-16 h-16 glass-modern rounded-2xl flex items-center justify-center text-white/60 floating-element">
                <Sparkles className="h-8 w-8" />
              </div>
              <div className="absolute -left-12 bottom-1/4 w-16 h-16 glass-modern rounded-2xl flex items-center justify-center text-white/60 floating-delayed">
                <BarChart3 className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-medium mb-3">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;