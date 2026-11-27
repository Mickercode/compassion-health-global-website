import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = ["/", "/about", "/our-work", "/the-plan", "/serve", "/partner", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route === "/" ? "" : route}` }));
}
