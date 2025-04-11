import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, Users, Settings, ShieldCheck, Network, FileCode, Server, GitCompareArrows, TestTubeDiagonal, ListChecks, KeyRound, Wrench, Code } from 'lucide-react'; // Assuming lucide-react is available

// Helper component for code blocks
const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto my-4">
    <code>{children}</code>
  </pre>
);

// Helper component for section cards
const SectionCard: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <Card className={`mb-8 shadow-lg border-l-4 border-blue-500 ${className}`}>
    <CardHeader>
      <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
        {icon && <span className="mr-3 text-blue-600">{icon}</span>}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="prose max-w-none prose-indigo">
      {children}
    </CardContent>
  </Card>
);

export default function ApiTesting() {
  return (
    <PageLayout
      title="API Testing Fundamentals"
      subtitle="Explore the core concepts, types, protocols, and tools of API Testing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Introduction to APIs */}
        <SectionCard title="What is an API?" icon={<Network size={24} />}>
          <p>An <strong>API (Application Programming Interface)</strong> is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information, enabling developers to integrate external functionalities without building them from scratch.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Real-life Example (The Restaurant Analogy)</h3>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 mb-4 border border-blue-200">
            <ul className="list-none space-y-2">
              <li><strong>Customer (User):</strong> You, wanting services/data.</li>
              <li><strong>Menu (API Documentation):</strong> Lists available services/data and how to request them.</li>
              <li><strong>Waiter (API):</strong> The intermediary taking your request to the system (kitchen).</li>
              <li><strong>Kitchen (Server):</strong> Processes the request and returns the response (meal).</li>
            </ul>
          </Card>

          <h3 className="text-xl font-semibold mt-6 mb-3">Software Examples</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Social Media Integration:</strong> Apps using Facebook/Twitter APIs for login or sharing.</li>
            <li><strong>Payment Processing:</strong> E-commerce sites using Stripe/PayPal APIs for secure transactions.</li>
            <li><strong>Weather Data:</strong> Apps using OpenWeatherMap API to fetch forecasts.</li>
          </ul>
        </SectionCard>

        {/* Importance */}
        <SectionCard title="Importance in Software Development" icon={<Lightbulb size={24} />}>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Interoperability:</strong> Helps different systems work together seamlessly.</li>
            <li><strong>Efficiency:</strong> Saves time with ready-made functions, speeding up development.</li>
            <li><strong>Automation:</strong> Enables automation of repetitive tasks, boosting productivity.</li>
            <li><strong>Scalability & Flexibility:</strong> Allows apps to grow and adapt easily.</li>
            <li><strong>Innovation:</strong> Encourages new apps and services by sharing features.</li>
          </ul>
        </SectionCard>

        {/* Types of APIs */}
        <SectionCard title="Types of APIs" icon={<Settings size={24} />}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="web">
              <AccordionTrigger className="text-lg font-semibold">1. Web APIs</AccordionTrigger>
              <AccordionContent>Facilitate communication over the internet (e.g., fetching data from a remote server). Commonly use HTTP/HTTPS.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="library">
              <AccordionTrigger className="text-lg font-semibold">2. Library APIs</AccordionTrigger>
              <AccordionContent>Provide functions within software libraries (e.g., Java Standard Library for file I/O).</AccordionContent>
            </AccordionItem>
            <AccordionItem value="framework">
              <AccordionTrigger className="text-lg font-semibold">3. Framework APIs</AccordionTrigger>
              <AccordionContent>Part of software frameworks offering predefined classes/functions (e.g., Django APIs for database access).</AccordionContent>
            </AccordionItem>
            <AccordionItem value="os">
              <AccordionTrigger className="text-lg font-semibold">4. Operating System APIs</AccordionTrigger>
              <AccordionContent>Allow applications to interact with the OS (e.g., Windows API for creating windows).</AccordionContent>
            </AccordionItem>
          </Accordion>
        </SectionCard>

        {/* Web Services */}
        <SectionCard title="Web Services" icon={<Server size={24} />}>
          <p><strong>Web Services</strong> are services that communicate between machines over a network, typically the internet. They use standardized web protocols (like HTTP) and data formats (like XML or JSON).</p>
          <p className="mt-2 italic text-gray-600">Key takeaway: All Web Services are APIs, but not all APIs are Web Services (e.g., Library or OS APIs don't necessarily use a network).</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Examples of Web Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weather Information Services</li>
            <li>Payment Gateways (Stripe, PayPal)</li>
            <li>Social Media Integration Services</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">APIs vs. Web Services</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold">Aspect</TableHead>
                  <TableHead className="font-bold">API</TableHead>
                  <TableHead className="font-bold">Web Service</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Definition</TableCell><TableCell>Set of rules for software communication.</TableCell><TableCell>Standardized method for communication over a network.</TableCell></TableRow>
                <TableRow><TableCell>Communication</TableCell><TableCell>Various protocols (HTTP, TCP, etc.)</TableCell><TableCell>Primarily web protocols (HTTP/HTTPS).</TableCell></TableRow>
                <TableRow><TableCell>Data Formats</TableCell><TableCell>Multiple (JSON, XML, etc.)</TableCell><TableCell>Typically XML or JSON.</TableCell></TableRow>
                <TableRow><TableCell>Accessibility</TableCell><TableCell>Local or remote.</TableCell><TableCell>Specifically remote over a network.</TableCell></TableRow>
                <TableRow><TableCell>Implementation</TableCell><TableCell>Various styles (REST, SOAP, GraphQL, etc.)</TableCell><TableCell>Generally SOAP or REST.</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* Web API & Architectures */}
        <SectionCard title="Web API Architectures" icon={<GitCompareArrows size={24} />}>
           <p className="mb-4">A <strong>Web API</strong> is an API accessed over the web using HTTP. It's a framework for creating HTTP-based services, often RESTful. It's crucial for distributed systems serving various devices (laptops, mobiles).</p>

          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="rest">REST (Representational State Transfer)</TabsTrigger>
              <TabsTrigger value="soap">SOAP (Simple Object Access Protocol)</TabsTrigger>
            </TabsList>

            {/* REST Tab */}
            <TabsContent value="rest">
              <Card className="border-blue-300 border">
                <CardHeader>
                  <CardTitle>REST Architecture</CardTitle>
                  <CardDescription>An architectural style using standard HTTP methods, emphasizing statelessness and flexibility. Preferred for web and mobile apps due to simplicity and performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p><strong>How it Works:</strong> Client sends HTTP request (GET, POST, PUT, DELETE) to a URI. Server responds with a resource representation (often JSON).</p>
                  <h4 className="font-semibold mt-4 mb-2">REST Request Structure:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li><strong>HTTP Method:</strong> GET, POST, PUT, DELETE, PATCH, etc.</li>
                    <li><strong>Endpoint/URI:</strong> Identifies the resource (e.g., `/users/123`).</li>
                    <li><strong>Headers:</strong> Metadata (e.g., `Content-Type: application/json`, `Authorization: Bearer [YOUR_TOKEN_HERE]`).</li>
                    <li><strong>Query Parameters (Optional):</strong> Filter/modify request (e.g., `/users?active=true`).</li>
                    <li><strong>Body (Optional):</strong> Data payload for POST/PUT/PATCH (usually JSON).</li>
                  </ul>
                   <h4 className="font-semibold mt-4 mb-2">Example Request:</h4>
                   <CodeBlock>
{`GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIU...`}
                   </CodeBlock>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SOAP Tab */}
            <TabsContent value="soap">
              <Card className="border-purple-300 border">
                <CardHeader>
                  <CardTitle>SOAP Protocol</CardTitle>
                  <CardDescription>A protocol designed for exchanging structured information, ensuring interoperability across platforms using XML. More rigid than REST.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Uses XML format for messages and can operate over various protocols (HTTP, SMTP).</p>
                  <h4 className="font-semibold mt-4 mb-2">SOAP Protocol Structure:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Envelope:</strong> Root element defining the message.</li>
                    <li><strong>Header (Optional):</strong> Application-specific info (e.g., authentication).</li>
                    <li><strong>Body:</strong> Contains the actual message/call.</li>
                    <li><strong>Fault (Optional):</strong> Error information.</li>
                  </ul>
                   <h4 className="font-semibold mt-4 mb-2">WSDL (Web Services Description Language):</h4>
                   <p>An XML-based language describing the service's functionalities, acting as a contract.</p>
                   <h4 className="font-semibold mt-4 mb-2">Messaging Patterns:</h4>
                   <ul className="list-disc list-inside space-y-1">
                     <li>Request-Response</li>
                     <li>One-Way</li>
                     <li>Publish-Subscribe</li>
                   </ul>
                   <h4 className="font-semibold mt-4 mb-2">Example SOAP Message:</h4>
                   <CodeBlock>
{`<?xml version="1.0"?>
<soap:Envelope
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <soap:Body>
    <m:GetUser xmlns:m="http://api.example.com/user">
      <m:UserId>123</m:UserId>
    </m:GetUser>
  </soap:Body>
</soap:Envelope>`}
                   </CodeBlock>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* REST vs SOAP Table */}
          <h3 className="text-xl font-semibold mt-8 mb-3">REST vs. SOAP Comparison</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold">Aspect</TableHead>
                  <TableHead className="font-bold">REST</TableHead>
                  <TableHead className="font-bold">SOAP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Protocol Type</TableCell><TableCell>Architectural Style (uses HTTP)</TableCell><TableCell>Protocol (uses XML over HTTP, SMTP, etc.)</TableCell></TableRow>
                <TableRow><TableCell>Data Format</TableCell><TableCell>JSON, XML, HTML, Text</TableCell><TableCell>XML only</TableCell></TableRow>
                <TableRow><TableCell>Communication</TableCell><TableCell>Stateless</TableCell><TableCell>Can be Stateful or Stateless</TableCell></TableRow>
                <TableRow><TableCell>Security</TableCell><TableCell>Relies on transport (HTTPS), OAuth</TableCell><TableCell>Built-in WS-Security</TableCell></TableRow>
                <TableRow><TableCell>Performance</TableCell><TableCell>Generally Faster (less overhead, caching)</TableCell><TableCell>Can be Slower (XML parsing)</TableCell></TableRow>
                <TableRow><TableCell>Error Handling</TableCell><TableCell>HTTP Status Codes</TableCell><TableCell>SOAP Fault Element</TableCell></TableRow>
                <TableRow><TableCell>Use Cases</TableCell><TableCell>Web/Mobile Apps, Public APIs</TableCell><TableCell>Enterprise Apps, High Security Needs</TableCell></TableRow>
                <TableRow><TableCell>Contract</TableCell><TableCell>Less Strict (OpenAPI optional)</TableCell><TableCell>Strict (WSDL required)</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* API Testing Definition & Types */}
        <SectionCard title="API Testing Overview" icon={<TestTubeDiagonal size={24} />}>
          <p><strong>API Testing</strong> is a type of software testing that validates APIs directly by sending calls, getting output, and checking the system's response. It focuses on the <strong>business logic layer</strong>, verifying functionality, reliability, performance, and security, rather than the graphical user interface (GUI).</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Types of API Testing</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="font-bold">Description</TableHead>
                  <TableHead className="font-bold">Example Tool</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Functional</TableCell><TableCell>Validates API works per requirements.</TableCell><TableCell>Postman</TableCell></TableRow>
                <TableRow><TableCell>Performance</TableCell><TableCell>Assesses responsiveness & stability under load.</TableCell><TableCell>JMeter, Merge.dev</TableCell></TableRow>
                <TableRow><TableCell>Security</TableCell><TableCell>Identifies vulnerabilities & protects data.</TableCell><TableCell>OWASP ZAP, Nordic APIs</TableCell></TableRow>
                <TableRow><TableCell>Validation</TableCell><TableCell>Confirms API meets business needs & format.</TableCell><TableCell>Imperva</TableCell></TableRow>
                <TableRow><TableCell>Load</TableCell><TableCell>Evaluates behavior under expected user loads.</TableCell><TableCell>JMeter</TableCell></TableRow>
                <TableRow><TableCell>Runtime/Error Detection</TableCell><TableCell>Monitors for issues during execution.</TableCell><TableCell>Dynatrace</TableCell></TableRow>
                <TableRow><TableCell>Interoperability</TableCell><TableCell>Ensures seamless interaction with other systems.</TableCell><TableCell>Swagger</TableCell></TableRow>
                <TableRow><TableCell>Fuzz</TableCell><TableCell>Sends random/invalid data to find issues.</TableCell><TableCell>Burp Suite</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* HTTP Methods & Status Codes */}
        <SectionCard title="HTTP Methods & Status Codes" icon={<ListChecks size={24} />}>
          <p>HTTP (Hypertext Transfer Protocol) enables client-server communication using a request-response model.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Common HTTP Methods</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>GET:</strong> Retrieve resource information (Safe method - doesn't change state).</li>
            <li><strong>POST:</strong> Send data to create or update a resource.</li>
            <li><strong>PUT:</strong> Update/replace a resource at a specific URI (Idempotent).</li>
            <li><strong>DELETE:</strong> Delete a resource identified by the URI.</li>
            <li><strong>PATCH:</strong> Partially update a resource.</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Example Usage (User Profile):</h4>
          <CodeBlock>
{`// GET /users/123 - Retrieve user 123's profile
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "posts": [ { "postId": 1, "title": "First Post" } ]
}

// POST /users/123/posts - Create a new post for user 123
{ "title": "New Blog Post", "content": "..." }
// Response might include the new post object with its ID.

// PUT /users/123 - Update user 123's email
{ "email": "new.alice@example.com" }
// Server updates the email field.

// DELETE /users/123/posts/1 - Delete post with ID 1 for user 123
// Server removes the post from the user's posts array.`}
          </CodeBlock>

          <h3 className="text-xl font-semibold mt-6 mb-3">HTTP Status Codes</h3>
          <p>Three-digit codes indicating the outcome of a request:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>1xx (Informational):</strong> Request received, continuing process (e.g., 100 Continue).</li>
            <li><strong>2xx (Successful):</strong> Request successfully received, understood, and accepted (e.g., 200 OK, 201 Created).</li>
            <li><strong>3xx (Redirection):</strong> Further action needed (e.g., 301 Moved Permanently).</li>
            <li><strong>4xx (Client Error):</strong> Error caused by the client (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found).</li>
            <li><strong>5xx (Server Error):</strong> Server failed to fulfill a valid request (e.g., 500 Internal Server Error).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">POST vs. PUT</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold">Category</TableHead>
                  <TableHead className="font-bold">POST</TableHead>
                  <TableHead className="font-bold">PUT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Purpose</TableCell><TableCell>Create new resource.</TableCell><TableCell>Update/Replace existing resource (or create).</TableCell></TableRow>
                <TableRow><TableCell>Idempotency</TableCell><TableCell>No (multiple requests create multiple resources).</TableCell><TableCell>Yes (multiple requests have same effect).</TableCell></TableRow>
                <TableRow><TableCell>Resource URI</TableCell><TableCell>Server determines URI.</TableCell><TableCell>Client specifies URI.</TableCell></TableRow>
                <TableRow><TableCell>Response Codes</TableCell><TableCell>Often 201 Created.</TableCell><TableCell>Often 200 OK or 204 No Content.</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* Authentication & Authorization */}
        <SectionCard title="API Authentication & Authorization" icon={<KeyRound size={24} />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Authentication (Verifying Identity)</h3>
              <p>Confirms who the user or system is.</p>
              <h4 className="font-semibold mt-3 mb-1">Common Methods:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>API Keys:</strong> Simple tokens, less robust.</li>
                <li><strong>OAuth 2.0:</strong> Standard for delegated access (e.g., "Login with Google").</li>
                <li><strong>JWT (JSON Web Tokens):</strong> Compact tokens for stateless auth.</li>
              </ul>
              <p className="mt-2"><strong>Example:</strong> Client sends username/password, server verifies and returns an access token.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Authorization (Verifying Permissions)</h3>
              <p>Determines what an authenticated user can do.</p>
              <h4 className="font-semibold mt-3 mb-1">Common Methods:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>RBAC (Role-Based):</strong> Permissions based on user roles (Admin, Editor, Viewer).</li>
                <li><strong>ABAC (Attribute-Based):</strong> Access based on attributes (user location, time of day).</li>
              </ul>
              <p className="mt-2"><strong>Example:</strong> Client uses token to request deleting a post. Server checks token's permissions; allows if user is Admin/Owner, denies if Guest.</p>
            </div>
          </div>
        </SectionCard>

        {/* API Tools */}
        <SectionCard title="API Testing Tools" icon={<Wrench size={24} />}>
          <p>Various tools assist in designing, testing, documenting, and managing APIs.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Popular Tools:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {["Postman", "SOAP UI", "JMeter", "ReadyAPI", "Swagger.io", "REST-Assured", "Katalon Platform", "Burp Suite", "OWASP ZAP"].map(tool => (
              <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm text-center border border-gray-300">{tool}</span>
            ))}
          </div>

          {/* Swagger */}
          <Card className="mb-6 border border-green-300">
             <CardHeader>
               <CardTitle className="flex items-center text-xl"><FileCode size={20} className="mr-2 text-green-600" />Swagger / OpenAPI</CardTitle>
             </CardHeader>
             <CardContent>
               <p>A suite of open-source tools based on the OpenAPI Specification for designing, building, documenting, and consuming RESTful APIs. It enables both humans and machines to understand API capabilities without source code access.</p>
               <p className="mt-2">Key features include interactive documentation (Swagger UI), code generation (Swagger Codegen), and API design tools.</p>
               <a href="https://swagger.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">Visit Swagger.io</a> | <a href="https://petstore.swagger.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">Swagger Petstore Example</a>
             </CardContent>
          </Card>

          {/* Postman */}
          <Card className="border border-orange-300">
             <CardHeader>
               <CardTitle className="flex items-center text-xl"><Code size={20} className="mr-2 text-orange-600" />Postman</CardTitle>
             </CardHeader>
             <CardContent>
               <p>A popular API platform for building, testing, and documenting APIs. It simplifies the API lifecycle and collaboration.</p>
               <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
               <ul className="list-disc list-inside space-y-1 mb-4">
                 <li>Intuitive API Client (Request Builder)</li>
                 <li>Automated Testing (Collections, Scripts)</li>
                 <li>Mock Servers</li>
                 <li>Documentation Generation</li>
                 <li>Workspaces for Collaboration</li>
                 <li>Environment Variables</li>
                 <li>Monitoring</li>
               </ul>
               <h4 className="font-semibold mt-4 mb-2">Installation:</h4>
               <p>Download from the <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Postman Downloads page</a> and run the installer for your OS.</p>
               <h4 className="font-semibold mt-4 mb-2">Using Postman:</h4>
               <ul className="list-disc list-inside space-y-1">
                 <li>Create requests (select method, enter URL, add headers/body).</li>
                 <li>Organize requests in Collections.</li>
                 <li>Use Environments for variables (e.g., base URLs, tokens).</li>
                 <li>Write JavaScript tests in the "Tests" tab to validate responses (e.g., check status code, response time, data fields).</li>
                 <li>Use the Collection Runner to execute multiple requests and tests automatically.</li>
               </ul>
                <p className="mt-2">Postman allows easy testing of GET, POST, PUT, DELETE methods by configuring the request details in the builder.</p>
             </CardContent>
          </Card>
        </SectionCard>

        {/* Next Button */}
        <div className="mt-12 text-center">
          <Link
            to="/general-topic"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            General Topic →
          </Link>
        </div>

      </div>
    </PageLayout>
  );
}
