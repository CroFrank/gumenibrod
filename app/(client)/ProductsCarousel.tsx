"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import FeaturedProductCard from "./FeaturedProductCard"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Product = {
  _id: string
  title: string
  slug: { current: string }
  description: string
  price: number
  images: { asset: { url: string } }[]
  brand: string
  category: string
}

export default function ProductsCarousel({ productsIstaknuto }) {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 5,
          spacing: 15,
        },
      },
      "(min-width: 1536px)": {
        slides: {
          perView: 6,
          spacing: 15,
        },
      },
    },
  })

  const handlePrev = () => instanceRef.current?.prev()
  const handleNext = () => instanceRef.current?.next()

  return (
    <div className="relative container mx-auto mb-10">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
      <section
        ref={(el) => {
          ref(el)
          sliderRef.current = el
        }}
        className="keen-slider"
      >
        {productsIstaknuto.map((product) => (
          <>
            <div key={product._id + 1} className="keen-slider__slide">
              <FeaturedProductCard product={product} />
            </div>
            <div key={product._id} className="keen-slider__slide">
              <FeaturedProductCard product={product} />
            </div>
          </>
        ))}
      </section>
    </div>
  )
}
