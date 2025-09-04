import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "IIT-M GUVI",
      degree: "Advanced Programming Professional & Master Data Science",
      duration: "May 2024 – Oct 2024",
      location: "Online",
      description: "Comprehensive data science program covering advanced analytics, machine learning, and professional development.",
      highlights: [
        "Advanced Machine Learning",
        "Data Analytics & Visualization",
        "Professional Programming",
        "Industry Projects"
      ],
      type: "certification"
    },
    {
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech Computer Science and Engineering",
      duration: "July 2019 – July 2023",
      location: "Chennai, India",
      cgpa: "8.96",
      description: "Strong foundation in computer science fundamentals with specialization in data structures, algorithms, and software engineering.",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Technologies"
      ],
      type: "degree"
    }
  ];

  const certifications = [
    "Data Science Professional Certificate - IIT-M GUVI",
    "Advanced Programming - IIT-M GUVI",
    "Machine Learning Specialization",
    "Python for Data Science"
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning in data science and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 ml-20">
              {/* Timeline dot */}
              <div className="absolute -left-14 top-6 w-6 h-6 gradient-primary rounded-full border-4 border-background shadow-elegant"></div>
              
              <Card className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-6 w-6 text-primary mr-3" />
                        <Badge variant={edu.type === 'degree' ? 'default' : 'secondary'}>
                          {edu.type === 'degree' ? 'Degree' : 'Certification'}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">{edu.degree}</h4>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div className="flex items-center lg:justify-end text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center lg:justify-end text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center lg:justify-end">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3">Key Highlights:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <Card className="mt-16 p-8 gradient-card shadow-card text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="gradient-primary rounded-lg p-3 mr-4 text-primary-foreground">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-background/50 rounded-lg">
                <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Academic Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h4 className="font-semibold mb-2">8.96 CGPA</h4>
            <p className="text-sm text-muted-foreground">B.Tech Computer Science</p>
          </Card>
          
          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="font-semibold mb-2">IIT-M Certified</h4>
            <p className="text-sm text-muted-foreground">Advanced Data Science</p>
          </Card>
          
          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <Calendar className="h-8 w-8" />
            </div>
            <h4 className="font-semibold mb-2">2023 Graduate</h4>
            <p className="text-sm text-muted-foreground">Fresh & Motivated</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;