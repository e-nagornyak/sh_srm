export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 pt-6">
      {children}
    </section>
  )
}
