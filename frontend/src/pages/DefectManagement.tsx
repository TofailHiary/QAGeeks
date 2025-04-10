import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DefectManagement() {

  const terminology = [
    { term: "Defect", definition: "Application not working as per the requirement." },
    { term: "Bug", definition: "Informal name for a defect." },
    { term: "Error", definition: "Problem in code leading to incorrect behavior." },
    { term: "Issue", definition: "Application not meeting business requirements." },
    { term: "Mistake", definition: "Problem in documentation." },
    { term: "Failure", definition: "Accumulation of defects leading to software failure." },
  ];

  const bugCauses = [
    { title: "Wrong Coding", description: "Improper implementation. Example: Clicking 'Inbox' navigates to 'Draft'." },
    { title: "Missing Coding", description: "A feature is not implemented at all. Example: The 'Inbox' link is missing entirely." },
    { title: "Extra Coding", description: "Features added beyond client requirements. Example: Adding middle name field when only first/last name was required." },
  ];

  const bugReportElements = [
    { field: "Bug Name/Title", description: "Clear, specific headline describing the defect." },
    { field: "Bug ID", description: "Unique identification number." },
    { field: "Precondition", description: "Any setup needed before reproducing (if applicable)." },
    { field: "Test Data", description: "Specific data used during testing (if applicable)." },
    { field: "Description", description: "Detailed summary including module, severity, priority, expected vs actual results." },
    { field: "Severity", description: "Impact on functionality (e.g., High: Crash, Low: UI cosmetic). Determined by QA.", examples: ["High: Login crash prevents access.", "Low: Minor UI misalignment."] },
    { field: "Priority", description: "Urgency to fix (e.g., High: Launch blocker, Low: Fix in future). Determined by PM/PO.", examples: ["High: Spelling error on homepage before launch.", "Low: Rare issue in a less-used feature."] },
    { field: "Reported By", description: "Name/ID of the tester." },
    { field: "Reported On", description: "Date the defect was raised." },
    { field: "Assigned To", description: "Developer responsible for fixing." },
    { field: "Steps to Reproduce", description: "Clear, numbered steps to replicate the bug. Include screenshots/videos if possible." },
    { field: "Status", description: "Current state in the bug life cycle (e.g., New, Open, Fixed)." },
    { field: "Environment", description: "System details (e.g., Browser, OS version, Device)." },
    { field: "Actual Result", description: "What actually happened when the steps were followed." },
    { field: "Expected Result", description: "What should have happened based on requirements." },
    { field: "Attachments", description: "Screenshots, videos, logs." },
    { field: "Notes", description: "Any additional relevant comments." },
  ];

  const bugLifeCycleStates = [
    { state: "New", description: "First state when a defect is found and logged.", color: "bg-blue-100 text-blue-800" },
    { state: "Assigned", description: "Defect assigned to a developer by the lead/manager.", color: "bg-yellow-100 text-yellow-800" },
    { state: "Open", description: "Developer starts analyzing and working on fixing the defect.", color: "bg-orange-100 text-orange-800" },
    { state: "Fixed", description: "Developer has fixed the defect and made necessary code changes.", color: "bg-green-100 text-green-800" },
    { state: "Pending Retest", description: "Fixed defect assigned back to the tester for verification.", color: "bg-purple-100 text-purple-800" },
    { state: "Retest", description: "Tester is actively verifying the fix.", color: "bg-indigo-100 text-indigo-800" },
    { state: "Verified", description: "Tester confirms the defect is fixed accurately.", color: "bg-teal-100 text-teal-800" },
    { state: "Reopen", description: "Issue persists after the fix; assigned back to the developer.", color: "bg-pink-100 text-pink-800" },
    { state: "Closed", description: "Defect is resolved, verified, and no longer exists.", color: "bg-gray-100 text-gray-800" },
    { state: "Rejected", description: "Developer considers the defect not genuine.", color: "bg-red-100 text-red-800" },
    { state: "Duplicate", description: "Defect is the same as another existing defect.", color: "bg-gray-100 text-gray-500" },
    { state: "Deferred", description: "Fix postponed to a future release (low priority/impact).", color: "bg-gray-100 text-gray-600" },
    { state: "Not a Bug", description: "Reported issue does not impact functionality as per requirements.", color: "bg-gray-100 text-gray-700" },
  ];

  return (
    <PageLayout
      title="Defect Management & Bug Tracking"
      subtitle="Learn how to effectively identify, report, and track software defects"
    >
      <div className="max-w-6xl mx-auto space-y-16 py-12">

        {/* What is a Bug/Defect? */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">What is a Bug / Defect?</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            When the expected and actual behavior of software doesn't match, an incident is raised. If caused by incorrect code implementation, it's called a <strong>Bug</strong> or <strong>Defect</strong>. It represents a programmer's fault where the code fails to conform to the intended behavior. While testing, if the test engineer doesn't get the expected result as per requirements, a bug is identified.
          </p>
        </section>

        {/* Basic Terminology */}
        <section>
           <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-[#0052CC]">Basic Terminology</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {terminology.map((item) => (
                  <div key={item.term} className="bg-white p-4 rounded shadow-sm border-l-4 border-[#00A2FF]">
                    <h4 className="font-semibold text-lg text-[#00A2FF] mb-1">{item.term}</h4>
                    <p className="text-sm text-gray-700">{item.definition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Bugs Occur */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">Why Do Bugs Occur?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bugCauses.map((cause, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#9C27FF]">{cause.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bug Tracking Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">Popular Bug Tracking Tools</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Jira", "Bugzilla", "Redmine", "Mantis", "Backlog"].map(tool => (
              <Badge key={tool} variant="outline" className="text-lg px-4 py-2 bg-white border-[#00A2FF] text-[#00A2FF] shadow-sm">{tool}</Badge>
            ))}
          </div>
        </section>

        {/* Effective Bug Reporting */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">Effective Bug Reporting</h2>
           <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#0052CC]">Why Report Effectively?</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-gray-700 mb-6">
                  Report bugs as early as possible with clear, detailed information. This helps developers reproduce the issue quickly and fix it efficiently, saving time and resources. A good bug report is crucial for smooth collaboration between QA and development.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-[#0052CC]">Key Elements of a Bug Report:</h3>
                <div className="space-y-4">
                  {bugReportElements.map((item) => (
                    <div key={item.field} className="p-3 bg-gray-50 rounded border-l-4 border-[#9C27FF]">
                      <p className="font-medium text-gray-800">{item.field}:</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      {item.examples && (
                        <ul className="list-disc list-inside text-xs text-gray-500 mt-1 pl-4">
                          {item.examples.map((ex, i) => <li key={i}><em>Example: {ex}</em></li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                 <p className="text-xs italic text-gray-500 mt-4">(A visual template example would typically be shown here)</p>
             </CardContent>
           </Card>
        </section>

        {/* Bug Life Cycle */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">Bug Life Cycle</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            The Defect Life Cycle (or Bug Life Cycle) tracks a defect through various states from its discovery until it's closed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bugLifeCycleStates.map((item) => (
              <div key={item.state} className={`p-4 rounded-lg shadow-sm border ${item.color.replace('bg-', 'border-').replace('text-', 'border-')}`}>
                <Badge variant="outline" className={`${item.color} font-semibold mb-2`}>{item.state}</Badge>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
           <p className="text-center text-sm text-gray-500 mt-6 italic">(A visual flow diagram is often used to represent the transitions between these states)</p>
        </section>

        {/* Next Button */}
        <div className="mt-16 text-center">
          <a
            href="/levels-of-testing"
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Next: Levels of Testing
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
