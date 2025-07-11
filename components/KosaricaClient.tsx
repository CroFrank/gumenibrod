"use client"

import { useCartStore } from "@/stores/useCartStore"
import Image from "next/image"
import Link from "next/link"
import { Trash, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KosaricaClient() {
  const { items, removeFromCart, total, decrement, increment, clearCart } =
    useCartStore()

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 pt-40">
      <h1>Tvoja košarica</h1>

      {items.length === 0 ? (
        <div className="text-center pb-10">
          <p className="text-gray-500">Košarica je prazna!</p>
          <Button variant="link" className="text-blue-500">
            <Link href="/proizvodi"> Povratak na stranicu s proizvodima</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex gap-4 items-center border-b pb-4"
            >
              <Image
                src={item.image ?? "/placeholder.png"}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-md object-contain w-40 h-30"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <button
                    disabled={item.quantity < 2}
                    onClick={() => decrement(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm">{item.price.toFixed(2)} €</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}

          <div className="flex justify-between pt-6 border-t text-lg font-semibold">
            <span>Ukupno:</span>
            <span>{total().toFixed(2)} €</span>
          </div>

          <div className="flex justify-between">
            <Button variant="destructive" onClick={clearCart}>
              Isprazni košaricu <Trash />
            </Button>
            <Button>
              <Link href="kosarica/checkout">Zatraži ponudu</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
