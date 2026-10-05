import React from "react"
import type { ServiceDataProps } from "@/lib/data/page.data"
import { Card } from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const ServiceCard = ({ service }: { service: ServiceDataProps }) => {
  const { id, title, description, tags, ctaText, ctaLink, img } = service

  return (
    <Card className="group flex flex-col gap-6 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-background sm:p-5 md:p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-8 xl:p-10">
      {/* Content */}
      <div className="min-w-0 flex-1">
        <header className="flex items-center gap-3 lg:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 font-heading text-sm font-extrabold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:h-13 md:w-13 lg:text-lg lg:text-[20px]">
            {id}
          </span>

          <h4 className="transition-colors group-hover:text-primary">
            {title}
          </h4>
        </header>

        <p className="py-3 md:py-4 lg:py-5 xl:py-6">{description}</p>

        <ul className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
          {tags.map((tag, index) => (
            <li>
              <Badge
                key={index}
                variant="outline"
                className="bg-background p-4 text-xs font-semibold text-muted-foreground md:text-sm"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>

        <footer className="mt-4 lg:mt-6 xl:mt-7">
          <a
            className="flex items-center gap-2 text-xs font-semibold text-primary uppercase"
            href={ctaLink}
          >
            {ctaText}
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </footer>
      </div>

      {/* Image */}
      <div className="flex w-full shrink-0 justify-center lg:w-[38%] lg:justify-end">
        <div className="w-full max-w-100 overflow-hidden rounded-lg bg-background p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
          <Image
            alt={img.alt}
            src={img.src}
            width={img.width}
            height={img.height}
            className="h-auto w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 38vw"
            loading="lazy"
          />
        </div>
      </div>
    </Card>
  )
}
