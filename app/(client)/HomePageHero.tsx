"use client"

import React from "react"

export default function HomePageHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden mb-10">
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
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-widest bg-gradient-to-b from-blue-400 to-blue-800 text-transparent bg-clip-text">
          GUMENI BROD
        </h1>

        <p className="mb-6 text-lg text-white p-2">
          Široka ponuda gumenih brodova i popratne opreme vrhunske kvalitete
        </p>
        <a
          href="#kontakt"
          className="border-2 border-blue-900 text-blue-950 font-semibold px-6 py-3 rounded hover:bg-blue-600/40 transition hover:scale-105"
        >
          KONTAKT
        </a>
      </div>
    </section>
  )
}
