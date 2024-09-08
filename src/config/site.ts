import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Test-table",
  description: "descriptiong",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000",
}
