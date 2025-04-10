import React from "react";
import { RouterProvider } from "react-router-dom";
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";

export const AppWrapper = () => {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <React.Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
          <RouterProvider router={router} />
        </React.Suspense>
        <Head />
      </ThemeProvider>
    </OuterErrorBoundary>
  );
};
