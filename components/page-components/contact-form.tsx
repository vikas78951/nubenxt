"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  Building2,
  Loader2,
  Mail,
  Phone,
  RotateCcw,
  Send,
  User,
  Wrench,
} from "lucide-react"

import { servicePagesData } from "@/lib/data/service.data"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormValues {
  name: string
  businessName: string
  email: string
  phone: string
  service: string
  projectDetails: string
}

interface FormErrors {
  name?: string
  businessName?: string
  email?: string
  phone?: string
  service?: string
  projectDetails?: string
}

const initialValues: FormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  projectDetails: "",
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormValues>(initialValues)
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [touched, setTouched] = React.useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const serviceItems = React.useMemo(() => {
    return Object.values(servicePagesData).map((item) => ({
      label: item.title,
      value: item.slug,
    }))
  }, [])

  const validate = (values: FormValues): FormErrors => {
    const errs: FormErrors = {}

    if (!values.name.trim()) {
      errs.name = "Your name is required."
    } else if (values.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters."
    }

    if (!values.businessName.trim()) {
      errs.businessName = "Business name is required."
    }

    if (!values.email.trim()) {
      errs.email = "Email address is required."
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())
    ) {
      errs.email = "Please enter a valid email address."
    }

    if (!values.projectDetails.trim()) {
      errs.projectDetails = "Project details are required."
    } else if (values.projectDetails.trim().length < 10) {
      errs.projectDetails =
        "Please provide more detail (at least 10 characters)."
    }

    return errs
  }

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value }
      if (touched[field]) {
        setErrors(validate(next))
      }
      return next
    })
  }

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(formData))
  }

  const handleReset = () => {
    setFormData(initialValues)
    setErrors({})
    setTouched({})
    toast.info("Form reset successfully")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const allTouched: Record<string, boolean> = {
      name: true,
      businessName: true,
      email: true,
      phone: true,
      service: true,
      projectDetails: true,
    }
    setTouched(allTouched)

    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please resolve the highlighted errors before submitting.")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      toast.success("Inquiry submitted successfully!", {
        description: (
          <div className="mt-2 flex flex-col gap-1 text-xs">
            <p>
              <strong className="text-foreground">Name:</strong> {formData.name}
            </p>
            <p>
              <strong className="text-foreground">Business:</strong>{" "}
              {formData.businessName}
            </p>
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              {formData.email}
            </p>
            {formData.phone && (
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                {formData.phone}
              </p>
            )}
            {formData.service && (
              <p>
                <strong className="text-foreground">Service:</strong>{" "}
                {formData.service}
              </p>
            )}
          </div>
        ),
        position: "bottom-right",
      })

      setFormData(initialValues)
      setErrors({})
      setTouched({})
    } catch {
      toast.error("An error occurred while submitting. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedServiceLabel =
    serviceItems.find((s) => s.value === formData.service)?.label ||
    formData.service

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-6">
        {/* 1 : YOUR NAME * */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
          >
            <span>YOUR NAME</span>
            <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your full name"
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={Boolean(touched.name && errors.name)}
            className={cn(
              "h-12 border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0",
              touched.name && errors.name && "border-destructive"
            )}
          />
          {touched.name && errors.name && (
            <p className="text-xs font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        {/* 2 : BUSINESS NAME * */}
        <div className="space-y-2">
          <label
            htmlFor="businessName"
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
          >
            <span>BUSINESS NAME</span>
            <span className="text-destructive">*</span>
          </label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            placeholder="Your company or operation name"
            onChange={(e) => handleChange("businessName", e.target.value)}
            onBlur={() => handleBlur("businessName")}
            aria-invalid={Boolean(touched.businessName && errors.businessName)}
            className={cn(
              "h-12 border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0",
              touched.businessName &&
                errors.businessName &&
                "border-destructive"
            )}
          />
          {touched.businessName && errors.businessName && (
            <p className="text-xs font-medium text-destructive">
              {errors.businessName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* 3 : EMAIL ADDRESS * */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
            >
              <span>EMAIL ADDRESS</span>
              <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="name@company.com"
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
              className={cn(
                "h-12 border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0",
                touched.email && errors.email && "border-destructive"
              )}
            />
            {touched.email && errors.email && (
              <p className="text-xs font-medium text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          {/* 4 : PHONE NUMBER (OPTIONAL) */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
            >
              <span>PHONE NUMBER (OPTIONAL)</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              placeholder="+1 (555) 000-0000"
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              className="h-12 border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Row 3: SERVICE REQUIRED */}
        <div className="space-y-2">
          <label
            htmlFor="service"
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
          >
            <span>SERVICE REQUIRED</span>
          </label>
          <Select
            items={serviceItems}
            value={formData.service || null}
            onValueChange={(val) => {
              handleChange("service", val ?? "")
              setTouched((prev) => ({ ...prev, service: true }))
            }}
          >
            <SelectTrigger
              id="service"
              className={cn(
                "h-12 w-full border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0 dark:bg-input/30",
                !formData.service && "text-muted-foreground"
              )}
            >
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent className="w-(--anchor-width) min-w-[280px]">
              <SelectGroup>
                <SelectLabel className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Available Services
                </SelectLabel>
                {serviceItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Row 4: PROJECT DETAILS * */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="projectDetails"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-foreground uppercase"
            >
              <span>PROJECT DETAILS</span>
              <span className="text-destructive">*</span>
            </label>
            <span className="text-xs text-muted-foreground tabular-nums">
              {formData.projectDetails.length} characters
            </span>
          </div>
          <Textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            rows={5}
            placeholder="Tell us about your technical challenges, business objective, and estimated timeline..."
            onChange={(e) => handleChange("projectDetails", e.target.value)}
            onBlur={() => handleBlur("projectDetails")}
            aria-invalid={Boolean(
              touched.projectDetails && errors.projectDetails
            )}
            className={cn(
              "min-h-[120px] resize-y border-secondary bg-background/50 p-4 text-sm ring-0 transition-all focus-visible:border-secondary focus-visible:ring-0",
              touched.projectDetails &&
                errors.projectDetails &&
                "border-destructive"
            )}
          />
          {touched.projectDetails && errors.projectDetails && (
            <p className="text-xs font-medium text-destructive">
              {errors.projectDetails}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-3 pt-6 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={isSubmitting}
          className="w-full font-bold uppercase sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit Inquiry
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleReset}
          disabled={isSubmitting}
          className="w-full font-bold uppercase sm:w-auto"
        >
          <RotateCcw className="size-4" />
          Reset
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
