import { routePaths } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { Link } from "@/components/ui/link"
import { Title, type TitleSize } from "@/components/ui/title"

interface LogoProps {
  size?: TitleSize
  className?: string
}

export function Logo({ size = "xl", className }: LogoProps) {
  return (
    <Link className={className} href={routePaths.home}>
      <Title size={size} className="font-bold">
        {siteConfig.name}
      </Title>
    </Link>
  )
}
