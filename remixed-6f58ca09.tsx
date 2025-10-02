import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Database, Wrench, ChevronDown, Menu, X, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === id 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Soham Gugale</h1>
            
            <div className="hidden md:flex space-x-2">
              <NavItem id="hero" label="Home" />
              <NavItem id="about" label="About" />
              <NavItem id="education" label="Education" />
              <NavItem id="experience" label="Experience" />
              <NavItem id="projects" label="Projects" />
              <NavItem id="skills" label="Skills" />
              <NavItem id="contact" label="Contact" />
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <NavItem id="hero" label="Home" />
              <NavItem id="about" label="About" />
              <NavItem id="education" label="Education" />
              <NavItem id="experience" label="Experience" />
              <NavItem id="projects" label="Projects" />
              <NavItem id="skills" label="Skills" />
              <NavItem id="contact" label="Contact" />
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Soham Gugale
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Civil Engineering Graduate | Duke University Masters Student | Data Scientist | ML Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              A results-driven Civil Engineering graduate currently pursuing Masters in Engineering (Computational Mechanics and Scientific Computing) at Duke University. 
              Strong analytical and technical skills, proficient in data science, machine learning, and scalable system design.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:sohamgugale170@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="tel:+19196415666" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Phone size={20} />
              <span>Call</span>
            </a>
            <a href="https://github.com/sohamgugale" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Learn More</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a Civil Engineering undergraduate from IIT Bombay currently pursuing my Masters in Engineering (Computational Mechanics and Scientific Computing) at Duke University. 
                My unique combination of engineering fundamentals, data science expertise, and computational skills allows me to approach 
                complex problems with both technical rigor and analytical insight. I specialize in machine learning, scalable system design, and data-driven decision making.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Research Projects</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">ML/AI Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="text-blue-600" size={20} />
                <span>Durham, North Carolina, United States</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="text-blue-600" size={20} />
                <span>sohamgugale170@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="text-blue-600" size={20} />
                <span>+1 (919)-641-5666</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Master of Engineering in Computational Mechanics and Scientific Computing</h3>
                  <p className="text-blue-600 font-semibold text-lg">Duke University</p>
                  <p className="text-gray-600">Durham, North Carolina, United States</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Aug 2024 - May 2026</span>
                  <div className="text-lg font-bold text-blue-600 mt-2">Current Student</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced graduate program focusing on computational mechanics, scientific computing, and numerical methods. 
                Coursework includes finite element methods, computational fluid dynamics, machine learning for engineering applications, 
                and high-performance computing.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Numerical Linear Algebra', 'Finite Element Methods', 'Machine Learning'].map(course => (
                    <span key={course} className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology in Civil Engineering</h3>
                  <p className="text-blue-600 font-semibold">IIT - Indian Institute of Technology Bombay</p>
                  <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Aug 2021 - May 2025</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Completed rigorous courses in Calculus, Linear Algebra, Differential Equations, Probability and Statistics, 
                and Computer Programming. Also completed interdisciplinary courses in Economics, Sociology, Applied Geology, 
                and Electrical Engineering.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Probability and Statistics', 'Data Structures', 'Algorithms', 'Business Fundamentals for Engineering'].map(course => (
                    <span key={course} className="bg-white text-green-700 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Undergraduate Research Assistant</h3>
                  <p className="text-blue-600 font-semibold text-lg">IIT Bombay</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0">
                  Aug 2024 - May 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented high-performance backend components in C++ for low-latency inference in recommendation systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted undergraduate thesis on scalable algorithm design, documenting methodology and outcomes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Data Science Intern</h3>
                  <p className="text-green-600 font-semibold text-lg">KultureHire</p>
                  <p className="text-gray-600">Puducherry, India (Remote)</p>
                </div>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0">
                  May 2024 - Jul 2024
                </span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Created 3 Power BI dashboards (customer service, finance, orders) highlighting KPIs for business decision-making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analyzed Gen-Z career aspirations using advanced SQL (CTEs, joins), delivering actionable insights via data storytelling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Research Intern</h3>
                  <p className="text-purple-600 font-semibold text-lg">IIT Bombay</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0">
                  May 2023 - Jul 2023
                </span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted thesis on Decarbonisation in the Construction Sector, focusing on lifecycle carbon assessment of infrastructure projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed simulation models to estimate carbon footprint reduction strategies across materials and processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Presented findings with data-driven policy recommendations for sustainable construction practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Olympic Data Analysis Platform</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Streamlit</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Pandas</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Plotly</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Seaborn</span>
              </div>
              <p className="text-gray-600 mb-4">
                Built Streamlit dashboard with Python analyzing 120+ years of Olympic data. 
                Designed heatmaps, line charts, and rankings for medal distribution and athlete trends.
              </p>
              <div className="text-blue-600 font-semibold">120+ Years of Data</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stock Price Forecasting using Deep Learning</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">LSTM</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">RNN</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
              </div>
              <p className="text-gray-600 mb-4">
                Compared Classification, Regression, RNN, and LSTM on Apple stock data with 5+ indicators. 
                LSTM achieved lowest error, significantly outperforming other models.
              </p>
              <div className="space-y-1">
                <div className="text-green-600 font-semibold">LSTM MSE: 0.0005</div>
                <div className="text-gray-600 text-sm">RNN: 0.0013 | FFNN: 0.0048</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Based Image Denoising</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">DnCNN</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Autoencoders</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
              </div>
              <p className="text-gray-600 mb-4">
                Implemented DnCNN and autoencoder models, improving PSNR from 20.53 to 31.19. 
                Added training optimizations improving inference speed.
              </p>
              <div className="text-blue-600 font-semibold">PSNR: 20.53 to 31.19</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'SQL', 'CSS', 'HTML', 'Javascript'].map(skill => (
                  <span key={skill} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="text-green-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">ML & Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Regression', 'Statistical Modelling', 'Clustering', 'Deep Learning', 'CNNs', 'NLP', 'LLMs'].map(skill => (
                  <span key={skill} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Libraries & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'XGBoost', 'LightGBM'].map(skill => (
                  <span key={skill} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-orange-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Tools & Software</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['VSCode', 'Excel', 'Jupyter Notebook', 'Git', 'AutoCAD', 'Power BI'].map(skill => (
                  <span key={skill} className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'SQL Bootcamp - MYSQL for Beginner to Advanced (Udemy)',
              'Microsoft Excel: Beginner to Advanced (Udemy)',
              'Data Science with Python (Simplilearn)',
              'Autodesk Revit: Beginner to Advanced (Udemy)',
              'Top 20 Teams - 24-hour Hackathon',
              'Bronze Medal - IIT Bombay Cricket Championship',
              'Event Coordinator - Techfest 2022 (Largest Techfest in Asia)',
              'State Level English Marathon Certificate of Merit'
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <Award className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-12 text-blue-100">
            I'm always interested in discussing new opportunities and collaborating on exciting projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:sohamgugale170@gmail.com" className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Mail className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">sohamgugale170@gmail.com</p>
            </a>
            
            <a href="tel:+19196415666" className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Phone className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+1 (919)-641-5666</p>
            </a>
            
            <a href="https://github.com/sohamgugale" className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Github className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-blue-100">View My Projects</p>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-blue-100">
            <MapPin size={20} />
            <span>Durham, North Carolina, United States</span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Soham Gugale. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;