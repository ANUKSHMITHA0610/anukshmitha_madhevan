import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare,
  Clock
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "anukshmitha@gmail.com",
      link: "mailto:anukshmitha@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91-7358336626",
      link: "tel:+917358336626"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "ANUKSHMITHA0610",
      link: "https://github.com/ANUKSHMITHA0610"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "anukshmitha",
      link: "https://linkedin.com/in/anukshmitha"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data science project? Let's discuss how I can help turn your data into insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="p-8 gradient-card shadow-card">
              <div className="flex items-center mb-6">
                <div className="gradient-primary rounded-lg p-3 mr-4 text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Location & Availability</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>IST (UTC+5:30) - Available for remote work</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-card shadow-card">
              <div className="flex items-center mb-6">
                <div className="gradient-accent rounded-lg p-3 mr-4 text-accent-foreground">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Core Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Data Science</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Machine Learning</li>
                    <li>• Predictive Analytics</li>
                    <li>• Data Visualization</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Technology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Python & R</li>
                    <li>• SQL & NoSQL</li>
                    <li>• Cloud Platforms</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <div className="gradient-primary rounded-lg p-3 w-fit mb-4 text-primary-foreground">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="p-6 gradient-card shadow-card">
              <div className="flex items-center mb-4">
                <div className="gradient-accent rounded-lg p-3 mr-4 text-accent-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Availability</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-sm">Available for new opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-sm">Open to freelance projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-sm">Interested in collaborations</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 gradient-card shadow-card">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="mailto:anukshmitha@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://linkedin.com/in/anukshmitha" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://github.com/ANUKSHMITHA0610" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Response Time Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            I typically respond within <span className="font-semibold text-primary">24 hours</span>. 
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;