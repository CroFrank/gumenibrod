import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politika privatnosti | Gumeni brod",
  description:
    "Saznajte kako Gumeni brod prikuplja, koristi i štiti vaše osobne podatke. Vaša privatnost nam je važna.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gumenibrod.hr/politika-privatnosti",
  },
}

export default function PolitikaPrivatnostiPage() {
  return (
    <section className="px-4 py-12 flex flex-col items-center pt-40">
      <h1>POLITIKA PRIVATNOSTI</h1>
      <div className="w-full max-w-7xl bg-white p-8 rounded-2xl shadow-md">
        <p className="text-lg mb-6">
          <span className="text-blue-500 font-semibold">
            Gumeni brod d.o.o.
          </span>{" "}
          posvećen je zaštiti vaše privatnosti. Ova politika privatnosti
          objašnjava kako prikupljamo, koristimo i čuvamo vaše podatke kada
          koristite našu web stranicu.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              1. Prikupljeni podaci
            </h3>
            <p>
              Jedini podaci koje prikupljamo su oni koje nam dobrovoljno
              dostavite putem kontakt forme ili checkout obrasca:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Ime i prezime</li>
              <li>Email adresa</li>
              <li>Broj telefona (ako je unesen)</li>
              <li>Poruka</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              2. Korištenje podataka
            </h3>
            <p>Podatke koristimo isključivo za:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Odgovaranje na upite</li>
              <li>Dogovaranje termina</li>
              <li>Komunikaciju vezanu za naše usluge</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">3. Čuvanje podataka</h3>
            <p>
              Vaši podaci se brišu čim više nisu potrebni za svrhu zbog koje su
              prikupljeni.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              4. Sigurnost podataka
            </h3>
            <p>
              Poduzimamo sve potrebne mjere zaštite kako bismo spriječili
              neovlašteni pristup, zloupotrebu ili gubitak vaših podataka.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">5. Kolačići</h3>
            <h3>Google maps</h3>
            <p>
              Naša web stranica omogućuje korištenje Google Maps usluge, koju
              pruža Google LLC. Ova usluga može postaviti kolačiće trećih strana
              kako bi omogućila funkcionalnost karte. Google Maps na našoj
              stranici nije automatski učitan. Karta se učitava samo ako
              korisnik to izričito odabere klikom na gumb *Učitaj kartu*.
              Prilikom učitavanja, pristajete na Googleove kolačiće i pravila
              privatnosti.
            </p>
            <p>Ti kolačići koriste se za:</p>
            <ul>
              <li>- Omogućavanje pravilnog prikaza interaktivne karte.</li>
              <li>- Pamćenje korisničkih postavki vezanih uz kartu.</li>
              <li>- Poboljšanje funkcionalnosti i korisničkog iskustva.</li>
            </ul>
            <p>Upravljanje kolačićima:</p>
            <p>
              Ako ne učitate Google kartu, kolačići neće biti spremljeni u vaš
              preglednik.
            </p>
            <p>
              Ako ste već prihvatili učitavanje karte i želite obrisati
              kolačiće, možete to učiniti kroz postavke vašeg preglednika.
            </p>
            <p>
              Više informacija o kolačićima koje koristi Google Maps možete
              pronaći na:
            </p>
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-500"
              target="_blank"
            >
              Googleova pravila privatnosti
            </a>{" "}
            i{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              className="text-blue-500"
              target="_blank"
            >
              Googleova pravila o kolačićima
            </a>
            .
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              6. Korištenje lokalne pohrane
            </h3>
            <p>
              Naša web stranica koristi tehnologiju lokalne pohrane preglednika
              (localStorage) za pohranu podataka o vašoj košarici. Ovi podaci ne
              uključuju osobne informacije, već služe isključivo za
              funkcionalnost stranice (npr. zadržavanje stavki u košarici između
              posjeta). Podaci iz lokalne pohrane nisu dijeljeni s trećim
              stranama i automatski se brišu kada očistite predmemoriju
              preglednika.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              7. Korištenje trećih strana
            </h3>
            <p>
              Za slanje poruka putem kontakt forme koristimo uslugu treće strane{" "}
              <a
                href="https://formcarry.com/"
                className="text-blue-500"
                target="_blank"
              >
                Formcarry
              </a>
              . Podaci uneseni u kontakt formu (npr. ime, email, poruka) se
              preko zaštićene veze šalju njihovom serveru i tamo se obrađuju
              kako bi poruka bila dostavljena na našu email adresu.
            </p>
            <p>
              Formcarry može pohraniti tehničke podatke (npr. IP adresu, tip
              preglednika) radi zaštite od neželjenih poruka i zlonamjernog
              korištenja.
            </p>
            <p>
              Više informacija dostupno je u njihovim{" "}
              <a
                href="https://formcarry.com/privacy"
                className="text-blue-500"
                target="_blank"
              >
                pravilima privatnosti
              </a>
              .
            </p>
            <p>
              Koristimo Sanity.io kao platformu za upravljanje sadržajem
              proizvoda i stranica. Ne šaljemo nikakve osobne podatke korisnika
              u ovaj sustav.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">8. Kontakt</h3>
            <p>Ako imate pitanja, kontaktirajte nas:</p>
            <ul className="mt-2">
              <li>
                <a
                  href="mailto:gumenibrod@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  <strong>Email:</strong> gumenibrod@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+385911191091"
                  className="text-blue-500 hover:underline"
                >
                  <strong>Telefon:</strong> +385 91 1191 091
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
