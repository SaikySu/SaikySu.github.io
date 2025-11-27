
import React from 'react';
import { Experience, Education, UILabels, SectionId } from '../types';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface CVProps {
  experience: Experience[];
  education: Education[];
  ui: UILabels;
}

const CV: React.FC<CVProps> = ({ experience, education, ui }) => {
  const sectionData = ui.sections[SectionId.CV];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader 
        title={sectionData?.title || "CV"} 
        subtitle={sectionData?.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Experience Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{ui.buttons.experience}</h3>
          </div>

          <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
            {experience.map((job) => (
              <div key={job.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-sm"></div>
                
                <div className="mb-1 text-sm font-semibold text-accent flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {job.period}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{job.role}</h4>
                <div className="text-slate-700 font-medium mb-2">{job.company}</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{ui.buttons.education}</h3>
          </div>

          <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                 {/* Timeline dot */}
                 <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-purple-500 shadow-sm"></div>

                <div className="mb-1 text-sm font-semibold text-accent flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {edu.year}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                <div className="text-slate-700 font-medium mb-2">{edu.school}</div>
                {edu.description && (
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CV;
