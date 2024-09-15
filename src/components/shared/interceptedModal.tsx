"use client"

import { type PropsWithChildren } from "react"
import { useRouter } from "next/navigation"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ModalProps extends PropsWithChildren {}

export function InterceptedModal({ children }: ModalProps) {
  const { back } = useRouter()

  return (
    <Dialog defaultOpen onOpenChange={back}>
      <DialogTrigger className="hidden" />
      <DialogContent className="pt-10">{children}</DialogContent>
    </Dialog>
  )
}
