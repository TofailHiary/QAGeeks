import React from "react";
import { PageLayout } from "components/PageLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion"; // Import Accordion components
import { motion } from "framer-motion"; // Import motion for animations
import {
  FaMobileAlt, FaLaptopCode, FaListUl, FaExchangeAlt, FaDatabase, FaGlobe, FaUsers, FaComments, FaBug, FaLink, FaQuestionCircle, FaTools, FaFlask
} from 'react-icons/fa'; // Import relevant icons

// Enhanced SectionCard with optional icon and animation
const SectionCard: React.FC<{ title: string; icon?: React.ElementType; children: React.ReactNode; className?: string }> = ({ title, icon: Icon, children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    // Added dark mode styles
    className={`bg-sky-50 dark:bg-gray-800 border border-blue-200 dark:border-blue-900 rounded-3xl shadow-lg p-8 mb-12 transition-all duration-300 hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 ${className}`}
  >
    <h2 className="text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 flex items-center">
      {Icon && <Icon className="mr-4 text-blue-500 dark:text-blue-400" size="1.1em" />} {/* Render icon if provided */}
      {title}
    </h2>
    <div className="text-slate-700 dark:text-slate-300 space-y-5 text-lg leading-relaxed">{children}</div>
  </motion.div>
);

// Enhanced StyledListItem - Added dark mode styles
const StyledListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="relative pl-8 py-3 border-l-4 border-blue-500 dark:border-blue-700 transition duration-300 ease-in-out hover:bg-blue-100/70 dark:hover:bg-gray-700/50 hover:border-blue-600 dark:hover:border-blue-500 group">
    <span className="absolute left-[-0.7rem] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 dark:bg-blue-700 rounded-full transition duration-300 group-hover:scale-125 group-hover:bg-blue-600 dark:group-hover:bg-blue-500"></span>
    {children}
  </li>
);

// Tooltip Wrapper for definitions
// Tooltip Wrapper - Added dark mode styles
const InfoTip: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="text-blue-600 dark:text-blue-400 font-semibold border-b border-dotted border-blue-600 dark:border-blue-500 cursor-help">{term}</span>
      </TooltipTrigger>
      {/* TooltipContent already dark-friendly */}
      <TooltipContent className="bg-slate-800 text-white p-2 rounded max-w-xs text-sm">
        <p>{definition}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);


// Enhanced Strong component - Added dark mode styles
const StrongHighlight: React.FC<{ children: React.ReactNode; color?: 'blue' | 'purple' | 'gray' }> = ({ children, color = 'blue' }) => {
  const colorClass =
    color === 'purple' ? 'text-purple-600 dark:text-purple-400 font-semibold' :
    color === 'gray' ? 'text-slate-600 dark:text-slate-400 font-semibold' :
    'text-blue-600 dark:text-blue-400 font-semibold';
  return <strong className={colorClass}>{children}</strong>;
};

