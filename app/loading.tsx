import { ShipWheel } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-blue-800">
      <ShipWheel className="w-16 h-16 text-blue-600 mb-4 animate-spin" />
      <p className="text-lg font-semibold">Učitavanje…</p>
    </div>
  )
}
