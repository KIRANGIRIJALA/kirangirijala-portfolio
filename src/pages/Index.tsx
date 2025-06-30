
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, ArrowDown, ArrowRight } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'], level: 85 },
    { category: 'Backend', items: ['Python', 'Java', 'R language'], level: 90 },
    { category: 'Database', items: ['MySQL', 'PHP'], level: 80 },
    { category: 'Tools & IDEs', items: ['Jupyter', 'VS Code', 'Tableau', 'Android Studio', 'Unity', 'IntelliJ'], level: 88 }
  ];

  const projects = [
    {
      title: 'AI Fitness Pose Tracker & Push-Up Counter',
      description: 'Built a real-time fitness monitoring system that uses a webcam to detect human body posture and track push-up repetitions using pose estimation.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      highlights: ['Landmark detection via MediaPipe', 'Joint angle calculations for form feedback', 'Live visual feedback overlays on video']
    },
    {
      title: 'M.O.T Chatbot - Android App',
      description: 'AI-powered chatbot built using Hugging Face + Android Studio',
      tech: ['Python', 'Gradio', 'Java', 'HTML', 'Android Studio'],
      highlights: ['Natural Language Processing', 'Android Development', 'API Integration']
    },
    {
      title: 'Stock Price Prediction using LSTM Neural Networks',
      description: 'Used yFinance data, TensorFlow, LSTM, visualizations with Matplotlib',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Matplotlib', 'yFinance'],
      highlights: ['Deep Learning', 'Data Preprocessing', 'Time Series Forecasting']
    }
  ];

  const experiences = [
    {
      title: 'Technical Consulting Job Simulation',
      company: 'SAP USA',
      description: 'Simulated business advising, data sourcing, client recommendations',
      period: '2023'
    },
    {
      title: 'Logistics Executive Assistant',
      company: 'SAAM Exports & Imports',
      description: 'Streamlined logistics and supply chain operations',
      period: '2023'
    },
    {
      title: 'Data Analysis Intern',
      company: 'R.K. Metal Works',
      description: 'Data-driven improvements to metal manufacturing and scrap usage',
      period: '2022'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-cyber-grid bg-grid pointer-events-none opacity-30" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-poppins font-bold text-xl gradient-text">
              Kiran Saikumar
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-neon-blue'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-blue via-neon-teal to-neon-green p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">KS</span>
              </div>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6">
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-neon-blue via-neon-teal to-neon-green bg-300% bg-clip-text">
                Girijala Kiran Saikumar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              AI Enthusiast & Developer
            </p>
            
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Building AI-driven solutions for a smarter tomorrow. MCA graduate with a focus on Artificial Intelligence, 
              aiming to contribute to impactful ML/AI projects in a tech-driven organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="cyber-border bg-transparent hover:bg-neon-blue/10 text-neon-blue border-neon-blue px-8 py-3 text-lg"
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-gray-600 hover:border-neon-teal hover:text-neon-teal px-8 py-3 text-lg"
              >
                Contact Me <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl mb-12 text-center gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate MCA graduate specializing in Artificial Intelligence and Machine Learning. 
                My journey in tech is driven by curiosity and the desire to create innovative solutions 
                that can make a real impact on how we interact with technology.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With hands-on experience in developing AI applications, data analysis, and full-stack development, 
                I bring a comprehensive approach to problem-solving in the tech space.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="glass-effect p-6">
                <h3 className="font-poppins font-semibold text-xl mb-4 text-neon-teal">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">Master of Computer Applications (MCA)</h4>
                    <p className="text-gray-400">Jain University</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Bachelor of Science (B.Sc)</h4>
                    <p className="text-gray-400">Andhra Loyola College</p>
                    <p className="text-sm text-neon-blue">75% Grade</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Intermediate (MPC)</h4>
                    <p className="text-gray-400">S.C.I.M.GOVT.JR COLLEGE</p>
                    <p className="text-sm text-neon-blue">63% Grade</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">10th SSC</h4>
                    <p className="text-gray-400">Z.P.H.BOYS HIGH SCHOOL</p>
                    <p className="text-sm text-neon-blue">95% Grade</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl mb-12 text-center gradient-text">
            Internships & Practical Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-effect p-6 hover:border-neon-blue/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-white mb-1">{exp.title}</h3>
                    <p className="text-neon-teal font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-neon-blue text-neon-blue mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl mb-12 text-center gradient-text">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="glass-effect p-6">
                <h3 className="font-poppins font-semibold text-xl mb-4 text-neon-teal">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="bg-dark-700 text-gray-300">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-neon-blue to-neon-teal h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficiency</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl mb-12 text-center gradient-text">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect p-6 hover:border-neon-teal/50 transition-all duration-300 group">
                <h3 className="font-poppins font-semibold text-xl mb-3 text-white group-hover:text-neon-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neon-blue mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neon-green mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-neon-green" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl mb-12 text-center gradient-text">Contact Me</h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-fade-in">
              <h3 className="font-poppins font-semibold text-2xl mb-6 text-neon-teal">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:kirangirijala888@gmail.com"
                  className="flex items-center justify-center text-gray-300 hover:text-neon-blue transition-colors text-lg"
                >
                  <Mail className="h-6 w-6 mr-3" />
                  kirangirijala888@gmail.com
                </a>
                <a 
                  href="tel:+916303278776"
                  className="flex items-center justify-center text-gray-300 hover:text-neon-teal transition-colors text-lg"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  +91 6303278776
                </a>
                <a 
                  href="https://www.linkedin.com/in/kiran-girijala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-300 hover:text-neon-green transition-colors text-lg"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Girijala Kiran Saikumar. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
