"use client"

import { PersonIcon } from "@radix-ui/react-icons"

import { routePaths } from "@/config/routes"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Button } from "@/components/ui/button"

interface AuthButtonProps {}

export function AuthButton(props: AuthButtonProps) {
  const { lazyPush, isPending } = useLazyRouter()

  const onClickHandler = () => {
    lazyPush(routePaths.auth.login)
  }

  return (
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
