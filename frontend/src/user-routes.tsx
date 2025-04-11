
// THIS FILE IS AUTOGENERATED WHEN PAGES ARE UPDATED
import { lazy } from "react";
import { RouteObject } from "react-router";



const ApiTesting = lazy(() => import("./pages/ApiTesting.tsx"));
const App = lazy(() => import("./pages/App.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const DefectManagement = lazy(() => import("./pages/DefectManagement.tsx"));
const Principles = lazy(() => import("./pages/Principles.tsx"));
const Sdlc = lazy(() => import("./pages/Sdlc.tsx"));
const Stlc = lazy(() => import("./pages/Stlc.tsx"));
const SdlcStlc = lazy(() => import("./pages/SdlcStlc.tsx"));
const TestingMethods = lazy(() => import("./pages/TestingMethods.tsx"));
const TestingTools = lazy(() => import("./pages/TestingTools.tsx"));
const Intro = lazy(() => import("./pages/Intro.tsx"));
const LevelsOfTesting = lazy(() => import("./pages/LevelsOfTesting.tsx"));
const TestingTypes = lazy(() => import("./pages/TestingTypes.tsx"));
const Resources = lazy(() => import("./pages/Resources.tsx")); // Import Resources
const InterviewQuestions = lazy(() => import("./pages/InterviewQuestions.tsx")); // Import InterviewQuestions
const Templates = lazy(() => import("./pages/Templates.tsx")); // Import Templates
const GeneralTopic = lazy(() => import("./pages/GeneralTopic.tsx")); // Import GeneralTopic

export const userRoutes: RouteObject[] = [
  { path: "/api-testing", element: <ApiTesting /> },
  { path: "/apitesting", element: <ApiTesting /> },
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },
  { path: "/defect-management", element: <DefectManagement /> },
  { path: "/defectmanagement", element: <DefectManagement /> },
  { path: "/principles", element: <Principles /> },
  { path: "/sdlc", element: <Sdlc /> },
  { path: "/stlc", element: <Stlc /> },
  { path: "/sdlc-stlc", element: <SdlcStlc /> },
  { path: "/sdlcstlc", element: <SdlcStlc /> },
  { path: "/testing-methods", element: <TestingMethods /> },
  { path: "/testingmethods", element: <TestingMethods /> },
  { path: "/testing-tools", element: <TestingTools /> },
  { path: "/testingtools", element: <TestingTools /> },
  { path: "/intro", element: <Intro /> },
  { path: "/intro", element: <Intro /> },
  { path: "/levels-of-testing", element: <LevelsOfTesting /> },
  { path: "/testing-types", element: <TestingTypes /> },
  { path: "/resources", element: <Resources /> }, // Add Resources route
  { path: "/interview-questions", element: <InterviewQuestions /> }, // Add InterviewQuestions route
  { path: "/templates", element: <Templates /> }, // Add Templates route
  { path: "/general-topic", element: <GeneralTopic /> }, // Add GeneralTopic route
];
