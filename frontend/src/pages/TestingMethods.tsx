import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Import Accordion
import {
  ArrowRight,
  Box, // For Black Box
  Code, // For White Box
  Blend, // For Gray Box
  Lightbulb, // For Experience-Based
  ListChecks, // For How To / Steps / Verification
  ThumbsUp, // For Advantages
  ThumbsDown, // For Disadvantages
  HelpCircle, // For When to Use
  Target, // For Techniques / Types
  Info, // For Definition/General Info
  Layers3, // For Types
  Workflow, // For Steps
  CheckCircle, // For Verification Points
  AlertTriangle, // For Disadvantages
  Sparkles, // For Advantages
  Puzzle, // For Techniques
  Clock // For When to Use
} from "lucide-react"; // Import relevant icons

// Define interfaces for structured data (optional but good practice)
interface TestingTechnique {
  name: string;
  description: string;
  example?: React.ReactNode; // Allow JSX for examples
  importance?: string[];
}

interface TestingMethodProps {
  title: string;
  definition: string;
  howTo?: string[];
  types?: TestingTechnique[];
  techniques?: TestingTechnique[];
  advantages?: string[];
  disadvantages?: string[];
  verificationPoints?: string[];
  whenToUse?: string[];
  steps?: string[];
  color: string; // e.g., 'text-[#00A2FF]' or 'border-[#9C27FF]'
  icon: React.ElementType; // Add icon type
}

