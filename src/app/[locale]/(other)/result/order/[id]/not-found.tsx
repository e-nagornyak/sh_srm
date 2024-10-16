import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Title } from "@/components/ui/title"

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="">
        <CardContent className="flex flex-col items-center gap-4">
          <Title size="lg">Not Found!</Title>
          <p>Could not find requested resource</p>

          <Link className={buttonVariants({ className: "w-full" })} href="/">
            Return to main page
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
