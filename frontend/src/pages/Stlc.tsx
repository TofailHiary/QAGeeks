import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// Removed Accordion imports as they are replaced by the timeline
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import {
  SearchCheck,   // Requirement Analysis
  ListChecks,    // Test Planning
  FileText,      // Test Case Development
  Settings2,     // Test Environment Setup
  PlayCircle,    // Test Execution
  Flag,          // Test Cycle Closure
  Activity,      // Activities
  FileCheck,     // Deliverables
  Info,          // Concepts/Info
  CheckSquare,   // Best Practices
  Tags,          // Parameters
  Users,         // Stakeholders (used in Req Analysis)
  Target,        // Objectives (used in Test Planning)
  ClipboardList, // Test Plan Elements
  FileQuestion,  // BRS
  FileCode,      // FRS
  FileCog,       // SRS
  ChevronDown,   // Added for expand/collapse indicator
} from 'lucide-react'; // Import icons

// Helper to get STLC phase icon - Updated icon color to white for visibility on colored dots
const getStlcPhaseIcon = (title: string): React.ReactNode => {
  const iconProps = "w-4 h-4 text-white"; // Use white color for icons inside dots
  if (title.includes("Requirement Analysis")) return <SearchCheck className={iconProps} />;
  if (title.includes("Test Planning")) return <ListChecks className={iconProps} />;
  if (title.includes("Test Case Development")) return <FileText className={iconProps} />;
  if (title.includes("Test Environment Setup")) return <Settings2 className={iconProps} />;
  if (title.includes("Test Execution")) return <PlayCircle className={iconProps} />;
  if (title.includes("Test Cycle Closure")) return <Flag className={iconProps} />;
  return <Activity className={iconProps} />; // Default
};


