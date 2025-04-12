import{j as e,m as r,a1 as i,O as x,D as o,W as n,ae as m,_ as k,J as j,af as v,ag as h,ah as p,w as N,ai as C,L as T,aj as A,I as f,T as D,ak as B,al as I,am as E,an as R}from"./vendor-e5427b02.js";import{P as q}from"./PageLayout-504cfe15.js";import{C as l,a as d,b as c,e as g,d as M}from"./index-f07a80b5.js";import{B as S}from"./badge-13fcc52b.js";import{A as P,a as L,b as F,c as O}from"./accordion-cdc46f73.js";import{T as V,a as H,b as U,c as W}from"./tooltip-7799f3d5.js";import"./Header-654feb0f.js";import"./index-df92d03b.js";import"./index-6bcc8ae5.js";import"./index-a3fba7fe.js";function ee(){const u=[{term:"Defect",definition:"A flaw or imperfection in a software component or system that causes it to fail to perform its required function.",icon:e.jsx(i,{className:"w-4 h-4 mr-1 inline-block"})},{term:"Bug",definition:"An informal name for a defect, often used interchangeably.",icon:e.jsx(i,{className:"w-4 h-4 mr-1 inline-block"})},{term:"Error",definition:"A human action that produces an incorrect result. Errors in code lead to defects.",icon:e.jsx(o,{className:"w-4 h-4 mr-1 inline-block"})},{term:"Issue",definition:"A general term for a problem or concern, which might be a defect, enhancement request, or question.",icon:e.jsx(x,{className:"w-4 h-4 mr-1 inline-block"})},{term:"Mistake",definition:"An error made by a person, often referring to errors in documentation or requirements.",icon:e.jsx(h,{className:"w-4 h-4 mr-1 inline-block"})},{term:"Failure",definition:"The inability of a system or component to perform its required functions within specified performance requirements. Often the observable result of one or more defects.",icon:e.jsx(p,{className:"w-4 h-4 mr-1 inline-block"})}],b=[{title:"Incorrect Implementation",description:"Code doesn't match the specified logic. Example: Clicking 'Save' deletes the record instead.",icon:e.jsx(o,{className:"w-5 h-5 text-red-500"})},{title:"Missing Functionality",description:"A required feature is not implemented. Example: The 'Export to CSV' button is absent.",icon:e.jsx(h,{className:"w-5 h-5 text-orange-500"})},{title:"Unexpected Interactions",description:"Different modules interfere negatively. Example: Enabling dark mode breaks the search functionality.",icon:e.jsx(n,{className:"w-5 h-5 text-yellow-500"})},{title:"Poor Design/Architecture",description:"Fundamental design flaws lead to issues. Example: System slows down drastically with more than 10 users.",icon:e.jsx(i,{className:"w-5 h-5 text-purple-500"})},{title:"Environment Issues",description:"Problems specific to certain OS, browsers, or configurations.",icon:e.jsx(N,{className:"w-5 h-5 text-blue-500"})},{title:"Third-Party Code",description:"Bugs originating from external libraries or APIs.",icon:e.jsx(C,{className:"w-5 h-5 text-gray-500"})}],y=[{field:"Bug Title",description:"Concise, unique, and descriptive summary of the issue.",example:"Example: 'User cannot log in with valid credentials on Chrome v120'"},{field:"Bug ID",description:"Unique identifier automatically assigned by the tracking tool."},{field:"Project/Module",description:"Specific area of the application where the bug occurs."},{field:"Environment",description:"System details (e.g., OS: Windows 11, Browser: Chrome v120, Device: Desktop)."},{field:"Severity",description:"Impact on functionality (e.g., Blocker, Critical, Major, Minor, Trivial). Determined by QA.",example:"Example: Blocker - Prevents core functionality; Trivial - Minor UI cosmetic issue."},{field:"Priority",description:"Urgency to fix (e.g., High, Medium, Low). Determined by Product Owner/Manager.",example:"Example: High - Must fix before release; Low - Fix if time permits."},{field:"Status",description:"Current state in the bug life cycle (e.g., New, Assigned, Fixed, Closed)."},{field:"Reported By",description:"Name/ID of the person who found the bug."},{field:"Reported On",description:"Date and time the bug was logged."},{field:"Assigned To",description:"Developer or team responsible for fixing the bug."},{field:"Steps to Reproduce",description:"Clear, numbered steps to reliably trigger the bug."},{field:"Expected Result",description:"What should have happened according to requirements."},{field:"Actual Result",description:"What actually happened when the steps were followed."},{field:"Attachments",description:"Screenshots, videos, logs, or other relevant files."},{field:"Notes/Comments",description:"Any additional context, observations, or discussion."}],w=[{state:"New",description:"Bug is logged for the first time.",icon:e.jsx(T,{className:"w-4 h-4 mr-1.5"}),color:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700"},{state:"Assigned",description:"Bug is assigned to a developer.",icon:e.jsx(A,{className:"w-4 h-4 mr-1.5"}),color:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700"},{state:"Open",description:"Developer starts working on the fix.",icon:e.jsx(n,{className:"w-4 h-4 mr-1.5"}),color:"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-700"},{state:"Fixed",description:"Developer has applied a fix.",icon:e.jsx(f,{className:"w-4 h-4 mr-1.5"}),color:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700"},{state:"Pending Retest",description:"Fix is ready for QA verification.",icon:e.jsx(m,{className:"w-4 h-4 mr-1.5"}),color:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700"},{state:"Retest",description:"QA is actively verifying the fix.",icon:e.jsx(D,{className:"w-4 h-4 mr-1.5"}),color:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700"},{state:"Verified",description:"QA confirms the fix is working.",icon:e.jsx(f,{className:"w-4 h-4 mr-1.5"}),color:"bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-700"},{state:"Reopened",description:"Fix didn't work; bug sent back.",icon:e.jsx(B,{className:"w-4 h-4 mr-1.5"}),color:"bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300 dark:border-pink-700"},{state:"Closed",description:"Bug is resolved and verified.",icon:e.jsx(I,{className:"w-4 h-4 mr-1.5"}),color:"bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-400 dark:border-gray-600"},{state:"Rejected",description:"Considered not a valid defect.",icon:e.jsx(p,{className:"w-4 h-4 mr-1.5"}),color:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300 dark:border-red-700"},{state:"Duplicate",description:"Same as another reported bug.",icon:e.jsx(E,{className:"w-4 h-4 mr-1.5"}),color:"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-300 dark:border-gray-600"},{state:"Deferred",description:"Fix postponed to a later release.",icon:e.jsx(R,{className:"w-4 h-4 mr-1.5"}),color:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600"}],a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return e.jsx(q,{title:"Mastering Defect Management",subtitle:"Identify, Report, Track, and Resolve Software Defects Effectively",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-20 py-16 px-4 sm:px-6 lg:px-8",children:[e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,className:"text-center",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center",children:[e.jsx(i,{className:"w-8 h-8 mr-3 text-red-500"})," What is a Bug / Defect?"]}),e.jsxs("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",children:["In software, a ",e.jsx("strong",{children:"defect"})," (often called a ",e.jsx("strong",{children:"bug"}),") is any deviation from the expected behavior or requirements. It's a flaw that can cause the application to produce incorrect results, behave unexpectedly, or fail entirely. Identifying and managing these defects is a critical part of ensuring software quality."]})]}),e.jsx(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:e.jsxs(l,{className:"bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[e.jsx(d,{className:"bg-gray-50 dark:bg-gray-700 p-6",children:e.jsxs(c,{className:"text-2xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center",children:[e.jsx(x,{className:"w-7 h-7 mr-3 text-blue-600 dark:text-blue-400"})," Key Terminology"]})}),e.jsx(g,{className:"p-6",children:e.jsx(V,{delayDuration:100,children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:u.map(t=>e.jsxs(H,{children:[e.jsx(U,{asChild:!0,children:e.jsxs(r.div,{whileHover:{scale:1.05},className:"cursor-pointer p-3 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors flex items-center",children:[t.icon,e.jsx("span",{className:"font-medium text-gray-700 dark:text-gray-200",children:t.term})]})}),e.jsx(W,{className:"bg-black text-white dark:bg-white dark:text-black rounded-md shadow-lg p-2 max-w-xs text-sm",children:e.jsx("p",{children:t.definition})})]},t.term))})})})]})}),e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white flex items-center justify-center",children:[e.jsx(o,{className:"w-8 h-8 mr-3 text-orange-500"})," Common Causes of Bugs"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map((t,s)=>e.jsx(r.div,{whileHover:{y:-5},className:"h-full",children:e.jsxs(l,{className:"shadow-md hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800",children:[e.jsxs(d,{className:"flex flex-row items-center space-x-3 pb-3",children:[t.icon,e.jsx(c,{className:"text-lg font-semibold text-gray-800 dark:text-white",children:t.title})]}),e.jsx(g,{className:"flex-grow",children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:t.description})})]})},s))})]}),e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center",children:[e.jsx(n,{className:"w-8 h-8 mr-3 text-purple-500"})," Popular Bug Tracking Tools"]}),e.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:["Jira","Bugzilla","Azure DevOps (ADO)","Redmine","MantisBT","Asana","Trello","ClickUp"].map(t=>e.jsx(r.div,{whileHover:{scale:1.1},children:e.jsx(S,{variant:"secondary",className:"text-base px-4 py-1.5 shadow-sm cursor-default border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200",children:t})},t))}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4 italic",children:"(Tool choice often depends on project size, methodology, and budget.)"})]}),e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center",children:[e.jsx(m,{className:"w-8 h-8 mr-3 text-green-600"})," Effective Bug Reporting"]}),e.jsxs(l,{className:"shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800",children:[e.jsxs(d,{className:"bg-gray-50 dark:bg-gray-700 p-6",children:[e.jsx(c,{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Why Report Effectively?"}),e.jsx(M,{className:"text-gray-600 dark:text-gray-300 pt-2",children:"Clear, concise, and complete bug reports are essential. They help developers understand and reproduce the issue quickly, leading to faster fixes and saving valuable project time. Good reporting fosters better collaboration between QA and development teams."})]}),e.jsxs(g,{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-white",children:"Key Elements of a Bug Report:"}),e.jsx(P,{type:"single",collapsible:!0,className:"w-full",children:y.map((t,s)=>e.jsxs(L,{value:`item-${s}`,className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx(F,{className:"text-left font-medium text-gray-700 dark:text-gray-200 hover:no-underline py-4",children:t.field}),e.jsxs(O,{className:"pt-1 pb-4 text-sm text-gray-600 dark:text-gray-300",children:[t.description,t.example&&e.jsx("em",{className:"block mt-1 text-xs text-gray-500 dark:text-gray-400",children:t.example})]})]},t.field))}),e.jsx("p",{className:"text-xs italic text-gray-500 dark:text-gray-400 mt-6",children:"Tip: Many teams use standardized templates within their bug tracking tools to ensure consistency."})]})]})]}),e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center",children:[e.jsx(k,{className:"w-8 h-8 mr-3 text-indigo-600"})," The Bug Life Cycle"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed",children:"The Defect (or Bug) Life Cycle defines the sequence of states a defect goes through from its initial discovery to its final resolution. Understanding this cycle helps teams track progress and manage defects efficiently."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",children:w.map(t=>e.jsxs(r.div,{whileHover:{y:-3},className:`p-4 rounded-lg shadow-md border ${t.color} flex flex-col items-start transition-shadow hover:shadow-lg`,children:[e.jsxs("div",{className:"flex items-center font-semibold mb-2",children:[t.icon,e.jsx("span",{children:t.state})]}),e.jsx("p",{className:"text-xs flex-grow",children:t.description})]},t.state))}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-8 italic",children:"Note: The specific states and transitions can vary slightly depending on the project's workflow and tracking tool configuration."})]}),e.jsxs(r.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,className:"text-center border-t border-gray-200 dark:border-gray-700 pt-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-900 dark:text-white",children:"Effective Defect Management is Key"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"A systematic approach to defect management, including clear reporting and understanding the life cycle, is crucial for delivering high-quality software. It improves communication, speeds up resolution times, and ultimately leads to a better end product."})]}),e.jsx("div",{className:"mt-12 text-center",children:e.jsxs(j,{to:"/levels-of-testing",className:"inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 group",children:["Explore Levels of Testing",e.jsx(v,{className:"ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]})})}export{ee as default};
