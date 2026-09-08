import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const markerVariants = cva("flex items-center gap-2", {
  variants: {
    variant: {
      default: "",
      primary: "",
      mix: "",
    },
    size: {
      default: "text-[11px] sm:text-[12px] lg:text-[14px]",
      sm: "text-[11px] sm:text-[11px] lg:text-[12px]",
      lg: "text-[12px] sm:text-[14px] lg:text-[16px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
})

const markerTitleVariants = cva(
  "shrink-0 font-semibold",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-primary",
        mix: "text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const markerLineVariants = cva("flex-1 max-w-10", {
  variants: {
    variant: {
      default: "border",
      primary: "border-primary",
      mix: "border-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const markerDescriptionVariants = cva(
  "font-sans uppercase font-semibold leading-tight ",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-muted-foreground",
        mix: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const markerSizeVariants = cva("", {
  variants: {
    size: {
      default: "text-[11px] sm:text-[12px] lg:text-[14px]",
      sm: "text-[11px] sm:text-[11px] lg:text-[12px]",
      lg: "text-[12px] sm:text-[14px] lg:text-[16px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})


function Marker({
  className,
  variant = "default",
  size = "sm",
  title,
  description = "",
}: {
  className?: string
  title: string
  description?: string
} & VariantProps<typeof markerVariants>) {
  return (
    <div className={cn(markerVariants({ variant, size }), className)}>
      <span className={cn(markerTitleVariants({ variant }), markerSizeVariants({ size }))}>
        {title}
      </span>

      <hr className={cn(markerLineVariants({ variant }))} />

      {description && (
        <p className={cn(markerDescriptionVariants({ variant }), markerSizeVariants({ size }))}>
          {description}
        </p>
      )}
    </div>
  )
}

export { Marker, markerVariants }