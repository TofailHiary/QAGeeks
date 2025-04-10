import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface TestingMethodProps {
  title: string;
  description: string;
  focus: string[];
  advantages: string[];
  limitations: string[];
  whenToUse: string[];
  color: string;
  icon: React.ReactNode;
}

export const TestingMethodCard = ({
  title,
  description,
  focus,
  advantages,
  limitations,
  whenToUse,
  color,
  icon
}: TestingMethodProps) => {
  return (
    <Card className="h-full overflow-hidden border-t-4 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {focus.map((item, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Advantages</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {advantages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Limitations</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {limitations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">When to Use</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {whenToUse.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
