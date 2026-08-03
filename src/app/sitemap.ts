import { MetadataRoute } from "next";
import { KLARIS_SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/book-demo",
    "/faq",
    "/blog",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/cookie-policy",
    "/refund-policy",
    "/security",
    "/for-families",
    "/for-accountants",
    "/for-financial-advisors",
  ];

  return routes.map((route) => ({
    url: `${KLARIS_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/for-") ? 0.9 : 0.8,
  }));
}
