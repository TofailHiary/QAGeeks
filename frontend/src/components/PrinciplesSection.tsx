import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const PrinciplesSection = ({ title, subtitle, ctaText, ctaLink }: Props) => {
  const navigate = useNavigate();
  
  // Seven Principles of Software Testing
  const principles = [
    {
      number: "01",
      title: "Testing Shows Presence of Defects",
      description: "Testing can show that defects are present, but cannot prove that there are no defects."
    },
    {
      number: "02",
      title: "Exhaustive Testing is Impossible",
      description: "Testing everything is not feasible except for trivial cases. Risk analysis and priorities should be used to focus testing efforts."
    },
    {
      number: "03",
      title: "Early Testing",
      description: "Testing activities should start as early as possible and be focused on defined objectives."
    },
    {
      number: "04",
      title: "Defect Clustering",
      description: "A small number of modules usually contains most of the defects discovered."
    },
    {
      number: "05",
      title: "Pesticide Paradox",
      description: "If the same tests are repeated over and over, eventually they will no longer find any new bugs."
    },
    {
      number: "06",
      title: "Testing is Context Dependent",
      description: "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
    },
    {
      number: "07",
      title: "Absence of Errors Fallacy",
      description: "Finding and fixing defects does not help if the system built does not fulfill the user's needs and expectations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg relative overflow-hidden group hover:bg-gradient-to-br hover:from-white hover:to-gray-100 transition-all duration-300">
              <div className="absolute -top-6 -left-6 text-[100px] font-black text-[#00A2FF]/5 group-hover:text-[#9C27FF]/5 transition-colors">
                {principle.number}
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              React.startTransition(() => {
                navigate(ctaLink);
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 50);
              });
            }}
            className="px-8 py-4 bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold rounded-lg text-lg transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,162,255,0.5)] shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">{ctaText}</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
