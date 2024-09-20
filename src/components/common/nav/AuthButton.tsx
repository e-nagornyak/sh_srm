"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import Cookies from "js-cookie"
import { Loader } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import { routePaths } from "@/config/routes"
import { Button, type ButtonProps } from "@/components/ui/button"

export function AuthButton(props: ButtonProps) {
  const [isPending, startTransition] = useTransition()

  const session = useSession()
  const { push } = useRouter()

  const onClickHandler = () => {
    startTransition(() => push(routePaths.auth.login))
  }

  const onSignOutHandler = async () => {
    startTransition(async () => {
      await signOut({ redirect: true, callbackUrl: "/" })
      Cookies.remove("accessToken")
    })
  }

  const icon = isPending ? (
    <Loader className="size-5 animate-spin" />
  ) : session.data ? (
    <ExitIcon className="size-5" />
  ) : (
    <PersonIcon className="size-5" />
  )

  return session.data ? (
    <Button
      onClick={onSignOutHandler}
      disabled={isPending}
      className="gap-2"
      type="button"
      {...props}
    >
      {icon}
      Log out
    </Button>
  ) : (
    <Button
      onClick={onClickHandler}
      disabled={isPending}
      className="gap-2"
      type="button"
      {...props}
    >
      {icon}
      Sign In
    </Button>
  )
}
