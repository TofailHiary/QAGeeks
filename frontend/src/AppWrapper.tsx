import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";
import { HelmetProvider } from "react-helmet-async"; // ✅ NEW

// RedirectHandler component moved to App.tsx

export const AppWrapper = () => {
  return (
    <HelmetProvider> {/* ✅ Wrap the whole app here */}
      <OuterErrorBoundary>
        <ThemeProvider defaultTheme={DEFAULT_THEME}>
          <React.Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
            <RouterProvider router={router} />
            {/* RedirectHandler removed, will be placed inside App.tsx */}
          </React.Suspense>
          <Head />
        </ThemeProvider>
      </OuterErrorBoundary>
    </HelmetProvider>
  );
};
