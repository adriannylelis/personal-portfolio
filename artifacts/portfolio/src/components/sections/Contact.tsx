import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/use-store";
import { translations } from "@/locales/translations";
import { SectionHeading } from "../SectionHeading";
import { Mail, Copy, CheckCircle2, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { language } = useAppStore();
  const t = translations[language].contact;
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const email = "adrianny.lelis@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: t.copiedText,
      description: email,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <SectionHeading title={t.title} subtitle="ping adrianny" alignment="center" />
        
        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t.description}
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center max-w-2xl mx-auto"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 border border-primary/20">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">
            {t.emailBox}
          </h3>
          
          <div className="text-xl md:text-2xl font-bold text-foreground mb-4 break-all">
            {email}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:neon-glow-hover transition-all active:scale-95"
            >
              {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? t.copiedText : t.copyText}
            </button>
            
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-mono font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all active:scale-95"
            >
              <ArrowUpRight className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-8">
          <a 
            href="https://www.linkedin.com/in/adriannylelis/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-4 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="font-mono text-sm">{t.connectLinkedIn}</span>
          </a>
          
          <a 
            href="https://github.com/adriannylelis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-4 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
              <Github className="w-6 h-6" />
            </div>
            <span className="font-mono text-sm">{t.followGithub}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
