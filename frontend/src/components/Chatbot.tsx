import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area'; // Assuming ScrollArea is available
import { Bot, User, Send, X, Maximize2, Minimize2 } from 'lucide-react'; // Added Maximize2, Minimize2
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { API_URL, RECAPTCHA_SITE_KEY } from '@/constants'; // Import constants

// Declare grecaptcha for TypeScript - it's loaded globally via script tag
declare const grecaptcha: any;

// API Key is now handled by the backend proxy

interface Message {
  role: 'user' | 'assistant'; // System role might be handled backend-side if needed
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm QAGeekBot. How can I help you with QA today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false); // State for maximized view
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Keep track of messages sent to backend (optional, could simplify)
    // const currentMessages = [...messages, { role: 'user', content: userMessage }];

    try {
      // --- Get reCAPTCHA Token ---
      let recaptchaToken = '';
      if (typeof grecaptcha !== 'undefined' && RECAPTCHA_SITE_KEY) {
        try {
          recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'chat' });
          console.log("reCAPTCHA token obtained:", recaptchaToken); // For debugging
        } catch (recaptchaError) {
          console.error("reCAPTCHA execution error:", recaptchaError);
          setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, reCAPTCHA failed. Please try again." }]);
          setIsLoading(false);
          return; // Stop if reCAPTCHA fails
        }
      } else {
        console.warn("grecaptcha not loaded or site key missing. Skipping reCAPTCHA.");
        // Decide if you want to proceed without reCAPTCHA locally or show an error
        // For now, we'll proceed but log a warning. In production, ensure it's always loaded.
      }
      // --- End reCAPTCHA Token ---

      // Use the API_URL from constants
      const backendUrl = `${API_URL}routes/chat`; // Construct URL using the constant
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send message AND reCAPTCHA token
        body: JSON.stringify({
          message: userMessage,
          recaptcha_token: recaptchaToken // Send the token to backend
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend API Error Response:", errorText);
        throw new Error(`Backend API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Assuming backend returns { reply: "..." }
      const aiReply = data.reply || "Sorry, I couldn't get a response from the backend.";

      setMessages(prev => [...prev, { role: 'assistant', content: aiReply }]);

    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Slightly longer transition
          // Conditionally change position and size
          className={`fixed z-50 transition-all duration-300 ease-in-out ${
            isMaximized
              ? 'bottom-0 right-0 w-full h-full sm:bottom-4 sm:right-4 sm:w-[600px] sm:h-[80vh] rounded-none sm:rounded-lg' // Maximized styles (full screen on mobile, large on desktop)
              : 'bottom-4 right-4 w-80 h-[30rem] rounded-lg' // Minimized styles
          }`}
        >
          {/* Added dark:border-gray-700 */}
          <Card className={`shadow-xl flex flex-col border border-border dark:border-gray-700 bg-card w-full h-full ${isMaximized ? 'rounded-none sm:rounded-lg' : 'rounded-lg'}`}>
            {/* Added dark:bg-gray-800, dark:border-gray-700, dark:text-gray-200 */}
            <CardHeader className="flex flex-row items-center justify-between p-3 border-b dark:border-gray-700 bg-muted/40 dark:bg-gray-800 flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <Bot className="w-5 h-5 text-primary dark:text-blue-400" />
                <CardTitle className="text-lg font-semibold text-card-foreground dark:text-gray-200">QAGeekBot</CardTitle>
              </div>
              {/* Header Buttons Group - Added dark mode hover */}
              <div className="flex items-center gap-1">
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMaximized(!isMaximized)}
                   className="h-7 w-7 text-muted-foreground dark:text-gray-400 hover:bg-accent dark:hover:bg-gray-700"
                   aria-label={isMaximized ? "Minimize chat" : "Maximize chat"}
                 >
                   {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                 </Button>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={onClose}
                   className="h-7 w-7 text-muted-foreground dark:text-gray-400 hover:bg-accent dark:hover:bg-gray-700"
                   aria-label="Close chat"
                 >
                   <X className="w-4 h-4" />
                 </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-hidden">
              {/* Use ScrollArea if available, otherwise a simple div */}
              {/* Ensure ScrollArea is added via shadcn/ui if needed */}
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}> {/* Increased padding */}
                <div className="space-y-4"> {/* Increased spacing */}
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}
                    >
                      {/* Added dark mode icon color */}
                      {msg.role === 'assistant' && <Bot className="w-6 h-6 text-primary dark:text-blue-400 flex-shrink-0" />}
                      {/* Explicit dark mode styles for bubbles (using theme variables) */}
                      <div className={`rounded-xl px-3.5 py-2 text-sm max-w-[80%] shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground dark:bg-blue-600 dark:text-white' // User bubble dark
                          : 'bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-200' // Assistant bubble dark
                      }`}>
                        {/* Basic Markdown-like formatting for newlines */}
                        {msg.content.split('\n').map((line, i) => (
                          <span key={i}>{line}<br/></span>
                        ))}
                      </div>
                      {/* Added dark mode icon color */}
                      {msg.role === 'user' && <User className="w-6 h-6 text-muted-foreground dark:text-gray-500 flex-shrink-0" />}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2.5 justify-start">
                      <Bot className="w-6 h-6 text-primary dark:text-blue-400 flex-shrink-0" />
                      {/* Added dark mode styles for loading dots */}
                      <div className="rounded-xl px-3.5 py-2 text-sm bg-secondary dark:bg-gray-700 text-secondary-foreground dark:text-gray-400 flex items-center space-x-1.5">
                         {/* Simple dot animation */}
                         <span className="animate-pulse delay-0 duration-1000">.</span>
                         <span className="animate-pulse delay-150 duration-1000">.</span>
                         <span className="animate-pulse delay-300 duration-1000">.</span>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            {/* Added dark mode styles */}
            <CardFooter className="p-2 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
              <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                {/* Added dark mode styles */}
                <Input
                  type="text"
                  placeholder="Ask about QA..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-background dark:bg-gray-700 border-border dark:border-gray-600 text-foreground dark:text-gray-200 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:ring-primary dark:focus:ring-blue-500"
                  autoComplete="off"
                />
                {/* Added dark mode styles */}
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-primary dark:bg-blue-600 text-primary-foreground dark:text-white hover:bg-primary/90 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600">
                  <Send className="w-4 h-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
