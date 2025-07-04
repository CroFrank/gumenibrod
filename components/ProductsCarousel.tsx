"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Product } from "@/sanity/types"

type FeaturedProductsProps = {
  productsIstaknuto?: Product[]
  productsNovo?: Product[]
  bg?: boolean
  heading: string
}

export default function ProductsCarousel({
  productsIstaknuto,
  productsNovo,
  bg = false,
  heading,
}: FeaturedProductsProps) {
  const data =
    productsNovo && productsNovo.length > 0
      ? productsNovo
      : (productsIstaknuto ?? [])

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
    <section className={`py-20 ${bg ? "bg-gray-100" : ""}`}>
      <h2>{heading}</h2>
      <div
        id={`${productsIstaknuto} ? "istaknuti-proizvodi-carousel" : "novi-proizvodi-carousel"}`}
        className="relative px-4 py-12"
        role="region"
        aria-label="Istaknuti proizvodi carousel"
      >
        {/* Navigation */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Scroll lijevo"
          >
            <ChevronLeft />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => instanceRef.current?.next()}
            aria-label="Scroll desno"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="keen-slider container mx-auto overflow-hidden"
        >
          {data
            ? data.map((product: Product) => (
                <div key={product._id} className="keen-slider__slide">
                  <ProductCard product={product} disableSlider />
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  )
}
