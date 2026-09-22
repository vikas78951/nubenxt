import Link from "next/link";
import type { FooterLinkProps } from "@/lib/data/footer.data";
import { Badge } from "../ui/badge";

const FooterLinkList = ({ item }: { item: FooterLinkProps }) => {
    const { title, links } = item;

    return (
        <div className="">
            <Badge variant={'ghost'} className="text-xs p-0 mb-2 text-primary font-bold">{title}</Badge>
            <ul className="flex flex-col gap-2 lg:gap-3">
                {
                    links.map((link) => {
                        return (<li key={link.label}>
                            <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors">{link.label}</Link>
                        </li>)
                    })
                }

            </ul>
        </div>
    );
};

export default FooterLinkList