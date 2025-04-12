import{r as T,j as e,ad as w,F as C,aA as S,aB as F,A as R,m as D,am as x,aC as u,aD as p,aa as E,aE as q,ao as h,a5 as k,aF as g,J as A,au as P,y as B,aG as I,aH as L,aI as U}from"./vendor-b68b2eb6.js";import{P as M}from"./PageLayout-5bf449e9.js";import{C as n,a as l,b as c,e as o}from"./index-5147e593.js";import{T as H,a as W,b as f,c as d,d as z,e as m}from"./table-66075df4.js";import{B as Q}from"./badge-59dbd582.js";import"./Header-8c5a8bed.js";const G=a=>{const i="w-4 h-4 text-white";return a.includes("Requirement Analysis")?e.jsx(P,{className:i}):a.includes("Test Planning")?e.jsx(B,{className:i}):a.includes("Test Case Development")?e.jsx(I,{className:i}):a.includes("Test Environment Setup")?e.jsx(g,{className:i}):a.includes("Test Execution")?e.jsx(L,{className:i}):a.includes("Test Cycle Closure")?e.jsx(U,{className:i}):e.jsx(x,{className:i})};function Y(){const[a,i]=T.useState(0),b=[{title:"Requirement Analysis",description:"Test team studies requirements from a testing perspective to identify testable requirements. Interaction with stakeholders (Client, BA, Tech Leads, Architects) is key to understand functional and non-functional requirements.",activities:["Analyze requirements for testability.","Identify types of tests to be performed.","Gather details about testing priorities and focus.","Prepare Requirement Traceability Matrix (RTM).","Identify test environment details.","Define area of stress and performance testing.","Define procedures for data maintenance (backup, restore, validation).","Review documentation.","Catch ambiguous or unclear requirement criteria."],deliverables:["Requirement Traceability Matrix (RTM)","Clarified Requirements"],color:"border-[#00A2FF] bg-[#00A2FF]"},{title:"Test Planning",description:"Creation of a detailed document outlining the test strategy, objectives, schedule, estimation, deliverables, and resources required. It serves as a blueprint for testing activities.",activities:["Analyze the product.","Design the Test Strategy (Scope, Types, Risks, Logistics).","Define Test Objectives.","Define Test Criteria (Suspension & Exit Criteria).","Resource Planning (Human, System).","Plan Test Environment.","Schedule & Estimation.","Determine Test Deliverables."],deliverables:["Test Plan Document","Effort Estimation Document"],color:"border-[#2E86FF] bg-[#2E86FF]"},{title:"Test Case Development / Design",description:"Creating detailed test cases and scenarios based on the test plan and requirements. This phase defines how testing will be performed.",activities:["Create test scenarios.","Create test cases (steps, data, preconditions, expected results).","Create/identify test data.","Review and baseline test cases and scripts."],deliverables:["Test Cases","Test Scenarios","Test Data"],color:"border-[#5A62FF] bg-[#5A62FF]"},{title:"Test Environment Setup",description:"Setting up the software and hardware conditions for testing. This can be done in parallel with Test Case Development. Includes readiness checks (smoke testing) if the environment is provided.",activities:["Understand the required architecture, environment set-up.","Prepare hardware and software requirement list for the Test Environment.","Setup test Environment and test data.","Perform smoke test on the build."],deliverables:["Test Environment Ready","Smoke Test Results"],color:"border-[#7B54FF] bg-[#7B54FF]"},{title:"Test Execution",description:"Testers execute the test cases based on the prepared test plans and test cases in the configured test environment. Defects are logged and tracked.",activities:["Execute tests as per plan.","Document test results and log defects for failed cases.","Map defects to test cases in RTM.","Retest the defect fixes.","Track the defects to closure."],deliverables:["Completed RTM with execution status","Test cases updated with results","Defect reports"],color:"border-[#9C27FF] bg-[#9C27FF]"},{title:"Test Cycle Closure",description:"Evaluating and documenting the testing process upon completion. Involves analyzing results, identifying lessons learned, and preparing final reports.",activities:["Evaluate cycle completion criteria (Time, Coverage, Cost, Quality, Business Objectives).","Prepare test metrics based on the parameters.","Document the learning from the project.","Prepare Test Closure Report.","Qualitative and quantitative reporting of the work product quality.","Test result analysis (defect distribution by type and severity)."],deliverables:["Test Closure Report","Test Metrics"],color:"border-[#C724E1] bg-[#C724E1]"}],y=[{aspect:"Full Name",brs:"Business Requirement Specification",frs:"Functional Requirement Specification",srs:"Software Requirement Specification"},{aspect:"Deals With",brs:"Business requirements",frs:"Client requirements / Functionality",srs:"Company resources / System behavior"},{aspect:"Use Cases",brs:"Not included",frs:"Not included",srs:"Included"},{aspect:"Developed By",brs:"Business Analyst (BA)",frs:"Developers / Engineers",srs:"System Analyst"},{aspect:"Focus",brs:"What the customer wants (broad)",frs:"Detailed page/feature functionality",srs:"Functional & non-functional requirements"},{aspect:"Analogy",brs:"The 'Why' & 'What' (High-level)",frs:"The 'How' (Detailed steps)",srs:"The 'What' & 'How' (System view)"}],j=["Analyze the product (User, Purpose, Functionality, Tech Stack)","Design the Test Strategy (Scope, Types, Risks, Logistics)","Define the Test Objectives (Goals, Features to test)","Define Test Criteria (Suspension Criteria, Exit Criteria)","Resource Planning (Human, System resources)","Plan Test Environment (Hardware, Software setup)","Schedule & Estimation (Timelines, Effort)","Determine Test Deliverables (Reports, Logs, Documents)"],v=["Test Case ID","Test Scenario","Test Case Description","Test Steps","Prerequisite","Test Data","Expected Result","Test Parameters","Actual Result","Test result (Pass/Fail)","Comments"],N=["Test only one thing at a time (atomic).","Ensure clarity; avoid overlap or complexity.","Cover both positive and negative scenarios.","Use simple, easy-to-understand language.","Use active voice (e.g., 'Click button', 'Enter data').","Use exact and consistent names for UI elements.","Accurate: Exacts the purpose.","Economical: No unnecessary steps.","Traceable: Links back to requirements.","Repeatable: Can be executed multiple times consistently."];return e.jsx(M,{title:"Software Testing Life Cycle (STLC)",subtitle:"A systematic approach to software testing activities",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-16 py-12 px-4 sm:px-6 lg:px-8",children:[" ",e.jsxs("section",{className:"text-center animate-fade-in",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]",children:"What is STLC?"}),e.jsx("p",{className:"text-lg text-gray-700 max-w-4xl mx-auto",children:"STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met. It involves both verification and validation activities. STLC is an integral part of SDLC but focuses solely on testing phases. It provides a step-by-step process to ensure quality software, starting as soon as requirements are defined. Early analysis and test case creation help reduce test cycle time and improve quality by finding bugs sooner."})]}),e.jsxs("section",{className:"animate-fade-in",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9C27FF] to-[#00A2FF]",children:"Understanding Requirement Documents"}),e.jsx("p",{className:"text-center text-gray-600 mb-10 max-w-3xl mx-auto",children:"Different documents capture requirements at various levels. Understanding their purpose is crucial for effective testing."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs(n,{className:"shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out",children:[e.jsx(l,{children:e.jsxs(c,{className:"text-xl text-[#00A2FF] flex items-center",children:[e.jsx(w,{className:"w-5 h-5 mr-2"}),"BRS (Business)"]})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by the Business Analyst (BA) interacting with customers. Describes business rules, project scope, and client requirements in simple business language. Focuses on 'what' the business needs."}),e.jsx("p",{className:"text-xs italic mt-2",children:'Example: "The Company would like to improve efficiency by tracking employee time spent on activities."'})]})]}),e.jsxs(n,{className:"shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out",children:[e.jsx(l,{children:e.jsxs(c,{className:"text-xl text-[#5A62FF] flex items-center",children:[e.jsx(C,{className:"w-5 h-5 mr-2"}),"FRS (Functional)"]})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by developers/engineers. Describes all functions the software must perform, detailing how components behave during user interaction. Focuses on 'how' a specific feature works step-by-step. Does not typically include use cases."}),e.jsx("p",{className:"text-xs italic mt-2",children:`Example: "Enter Username: Textbox allowing registered email ID. Enter Password: Textbox, input masked ('*'). Submit Button: Validates credentials on click, shows 'Incorrect Username or Password' alert if invalid."`})]})]}),e.jsxs(n,{className:"shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out",children:[e.jsx(l,{children:e.jsxs(c,{className:"text-xl text-[#9C27FF] flex items-center",children:[e.jsx(S,{className:"w-5 h-5 mr-2"}),"SRS (Software)"]})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm text-gray-700",children:"Created by the BA or System Analyst. Translates customer requirements (CRS/BRS) into a detailed document understandable by developers and testers. Describes how the software should be developed, including functional and non-functional requirements, and often includes use cases."}),e.jsx("p",{className:"text-xs italic mt-2",children:'Example: "Proposed software modules: Login (authentication), Administrator (user/project management), Employee (effort entry), Reporting (admin reports, exportable)."'})]})]})]}),e.jsxs(n,{className:"overflow-hidden shadow-lg",children:[e.jsx(l,{children:e.jsx(c,{className:"text-xl text-center text-[#0052CC]",children:"BRS vs FRS vs SRS Comparison"})}),e.jsx(o,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(H,{children:[e.jsx(W,{children:e.jsxs(f,{className:"bg-gradient-to-r from-blue-50 to-purple-50",children:[e.jsx(d,{className:"font-semibold text-gray-700",children:"Aspect"}),e.jsx(d,{className:"font-semibold text-gray-700",children:"BRS"}),e.jsx(d,{className:"font-semibold text-gray-700",children:"FRS"}),e.jsx(d,{className:"font-semibold text-gray-700",children:"SRS"})]})}),e.jsx(z,{children:y.map(s=>e.jsxs(f,{className:"hover:bg-gray-50",children:[e.jsx(m,{className:"font-medium",children:s.aspect}),e.jsx(m,{children:s.brs}),e.jsx(m,{children:s.frs}),e.jsx(m,{children:s.srs})]},s.aspect))})]})})})]})]}),e.jsxs("section",{className:"animate-fade-in",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]",children:"STLC Phases"}),e.jsx("p",{className:"text-center text-gray-600 mb-10 max-w-3xl mx-auto",children:"Click on each phase to explore its activities, deliverables, and specific details in this structured testing process."}),e.jsxs("div",{className:"relative pl-8",children:[" ",e.jsx("div",{className:"absolute top-0 bottom-0 left-[1.375rem] w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-teal-200 rounded-full"}),b.map((s,r)=>e.jsxs("div",{className:"relative mb-4",children:[" ",e.jsxs("div",{className:"flex items-start cursor-pointer group py-2",onClick:()=>i(a===r?null:r),role:"button","aria-expanded":a===r,tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&i(a===r?null:r)},children:[e.jsx("div",{className:`absolute -left-0.5 top-3 w-6 h-6 rounded-full ${s.color.replace("border-","bg-")} shadow-md border-2 border-white z-10 flex items-center justify-center transition-transform group-hover:scale-110`,children:G(s.title)}),e.jsxs("div",{className:"pl-14 flex-1 flex justify-between items-center",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center text-gray-800 group-hover:underline",children:e.jsxs("span",{children:[r+1,". ",s.title]})}),e.jsx(F,{className:`w-5 h-5 text-gray-500 transition-transform duration-300 ${a===r?"rotate-180":""}`,"aria-hidden":"true"})]})]}),e.jsx(R,{initial:!1,children:a===r&&e.jsx(D.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto",marginTop:"1rem"},collapsed:{opacity:0,height:0,marginTop:0}},transition:{duration:.3,ease:"easeInOut"},className:"pl-14 overflow-hidden",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4 text-gray-700 mb-4",children:[e.jsx("p",{children:s.description}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-md border border-gray-100",children:[e.jsxs("p",{className:"font-semibold text-gray-800 mb-1 flex items-center",children:[e.jsx(x,{className:"w-4 h-4 mr-1.5 text-gray-500"}),"Key Activities:"]}),e.jsx("ul",{className:"list-disc list-inside text-sm text-gray-600 pl-2 space-y-1",children:s.activities.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("p",{className:"text-sm flex items-start",children:[e.jsx(u,{className:"w-4 h-4 mr-1.5 mt-0.5 text-gray-500 shrink-0"}),e.jsx("strong",{className:"text-gray-800 mr-1 shrink-0",children:"Deliverables:"})," ",e.jsx("em",{className:"italic",children:s.deliverables.join(", ")})]}),s.title==="Requirement Analysis"&&e.jsxs("div",{className:"pt-2 mt-3 border-t border-gray-100",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(p,{className:"w-4 h-4 mr-1.5 text-blue-500"}),"Requirement Traceability Matrix (RTM)"]}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Links business requirements to functional requirements and test cases. Helps ensure all requirements are tested and track defects back to requirements."}),e.jsx("p",{className:"text-xs italic text-gray-500",children:"(RTM Template/Example would go here - visual representation is best)"})]}),s.title==="Test Planning"&&e.jsxs("div",{className:"pt-2 mt-3 border-t border-gray-100",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(E,{className:"w-4 h-4 mr-1.5 text-green-500"}),"Test Plan Elements (IEEE 829 Standard):"]}),e.jsx("ul",{className:"list-decimal list-inside space-y-1 text-sm text-gray-600",children:j.map(t=>e.jsx("li",{children:t},t))})]}),s.title==="Test Case Development / Design"&&e.jsxs("div",{className:"pt-2 mt-3 border-t border-gray-100 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(p,{className:"w-4 h-4 mr-1.5 text-purple-500"}),"Key Concepts:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Test Scenario:"})," Any functionality that can be tested (Test Condition/Possibility). Think from the end-user's perspective."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Case:"})," Set of actions, data, pre/postconditions to verify a specific feature against a requirement."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use Case:"})," Description of how an end-user interacts with the system (designed by BA)."]})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(q,{className:"w-4 h-4 mr-1.5 text-purple-500"}),"Test Case Parameters:"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:v.map(t=>e.jsx(Q,{variant:"secondary",children:t},t))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(h,{className:"w-4 h-4 mr-1.5 text-purple-500"}),"Best Practices for Writing Good Test Cases:"]}),e.jsx("ul",{className:"space-y-1 text-sm text-gray-600",children:N.map(t=>e.jsxs("li",{className:"flex items-start",children:[e.jsx(h,{className:"w-3.5 h-3.5 mr-2 mt-1 text-purple-400 shrink-0"}),e.jsx("span",{children:t})]},t))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(k,{className:"w-4 h-4 mr-1.5 text-purple-500"}),"Test Case Review:"]}),e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Why? To uncover errors, check completeness, ensure standards are followed."}),e.jsx("p",{className:"text-sm text-gray-600",children:"Types: Self-Review, Peer Review, Lead Review, Client Review."}),e.jsx("p",{className:"text-xs italic text-gray-500 mt-1",children:"(A detailed review checklist would typically be used here)"})]})]}),s.title==="Test Environment Setup"&&e.jsxs("div",{className:"pt-2 mt-3 border-t border-gray-100",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(g,{className:"w-4 h-4 mr-1.5 text-red-500"}),"Typical Environments:"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["Dev","QA","Pre-Production","Production"].map(t=>e.jsx("span",{className:"text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium border border-yellow-200",children:t},t))})]}),s.title==="Test Cycle Closure"&&e.jsxs("div",{className:"pt-2 mt-3 border-t border-gray-100 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(x,{className:"w-4 h-4 mr-1.5 text-teal-500"}),"Test Metrics:"]}),e.jsx("p",{className:"text-sm text-gray-600",children:'Quantitative measures of quality (e.g., "Number of issues per thousand lines of code"). Used to track progress and quality.'})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-2 flex items-center",children:[e.jsx(u,{className:"w-4 h-4 mr-1.5 text-teal-500"}),"Test Closure Report:"]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Summary document prepared before formally completing testing. Includes test execution summary, defect analysis (count, type, severity), lessons learned, etc."}),e.jsx("p",{className:"text-xs italic text-gray-500 mt-1",children:"(A template example would typically be shown here)"})]})]})]})},"content")})]},r))]})]}),e.jsx("div",{className:"mt-16 text-center",children:e.jsx(A,{to:"/sdlc-stlc",className:"inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform",children:"SDLC & STLC Integration →"})})]})})}export{Y as default};
