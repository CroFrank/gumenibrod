"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { FEATURED_PRODUCTS_QUERYResult } from "@/sanity/types"
import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type FeaturedProductsProps = {
  productsIstaknuto?: FEATURED_PRODUCTS_QUERYResult
  productsNovo?: FEATURED_PRODUCTS_QUERYResult
}

export default function ProductsCarousel({
  productsIstaknuto,
  productsNovo,
}: FeaturedProductsProps) {
  const data = productsNovo ?? productsIstaknuto ?? []
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 24 },
      },
      "(min-width: 1600px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
  })

  return (
    <div className="relative px-4 py-12">
      {/* Navigation */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => instanceRef.current?.prev()}
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => instanceRef.current?.next()}
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider container mx-auto">
        {data.map((product) => (
          <div key={product._id} className="keen-slider__slide">
            <ProductCard product={product} disableSlider />
          </div>
        ))}
      </div>
    </div>
  )
}
