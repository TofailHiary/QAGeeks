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

// Number of items to show directly before putting into "More" dropdown
const VISIBLE_NAV_ITEMS_COUNT = 8; // Adjust this number based on design/fit

export const Header = ({ transparent = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false); // Desktop "More" menu
  const moreMenuRef = useRef<HTMLDivElement>(null);
  // const [width] = useWindowSize(); // Optional: use hook for dynamic count

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


  const visibleItems = navItems.slice(0, VISIBLE_NAV_ITEMS_COUNT);
  const hiddenItems = navItems.slice(VISIBLE_NAV_ITEMS_COUNT);

  const renderNavItem = (item: { label: string; path: string }, isDropdownItem = false) => {
    const isActive = location.pathname === item.path;
    const baseClasses = `relative font-semibold rounded-full transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#00A2FF]`;
    const sizeClasses = isDropdownItem ? 'px-4 py-2 text-sm w-full text-left' : 'px-3 py-1.5 text-sm'; // Smaller buttons again
    const activeClasses = isActive ? "bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white shadow" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700";

    return (
      <button
        key={item.label}
        onClick={() => React.startTransition(() => navigateTo(item.path))}
        className={`${baseClasses} ${sizeClasses} ${activeClasses}`}
        title={item.label}
        style={{ lineHeight: "1.2" }}
        role={isDropdownItem ? "menuitem" : "button"}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-purple-50 border-b border-gray-200 shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 md:py-3 w-full gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => React.startTransition(() => navigateTo("/"))}>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">
                QAGeeks
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center flex-grow min-w-0 mx-4">
            <nav className="flex items-center justify-center gap-x-1 bg-white rounded-full px-3 py-1 shadow border border-gray-200">
              {visibleItems.map(item => renderNavItem(item))}

              {/* "More" Dropdown */}
              {hiddenItems.length > 0 && (
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={toggleMoreMenu}
                    className={`relative font-semibold px-3 py-1.5 rounded-full transition-all duration-200 text-sm whitespace-nowrap text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#00A2FF]`}
                    style={{ lineHeight: "1.2" }}
                    aria-haspopup="true"
                    aria-expanded={isMoreMenuOpen}
                  >
                    More <span className="text-xs">▼</span> {/* Simple dropdown indicator */}
                  </button>
                  {/* Simple Dropdown Implementation */}
                  {isMoreMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="more-menu-button"
                    >
                      {hiddenItems.map(item => (
                        <div key={item.label} className="px-1 py-1" role="none">
                           {renderNavItem(item, true)}
                        </div>
                      ))}
                    </div>
                  )}
                   {/* --- OR --- Use Shadcn DropdownMenu if available ---
                   <DropdownMenu open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
                     <DropdownMenuTrigger asChild>
                       <button className="...">More ▼</button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                       {hiddenItems.map(item => (
                         <DropdownMenuItem key={item.label} onClick={() => navigateTo(item.path)}>
                           {item.label}
                         </DropdownMenuItem>
                       ))}
                     </DropdownMenuContent>
                   </DropdownMenu>
                   ---------------------------------------------------- */}
                </div>
              )}
            </nav>
          </div>

          {/* Right Icons Group */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Search Icon */}
            <button
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-1"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <div className="absolute top-full left-0 right-0 lg:hidden bg-white py-3 px-2 rounded-b-lg shadow-md border border-t-0 border-gray-200 max-h-[80vh] overflow-y-auto"> {/* Added max-height and scroll */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => { // Show all items in mobile menu
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
      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};
