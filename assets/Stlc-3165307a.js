import{j as e}from"./vendor-fce441a0.js";import{P as f}from"./PageLayout-3a544d84.js";import{C as i,a,b as r,d as n}from"./card-bc9b570c.js";import{T as b,a as y,b as d,c as l,d as g,e as c}from"./table-f7d3b639.js";import"./Header-60cd834c.js";import"./utils-3f044a58.js";function S(){const m=[{title:"Requirement Analysis",description:"Test team studies requirements from a testing perspective to identify testable requirements. Interaction with stakeholders (Client, BA, Tech Leads, Architects) is key to understand functional and non-functional requirements.",activities:["Analyze requirements for testability.","Identify types of tests to be performed.","Gather details about testing priorities and focus.","Prepare Requirement Traceability Matrix (RTM).","Identify test environment details.","Define area of stress and performance testing.","Define procedures for data maintenance (backup, restore, validation).","Review documentation.","Catch ambiguous or unclear requirement criteria."],deliverables:["Requirement Traceability Matrix (RTM)","Clarified Requirements"],color:"border-[#00A2FF]"},{title:"Test Planning",description:"Creation of a detailed document outlining the test strategy, objectives, schedule, estimation, deliverables, and resources required. It serves as a blueprint for testing activities.",activities:["Analyze the product.","Design the Test Strategy (Scope, Types, Risks, Logistics).","Define Test Objectives.","Define Test Criteria (Suspension & Exit Criteria).","Resource Planning (Human, System).","Plan Test Environment.","Schedule & Estimation.","Determine Test Deliverables."],deliverables:["Test Plan Document","Effort Estimation Document"],color:"border-[#2E86FF]"},{title:"Test Case Development / Design",description:"Creating detailed test cases and scenarios based on the test plan and requirements. This phase defines how testing will be performed.",activities:["Create test scenarios.","Create test cases (steps, data, preconditions, expected results).","Create/identify test data.","Review and baseline test cases and scripts."],deliverables:["Test Cases","Test Scenarios","Test Data"],color:"border-[#5A62FF]"},{title:"Test Environment Setup",description:"Setting up the software and hardware conditions for testing. This can be done in parallel with Test Case Development. Includes readiness checks (smoke testing) if the environment is provided.",activities:["Understand the required architecture, environment set-up.","Prepare hardware and software requirement list for the Test Environment.","Setup test Environment and test data.","Perform smoke test on the build."],deliverables:["Test Environment Ready","Smoke Test Results"],color:"border-[#7B54FF]"},{title:"Test Execution",description:"Testers execute the test cases based on the prepared test plans and test cases in the configured test environment. Defects are logged and tracked.",activities:["Execute tests as per plan.","Document test results and log defects for failed cases.","Map defects to test cases in RTM.","Retest the defect fixes.","Track the defects to closure."],deliverables:["Completed RTM with execution status","Test cases updated with results","Defect reports"],color:"border-[#9C27FF]"},{title:"Test Cycle Closure",description:"Evaluating and documenting the testing process upon completion. Involves analyzing results, identifying lessons learned, and preparing final reports.",activities:["Evaluate cycle completion criteria (Time, Coverage, Cost, Quality, Business Objectives).","Prepare test metrics based on the parameters.","Document the learning from the project.","Prepare Test Closure Report.","Qualitative and quantitative reporting of the work product quality.","Test result analysis (defect distribution by type and severity)."],deliverables:["Test Closure Report","Test Metrics"],color:"border-[#C724E1]"}],x=[{aspect:"Full Name",brs:"Business Requirement Specification",frs:"Functional Requirement Specification",srs:"Software Requirement Specification"},{aspect:"Deals With",brs:"Business requirements",frs:"Client requirements / Functionality",srs:"Company resources / System behavior"},{aspect:"Use Cases",brs:"Not included",frs:"Not included",srs:"Included"},{aspect:"Developed By",brs:"Business Analyst (BA)",frs:"Developers / Engineers",srs:"System Analyst"},{aspect:"Focus",brs:"What the customer wants (broad)",frs:"Detailed page/feature functionality",srs:"Functional & non-functional requirements"},{aspect:"Analogy",brs:"The 'Why' & 'What' (High-level)",frs:"The 'How' (Detailed steps)",srs:"The 'What' & 'How' (System view)"}],u=["Analyze the product (User, Purpose, Functionality, Tech Stack)","Design the Test Strategy (Scope, Types, Risks, Logistics)","Define the Test Objectives (Goals, Features to test)","Define Test Criteria (Suspension Criteria, Exit Criteria)","Resource Planning (Human, System resources)","Plan Test Environment (Hardware, Software setup)","Schedule & Estimation (Timelines, Effort)","Determine Test Deliverables (Reports, Logs, Documents)"],p=["Test Case ID","Test Scenario","Test Case Description","Test Steps","Prerequisite","Test Data","Expected Result","Test Parameters","Actual Result","Test result (Pass/Fail)","Comments"],h=["Test only one thing at a time (atomic).","Ensure clarity; avoid overlap or complexity.","Cover both positive and negative scenarios.","Use simple, easy-to-understand language.","Use active voice (e.g., 'Click button', 'Enter data').","Use exact and consistent names for UI elements.","Accurate: Exacts the purpose.","Economical: No unnecessary steps.","Traceable: Links back to requirements.","Repeatable: Can be executed multiple times consistently."];return e.jsx(f,{title:"Software Testing Life Cycle (STLC)",subtitle:"A systematic approach to software testing activities",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-16 py-12",children:[e.jsxs("section",{className:"text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]",children:"What is STLC?"}),e.jsx("p",{className:"text-lg text-gray-700 max-w-4xl mx-auto",children:"STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met. It involves both verification and validation activities. STLC is an integral part of SDLC but focuses solely on testing phases. It provides a step-by-step process to ensure quality software, starting as soon as requirements are defined. Early analysis and test case creation help reduce test cycle time and improve quality by finding bugs sooner."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]",children:"Understanding Requirement Documents"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs(i,{className:"shadow-md",children:[e.jsx(a,{children:e.jsx(r,{className:"text-xl text-[#00A2FF]",children:"BRS (Business Requirement Specification)"})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by the Business Analyst (BA) interacting with customers. Describes business rules, project scope, and client requirements in simple business language. Focuses on 'what' the business needs."}),e.jsx("p",{className:"text-xs italic mt-2",children:'Example: "The Company would like to improve efficiency by tracking employee time spent on activities."'})]})]}),e.jsxs(i,{className:"shadow-md",children:[e.jsx(a,{children:e.jsx(r,{className:"text-xl text-[#5A62FF]",children:"FRS (Functional Requirement Specification)"})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by developers/engineers. Describes all functions the software must perform, detailing how components behave during user interaction. Focuses on 'how' a specific feature works step-by-step. Does not typically include use cases."}),e.jsx("p",{className:"text-xs italic mt-2",children:`Example: "Enter Username: Textbox allowing registered email ID. Enter Password: Textbox, input masked ('*'). Submit Button: Validates credentials on click, shows 'Incorrect Username or Password' alert if invalid."`})]})]}),e.jsxs(i,{className:"shadow-md",children:[e.jsx(a,{children:e.jsx(r,{className:"text-xl text-[#9C27FF]",children:"SRS (Software Requirement Specification)"})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by the BA or System Analyst. Translates customer requirements (CRS/BRS) into a detailed document understandable by developers and testers. Describes how the software should be developed, including functional and non-functional requirements, and often includes use cases."}),e.jsx("p",{className:"text-xs italic mt-2",children:'Example: "Proposed software modules: Login (authentication), Administrator (user/project management), Employee (effort entry), Reporting (admin reports, exportable)."'})]})]})]}),e.jsxs(i,{className:"overflow-hidden shadow-lg",children:[e.jsx(a,{children:e.jsx(r,{className:"text-xl text-center text-[#0052CC]",children:"BRS vs FRS vs SRS Comparison"})}),e.jsx(n,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(b,{children:[e.jsx(y,{children:e.jsxs(d,{className:"bg-gradient-to-r from-blue-50 to-purple-50",children:[e.jsx(l,{className:"font-semibold text-gray-700",children:"Aspect"}),e.jsx(l,{className:"font-semibold text-gray-700",children:"BRS"}),e.jsx(l,{className:"font-semibold text-gray-700",children:"FRS"}),e.jsx(l,{className:"font-semibold text-gray-700",children:"SRS"})]})}),e.jsx(g,{children:x.map(s=>e.jsxs(d,{className:"hover:bg-gray-50",children:[e.jsx(c,{className:"font-medium",children:s.aspect}),e.jsx(c,{children:s.brs}),e.jsx(c,{children:s.frs}),e.jsx(c,{children:s.srs})]},s.aspect))})]})})})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]",children:"STLC Phases"}),e.jsxs("div",{className:"relative pl-8 py-4",children:[e.jsx("div",{className:"absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-[#00A2FF] to-[#C724E1] rounded-full"}),m.map((s,o)=>e.jsxs("div",{className:"relative mb-12 pl-8",children:[e.jsx("div",{className:`absolute -left-[calc(0.75rem-1px)] top-1 w-6 h-6 rounded-full ${s.color.replace("border-","bg-")} shadow-md border-2 border-white`}),e.jsxs(i,{className:`overflow-hidden shadow-lg ${s.color}`,children:[e.jsx(a,{children:e.jsxs(r,{className:`text-2xl font-bold ${s.color.replace("border-","text-")}`,children:[o+1,". ",s.title]})}),e.jsxs(n,{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:s.description}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Key Activities:"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-600",children:s.activities.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:"Deliverables:"}),e.jsx("p",{className:"text-sm text-gray-600 italic",children:s.deliverables.join(", ")})]}),s.title==="Requirement Analysis"&&e.jsxs("div",{className:"pt-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Requirement Traceability Matrix (RTM)"}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Links business requirements to functional requirements and test cases. Helps ensure all requirements are tested and track defects back to requirements."}),e.jsx("p",{className:"text-xs italic text-gray-500",children:"(RTM Template/Example would go here - visual representation is best)"})]}),s.title==="Test Planning"&&e.jsxs("div",{className:"pt-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Test Plan Elements (IEEE 829 Standard):"}),e.jsx("ul",{className:"list-decimal list-inside space-y-1 text-sm text-gray-600",children:u.map(t=>e.jsx("li",{children:t},t))})]}),s.title==="Test Case Development / Design"&&e.jsxs("div",{className:"pt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Key Concepts:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Test Scenario:"})," Any functionality that can be tested (Test Condition/Possibility). Think from the end-user's perspective."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Case:"})," Set of actions, data, pre/postconditions to verify a specific feature against a requirement."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use Case:"})," Description of how an end-user interacts with the system (designed by BA)."]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Test Case Parameters:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:p.map(t=>e.jsx("span",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:t},t))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Best Practices for Writing Good Test Cases:"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-600",children:h.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Test Case Review:"}),e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Why? To uncover errors, check completeness, ensure standards are followed."}),e.jsx("p",{className:"text-sm text-gray-600",children:"Types: Self-Review, Peer Review, Lead Review, Client Review."}),e.jsx("p",{className:"text-xs italic text-gray-500 mt-1",children:"(A detailed review checklist would typically be used here)"})]})]}),s.title==="Test Environment Setup"&&e.jsxs("div",{className:"pt-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Typical Environments:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["Dev","QA","Pre-Production","Production"].map(t=>e.jsx("span",{className:"text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium",children:t},t))})]}),s.title==="Test Cycle Closure"&&e.jsxs("div",{className:"pt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Test Metrics:"}),e.jsx("p",{className:"text-sm text-gray-600",children:'Quantitative measures of quality (e.g., "Number of issues per thousand lines of code"). Used to track progress and quality.'})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Test Closure Report:"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Summary document prepared before formally completing testing. Includes test execution summary, defect analysis (count, type, severity), lessons learned, etc."}),e.jsx("p",{className:"text-xs italic text-gray-500 mt-1",children:"(A template example would typically be shown here)"})]})]})]})]})]},o))]})]}),e.jsx("div",{className:"mt-16 text-center",children:e.jsx("a",{href:"/sdlc-stlc",className:"inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform",children:"SDLC & STLC Integration →"})})]})})}export{S as default};
