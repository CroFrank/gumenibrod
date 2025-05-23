"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { toast } from "sonner"
import Input from "./Input"

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
        <Input label="Ime" input="ime" />
        <Input label="Vaš email" input="email" type="email" />
        <Input label="Mobitel" input="mobitel" required={false} />
        <Input label="Napomene" input="napomene" textarea />
        <Input checkbox />
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
