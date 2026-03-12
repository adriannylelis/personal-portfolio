import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-6 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="font-mono text-sm text-primary tracking-wider uppercase mb-3 block">
            {`// ${subtitle}`}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          {title}
        </h2>
        <div className={`h-1 w-16 bg-primary mt-3 ${alignment === "center" ? "mx-auto" : ""}`}></div>
      </motion.div>
    </div>
  );
}
