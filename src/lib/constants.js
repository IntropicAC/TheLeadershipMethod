// Site content and configuration

// Preferred canonical origin - must match the final non-redirecting URL
export const SITE_URL = "https://www.theleadershipmethod.co.uk";

export const siteConfig = {
  name: "The Leadership Method",
  founder: "Priyanka Ayodele",
  credentials: "CMgr MCMI, Assoc. CIPD",
  email: "theleadershipmethod@gmail.com",
  instagram: "https://instagram.com/theleadershipmethod_",
  instagramHandle: "@theleadershipmethod_",
  linkedin: "https://www.linkedin.com/in/priyankaayodele/",
  tagline: "Driving High-Performance Culture and Strategic Leadership",
};

export const aboutContent = {
  title: "About Us",
  description: `Founded by Priyanka Ayodele (BSc, CMgr MCMI, Assoc CIPD). I specialise in Organisational Development that focuses on the behaviours that drive, or block performance. By combining my background in Psychology with OD experience in high-pressure environments, I provide evidence-based solutions that reduce hidden costs, boost retention, and improve performance.`,
  description2: `I founded The Leadership Method to bridge the gap between workforce data and team culture. I provide your leaders with the strategic tools and confidence needed to turn performance strategy into high-value outcomes.`,
};

export const whyChooseUsContent = {
  title: "Why Choose Us?",
  items: [
    {
      title: "Targeted Solutions",
      description: "We align every session with your specific workforce data and strategic KPIs to ensure the content addresses and solves your business challenges.",
      icon: "Target",
    },
    {
      title: "Sustainable Performance - ROI",
      description: "We bridge the gap between management and frontline teams to ensure change isn't just a one-day event. We focus on long-term retention and reducing the hidden costs of misaligned leadership.",
      icon: "TrendingUp",
    },
    {
      title: "Evidence-based Insight",
      description: "We apply psychological insights and proven OD frameworks to understand team dynamics, drive motivation, and build a resilient, high-performance culture.",
      icon: "Brain",
    },
  ],
};

export const servicesContent = {
  title: "Services",
  services: [
    {
      title: "Workshops",
      icon: "Users",
      items: [
        "Culture Alignment and Values - Turning values into everyday behaviours that drive accountability and performance",
        "Strategic Leadership in Practice - Equipping managers to lead effectively in high-pressure environments",
      ],
    },
    {
      title: "Coaching",
      icon: "MessageCircle",
      items: [
        "1:1 Leadership Coaching - Focused on navigating change and leading difficult conversations",
        "Team Coaching - Resolving friction and aligning leadership teams to deliver as one",
      ],
    },
    {
      title: "Organisational Support",
      icon: "Building2",
      items: [
        "6-12 Month Culture Packages - Combining diagnostics and coaching to embed long-term change",
        "Diagnostics and Design - Using workforce data to identify barriers and redesign performance systems",
      ],
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
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
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
