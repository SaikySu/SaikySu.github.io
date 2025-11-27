
import React from 'react';
import { BlogPost, UILabels, SectionId } from '../types';
import SectionHeader from '../components/SectionHeader';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogProps {
  blog: BlogPost[];
  ui: UILabels;
}

const Blog: React.FC<BlogProps> = ({ blog, ui }) => {
  const sectionData = ui.sections[SectionId.BLOG];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader 
        title={sectionData?.title || "Blog"} 
        subtitle={sectionData?.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-100 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold text-slate-800 rounded-full shadow-sm">
                  {post.tags[0]}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center text-slate-400 text-xs mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-accent transition-colors cursor-pointer">
                {post.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <button className="mt-auto flex items-center text-accent text-sm font-semibold hover:text-blue-700 transition-colors group">
                {ui.buttons.readMore}
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
