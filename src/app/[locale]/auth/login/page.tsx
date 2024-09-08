import { getSession } from "next-auth/react"

import { LoginController } from "@/components/controllers/auth/login-controller"

export default async function Page() {
  const session = await getSession()

  console.log(session)
  return <LoginController />
}
