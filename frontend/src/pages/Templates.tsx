import React, { useState, useMemo } from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileSpreadsheet, File } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip components

// --- Enhanced Data Structure ---
interface TemplateItem {
  title: string;
  description: string;
  filePath: string;
  category: string; // Added category for potential filtering/grouping later
}

const templateFiles: TemplateItem[] = [
  { title: "Business Requirements (BRD)", description: "Standard template for documenting business needs.", filePath: "BRD/Business-Requirements-Document-BRD-Template.docx", category: "Requirements" },
  { title: "Defect Report", description: "Template for logging and tracking software defects.", filePath: "Bug report/Defects Report.docx", category: "Defects" },
  { title: "Functional Requirements (FRS)", description: "Document detailing functional specifications.", filePath: "FRS/func_req_doc.doc", category: "Requirements" },
  { title: "Software Requirements (SRS)", description: "Comprehensive description of software requirements.", filePath: "SRS/srs_template.doc", category: "Requirements" },
  { title: "Test Cases Template", description: "Spreadsheet for designing and documenting test cases.", filePath: "Test Case/Test Cases Template.xlsx", category: "Testing" },
  { title: "Test Closure Report", description: "Template for summarizing testing activities and results.", filePath: "Test closure/Test Closure report_TEMPLATE_v 2.docx", category: "Reporting" },
  { title: "Test Metrics", description: "Spreadsheet for tracking key testing metrics.", filePath: "Test Metrics/Test Metrics Template.xls", category: "Reporting" },
  { title: "Test Plan (Alt. DOCX)", description: "Alternative test plan format (DOCX).", filePath: "Test plan/Test plan example 2.docx", category: "Planning" },
  { title: "Test Plan (Structure B)", description: "Another test plan structure (DOCX).", filePath: "Test plan/Test plan example 3 .docx", category: "Planning" },
  { title: "Test Plan (Simple DOC)", description: "Simple test plan template (DOC).", filePath: "Test plan/Test plan example 4.doc", category: "Planning" },
  { title: "Test Plan (Example PDF)", description: "Example test plan in PDF format.", filePath: "Test plan/TEST PLAN example template .pdf", category: "Planning" },
  { title: "Test Plan (Alt. PDF)", description: "Alternative test plan example (PDF).", filePath: "Test plan/Test_Plan 2.pdf", category: "Planning" },
  { title: "Test Plan (Alt. DOC)", description: "Alternative test plan template (DOC).", filePath: "Test plan/Test_Plan_Template_4 .doc", category: "Planning" },
  { title: "Test Plan (Standard PDF)", description: "Standard test plan template (PDF).", filePath: "Test plan/Test_Plan.pdf", category: "Planning" },
  { title: "Test Scenarios", description: "Spreadsheet for outlining test scenarios.", filePath: "Test Scenarios/Test Scenarios.xlsx", category: "Testing" },
  { title: "Requirements Traceability Matrix (RTM)", description: "Excel template for tracing requirements.", filePath: "Tracability matrix/Requirements-Traceability-matrix.xlsx", category: "Requirements" },
  { title: "RTM (Simple)", description: "Simplified RTM template.", filePath: "Tracability matrix/RTM .xlsx", category: "Requirements" },
  { title: "RTM (Training Example)", description: "RTM example from training.", filePath: "Tracability matrix/RTM_Estarta Traning.xlsx", category: "Requirements" },
];

