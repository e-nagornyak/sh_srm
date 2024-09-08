import { type PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={"flex flex-col items-center justify-center pt-14"}>
      {children}
    </div>
  )
}
