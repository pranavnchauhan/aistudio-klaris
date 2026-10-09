import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KLARIS_EMAIL, KLARIS_SITE_URL } from "@/lib/constants";

import { KRRISP_ORG_ID } from "@/lib/schema";
export const metadata: Metadata = {
  title: "Data Security",
  description:
    "Klaris Data Security Policy. Privacy-led controls for sensitive Australian family wealth information and adviser collaboration.",
  alternates: {
    canonical: "https://klaris.com.au/security",
  },
  openGraph: {
    title: "Data Security | Klaris",
    description:
      "Klaris Data Security Policy. Privacy-led controls for sensitive Australian family wealth information and adviser collaboration.",
    url: "https://klaris.com.au/security",
  },
};

const sections = [
  { id: "about", label: "1. About This Policy" },
  { id: "data-storage", label: "2. Data Storage and Infrastructure" },
  { id: "protection", label: "3. Information Protection" },
  { id: "authentication", label: "4. Authentication and Access Control" },
  { id: "access-controls", label: "5. Access Controls and Permissions" },
  { id: "third-party", label: "6. Third-Party Security" },
  { id: "monitoring", label: "7. Security Monitoring and Incident Response" },
  { id: "user-responsibilities", label: "8. User Responsibilities" },
  { id: "privacy-act", label: "9. Privacy Act Alignment" },
  { id: "limitations", label: "10. Limitations" },
  { id: "changes", label: "11. Changes to This Policy" },
  { id: "contact", label: "12. Contact Information" },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Data Security Policy",
            description:
              "Klaris Data Security Policy. Privacy-led controls for sensitive Australian family wealth information and adviser collaboration.",
            url: `${KLARIS_SITE_URL}/security`,
            publisher: { "@id": KRRISP_ORG_ID },
            datePublished: "2024-12-16",
            dateModified: "2025-01-21",
            inLanguage: "en-AU",
          }),
        }}
      />

      <main className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Data Security Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: December 16, 2024 | Last Updated: January 21,
              2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <nav className="bg-secondary/30 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Table of Contents
              </h2>
              <ol className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-accent hover:text-primary hover:underline transition-colors"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* 1. About This Policy */}
            <section id="about" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. About This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                This Data Security Policy describes the security measures
                implemented by Krrisp Pty Ltd (ACN: 609 221 570), operator of
                Klaris (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), to
                protect information processed through our wealth-structure record
                software platform (&quot;Klaris&quot; or the
                &quot;Platform&quot;).
              </p>
              <p className="text-foreground/80 mb-4">
                This policy applies to all users of the Platform, including
                individual clients and financial advisors who access the
                Platform.
              </p>
              <p className="text-foreground/80">
                Our commitment is to protect your financial structure data with
                industry-standard security practices while maintaining
                transparency about how we safeguard your information.
              </p>
            </section>

            {/* 2. Data Storage and Infrastructure */}
            <section id="data-storage" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Data Storage and Infrastructure
              </h2>

              {/* Australian Data Residency Callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                  Australian Data Residency
                </h3>
                <p className="text-emerald-700">
                  Klaris is operated for Australian families and advisers. Our data-handling approach is designed around the privacy and confidentiality expectations that apply to sensitive family wealth records.
                </p>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Controlled Records
              </h3>
              <p className="text-foreground/80 mb-4">
                Klaris is designed to keep sensitive family wealth information
                organised, private, and available only to appropriate people.
                This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Families and advisers work from one clearer structure record.</li>
                <li>Access is intended to be granted only where there is a legitimate family, adviser, or support purpose.</li>
                <li>Operational access is limited to what is needed to provide, support, and protect the service.</li>
                <li>Data handling is guided by confidentiality, privacy, and Australian professional-services expectations.</li>
              </ul>
            </section>

            {/* 3. Encryption */}
            <section id="protection" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Information Protection
              </h2>

              <p className="text-foreground/80 mb-4">
                Klaris avoids publishing detailed security architecture on the
                public website. At a practical level, our approach focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  <strong>Secure connections</strong> - Protecting information as it moves between users and the Platform.
                </li>
                <li>
                  <strong>Access control</strong> - Limiting sensitive records to authorised users and legitimate service purposes.
                </li>
                <li>
                  <strong>Operational safeguards</strong> - Using internal controls, support procedures, and review practices to reduce unauthorised access risk.
                </li>
                <li>
                  <strong>Data minimisation</strong> - Avoiding unnecessary collection of highly sensitive information where it is not needed for the service.
                </li>
              </ul>
            </section>

            {/* 4. Authentication and Access Control */}
            <section id="authentication" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Account Access
              </h2>

              <p className="text-foreground/80 mb-4">
                Klaris accounts are intended for authorised users only. Access may
                be reviewed or configured during onboarding so that the right
                family members, advisers, or support contacts are involved.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Users should use strong, unique credentials.</li>
                <li>Access should not be shared with unauthorised people.</li>
                <li>Adviser access should be reviewed when professional relationships change.</li>
                <li>Suspected unauthorised access should be reported promptly.</li>
              </ul>
            </section>

            {/* 5. Access Controls and Permissions */}
            <section id="access-controls" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Access Controls and Permissions
              </h2>

              <p className="text-foreground/80 mb-4">
                Klaris is built around controlled collaboration. A high-net-worth
                family may need accountants, financial advisers, lawyers, and family
                office contacts to work from the same picture, but not every person
                should automatically see everything.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Families should decide which advisers need access to the structure record.</li>
                <li>Advisers should only use client information for legitimate professional purposes.</li>
                <li>Access should be reviewed as advisers, family roles, or structures change.</li>
                <li>Support access is intended to be limited to what is necessary to resolve a service issue.</li>
              </ul>
            </section>

            {/* 6. Third-Party Security */}
            <section id="third-party" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Third-Party Security
              </h2>
              <p className="text-foreground/80 mb-4">
                Klaris uses trusted service providers where needed for payments,
                communications, analytics, hosting, support, or security. We do
                not publish the full operational stack on the public website.
              </p>
              <p className="text-foreground/80">
                Where providers are used, our focus is to limit unnecessary data
                sharing and to keep sensitive family wealth records separate from
                routine payment, analytics, and communications activity unless
                disclosure is required for support, legal, or service reasons.
              </p>
            </section>

            {/* 7. Security Monitoring and Incident Response */}
            <section id="monitoring" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Security Monitoring and Incident Response
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Monitoring
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  We monitor for unusual access patterns and potential security
                  threats.
                </li>
                <li>
                  Failed login attempts are tracked and accounts may be
                  temporarily locked after repeated failures.
                </li>
                <li>
                  System logs are maintained for security audit purposes.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Incident Response
              </h3>
              <p className="text-foreground/80 mb-4">
                In the event of a security incident:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will investigate and contain the incident as quickly as
                  possible.
                </li>
                <li>
                  Affected users will be notified in accordance with the
                  Notifiable Data Breaches (NDB) scheme under the Privacy Act
                  1988.
                </li>
                <li>
                  We will notify the Office of the Australian Information
                  Commissioner (OAIC) if the breach is likely to result in
                  serious harm.
                </li>
                <li>
                  We will provide affected users with information about the
                  breach and recommended steps to protect their accounts.
                </li>
              </ul>
            </section>

            {/* 8. User Responsibilities */}
            <section id="user-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. User Responsibilities
              </h2>
              <p className="text-foreground/80 mb-4">
                While we implement robust security measures, account security is
                a shared responsibility. We recommend that all users:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Use strong, unique account credentials for your Klaris account.</li>
                <li>Use any additional account-security controls offered during onboarding.</li>
                <li>
                  Do not share your login credentials with anyone.
                </li>
                <li>
                  Sign out of your account when using shared or public devices.
                </li>
                <li>
                  Keep your email address up to date for security notifications.
                </li>
                <li>
                  Review advisor access permissions regularly and revoke access
                  that is no longer needed.
                </li>
                <li>
                  Report any suspected unauthorised access immediately to{" "}
                  <a
                    href={`mailto:${KLARIS_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_EMAIL}
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* 9. Privacy Act Alignment */}
            <section id="privacy-act" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                9. Privacy Act Alignment
              </h2>
              <p className="text-foreground/80 mb-4">
                Our security practices are designed to align with the Australian
                Privacy Principles (APPs) under the Privacy Act 1988 (Cth),
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  <strong>APP 11 (Security of Personal Information)</strong>{" "}
                  - We take reasonable steps to protect personal
                  information from misuse, interference, loss, and unauthorised
                  access, modification, or disclosure.
                </li>
                <li>
                  <strong>APP 8 (Cross-border Disclosure)</strong> -
                  Where account-level, payment, email, analytics, support, or operational metadata is processed by trusted providers, we use appropriate safeguards and contractual controls.
                </li>
                <li>
                  <strong>Notifiable Data Breaches Scheme</strong> - We
                  comply with the NDB scheme and will notify affected
                  individuals and the OAIC of eligible data breaches.
                </li>
              </ul>
            </section>

            {/* 10. Limitations */}
            <section id="limitations" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                10. Limitations
              </h2>
              <p className="text-foreground/80 mb-4">
                While we implement security measures, no
                system can guarantee absolute security. We cannot be held liable
                for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Unauthorised access resulting from user actions (e.g., sharing
                  shared credentials, weak account practices, compromised devices).
                </li>
                <li>
                  Security breaches at third-party providers despite their own
                  security certifications.
                </li>
                <li>
                  Force majeure events or circumstances beyond our reasonable
                  control.
                </li>
              </ul>
            </section>

            {/* 11. Changes to This Policy */}
            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update this Data Security Policy from time to time to
                reflect changes in our security practices, technology, or legal
                requirements. When we make material changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will update the &quot;Last Updated&quot; date at the top of
                  this policy.
                </li>
                <li>
                  For significant changes, we will notify users via email or an
                  in-app notification.
                </li>
                <li>
                  Continued use of the Platform after changes constitutes
                  acceptance of the updated policy.
                </li>
              </ul>
            </section>

            {/* 12. Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                12. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about our security practices or wish to
                report a security concern, please contact us:
              </p>
              <div className="bg-secondary/20 rounded-lg p-6">
                <p className="text-foreground/80 mb-1">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${KLARIS_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_EMAIL}
                  </a>
                </p>
                <p className="text-foreground/80 mb-1">
                  <strong>Entity:</strong> Krrisp Pty Ltd (ABN: 38 609 221 570 | ACN: 609 221 570)
                </p>
                <p className="text-foreground/80">
                  <strong>Website:</strong>{" "}
                  <a
                    href={KLARIS_SITE_URL}
                    className="text-accent hover:underline"
                  >
                    klaris.com.au
                  </a>
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Have Security Questions?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any concerns about data security or want to learn
                more about how we protect your information, get in touch with
                our team.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </section>

            {/* Legal Pages Navigation */}
            <nav className="border-t border-border pt-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Legal Pages
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/security"
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
                >
                  Data Security Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
