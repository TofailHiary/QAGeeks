import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export interface Props {
  transparent?: boolean;
}

const navItems = [
  { label: "Site Content", path: "/site-content" },
  { label: "Principles & Concepts", path: "/principles" },
  { label: "SDLC", path: "/sdlc" },
  { label: "STLC", path: "/stlc" },
  { label: "SDLC & STLC", path: "/sdlc-stlc" },
  { label: "Defect Management", path: "/defect-management" },
  { label: "Levels of Testing", path: "/levels-of-testing" },
  { label: "Testing Types", path: "/testing-types" },
  { label: "Testing Methods", path: "/testing-methods" },
  { label: "Testing Tools", path: "/testing-tools" },
  { label: "API Testing", path: "/api-testing" },
  { label: "General Topic", path: "/general-topic" }, // Added General Topic link
  { label: "Resources", path: "/resources" },
  { label: "Interview Questions", path: "/interview-questions" },
  { label: "Templates", path: "/templates" },
  { label: "Contact", path: "/contact" },
];

export const Header = ({ transparent = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    // Added subtle gradient background to header, ensured solid white for nav
    <header className={`fixed w-full top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-purple-50 border-b border-gray-200 shadow-sm`}>
      <div className="mx-auto px-4"> {/* Removed container */}
        {/* Use justify-start and mx-auto on wrapper for centering */}
        <div className="flex justify-center items-center py-3 w-full">
          {/* Container for logo and nav */}
          <div className="flex items-center justify-center w-full gap-8">
            {/* Logo */}
            <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => React.startTransition(() => navigateTo("/"))}>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
                QAGeeks
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white rounded-full px-4 py-1 shadow border border-gray-200">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.label}
                    onClick={() => React.startTransition(() => navigateTo(item.path))}
                    className={`relative font-semibold px-2 py-1.5 rounded-full transition-all duration-200 text-sm whitespace-nowrap
                      ${isActive
                        ? "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white shadow"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"}
                      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#00A2FF]`}
                    title={item.label}
                    style={{ lineHeight: "1.2", minWidth: "max-content" }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          {/* Added ml-8 to potentially balance logo margin if needed, though lg:hidden should remove it */}
          <button
            className="lg:hidden ml-8 text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          // Adjusted mobile menu styling
          <div className="absolute top-full left-0 right-0 lg:hidden bg-white py-3 px-2 rounded-b-lg shadow-md border border-t-0 border-gray-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.label}
                    onClick={() => React.startTransition(() => navigateTo(item.path))}
                    className={`w-full text-left font-semibold px-4 py-2 rounded-md transition-all duration-200 text-sm
                      ${isActive
                        ? "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white shadow"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"}
                      focus:outline-none focus:ring-1 focus:ring-[#00A2FF]`}
                    title={item.label}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
