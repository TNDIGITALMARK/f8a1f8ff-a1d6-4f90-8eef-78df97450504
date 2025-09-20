export interface CowFact {
  id: string;
  category: string;
  title: string;
  description: string;
  funLevel: 1 | 2 | 3; // 1 = interesting, 2 = surprising, 3 = amazing
  icon: string;
}

export const cowFacts: CowFact[] = [
  // Anatomy & Physiology
  {
    id: "four-stomachs",
    category: "Anatomy",
    title: "Cows Have Four Stomach Compartments",
    description: "Unlike humans, cows are ruminants with four stomach compartments: the rumen, reticulum, omasum, and abomasum. This complex system helps them digest grass and other plant materials efficiently.",
    funLevel: 2,
    icon: "🥩"
  },
  {
    id: "360-vision",
    category: "Anatomy",
    title: "Nearly 360-Degree Vision",
    description: "Cows can see almost 360 degrees around them due to the placement of their eyes on the sides of their heads. They have only a small blind spot directly behind them.",
    funLevel: 2,
    icon: "👁️"
  },
  {
    id: "sweat-through-nose",
    category: "Anatomy",
    title: "Cows Sweat Through Their Noses",
    description: "Unlike humans who sweat all over their bodies, cows primarily regulate their temperature by sweating through their noses and panting.",
    funLevel: 3,
    icon: "👃"
  },
  {
    id: "heart-beats",
    category: "Anatomy",
    title: "Heart Beats 60-70 Times Per Minute",
    description: "A cow's heart is similar to a human's in beat frequency, pumping about 60-70 times per minute, but it's much larger to support their body size.",
    funLevel: 1,
    icon: "💓"
  },
  {
    id: "tongue-length",
    category: "Anatomy",
    title: "20-Inch Tongues",
    description: "A cow's tongue can be up to 20 inches (50 cm) long! They use these powerful, rough tongues to grasp grass and pull it into their mouths.",
    funLevel: 2,
    icon: "👅"
  },

  // Behavior & Intelligence
  {
    id: "best-friends",
    category: "Behavior",
    title: "Cows Have Best Friends",
    description: "Cows form close friendships and can become stressed when separated from their best friends. They show affection by licking each other and standing close together.",
    funLevel: 3,
    icon: "💕"
  },
  {
    id: "recognize-faces",
    category: "Behavior",
    title: "They Recognize Human Faces",
    description: "Cows can remember and recognize up to 100 different human faces. They often show preferences for certain people and can remember positive or negative experiences.",
    funLevel: 3,
    icon: "😊"
  },
  {
    id: "problem-solving",
    category: "Behavior",
    title: "Excellent Problem Solvers",
    description: "Cows are intelligent animals that can solve problems, learn routines, and even figure out how to open gates and latches.",
    funLevel: 2,
    icon: "🧠"
  },
  {
    id: "emotions",
    category: "Behavior",
    title: "Cows Experience Emotions",
    description: "Research shows that cows experience a wide range of emotions including joy, fear, anxiety, and even optimism or pessimism about the future.",
    funLevel: 2,
    icon: "😢"
  },
  {
    id: "sleep-standing",
    category: "Behavior",
    title: "They Sleep Standing Up",
    description: "Cows can doze while standing but need to lie down for deep REM sleep. They typically sleep 3-4 hours per day in short intervals.",
    funLevel: 1,
    icon: "😴"
  },

  // Milk & Production
  {
    id: "milk-gallons",
    category: "Production",
    title: "7-8 Gallons of Milk Daily",
    description: "A typical dairy cow produces about 6-7 gallons (25-30 liters) of milk per day, which is enough for about 128 glasses of milk!",
    funLevel: 2,
    icon: "🥛"
  },
  {
    id: "milk-lifetime",
    category: "Production",
    title: "200,000 Glasses in a Lifetime",
    description: "Over her lifetime, a single dairy cow can produce enough milk for over 200,000 glasses of milk - that's about 9,000 gallons total!",
    funLevel: 3,
    icon: "🐄"
  },
  {
    id: "cheese-from-milk",
    category: "Production",
    title: "10 Pounds of Milk = 1 Pound of Cheese",
    description: "It takes approximately 10 pounds of milk to make 1 pound of cheese, which explains why cheese is so nutritionally dense.",
    funLevel: 1,
    icon: "🧀"
  },
  {
    id: "milking-routine",
    category: "Production",
    title: "Cows Love Routine",
    description: "Dairy cows thrive on routine and prefer to be milked at the same times each day. Disrupting their schedule can actually reduce milk production.",
    funLevel: 2,
    icon: "⏰"
  },

  // History & Culture
  {
    id: "sacred-in-india",
    category: "Culture",
    title: "Sacred Animals in Hinduism",
    description: "Cows are considered sacred in Hinduism and are protected by law in many Indian states. They represent gentleness, generosity, and motherhood.",
    funLevel: 1,
    icon: "🕉️"
  },
  {
    id: "first-domesticated",
    category: "History",
    title: "Domesticated 8,000 Years Ago",
    description: "Cattle were first domesticated around 8,000-10,000 years ago in the Middle East, making them one of humanity's oldest agricultural partners.",
    funLevel: 1,
    icon: "🏛️"
  },
  {
    id: "cowboy-culture",
    category: "Culture",
    title: "Created Cowboy Culture",
    description: "The need to manage large cattle herds in the American West gave birth to cowboy culture, influencing music, fashion, and movies worldwide.",
    funLevel: 1,
    icon: "🤠"
  },

  // Environment & Diet
  {
    id: "grass-per-day",
    category: "Diet",
    title: "40 Pounds of Grass Daily",
    description: "A cow can eat up to 40 pounds (18 kg) of grass and forage per day, spending 6-8 hours just grazing and another 8 hours chewing cud.",
    funLevel: 2,
    icon: "🌱"
  },
  {
    id: "water-consumption",
    category: "Diet",
    title: "30-50 Gallons of Water Daily",
    description: "Cows need 30-50 gallons of water per day, with dairy cows requiring even more during peak milk production periods.",
    funLevel: 2,
    icon: "💧"
  },
  {
    id: "methane-production",
    category: "Environment",
    title: "Natural Methane Producers",
    description: "Cows produce methane as part of their natural digestion process. Scientists are working on ways to reduce this to help combat climate change.",
    funLevel: 1,
    icon: "🌍"
  },
  {
    id: "fertilizer-production",
    category: "Environment",
    title: "65 Pounds of Manure Daily",
    description: "A single cow produces about 65 pounds of manure per day, which makes excellent fertilizer for crops and gardens when properly composted.",
    funLevel: 2,
    icon: "🌻"
  },

  // Physical Characteristics
  {
    id: "color-blindness",
    category: "Physical",
    title: "Cows Are Red-Green Colorblind",
    description: "Contrary to popular belief about bulls and red flags, cows cannot distinguish between red and green colors. They see the world in shades of blue and yellow.",
    funLevel: 3,
    icon: "🎨"
  },
  {
    id: "temperature-range",
    category: "Physical",
    title: "Comfortable at 32-75°F",
    description: "Cows are most comfortable in temperatures between 32-75°F (0-24°C). They can handle cold better than heat due to their thick skin and hair.",
    funLevel: 1,
    icon: "🌡️"
  },
  {
    id: "hoof-prints",
    category: "Physical",
    title: "Unique Hoof Prints",
    description: "Like human fingerprints, each cow has unique hoof prints that can be used for identification purposes on farms.",
    funLevel: 2,
    icon: "🐾"
  },
  {
    id: "lifespan",
    category: "Physical",
    title: "20-Year Lifespan",
    description: "With proper care, cows can live 18-25 years, though dairy cows typically have productive lives of 4-6 years in commercial operations.",
    funLevel: 1,
    icon: "🎂"
  },

  // Fun & Unusual Facts
  {
    id: "musical-milk",
    category: "Fun",
    title: "Music Increases Milk Production",
    description: "Studies show that cows produce more milk when listening to music, particularly slower tempo songs. Some farmers play classical music in their barns!",
    funLevel: 3,
    icon: "🎵"
  },
  {
    id: "climbing-stairs",
    category: "Fun",
    title: "Can Go Up Stairs, Not Down",
    description: "Due to their body structure and weight distribution, cows can walk up stairs but have great difficulty walking down them safely.",
    funLevel: 3,
    icon: "🪜"
  },
  {
    id: "magnetic-compass",
    category: "Fun",
    title: "Natural Magnetic Compass",
    description: "Cows naturally align themselves along magnetic field lines when grazing or resting, typically facing north-south direction.",
    funLevel: 3,
    icon: "🧭"
  },
  {
    id: "dreams",
    category: "Fun",
    title: "Cows Can Dream",
    description: "Like humans, cows experience REM sleep and can dream. They might dream about their daily activities like grazing or socializing.",
    funLevel: 2,
    icon: "💭"
  },
  {
    id: "swimming",
    category: "Fun",
    title: "Cows Are Good Swimmers",
    description: "Despite their size, cows are natural swimmers and can swim across rivers and lakes when necessary. They use a doggy paddle motion.",
    funLevel: 3,
    icon: "🏊"
  },

  // Economics & Numbers
  {
    id: "world-population",
    category: "Numbers",
    title: "1 Billion Cows Worldwide",
    description: "There are approximately 1 billion cattle in the world, with India having the largest population, followed by Brazil and China.",
    funLevel: 1,
    icon: "🌐"
  },
  {
    id: "us-dairy-farms",
    category: "Numbers",
    title: "9.3 Million Dairy Cows in US",
    description: "The United States has about 9.3 million dairy cows producing over 200 billion pounds of milk annually across 40,000+ dairy farms.",
    funLevel: 1,
    icon: "🇺🇸"
  },
  {
    id: "breeds-worldwide",
    category: "Numbers",
    title: "Over 800 Cattle Breeds",
    description: "There are more than 800 recognized cattle breeds worldwide, each adapted to different climates, purposes, and regional needs.",
    funLevel: 2,
    icon: "📊"
  },

  // Health & Nutrition
  {
    id: "vitamin-d-milk",
    category: "Nutrition",
    title: "Vitamin D Fortification",
    description: "Most commercial milk is fortified with Vitamin D because cow's milk naturally contains only small amounts of this essential nutrient.",
    funLevel: 1,
    icon: "☀️"
  },
  {
    id: "calcium-source",
    category: "Nutrition",
    title: "300mg Calcium Per Glass",
    description: "One 8-ounce glass of milk provides about 300mg of calcium, which is roughly 30% of the daily requirement for most adults.",
    funLevel: 1,
    icon: "🦴"
  },
  {
    id: "lactose-free",
    category: "Nutrition",
    title: "Lactose-Free Milk Process",
    description: "Lactose-free milk is made by adding the enzyme lactase to regular milk, which breaks down lactose into simpler, easier-to-digest sugars.",
    funLevel: 2,
    icon: "🔬"
  },

  // Technology & Innovation
  {
    id: "robotic-milking",
    category: "Technology",
    title: "Robot Milking Systems",
    description: "Modern farms use robotic milking systems that can milk cows automatically 24/7, identifying each cow by a chip and customizing the process.",
    funLevel: 2,
    icon: "🤖"
  },
  {
    id: "fitness-trackers",
    category: "Technology",
    title: "Cow Fitness Trackers",
    description: "Many modern dairy farms use fitness trackers on cows to monitor their health, activity levels, and even predict when they'll give birth!",
    funLevel: 3,
    icon: "⌚"
  },
  {
    id: "ai-monitoring",
    category: "Technology",
    title: "AI Health Monitoring",
    description: "Artificial intelligence is now used to monitor cow behavior and health through cameras and sensors, detecting illness before symptoms appear.",
    funLevel: 2,
    icon: "📱"
  }
];

export const getFactsByCategory = (category: string): CowFact[] => {
  return cowFacts.filter(fact => fact.category.toLowerCase() === category.toLowerCase());
};

export const getFactsByFunLevel = (level: 1 | 2 | 3): CowFact[] => {
  return cowFacts.filter(fact => fact.funLevel === level);
};

export const getRandomFacts = (count: number): CowFact[] => {
  const shuffled = [...cowFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const factCategories = [
  "Anatomy",
  "Behavior",
  "Production",
  "Culture",
  "History",
  "Diet",
  "Environment",
  "Physical",
  "Fun",
  "Numbers",
  "Nutrition",
  "Technology"
];