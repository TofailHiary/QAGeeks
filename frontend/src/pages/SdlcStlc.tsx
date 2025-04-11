import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "components/ui/card"; // Import Card components
import { ArrowRightLeft, Code, TestTubeDiagonal, CheckCircle, Rocket, Settings } from "lucide-react"; // Import icons
import { motion } from "framer-motion"; // Import motion

export default function SdlcStlcIntegration() {
  const integrationPoints = [
    {
      sdlcPhase: "Requirements Analysis",
      stlcPhase: "Test Planning",
      description: "Test planning begins as requirements are defined. Testers review requirements for testability.",
      sdlcIcon: <Settings className="w-6 h-6 text-blue-600" />,
      stlcIcon: <TestTubeDiagonal className="w-6 h-6 text-purple-600" />,
    },
    {
      sdlcPhase: "Design",
      stlcPhase: "Test Design",
      description: "Testers create test cases based on design specifications and requirements.",
      sdlcIcon: <Code className="w-6 h-6 text-blue-600" />,
      stlcIcon: <TestTubeDiagonal className="w-6 h-6 text-purple-600" />,
    },
    {
      sdlcPhase: "Implementation",
      stlcPhase: "Test Environment Setup",
      description: "While developers code, testers prepare the test environment and finalize test data.",
      sdlcIcon: <Code className="w-6 h-6 text-blue-600" />,
      stlcIcon: <Settings className="w-6 h-6 text-purple-600" />,
    },
    {
      sdlcPhase: "Testing",
      stlcPhase: "Test Execution",
      description: "Formal testing begins, defects are reported, and fixes are verified.",
      sdlcIcon: <TestTubeDiagonal className="w-6 h-6 text-blue-600" />, // Testing is central here
      stlcIcon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    },
    {
      sdlcPhase: "Deployment & Maintenance",
      stlcPhase: "Test Cycle Closure",
      description: "Testing activities are evaluated and documented for future improvement as the system is deployed.",
      sdlcIcon: <Rocket className="w-6 h-6 text-blue-600" />,
      stlcIcon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <PageLayout
      title="SDLC & STLC Integration"
      subtitle="How Development and Testing Lifecycles Align"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) are deeply intertwined. Effective integration ensures quality throughout the development process. Explore the key interaction points below.
          </p>
        </div>

        {/* Responsive Grid for Integration Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="flex" // Ensure cards in the same row have equal height if content differs
            >
              <Card className="w-full flex flex-col bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {point.sdlcIcon}
                      <CardTitle className="text-lg font-semibold text-blue-700 dark:text-blue-400">{point.sdlcPhase}</CardTitle>
                    </div>
                    <ArrowRightLeft className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <div className="flex items-center space-x-2">
                      {point.stlcIcon}
                      <CardTitle className="text-lg font-semibold text-purple-700 dark:text-purple-400">{point.stlcPhase}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-16 text-center">
          <Link
            to="/defect-management"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn about Defect Management
            <ArrowRightLeft className="ml-2 -mr-1 h-5 w-5" /> {/* Replaced arrow */}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
