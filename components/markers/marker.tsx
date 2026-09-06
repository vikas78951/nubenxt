import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const markerVariants = cva("flex items-center gap-2 ", {
  variants: {
    variant: {
      default: "",
      primary: "",
      mix: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const markerTitleVariants = cva("shrink-0 font-xs", {
  variants: {
    variant: {
      default: "text-muted",
      primary: "text-primary",
      mix: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const markerLineVariants = cva("flex-1 max-w-40 ", {
  variants: {
    variant: {
      default: "border",
      primary: "border-primary",
      mix: "border-muted",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Marker({
  className,
  variant = "default",
  title,
  discription = "",
}: {
  className?: string
  title: string
  discription?: string
} & VariantProps<typeof markerVariants>) {
  return (
    <div className={cn(markerVariants({ variant }), className)}>
      <span className={cn(markerTitleVariants({ variant }))}>
        {title}
      </span>

      <hr className={cn(markerLineVariants({ variant }))} />

      {discription && (
        <p className="body-1">
          {discription}
        </p>
      )}
    </div>
  )
}

export { Marker, markerVariants }