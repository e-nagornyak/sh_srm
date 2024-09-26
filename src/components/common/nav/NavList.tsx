"use client"

import * as React from "react"
import { type User } from "next-auth"

import { RoutePaths } from "@/config/routes"
import { cn } from "@/lib/utils"
import { Link } from "@/components/ui/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Title } from "@/components/ui/title"
import { Logo } from "@/components/shared/logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

interface NavListProps {
  user?: User
}

export function NavList({ user }: NavListProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"text-black dark:text-white"}>
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 border-r border-border">
                <NavigationMenuItem className="flex size-full select-none flex-col justify-end rounded-md p-6 outline-none focus:shadow-md">
                  <Logo />
                  <Title size="xs" className="mb-2 mt-4 font-medium">
                    Sh. shop Mobile parts and accessories
                  </Title>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium asperiores cumque dolor eius inventore tempore.
                  </p>
                </NavigationMenuItem>
              </li>
              {user && (
                <ListItem
                  href={RoutePaths.private.dashboard}
                  title="Private Dashboard"
                >
                  Here you can view the list of all orders, users.
                </ListItem>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*<NavigationMenuItem>*/}
        {/*  <Link href="/docs" legacyBehavior passHref>*/}
        {/*    <NavigationMenuLink className={navigationMenuTriggerStyle()}>*/}
        {/*      Documentation*/}
        {/*    </NavigationMenuLink>*/}
        {/*  </Link>*/}
        {/*</NavigationMenuItem>*/}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          variant="ghost"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
