import { type PropsWithChildren } from "react"

import { cn } from "@/lib/utils"
import { Title } from "@/components/ui/title"
import { Logo } from "@/components/shared/Logo"

interface FormWrapperProps extends PropsWithChildren {
  title?: string
  wrapperClassName?: string
}

export function FormWrapper({
  wrapperClassName,
  title,
  children,
}: FormWrapperProps) {
  return (
    <div
      className={cn(
        "w-full max-w-lg rounded-lg border border-border bg-white p-6 shadow-md duration-500 animate-in slide-in-from-top dark:bg-black",
        wrapperClassName
      )}
    >
      <Logo className="text-center" />
      {title && (
        <Title className="mb-6 text-center" size="lg">
          {title}
        </Title>
      )}
      {children}
    </div>
  )
}
