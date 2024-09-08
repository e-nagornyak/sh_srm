"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  listOfLocales,
  localesMap,
  type ListOfLocalesKeys,
} from "@/locales/config"
import { DashIcon } from "@radix-ui/react-icons"
import { useLocale } from "next-intl"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const locale = useLocale() as ListOfLocalesKeys
  const currentLocale = listOfLocales?.[locale]

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button disabled={isPending} variant="ghost">
          <span className="sr-only">Toggle language</span>
          {currentLocale?.flag}
          {currentLocale?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {localesMap?.map(({ key, name, flag }) => (
          <DropdownMenuItem onClick={() => onSelectChange(key)}>
            {flag && <DashIcon className="mr-2 size-4" />}
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
