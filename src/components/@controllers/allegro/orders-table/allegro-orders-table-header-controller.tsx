"use client"

// FilterPanel.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Title } from "@/components/ui/title"

interface AllegroOrdersTableHeaderControllerProps {}

export function AllegroOrdersTableHeaderController(
  props: AllegroOrdersTableHeaderControllerProps
) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  // const search = AllegroOrdersSearchParamsSchema.parse(
  //   Object.fromEntries(searchParams)
  // )
  //
  // const [filters, setFilters] = useState<Partial<FilterParams>>(search)

  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between">
        <Title leading="none" weight="semibold" size="md">
          All orders
        </Title>
        <Button variant="outline">
          <Filter size="17" />
          Filter
        </Button>
      </CardContent>
      <CardFooter>{/*<FilterPanel />*/}</CardFooter>
    </Card>
  )
}

// const FilterPanel: React.FC = () => {
//   const router = useRouter()
//
//   // Инициализация состояния фильтров из URL-параметров
//
//   useEffect(() => {
//     const initialFilters = filterSchema.partial().parse({})
//     setFilters(initialFilters)
//   }, [])
//
//   // Обработчик изменения полей фильтра
//   const handleChange = useCallback((field: keyof FilterParams, value: any) => {
//     setFilters((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//   }, [])
//
//   // Мемоизация и валидация фильтров
//   const validatedFilters = useMemo(() => {
//     try {
//       return filterSchema.parse(filters)
//     } catch (error) {
//       console.error("Validation error:", error)
//       return {}
//     }
//   }, [filters])
//
//   // Генерация поисковых параметров
//   const searchParams = useMemo(() => {
//     const sp = new URLSearchParams()
//
//     Object.entries(validatedFilters).forEach(([key, value]) => {
//       if (value !== undefined && value !== null) {
//         sp.append(key, String(value))
//       }
//     })
//
//     return sp.toString()
//   }, [validatedFilters])
//
//   // Обработчик применения фильтров
//   const applyFilters = useCallback(() => {
//     router.push(`/?${searchParams}`)
//   }, [router, searchParams])
//
//   return <div>bla</div>
// }
