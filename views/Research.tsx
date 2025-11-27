
import React from 'react';
import { ResearchPaper, UILabels, SectionId } from '../types';
import SectionHeader from '../components/SectionHeader';
import { FileText, Users, Calendar, ArrowUpRight } from 'lucide-react';

interface ResearchProps {
  research: ResearchPaper[];
  ui: UILabels;
}

const Research: React.FC<ResearchProps> = ({ research, ui }) => {
  const sectionData = ui.sections[SectionId.RESEARCH];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader 
        title={sectionData?.title || "Research"} 
        subtitle={sectionData?.subtitle}
      />

      <div className="space-y-8">
        {research.map((paper) => (
          <div 
            key={paper.id} 
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-accent transition-colors shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image / Thumbnail for paper */}
              <div className="w-full md:w-48 h-32 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden">
                 <img 
                    src={paper.imageUrl} 
                    alt={paper.title}
                    className="w-full h-full object-cover opacity-90"
                 />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-accent bg-blue-50 px-2 py-1 rounded">{paper.conference}</span>
                  <span className="text-slate-500 flex items-center">
                     <Calendar className="h-3 w-3 mr-1" />
                     {paper.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {paper.title}
                </h3>

                <div className="flex items-center text-slate-600 text-sm mb-4 italic">
                  <Users className="h-4 w-4 mr-2" />
                  {paper.authors.join(", ")}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {paper.abstract}
                </p>

                <a 
                  href={paper.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-900 font-semibold hover:text-accent transition-colors group"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {ui.buttons.readPaper}
                  <ArrowUpRight className="h-4 w-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
