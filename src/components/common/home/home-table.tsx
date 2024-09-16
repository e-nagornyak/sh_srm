interface HomeTableProps {}

export function HomeTable(props: HomeTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-600">
          <th>ORDER</th>
          <th>BUYER</th>
          <th>STATUS</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, i) => (
          <tr key={i} className="border-t">
            <td className="py-2">{75925883 - i}</td>
            <td>
              <div className="flex items-center">
                <div className="mr-2 size-8 rounded-full bg-gray-200"></div>
                <div className="h-3 w-4 bg-red-500"></div>
              </div>
            </td>
            <td>
              <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                New
              </span>
            </td>
            <td>23.05.2023</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
