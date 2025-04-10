import React from "react";
import { PageLayout } from "components/PageLayout";

// Enhanced SectionCard for light blue background, maintaining modern feel
const SectionCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  // Using bg-sky-50 for a very light "white blue", adjusted borders and shadows
  <div className={`bg-sky-50 border border-blue-200 rounded-3xl shadow-lg p-8 mb-12 transition-all duration-300 hover:shadow-blue-200/50 hover:border-blue-300 ${className}`}>
    {/* Title color changed to dark blue for contrast */}
    <h2 className="text-4xl font-extrabold mb-6 text-blue-700">{title}</h2>
    {/* Body text color changed to dark gray for readability */}
    <div className="text-slate-700 space-y-5 text-lg leading-relaxed">{children}</div>
  </div>
);

// Enhanced StyledListItem for light background
const StyledListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // Adjusted hover background for light theme
  <li className="relative pl-8 py-3 border-l-4 border-blue-500 transition duration-300 ease-in-out hover:bg-blue-100/70 hover:border-blue-600 group">
    {/* Dot color remains blue */}
    <span className="absolute left-[-0.7rem] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full transition duration-300 group-hover:scale-125 group-hover:bg-blue-600"></span>
    {children}
  </li>
);

// Enhanced Strong component for alternating accent colors on light background
const StrongHighlight: React.FC<{ children: React.ReactNode; color?: 'blue' | 'purple' | 'gray' }> = ({ children, color = 'blue' }) => {
  // Using darker shades for better contrast on light background
  const colorClass =
    color === 'purple' ? 'text-purple-600 font-semibold' :
    color === 'gray' ? 'text-slate-600 font-semibold' :
    'text-blue-600 font-semibold'; // Default to blue
  return <strong className={colorClass}>{children}</strong>;
};

