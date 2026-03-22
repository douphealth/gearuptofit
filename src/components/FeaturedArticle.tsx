import { motion } from "framer-motion";
import { featuredPost } from "@/lib/blog-data";
import { ArrowRight, Clock } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-sm font-display uppercase tracking-widest text-primary mb-2 block">
            ⭐ Editor's Choice
          </span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-display">
            Featured Article
          </h2>
        </motion.div>

        <motion.a
          href={featuredPost.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group grid md:grid-cols-2 gap-0 bg-card border border-border overflow-hidden card-hover block rounded-sm"
        >
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary font-display text-xs uppercase tracking-widest font-semibold rounded-sm">
              {featuredPost.category}
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-body">
              <span>{featuredPost.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight font-display leading-[1.05] mb-4 group-hover:text-primary transition-colors duration-200">
              {featuredPost.title}
            </h3>

            <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-primary font-display uppercase tracking-wider text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              Read Full Review
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default FeaturedArticle;
