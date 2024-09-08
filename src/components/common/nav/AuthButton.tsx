"use client"

import { ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import { signOut, useSession } from "next-auth/react"

import { routePaths } from "@/config/routes"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Button } from "@/components/ui/button"

interface AuthButtonProps {}

export function AuthButton(props: AuthButtonProps) {
  const session = useSession()
  const { lazyPush, isPending } = useLazyRouter()

  const onClickHandler = () => {
    lazyPush(routePaths.auth.login)
  }

  return session.data ? (
    <Button
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
      disabled={isPending}
      className="gap-2"
      type="button"
    >
      <ExitIcon className="size-5" />
      Log out
    </Button>
  ) : (
    <Button
      onClick={onClickHandler}
      disabled={isPending}
      className="gap-2"
      type="button"
    >
      <PersonIcon className="size-5" />
      Sign In
    </Button>
  )
}
