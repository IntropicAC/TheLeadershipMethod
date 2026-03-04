const SITE_URL = "https://theleadershipmethod.co.uk";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: "2025-03-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
