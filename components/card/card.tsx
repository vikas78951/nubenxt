import Image from "next/image"
import { Marker } from "@/components/markers/marker"
import { Badge } from "@/components/ui/badge"
import { CardContentProps } from "@/lib/types/shared.type"
import { cn } from "cn"
import { Card } from "../ui/card"

const CustomCard = ({ content }: { content: CardContentProps }) => {
  let {
    category = "",
    cardNumber = null,
    title = "",
    description = "",
    image = null,
    type = "vertical",
    tags = [],
  } = content
  let style =
    type === "vertical"
      ? ``
      : `flex flex-col md:flex-row gap-10 md:justify-between md:items-center`

  return (
    <Card className="ring-0">
      <div className={cn(style)}>
        <div className="max-w-2xl">
          {cardNumber && (
            <Marker
              title={`${cardNumber}`}
              description={category || ""}
              variant={"primary"}
              className="mb-6"
            />
          )}

          <h4>{title}</h4>
          <p className="text-md mt-2 max-w-140">{description}</p>
          {tags.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2 md:mt-4 md:gap-3 lg:mt-3 lg:gap-4 xl:mt-4">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={"outline"}
                  className="rounded-md bg-background p-4 text-xs font-semibold text-muted-foreground md:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </ul>
          )}
        </div>
        <div className="">
          {image?.src && (
            <Image
              src={image?.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
              className="rounded-lg"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </Card>
  )
}

export default CustomCard
