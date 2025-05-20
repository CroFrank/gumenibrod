"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { toast } from "sonner"

export default function KontaktForma() {
  const [loading, setLoading] = useState(false)
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
        toast.error("Greška prilikom slanja poruke. Pokušajte ponovo kasnije.")
      } else {
        toast.success("Poruka je uspješno poslana!")
      }
    } catch (error) {
      console.log("Error sending form data:", error)
      toast.error("Greška prilikom slanja poruke. Pokušajte ponovo kasnije.")
    } finally {
      formRef.current.reset()
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" ref={formRef} onSubmit={sendFormData}>
      <h2 className="text-xl font-semibold mb-10">Kontakt Forma</h2>
      <fieldset disabled={loading} className="space-y-6">
        <div>
          <label htmlFor="ime" className="block font-medium text-gray-700">
            Ime
          </label>
          <input
            name="ime"
            type="text"
            id="ime"
            required
            aria-label="Ime"
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Vaša email adresa{" "}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            aria-label="email"
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="poruka" className="block font-medium text-gray-700">
            Poruka
          </label>
          <textarea
            name="poruka"
            id="poruka"
            aria-label="poruka"
            rows={5}
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mt-6 flex items-start">
          <input
            type="checkbox"
            name="privatnost"
            aria-label="politika privatnosti"
            className="mr-2 w-5 h-5 bg-gray-700 border-gray-600 rounded"
            required
          />
          <label className="text-gray-700">
            Slažem se s{" "}
            <a href="/politika-privatnosti" className="text-blue-500 underline">
              politikom privatnosti
            </a>
          </label>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-4 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Slanje..." : "Pošalji"}
        </Button>
      </fieldset>
    </form>
  )
}
