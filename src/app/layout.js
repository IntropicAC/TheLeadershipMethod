import Script from "next/script";
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

// Preferred canonical origin — must match the final non-redirecting URL
const SITE_URL = "https://www.theleadershipmethod.co.uk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leadership Coaching & Workshops | The Leadership Method",
    template: "%s | The Leadership Method",
  },
  description:
    "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
  authors: [{ name: "Priyanka Ayodele" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Leadership Coaching & Workshops | The Leadership Method",
    description:
      "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
    siteName: "The Leadership Method",
    locale: "en_GB",
    type: "website",
    url: SITE_URL + "/",
    images: [
      {
        url: "/images/Image-of-training-session.jpg",
        width: 1210,
        height: 1600,
        alt: "The Leadership Method, leadership training session",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Coaching & Workshops | The Leadership Method",
    description:
      "Evidence-based leadership coaching, workshops and organisational development. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
    images: [
      {
        url: "/images/Image-of-training-session.jpg",
        alt: "Leadership training session facilitated by The Leadership Method",
      },
    ],
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
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL + "/",
      name: "The Leadership Method",
      description:
        "Evidence-based leadership coaching, workshops and organisational development.",
      publisher: { "@id": `${SITE_URL}/#organisation` },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organisation`,
      name: "The Leadership Method",
      url: SITE_URL + "/",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Logo.jpg`,
        width: 150,
        height: 150,
      },
      email: "theleadershipmethod@gmail.com",
      description:
        "Evidence-based leadership coaching, workshops and organisational development.",
      sameAs: [
        "https://instagram.com/theleadershipmethod_",
        "https://www.linkedin.com/in/priyankaayodele/",
      ],
      // TODO: Add Google Business Profile URL here once created:
      // "https://maps.google.com/?cid=YOUR_GBP_ID"
      areaServed: { "@type": "Country", name: "United Kingdom" },
      serviceType: [
        "Leadership Coaching",
        "Leadership Workshops",
        "Organisational Development",
        "Executive Coaching",
        "Workplace Culture",
      ],
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
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Leadership Workshops" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "1:1 Leadership Coaching" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Team Coaching" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Organisational Development Support",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#priyanka`,
      name: "Priyanka Ayodele",
      jobTitle: "Founder",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "CMgr MCMI",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Assoc. CIPD",
        },
      ],
      knowsAbout: [
        "Leadership Development",
        "Organisational Psychology",
        "Management Coaching",
        "Workplace Culture",
        "Organisational Development",
      ],
      worksFor: { "@id": `${SITE_URL}/#organisation` },
      sameAs: ["https://www.linkedin.com/in/priyankaayodele/"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL + "/",
      name: "Leadership Coaching & Workshops | The Leadership Method",
      description:
        "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organisation` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Image-of-training-session.jpg`,
      },
      inLanguage: "en-GB",
    },
  ],
};

// GA Measurement ID is set via NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
// Example: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}

        {/* Google Analytics 4 — only loaded when NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
