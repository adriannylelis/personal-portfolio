import { motion } from "framer-motion";
import { useAppStore } from "@/store/use-store";
import { translations } from "@/locales/translations";
import { SectionHeading } from "../SectionHeading";
import { 
  SiPython, SiNodedotjs, SiTypescript, SiNestjs, SiReact, SiFastapi,
  SiPostgresql, SiRedis, SiDocker, SiGooglecloud, SiApachekafka,
  SiLangchain, SiOpenai
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon: IconType;
  color: string;
}

export function TechStack() {
  const { language } = useAppStore();
  const t = translations[language].stack;

  const stackCategories: { title: string; items: TechItem[] }[] = [
    {
      title: t.categories.languages,
      items: [
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "Python", Icon: SiPython, color: "#3776AB" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
        { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
        { name: "React", Icon: SiReact, color: "#61DAFB" },
      ]
    },
    {
      title: t.categories.data,
      items: [
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
        { name: "Redis", Icon: SiRedis, color: "#DC382D" },
        { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
      ]
    },
    {
      title: t.categories.cloud,
      items: [
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "AWS", Icon: FaAws, color: "#FF9900" },
        { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
      ]
    },
    {
      title: t.categories.ai,
      items: [
        { name: "LangChain", Icon: SiLangchain, color: "#121212" },
        { name: "LLM Sys", Icon: SiOpenai, color: "#412991" },
      ]
    }
  ];

  return (
    <section id="stack" className="py-14 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.title} subtitle="tech_stack.json" alignment="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {stackCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass-card p-4 rounded-xl"
            >
              <h3 className="text-sm font-mono font-bold text-foreground mb-3 border-b border-border/50 pb-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                {category.items.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex flex-col items-center justify-center gap-1.5 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center text-xl text-muted-foreground group-hover:text-primary transition-all duration-300 shadow-sm">
                      <tech.Icon className="transition-all duration-300 filter grayscale group-hover:grayscale-0" style={{ color: tech.color }} />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
