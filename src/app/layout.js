import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://theleadershipmethod.co.uk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Leadership Method | Leadership Coaching & Workshops",
    template: "%s | The Leadership Method",
  },
  description: "Transform your leadership and organisational culture with evidence-based workshops and coaching. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
  authors: [{ name: "Priyanka Ayodele" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Leadership Method",
    description: "Workshops | Coaching | Organisational Development",
    siteName: "The Leadership Method",
    locale: "en_GB",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/Image-of-training-session.jpg",
        width: 1210,
        height: 1600,
        alt: "The Leadership Method — leadership training session",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Leadership Method | Leadership Coaching & Workshops",
    description: "Evidence-based leadership workshops and coaching. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
    images: [{ url: "/images/Image-of-training-session.jpg", alt: "Leadership training session facilitated by The Leadership Method" }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1816" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organisation`,
      name: "The Leadership Method",
      url: SITE_URL,
      email: "theleadershipmethod@gmail.com",
      description: "Evidence-based leadership workshops, coaching and organisational development.",
      sameAs: [
        "https://instagram.com/theleadershipmethod_",
        "https://www.linkedin.com/in/priyankaayodele/",
      ],
      areaServed: { "@type": "Country", name: "United Kingdom" },
      serviceType: ["Leadership Coaching", "Workplace Workshops", "Organisational Development"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        email: "theleadershipmethod@gmail.com",
        availableLanguage: "English",
      },
      founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/#priyanka`,
        name: "Priyanka Ayodele",
        jobTitle: "Founder",
        hasCredential: ["CMgr MCMI", "Assoc. CIPD"],
        worksFor: { "@id": `${SITE_URL}/#organisation` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leadership Workshops" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "1:1 Coaching" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Team Coaching" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organisational Support" } },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#priyanka`,
      name: "Priyanka Ayodele",
      jobTitle: "Founder",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "CMgr MCMI" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Assoc. CIPD" },
      ],
      knowsAbout: ["Leadership Development", "Organisational Psychology", "Management Coaching", "Workplace Culture"],
      worksFor: { "@id": `${SITE_URL}/#organisation` },
      sameAs: ["https://www.linkedin.com/in/priyankaayodele/"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "The Leadership Method | Leadership Coaching & Workshops",
      description: "Evidence-based leadership workshops, coaching and organisational development.",
      isPartOf: { "@id": `${SITE_URL}/#organisation` },
      about: { "@id": `${SITE_URL}/#organisation` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Image-of-training-session.jpg`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
