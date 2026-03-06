const SITE_URL = "https://www.theleadershipmethod.co.uk";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
