import { motion } from "framer-motion";
import { categories } from "@/lib/blog-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const CategoryPillars = () => {
  return (
    <section id="categories" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-3 font-display">
            Explore Every Angle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            Six core pillars covering everything from workout science to gear reviews.
            Tap into the topic that matches your goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.slug}
              variants={item}
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-t-2 border-t-primary border-border p-6 card-hover block overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-3xl mb-3 block">{cat.icon}</span>
              <h3 className="text-xl font-bold uppercase tracking-wide font-display mb-1 group-hover:text-primary transition-colors duration-200">
                {cat.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-3 leading-relaxed">
                {cat.description}
              </p>
              <span className="text-xs font-display uppercase tracking-widest text-primary">
                {cat.postCount} Articles →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryPillars;
