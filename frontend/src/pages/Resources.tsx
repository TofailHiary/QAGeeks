import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  FlaskConical,
  Globe,
  Wrench, // Replaced Tool with Wrench
  Users,
  GraduationCap,
  Link as LinkIcon, // Renamed to avoid conflict with React Router Link
  Briefcase, // Added for Practice Sites
} from "lucide-react"; // Assuming lucide-react is available

// Define types for better structure
type ResourceCategory =
  | "Tutorials & Courses"
  | "Communities & Blogs"
  | "Tools & Platforms"
  | "Certifications & Standards"
  | "API Testing"
  | "Practice Sites";

interface Resource {
  name: string;
  url: string;
  description: string;
  category: ResourceCategory;
  icon: React.ElementType; // Use React.ElementType for component icons
}

// Categorized Resources
const resources: Resource[] = [
  // Tutorials & Courses
  {
    name: "Guru99",
    url: "https://www.guru99.com/",
    description: "Comprehensive tutorials on various software testing topics.",
    category: "Tutorials & Courses",
    icon: BookOpen,
  },
  {
    name: "GeeksforGeeks (Testing)",
    url: "https://www.geeksforgeeks.org/software-testing-basics/",
    description: "Articles and explanations of core testing concepts.",
    category: "Tutorials & Courses",
    icon: BookOpen,
  },
  {
    name: "Javatpoint (Testing)",
    url: "https://www.javatpoint.com/software-testing-tutorial",
    description: "Tutorials covering software testing methodologies.",
    category: "Tutorials & Courses",
    icon: BookOpen,
  },
  {
    name: "Tutorialspoint (Testing)",
    url: "https://www.tutorialspoint.com/software_testing/index.htm",
    description: "Wide range of tutorials including software testing and QA.",
    category: "Tutorials & Courses",
    icon: BookOpen,
  },
  {
    name: "Software Testing Fundamentals",
    url: "https://softwaretestingfundamentals.com/",
    description: "Focuses on foundational testing principles and practices.",
    category: "Tutorials & Courses",
    icon: GraduationCap,
  },
  {
    name: "ToolsQA",
    url: "https://www.toolsqa.com/",
    description: "In-depth tutorials focused on test automation tools.",
    category: "Tutorials & Courses",
    icon: GraduationCap,
  },
  // Communities & Blogs
  {
    name: "Software Testing Help",
    url: "https://softwaretestinghelp.com/",
    description: "Popular blog with articles, tutorials, and news on software testing.",
    category: "Communities & Blogs",
    icon: Users,
  },
  {
    name: "Ministry of Testing",
    url: "https://www.ministryoftesting.com/",
    description: "Global community for testers: articles, forums, events, and learning.",
    category: "Communities & Blogs",
    icon: Users,
  },
  {
    name: "Dev.to (Testing Tag)",
    url: "https://dev.to/t/testing",
    description: "Developer community articles tagged specifically for testing.",
    category: "Communities & Blogs",
    icon: Code,
  },
  // Tools & Platforms
  {
    name: "Atlassian Jira",
    url: "https://www.atlassian.com/software/jira",
    description: "Widely-used issue tracking and project management tool.",
    category: "Tools & Platforms",
    icon: Wrench, // Use Wrench icon
  },
  {
    name: "BrowserStack",
    url: "https://www.browserstack.com/",
    description: "Cloud platform for cross-browser and cross-device testing.",
    category: "Tools & Platforms",
    icon: Globe,
  },
  {
    name: "LambdaTest",
    url: "https://www.lambdatest.com/",
    description: "Alternative cloud platform for cross-browser testing.",
    category: "Tools & Platforms",
    icon: Globe,
  },
  // API Testing
  {
    name: "Postman",
    url: "https://www.postman.com/",
    description: "Leading platform for API development, testing, and documentation.",
    category: "API Testing",
    icon: FlaskConical,
  },
  {
    name: "Swagger Petstore (API)",
    url: "https://petstore.swagger.io/",
    description: "Sample API based on OpenAPI spec, ideal for practice.",
    category: "API Testing",
    icon: FlaskConical,
  },
  // Certifications & Standards
  {
    name: "ISTQB",
    url: "https://www.istqb.org/",
    description: "International Software Testing Qualifications Board - certifications and syllabus.",
    category: "Certifications & Standards",
    icon: GraduationCap,
  },
];

