import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import plantDiseaseImg from "@/assets/project-plant-disease.jpg";
import carPriceImg from "@/assets/project-car-price.jpg";
import dataSparkImg from "@/assets/project-dataspark.jpg";
import microsoftCyberImg from "@/assets/project-microsoft-cyber.jpg";
import dominosSalesImg from "@/assets/project-dominos-sales.jpg";
import redBusImg from "@/assets/project-redbus-scraping.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Detection from Images",
      description: "CNN-based system using VGG16, DenseNet, and AlexNet for plant disease identification with 95% accuracy. Deployed on Streamlit for real-time predictions.",
      image: plantDiseaseImg,
      technologies: ["Python", "CNN", "VGG16", "DenseNet", "AlexNet", "Streamlit", "Deep Learning"],
      features: [
        "95% accuracy in disease detection",
        "Multiple CNN architectures comparison",
        "Real-time image classification",
        "Streamlit web deployment"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Car Dheko: Used Car Price Prediction",
      description: "Regression models for predicting used car prices with optimized RMSE by 12%. Features comprehensive EDA and interactive Streamlit interface.",
      image: carPriceImg,
      technologies: ["Python", "Regression", "EDA", "Streamlit", "Pandas", "Scikit-learn"],
      features: [
        "12% RMSE optimization",
        "Advanced feature engineering",
        "Multiple regression algorithms",
        "Interactive price calculator"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Data Science"
    },
    {
      title: "DataSpark: Global Electronics Insights",
      description: "Comprehensive Power BI dashboard for global electronics analysis with KPI visualization and business intelligence insights.",
      image: dataSparkImg,
      technologies: ["Power BI", "SQL", "Data Analysis", "Business Intelligence", "KPI"],
      features: [
        "Interactive Power BI dashboards",
        "Global sales analytics",
        "KPI performance tracking",
        "Business intelligence insights"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Business Intelligence"
    },
    {
      title: "Microsoft: Cybersecurity Incident Classification",
      description: "ML models for classifying cybersecurity incidents with advanced feature engineering and imbalanced data handling techniques.",
      image: microsoftCyberImg,
      technologies: ["Python", "Machine Learning", "Feature Engineering", "Classification", "Security"],
      features: [
        "Advanced feature engineering",
        "Imbalanced data handling",
        "Security incident classification",
        "Model performance optimization"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Cybersecurity"
    },
    {
      title: "Domino's Sales Prediction",
      description: "Forecasting pizza sales for inventory optimization using time series analysis and predictive modeling.",
      image: dominosSalesImg,
      technologies: ["Python", "Time Series", "Forecasting", "Sales Analytics", "Optimization"],
      features: [
        "Sales forecasting model",
        "Inventory optimization",
        "Time series analysis",
        "Business impact assessment"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Forecasting"
    },
    {
      title: "RedBus Data Scraping & Analysis",
      description: "Web scraping RedBus data with Selenium and creating Streamlit visualization for travel insights and route analysis.",
      image: redBusImg,
      technologies: ["Python", "Selenium", "Web Scraping", "Streamlit", "Data Analysis"],
      features: [
        "Automated data scraping",
        "Travel route analysis",
        "Interactive visualizations",
        "Real-time data updates"
      ],
      github: "https://github.com/ANUKSHMITHA0610",
      demo: "#",
      category: "Web Scraping"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "Business Intelligence", "Cybersecurity", "Forecasting", "Web Scraping"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications of data science, machine learning, and analytics
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-primary">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full gradient-primary flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Project Preview</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/20 text-white border-white/20">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="professional" size="lg" asChild>
            <a href="https://github.com/ANUKSHMITHA0610" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;