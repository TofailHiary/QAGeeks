import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const templateFiles = [
  "BRD/Business-Requirements-Document-BRD-Template.docx",
  "Bug report/Defects Report.docx",
  "FRS/func_req_doc.doc",
  "SRS/srs_template.doc",
  "Test Case/Test Cases Template.xlsx",
  "Test closure/Test Closure report_TEMPLATE_v 2.docx",
  "Test Metrics/Test Metrics Template.xls",
  "Test plan/Test plan example 2.docx",
  "Test plan/Test plan example 3 .docx",
  "Test plan/Test plan example 4.doc",
  "Test plan/TEST PLAN example template .pdf",
  "Test plan/Test_Plan 2.pdf",
  "Test plan/Test_Plan_Template_4 .doc",
  "Test plan/Test_Plan.pdf",
  "Test Scenarios/Test Scenarios.xlsx",
  "Tracability matrix/Requirements-Traceability-matrix.xlsx",
  "Tracability matrix/RTM .xlsx",
  "Tracability matrix/RTM_Estarta Traning.xlsx",
];

const exampleFiles = [
  "BugReport/OpenCart-BugReport.xlsx",
  "FRS/FRD sample template.docx",
  "FRS/OpenCart -FRS.pdf",
  "RTM Example/OpenCart-RTM.xlsx",
  "SRS/SRSExample-webapp.doc",
  "Test case/OpenCart-TestCases.xlsx",
  "Test case/test-case-example (1).xlsx",
  "Test case/test-case-example-01.doc",
  "Test case/test-case-example-02 (1).doc",
  "Test case/test-case-example-02.doc",
  "Test case/Test-Case-Format-with-Example (1).docx",
  "Test case/test-case-template (1).doc",
  "Test case/test-case-template-02.doc",
  "Test case/TestCaseTemplate.docx",
  "Test case/TestCaseTemplate(1).xls",
  "Test Closure report/PMO_TCOE_MCTRA_Test Closure reportt_SAMPLE.docx",
  "Test plan/OpenCart -Test Plan.pdf",
  "Test plan/Test plan example 2.docx",
  "Test plan/Test plan example 3 .docx",
  "Test plan/Test plan example 4.doc",
  "Test plan/TEST PLAN example template .pdf",
  "Test plan/Test_Plan 2.pdf",
  "Test plan/Test_Plan_Template_4 .doc",
  "Test plan/Test_Plan.pdf",
  "Test Scenarios/OpenCart-Test Scenarios .xlsx",
  "TestExecution Results/OpenCart-TestExecution Results.xlsx",
];

export default function Templates() {
  return (
    <PageLayout title="QA Templates & Examples" subtitle="Download ready-made templates and example documents for QA activities">
      <div className="max-w-6xl mx-auto space-y-12 py-12 px-4">
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Here you can find useful templates and real examples for various Quality Assurance documents. Click to download and customize them for your projects.
        </p>

        <h2 className="text-2xl font-bold text-center">Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templateFiles.map((file) => (
            <Card key={file} className="flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-center break-words capitalize">{file.split("/").pop()}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <div className="p-6 pt-0">
                <a
                  href={`/templates/${file}`}
                  download
                  className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-medium hover:brightness-110 transition-all"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mt-12">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleFiles.map((file) => (
            <Card key={file} className="flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-center break-words capitalize">{file.split("/").pop()}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <div className="p-6 pt-0">
                <a
                  href={`/examples/${file}`}
                  download
                  className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-medium hover:brightness-110 transition-all"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