export default function GeneralTopic() {
  return (
    <PageLayout title="General QA Topics" subtitle="An overview of general concepts in Quality Assurance">
      {/* Main container text color defaults to dark for readability on light background */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-slate-800">

        {/* --- Mobile vs Web Testing --- */}
        <SectionCard title="Mobile Application Testing VS Web App Testing">
          {/* Table container style adjusted slightly if needed */}
          <div className="overflow-x-auto rounded-xl border border-blue-300/70 shadow-inner">
            <table className="w-full text-left border-collapse">
              <thead>
                {/* Header remains vibrant, contrast is good */}
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Feature</th>
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Mobile App Testing</th>
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Web App Testing</th>
                </tr>
              </thead>
              {/* Table body background changed to white, text to dark */}
              <tbody className="bg-white">
                {[
                  { feature: "Usage", mobile: "Software programs used on mobile devices.", web: "Software programs used on computers." },
                  { feature: "User Base", mobile: "Developed for a broader range of users.", web: "Developed for a shorter range of users compared to mobile." },
                  { feature: "Updates", mobile: "New applications downloaded from app stores.", web: "Applications updated on the website." },
                  { feature: "Responsive Design", mobile: "More complex for small screens (mobiles, tablets).", web: "Easier to code relative design for large screens (desktops, laptops)." },
                  { feature: "Storage", mobile: "Less storage capacity; testing can be difficult.", web: "Larger storage capacity." },
                  { feature: "Connectivity", mobile: "May not require internet, but connection quality/speed matters (LTE, etc.).", web: "Generally requires an internet connection." },
                  { feature: "Complexity", mobile: "More complex due to diverse devices and functionalities.", web: "Simpler due to standardized desktop functionality." },
                  { feature: "Battery Life", mobile: "Performance on full/low charge is critical; battery-draining apps get deleted.", web: "Not a concern." },
                  { feature: "Considerations", mobile: "Screen size, OEMs, storage capacity, etc.", web: "Fewer device-specific considerations." },
                  { feature: "Interaction", mobile: "Focus on interaction with user moves, voice, environment, gestures, etc.", web: "Less focus on complex user interactions." },
                  { feature: "Tools/Frameworks", mobile: "Appium, Espresso, XCUITest, Xamarin, Robotium, etc.", web: "Selenium, WebLOAD, Acunetix, Netsparker, etc." },
                  { feature: "Peripheral Testing", mobile: "Tablets, smartwatches, fitness trackers, medical devices.", web: "Mouse, webcams, game controllers, keyboards." },
                ].map((row, index) => (
                  // Adjusted hover, borders, and text colors for light theme
                  <tr key={row.feature} className="hover:bg-sky-100/70 transition duration-200 border-b border-blue-200/80 last:border-b-0">
                    <td className="p-5 border-r border-blue-200/80 font-semibold text-blue-700">{row.feature}</td>
                    <td className="p-5 border-r border-blue-200/80 text-slate-700">{row.mobile}</td>
                    <td className="p-5 text-slate-700">{row.web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Grid layout remains */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* --- Mobile Testing Challenges --- */}
          <SectionCard title="Mobile Testing Challenges">
            <ul className="list-none space-y-4">
              <StyledListItem>Multitude of Mobile Devices</StyledListItem>
              <StyledListItem>Device Fragmentation & Various OS Platforms</StyledListItem>
              <StyledListItem>Different Mobile App Types</StyledListItem>
              <StyledListItem>Numerous Test Interfaces</StyledListItem>
              <StyledListItem>Variety Of Testing Tools</StyledListItem>
            </ul>
          </SectionCard>

          {/* --- Types of Mobile Apps --- */}
          <SectionCard title="Types of Mobile Applications">
            {/* Using updated StrongHighlight for light background */}
            <p><StrongHighlight color="blue">Native:</StrongHighlight> Built in a specific language (Swift/Objective-C for iOS, Java/Kotlin for Android) for a specific platform.</p>
            <p><StrongHighlight color="purple">Hybrid:</StrongHighlight> Designed for multiple platforms using standard web languages (HTML5, JavaScript, C#) and compiled. Uses plugins for device-specific interactions.</p>
            <p><StrongHighlight color="gray">Browser-based (Web App):</StrongHighlight> Runs inside a mobile web browser, essentially a website optimized for mobile.</p>
          </SectionCard>
        </div>

        {/* --- Emulator vs Simulator --- */}
        <SectionCard title="Emulator vs. Simulator">
          <p><StrongHighlight color="blue">Simulator:</StrongHighlight> Models an environment to mimic behavior without replicating hardware. Used for analysis and study, showing how the device *would* work. Doesn't exactly follow real environment activity.</p>
          <p><StrongHighlight color="purple">Emulator:</StrongHighlight> Software allowing one system (host) to imitate another (guest), including hardware, by translating the Instruction Set Architecture.</p>

          {/* Adjusted heading colors for light theme */}
          <h3 className="text-2xl font-semibold mt-10 mb-5 text-blue-700">Analogies & Examples</h3>
          <p><StrongHighlight color="blue">Simulator Analogy (Flight Simulator):</StrongHighlight> Replicates flying experience (software behavior) but not the actual hardware mechanics.</p>
          <p><StrongHighlight color="blue">Simulator Example (iOS Simulator):</StrongHighlight> Mimics iPhone/iPad appearance/functionality. Faster but limited for hardware features (Bluetooth, push notifications).</p>
          <p><StrongHighlight color="purple">Emulator Analogy (Arcade Emulator):</StrongHighlight> Replicates old game software *and* hardware (CPU, memory) on a modern computer.</p>
          <p><StrongHighlight color="purple">Emulator Example (Android Emulator):</StrongHighlight> Replicates Android hardware/software, allowing testing of camera, GPS, network conditions.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-5 text-purple-700">Comparison</h3>
          <div className="overflow-x-auto rounded-xl border border-blue-300/70 shadow-inner mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                 {/* Header remains vibrant */}
                 <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Aspect</th>
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Emulator</th>
                  <th className="p-5 border-b border-blue-300/50 font-bold uppercase tracking-wider text-sm text-white">Simulator</th>
                </tr>
              </thead>
               {/* Table body background changed to white, text to dark */}
               <tbody className="bg-white">
                {[
                  { aspect: "Definition", emulator: "Replicates hardware and software.", simulator: "Models software behavior only." },
                  { aspect: "Purpose", emulator: "Testing hardware-specific features, close replication.", simulator: "Testing app functionality without precise hardware replication." },
                  { aspect: "Accuracy", emulator: "High-fidelity reproduction including hardware.", simulator: "Generalized environment focused on software." },
                  { aspect: "Performance", emulator: "Can be slower due to hardware emulation.", simulator: "Often faster, focuses on software behavior." },
                  { aspect: "Hardware Interaction", emulator: "Supports testing GPS, camera, network, etc.", simulator: "Limited or no support for hardware features." },
                  { aspect: "Use Cases", emulator: "Firmware, OS features, hardware-dependent apps.", simulator: "UI/UX, basic functionality testing in development." },
                  { aspect: "Example", emulator: "Android Emulator", simulator: "iOS Simulator" },
                ].map((row) => (
                  // Adjusted hover, borders, and text colors for light theme
                  <tr key={row.aspect} className="hover:bg-sky-100/70 transition duration-200 border-b border-blue-200/80 last:border-b-0">
                    <td className="p-5 border-r border-blue-200/80 font-semibold text-blue-700">{row.aspect}</td>
                    <td className="p-5 border-r border-blue-200/80 text-slate-700">{row.emulator}</td>
                    <td className="p-5 text-slate-700">{row.simulator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* --- Mobile App Test Types --- */}
        <SectionCard title="Mobile Application Test Types">
          <ul className="list-none space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {[
              "Compatibility with Device Hardware", "Device Features (Camera, GPS, etc.)", "Different Displays (Size, Resolution)",
              "Device Temperature", "Device Input Sensors", "Various Input Methods (Touch, Voice)", "Screen Orientation Change",
              "Typical Interrupts (Calls, SMS, Notifications)", "Access Permissions to Device Features", "Power Consumption and State",
              "App Interactions with Device Software", "Notifications", "Quick-access Links", "User Preferences Provided by OS",
              "Different Types of Apps (Native, Hybrid, Web)", "Interoperability (Platforms, OS Versions)", "Co-existence with other Apps",
              "Various Connectivity Methods (WiFi, Cellular, Offline)", "Installability / Uninstallation / Updates", "Stress Testing",
              "Security Testing", "Performance Testing", "Usability Testing"
            ].map(item => <StyledListItem key={item}>{item}</StyledListItem>)}
          </ul>
        </SectionCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* --- Database Testing --- */}
          <SectionCard title="Database Testing">
            <p>A type of software testing that checks the schema, tables, triggers, etc., of the database. It also checks data integrity and consistency and may involve creating complex queries to load/stress test the database and check its responsiveness.</p>
            {/* Adjusted heading colors */}
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
          <SectionCard title="Globalization and Localization Testing">
            <p><StrongHighlight color="blue">Globalization Testing:</StrongHighlight> Ensures an application can run in *any* cultural/local environment, supporting multiple languages and attributes without code changes (e.g., Facebook).</p>
            <p><StrongHighlight color="purple">Localization Testing:</StrongHighlight> Checks an application for a *specific* geographical and cultural environment, supporting a specific language and region (e.g., QQ.com for China).</p>
          </SectionCard>
        </div>

        {/* --- Team Structure --- */}
        <SectionCard title="Typical Software Development Team Roles">
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
        <SectionCard title="Strategies to Improve Communication Between Dev & QA">
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
        <SectionCard title="JIRA for Issue Tracking & Project Management">
          <p>JIRA is a software application from Atlassian used for issue tracking and project management, widely adopted by agile development teams to track bugs, stories, epics, and other tasks.</p>
          {/* Adjusted heading colors */}
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Key Aspects:</h3>
          <ul className="list-none space-y-4">
            <StyledListItem><StrongHighlight color="blue">Projects:</StrongHighlight> Manage defects effectively within project contexts.</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Issues:</StrongHighlight> Track and manage defects, tasks, stories, etc.</StyledListItem>
            <StyledListItem><StrongHighlight color="blue">Workflow:</StrongHighlight> Process the issue/defect life cycle (e.g., Open &rarr; In Progress &rarr; Resolved &rarr; Closed).</StyledListItem>
            <StyledListItem><StrongHighlight color="purple">Search:</StrongHighlight> Find issues easily using basic search, filters, or JQL (JIRA Query Language).</StyledListItem>
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
        <SectionCard title="Helpful Resources">
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
                {/* Link color adjusted for light background */}
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">
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
