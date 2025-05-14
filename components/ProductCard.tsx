"use client"

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SanityImageDimensions } from "@/sanity/types"
import { SanityAsset } from "@sanity/image-url/lib/types/types"

export type SimplifiedProduct = {
  _id: string
  title: string | null
  price: number | null
  description: string | null
  slug: string | null
  brand: "adventure" | "gala" | "galaxy" | "kolibri" | null
  category: "dodaci" | "motorni-gumeni-brod" | "veslacki-gumeni-brod" | null
  featured: Array<string> | null
  images: Array<{
    asset: {
      _id: string
      url: string | null
      metadata: {
        lqip: string | null
        dimensions: SanityImageDimensions | null
      } | null
    } | null
    alt: null
  }> | null
}

// Then use this in ProductCard props
type ProductCardProps = {
  product: SimplifiedProduct
  disableSlider?: boolean
}

export default function ProductCard({
  product,
  disableSlider = true,
}: ProductCardProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  })

  const hasMultipleImages = (product.images?.length ?? 0) > 1

  return (
    <div className="w-full max-w-sm h-[485px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col mx-auto">
      <div className="relative">
        {/* Tags */}
        {product.featured?.includes("istaknuto") && (
          <div className="absolute top-4 right-4 bg-red-500 text-xs px-3 py-2 rounded-full z-20 transform rotate-12 animate-pulse font-medium text-white">
            BEST SELLER
          </div>
        )}
        {product.featured?.includes("novo") && (
          <div className="absolute top-4 left-4 bg-blue-500 text-xs px-3 py-2 rounded-full z-20 animate-pulse font-medium">
            NOVO!
          </div>
        )}

        {/* Image Section */}
        {(disableSlider && product.images?.[0]?.asset) ||
        (!hasMultipleImages && product.images?.[0]?.asset) ? (
          <Image
            className="w-full h-64 object-contain object-center"
            src={urlFor(product.images?.[0]).url()}
            alt={product.title ?? "Product Image"}
            width={300}
            height={300}
          />
        ) : (
          <div ref={sliderRef} className="keen-slider w-30">
            {product.images?.map((image: SanityAsset) => (
              <Image
                key={product._id}
                className="w-full h-64 object-contain object-center keen-slider__slide"
                src={urlFor(image.asset).url()}
                alt={product.title ?? "Product Image"}
                width={300}
                height={300}
              />
            ))}
          </div>
        )}

        {/* Arrows */}
        {!disableSlider && hasMultipleImages && (
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-200 hover:bg-gray-100 text-gray-700"
              onClick={(e) => {
                e.preventDefault()
                instanceRef.current?.prev()
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-200 hover:bg-gray-100 text-gray-700"
              onClick={(e) => {
                e.preventDefault()
                instanceRef.current?.next()
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="px-5 pb-5 pt-4 flex flex-col flex-1">
        <Link href={`/products/${product.slug || product.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {product.title}
          </h5>
        </Link>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
          {product.description}
        </p>

        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.price}€
        </span>

        <div className="flex items-center justify-between mt-auto pt-4">
          <Button variant="outline">
            <Link href={`/products/${product.slug}`}>Više info</Link>
          </Button>
          <Button>Dodaj u košaricu</Button>
        </div>
      </div>
    </div>
  )
}
