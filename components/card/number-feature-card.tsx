import { Card } from "@/components/ui/card"

export const NumberFeatureCard = ({
  data,
  padded = false,
}: {
  data: { id: string | number; title: string; description: string }
  /**
   * The default is a full-bleed editorial row: no horizontal padding, just a
   * bottom rule. That reads correctly inside a multi-column grid, where the
   * grid gap provides the separation. In a single full-width column the text
   * would run flush to the container edge, so stacked usages opt into padding.
   */
  padded?: boolean
}) => {
  const { id, title, description } = data

  return (
    <Card
      key={id}
      className={[
        "flex flex-col gap-6 rounded-none border-0 border-b bg-background p-0 py-4 ring-0 sm:py-5 md:py-4 lg:flex-row lg:items-center lg:gap-8 lg:py-6 xl:py-8",
        padded ? "px-4 sm:px-5 lg:px-8 xl:px-10" : "",
      ].join(" ")}
    >
      {/* Content */}
      <div className="min-w-0 flex-1">
        <span className="font-heading text-sm font-bold text-primary">
          {id}
        </span>

        <header className="py-2">
          <h6>{title}</h6>
        </header>

        <p className="text-sm">{description}</p>
      </div>
    </Card>
  )
}
