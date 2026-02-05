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

export const metadata = {
  title: "The Leadership Method | Leadership Coaching & Workshops",
  description: "Transform your leadership and organisational culture with evidence-based workshops and coaching. Founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
  keywords: ["leadership coaching", "workshops", "organisational development", "team coaching", "management training", "UK"],
  authors: [{ name: "Priyanka Ayodele" }],
  openGraph: {
    title: "The Leadership Method",
    description: "Workshops | Coaching | Organisational Development",
    siteName: "The Leadership Method",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
