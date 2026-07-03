import type { Metadata } from "next";
import BookDemoClient from "./book-demo-client";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Request a private Klaris walkthrough for Australian high-net-worth families, accountants, financial advisers, and family offices.",
  alternates: { canonical: "https://klaris.com.au/book-demo" },
  openGraph: {
    title: "Book a Demo | Klaris",
    description:
      "Request a private Klaris walkthrough for Australian high-net-worth families, accountants, financial advisers, and family offices.",
    url: "https://klaris.com.au/book-demo",
  },
};

export default function BookDemoPage() {
  return <BookDemoClient />;
}
