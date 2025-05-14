"use client"

import { SimplifiedProduct } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { useState } from "react"

export default function Product({ product }: { product: SimplifiedProduct }) {
  const [mainImage, setMainImage] = useState<SanityImageSource | null>(
    product.images?.[0] || null
  )

  return (
    <div className="bg-gray-100 py-8 pt-30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            {product.images?.[0]?.asset && (
              <Image
                src={mainImage ? urlFor(mainImage).url() : "/placeholder.png"}
                width={300}
                height={300}
                alt={product.title ?? "Product Image"}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            )}
            {product.images?.[0]?.asset && (
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {product.images.map((src, index) => (
                  <Image
                    key={index}
                    width={100}
                    height={100}
                    src={urlFor(src).url()}
                    alt={product.title ?? "Product Image"}
                    className="size-16 sm:size-20 object-contain rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => setMainImage(urlFor(src).url())}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-8">{product.title}</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Asortiman</h3>
              <div className="flex space-x-2">{product.brand}</div>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">{product.price}€</span>
              {/* <span className="text-gray-500 line-through">$399.99</span> */}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Quantity */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue={1}
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">
              <Button>Dodaj u košaricu</Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Značajke:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li> {product.category}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
