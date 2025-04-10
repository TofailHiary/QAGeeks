import React from "react";
import { useNavigate } from "react-router-dom";

export interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Abstract geometric shapes for background effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00A2FF]/10 blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#9C27FF]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-[#00A2FF]/10 blur-3xl"></div>
      
      {/* Additional geometric elements for neo-brutalism accents */}
      <div className="absolute top-32 right-1/4 w-12 h-12 bg-[#00A2FF] rotate-45 opacity-20"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#9C27FF] rounded-full opacity-20"></div>
      <div className="absolute top-40 left-1/5 w-8 h-8 bg-[#00A2FF] opacity-20"></div>
      <div className="absolute bottom-60 right-1/5 w-10 h-10 rotate-12 bg-[#9C27FF] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            {title}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-700 leading-relaxed">
          {subtitle}
        </p>
        
        <button 
          onClick={() => React.startTransition(() => navigate(ctaLink))}
          className="px-8 py-4 bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold rounded-lg text-lg transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,162,255,0.5)] shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">{ctaText}</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
        </button>

        {/* Hexagon grid pattern - neo-brutalism accent */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-10" 
             style={{ 
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDFMMTAgMjVWNzVMMTUwIDk5TDkwIDc1VjI1TDUwIDFaIiBmaWxsPSIjMDBBMkZGIi8+PC9zdmc+')" 
             }}>
        </div>
      </div>
    </div>
  );
};
