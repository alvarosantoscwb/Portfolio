"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
}

const ProjectCard = ({ src, title, description, link, github }: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openLink = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const openGithub = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (github) {
      window.open(github, '_blank');
    }
  };

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(true);
  };

  return (
    <div 
      className="group h-full"
      onClick={openLink}
    >
      <div className="relative h-full flex flex-col rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-[#f81a1a] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f81a1a]/20 hover:-translate-y-1 cursor-pointer">
        <div className="relative overflow-hidden bg-gray-900/50 flex-shrink-0" onClick={openFullscreen}>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {link && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="px-6 py-2 bg-[#f81a1a] text-white font-semibold rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                Ver Projeto
              </span>
            </div>
          )}
        </div>

        <div className="relative p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start gap-3">
            <h1 className="text-lg font-bold text-white tracking-tight">{title}</h1>
            {github && (
              <button 
                onClick={openGithub}
                className="flex-shrink-0 p-1.5 rounded-lg bg-gray-800/80 text-gray-400 hover:text-white hover:bg-[#f81a1a] transition-all duration-300 hover:scale-110"
                aria-label="Ver no GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </button>
            )}
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed whitespace-pre-line flex-grow">{description}</p>
        </div>
      </div>

      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#f81a1a] transition-colors"
            onClick={() => setIsFullscreen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <Image
            src={src}
            alt={title}
            width={1920}
            height={1080}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
