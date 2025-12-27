import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi! I'm Kasthuri's AI Assistant. I can answer questions about skills, projects, and how to get in touch. How can I help you today?",
    isBot: true,
  },
];

const botResponses: { [key: string]: string } = {
  skills: "Kasthuri specializes in Prompt Engineering, Machine Learning, NLP, Python Programming, Deep Learning, Model Fine-Tuning, AI Automation, and Data Analysis. These skills enable building intelligent AI solutions.",
  projects: "Kasthuri has worked on exciting projects including an AI Portfolio Website (the one you're viewing!) and an AI Chatbot Assistant. Both showcase expertise in modern web development and AI integration.",
  contact: "You can reach out through the Contact section on this page! Fill out the form with your name, email, and message. Kasthuri is open to internship opportunities, freelance work, and collaborations.",
  experience: "As an AI & Prompt Engineering Intern, Kasthuri focuses on crafting intelligent AI solutions, optimizing prompts for language models, and building real-world applications using machine learning.",
  about: "Kasthuri Eswar is a passionate AI and Prompt Engineering Intern dedicated to exploring the frontiers of artificial intelligence. The focus is on bridging complex AI capabilities with practical applications.",
  hello: "Hello! Great to meet you! I'm here to help you learn more about Kasthuri's work and skills. What would you like to know?",
  hi: "Hi there! How can I assist you today? Feel free to ask about skills, projects, or how to get in touch!",
  default: "I'd be happy to help! You can ask me about Kasthuri's skills, projects, experience, or how to get in touch. What would you like to know?",
};

const getResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('skill') || lowerInput.includes('expertise') || lowerInput.includes('know')) {
    return botResponses.skills;
  }
  if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
    return botResponses.projects;
  }
  if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('hire') || lowerInput.includes('email')) {
    return botResponses.contact;
  }
  if (lowerInput.includes('experience') || lowerInput.includes('intern') || lowerInput.includes('job')) {
    return botResponses.experience;
  }
  if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('kasthuri')) {
    return botResponses.about;
  }
  if (lowerInput.includes('hello') || lowerInput.includes('hey')) {
    return botResponses.hello;
  }
  if (lowerInput.includes('hi')) {
    return botResponses.hi;
  }
  
  return botResponses.default;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const botMessage: Message = {
      id: messages.length + 2,
      text: getResponse(input),
      isBot: true,
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl border border-border shadow-large overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="gradient-bg px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-primary-foreground">
                AI Assistant
              </h3>
              <p className="text-xs text-primary-foreground/80">Always here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-white/20 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.isBot ? '' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.isBot
                    ? 'gradient-bg'
                    : 'bg-secondary'
                }`}
              >
                {message.isBot ? (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <User className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  message.isBot
                    ? 'bg-card border border-border rounded-tl-sm'
                    : 'gradient-bg text-primary-foreground rounded-tr-sm'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground disabled:opacity-50 transition-opacity"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