export default function GeneralTopic() {
  return (
    <PageLayout title="General QA Topics" subtitle="An overview of general concepts in Quality Assurance">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-slate-800">

        {/* --- Mobile vs Web Testing --- */}
        <SectionCard title="Mobile vs. Web App Testing" icon={FaMobileAlt}>
          {/* Added dark mode styles to table */}
          <div className="overflow-x-auto rounded-xl border border-blue-300/70 dark:border-blue-800/70 shadow-inner">
            <Table>
              <TableHeader className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-700 dark:to-gray-800">
                <TableRow className="border-b-0"> {/* Removed bottom border for header row */}
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Feature</TableHead>
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Mobile App Testing</TableHead>
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Web App Testing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-blue-200/80 dark:divide-gray-700">
                {[
                  { feature: "Usage", mobile: "Software programs used on mobile devices.", web: "Software programs used on computers." },
                  { feature: "User Base", mobile: "Developed for a broader range of users.", web: "Developed for a shorter range of users compared to mobile." },
                  { feature: "Updates", mobile: "New applications downloaded from app stores.", web: "Applications updated on the website." },
                  { feature: "Responsive Design", mobile: "More complex for small screens (mobiles, tablets).", web: "Easier to code relative design for large screens (desktops, laptops)." },
                  { feature: "Storage", mobile: "Less storage capacity; testing can be difficult.", web: "Larger storage capacity." },
                  { feature: "Connectivity", mobile: "May not require internet, but connection quality/speed matters (LTE, etc.).", web: "Generally requires an internet connection." },
                  { feature: "Complexity", mobile: "More complex due to diverse devices and functionalities.", web: "Simpler due to standardized desktop functionality." },
                  { feature: "Battery Life", mobile: "Performance on full/low charge is critical; battery-draining apps get deleted.", web: "Not a concern." },
                  { feature: "Considerations", mobile: <>Screen size, <InfoTip term="OEMs" definition="Original Equipment Manufacturers (e.g., Samsung, Apple, Google)" />, storage capacity, etc.</>, web: "Fewer device-specific considerations." },
                  { feature: "Interaction", mobile: "Focus on interaction with user moves, voice, environment, gestures, etc.", web: "Less focus on complex user interactions." },
                  { feature: "Tools/Frameworks", mobile: "Appium, Espresso, XCUITest, Xamarin, Robotium, etc.", web: "Selenium, WebLOAD, Acunetix, Netsparker, etc." },
                  { feature: "Peripheral Testing", mobile: "Tablets, smartwatches, fitness trackers, medical devices.", web: "Mouse, webcams, game controllers, keyboards." },
                ].map((row, idx) => (
                  // Added alternating dark bg and text colors
                  <TableRow key={row.feature} className={`${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-sky-50/50 dark:bg-gray-700/50'} hover:bg-sky-100/70 dark:hover:bg-gray-700 transition duration-200`}>
                    <TableCell className="p-5 font-semibold text-blue-700 dark:text-blue-400">{row.feature}</TableCell>
                    <TableCell className="p-5 text-slate-700 dark:text-slate-300">{row.mobile}</TableCell>
                    <TableCell className="p-5 text-slate-700 dark:text-slate-300">{row.web}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* --- Mobile Testing Challenges --- */}
          <SectionCard title="Mobile Testing Challenges" icon={FaQuestionCircle}>
            <ul className="list-none space-y-4">
              <StyledListItem>Multitude of Mobile Devices</StyledListItem>
              <StyledListItem>Device Fragmentation & Various OS Platforms</StyledListItem>
              <StyledListItem>Different Mobile App Types</StyledListItem>
              <StyledListItem>Numerous Test Interfaces</StyledListItem>
              <StyledListItem>Variety Of Testing Tools</StyledListItem>
            </ul>
          </SectionCard>

          {/* --- Types of Mobile Apps --- */}
          <SectionCard title="Types of Mobile Applications" icon={FaMobileAlt}>
            <p><StrongHighlight color="blue">Native:</StrongHighlight> Built in a specific language (<InfoTip term="Swift/Objective-C" definition="Primary languages for iOS development" /> for iOS, <InfoTip term="Java/Kotlin" definition="Primary languages for Android development" /> for Android) for a specific platform.</p>
            <p><StrongHighlight color="purple">Hybrid:</StrongHighlight> Designed for multiple platforms using standard web languages (HTML5, JavaScript, C#) and compiled. Uses plugins for device-specific interactions.</p>
            <p><StrongHighlight color="gray">Browser-based (Web App):</StrongHighlight> Runs inside a mobile web browser, essentially a website optimized for mobile.</p>
          </SectionCard>
        </div>

        {/* --- Emulator vs Simulator --- */}
        <SectionCard title="Emulator vs. Simulator" icon={FaExchangeAlt}>
          <p><StrongHighlight color="blue">Simulator:</StrongHighlight> Models an environment to mimic behavior without replicating hardware. Used for analysis and study, showing how the device *would* work. Doesn't exactly follow real environment activity.</p>
          <p><StrongHighlight color="purple">Emulator:</StrongHighlight> Software allowing one system (host) to imitate another (guest), including hardware, by translating the <InfoTip term="Instruction Set Architecture (ISA)" definition="The part of the computer architecture related to programming, including the native data types, instructions, registers, addressing modes, memory architecture, interrupt and exception handling, and external I/O." />.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-5 text-blue-700">Analogies & Examples</h3>
          <p><StrongHighlight color="blue">Simulator Analogy (Flight Simulator):</StrongHighlight> Replicates flying experience (software behavior) but not the actual hardware mechanics.</p>
          <p><StrongHighlight color="blue">Simulator Example (iOS Simulator):</StrongHighlight> Mimics iPhone/iPad appearance/functionality. Faster but limited for hardware features (Bluetooth, push notifications).</p>
          <p><StrongHighlight color="purple">Emulator Analogy (Arcade Emulator):</StrongHighlight> Replicates old game software *and* hardware (CPU, memory) on a modern computer.</p>
          <p><StrongHighlight color="purple">Emulator Example (Android Emulator):</StrongHighlight> Replicates Android hardware/software, allowing testing of camera, GPS, network conditions.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-5 text-purple-700 dark:text-purple-400">Comparison</h3>
          {/* Added dark mode styles to table */}
          <div className="overflow-x-auto rounded-xl border border-blue-300/70 dark:border-blue-800/70 shadow-inner mt-4">
            <Table>
              <TableHeader className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-700 dark:to-gray-800">
                <TableRow className="border-b-0"> {/* Removed bottom border for header row */}
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Aspect</TableHead>
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Emulator</TableHead>
                  <TableHead className="p-5 font-bold uppercase tracking-wider text-sm text-white dark:text-gray-200">Simulator</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-blue-200/80 dark:divide-gray-700">
                {[
                  { aspect: "Definition", emulator: "Replicates hardware and software.", simulator: "Models software behavior only." },
                  { aspect: "Purpose", emulator: "Testing hardware-specific features, close replication.", simulator: "Testing app functionality without precise hardware replication." },
                  { aspect: "Accuracy", emulator: "High-fidelity reproduction including hardware.", simulator: "Generalized environment focused on software." },
                  { aspect: "Performance", emulator: "Can be slower due to hardware emulation.", simulator: "Often faster, focuses on software behavior." },
                  { aspect: "Hardware Interaction", emulator: "Supports testing GPS, camera, network, etc.", simulator: "Limited or no support for hardware features." },
                  { aspect: "Use Cases", emulator: "Firmware, OS features, hardware-dependent apps.", simulator: "UI/UX, basic functionality testing in development." },
                  { aspect: "Example", emulator: "Android Emulator", simulator: "iOS Simulator" },
                ].map((row, idx) => (
                  // Added alternating dark bg and text colors
                  <TableRow key={row.aspect} className={`${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-sky-50/50 dark:bg-gray-700/50'} hover:bg-sky-100/70 dark:hover:bg-gray-700 transition duration-200`}>
                    <TableCell className="p-5 font-semibold text-blue-700 dark:text-blue-400">{row.aspect}</TableCell>
                    <TableCell className="p-5 text-slate-700 dark:text-slate-300">{row.emulator}</TableCell>
                    <TableCell className="p-5 text-slate-700 dark:text-slate-300">{row.simulator}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* --- Mobile App Test Types --- */}
        <SectionCard title="Mobile Application Test Types" icon={FaFlask}>
          <Accordion type="single" collapsible className="w-full">
            {[
              { trigger: "Hardware Compatibility", content: "Testing across various device hardware configurations (CPU, RAM, etc.)." },
              { trigger: "Device Features", content: "Verifying functionality of integrated features like Camera, GPS, Bluetooth, NFC." },
              { trigger: "Display Variations", content: "Ensuring proper rendering on different screen sizes and resolutions." },
              { trigger: "Device Temperature", content: "Monitoring app performance under varying thermal conditions." },
              { trigger: "Input Sensors", content: "Testing interaction with accelerometer, gyroscope, proximity sensors, etc." },
              { trigger: "Input Methods", content: "Validating touch gestures, voice commands, and external keyboard inputs." },
              { trigger: "Screen Orientation", content: "Checking layout and functionality during portrait and landscape mode changes." },
              { trigger: "Interrupt Handling", content: "Testing app behavior during incoming calls, SMS, notifications, low battery warnings." },
              { trigger: "Permissions", content: "Verifying correct handling of access permissions to device features." },
              { trigger: "Power Consumption", content: "Analyzing battery usage and app behavior in different power states (charging, low battery)." },
              { trigger: "OS Interactions", content: "Testing interactions with device software like settings, contacts, calendar." },
              { trigger: "Notifications", content: "Validating push notifications and in-app notification behavior." },
              { trigger: "Quick-access Links", content: "Testing deep links and shortcuts." },
              { trigger: "User Preferences", content: "Ensuring the app respects OS-level user preferences (font size, accessibility settings)." },
              { trigger: "App Type Specifics", content: "Addressing unique testing needs for Native, Hybrid, and Web mobile apps." },
              { trigger: "Interoperability", content: "Testing compatibility across different platforms and OS versions." },
              { trigger: "Co-existence", content: "Ensuring the app functions correctly alongside other installed applications." },
              { trigger: "Connectivity", content: "Testing performance on WiFi, various cellular networks (3G, 4G, 5G), and offline scenarios." },
              { trigger: "Installation & Updates", content: "Verifying smooth installation, uninstallation, and update processes." },
              { trigger: "Stress Testing", content: "Pushing the app beyond normal operational capacity to identify breaking points." },
              { trigger: "Security Testing", content: "Identifying vulnerabilities related to data storage, transmission, and authentication." },
              { trigger: "Performance Testing", content: "Measuring responsiveness, stability, and resource utilization under various loads." },
              { trigger: "Usability Testing", content: "Evaluating the ease of use and overall user experience." },
            ].map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.trigger}>
                {/* Added dark mode styles */}
                <AccordionTrigger className="text-lg hover:no-underline dark:text-gray-200 dark:hover:text-blue-400">{item.trigger}</AccordionTrigger>
                <AccordionContent className="text-base text-slate-600 dark:text-slate-400 pt-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* --- Database Testing --- */}
          <SectionCard title="Database Testing" icon={FaDatabase}>
            <p>A type of software testing that checks the schema, tables, triggers, etc., of the database. It also checks data integrity and consistency and may involve creating complex queries to load/stress test the database and check its responsiveness.</p>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Coverage Includes:</h3>
            <ul className="list-none space-y-4">
              <StyledListItem>Testing data integrity</StyledListItem>
              <StyledListItem>Checking data validity</StyledListItem>
              <StyledListItem>Performance checks</StyledListItem>
              <StyledListItem>Triggers and Functions</StyledListItem>
              <StyledListItem>Testing various procedures</StyledListItem>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Types of Database Testing:</h3>
            <ul className="list-none space-y-4">
              <StyledListItem><StrongHighlight color="blue">Structural Testing:</StrongHighlight> Verifies elements inside the data repository (schema, tables, etc.) not directly operated by users. Requires SQL knowledge.</StyledListItem>
              <StyledListItem><StrongHighlight color="purple">Functional Testing:</StrongHighlight> Authorizes functional requirements from the end-user's perspective (transactions, operations).</StyledListItem>
              <StyledListItem><StrongHighlight color="gray">Non-functional Testing:</StrongHighlight> Includes Load, Stress, Security, Usability, and Compatibility testing.</StyledListItem>
            </ul>
          </SectionCard>

          {/* --- Globalization vs Localization --- */}
          <SectionCard title="Globalization vs. Localization" icon={FaGlobe}>
            <p><StrongHighlight color="blue">Globalization Testing (G11N):</StrongHighlight> Ensures an application can function correctly in *any* cultural or local environment without requiring code changes. This involves testing support for multiple languages, date/time formats, currencies, and character sets. Example: Facebook supporting numerous languages globally.</p>
            <p><StrongHighlight color="purple">Localization Testing (L10N):</StrongHighlight> Verifies that an application has been adapted for a *specific* target geographical region and culture. This includes checking language translation accuracy, cultural appropriateness of UI elements, local conventions (like address formats), and regulatory compliance. Example: A website tailored specifically for the Chinese market (like QQ.com).</p>
            <p className="mt-4 text-sm text-slate-500 italic">Why test G11N/L10N? To ensure a positive user experience, avoid cultural misunderstandings, meet market expectations, and comply with local regulations, ultimately expanding the application's reach and usability.</p>
          </SectionCard>
        </div>

        {/* --- Team Structure --- */}
        <SectionCard title="Typical Software Team Roles" icon={FaUsers}>
          <ul className="list-none space-y-5">
            <StyledListItem><StrongHighlight color="blue">Business Analyst:</StrongHighlight> Understands business processes, translates needs into requirements.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Product Owner:</StrongHighlight> Holds product vision, ensures product meets customer requirements.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Project Manager:</StrongHighlight> Ensures delivery on time/budget, manages and motivates the team.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">UX/UI Designer:</StrongHighlight> Creates user-friendly designs and user journeys.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Software Architect:</StrongHighlight> Designs high-level architecture, selects tools/platforms, sets code standards.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Software Developer:</StrongHighlight> Engineers and stabilizes the product, solves technical problems.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Software Testing Engineer:</StrongHighlight> Ensures application performs to requirements, finds defects.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Test Automation Engineer:</StrongHighlight> Designs automation ecosystem, writes/maintains test scripts.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">DevOps Engineer:</StrongHighlight> Facilitates Dev/Ops cooperation, builds CI/CD pipelines.</StyledListItem>
          </ul>
        </SectionCard>

        {/* --- Dev & QA Communication --- */}
        <SectionCard title="Improving Dev & QA Communication" icon={FaComments}>
           {/* Reverted to checklist format based on feedback */}
           <ul className="list-none space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {[
              "Ensure Clear Requirements & Goals", "Build Empathy Across Teams", "Pair Testers with Developers",
              "Consistent & Constructive Feedback", "Emphasize “Test First” Approach", "Cross-Train Teams",
              "Leave Work-Related Ego", "Be Realistic", "Be Specific", "Be Organized", "Prioritize the Project",
              "Be Patient", "Share Ideas (Not Dictate)", "Accept Human Error", "Value Teamwork",
              "Utilize Agile & Pair Testing", "Listen Carefully", "Slow Down Speaking", "Be Diplomatic",
              "Understand Body Language", "Write Graciously", "Converse Efficiently", "Attend to Clients Promptly",
              "Rotate Information"
            ].map(item => <StyledListItem key={item}>{item}</StyledListItem>)}
          </ul>
        </SectionCard>

        {/* --- JIRA --- */}
        <SectionCard title="JIRA for Project Management" icon={FaBug}>
          <p>JIRA is a software application from Atlassian used for issue tracking and project management, widely adopted by agile development teams to track bugs, stories, epics, and other tasks.</p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Key Aspects:</h3>
          <ul className="list-none space-y-4">
            <StyledListItem><StrongHighlight color="blue">Projects:</StrongHighlight> Manage defects effectively within project contexts.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Issues:</StrongHighlight> Track and manage defects, tasks, stories, etc.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Workflow:</StrongHighlight> Process the issue/defect life cycle (e.g., Open &rarr; In Progress &rarr; Resolved &rarr; Closed).</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Search:</StrongHighlight> Find issues easily using basic search, filters, or <InfoTip term="JQL" definition="JIRA Query Language - a powerful way to search for issues in JIRA." />.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Dashboards:</StrongHighlight> Customizable display of project metrics, assignments, and issue status using gadgets.</StyledListItem>
          </ul>
           <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Benefits:</h3>
           <ul className="list-none space-y-4">
             <StyledListItem>Plan, Track and Work Faster</StyledListItem>
             <StyledListItem>Central source of information</StyledListItem>
             <StyledListItem>Organize documentation tasks</StyledListItem>
             <StyledListItem>Track progress and meet deadlines</StyledListItem>
             <StyledListItem>Measure time spent</StyledListItem>
             <StyledListItem>Provide feedback faster</StyledListItem>
           </ul>
           <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Usage as QA:</h3>
           <ul className="list-none space-y-4">
             <StyledListItem>Creating issues (bugs, tasks)</StyledListItem>
             <StyledListItem>Searching and filtering issues</StyledListItem>
             <StyledListItem>Tracking workflow status</StyledListItem>
             <StyledListItem>Understanding main fields and templates</StyledListItem>
             <StyledListItem>Viewing dashboards for progress</StyledListItem>
           </ul>
        </SectionCard>

        {/* --- Resources --- */}
        <SectionCard title="Helpful Resources" icon={FaLink}>
          <ul className="list-none space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {[
              { name: "Guru99", url: "https://www.guru99.com/" },
              { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
              { name: "Javatpoint", url: "https://www.javatpoint.com/" },
              { name: "TutorialsPoint (Java)", url: "https://www.tutorialspoint.com/java/index.htm" },
              { name: "Software Testing Help", url: "https://softwaretestinghelp.com/" },
              { name: "Software Testing Fundamentals", url: "https://softwaretestingfundamentals.com/" },
              { name: "ToolsQA", url: "https://www.toolsqa.com/" },
              { name: "Atlassian JIRA", url: "https://www.atlassian.com/software/jira" },
              { name: "Postman", url: "https://www.postman.com/" },
              { name: "Dev.to", url: "https://dev.to" },
              { name: "BrowserStack", url: "https://www.browserstack.com/" },
              { name: "LambdaTest", url: "https://www.lambdatest.com/" },
              { name: "Swagger Petstore", url: "https://petstore.swagger.io/" },
            ].map(link => (
              <StyledListItem key={link.name}>
                {/* Added dark mode styles */}
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition duration-200">
                  {link.name}
                </a>
              </StyledListItem>
            ))}
          </ul>
        </SectionCard>

      </div>
    </PageLayout>
  );
}
