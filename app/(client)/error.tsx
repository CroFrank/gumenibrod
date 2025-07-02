"use client"

import { useRouter } from "next/navigation"
import { startTransition, useEffect } from "react"

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Sanity data fetch failed:", error)
  }, [error])
  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }
  return (
    <div className="min-h-96 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Došlo je do greške 😞</h2>
      <p className="mb-6">
        Nešto nije u redu. Pokušajte ponovno kasnije. Problem sa dohvaćanjem
        podataka sa servera. Možda je server nedostupan ili je došlo do greške u
        komunikaciji.
      </p>
      <button
        onClick={reload}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Pokušaj ponovno
      </button>
    </div>
  )
}
