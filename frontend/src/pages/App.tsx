import React from "react";
import { Header } from "components/Header";
import { HeroSection } from "components/HeroSection";
import { FeatureSection } from "components/FeatureSection";
import { PrinciplesSection } from "components/PrinciplesSection";

export default function App() {
  // Feature section data
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Quality Assurance Fundamentals",
      description: "Master the principles of software testing and learn to identify, report, and track defects effectively."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: "Industry-Standard Methodologies",
      description: "Learn SDLC, STLC, and various testing methods including Black Box, White Box, and API Testing."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: "Practical Testing Tools",
      description: "Gain hands-on experience with industry-leading tools like Postman, Selenium, JMeter and more."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: "Team Communication",
      description: "Develop essential communication skills needed to work effectively in cross-functional development teams."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
      title: "Career Development",
      description: "Create a professional CV, prepare for interviews, and learn what employers are looking for in QA engineers."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: "Mobile & Database Testing",
      description: "Specialize in testing mobile applications and databases to expand your technical expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header transparent={true} />
      
      {/* Hero Section */}
      <HeroSection 
        title="Elevate Your QA Engineering Skills"
        subtitle="Comprehensive training for aspiring and professional Quality Assurance engineers, covering modern testing principles, methodologies, and tools."
        ctaText="Get Started"
        ctaLink="/intro"
      />
      
      {/* Feature Section */}
      <FeatureSection 
        title="Explore the QA Knowledge Hub"
        subtitle="This platform provides a complete journey through modern QA concepts, methodologies, tools, and real-world practices to help you become a highly effective quality assurance professional."
        features={[
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Quality Assurance Fundamentals",
            description: "Master the principles of software testing and learn to identify, report, and track defects effectively."
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            title: "Industry-Standard Methodologies",
            description: "Learn SDLC, STLC, and various testing methods including Black Box, White Box, and API Testing."
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
            title: "Practical Testing Tools",
            description: "Gain hands-on experience with industry-leading tools like Postman, Selenium, JMeter and more."
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
            title: "Team Communication",
            description: "Develop essential communication skills needed to work effectively in cross-functional development teams."
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>,
            title: "Defect Management & Reporting",
            description: "Learn how to manage, triage, and report defects using real-world tools and workflows."
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
            title: "Real-World QA Scenarios",
            description: "Explore real QA scenarios, test case design, traceability, and best practices for modern software projects."
          }
        ]}
      />
      
      
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Al-Tofail Al-Hiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
