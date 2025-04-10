import React, { useState } from "react";

export interface LifecyclePhaseProps {
  phase: string;
  description: string;
  activities: string[];
  deliverables: string[];
  color: string;
  iconPath: string;
  isExpanded?: boolean;
}

export const LifecyclePhase = ({
  phase,
  description,
  activities,
  deliverables,
  color,
  iconPath,
  isExpanded = false,
}: LifecyclePhaseProps) => {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div 
      className={`border rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expanded ? 'shadow-lg' : ''}`}
      style={{ borderLeftColor: color, borderLeftWidth: '4px' }}
    >
      <div 
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <div 
            className="p-2 rounded-full mr-3 w-10 h-10 flex items-center justify-center"
            style={{ backgroundColor: `${color}25` }}
          >
            <div style={{ color }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold">{phase}</h3>
        </div>
        <div>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className={`overflow-hidden transition-max-height duration-300 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="p-4 pt-0 border-t border-gray-100">
          <p className="mb-3 text-gray-600">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Key Activities</h4>
              <ul className="list-disc list-inside space-y-1">
                {activities.map((activity, index) => (
                  <li key={index} className="text-gray-600">{activity}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Deliverables</h4>
              <ul className="list-disc list-inside space-y-1">
                {deliverables.map((deliverable, index) => (
                  <li key={index} className="text-gray-600">{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
