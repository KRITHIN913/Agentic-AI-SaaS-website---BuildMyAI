"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = {
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollTo: (index: number) => void
  currentIndex: number
  itemCount: number
}

type CarouselProps = {
  opts?: {
    align?: "start" | "center" | "end"
    loop?: boolean
  }
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  autoPlay?: boolean
  autoPlayInterval?: number
}

type CarouselContextProps = {
  carouselRef: React.RefObject<HTMLDivElement>
  api: CarouselApi | undefined
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  currentIndex: number
  itemCount: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      autoPlay = false,
      autoPlayInterval = 3000,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [itemCount, setItemCount] = React.useState(0)
    const carouselRef = React.useRef<HTMLDivElement>(null)
    const autoPlayRef = React.useRef<NodeJS.Timeout>()

    const scrollTo = React.useCallback(
      (index: number) => {
        if (carouselRef.current) {
          const scrollAmount = carouselRef.current.clientWidth * index
          carouselRef.current.scrollTo({
            left: orientation === "horizontal" ? scrollAmount : 0,
            top: orientation === "vertical" ? scrollAmount : 0,
            behavior: "smooth",
          })
          setCurrentIndex(index)
        }
      },
      [orientation],
    )

    const scrollPrev = React.useCallback(() => {
      if (carouselRef.current) {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : opts?.loop ? itemCount - 1 : 0
        scrollTo(newIndex)
      }
    }, [currentIndex, itemCount, opts?.loop, scrollTo])

    const scrollNext = React.useCallback(() => {
      if (carouselRef.current) {
        const newIndex = currentIndex < itemCount - 1 ? currentIndex + 1 : opts?.loop ? 0 : itemCount - 1
        scrollTo(newIndex)
      }
    }, [currentIndex, itemCount, opts?.loop, scrollTo])

    const handleScroll = React.useCallback(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        const newIndex = Math.round(scrollLeft / clientWidth)
        setCurrentIndex(newIndex)
        setCanScrollPrev(scrollLeft > 0)
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth)
      }
    }, [])

    const api = React.useMemo(
      () => ({
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        scrollTo,
        currentIndex,
        itemCount,
      }),
      [scrollPrev, scrollNext, canScrollPrev, canScrollNext, scrollTo, currentIndex, itemCount],
    )

    // Count items
    React.useEffect(() => {
      if (carouselRef.current) {
        const items = carouselRef.current.querySelectorAll("[data-carousel-item]")
        setItemCount(items.length)
      }
    }, [children])

    // Auto play functionality
    React.useEffect(() => {
      if (autoPlay && itemCount > 1) {
        autoPlayRef.current = setInterval(() => {
          scrollNext()
        }, autoPlayInterval)

        return () => {
          if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
          }
        }
      }
    }, [autoPlay, autoPlayInterval, scrollNext, itemCount])

    // Pause auto play on hover
    const handleMouseEnter = React.useCallback(() => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }, [])

    const handleMouseLeave = React.useCallback(() => {
      if (autoPlay && itemCount > 1) {
        autoPlayRef.current = setInterval(() => {
          scrollNext()
        }, autoPlayInterval)
      }
    }, [autoPlay, autoPlayInterval, scrollNext, itemCount])

    React.useEffect(() => {
      if (!carouselRef.current) return

      handleScroll()
      setApi?.(api)

      const element = carouselRef.current
      element.addEventListener("scroll", handleScroll)
      return () => element.removeEventListener("scroll", handleScroll)
    }, [api, handleScroll, setApi])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || "horizontal",
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          currentIndex,
          itemCount,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        data-carousel-item
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  },
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  },
)
CarouselNext.displayName = "CarouselNext"

const CarouselIndicators = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { currentIndex, itemCount, api } = useCarousel()

    if (itemCount <= 1) return null

    return (
      <div ref={ref} className={cn("flex justify-center space-x-2 mt-4", className)} {...props}>
        {Array.from({ length: itemCount }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30",
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    )
  },
)
CarouselIndicators.displayName = "CarouselIndicators"

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselIndicators }
