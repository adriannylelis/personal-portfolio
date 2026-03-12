import { motion } from "framer-motion";
import { useAppStore } from "@/store/use-store";
import { translations } from "@/locales/translations";
import { SectionHeading } from "../SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

export function About() {
  const { language } = useAppStore();
  const t = translations[language].about;

  return (
    <section id="about" className="py-14 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.title} subtitle="whoami" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-muted-foreground leading-relaxed mb-4"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-4 rounded-xl"
            >
              <h3 className="text-base font-bold flex items-center gap-2 mb-3 text-foreground">
                <GraduationCap className="text-primary w-4 h-4" />
                {t.educationTitle}
              </h3>
              <div className="space-y-3">
                {t.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-border/50">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary/50"></div>
                    <h4 className="font-bold text-foreground text-sm">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <span className="text-xs font-mono text-primary mt-1 block">{edu.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-base font-bold flex items-center gap-2 mb-4 text-foreground">
              <Briefcase className="text-primary w-4 h-4" />
              Experience Workflow
            </h3>
            
            <div className="space-y-5">
              {t.timeline.map((job, idx) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Desktop timeline line */}
                  <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-border/50"></div>
                  
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border/50"></div>
                  
                  <div className="md:grid md:grid-cols-[8rem_1fr] md:gap-8 items-start relative">
                    {/* Timeline Node */}
                    <div className="absolute left-[-5px] md:left-[8.5rem] md:-translate-x-[4px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-primary shadow-[0_0_8px_rgba(6,182,212,0.8)] z-10"></div>
                    
                    <div className="hidden md:block text-right pt-0.5">
                      <span className="font-mono text-sm font-semibold text-primary">{job.period}</span>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="md:hidden mb-1">
                        <span className="font-mono text-xs font-semibold text-primary">{job.period}</span>
                      </div>
                      <h4 className="text-base font-bold text-foreground">{job.role}</h4>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{job.company}</p>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