const exampleFiles: TemplateItem[] = [
  { title: "OpenCart Bug Report", description: "Example bug report for OpenCart.", filePath: "BugReport/OpenCart-BugReport.xlsx", category: "Defects" },
  { title: "FRD Sample", description: "Sample functional requirements document.", filePath: "FRS/FRD sample template.docx", category: "Requirements" },
  { title: "OpenCart FRS (PDF)", description: "Example FRS for OpenCart.", filePath: "FRS/OpenCart -FRS.pdf", category: "Requirements" },
  { title: "RTM Example (OpenCart)", description: "Example RTM for OpenCart.", filePath: "RTM Example/OpenCart-RTM.xlsx", category: "Requirements" },
  { title: "SRS Example (Web App)", description: "Example SRS for a web application.", filePath: "SRS/SRSExample-webapp.doc", category: "Requirements" },
  { title: "Test Cases (OpenCart)", description: "Example test cases for OpenCart.", filePath: "Test case/OpenCart-TestCases.xlsx", category: "Testing" },
  { title: "Test Case Example (Excel)", description: "Generic test case example (Excel).", filePath: "Test case/test-case-example (1).xlsx", category: "Testing" },
  { title: "Test Case Example (DOC)", description: "Generic test case example (DOC).", filePath: "Test case/test-case-example-01.doc", category: "Testing" },
  { title: "Test Case Example (Alt. DOC A)", description: "Alternative test case example (DOC).", filePath: "Test case/test-case-example-02 (1).doc", category: "Testing" },
  { title: "Test Case Example (Alt. DOC B)", description: "Another alternative test case example (DOC).", filePath: "Test case/test-case-example-02.doc", category: "Testing" },
  { title: "Test Case Format Example", description: "Example showing test case formatting.", filePath: "Test case/Test-Case-Format-with-Example (1).docx", category: "Testing" },
  { title: "Test Case Template (Simple DOC)", description: "Simple test case template (DOC).", filePath: "Test case/test-case-template (1).doc", category: "Testing" },
  { title: "Test Case Template (Alt. DOC)", description: "Alternative test case template (DOC).", filePath: "Test case/test-case-template-02.doc", category: "Testing" },
  { title: "Test Case Template (DOCX)", description: "Standard test case template (DOCX).", filePath: "Test case/TestCaseTemplate.docx", category: "Testing" },
  { title: "Test Case Template (XLS)", description: "Standard test case template (XLS).", filePath: "Test case/TestCaseTemplate(1).xls", category: "Testing" },
  { title: "Test Closure Report (Sample)", description: "Sample test closure report.", filePath: "Test Closure report/PMO_TCOE_MCTRA_Test Closure reportt_SAMPLE.docx", category: "Reporting" },
  { title: "Test Plan (OpenCart PDF)", description: "Example test plan for OpenCart (PDF).", filePath: "Test plan/OpenCart -Test Plan.pdf", category: "Planning" },
  { title: "Test Plan Example (DOCX)", description: "Example test plan (DOCX).", filePath: "Test plan/Test plan example 2.docx", category: "Planning" },
  { title: "Test Plan Example (Alt. DOCX)", description: "Alternative example test plan (DOCX).", filePath: "Test plan/Test plan example 3 .docx", category: "Planning" },
  { title: "Test Plan Example (Simple DOC)", description: "Simple example test plan (DOC).", filePath: "Test plan/Test plan example 4.doc", category: "Planning" },
  { title: "Test Plan Example (Template PDF)", description: "PDF example test plan from template.", filePath: "Test plan/TEST PLAN example template .pdf", category: "Planning" },
  { title: "Test Plan Example (Alt. PDF)", description: "Alternative PDF example test plan.", filePath: "Test plan/Test_Plan 2.pdf", category: "Planning" },
  { title: "Test Plan Example (Template DOC)", description: "Test plan example from DOC template.", filePath: "Test plan/Test_Plan_Template_4 .doc", category: "Planning" },
  { title: "Test Plan Example (Standard PDF)", description: "Standard PDF test plan example.", filePath: "Test plan/Test_Plan.pdf", category: "Planning" },
  { title: "Test Scenarios (OpenCart)", description: "Example test scenarios for OpenCart.", filePath: "Test Scenarios/OpenCart-Test Scenarios .xlsx", category: "Testing" },
  { title: "Test Execution Results (OpenCart)", description: "Example test execution results for OpenCart.", filePath: "TestExecution Results/OpenCart-TestExecution Results.xlsx", category: "Reporting" },
];

// --- Helper Function for File Icon ---
const getFileIcon = (filePath: string) => {
  const extension = filePath.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'docx':
    case 'doc':
    case 'pdf': // Grouping PDF with text docs for simplicity, could use a specific PDF icon if available/desired
    case 'txt':
      return <FileText className="h-5 w-5 text-blue-500" />;
    case 'xlsx':
    case 'xls':
      return <FileSpreadsheet className="h-5 w-5 text-green-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
};


