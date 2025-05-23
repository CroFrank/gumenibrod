"use client"

import { urlFor } from "@/sanity/lib/image"
import { Product } from "@/sanity/types"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { useState } from "react"

export default function SingleProductImage({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState<SanityImageSource | null>(
    product.images?.[0] || null
  )
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      {product.images?.[0]?.asset && (
        <Image
          src={mainImage ? urlFor(mainImage).url() : "/placeholder.png"}
          width={600}
          height={400}
          alt={product.title ?? "Product Image"}
          className="w-full h-96 rounded-lg shadow-md mb-4 object-contain object-center py-2"
        />
      )}

      {product.images?.[0]?.asset && (
        <div className="overflow-x-auto">
          <div className="flex gap-4 py-4 justify-start whitespace-nowrap">
            {product.images.map((src, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                src={urlFor(src).url()}
                alt={product.title ?? "Product Image"}
                className="inline-block size-16 sm:size-20 object-contain rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
