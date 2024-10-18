"use client"

import * as React from "react"
import { Loader, RotateCcw } from "lucide-react"
import { toast } from "sonner"

import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Button, type ButtonProps } from "@/components/ui/button"

const ButtonRefresh = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "onClick">
>((props, ref) => {
  const { isPending, lazyRefresh } = useLazyRouter()

  const onRefreshClick = () => {
    lazyRefresh()
    toast.info(
      <span>
        The data started to update <span className="text-2xl">👻</span>
      </span>
    )
  }

  return (
    <>
      {isPending && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-accent p-4">
            <Loader size="50" className="animate-spin" />
          </div>
        </div>
      )}
      <Button ref={ref} onClick={onRefreshClick} variant="outline" {...props}>
        {isPending ? (
          <Loader size="17" className="animate-spin" />
        ) : (
          <RotateCcw size="17" />
        )}
      </Button>
    </>
  )
})
ButtonRefresh.displayName = "ButtonRefresh"

export { ButtonRefresh }
