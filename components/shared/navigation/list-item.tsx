import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { NavComponent } from "@/lib/types/nav.type"


function ListItem({
    title,
    description,
    href,
    icon: Icon,
}: NavComponent) {
    return (
        <li>
            <NavigationMenuLink
                render={
                    <Link
                        href={href}
                        className="flex flex-col gap-2 justify-start items-start p-2 bg-background rounded-md  ">
                        {/* Icon */}
                        {Icon && (
                            <div
                                className="border border-accent p-2 rounded ">
                                <Icon className="size-4 text-accent-foreground  " />
                            </div>
                        )}

                        <div className="flex flex-col gap-1">
                            <h5 className="font-heading text-foreground  font-medium ">{title}</h5>
                            <p className="text-sm text-muted ">{description}</p>
                        </div>
                    </Link>
                }
            />
        </li>
    )
}

export default ListItem