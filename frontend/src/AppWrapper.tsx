import React, { useState, Suspense } from "react"; // Corrected: Import useState and Suspense from React
import { RouterProvider } from "react-router-dom"; // Corrected: Keep only one RouterProvider import
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";
import { HelmetProvider } from "react-helmet-async"; // ✅ NEW
import { Chatbot } from "./components/Chatbot"; // Import Chatbot
import { Button } from "@/components/ui/button"; // Import Button
import { MessageSquare } from "lucide-react"; // Import icon for toggle button

// RedirectHandler component moved to App.tsx

export const AppWrapper = () => {
  const [isChatOpen, setIsChatOpen] = useState(true); // Set initial state to true to open by default

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <HelmetProvider> {/* ✅ Wrap the whole app here */}
      <OuterErrorBoundary>
        <ThemeProvider defaultTheme={DEFAULT_THEME}>
          <React.Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
            <RouterProvider router={router} />
            {/* RedirectHandler removed, placed inside App.tsx */}
          </React.Suspense>
          <Head />

          {/* Chatbot Component & Toggle Button */}
          <Chatbot isOpen={isChatOpen} onClose={toggleChat} />
          {!isChatOpen && ( // Only show toggle button if chat is closed
            <Button
              variant="default" // Or choose another variant
              size="icon"
              className="fixed bottom-4 right-4 z-40 rounded-full w-14 h-14 shadow-lg" // Styling for FAB
              onClick={toggleChat}
              aria-label="Open Chat"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          )}
        </ThemeProvider>
      </OuterErrorBoundary>
    </HelmetProvider>
  );
};
