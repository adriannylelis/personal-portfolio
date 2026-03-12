import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/use-store";
import { translations } from "@/locales/translations";
import { SectionHeading } from "../SectionHeading";
import { useGithubRepos } from "@/hooks/use-github";
import { Github, ExternalLink, Star, Code2, FolderGit2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects() {
  const { language } = useAppStore();
  const t = translations[language].projects;
  const [activeTab, setActiveTab] = useState<"production" | "github">("production");
  
  const { data: repos, isLoading, isError } = useGithubRepos("adriannylelis");

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.title} subtitle="ls -la projects/" />

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary/50 p-1 rounded-lg border border-border/50">
            <button
              onClick={() => setActiveTab("production")}
              className={`px-6 py-2.5 rounded-md text-sm font-mono font-medium transition-all ${
                activeTab === "production" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {t.productionTab}
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`px-6 py-2.5 rounded-md text-sm font-mono font-medium transition-all ${
                activeTab === "github" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {t.githubTab}
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "production" && (
              <motion.div
                key="production"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {t.prodProjects.map((project, idx) => (
                  <div key={idx} className="glass-card flex flex-col p-6 rounded-xl group hover:border-primary/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-secondary/80 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "github" && (
              <motion.div
                key="github"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {isLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="glass-card p-6 rounded-xl h-48 flex flex-col space-y-4">
                        <Skeleton className="h-6 w-3/4 bg-muted" />
                        <Skeleton className="h-16 w-full bg-muted" />
                        <div className="mt-auto flex gap-2">
                          <Skeleton className="h-4 w-16 bg-muted" />
                          <Skeleton className="h-4 w-16 bg-muted" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {isError && (
                  <div className="text-center py-12 text-destructive border border-destructive/20 bg-destructive/5 rounded-xl">
                    <p>Failed to load GitHub repositories. Please try again later.</p>
                  </div>
                )}

                {!isLoading && !isError && repos && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.slice(0, 6).map((repo) => (
                      <a 
                        key={repo.id} 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card flex flex-col p-6 rounded-xl group hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <Code2 className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                          <div className="flex items-center gap-3 text-muted-foreground">
                            {repo.language && (
                              <span className="text-xs font-mono flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                                {repo.language}
                              </span>
                            )}
                            <span className="text-xs font-mono flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {repo.stargazers_count}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors truncate">
                          {repo.name}
                        </h3>
                        <p className="text-muted-foreground text-sm flex-grow line-clamp-3 mb-4">
                          {repo.description || "No description provided."}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
                
                {!isLoading && !isError && repos && (
                  <div className="mt-10 text-center">
                    <a 
                      href="https://github.com/adriannylelis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border"
                    >
                      <Github className="w-4 h-4" />
                      View All on GitHub
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
