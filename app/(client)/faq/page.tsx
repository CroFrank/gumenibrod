import FaqTable from "@/components/FaqTable"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Česta pitanja (FAQ) | Sve što trebate znati - Gumeni brod",
  description:
    "Odgovori na najčešća pitanja o gumenim čamcima, dostavi, jamstvu, održavanju i opremi. Informirajte se i kupujte s povjerenjem na Gumeni brod.",
}

export default function FaqPage() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1>Najčešće postavljana pitanja</h1>
          <FaqTable />
        </div>
      </div>
    </section>
  )
}
