"use client"

import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

interface OrderPublicPrintButtonProps {
  text: string
}

export function OrderPublicPrintButton({ text }: OrderPublicPrintButtonProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button
      onClick={handlePrint}
      variant="outline"
      className="flex items-center"
    >
      <Download className="mr-2" size={18} />
      {text}
    </Button>
  )
}
