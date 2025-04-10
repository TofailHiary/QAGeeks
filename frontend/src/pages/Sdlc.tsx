import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming Card components exist

export default function Sdlc() {
  const sdlcPhases = [
    {
      title: "Planning / Initial",
      description: "Define goals, scope, stakeholders, and create a project management plan. Determine who will use the system, how, and what data is involved.",
      roles: "Business Analyst (BA), System Architects, Project Manager/Product Owner, Project Sponsor, UX/UI Designer, QAs, Software Engineering",
      outcome: "System Requirements Specification (SRS)",
      qaInvolvement: null,
    },
    {
      title: "Requirement Analysis",
      description: "Transform needs into unambiguous (measurable and testable), traceable, complete, consistent, and stakeholder-approved requirements. Analyze validity and feasibility.",
      roles: "Dev & QA team, Architects, Project Managers, Product owners",
      outcome: "Final SRS approved by customer, Technology selection for both Dev & QA.",
      qaInvolvement: "QA ensures requirements are testable and clear.",
    },
    {
      title: "Design",
      description: "Create architecture, database design, UI design, select algorithms, and perform detailed technical design based on requirements.",
      roles: "Architects & Team",
      outcome: "Technical Design Document (TDD) in case applicable",
      qaInvolvement: "QA can provide input on testability and review design documents.",
    },
    {
      title: "Development / Coding / Implementation",
      description: "Actual coding begins. Work is divided into modules/units. This is often the longest phase.",
      activities: ["Create Test Data", "Create Source Code", "Generate Object Code", "Create Operating Documentation", "Plan Integration", "Perform Integration"],
      roles: "Developers and Architects",
      outcome: "Programs or Application or Module to be Testable",
      qaInvolvement: "QA prepares test cases, test data, and supports developers with early defect detection.",
    },
    {
      title: "Testing",
      description: "Execute test cases against the application, report defects, and retest fixed defects to ensure quality standards.",
      activities: ["Plan Verification and Validation", "Execute Verification and Validation Tasks", "Collect and Analyze Metric Data", "Plan Testing", "Develop Test Requirements", "Execute Tests"],
      roles: "Testers, Developers",
      outcome: "Issues and bugs, Test Summary Report, Test Plan, Test Case document",
      qaInvolvement: "QA executes tests, logs defects, retests fixes, and ensures quality standards are met.",
    },
    {
      title: "Deployment & Maintenance",
      description: "Deliver the product, perform User Acceptance Testing (UAT) in a real-time environment. Address production issues and enhance features over time.",
      activities: ["Plan Installation", "Distribution of Software", "Installation of Software", "Accept Software in Operational Environment", "Operate the System", "Provide Technical Assistance and Consulting", "Maintain Support Request Log"],
      roles: "Testers, Developers, Customer, Business team, Architects, Project Manager, and Delivery Manager",
      outcome: "Quality Product, Enhancements & Production Issues (Maintenance)",
      qaInvolvement: "QA performs regression testing on updates, ensures no existing functionality breaks, and maintains product quality over its lifecycle.",
    },
  ];

  const agileManifestoValues = [
    { title: "Individuals and Interactions over Processes and Tools", description: "Focuses on the importance of effective communication and collaboration among team members." },
    { title: "Working Software over Comprehensive Documentation", description: "Prioritizes the delivery of functional software as the primary measure of progress." },
    { title: "Customer Collaboration over Contract Negotiation", description: "Encourages customers and stakeholders to have active involvement throughout the development process." },
    { title: "Responding to Change over Following a Plan", description: "Embraces flexibility and the ability to adapt to changing requirements, even late in development." },
  ];

  const agileTerminologies = [
    { term: "Backlog Grooming", definition: "Process of adding/re-prioritizing user stories, creating estimates, and breaking down large stories. Often done once per iteration." },
    { term: "Daily Standup", definition: "Short (5-15 min) daily team meeting for status updates." },
    { term: "Definition of Done (DoD)", definition: "Team-agreed criteria for accepting work as completed (e.g., developed, unit tested, code reviewed, functionally tested)." },
    { term: "Epic", definition: "A very large user story, often a placeholder for new ideas, broken down into smaller stories later." },
    { term: "Estimation", definition: "Team process (e.g., planning poker) to agree on a size measurement for backlog items." },
    { term: "Feature", definition: "A coherent business function, usually comprising many user stories." },
    { term: "Retrospective", definition: "End-of-sprint meeting for the team to reflect on processes and identify improvements." },
    { term: "Sprint", definition: "A set period (typically 2-4 weeks) during which specific work is completed." },
    { term: "Sprint Planning", definition: "Meeting before a sprint starts where the team identifies tasks and commits to story points." },
    { term: "User Story", definition: "Describes work needed for a feature; the basic unit of planning and communication." },
    { term: "Task", definition: "Specific, trackable units of work needed to complete a user story." },
  ];

  return (
    <PageLayout
      title="Software Development Life Cycle (SDLC)"
      subtitle="A comprehensive guide to software development methodologies, phases, and models"
    >
      <div className="max-w-6xl mx-auto space-y-16 py-12">
        {/* What is SDLC? */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">What is SDLC?</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            SDLC is a process followed for a software project within a software organization. It consists of a detailed plan describing how to develop, maintain, replace, and alter or enhance specific software. The life cycle defines a methodology for improving the quality of software and the overall development process.
          </p>
        </section>

        {/* Why SDLC? */}
        <section>
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-[#0052CC]">Why We Need SDLC</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 max-w-3xl mx-auto">
                {[
                  "Execute projects with a proven framework",
                  "Define clear roles and responsibilities",
                  "Enforce planning and control",
                  "Ensure consistency among deliverables",
                  "Increase productivity by executing systematically",
                  "Reduce rework effort and project risks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* SDLC Phases */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">SDLC Phases</h2>
          <div className="space-y-8">
            {sdlcPhases.map((phase, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-l-4 border-[#00A2FF]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#00A2FF]">{index + 1}. {phase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">{phase.description}</p>
                  {phase.activities && (
                    <div>
                      <p className="font-semibold text-gray-600">Activities:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {phase.activities.map(act => <li key={act}>{act}</li>)}
                      </ul>
                    </div>
                  )}
                  <p className="text-sm text-gray-600"><strong className="text-gray-700">Roles Involved:</strong> {phase.roles}</p>
                  <p className="text-sm text-gray-600"><strong className="text-gray-700">Outcome:</strong> <em className="italic">{phase.outcome}</em></p>
                  {phase.qaInvolvement && <p className="text-sm text-purple-700 bg-purple-50 p-2 rounded"><strong className="font-semibold">QA Involvement:</strong> {phase.qaInvolvement}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SDLC Models */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">SDLC Models</h2>
          <div className="space-y-12">
            {/* Waterfall */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#00A2FF]">Waterfall Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">A linear, sequential approach where each phase must be completed before the next begins. One cannot visit the 2nd phase unless the 1st phase is complete.</p>
                <p className="text-sm text-purple-700 bg-purple-50 p-2 rounded"><strong className="font-semibold">QA Involvement:</strong> QA typically gets involved after development, focusing on defect detection late in the cycle.</p>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">When to Use:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Requirements are very well known and stable.</li>
                    <li>Product definition is stable.</li>
                    <li>Technology is understood.</li>
                    <li>New version of an existing product or porting to a new platform.</li>
                    <li>Example: A project with stable government regulations like a legacy payroll system update.</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1 text-green-600">Advantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Simple and easy to understand/use.</li>
                      <li>Easy to manage due to rigidity.</li>
                      <li>Phases completed one at a time.</li>
                      <li>Good for management control (plan, staff, track).</li>
                      <li>Works well when quality is prioritized over cost/schedule.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-600">Disadvantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Difficult to go back once in testing.</li>
                      <li>No working software until late.</li>
                      <li>High risk if requirements change.</li>
                      <li>Poor model for complex or long projects.</li>
                      <li>Inhibits flexibility; integration is 'big bang'.</li>
                      <li>Little customer preview opportunity.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* V-Model */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#9C27FF]">V-Model (Verification & Validation)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">An extension of Waterfall with corresponding test phases for each development stage. For every development phase, there is an associated testing phase. Highly disciplined.</p>
                 <p className="text-sm text-purple-700 bg-purple-50 p-2 rounded"><strong className="font-semibold">QA Involvement:</strong> QA activities run in parallel with development phases, ensuring verification and validation steps occur early.</p>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">When to Use:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Requirements are well-defined and fixed.</li>
                    <li>Small to medium-sized projects.</li>
                    <li>Sufficient technical resources available.</li>
                    <li>Systems requiring high reliability (e.g., hospital patient control).</li>
                    <li>Solution and technology are known.</li>
                     <li>Example: Embedded systems for automotive or aviation software needing strict requirement traceability.</li>
                  </ul>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                    <h4 className="font-semibold mb-1 text-green-600">Advantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Simple and easy to use.</li>
                      <li>Testing activities planned early.</li>
                      <li>Proactive defect tracking (early detection).</li>
                      <li>Emphasizes early verification & validation planning.</li>
                      <li>Each deliverable must be testable.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-600">Disadvantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Very rigid and least flexible.</li>
                      <li>Not good for complex projects.</li>
                      <li>No early prototypes produced.</li>
                      <li>Midway changes require updating requirement and test documents.</li>
                      <li>Doesn't easily handle concurrent events or iterations.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Iterative & Incremental */}
             <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#00A2FF]">Iterative & Incremental Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Breaks the project into smaller parts. Each part is developed, tested, and added incrementally. Great for projects where requirements might change or aren't clear initially.</p>
                <p><strong className="text-gray-800">Iterative Development:</strong> Repeating the development cycle, adding/refining features each time based on feedback.</p>
                <p><strong className="text-gray-800">Incremental Development:</strong> Delivering software in small, usable releases, allowing early testing and feedback.</p>
                 <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Examples of Models using this approach:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Agile (Scrum, Kanban, XP, FDD, RAD, DSDM, Lean, Crystal)</li>
                    <li>DevOps</li>
                    <li>Scaled Agile Framework (SAFe)</li>
                  </ul>
                </div>
                 <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Real-World Examples:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Microsoft Windows OS</li>
                    <li>Agile Software Development Projects</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Google Search Algorithm Updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Agile */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#9C27FF]">Agile Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">An iterative and incremental approach emphasizing collaboration, flexibility, customer feedback, and rapid delivery of working software. Tasks are broken into smaller iterations.</p>
                 <p className="text-sm text-purple-700 bg-purple-50 p-2 rounded"><strong className="font-semibold">QA Involvement:</strong> QA is integrated continuously, working closely with developers and product owners, testing features in each iteration for immediate feedback.</p>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">When to Use:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>When frequent changes are required or expected.</li>
                    <li>New changes need to be implemented at low cost.</li>
                    <li>Limited planning needed to start.</li>
                    <li>Highly qualified and experienced team available.</li>
                    <li>Customer is available for constant interaction.</li>
                    <li>Project size is small to medium.</li>
                  </ul>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                    <h4 className="font-semibold mb-1 text-green-600">Advantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Customer satisfaction via continuous delivery.</li>
                      <li>Constant interaction between customers, developers, testers.</li>
                      <li>Working software delivered frequently.</li>
                      <li>Continuous attention to technical excellence.</li>
                      <li>Late changes in requirements are welcomed.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-600">Disadvantages:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Difficult to assess initial effort.</li>
                      <li>Can get off track if customer representative is unclear.</li>
                      <li>Requires senior programmers for decision-making.</li>
                    </ul>
                  </div>
                </div>

                {/* Agile Manifesto */}
                <div className="pt-4">
                   <h4 className="text-xl font-semibold mb-2 text-[#9C27FF]">Agile Manifesto Core Values (2001)</h4>
                   <div className="space-y-3">
                     {agileManifestoValues.map((value, index) => (
                       <div key={index} className="p-3 bg-gray-50 rounded border-l-4 border-[#9C27FF]">
                         <p className="font-medium text-gray-800">{value.title}</p>
                         <p className="text-sm text-gray-600">{value.description}</p>
                       </div>
                     ))}
                   </div>
                </div>

                 {/* Scrum */}
                <div className="pt-4">
                   <h4 className="text-xl font-semibold mb-2 text-[#00A2FF]">Scrum Framework</h4>
                   <p className="text-gray-700 mb-2">An Agile method focusing on managing tasks in small, empowered teams (7-9 members). Derived from rugby.</p>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                     <div className="bg-blue-50 p-3 rounded"><strong>Scrum Master:</strong> Sets up team, sprint meetings, removes obstacles.</div>
                     <div className="bg-blue-50 p-3 rounded"><strong>Product Owner:</strong> Creates & prioritizes backlog, responsible for iteration delivery.</div>
                     <div className="bg-blue-50 p-3 rounded"><strong>Scrum Team:</strong> Self-manages work to complete the sprint.</div>
                   </div>
                   <p><strong className="text-gray-800">Product Backlog:</strong> Repository of requirements (user stories) prioritized by Product Owner.</p>
                   <p><strong className="text-gray-800">Scrum Practices:</strong> Include Sprint Planning, Daily Stand-ups, Sprint Review, Sprint Retrospective.</p>
                </div>

                 {/* Kanban */}
                 <div className="pt-4">
                   <h4 className="text-xl font-semibold mb-2 text-[#9C27FF]">Kanban Method</h4>
                   <p className="text-gray-700">Focuses on visualizing workflow, limiting Work In Progress (WIP), and improving flow. Uses visual signals (kanban) to control work. Great for teams with varying request priorities/sizes.</p>
                 </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Agile Terminologies */}
        <section>
           <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">Agile Terminologies</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {agileTerminologies.map((item, index) => (
               <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                 <CardHeader>
                   <CardTitle className="text-lg font-semibold text-[#0052CC]">{item.term}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-gray-700">{item.definition}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
        </section>

        {/* Model Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">Model Comparison</h2>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Aspect</th>
                  <th className="px-4 py-3 text-left font-semibold">Waterfall</th>
                  <th className="px-4 py-3 text-left font-semibold">V-Model</th>
                  <th className="px-4 py-3 text-left font-semibold">Agile</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Requirements</td>
                  <td className="px-4 py-2">Fixed upfront</td>
                  <td className="px-4 py-2">Fixed upfront</td>
                  <td className="px-4 py-2">Evolving, flexible</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Customer Involvement</td>
                  <td className="px-4 py-2">Minimal after start</td>
                  <td className="px-4 py-2">Limited</td>
                  <td className="px-4 py-2">High, continuous</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Testing Approach</td>
                  <td className="px-4 py-2">After development</td>
                  <td className="px-4 py-2">Parallel with dev</td>
                  <td className="px-4 py-2">Continuous, every iteration</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Flexibility</td>
                  <td className="px-4 py-2">Low</td>
                  <td className="px-4 py-2">Low to medium</td>
                  <td className="px-4 py-2">High</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Risk Management</td>
                  <td className="px-4 py-2">High risk of late issues</td>
                  <td className="px-4 py-2">Earlier detection</td>
                  <td className="px-4 py-2">Ongoing mitigation</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Use Case</td>
                  <td className="px-4 py-2">Stable projects, known reqs</td>
                  <td className="px-4 py-2">Critical systems, known reqs</td>
                  <td className="px-4 py-2">Rapid change, evolving reqs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Button */}
        <div className="mt-16 text-center">
          <a
            href="/stlc"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            STLC →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
