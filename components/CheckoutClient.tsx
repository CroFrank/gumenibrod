"use client"

import { useCartStore } from "@/stores/useCartStore"
import Image from "next/image"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Input from "@/components/Input"
import { toast } from "sonner"
import Link from "next/link"


export default function CheckoutClient() {
  const { items, total, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const [afterSuccess, setAfterSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (!formRef.current) {
      console.log("something wrong with form ref")
      setLoading(false)
      return
    }

    const formData = new FormData(formRef.current)

    try {
      const response = await fetch("https://formcarry.com/s/LfLVKBLl9CS", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      if (!response.ok) {
        toast.error("Error! Pokušajte ponovno kasnije.")
      } else {
        toast.success("Upit poslan, javit ćemo se ubrzo.")
        formRef.current.reset()
        clearCart()
        setAfterSuccess(true)
      }
    } catch (error) {
      toast.error("Error! Pokušajte ponovno kasnije.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 pt-40 space-y-10">
      <h1>Zatraži ponudu</h1>
      {afterSuccess ? (
        <div className="text-center pb-10">
          <p className="text-gray-500">Hvala!</p>
          <Button variant="link" className="text-blue-500">
            <Link href="/">Povratak na naslovnicu</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Image
                  src={item.image ?? "/placeholder.png"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded object-contain w-20 h-20"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    Količina: {item.quantity} x {item.price.toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
            <div className="text-right font-semibold">
              Ukupno: {total().toFixed(2)} €
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendFormData}
            className="space-y-4 border-t pt-6"
          >
            <input
              type="hidden"
              name="proizvodi"
              value={items
                .map(
                  (item) =>
                    `• ${item.title} — ${item.quantity} kom × ${item.price.toFixed(2)} €`
                )
                .join("\n")}
            />
            <input
              type="hidden"
              name="ukupan-iznos"
              value={total().toFixed(2)}
            />

            <Input label="Ime i prezime" input="ime" />
            <Input label="Vaš email" input="email" type="email" />
            <Input label="Mobitel" input="mobitel" required={false} />
            <Input
              label="Napomene"
              input="napomene"
              required={false}
              placeholder="npr. Vrsta poda, boja, dodatna oprema..."
              textarea
            />
            <Input checkbox />

            <Button
              type="submit"
              disabled={loading}
              className="mt-4 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Slanje..." : "Pošalji upit"}
            </Button>
          </form>
        </>
      )}
    </section>
  )
}
