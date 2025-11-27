import React, { useState, useEffect } from 'react';
import { Profile } from '../types';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  profile: Profile;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  const year = new Date().getFullYear();
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'mail': return <Mail className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-slate-400 text-sm mt-1">{profile.title}</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors"
                aria-label={social.platform}
              >
                {getIcon(social.iconName)}
              </a>
            ))}
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {year} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
