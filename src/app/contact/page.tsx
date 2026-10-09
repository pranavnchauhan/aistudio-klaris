import type { Metadata } from "next";
import { KLARIS_SITE_URL } from "@/lib/constants";
import { KRRISP_ORG_ID } from "@/lib/schema";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Klaris team for app access, support, or advisor partnership inquiries. Australian-built wealth-structure record software.",
  alternates: { canonical: "https://klaris.com.au/contact" },
  openGraph: {
    title: "Contact | Klaris",
    description:
      "Contact the Klaris team for app access, support, or advisor partnership inquiries. Australian-built wealth-structure record software.",
    url: "https://klaris.com.au/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Klaris",
    url: `${KLARIS_SITE_URL}/contact`,
    // The business you are contacting, referenced by @id rather than re-declared. Its
    // contactPoint already carries the support email, phone and address.
    mainEntity: { "@id": KRRISP_ORG_ID },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/<\/script>/gi, "<\\/script>") }}
      />
      <ContactClient />
    </main>
  );
}
