"use client"

import { memo, useMemo, type ComponentProps } from "react"
import { countryListEU, type CountryType } from "@/constants/shared/countries"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CountrySelectProps extends ComponentProps<typeof Select> {}

export const CountrySelect = memo(function CountrySelect(
  props: CountrySelectProps
) {
  const memoizedCountries = useMemo(
    (): CountryType[] => Object.values(countryListEU),
    []
  )

  return (
    <Select {...props}>
      <SelectTrigger size="xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {memoizedCountries?.map((country) => (
          <SelectItem key={country?.code} value={country?.code}>
            {country?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
})
