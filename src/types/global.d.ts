import type en from "../locales/en.json"

type Nullable<T> = T | null

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
