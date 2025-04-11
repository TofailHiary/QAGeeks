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

// Reusable Card component for sections
const SectionCard: React.FC<{ title: string; children: React.ReactNode; color: string }> = ({ title, children, color }) => (
  <Card className={`shadow-xl border-l-4 ${color.replace('text-', 'border-')} bg-white dark:bg-gray-800 rounded-xl overflow-hidden`}>
    <CardHeader className={`p-5 bg-gradient-to-br from-${color.split('-')[1]}-50 via-white to-white dark:from-${color.split('-')[1]}-900/30 dark:via-gray-800 dark:to-gray-800`}>
      <CardTitle className={`text-2xl font-extrabold ${color}`}>{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-5 space-y-4 text-gray-700 dark:text-gray-300">
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

        {/* Overview Section */}
        <SectionCard title="Overview of Testing Types" color="text-[#00A2FF]">
          <p className="leading-relaxed">
            There are two main types of testing:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Functional Testing (What system does):</strong> Validates the software system against the functional requirements/specifications. The purpose is to test each function by providing appropriate input and verifying the output against the Functional requirements. Functional testing mainly involves black box testing and it is not concerned about the source code of the application. This testing checks User Interface, APIs, Database, Security, Client/Server communication and other functionality of the Application Under Test. The testing can be done either manually or using automation.</li>
            <li><strong>Non-Functional Testing (How system performs):</strong> Checks non-functional aspects (performance, usability, reliability, etc) of a software application. It is designed to test the readiness of a system as per nonfunctional parameters which are never addressed by functional testing. An excellent example of non-functional test would be to check how many people can simultaneously login into a software. Non-functional testing is equally important as functional testing and affects client satisfaction.</li>
          </ul>
        </SectionCard>

        {/* Functional Testing Accordion */}
        <SectionCard title="Functional Testing" color="text-[#00A2FF]">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {/* Smoke Testing */}
            <AccordionItem value="smoke">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Smoke Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                <p>Determines whether the deployed software build is stable or not. Smoke testing is a confirmation for QA team to proceed with further software testing. It consists of a minimal set of tests run on each build to test software functionalities. Smoke testing is also known as “Build Verification Testing” or “Confidence Testing.”</p>
                <p><strong>In simple terms:</strong> Verifying the important features are working and there are no showstoppers in the build that is under testing.</p>
                <p><strong>Example:</strong> Consider that a software company has developed a social media application. The development team completes the initial build of the application and decides to conduct a Smoke test to ensure that the software is running as expected. In this scenario, the development team will run a few critical test cases on the application to ensure the software is stable by selecting them. During the Smoke test, the developers will check:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>whether the application launches correctly,</li>
                  <li>the home page and the login page load</li>
                  <li>A user can log in</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Regression Testing */}
            <AccordionItem value="regression">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Regression Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                <p>The process of testing the modified parts of the code and the parts that might get affected due to the modifications to ensure that no new errors have been introduced in the software after the modifications have been made. Regression means return of something and in the software field, it refers to the return of a bug.</p>
                <p><strong>Example 1 (E-commerce):</strong> Let’s take the example of an e-commerce platform. After updating its payment gateway, testers will need to run regression tests on the checkout process, including payment processing, order confirmation, and receipt generation. Additionally, they also need to verify that other functionalities, such as adding items to the cart, applying discounts, and navigating through product categories, remain unaffected.</p>
                <p><strong>Example 2 (Mobile App):</strong> Another regression testing example could be an update in the UI of a mobile app, following which regression tests must be executed to verify user login, profile management, and data synchronization. Testers should also ensure that push notifications, in-app purchases, and social media integrations continue to work as intended.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Sanity Testing */}
            <AccordionItem value="sanity">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Sanity Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                <p>A type of software testing performed after smoke testing to verify that minor changes or bug fixes haven’t introduced new defects. Its purpose is to ensure the core functionality remains intact before proceeding with more extensive testing.</p>
                <p>It is a subset of regression testing. Sanity testing is performed to ensure that the code changes that are made are working properly. Sanity testing is a stoppage to check whether testing for the build can proceed or not. The focus of the team during sanity testing process is to validate the functionality of the application and not detailed testing. Sanity testing is generally performed on build where the production deployment is required immediately like a critical bug fix.</p>
                <p><strong>Example (Food Ordering App - 10% New Year Discount):</strong> Consider you developing an online Food ordering app, and you want to offer a 10% discount on New Year (1st January) for your members having an elite membership. Sanity testing will verify the following:</p>
                 <ul className="list-disc list-inside pl-4">
                    <li>Elite members get the discount on the 1st January.</li>
                    <li>Members, who add the elite membership to their food orders on the 1st, also get the discount.</li>
                    <li>Non-elite members do not get the discount on the 1st January.</li>
                    <li>No member receives that rebate before and after the 1st January.</li>
                    <li>Other discount coupons can not be clubbed together with this 10% discount.</li>
                    <li>Elite members, who opt for other deals, do not get the New Year deduction.</li>
                 </ul>
                 <p>Sanity testing does not verify other areas of the app, like delivery tracking or restaurant reviews. That is done by Smoke testing and Regression testing, which happen before and after Sanity testing. If Sanity testing fails, the app is sent back to the developer for troubleshooting. However, if it succeeds, the app is sent for thorough System testing.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Sanity vs Smoke Table */}
            <AccordionItem value="sanity-smoke-comparison">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Sanity vs. Smoke Testing Comparison
              </AccordionTrigger>
              <AccordionContent className="px-2 pt-2">
                 <div className="overflow-x-auto mt-2 rounded-lg border dark:border-gray-700">
                    <Table className="min-w-full">
                      <TableHeader className="bg-gray-100 dark:bg-gray-700">
                        <TableRow>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">Feature</TableHead>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">Sanity Testing</TableHead>
                          <TableHead className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">Smoke Testing</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y dark:divide-gray-700">
                        {sanityVsSmokeData.map((row, idx) => (
                          <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <TableCell className="font-medium px-4 py-2 text-sm">{row.feature}</TableCell>
                            <TableCell className="px-4 py-2 text-sm">{row.sanity}</TableCell>
                            <TableCell className="px-4 py-2 text-sm">{row.smoke}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
              </AccordionContent>
            </AccordionItem>

             {/* Re-testing */}
            <AccordionItem value="re-testing">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Re-testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                <p>Retesting is executing a previously failed test against new software to check if the problem is resolved.</p>
                <p><strong>Example:</strong> “After fixing the login bug, we perform the same login steps again to verify it no longer fails.”</p>
              </AccordionContent>
            </AccordionItem>

            {/* Exploratory Testing */}
            <AccordionItem value="exploratory">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Exploratory Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                 <p>A type of software testing in which the tester is free to select any possible methodology to test the software. It is an unscripted approach for software testing. In exploratory testing, software developers use their personal learning, knowledge, skills and abilities to test the software developed by themselves. Exploratory testing checks the functionality and operations of the software as well as it identifies the functional and technical faults in it. The aim of exploratory testing is to optimize and improve the software in every possible way. Exploratory testing technique combines the experience of testers along with a structured approach for testing. It is often performed as a black box testing technique.</p>
                 <p><strong>Example:</strong> “In the new chat app, we freely try different messages, attachments, and user flows without following a strict plan.”</p>
              </AccordionContent>
            </AccordionItem>

            {/* End-to-End Testing */}
            <AccordionItem value="e2e">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ End-to-End Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                 <p>“End-to-end testing is a methodology used to test whether the flow of an application is performing as designed from start to finish.”</p>
                 <p><strong>Example:</strong> “We simulate a complete purchase—logging in, adding items to the cart, checking out, and confirming the order—to ensure the entire process works.”</p>
              </AccordionContent>
            </AccordionItem>

            {/* Ad hoc Testing */}
            <AccordionItem value="adhoc">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Ad hoc Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                 <p>An informal or unstructured software testing type that aims to break the testing process in order to find possible defects or errors at an early possible stage. Ad hoc testing is done randomly and it is usually an unplanned activity which does not follow any documentation and test design techniques to create test cases.</p>
                 <p><strong>Example:</strong> “We click and navigate the new feature randomly without any plan to see if we can cause unexpected errors.”</p>
              </AccordionContent>
            </AccordionItem>

            {/* Positive Testing */}
            <AccordionItem value="positive">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Positive Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                 <p>It is used to check whether our application works as expected or not. And if an error is detected at the time of positive testing, the test is considered as fail. A positive testing is a technique whenever a test engineer writes the test cases for a set of respective outputs.</p>
                 <p><strong>Example:</strong> “We enter valid login credentials to confirm the system lets us log in successfully.”</p>
              </AccordionContent>
            </AccordionItem>

            {/* Negative Testing */}
            <AccordionItem value="negative">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00A2FF] data-[state=open]:text-[#00A2FF]">
                ❖ Negative Testing
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                 <p>It is implemented to check how the application can gracefully handle invalid input or unpredicted user performance. The fundamental purpose of executing the negative testing is to ensure the application's stability against the effects of different variations of improper validation data set. Negative testing is also known as error path testing or failure testing. And it helps us to identify more bugs and enhance the quality of the software application under test. Once the positive testing is complete, then only we can execute the negative testing.</p>
                 <p><strong>Example:</strong> “We try inputting invalid data, like special characters in the username field, to ensure the system rejects them properly.”</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </SectionCard>

        {/* Non-Functional Testing Accordion */}
        <SectionCard title="Non-Functional Testing" color="text-[#9C27FF]">
           <Accordion type="single" collapsible className="w-full space-y-2">
             {/* Performance Testing */}
             <AccordionItem value="performance">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Performance Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                  <p>A software testing process used for testing the speed, response time, stability, reliability, scalability, and resource usage of a software application under a particular workload. The main purpose of performance testing is to identify and eliminate the performance bottlenecks in the software application.</p>
                  <h5 className="font-semibold text-md mt-3 mb-1">Types of Performance Testing:</h5>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>Load testing:</strong> Checks the application’s ability to perform under anticipated user loads. The objective is to identify performance bottlenecks before the software application goes live. Example: We simulate 1,000 users logging in and browsing at once to check if the system stays responsive.</li>
                    <li><strong>Stress testing:</strong> Involves testing an application under extreme workloads to see how it handles high traffic or data processing. The objective is to identify the breaking point of an application. Example: We push the system to 10 times the expected traffic to see when it breaks.</li>
                    <li><strong>Endurance testing:</strong> Is done to make sure the software can handle the expected load over a long period of time. Example: We run the system continuously under normal load for 24 hours to ensure performance doesn’t degrade over time.</li>
                    <li><strong>Spike testing:</strong> Tests the software’s reaction to sudden large spikes in the load generated by users. Example: We suddenly increase active users from 100 to 5,000 in under a minute to see how the app handles the surge.</li>
                    <li><strong>Volume testing:</strong> Under Volume Testing large no. of. Data is populated in a database, and the overall software system’s behavior is monitored. The objective is to check software application’s performance under varying database volumes. Example: We load millions of records into the database to confirm the app still processes queries efficiently.</li>
                    <li><strong>Scalability testing:</strong> The objective of scalability testing is to determine the software application’s effectiveness in “scaling up” to support an increase in user load. It helps plan capacity addition to your software system. Example: We gradually increase the load to identify the point at which additional servers or resources are needed.</li>
                  </ul>
                  <p className="mt-2"><strong>Performance Testing tools:</strong> JMeter, Gatling, LoadRunner, Locust</p>
                </AccordionContent>
              </AccordionItem>

              {/* Security Testing */}
              <AccordionItem value="security">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Security Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                  <p>A type of Software Testing that uncovers vulnerabilities of the system and determines that the data and resources of the system are protected from possible intruders. It ensures that the software system and application are free from any threats or risks that can cause a loss. Security testing of any system is focused on finding all possible loopholes and weaknesses of the system which might result in the loss of information or repute of the organization.</p>
                  <h5 className="font-semibold text-md mt-3 mb-1">Types of Security Testing:</h5>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>Vulnerability Scanning:</strong> Performed with the help of automated software to scan a system to detect the known vulnerability patterns.</li>
                    <li><strong>Security Scanning:</strong> The identification of network and system weaknesses. Later on it provides solutions for reducing these defects or risks. Security scanning can be carried out in both manual and automated ways.</li>
                    <li><strong>Penetration Testing:</strong> The simulation of the attack from a malicious hacker. It includes an analysis of a particular system to examine for potential vulnerabilities from a malicious hacker that attempts to hack the system.</li>
                    <li><strong>Risk Assessment:</strong> In risk assessment testing security risks observed in the organization are analyzed. Risks are classified into three categories i.e., low, medium and high. This testing endorses controls and measures to minimize the risk.</li>
                    <li><strong>Security Auditing:</strong> An internal inspection of applications and operating systems for security defects. An audit can also be carried out via line-by-line checking of code.</li>
                    <li><strong>Ethical Hacking:</strong> Different from malicious hacking. The purpose of ethical hacking is to expose security flaws in the organization’s system.</li>
                    <li><strong>Posture Assessment:</strong> Combines security scanning, ethical hacking and risk assessments to provide an overall security posture of an organization.</li>
                  </ul>
                   <p className="mt-2"><strong>Security Testing tools:</strong> OWASP ZAP, Burp Suite, Nessus.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Reliability Testing */}
              <AccordionItem value="reliability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Reliability Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>A software testing process that checks whether the software can perform a failure-free operation in a particular environment for a specified time period. The purpose of Reliability testing is to assure that the software product is bug-free and reliable enough for its expected purpose. Reliability means “yielding the same,” in other terms, the word “reliable” means something is dependable and that it will give the same outcome every time.</p>
                   <p><strong>Example:</strong> “We run the reservation system continuously for a week to see if it remains stable and free from crashes.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Availability Testing */}
              <AccordionItem value="availability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Availability Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>A kind of performance testing in which the application runs for a set period of time and collects failure events and repair times, and compares the availability percentage to the service level agreement.</p>
                   <p><strong>Example:</strong> “We measure uptime over a full month, tracking failures and repairs, to ensure the system meets its 99.9% SLA.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Usability Testing */}
              <AccordionItem value="usability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Usability Testing (UX Testing)
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>Also known as User Experience (UX) Testing, is a testing method for measuring how easy and user-friendly a software application is. A small set of target end-users, use software application to expose usability defects. Usability testing mainly focuses on user’s ease of using application, flexibility of application to handle controls and ability of application to meet its objectives. This testing is recommended during the initial design phase of SDLC, which gives more visibility on the expectations of the users.</p>
                   <p><strong>Example:</strong> “We watch a small group of new users navigate our mobile app to see if they complete key tasks without confusion.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Scalability Testing */}
              <AccordionItem value="scalability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Scalability Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>Measures performance of a system or network when the number of user requests are scaled up or down. The purpose of Scalability testing is to ensure that the system can handle projected increase in user traffic, data volume, transaction counts frequency, etc. It tests system ability to meet the growing needs. It is also referred to as performance testing, as such, it is focused on the behavior of the application when deployed to a larger system or tested under excess load. In Software Engineering, Scalability Testing is to measure at what point the application stops scaling and identify the reason behind it.</p>
                   <p><strong>Example:</strong> “We gradually increase active users from 100 to 10,000 to confirm the system can handle the growing load.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Interoperability Testing */}
              <AccordionItem value="interoperability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Interoperability Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>A software testing type, that checks whether the software can interact with other software components and systems. The purpose of Interoperability tests is to ensure that the software product is able to communicate with other components or devices without any compatibility issues. In other words, interoperability testing means to prove that end-to-end functionality between two communicating systems is as specified by the requirements. For example, interoperability testing is done between smartphones and tablets to check data transfer via Bluetooth.</p>
                   <p><strong>Example:</strong> “We connect our new payment gateway with the existing e-commerce platform to verify transactions flow seamlessly between both systems.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Portability Testing */}
              <AccordionItem value="portability">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Portability Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>A process of testing with ease with which the software or product can be moved from one environment to another. It is measured in terms of maximum amount of effort required to transfer from one system to another system.</p>
                   <p><strong>Example:</strong> “We deploy the web app on Windows, Linux, and macOS servers to check how easily it runs in each environment.”</p>
                </AccordionContent>
              </AccordionItem>

              {/* Compatibility Testing */}
              <AccordionItem value="compatibility">
                <AccordionTrigger className="text-lg font-semibold hover:text-[#9C27FF] data-[state=open]:text-[#9C27FF]">
                   ❖ Compatibility Testing
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed px-4 pt-2 space-y-2">
                   <p>A type of Software testing to check whether your software is capable of running on different hardware, operating systems, applications, network environments or Mobile devices.</p>
                   <p><strong>Example:</strong> “We test the website across different browsers and device types to confirm consistent functionality and layout.”</p>
                </AccordionContent>
              </AccordionItem>

          </Accordion>
        </SectionCard>

        {/* Next Button */}
        <div className="mt-20 text-center">
          <Link
            to="/testing-methods" // Use Link component
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Next: Testing Methods
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
