import { Product } from "@/sanity/types"
import { Button } from "./ui/button"
import { useCartStore } from "@/stores/useCartStore"
import { urlFor } from "@/sanity/lib/image"
import { ShoppingCart } from "lucide-react"

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <Button
      onClick={() =>
        useCartStore.getState().addToCart({
          _id: product._id,
          title: product.title ?? "",
          price: product.price ?? 0,
          image: product.images?.[0]
            ? urlFor(product.images[0]).url()
            : undefined,
        })
      }
    >
      Dodaj u <ShoppingCart />
    </Button>
  )
}
