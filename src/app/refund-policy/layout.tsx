import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cancellation policy for paid Klaris access arrangements.",
  alternates: {
    canonical: "https://klaris.com.au/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Klaris",
    description:
      "Refund and cancellation policy for paid Klaris access arrangements.",
    url: "https://klaris.com.au/refund-policy",
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
