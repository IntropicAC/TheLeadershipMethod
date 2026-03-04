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

const SITE_URL = "https://theleadershipmethod.co.uk"; // TODO: update when domain is live

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Leadership Method | Leadership Coaching & Workshops",
    template: "%s | The Leadership Method",
  },
  description: "Transform your leadership and organisational culture with evidence-based workshops and coaching. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
  keywords: ["leadership coaching", "workshops", "organisational development", "team coaching", "management training", "UK"],
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
    images: [{ url: "/images/Logo.jpg", width: 600, height: 600, alt: "The Leadership Method" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Leadership Method | Leadership Coaching & Workshops",
    description: "Evidence-based leadership workshops and coaching. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
    images: ["/images/Logo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      sameAs: ["https://instagram.com/theleadershipmethod_"],
      founder: {
        "@type": "Person",
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
