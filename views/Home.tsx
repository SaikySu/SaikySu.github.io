
import React from 'react';
import { ArrowRight, Eye, Code, Globe, Cpu } from 'lucide-react';
import { SectionId, Profile, UILabels } from '../types';

interface HomeProps {
  scrollToSection: (section: SectionId) => void;
  profile: Profile;
  ui: UILabels;
}

const Home: React.FC<HomeProps> = ({ scrollToSection, profile, ui }) => {
  return (
    <div className="space-y-20 py-10 lg:py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-accent font-bold tracking-wider uppercase text-sm animate-fade-in-up">{ui.hero.greeting}</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light">
                {profile.title}
              </p>
            </div>
            
            <p className="text-slate-600 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {profile.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={() => scrollToSection(SectionId.PROJECTS)}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-accent hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
              >
                {ui.buttons.viewProjects}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection(SectionId.CV)}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                <Eye className="mr-2 h-5 w-5" />
                {ui.buttons.viewCV}
              </button>
            </div>
          </div>

          <div className="flex-1 relative order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 transform -translate-x-4 -translate-y-4"></div>
              
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-900 text-white py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">{ui.buttons.skillsTitle}</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Skill Group 1 */}
             <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-accent hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                   <Code className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
                <p className="text-slate-400 leading-relaxed"> Scikit-learn, Pandas, NumPy, Matplotlib, building and optimizing machine learning models.</p>
             </div>

             {/* Skill Group 2 */}
             <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-accent hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                   <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deep Learning</h3>
                <p className="text-slate-400 leading-relaxed">PyTorch, OpenCV, YOLO, Keras, HuggingFace Transformers, Building and optimizing Computer Vision models.</p>
             </div>

             {/* Skill Group 3 */}
             <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-accent hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                   <Cpu className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">DevOps & Tools</h3>
                <p className="text-slate-400 leading-relaxed">Git, Docker, Streamlit, Linux, Pytest, CI/CD integration for model testing.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
