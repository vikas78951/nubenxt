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
        <li className="self-stretch ">
            <NavigationMenuLink
                render={
                    <Link
                        href={href}
                        className="flex flex-col items-start border rounded-lg px-4 py-4 xl:px-6 xl:py-6 hover hover:border-primary group">

                        {/* Icon */}
                        {Icon && (
                            <div className="p-2 rounded-[6px] bg-secondary-foreground group-hover:bg-primary/10 mb-2 xl:mb-4 ">
                                <Icon className="size-4.5 text-muted group-hover:text-primary " />
                            </div>
                        )}

                        <div className="flex flex-col gap-1.5 ">
                            <h5 className="font-heading text-foreground font-medium text-[16px] ">{title}</h5>
                            <p className="text-xs xl:text-sm text-muted ">{description}</p>
                        </div>
                    </Link>
                }
            />
        </li>
    )
}

export default ListItem