import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryPosts, categories } from "@/lib/blog-data";
import { Clock, ArrowRight } from "lucide-react";

const activeCats = [
  { key: "fitness", label: "Fitness", url: "https://gearuptofit.com/fitness/" },
  { key: "nutrition", label: "Nutrition", url: "https://gearuptofit.com/nutrition/" },
  { key: "reviews", label: "Reviews", url: "https://gearuptofit.com/review/" },
];

const DeepDiveSection = () => {
  const [activeTab, setActiveTab] = useState("fitness");

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-display mb-3">
            Deep Dive by Topic
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Hand-picked essential reads from our most popular categories.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
          {activeCats.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-6 py-3 font-display text-sm uppercase tracking-widest font-semibold transition-all duration-200 rounded-sm whitespace-nowrap active:scale-[0.97] ${
                activeTab === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {(categoryPosts[activeTab] || []).map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border overflow-hidden card-hover block rounded-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-display uppercase tracking-widest text-primary font-semibold">
                      {post.category}
                    </span>
                    {post.readTime && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight font-display leading-tight mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href={activeCats.find((c) => c.key === activeTab)?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-display uppercase tracking-wider text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            View All {activeCats.find((c) => c.key === activeTab)?.label} Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
