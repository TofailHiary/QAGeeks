import React from "react";
import { PageLayout } from "components/PageLayout";

export default function SdlcStlcIntegration() {
  const integrationPoints = [
    {
      sdlcPhase: "Requirements Analysis",
      stlcPhase: "Test Planning",
      description: "Test planning begins as soon as requirements are defined. Testers participate in requirements reviews to ensure testability."
    },
    {
      sdlcPhase: "Design",
      stlcPhase: "Test Design",
      description: "As system design progresses, testers start creating test cases based on design specifications and requirements."
    },
    {
      sdlcPhase: "Implementation",
      stlcPhase: "Test Environment Setup",
      description: "While developers write code, testers prepare the test environment and finalize test data preparation."
    },
    {
      sdlcPhase: "Testing",
      stlcPhase: "Test Execution",
      description: "The primary integration point where formal testing begins, defects are reported, and fixes are verified."
    },
    {
      sdlcPhase: "Deployment & Maintenance",
      stlcPhase: "Test Cycle Closure",
      description: "As the system is deployed, testing activities are evaluated and documented for future improvement."
    }
  ];

  return (
    <PageLayout
      title="SDLC & STLC Integration Points"
      subtitle="How the Software Development Life Cycle and Software Testing Life Cycle align and interact throughout the project"
    >
      <div className="max-w-6xl mx-auto py-12">
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            SDLC and STLC work together throughout the software development process. Here's how the phases align and interact.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Integration Points</h3>
          <div className="min-w-[768px]">
            {integrationPoints.map((point, index) => (
              <div key={index} className="relative my-8">
                <div className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2 bg-gray-200"></div>
                <div className="flex justify-between items-center relative">
                  <div className="w-1/3 text-center">
                    <div className="inline-block bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <span className="font-medium text-[#00A2FF]">{point.sdlcPhase}</span>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center items-center">
                    <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-4 shadow-md w-20 h-20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-1/3 text-center">
                    <div className="inline-block bg-purple-50 rounded-lg p-3 border border-purple-100">
                      <span className="font-medium text-[#9C27FF]">{point.stlcPhase}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="bg-gray-50 rounded-lg p-4 max-w-xl">
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Next Button */}
        <div className="mt-12 text-center">
          <a
            href="/defect-management"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Defect Management →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
