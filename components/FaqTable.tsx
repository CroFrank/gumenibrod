"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Koliko trebam čekati na isporuku čamca?",
    answer:
      "Plovila koja imamo na stanju možete preuzeti odmah nakon vidljive uplate, a ukoliko nemamo na stanju, rok isporuke je 20 radnih dana (osim u slučaju izrade plovila po narudžbi gdje vrijeme isporuke može biti i duže)",
  },
  {
    question: "Da li je teško složiti čamac?",
    answer:
      "Ovisno o modelu čamca,  vrijeme potrebno za slaganje je 20 do 40 minuta.",
  },
  {
    question:
      "Što ako izgubim ili potrgam dio čamca? (pod, veslo, sjedalica i dr.)?",
    answer:
      "Kod nas možete kupiti svaki element na vašem čamcu i najčešće imamo sve dijelove na stanju, ukoliko nemamo naručuju se te budu dostavljeni u najkraćem roku.",
  },
  {
    question: "Što ako probušim ili oštetim čamac?",
    answer:
      "Čamac možete dovesti kod nas na servis ili kupiti potrebne dijelove( i ljepilo) te servis odraditi sami.",
  },
  {
    question: "Koliko će mi gumeni čamac trajati?",
    answer:
      "Gumeni čamci mogu trajati i više od 20 godina ovisno o održavanju i skladištenju istog.",
  },
  {
    question: "Koja snaga motora može ići na čamac?",
    answer:
      "Na svakom modelu čamca iskazana su njegovi tehnički podaci kao i preporučena i maksimalna snaga motora za čamac.",
  },
  {
    question: "Koji su načini plaćanja?",
    answer:
      "Kartično plaćanje(obročno ili jednokratno), gotovinsko i transakcijsko.",
  },
  {
    question: "Dolazi li uz čamac sva potrebna dokumentacija za registraciju?",
    answer:
      "Uz svaki naš čamac dolaze Izjave o sukladnosti (certifikat) na hrvatskom i engleskom jeziku kao i prateće dokumenete o samom plovilu (upute za rukovanje, knjižica sa garancijama) i račun. Potrebno je još ovisno o vrsti plovila kupiti kod nas i opremu koja je propisana Pravilnikom o brodicama (konop, sidro, prva pomoć, signalna lamapa..)",
  },
  {
    question: "Što spada u 3 godine garancije?",
    answer:
      "Garancija se odnosi na postojanost materijala i sve spojeve na čamcu, na ostale dijelove i dodatke na čamcu garancija je 1 godinu.",
  },
]

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
