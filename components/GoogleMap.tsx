"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export default function GoogleMap() {
  const [showMap, setShowMap] = useState(false)
  return (
    <>
      {!showMap && (
        <div>
          <Button onClick={() => setShowMap(true)}>Prikaži Google kartu</Button>
          <p className="mt-4 text-xs">
            Kartu omogućuje tvrtka Google LLC. Učitavanjem karte, pristajete na
            google-ovu{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-400"
              target="_blank"
            >
              politiku privatnosti
            </a>{" "}
            i{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              className="text-blue-400"
              target="_blank"
            >
              kolačiće
            </a>
            . Više informacija možete pronaći u našoj{" "}
            <a
              href="/politika-privatnosti"
              className="text-blue-400"
              target="_blank"
            >
              politici o privatnosti
            </a>
            .
          </p>
        </div>
      )}

      {showMap && (
        <div className="mt-4 rounded overflow-hidden ">
          <h3 className="text-center font-semibold mb-5">Kako do nas</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.175811874138!2d16.082284557430725!3d45.76275390793831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476679d70b08ad2b%3A0xe89a94a670c975fc!2sGumeni%20Brod%20d.o.o.!5e0!3m2!1sen!2shr!4v1747163370916!5m2!1sen!2shr"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      )}
    </>
  )
}
