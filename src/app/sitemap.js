const SITE_URL = "https://www.theleadershipmethod.co.uk";

export default function sitemap() {
  return [
    {
      url: SITE_URL + "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leadership-coaching`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/leadership-workshops`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/organisational-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: "2025-03-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Insight articles are added here once they contain enough content to be indexed.
    // Remove the noindex directive from each article page at the same time.
    // {
    //   url: `${SITE_URL}/insights/benefits-of-leadership-coaching`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.5,
    // },
    // {
    //   url: `${SITE_URL}/insights/how-to-improve-organisational-culture`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.5,
    // },
    // {
    //   url: `${SITE_URL}/insights/when-to-use-leadership-workshops-for-teams`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.5,
    // },
  ];
}
