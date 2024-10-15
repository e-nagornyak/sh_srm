import { createStore } from "zustand"

import { type Order } from "@/lib/api/allegro/orders/orders-types"

export type OrdersTableState = {
  orders: Order[]
}

export type OrdersTableActions = {
  setOrders: (orders: Order[]) => void
  updateOrder: (id: Order["id"], order: Partial<Order>) => void
}

export type OrdersTableStore = OrdersTableState & OrdersTableActions

export const defaultInitState: OrdersTableState = {
  orders: [],
}

export const createOrdersTableStore = (
  initState: OrdersTableState = defaultInitState
) => {
  return createStore<OrdersTableStore>()((set) => ({
    ...initState,
    setOrders: (orders: Order[]) => set(() => ({ orders })),

    updateOrder: (id, updatedOrder) =>
      set((state) => ({
        orders: state?.orders?.map((order) =>
          order?.id === id ? { ...order, ...updatedOrder } : order
        ),
      })),
  }))
}
