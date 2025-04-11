import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components
import { Lightbulb, Users, Settings, ShieldCheck, Network, FileCode, Server, GitCompareArrows, TestTubeDiagonal, ListChecks, KeyRound, Wrench, Code, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react'; // Added HelpCircle, AlertTriangle, CheckCircle

// Helper component for Tooltips
const InfoTooltip: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center cursor-help text-blue-600 font-semibold underline decoration-dotted decoration-blue-400">
          {term}
          <HelpCircle size={14} className="ml-1 opacity-70" />
        </span>
      </TooltipTrigger>
      <TooltipContent className="bg-gray-800 text-white p-2 rounded shadow-lg max-w-xs text-sm">
        <p>{definition}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);


// Helper component for code blocks
const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto my-4">
    <code>{children}</code>
  </pre>
);

// Helper component for section cards with animation
const SectionCard: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className={`mb-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
          {icon && <span className="mr-3 text-blue-600">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none prose-indigo prose-a:text-blue-600 hover:prose-a:text-blue-800">
        {children}
      </CardContent>
    </Card>
  </motion.div>
);

export default function ApiTesting() {
  return (
    <PageLayout
      title="API Testing Fundamentals"
      subtitle="Explore the core concepts, types, protocols, tools, and best practices of API Testing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Increased py */}

        {/* Introduction to APIs */}
        <SectionCard title="What is an API?" icon={<Network size={24} />}>
          <p>An <InfoTooltip term="API" definition="Application Programming Interface: A software intermediary that allows two applications to talk to each other." /> is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information, enabling developers to integrate external functionalities without building them from scratch.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Real-life Example (The Restaurant Analogy)</h3>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 mb-4 border border-blue-200 shadow-sm">
            <ul className="list-none space-y-2">
              <li><strong className="text-blue-700">Customer (User):</strong> You, wanting services/data.</li>
              <li><strong className="text-blue-700">Menu (API Documentation):</strong> Lists available services/data and how to request them.</li>
              <li><strong className="text-blue-700">Waiter (API):</strong> The intermediary taking your request to the system (kitchen).</li>
              <li><strong className="text-blue-700">Kitchen (Server):</strong> Processes the request and returns the response (meal).</li>
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
              <AccordionTrigger className="text-lg font-semibold hover:text-blue-700 transition-colors">1. Web APIs</AccordionTrigger>
              <AccordionContent>Facilitate communication over the internet (e.g., fetching data from a remote server). Commonly use <InfoTooltip term="HTTP/HTTPS" definition="Hypertext Transfer Protocol / Secure: The foundation of data communication for the World Wide Web." />.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="library">
              <AccordionTrigger className="text-lg font-semibold hover:text-blue-700 transition-colors">2. Library APIs</AccordionTrigger>
              <AccordionContent>Provide functions within software libraries (e.g., Java Standard Library for file I/O).</AccordionContent>
            </AccordionItem>
            <AccordionItem value="framework">
              <AccordionTrigger className="text-lg font-semibold hover:text-blue-700 transition-colors">3. Framework APIs</AccordionTrigger>
              <AccordionContent>Part of software frameworks offering predefined classes/functions (e.g., Django APIs for database access).</AccordionContent>
            </AccordionItem>
            <AccordionItem value="os">
              <AccordionTrigger className="text-lg font-semibold hover:text-blue-700 transition-colors">4. Operating System APIs</AccordionTrigger>
              <AccordionContent>Allow applications to interact with the OS (e.g., Windows API for creating windows).</AccordionContent>
            </AccordionItem>
          </Accordion>
        </SectionCard>

        {/* Web Services */}
        <SectionCard title="Web Services" icon={<Server size={24} />}>
          <p><strong>Web Services</strong> are services that communicate between machines over a network, typically the internet. They use standardized web protocols (like HTTP) and data formats (like <InfoTooltip term="XML" definition="Extensible Markup Language: A markup language for encoding documents in a format that is both human-readable and machine-readable." /> or <InfoTooltip term="JSON" definition="JavaScript Object Notation: A lightweight data-interchange format." />).</p>
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
                  <TableHead className="font-bold text-gray-700">Aspect</TableHead>
                  <TableHead className="font-bold text-gray-700">API</TableHead>
                  <TableHead className="font-bold text-gray-700">Web Service</TableHead>
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
           <p className="mb-4">A <strong>Web API</strong> is an API accessed over the web using HTTP. It's a framework for creating HTTP-based services, often following architectural styles like REST or query languages like GraphQL. It's crucial for distributed systems serving various devices (laptops, mobiles).</p>

          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4"> {/* Changed to 3 cols */}
              <TabsTrigger value="rest" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">REST</TabsTrigger>
              <TabsTrigger value="soap" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 data-[state=active]:shadow-sm">SOAP</TabsTrigger>
              <TabsTrigger value="graphql" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700 data-[state=active]:shadow-sm">GraphQL</TabsTrigger> {/* Added GraphQL Tab */}
            </TabsList>

            {/* REST Tab */}
            <TabsContent value="rest">
              <Card className="border-blue-300 border shadow-sm">
                <CardHeader>
                  <CardTitle><InfoTooltip term="REST" definition="Representational State Transfer: An architectural style for designing networked applications." /> Architecture</CardTitle>
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
              <Card className="border-purple-300 border shadow-sm">
                <CardHeader>
                  <CardTitle><InfoTooltip term="SOAP" definition="Simple Object Access Protocol: A messaging protocol specification for exchanging structured information." /> Protocol</CardTitle>
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
                   <h4 className="font-semibold mt-4 mb-2"><InfoTooltip term="WSDL" definition="Web Services Description Language: An XML-based interface description language used for describing the functionality offered by a web service." />:</h4>
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

            {/* GraphQL Tab */}
            <TabsContent value="graphql">
              <Card className="border-pink-300 border shadow-sm">
                <CardHeader>
                  <CardTitle><InfoTooltip term="GraphQL" definition="A query language for APIs and a runtime for fulfilling those queries with your existing data." /> Query Language</CardTitle>
                  <CardDescription>A query language for APIs developed by Facebook. Allows clients to request exactly the data they need, reducing over-fetching and under-fetching.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p><strong>How it Works:</strong> Client sends a query specifying the structure of the data needed. Server responds with a JSON object matching that structure.</p>
                  <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li><strong>Declarative Data Fetching:</strong> Clients ask for specific fields.</li>
                    <li><strong>Single Endpoint:</strong> Typically uses a single endpoint (e.g., `/graphql`).</li>
                    <li><strong>Strongly Typed Schema:</strong> Defines the API's capabilities.</li>
                    <li><strong>Real-time Data (Subscriptions):</strong> Supports real-time updates.</li>
                  </ul>
                   <h4 className="font-semibold mt-4 mb-2">Example Query:</h4>
                   <CodeBlock>
{`query {
  user(id: "123") {
    name
    email
    posts(last: 5) {
      title
      createdAt
    }
  }
}`}
                   </CodeBlock>
                   <h4 className="font-semibold mt-4 mb-2">Use Cases:</h4>
                   <p>Complex systems, mobile apps needing efficient data loading, applications with rapidly evolving frontends.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* REST vs SOAP vs GraphQL Table */}
          <h3 className="text-xl font-semibold mt-8 mb-3">Architecture Comparison</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold text-gray-700">Aspect</TableHead>
                  <TableHead className="font-bold text-gray-700">REST</TableHead>
                  <TableHead className="font-bold text-gray-700">SOAP</TableHead>
                  <TableHead className="font-bold text-gray-700">GraphQL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Type</TableCell><TableCell>Architectural Style</TableCell><TableCell>Protocol</TableCell><TableCell>Query Language</TableCell></TableRow>
                <TableRow><TableCell>Data Format</TableCell><TableCell>JSON, XML, etc.</TableCell><TableCell>XML only</TableCell><TableCell>JSON</TableCell></TableRow>
                <TableRow><TableCell>Endpoints</TableCell><TableCell>Multiple (per resource)</TableCell><TableCell>Often Single</TableCell><TableCell>Typically Single</TableCell></TableRow>
                <TableRow><TableCell>Data Fetching</TableCell><TableCell>Fixed structure (potential over/under-fetching)</TableCell><TableCell>Fixed structure</TableCell><TableCell>Client specifies needed data</TableCell></TableRow>
                <TableRow><TableCell>Communication</TableCell><TableCell>Stateless</TableCell><TableCell>Can be Stateful/Stateless</TableCell><TableCell>Stateless</TableCell></TableRow>
                <TableRow><TableCell>Security</TableCell><TableCell>Transport (HTTPS), OAuth</TableCell><TableCell>Built-in WS-Security</TableCell><TableCell>Transport (HTTPS), App-level</TableCell></TableRow>
                <TableRow><TableCell>Contract</TableCell><TableCell>Less Strict (OpenAPI optional)</TableCell><TableCell>Strict (WSDL required)</TableCell><TableCell>Strict (Schema required)</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* API Testing Definition & Types */}
        <SectionCard title="API Testing Overview" icon={<TestTubeDiagonal size={24} />}>
          <p><strong>API Testing</strong> is a type of software testing that validates APIs directly by sending calls, getting output, and checking the system's response. It focuses on the <strong>business logic layer</strong>, verifying functionality, reliability, performance, and security, rather than the graphical user interface (<InfoTooltip term="GUI" definition="Graphical User Interface: Allows users to interact with electronic devices through graphical icons and visual indicators." />).</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Types of API Testing</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold text-gray-700">Type</TableHead>
                  <TableHead className="font-bold text-gray-700">Description</TableHead>
                  <TableHead className="font-bold text-gray-700">Example Tool / Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Functional</TableCell><TableCell>Validates API works per requirements (endpoints, methods, parameters).</TableCell><TableCell>Postman, REST-Assured</TableCell></TableRow>
                <TableRow><TableCell>Performance</TableCell><TableCell>Assesses responsiveness & stability under load (latency, throughput).</TableCell><TableCell>JMeter, k6, Gatling</TableCell></TableRow>
                <TableRow><TableCell>Security</TableCell><TableCell>Identifies vulnerabilities (auth, injection, data exposure). Check <a href="https://owasp.org/www-project-api-security/" target="_blank" rel="noopener noreferrer">OWASP API Security Top 10</a>.</TableCell><TableCell>OWASP ZAP, Burp Suite</TableCell></TableRow>
                <TableRow><TableCell>Validation</TableCell><TableCell>Confirms API meets business needs & data format/schema.</TableCell><TableCell>Schema validation tools, Custom scripts</TableCell></TableRow>
                <TableRow><TableCell>Load</TableCell><TableCell>Evaluates behavior under expected user loads.</TableCell><TableCell>JMeter, LoadRunner</TableCell></TableRow>
                <TableRow><TableCell>Runtime/Error Detection</TableCell><TableCell>Monitors for issues during execution (exceptions, error codes).</TableCell><TableCell>APM tools (Datadog, Dynatrace)</TableCell></TableRow>
                <TableRow><TableCell>Interoperability</TableCell><TableCell>Ensures seamless interaction with other systems/APIs.</TableCell><TableCell>Contract Testing (Pact)</TableCell></TableRow>
                <TableRow><TableCell>Fuzz</TableCell><TableCell>Sends random/invalid data to find crashes or security issues.</TableCell><TableCell>Fuzzing tools (AFL, Peach Fuzzer)</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* HTTP Methods & Status Codes */}
        <SectionCard title="HTTP Methods & Status Codes" icon={<ListChecks size={24} />}>
          <p><InfoTooltip term="HTTP" definition="Hypertext Transfer Protocol: The protocol used for transmitting hypermedia documents, such as HTML." /> enables client-server communication using a request-response model.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Common HTTP Methods</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>GET:</strong> Retrieve resource information (Safe method - doesn't change state).</li>
            <li><strong>POST:</strong> Send data to create a new resource.</li>
            <li><strong>PUT:</strong> Update/replace an entire resource at a specific URI (Idempotent).</li>
            <li><strong>DELETE:</strong> Delete a resource identified by the URI.</li>
            <li><strong>PATCH:</strong> Partially update a resource (Idempotent).</li>
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

// POST /users - Create a new user
{ "name": "Bob", "email": "bob@example.com" }
// Response: 201 Created, Location: /users/456

// PUT /users/123 - Replace user 123's data entirely
{ "id": 123, "name": "Alice Smith", "email": "alice.smith@example.com" }
// Response: 200 OK

// PATCH /users/123 - Update only user 123's email
{ "email": "new.alice@example.com" }
// Response: 200 OK

// DELETE /users/123 - Delete user 123
// Response: 204 No Content`}
          </CodeBlock>

          <h3 className="text-xl font-semibold mt-6 mb-3">HTTP Status Codes</h3>
          <p>Three-digit codes indicating the outcome of a request:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>1xx (Informational):</strong> Request received, continuing process (e.g., 100 Continue).</li>
            <li><strong>2xx (Successful):</strong> Request successfully received, understood, and accepted (e.g., 200 OK, 201 Created, 204 No Content).</li>
            <li><strong>3xx (Redirection):</strong> Further action needed (e.g., 301 Moved Permanently, 302 Found).</li>
            <li><strong>4xx (Client Error):</strong> Error caused by the client (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).</li>
            <li><strong>5xx (Server Error):</strong> Server failed to fulfill a valid request (e.g., 500 Internal Server Error, 503 Service Unavailable).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">POST vs. PUT vs. PATCH</h3>
           <div className="overflow-x-auto rounded-lg shadow border border-gray-200 my-4">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-bold text-gray-700">Category</TableHead>
                  <TableHead className="font-bold text-gray-700">POST</TableHead>
                  <TableHead className="font-bold text-gray-700">PUT</TableHead>
                  <TableHead className="font-bold text-gray-700">PATCH</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Purpose</TableCell><TableCell>Create new resource.</TableCell><TableCell>Replace existing resource (or create if not exists).</TableCell><TableCell>Partially update existing resource.</TableCell></TableRow>
                <TableRow><TableCell>Idempotency</TableCell><TableCell>No (multiple requests create multiple resources).</TableCell><TableCell>Yes (multiple requests have same effect).</TableCell><TableCell>Yes (usually, if applied correctly).</TableCell></TableRow>
                <TableRow><TableCell>Resource URI</TableCell><TableCell>Usually applied to a collection URI (e.g., /users).</TableCell><TableCell>Applied to a specific resource URI (e.g., /users/123).</TableCell><TableCell>Applied to a specific resource URI (e.g., /users/123).</TableCell></TableRow>
                <TableRow><TableCell>Payload</TableCell><TableCell>Contains data for the new resource.</TableCell><TableCell>Contains the complete new representation.</TableCell><TableCell>Contains only the changes to apply.</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </SectionCard>

        {/* Authentication & Authorization */}
        <SectionCard title="API Authentication & Authorization" icon={<KeyRound size={24} />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Authentication (Verifying Identity - Who are you?)</h3>
              <p>Confirms who the user or system making the request is.</p>
              <h4 className="font-semibold mt-3 mb-1">Common Methods:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>API Keys:</strong> Simple tokens passed in headers/params. Easy but less secure if exposed.</li>
                <li><strong>Basic Auth:</strong> Username/password encoded (Base64), sent in Authorization header. Simple but insecure over HTTP.</li>
                <li><strong>OAuth 2.0:</strong> Standard for delegated access (e.g., "Login with Google"). More complex but secure for third-party access.</li>
                <li><strong><InfoTooltip term="JWT" definition="JSON Web Token: A compact, URL-safe means of representing claims to be transferred between two parties." />:</strong> Compact, self-contained tokens for stateless authentication. Server verifies signature.</li>
                <li><strong>OpenID Connect (OIDC):</strong> Identity layer on top of OAuth 2.0.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Authorization (Verifying Permissions - What can you do?)</h3>
              <p>Determines what actions an authenticated user is allowed to perform.</p>
              <h4 className="font-semibold mt-3 mb-1">Common Methods:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong><InfoTooltip term="RBAC" definition="Role-Based Access Control: Access decisions based on the roles individual users have as part of an organization." />:</strong> Permissions based on user roles (Admin, Editor, Viewer).</li>
                <li><strong><InfoTooltip term="ABAC" definition="Attribute-Based Access Control: Access decisions based on attributes associated with the user, resource, environment, etc." />:</strong> Access based on attributes (user location, time of day, resource sensitivity).</li>
                <li><strong>ACLs (Access Control Lists):</strong> Explicit lists of permissions per user/group for specific resources.</li>
                <li><strong>Policy-Based Access Control (PBAC):</strong> Uses policies combining attributes and conditions.</li>
              </ul>
            </div>
          </div>
           <p className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm">
             <strong>Testing Focus:</strong> Verify that unauthenticated requests are rejected (401/403), authenticated users can access allowed resources, users cannot access resources they shouldn't (e.g., another user's data), and different roles have appropriate permissions.
           </p>
        </SectionCard>

        {/* API Tools */}
        <SectionCard title="API Testing Tools" icon={<Wrench size={24} />}>
          <p>Various tools assist in designing, testing, documenting, and managing APIs throughout their lifecycle.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Popular Tools:</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {["Postman", "Insomnia", "Swagger UI", "Stoplight", "JMeter", "k6", "REST-Assured", "Karate DSL", "Katalon Platform", "ReadyAPI", "Burp Suite", "OWASP ZAP"].map(tool => (
              <span key={tool} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm text-center border border-gray-300 shadow-sm hover:bg-gray-200 transition-colors">{tool}</span>
            ))}
          </div>

          {/* Swagger / OpenAPI */}
          <Card className="mb-6 border border-green-300 shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
               <CardTitle className="flex items-center text-xl"><FileCode size={20} className="mr-2 text-green-600" />Swagger / OpenAPI Specification</CardTitle>
             </CardHeader>
             <CardContent>
               <p>The <InfoTooltip term="OpenAPI Specification" definition="A standard, language-agnostic interface description for RESTful APIs, which allows both humans and computers to discover and understand the capabilities of the service." /> (formerly Swagger Specification) defines a standard way to describe REST APIs. Swagger provides tools built around this specification.</p>
               <p className="mt-2">Key tools include <strong>Swagger UI</strong> (interactive documentation), <strong>Swagger Editor</strong> (design APIs), and <strong>Swagger Codegen</strong> (generate client/server code).</p>
               <a href="https://swagger.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block mr-4">Visit Swagger.io</a>
               <a href="https://petstore.swagger.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">Swagger Petstore Example</a>
             </CardContent>
          </Card>

          {/* Postman */}
          <Card className="border border-orange-300 shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
               <CardTitle className="flex items-center text-xl"><Code size={20} className="mr-2 text-orange-600" />Postman</CardTitle>
             </CardHeader>
             <CardContent>
               <p>A popular collaborative platform for API development and testing. It simplifies making requests, organizing tests, and sharing work.</p>
               <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
               <ul className="list-disc list-inside space-y-1 mb-4 columns-2">
                 <li>Intuitive Request Builder</li>
                 <li>Automated Testing (Collections, Scripts)</li>
                 <li>Mock Servers</li>
                 <li>Documentation Generation</li>
                 <li>Workspaces for Collaboration</li>
                 <li>Environment & Global Variables</li>
                 <li>Monitoring & Reporting</li>
                 <li>API Client for various protocols (REST, SOAP, GraphQL, gRPC)</li>
               </ul>
               <h4 className="font-semibold mt-4 mb-2">Installation & Use:</h4>
               <p>Download from the <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Postman Downloads page</a>. Use it to create requests, organize them in Collections, write JavaScript tests in the "Tests" tab, and run collections automatically.</p>
               <h5 className="font-semibold mt-3 mb-1">Example Postman Test Script:</h5>
               <CodeBlock>
{`// Example test in Postman's "Tests" tab
pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("expected_string");
});

// Check if a JSON value is equal to something
pm.test("User ID is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.userId).to.eql(123);
});`}
               </CodeBlock>
             </CardContent>
          </Card>
        </SectionCard>

        {/* NEW SECTION: Challenges & Best Practices */}
        <SectionCard title="Common Challenges & Best Practices" icon={<AlertTriangle size={24} className="text-red-600" />}>
          <p>Effective API testing requires addressing common hurdles and following best practices.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Challenges */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center"><AlertTriangle size={20} className="mr-2 text-red-500" />Challenges</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Environment Setup:</strong> Configuring test environments mimicking production can be complex.</li>
                <li><strong>Parameter Combinations:</strong> Testing all possible input combinations is often infeasible.</li>
                <li><strong>Sequencing Calls:</strong> Many API workflows require specific call sequences (e.g., login → create → update).</li>
                <li><strong>Schema Validation:</strong> Ensuring responses consistently match the expected schema/contract.</li>
                <li><strong>Managing Test Data:</strong> Creating and maintaining realistic and isolated test data.</li>
                <li><strong>Non-Functional Testing:</strong> Adequately covering performance, security, and reliability.</li>
                <li><strong>Third-Party APIs:</strong> Handling dependencies on external APIs that might be unstable or rate-limited.</li>
              </ul>
            </div>

            {/* Best Practices */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center"><CheckCircle size={20} className="mr-2 text-green-500" />Best Practices</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Test Early, Test Often:</strong> Integrate API testing into the CI/CD pipeline.</li>
                <li><strong>Focus on Business Logic:</strong> Prioritize tests validating core functionalities.</li>
                <li><strong>Use Realistic Data:</strong> Employ data similar to production, covering edge cases.</li>
                <li><strong>Validate Status Codes, Response Body, and Headers:</strong> Check all parts of the response.</li>
                <li><strong>Implement Contract Testing:</strong> Ensure consumer/provider contracts are met (e.g., using Pact).</li>
                <li><strong>Automate Where Possible:</strong> Automate regression tests, functional tests, and performance tests.</li>
                <li><strong>Parameterize Tests:</strong> Use variables for environments, credentials, and data to make tests reusable.</li>
                <li><strong>Group Tests Logically:</strong> Organize tests by feature or workflow (e.g., using Postman Collections).</li>
                <li><strong>Monitor API Health:</strong> Use monitoring tools to track performance and errors in production.</li>
              </ul>
            </div>
          </div>
        </SectionCard>


        {/* Next Button */}
        <div className="mt-16 text-center"> {/* Increased mt */}
          <Link
            to="/testing-types" // Updated link based on likely next topic
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Explore Testing Types →
          </Link>
        </div>

      </div>
    </PageLayout>
  );
}
