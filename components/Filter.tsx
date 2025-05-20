"use client"

import { useState } from "react"
import { Filter as FunnelIcon, Plus, Minus, X as XMarkIcon } from "lucide-react"
import ProductCard from "./ProductCard"
import { Button } from "./ui/button"
import { Product } from "@/sanity/types"
import { client } from "@/sanity/lib/client"
import { CATEGORIES_QUERY } from "@/sanity/lib/queries"

const initialFilters = [
  {
    name: "asortiman",
    options: [
      { value: "kolibri", label: "Kolibri", checked: false },
      { value: "gala", label: "Gala", checked: false },
      { value: "galaxy", label: "Galaxy", checked: false },
      { value: "adventure", label: "Adventure", checked: false },
    ],
  },
  {
    name: "kategorija",
    options: [
      { value: "motorni", label: "Motorni", checked: false },
      { value: "veslacki", label: "Veslački", checked: false },
      { value: "kanu", label: "Kanu", checked: false },
      { value: "katamaran", label: "Katamaran", checked: false },
    ],
  },
]

export default function FilterPage({ products }: { products: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filtersState, setFiltersState] = useState(initialFilters)
  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (id: string) => {
    setOpenFilters((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleCheckboxChange = (sectionName: string, optionValue: string) => {
    setFiltersState((prevFilters) =>
      prevFilters.map((section) => {
        if (section.name !== sectionName) return section
        return {
          ...section,
          options: section.options.map((opt) =>
            opt.value === optionValue ? { ...opt, checked: !opt.checked } : opt
          ),
        }
      })
    )
  }

  const applyFilters = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedFilters = filtersState.reduce<Record<string, string[]>>(
      (acc, section) => {
        acc[section.name] = section.options
          .filter((opt) => opt.checked)
          .map((opt) => opt.value)
        return acc
      },
      {}
    )
    const test = await client.fetch(CATEGORIES_QUERY, {
      categories: selectedFilters.kategorija,
      brands: selectedFilters.asortiman,
    })
    setFilteredProducts(test)
    setMobileFiltersOpen(false)
  }

  return (
    <div>
      {/* Mobile filter panel */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden bg-black/25">
          <div className="relative ml-auto flex w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <form
              className="mt-4 border-t border-gray-200"
              onSubmit={applyFilters}
            >
              {filtersState.map((section) => (
                <div
                  key={section.name}
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-gray-900"
                    onClick={() => toggleSection(section.name)}
                  >
                    <span className="font-medium uppercase">
                      {section.name}
                    </span>
                    {openFilters[section.name] ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </button>
                  {openFilters[section.name] && (
                    <div className="pt-4">
                      {section.options.map((option, i) => (
                        <div
                          key={option.value}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id={`mobile-${section.name}-${i}`}
                            checked={option.checked}
                            onChange={() =>
                              handleCheckboxChange(section.name, option.value)
                            }
                            className="h-4 w-4 border-gray-300 text-indigo-600"
                          />
                          <label
                            htmlFor={`mobile-${section.name}-${i}`}
                            className="text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button type="submit" className="mx-4">
                Primjeni filtere
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Prikaz proizvoda
          </h1>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters + Content Grid */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop filters */}
            <form className="hidden lg:block" onSubmit={applyFilters}>
              {filtersState.map((section) => (
                <div
                  key={section.name}
                  className="border-b border-gray-200 py-6"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-sm text-gray-900"
                    onClick={() => toggleSection(section.name)}
                  >
                    <span className="font-medium uppercase">
                      {section.name}
                    </span>
                    {openFilters[section.name] ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </button>
                  {openFilters[section.name] && (
                    <div className="pt-4">
                      {section.options.map((option, i) => (
                        <div
                          key={option.value}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={option.checked}
                            id={`${section.name}-${i}`}
                            onChange={() =>
                              handleCheckboxChange(section.name, option.value)
                            }
                            className="h-4 w-4 border-gray-300 text-indigo-600"
                          />
                          <label
                            htmlFor={`${section.name}-${i}`}
                            className="text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button type="submit" className="mt-8">
                Primjeni filtere
              </Button>
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
              {/* Replace with your product grid */}
              <div className="text-gray-500">
                {" "}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 [@media(min-width:1820px)]:grid-cols-4 px-4 justify-center">
                  {filteredProducts.length < 1 ? (
                    <p className="px-10 ">
                      Nema proizvoda u odabranim kategorijama
                    </p>
                  ) : (
                    filteredProducts.map((product) => {
                      return <ProductCard key={product._id} product={product} />
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
