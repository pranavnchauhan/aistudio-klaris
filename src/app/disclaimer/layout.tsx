import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about Klaris wealth-structure record software. No financial, tax, or legal advice provided.",
  alternates: {
    canonical: "https://klaris.com.au/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Klaris",
    description:
      "Important disclaimers about Klaris wealth-structure record software. No financial, tax, or legal advice provided.",
    url: "https://klaris.com.au/disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
