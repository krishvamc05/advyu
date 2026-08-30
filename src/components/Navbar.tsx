import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquare, Moon, Sun } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Keep light theme as default if no preference is saved
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 items-center">
            <span className="text-2xl font-extrabold tracking-tight text-foreground">
              ADV<span className="text-primary">YU</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#why-advyu"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Why Advyu
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </a>
          <a
            href="#tour"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Product Tour
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Solutions
          </a>
          <a
            href="#faqs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            FAQs
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          
          <a
            href="https://engage.advyu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            WhatsApp Automation
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2 text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            Book Free Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile action buttons & toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-border bg-background px-6 py-6 md:hidden animate-fade-down">
          <div className="flex flex-col gap-4">
            <a
              href="#why-advyu"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Why Advyu
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Features
            </a>
            <a
              href="#tour"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Product Tour
            </a>
            <a
              href="#solutions"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Solutions
            </a>
            <a
              href="#faqs"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              FAQs
            </a>
            <hr className="border-border" />
            <a
              href="https://engage.advyu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 py-2.5 text-xs font-semibold text-primary"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              WhatsApp Automation
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-2.5 text-xs font-semibold text-primary-foreground shadow-md"
            >
              Book Free Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
