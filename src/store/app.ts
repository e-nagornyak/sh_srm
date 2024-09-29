"use client"

import { createContext, useContext } from "react"
import { create } from "zustand"
import { useStore, type StoreApi } from "zustand/index"
import { persist } from "zustand/middleware"

function getLocalStorageItems() {
  const localeStorageString =
    typeof localStorage !== "undefined" && localStorage.getItem("app_store")
  if (typeof localeStorageString === "string") {
    return JSON.parse(localeStorageString).state
  }
  return
}

interface AppStoreState {
  openSidebar: boolean
}

interface AppStoreActions {
  toggleSidebar: (value: boolean) => void
}

interface AppStore extends AppStoreState, AppStoreActions {}

const initAppStore = (): AppStoreState => {
  return {
    openSidebar: false,
  }
}

const createAppStore = (initState: AppStoreState) =>
  create<AppStore>()(
    persist(
      (set) => ({
        ...initState,
        openSidebar: getLocalStorageItems()?.openSidebar || false,
        toggleSidebar: (value: boolean) => set(() => ({ openSidebar: value })),
      }),
      {
        name: "app_store",
        partialize: (state) => ({
          openSidebar: state.openSidebar,
        }),
      }
    )
  )

const AppStoreContext = createContext<StoreApi<AppStore> | null>(null)

const useAppStore = <T>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext)

  if (!appStoreContext) {
    throw new Error(`useAppStore must be use within StoreProvider`)
  }

  return useStore(appStoreContext, selector)
}

export {
  type AppStoreState,
  type AppStoreActions,
  type AppStore,
  initAppStore,
  createAppStore,
  AppStoreContext,
  useAppStore,
}
