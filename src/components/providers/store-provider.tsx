"use client"

import { useEffect, useRef, type ReactNode } from "react"
import {
  AppStoreContext,
  createAppStore,
  initAppStore,
  type AppStore,
} from "@/store/app"
import { type StoreApi } from "zustand"

export interface AppStoreProviderProps {
  children: ReactNode
}

export default function AppStoreProvider({ children }: AppStoreProviderProps) {
  const appStoreRef = useRef<StoreApi<AppStore>>(null)

  const appStore = createAppStore(initAppStore())

  useEffect(() => {
    void appStore.persist.rehydrate()
  }, [])

  if (!appStoreRef?.current) {
    appStoreRef.current = appStore
  }

  return (
    // eslint-disable-next-line react-compiler/react-compiler
    <AppStoreContext.Provider value={appStoreRef.current}>
      {children}
    </AppStoreContext.Provider>
  )
}
