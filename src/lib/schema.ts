// Shared schema.org identity for the Klaris site.
//
// Two entities, deliberately separated:
//   Krrisp Digital = the Organization (the business). Its @id is its own canonical URL on
//                    its own domain, so its identity unifies across every site that
//                    references it instead of being re-invented per page.
//   Klaris         = the SoftwareApplication (the product). It points at Krrisp Digital
//                    through `publisher`, which is the correct way to say "made by".
//
// Rules this module exists to enforce:
//   1. Only the homepage declares the full nodes. Sub-pages reference them by @id.
//   2. Klaris is never declared as an Organization, and never claims the agency's profiles
//      as its own. That conflation is what stopped AI telling the two apart.
//   3. Klaris has no profile links yet. Its `sameAs` stays absent until real pages exist:
//      an earlier version pointed at linkedin.com/company/klaris-au and x.com/klaris_au,
//      both of which return 404, and a dead sameAs is worse than none.
import { KLARIS_EMAIL, KLARIS_PHONE_DISPLAY, KLARIS_SITE_URL } from "@/lib/constants";

export const KRRISP_ORG_ID = "https://krrispdigital.com.au/#organization";
export const KLARIS_SOFTWARE_ID = `${KLARIS_SITE_URL}/#software`;
export const KLARIS_WEBSITE_ID = `${KLARIS_SITE_URL}/#website`;

export const KRRISP_ORGANIZATION = {
  "@type": "Organization",
  "@id": KRRISP_ORG_ID,
  name: "Krrisp Digital",
  legalName: "Krrisp Pty Ltd",
  url: "https://krrispdigital.com.au",
  description:
    "Australian AI and digital studio. Krrisp Digital builds and operates its own software products and delivers AI, search and web services to clients.",
  sameAs: [
    "https://linkedin.com/company/krrispdigital",
    "https://instagram.com/krrispdigital",
    "https://x.com/krrispdigital",
    "https://www.wikidata.org/wiki/Q141662725",
  ],
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: "38 609 221 570" },
    { "@type": "PropertyValue", name: "ACN", value: "609 221 570" },
  ],
  founder: {
    "@type": "Person",
    name: "Pranav Chauhan",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/pranav-chauhan-au/",
    sameAs: "https://www.linkedin.com/in/pranav-chauhan-au/",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "441/14-16 Lexington Dr",
    addressLocality: "Bella Vista",
    addressRegion: "NSW",
    postalCode: "2153",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: KLARIS_EMAIL,
    telephone: KLARIS_PHONE_DISPLAY,
    areaServed: "AU",
    availableLanguage: "English",
  },
} as const;

export const KLARIS_SOFTWARE = {
  "@type": "SoftwareApplication",
  "@id": KLARIS_SOFTWARE_ID,
  name: "Klaris",
  alternateName: ["Klaris AI"],
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: KLARIS_SITE_URL,
  image: `${KLARIS_SITE_URL}/klaris-logo.webp`,
  description:
    "Finance visibility platform for documenting and visualizing complex ownership structures across properties, trusts, SMSFs, and investments. Designed for Australian families, accountants, and financial advisors.",
  featureList: [
    "Document ownership structures",
    "Visualize financial relationships",
    "Track trusts, SMSFs, and companies",
    "Adviser collaboration",
    "Linked document storage",
    "Approval-based account access",
    "Privacy-led information handling",
  ],
  // The product's maker, not its identity.
  publisher: { "@id": KRRISP_ORG_ID },
} as const;

/** Reference to the product, for pages that talk about Klaris itself. */
export const KLARIS_SOFTWARE_REF = { "@id": KLARIS_SOFTWARE_ID } as const;
