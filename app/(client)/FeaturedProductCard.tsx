import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
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
export default function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full">
      <div className="bg-transparent shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
        <div className="relative">
          <div className="absolute inset-0 opacity-75 z-0"></div>

          <Image
            src={urlFor(product.images[0]).url()}
            alt="Product Image"
            width={1080}
            height={400}
            className="w-full h-64 object-contain object-center relative z-10"
          />

          <div className="absolute top-4 right-4 bg-gray-100 text-xs tracking-wider px-3 py-2 rounded-full z-20 transform rotate-12 animate-pulse">
            Best Seller
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>

          <div className="flex items-center justify-between mb-4">
            <span className="text-lg"> {product.price} €</span>
          </div>

          <Link href={`/${product.slug}`}>
            <button className="w-full text-black border border-black py-2 px-3 hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-lg">
              Saznaj više
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
