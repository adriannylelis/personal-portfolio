import { Moon, Sun, Languages } from "lucide-react";
import { useAppStore } from "@/store/use-store";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function ThemeLanguageControls() {
  const { theme, language, toggleTheme, toggleLanguage } = useAppStore();

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all group"
        aria-label="Toggle Language"
      >
        <span className="font-mono font-bold text-xs group-hover:text-primary transition-colors">
          {language.toUpperCase()}
        </span>
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all group"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 group-hover:text-primary transition-colors" />
        ) : (
          <Moon className="w-4 h-4 group-hover:text-primary transition-colors" />
        )}
      </motion.button>
    </div>
  );
}
