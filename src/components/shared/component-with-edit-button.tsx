import React, {
  type ChangeEvent,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react"
import { Pen } from "lucide-react"

import { cn } from "@/lib/utils"

interface TableCellWithEditProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fieldName?: string
  onEditClick: (fieldName?: string) => void
}

export function ComponentWithEditButton({
  className,
  children,
  fieldName,
  onClick,
  onEditClick,
  ...props
}: TableCellWithEditProps) {
  const handleEditClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e?.stopPropagation()
    e.preventDefault()
    onEditClick(fieldName)
    onClick && onClick(e)
  }

  return (
    <button
      onClick={handleEditClick}
      className={cn(
        "group relative flex cursor-pointer items-center gap-2 underline-offset-2 hover:text-highlight hover:underline",
        className
      )}
      {...props}
    >
      {children || "..."}
      <div className="absolute -right-6 hidden bg-background group-hover:inline-flex">
        <Pen size="15" />
      </div>
    </button>
  )
}
