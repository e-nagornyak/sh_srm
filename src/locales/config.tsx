import { type ReactNode } from "react"

import { Flags } from "@/components/shared/Flags"

const LocalesEnum = {
  en: "en",
} as const

export const listOfLocales: {
  [key in ListOfLocalesKeys]: { key: string; name: string; flag: ReactNode }
} = {
  en: {
    key: "en",
    flag: <Flags.USA />,
    name: "English (US)",
  },
}

export type ListOfLocalesKeys = keyof typeof LocalesEnum
export const locales: ListOfLocalesKeys[] = ["en"]

export const localesMap = Object.entries(listOfLocales)
  .filter(([key]) => locales?.includes(key as ListOfLocalesKeys))
  .map(([, value]) => value)
