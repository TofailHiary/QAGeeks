import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Video, BookOpen, ExternalLink } from "lucide-react"; // Import icons, added ExternalLink

interface TestingTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory[];
  useCases: string[];
  logo: React.ReactNode; // Keep logo simple for now, avoid complex SVGs if possible
  websiteUrl: string;
  primaryColor: string; // Used for subtle accents potentially
  benefit?: string; // Optional: Add a key benefit
}

type ToolCategory = "api" | "browser" | "performance" | "mobile" | "defect" | "management" | "cicd" | "security";

export default function TestingTools() {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");
  
  // Tool categories for filtering
  const categories: { id: ToolCategory | "all"; name: string; color: string }[] = [
    { id: "all", name: "All Tools", color: "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]" },
    { id: "api", name: "API Testing", color: "bg-blue-500" },
    { id: "browser", name: "Browser Automation", color: "bg-green-500" },
    { id: "performance", name: "Performance Testing", color: "bg-orange-500" },
    { id: "mobile", name: "Mobile Testing", color: "bg-purple-500" },
    { id: "defect", name: "Defect Tracking", color: "bg-red-500" },
    { id: "management", name: "Test Management", color: "bg-indigo-500" },
    { id: "cicd", name: "CI/CD", color: "bg-yellow-500" },
    { id: "security", name: "Security Testing", color: "bg-teal-500" },
  ];
  
  // Testing tools data
  const testingTools: TestingTool[] = [
    {
      id: "postman",
      name: "Postman",
      description: "A comprehensive platform for API development and testing. Postman simplifies each step of the API lifecycle and streamlines collaboration, making it easier to create better APIs—faster.",
      category: ["api"],
      useCases: [
        "Creating and managing API requests",
        "Automating API tests",
        "Generating API documentation",
        "Creating mock servers",
        "Team collaboration on API development"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#FF6C37] to-[#FF9019] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.postman.com/",
      primaryColor: "#FF6C37",
      benefit: "Simplifies the entire API lifecycle from design to testing.",
    },
    {
      id: "selenium",
      name: "Selenium",
      description: "A powerful suite of tools for browser automation. Selenium WebDriver allows you to write tests in various languages (Java, Python, C#, etc.) to automate browser actions for testing web applications.",
      category: ["browser"],
      useCases: [
        "Automated browser testing",
        "Cross-browser compatibility testing",
        "Regression testing of web applications",
        "Data extraction and web scraping",
        "Integration with CI/CD pipelines"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#43B02A] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             <path d="M256 152.2c-57.9 0-104.8 46.9-104.8 104.8s46.9 104.8 104.8 104.8 104.8-46.9 104.8-104.8S313.9 152.2 256 152.2zm0 180c-41.4 0-75.2-33.8-75.2-75.2s33.8-75.2 75.2-75.2 75.2 33.8 75.2 75.2-33.8 75.2-75.2 75.2z"/>
             <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 417c-77.1 0-142.8-48.3-168.6-116.1 -5.6-14.8-9.7-30.5-11.8-46.9 -0.8-5.8-1.3-11.6-1.7-17.5 -0.3-5.9-0.5-11.9-0.5-17.9 0-88.9 72.1-161 161-161 88.9 0 161 72.1 161 161 0 6.1-0.2 12-0.5 17.9 -0.4 5.9-0.9 11.7-1.7 17.5 -2.1 16.3-6.2 32.1-11.8 46.9C398.8 368.7 333.1 417 256 417z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.selenium.dev/",
      primaryColor: "#43B02A",
      benefit: "Highly flexible and supports multiple programming languages.",
    },
    {
      id: "jmeter",
      name: "Apache JMeter",
      description: "Open-source application designed to load test functional behavior and measure performance. It can simulate heavy loads on servers or networks to test strength or analyze overall performance.",
      category: ["performance"],
      useCases: [
        "Load testing web applications",
        "Performance testing of API endpoints",
        "Stress testing servers",
        "Database performance testing",
        "Analyzing server response under various load conditions"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#D22128] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             <path d="M446.8 182.9c-12.9-12.2-29.4-18.4-47.3-18.8V50.7h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8 -31.6 31.6-15.9 81.1-9.4 97.5 0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3v-62.1H400.8C400.4 149.7 407.1 135.2 446.8 182.9zM304.8 233.7c-7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4 2.8-0.5 5.7-0.8 8.6-0.8 10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6C308.3 224.6 307.1 231.3 304.8 233.7zM287.5 276.3h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8 -31.6 31.6-15.9 81.1-9.4 97.5 0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3v-62.1H288.8C289.2 373.5 295.8 359 287.5 276.3zM254.1 461.3c-7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4 2.8-0.5 5.7-0.8 8.6-0.8 10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6C257.6 452.3 256.5 458.9 254.1 461.3zM65.2 407.9c0.4 17.9 6.6 34.4 18.8 47.3 31.6 31.6 81.1 15.9 97.5 9.4 1.7-0.7 2.8-1.9 3.5-3.5 6.5-14.6 21.1-62.2-9.4-97.5 -12.9-12.9-29.4-18.4-47.3-18.8V231.5H66.2v113.3C49.7 344.9 35.2 351.6 65.2 407.9zM155.7 380.3c7.5 7.5 10.6 17.3 10.6 27.6 0 2.8-0.3 5.7-0.8 8.6 -22.7-8.7-49.9 0.9-66.4 8.2 -0.5-2.8-0.8-5.7-0.8-8.6 0-10.3 4-20.1 10.6-27.6 7.5-7.5 17.3-11.7 27.6-11.7C146.6 376.9 153.3 378.1 155.7 380.3zM175.4 224.7c0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3V109.3H296.2c0.4-16.4 7.1-30.9 0-62.1 -12.9-12.2-29.4-18.4-47.3-18.8V15.1h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8C108 178.8 123.7 228.3 175.4 224.7zM226.7 147.5c10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6 0 10.3-1.7 17.1-4 19.4 -7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4C221 147.8 223.9 147.5 226.7 147.5z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://jmeter.apache.org/",
      primaryColor: "#D22128",
      benefit: "Excellent for simulating heavy user loads and analyzing bottlenecks.",
    },
    {
      id: "jira",
      name: "Jira",
      description: "Widely-used project management and issue tracking tool by Atlassian. Essential for agile teams, Jira helps plan sprints, track bugs, manage workflows, and monitor progress throughout the development lifecycle.",
      category: ["defect", "management"],
      useCases: [
        "Defect tracking and management",
        "Test case management (with plugins)",
        "Agile project planning and tracking",
        "Workflow customization for QA processes",
        "Integration with development tools"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#0052CC] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
             <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.atlassian.com/software/jira",
      primaryColor: "#0052CC",
      benefit: "Industry standard for agile project and issue tracking.",
    },
    {
      id: "testrail",
      name: "TestRail",
      description: "Test case management tool that helps QA teams organize, track, and manage software testing efforts. It allows for detailed test case specification, execution tracking, and comprehensive reporting.",
      category: ["management"],
      useCases: [
        "Comprehensive test case management",
        "Test plan organization",
        "Test run execution and tracking",
        "QA reporting and metrics",
        "Integration with defect tracking tools"
      ],
      logo: (
        // Removed duplicated name from logo placeholder
        <div className="w-12 h-12 flex justify-center items-center bg-[#65C178] text-white rounded-lg p-2">
          {/* Placeholder - Name removed */}
        </div>
      ),
      websiteUrl: "https://www.gurock.com/testrail/",
      primaryColor: "#65C178",
      benefit: "Provides structured test case management and reporting.",
    },
    {
      id: "appium",
      name: "Appium",
      description: "Open-source test automation framework for mobile applications. It allows QA engineers to write tests against mobile apps on multiple platforms using the same API.",
      category: ["mobile"],
      useCases: [
        "Mobile app automated testing",
        "Cross-platform mobile testing",
        "Native, hybrid, and web app testing",
        "Integration with continuous integration systems",
        "Mobile app performance testing"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#662D91] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192z"/>
             <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"/>
             <circle cx="256" cy="256" r="64"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://appium.io/",
      primaryColor: "#662D91",
      benefit: "Enables cross-platform mobile test automation with a single API.",
    },
    {
      id: "soapui",
      name: "SoapUI",
      description: "Open-source web service testing application for SOAP and REST APIs. It allows QA engineers to quickly create and execute automated functional, regression, compliance, and load tests.",
      category: ["api"],
      useCases: [
        "SOAP and REST API testing",
        "Web service simulation and mocking",
        "Load and performance testing of APIs",
        "Security testing",
        "Data-driven API testing"
      ],
      logo: (
        // Removed duplicated name from logo placeholder
        <div className="w-12 h-12 flex justify-center items-center bg-[#68B631] text-white rounded-lg p-2">
           {/* Placeholder - Name removed */}
        </div>
      ),
      websiteUrl: "https://www.soapui.org/",
      primaryColor: "#68B631",
      benefit: "Strong support for SOAP services and comprehensive API testing features.",
    },
    {
      id: "jenkins",
      name: "Jenkins",
      description: "Open-source automation server that helps automate parts of the software development process, including building, testing, and deploying applications.",
      category: ["cicd"],
      useCases: [
        "Continuous integration and deployment",
        "Automated test execution",
        "Build pipeline management",
        "Test result reporting",
        "Integration with source control and issue tracking"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#D33833] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             {/* Placeholder Jenkins-like icon */}
             <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192z"/>
             <circle cx="256" cy="180" r="40"/>
             <path d="M256 240c-44.2 0-80 35.8-80 80v48h160v-48c0-44.2-35.8-80-80-80z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.jenkins.io/", // Corrected URL
      primaryColor: "#D33833", // Corrected color
      benefit: "Extensible automation server for building robust CI/CD pipelines.",
    },
    {
      id: "cypress",
      name: "Cypress",
      description: "Next generation front-end testing tool built for the modern web. It addresses the key pain points developers face when testing modern applications.",
      category: ["browser"],
      useCases: [
        "End-to-end testing of web applications",
        "Component testing",
        "Visual regression testing",
        "API testing",
        "Time travel debugging"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#24262E] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192zm85.5-242.5c-6.2-6.2-16.4-6.2-22.6 0L256 268.4l-62.9-62.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l74.2 74.2c6.2 6.2 16.4 6.2 22.6 0l74.2-74.2c6.2-6.3 6.2-16.4 0-22.6z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.cypress.io/",
      primaryColor: "#24262E",
      benefit: "Offers fast, reliable testing with excellent debugging features for modern web apps.",
    },
    {
      id: "zap",
      name: "OWASP ZAP",
      description: "The world's most widely used web app scanner. Free and open source, it automatically finds security vulnerabilities in web applications during development and testing.",
      category: ["security"],
      useCases: [
        "Automated security scanning",
        "Vulnerability detection in web applications",
        "Penetration testing",
        "Security regression testing",
        "API security testing"
      ],
      logo: (
        <div className="w-12 h-12 flex justify-center items-center bg-[#4389FF] text-white rounded-lg p-2">
          {/* Simplified or Placeholder Logo */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
             <path d="M404.1 66c-25.2-25.2-155.3-58.1-212.9-63.3 -3.2-0.3-6.3 1-8.3 3.5 -2.1 2.5-2.8 5.8-1.9 8.8 4.8 17.8 13.1 53.9 13.1 80.1 0 35.7-13.9 61.7-25.3 78.8 -11.9 17.9-22.2 30.2-22.2 53.9 0 28.3 17 52.9 32.5 73.3 15.3 20.1 22.9 33.9 22.9 38.1 0 4.1-7.7 17.9-22.9 38.1 -15.5 20.3-32.5 45-32.5 73.3 0 23.7 10.3 36 22.2 53.9 11.4 17.1 25.3 43 25.3 78.8 0 26.2-8.3 62.3-13.1 80.1 -0.9 3.1-0.2 6.4 1.9 8.8 2.1 2.5 5.2 3.8 8.3 3.5 57.6-5.2 187.7-38.1 212.9-63.3 20.8-20.8 27.5-67.7 27.5-105.6 0-28.9-7.3-56.5-11.3-74.1 -0.9-3.8-4.1-6.6-8-7 -6.5-0.7-15.1-1.1-19-1.1 -38.6 0-65.6-13.9-63.6-63.8 1.9-47.9 48.7-36.1 77-36.1 3.9 0 12.5-0.4 19-1.1 3.9-0.4 7.1-3.2 8-7 4-17.7 11.3-45.2 11.3-74.1C431.6 133.7 424.9 86.8 404.1 66z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.zaproxy.org/",
      primaryColor: "#4389FF",
      benefit: "Free, open-source tool for finding common web application vulnerabilities.",
    }
  ];
  
  // Filter tools based on selected category
  const filteredTools = selectedCategory === "all" 
    ? testingTools 
    : testingTools.filter(tool => tool.category.includes(selectedCategory));
  
  return (
    <PageLayout 
      title="Common Testing Tools" 
      subtitle="Discover the most popular tools used by QA engineers for different testing needs"
      description="Explore essential QA testing tools like Postman (API), Selenium (Browser Automation), JMeter (Performance), Jira (Defect Tracking), TestRail (Management), Appium (Mobile), Jenkins (CI/CD), Cypress, and OWASP ZAP (Security)."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border dark:border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Essential Testing Tools for QA Engineers</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Having the right tools is crucial for effective software testing. This guide highlights industry-standard tools that QA engineers use for different types of testing, from API and browser automation to performance and security testing.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Each tool has its own strengths and specialties. Understanding when and how to use each tool will make you a more effective QA professional, capable of addressing diverse testing challenges across the software development lifecycle. Choosing the appropriate toolset can significantly impact testing efficiency and coverage.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? category.color : ""}
                onClick={() => React.startTransition(() => setSelectedCategory(category.id))}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool) => (
            <a 
              key={tool.id} 
              href={tool.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Visit the website for ${tool.name}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg" // Make card focusable
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-[1.02]">
                <CardHeader className="flex flex-row items-start gap-4 p-4 pb-2">
                  {/* Tool Logo */}
                  <div className="flex-shrink-0">
                    {tool.logo}
                  </div>
                  {/* Tool Name and Categories */}
                  <div className="flex-grow">
                    <CardTitle className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{tool.name}</CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {tool.category.map((cat) => {
                        const categoryInfo = categories.find(c => c.id === cat);
                        // Adjusted badge styling for dark mode
                        return (
                          <Badge key={cat} variant="outline" className={`${categoryInfo?.color} bg-opacity-10 dark:bg-opacity-20 text-xs px-1.5 py-0.5 border ${categoryInfo?.color.replace('bg-', 'border-')} border-opacity-30 dark:border-opacity-40 dark:text-gray-300`}>
                            {categoryInfo?.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  {/* External Link Icon */}
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  {/* Description */}
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-3">{tool.description}</CardDescription>

                  {/* Optional Benefit */}
                  {tool.benefit && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-3">{tool.benefit}</p>
                  )}

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs font-semibold mb-1 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Use Cases:</h4>
                    <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                      {tool.useCases.slice(0, 3).map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                      ))}
                      {tool.useCases.length > 3 && <li className="text-gray-400 dark:text-gray-500">...and more</li>}
                    </ul>
                  </div>
                </CardContent>
                {/* Removed the separate link */}
              </Card>
            </a>
          ))}
        </div>

        {/* Tool Comparison Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Choosing the Right Tool for Your Testing Needs</h2>
          
          <div className="overflow-x-auto rounded-lg shadow border dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] dark:from-gray-700 dark:to-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Testing Type</th>
                  <th className="px-6 py-3 text-left">Recommended Tools</th>
                  <th className="px-6 py-3 text-left">Key Considerations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Added dark mode styles */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">API Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      {/* Tool name colors might need adjustment if contrast is poor */}
                      <span className="font-medium text-[#FF6C37] dark:text-orange-400">Postman</span>
                      <span className="font-medium text-[#68B631] dark:text-lime-400">SoapUI</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Ease of use vs advanced features</li>
                      <li>Support for your specific API types</li>
                      <li>Integration with CI/CD pipelines</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Browser Automation</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#43B02A] dark:text-green-400">Selenium</span>
                      <span className="font-medium text-[#24262E] dark:text-gray-300">Cypress</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Cross-browser testing needs</li>
                      <li>Speed vs flexibility</li>
                      <li>Debugging capabilities</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Performance Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#D22128] dark:text-red-400">JMeter</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Types of performance metrics needed</li>
                      <li>Scale of load simulation required</li>
                      <li>Resource monitoring capabilities</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Mobile Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#662D91] dark:text-purple-400">Appium</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Native vs hybrid app testing</li>
                      <li>Device coverage required</li>
                      <li>Platform-specific features</li>
                    </ul>
                  </td>
                </tr>
                 <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Defect Tracking</td>
                   <td className="px-6 py-4">
                     <div className="flex flex-col space-y-1">
                       <span className="font-medium text-[#0052CC] dark:text-blue-400">Jira</span>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                       <li>Integration with test management tools</li>
                       <li>Workflow customization needs</li>
                       <li>Team size and collaboration features</li>
                     </ul>
                   </td>
                 </tr>
                 <tr className="bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                   <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Test Management</td>
                   <td className="px-6 py-4">
                     <div className="flex flex-col space-y-1">
                       <span className="font-medium text-[#65C178] dark:text-emerald-400">TestRail</span>
                       <span className="font-medium text-[#0052CC] dark:text-blue-400">Jira (with plugins)</span>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                       <li>Reporting and metrics requirements</li>
                       <li>Need for dedicated test case repository</li>
                       <li>Budget and licensing</li>
                     </ul>
                   </td>
                 </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">Security Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#4389FF] dark:text-sky-400">OWASP ZAP</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Types of vulnerabilities to detect</li>
                      <li>Integration with development workflow</li>
                      <li>Compliance requirements</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Tips for Getting Started with Testing Tools</h2>
          
          {/* Adjusted grid to lg:grid-cols-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Added dark mode styles */}
            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border dark:border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Start Small</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Begin with simple test cases before tackling complex scenarios. Master the basics first.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border dark:border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                   <Video className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Leverage Tutorials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Watch video tutorials and follow step-by-step guides to grasp practical implementation quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border dark:border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Consult Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Don't skip the official docs! They hold key details, configurations, and advanced usage tips.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-12 text-center">
          <Link
            to="/api-testing"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            API Testing →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
