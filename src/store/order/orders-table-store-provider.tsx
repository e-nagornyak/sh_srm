"use client"

import { createContext, useContext, useRef, type ReactNode } from "react"
import { useStore } from "zustand"

import { type Order } from "@/lib/api/allegro/orders/orders-types"

import {
  createOrdersTableStore,
  type OrdersTableStore,
} from "./orders-table-store"

export type OrdersTableStoreApi = ReturnType<typeof createOrdersTableStore>

export const OrdersTableStoreContext = createContext<
  OrdersTableStoreApi | undefined
>(undefined)

export interface CounterStoreProviderProps {
  initialData: Order[]
  children: ReactNode
}

export const OrdersTableStoreProvider = ({
  initialData,
  children,
}: CounterStoreProviderProps) => {
  // @ts-ignore
  const storeRef = useRef<OrdersTableStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createOrdersTableStore({ orders: initialData })
  }

  return (
    <OrdersTableStoreContext.Provider value={storeRef.current}>
      {children}
    </OrdersTableStoreContext.Provider>
  )
}

export const useOrdersTableStore = <T,>(
  selector: (store: OrdersTableStore) => T
): T => {
  const counterStoreContext = useContext(OrdersTableStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
