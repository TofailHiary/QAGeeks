import React, { useEffect } from "react"; // Import useEffect
import { RouterProvider, useNavigate } from "react-router-dom"; // Import useNavigate
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";

// Component to handle the redirect logic
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");
    if (redirectPath) {
      sessionStorage.removeItem("redirect"); // Clear the stored path
      // Use navigate to go to the stored path relative to the basename
      // The path stored includes the basename, so we need to remove it if router has basename
      const basename = router.basename || "/"; // Get basename or default to '/'
      const relativePath = redirectPath.startsWith(basename) 
        ? redirectPath.substring(basename.length -1) // Keep leading slash if basename is not just '/'
        : redirectPath;
      
      // Ensure relativePath starts with a slash if not empty
      const finalPath = relativePath === "" ? "/" : (relativePath.startsWith('/') ? relativePath : `/${relativePath}`);

      console.log(`Redirecting to: ${finalPath} (Original: ${redirectPath}, Basename: ${basename})`); // Debug log
      navigate(finalPath, { replace: true }); 
    }
  }, [navigate]); // Dependency array includes navigate

  return null; // This component doesn't render anything itself
};


export const AppWrapper = () => {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <React.Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
          {/* RouterProvider needs to be inside a component where useNavigate can be used, 
              or we need a separate component like RedirectHandler */}
          <RouterProvider router={router} /> 
          {/* We need to ensure RedirectHandler runs within the Router context. 
              A common pattern is to render it inside a Route or here if RouterProvider allows it.
              Let's try rendering it alongside RouterProvider first. If issues arise, 
              it might need to be rendered within a specific route component. */}
          {/* <RedirectHandler />  <-- This won't work here, needs to be inside Router context */}
          {/* A better approach: Render RedirectHandler within a layout component used by routes, 
              or modify router setup if possible. For now, let's assume a layout component exists 
              or modify the router setup slightly if needed. */}
          {/* Let's adjust the router setup slightly to include the handler */}
          {/* No, modifying router directly is complex. Let's assume a layout component wraps pages. */}
          {/* If no layout, we might need to wrap RouterProvider differently. */}
          {/* Let's try adding it to the root element render in main.tsx instead */}
          {/* No, that's also outside context. */}
          {/* The simplest way is often to have a root layout component. */}
          {/* Let's assume PageLayout is the root layout and add it there. */}
          {/* Reading PageLayout.tsx */}

        </React.Suspense>
        <Head />
      </ThemeProvider>
    </OuterErrorBoundary>
  );
};

// --- Alternative if no layout component ---
// We could potentially wrap RouterProvider in a component that provides the context
// and renders RedirectHandler, but that's more complex. Let's stick to modifying
// a layout component first. If PageLayout isn't the right place, we'll reconsider.
