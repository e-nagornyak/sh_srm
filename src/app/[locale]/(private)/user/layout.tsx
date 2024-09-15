import React, { type PropsWithChildren } from "react"

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-1 justify-center border border-red-500 pt-14">
      {children}
    </section>
  )
}
