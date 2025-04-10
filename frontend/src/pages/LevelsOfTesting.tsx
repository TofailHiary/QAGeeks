import React from "react";
import { PageLayout } from "components/PageLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
            What are Levels of Testing?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Testing levels define a systematic approach to verifying software quality. They represent a hierarchy of testing activities, starting from individual components and progressing towards the complete system validation. This structured process helps find defects early, prevents overlapping efforts, and ensures comprehensive coverage across the development lifecycle.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            By applying these distinct levels—Unit, Integration, System, and Acceptance Testing—organizations can systematically identify and fix defects, resulting in a higher-quality product delivered to end users.
          </p>
        </section>

        {/* Accordion Section */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Unit Testing */}
          <AccordionItem value="unit" className="border border-blue-300 dark:border-blue-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 transition-colors duration-200">
              1. Unit Testing
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>Definition:</strong> Unit testing is a type of software testing where individual, isolated units or components of software (like functions, methods, or modules) are tested to validate their correctness.</p>
              <p><strong>Performed By:</strong> Developers during the coding phase.</p>
              <p><strong>Why Perform Unit Testing?</strong> Inappropriate unit testing leads to high costs for defect fixing later. Proper unit testing saves time and money in the long run.</p>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Key Reasons:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Fix bugs early in the development cycle and save costs.</li>
                <li>Helps developers understand the codebase and make changes quickly.</li>
                <li>Good unit tests serve as project documentation.</li>
                <li>Helps with code re-use; migrate code and tests together.</li>
              </ul>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Types:</h4>
              <p>Manual, Automated</p>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Tools:</h4>
              <p>Jtest, Junit, NUnit, EMMA, PHPUnit, TestNG</p>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Advantages:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Allows developers to understand unit functionality and API.</li>
                <li>Refines code and ensures module correctness.</li>
                <li>Enables testing parts of the project without waiting for others.</li>
              </ul>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Disadvantages:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Writing test cases can be time-consuming.</li>
                <li>Will not cover all errors, especially integration issues.</li>
                <li>Not efficient for UI testing.</li>
                <li>Requires maintenance when source code changes frequently.</li>
                <li>Cannot cover non-functional testing (scalability, performance).</li>
              </ul>
              <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">Example:</h4>
              <p>Main function:</p>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                {`int Add(int a, int b) { return a+b; }`}
              </pre>
              <p>Unit test code:</p>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                {`void TestAdd1() { Assert.IsEqual(Add(5, 10), 15); }`}
              </pre>
            </AccordionContent>
          </AccordionItem>

          {/* Integration Testing */}
          <AccordionItem value="integration" className="border border-purple-300 dark:border-purple-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-200 transition-colors duration-200">
              2. Integration Testing
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>Definition:</strong> Integration testing is where software modules are integrated logically and tested as a group to expose defects in their interactions.</p>
              <p><strong>Performed By:</strong> Developers, QA, or specialized integration teams.</p>
              <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400">Advantages:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Ensures integrated modules work properly together.</li>
                <li>Testing can start once relevant modules are available.</li>
                <li>Detects errors related to interfaces between modules.</li>
                <li>Helps verify interactions with APIs and third-party tools.</li>
                <li>Typically covers a large volume of the system, increasing efficiency.</li>
                <li>Increases test coverage and reliability.</li>
              </ul>
              <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400">Example:</h4>
              <p>Check that after adding items to the cart, the checkout module correctly receives that information and calculates shipping costs.</p>
              <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-400">Approaches:</h4>
              <dl className="space-y-2 pl-4">
                <div>
                  <dt className="font-medium">Big Bang Approach:</dt>
                  <dd className="ml-4">All components are integrated at once and tested as a single unit. Requires all components to be ready. <br /><em>Example: Waiting for the Login, User Profile, and Order History modules to be complete before testing them together.</em></dd>
                </div>
                <div>
                  <dt className="font-medium">Bottom-Up Approach:</dt>
                  <dd className="ml-4">Lower-level modules are tested first, then used to facilitate testing of higher-level modules, progressing upwards. <br /><em>Example: Testing the database connection module first, then the data retrieval module that uses it, and finally the UI display module that shows the data.</em></dd>
                </div>
                <div>
                  <dt className="font-medium">Top-Down Approach:</dt>
                  <dd className="ml-4">Higher-level modules are tested first, often using 'stubs' (dummy modules) for lower-level dependencies. Testing progresses downwards. <br /><em>Example: Testing the main application UI first, using stubs for the payment processing and inventory modules, then replacing the stubs as the actual modules become available.</em></dd>
                </div>
                <div>
                  <dt className="font-medium">Sandwich Testing (Hybrid):</dt>
                  <dd className="ml-4">Combines Top-Down and Bottom-Up. Top-level modules are tested with lower-level modules, while lower modules are integrated with top modules simultaneously. Uses both stubs and drivers. <br /><em>Example: Testing the UI layer (top) with stubs for business logic, while simultaneously testing the data access layer (bottom) with drivers, and then integrating the middle business logic layer.</em></dd>
                </div>
              </dl>
              {/* Integration test example diagram description can be added here if needed */}
            </AccordionContent>
          </AccordionItem>

          {/* System Testing */}
          <AccordionItem value="system" className="border border-teal-300 dark:border-teal-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-teal-100 dark:bg-teal-900 hover:bg-teal-200 dark:hover:bg-teal-800 text-teal-800 dark:text-teal-200 transition-colors duration-200">
              3. System Testing
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>Definition:</strong> System testing validates the complete and fully integrated software product against its specified requirements. It evaluates the end-to-end system behavior.</p>
              <p><strong>Performed By:</strong> Independent QA/Testers.</p>
              <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400">Advantages:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Testers don't need deep programming knowledge (Black Box).</li>
                <li>Tests the entire product, finding errors missed in earlier stages.</li>
                <li>Uses a testing environment similar to production.</li>
                <li>Checks overall functionality against business and technical requirements.</li>
                <li>Increases confidence before moving to acceptance testing.</li>
              </ul>
              <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400">Disadvantages:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>More time-consuming than unit or integration testing.</li>
                <li>Can be expensive as it tests the entire system.</li>
                <li>Requires good debugging tools to find hidden errors.</li>
              </ul>
              <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400">Example:</h4>
              <p>Simulate a full customer journey—searching for products, adding them to the cart, checking out, and receiving an order confirmation email—to ensure the entire system works seamlessly.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Acceptance Testing */}
          <AccordionItem value="acceptance" className="border border-pink-300 dark:border-pink-700 rounded-lg shadow-md overflow-hidden">
            <AccordionTrigger className="text-xl font-semibold px-6 py-4 bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-800 text-pink-800 dark:text-pink-200 transition-colors duration-200">
              4. Acceptance Testing
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white dark:bg-gray-800 space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>Definition:</strong> Acceptance testing is performed by end-users or clients to verify/accept the software system against their business requirements before it moves to production.</p>
              <p><strong>Performed By:</strong> Clients, End-users.</p>
              <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400">Common Types:</h4>
              <dl className="space-y-2 pl-4">
                <div>
                  <dt className="font-medium">User Acceptance Testing (UAT):</dt>
                  <dd className="ml-4">Assesses if the product works correctly for user usage, focusing on frequently used requirements. Also called End-User Testing.</dd>
                </div>
                <div>
                  <dt className="font-medium">Alpha Testing:</dt>
                  <dd className="ml-4">Performed by internal teams (e.g., QA, product owners) in a controlled environment near the end of development. Feedback helps improve the product.</dd>
                </div>
                <div>
                  <dt className="font-medium">Beta Testing:</dt>
                  <dd className="ml-4">Performed by a limited set of actual end-users (beta testers) in their real environment before official release. Feedback is collected to fix issues and enhance user experience.</dd>
                </div>
              </dl>
              <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400">Other Types:</h4>
              <p>Business Acceptance Testing (BAT), Contract Acceptance Testing (CAT), Regulations/Compliance Acceptance Testing (RAT), Operational Acceptance Testing (OAT).</p>
              <h4 className="font-semibold text-lg text-pink-700 dark:text-pink-400">Example:</h4>
              <p>Have a selected group of customers or stakeholders use the e-commerce site’s new feature (e.g., “Buy Now” button) in a staging environment and give feedback on usability and correctness before it goes live.</p>
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

        {/* Navigation or Footer Elements */}
        <div className="mt-20 text-center">
           {/* Existing Next Button or add other navigation/footer */}
           <a
            href="/testing-types" // Assuming this is the correct next page
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Next: Testing Types
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </PageLayout>
  );
}
