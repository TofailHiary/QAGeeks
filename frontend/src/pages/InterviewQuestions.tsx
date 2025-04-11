import React, { useState, useMemo } from "react";
import { PageLayout } from "components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { interviewQuestions as allInterviewQuestions } from "@/data/interviewQuestions";
import {
  HelpCircle, // General/Basic
  Workflow, // SDLC/STLC
  BookOpen, // Principles/Fundamentals
  Layers, // Levels
  FunctionSquare, // Functional Testing
  Settings2, // Non-Functional Testing
  Code, // White Box
  EyeOff, // Black Box
  Blend, // Gray Box
  ClipboardList, // Planning/Docs
  Bug, // Defect/Execution
  ListChecks, // Work Management (JIRA)
  Network, // API
  Smartphone, // Mobile
  Database, // Database
  Bot, // Automation
  ShieldCheck, // Security
  Gauge, // Performance
  MessageSquare, // Communication
  Users, // Agile/Collaboration
  Globe, // Localization/Globalization
  BarChart3, // Metrics
  UsersRound, // Team Structure
  Search, // Default/Search Icon
} from "lucide-react"; // Import icons

// Define type for question object
interface Question {
  question: string;
  answer: string;
}

// Define type for category object
interface Category {
  category: string;
  questions: Question[];
  icon?: React.ElementType; // Add optional icon type
}

// Icon mapping function
const getCategoryIcon = (categoryName: string): React.ElementType => {
  const lowerCaseCategory = categoryName.toLowerCase();
  if (lowerCaseCategory.includes("general") || lowerCaseCategory.includes("basic")) return HelpCircle;
  if (lowerCaseCategory.includes("sdlc") || lowerCaseCategory.includes("stlc")) return Workflow;
  if (lowerCaseCategory.includes("principles") || lowerCaseCategory.includes("fundamentals")) return BookOpen;
  if (lowerCaseCategory.includes("levels")) return Layers;
  if (lowerCaseCategory.includes("functional")) return FunctionSquare;
  if (lowerCaseCategory.includes("non-functional")) return Settings2;
  if (lowerCaseCategory.includes("white box")) return Code;
  if (lowerCaseCategory.includes("black box")) return EyeOff;
  if (lowerCaseCategory.includes("gray box")) return Blend;
  if (lowerCaseCategory.includes("planning") || lowerCaseCategory.includes("documentation")) return ClipboardList;
  if (lowerCaseCategory.includes("execution") || lowerCaseCategory.includes("defect") || lowerCaseCategory.includes("bug")) return Bug;
  if (lowerCaseCategory.includes("jira") || lowerCaseCategory.includes("work management")) return ListChecks;
  if (lowerCaseCategory.includes("api")) return Network;
  if (lowerCaseCategory.includes("mobile")) return Smartphone;
  if (lowerCaseCategory.includes("database")) return Database;
  if (lowerCaseCategory.includes("automation")) return Bot;
  if (lowerCaseCategory.includes("security")) return ShieldCheck;
  if (lowerCaseCategory.includes("performance")) return Gauge;
  if (lowerCaseCategory.includes("communication") || lowerCaseCategory.includes("reporting")) return MessageSquare; // Combined Bug Reporting & Comm Skills
  if (lowerCaseCategory.includes("agile") || lowerCaseCategory.includes("collaboration")) return Users;
  if (lowerCaseCategory.includes("localization") || lowerCaseCategory.includes("globalization") || lowerCaseCategory.includes("additional")) return Globe;
  if (lowerCaseCategory.includes("metrics")) return BarChart3;
  if (lowerCaseCategory.includes("team")) return UsersRound;
  return HelpCircle; // Default icon
};


export default function InterviewQuestions() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = useMemo(() => {
    if (!searchTerm) {
      return allInterviewQuestions;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return allInterviewQuestions
      .map((category) => {
        // Filter questions within the category
        const matchingQuestions = category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(lowerCaseSearchTerm) ||
            q.answer.toLowerCase().includes(lowerCaseSearchTerm)
        );

        // If the category name matches OR there are matching questions, include the category
        if (
          category.category.toLowerCase().includes(lowerCaseSearchTerm) ||
          matchingQuestions.length > 0
        ) {
          // If the category name itself didn't match, but questions did, return only matching questions
          if (!category.category.toLowerCase().includes(lowerCaseSearchTerm)) {
            return { ...category, questions: matchingQuestions };
          }
          // Otherwise, return the category with all its questions (as the category name matched)
          // or with the filtered questions if only questions matched
          return { ...category, questions: matchingQuestions.length > 0 ? matchingQuestions : category.questions };
        }
        return null; // Remove category if neither name nor questions match
      })
      .filter((category): category is Category => category !== null); // Filter out null categories
  }, [searchTerm]);


  return (
    <PageLayout title="QA Interview Questions" subtitle="Common interview questions for Quality Assurance roles">
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto mb-8"> {/* Reduced bottom margin */}
          Explore a comprehensive list of categorized QA interview questions. Use the search below to filter by keyword.
        </p>

        {/* Search Input with Icon */}
        <div className="mb-10 max-w-xl mx-auto relative">
          <Input
            type="text"
            placeholder="Search questions, answers, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-shadow duration-200 hover:shadow-md" // Rounded full, added padding, focus style
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" /> {/* Search Icon */}
        </div>

        {filteredQuestions.length > 0 ? (
          <Accordion type="multiple" className="space-y-4 md:space-y-5"> {/* Adjusted spacing */}
            {filteredQuestions.map((category) => {
              const IconComponent = getCategoryIcon(category.category);
              return (
                <AccordionItem
                  key={category.category}
                  value={category.category}
                  className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md" // More subtle styling
                >
                  <AccordionTrigger className="flex items-center w-full px-5 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-200 [&>svg]:ml-auto [&>svg]:text-blue-600"> {/* Adjusted trigger style */}
                    <IconComponent className="mr-3 h-5 w-5 text-blue-600 flex-shrink-0" /> {/* Icon added */}
                    <span className="flex-1">{category.category}</span> {/* Ensure text takes available space */}
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50/50 px-5 pt-3 pb-5 text-gray-700 border-t border-gray-200"> {/* Subtle background, adjusted padding */}
                    <ul className="space-y-4"> {/* Adjusted spacing */}
                      {category.questions.map((q, index) => (
                        <li key={index} className="border-l-4 border-blue-500 pl-4 py-1"> {/* Adjusted border and padding */}
                          {typeof q === "string" ? (
                            <span className="italic text-gray-500">{q} (Answer pending)</span>
                          ) : (
                            <div>
                              <strong className="block text-base font-medium text-gray-900 mb-1">{q.question}</strong> {/* Adjusted question style */}
                              <span className="block text-sm leading-relaxed text-gray-600">{q.answer}</span> {/* Adjusted answer style */}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-12"> {/* Adjusted margin and color */}
            No questions found matching <strong className="text-gray-700">"{searchTerm}"</strong>. Try a different keyword.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
