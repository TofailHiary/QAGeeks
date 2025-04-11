import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SearchItem {
  title: string; // Primary display title
  path: string; // URL path to navigate to
  keywords?: string; // Comma-separated keywords/phrases for matching
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Expanded structured data source with more keywords/phrases for better matching
// NOTE: This is still not a true full-text index of every word.
const searchableContent: SearchItem[] = [
  // Pages from Header Nav & Core Concepts
  { title: "Intro Overview", path: "/intro", keywords: "overview, home, main, content, welcome, qageeks, hub, quality assurance, reliability" },
  { title: "Principles & Concepts", path: "/principles", keywords: "principles, concepts, testing fundamentals, quality, core principles, early testing, uncover bugs, istqb, ieee, qa vs qc, metrics, key concepts" },
  { title: "SDLC - Software Development Life Cycle", path: "/sdlc", keywords: "sdlc, software development life cycle, phases, requirements, design, implementation, testing, deployment, maintenance, waterfall, agile, v-model, spiral, iterative, incremental" },
  { title: "STLC - Software Testing Life Cycle", path: "/stlc", keywords: "stlc, software testing life cycle, phases, requirements analysis, test planning, test case design, environment setup, test execution, test cycle closure, entry criteria, exit criteria" },
  { title: "SDLC & STLC Comparison", path: "/sdlc-stlc", keywords: "sdlc, stlc, comparison, relationship, difference, integration, parallel activities, testing in development" },
  { title: "Defect Management", path: "/defect-management", keywords: "defect, bug, issue, management, tracking, lifecycle, severity, priority, report, logging, defect triage, retesting, closure, bug tracking system" },
  { title: "Levels of Testing", path: "/levels-of-testing", keywords: "levels, unit testing, integration testing, system testing, acceptance testing, uat, component, module, end-to-end, testing pyramid" },
  { title: "Testing Types", path: "/testing-types", keywords: "types, functional, non-functional, black-box, white-box, gray-box, performance, load, stress, volume, security, usability, compatibility, regression, smoke, sanity, exploratory, ad-hoc, alpha, beta" },
  { title: "Testing Methods", path: "/testing-methods", keywords: "methods, techniques, black-box techniques, equivalence partitioning, boundary value analysis, decision table, state transition, white-box techniques, statement coverage, branch coverage, path coverage, gray-box, experience-based, error guessing" },
  { title: "Testing Tools", path: "/testing-tools", keywords: "tools, automation, selenium, cypress, playwright, jira, testrail, qtest, postman, soapui, jmeter, loadrunner, appium, browserstack, test management, defect tracking, performance tools, api tools" },
  { title: "API Testing", path: "/api-testing", keywords: "api testing, application programming interface, postman, rest, soap, request, response, endpoint, methods, get, post, put, delete, status codes, headers, authentication, json, xml" },
  { title: "General Topics", path: "/general-topic", keywords: "general, mobile testing, android, ios, app testing, database testing, sql, db validation, team structure, roles, collaboration, qa, tester, lead, manager, agile, scrum, kanban, continuous integration, ci, continuous delivery, cd" },
  { title: "Resources", path: "/resources", keywords: "resources, links, articles, books, websites, blogs, tutorials, communities, forums, learning materials" },
  { title: "Interview Questions", path: "/interview-questions", keywords: "interview questions, preparation, qa, testing, job, technical questions, behavioral questions, scenario-based questions" },
  { title: "Templates", path: "/templates", keywords: "templates, documents, test plan template, test case template, bug report template, test summary report, test closure report, requirements traceability matrix, rtm" },
  { title: "Contact", path: "/contact", keywords: "contact, email, form, message, feedback, get in touch, support, inquiry" },

  // Specific Content Snippets (Example - needs more)
  { title: "Intro: What is testing?", path: "/principles", keywords: "what is testing, definition, purpose, finding defects, ensuring quality" },
  { title: "Quality Concepts: QA vs QC", path: "/principles", keywords: "qa vs qc, quality assurance, quality control, difference, process vs product" },
  { title: "Defect Lifecycle Stages", path: "/defect-management", keywords: "defect lifecycle, new, assigned, open, fixed, retest, verified, closed, rejected, deferred" },
  { title: "Unit Testing Explained", path: "/levels-of-testing", keywords: "unit testing, code level, developers, functions, methods, classes" },
  { title: "System Testing Explained", path: "/levels-of-testing", keywords: "system testing, end-to-end, integrated system, black-box" },
  { title: "Performance Testing Types", path: "/testing-types", keywords: "performance testing, load, stress, volume, scalability, stability, response time" },
  { title: "Security Testing Concepts", path: "/testing-types", keywords: "security testing, vulnerabilities, threats, authentication, authorization, owasp" },
  { title: "Equivalence Partitioning Technique", path: "/testing-methods", keywords: "equivalence partitioning, black-box, test data, input domains, valid invalid partitions" },
  { title: "Boundary Value Analysis Technique", path: "/testing-methods", keywords: "boundary value analysis, bva, black-box, edges, limits, boundaries" },
  { title: "Using Jira for Test Management", path: "/testing-tools", keywords: "jira, test management, plugins, zephyr, xray, creating test cases, linking issues" },
  { title: "Postman for API Requests", path: "/api-testing", keywords: "postman, api requests, collections, environments, variables, sending requests, viewing responses" },

  // Site Objectives (linking to relevant pages)
  { title: "Objective: Understand testing", path: "/principles", keywords: "objective, testing, understand, definition, purpose" },
  { title: "Objective: Understand SDLC", path: "/sdlc", keywords: "objective, sdlc, development model, understand, phases" },
  { title: "Objective: Learn testing methodologies", path: "/testing-methods", keywords: "objective, methodologies, methods, learn, techniques" },
  { title: "Objective: Learn testing types", path: "/testing-types", keywords: "objective, types, testing, learn, functional, non-functional" },
  { title: "Objective: Create test plans", path: "/stlc", keywords: "objective, test plan, create, planning, strategy, scope" },
  { title: "Objective: Create test cases", path: "/stlc", keywords: "objective, test case, create, design, steps, expected results" },
  { title: "Objective: Manage bugs", path: "/defect-management", keywords: "objective, bug, defect, manage, report, track, lifecycle" },
  { title: "Objective: Use Jira", path: "/testing-tools", keywords: "objective, jira, tool, project management, understand, usage" },
  { title: "Objective: API testing with Postman", path: "/api-testing", keywords: "objective, api, postman, testing, understand, basics, requests" },
];

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Reset query when modal is closed/opened
  useEffect(() => {
    if (!isOpen) {
      // Delay clearing to allow animation
      setTimeout(() => setQuery(""), 300);
    }
  }, [isOpen]);

  const handleItemClick = (path: string) => {
    // Use React Router's navigate for smooth SPA transitions
    React.startTransition(() => {
      navigate(path);
    });
    onClose(); // Close modal after navigation
  };

  // Memoize filtering for performance if searchableContent grows large
  const filteredItems = React.useMemo(() => {
    if (!query) return []; // No results if query is empty

    const lowerQuery = query.toLowerCase();
    return searchableContent.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      // Ensure keywords exist before checking
      const keywordMatch = item.keywords ? item.keywords.toLowerCase().includes(lowerQuery) : false;
      return titleMatch || keywordMatch;
    });
  }, [query]); // Re-filter only when query changes

  return (
    <div className={`fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-20 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className={`bg-white rounded-lg shadow-xl max-w-2xl w-[90%] md:w-full p-5 md:p-6 relative transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-3xl font-light p-1 leading-none"
          aria-label="Close search"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">Search Site Content</h2>
        <input
          type="search" // Use type="search" for potential browser optimizations/styling
          placeholder="Search pages, topics, keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A2FF] focus:border-transparent mb-4 text-base"
          autoFocus
        />
        <div className="max-h-[60vh] overflow-y-auto border-t border-gray-200 pt-3 -mx-5 md:-mx-6 px-5 md:px-6">
          {query && filteredItems.length > 0 && (
            <ul className="space-y-1">
              {filteredItems.map((item, index) => (
                <li
                  key={`${item.path}-${index}-${item.title}`} // More robust key
                  className="p-3 rounded hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer text-gray-800 hover:text-black transition-colors duration-150 text-sm"
                  onClick={() => handleItemClick(item.path)}
                  role="button"
                  title={`Go to: ${item.path}`} // Add tooltip
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
          {query && filteredItems.length === 0 && (
            <p className="text-center text-gray-500 py-4 text-sm">No results found for "{query}".</p>
          )}
          {!query && (
             <p className="text-center text-gray-400 py-4 text-sm">Start typing to search...</p>
          )}
        </div>
      </div>
    </div>
  );
};
