import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const blogPosts = [
  { date: "SEPTEMBER 2024", title: "Base Changelog - August 2024" },
  {
    date: "AUGUST 2024",
    title:
      "Do you Want to Grow your Online Business? Meet us at Walmart Marketplace Seller Summit",
  },
  { date: "AUGUST 2024", title: "Changelog - July 2024" },
  {
    date: "JULY 2024",
    title: "Automating Your Etsy Shop with: A Starter Guide",
  },
]

export function DashboardPage() {
  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">290</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Trends</CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]"></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your assigned support</CardTitle>
        </CardHeader>
        <CardContent>
          <p>test@examle.com</p>
          <p>+48 444 444 444</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest on the blog</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {blogPosts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{post.date}</TableCell>
                  <TableCell>{post.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
