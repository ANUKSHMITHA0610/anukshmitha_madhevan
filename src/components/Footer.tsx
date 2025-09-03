import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="gradient-primary bg-clip-text text-transparent">
                Anukshmitha Madhevan
              </span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Analyst and Computer Science graduate passionate about transforming 
              data into actionable insights through machine learning and visualization.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ANUKSHMITHA0610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/anukshmitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:anukshmitha@gmail.com"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-4">
            <h4 className="font-semibold">Core Skills</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Python & Machine Learning</p>
              <p>• Data Analysis & Visualization</p>
              <p>• Statistical Modeling</p>
              <p>• Business Intelligence</p>
              <p>• Deep Learning & AI</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Anukshmitha Madhevan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for data science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;