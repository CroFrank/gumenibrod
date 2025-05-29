import FaqTable from "@/components/FaqTable"

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
