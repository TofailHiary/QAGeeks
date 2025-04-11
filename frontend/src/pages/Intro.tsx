import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming Card components exist
import { ArrowRight, BookOpen, Code, Settings, TestTubeDiagonal, Network, Wrench, HelpCircle, FileText, MessageSquare } from 'lucide-react'; // Import relevant icons

// Define the key topic areas for the cards
const keyTopics = [
  {
    title: "Principles & Concepts",
    description: "Core ideas and fundamental principles guiding effective QA.",
    icon: <BookOpen size={32} className="text-blue-600" />,
    path: "/principles",
    color: "border-blue-500",
  },
  {
    title: "SDLC & STLC",
    description: "Understand the Software and Testing Development Lifecycles.",
    icon: <Settings size={32} className="text-purple-600" />,
    path: "/sdlc-stlc", // Link to the combined page first
    color: "border-purple-500",
  },
  {
    title: "Testing Levels & Types",
    description: "Explore different levels (Unit, Integration) and types (Functional, Security).",
    icon: <TestTubeDiagonal size={32} className="text-green-600" />,
    path: "/levels-of-testing", // Or link to /testing-types
    color: "border-green-500",
  },
  {
    title: "API Testing",
    description: "Learn the fundamentals of testing application programming interfaces.",
    icon: <Network size={32} className="text-red-600" />,
    path: "/api-testing",
    color: "border-red-500",
  },
  {
    title: "Testing Tools",
    description: "Discover popular tools used in the QA industry for various testing needs.",
    icon: <Wrench size={32} className="text-yellow-600" />,
    path: "/testing-tools",
    color: "border-yellow-500",
  },
  {
    title: "Interview Questions",
    description: "Prepare for QA roles with common interview questions and topics.",
    icon: <HelpCircle size={32} className="text-indigo-600" />,
    path: "/interview-questions",
    color: "border-indigo-500",
  },
   {
    title: "Templates & Resources",
    description: "Access useful templates and curated resources for QA tasks.",
    icon: <FileText size={32} className="text-pink-600" />,
    path: "/templates", // Or link to /resources
    color: "border-pink-500",
  },
   {
    title: "Contact Us",
    description: "Get in touch with questions or feedback.",
    icon: <MessageSquare size={32} className="text-teal-600" />,
    path: "/contact",
    color: "border-teal-500",
  },
];

export default function IntroPage() {
  return (
    <PageLayout
      title="Welcome to QAGeeks" // Keep title simple
      subtitle="Your comprehensive guide to mastering Software Quality Assurance." // Refined subtitle
    >
      {/* Hero Section */}
      <div className="text-center py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-lg shadow-inner border border-gray-100 mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Elevate Your QA Engineering Skills
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
          Comprehensive guid for aspiring and professional Quality Assurance engineers, covering modern testing principles, methodologies, and tools.
        </p>
        <Link
          to="/principles" // Link to the first logical step
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get Started
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Key Topics Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Key Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyTopics.map((topic) => (
            <Link to={topic.path} key={topic.title} className="group block">
              <Card className={`h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border-l-4 ${topic.color}`}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {topic.icon}
                  <CardTitle className="text-xl font-semibold text-gray-800">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Optional: Add a small section about the site's goal or target audience */}
      <div className="text-center py-12 border-t border-gray-200">
         <h3 className="text-2xl font-semibold mb-4 text-gray-700">Built for QA Professionals</h3>
         <p className="text-gray-600 max-w-2xl mx-auto">
           Whether you're starting your journey or looking to refine your expertise, QAGeeks provides structured content, practical examples, and resources to help you succeed in the field of Quality Assurance.
         </p>
      </div>

    </PageLayout>
  );
}
