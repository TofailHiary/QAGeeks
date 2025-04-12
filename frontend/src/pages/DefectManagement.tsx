import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Import Accordion
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip.tsx"; // Import Tooltip - Added .tsx extension
import { motion } from "framer-motion";
import { Bug, ClipboardList, Workflow, Wrench, Lightbulb, AlertTriangle, CheckCircle, XCircle, FileQuestion, Clock, Copy, Archive, HelpCircle, ArrowRight, Settings, Puzzle, UserCog, TestTubeDiagonal, RotateCcw } from "lucide-react"; // Import relevant icons (Added Settings, Puzzle, UserCog, TestTubeDiagonal, RotateCcw; Replaced Duplicate with Copy)

export default function DefectManagement() {

  const terminology = [
    { term: "Defect", definition: "A flaw or imperfection in a software component or system that causes it to fail to perform its required function.", icon: <Bug className="w-4 h-4 mr-1 inline-block" /> },
    { term: "Bug", definition: "An informal name for a defect, often used interchangeably.", icon: <Bug className="w-4 h-4 mr-1 inline-block" /> },
    { term: "Error", definition: "A human action that produces an incorrect result. Errors in code lead to defects.", icon: <AlertTriangle className="w-4 h-4 mr-1 inline-block" /> },
    { term: "Issue", definition: "A general term for a problem or concern, which might be a defect, enhancement request, or question.", icon: <HelpCircle className="w-4 h-4 mr-1 inline-block" /> },
    { term: "Mistake", definition: "An error made by a person, often referring to errors in documentation or requirements.", icon: <FileQuestion className="w-4 h-4 mr-1 inline-block" /> },
    { term: "Failure", definition: "The inability of a system or component to perform its required functions within specified performance requirements. Often the observable result of one or more defects.", icon: <XCircle className="w-4 h-4 mr-1 inline-block" /> },
  ];

  const bugCauses = [
    { title: "Incorrect Implementation", description: "Code doesn't match the specified logic. Example: Clicking 'Save' deletes the record instead.", icon: <AlertTriangle className="w-5 h-5 text-red-500" /> },
    { title: "Missing Functionality", description: "A required feature is not implemented. Example: The 'Export to CSV' button is absent.", icon: <FileQuestion className="w-5 h-5 text-orange-500" /> },
    { title: "Unexpected Interactions", description: "Different modules interfere negatively. Example: Enabling dark mode breaks the search functionality.", icon: <Wrench className="w-5 h-5 text-yellow-500" /> },
    { title: "Poor Design/Architecture", description: "Fundamental design flaws lead to issues. Example: System slows down drastically with more than 10 users.", icon: <Bug className="w-5 h-5 text-purple-500" /> },
    { title: "Environment Issues", description: "Problems specific to certain OS, browsers, or configurations.", icon: <Settings className="w-5 h-5 text-blue-500" /> },
    { title: "Third-Party Code", description: "Bugs originating from external libraries or APIs.", icon: <Puzzle className="w-5 h-5 text-gray-500" /> },
  ];

  const bugReportElements = [
    { field: "Bug Title", description: "Concise, unique, and descriptive summary of the issue.", example: "Example: 'User cannot log in with valid credentials on Chrome v120'" },
    { field: "Bug ID", description: "Unique identifier automatically assigned by the tracking tool." },
    { field: "Project/Module", description: "Specific area of the application where the bug occurs." },
    { field: "Environment", description: "System details (e.g., OS: Windows 11, Browser: Chrome v120, Device: Desktop)." },
    { field: "Severity", description: "Impact on functionality (e.g., Blocker, Critical, Major, Minor, Trivial). Determined by QA.", example: "Example: Blocker - Prevents core functionality; Trivial - Minor UI cosmetic issue." },
    { field: "Priority", description: "Urgency to fix (e.g., High, Medium, Low). Determined by Product Owner/Manager.", example: "Example: High - Must fix before release; Low - Fix if time permits." },
    { field: "Status", description: "Current state in the bug life cycle (e.g., New, Assigned, Fixed, Closed)." },
    { field: "Reported By", description: "Name/ID of the person who found the bug." },
    { field: "Reported On", description: "Date and time the bug was logged." },
    { field: "Assigned To", description: "Developer or team responsible for fixing the bug." },
    { field: "Steps to Reproduce", description: "Clear, numbered steps to reliably trigger the bug." },
    { field: "Expected Result", description: "What should have happened according to requirements." },
    { field: "Actual Result", description: "What actually happened when the steps were followed." },
    { field: "Attachments", description: "Screenshots, videos, logs, or other relevant files." },
    { field: "Notes/Comments", description: "Any additional context, observations, or discussion." },
  ];

  const bugLifeCycleStates = [
    { state: "New", description: "Bug is logged for the first time.", icon: <Lightbulb className="w-4 h-4 mr-1.5" />, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700" },
    { state: "Assigned", description: "Bug is assigned to a developer.", icon: <UserCog className="w-4 h-4 mr-1.5" />, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700" },
    { state: "Open", description: "Developer starts working on the fix.", icon: <Wrench className="w-4 h-4 mr-1.5" />, color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-700" },
    { state: "Fixed", description: "Developer has applied a fix.", icon: <CheckCircle className="w-4 h-4 mr-1.5" />, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700" },
    { state: "Pending Retest", description: "Fix is ready for QA verification.", icon: <ClipboardList className="w-4 h-4 mr-1.5" />, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700" },
    { state: "Retest", description: "QA is actively verifying the fix.", icon: <TestTubeDiagonal className="w-4 h-4 mr-1.5" />, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700" },
    { state: "Verified", description: "QA confirms the fix is working.", icon: <CheckCircle className="w-4 h-4 mr-1.5" />, color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-700" },
    { state: "Reopened", description: "Fix didn't work; bug sent back.", icon: <RotateCcw className="w-4 h-4 mr-1.5" />, color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300 dark:border-pink-700" },
    { state: "Closed", description: "Bug is resolved and verified.", icon: <Archive className="w-4 h-4 mr-1.5" />, color: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-400 dark:border-gray-600" },
    { state: "Rejected", description: "Considered not a valid defect.", icon: <XCircle className="w-4 h-4 mr-1.5" />, color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300 dark:border-red-700" },
    { state: "Duplicate", description: "Same as another reported bug.", icon: <Copy className="w-4 h-4 mr-1.5" />, color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-300 dark:border-gray-600" },
    { state: "Deferred", description: "Fix postponed to a later release.", icon: <Clock className="w-4 h-4 mr-1.5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <PageLayout
      title="Mastering Defect Management"
      subtitle="Identify, Report, Track, and Resolve Software Defects Effectively"
      description="Learn effective defect management in QA, including bug terminology, common causes, bug reporting best practices, tracking tools (Jira, Bugzilla), and the complete bug life cycle from New to Closed."
    >
      <div className="max-w-7xl mx-auto space-y-20 py-16 px-4 sm:px-6 lg:px-8">

        {/* What is a Bug/Defect? */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
            <Bug className="w-8 h-8 mr-3 text-red-500" /> What is a Bug / Defect?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In software, a <strong>defect</strong> (often called a <strong>bug</strong>) is any deviation from the expected behavior or requirements. It's a flaw that can cause the application to produce incorrect results, behave unexpectedly, or fail entirely. Identifying and managing these defects is a critical part of ensuring software quality.
          </p>
        </motion.section>

        {/* Basic Terminology */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
           <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50 dark:bg-gray-700 p-6">
              <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center">
                <HelpCircle className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400" /> Key Terminology
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TooltipProvider delayDuration={100}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {terminology.map((item) => (
                    <Tooltip key={item.term}>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="cursor-pointer p-3 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors flex items-center"
                        >
                          {item.icon}
                          <span className="font-medium text-gray-700 dark:text-gray-200">{item.term}</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black text-white dark:bg-white dark:text-black rounded-md shadow-lg p-2 max-w-xs text-sm">
                        <p>{item.definition}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>
        </motion.section>

        {/* Why Bugs Occur */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-orange-500" /> Common Causes of Bugs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bugCauses.map((cause, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="h-full">
                <Card className="shadow-md hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                  <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                    {cause.icon}
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">{cause.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cause.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bug Tracking Tools */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center">
             <Wrench className="w-8 h-8 mr-3 text-purple-500" /> Popular Bug Tracking Tools
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Jira", "Bugzilla", "Azure DevOps (ADO)", "Redmine", "MantisBT", "Asana", "Trello", "ClickUp"].map(tool => (
               <motion.div key={tool} whileHover={{ scale: 1.1 }}>
                 <Badge variant="secondary" className="text-base px-4 py-1.5 shadow-sm cursor-default border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                   {tool}
                 </Badge>
               </motion.div>
            ))}
          </div>
           <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
             (Tool choice often depends on project size, methodology, and budget.)
           </p>
        </motion.section>

        {/* Effective Bug Reporting */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center">
            <ClipboardList className="w-8 h-8 mr-3 text-green-600" /> Effective Bug Reporting
          </h2>
           <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
             <CardHeader className="bg-gray-50 dark:bg-gray-700 p-6">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Why Report Effectively?</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 pt-2">
                  Clear, concise, and complete bug reports are essential. They help developers understand and reproduce the issue quickly, leading to faster fixes and saving valuable project time. Good reporting fosters better collaboration between QA and development teams.
                </CardDescription>
             </CardHeader>
             <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Key Elements of a Bug Report:</h3>
                <Accordion type="single" collapsible className="w-full">
                  {bugReportElements.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={item.field} className="border-b border-gray-200 dark:border-gray-700">
                      <AccordionTrigger className="text-left font-medium text-gray-700 dark:text-gray-200 hover:no-underline py-4">
                        {item.field}
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-4 text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                        {item.example && <em className="block mt-1 text-xs text-gray-500 dark:text-gray-400">{item.example}</em>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                 <p className="text-xs italic text-gray-500 dark:text-gray-400 mt-6">
                   Tip: Many teams use standardized templates within their bug tracking tools to ensure consistency.
                 </p>
             </CardContent>
           </Card>
        </motion.section>

        {/* Bug Life Cycle */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center">
            <Workflow className="w-8 h-8 mr-3 text-indigo-600" /> The Bug Life Cycle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            The Defect (or Bug) Life Cycle defines the sequence of states a defect goes through from its initial discovery to its final resolution. Understanding this cycle helps teams track progress and manage defects efficiently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {bugLifeCycleStates.map((item) => (
              <motion.div
                key={item.state}
                whileHover={{ y: -3 }}
                className={`p-4 rounded-lg shadow-md border ${item.color} flex flex-col items-start transition-shadow hover:shadow-lg`}
              >
                <div className="flex items-center font-semibold mb-2">
                  {item.icon}
                  <span>{item.state}</span>
                </div>
                <p className="text-xs flex-grow">{item.description}</p>
              </motion.div>
            ))}
          </div>
           <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
             Note: The specific states and transitions can vary slightly depending on the project's workflow and tracking tool configuration.
           </p>
        </motion.section>

        {/* Conclusion */}
         <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center border-t border-gray-200 dark:border-gray-700 pt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Effective Defect Management is Key</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to defect management, including clear reporting and understanding the life cycle, is crucial for delivering high-quality software. It improves communication, speeds up resolution times, and ultimately leads to a better end product.
          </p>
        </motion.section>

        {/* Next Button */}
        <div className="mt-12 text-center">
          <Link
            to="/levels-of-testing"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 group"
          >
            Explore Levels of Testing
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
