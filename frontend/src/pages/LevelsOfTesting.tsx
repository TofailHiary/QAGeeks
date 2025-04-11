import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components
import { Code, Network, Monitor, UserCheck } from 'lucide-react'; // Import icons
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/extensions/shadcn/components/accordion";

export default function LevelsOfTesting() {
  return (
    <PageLayout
      title="Levels of Software Testing"
      subtitle="Understanding the Hierarchy of Testing"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16 text-gray-800 dark:text-gray-200">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            The Hierarchy of Software Verification
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Software testing isn't a single activity but a structured process involving multiple <strong className="font-semibold text-blue-600 dark:text-blue-400">levels of verification</strong>. Each level focuses on a specific scope, building confidence progressively from the smallest code units to the complete system in its operational environment.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Understanding these levels—<strong className="font-semibold">Unit, Integration, System, and Acceptance Testing</strong>—is crucial for QA professionals to design effective test strategies, detect defects early, ensure comprehensive coverage, and ultimately deliver high-quality software that meets user expectations.
          </p>
        </section>

        {/* Visual Hierarchy Section */}
        <section className="flex flex-col items-center space-y-[-1px] my-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">The Testing Pyramid</h3>
          {/* Acceptance */}
          <div className="bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-100 font-medium w-full md:w-3/4 lg:w-1/2 text-center py-3 px-4 rounded-t-lg shadow-sm z-10 border border-b-0 border-pink-300 dark:border-pink-700">
            Acceptance Testing (UAT, Alpha, Beta)
          </div>
          {/* System */}
          <div className="bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-100 font-medium w-full md:w-4/5 lg:w-7/12 text-center py-3 px-4 shadow-sm z-20 border border-b-0 border-teal-300 dark:border-teal-700">
            System Testing
          </div>
          {/* Integration */}
          <div className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-100 font-medium w-full md:w-11/12 lg:w-3/4 text-center py-3 px-4 shadow-sm z-30 border border-b-0 border-purple-300 dark:border-purple-700">
            Integration Testing
          </div>
          {/* Unit */}
          <div className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 font-medium w-full text-center py-3 px-4 rounded-b-lg shadow-sm z-40 border border-blue-300 dark:border-blue-700">
            Unit Testing
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 italic">Tests build upon each other, starting from the smallest units.</p>
        </section>


        {/* Accordion Section */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Unit Testing */}
          <AccordionItem value="unit" className="border border-blue-300 dark:border-blue-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 transition-colors duration-200 flex items-center justify-between w-full">
              <span className="flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                1. Unit Testing
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {/* Core Info */}
              <div className="mb-6 space-y-3">
                <p><strong className="text-blue-700 dark:text-blue-300 font-semibold">Definition:</strong> Unit testing is a type of software testing where individual, isolated units or components of software (like functions, methods, or modules) are tested to validate their correctness.</p>
                <p><strong className="font-semibold">Performed By:</strong> Developers during the coding phase.</p>
                <p><strong className="font-semibold">Why Perform Unit Testing?</strong> Inappropriate unit testing leads to high costs for defect fixing later. Proper unit testing saves time and money in the long run.</p>
              </div>

              {/* Key Reasons */}
              <div className="mb-6 p-4 bg-blue-50 dark:bg-gray-700/30 rounded-md border border-blue-200 dark:border-blue-900">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400 mb-2">Key Reasons:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Fix bugs early in the development cycle and save costs.</li>
                <li>Helps developers understand the codebase and make changes quickly.</li>
                <li>Good unit tests serve as project documentation.</li>
                  <li>Helps with code re-use; migrate code and tests together.</li>
                </ul>
              </div>

              {/* Types & Tools */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400 mb-1">Types:</h4>
                  <p>Manual, Automated</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400 mb-1">Tools:</h4>
                  <p>Jtest, Junit, NUnit, EMMA, PHPUnit, TestNG</p>
                </div>
              </div>

              {/* Advantages */}
              <div className="mb-6 p-4 bg-green-50 dark:bg-gray-700/30 rounded-md border border-green-200 dark:border-green-900">
                <h4 className="font-semibold text-lg text-green-700 dark:text-green-400 mb-2">Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Allows developers to understand unit functionality and API.</li>
                <li>Refines code and ensures module correctness.</li>
                  <li>Enables testing parts of the project without waiting for others.</li>
                </ul>
              </div>

              {/* Disadvantages */}
              <div className="mb-6 p-4 bg-red-50 dark:bg-gray-700/30 rounded-md border border-red-200 dark:border-red-900">
                <h4 className="font-semibold text-lg text-red-700 dark:text-red-400 mb-2">Disadvantages:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Writing test cases can be time-consuming.</li>
                <li>Will not cover all errors, especially integration issues.</li>
                <li>Not efficient for UI testing.</li>
                <li>Requires maintenance when source code changes frequently.</li>
                  <li>Cannot cover non-functional testing (scalability, performance).</li>
                </ul>
              </div>

              {/* Example */}
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400 mb-2">Example:</h4>
                <p className="mb-1">Main function:</p>
                <pre className="bg-gray-100 dark:bg-gray-900 rounded-md p-3 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 mb-3">
                  {`int Add(int a, int b) { return a+b; }`}
                </pre>
                <p className="mb-1">Unit test code:</p>
                <pre className="bg-gray-100 dark:bg-gray-900 rounded-md p-3 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                  {`void TestAdd1() { Assert.IsEqual(Add(5, 10), 15); }`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

           {/* Integration Testing */}
          <AccordionItem value="integration" className="border border-purple-300 dark:border-purple-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-200 transition-colors duration-200 flex items-center justify-between w-full">
               <span className="flex items-center">
                 <Network className="mr-3 h-6 w-6 text-purple-600 dark:text-purple-400" />
                 2. Integration Testing
               </span>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {/* Core Info */}
              <div className="mb-6 space-y-3">
                <p><strong className="text-purple-700 dark:text-purple-300 font-semibold">Definition:</strong> Integration testing is where software modules are integrated logically and tested as a group to expose defects in their interactions.</p>
                <p><strong className="font-semibold">Performed By:</strong> Developers, QA, or specialized integration teams.</p>
              </div>

              {/* Advantages */}
              <div className="mb-6 p-4 bg-green-50 dark:bg-gray-700/30 rounded-md border border-green-200 dark:border-green-900">
                <h4 className="font-semibold text-lg text-green-700 dark:text-green-400 mb-2">Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Ensures integrated modules work properly together.</li>
                <li>Testing can start once relevant modules are available.</li>
                <li>Detects errors related to interfaces between modules.</li>
                <li>Helps verify interactions with APIs and third-party tools.</li>
                <li>Typically covers a large volume of the system, increasing efficiency.</li>
                  <li>Increases test coverage and reliability.</li>
                </ul>
              </div>

              {/* Example */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400 mb-2">Example:</h4>
                <p>Check that after adding items to the cart, the checkout module correctly receives that information and calculates shipping costs.</p>
              </div>

              {/* Approaches */}
              <div className="mb-4 p-4 bg-purple-50 dark:bg-gray-700/30 rounded-md border border-purple-200 dark:border-purple-900">
                <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400 mb-3">Approaches:</h4>
                <dl className="space-y-4 pl-4">
                  <div>
                    <dt className="font-medium text-purple-600 dark:text-purple-300">Big Bang Approach:</dt>
                    <dd className="ml-4 mt-1 text-sm">All components are integrated at once and tested as a single unit. Requires all components to be ready. <br /><em className="text-gray-500 dark:text-gray-400">Example: Waiting for the Login, User Profile, and Order History modules to be complete before testing them together.</em></dd>
                </div>
                <div>
                  </div>
                  <div>
                    <dt className="font-medium text-purple-600 dark:text-purple-300">Bottom-Up Approach:</dt>
                    <dd className="ml-4 mt-1 text-sm">Lower-level modules are tested first, then used to facilitate testing of higher-level modules, progressing upwards. <br /><em className="text-gray-500 dark:text-gray-400">Example: Testing the database connection module first, then the data retrieval module that uses it, and finally the UI display module that shows the data.</em></dd>
                  </div>
                  <div>
                    <dt className="font-medium text-purple-600 dark:text-purple-300">Top-Down Approach:</dt>
                    <dd className="ml-4 mt-1 text-sm">Higher-level modules are tested first, often using 'stubs' (dummy modules) for lower-level dependencies. Testing progresses downwards. <br /><em className="text-gray-500 dark:text-gray-400">Example: Testing the main application UI first, using stubs for the payment processing and inventory modules, then replacing the stubs as the actual modules become available.</em></dd>
                  </div>
                  <div>
                    <dt className="font-medium text-purple-600 dark:text-purple-300">Sandwich Testing (Hybrid):</dt>
                    <dd className="ml-4 mt-1 text-sm">Combines Top-Down and Bottom-Up. Top-level modules are tested with lower-level modules, while lower modules are integrated with top modules simultaneously. Uses both stubs and drivers. <br /><em className="text-gray-500 dark:text-gray-400">Example: Testing the UI layer (top) with stubs for business logic, while simultaneously testing the data access layer (bottom) with drivers, and then integrating the middle business logic layer.</em></dd>
                  </div>
                </dl>
                {/* Integration test example diagram description can be added here if needed */}
              </div>
            </AccordionContent>
          </AccordionItem>

           {/* System Testing */}
          <AccordionItem value="system" className="border border-teal-300 dark:border-teal-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-teal-100 dark:bg-teal-900 hover:bg-teal-200 dark:hover:bg-teal-800 text-teal-800 dark:text-teal-200 transition-colors duration-200 flex items-center justify-between w-full">
               <span className="flex items-center">
                 <Monitor className="mr-3 h-6 w-6 text-teal-600 dark:text-teal-400" />
                 3. System Testing
               </span>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {/* Core Info */}
              <div className="mb-6 space-y-3">
                <p><strong className="text-teal-700 dark:text-teal-300 font-semibold">Definition:</strong> System testing validates the complete and fully integrated software product against its specified requirements. It evaluates the end-to-end system behavior.</p>
                <p><strong className="font-semibold">Performed By:</strong> Independent QA/Testers.</p>
              </div>

              {/* Advantages */}
              <div className="mb-6 p-4 bg-green-50 dark:bg-gray-700/30 rounded-md border border-green-200 dark:border-green-900">
                <h4 className="font-semibold text-lg text-green-700 dark:text-green-400 mb-2">Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Testers don't need deep programming knowledge (Black Box).</li>
                <li>Tests the entire product, finding errors missed in earlier stages.</li>
                <li>Uses a testing environment similar to production.</li>
                <li>Checks overall functionality against business and technical requirements.</li>
                  <li>Increases confidence before moving to acceptance testing.</li>
                </ul>
              </div>

              {/* Disadvantages */}
              <div className="mb-6 p-4 bg-red-50 dark:bg-gray-700/30 rounded-md border border-red-200 dark:border-red-900">
                <h4 className="font-semibold text-lg text-red-700 dark:text-red-400 mb-2">Disadvantages:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>More time-consuming than unit or integration testing.</li>
                <li>Can be expensive as it tests the entire system.</li>
                  <li>Requires good debugging tools to find hidden errors.</li>
                </ul>
              </div>

              {/* Example */}
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400 mb-2">Example:</h4>
                <p>Simulate a full customer journey—searching for products, adding them to the cart, checking out, and receiving an order confirmation email—to ensure the entire system works seamlessly.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

           {/* Acceptance Testing */}
          <AccordionItem value="acceptance" className="border border-pink-300 dark:border-pink-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-800 text-pink-800 dark:text-pink-200 transition-colors duration-200 flex items-center justify-between w-full">
               <span className="flex items-center">
                 <UserCheck className="mr-3 h-6 w-6 text-pink-600 dark:text-pink-400" />
                 4. Acceptance Testing
               </span>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {/* Core Info */}
              <div className="mb-6 space-y-3">
                <p><strong className="text-pink-700 dark:text-pink-300 font-semibold">Definition:</strong> Acceptance testing is performed by end-users or clients to verify/accept the software system against their business requirements before it moves to production.</p>
                <p><strong className="font-semibold">Performed By:</strong> Clients, End-users.</p>
              </div>

              {/* Common Types */}
              <div className="mb-6 p-4 bg-pink-50 dark:bg-gray-700/30 rounded-md border border-pink-200 dark:border-pink-900">
                <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400 mb-3">Common Types:</h4>
                <TooltipProvider> {/* Wrap sections needing tooltips */}
                  <dl className="space-y-4 pl-4">
                    <div>
                      <dt className="font-medium text-pink-600 dark:text-pink-300">
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted cursor-help">User Acceptance Testing (UAT)</TooltipTrigger>
                        <TooltipContent>
                            <p>Verifies the software meets user needs in real-world scenarios.</p>
                          </TooltipContent>
                        </Tooltip>:
                      </dt>
                      <dd className="ml-4 mt-1 text-sm">Assesses if the product works correctly for user usage, focusing on frequently used requirements. Also called End-User Testing.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-pink-600 dark:text-pink-300">Alpha Testing:</dt>
                      <dd className="ml-4 mt-1 text-sm">Performed by internal teams (e.g., QA, product owners) in a controlled environment near the end of development. Feedback helps improve the product.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-pink-600 dark:text-pink-300">Beta Testing:</dt>
                      <dd className="ml-4 mt-1 text-sm">Performed by a limited set of actual end-users (beta testers) in their real environment before official release. Feedback is collected to fix issues and enhance user experience.</dd>
                    </div>
                  </dl>
                </TooltipProvider>
              </div>

              {/* Other Types */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400 mb-2">Other Types:</h4>
                <TooltipProvider>
                  <p>
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted cursor-help">Business Acceptance Testing (BAT)</TooltipTrigger>
                      <TooltipContent><p>Ensures the software meets business objectives and processes.</p></TooltipContent>
                    </Tooltip>,{' '}
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted cursor-help">Contract Acceptance Testing (CAT)</TooltipTrigger>
                      <TooltipContent><p>Verifies the software meets criteria specified in a contract.</p></TooltipContent>
                    </Tooltip>,{' '}
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted cursor-help">Regulations/Compliance Acceptance Testing (RAT)</TooltipTrigger>
                      <TooltipContent><p>Ensures compliance with legal and regulatory standards.</p></TooltipContent>
                    </Tooltip>,{' '}
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted cursor-help">Operational Acceptance Testing (OAT)</TooltipTrigger>
                      <TooltipContent><p>Checks the system's readiness for operation and maintenance.</p></TooltipContent>
                    </Tooltip>.
                  </p>
                </TooltipProvider>
              </div>

              {/* Example */}
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400 mb-2">Example:</h4>
                <p>Have a selected group of customers or stakeholders use the e-commerce site’s new feature (e.g., “Buy Now” button) in a staging environment and give feedback on usability and correctness before it goes live.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Comparison Table Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            System Testing vs. Integration Testing
          </h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <Table className="min-w-full">
              <TableHeader className="bg-gradient-to-r from-gray-700 to-gray-900">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Aspect</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">System Testing</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Integration Testing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Goal</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Testing the completed product against specification requirements.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Testing the collection and interface of modules for expected results.</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Scope</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Both functional and non-functional testing (usability, performance, etc.).</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Primarily functional testing of combined module outcomes.</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Level</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">High-level testing performed after Integration Testing.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Low-level testing performed after Unit Testing.</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Approach</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Black Box testing (no internal code knowledge required).</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Can be Black Box, White Box, or Gray Box (may require code knowledge).</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Performed By</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Test Engineers only.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Developers and/or Test Engineers.</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Defect Scope</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Defects found relate to the system as a whole.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Defects found relate to interfaces between individual modules.</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Test Cases</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Developed to simulate real-life scenarios.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Developed to simulate interactions between modules.</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Testing Types Covered</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Sanity, usability, maintenance, regression, performance, etc.</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Big Bang, Top-Down, Bottom-Up, Sandwich approaches.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Summary Table Section */}
        <section className="mt-16">
           <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            Testing Levels Summary
          </h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <Table className="min-w-full">
              <TableHeader className="bg-gradient-to-r from-gray-700 to-gray-900">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Testing Level</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Performed By</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Focus</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Typical Phase in SDLC</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Unit Testing</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Developers</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Individual code modules</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">During Development</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Test a single function</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Integration Testing</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Dev/QA/Integration team</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Interaction between modules</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">After Unit Tests</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Test how cart works with checkout</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">System Testing</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">QA/Testers</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Entire system behavior</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">After Integration Tests</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Test full end-to-end workflows</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">Acceptance Testing</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">End Users/Clients</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Meeting user/business needs</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">After System Testing</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Users validate final application</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section className="mt-16 p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
            Key Takeaways
          </h3>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li><strong>Layered Approach:</strong> Testing levels provide a structured hierarchy (Unit → Integration → System → Acceptance) for thorough software validation.</li>
            <li><strong>Early Defect Detection:</strong> Each level aims to catch defects specific to its scope, preventing them from propagating to later stages where they are costlier to fix.</li>
            <li><strong>Scope Variation:</strong> Testing focus shifts from individual code components (Unit) to interactions (Integration), the entire system (System), and finally user/business requirements (Acceptance).</li>
            <li><strong>Collaboration:</strong> Different roles (Developers, QA, End Users) are typically involved at different levels.</li>
            <li><strong>Confidence Building:</strong> Successfully passing each level increases confidence in the software's quality and readiness for release.</li>
          </ul>
        </section>

        {/* Navigation or Footer Elements */}
        <div className="mt-20 text-center">
           {/* Existing Next Button or add other navigation/footer */}
           <Link
            to="/testing-types" // Use Link component
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Next: Testing Types
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </PageLayout>
  );
}
