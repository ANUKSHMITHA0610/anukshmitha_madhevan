import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Wrench, 
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Libraries",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "NumPy", level: 88 },
        { name: "Pandas", level: 92 },
        { name: "Scikit-learn", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 82 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Deep Learning", level: 75 },
        { name: "CNN", level: 80 },
        { name: "AI Tools", level: 78 },
        { name: "Prompt Engineering", level: 85 }
      ]
    },
    {
      title: "Data Handling",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Data Cleaning", level: 92 },
        { name: "Data Wrangling", level: 90 },
        { name: "Preprocessing", level: 88 },
        { name: "EDA", level: 95 },
        { name: "Visualization", level: 90 },
        { name: "Statistics", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Excel", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "Streamlit", level: 90 },
        { name: "Selenium", level: 70 }
      ]
    }
  ];

  const softSkills = [
    "Communication",
    "Problem-Solving", 
    "Critical Thinking",
    "Team Collaboration",
    "Analytical Thinking",
    "Attention to Detail",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 gradient-card shadow-card professional-hover">
              <div className="flex items-center mb-6">
                <div className="gradient-primary rounded-lg p-3 mr-4 text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-bold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="p-8 gradient-card shadow-card text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="gradient-primary rounded-lg p-3 mr-4 text-primary-foreground">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="heading-md">Soft Skills</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 professional-hover font-semibold"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center gradient-card shadow-card professional-hover">
            <div className="gradient-primary rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <Code className="h-8 w-8" />
            </div>
            <h4 className="font-bold mb-2">Programming</h4>
            <p className="text-sm text-muted-foreground">Python, SQL & Data Libraries</p>
          </Card>
          
          <Card className="p-6 text-center gradient-card shadow-card professional-hover">
            <div className="gradient-primary rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h4 className="font-bold mb-2">Visualization</h4>
            <p className="text-sm text-muted-foreground">Power BI, Tableau & Charts</p>
          </Card>
          
          <Card className="p-6 text-center gradient-card shadow-card professional-hover">
            <div className="gradient-primary rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
              <Brain className="h-8 w-8" />
            </div>
            <h4 className="font-bold mb-2">Machine Learning</h4>
            <p className="text-sm text-muted-foreground">ML Models & Deep Learning</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;