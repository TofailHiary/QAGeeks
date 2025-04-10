import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card component exists

export default function SiteContent() {
  const objectives = [
    "To understand what is testing",
    "To understand Software development model",
    "To understand architectures of software development",
    "To learn the features of software development models",
    "To learn major concepts of testing methodologies",
    "To know different approaches to testing",
    "To understand the types of testing",
    "To plan and create test plans",
    "To create and manage test cases",
    "To create and manage bugs",
    "To build strategies to track testing processes in bug tracking systems",
    "To document test reports in testing enclosure documents",
    "To understand project management tools like Jira",
    "To understand basics of API testing using Postman",
  ];

  const contentItems = [
    "Introduction of Software Testing / Software Testing Principles",
    "Software Development Life Cycle",
    "Concepts in Quality you must know about",
    "Software Testing Life Cycle",
    "Bugs & Issues Management",
    "Testing Levels",
    "Testing Types and Related Types",
    "Software Testing Methods and Techniques",
    "Work Management Tools",
    "API Testing",
    "Mobile Testing",
    "Database Testing",
    "Team Structure and Roles",
  ];

  return (
    <PageLayout
      title="Overview"
      subtitle="Welcome to QAGeeks—your hub for mastering software quality assurance. Explore principles, practices, and tools for software reliability."
    >
      <div className="relative py-12 max-w-6xl mx-auto space-y-16">

        {/* Introduction Section */}
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#00A2FF]">Welcome to QAGeeks</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Software Testing Fundamentals:</strong> Discover core principles, why early testing is critical, and how to systematically uncover bugs using frameworks like ISTQB and IEEE.
              </p>
              <p>
                <strong>SDLC & STLC:</strong> Understand the full software journey, from requirements to maintenance, ensuring quality is integrated at every stage.
              </p>
              <p>
                <strong>Quality Concepts & Defect Management:</strong> Learn key metrics, QA vs. QC, and robust bug management practices.
              </p>
              <p>
                <strong>Testing Levels & Types:</strong> Explore unit, integration, system, acceptance testing, and various types like functional, performance, security, usability, and compatibility.
              </p>
              <p>
                <strong>Advanced Techniques:</strong> Gain insights into API, mobile, and database testing with practical tips.
              </p>
              <p>
                <strong>Tools & Team Dynamics:</strong> Discover tools to streamline processes and learn about effective team structures for collaboration.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Site Objectives */}
        <div className="bg-gradient-to-br from-[#00A2FF]/10 to-[#9C27FF]/10 p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            Site Objectives
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-800 max-w-4xl mx-auto">
            {objectives.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Site Content */}
        <div className="bg-gradient-to-br from-[#9C27FF]/10 to-[#00A2FF]/10 p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">
            Site Content
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-800 max-w-4xl mx-auto">
            {contentItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Button */}
        <div className="mt-16 text-center">
          <a
            href="/principles"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Principles & Concepts →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
