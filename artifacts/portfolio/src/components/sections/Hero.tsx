import { motion } from "framer-motion";
import { useAppStore } from "@/store/use-store";
import { translations } from "@/locales/translations";
import { Github, Linkedin, ChevronDown } from "lucide-react";

export function Hero() {
  const { language } = useAppStore();
  const t = translations[language].hero;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Technical background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-primary font-medium tracking-wide mb-2 block">
                {`> ${t.greeting}`}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-2">
                Adrianny Lelis.
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-4 text-gradient">
                {t.title}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                {t.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                  className="px-8 py-4 rounded-md font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:neon-glow-hover transition-all active:scale-95"
                >
                  {t.viewProjects}
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-8 py-4 rounded-md font-mono font-semibold border border-primary text-primary hover:bg-primary/10 transition-all active:scale-95"
                >
                  {t.contactMe}
                </a>
                <div className="flex items-center gap-4 ml-2">
                  <a 
                    href="https://github.com/adriannylelis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/adriannylelis/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Adrianny Lelis" 
                className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full bg-card shadow-2xl neon-glow"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-muted-foreground hover:text-primary">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
