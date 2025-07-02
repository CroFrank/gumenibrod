"use client"

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SanityAsset } from "@sanity/image-url/lib/types/types"
import { Product } from "@/sanity/types"
import { useEffect, useMemo, useState } from "react"
import AddToCartButton from "./AddToCartButton"

type ProductCardProps = {
  product: Product
  disableSlider?: boolean
}

export default function ProductCard({
  product,
  disableSlider,
}: ProductCardProps) {
  const [showAllImages, setShowAllImages] = useState(false)

  const mainImg = product.images?.[0]?.asset
    ? urlFor(product.images[0]).url()
    : "/brod.png"

  const imageCount = product.images?.length || 0

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  })
  const hasMultipleImages = useMemo(
    () => (product.images?.length ?? 0) > 1,
    [product.images]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAllImages(true)
    }, 500) // 500 ms delay

    return () => clearTimeout(timer) // cleanup
  }, [])

  return (
    <div className="w-full max-w-sm h-[490px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col mx-auto">
      <div className="relative pt-3">
        {/* Tags */}
        {product.featured?.includes("istaknuto") && (
          <div className="absolute top-4 right-4 bg-red-500 text-xs px-3 py-2 rounded-full z-20 transform rotate-12 animate-pulse font-medium text-white">
            BEST SELLER
          </div>
        )}
        {product.featured?.includes("novo") && (
          <div className="absolute top-4 left-4 bg-blue-500 text-xs px-3 py-2 rounded-full z-20 animate-pulse font-medium text-white">
            NOVO!
          </div>
        )}

        {/* Image Section */}
        {(disableSlider && product.images?.[0]?.asset) ||
        (!hasMultipleImages && product.images?.[0]?.asset) ||
        (!showAllImages && product.images?.[0]?.asset) ? (
          <Image
            className="w-full h-64 object-contain object-center"
            src={mainImg}
            alt={product.title ?? "Slika proizvoda"}
            width={300}
            height={300}
          />
        ) : imageCount > 0 ? (
          <div ref={sliderRef} className="keen-slider w-30">
            {product.images?.map((image: SanityAsset) =>
              image?.asset ? (
                <Image
                  key={image._key}
                  className="w-full h-64 object-contain object-center keen-slider__slide"
                  src={urlFor(image.asset).url()}
                  alt={product.title ?? "Slika proizvoda"}
                  width={300}
                  height={300}
                />
              ) : (
                <Image
                  key={image._key || Math.random()}
                  className="w-full h-64 object-contain object-center keen-slider__slide"
                  src="/brod.png"
                  alt="Fallback slika"
                  width={300}
                  height={300}
                />
              )
            )}
          </div>
        ) : (
          <Image
            className="w-full h-64 object-contain object-center"
            src="/brod.png"
            alt="Fallback slika"
            width={300}
            height={300}
          />
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
        <Link href={`/proizvodi/${product.slug?.current}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {product.title}
          </h5>
        </Link>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
          {product.description}
        </p>

        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.price ? product.price + " €" : "Cijena na upit"}
        </span>

        <div className="flex items-center justify-between mt-auto pt-4">
          <Button variant="outline">
            <Link href={`/proizvodi/${product.slug?.current}`}>Više info</Link>
          </Button>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}
