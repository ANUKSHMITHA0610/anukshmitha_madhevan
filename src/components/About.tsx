import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Technical Expertise",
      description: "Python, ML, Data Visualization"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Data-driven insights & solutions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communication",
      description: "Clear reporting & collaboration"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Mindset",
      description: "Continuous learning & adaptation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into meaningful insights that drive business decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-8 gradient-card shadow-card">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Detail-oriented Data Analyst and Computer Science graduate skilled in statistical modeling, 
                machine learning, and data visualization. I'm passionate about solving business problems 
                using data-driven insights and creating interactive analytical tools to aid decision-making.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a fresh graduate actively working on personal projects and seeking job opportunities, 
                I bring a unique blend of technical expertise with strong analytical and communication skills. 
                I thrive in collaborative environments where I can contribute to meaningful projects that 
                make a real impact.
              </p>
            </Card>

            {/* Key Strengths */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Strengths</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-2 px-4">Statistical Modeling</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Machine Learning</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Data Visualization</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Problem Solving</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Critical Thinking</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Team Collaboration</Badge>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 gradient-card"
              >
                <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Objective */}
        <Card className="mt-12 p-8 gradient-card shadow-card text-center">
          <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Seeking opportunities to leverage my data analysis and machine learning skills in a dynamic 
            organization where I can contribute to data-driven decision making while continuing to grow 
            professionally in the field of data science and analytics.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;