import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";
import { HelmetProvider } from "react-helmet-async"; // ✅ NEW

// Component to handle the redirect logic
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");
    if (redirectPath) {
      sessionStorage.removeItem("redirect");

      const basename = router.basename || "/";
      const relativePath = redirectPath.startsWith(basename)
        ? redirectPath.substring(basename.length - 1)
        : redirectPath;

      const finalPath =
        relativePath === ""
          ? "/"
          : relativePath.startsWith("/")
          ? relativePath
          : `/${relativePath}`;

      console.log(`Redirecting to: ${finalPath}`);
      navigate(finalPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

export const AppWrapper = () => {
  return (
    <HelmetProvider> {/* ✅ Wrap the whole app here */}
      <OuterErrorBoundary>
        <ThemeProvider defaultTheme={DEFAULT_THEME}>
          <React.Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
            <RouterProvider router={router} />
            {/* RedirectHandler should ideally go inside a route-level layout */}
          </React.Suspense>
          <Head />
        </ThemeProvider>
      </OuterErrorBoundary>
    </HelmetProvider>
  );
};
