export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime?: string;
}

export interface Category {
  name: string;
  slug: string;
  url: string;
  description: string;
  postCount: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Fitness",
    slug: "fitness",
    url: "https://gearuptofit.com/fitness/",
    description: "Workout routines, HIIT training, and exercise science",
    postCount: "50+",
    icon: "💪",
  },
  {
    name: "Running",
    slug: "running",
    url: "https://gearuptofit.com/running/",
    description: "Shoe reviews, training plans, and running gear",
    postCount: "40+",
    icon: "🏃",
  },
  {
    name: "Nutrition",
    slug: "nutrition",
    url: "https://gearuptofit.com/nutrition/",
    description: "Science-backed diet guides, supplements, and meal planning",
    postCount: "35+",
    icon: "🥗",
  },
  {
    name: "Health",
    slug: "health",
    url: "https://gearuptofit.com/health/",
    description: "Wellness tips, recovery science, and health tools",
    postCount: "30+",
    icon: "❤️",
  },
  {
    name: "Weight Loss",
    slug: "weight-loss",
    url: "https://gearuptofit.com/weight-loss/",
    description: "Evidence-based fat loss strategies and transformation guides",
    postCount: "25+",
    icon: "⚡",
  },
  {
    name: "Reviews",
    slug: "review",
    url: "https://gearuptofit.com/review/",
    description: "In-depth gear reviews: smartwatches, headphones, and more",
    postCount: "45+",
    icon: "⭐",
  },
];

export const featuredPost: BlogPost = {
  title: "Hoka Speedgoat 7 Review: The GOAT Is Back & Better Than Ever",
  excerpt:
    "150+ miles tested on 8 different trail terrains — mud, rock, scree, wet granite, roots, gravel, sand, and fire roads. Is this the best trail running shoe of 2026?",
  url: "https://gearuptofit.com/running/hoka-speedgoat-7/",
  imageUrl:
    "https://gearuptofit.com/wp-content/uploads/2026/03/Hoka-Speedgoat-7-Review.webp",
  category: "Running",
  date: "March 11, 2026",
  readTime: "12 min read",
};

export const trendingPosts: BlogPost[] = [
  {
    title: "Best Running Sunglasses in 2026: Tested Picks for Road, Trail & Budget",
    excerpt:
      "Most running sunglasses fail in boring, predictable ways — they slide when you sweat, fog when you climb, pinch at the temples.",
    url: "https://gearuptofit.com/running/best-running-sunglasses/",
    imageUrl:
      "https://gearuptofit.com/wp-content/uploads/2026/03/Best-Running-Sunglasses-in-2026.webp",
    category: "Running",
    date: "March 10, 2026",
    readTime: "15 min read",
  },
  {
    title: "Creatine for Runners: The Complete, No-BS Guide to Smarter Supplementation",
    excerpt:
      "Start with a baseline, change one variable at a time, and evaluate outcomes over 7–14 days for best results.",
    url: "https://gearuptofit.com/running/creatine-for-runners/",
    imageUrl:
      "https://gearuptofit.com/wp-content/uploads/2026/03/Creatine-for-Runners.webp",
    category: "Running",
    date: "March 8, 2026",
    readTime: "10 min read",
  },
  {
    title: "Puma Deviate Nitro 4 Review: The Ultimate Super Trainer?",
    excerpt:
      "A deep dive into Puma's latest super trainer — carbon plate, NITRO foam, and race-day performance tested.",
    url: "https://gearuptofit.com/review/puma-deviate-nitro-4/",
    imageUrl:
      "https://gearuptofit.com/wp-content/uploads/2026/03/Puma-Deviate-Nitro-4-Review.webp",
    category: "Reviews",
    date: "March 7, 2026",
    readTime: "11 min read",
  },
  {
    title: "Adidas Adizero EVO SL EXO Review: The Definitive Buyer's Guide",
    excerpt:
      "Adidas pushes the envelope with the EVO SL EXO — lighter, faster, and more responsive than ever.",
    url: "https://gearuptofit.com/review/adidas-adizero-evo-sl-exo/",
    imageUrl:
      "https://gearuptofit.com/wp-content/uploads/2026/03/Adidas-Adizero-EVO-SL-EXO-Review.webp",
    category: "Reviews",
    date: "March 5, 2026",
    readTime: "9 min read",
  },
];

