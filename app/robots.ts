export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://tetr.dev/sitemap.xml',
    host: 'https://tetr.dev',
  };
}
