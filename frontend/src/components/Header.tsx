import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalSearchModal } from "./GlobalSearchModal";
// Assuming Shadcn UI DropdownMenu is installed and configured
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"; // Adjust path if needed

// Helper hook for detecting screen size (optional, could use CSS media queries too)
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

export interface Props {
  transparent?: boolean;
}

const navItems = [
  { label: "Intro", path: "/intro" },
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
  { label: "General Topic", path: "/general-topic" },
  { label: "Resources", path: "/resources" },
  { label: "Interview Questions", path: "/interview-questions" },
  { label: "Templates", path: "/templates" },
  { label: "Contact", path: "/contact" },
];

// Default number of items before "More" at the lg breakpoint
const BASE_VISIBLE_NAV_ITEMS_COUNT = 8;

export const Header = ({ transparent = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false); // Desktop "More" menu
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize(); // Use hook for dynamic count

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMoreMenu = () => setIsMoreMenuOpen(!isMoreMenuOpen);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  // Close "More" menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreMenuRef]);

  // Determine visible items based on width - Adjusted breakpoints
  const getVisibleCount = (currentWidth: number) => {
    // Adjust these pixel values based on testing to find the best fit
    if (currentWidth >= 1600) return 11;
    if (currentWidth >= 1366) return 9; // Adjusted breakpoint
    if (currentWidth >= 1024) return BASE_VISIBLE_NAV_ITEMS_COUNT; // LG breakpoint
    // Below lg, the desktop nav is hidden anyway
    return BASE_VISIBLE_NAV_ITEMS_COUNT;
  };
  const currentVisibleCount = getVisibleCount(width);
  const visibleItems = navItems.slice(0, currentVisibleCount);
  const hiddenItems = navItems.slice(currentVisibleCount);

  const renderNavItem = (item: { label: string; path: string }, isDropdownItem = false) => {
    const isActive = location.pathname === item.path;
    // Base classes for all nav items
    const baseClasses = `relative font-medium rounded-md transition-colors duration-200 ease-in-out whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`;
    // Specific classes for desktop nav items (not in dropdown) - Reduced padding
    const desktopSizeClasses = 'px-3 py-2 text-sm';
    // Specific classes for dropdown items (desktop "More" or mobile menu)
    const dropdownSizeClasses = 'px-4 py-2 text-sm w-full text-left block'; // Use block for dropdown items

    // Unified active/inactive styles
    const activeClasses = isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

    const finalClasses = isDropdownItem
      ? `${baseClasses} ${dropdownSizeClasses} ${activeClasses}` // Use unified style for dropdown
      : `${baseClasses} ${desktopSizeClasses} ${activeClasses}`; // Use unified style for desktop

    return (
      <button
        key={item.label}
        onClick={() => React.startTransition(() => navigateTo(item.path))}
        className={finalClasses}
        title={item.label}
        role={isDropdownItem ? "menuitem" : "button"}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout with minmax for center column */}
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center h-16 md:h-20 w-full gap-4">

          {/* Logo (Column 1) */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer group" onClick={() => React.startTransition(() => navigateTo("/"))}>
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] group-hover:opacity-80 transition-opacity">
                QAGeeks
              </span>
            </div>
          </div>

          {/* Desktop Navigation (Column 2) */}
          {/* This div sits in the minmax(0, 1fr) column. Removed overflow-hidden */}
          <div className="hidden lg:flex justify-center items-center min-w-0">
            {/* Reduced gap */}
            <nav className="flex items-center justify-center gap-x-0.5">
              {visibleItems.map(item => renderNavItem(item))}

              {/* "More" Dropdown */}
              {hiddenItems.length > 0 && (
                <div className="relative flex-shrink-0" ref={moreMenuRef}> {/* Keep flex-shrink-0 */}
                  <button
                    onClick={toggleMoreMenu}
                    className={`relative font-medium px-4 py-2 rounded-md transition-colors duration-200 ease-in-out text-sm whitespace-nowrap text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-1`}
                    aria-haspopup="true"
                    aria-expanded={isMoreMenuOpen}
                  >
                    More
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {/* Simple Dropdown Implementation */}
                  {isMoreMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none p-2 z-10 space-y-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="more-menu-button"
                    >
                      {hiddenItems.map(item => renderNavItem(item, true))}
                    </div>
                  )}
                </div>
              )}
            </nav>
          </div>

          {/* Right Icons Group (Column 3) */}
          <div className="flex items-center justify-end gap-2 flex-shrink-0">
            {/* Search Icon */}
            <button
              className="text-gray-500 hover:text-blue-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-500 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden bg-white py-4 px-4 rounded-b-lg shadow-lg border border-t-0 border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </div>
      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};
