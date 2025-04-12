import{r as c,j as e,i as a,T as m,z as h,ao as x,ae as u,a1 as p,J as g}from"./vendor-e5427b02.js";import{P as f}from"./PageLayout-504cfe15.js";import{C as n}from"./ConceptCard-1350860c.js";import"./Header-654feb0f.js";function N(){const r=[{number:"01",title:"Testing Shows Presence of Defects",description:"Testing can show that defects are present, but cannot prove that there are no defects."},{number:"02",title:"Exhaustive Testing is Impossible",description:"Testing everything is not feasible except for trivial cases. Risk analysis and priorities should be used to focus testing efforts."},{number:"03",title:"Early Testing",description:"Testing activities should start as early as possible and be focused on defined objectives."},{number:"04",title:"Defect Clustering",description:"A small number of modules usually contains most of the defects discovered."},{number:"05",title:"Pesticide Paradox",description:"If the same tests are repeated over and over, eventually they will no longer find any new bugs."},{number:"06",title:"Testing is Context Dependent",description:"Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."},{number:"07",title:"Absence of Errors Fallacy",description:"Finding and fixing defects does not help if the system built does not fulfill the user's needs and expectations."}],[t,i]=c.useState("principles"),l=e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#00A2FF]",children:"Manual Testing"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Performed by human testers"}),e.jsx("li",{children:"Best for exploratory, usability, and ad-hoc testing"}),e.jsx("li",{children:"No scripting knowledge required"}),e.jsx("li",{children:"Time-consuming for regression testing"}),e.jsx("li",{children:"Great for UX evaluation and visual verification"})]}),e.jsx("p",{className:"mt-2 italic",children:"When to use: New features, complex scenarios, infrequently changing features"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#9C27FF]",children:"Automation Testing"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Executed by tools and scripts"}),e.jsx("li",{children:"Ideal for regression, load, and performance testing"}),e.jsx("li",{children:"Requires programming or scripting skills"}),e.jsx("li",{children:"Time-efficient for repetitive tasks"}),e.jsx("li",{children:"Good test coverage with consistent execution"})]}),e.jsx("p",{className:"mt-2 italic",children:"When to use: Regression testing, load testing, frequently changing features"})]})]}),e.jsxs("div",{className:"mt-4 bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"Best Practices for Testing Strategy"}),e.jsx("p",{children:"A balanced approach using both manual and automated testing provides optimal results:"}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Automate:"})," Repetitive tasks, regression tests, data-driven tests"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Manual:"})," New features, exploratory testing, usability testing"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Hybrid:"})," Use automation to set up test data/environment, then manual testing for verification"]})]})]})]}),o=e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#00A2FF]",children:"Verification"}),e.jsx("p",{className:"mb-2",children:'"Are we building the product right?"'}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Evaluates documents, code, and plans"}),e.jsx("li",{children:"Static testing techniques"}),e.jsx("li",{children:"Performed without executing code"}),e.jsx("li",{children:"Reviews, walkthroughs, inspections"}),e.jsx("li",{children:"Ensures compliance with specifications"})]}),e.jsx("p",{className:"mt-2 italic",children:"Examples: Requirements reviews, design reviews, code reviews"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#9C27FF]",children:"Validation"}),e.jsx("p",{className:"mb-2",children:'"Are we building the right product?"'}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Evaluates the product itself"}),e.jsx("li",{children:"Dynamic testing techniques"}),e.jsx("li",{children:"Requires executing the software"}),e.jsx("li",{children:"Testing against user requirements"}),e.jsx("li",{children:"Ensures the product meets user needs"})]}),e.jsx("p",{className:"mt-2 italic",children:"Examples: User acceptance testing, system testing, beta testing"})]})]})});return e.jsx(f,{title:"Principles & Concepts",subtitle:"Learn the core principles and concepts that guide effective quality assurance",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[" ",e.jsxs("div",{className:"flex flex-wrap justify-center mb-12 border-b border-gray-200",children:[e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="principles"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("principles")),children:"Seven Principles"}),e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="keyConcepts"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("keyConcepts")),children:"Key Concepts"}),e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="staticVsDynamic"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("staticVsDynamic")),children:"Static vs Dynamic"}),e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="manualVsAuto"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("manualVsAuto")),children:"Manual vs Automation"}),e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="qaqc"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("qaqc")),children:"QA vs QC"}),e.jsx("button",{className:`px-4 py-3 md:px-6 font-medium transition-colors duration-200 ease-in-out border-b-2 ${t==="verificationVsValidation"?"text-blue-600 border-blue-600":"text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`,onClick:()=>a.startTransition(()=>i("verificationVsValidation")),children:"Verification vs Validation"})]}),t==="principles"&&e.jsxs("div",{className:"animate-fade-in",children:[" ",e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"The Seven Principles of Testing"}),e.jsx("p",{className:"text-lg text-gray-600",children:"These fundamental guidelines form the bedrock of effective software testing. Understanding and applying them helps ensure quality and efficiency in the QA process."})]}),e.jsx("div",{className:"space-y-8 mb-16",children:r.map((s,d)=>e.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-600 group",children:e.jsxs("div",{className:"p-6 md:p-8",children:[" ",e.jsxs("div",{className:"flex items-start md:items-baseline mb-4",children:[" ",e.jsx("span",{className:"text-4xl md:text-5xl font-black text-blue-500 mr-4 md:mr-6 group-hover:text-blue-600 transition-colors",children:s.number}),e.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors",children:s.title})]}),e.jsxs("div",{className:"prose prose-lg max-w-none text-gray-700 mb-6",children:[s.title==="Testing Shows Presence of Defects"&&e.jsx("p",{children:"The goal of software testing is to make the software fail. Software testing reduces the presence of defects. Software testing talks about the presence of defects and doesn’t talk about the absence of defects. Software testing can ensure that defects are present but it can not prove that software is defect-free. Even multiple tests can never ensure that software is 100% bug-free. Testing can reduce the number of defects but not remove all defects."}),s.title==="Exhaustive Testing is Impossible"&&e.jsx("p",{children:"It is the process of testing the functionality of the software in all possible inputs (valid or invalid) and pre-conditions is known as exhaustive testing. Exhaustive testing is impossible means the software can never test at every test case. It can test only some test cases and assume that the software is correct and it will produce the correct output in every test case. If the software will test every test case then it will take more cost, effort, etc., which is impractical."}),s.title==="Early Testing"&&e.jsx("p",{children:"To find the defect in the software, early test activity shall be started. The defect detected in the early phases of SDLC will be very less expensive. For better performance of software, software testing will start at the initial phase i.e. testing will perform at the requirement analysis phase."}),s.title==="Defect Clustering"&&e.jsx("p",{children:"In a project, a small number of modules can contain most of the defects. The Pareto Principle for software testing states that 80% of software defects come from 20% of modules."}),s.title==="Pesticide Paradox"&&e.jsx("p",{children:"Repeating the same test cases, again and again, will not find new bugs. So it is necessary to review the test cases and add or update test cases to find new bugs."}),s.title==="Testing is Context Dependent"&&e.jsx("p",{children:"The testing approach depends on the context of the software developed. Different types of software need to perform different types of testing. For example, The testing of the e-commerce site is different from the testing of the Android application."}),s.title==="Absence of Errors Fallacy"&&e.jsx("p",{children:"If a built software is 99% bug-free but does not follow the user requirement then it is unusable. It is not only necessary that software is 99% bug-free but it is also mandatory to fulfill all the customer requirements."})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-purple-400",children:[e.jsx("p",{className:"font-semibold text-purple-700 mb-2 text-sm uppercase tracking-wide",children:"Example:"}),e.jsxs("p",{className:"text-gray-700 italic text-sm md:text-base",children:[s.title==="Testing Shows Presence of Defects"&&"Imagine you test a calculator app and find a bug when adding large numbers. This proves there is a defect. However, even after extensive testing, you can’t be absolutely certain that no other defects exist. You’ve shown that problems are present, but you can’t prove that the product is now perfect.",s.title==="Exhaustive Testing is Impossible"&&"Consider a login form. If you tried every possible combination of usernames, passwords, special characters, and browser/device variations, you’d never finish testing. Instead, you pick the most important and likely scenarios to test, such as common usernames, boundary-length passwords, and popular browsers.",s.title==="Early Testing"&&"When designing a new mobile banking feature, you review the requirements before coding begins and identify that the requirement for handling foreign currency conversions is unclear. You clarify and correct this early, preventing a costly code fix later.",s.title==="Defect Clustering"&&"In a shopping website, most errors appear in the checkout process (e.g., payment gateway and order summary) rather than in the product listing pages. Focusing testing efforts on checkout-related functionalities helps catch the majority of defects quickly.",s.title==="Pesticide Paradox"&&"You have 10 test cases that find bugs in the first release of your app. When you run the same 10 test cases on the next release, you don’t find new bugs because the old ones were fixed. To uncover new defects, you need to create new or modified test cases.",s.title==="Testing is Context Dependent"&&"For a hospital’s patient record system, you use detailed test plans, formal documentation, and multiple review steps because accuracy is critical. For a mobile puzzle game, you might rely on quick, informal testing and user feedback because the stakes are lower.",s.title==="Absence of Errors Fallacy"&&"Your team builds a photo-sharing app with zero reported bugs in the code. However, users uninstall it because it doesn’t allow easy sharing with friends. The software may be “error-free,” but it doesn’t meet the user’s real needs."]})]})]})},d))}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Why These Principles Matter"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Understanding these principles helps QA professionals establish realistic expectations about testing and build effective test strategies. They guide testing efforts to be more efficient, focused, and valuable to the overall software development process."}),e.jsx("p",{className:"text-gray-700",children:"These principles should influence all testing activities, from test planning and design to execution and reporting. They help balance thoroughness with practicality in the testing approach."})]})]}),t==="keyConcepts"&&e.jsxs("div",{className:"space-y-8 animate-fade-in",children:[" ",e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Key QA Concepts"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Grasp these core definitions to build a solid foundation for understanding software quality assurance practices and discussions."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx(m,{size:24,className:"text-blue-600 mr-3"}),e.jsx("h3",{className:"text-xl font-bold text-blue-700",children:"Testing"})]}),e.jsx("p",{className:"text-gray-700 text-sm",children:"The process of verifying and validating that a software application is bug-free, meets technical requirements, and fulfills user needs efficiently, handling all exceptional and boundary cases."})]}),e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx(h,{size:24,className:"text-purple-600 mr-3"}),e.jsx("h3",{className:"text-xl font-bold text-purple-700",children:"Debugging"})]}),e.jsx("p",{className:"text-gray-700 text-sm",children:"The process of identifying, analyzing, and removing errors (bugs) in the software after it fails to execute correctly. It's a complex activity aimed at solving the root cause of a problem."})]}),e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx(x,{size:24,className:"text-green-600 mr-3"})," ",e.jsx("h3",{className:"text-xl font-bold text-green-700",children:"Product"})]}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Software developed for multiple customers based on consolidated requirements, intended for broad use."})]}),e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx(u,{size:24,className:"text-red-600 mr-3"})," ",e.jsx("h3",{className:"text-xl font-bold text-red-700",children:"Project"})]}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Software developed for a single customer based on their specific requirements, intended for use only by that customer."})]}),e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1",children:[" ",e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx(p,{size:24,className:"text-yellow-600 mr-3"})," ",e.jsx("h3",{className:"text-xl font-bold text-yellow-700",children:"Bugs / Issues"})]}),e.jsx("p",{className:"text-gray-700 text-sm",children:"A coding error causing an unexpected defect, fault, flaw, or imperfection. If a program doesn't perform as intended, it likely has a bug."})]})]})]}),t==="qaqc"&&e.jsxs("div",{className:"space-y-8 animate-fade-in",children:[" ",e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Quality Assurance vs Quality Control"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Learn the crucial differences between QA (process-oriented, preventive) and QC (product-oriented, detective) and how they work together."})]}),e.jsx(n,{title:"Software Quality Assurance (SQA)",summary:"A proactive process focused on preventing defects by ensuring adherence to defined standards and processes throughout the SDLC.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.588-3.79l-.01-.01z"})}),details:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"SQA incorporates all software development processes, from requirements definition to release, aiming to ensure quality is built-in."}),e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#00A2FF]",children:"Example:"}),e.jsx("p",{className:"italic bg-blue-50 p-3 rounded",children:"For an online banking app, QA activities include establishing coding standards, requiring code reviews, and ensuring all requirements are clear and approved before development starts. This prevents defects proactively."})]}),accentColor:"#00A2FF"}),e.jsx(n,{title:"Software Quality Control (SQC)",summary:"A reactive process focused on identifying defects in the actual product by monitoring and verifying deliverables against defined quality standards.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),details:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"QC involves testing the product to find defects. It's about detection rather than prevention and happens after QA activities have defined the standards."}),e.jsx("h4",{className:"font-bold text-lg mb-2 text-[#9C27FF]",children:"Example:"}),e.jsx("p",{className:"italic bg-purple-50 p-3 rounded",children:"After the banking app is developed, QC testers execute test cases (e.g., trying valid/invalid logins) to find issues like incorrect error messages or lockout failures. This finds defects before release."})]}),accentColor:"#9C27FF"}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 overflow-x-auto",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-center",children:"QA vs QC Comparison"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Aspect"}),e.jsx("th",{className:"px-4 py-2 text-left",children:"Quality Assurance (QA)"}),e.jsx("th",{className:"px-4 py-2 text-left",children:"Quality Control (QC)"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Focus"}),e.jsx("td",{className:"px-4 py-2",children:"Prevent defects"}),e.jsx("td",{className:"px-4 py-2",children:"Identify & fix defects"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Nature"}),e.jsx("td",{className:"px-4 py-2",children:"Proactive"}),e.jsx("td",{className:"px-4 py-2",children:"Reactive"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Goal"}),e.jsx("td",{className:"px-4 py-2",children:"Process improvement"}),e.jsx("td",{className:"px-4 py-2",children:"Product quality verification"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Technique"}),e.jsx("td",{className:"px-4 py-2",children:"Preventive"}),e.jsx("td",{className:"px-4 py-2",children:"Corrective"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Involvement"}),e.jsx("td",{className:"px-4 py-2",children:"Full SDLC"}),e.jsx("td",{className:"px-4 py-2",children:"Testing phase (STLC)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Activity Type"}),e.jsx("td",{className:"px-4 py-2",children:"Verification (Are we doing it right?)"}),e.jsx("td",{className:"px-4 py-2",children:"Validation (Did we do the right thing?)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Execution"}),e.jsx("td",{className:"px-4 py-2",children:"Does not involve program execution"}),e.jsx("td",{className:"px-4 py-2",children:"Involves program execution"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Team"}),e.jsx("td",{className:"px-4 py-2",children:"Whole team"}),e.jsx("td",{className:"px-4 py-2",children:"Testing team"})]})]})]})]})]}),t==="staticVsDynamic"&&e.jsxs("div",{className:"space-y-12 animate-fade-in",children:[e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Static vs Dynamic Testing"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Compare the two fundamental approaches to software testing that complement each other throughout the development lifecycle."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",children:[e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center text-blue-600",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Static Testing"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 mb-4",children:[e.jsx("li",{children:"Performed without executing code"}),e.jsx("li",{children:"Reviews, walkthroughs, inspections"}),e.jsx("li",{children:"Focuses on prevention rather than detection"}),e.jsx("li",{children:"Finds defects rather than failures"}),e.jsx("li",{children:"Can improve product quality early in the lifecycle"})]}),e.jsx("p",{className:"mt-4 italic text-sm text-gray-600",children:"Examples: Code reviews, document analysis, static analysis tools"})]}),e.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center text-purple-600",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Dynamic Testing"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 mb-4",children:[e.jsx("li",{children:"Requires execution of the software"}),e.jsx("li",{children:"Functional, non-functional, and structural testing"}),e.jsx("li",{children:"Focuses on behavior of the software"}),e.jsx("li",{children:"Detects failures in the software"}),e.jsx("li",{children:"Verifies the functionality works as expected"})]}),e.jsx("p",{className:"mt-4 italic text-sm text-gray-600",children:"Examples: Unit testing, integration testing, system testing"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-md mb-12",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-gray-800",children:"When to use each approach"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Both static and dynamic testing are complementary and should be used together for effective quality assurance:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Early development phases:"})," Focus on static testing to prevent defects"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Later development phases:"})," Focus on dynamic testing to validate functionality"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Critical systems:"})," Use both extensively throughout development"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-blue-700",children:"Benefits of Static Testing"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-700",children:[e.jsx("li",{children:"Early defect detection, reducing cost of fixes"}),e.jsx("li",{children:"Identifies issues that might be missed during execution"}),e.jsx("li",{children:"Improves code maintainability and readability"}),e.jsx("li",{children:"Finds defects in documents and specifications"}),e.jsx("li",{children:"Enhances team communication and knowledge sharing"})]})]}),e.jsxs("div",{className:"bg-purple-50 p-6 rounded-lg border border-purple-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-purple-700",children:"Benefits of Dynamic Testing"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-gray-700",children:[e.jsx("li",{children:"Validates actual behavior of the software"}),e.jsx("li",{children:"Catches runtime and integration issues"}),e.jsx("li",{children:"Tests the user experience and performance"}),e.jsx("li",{children:"Verifies functionality against requirements"}),e.jsx("li",{children:"Builds confidence in the system before release"})]})]})]})]}),t==="manualVsAuto"&&e.jsxs("div",{className:"animate-fade-in",children:[" ",e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Manual vs Automation Testing"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Compare manual testing (human-driven) and automation testing (tool-driven) to determine the best strategy for different testing needs."})]}),e.jsx(n,{title:"Manual vs Automation Testing",summary:"Compare the two primary testing methods to understand their appropriate applications and how to balance them in your testing strategy.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),details:l,accentColor:"#9C27FF"}),e.jsxs("div",{className:"mt-8 bg-white shadow-lg rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] px-6 py-4",children:e.jsx("h3",{className:"text-xl font-bold text-white",children:"Choosing the Right Testing Approach"})}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold mb-2",children:"Use Manual Testing When"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#00A2FF] mr-2",children:"•"}),e.jsx("span",{children:"Exploratory testing is needed"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#00A2FF] mr-2",children:"•"}),e.jsx("span",{children:"Testing UI/UX and visual aspects"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#00A2FF] mr-2",children:"•"}),e.jsx("span",{children:"Short-term projects with changing requirements"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#00A2FF] mr-2",children:"•"}),e.jsx("span",{children:"Usability testing with user feedback"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold mb-2",children:"Use Automation Testing When"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#9C27FF] mr-2",children:"•"}),e.jsx("span",{children:"Regression testing is frequent"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#9C27FF] mr-2",children:"•"}),e.jsx("span",{children:"Load and performance testing is required"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#9C27FF] mr-2",children:"•"}),e.jsx("span",{children:"Repetitive test cases with consistent data"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-[#9C27FF] mr-2",children:"•"}),e.jsx("span",{children:"Long-term projects with stable requirements"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold mb-2",children:"Best Balance"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-gray-600 mr-2",children:"•"}),e.jsx("span",{children:"Automated smoke and sanity tests"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-gray-600 mr-2",children:"•"}),e.jsx("span",{children:"Manual exploratory and UX testing"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-gray-600 mr-2",children:"•"}),e.jsx("span",{children:"Automated API and integration tests"})]}),e.jsxs("li",{className:"flex items-start text-sm",children:[e.jsx("span",{className:"text-gray-600 mr-2",children:"•"}),e.jsx("span",{children:"Manual complex scenario testing"})]})]})]})]})})]})]}),t==="verificationVsValidation"&&e.jsxs("div",{className:"animate-fade-in",children:[" ",e.jsxs("div",{className:"mb-12 text-center max-w-4xl mx-auto",children:[" ",e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Verification vs Validation"}),e.jsx("p",{className:"text-lg text-gray-600",children:'Distinguish between Verification ("Are we building the product right?") and Validation ("Are we building the right product?") and see how they apply across the SDLC.'})]}),e.jsx(n,{title:"Verification vs Validation",summary:"Understand the distinction between building the product right (verification) and building the right product (validation).",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),details:o}),e.jsxs("div",{className:"mt-8 bg-white shadow-lg rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"SDLC Integration"}),e.jsx("p",{className:"mb-4",children:"Both verification and validation are essential throughout the software development lifecycle:"}),e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute h-full w-1 bg-gradient-to-b from-[#00A2FF] to-[#9C27FF] left-[15px] top-0"}),e.jsxs("div",{className:"space-y-6 pl-14",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute w-4 h-4 bg-[#00A2FF] rounded-full -left-[11px] top-1 shadow"}),e.jsx("div",{className:"pl-10",children:e.jsx("h4",{className:"font-bold",children:"Requirements Phase"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#00A2FF]",children:"Verification"}),e.jsx("p",{className:"text-sm",children:"Review requirements for consistency, completeness, and clarity"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#9C27FF]",children:"Validation"}),e.jsx("p",{className:"text-sm",children:"Confirm requirements actually meet user needs and business goals"})]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute w-4 h-4 bg-[#4482FF] rounded-full -left-[11px] top-1 shadow"}),e.jsx("div",{className:"pl-10",children:e.jsx("h4",{className:"font-bold",children:"Design Phase"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#00A2FF]",children:"Verification"}),e.jsx("p",{className:"text-sm",children:"Ensure design aligns with requirements specifications"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#9C27FF]",children:"Validation"}),e.jsx("p",{className:"text-sm",children:"Review design with stakeholders to confirm it meets expectations"})]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute w-4 h-4 bg-[#7B54FF] rounded-full -left-[11px] top-1 shadow"}),e.jsx("div",{className:"pl-10",children:e.jsx("h4",{className:"font-bold",children:"Implementation Phase"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#00A2FF]",children:"Verification"}),e.jsx("p",{className:"text-sm",children:"Code reviews, static analysis, unit tests to verify against design"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#9C27FF]",children:"Validation"}),e.jsx("p",{className:"text-sm",children:"Component/integration tests to validate against requirements"})]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute w-4 h-4 bg-[#9C27FF] rounded-full -left-[11px] top-1 shadow"}),e.jsx("div",{className:"pl-10",children:e.jsx("h4",{className:"font-bold",children:"Testing Phase"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#00A2FF]",children:"Verification"}),e.jsx("p",{className:"text-sm",children:"System testing, test coverage analysis, compliance checking"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("p",{className:"font-medium text-[#9C27FF]",children:"Validation"}),e.jsx("p",{className:"text-sm",children:"User acceptance testing, beta testing, usability testing"})]})]})]})]})]})]})]}),e.jsxs("div",{className:"mt-16 text-center",children:[" ",e.jsx(g,{to:"/sdlc",className:"inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform",children:"SDLC →"})]})]})})}export{N as default};
