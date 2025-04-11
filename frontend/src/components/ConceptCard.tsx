import React, { useState } from "react";

export interface ConceptCardProps {
  title: string;
  summary: string;
  icon: React.ReactNode;
  details: string | React.ReactNode;
  accentColor?: string;
}

export const ConceptCard = ({
  title,
  summary,
  icon,
  details,
  accentColor = "#00A2FF",
}: ConceptCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2' : ''}`}
      style={{ '--tw-ring-color': accentColor } as React.CSSProperties} // Set Tailwind's ring color variable
    >
      {/* Card Header - Made accessible */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button" // Added role
        aria-expanded={isExpanded} // Added aria-expanded
        // aria-controls="concept-details" // Ideally, add an ID to the details section and link it
        tabIndex={0} // Make it focusable
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsExpanded(!isExpanded); }} // Allow keyboard activation
      >
        <div className="flex items-start">
          {/* Icon Container - Added aria-hidden */}
          <div
            className="shrink-0 w-12 h-12 mr-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}15` }}
            aria-hidden="true" // Added aria-hidden assuming icons are decorative
          >
            <div className="text-[#00A2FF]">{icon}</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{summary}</p>
          </div>
          {/* Chevron Icon - Added aria-hidden */}
          <div className="ml-4">
            <svg
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" // Added aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Expandable Content - Consider adding id="concept-details" for aria-controls */}
      <div
        // id="concept-details" // Add ID here if using aria-controls
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 border-t border-gray-100">
          <div className="prose max-w-none text-gray-700">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
};
