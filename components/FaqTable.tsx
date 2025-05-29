"use client"

import { faqs } from "@/lib/data"
import { useState } from "react"

export default function FaqTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="accordion-group space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`accordion py-8 px-6 border border-gray-200 transition-all duration-300 rounded-2xl hover:bg-blue-50 ${
            openIndex === index ? "bg-blue-50" : ""
          }`}
        >
          <button
            className="flex items-center justify-between w-full text-left text-gray-900 hover:text-blue-600 transition font-medium"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <h5 className="text-lg">{faq.question}</h5>
            <svg
              className={`transition-transform duration-300 w-5 h-5 text-gray-500 ${
                openIndex === index ? "rotate-180 text-blue-600" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`mt-4 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[250px]" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-900 leading-6">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
