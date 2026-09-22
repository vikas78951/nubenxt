import Image from "next/image"
import { Marker } from "@/components/markers/marker"
import { Badge } from "@/components/ui/badge"
import { CardContentProps } from "@/lib/types/shared.type"
import { cn } from "cn"
import { Card } from "../ui/card"

const CustomCard = ({ content }: { content: CardContentProps }) => {
  const {
    category = "",
    cardNumber = null,
    title = "",
    description = "",
    image = null,
    type = "vertical",
    tags = [],
  } = content

  const style =
    type === "vertical"
      ? ""
      : "flex flex-col md:flex-row gap-10 md:justify-between md:items-center"

  return (
    <Card className="group transition-all duration-300 hover:border-primary/50 hover:bg-background p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
      <div className={cn(style)}>
        <div className="max-w-2xl min-w-0 flex-1">
          {cardNumber && (
            <Marker
              title={`${cardNumber}`}
              description={category || ""}
              variant={"primary"}
              className="mb-6"
            />
          )}

          <h4 className="transition-colors group-hover:text-primary">{title}</h4>
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
        <div className="flex w-full shrink-0 justify-center lg:w-[38%] lg:justify-end">
          {image?.src && (
            <div className="w-full max-w-100 rounded-lg bg-background p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-hidden">
              <Image
                src={image?.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default CustomCard
