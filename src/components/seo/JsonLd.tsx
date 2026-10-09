import { KLARIS_SITE_URL } from "@/lib/constants";
import { KRRISP_ORGANIZATION, KLARIS_SOFTWARE, KLARIS_WEBSITE_ID } from "@/lib/schema";

// The homepage is the only page that declares the full entity nodes. Every other page
// references them by @id, so the site speaks with one identity instead of re-inventing one
// per page. See src/lib/schema.ts for the separation rules.
export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      KRRISP_ORGANIZATION,
      KLARIS_SOFTWARE,
      {
        "@type": "WebSite",
        "@id": KLARIS_WEBSITE_ID,
        name: "Klaris",
        alternateName: ["Klaris AI"],
        url: KLARIS_SITE_URL,
        publisher: { "@id": KRRISP_ORGANIZATION["@id"] },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: KLARIS_SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${KLARIS_SITE_URL}/faq` },
          { "@type": "ListItem", position: 3, name: "Contact", item: `${KLARIS_SITE_URL}/contact` },
          { "@type": "ListItem", position: 4, name: "Security", item: `${KLARIS_SITE_URL}/security` },
          { "@type": "ListItem", position: 5, name: "Privacy Policy", item: `${KLARIS_SITE_URL}/privacy` },
          { "@type": "ListItem", position: 6, name: "Terms of Service", item: `${KLARIS_SITE_URL}/terms` },
          { "@type": "ListItem", position: 7, name: "For Accountants", item: `${KLARIS_SITE_URL}/for-accountants` },
          { "@type": "ListItem", position: 8, name: "For Financial Advisors", item: `${KLARIS_SITE_URL}/for-financial-advisors` },
          { "@type": "ListItem", position: 9, name: "For Families", item: `${KLARIS_SITE_URL}/for-families` },
          { "@type": "ListItem", position: 10, name: "Blog", item: `${KLARIS_SITE_URL}/blog` },
        ],
      },
      {
        "@type": "VideoObject",
        name: "Why Klaris? Wealth Structuring Software for High-Net-Worth Australian Families",
        description:
          "Discover why high-net-worth Australian families, accountants, and financial advisors choose Klaris to bring clarity to complex wealth structures. Klaris maps Family Trusts, SMSFs, companies, and investments in one secure platform, giving you full visibility of your financial legacy and peace of mind for the next generation.",
        thumbnailUrl: `${KLARIS_SITE_URL}/images/klaris-video-thumbnail.jpg`,
        uploadDate: "2026-02-01",
        duration: "PT1M30S",
        embedUrl: "https://www.youtube.com/embed/iF6_-tx2RgI",
        url: "https://youtu.be/iF6_-tx2RgI",
        contentUrl: "https://youtu.be/iF6_-tx2RgI",
        keywords:
          "why Klaris, wealth structuring software, high net worth families Australia, family trust software, SMSF structure visualizer, financial legacy planning",
        publisher: { "@id": KRRISP_ORGANIZATION["@id"] },
        inLanguage: "en-AU",
        isPartOf: { "@id": KLARIS_WEBSITE_ID },
      },
      {
        "@type": "HowTo",
        name: "How to Get Started with Klaris",
        description:
          "A simple three-step process for Australian families and their advisers to bring complex wealth structures into one clear view with Klaris.",
        totalTime: "PT10M",
        tool: [
          { "@type": "HowToTool", name: "Web browser" },
          { "@type": "HowToTool", name: "Email account" },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Book a Demo",
            text: "Schedule a personalised demo with our team to see Klaris in action and find the right approach for your family or firm.",
            url: `${KLARIS_SITE_URL}/book-demo`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Get Set Up",
            text: "We confirm the right access and onboarding approach for your family, advisers, or firm before you start.",
            url: "https://app.klaris.com.au",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Map Your Wealth",
            text: "Build one clear picture of how your trusts, companies, SMSFs, properties, loans, and documents connect, ready for review, succession, and family decisions.",
            url: "https://app.klaris.com.au",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/<\/script>/gi, "<\\/script>") }}
    />
  );
}
