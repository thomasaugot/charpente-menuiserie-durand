export default function robots() {
  const baseUrl = 'https://www.cmdurand.fr'
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Block everything in development/staging
  // if (!isProduction) {
  //   return {
  //     rules: {
  //       userAgent: '*',
  //       disallow: '/',
  //     },
  //     sitemap: `${baseUrl}/sitemap.xml`,
  //   }
  // }

  // Production rules
  return {
    rules: [
      // General rules for all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Block API endpoints
          '/admin/',         // Block admin areas
          '/private/',       // Block private content
        ],
        crawlDelay: 1,       // Be respectful to server
      },

      // Give Google special treatment (no crawl delay)
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}