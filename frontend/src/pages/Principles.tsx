import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { ConceptCard } from "components/ConceptCard";

export default function Principles() {
  // Seven Principles of Testing
  const sevenPrinciples = [
    {
      number: "01",
      title: "Testing Shows Presence of Defects",
      description: "Testing can show that defects are present, but cannot prove that there are no defects."
    },
    {
      number: "02",
      title: "Exhaustive Testing is Impossible",
      description: "Testing everything is not feasible except for trivial cases. Risk analysis and priorities should be used to focus testing efforts."
    },
    {
      number: "03",
      title: "Early Testing",
      description: "Testing activities should start as early as possible and be focused on defined objectives."
    },
    {
      number: "04",
      title: "Defect Clustering",
      description: "A small number of modules usually contains most of the defects discovered."
    },
    {
      number: "05",
      title: "Pesticide Paradox",
      description: "If the same tests are repeated over and over, eventually they will no longer find any new bugs."
    },
    {
      number: "06",
      title: "Testing is Context Dependent",
      description: "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
    },
    {
      number: "07",
      title: "Absence of Errors Fallacy",
      description: "Finding and fixing defects does not help if the system built does not fulfill the user's needs and expectations."
    }
  ];

  // Tabs for different sections
  const [activeTab, setActiveTab] = useState("principles");

  // Static vs Dynamic Testing comparison
  const staticVsDynamicDetails = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#00A2FF]">Static Testing</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Performed without executing code</li>
            <li>Reviews, walkthroughs, inspections</li>
            <li>Focuses on prevention rather than detection</li>
            <li>Finds defects rather than failures</li>
            <li>Can improve product quality early in the lifecycle</li>
          </ul>
          <p className="mt-2 italic">Examples: Code reviews, document analysis, static analysis tools</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#9C27FF]">Dynamic Testing</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Requires execution of the software</li>
            <li>Functional, non-functional, and structural testing</li>
            <li>Focuses on behavior of the software</li>
            <li>Detects failures in the software</li>
            <li>Verifies the functionality works as expected</li>
          </ul>
          <p className="mt-2 italic">Examples: Unit testing, integration testing, system testing</p>
        </div>
      </div>
      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">When to use each approach</h4>
        <p>Both static and dynamic testing are complementary and should be used together for effective quality assurance:</p>
        <ul className="list-disc list-inside mt-2">
          <li><span className="font-medium">Early development phases:</span> Focus on static testing to prevent defects</li>
          <li><span className="font-medium">Later development phases:</span> Focus on dynamic testing to validate functionality</li>
          <li><span className="font-medium">Critical systems:</span> Use both extensively throughout development</li>
        </ul>
      </div>
    </div>
  );

  // Manual vs Automation Testing comparison
  const manualVsAutomationDetails = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#00A2FF]">Manual Testing</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Performed by human testers</li>
            <li>Best for exploratory, usability, and ad-hoc testing</li>
            <li>No scripting knowledge required</li>
            <li>Time-consuming for regression testing</li>
            <li>Great for UX evaluation and visual verification</li>
          </ul>
          <p className="mt-2 italic">When to use: New features, complex scenarios, infrequently changing features</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#9C27FF]">Automation Testing</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Executed by tools and scripts</li>
            <li>Ideal for regression, load, and performance testing</li>
            <li>Requires programming or scripting skills</li>
            <li>Time-efficient for repetitive tasks</li>
            <li>Good test coverage with consistent execution</li>
          </ul>
          <p className="mt-2 italic">When to use: Regression testing, load testing, frequently changing features</p>
        </div>
      </div>
      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">Best Practices for Testing Strategy</h4>
        <p>A balanced approach using both manual and automated testing provides optimal results:</p>
        <ul className="list-disc list-inside mt-2">
          <li><span className="font-medium">Automate:</span> Repetitive tasks, regression tests, data-driven tests</li>
          <li><span className="font-medium">Manual:</span> New features, exploratory testing, usability testing</li>
          <li><span className="font-medium">Hybrid:</span> Use automation to set up test data/environment, then manual testing for verification</li>
        </ul>
      </div>
    </div>
  );

  // Verification vs Validation comparison
  const verificationVsValidationDetails = (
    <div>
      {/* Comparison Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#00A2FF]">Verification</h4>
          <p className="mb-2">"Are we building the product right?"</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Evaluates documents, code, and plans</li>
            <li>Static testing techniques</li>
            <li>Performed without executing code</li>
            <li>Reviews, walkthroughs, inspections</li>
            <li>Ensures compliance with specifications</li>
          </ul>
          <p className="mt-2 italic">Examples: Requirements reviews, design reviews, code reviews</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2 text-[#9C27FF]">Validation</h4>
          <p className="mb-2">"Are we building the right product?"</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Evaluates the product itself</li>
            <li>Dynamic testing techniques</li>
            <li>Requires executing the software</li>
            <li>Testing against user requirements</li>
            <li>Ensures the product meets user needs</li>
          </ul>
          <p className="mt-2 italic">Examples: User acceptance testing, system testing, beta testing</p>
        </div>
      </div>
      {/* SDLC Integration Section removed from here, now rendered separately below */}
    </div>
  );

  return (
    <PageLayout
      title="Principles & Concepts"
      subtitle="Learn the core principles and concepts that guide effective quality assurance"
    >
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b">
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'principles' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('principles'))}
          >
            Seven Principles
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'keyConcepts' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('keyConcepts'))}
          >
            Key Concepts
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'staticVsDynamic' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('staticVsDynamic'))}
          >
            Static vs Dynamic
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'manualVsAuto' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('manualVsAuto'))}
          >
            Manual vs Automation
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'qaqc' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('qaqc'))}
          >
            QA vs QC
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'verificationVsValidation' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : 'text-gray-600 hover:text-[#00A2FF]'}`}
            onClick={() => React.startTransition(() => setActiveTab('verificationVsValidation'))}
          >
            Verification vs Validation
          </button>
        </div>

        {/* Seven Principles of Testing */}
        {activeTab === 'principles' && (
          <div>
            <div className="mb-8">
              <p className="text-lg text-center max-w-4xl mx-auto mb-16">
                The Seven Principles of Software Testing provide fundamental guidelines that every QA professional should understand and apply in their testing practice.
              </p>
            </div>

            {/* Detailed Principles Section */}
            <div className="space-y-8 mb-16">
              {sevenPrinciples.map((principle, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#00A2FF]">
                  <div className="p-6">
                    <div className="flex items-baseline mb-3">
                      <span className="text-4xl font-black text-[#00A2FF] mr-4">{principle.number}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{principle.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {/* Map descriptions based on title */}
                      {principle.title === "Testing Shows Presence of Defects" && "The goal of software testing is to make the software fail. Software testing reduces the presence of defects. Software testing talks about the presence of defects and doesn’t talk about the absence of defects. Software testing can ensure that defects are present but it can not prove that software is defect-free. Even multiple tests can never ensure that software is 100% bug-free. Testing can reduce the number of defects but not remove all defects."}
                      {principle.title === "Exhaustive Testing is Impossible" && "It is the process of testing the functionality of the software in all possible inputs (valid or invalid) and pre-conditions is known as exhaustive testing. Exhaustive testing is impossible means the software can never test at every test case. It can test only some test cases and assume that the software is correct and it will produce the correct output in every test case. If the software will test every test case then it will take more cost, effort, etc., which is impractical."}
                      {principle.title === "Early Testing" && "To find the defect in the software, early test activity shall be started. The defect detected in the early phases of SDLC will be very less expensive. For better performance of software, software testing will start at the initial phase i.e. testing will perform at the requirement analysis phase."}
                      {principle.title === "Defect Clustering" && "In a project, a small number of modules can contain most of the defects. The Pareto Principle for software testing states that 80% of software defects come from 20% of modules."}
                      {principle.title === "Pesticide Paradox" && "Repeating the same test cases, again and again, will not find new bugs. So it is necessary to review the test cases and add or update test cases to find new bugs."}
                      {principle.title === "Testing is Context Dependent" && "The testing approach depends on the context of the software developed. Different types of software need to perform different types of testing. For example, The testing of the e-commerce site is different from the testing of the Android application."}
                      {principle.title === "Absence of Errors Fallacy" && "If a built software is 99% bug-free but does not follow the user requirement then it is unusable. It is not only necessary that software is 99% bug-free but it is also mandatory to fulfill all the customer requirements."}
                    </p>
                    <div className="bg-gradient-to-r from-[#00A2FF]/10 to-[#9C27FF]/10 p-4 rounded-md border-l-4 border-[#9C27FF]">
                      <p className="font-semibold text-[#9C27FF] mb-1">Example:</p>
                      <p className="text-gray-600 italic">
                        {/* Map examples based on title */}
                        {principle.title === "Testing Shows Presence of Defects" && "Imagine you test a calculator app and find a bug when adding large numbers. This proves there is a defect. However, even after extensive testing, you can’t be absolutely certain that no other defects exist. You’ve shown that problems are present, but you can’t prove that the product is now perfect."}
                        {principle.title === "Exhaustive Testing is Impossible" && "Consider a login form. If you tried every possible combination of usernames, passwords, special characters, and browser/device variations, you’d never finish testing. Instead, you pick the most important and likely scenarios to test, such as common usernames, boundary-length passwords, and popular browsers."}
                        {principle.title === "Early Testing" && "When designing a new mobile banking feature, you review the requirements before coding begins and identify that the requirement for handling foreign currency conversions is unclear. You clarify and correct this early, preventing a costly code fix later."}
                        {principle.title === "Defect Clustering" && "In a shopping website, most errors appear in the checkout process (e.g., payment gateway and order summary) rather than in the product listing pages. Focusing testing efforts on checkout-related functionalities helps catch the majority of defects quickly."}
                        {principle.title === "Pesticide Paradox" && "You have 10 test cases that find bugs in the first release of your app. When you run the same 10 test cases on the next release, you don’t find new bugs because the old ones were fixed. To uncover new defects, you need to create new or modified test cases."}
                        {principle.title === "Testing is Context Dependent" && "For a hospital’s patient record system, you use detailed test plans, formal documentation, and multiple review steps because accuracy is critical. For a mobile puzzle game, you might rely on quick, informal testing and user feedback because the stakes are lower."}
                        {principle.title === "Absence of Errors Fallacy" && "Your team builds a photo-sharing app with zero reported bugs in the code. However, users uninstall it because it doesn’t allow easy sharing with friends. The software may be “error-free,” but it doesn’t meet the user’s real needs."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Why These Principles Matter</h3>
              <p className="text-gray-700 mb-4">
                Understanding these principles helps QA professionals establish realistic expectations about testing and build effective test strategies. They guide testing efforts to be more efficient, focused, and valuable to the overall software development process.
              </p>
              <p className="text-gray-700">
                These principles should influence all testing activities, from test planning and design to execution and reporting. They help balance thoroughness with practicality in the testing approach.
              </p>
            </div>
          </div>
        )}

        {/* Key Concepts Tab */}
        {activeTab === 'keyConcepts' && (
          <div className="space-y-8">
            <div className="mb-8">
              <p className="text-lg text-center max-w-4xl mx-auto mb-8">
                Understanding these fundamental terms is essential for effective communication and practice in software quality assurance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#00A2FF]">
                <h3 className="text-xl font-bold mb-2 text-[#00A2FF]">Testing</h3>
                <p className="text-gray-700">The process of verifying and validating that a software application is bug-free, meets technical requirements, and fulfills user needs efficiently, handling all exceptional and boundary cases.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#9C27FF]">
                <h3 className="text-xl font-bold mb-2 text-[#9C27FF]">Debugging</h3>
                <p className="text-gray-700">The process of identifying, analyzing, and removing errors (bugs) in the software after it fails to execute correctly. It's a complex activity aimed at solving the root cause of a problem.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#00A2FF]">
                <h3 className="text-xl font-bold mb-2 text-[#00A2FF]">Product</h3>
                <p className="text-gray-700">Software developed for multiple customers based on consolidated requirements, intended for broad use.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#9C27FF]">
                <h3 className="text-xl font-bold mb-2 text-[#9C27FF]">Project</h3>
                <p className="text-gray-700">Software developed for a single customer based on their specific requirements, intended for use only by that customer.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#00A2FF] md:col-span-2">
                <h3 className="text-xl font-bold mb-2 text-[#00A2FF]">Bugs / Issues</h3>
                <p className="text-gray-700">A coding error causing an unexpected defect, fault, flaw, or imperfection. If a program doesn't perform as intended, it likely has a bug.</p>
              </div>
            </div>
          </div>
        )}

        {/* QA vs QC Tab */}
        {activeTab === 'qaqc' && (
          <div className="space-y-8">
            <div className="mb-8">
              <p className="text-lg text-center max-w-4xl mx-auto mb-8">
                Understanding the difference between Quality Assurance (QA) and Quality Control (QC) is fundamental to building high-quality software.
              </p>
            </div>

            {/* SQA Concept Card */}
            <ConceptCard
              title="Software Quality Assurance (SQA)"
              summary="A proactive process focused on preventing defects by ensuring adherence to defined standards and processes throughout the SDLC."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.588-3.79l-.01-.01z" />
                </svg>
              }
              details={
                <div>
                  <p className="mb-4">SQA incorporates all software development processes, from requirements definition to release, aiming to ensure quality is built-in.</p>
                  <h4 className="font-bold text-lg mb-2 text-[#00A2FF]">Example:</h4>
                  <p className="italic bg-blue-50 p-3 rounded">
                    For an online banking app, QA activities include establishing coding standards, requiring code reviews, and ensuring all requirements are clear and approved before development starts. This prevents defects proactively.
                  </p>
                </div>
              }
              accentColor="#00A2FF"
            />

            {/* SQC Concept Card */}
            <ConceptCard
              title="Software Quality Control (SQC)"
              summary="A reactive process focused on identifying defects in the actual product by monitoring and verifying deliverables against defined quality standards."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              details={
                <div>
                  <p className="mb-4">QC involves testing the product to find defects. It's about detection rather than prevention and happens after QA activities have defined the standards.</p>
                  <h4 className="font-bold text-lg mb-2 text-[#9C27FF]">Example:</h4>
                  <p className="italic bg-purple-50 p-3 rounded">
                    After the banking app is developed, QC testers execute test cases (e.g., trying valid/invalid logins) to find issues like incorrect error messages or lockout failures. This finds defects before release.
                  </p>
                </div>
              }
              accentColor="#9C27FF"
            />

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">QA vs QC Comparison</h3>
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Aspect</th>
                    <th className="px-4 py-2 text-left">Quality Assurance (QA)</th>
                    <th className="px-4 py-2 text-left">Quality Control (QC)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr><td className="px-4 py-2 font-medium">Focus</td><td className="px-4 py-2">Prevent defects</td><td className="px-4 py-2">Identify & fix defects</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Nature</td><td className="px-4 py-2">Proactive</td><td className="px-4 py-2">Reactive</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Goal</td><td className="px-4 py-2">Process improvement</td><td className="px-4 py-2">Product quality verification</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Technique</td><td className="px-4 py-2">Preventive</td><td className="px-4 py-2">Corrective</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Involvement</td><td className="px-4 py-2">Full SDLC</td><td className="px-4 py-2">Testing phase (STLC)</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Activity Type</td><td className="px-4 py-2">Verification (Are we doing it right?)</td><td className="px-4 py-2">Validation (Did we do the right thing?)</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Execution</td><td className="px-4 py-2">Does not involve program execution</td><td className="px-4 py-2">Involves program execution</td></tr>
                  <tr><td className="px-4 py-2 font-medium">Team</td><td className="px-4 py-2">Whole team</td><td className="px-4 py-2">Testing team</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Static vs Dynamic Testing */}
        {activeTab === 'staticVsDynamic' && (
          <div>
            <div className="mb-8">
              <p className="text-lg text-center max-w-4xl mx-auto mb-8">
                Understanding the difference between static and dynamic testing helps in creating a comprehensive testing strategy that addresses all aspects of software quality.
              </p>
            </div>

            <ConceptCard
              title="Static vs Dynamic Testing"
              summary="Compare the two fundamental approaches to software testing that complement each other throughout the development lifecycle."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
              details={staticVsDynamicDetails}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center text-[#00A2FF]">
                  <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Benefits of Static Testing
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00A2FF] mr-2">•</span>
                    <span>Early defect detection, reducing cost of fixes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A2FF] mr-2">•</span>
                    <span>Identifies issues that might be missed during execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A2FF] mr-2">•</span>
                    <span>Improves code maintainability and readability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A2FF] mr-2">•</span>
                    <span>Finds defects in documents and specifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A2FF] mr-2">•</span>
                    <span>Enhances team communication and knowledge sharing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center text-[#9C27FF]">
                  <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Benefits of Dynamic Testing
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#9C27FF] mr-2">•</span>
                    <span>Validates actual behavior of the software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9C27FF] mr-2">•</span>
                    <span>Catches runtime and integration issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9C27FF] mr-2">•</span>
                    <span>Tests the user experience and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9C27FF] mr-2">•</span>
                    <span>Verifies functionality against requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9C27FF] mr-2">•</span>
                    <span>Builds confidence in the system before release</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Manual vs Automation Testing */}
        {activeTab === 'manualVsAuto' && (
          <div>
            <div className="mb-8">
              <p className="text-lg text-center max-w-4xl mx-auto mb-8">
                Both manual and automated testing have unique strengths. Understanding when to use each approach is crucial for efficient and effective quality assurance.
              </p>
            </div>
            
            <ConceptCard
              title="Manual vs Automation Testing"
              summary="Compare the two primary testing methods to understand their appropriate applications and how to balance them in your testing strategy."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              details={manualVsAutomationDetails}
              accentColor="#9C27FF"
            />
            
            <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] px-6 py-4">
                <h3 className="text-xl font-bold text-white">Choosing the Right Testing Approach</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Use Manual Testing When</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <span className="text-[#00A2FF] mr-2">•</span>
                        <span>Exploratory testing is needed</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#00A2FF] mr-2">•</span>
                        <span>Testing UI/UX and visual aspects</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#00A2FF] mr-2">•</span>
                        <span>Short-term projects with changing requirements</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#00A2FF] mr-2">•</span>
                        <span>Usability testing with user feedback</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Use Automation Testing When</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <span className="text-[#9C27FF] mr-2">•</span>
                        <span>Regression testing is frequent</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#9C27FF] mr-2">•</span>
                        <span>Load and performance testing is required</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#9C27FF] mr-2">•</span>
                        <span>Repetitive test cases with consistent data</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-[#9C27FF] mr-2">•</span>
                        <span>Long-term projects with stable requirements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Best Balance</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Automated smoke and sanity tests</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Manual exploratory and UX testing</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Automated API and integration tests</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Manual complex scenario testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Verification vs Validation */}
      {activeTab === 'verificationVsValidation' && (
        <div>
          <div className="mb-8">
            <p className="text-lg text-center max-w-4xl mx-auto mb-8">
              Verification and validation are complementary processes that ensure both technical correctness and fulfillment of user needs.
            </p>
          </div>
          
          <ConceptCard
            title="Verification vs Validation"
            summary="Understand the distinction between building the product right (verification) and building the right product (validation)."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            details={verificationVsValidationDetails}
          />

          {/* SDLC Integration separate card */}
          <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">SDLC Integration</h3>
            <p className="mb-4">Both verification and validation are essential throughout the software development lifecycle:</p>
            <div className="relative overflow-hidden">
              {/* Timeline vertical line */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-[#00A2FF] to-[#9C27FF] left-[15px] top-0"></div>
              <div className="space-y-6 pl-14">
                {/* Requirements Phase */}
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-[#00A2FF] rounded-full -left-[11px] top-1 shadow"></div>
                  <div className="pl-10">
                    <h4 className="font-bold">Requirements Phase</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-[#00A2FF]">Verification</p>
                      <p className="text-sm">Review requirements for consistency, completeness, and clarity</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-medium text-[#9C27FF]">Validation</p>
                      <p className="text-sm">Confirm requirements actually meet user needs and business goals</p>
                    </div>
                  </div>
                </div>
                {/* Design Phase */}
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-[#4482FF] rounded-full -left-[11px] top-1 shadow"></div>
                  <div className="pl-10">
                    <h4 className="font-bold">Design Phase</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-[#00A2FF]">Verification</p>
                      <p className="text-sm">Ensure design aligns with requirements specifications</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-medium text-[#9C27FF]">Validation</p>
                      <p className="text-sm">Review design with stakeholders to confirm it meets expectations</p>
                    </div>
                  </div>
                </div>
                {/* Implementation Phase */}
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-[#7B54FF] rounded-full -left-[11px] top-1 shadow"></div>
                  <div className="pl-10">
                    <h4 className="font-bold">Implementation Phase</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-[#00A2FF]">Verification</p>
                      <p className="text-sm">Code reviews, static analysis, unit tests to verify against design</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-medium text-[#9C27FF]">Validation</p>
                      <p className="text-sm">Component/integration tests to validate against requirements</p>
                    </div>
                  </div>
                </div>
                {/* Testing Phase */}
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-[#9C27FF] rounded-full -left-[11px] top-1 shadow"></div>
                  <div className="pl-10">
                    <h4 className="font-bold">Testing Phase</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-[#00A2FF]">Verification</p>
                      <p className="text-sm">System testing, test coverage analysis, compliance checking</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-medium text-[#9C27FF]">Validation</p>
                      <p className="text-sm">User acceptance testing, beta testing, usability testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        {/* Next Button */}
        <div className="mt-12 text-center">
          <Link
            to="/sdlc"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            SDLC →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
