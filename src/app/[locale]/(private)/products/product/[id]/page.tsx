interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params: { id } }: PageProps) {
  return <div className={""}>Product page with id: {id}</div>
}
