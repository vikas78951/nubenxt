import { Card } from "@/components/ui/card"

export const NumberFeatureCard = ({
  data,
}: {
  data: { id: string | number; title: string; description: string }
}) => {
  const { id, title, description } = data

  return (
    <Card
      key={id}
      className="flex flex-col gap-6 rounded-none border-0 border-b bg-background p-0 py-4 ring-0 sm:py-5 md:py-4 lg:flex-row lg:items-center lg:gap-8 lg:py-6 xl:py-8"
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
