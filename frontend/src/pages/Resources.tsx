import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    name: "Guru99",
    url: "https://www.guru99.com/",
    description: "Comprehensive tutorials and courses on various software testing topics.",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    description: "A wide range of computer science and programming resources, including testing concepts.",
  },
  {
    name: "Javatpoint",
    url: "https://www.javatpoint.com/",
    description: "Tutorials on Java and other technologies, with sections on software testing.",
  },
  {
    name: "Tutorialspoint",
    url: "https://www.tutorialspoint.com/java/index.htm",
    description: "Offers tutorials on various subjects, including software testing and QA.",
  },
  {
    name: "Software Testing Help",
    url: "https://softwaretestinghelp.com/",
    description: "A blog with articles, tutorials, and tips on software testing.",
  },
  {
    name: "Software Testing Fundamentals",
    url: "https://softwaretestingfundamentals.com/",
    description: "Provides a foundation in software testing principles and practices.",
  },
  {
    name: "ToolsQA",
    url: "https://www.toolsqa.com/",
    description: "Tutorials and resources for various test automation tools.",
  },
  {
    name: "Atlassian Jira",
    url: "https://www.atlassian.com/software/jira",
    description: "Issue tracking and project management tool commonly used in QA.",
  },
  {
    name: "Postman",
    url: "https://www.postman.com/",
    description: "API testing and development platform.",
  },
  {
    name: "Dev.to",
    url: "https://dev.to",
    description: "A community of software developers sharing articles and tutorials.",
  },
  {
    name: "BrowserStack",
    url: "https://www.browserstack.com/",
    description: "Cloud-based cross-browser testing platform.",
  },
  {
    name: "LambdaTest",
    url: "https://www.lambdatest.com/",
    description: "Another cloud-based cross-browser testing platform.",
  },
  {
    name: "Swagger Petstore",
    url: "https://petstore.swagger.io/",
    description: "A sample API for testing purposes.",
  },
  {
    name: "Ministry of Testing",
    url: "https://www.ministryoftesting.com/",
    description: "A community and platform for software testers with articles, forums, and events.",
  },
  {
    name: "ISTQB",
    url: "https://www.istqb.org/",
    description: "The International Software Testing Qualifications Board, offering certifications and resources.",
  },
];

const practiceSites = [
  {
    name: "OpenCart Demo",
    url: "https://demo.opencart.com/",
    description: "A live demo of the OpenCart e-commerce platform, great for practicing web testing.",
  },
  {
    name: "OrangeHRM Demo",
    url: "https://opensource-demo.orangehrmlive.com/",
    description: "Demo of the OrangeHRM human resources management system.",
  },
  {
    name: "Swagger Petstore",
    url: "https://petstore.swagger.io/",
    description: "A sample API based on the OpenAPI Specification, useful for practicing API testing.",
  },
  {
    name: "Sauce Demo",
    url: "https://www.saucedemo.com/",
    description: "A simple e-commerce site designed by Sauce Labs for automation practice.",
  },
  {
    name: "The Internet (Herokuapp)",
    url: "https://the-internet.herokuapp.com/",
    description: "A collection of challenging web elements for practicing automation.",
  },
  {
    name: "ParaBank",
    url: "https://parabank.parasoft.com/parabank/index.htm",
    description: "A demo banking application provided by Parasoft for testing purposes.",
  },
];

export default function Resources() {
  return (
    <PageLayout title="QA Resources" subtitle="A collection of useful resources for Quality Assurance professionals">
      <div className="max-w-5xl mx-auto space-y-12 py-12 px-4">
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          This page provides curated lists of learning resources and practice sites to help you grow in the field of Quality Assurance.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card key={resource.name} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-2">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {resource.name}
                    </a>
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Sites for Practice Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceSites.map((site) => (
              <Card key={site.name} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-2">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {site.name}
                    </a>
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{site.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
