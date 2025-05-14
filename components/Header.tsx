"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/80 shadow-md fixed top-0 z-50 w-full backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 tracking-wider">
          <Link href="/products" className="hover:text-blue-600">
            PONUDA
          </Link>
          <Link href="/faq" className="hover:text-blue-600">
            FAQ
          </Link>
          <Link href="/kontakt" className="hover:text-blue-600">
            KONTAKT
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <select className="text-sm border rounded px-2 py-1">
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="hr">HR</option>
          </select>
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Hamburger */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 text-center">
          <nav className="flex flex-col gap-3 text-gray-700 tracking-wider">
            <Link href="/products" className=" hover:text-blue-600">
              PONUDA
            </Link>
            <Link href="/about" className=" hover:text-blue-600">
              FAQ
            </Link>
            <Link href="/contact" className=" hover:text-blue-600">
              KONTAKT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
