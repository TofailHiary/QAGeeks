import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Video, BookOpen } from "lucide-react"; // Import icons

interface TestingTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory[];
  useCases: string[];
  logo: React.ReactNode;
  websiteUrl: string;
  primaryColor: string;
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
      description: "Popular API development and testing tool that enables developers to build, test, and document APIs efficiently.",
      category: ["api"],
      useCases: [
        "Creating and managing API requests",
        "Automating API tests",
        "Generating API documentation",
        "Creating mock servers",
        "Team collaboration on API development"
      ],
      logo: (
        <div className="w-full h-12 flex justify-center items-center bg-gradient-to-r from-[#FF6C37] to-[#FF9019] text-white rounded-md">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.postman.com/",
      primaryColor: "#FF6C37",
    },
    {
      id: "selenium",
      name: "Selenium",
      description: "A suite of tools for automating web browsers across many platforms. Primarily used for web application testing but can also automate web-based administration tasks.",
      category: ["browser"],
      useCases: [
        "Automated browser testing",
        "Cross-browser compatibility testing",
        "Regression testing of web applications",
        "Data extraction and web scraping",
        "Integration with CI/CD pipelines"
      ],
      logo: (
        <div className="w-full h-12 flex justify-center items-center bg-[#43B02A] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 152.2c-57.9 0-104.8 46.9-104.8 104.8s46.9 104.8 104.8 104.8 104.8-46.9 104.8-104.8S313.9 152.2 256 152.2zm0 180c-41.4 0-75.2-33.8-75.2-75.2s33.8-75.2 75.2-75.2 75.2 33.8 75.2 75.2-33.8 75.2-75.2 75.2z"/>
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 417c-77.1 0-142.8-48.3-168.6-116.1 -5.6-14.8-9.7-30.5-11.8-46.9 -0.8-5.8-1.3-11.6-1.7-17.5 -0.3-5.9-0.5-11.9-0.5-17.9 0-88.9 72.1-161 161-161 88.9 0 161 72.1 161 161 0 6.1-0.2 12-0.5 17.9 -0.4 5.9-0.9 11.7-1.7 17.5 -2.1 16.3-6.2 32.1-11.8 46.9C398.8 368.7 333.1 417 256 417z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.selenium.dev/",
      primaryColor: "#43B02A",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#D22128] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M446.8 182.9c-12.9-12.2-29.4-18.4-47.3-18.8V50.7h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8 -31.6 31.6-15.9 81.1-9.4 97.5 0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3v-62.1H400.8C400.4 149.7 407.1 135.2 446.8 182.9zM304.8 233.7c-7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4 2.8-0.5 5.7-0.8 8.6-0.8 10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6C308.3 224.6 307.1 231.3 304.8 233.7zM287.5 276.3h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8 -31.6 31.6-15.9 81.1-9.4 97.5 0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3v-62.1H288.8C289.2 373.5 295.8 359 287.5 276.3zM254.1 461.3c-7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4 2.8-0.5 5.7-0.8 8.6-0.8 10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6C257.6 452.3 256.5 458.9 254.1 461.3zM65.2 407.9c0.4 17.9 6.6 34.4 18.8 47.3 31.6 31.6 81.1 15.9 97.5 9.4 1.7-0.7 2.8-1.9 3.5-3.5 6.5-14.6 21.1-62.2-9.4-97.5 -12.9-12.9-29.4-18.4-47.3-18.8V231.5H66.2v113.3C49.7 344.9 35.2 351.6 65.2 407.9zM155.7 380.3c7.5 7.5 10.6 17.3 10.6 27.6 0 2.8-0.3 5.7-0.8 8.6 -22.7-8.7-49.9 0.9-66.4 8.2 -0.5-2.8-0.8-5.7-0.8-8.6 0-10.3 4-20.1 10.6-27.6 7.5-7.5 17.3-11.7 27.6-11.7C146.6 376.9 153.3 378.1 155.7 380.3zM175.4 224.7c0.7 1.7 1.9 2.8 3.5 3.5 14.6 6.5 62.2 21.1 97.5-9.4 12.9-12.9 18.4-29.4 18.8-47.3h113.3V109.3H296.2c0.4-16.4 7.1-30.9 0-62.1 -12.9-12.2-29.4-18.4-47.3-18.8V15.1h-62.1v113.3c-17.9 0.4-34.4 6.6-47.3 18.8C108 178.8 123.7 228.3 175.4 224.7zM226.7 147.5c10.3 0 20.1 4 27.6 10.6 7.5 7.5 11.7 17.3 11.7 27.6 0 10.3-1.7 17.1-4 19.4 -7.5 7.5-17.3 10.6-27.6 10.6 -2.8 0-5.7-0.3-8.6-0.8 8.7-22.7 -0.9-49.9-8.2-66.4C221 147.8 223.9 147.5 226.7 147.5z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://jmeter.apache.org/",
      primaryColor: "#D22128",
    },
    {
      id: "jira",
      name: "Jira",
      description: "Project management tool developed by Atlassian that allows teams to plan, track, and manage agile software development projects. For QA teams, it's primarily used for issue tracking and defect management.",
      category: ["defect", "management"],
      useCases: [
        "Defect tracking and management",
        "Test case management (with plugins)",
        "Agile project planning and tracking",
        "Workflow customization for QA processes",
        "Integration with development tools"
      ],
      logo: (
        <div className="w-full h-12 flex justify-center items-center bg-[#0052CC] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
            <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.atlassian.com/software/jira",
      primaryColor: "#0052CC",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#65C178] text-white rounded-md">
          <span className="text-xl font-bold">TestRail</span>
        </div>
      ),
      websiteUrl: "https://www.gurock.com/testrail/",
      primaryColor: "#65C178",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#662D91] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192z"/>
            <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"/>
            <circle cx="256" cy="256" r="64"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://appium.io/",
      primaryColor: "#662D91",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#68B631] text-white rounded-md">
          <span className="text-xl font-bold">SoapUI</span>
        </div>
      ),
      websiteUrl: "https://www.soapui.org/",
      primaryColor: "#68B631",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#D33833] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M487.1 425c-1.4-11.2-19-23.1-28.2-31.9-5.1-5-29-23.1-30.4-29.9-1.4-6.6 9.7-21.5 13.3-28.9 5.1-10.7 8.8-23.7 11.3-32.6 18.8-66.1-20.7-112.3-64-128.4-43.3-16.3-88.9-3.1-100.7 5.3-11.9 8.4-12.3 12.8-25.5 15-13.2 2.3-37.1 8.4-47.2 15-10.2 6.4-14.7 9.8-25.9 18.6-11.5 8.8-21.6 21.1-28.5 28-6.8 7.1-13.7 13.1-16.9 22.1-2.9 7.7-3.4 14.6-6.4 23.5-3.2 8.6-12.2 22.3-13.2 30.9-1.1 10 3.2 20.2 0.4 29.4-2.8 9.2-12.1 18.3-15.5 24.8-3.4 7.8-3.3 18.3-3.4 28.1-0.3 13.5-10.2 28.3 0.7 38.2 8.7 10.7 20.8 8.9 41 26.3 7.9 6.8 14.3 14.7 23.1 21 8.6 6.1 18 12.1 28.9 13.8 21.7 4 44.6 1.7 60.3-11.9 16.6-14.1 22.1-26.7 35.9-44.2 8-10.1 17.3-18.9 27.9-26.3 9.6-6.8 27.5-14.1 29.2-28.1 1.9-13.9-9.9-28-8.3-41.8 1.6-11.7 13.1-22.2 9.5-32.3-3.4-10.2-19.1-17.6-26.6-23.4-7.6-5.9-16.5-10.3-19.1-20.3-2.9-10 3.8-20.6 3.4-31-0.5-10.4-11.5-21.3-5.6-31.3 5.4-9.8 36.2-27.9 47-30 36.6-7 83.6 3.3 109.8 27.9 18.7 17.9 37.3 40.3 46.8 65.8 10.2 27.5 7.2 59.7-1.5 93 -3.4 10.7-9 19.6-14.2 29.8-5.4 10.5-16.6 18.9-23.6 30-6.6 10-8.1 23.4-15.3 31.5-8 8.1-18.7 9.5-29.2 9.6-10.4 0.5-23.5 1.8-29.4 10-7.5 10.4 13.5 30.8 13.1 39.4 -0.3 14.3-18.8 24.2-28.2 31.5-9.6 7.1-21.9 14.2-30.5 19.5-8.8 5.5-16.9 11.2-23.7 16.6-22.7 18.6-46.2 32.4-73.7 51.3 -95.2 65.4-152.9 57.4-184.2 155.7-1.4 0-2.9 0-4.3 0 -9.3-47.3-10.3-90.8 9.3-146.8 8.4-24 23.8-45.7 39.3-66.8 10.6-14.5 23.6-30 35.2-44.2 11.5-14 25.1-25.7 37.9-38.9 16.4-17 40.1-33.9 79.1-44.5 5.3-1.4 10.7-2.8 16.2-4.4 0.8-0.2 1.6-0.4 2.4-0.6 6.4-1.8 15.9-4.1 17.1-13.1 1.6-9-2.9-16.7-10.3-20.6 -7.3-3.8-15.2-6.7-21.2-11.5 -6.2-4.8-11.6-10.4-17.5-15.7 -5.9-5.2-10.7-9.7-14.7-18.7 -4.2-8.3-5.4-19.8-6-29.4 -0.3-9.6 3.8-19 3.8-28.3 0.3-9.5-3.5-18-2.8-26.1 0.8-9 5.3-18.5 11.6-24.8 7.9-7.5 15-12.7 26.2-16.1 11.1-3.9 21.6-2.3 30.7-2.3 13.7-0.2 30.7-4.1 43.2-9 12.6-4.8 23.3-16.3 36.2-22.6 11.6-6 25-12.4 38.3-14.2 13.6-1.8 28.1 0.6 42 0 14.3-0.6 26.8-7 38.4-14.8 11.6-7.6 21.9-17.7 29.3-29.7 7.9-12.3 10.6-33.1 24.7-30.8 12.7 3.6 16.7 11.7 25.4 22.5 8.3 10.6 9.6 15.5 20.5 26.6 10.9 11.5 22.6 20.7 32.5 33.4 9.8 12.6 19.8 27 23.1 42.1 3.3 17.1 4.4 30.5 1.7 48.3 -2.8 17.8-8.5 31.5-11.8 45 -4.1 16.3-7.5 30.6-15.5 45.1 -8 14.9-15.7 35.7-31.1 44.7 -15.7 9.4-34.3 10.7-46.6 23.4 -12.6 12.5-19.6 35.3-24.3 53.5 -3.5 14-5.8 30.2-20.2 35.9 -14.8 6.5-33.2 0.3-43.8 15.2 -10.5 15.7-20.5 25.7-30.9 42.7 -12.5 20.4-19 45.3-16.9 70.1 2.1 24.1 15.1 41.7 30.5 56.3 20.9 19.6 44.9 48.4 82.4 42.7 24.6-3.8 35.6-16.3 54.6-30.4 19.5-14.9 35.5-34.4 56.4-50.8 16-12.5 30.5-27.8 49.1-39.2 16.9-10.5 39.5-17.3 56.7-29.9 22.1-16.1 42.7-41.4 48.9-68.8 6-25.9-2.9-59.3-29.3-78.9 -32.2-23.3-72.8-37.7-114.2-32.6 -23.3 3.2-42.6 13.6-63.5 25.5 -20.9 11.6-51.2 36.1-77.3 35.9 -25.7-0.3-45.9-20.8-62.9-42.1 -21.5-26.1-40.5-59.3-30.1-93.8 10.7-35.1 45.7-60 82.4-70.8 29.8-8.7 62.6-7.5 94.1-6 31.3 1.5 59.9 8.4 89.8 15.9 24.9 6.2 50.7 15.6 76.2 11.5 19.1-3.2 45.6-24.6 51.3-43.9 9.5-32.4-27.3-74.9-55.2-82.4 -19.3-5.3-28.1-27.9-27.5-46.6 0.4-14.9 2.6-27.3 6.5-36.4 11.4-29.2 67.5-24.6 85.7-42.4 28.5-27.8 7.1-84.3-24-105.8 -15.5-10.4-39.4-16.3-55.1-27.6 -14.8-10.6-16.8-27.9-32.7-40.1 -19.5-15-85.3-34.4-102.3-13.7 -9.9 12.2-6.6 44.3-26.9 49.7 -16.3 3.7-48.3-45.8-67.1-47.5 -15.5-1.5-24.3 11.2-36 21.4 -11.8 10.2-32.8 28.9-48.9 33.9 -16.1 5.3-30.4 2.3-47.2 2.1 -15.8-0.6-31.5-9.2-47.7-7.3 -18.7 1.9-33.7 13.3-50.3 8.9 -17.5-4.7-32.3-29.8-49.3-31.3 -17.1-1.5-34.3 15.6-52.2 10.4 -15.9-4.7-34.5-32.1-51.5-20.4 -10.9 7.8-15.9 30.5-24.1 42.7 -12.3 17.1-25.8 28.1-26.1 50.8 -0.4 20.9 11.9 34.5 14.8 54 3 19.6-7.5 36.4 0.4 54.9 7.4 17.5 21.7 33.7 30.7 51.5 10.6 21 15.7 41.6 29.7 60.5 13.2 19.5 26.6 36.5 44 52.3 32.5 28.5 77.2 50.9 97.9 91.1 24.8 47.4-4.1 87.7-13.9 133.3 -3.8 18.8-5.5 39.1-6.2 59C93.6 466.1 80.9 436.8 72.6 405.2c-7.5-29.6-9.9-59.3-15.8-88.7 -5.9-29.4-14.3-57.9-21.9-86.4 -7.7-28.8-23.3-69.7-23.3-113.5 0-48 27.3-89 59.9-123.5C104 -41.1 152.3-19.5 224 -19.5c70.5 0 142.6-69.5 224-12.2 81.6 57.5 29.9 191.9 80 320.3 15.9 40.8 43.4 68 61.5 116.7 -5.2 16.6-15.6 28.1-25.3 42 -22.2 32.5-41.9 69.9-38.4 115.9 -202.4-21.3-344.4-42.8-346.1-44.4 -1.5-1.5-6.4-5.4-12.9-10.6 44.7-38.4 96.8-74 147.2-114.9 7.2-6 18.1-12.2 22.8-18.2 4.8-6.2 3.6-15.2 3.4-21.9 -0.5-18.8-4-35.3-12.3-50.9 -8.6-15.6-23.9-23.7-40.8-19.3 -18.3 4.5-34.8 26.4-36.6 45 -0.8 9 1.3 21.3-5.5 27.8 -7.9 7.5-27.4 9.9-38.6 16 -13.4 7.4-29.4 14.6-38 26.6 -8.8 12-4.3 22.1-4.6 32.3 -0.3 12.7-6.8 25-17.9 32.5 -10.8 7.1-35.1 6.9-48 13.4 -9.8 4.8-28.2 21.3-18.1 32.8 33.2-4.2 65.7 0.2 99.5 3.7 33.9 3.8 67.5 7.9 101.7 10.6 34.3 2.8 68.7 4.1 103.1 6.8 34.4 2.5 68.5 8.9 103 13 34.5 4 69.3 8.9 103.9 12.1C445.3 496.2 478.5 498.1 512 500c0-43.8-35-80.7-54.9-114.8 -24.9-42.8-10.8-96.4-31.7-147.2 -25.8-63.1-33.3-140-43.9-192.6 -13.3-66.5-81.8-118.1-140.7-144 -59.5-25.9-129.1-24.8-185.9 2.4 -56.8 27-96.1 73.9-103.1 139 -3.4 31.7-5.6 63.2-10.9 90.7 -5.3 27.3-15.6 52.5-30.3 76.1 -14.7 23.7-30.9 47.1-36.8 73.8 -5.9 27.1-1.5 48.9 6.8 69.9C-6.9 424.2 47.7 464.3 52.9 512 35.3 511.4 17.7 510.9 0 510.3c0-197.5 0-395 0-492.3 0-81.6 57.4-117.2 134.4-117.7 68.6-0.3 136.9 0 205.5 0 72.4 0 154 23.7 149.4 110.3 -1.5 29.7-21.7 61.6-48.7 77 -27.7 15.6-60.7 10.5-93.1 16.6 -32.3 5.9-45.1 12.3-71.8 32.5 -26.7 20.4-42.7 50.5-29.3 83.7 13.4 31.7 41.7 66.3 77.8 78.3 36.2 11.9 89.5 13.9 126.6-0.7 38.4-15.3 67.9-41.5 93.6-72.6 25.9-31.3 54.2-69.2 66-107.7 11.8-38.3 6.8-91.6-15.1-123.5 -21.7-32.5-81.1-64.4-121.2-85.2 -39.8-20.8-150.6-38.2-150.6-38.2 0 0 24.9-22.2 49.3-40.7 24.6-18.6 89.1-65 114.8-74.3 59.3-21.3 172.2-23.5 208.9 31.2 23.5 34.7 24.5 66.5 21.5 137.9 -1.1 26.1-5.2 51.2-10.5 76.7 -5.3 25.3-10 50.1-19.1 74.5 -8.8 24.2-31.9 51.2-32.6 77.2 -0.3 26.8 14.8 53.2 16.6 82.4 1.5 30.8 5.5 62.6 9.3 93.3 3.9 30.8 14.7 61 22.5 91.1 7.5 30.1 16.7 59.1 24.8 89 7.9 30 17.1 58.8 30.1 86.5 12.8 27.7 33.5 50.2 50.9 75 18.1 25.6 34.9 54.8 42.6 85 -0.5 0-1 0-1.5 0 -139.2-46.3-307.7-73.3-457-96.7C212.2 444.7 68.5 433.1 14.9 352.3 6.7 339.5-0.3 322.5-0.3 302.7 0.2 189.5 45 95.3 126.6 39.8c45.9-31.2 94.6-51.9 147.7-56.2 51.2-4.2 104.8 1.5 147.8 31.4 21.5 15 43.8 32.1 62.4 49.7 18.6 18.6 42.1 35.2 53.4 59 11.6 24.2 13.6 51.3 14 68.9 0.4 17.5-20.3 53.1-29.3 68.4 -17.3 30.9-32.1 60.9-40.5 88.9 -4.8 16.2-7.5 31.3-8.8 47.3 -1.6 15.8 1.7 30.3 0.8 44.1 -0.9 13.4-3.1 27-1.9 38.9 1.9 21.3 7.8 47.8 24.9 61.7 8.5 7 24.9 4.2 34.2 2.4 3.8-0.8 7.6-1.5 11.3-2.8 3.8-1.5 7.1-3.1 10.1-5.2 26.5-16.6 3.8-43.3 5.1-71.5 1.5-38.3 3.4-75.9 12.8-112.4 9.3-36.4 30-71.7 44.1-107.1 7.2-18.3 10.6-37.2 15.9-56.3 5.3-18.8 9.9-37.9 14.8-57 9.8-38.6 18.6-77.3 34.1-114.1 15.8-37.5 36.6-70.8 70.3-98.4 33.8-28.1 86.1-56.4 129.3-68.5 43.2-12.3 76.7-5.6 97.8 34.5 -6.2 3.4-11.3 11.9-17.5 15.5 -6.9 3.8-14.3 4.8-20.2 9.4 -5.9 4.5-10.9 9.7-15.9 15 -5.9 6.2-12.2 12.6-16.6 19.9 -5.9 9.7-17.5 39.6-22.3 51.3 -4.2 10.6-13.4 21.5-14.4 33.8 -1.1 12.6 6.4 24.1 10.9 34.4 5.6 12.5 17.2 36.4 20.2 43.9 3.1 7.4 5.5 14.6 7.9 22.2 2.5 7.8 3.9 15.8 5.8 23.8 1.9 8.2 5.2 16.6 6.6 24.9 1.6 8.3 2.8 16.9 3.5 25.5 0.8 8.6 0.9 17.5 1.5 26.3 0.4 9 2.5 17.5 1.9 26.4 -0.8 15-6.7 30-11.3 44.3 -12.7 39.8-30.3 73.9-51 111 -20.1 36.1-40.6 72.3-58.4 108.9 -9.3 19.1-24.2 35.5-32.3 54.7 -16 38-42.9 76.7-44.4 119 -1.9 42.2 6 84.9 24.4 123.1 -139.1 10.7-276 18.8-402.7-16.1 -15.8-73.6 68.5-118.8 116.9-160.7 14.8-12.5 35.5-22.8 45.3-37.6 9.8-15 9.8-31.7 14.3-47.3 4.5-15.8 14.3-33.5 15.8-49.7 1.5-15.9-6.8-31.5-10.5-46.6 -4.3-15-10.6-29.4-19.8-42.7 -9.8-13.4-23.9-20.6-39.1-23.2 -15.1-2.5-31 1.1-45.8 3.4 -14.7 2.3-31.3 8.1-46.1 1.5 -14.8-6.5-22.8-22.9-29.2-36.1 -12.5-26.5-26.1-56.1-6-85.3 20.3-29.3 66.4-40.1 101.7-51 30.9-9.5 65.7-16.2 87-44.6 21.7-28.2 9.6-65.1-2.5-96.7 -12-31.7-21.3-67.5-57.7-79.1 -36.4-11.5-70.9 4.4-105.2 17.9 -34.6 13.6-70.8 27.8-108.4 18.2 -38.2-9.4-63.8-39.8-78.9-75.5 -15-35.4-11.1-78.5 4.7-113.3 30.1-66.2 97-90.3 165.2-97.9 67.6-7.8 137.9 5.4 201.2 28.9 31.5 11.7 61.1 26.9 93.5 35.3 32 8.2 74.5 8.8 94.7-16.7 19.5-25.5 13.2-69.3-13.9-88.9 -21.6-15.5-52.5-19.3-77.8-25.8 -25.9-6.5-47.4-22.6-71.2-32.7 -23.8-10.1-52-11.1-68.8-29.8 -8.3-9 0-19.9 8.6-23.9 7.6-3.8 17.8-5.5 26.7-6.9 8.6-1.3 16.9-1.8 25.5-3.2 8.5-1.5 17.1-3.8 25.5-5.9 8.5-2.3 16.7-5.3 25-8.4 8.3-3.1 16.2-6.5 24.4-9.9 8.5-3.4 16.3-9.8 25.6-12.2 9.4-2.5 19.9-3 29.9-3.8 10-0.8 19.9-1.5 29.9-2.3 9.9-0.9 20.2-3.4 30.4-2.3 17.5 1.9 50.4 15.3 82.6 47.2 32.3 32.1 54.7 62.1 62.3 108.9 32.1-14.7 68.9-60.1 47.3-98.4 -19.6-36.1-66.3-66.4-107-82.3 -40.8-15.9-82.6-29.8-124.9-40.8 -84.7-22.2-173.6-34-249.4 11.5 -77.3 45.3-132.4 124.4-133.7 215.9 -0.9 91.5 40.5 164.2 107 221.7 38.3 33.4 87.2 52.5 119.8 87 32.7 35.2 33.1 81.4 20.9 126.5C247.1 424.7 207.7 469.1 157.4 494.7c-39.4 20.1-82.4 15.5-103.4 18.2 -21.4 3-29.8 25.4-53.7 21.1C447.7 610.9 512 542 512 542c0 0-189.7-92-242.9-305.7 -14.1-57.1-5.5-126.2 44.7-159.4 23.2-15.4 51.3-22.4 79.5-22 27.9 0.3 56.1 9.3 80.7 22.1 24.4 12.6 48 28.8 67.8 47.5 19.8 18.7 44.3 37.1 49.9 62.7 5.5 25.8-6.8 58.9-30.3 74.3 -27.6 17.1-63.9 8.1-95.9 17.7 -32.1 9.7-51.5 32.4-61.1 47.5 -2.9 41.8 12.4 78.2 29.8 109.8 33.6-11.4 68.4-19.7 103.8-22.1 35.3-2.5 69.8 0.5 104.6 2.5 34.7 1.9 69.2 5.6 103.9 7.1 34.7 1.5 69 4.1 103.9 3 34.7-1.1 69.4-3.4 104-5.6 34.6-2.2 69.1-5.9 103.9-5.3 17.3 0.3 34.7 0.8 52.1 1.1 -0.3-24.1-9.4-48.4-19.3-71 -5.9-13.2-12.7-25.9-18.3-39.1 -5.8-13.2-11.9-26.4-15.9-40.2 -8.1-27.8-13.6-55.9-16.6-84.9 -1.5-14.5-2.1-29.1-2.3-43.8 -0.2-14.6 0.3-30 4.2-44.5 8-29.4 33.5-37.1 66-43.1 9.9-2.1 21.5-3.1 29.9-8.8 8.1-5.4 11.6-14.9 16.9-23 5.9-8.8 9.8-19 13.9-28.9 8.1-18.2 15.5-36.9 20.6-56.1 4.9-19.3 9.3-40.1 5.9-60.5 -3.3-19.3-18.9-30.5-16.1-52 3.1-21.5 17.8-35.5 22.1-55.9 4.5-20.6-1.1-39.4-16.6-54.5 -16.6-16.3-39.8-29.1-61.7-39.1 -21.8-9.9-43.3-19.9-66.4-25.9 -45.9-12-106.4-13.6-151.2 14.4 -20.8 12.9-51.9 37.9-62.7 60.5 -11.3 22.9-3.4 49.4-15.8 71.9 -6.7 12.3-18.9 21.5-30.1 30.5 -11.3 9-23.6 17.1-36.6 23.9 -12.9 6.8-28.4 15.1-43.8 14.4 -15.5-0.8-28.4-8.4-42.1-15.5 -13.6-7-27.8-13.2-43.4-14.8 -31.5-3.8-66.5 14.7-76.2 47.4 -10.2 33.1 1.9 63.9 17.5 93.3 15.3 29.1 31.7 58.5 43.8 89 12 30.1 32.7 57.9 38.6 89.8 6.2 31.9-8.2 63.9-26.7 90.3 -18.9 26.7-47.5 45-60.1 75.6 -6.1 15.3-6.9 31.7-11.3 47.4 -4.5 15.5-12.7 29.8-22.1 43 -9.5 13.4-19.9 26.3-29.1 39.7 -11.6 17.1-42.3 58.9-38.4 68.8 5.3 11.1 32.8 22 56.4 31.7 23.6 9.8 47.3 19.5 71 29.1 23.7 9.4 47.9 16.7 72.3 24.5 24.2 7.5 48.5 15.9 73.3 21.5 25 5.6 49.8 12.2 75.2 15.3 25.4 3.4 50.6 7.4 76.2 8.8 25.5 1.5 51.2 3.4 76.6 3 25.5-0.3 51.3-1.5 76.6-3.4 25.5-1.7 50.5-5.6 75.9-7.9 25.5-2.1 51.1-6.2 76.4-7.9 25.5-1.6 50.8-2.7 76.1-1.9 25.5 0.5 51.1 3.5 76.2 7.9 7.6 1.5 15.5 2.6 23.2 4 -26.7-38.3-37.8-81.9-37.8-128.5C512 175.9 512 88 512 0c-69.3 5.1-138.9 9.5-208.5 14.2 -34.8 2.3-69.4 5.9-103.6 12.9 -34.3 7.1-67.3 17.3-98.3 35.5 -31.4 18.2-57.7 44.7-77.8 74.3 -21.3 31.7-35.2 68.4-41.7 106.7 -6.7 38.6-6.2 78.6 0.4 117.5 6.5 38.8 17.9 77.3 37.5 112.4 19.3 35.1 45.3 71.7 84.5 91.5 39.6 19.9 101.1 15.5 128.1-21.5 12.9-17.9 14.7-39.3 14.4-60.9 -0.5-21.5-3.5-43.8-17.4-61.2 -12.9-17.1-30.1-33.7-50.1-44.4 -19.8-10.5-42.6-11.1-66-9.5 -23.6 1.9-46.2 11.3-65.6 23.9 -19.5 12.7-37.5 27.3-53.2 43.8 -15.8 16.6-34.8 31.4-42.6 51.3 -7.8 19.6-6.9 39.3-6 55.9 2.8 52.2-36.8 97.5-82.8 123.3C293.7 496.4 400.3 493.4 512 504.3c0-104.3 0-208.7 0-313 0-12.5-3.8-26.8-10.9-37.5 -6.5-10.8-17.8-20.2-27.3-29.6 -9.8-9.5-23.2-14.1-35.5-21.5 -12.5-7.6-23.9-16.1-36.2-24 -12.3-7.9-24.6-16.1-36.5-24.8 -12-8.5-26.2-15.1-35.5-25.8 -18.9-21.5-24.9-41.7-11.5-69.2 13.6-28.1 45.1-46.8 73.9-59.1 9.5-3.9 19.9-7.6 29.1-12.6 9.2-5.1 16.3-11.5 24.7-17.4 8.4-5.8 17.3-10.9 26.5-15.8 9.4-4.7 19.1-9.3 28.9-13.1 9.8-3.8 18.9-9.4 29.1-12.1 10.1-2.6 39-19.3 42.3-28.4 3.9-10.7-9.3-32.5-17.4-43.1 -8.6-10.8-17.1-21.7-27.3-31.3 -10.3-9.8-21.6-18.9-33.4-27.4 -11.9-8.4-23.8-17.1-36.4-24.4 -25.1-14.4-51.9-25-79.2-35.9 -27.1-10.8-55-20.9-83.5-27.9 -28.5-7.1-57.1-13.4-86.2-17.4 -29.1-4.1-58.4-7.9-87.6-9.9 -58.5-4.2-117.3-1.8-175.5 5.5C62.3 7.9 31.2 13 0 18.4c0 31.4 0 62.8 0 94.1C0 93.1 0 73.6 0 54.2c4.5 0.8 9.1 1.5 13.6 2.3 -4.5-0.8-9.1-1.5-13.6-2.3C0 31.4 0 15.7 0 0c57.6 6.9 115.2 13.8 172.9 20.7 28.8 3.5 57.5 8.4 86 14.3 28.5 5.8 56.8 12.4 85 20 28 7.5 56.5 12.5 84.7 18.9 28.2 6.2 56.4 12.5 84.4 19.7 28 7.1 56 12.9 84.1 19.3 28 6.4 55.8 15 84.3 16.6 14.2 0.8 28.8 4 43.3 7.1 -9.3-9.4-19.4-19.4-30.5-28.1 -11.6-9.3-23.5-20.4-37.1-28.4 -13.7-7.9-29.3-13.7-43.5-20.6 -14.2-6.7-27.8-15.9-42.7-21.4 -14.9-5.3-30.5-10.5-45.9-14.7 -15.5-4.2-30.9-10.1-46.6-12.9 -15.9-2.7-31.5-5.5-47.5-7.1 -16.1-1.6-31.8-3.8-48-4 -16.2-0.3-32.5 1.9-48.7 2.1 -16.2 0.3-33-1.5-48.9 0.8 -15.9 2.3-32.2 2.9-48 6.4 -15.8 3.8-32 5.9-47.5 11.1 -15.5 5.2-31.4 9.5-46.6 16.2 -15.1 6.7-30.8 11.1-45.3 19.4 -14.7 8.4-29.8 15.5-43.8 25.1 -14.1 9.7-28.8 18.5-42.1 29.4 -13.3 10.9-26.9 21.1-39.5 32.7 -12.3 11.6-24.9 23.2-36.2 35.9C80.8 168.5 69.2 181.7 58.4 195.6c-10.8 14.1-21.6 28.1-31.2 43 -9.6 14.9-19.1 30.1-27.3 45.9 0 25 0 50 0 75 35.5-59.2 75.4-111.1 123.3-151.6 50.1-42.2 105.9-77.4 163.1-103.5 27.7-12.5 58.6-23.5 89.4-28.2 31.2-4.8 61.3-8.2 92.8-7.8 63.1 0.8 128.2 24.3 165.7 76.9 18.8 26.5 29.8 58.9 32.5 91.3 2.5 32.3-2.3 65.6-5.5 97.1 -5.5 52.3-11.8 103.7-27.3 152.3 10.3 5.3 21.5 8.6 33.4 9.9 11.3 1.4 24.9 1.6 34.5-2.8 5-2.3 11.4-6.8 15-11.8 3.5-5.1 4.7-10.8 6.2-16.4 3.4-11.6 5.9-23.4 6.1-35.5 0.2-12.2-1.3-24.4-3.4-36.4 -4.8-27.1-11.4-53.2-22.7-78.3 -5.3-12.3-10.5-24.6-17.3-36.1 -6.8-11.7-14.4-22.8-23.2-33.4 -18.2-21.4-39.7-39.4-63.7-55.5 -24.2-16.3-50.1-30.1-77.1-41.9 -54-23.7-113.2-33.6-171.9-43.2 -29.3-4.2-60.2-9.6-89.9-12.1 -29.9-2.3-59.9-3.9-89.9-2.8 -29.9 1.1-60 3.8-89.7 8.6 -29.9 4.7-59.5 13.1-88.5 22.4 43.8-6.7 88.3-15.6 132.9-16.6 44.6-1.1 89.1-0.6 133.6 3.8 88.9 8.7 177.2 31.6 250.1 93.8 33.1 28.1 59.8 62.7 78.3 102.8 9.3 19.9 15.8 41.6 21.5 63.1 5.3 21.5 12.5 42.9 13.2 65.1 0.8 23-7.5 44.6-9.8 66.9 -2.1 22.2 0.8 44.4 0.8 66.5 0 21.9 3.1 44.4 3.1 66.9 0 45.2-14.6 94.3-56.2 120.3 -41.7 26-90.7 17.1-138.1 14 -21.5-1.3-183.8-8.8-240.3-56 -26.1-21.5-46.6-50.7-63.8-80.1 -17.4-29.2-34.7-59.2-44.2-91.3 -9.4-32.1-14.4-65.9-14.4-99.6 0-34 7.8-67.5 19.1-99.8 11.3-32.4 25.4-63.9 46.2-92.2 20.8-28.5 45.6-52.9 74.3-74.2 57.8-42.9 123.4-72 191.7-97.7 64.9-24.3 134.1-38.4 203.2-49.4 17.1-2.8 34.3-5.1 51.6-7.6 -17.3 2.6-34.5 4.9-51.6 7.6 -69.1 11-138.4 25.1-203.2 49.4 -68.3 25.7-133.9 54.8-191.7 97.7 -28.7 21.3-53.5 45.7-74.3 74.2 -20.8 28.3-34.9 59.8-46.2 92.2 -11.3 32.3-19.1 65.8-19.1 99.8 0 33.7 5 67.5 14.4 99.6 9.5 32.1 26.8 62.1 44.2 91.3 17.2 29.4 37.7 58.6 63.8 80.1 56.5 47.2 218.8 54.7 240.3 56 47.4 3.1 96.4 12 138.1-14 41.6-26 56.2-75.1 56.2-120.3 0-22.5-3.1-45-3.1-66.9 0-22.1-2.9-44.3-0.8-66.5 2.3-22.3 10.6-43.9 9.8-66.9 -0.7-22.2-7.9-43.6-13.2-65.1 -5.7-21.5-12.2-43.2-21.5-63.1 -18.5-40.1-45.2-74.7-78.3-102.8 -72.9-62.2-161.2-85.1-250.1-93.8 -44.5-4.4-89-4.9-133.6-3.8 -44.6 1-89.1 9.9-132.9 16.6 29-9.3 58.6-17.7 88.5-22.4 29.7-4.8 59.8-7.5 89.7-8.6 30-1.1 60 0.5 89.9 2.8 29.7 2.5 60.6 7.9 89.9 12.1 58.7 9.6 117.9 19.5 171.9 43.2 27 11.8 52.9 25.6 77.1 41.9 24 16.1 45.5 34.1 63.7 55.5 8.8 10.6 16.4 21.7 23.2 33.4 6.8 11.5 12 23.8 17.3 36.1 11.3 25.1 17.9 51.2 22.7 78.3 2.1 12 3.6 24.2 3.4 36.4 -0.2 12.1-2.7 23.9-6.1 35.5 -1.5 5.6-2.7 11.3-6.2 16.4 -3.6 5-10 9.5-15 11.8 -9.6 4.4-23.2 4.2-34.5 2.8 -11.9-1.3-23.1-4.6-33.4-9.9 15.5-48.6 21.8-100 27.3-152.3 3.2-31.5 8-64.8 5.5-97.1 -2.7-32.4-13.7-64.8-32.5-91.3 -37.5-52.6-102.6-76.1-165.7-76.9 -31.5-0.4-61.6 3-92.8 7.8 -30.8 4.7-61.7 15.7-89.4 28.2 -57.2 26.1-113 61.3-163.1 103.5C75.4 177.5 35.5 229.4 0 288.6 0 180.7 0 90.3 0 0 167.1 32.1 333.7 64.2 500 96.4c-75.9 0-151.8 0-227.6 0 -37.9 0-75.9 0-113.8 0 -18.9 0-37.9 0-56.7 0 -9.5 0-18.9 0-28.4 0 -4.8 0-9.4 0-14.2 0 -2.3 0-4.7 0-7.1 0 -1.2 0-2.3 0-3.5 0 -0.6 0-1.2 0-1.8 0 -0.3 0-2.1 0.3-0.9 0 1.2-0.3-1.8 0-1.8 0 -2.9 1.1-5.9 1.9-8.9 2.9 -2.9 0.9-5.9 1.8-8.8 2.8 -5.6 1.9-11.5 4.2-16.7 7.1 -5.3 2.9-11.9 7.1-14.7 11.9 -2.9 4.9-4.5 13.7-5 20.2 -0.5 6.5-0.2 12.9-0.3 19.3 -0.1 13-0.3 26.1-0.5 39.1 -0.2 26-0.5 52.1-0.8 78.1 -0.7 52.3-1.3 104.6-2 156.9 -1.6 104.6-3.2 209.2-4.7 313.8C0 412.3 0 206.2 0 0 167.1 32.1 333.7 64.2 500 96.4c4 0 8 0 12 0 -33.7-6.4-67.4-12.8-101.3-19.3 -33.7-6.6-67.1-14.5-101.1-19.9 -34-5.3-67.7-11.8-101.8-17.1 -33.9-5.1-67.8-10-101.8-14.9 -33.8-4.7-67.8-6.8-101.5-12.8C71.1 6.4 36.1-1.1 0 0c0 56.9 0 113.7 0 170.6 0 57 0 114 0 171.1 0 57 0 114 0 171 0 57 0 114 0 171 -34.7-6.4-70.6-12.7-105.9-19.1 -17.6-3.2-35.5-7.1-52.7-12.7 -17.3-5.4-35.9-10.8-50.9-20.6 -15.1-9.7-29.6-27.1-36.6-40.9 -7.1-13.8-8.1-27.1-6.8-44.9 1.5-17.7 5.3-37.6 12.3-57.7 7.1-19.9 18.9-41.1 31.7-64.8 12.7-23.7 28.5-50.6 42.1-82.2 13.6-31.5 22.5-70.5 21.4-110 -1.9-78.9-46.4-159.2-103.3-202.9C-306.2-198.3-512-97.6-512-97.6v1263.9c240.2-72 368.5-58.6 512-1.3 143 57.1 272.5 80.9 512 1.6V-97.6c0 0-143.5 68.3-286.9 157.1 -71.7 44.5-143.2 97.8-195 165 -26 33.6-46.8 71.1-62.4 111.7 -15.5 41.1-30.8 78.7-35.1 130.5 -2.1 26.1-2.5 53-0.8 79.1 1.7 26 8.8 51.1 15.1 75.9 6.5 24.9 13.9 49.4 24.9 73.4 10.8 23.9 26.5 47.3 44.6 68.5 18.1 21 39.1 42 64.1 60.1 24.8 17.9 54.3 35.9 84.6 52.8 30.5 16.6 62.6 29.8 95.5 41.3 66 23.2 138.8 34.8 209.5 28.9 35.3-3 70.1-10.8 103.9-21 33.8-10.2 64.7-28.1 95.9-44.2 31.3-15.9 65.6-30.9 93.9-50.1 28.5-19 52.8-42.4 77.8-65.6 25.1-23.6 52.3-42.6 76.9-67.8 24.6-25 45.1-51.9 65.7-79.9 20.5-28.1 40.6-56.8 58.3-87 18-30.3 31.9-62.7 47.7-94.4 15.6-31.7 30.9-63.9 43.5-97 12.5-33.3 22.6-68.1 25-104.8 2.4-36.7-8.2-75.3-25.1-108.6 -17.1-33.3-39.4-64.6-67.1-90.7C602.2-73.3 553.6-97.6 512-97.6V1166.6c0 0-232.5 55-512-54.2 -279.5-109.1-512 54.2-512 54.2V-97.6c0 0 232.5-55 512 54.2 279.5 109.2 512-54.2 512-54.2V1166.6"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://jmeter.apache.org/",
      primaryColor: "#D22128",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#24262E] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192zm85.5-242.5c-6.2-6.2-16.4-6.2-22.6 0L256 268.4l-62.9-62.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l74.2 74.2c6.2 6.2 16.4 6.2 22.6 0l74.2-74.2c6.2-6.3 6.2-16.4 0-22.6z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.cypress.io/",
      primaryColor: "#24262E",
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
        <div className="w-full h-12 flex justify-center items-center bg-[#4389FF] text-white rounded-md">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M404.1 66c-25.2-25.2-155.3-58.1-212.9-63.3 -3.2-0.3-6.3 1-8.3 3.5 -2.1 2.5-2.8 5.8-1.9 8.8 4.8 17.8 13.1 53.9 13.1 80.1 0 35.7-13.9 61.7-25.3 78.8 -11.9 17.9-22.2 30.2-22.2 53.9 0 28.3 17 52.9 32.5 73.3 15.3 20.1 22.9 33.9 22.9 38.1 0 4.1-7.7 17.9-22.9 38.1 -15.5 20.3-32.5 45-32.5 73.3 0 23.7 10.3 36 22.2 53.9 11.4 17.1 25.3 43 25.3 78.8 0 26.2-8.3 62.3-13.1 80.1 -0.9 3.1-0.2 6.4 1.9 8.8 2.1 2.5 5.2 3.8 8.3 3.5 57.6-5.2 187.7-38.1 212.9-63.3 20.8-20.8 27.5-67.7 27.5-105.6 0-28.9-7.3-56.5-11.3-74.1 -0.9-3.8-4.1-6.6-8-7 -6.5-0.7-15.1-1.1-19-1.1 -38.6 0-65.6-13.9-63.6-63.8 1.9-47.9 48.7-36.1 77-36.1 3.9 0 12.5-0.4 19-1.1 3.9-0.4 7.1-3.2 8-7 4-17.7 11.3-45.2 11.3-74.1C431.6 133.7 424.9 86.8 404.1 66z"/>
          </svg>
        </div>
      ),
      websiteUrl: "https://www.zaproxy.org/",
      primaryColor: "#4389FF",
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
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Essential Testing Tools for QA Engineers</h2>
              <p className="text-gray-700 mb-4">
                Having the right tools is crucial for effective software testing. This guide highlights industry-standard tools that QA engineers use for different types of testing, from API and browser automation to performance and security testing.
              </p>
              <p className="text-gray-700">
                Each tool has its own strengths and specialties. Understanding when and how to use each tool will make you a more effective QA professional, capable of addressing diverse testing challenges across the software development lifecycle.
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
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Tool Logo */}
                <div className="mb-4">
                  {tool.logo}
                </div>
                
                {/* Tool Name and Categories */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {tool.category.map((cat) => {
                      const categoryInfo = categories.find(c => c.id === cat);
                      return (
                        <Badge key={cat} variant="outline" className={`${categoryInfo?.color} bg-opacity-10`}>
                          {categoryInfo?.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-4">{tool.description}</p>
                
                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Use Cases:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {tool.useCases.slice(0, 3).map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Website Link */}
                <a 
                  href={tool.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium"
                  style={{ color: tool.primaryColor }}
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Tool Comparison Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Choosing the Right Tool for Your Testing Needs</h2>
          
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Testing Type</th>
                  <th className="px-6 py-3 text-left">Recommended Tools</th>
                  <th className="px-6 py-3 text-left">Key Considerations</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">API Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#FF6C37]">Postman</span>
                      <span className="font-medium text-[#68B631]">SoapUI</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm">
                      <li>Ease of use vs advanced features</li>
                      <li>Support for your specific API types</li>
                      <li>Integration with CI/CD pipelines</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Browser Automation</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#43B02A]">Selenium</span>
                      <span className="font-medium text-[#24262E]">Cypress</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm">
                      <li>Cross-browser testing needs</li>
                      <li>Speed vs flexibility</li>
                      <li>Debugging capabilities</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Performance Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#D22128]">JMeter</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm">
                      <li>Types of performance metrics needed</li>
                      <li>Scale of load simulation required</li>
                      <li>Resource monitoring capabilities</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Mobile Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#662D91]">Appium</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm">
                      <li>Native vs hybrid app testing</li>
                      <li>Device coverage required</li>
                      <li>Platform-specific features</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Security Testing</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-[#4389FF]">OWASP ZAP</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside text-sm">
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
          
          {/* Adjusted grid to lg:grid-cols-3 to accommodate the new card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" /> {/* Replaced SVG with Lucide icon */}
                </div>
                <h3 className="text-lg font-semibold mb-2">Start with Small Tests</h3> {/* Adjusted font weight */}
                <p className="text-sm text-gray-600"> {/* Adjusted font size/color */}
                  Begin with simple test cases before scaling up. This helps you understand the tool's capabilities and limitations quickly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                   <Video className="w-6 h-6" /> {/* Replaced SVG with Lucide icon */}
                </div>
                <h3 className="text-lg font-semibold mb-2">Use Video Tutorials</h3> {/* Adjusted font weight */}
                <p className="text-sm text-gray-600"> {/* Adjusted font size/color */}
                  Most popular tools have extensive video tutorials. These can be more effective than written docs for learning practical implementation.
                </p>
              </CardContent>
            </Card>
            
            {/* Added new card */}
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" /> {/* Lucide icon */}
                </div>
                <h3 className="text-lg font-semibold mb-2">Read the Docs</h3> {/* Adjusted font weight */}
                <p className="text-sm text-gray-600"> {/* Adjusted font size/color */}
                  Official documentation often contains crucial details, configuration options, and advanced features not covered in basic tutorials.
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
