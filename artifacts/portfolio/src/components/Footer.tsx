import { Terminal } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-sm">
            © {year} Adrianny Lelis da Silva
          </span>
        </div>
        
        <div className="font-mono text-xs text-muted-foreground/60 flex gap-4">
          <span>Built with React & Vite</span>
          <span>•</span>
          <span>System Status: Online</span>
        </div>
      </div>
    </footer>
  );
}
