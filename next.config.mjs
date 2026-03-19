/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
  },
  async redirects() {
    const serviceRedirects = [
      "charpente-traditionelle",
      "charpente-industrielle",
      "extension-ou-maison-ossature",
      "preau",
      "carport",
      "terrasse",
      "amenagement-des-combles",
      "menuiserie-exterieure",
      "bardage",
      "solivage-porteur",
      "menuiserie-generale",
    ].map((slug) => ({
      source: `/${slug}`,
      destination: `/services/${slug}`,
      permanent: true,
    }));

    return serviceRedirects;
  },
};

export default nextConfig;
