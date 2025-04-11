import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/extensions/shadcn/components/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip
import { ExternalLink, TestTubeDiagonal, Bug, RefreshCw, Search, Zap, ShieldCheck, Gauge, Users, Shuffle, Move, CheckCircle, XCircle, Settings, Smartphone, Laptop, Network, MoveLeft } from 'lucide-react'; // Import icons (Added MoveLeft)

// Enhanced SectionCard with subtle gradient and icon support
const SectionCard: React.FC<{ title: string; children: React.ReactNode; color: string; icon?: React.ElementType }> = ({ title, children, color, icon: Icon }) => (
  <Card className={`shadow-lg border-l-4 ${color.replace('text-', 'border-')} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/90 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-xl`}>
    <CardHeader className={`p-5 border-b dark:border-gray-700 flex flex-row items-center justify-between`}>
      <div className="flex items-center space-x-3">
        {Icon && <Icon className={`w-7 h-7 ${color}`} />}
        <CardTitle className={`text-2xl font-bold ${color}`}>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-6 space-y-4 text-gray-800 dark:text-gray-300 text-base leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

// Data for Sanity vs Smoke comparison table from user feedback
const sanityVsSmokeData = [
  { feature: "Purpose", sanity: "To verify that specific functionalities work correctly after changes or bug fixes. Example: You fixed a bug in the “Apply Coupon” feature for an e-commerce site. You only test that coupon function to confirm it now applies discounts correctly.", smoke: "To ensure that the overall build is stable enough for further testing. Example: You receive a new software build. You quickly test core flows (e.g., login, adding an item to cart, basic checkout) to confirm no major showstoppers before deeper testing." },
  { feature: "Focus", sanity: "Targets specific components or features that have been modified. Example: Only the “Search” function was updated, so you run quick checks on “Search” results, filtering, and pagination to ensure the fix works.", smoke: "Checks the basic functionality of the entire application. Example: You check login, product browsing, and a basic purchase flow to confirm these main areas function without crashing or major errors." },
  { feature: "Execution", sanity: "Conducted without predefined test cases, often informally. Example: After a bug fix in “User Profile Edit,” you quickly open the profile page, make changes, and see if the changes are saved—no formal test script is used.", smoke: "Can be executed manually or automated, typically with a set of predefined test cases. Example: You have an automated “smoke suite” that runs each time a new build is released, checking essential paths (login, navigation, minimal transactions)." },
  { feature: "Scope", sanity: "Narrow scope, focusing only on areas impacted by recent changes. Example: If only the Payment Gateway integration was modified, you only test payment processing for different card types and ignore other areas like “Product Search.”", smoke: "Broad scope, encompassing the application’s core functionalities. Example: You test core modules like user registration, login, product listing, and minimal checkout to make sure the application holds together overall." },
  { feature: "Stability Requirement", sanity: "The software must be relatively stable for testing. Example: You won’t do sanity testing if the system is constantly crashing; you wait for a version that is at least stable enough so that bug fixes can be verified without interruption.", smoke: "The software can be stable or unstable; it serves as an initial check. Example: Even if the build is fresh and might crash, you attempt a quick smoke test to confirm whether it’s worth proceeding or if the build needs immediate fixes." },
  { feature: "Documentation", sanity: "No formal documentation or test scripts are typically created. Example: You fix a data display bug in a user profile. You do an informal check—no separate test plan—just “open the page, see if data is correctly displayed now.”", smoke: "Test documents and scripts are often generated for future reference. Example: You maintain a standard smoke testing checklist (or automation scripts) so you can quickly verify each new build in a consistent manner." },
  { feature: "Testing Phase", sanity: "Usually conducted after smoke testing to validate specific fixes. Example: Once smoke testing confirms the build is at least functional, you move on to sanity testing the specific bug fixes in the “Discount Module.", smoke: "Performed after each new build to verify overall stability. Example: Every time developers provide a new build, you run a smoke test covering critical user flows: e.g., user creation, login, minimal transaction, and logout." },
  { feature: "Type of Testing", sanity: "Subset of regression testing. Example: You only re-check the “Add to Cart” regression tests if that feature was recently updated to ensure no new bugs were introduced in that particular flow.", smoke: "Subset of acceptance testing. Example: You conduct a quick test of the major acceptance criteria (login, basic checkout) before you do in-depth acceptance testing on all functionalities and user stories." },
];


export default function TestingTypes() {
  return (
    <PageLayout
      title="Testing Types"
      subtitle="Discover the various types of software testing techniques"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Overview Section - Enhanced */}
        <SectionCard title="Understanding Testing Types" color="text-[#00A2FF]" icon={TestTubeDiagonal}>
          <p>
            Software testing is broadly categorized based on its focus: verifying <strong>what</strong> the system does (Functional) versus <strong>how</strong> it performs (Non-Functional). Understanding these categories helps QA professionals select the right testing approach for different scenarios.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-lg text-[#00A2FF] mb-2">Functional Testing (What it does)</h3>
              <p className="text-sm">Focuses on validating that the software behaves according to specified requirements. It involves testing specific functions, features, APIs, UI elements, and security aspects by providing inputs and checking outputs. Think of it as checking if each part does its job correctly.</p>
              <p className="text-xs mt-2 italic">Primarily uses Black-Box techniques.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-lg text-[#9C27FF] mb-2">Non-Functional Testing (How it performs)</h3>
              <p className="text-sm">Evaluates aspects like performance, usability, reliability, security, and scalability. It assesses the overall quality and user experience beyond just core features. Think of it as checking how well the system operates under various conditions.</p>
              <p className="text-xs mt-2 italic">Crucial for user satisfaction and system robustness.</p>
            </div>
          </div>
        </SectionCard>

        {/* Functional Testing Accordion - Enhanced */}
        <SectionCard title="Functional Testing Techniques" color="text-[#00A2FF]" icon={Settings}>
         <TooltipProvider delayDuration={100}>
          <Accordion type="single" collapsible className="w-full space-y-3">

            {/* Smoke Testing */}
            <AccordionItem value="smoke" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Smoke Testing</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                <p>A quick check to ensure the most critical functionalities of a build are working. It acts as a gatekeeper, determining if a build is stable enough for further, more detailed testing.</p>
                <p><strong>Key Takeaway:</strong> Use it right after receiving a new build to catch major showstoppers early. Think "Is this build basically usable?"</p>
                <p>
                  <strong>
                    <Tooltip>
                      <TooltipTrigger className="cursor-help underline decoration-dotted">AKA:</TooltipTrigger>
                      <TooltipContent>Also Known As</TooltipContent>
                    </Tooltip>
                  </strong> Build Verification Testing (<Tooltip><TooltipTrigger className="cursor-help underline decoration-dotted">BVT</TooltipTrigger><TooltipContent>Build Verification Testing</TooltipContent></Tooltip>), Confidence Testing.
                </p>
                <p><strong>Example:</strong> For a new e-commerce build, check if users can log in, view products, and add an item to the cart. If any of these fail, the build is likely rejected immediately.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Sanity Testing */}
            <AccordionItem value="sanity" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <TestTubeDiagonal className="w-5 h-5 text-green-500" />
                   <span>Sanity Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                <p>A focused check performed after minor code changes or bug fixes to verify that the specific changes work correctly and haven't negatively impacted closely related functionalities. It's narrower than smoke testing.</p>
                <p><strong>Key Takeaway:</strong> Use it after a bug fix or small feature change to quickly confirm the fix works and didn't break anything obvious nearby. Think "Did this specific change work as intended?"</p>
                <p><strong>Relationship:</strong> Often considered a subset of Regression Testing, but much narrower and quicker.</p>
                <p><strong>Example:</strong> After fixing a bug in the "Apply Coupon" feature, sanity testing would involve trying valid and invalid coupons to ensure the fix works, without re-testing the entire checkout flow.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Sanity vs Smoke Table */}
            <AccordionItem value="sanity-smoke-comparison" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <Shuffle className="w-5 h-5 text-orange-500" />
                   <span>Sanity vs. Smoke Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-4 bg-white dark:bg-gray-800">
                 <p className="mb-3 text-sm italic">A common point of confusion! Here's a breakdown:</p>
                 <div className="overflow-x-auto rounded-lg border dark:border-gray-600 shadow-sm">
                    <Table className="min-w-full text-sm">
                      <TableHeader className="bg-gray-100 dark:bg-gray-700">
                        <TableRow>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 w-1/4">Feature</TableHead>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">Sanity Testing</TableHead>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">Smoke Testing</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y dark:divide-gray-600">
                        {sanityVsSmokeData.map((row, idx) => (
                          <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <TableCell className="font-medium px-4 py-3">{row.feature}</TableCell>
                            <TableCell className="px-4 py-3">{row.sanity}</TableCell>
                            <TableCell className="px-4 py-3">{row.smoke}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
              </AccordionContent>
            </AccordionItem>

            {/* Regression Testing */}
            <AccordionItem value="regression" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <RefreshCw className="w-5 h-5 text-blue-500" />
                   <span>Regression Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                <p>Re-running previously executed tests after code changes (bug fixes, new features, enhancements) to ensure these changes haven't introduced new defects or negatively impacted existing functionality ("regressions").</p>
                <p><strong>Key Takeaway:</strong> Essential for maintaining stability. Run it whenever code changes to prevent unintended side effects. Think "Did the recent changes break anything that used to work?"</p>
                <p><strong>Scope:</strong> Can range from a small subset of tests (related to the change) to a full test suite.</p>
                <p><strong>Example:</strong> After adding a "Wishlist" feature, run regression tests covering login, product browsing, adding to cart, and checkout to ensure these core flows weren't broken by the new feature.</p>
              </AccordionContent>
            </AccordionItem>

             {/* Re-testing */}
            <AccordionItem value="re-testing" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <Bug className="w-5 h-5 text-red-500" />
                   <span>Re-testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                <p>Specifically testing functionality that previously failed (a bug) to confirm that the bug fix has resolved the issue.</p>
                <p><strong>Key Takeaway:</strong> Directly verifies a bug fix. Always perform re-testing after a developer claims a bug is fixed. Think "Is this specific bug actually gone?"</p>
                <p><strong>Difference from Regression:</strong> Re-testing focuses *only* on the fixed bug, while regression checks for *unintended* side effects elsewhere.</p>
                <p><strong>Example:</strong> A bug prevented users from uploading profile pictures. After the fix, re-testing involves attempting to upload a picture again using the exact steps that previously failed.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Exploratory Testing */}
            <AccordionItem value="exploratory" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <Search className="w-5 h-5 text-purple-500" />
                   <span>Exploratory Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                 <p>A simultaneous process of learning, test design, and test execution. Testers actively explore the application without predefined scripts, using their intuition and knowledge to uncover defects.</p>
                 <p><strong>Key Takeaway:</strong> Excellent for finding unexpected issues and understanding the application deeply. Complements scripted testing. Think "Let's play around and see what breaks."</p>
                 <p><strong>Approach:</strong> While unscripted, it's not random; testers often use charters or time-boxed sessions to guide exploration.</p>
                 <p><strong>Example:</strong> Given a new reporting feature, a tester might spend an hour trying different filter combinations, exporting formats, and edge case data inputs, documenting findings along the way.</p>
              </AccordionContent>
            </AccordionItem>

            {/* End-to-End Testing */}
            <AccordionItem value="e2e" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <Network className="w-5 h-5 text-indigo-500" />
                   <span>End-to-End (<Tooltip><TooltipTrigger className="cursor-help underline decoration-dotted">E2E</TooltipTrigger><TooltipContent>End-to-End</TooltipContent></Tooltip>) Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                 <p>Validates entire application flows from start to finish, simulating real user scenarios across multiple integrated systems or modules.</p>
                 <p><strong>Key Takeaway:</strong> Ensures all integrated parts work together correctly in a production-like environment. Crucial for complex applications. Think "Does the whole user journey work?"</p>
                 <p><strong>Scope:</strong> Broad, covering complete workflows.</p>
                 <p><strong>Example:</strong> Testing the entire e-commerce purchase flow: user registration → login → product search → add to cart → checkout (including payment gateway interaction) → order confirmation → logout.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Ad hoc Testing */}
            <AccordionItem value="adhoc" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <Zap className="w-5 h-5 text-pink-500" /> {/* Reusing Zap, maybe find better icon */}
                   <span>Ad hoc Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                 <p>Informal, unplanned testing performed without documentation or predefined steps, often driven by intuition to find defects quickly. Similar to Exploratory Testing but typically less structured.</p>
                 <p><strong>Key Takeaway:</strong> Can uncover bugs missed by formal testing. Relies heavily on tester experience. Think "Let's just try random things."</p>
                 <p>
                   <strong>
                     <Tooltip>
                       <TooltipTrigger className="cursor-help underline decoration-dotted">AKA:</TooltipTrigger>
                       <TooltipContent>Also Known As</TooltipContent>
                     </Tooltip>
                   </strong> Random Testing, Monkey Testing (though Monkey Testing often implies purely random inputs).
                 </p>
                 <p><strong>Example:</strong> Randomly clicking buttons, entering unexpected data, interrupting processes (e.g., closing browser during checkout) to see how the application handles it.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Positive Testing */}
            <AccordionItem value="positive" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <CheckCircle className="w-5 h-5 text-teal-500" />
                   <span>Positive Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                 <p>Testing with valid inputs and expected conditions to verify that the application behaves as intended (the "happy path").</p>
                 <p><strong>Key Takeaway:</strong> Confirms the basic functionality works correctly under normal circumstances. Think "Does it work when I do things right?"</p>
                 <p><strong>Example:</strong> Entering a valid username and password should allow the user to log in successfully.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Negative Testing */}
            <AccordionItem value="negative" className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-900/30 data-[state=open]:text-[#00A2FF] transition-colors">
                 <div className="flex items-center space-x-3">
                   <XCircle className="w-5 h-5 text-rose-500" />
                   <span>Negative Testing</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                 <p>Testing with invalid inputs, unexpected conditions, or error scenarios to verify that the application handles them gracefully (e.g., shows appropriate error messages, doesn't crash).</p>
                 <p><strong>Key Takeaway:</strong> Ensures robustness and proper error handling. Think "What happens when I do things wrong?"</p>
                 <p>
                   <strong>
                     <Tooltip>
                       <TooltipTrigger className="cursor-help underline decoration-dotted">AKA:</TooltipTrigger>
                       <TooltipContent>Also Known As</TooltipContent>
                     </Tooltip>
                   </strong> Error Path Testing, Failure Testing.
                 </p>
                 <p><strong>Example:</strong> Entering an incorrect password should display an "Invalid credentials" message, not crash the application or grant access.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
         </TooltipProvider>
        </SectionCard>

        {/* Non-Functional Testing Accordion - Enhanced */}
        <SectionCard title="Non-Functional Testing Techniques" color="text-[#9C27FF]" icon={Gauge}>
          <TooltipProvider delayDuration={100}>
           <Accordion type="single" collapsible className="w-full space-y-3">

             {/* Performance Testing */}
             <AccordionItem value="performance" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Gauge className="w-5 h-5 text-red-600" />
                     <span>Performance Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                  <p>Evaluates how a system performs in terms of responsiveness, stability, resource utilization, and speed under a specific workload.</p>
                  <p><strong>Key Takeaway:</strong> Crucial for ensuring a positive user experience and system stability under load. Think "How fast and stable is it?"</p>
                  <h5 className="font-semibold text-md mt-4 mb-2">Common Types:</h5>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Load Testing:</strong> Simulates expected user load. (Example: Testing with 1000 concurrent users).</li>
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Stress Testing:</strong> Pushes the system beyond normal limits to find its breaking point. (Example: Simulating 10,000 concurrent users when 1000 is normal).</li>
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Endurance Testing (Soak Testing):</strong> Tests under sustained load over time to detect memory leaks or degradation. (Example: Running normal load for 24 hours).</li>
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Spike Testing:</strong> Simulates sudden bursts of high load. (Example: Handling a Black Friday sales rush).</li>
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Volume Testing:</strong> Tests with large amounts of data in the database. (Example: Querying tables with millions of records).</li>
                    <li className="transition-colors duration-150 hover:text-red-700 dark:hover:text-red-400"><strong>Scalability Testing:</strong> Determines how well the system can scale up (or down) to handle varying loads. (Example: Measuring performance as user load increases from 100 to 5000).</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong>Popular Tools:</strong>
                    <a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">JMeter</a>,
                    <a href="https://gatling.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Gatling</a>,
                    <a href="https://www.microfocus.com/en-us/products/loadrunner-professional/overview" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">LoadRunner</a>,
                    <a href="https://locust.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Locust</a>
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Security Testing */}
              <AccordionItem value="security" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <ShieldCheck className="w-5 h-5 text-green-600" />
                     <span>Security Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                  <p>Identifies vulnerabilities, threats, and risks in a software application to prevent malicious attacks and protect data.</p>
                  <p><strong>Key Takeaway:</strong> Essential for protecting sensitive data and maintaining user trust. Think "Can it be hacked?"</p>
                  <h5 className="font-semibold text-md mt-4 mb-2">Common Types:</h5>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                    <li className="transition-colors duration-150 hover:text-green-700 dark:hover:text-green-400"><strong>Vulnerability Scanning:</strong> Automated scans for known weaknesses.</li>
                    <li className="transition-colors duration-150 hover:text-green-700 dark:hover:text-green-400"><strong>Penetration Testing (Pen Testing):</strong> Simulates attacks to exploit vulnerabilities.</li>
                    <li className="transition-colors duration-150 hover:text-green-700 dark:hover:text-green-400"><strong>Risk Assessment:</strong> Identifies and prioritizes security risks.</li>
                    <li className="transition-colors duration-150 hover:text-green-700 dark:hover:text-green-400"><strong>Security Auditing:</strong> Reviews code and configurations for compliance and flaws.</li>
                    <li className="transition-colors duration-150 hover:text-green-700 dark:hover:text-green-400"><strong>Ethical Hacking:</strong> Authorized attempts to uncover security flaws.</li>
                  </ul>
                   <p className="mt-3 text-sm"><strong>Popular Tools:</strong>
                     <a href="https://owasp.org/www-project-zap/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">OWASP ZAP</a>,
                     <a href="https://portswigger.net/burp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Burp Suite</a>,
                     <a href="https://www.tenable.com/products/nessus" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Nessus</a>
                     <ExternalLink className="inline w-3 h-3 ml-1" />
                   </p>
                </AccordionContent>
              </AccordionItem>

              {/* Reliability Testing */}
              <AccordionItem value="reliability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <RefreshCw className="w-5 h-5 text-cyan-600" /> {/* Reusing icon */}
                     <span>Reliability Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Checks if the software can perform failure-free operations for a specified period in a particular environment.</p>
                   <p><strong>Key Takeaway:</strong> Focuses on consistency and dependability over time. Think "Will it keep working without failing?"</p>
                   <p><strong>Example:</strong> Running an automated test suite repeatedly for 48 hours to ensure no failures occur under normal operating conditions.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Availability Testing */}
               <AccordionItem value="availability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                 <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-lime-600" /> {/* Reusing icon */}
                      <span>Availability Testing</span>
                    </div>
                 </AccordionTrigger>
                 <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                    <p>Verifies the system's uptime and accessibility, ensuring it meets the agreed-upon Service Level Agreements (<Tooltip><TooltipTrigger className="cursor-help underline decoration-dotted">SLAs</TooltipTrigger><TooltipContent>Service Level Agreements</TooltipContent></Tooltip>).</p>
                    <p><strong>Key Takeaway:</strong> Measures the percentage of time the system is operational and accessible to users. Think "Is the system up and running when needed?"</p>
                    <p><strong>Example:</strong> Monitoring system uptime over a month, calculating the percentage availability (e.g., 99.9%), and comparing it against the <Tooltip><TooltipTrigger className="cursor-help underline decoration-dotted">SLA</TooltipTrigger><TooltipContent>Service Level Agreement</TooltipContent></Tooltip> target.</p>
                 </AccordionContent>
               </AccordionItem>

              {/* Usability Testing */}
              <AccordionItem value="usability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Users className="w-5 h-5 text-orange-600" />
                     <span>Usability Testing (<Tooltip><TooltipTrigger className="cursor-help underline decoration-dotted">UX</TooltipTrigger><TooltipContent>User Experience</TooltipContent></Tooltip> Testing)</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Evaluates how easy, efficient, and satisfying it is for users to interact with the software.</p>
                   <p><strong>Key Takeaway:</strong> Focuses on the end-user experience. Crucial for adoption and satisfaction. Think "Is it easy and intuitive to use?"</p>
                   <p><strong>Methods:</strong> Often involves observing real users performing tasks (e.g., hallway testing, moderated/unmoderated sessions), surveys, and heuristic evaluations.</p>
                   <p><strong>Example:</strong> Observing five target users trying to complete the registration process and noting any points of confusion or difficulty.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Scalability Testing (Covered under Performance, but can be separate) */}
              {/* Keeping it brief here as it's detailed under Performance */}
              <AccordionItem value="scalability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Move className="w-5 h-5 text-sky-600" /> {/* Reusing icon */}
                     <span>Scalability Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Tests the application's ability to handle increasing load (users, data, transactions) by adding resources (scaling up or out).</p>
                   <p><strong>Key Takeaway:</strong> Ensures the system can grow to meet future demands. Think "Can it handle more users/data if we add more servers?"</p>
                   <p><strong>Note:</strong> Often considered a specific type of Performance Testing.</p>
                   <p><strong>Example:</strong> Measuring response times as user load increases while incrementally adding more web server instances.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Interoperability Testing */}
              <AccordionItem value="interoperability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Network className="w-5 h-5 text-fuchsia-600" /> {/* Reusing icon */}
                     <span>Interoperability Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Verifies if the software can interact and exchange data correctly with other systems or components.</p>
                   <p><strong>Key Takeaway:</strong> Ensures seamless integration in complex environments. Think "Does it play well with others?"</p>
                   <p><strong>Example:</strong> Testing if data exported from your application can be correctly imported and processed by a third-party reporting tool.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Portability Testing */}
              <AccordionItem value="portability" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Laptop className="w-5 h-5 text-gray-600" />
                     <span>Portability Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Evaluates how easily the software can be transferred from one environment (e.g., hardware, operating system, browser) to another.</p>
                   <p><strong>Key Takeaway:</strong> Important if the software needs to run in diverse environments. Think "Can it be moved easily?"</p>
                   <p><strong>Example:</strong> Installing and running a desktop application on both Windows 10 and macOS Monterey to check for environment-specific issues.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Compatibility Testing */}
              <AccordionItem value="compatibility" className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 py-3 data-[state=open]:bg-purple-50 dark:data-[state=open]:bg-purple-900/30 data-[state=open]:text-[#9C27FF] transition-colors">
                   <div className="flex items-center space-x-3">
                     <Smartphone className="w-5 h-5 text-emerald-600" />
                     <span>Compatibility Testing</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed px-6 py-4 bg-white dark:bg-gray-800 space-y-3">
                   <p>Checks if the software works correctly across different browsers, devices, operating systems, screen resolutions, and network conditions.</p>
                   <p><strong>Key Takeaway:</strong> Ensures a consistent experience for users regardless of their setup. Think "Does it work everywhere it's supposed to?"</p>
                   <p><strong>Types:</strong> Browser compatibility, OS compatibility, device compatibility, network compatibility.</p>
                   <p><strong>Example:</strong> Testing a web application on Chrome, Firefox, Safari, and Edge, as well as on different mobile devices (iOS, Android) and screen sizes.</p>
                </AccordionContent>
              </AccordionItem>

           </Accordion>
          </TooltipProvider>
        </SectionCard>

        {/* Testing Approaches Section */}
        <SectionCard title="Testing Approaches & Philosophies" color="text-emerald-600" icon={MoveLeft}>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400">❖ Shift-Left Testing</h4>
            <p>
              Shift-Left Testing isn't a specific type of testing, but rather an approach or philosophy focused on moving testing activities earlier (to the "left") in the software development lifecycle (SDLC). Instead of waiting until the end of development, testing is integrated from the initial stages like requirements gathering and design.
            </p>
            <p><strong>Goal:</strong> To identify and prevent defects as early as possible, reducing the cost and effort required to fix them later.</p>
            <p><strong>Key Practices:</strong></p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
              <li>Involving testers in requirements analysis and design reviews.</li>
              <li>Implementing unit tests and integration tests during development.</li>
              <li>Automating tests at various levels (unit, integration, API).</li>
              <li>Using static analysis tools to catch code issues early.</li>
              <li>Fostering collaboration between developers, testers, and business analysts.</li>
            </ul>
            <p><strong>Benefits:</strong> Faster feedback loops, reduced bug-fixing costs, improved code quality, and quicker time-to-market.</p>
            <p><strong>Example:</strong> Instead of QA finding a major flaw during final system testing, a tester participates in design reviews and points out the potential issue, or a developer catches it with a unit test long before the feature is fully built.</p>
          </div>
        </SectionCard>

        {/* Next Button - Enhanced */}
        <div className="mt-16 text-center">
          <Link
            to="/testing-methods"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A2FF]"
          >
            Explore Testing Methods
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
