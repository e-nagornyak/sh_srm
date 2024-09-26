"use client"

import { memo, useMemo } from "react"
import { countryList, type CountryType } from "@/constants/shared/countries"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CountrySelectProps {
  defaultCountCode?: string
  onSelectCounty?: (countryCode: string) => void
}

export const CountrySelect = memo(function CountrySelect({
  defaultCountCode,
  onSelectCounty,
}: CountrySelectProps) {
  const memoizedCountries = useMemo(
    (): CountryType[] => Object.values(countryList),
    []
  )

  return (
    <Select onValueChange={onSelectCounty} defaultValue={defaultCountCode}>
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
