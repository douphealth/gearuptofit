import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Quiz", href: "/#quiz", internal: true },
  { label: "Fitness", to: "/fitness" },
  { label: "Running", to: "/running" },
  { label: "Nutrition", to: "/nutrition" },
  { label: "Reviews", to: "/reviews" },
  { label: "Calculators", to: "/calculators" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold uppercase tracking-tight"
        >
          Gear Up <span className="text-primary">To Fit</span>
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-2 text-xs font-display uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === item.to
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <a
          href="https://gearuptofit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary font-display text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97] rounded-sm hidden sm:inline-flex text-primary-foreground"
        >
          Visit Site
        </a>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