export default function Stlc() {
  // State to track the currently expanded phase index (null means none)
  // Default to the first phase being open initially
  const [expandedPhaseIndex, setExpandedPhaseIndex] = useState<number | null>(0);

  const stlcPhases = [
    {
      title: "Requirement Analysis",
      description: "Test team studies requirements from a testing perspective to identify testable requirements. Interaction with stakeholders (Client, BA, Tech Leads, Architects) is key to understand functional and non-functional requirements.",
      activities: [
        "Analyze requirements for testability.",
        "Identify types of tests to be performed.",
        "Gather details about testing priorities and focus.",
        "Prepare Requirement Traceability Matrix (RTM).",
        "Identify test environment details.",
        "Define area of stress and performance testing.",
        "Define procedures for data maintenance (backup, restore, validation).",
        "Review documentation.",
        "Catch ambiguous or unclear requirement criteria."
      ],
      deliverables: ["Requirement Traceability Matrix (RTM)", "Clarified Requirements"],
      color: "border-[#00A2FF] bg-[#00A2FF]" // Added bg color for dot
    },
    {
      title: "Test Planning",
      description: "Creation of a detailed document outlining the test strategy, objectives, schedule, estimation, deliverables, and resources required. It serves as a blueprint for testing activities.",
      activities: [
        "Analyze the product.",
        "Design the Test Strategy (Scope, Types, Risks, Logistics).",
        "Define Test Objectives.",
        "Define Test Criteria (Suspension & Exit Criteria).",
        "Resource Planning (Human, System).",
        "Plan Test Environment.",
        "Schedule & Estimation.",
        "Determine Test Deliverables."
      ],
      deliverables: ["Test Plan Document", "Effort Estimation Document"],
      color: "border-[#2E86FF] bg-[#2E86FF]" // Added bg color for dot
    },
    {
      title: "Test Case Development / Design",
      description: "Creating detailed test cases and scenarios based on the test plan and requirements. This phase defines how testing will be performed.",
      activities: [
        "Create test scenarios.",
        "Create test cases (steps, data, preconditions, expected results).",
        "Create/identify test data.",
        "Review and baseline test cases and scripts."
      ],
      deliverables: ["Test Cases", "Test Scenarios", "Test Data"],
      color: "border-[#5A62FF] bg-[#5A62FF]" // Added bg color for dot
    },
    {
      title: "Test Environment Setup",
      description: "Setting up the software and hardware conditions for testing. This can be done in parallel with Test Case Development. Includes readiness checks (smoke testing) if the environment is provided.",
      activities: [
        "Understand the required architecture, environment set-up.",
        "Prepare hardware and software requirement list for the Test Environment.",
        "Setup test Environment and test data.",
        "Perform smoke test on the build."
      ],
      deliverables: ["Test Environment Ready", "Smoke Test Results"],
      color: "border-[#7B54FF] bg-[#7B54FF]" // Added bg color for dot
    },
    {
      title: "Test Execution",
      description: "Testers execute the test cases based on the prepared test plans and test cases in the configured test environment. Defects are logged and tracked.",
      activities: [
        "Execute tests as per plan.",
        "Document test results and log defects for failed cases.",
        "Map defects to test cases in RTM.",
        "Retest the defect fixes.",
        "Track the defects to closure."
      ],
      deliverables: ["Completed RTM with execution status", "Test cases updated with results", "Defect reports"],
      color: "border-[#9C27FF] bg-[#9C27FF]" // Added bg color for dot
    },
    {
      title: "Test Cycle Closure",
      description: "Evaluating and documenting the testing process upon completion. Involves analyzing results, identifying lessons learned, and preparing final reports.",
      activities: [
        "Evaluate cycle completion criteria (Time, Coverage, Cost, Quality, Business Objectives).",
        "Prepare test metrics based on the parameters.",
        "Document the learning from the project.",
        "Prepare Test Closure Report.",
        "Qualitative and quantitative reporting of the work product quality.",
        "Test result analysis (defect distribution by type and severity)."
      ],
      deliverables: ["Test Closure Report", "Test Metrics"],
      color: "border-[#C724E1] bg-[#C724E1]" // Added bg color for dot
    }
  ];

  const docComparison = [
    { aspect: "Full Name", brs: "Business Requirement Specification", frs: "Functional Requirement Specification", srs: "Software Requirement Specification" },
    { aspect: "Deals With", brs: "Business requirements", frs: "Client requirements / Functionality", srs: "Company resources / System behavior" },
    { aspect: "Use Cases", brs: "Not included", frs: "Not included", srs: "Included" },
    { aspect: "Developed By", brs: "Business Analyst (BA)", frs: "Developers / Engineers", srs: "System Analyst" },
    { aspect: "Focus", brs: "What the customer wants (broad)", frs: "Detailed page/feature functionality", srs: "Functional & non-functional requirements" },
    { aspect: "Analogy", brs: "The 'Why' & 'What' (High-level)", frs: "The 'How' (Detailed steps)", srs: "The 'What' & 'How' (System view)" },
  ];

  const testPlanElements = [
    "Analyze the product (User, Purpose, Functionality, Tech Stack)",
    "Design the Test Strategy (Scope, Types, Risks, Logistics)",
    "Define the Test Objectives (Goals, Features to test)",
    "Define Test Criteria (Suspension Criteria, Exit Criteria)",
    "Resource Planning (Human, System resources)",
    "Plan Test Environment (Hardware, Software setup)",
    "Schedule & Estimation (Timelines, Effort)",
    "Determine Test Deliverables (Reports, Logs, Documents)"
  ];

  const testCaseParams = [
    "Test Case ID", "Test Scenario", "Test Case Description", "Test Steps",
    "Prerequisite", "Test Data", "Expected Result", "Test Parameters",
    "Actual Result", "Test result (Pass/Fail)", "Comments"
  ];

  const testCaseBestPractices = [
    "Test only one thing at a time (atomic).",
    "Ensure clarity; avoid overlap or complexity.",
    "Cover both positive and negative scenarios.",
    "Use simple, easy-to-understand language.",
    "Use active voice (e.g., 'Click button', 'Enter data').",
    "Use exact and consistent names for UI elements.",
    "Accurate: Exacts the purpose.",
    "Economical: No unnecessary steps.",
    "Traceable: Links back to requirements.",
    "Repeatable: Can be executed multiple times consistently."
  ];

  return (
    <PageLayout
      title="Software Testing Life Cycle (STLC)"
      subtitle="A systematic approach to software testing activities"
      description="Understand the Software Testing Life Cycle (STLC) phases: Requirement Analysis, Test Planning, Test Case Development, Environment Setup, Test Execution, and Cycle Closure. Learn about BRS, FRS, SRS, test plans, and test case design."
    >
      <div className="max-w-6xl mx-auto space-y-16 py-12 px-4 sm:px-6 lg:px-8"> {/* Added padding */}

        {/* What is STLC? */}
        <section className="text-center animate-fade-in"> {/* Added animation */}
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">What is STLC?</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met. It involves both verification and validation activities. STLC is an integral part of SDLC but focuses solely on testing phases. It provides a step-by-step process to ensure quality software, starting as soon as requirements are defined. Early analysis and test case creation help reduce test cycle time and improve quality by finding bugs sooner.
          </p>
        </section>

        {/* BRS, FRS, SRS */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]">Understanding Requirement Documents</h2>
           <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">Different documents capture requirements at various levels. Understanding their purpose is crucial for effective testing.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <CardHeader><CardTitle className="text-xl text-[#00A2FF] flex items-center"><FileQuestion className="w-5 h-5 mr-2"/>BRS (Business)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Created by the Business Analyst (BA) interacting with customers. Describes business rules, project scope, and client requirements in simple business language. Focuses on 'what' the business needs.</p>
                <p className="text-xs italic mt-2">Example: "The Company would like to improve efficiency by tracking employee time spent on activities."</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <CardHeader><CardTitle className="text-xl text-[#5A62FF] flex items-center"><FileCode className="w-5 h-5 mr-2"/>FRS (Functional)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Created by developers/engineers. Describes all functions the software must perform, detailing how components behave during user interaction. Focuses on 'how' a specific feature works step-by-step. Does not typically include use cases.</p>
                 <p className="text-xs italic mt-2">Example: "Enter Username: Textbox allowing registered email ID. Enter Password: Textbox, input masked ('*'). Submit Button: Validates credentials on click, shows 'Incorrect Username or Password' alert if invalid."</p>
              </CardContent>
            </Card>
             <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <CardHeader><CardTitle className="text-xl text-[#9C27FF] flex items-center"><FileCog className="w-5 h-5 mr-2"/>SRS (Software)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Created by the BA or System Analyst. Translates customer requirements (CRS/BRS) into a detailed document understandable by developers and testers. Describes how the software should be developed, including functional and non-functional requirements, and often includes use cases.</p>
                 <p className="text-xs italic mt-2">Example: "Proposed software modules: Login (authentication), Administrator (user/project management), Employee (effort entry), Reporting (admin reports, exportable)."</p>
              </CardContent>
            </Card>
          </div>
          {/* Comparison Table */}
          <Card className="overflow-hidden shadow-lg">
             <CardHeader><CardTitle className="text-xl text-center text-[#0052CC]">BRS vs FRS vs SRS Comparison</CardTitle></CardHeader>
             <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    {/* Added dark mode classes to table header row and cells */}
                    <TableRow className="bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700">
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Aspect</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-200">BRS</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-200">FRS</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-200">SRS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {docComparison.map((row) => (
                      <TableRow key={row.aspect} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{row.aspect}</TableCell>
                        <TableCell>{row.brs}</TableCell>
                        <TableCell>{row.frs}</TableCell>
                        <TableCell>{row.srs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
             </CardContent>
          </Card>
        </section>

        {/* STLC Phases - Interactive Timeline */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">STLC Phases</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">Click on each phase to explore its activities, deliverables, and specific details in this structured testing process.</p>
          <div className="relative pl-8"> {/* Container for timeline */}
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[1.375rem] w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-teal-200 rounded-full"></div>

            {stlcPhases.map((phase, index) => (
              <div key={index} className="relative mb-4"> {/* Reduced margin-bottom */}
                {/* Dot and Clickable Title */}
                <div
                  className="flex items-start cursor-pointer group py-2" // Added padding for easier clicking
                  onClick={() => setExpandedPhaseIndex(expandedPhaseIndex === index ? null : index)}
                  role="button"
                  aria-expanded={expandedPhaseIndex === index}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setExpandedPhaseIndex(expandedPhaseIndex === index ? null : index); }}
                >
                  {/* Dot - Now contains the icon directly */}
                  <div className={`absolute -left-0.5 top-3 w-6 h-6 rounded-full ${phase.color.replace('border-', 'bg-')} shadow-md border-2 border-white z-10 flex items-center justify-center transition-transform group-hover:scale-110`}>
                     {/* Render icon inside the dot */}
                     {getStlcPhaseIcon(phase.title)}
                  </div>
                  {/* Title - Added Chevron indicator */}
                  <div className="pl-14 flex-1 flex justify-between items-center">
                    <h3 className={`text-xl font-semibold flex items-center text-gray-800 group-hover:underline`}>
                      {/* Icon is inside the dot now */}
                      <span>{index + 1}. {phase.title}</span>
                    </h3>
                    {/* Chevron Icon */}
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedPhaseIndex === index ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {expandedPhaseIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: '1rem' },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-14 overflow-hidden" // Match padding for content alignment
                    >
                      {/* Added inner div for padding and styling */}
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4 text-gray-700 mb-4">
                        <p>{phase.description}</p>
                        {/* Activities */}
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                          <p className="font-semibold text-gray-800 mb-1 flex items-center"><Activity className="w-4 h-4 mr-1.5 text-gray-500"/>Key Activities:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 pl-2 space-y-1">
                            {phase.activities.map(act => <li key={act}>{act}</li>)}
                          </ul>
                        </div>
                        {/* Deliverables */}
                        <p className="text-sm flex items-start"><FileCheck className="w-4 h-4 mr-1.5 mt-0.5 text-gray-500 shrink-0"/><strong className="text-gray-800 mr-1 shrink-0">Deliverables:</strong> <em className="italic">{phase.deliverables.join(", ")}</em></p>

                        {/* Phase-Specific Content */}
                        {phase.title === "Requirement Analysis" && (
                          <div className="pt-2 mt-3 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Info className="w-4 h-4 mr-1.5 text-blue-500"/>Requirement Traceability Matrix (RTM)</h4>
                            <p className="text-sm text-gray-600 mb-2">Links business requirements to functional requirements and test cases. Helps ensure all requirements are tested and track defects back to requirements.</p>
                            <p className="text-xs italic text-gray-500">(RTM Template/Example would go here - visual representation is best)</p>
                          </div>
                        )}
                        {phase.title === "Test Planning" && (
                           <div className="pt-2 mt-3 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><ClipboardList className="w-4 h-4 mr-1.5 text-green-500"/>Test Plan Elements (IEEE 829 Standard):</h4>
                            <ul className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                              {testPlanElements.map(el => <li key={el}>{el}</li>)}
                            </ul>
                          </div>
                        )}
                         {phase.title === "Test Case Development / Design" && (
                           <div className="pt-2 mt-3 border-t border-gray-100 space-y-4">
                             <div>
                               <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Info className="w-4 h-4 mr-1.5 text-purple-500"/>Key Concepts:</h4>
                               <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                 <li><strong>Test Scenario:</strong> Any functionality that can be tested (Test Condition/Possibility). Think from the end-user's perspective.</li>
                                 <li><strong>Test Case:</strong> Set of actions, data, pre/postconditions to verify a specific feature against a requirement.</li>
                                 <li><strong>Use Case:</strong> Description of how an end-user interacts with the system (designed by BA).</li>
                               </ul>
                             </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Tags className="w-4 h-4 mr-1.5 text-purple-500"/>Test Case Parameters:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {testCaseParams.map(p => <Badge key={p} variant="secondary">{p}</Badge>)}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><CheckSquare className="w-4 h-4 mr-1.5 text-purple-500"/>Best Practices for Writing Good Test Cases:</h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {testCaseBestPractices.map(bp => (
                                    <li key={bp} className="flex items-start">
                                      <CheckSquare className="w-3.5 h-3.5 mr-2 mt-1 text-purple-400 shrink-0"/>
                                      <span>{bp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                               <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Users className="w-4 h-4 mr-1.5 text-purple-500"/>Test Case Review:</h4>
                               <p className="text-sm text-gray-600 mb-1">Why? To uncover errors, check completeness, ensure standards are followed.</p>
                               <p className="text-sm text-gray-600">Types: Self-Review, Peer Review, Lead Review, Client Review.</p>
                               <p className="text-xs italic text-gray-500 mt-1">(A detailed review checklist would typically be used here)</p>
                             </div>
                           </div>
                        )}
                         {phase.title === "Test Environment Setup" && (
                           <div className="pt-2 mt-3 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Settings2 className="w-4 h-4 mr-1.5 text-red-500"/>Typical Environments:</h4>
                            <div className="flex flex-wrap gap-2">
                              {["Dev", "QA", "Pre-Production", "Production"].map(env => (
                                <span key={env} className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium border border-yellow-200">{env}</span>
                              ))}
                            </div>
                          </div>
                        )}
                         {phase.title === "Test Cycle Closure" && (
                           <div className="pt-2 mt-3 border-t border-gray-100 space-y-4">
                             <div>
                               <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><Activity className="w-4 h-4 mr-1.5 text-teal-500"/>Test Metrics:</h4>
                               <p className="text-sm text-gray-600">Quantitative measures of quality (e.g., "Number of issues per thousand lines of code"). Used to track progress and quality.</p>
                             </div>
                             <div>
                               <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><FileCheck className="w-4 h-4 mr-1.5 text-teal-500"/>Test Closure Report:</h4>
                               <p className="text-sm text-gray-600">Summary document prepared before formally completing testing. Includes test execution summary, defect analysis (count, type, severity), lessons learned, etc.</p>
                                <p className="text-xs italic text-gray-500 mt-1">(A template example would typically be shown here)</p>
                             </div>
                           </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="mt-16 text-center">
          <Link
            to="/sdlc-stlc"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            SDLC & STLC Integration →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
