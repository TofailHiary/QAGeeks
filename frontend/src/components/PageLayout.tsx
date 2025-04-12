import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "components/Header";
import { Head } from "../internal-components/Head"; // Corrected import path
import { router } from "../router";

// Component to handle the redirect logic (copied from AppWrapper)
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect"); // e.g., /QAGeeks/intro?query#hash
    if (redirectPath) {
      sessionStorage.removeItem("redirect"); 
      // Extract the path relative to the repo root
      const repoName = '/QAGeeks/'; // Make sure this matches your repo name
      const relativePath = redirectPath.startsWith(repoName)
        ? redirectPath.substring(repoName.length -1) // Result: /intro?query#hash
        : redirectPath; // Fallback if something is wrong

      // Ensure it starts with a slash if not empty
      const finalPath = relativePath === "" ? "/" : (relativePath.startsWith('/') ? relativePath : `/${relativePath}`);

      console.log(`Redirecting to: ${finalPath} (Original: ${redirectPath})`); // Debug log
      navigate(finalPath, { replace: true }); 
    }
  }, [navigate]);

  return null; 
};


export interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  description?: string; // Add description prop
  transparentHeader?: boolean;
}

export const PageLayout = ({ children, title, subtitle, description, transparentHeader = false }: Props) => {
  return (
    <div className="min-h-screen pt-16">
      <Head title={title} description={description} /> {/* Use Head component */}
      <RedirectHandler />
      <Header transparent={transparentHeader} />
      <main className="container mx-auto px-4 py-12">
        {/* Keep the H1 for visual page title, Head handles the <title> tag */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h1>
        {subtitle && <p className="text-center text-xl text-gray-600 mb-12">{subtitle}</p>}
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Al-Tofail Al-Hiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
