"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"

import { AllegroOrdersTableToolbarActionsLayout } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-actions-layout"

interface AllegroOrdersTableToolbarActionsFooterProps<TData> {
  table: Table<TData>
}

export const ActionFiltersTopBarId = "action-filters-top-bar"

export function AllegroOrdersTableToolbarActionsFooter<TData>({
  table,
}: AllegroOrdersTableToolbarActionsFooterProps<TData>) {
  const footerRef = React.useRef<HTMLDivElement | null>(null)
  const [isFixed, setIsFixed] = React.useState(false)

  React.useEffect(() => {
    const footerElement = footerRef.current
    const headerElement = document.getElementById("private_header")
    const actionFiltersTopBar = document.getElementById(ActionFiltersTopBarId)

    if (!footerElement || !headerElement || !actionFiltersTopBar) return

    // Отримуємо ширину actionFiltersTopBar
    const actionFiltersRect = actionFiltersTopBar.getBoundingClientRect()

    // Встановлюємо ширину для footerElement
    footerElement.style.width = `${actionFiltersRect.width}px`

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Коли 50% елемента №1 перетинає елемент №2, додаємо/видаляємо клас fixed
        if (entry && entry?.intersectionRatio < 0.8) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      },
      {
        root: null, // Вікно перегляду
        threshold: [0.8], // Відслідковуємо 50% видимості
        rootMargin: `-${headerElement.clientHeight}px 0px 0px 0px`, // Відштовхуємось від висоти header
      }
    )

    observer.observe(actionFiltersTopBar)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={footerRef}
      className={`w-full transition-all duration-500 ease-in-out ${
        isFixed ? "fixed bottom-0 z-20 mr-2 opacity-100" : "opacity-0"
      }`}
    >
      <AllegroOrdersTableToolbarActionsLayout table={table} />
    </div>
  )
}
