import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area'; // Assuming ScrollArea is available
import { Bot, User, Send, X, Maximize2, Minimize2 } from 'lucide-react'; // Added Maximize2, Minimize2
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

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
    const currentMessages = [...messages, { role: 'user', content: userMessage }];

    try {
      // --- Call to YOUR backend proxy endpoint via ngrok ---
      const backendUrl = 'https://85a7-2a01-9700-3fc6-4900-51a7-570-ff70-ca9b.ngrok-free.app/routes/chat'; // Updated ngrok URL
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send only the latest user message, or the history if your backend needs it
        body: JSON.stringify({ message: userMessage }),
        // Example if sending history:
        // body: JSON.stringify({ messages: currentMessages.slice(1) }), // Exclude initial greeting
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
          <Card className={`shadow-xl flex flex-col border border-border bg-card w-full h-full ${isMaximized ? 'rounded-none sm:rounded-lg' : 'rounded-lg'}`}> {/* Ensure card fills motion.div */}
            <CardHeader className="flex flex-row items-center justify-between p-3 border-b bg-muted/40 flex-shrink-0"> {/* Added flex-shrink-0 */}
              <div className="flex items-center gap-2 min-w-0"> {/* Added min-w-0 */}
                <Bot className="w-5 h-5 text-primary" /> {/* Icon color */}
                <CardTitle className="text-lg font-semibold text-card-foreground">QAGeekBot</CardTitle> {/* Adjusted text */}
              </div>
              {/* Header Buttons Group */}
              <div className="flex items-center gap-1">
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMaximized(!isMaximized)}
                   className="h-7 w-7 text-muted-foreground hover:bg-accent"
                   aria-label={isMaximized ? "Minimize chat" : "Maximize chat"}
                 >
                   {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                 </Button>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={onClose}
                   className="h-7 w-7 text-muted-foreground hover:bg-accent"
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
                      {msg.role === 'assistant' && <Bot className="w-6 h-6 text-primary flex-shrink-0" />} {/* Slightly larger icon */}
                      <div className={`rounded-xl px-3.5 py-2 text-sm max-w-[80%] shadow-sm ${ // Changed rounding, padding, added shadow
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground' // Use secondary for assistant
                      }`}>
                        {/* Basic Markdown-like formatting for newlines */}
                        {msg.content.split('\n').map((line, i) => (
                          <span key={i}>{line}<br/></span>
                        ))}
                      </div>
                      {msg.role === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0" />} {/* Slightly larger icon */}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2.5 justify-start">
                      <Bot className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="rounded-xl px-3.5 py-2 text-sm bg-secondary text-secondary-foreground flex items-center space-x-1.5">
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
            <CardFooter className="p-2 border-t">
              <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                <Input
                  type="text"
                  placeholder="Ask about QA..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1"
                  autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
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
