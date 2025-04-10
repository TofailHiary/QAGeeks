import React from "react";
import { useNavigate } from "react-router-dom";

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  link: string;
  icon: React.ReactNode;
}

export interface Props {
  modules: ModuleItem[];
}

export const ModuleTimeline = ({ modules }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00A2FF] to-[#9C27FF] hidden md:block"></div>
      
      {/* Modules */}
      <div className="relative z-10">
        {modules.map((module, index) => (
          <div key={module.id} className="mb-12 md:mb-0">
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Module icon (always centered on mobile, alternating on desktop) */}
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="relative">
                  <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#00A2FF] z-10 relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,162,255,0.5)] hover:scale-105">
                    <div className="text-[#00A2FF] w-12 h-12 flex items-center justify-center">
                      {module.icon}
                    </div>
                  </div>
                  {/* Module number badge */}
                  <div className="absolute -top-2 -right-2 bg-[#9C27FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Module content */}
              <div className="md:w-1/2 mt-6 md:mt-0 px-4">
                <div className={`bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#00A2FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group`}>
                {/* Background decoration */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-[#00A2FF]/5 group-hover:bg-[#9C27FF]/5 transition-colors duration-300"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold relative z-10 group-hover:text-[#00A2FF] transition-colors duration-300">{module.title}</h3>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">{module.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <button
                    onClick={() => React.startTransition(() => navigate(module.link))}
                    className="text-[#00A2FF] font-medium hover:text-[#9C27FF] transition-colors flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Spacer for all but the last item */}
            {index < modules.length - 1 && (
              <div className="h-16 md:h-24 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00A2FF] to-[#9C27FF] hidden md:block"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
