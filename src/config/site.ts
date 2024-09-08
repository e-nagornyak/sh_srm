import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Site Name",
  description: "descriptiong",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000",
}
