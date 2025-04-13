import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalSearchModal } from "./GlobalSearchModal";
// Assuming Shadcn UI DropdownMenu is installed and configured
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react"; // Import icons
import { useTheme } from "@/internal-components/ThemeProvider"; // Import useTheme hook
import { Button } from "@/components/ui/button";
// Removed duplicate DropdownMenu imports that were here
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components

// Define the structure for categorized navigation items
interface NavItem {
  label: string;
  path: string;
}

interface NavCategory {
  category: string;
  items: NavItem[];
}

// Categorized Navigation Items
const categorizedNavItems: NavCategory[] = [
  {
    category: "Fundamentals",
    items: [
      { label: "Intro", path: "/intro" },
      { label: "Principles & Concepts", path: "/principles" },
    ],
  },
  {
    category: "Lifecycles",
    items: [
      { label: "SDLC", path: "/sdlc" },
      { label: "STLC", path: "/stlc" },
      { label: "SDLC & STLC", path: "/sdlc-stlc" },
      { label: "Defect Management", path: "/defect-management" },
    ],
  },
  {
    category: "Testing Techniques",
    items: [
      { label: "Levels of Testing", path: "/levels-of-testing" },
      { label: "Testing Types", path: "/testing-types" },
      { label: "Testing Methods", path: "/testing-methods" },
    ],
  },
  {
    category: "Tools & Tech",
    items: [
      { label: "Testing Tools", path: "/testing-tools" },
      { label: "API Testing", path: "/api-testing" },
    ],
  },
  {
    category: "Resources",
    items: [
      { label: "Resources", path: "/resources" },
      { label: "Interview Questions", path: "/interview-questions" },
      { label: "Templates", path: "/templates" },
      { label: "General Topic", path: "/general-topic" }, // Consider renaming later
    ],
  },
];

// Separate top-level items (if any)
const topLevelNavItems: NavItem[] = [
    { label: "Creator", path: "/creator" },
];

// Combine all items for mobile menu rendering
const allNavItemsForMobile = [
    ...categorizedNavItems.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category }))), // Add category info if needed for styling
    ...topLevelNavItems
];


export interface Props {
  transparent?: boolean;
}

export const Header = ({ transparent = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme(); // Use the theme hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Helper function to render individual navigation links (used in dropdowns and mobile)
  const renderNavLink = (item: NavItem, isMobile: boolean = false) => {
    const isActive = location.pathname === item.path;
    // Base classes - remove all explicit focus ring logic here
    const baseClasses = `relative rounded-md transition-colors duration-200 ease-in-out whitespace-nowrap w-full text-left focus:outline-none`;
    const sizeClasses = isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'; // Larger tap targets for mobile
    // Apply hover styles only when the item is NOT active
    // Use theme variables for colors and hover states
    const interactiveClasses = isActive
      ? "bg-primary/10 text-primary font-semibold" // Active state using primary color with opacity
      : "text-foreground/70 hover:text-foreground hover:bg-accent focus:bg-accent"; // Default + Hover/Focus using theme variables
    const finalClasses = `${baseClasses} ${sizeClasses} ${interactiveClasses}`;

    return (
      <button
        key={item.label}
        onClick={() => React.startTransition(() => navigateTo(item.path))}
        className={finalClasses}
        role="menuitem" // Use menuitem role for items within a menu structure
        title={item.label}
      >
        {item.label}
      </button>
    );
  };

  // Helper function to render top-level buttons (non-dropdown)
  const renderTopLevelButton = (item: NavItem) => {
    const isActive = location.pathname === item.path;
    return (
        <Button
            key={item.label}
            variant={isActive ? "secondary" : "ghost"} // Use Shadcn Button variants
            size="sm"
            onClick={() => React.startTransition(() => navigateTo(item.path))}
            className="font-medium"
            title={item.label}
        >
            {item.label}
        </Button>
    );
  };


  return (
    // Use theme variables for background, border, and shadow
    <header className={`fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center h-16 md:h-20 w-full gap-4">

          {/* Logo (Column 1) */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer group" onClick={() => React.startTransition(() => navigateTo("/"))}>
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] group-hover:opacity-80 transition-opacity">
                QAGeeks
              </span>
            </div>
          </div>

          {/* Desktop Navigation (Column 2) - Using DropdownMenu */}
          <div className="hidden lg:flex justify-center items-center min-w-0">
            <nav className="flex items-center justify-center gap-x-1"> {/* Reduced gap slightly */}
              {/* Render Categorized Dropdowns */}
              {categorizedNavItems.map((category) => (
                <DropdownMenu key={category.category}>
                  <DropdownMenuTrigger asChild>
                     {/* Use theme variables for text and hover/open states */}
                    <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground hover:bg-accent data-[state=open]:bg-accent">
                      {category.category}
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start"> {/* Adjust width as needed */}
                    {category.items.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        // Conditionally apply classes to DropdownMenuItem to override focus style when active
                        <DropdownMenuItem
                          key={item.label}
                          asChild
                          // Remove conditional focus classes, keep only margin
                          className="my-2 focus:outline-none" // Keep margin and basic outline removal
                        >
                          {/* Render nav link inside DropdownMenuItem */}
                          {renderNavLink(item, false)}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}

              {/* Render Top-Level Items */}
              {topLevelNavItems.map(item => renderTopLevelButton(item))}
            </nav>
          </div>

          {/* Right Icons Group (Column 3) */}
          <div className="flex items-center justify-end gap-2 flex-shrink-0">
            {/* Search Icon - Use theme variables */}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </Button>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground" // Use theme variables
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button - Use theme variables */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Renders all items in a list */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
             // Use theme variables for mobile menu background, border, shadow
            className="absolute top-full left-0 right-0 lg:hidden bg-background py-4 px-2 rounded-b-lg shadow-lg border border-t-0 border-border max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <Accordion type="multiple" className="w-full">
              {categorizedNavItems.map((category) => (
                <AccordionItem value={category.category} key={category.category}>
                   {/* Use theme variables for accordion trigger hover */}
                  <AccordionTrigger className="px-4 py-3 text-base font-medium hover:no-underline hover:bg-accent rounded-md">
                    {category.category}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1 pl-4 pr-2"> {/* Indent content slightly */}
                    <div className="flex flex-col space-y-1 mt-1">
                      {category.items.map((item) => renderNavLink(item, true))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* Render top-level items separately below the accordion - Use theme border */}
            <div className="flex flex-col space-y-1 pt-2 border-t border-border mt-2">
                {topLevelNavItems.map((item) => renderNavLink(item, true))}
            </div>
          </div>
        )}
      </div>
      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};