// --- Reusable Card Component ---
const TemplateCard: React.FC<{ item: TemplateItem; baseUrl: string }> = ({ item, baseUrl }) => {
  // Conditionally set path based on environment
  const downloadPath = import.meta.env.PROD
    ? `${baseUrl.substring(1)}/${item.filePath}` // Relative path for production (works with /QAGeeks/ base)
    : `${baseUrl}/${item.filePath}`;             // Absolute path for development (as it was working before)

  return (
  // Added animation classes: opacity-0 animate-fade-in
  // Removed overflow-hidden to prevent tooltip clipping
  // Removed transform classes to potentially fix tooltip stacking issue
  <Card className="flex flex-col justify-between hover:shadow-lg transition-all duration-300 ease-in-out opacity-0 animate-fade-in">
    <CardHeader className="pb-2 flex flex-row items-start space-x-3">
      <div className="pt-1">
         {getFileIcon(item.filePath)}
      </div>
      <div>
        <CardTitle className="text-lg font-semibold leading-tight">{item.title}</CardTitle> {/* Adjusted leading */}
        {/* Optional: Add category badge */}
        {/* <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full self-start mt-1">{item.category}</span> */}
      </div>
    </CardHeader>
    <CardContent className="flex-grow pt-0">
      <CardDescription className="text-sm text-gray-600 pl-[32px]">
        {item.description}
      </CardDescription>
    </CardContent>
    {/* Add relative positioning and z-index to the footer to help with tooltip stacking */}
    <CardFooter className="relative z-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="default" size="sm" className="w-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white hover:brightness-110 transition-all">
            {/* Use conditionally generated path */}
            <a href={downloadPath} download={item.filePath.split('/').pop()}>
              <Download className="mr-2 h-4 w-4" /> Download
            </a>
          </Button>
        </TooltipTrigger>
        {/* Add z-index to ensure tooltip appears above card content */}
        <TooltipContent className="z-50">
          {/* Add styling for better handling of long filenames */}
          <p className="max-w-xs break-words">
            Download: {item.filePath.split('/').pop()}
          </p>
        </TooltipContent>
      </Tooltip>
    </CardFooter>
  </Card>
  );
};


export default function Templates() {
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState<string>("All");
  const [selectedExampleCategory, setSelectedExampleCategory] = useState<string>("All");

  // Memoize categories to avoid recalculating on every render
  const templateCategories = useMemo(() => ["All", ...new Set(templateFiles.map(item => item.category))], []);
  const exampleCategories = useMemo(() => ["All", ...new Set(exampleFiles.map(item => item.category))], []);

  // Memoize filtered lists
  const filteredTemplates = useMemo(() =>
    selectedTemplateCategory === "All"
      ? templateFiles
      : templateFiles.filter(item => item.category === selectedTemplateCategory),
    [selectedTemplateCategory]
  );

  const filteredExamples = useMemo(() =>
    selectedExampleCategory === "All"
      ? exampleFiles
      : exampleFiles.filter(item => item.category === selectedExampleCategory),
    [selectedExampleCategory]
  );


  return (
    <PageLayout title="QA Templates & Examples" subtitle="Download ready-made templates and example documents for QA activities">
      <TooltipProvider delayDuration={200}> {/* Wrap content in TooltipProvider */}
        <div className="max-w-7xl mx-auto space-y-16 py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Explore our collection of essential Quality Assurance templates and real-world examples. Filter by category and download documents to streamline your testing processes.
        </p>

        {/* --- Templates Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-4">Templates</h2> {/* Reduced bottom margin */}
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {templateCategories.map(category => (
              <Button
                key={`template-cat-${category}`}
                variant={selectedTemplateCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTemplateCategory(category)}
                className={cn(
                  "transition-colors duration-200",
                  selectedTemplateCategory === category && "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white border-transparent"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
          {/* Template Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((item) => (
                <TemplateCard key={item.filePath} item={item} baseUrl="/templates" />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No templates found for this category.</p>
            )}
          </div>
        </section>

        {/* --- Examples Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-4">Examples</h2> {/* Reduced bottom margin */}
           {/* Filter Buttons */}
           <div className="flex justify-center flex-wrap gap-2 mb-8">
            {exampleCategories.map(category => (
              <Button
                key={`example-cat-${category}`}
                variant={selectedExampleCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedExampleCategory(category)}
                className={cn(
                  "transition-colors duration-200",
                  selectedExampleCategory === category && "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white border-transparent"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Example Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {filteredExamples.length > 0 ? (
               filteredExamples.map((item) => (
                <TemplateCard key={item.filePath} item={item} baseUrl="/examples" />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No examples found for this category.</p>
            )}
          </div>
        </section>
      </div>
    </TooltipProvider> {/* Close TooltipProvider */}
    </PageLayout>
  );
}
