import { motion } from "framer-motion";
import { trendingPosts } from "@/lib/blog-data";
import { Clock, TrendingUp } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const TrendingSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-display">
            Trending Now
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {trendingPosts.map((post, i) => (
            <motion.a
              key={post.url}
              variants={item}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 bg-card border border-border p-4 card-hover rounded-sm overflow-hidden"
            >
              <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-sm">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center min-w-0 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-display uppercase tracking-widest text-primary font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight font-display leading-tight mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed hidden md:block">
                  {post.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingSection;