// Component to render a testing method card with Accordion
const MethodCard: React.FC<TestingMethodProps> = ({
  title, definition, howTo, types, techniques, advantages, disadvantages, verificationPoints, whenToUse, steps, color, icon: Icon
}) => {
  const borderColorClass = color.startsWith('text-gray') ? 'border-gray-400' : color.replace('text-', 'border-');
  const titleColorClass = color.startsWith('text-gray') ? 'text-gray-700' : color;

  return (
    <Card className={`shadow-lg border-l-4 ${borderColorClass} transition-shadow duration-300 hover:shadow-xl overflow-hidden`}>
      <CardHeader className="pb-4 flex flex-row items-center gap-3"> {/* Use flex for icon alignment */}
        <Icon className={`w-7 h-7 ${titleColorClass}`} aria-hidden="true" />
        <CardTitle className={`text-2xl font-bold ${titleColorClass}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0"> {/* Adjusted spacing */}
        <p className="text-gray-700 leading-relaxed px-4 pb-4">{definition}</p> {/* Added padding */}

        {/* Use Accordion for collapsible sections */}
        <Accordion type="multiple" className="w-full">

          {howTo && (
            <AccordionItem value="how-to">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>How to Perform</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                  {howTo.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </AccordionContent>
            </AccordionItem>
          )}

          {verificationPoints && (
            <AccordionItem value="verify">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>What to Verify</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                  {verificationPoints.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          {types && (
            <AccordionItem value="types">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <Layers3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>Types</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <div className="space-y-3">
                  {types.map((type, i) => (
                    <Card key={i} className="p-3 bg-gray-50/70 dark:bg-gray-800 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                      <p className="font-medium text-gray-800 dark:text-gray-200">{type.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{type.description}</p>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {techniques && (
            <AccordionItem value="techniques">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>Common Techniques</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techniques.map((tech, i) => (
                    <Card key={i} className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                      <CardHeader className="pb-2 pt-4 px-4">
                        <CardTitle className={`text-md font-semibold text-gray-800 dark:text-gray-200`}>{tech.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 pb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-snug">{tech.description}</p>
                        {tech.example && <div className="text-xs italic text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">{tech.example}</div>}
                        {tech.importance && (
                          <div className="mt-3">
                            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Importance:</p>
                            <ul className="list-disc list-inside space-y-1 text-xs text-gray-500 dark:text-gray-400 pl-2">
                              {tech.importance.map((imp, idx) => <li key={idx}>{imp}</li>)}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {steps && (
             <AccordionItem value="steps">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span>Generic Steps</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                  {steps.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </AccordionContent>
            </AccordionItem>
          )}

          {(advantages || disadvantages) && (
            <AccordionItem value="pros-cons">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                 <div className="flex items-center gap-2">
                   <Sparkles className="w-5 h-5 text-green-600 dark:text-green-500" /> / <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-500" />
                   <span>Advantages & Disadvantages</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advantages && (
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-green-700 dark:text-green-500 flex items-center gap-1.5"><Sparkles className="w-4 h-4"/> Advantages:</h4>
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                        {advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                      </ul>
                    </div>
                  )}
                  {disadvantages && (
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-red-700 dark:text-red-500 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4"/> Disadvantages:</h4>
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                        {disadvantages.map((dis, i) => <li key={i}>{dis}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {whenToUse && (
            <AccordionItem value="when-to-use">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3 bg-gray-50/50 hover:bg-gray-100/70 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                 <div className="flex items-center gap-2">
                   <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                   <span>When to Use</span>
                 </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-3 pb-4 bg-white dark:bg-gray-900">
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-2">
                  {whenToUse.map((use, i) => <li key={i}>{use}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

        </Accordion>
      </CardContent>
    </Card>
  );
};

export default function TestingMethods() {

  // Data for each testing method
  const blackBoxData: TestingMethodProps = {
    title: "Black Box Testing",
    definition: "A software testing method where functionalities are tested without knowledge of internal code structure, implementation details, or internal paths. Focuses on input/output based on requirements and specifications. Also known as Behavioral Testing. Typically performed by the QA team.",
    howTo: [
      "Examine requirements and specifications.",
      "Choose valid inputs (positive scenarios) and invalid inputs (negative scenarios).",
      "Determine expected outputs for all chosen inputs.",
      "Construct test cases with selected inputs.",
      "Execute the test cases.",
      "Compare actual outputs with expected outputs.",
      "Report defects, re-test fixes."
    ],
    whenToUse: [ // Added When to Use
      "When internal structure is unknown or irrelevant.",
      "Testing from an end-user perspective.",
      "Validating software against requirements.",
      "System testing, Acceptance testing.",
      "Testing large, complex applications where internal details are too vast."
    ],
    types: [
      { name: "Functional Testing", description: "Tests specific functions/features (e.g., login validation). Includes smoke, sanity, integration, system testing." },
      { name: "Non-Functional Testing", description: "Tests 'how' software performs (usability, performance, compatibility, security)." },
      { name: "Regression Testing", description: "Checks if new versions introduce defects (regressions) in existing functional or non-functional aspects." }
    ],
    techniques: [
      { name: "Boundary Value Analysis (BVA)", description: "Tests values at the boundaries of valid/invalid partitions.", example: "Age range 21-65. Test: 20 (invalid), 21 (valid), 22 (valid), 64 (valid), 65 (valid), 66 (invalid).", importance: ["Effective for ranges/numeric inputs.", "Catches errors at edges.", "Complements Equivalence Partitioning."] },
      { name: "Equivalence Partitioning (EP)", description: "Divides input data into equivalent partitions; tests one value from each.", example: "Age range 6-10 valid. Test: 4 (invalid partition 1), 8 (valid partition), 12 (invalid partition 2).", importance: ["Reduces number of test cases.", "Maintains test coverage.", "Efficient for large input domains."] },
      { name: "Decision Table Testing", description: "Uses tables for combinations of inputs and their outputs, useful for complex business rules.", example: "Login: Rules for combinations of Correct/Incorrect Username/Password leading to HomePage/Error.", importance: ["Handles complex conditions.", "Ensures good coverage for rule-based systems.", "Easy to interpret."] },
      { name: "State Transition Testing", description: "Models how the system moves between different states based on events/inputs." },
      { name: "Graph-Based Testing", description: "Models the application as a graph to identify test paths." }
    ],
    color: "text-[#00A2FF]", // Electric Blue
    icon: Box // Added missing icon
  };

  const whiteBoxData: TestingMethodProps = {
    title: "White Box Testing",
    definition: "A testing technique examining the internal structure, design, and coding to verify input-output flow and improve design, usability, and security. Code is visible to testers. Also known as Clear/Open/Transparent/Code-Based/Glass Box Testing. Often performed by developers.",
    verificationPoints: [
      "Internal security holes.",
      "Broken or poorly structured paths.",
      "Flow of specific inputs through the code.",
      "Expected output verification.",
      "Functionality of conditional loops.",
      "Testing of each statement, object, function individually."
    ],
    howTo: [
      "Understand the Source Code: Learn the code, programming languages, and secure coding practices.",
      "Create Test Cases and Execute: Write code to test the source code (unit tests), or use manual testing, trial-and-error, and testing tools."
    ],
    advantages: [
      "Code optimization by finding hidden errors.",
      "Test cases can be easily automated.",
      "More thorough as all code paths are usually covered.",
      "Can start early in SDLC, even without GUI."
    ],
    disadvantages: [
      "Can be complex and expensive.",
      "Developers might perform less detailed testing.",
      "Requires resources with deep programming knowledge.",
      "Time-consuming for large applications."
    ],
    techniques: [
      { name: "Statement Coverage", description: "Ensures every line of code is executed at least once.", example: "Function Prints(a, b). If a=3, b=9, result > 0, path covers 5/7 statements (71%). If a=-3, b=-9, result < 0, path covers 6/7 statements (85%). Both scenarios together cover 100%.", },
      { name: "Decision Coverage", description: "Ensures each boolean expression (decision) evaluates to both TRUE and FALSE.", example: "Function Test(a). If a=7 (a > 4 is TRUE), coverage is 50%. If a=3 (a < 4 is FALSE), coverage is 50%. Both needed for 100%.", },
      { name: "Branch Coverage", description: "Ensures every possible branch from each decision point is executed at least once.", example: "if a > 0 and b > 0. Needs tests for (T,T), (F,T), (T,F), (F,F) combinations to cover all branches.", },
      { name: "Condition Coverage", description: "Ensures each individual condition within a decision evaluates to both TRUE and FALSE." },
      { name: "Multiple Condition Coverage", description: "Tests all possible combinations of outcomes for conditions within each decision." },
      { name: "Path Coverage", description: "Aims to execute every possible path through the code (often impractical)." },
      // Other types listed in text can be added here if needed: Loop, Mutation, Integration, Penetration, Memory, Performance, Control flow, Data flow
    ],
    whenToUse: [ // Added When to Use
      "When internal code structure is accessible.",
      "Unit testing and component testing.",
      "Integration testing (verifying interactions between components).",
      "Optimizing code and improving performance.",
      "Security testing to find vulnerabilities in the code.",
      "Early in the SDLC."
    ],
    color: "text-[#9C27FF]", // Neon Purple
    icon: Code // Added icon
  };

   const grayBoxData: TestingMethodProps = {
    title: "Gray Box Testing",
    definition: "A software testing technique using partial knowledge of the internal structure (e.g., architecture, database schema, logs) combined with black-box techniques. Aims to identify defects due to improper code structure or application use.",
    advantages: [
      "Combines benefits of black-box and white-box.",
      "More comprehensive than black-box alone.",
      "Less time-consuming than full white-box.",
      "Better vulnerability detection based on partial knowledge.",
      "Tests from user perspective with some internal insight.",
      "Unbiased approach, avoids tester/developer conflicts.",
      "Effective for integration testing."
    ],
    disadvantages: [
      "Limited code access means some implementation bugs might be missed.",
      "Requires some technical knowledge.",
      "Test case design can be complex.",
      "Not as thorough as full white-box.",
      "Defect association can be difficult in distributed systems.",
      "Not suitable for algorithm testing."
    ],
     steps: [
      "Select inputs using both BlackBox & WhiteBox perspectives.",
      "Identify expected outputs for these inputs.",
      "Identify major paths to traverse during testing.",
      "Identify sub-functions for deep-level testing.",
      "Identify inputs for sub-functions.",
      "Identify expected outputs for sub-functions.",
      "Execute test cases for sub-functions.",
      "Verify the correctness of results."
    ],
    techniques: [
      { name: "Matrix Testing", description: "Analyzes variable usage within a program to identify unused or uninitialized variables.", example: "Program uses `total_price`, `discount`, `tax`, `final_price`. `unused_variable` is identified and recommended for removal." },
      { name: "Regression Testing", description: "Verifies that code changes (e.g., bug fixes) haven't negatively impacted other parts of the software.", example: "Fixing a 'Transfer Funds' fee bug. Regression tests check if 'Bill Pay' or 'Account Balance' display are now broken." },
      { name: "Orthogonal Array Testing (OAT)", description: "Uses orthogonal arrays to test pair-wise combinations of parameters with a minimal number of test cases.", example: "Printer Driver (Size, Orientation, Color). OAT reduces 12 combinations to 6 test cases covering all pairs." },
      { name: "Pattern Testing", description: "Leverages knowledge of past defects in similar software/patterns to design tests targeting likely problem areas.", example: "Previous e-commerce sites had session issues. New site testing focuses heavily on session persistence and interruptions." },
      { name: "Fault Injection Testing", description: "Deliberately introduces errors (e.g., invalid data, network failures) to test system robustness and error handling.", example: "Simulate network failure during financial transaction; check if system handles error gracefully and rolls back." },
      { name: "Data Flow Testing", description: "Focuses on variable life cycles (definition, usage, modification) to find improper data use.", example: "Track item price from cart addition to final payment; verify calculations are correct at each step." },
      { name: "API Testing", description: "Tests APIs using partial knowledge of their structure for functionality, reliability, performance, security.", example: "Send valid/invalid requests to weather API; check response format, error handling, performance." },
      { name: "Memory Leak Testing", description: "Identifies if the application fails to release memory, potentially causing performance issues or crashes.", example: "Run photo editor continuously, monitor memory usage with profiling tools to find leaks." },
      { name: "Back-End Testing", description: "Tests server-side components and databases using knowledge of schemas/queries.", example: "Verify creating/updating a user correctly modifies the database and enforces constraints." },
      { name: "Configuration Testing", description: "Checks application behavior across different hardware/software configurations.", example: "Test mobile app on various devices, OS versions, screen sizes, and system settings." }
    ],
    color: "text-gray-600", // Neutral Gray
    icon: Blend // Added icon
  };

   const experienceBasedData: TestingMethodProps = {
    title: "Experience-Based Testing",
    definition: "Relies on the tester's skill, intuition, and past experience. Often used ad-hoc when specifications are inadequate or unavailable. Testers focus on areas likely to fail or be heavily used.",
    whenToUse: [
      "Requirements/specifications are unavailable or inadequate.",
      "Limited knowledge of the software product initially.",
      "Time constraints prevent a fully structured approach.",
      "To complement specification-based and structure-based techniques.",
      "Suitable for low-risk systems."
    ],
    types: [
      { name: "Error Guessing", description: "Uses tester's experience/intuition to anticipate likely problematic areas or common errors.", example: "Testing scenarios like divide by zero, blank inputs, submitting empty forms, uploading oversized files.", importance: ["Effective with other techniques.", "Finds bugs missed by formal methods.", "Supplements formal design.", "Good for guessing problem areas."] },
      { name: "Checklist-Based Testing", description: "Uses a pre-planned list of tasks or checks, often created by experienced testers.", example: "Image Upload Checklist: Check path, different extensions (JPEG, BMP), same names, size limits, progress bar, cancel button, multiple uploads, quality.", importance: ["Easy to read and execute.", "Quick status tracking.", "Flexible ordering.", "Good source for reports."] },
      { name: "Exploratory Testing", description: "Simultaneous learning, test design, and execution. Testers explore the system 'on the fly' without pre-defined cases. Focuses on 'thinking' and discovery. Widely used in Agile.", example: "Like driving in a new region without a map, using intuition and standard strategies (ask directions, look for signs) to reach the destination.", importance: ["Useful with poor requirements.", "Finds more bugs through investigation.", "Uncovers bugs missed by other techniques.", "Improves tester creativity/productivity.", "Drills down into application details."] },
      { name: "Attack Testing", description: "Simulates potential attacks to find security vulnerabilities. Relies on knowledge of common attack vectors.", example: "Attempting to reset another user's password by manipulating URLs or guessing security questions.", importance: ["Enhances security posture.", "Prevents financial/reputational damage.", "Improves software quality & user trust.", "Helps meet compliance standards.", "Promotes proactive risk management."] }
    ],
    color: "text-orange-500", // Vibrant Orange
    icon: Lightbulb // Added icon
  };

   const comparisonData = [
    { aspect: "Knowledge of Code", black: "No knowledge", white: "Complete knowledge", gray: "Partial knowledge" },
    { aspect: "Focus", black: "Functionality, UI", white: "Code paths, structure", gray: "Architecture, data flow" },
    { aspect: "Performed By", black: "QA, End-users", white: "Developers, Skilled QA", gray: "QA/Dev with partial insight" },
    { aspect: "Advantages", black: "User perspective, Simpler", white: "Thorough coverage, Early detection", gray: "Combines benefits, More efficient than white" },
    { aspect: "Disadvantages", black: "Limited insight, Can miss logic errors", white: "Time-consuming, Needs coding skills", gray: "Not full code view, Can be complex" },
    { aspect: "Typical Use Case", black: "Acceptance, System Testing", white: "Unit, Integration Testing", gray: "Integration, API Testing" },
  ];


  return (
    <PageLayout
      title="Software Testing Methods"
      subtitle="Explore Black Box, White Box, Gray Box, and Experience-Based techniques"
      description="Learn about software testing methods: Black Box (functional, non-functional), White Box (code-based, statement/branch coverage), Gray Box (partial knowledge), and Experience-Based (error guessing, exploratory)."
    >
      {/* Increased vertical padding, adjusted horizontal padding for different screen sizes */}
      <div className="max-w-7xl mx-auto space-y-16 py-16 px-4 sm:px-6 lg:px-8">

        {/* Introduction */}
        <section className="text-center mb-12"> {/* Added bottom margin */}
           <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">Understanding Testing Methods</h2>
           <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"> {/* Improved line height */}
             Testing methods are approaches used to verify software quality, varying by the tester's knowledge of the application's internal workings. The primary methods—Black Box, White Box, and Gray Box—along with Experience-Based techniques, each serve unique purposes in quality assurance.
           </p>
        </section>

        {/* Method Sections */}
        <MethodCard {...blackBoxData} />
        <MethodCard {...whiteBoxData} />
        <MethodCard {...grayBoxData} />
        <MethodCard {...experienceBasedData} />

        {/* Comparison Table */}
        <section>
           <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">Methods Comparison</h2> {/* Increased size */}
           <Card className="overflow-hidden shadow-xl rounded-lg border border-gray-200 dark:border-gray-700"> {/* Adjusted shadow/rounding & dark border */}
             <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader className="bg-gray-100 dark:bg-gray-700"> {/* Dark header bg */}
                    <TableRow className="border-b border-gray-300 dark:border-gray-600"> {/* Dark border */}
                      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Aspect</TableHead>
                      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Black Box</TableHead>
                      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">White Box</TableHead>
                      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Gray Box</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"> {/* Dark bg & divider */}
                    {comparisonData.map((row, idx) => (
                      <TableRow
                        key={row.aspect}
                        className={`transition-colors duration-150 ${
                          // Adjusted dark alternating backgrounds
                          idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/80 dark:bg-gray-700/50'
                        } hover:bg-blue-50/50 dark:hover:bg-blue-900/30`} // Dark hover
                      >
                        <TableCell className="font-medium px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{row.aspect}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{row.black}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{row.white}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{row.gray}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
             </CardContent>
           </Card>
        </section>


        {/* Next Button */}
        <div className="mt-20 text-center"> {/* Increased margin */}
          <Link
            to="/testing-tools"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" // Added flex, gap, adjusted padding/shadow/transition
          >
            <span>Testing Tools</span>
            <ArrowRight className="w-5 h-5" /> {/* Added icon */}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
