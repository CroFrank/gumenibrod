"use client"

import React from "react"

export default function HomePageHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-widest text-white">
          GUMENI BROD
        </h1>

        <p className="mb-20 text-lg md:text-2xl text-white p-2 tracking-wider">
          Široka ponuda gumenih brodova i popratne opreme vrhunske kvalitete
        </p>
        <a
          href="#kontakt"
          className="border-2 border-white text-white font-semibold px-6 py-3 rounded transition hover:scale-105"
        >
          KONTAKT
        </a>
      </div>
    </section>
  )
}
