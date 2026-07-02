import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cancellation policy for Klaris subscriptions and paid app access.",
  alternates: {
    canonical: "https://klaris.com.au/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Klaris",
    description:
      "Refund and cancellation policy for Klaris subscriptions and paid app access.",
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