// Practice Sites
const practiceSites: Resource[] = [
  {
    name: "OpenCart Demo",
    url: "https://demo.opencart.com/",
    description: "Live e-commerce demo, great for practicing web testing.",
    category: "Practice Sites",
    icon: Briefcase,
  },
  {
    name: "OrangeHRM Demo",
    url: "https://opensource-demo.orangehrmlive.com/",
    description: "Demo of an HR management system for testing practice.",
    category: "Practice Sites",
    icon: Briefcase,
  },
  {
    name: "Sauce Demo",
    url: "https://www.saucedemo.com/",
    description: "Simple e-commerce site designed for automation practice.",
    category: "Practice Sites",
    icon: Briefcase,
  },
  {
    name: "The Internet (Herokuapp)",
    url: "https://the-internet.herokuapp.com/",
    description: "Collection of diverse web elements for automation challenges.",
    category: "Practice Sites",
    icon: Briefcase,
  },
  {
    name: "ParaBank",
    url: "https://parabank.parasoft.com/parabank/index.htm",
    description: "Demo banking application for comprehensive testing practice.",
    category: "Practice Sites",
    icon: Briefcase,
  },
   {
    name: "Swagger Petstore (Practice)", // Included again as it's relevant here too
    url: "https://petstore.swagger.io/",
    description: "Sample API for practicing API testing techniques.",
    category: "Practice Sites", // Categorized specifically for practice
    icon: FlaskConical, // Keep API icon
  },
];

// Group resources by category
const groupedResources = resources.reduce((acc, resource) => {
  const category = resource.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(resource);
  return acc;
}, {} as Record<ResourceCategory, Resource[]>);

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Stagger animation
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

// Reusable Resource Card Component
const ResourceCard: React.FC<{ resource: Resource; index: number }> = ({ resource, index }) => {
  const IconComponent = resource.icon;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50 dark:bg-gray-800/50 p-4 border-b dark:border-gray-700">
          <CardTitle className="text-base font-medium flex items-center space-x-2">
            <IconComponent className="h-5 w-5 text-primary" />
            <span>{resource.name}</span>
          </CardTitle>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${resource.name} (opens in new tab)`}
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            <LinkIcon className="h-4 w-4" />
          </a>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-gray-600 dark:text-gray-300">{resource.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Resources() {
  const allCategories = Object.keys(groupedResources) as ResourceCategory[];

  return (
    <PageLayout
      title="QA Learning & Practice Hub"
      subtitle="Explore curated resources and sites to enhance your QA skills"
    >
      <div className="container mx-auto px-4 py-12 space-y-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Welcome to the QA Hub! Below you'll find a collection of valuable learning materials,
          communities, tools, and websites designed for practicing your testing techniques.
          Continuously improve and stay updated in the dynamic field of Quality Assurance.
        </motion.p>

        {/* Learning Resources Section */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"
          >
            Learning Resources
          </motion.h2>
          {allCategories
            .filter(cat => cat !== "Practice Sites") // Exclude practice sites from this section
            .map((category) => (
              <div key={category} className="mb-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 border-l-4 border-primary pl-3"
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedResources[category].map((resource, index) => (
                    <ResourceCard key={resource.url} resource={resource} index={index} />
                  ))}
                </div>
              </div>
          ))}
        </section>

        {/* Practice Sites Section */}
        <section className="space-y-8">
           <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"
          >
            Sites for Practice Testing
          </motion.h2>
           <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 border-l-4 border-secondary pl-3" // Use secondary color maybe?
            >
              Hands-on Environments
            </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceSites.map((site, index) => (
               <ResourceCard key={site.url} resource={site} index={index} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
