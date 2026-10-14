import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Impressum & Datenschutz sind auf "noindex" gesetzt und fehlen hier bewusst.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
