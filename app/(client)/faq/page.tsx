"use client"

import { useState } from "react"

const faqs = [
  {
    question: "How do I update my billing information?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed quo expedita consequuntur! Saepe, dignissimos. Tempora veritatis in earum ullam.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nostrum!",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illo!",
  },
  {
    question: "How do I find my purchase history?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique consequuntur molestiae ut incidunt? Inventore illum autem et repellat officia!",
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1>Najčešće postavljana pitanja</h1>
        </div>

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
                <p className="text-base text-gray-900 leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
