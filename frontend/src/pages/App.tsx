import React, { useEffect } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  CheckCircle,
  Workflow,
  TerminalSquare,
  Users,
  Bug,
  Lightbulb,
  FileText, // Added for Resources
  HelpCircle, // Added for Resources
  ListChecks, // Added for How it Works
  GraduationCap, // Added for How it Works
  Rocket, // Added for How it Works
  Map, // Added for Mind Maps
  Bot as BotIcon, // Added for Mind Maps (alias to avoid conflict)
} from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion"; // Import motion
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components
import { Header } from "components/Header";
import { HeroSection } from "components/HeroSection";
// Removed FeatureSection import
import { ConceptCard } from "components/ConceptCard"; // Import ConceptCard
import { PrinciplesSection } from "components/PrinciplesSection";
import { router } from "../router"; // Import router to access basename

export default function App() {
  const navigate = useNavigate(); // Hook for navigation

  // Add the redirect logic here
  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");
    if (redirectPath) {
      sessionStorage.removeItem("redirect");

      // Use router.state.location.pathname which includes basename if available
      // Or fallback to router.basename if needed, ensuring correct handling
      const basename = router.basename || "/";
      const relativePath = redirectPath.startsWith(basename)
        ? redirectPath.substring(basename.length -1) // Keep leading slash if present after basename
        : redirectPath;

      // Ensure final path starts with a slash if it's not just "/"
      const finalPath = relativePath === "" || relativePath === "/" ? "/" : (relativePath.startsWith("/") ? relativePath : `/${relativePath}`);

      console.log(`Redirecting from sessionStorage to: ${finalPath}`);
      navigate(finalPath, { replace: true });
    }
  }, [navigate]);


  // Feature section data
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Quality Assurance Fundamentals",
      description: "Master the principles of software testing and learn to identify, report, and track defects effectively."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: "Industry-Standard Methodologies",
      description: "Learn SDLC, STLC, and various testing methods including Black Box, White Box, and API Testing."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: "Practical Testing Tools",
      description: "Gain hands-on experience with industry-leading tools like Postman, Selenium, JMeter and more."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: "Team Communication",
      description: "Develop essential communication skills needed to work effectively in cross-functional development teams."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
      title: "Career Development",
      description: "Create a professional CV, prepare for interviews, and learn what employers are looking for in QA engineers."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: "Mobile & Database Testing",
      description: "Specialize in testing mobile applications and databases to expand your technical expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header transparent={true} />
      
      {/* Hero Section */}
      <HeroSection 
        title="Elevate Your QA Engineering Skills"
        subtitle="Comprehensive tutorial for aspiring and professional Quality Assurance engineers, covering modern testing principles, methodologies, and tools."
        ctaText="Get Started"
        ctaLink="/intro"
      />

      {/* Introductory Text Section */}
      <section className="py-16 bg-background dark:bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Journey to QA Mastery Starts Here</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're starting your career or looking to level up your skills, this platform offers structured learning paths, practical examples, and essential tools covering the entire spectrum of Quality Assurance. Explore the key areas below to begin.
          </p>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-background dark:bg-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Transform Your QA Career</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Inner cards use bg-background in light, dark:bg-accent in dark */}
            <div className="p-6 bg-background dark:bg-accent rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Master Core Concepts</h3>
              <p className="text-muted-foreground">Build a rock-solid foundation in testing principles, lifecycles, and methodologies.</p>
            </div>
            <div className="p-6 bg-background dark:bg-accent rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Gain Practical Skills</h3>
              <p className="text-muted-foreground">Get hands-on experience with essential QA tools and real-world testing scenarios.</p>
            </div>
            <div className="p-6 bg-background dark:bg-accent rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Boost Your Employability</h3>
              <p className="text-muted-foreground">Learn effective communication, defect management, and interview preparation techniques.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 bg-background dark:bg-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative">
            {/* Dashed line connector for larger screens */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-border -translate-y-1/2"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg"> {/* Changed text-white to text-primary-foreground */}
                <ListChecks className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Explore Fundamentals</h3>
              <p className="text-muted-foreground px-4">Start with the basics of QA, testing types, and core principles.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Master Techniques</h3>
              <p className="text-muted-foreground px-4">Dive into methodologies, tools, defect management, and practical application.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-orange-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Advance Your Career</h3>
              <p className="text-muted-foreground px-4">Utilize resources, templates, and interview prep to land your ideal QA role.</p>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Enhanced Feature Section using ConceptCard with Animation */}
      <motion.section
        className="py-20 bg-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Explore the QA Knowledge Hub</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This platform provides a complete journey through modern QA concepts, methodologies, tools, and real-world practices to help you become a highly effective quality assurance professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8" />, // Removed text-primary, ConceptCard handles color
                title: "Quality Assurance Fundamentals",
                description: "Master the principles of software testing and learn to identify, report, and track defects effectively.",
                link: "/principles",
                detailsText: "Dive into the core concepts that form the foundation of quality assurance."
              },
              {
                icon: <Workflow className="h-8 w-8" />,
                title: "Industry-Standard Methodologies",
                description: "Learn SDLC, STLC, and various testing methods including Black Box, White Box, and API Testing.",
                link: "/sdlc-stlc",
                detailsText: "Understand the processes and frameworks used in professional software development and testing."
              },
              {
                icon: <TerminalSquare className="h-8 w-8" />,
                title: "Practical Testing Tools",
                description: "Gain hands-on experience with industry-leading tools like Postman, Selenium, JMeter and more.",
                link: "/testing-tools",
                detailsText: "Get familiar with the tools essential for modern QA automation and manual testing."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Team Communication",
                description: "Develop essential communication skills needed to work effectively in cross-functional development teams.",
                link: null, // No specific page yet
                detailsText: "Effective collaboration is key. Learn how to communicate clearly with developers, PMs, and stakeholders."
              },
              {
                icon: <Bug className="h-8 w-8" />,
                title: "Defect Management & Reporting",
                description: "Learn how to manage, triage, and report defects using real-world tools and workflows.",
                link: "/defect-management",
                detailsText: "Master the process of identifying, documenting, and tracking bugs through their lifecycle."
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Real-World QA Scenarios",
                description: "Explore real QA scenarios, test case design, traceability, and best practices for modern software projects.",
                link: null, // No specific page yet
                detailsText: "Apply your knowledge to practical examples and learn best practices for various project types."
              }
            ].map((feature, index) => (
              <ConceptCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                summary={feature.description}
                // Removed Link, just show the details text
                details={
                  <p>{feature.detailsText}</p>
                }
                // Cycle through accent colors
                accentColor={['#00A2FF', '#34D399', '#F97316'][index % 3]} // Example colors: Blue, Green, Orange
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Resources Section */}
      <motion.section
        className="py-16 bg-background dark:bg-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Unlock Essential Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Templates Card - Restored light bg, added dark bg */}
            <Link to="/templates" className="block p-6 bg-gray-50 dark:bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group border border-border hover:border-primary">
              <div className="flex items-center mb-3">
                <FileText className="h-8 w-8 mr-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground">QA Templates</h3>
              </div>
              <p className="text-muted-foreground">Access ready-to-use templates for test plans, cases, bug reports, and more to streamline your workflow.</p>
            </Link>
            {/* Interview Questions Card - Restored light bg, added dark bg */}
            <Link to="/interview-questions" className="block p-6 bg-gray-50 dark:bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group border border-border hover:border-green-600">
              <div className="flex items-center mb-3">
                <HelpCircle className="h-8 w-8 mr-4 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground">Interview Prep</h3>
              </div>
              <p className="text-muted-foreground">Prepare for your next QA role with a curated list of common interview questions and topics.</p>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Mind Maps Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:bg-background dark:bg-none" // Use a different gradient or background
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Explore Mind Maps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Manual Mind Map Card */}
            <a href={`${import.meta.env.BASE_URL}mindmaps/ManualMindmap.html`} className="block group"> {/* Removed target="_blank" */}
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow border border-border hover:border-purple-600 dark:bg-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Map className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold text-foreground">Manual Testing Mind Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Visualize the key areas, techniques, and concepts involved in manual software testing.</p>
                </CardContent>
              </Card>
            </a>
            {/* Automation Mind Map Card */}
            <a href={`${import.meta.env.BASE_URL}mindmaps/AutomationMindmap.html`} className="block group"> {/* Removed target="_blank" */}
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow border border-border hover:border-teal-600 dark:bg-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BotIcon className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold text-foreground">Automation Testing Mind Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Explore the landscape of test automation, including frameworks, tools, and strategies.</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </motion.section>


      {/* Footer Section - Themed */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Al-Tofail Al-Hiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
