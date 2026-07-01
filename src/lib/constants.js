// Site content and configuration

// Preferred canonical origin - must match the final non-redirecting URL
export const SITE_URL = "https://www.theleadershipmethod.co.uk";

export const siteConfig = {
  name: "The Leadership Method",
  founder: "Priyanka Ayodele",
  credentials: "CMgr MCMI, Assoc. CIPD",
  email: "priyanka@theleadershipmethod.co.uk",
  phone: "07944810751",
  instagram: "https://instagram.com/theleadershipmethod_",
  instagramHandle: "@theleadershipmethod_",
  linkedin: "https://www.linkedin.com/in/priyankaayodele/",
  tagline: "Driving High-Performance Culture and Strategic Leadership",
};

export const aboutContent = {
  title: "Why Work With Me",
  description: `I founded The Leadership Method to bridge the gap between workforce data and team culture. My background in Psychology and my experience in organisational development shape how I work: I look beyond the surface to understand the behaviours that really drive, or block, performance.`,
  description2: `I don't believe in generic training. Every programme I design is evidence-based and built around your organisation's specific people, pressures, and goals.`,
  credentials: ["Psychology Degree", "CMgr MCMI", "Assoc. CIPD"],
};

export const whyStuckContent = {
  title: "Why Organisations Get Stuck",
  intro: "Most performance problems aren't a strategy problem. They're a leadership and culture problem.",
  items: [
    {
      title: "Misaligned leadership",
      description: "Leaders pulling in different directions, without a shared standard for how the organisation should be led.",
    },
    {
      title: "Culture that stalls change",
      description: "New strategies and values that never make it into everyday behaviour on the ground.",
    },
    {
      title: "Teams stuck in friction",
      description: "Unresolved tension between teams or individuals that quietly drains time, trust and performance.",
    },
    {
      title: "Change that doesn't stick",
      description: "Restructures and initiatives that create short-term disruption but no lasting improvement.",
    },
  ],
};

export const howIHelpContent = {
  title: "How I Help",
  intro: "Every organisation is different. My support is tailored to the people, challenges and goals in front of you.",
  exploreLabel: "Explore All Services",
  exploreHref: "/services",
  items: [
    {
      title: "Strategic Leadership",
      description: "Supporting leaders to lead with clarity and consistency, translating strategy into decisions and behaviour that hold up under pressure.",
    },
    {
      title: "Team Alignment",
      description: "Helping teams resolve friction, rebuild trust, and work towards a shared standard of performance and accountability.",
    },
    {
      title: "Organisational Change",
      description: "Guiding organisations through restructures, transitions and change programmes so they embed rather than stall.",
    },
    {
      title: "Culture & Behaviour",
      description: "Turning values into everyday behaviour, using evidence-based insight to understand what is really driving your culture.",
    },
    {
      title: "Workshops & Facilitation",
      description: "Designing and facilitating bespoke sessions that give leaders and teams the tools to apply new thinking immediately.",
    },
  ],
};

export const testimonialsContent = {
  title: "Testimonials",
  testimonials: [
    {
      quote: "Helped with team building, finding compassion, and building a statement of purpose for our team.",
      author: "Millie",
      role: "Ward Manager",
    },
    {
      quote: "An opportunity to come together and learn from each other's experience.",
      author: "Grace",
      role: "Hospital Ward Manager",
    },
    {
      quote: "An informative and supportive workshop that has strengthened an entire team.",
      author: "Lily",
      role: "",
    },
    {
      quote: "So informative, super fun and interactive, and the most interesting team-building day I have had.",
      author: "El",
      role: "",
    },
    {
      quote: "The workshop was useful, educative and informative.",
      author: "Debora",
      role: "",
    },
    {
      quote: "Very helpful and helped reconnect the team.",
      author: "Adeshola",
      role: "",
    },
  ],
};

export const faqContent = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What types of organisations do you work with?",
      answer: "We work with a wide range of organisations across sectors including healthcare, education, corporate, and the third sector. Our approach is tailored to your specific context, culture, and goals. There is no one-size-fits-all delivery.",
    },
    {
      question: "Are sessions delivered in person or online?",
      answer: "We offer both. In-person delivery is available across the UK, and online sessions are available for teams and individuals who prefer a remote format. Many clients opt for a blended approach.",
    },
    {
      question: "How long does a workshop typically last?",
      answer: "Workshop length varies depending on the topic and your team's needs. Most workshops run for a half day (3 to 4 hours) or a full day (6 to 7 hours). We can also design shorter focused sessions or multi-day programmes.",
    },
    {
      question: "Can you create a bespoke programme for our organisation?",
      answer: "Absolutely. All of our work begins with a conversation to understand your team, your challenges, and your goals. We then design content specifically around what your organisation needs, rather than delivering off-the-shelf material.",
    },
    {
      question: "How do I get started?",
      answer: "Simply get in touch via the contact form below or email us directly. We'll arrange an initial conversation to understand your needs and discuss how we can help.",
    },
  ],
};

export const contactContent = {
  title: "Get in Touch",
  subtitle: "Ready to transform your leadership and organisational culture? Let's start a conversation.",
  serviceOptions: [
    "Workshops",
    "1:1 Coaching",
    "Team Coaching",
    "Organisational Support",
    "General Enquiry",
  ],
};

export const navLinks = [
  { label: "Why Organisations Get Stuck", href: "#why-stuck" },
  { label: "How I Help", href: "#how-i-help" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Links shown in the nav "Services" dropdown
export const serviceDropdownLinks = [
  { label: "Leadership Coaching", href: "/leadership-coaching" },
  { label: "Leadership Workshops", href: "/leadership-workshops" },
  { label: "Organisational Development", href: "/organisational-development" },
];

// All page links used in the footer (broader set)
export const serviceLinks = [
  { label: "Leadership Coaching", href: "/leadership-coaching" },
  { label: "Leadership Workshops", href: "/leadership-workshops" },
  { label: "Organisational Development", href: "/organisational-development" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];
