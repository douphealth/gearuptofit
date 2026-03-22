import { motion } from "framer-motion";
import { toolLinks } from "@/lib/blog-data";
import { Calculator, Dumbbell, Pill } from "lucide-react";

const icons = [Calculator, Pill, Dumbbell];

const ToolsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-display mb-3">
            Free Fitness Tools
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Interactive calculators and resources to fuel your progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {toolLinks.map((tool, i) => {
            const Icon = icons[i];
            return (
              <motion.a
                key={tool.url}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-card border border-border p-8 card-hover block rounded-sm overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-y-12 translate-x-12 group-hover:scale-[2] transition-transform duration-700" />
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-wide font-display mb-1 group-hover:text-primary transition-colors duration-200">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {tool.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