export const categoryPosts: Record<string, BlogPost[]> = {
  fitness: [
    {
      title: "Low-Impact Workout Routines: Your Complete Guide to Getting Fit Without Breaking Your Body",
      excerpt: "Perfect for beginners, injury recovery, or anyone who wants effective workouts that are gentle on joints.",
      url: "https://gearuptofit.com/fitness/low-impact-workout/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2025/11/Low-Impact-Workout-Routines-4.png",
      category: "Fitness",
      date: "Nov 25, 2025",
      readTime: "8 min read",
    },
    {
      title: "Boost VO2 Max: Unlock Peak Endurance & Performance",
      excerpt: "Understanding VO2 Max and its implications for endurance performance — the science explained.",
      url: "https://gearuptofit.com/fitness/vo2-max-for-endurance-performance/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2024/03/Understanding-VO2-Max-and-its-Implications-for-Endurance-Performance.webp",
      category: "Fitness",
      date: "Jan 8, 2025",
      readTime: "7 min read",
    },
    {
      title: "HIIT for Flexibility: 7 Surprising Benefits Revealed!",
      excerpt: "Discover how HIIT for flexibility can enhance your range of motion, reduce stiffness, and improve overall mobility.",
      url: "https://gearuptofit.com/fitness/hiit-for-flexibility/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2023/04/How-HIIT-Can-Improve-Flexibility-and-Mobility.jpg",
      category: "Fitness",
      date: "Apr 2023",
      readTime: "6 min read",
    },
  ],
  nutrition: [
    {
      title: "Why Water Fasting Is An Unhealthy Way To Lose Weight",
      excerpt: "Water fasting promises quick weight loss, but here's what nobody tells you about the 91% higher cardiovascular death risk.",
      url: "https://gearuptofit.com/nutrition/why-water-fasting-is-an-unhealthy-way-to-lose-weight-dangers/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2025/12/featured-86660-1766836887383.webp",
      category: "Nutrition",
      date: "Dec 26, 2025",
      readTime: "9 min read",
    },
    {
      title: "Glycogen Metabolism: Your Body's Energy Banking System Explained",
      excerpt: "Explore how your body stores and releases glucose through glycogen metabolism — the critical process fueling every workout.",
      url: "https://gearuptofit.com/nutrition/glycogen-metabolism/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2025/12/featured-86652-1766836949298.webp",
      category: "Nutrition",
      date: "Dec 26, 2025",
      readTime: "10 min read",
    },
  ],
  reviews: [
    {
      title: "Huawei Watch GT Runner 2 Review: Is It Accurate Enough for Serious Runners?",
      excerpt: "Battery, heart-rate reliability, GPS trade-offs, and a complete buying checklist.",
      url: "https://gearuptofit.com/review/huawei-watch-gt-runner-2/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2026/02/Huawei-Watch-GT-Runner-2-Review.webp",
      category: "Reviews",
      date: "Feb 2026",
      readTime: "14 min read",
    },
    {
      title: "Saucony Ride 19 Review: The Best Daily Trainer Under $150",
      excerpt: "Start with a baseline, change one variable at a time, and evaluate outcomes over 7–14 days.",
      url: "https://gearuptofit.com/review/saucony-ride-19/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2026/02/Saucony-Ride-19-Review.webp",
      category: "Reviews",
      date: "Feb 2026",
      readTime: "11 min read",
    },
    {
      title: "Amazfit GTR 3 Pro 2026 Review: Battery King Compared",
      excerpt: "Dive into the Amazfit GTR 3 Pro review and elevate your fitness tech knowledge.",
      url: "https://gearuptofit.com/review/smartwatch/amazfit-gtr-3-pro-review/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2021/12/Amazfit-GTR-3-Pro-Review-4.jpg",
      category: "Reviews",
      date: "Nov 2025",
      readTime: "10 min read",
    },
    {
      title: "Bose QC Earbuds 2026 Review: Best Noise Canceling",
      excerpt: "Discover the Bose QuietComfort Earbuds review — elevate your audio experience for workouts.",
      url: "https://gearuptofit.com/review/headphones/bose-quietcomfort-earbuds-review/",
      imageUrl: "https://gearuptofit.com/wp-content/uploads/2025/12/featured-44247-1766856719579.webp",
      category: "Reviews",
      date: "Nov 2025",
      readTime: "8 min read",
    },
  ],
};

export const toolLinks = [
  { name: "Fitness Calculators", url: "https://fitness-calculators.gearuptofit.com/", description: "BMI, TDEE, Body Fat & more" },
  { name: "Health Supplements Guide", url: "https://gearuptofit.com/health/supplements/", description: "Science-backed supplement picks" },
  { name: "Video Workouts", url: "https://gearuptofit.com/fitness/video-workout/", description: "Follow-along workout videos" },
];
